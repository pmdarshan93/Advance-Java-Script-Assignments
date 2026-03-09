

let calculator_; // -- global variable for module
class Calculator{



#__id;
#__calculator_state_uniq_id;
constructor(){
this._subscriptionRegistry = new Map();   // key → { set, subscribed }
this._subscriptions = [];


this.#__calculator_state_uniq_id = assignStateInstanceID();
this._renderQueue = appContext.renderQueue;
}
dynamic(){return []};
setParent(val){};
getParent(){};
setUniqFields(){
this.#__id = Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 5);
}





set __id(val){this.#__id = val;}
get __id(){return this.#__id;}
set __calculator_state_uniq_id(val){this.#__calculator_state_uniq_id = val;}
get __calculator_state_uniq_id(){return this.#__calculator_state_uniq_id;}
toJSON() {
return{
__id : this.#__id
};
}
static fromJSON(json) {

const return_instance = new Calculator();
return_instance.__id = json.__id;
return return_instance;
}

destroy() {
// call all stored unsubscribers
for (const unsub of this._subscriptions) unsub();
if (this._all_project_seq_call_back) {
this._all_project_seq_call_back.clear();
}
}
}

const classMap = {Calculator};
let _globalInstanceID = 1;
let _globalStateInstanceID = 1;
class AppContext {
constructor() {
this.rootStyles_ = getComputedStyle(document.documentElement);
this.rootElement = document.querySelector('body');
this._cache_images_ = true;
this._layered_elements_ = [];
this._stacking_order_ = [];
this._zoom_factor_ = 1;
this._skeleton_containers_ = [];
// Utils Global Variables
this.store = new Store();
this.renderQueue = new RenderQueue();
this.instances = new WeakMap();
this.state_tracker = new PubSubTracker();
this.segments = new Map();
this.manager = new InstanceManager(this.state_tracker, classMap, "app_root");
// Auto-cleanup
this._observeDOM();
this.last_clicked = undefined;
this._installGlobalOffClick();

}
_installGlobalOffClick() {
if (this._offClickInstalled) return;
document.addEventListener("click", (e) => {
if (this.last_clicked) {
if (!this.last_clicked._el.contains(e.target)) {
this.last_clicked._onMouseOffClick?.();
}}
this.last_clicked = undefined;
});
this._offClickInstalled = true;
}
setLastClicked(element) {
this.last_clicked?._onMouseOffClick?.();
this.last_clicked = this.last_clicked !== element ? element : undefined;
return element;
}
register(el, instance) {
this.instances.set(el, instance);
}
_observeDOM() {
const observer = new MutationObserver((mutations) => {
for (const mutation of mutations) {
for (const removedNode of mutation.removedNodes) {
if (removedNode instanceof Element) {
this._cleanupNode(removedNode);
removedNode.querySelectorAll('*').forEach(child => {
this._cleanupNode(child);
});
}}
}});
observer.observe(document.body, { childList: true, subtree: true });
}
// helper method
_cleanupNode(node) {
const instance = this.instances.get(node);
if (instance && typeof instance.destroy === 'function') {
instance.destroy(); // unsubscribe, remove listeners, etc
}
this.instances.delete(node);
}
constants_i18n = {}
}
// Create a single instance in global scope
const appContext = new AppContext();
function main(){
let root_instances = appContext.manager.load();
if (root_instances && root_instances.size > 0) {
calculator_ = [...root_instances.values()]
.find(i => i.constructor.name === "Calculator");
setContainerRecursively(calculator_, calculator_.dynamic());
}else{

}
let callPreDefinedTraverseAndExecute = (async() => {
if (appContext.rootElement) {await pre_defined_traverseAndExecute();}
})();

}
window.addEventListener("load", async () => {
appContext._id_str = 275582;
main();
if (appContext.rootElement) { await traverseAndExecute(appContext.rootElement.children[0].children[0]);}


let v_55685_1 = "open_sans".toPascalCase();

let v_55678_1 = ["https://om-ui.lzstratus.com/fonts/", v_55685_1, ".ttf"];
let v_55677_1 = v_55678_1.join("");
try{let fontSet = [["open_sans", v_55677_1]];
await Promise.all(fontSet.map(([family, url]) => loadFont(family, url)));}
catch(e){console.error('Error loading fonts:', e);}
requestAnimationFrame(()=>{_updateLayerInfo_();})
});
window.addEventListener('resize', e => _updateLayerInfo_?.(e));