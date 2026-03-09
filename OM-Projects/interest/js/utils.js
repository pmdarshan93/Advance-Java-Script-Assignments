 // ------------- Session PubSub ------------- 
class EventBus {
constructor(initial = {}) {
this.paths = {};
}
subscribe(path, callback) {
if (!this.paths[path]) this.paths[path] = [];
this.paths[path].push(callback);
return () => this.unsubscribe(path, callback);
}
unsubscribe(path, callback) {
if (!this.paths[path]) return;
this.paths[path] = this.paths[path].filter(cb => cb !== callback);
}
publish(path, data) {
if (!this.paths[path]) return;
this.paths[path].forEach(cb => cb(data));
}}
function getAllSegments(segmentsMap) {
if (!segmentsMap || !segmentsMap.size) return [];
return Array.from(segmentsMap.values());
}
function buildSegmentPath(segmentsMap) {
const segments = getAllSegments(segmentsMap);
if (!segments.length) return "/";
let path = "";
for (const seg of segments) {
if (!seg || !seg.name || !seg.value) continue;
path += `/${seg.value}`;
}
return path || "/";
}
class Router {
constructor(store) {
this._store = store;
this._routes = new Map();        // stateKey → queryParam
this._unsubs = [];
this._updateTimeout = null;
this.additionalParams = {};           // unknown user params
window.addEventListener("popstate", () => this._syncFromUrl());
this._syncFromUrl();
}
register(stateKey) {
if (this._routes.has(stateKey)) return;
const queryParam = stateKey.replace(/\./g, "_");
this._routes.set(stateKey, queryParam);
// subscribe to store changes → update URL
const unsub = this._store.subscribe(stateKey, () => this._updateUrl());
this._unsubs.push(unsub);
// sync initial
// this._syncFromUrl();
this._updateUrl();
}
_syncFromUrl() {
const params = new URLSearchParams(window.location.search);
const hashParams  = new URLSearchParams(window.location.hash.slice(1));
const known = new Set();
// sync known params into store
for (let [stateKey, param] of this._routes.entries()) {
const isTransient = stateKey.endsWith(".hovered") || stateKey.endsWith(".pressed");
const val = this._store.getState(stateKey);
if (isTransient) {
if (val === true) {
params.set(param, "true");
} else {
params.delete(param);
}
this._syncSingle(stateKey, param, params);
continue;
}
known.add(param);
this._syncSingle(stateKey, param, params);
}
// extract unknown params
this.additionalParams = {};
for (const [key, value] of params.entries()) {
if (!known.has(key)) {
this.additionalParams[key] = value;
}}
for (const [key, value] of hashParams.entries()) {
    if (!known.has(key)) this.additionalParams[key] = value;
}
// --- save extra params ---
if (Object.keys(this.additionalParams).length > 0) {
localStorage.setItem("router_extraParams", JSON.stringify(this.additionalParams));
} else {
localStorage.removeItem("router_extraParams");
}}
_syncSingle(stateKey, param, params) {
const raw = params.get(param);
if (raw === null) return;
const current = this._store.getState(stateKey);
let parsed = raw;
let valid = true;
if (typeof current === "number") {
parsed = Number(raw);
if (isNaN(parsed)) valid = false;
else if (parsed === current) return;
}
else if (typeof current === "boolean") {
if (raw === "true" || raw === "false") {
parsed = raw === "true";
if (parsed === current) return;
} else {
valid = false;
}}
else {
if (parsed === current) return;
}
if (valid) {
this._store.setState(stateKey, parsed);
} else {
// remove invalid known param from URL
params.delete(param);
window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
}}
_updateUrl() {
clearTimeout(this._updateTimeout);
this._updateTimeout = setTimeout(() => {
const params = new URLSearchParams(window.location.search);
// write router-managed params
for (const [stateKey, param] of this._routes.entries()) {
const isTransient = stateKey.endsWith(".hovered") || stateKey.endsWith(".pressed");
if (isTransient) {
const val = this._store.getState(stateKey);
if (val === true) {
params.set(param, "true");
} else {
params.delete(param);
}
continue;
}
const val = this._store.getState(stateKey);
if (val === undefined || val === null || typeof val === "object" || val === "") {
params.delete(param);
} else {
params.set(param, val);
}}
// --- restore extra params ---
const saved = localStorage.getItem("router_extraParams");
if (saved) {
const extra = JSON.parse(saved);
for (const [key, value] of Object.entries(extra)) {
if (!params.has(key)) {
params.set(key, value);
}}}
// restore unknown params
// for (const [key, value] of Object.entries(this.additionalParams)) {
// if (!params.has(key)) params.set(key, value);
//}
const segments_path = buildSegmentPath(appContext.segments);
const queryString = params.toString();
const routePath = segments_path === "/" ? "" : segments_path;
const newURL = `${routePath}/?${queryString}`;
// Compare full URL with current location
if (window.location.pathname + window.location.search === newURL) return;
window.history.replaceState({}, "", newURL);
}, 60);  // 60ms = faster + still safe
}
destroy() {
this._unsubs.forEach(fn => fn && fn());
this._unsubs = [];
}}
class Store {
constructor(initialState = {}) {
this.state = initialState;
this.bus = new EventBus();
this.router = new Router(this);
}
getState(path) {
if (!path) return this.state;
return path.split('.').reduce((s, key) => s?.[key], this.state);
}
setState(path, value) {
const keys = path.split('.');
let obj = this.state;
for (let i = 0; i < keys.length - 1; i++) {
if (!obj[keys[i]]) obj[keys[i]] = {};
obj = obj[keys[i]];
}
obj[keys[keys.length - 1]] = value;
// Notify subscribers
this.bus.publish(path, value);
// Auto-register the full path in router
if (this.router && !this.router._routes.has(path)) {
this.router.register(path);
}
}
subscribe(path, callback) {
return this.bus.subscribe(path, callback);
}
getAllState() {
// shallow clone so external code doesn’t mutate internal state
return { ...this.state };}
deleteState(path) {
if (!path) return;
const keys = path.split('.');
let obj = this.state;
for (let i = 0; i < keys.length - 1; i++) {
if (!obj[keys[i]]) return; // path doesn’t exist
obj = obj[keys[i]];
}
const lastKey = keys[keys.length - 1];
if (obj && lastKey in obj) {
delete obj[lastKey];
// Notify subscribers that this key is now undefined
this.bus.publish(path, undefined);
// Optionally, remove from router-managed params
if (this.router && this.router._routes.has(path)) {
this.router._routes.delete(path);
this.router._updateUrl(); // update URL immediately
}}}}

 // ------------- State PubSub ------------- 
