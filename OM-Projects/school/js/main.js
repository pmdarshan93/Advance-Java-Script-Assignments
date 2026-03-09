

let school_; // -- global variable for module
class School{

#class_seq;
#__class_seq_state_uniq_id;
#__id;
#__school_state_uniq_id;
constructor(class_seq){
this._subscriptionRegistry = new Map();   // key → { set, subscribed }
this._subscriptions = [];
this.#class_seq = class_seq;
this.#__class_seq_state_uniq_id= assignStateInstanceID();
this.#__school_state_uniq_id = assignStateInstanceID();
this._renderQueue = appContext.renderQueue;
}
dynamic(){return ["class_seq"]};
setParent(val){};
getParent(){};
setUniqFields(){
this.#__id = Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 5);
}
set class_seq(val){this.#class_seq = val;}
get class_seq(){return this.#class_seq;}
class_seqCB(_call_back = null){
appContext.state_tracker._initSubscription("class_seq", this.__class_seq_state_uniq_id, _call_back, this);
}
set __class_seq_state_uniq_id(val){this.#__class_seq_state_uniq_id = val;}
get __class_seq_state_uniq_id(){return this.#__class_seq_state_uniq_id;}
set __id(val){this.#__id = val;}
get __id(){return this.#__id;}
set __school_state_uniq_id(val){this.#__school_state_uniq_id = val;}
get __school_state_uniq_id(){return this.#__school_state_uniq_id;}
toJSON() {
return{
class_seq: this.#class_seq?.map(element => element.toJSON()),
__id : this.#__id
};
}
static fromJSON(json) {
const class_seq = json.class_seq.map(item => SchoolClassSeq.fromJSON(item));
const return_instance = new School(class_seq);
return_instance.__id = json.__id;
return return_instance;
}
all_class_seq (_call_back = null) {
let school = this;


let v_8868462_1 = school_?.class_seq;
school_?.class_seqCB(_call_back);


school_?.class_seqCB(_call_back);
appContext.state_tracker._initSubscription("all_class_seq", school.__class_seq_state_uniq_id, _call_back, this);

return v_8868462_1;
}
get_class_by_name_seq (_call_back = null, name) {
let school = this;


let v_8898475_1_actual_seq = school_?.class_seq;
school_?.class_seqCB(_call_back);
let filteredResult = [];
for(let [_, c] of v_8898475_1_actual_seq.entries()){


let v_8898486_1 = c?.name;
c?.nameCB(_call_back);



let v_8898492_1 = v_8898486_1==name;
if(v_8898492_1) filteredResult.push(c);
};
let v_8898475_1 = filteredResult;

school_?.class_seqCB(_call_back);
appContext.state_tracker._initSubscription("get_class_by_name_seq", school.__class_seq_state_uniq_id, _call_back, this);

return v_8898475_1;
}
add_student (_call_back = null, name, dob, class_name, father, email) {
let school = this;
try {




let student_seq = appContext.manager.create("ClassSeqStudentSeq", name, dob, father, email);
student_seq.setUniqFields();
appContext.manager.instances.set(student_seq.__id, student_seq);


let v_8918530_1 = school_?.get_class_by_name_seq(_call_back, class_name);



v_8918530_1 = v_8918530_1[1 - 1]

student_seq.setParent(v_8918530_1);
v_8918530_1.student_seq.push(student_seq);
appContext.state_tracker.notify(v_8918530_1.__student_seq_state_uniq_id);

appContext.manager._save();

} catch (err) {

}




}
get_teacher (_call_back = null, class_name) {
let school = this;
const v_9028567 =  () => {

return true;
}
let v_9038569_1 =  (() => { 
if(v_9028567()){



let v_9038571_1 = school_?.class_seq;
school_?.class_seqCB(_call_back);


v_9038571_1 = v_9038571_1[1 - 1]


let v_9038600_1 = v_9038571_1?.class_teacher;
v_9038571_1?.class_teacherCB(_call_back);


return v_9038600_1;
}
})();
let v_9028604_1 = v_9038569_1;

appContext.state_tracker._initSubscription("get_teacher", this.#__school_state_uniq_id, _call_back, this);

return v_9028604_1;
}
add_class (_call_back = null, name, id, class_teacher) {
let school = this;
try {




let v_9098639_1 = [];
let class_seq = appContext.manager.create("SchoolClassSeq", id, name, class_teacher, v_9098639_1);
class_seq.setUniqFields();
appContext.manager.instances.set(class_seq.__id, class_seq);

class_seq.setParent(school_);
school_.class_seq.push(class_seq);
appContext.state_tracker.notify(school_.__class_seq_state_uniq_id);

appContext.manager._save();

} catch (err) {

}




}
fname (_call_back = null, name) {
let school = this;


appContext.state_tracker._initSubscription("fname", this.#__school_state_uniq_id, _call_back, this);

return name;
}
student_list_seq (_call_back = null, class_name) {
let school = this;


let v_9138661_1_actual_seq = school_?.class_seq;
school_?.class_seqCB(_call_back);
let filteredResult = [];
for(let [_, c] of v_9138661_1_actual_seq.entries()){


let v_9138672_1 = c?.name;
c?.nameCB(_call_back);



let v_9138678_1 = v_9138672_1==class_name;
if(v_9138678_1) filteredResult.push(c);
};
let v_9138661_1 = filteredResult;

let v_9138687_1 = [];
for (let v_9138687_1_ of v_9138661_1) {
v_9138687_1.push(v_9138687_1_.all_students_seq(_call_back));
}
let v_9138692 = v_9138687_1.flat();

appContext.state_tracker._initSubscription("student_list_seq", this.#__school_state_uniq_id, _call_back, this);

return v_9138692;
}
destroy() {
// call all stored unsubscribers
for (const unsub of this._subscriptions) unsub();
if (this._all_project_seq_call_back) {
this._all_project_seq_call_back.clear();
}
}
}

class SchoolClassSeq{
#school;
#id;
#name;
#class_teacher;
#student_seq;
#__id_state_uniq_id;
#__name_state_uniq_id;
#__class_teacher_state_uniq_id;
#__student_seq_state_uniq_id;
#__id;

constructor(id, name, class_teacher, student_seq){
this._subscriptionRegistry = new Map();   // key → { set, subscribed }
this._subscriptions = [];
this.#id = id;
this.#name = name;
this.#class_teacher = class_teacher;
this.#student_seq = student_seq;
this.#__id_state_uniq_id= assignStateInstanceID();
this.#__name_state_uniq_id= assignStateInstanceID();
this.#__class_teacher_state_uniq_id= assignStateInstanceID();
this.#__student_seq_state_uniq_id= assignStateInstanceID();

this._renderQueue = appContext.renderQueue;
}
dynamic(){return ["student_seq"]};
setParent(val){this.#school = val;}
get school(){return this.#school;}
getParent(){return this.#school;}
setUniqFields(){
this.#__id = Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 5);
}
set id(val){this.#id = val;}
set name(val){this.#name = val;}
set class_teacher(val){this.#class_teacher = val;}
set student_seq(val){this.#student_seq = val;}
get id(){return this.#id;}
get name(){return this.#name;}
get class_teacher(){return this.#class_teacher;}
get student_seq(){return this.#student_seq;}
idCB(_call_back = null){
appContext.state_tracker._initSubscription("id", this.__id_state_uniq_id, _call_back, this);
}
nameCB(_call_back = null){
appContext.state_tracker._initSubscription("name", this.__name_state_uniq_id, _call_back, this);
}
class_teacherCB(_call_back = null){
appContext.state_tracker._initSubscription("class_teacher", this.__class_teacher_state_uniq_id, _call_back, this);
}
student_seqCB(_call_back = null){
appContext.state_tracker._initSubscription("student_seq", this.__student_seq_state_uniq_id, _call_back, this);
}
set __id_state_uniq_id(val){this.#__id_state_uniq_id = val;}
set __name_state_uniq_id(val){this.#__name_state_uniq_id = val;}
set __class_teacher_state_uniq_id(val){this.#__class_teacher_state_uniq_id = val;}
set __student_seq_state_uniq_id(val){this.#__student_seq_state_uniq_id = val;}
get __id_state_uniq_id(){return this.#__id_state_uniq_id;}
get __name_state_uniq_id(){return this.#__name_state_uniq_id;}
get __class_teacher_state_uniq_id(){return this.#__class_teacher_state_uniq_id;}
get __student_seq_state_uniq_id(){return this.#__student_seq_state_uniq_id;}
set __id(val){this.#__id = val;}
get __id(){return this.#__id;}

toJSON() {
return{
id: this.#id,
name: this.#name,
class_teacher: this.#class_teacher,
student_seq: this.#student_seq?.map(element => element.toJSON()),
__id : this.#__id
};
}
static fromJSON(json) {
const id = json.id;
const name = json.name;
const class_teacher = json.class_teacher;
const student_seq = json.student_seq.map(item => ClassSeqStudentSeq.fromJSON(item));
const return_instance = new SchoolClassSeq(id,name,class_teacher,student_seq);
return_instance.__id = json.__id;
return return_instance;
}
delete (_call_back = null) {
let class_seq = this;

class_seq.destroy();
appContext.manager.deleteInstance(class_seq, class_seq.school_.class_seq);
appContext.manager._save();
if(class_seq){
if(appContext.state_tracker) {

}
}


appContext.state_tracker.notify(this.school.__class_seq_state_uniq_id);

}
edit_class (_call_back = null, name, class_teacher) {
let class_seq = this;


class_seq.name = name
class_seq.class_teacher = class_teacher
appContext.manager._save();
if(class_seq){
if(appContext.state_tracker) {

}
}


appContext.state_tracker.notify(class_seq.__name_state_uniq_id);
appContext.state_tracker.notify(class_seq.__class_teacher_state_uniq_id);

}
all_students_seq (_call_back = null) {
let class_seq = this;


let v_8828452_1 = class_seq?.student_seq;
class_seq?.student_seqCB(_call_back);


class_seq?.student_seqCB(_call_back);
appContext.state_tracker._initSubscription("all_students_seq", class_seq.__student_seq_state_uniq_id, _call_back, this);

return v_8828452_1;
}
destroy() {
// call all stored unsubscribers
for (const unsub of this._subscriptions) unsub();
if (this._all_project_seq_call_back) {
this._all_project_seq_call_back.clear();
}
}
}

class ClassSeqStudentSeq{
#class_seq;
#name;
#dob;
#father;
#email;
#__name_state_uniq_id;
#__dob_state_uniq_id;
#__father_state_uniq_id;
#__email_state_uniq_id;
#__id;

constructor(name, dob, father, email){
this._subscriptionRegistry = new Map();   // key → { set, subscribed }
this._subscriptions = [];
this.#name = name;
this.#dob = dob;
this.#father = father;
this.#email = email;
this.#__name_state_uniq_id= assignStateInstanceID();
this.#__dob_state_uniq_id= assignStateInstanceID();
this.#__father_state_uniq_id= assignStateInstanceID();
this.#__email_state_uniq_id= assignStateInstanceID();

this._renderQueue = appContext.renderQueue;
}
dynamic(){return []};
setParent(val){this.#class_seq = val;}
get class_seq(){return this.#class_seq;}
getParent(){return this.#class_seq;}
setUniqFields(){
this.#__id = Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 5);
}
set name(val){this.#name = val;}
set dob(val){this.#dob = val;}
set father(val){this.#father = val;}
set email(val){this.#email = val;}
get name(){return this.#name;}
get dob(){return this.#dob;}
get father(){return this.#father;}
get email(){return this.#email;}
nameCB(_call_back = null){
appContext.state_tracker._initSubscription("name", this.__name_state_uniq_id, _call_back, this);
}
dobCB(_call_back = null){
appContext.state_tracker._initSubscription("dob", this.__dob_state_uniq_id, _call_back, this);
}
fatherCB(_call_back = null){
appContext.state_tracker._initSubscription("father", this.__father_state_uniq_id, _call_back, this);
}
emailCB(_call_back = null){
appContext.state_tracker._initSubscription("email", this.__email_state_uniq_id, _call_back, this);
}
set __name_state_uniq_id(val){this.#__name_state_uniq_id = val;}
set __dob_state_uniq_id(val){this.#__dob_state_uniq_id = val;}
set __father_state_uniq_id(val){this.#__father_state_uniq_id = val;}
set __email_state_uniq_id(val){this.#__email_state_uniq_id = val;}
get __name_state_uniq_id(){return this.#__name_state_uniq_id;}
get __dob_state_uniq_id(){return this.#__dob_state_uniq_id;}
get __father_state_uniq_id(){return this.#__father_state_uniq_id;}
get __email_state_uniq_id(){return this.#__email_state_uniq_id;}
set __id(val){this.#__id = val;}
get __id(){return this.#__id;}

toJSON() {
return{
name: this.#name,
dob: this.#dob,
father: this.#father,
email: this.#email,
__id : this.#__id
};
}
static fromJSON(json) {
const name = json.name;
const dob = json.dob;
const father = json.father;
const email = json.email;
const return_instance = new ClassSeqStudentSeq(name,dob,father,email);
return_instance.__id = json.__id;
return return_instance;
}
edit_student (_call_back = null, name, dob, class_name, father, email) {
let student_seq = this;




student_seq.name = name
student_seq.dob = dob
student_seq.father = father
student_seq.email = email
appContext.manager._save();
if(student_seq){
if(appContext.state_tracker) {

}
}


appContext.state_tracker.notify(student_seq.__name_state_uniq_id);
appContext.state_tracker.notify(student_seq.__dob_state_uniq_id);
appContext.state_tracker.notify(student_seq.__father_state_uniq_id);
appContext.state_tracker.notify(student_seq.__email_state_uniq_id);

}
delete_student (_call_back = null) {
let student_seq = this;

student_seq.destroy();
appContext.manager.deleteInstance(student_seq, student_seq.class_seq.student_seq);
appContext.manager._save();
if(student_seq){
if(appContext.state_tracker) {

}
}


appContext.state_tracker.notify(this.class_seq.__student_seq_state_uniq_id);

}
destroy() {
// call all stored unsubscribers
for (const unsub of this._subscriptions) unsub();
if (this._all_project_seq_call_back) {
this._all_project_seq_call_back.clear();
}
}
}
const classMap = {School,SchoolClassSeq,ClassSeqStudentSeq};
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
school_ = [...root_instances.values()]
.find(i => i.constructor.name === "School");
setContainerRecursively(school_, school_.dynamic());
}else{
try {

let v_2202308_1 = [];
let school = appContext.manager.create("School", v_2202308_1);
school.setUniqFields();
appContext.manager.instances.set(school.__id, school);
school_ = school;
try {




let v_2222330_1 = [];
let class_seq = appContext.manager.create("SchoolClassSeq", "1", "First", "Karthick", v_2222330_1);
class_seq.setUniqFields();
appContext.manager.instances.set(class_seq.__id, class_seq);

class_seq.setParent(school);
school.class_seq.push(class_seq);
appContext.state_tracker.notify(school.__class_seq_state_uniq_id);
try {

let v_2242350_1 = toDate("2014-03-06");


let student_seq = appContext.manager.create("ClassSeqStudentSeq", "Balaji", v_2242350_1, "Muthaiah", "Balaji@email.com");
student_seq.setUniqFields();
appContext.manager.instances.set(student_seq.__id, student_seq);

student_seq.setParent(class_seq);
class_seq.student_seq.push(student_seq);
appContext.state_tracker.notify(class_seq.__student_seq_state_uniq_id);

appContext.manager._save();

} catch (err) {

}
try {

let v_2252380_1 = toDate("2010-02-13");


let student_seq = appContext.manager.create("ClassSeqStudentSeq", "Siva", v_2252380_1, "Raja", "rc@gmail.com");
student_seq.setUniqFields();
appContext.manager.instances.set(student_seq.__id, student_seq);

student_seq.setParent(class_seq);
class_seq.student_seq.push(student_seq);
appContext.state_tracker.notify(class_seq.__student_seq_state_uniq_id);

appContext.manager._save();

} catch (err) {

}
appContext.manager._save();

} catch (err) {

}
try {




let v_2262449_1 = [];
let class_seq = appContext.manager.create("SchoolClassSeq", "2", "second", "Sundaresan", v_2262449_1);
class_seq.setUniqFields();
appContext.manager.instances.set(class_seq.__id, class_seq);

class_seq.setParent(school);
school.class_seq.push(class_seq);
appContext.state_tracker.notify(school.__class_seq_state_uniq_id);
try {

let v_2282469_1 = toDate("2011-06-14");


let student_seq = appContext.manager.create("ClassSeqStudentSeq", "Ajmeer", v_2282469_1, "Zaheer", "aju@gmail.com");
student_seq.setUniqFields();
appContext.manager.instances.set(student_seq.__id, student_seq);

student_seq.setParent(class_seq);
class_seq.student_seq.push(student_seq);
appContext.state_tracker.notify(class_seq.__student_seq_state_uniq_id);

appContext.manager._save();

} catch (err) {

}
try {

let v_2292499_1 = toDate("2008-03-26");


let student_seq = appContext.manager.create("ClassSeqStudentSeq", "Naveen", v_2292499_1, "Raj", "raj@gmail.com");
student_seq.setUniqFields();
appContext.manager.instances.set(student_seq.__id, student_seq);

student_seq.setParent(class_seq);
class_seq.student_seq.push(student_seq);
appContext.state_tracker.notify(class_seq.__student_seq_state_uniq_id);

appContext.manager._save();

} catch (err) {

}
appContext.manager._save();

} catch (err) {

}
appContext.manager._save();

} catch (err) {

}
}
let callPreDefinedTraverseAndExecute = (async() => {
if (appContext.rootElement) {await pre_defined_traverseAndExecute();}
})();

}
window.addEventListener("load", async () => {
appContext._id_str = 275582;
main();
if (appContext.rootElement) { await traverseAndExecute(appContext.rootElement.children[0].children[0]);}


let v_2472774_1 = "puvi".toPascalCase();

let v_2472767_1 = ["https://om-ui.lzstratus.com/fonts/", v_2472774_1, ".ttf"];
let v_2472766_1 = v_2472767_1.join("");
try{let fontSet = [["puvi", v_2472766_1]];
await Promise.all(fontSet.map(([family, url]) => loadFont(family, url)));}
catch(e){console.error('Error loading fonts:', e);}
requestAnimationFrame(()=>{_updateLayerInfo_();})
});
window.addEventListener('resize', e => _updateLayerInfo_?.(e));