class PubSubTracker {
constructor() {
this.subscribers = new Map(); // key → Set(callbacks)
}
subscribe(key, callback) {
if (!this.subscribers.has(key)) this.subscribers.set(key, new Set());
this.subscribers.get(key).add(callback);
return () => this.unsubscribe(key, callback);  // return remover
}
unsubscribe(key, callback) {
const set = this.subscribers.get(key);
if (!set) return;
set.delete(callback);
if (set.size === 0) {
this.subscribers.delete(key);
}}
notify(key, event, data) {
const set = this.subscribers.get(key);
if (!set) return;
for (const fn of set) {
try {
fn(event, data);
} catch (err) {
console.error("PubSub error:", err);
}}}
_initSubscription(key, stateId, callback, this_reference) {
if (!this_reference._subscriptionRegistry.has(key)) {
this_reference._subscriptionRegistry.set(key, {
callbacks: new Set(),
subscribed: false
});}
const entry = this_reference._subscriptionRegistry.get(key);
// attach callback
if (callback) entry.callbacks.add(callback);
// subscribe once
if (!entry.subscribed) {
entry.subscribed = true;
const remover = appContext.state_tracker.subscribe(stateId, () => {
for (const cb of entry.callbacks) {
if (cb) this_reference._renderQueue.enqueue([cb]);}});
this_reference._subscriptions.push(remover);}}}
class InstanceManager {
constructor(pubsub, classMap) {
this.pubsub = pubsub;
this.classRegistry = new Map(Object.entries(classMap));
this.instances = new Map();
}
// ------------------------------------------------
// CREATE
// ------------------------------------------------
create(className, ...args) {
const ctor = this.classRegistry.get(className);
if (!ctor) throw new Error(`Unknown class: ${className}`);
const instance = new ctor(...args);
return instance;
}
// ------------------------------------------------
// SIMPLE COMBINED DELETE (deep remove + registry)
// ------------------------------------------------
deleteInstance(instance, target = null) {
if (!instance?.__id) return false;
const id = instance.__id;
let removed = false;
// --- deep remove from nested structure ---
function deepRemove(obj) {
if (Array.isArray(obj)) {
for (let i = obj.length - 1; i >= 0; i--) {
const item = obj[i];
if (item === instance || item?.__id === id) {
obj.splice(i, 1);
removed = true;
continue;
}
if (item && typeof item === "object") deepRemove(item);
}
} else if (obj && typeof obj === "object") {
for (const key in obj) {
const val = obj[key];
if (val && typeof val === "object") deepRemove(val);
}}}
if (target) deepRemove(target);
// --- remove from instance registry ---
this.instances.delete(id);
// --- save ---
this._save();
return removed;
}
// ------------------------------------------------
// UPDATE INSTANCE
// ------------------------------------------------
updateInstance(instance) {
if (!instance?.__id) return;
this._save();
}
// ------------------------------------------------
// SAVE
// ------------------------------------------------
_save() {
const plain = {};
for (const [id, inst] of this.instances) {
plain[id] = {
className: inst.constructor.name,
data: inst.toJSON(),
container: inst.getParent()
};
}
sessionStorage.setItem("instances", JSON.stringify(plain));
}
// ------------------------------------------------
// LOAD
// ------------------------------------------------
load() {
const saved = sessionStorage.getItem("instances");
if (!saved) return null;
try {
const parsed = JSON.parse(saved);
this.instances.clear();
for (const [id, { className, data, container }] of Object.entries(parsed)) {
const ctor = this.classRegistry.get(className);
if (!ctor?.fromJSON) continue;
const inst = ctor.fromJSON(data);
inst.__id = id;
inst.setParent(container);
this.instances.set(id, inst);
}
return this.instances;
} catch (e) {
console.error("Failed to load:", e);
return null;
}}}
function setContainerRecursively(parent, childKeys) {
if (!parent || !childKeys || childKeys.length === 0) return;
childKeys.forEach(key => {
if (Array.isArray(parent[key])) {
parent[key].forEach(child => {
child.setParent(parent); // set reference
// Recursively set container for child's children
setContainerRecursively(child, child.dynamic());
});}});}
function restoreInstances(obj, ClassType, key) {
if (!obj || typeof obj !== "object") return obj;
if (Array.isArray(obj)) {
return obj.map(item => restoreInstances(item, ClassType, key));
}
if (obj[key] && Array.isArray(obj[key])) {
obj[key] = obj[key].map(item => {
if (item instanceof ClassType) return item;
if (typeof ClassType.fromJSON === "function") return ClassType.fromJSON(item);
return Object.assign(new ClassType(), item);
});
}
return obj;
}
function removeByInstance(target, instance) {
if (!instance) return false;
const id = instance.__id;
let removed = false;
function deepRemove(obj) {
if (Array.isArray(obj)) {
for (let i = obj.length - 1; i >= 0; i--) {
const item = obj[i];
if (item === instance || item?.__id === id) {
obj.splice(i, 1);
removed = true;
continue;
}
if (item && typeof item === "object") deepRemove(item);
}
} else if (obj && typeof obj === "object") {
for (const key in obj) {
const val = obj[key];
if (Array.isArray(val) || (val && typeof val === "object")) {
deepRemove(val);
}}}}
deepRemove(target);
return removed;
}
 // ------------- Render Queue ------------- 
class RenderQueue {
constructor() {
this.queue = new Set();
this.pending = false;   // microtask scheduled
this.scheduled = false; // rAF scheduled
}
enqueue(cb) {
this.queue.add(cb);
// Schedule microtask only once per tick
if (!this.pending) {
this.pending = true;
queueMicrotask(() => this._scheduleFrame());
}}
_scheduleFrame() {
this.pending = false;
if (!this.scheduled) {
this.scheduled = true;
requestAnimationFrame(() => this.flush());
}}
flush() {
this.queue.forEach(cb => {
if (Array.isArray(cb)) cb.forEach(fn => {fn?.();})
});
this.queue.clear();
this.scheduled = false;
}}

// NOTE : the below function is specifically for visible? and visible?_
function _getFileContentAsNode(fileName, callback) {
    let n = fileName.split("/").filter(fileName => "" != fileName)[1];
    let i = json.files_and_folders.filter(fileName => fileName.name == n)[0].content
    const container = document.createElement('div');
    container.innerHTML = i;
    setTimeout(() => {
        traverseAndExecute(container);
        const node = container.firstChild;
        callback(node);
    }, 0)
}
function removeColectionLayouts(layout) {
    const children = Array.from(layout.children);
    for (const child of children) {
        if (child.getAttribute("is_layout_ref") !== "true") {
            layout.removeChild(child);
        }
    }
}
 // -------------  String Utils  ------------- 
Object.defineProperty(String.prototype, 'toPascalCase', {
value: function () {
return this.split('_')
.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
.join('');
},
enumerable: false
});








        
function trimSuffix(str, suffix) {
if (!suffix) return str;
while (str.endsWith(suffix)) {
str = str.slice(0, -suffix.length);
}
return str;
}
 // ------------- Array Utils ------------- 
function sumArray(array) {
let sum = 0;
for (let i = 0; i < array.length; i++) {
sum += array[i];
}
return sum;
}
 // -------------  Additional utils for App UI Context  ------------- 
async function pre_defined_traverseAndExecute() {
for (const element of [appContext.rootElement.children[0].children[0], appContext.rootElement.children[0]]){
if (element.hasAttribute('onload_')) { //NO I18N
await executeHandler(element.getAttribute('onload_'), element); //NO I18N
}
if (element.obj !== undefined && element.obj !== null) {
element.obj.initUI?.();
}}}
async function traverseAndExecute(element) {
if (element.hasAttribute('onload_')) { //NO I18N
await executeHandler(element.getAttribute('onload_'), element); //NO I18N
}
await Promise.all(Array.from(element.children).map(child => traverseAndExecute(child)));
if(element.obj !== undefined && element.obj !== null) {
    element.obj.initUI?.();
    element.obj.layeredElementUpdateUI?.(true);
}}
async function traverseAndDestroy(element) {
for (const child of Array.from(element.children)) {
await traverseAndDestroy(child);
}
element.obj?.destroy?.();
// if (element.parentNode) {
// element.remove();
// }
}
async function executeHandler(handlerName, element) {
if (handlerName && typeof window[handlerName] === 'function') { //NO I18N
const result = window[handlerName](element);
if (result instanceof Promise) {
return await result;
}
return result;
}}

function _updateLayerInfo_(event) {
if (appContext._layered_elements_?.length) {
for (const layout of appContext._layered_elements_) {
layout.layeredElementUpdateUI();
}}
}
function assignInstanceID(el, className) {
if (!el.__uniq_id) {
el.__uniq_id = `${_globalInstanceID++}`; // no className
}
return el.__uniq_id;
}
function assignStateInstanceID() {
return`state_instance_${_globalStateInstanceID++}`;
}       
// -------------  Node Traversal  ------------- 
/**
* Finds the nearest elements that match a selector, one level per branch.
* - Starts from a parent element.
* - Looks at its children.
* - If any child matches, adds them to the result.
* - Does NOT go deeper inside those matched elements.
* - If no child matches, continues searching deeper in the tree.
* - Example
* - .radio.option#(.radio.selected)
**/
function findNearestMatchesPerBranch(parent, selector) {
const results = [];
function search(node) {
if (!node || !node.children) return;
// Check direct children
const directMatches = Array.from(node.children).filter(child => child.matches(selector));
if (directMatches.length) {
// If matches found at this level, add them and do NOT go deeper
results.push(...directMatches);
} else {
// Otherwise, search recursively in each child
Array.from(node.children).forEach(child => search(child));
}
}
search(parent);
return results;
}
function findByAssoRef(element, refValue) {
for (const el of element.getElementsByTagName('*')) {
if (el.getAttribute('asso_wid_ref_') === refValue) {
return el;
}}
return null;
}
function toDate(str) {
const parts = str.split(/[-]/).map(Number);
if (parts.length !== 3) { 
alert("Invalid date. Enter the date in YYYY-MM-DD format")
throw new Error("Invalid date"); 
}
const [year, month, day] = parts;
const date = new Date(year, month - 1, day);
const isValid = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
if (!isValid) {
alert("Invalid date. Enter the date in YYYY-MM-DD format")
throw new Error("Invalid date"); 
}
return newDate(date);
}
function newDate(date = new Date()) {
const y = date.getFullYear();
const m = String(date.getMonth() + 1).padStart(2, '0');
const d = String(date.getDate()).padStart(2, '0');
return `${y}-${m}-${d}`;
}
const QuillDeltaToHtmlConverter = window.QuillDeltaToHtmlConverter;
    function load_rte(element) {
        if (typeof Quill !== 'undefined') {
            const options = [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
            ];
            try {
            var quill = new Quill(element, { theme: 'snow', modules: { toolbar: options } });
            element.quill = quill;
            } catch (error) {
            }
        }
    }
    function getQuillData(element) {
        if (element.quill === undefined) {
            quill_editor = element.querySelector('.editor'); 
            return quill_editor.quill
        }
        return element.quill;
    }
    function getQuillToDelta(element) {
        var ele_quill = getQuillData(element);
        const delta_data = ele_quill.getContents();
        const delta_string = JSON.stringify(delta_data);
        return delta_string;
    }
    function getQuillToText(element) {
        var ele_quill = getQuillData(element);
        var quill_len = ele_quill.getLength();
        return ele_quill.getText(0, quill_len);
    }
    function getHtml(encodedString, images) {
        const decodedString = decodeURIComponent(encodedString);
        const quillContent = JSON.parse(decodedString);
        const qHTML = new QuillDeltaToHtmlConverter(quillContent.ops, {});
        const htmlContent = qHTML.convert();
        const divElement = document.createElement('div');
        divElement.innerHTML = htmlContent;
        const imgTags = divElement.querySelectorAll('img');
        imgTags.forEach(imgTag => {
            if (imgTag.src.startsWith('unsafe:')) {
                const number = imgTag.src.match(/^unsafe:(\\d+)$/)?.[1];
                if (number) {
                    const matchingImage = images.find(image => image.id === Number(number));
                    if (matchingImage) {
                        imgTag.src = 'data:' + matchingImage.image_type + ';base64,' + matchingImage.inline_image;
                    }
                }
            }
        });
        const preTags = divElement.querySelectorAll('pre');
        preTags.forEach(preTag => {
            const preContent = preTag.textContent;
            const lines = preContent.split('\\n');
            const wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'code-block';
            const table = document.createElement('table');
            table.className = 'rt-code_block-table';
            lines.forEach((line, index) => {
                const tr = document.createElement('tr');
                tr.className = 'rt-code_block-table_row';
                const lineNumberTd = document.createElement('td');
                lineNumberTd.className = 'hljs-ln-line hljs-ln-numbers';
                lineNumberTd.textContent = index + 1;
                const contentTd = document.createElement('td');
                contentTd.className = 'hljs-ln-line hljs-ln-code';
                contentTd.innerHTML = line
                    .replace(/ /g, '&nbsp;')
                    .replace(/\\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
                tr.appendChild(lineNumberTd);
                tr.appendChild(contentTd);
                table.appendChild(tr);
            });
            wrapperDiv.appendChild(table);
            preTag.replaceWith(wrapperDiv);
        });
        return divElement;
    }
function updateZIndex() {
    let _layered_elements = appContext._layered_elements_.filter(el => {return el._el instanceof  Element}).map(el => el._el);
    let _stacking_order = appContext._stacking_order_.flat(Infinity)
    if (_layered_elements.length == 0 || _stacking_order.length == 0) return;
    if (!Array.isArray(_layered_elements) || !Array.isArray(_stacking_order)) {
        throw new Error("Inputs must be arrays");
    }
    const stacking = [...new Set(_stacking_order)];
    const base = _layered_elements.filter(el => !stacking.includes(el));
    const prioritized = [...stacking].reverse();
    const ordered = [...base, ...prioritized];
    ordered.forEach((el, idx) => {
        if (!el || !el.style) {
            return
        };
        el.style.zIndex = idx + 1;
    });
    return ordered;
}