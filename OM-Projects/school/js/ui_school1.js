
class UiSchool1{ // Line_Number: 11

#current_class;
#open_add_student;




constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;


this._index = 0;





this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#current_class = "First";
if(this._store.getState("ui_school1." + this.__uniq_id + ".current_class") === undefined){
this._store.setState("ui_school1." + this.__uniq_id + ".current_class",this.#current_class);
}

this.#open_add_student = false;
if(this._store.getState("ui_school1." + this.__uniq_id + ".open_add_student") === undefined){
this._store.setState("ui_school1." + this.__uniq_id + ".open_add_student",this.#open_add_student);
}



}


set current_class(val){this.#current_class = val;}
set open_add_student(val){this.#open_add_student = val;}
get current_class(){return this.#current_class;}
get open_add_student(){return this.#open_add_student;}




_subscribe() {



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + this.__uniq_id + ".current_class", (data) => {
this.#current_class = data;

this._renderQueue.enqueue(this);}));
this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + this.__uniq_id + ".open_add_student", (data) => {
this.#open_add_student = data;

this._renderQueue.enqueue(this);}));









}
initUI() {
const _call_back = null;





this._subscribe();




}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];
this._store.deleteState("ui_school1." + this.__uniq_id + ".current_class");
this._store.router._routes.delete("ui_school1." + this.__uniq_id + ".current_class");
this._store.deleteState("ui_school1." + this.__uniq_id + ".open_add_student");
this._store.router._routes.delete("ui_school1." + this.__uniq_id + ".open_add_student");

}
}
async function f_UiSchool1(ui_school1){
ui_school1.obj = new UiSchool1(ui_school1);

}


class FormAddClass2{ // Line_Number: 18
#form_key;





constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#form_key = "add_class";


}
set form_key(val){this.#form_key = val;}
get form_key(){return this.#form_key;}





















}
async function f_FormAddClass2(form_add_class2){
form_add_class2.obj = new FormAddClass2(form_add_class2);

}

















class ButtonSubmit8{ // Line_Number: 24
#button_key;



#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#button_key = "submit";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}






_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("button_submit8." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_submit8." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_submit8." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





async _onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_submit8." + this.__uniq_id + ".pressed", true);


let v_1321402_1 = findNearestMatchesPerBranch(this._el.closest("#form_add_class2"), "#text_field_6")[0];
let v_1321406_1 = v_1321402_1?.["value"];


let v_1341419_1 = findNearestMatchesPerBranch(this._el.closest("#form_add_class2"), "#text_field_7")[0];
let v_1341423_1 = v_1341419_1?.["value"];
let v_1321395_1 = school_?.add_class(_call_back, v_1321406_1, "", v_1341423_1);



appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_submit8." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("ButtonSubmit8." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonSubmit8." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonSubmit8(button_submit8){
button_submit8.obj = new ButtonSubmit8(button_submit8);

}






class ButtonCancel10{ // Line_Number: 26
#button_key;





constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#button_key = "cancel";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}





















}
async function f_ButtonCancel10(button_cancel10){
button_cancel10.obj = new ButtonCancel10(button_cancel10);

}







class FormAddStudent12{ // Line_Number: 28
#form_key;





constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#form_key = "add_student";


}
set form_key(val){this.#form_key = val;}
get form_key(){return this.#form_key;}





















}
async function f_FormAddStudent12(form_add_student12){
form_add_student12.obj = new FormAddStudent12(form_add_student12);

}

















class TextField18{ // Line_Number: 34






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {


let ui_school1_uniq_id_v_34276_1 = document.getElementById("ui_school1").obj.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_34276_1 + ".open_add_student", (data) => {
this._renderQueue.enqueue([this.v_35282.bind(this)]);

}));







}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_35282();


}

v_35282() {

let ui_school1_uniq_id_v_34276_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_34276_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_34276_1 + ".open_add_student");
let v_34273_1 = !(v_34276_1);

if(v_34273_1){


this._el.value = "";
}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_TextField18(text_field_18){
text_field_18.obj = new TextField18(text_field_18);

}




class TextField19{ // Line_Number: 37






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {


let ui_school1_uniq_id_v_37307_1 = document.getElementById("ui_school1").obj.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_37307_1 + ".open_add_student", (data) => {
this._renderQueue.enqueue([this.v_38313.bind(this)]);

}));







}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_38313();


}

v_38313() {

let ui_school1_uniq_id_v_37307_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_37307_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_37307_1 + ".open_add_student");
let v_37304_1 = !(v_37307_1);

if(v_37304_1){


this._el.value = "";
}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_TextField19(text_field_19){
text_field_19.obj = new TextField19(text_field_19);

}




class TextField20{ // Line_Number: 41






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {


let ui_school1_uniq_id_v_41342_1 = document.getElementById("ui_school1").obj.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_41342_1 + ".open_add_student", (data) => {
this._renderQueue.enqueue([this.v_42348.bind(this)]);

}));







}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_42348();


}

v_42348() {

let ui_school1_uniq_id_v_41342_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_41342_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_41342_1 + ".open_add_student");
let v_41339_1 = !(v_41342_1);

if(v_41339_1){


this._el.value = "";
}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_TextField20(text_field_20){
text_field_20.obj = new TextField20(text_field_20);

}




class TextField21{ // Line_Number: 44






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {


let ui_school1_uniq_id_v_44373_1 = document.getElementById("ui_school1").obj.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_44373_1 + ".open_add_student", (data) => {
this._renderQueue.enqueue([this.v_45379.bind(this)]);

}));







}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_45379();


}

v_45379() {

let ui_school1_uniq_id_v_44373_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_44373_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_44373_1 + ".open_add_student");
let v_44370_1 = !(v_44373_1);

if(v_44370_1){


this._el.value = "";
}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_TextField21(text_field_21){
text_field_21.obj = new TextField21(text_field_21);

}




class ButtonSubmit22{ // Line_Number: 48
#button_key;



#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#button_key = "submit";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}






_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("button_submit22." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_submit22." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_submit22." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





async _onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_submit22." + this.__uniq_id + ".pressed", true);


let v_1831906_1 = findNearestMatchesPerBranch(this._el.closest("#form_add_student12"), "#text_field_18")[0];
let v_1831910_1 = v_1831906_1?.["value"];

let v_1851926_1 = findNearestMatchesPerBranch(this._el.closest("#form_add_student12"), "#text_field_19")[0];
let v_1851930_1 = v_1851926_1?.["value"];let v_1851936_1 = toDate(v_1851930_1);

let ui_school1_uniq_id_v_1841917_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_1841917_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_1841917_1 + ".current_class");

let v_1861946_1 = findNearestMatchesPerBranch(this._el.closest("#form_add_student12"), "#text_field_20")[0];
let v_1861950_1 = v_1861946_1?.["value"];
let v_1861956_1 = v_1861950_1?.toString();

let v_1871966_1 = findNearestMatchesPerBranch(this._el.closest("#form_add_student12"), "#text_field_21")[0];
let v_1871970_1 = v_1871966_1?.["value"];
let v_1871976_1 = v_1871970_1?.toString();
let v_1831899_1 = school_?.add_student(_call_back, v_1831910_1, v_1851936_1, v_1841917_1, v_1861956_1, v_1871976_1);





let ui_school1_uniq_id_v_1881983_1 = document.getElementById("ui_school1").obj.__uniq_id;
this._store.setState("ui_school1." + ui_school1_uniq_id_v_1881983_1 + ".open_add_student",false);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_submit22." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("ButtonSubmit22." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonSubmit22." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonSubmit22(button_submit22){
button_submit22.obj = new ButtonSubmit22(button_submit22);

}






class ButtonCancel24{ // Line_Number: 50
#button_key;



#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#button_key = "cancel";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}






_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("button_cancel24." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_cancel24." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_cancel24." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_cancel24." + this.__uniq_id + ".pressed", true);


let ui_school1_uniq_id_v_1922012_1 = document.getElementById("ui_school1").obj.__uniq_id;
this._store.setState("ui_school1." + ui_school1_uniq_id_v_1922012_1 + ".open_add_student",false);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_cancel24." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("ButtonCancel24." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonCancel24." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonCancel24(button_cancel24){
button_cancel24.obj = new ButtonCancel24(button_cancel24);

}







class ContainerMain26{ // Line_Number: 52
#container_key;





constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#container_key = "main";
this.cb_createDynamicWidget1 = this.createDynamicWidget1.bind(this);

}
set container_key(val){this.#container_key = val;}
get container_key(){return this.#container_key;}





createDynamicWidget1(){
const widTemp = this._el.querySelector(".f_ContainerAllClass32");
const tempParent = widTemp.parentNode;


let v_56490_1 = school_?.all_class_seq(this.cb_createDynamicWidget1);



if(v_56490_1){
for (let [_index, i] of v_56490_1.entries()){
let container = widTemp.content.cloneNode(true).firstElementChild;
container.container_key = i;
container._index = _index + 1;
container.style.display = "none";
tempParent.insertBefore(container, widTemp);}
traverseAndExecute(findByAssoRef(this._el, "f_ContainerAllClass32"));
}}
_subscribe() {










}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {



this.v_57495();
}



v_57495() {
this.createDynamicWidget1();
}










destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_ContainerMain26(container_main26){
container_main26.obj = new ContainerMain26(container_main26);

}
















class ContainerAllClass32{ // Line_Number: 57
#container_key;



#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;


this._index = this._el._index;





this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#container_key = this._el.container_key;


}
set container_key(val){this.#container_key = val;}
get container_key(){return this.#container_key;}






_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("container_all_class32." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("container_all_class32." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("container_all_class32." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("container_all_class32." + this.__uniq_id + ".pressed", true);
let v_1391472 = this._el.closest(".container.widget_container").obj?.container_key;

let v_1391473_1 = v_1391472?.name;



let v_1391479_1 = v_1391473_1?.toString();

let ui_school1_uniq_id_v_1391467_1 = document.getElementById("ui_school1").obj.__uniq_id;
this._store.setState("ui_school1." + ui_school1_uniq_id_v_1391467_1 + ".current_class",v_1391479_1);

let element = document.getElementById("container_content47")
traverseAndExecute(element);
appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("container_all_class32." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("ContainerAllClass32." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ContainerAllClass32." + this.__uniq_id + ".pressed");
}
}
async function f_ContainerAllClass32(container_all_class32){
container_all_class32.obj = new ContainerAllClass32(container_all_class32);

}


class Text33{ // Line_Number: 57






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











this.cb_v_57503 = this.v_57503.bind(this);


}









initUI() {
const _call_back = null;






this.loadUI();



}

loadUI() {
this.v_57503();



}
v_57503() {
let v_57504 = this._el.closest(".container.widget_container").obj?.container_key;

let v_57505_1 = v_57504?.name;
v_57504?.nameCB(this.cb_v_57503);


let v_57511_1 = v_57505_1?.toString();
this._el.textContent = v_57511_1;
}














}
async function f_Text33(text_33){
text_33.obj = new Text33(text_33);

}




class ButtonEdit34{ // Line_Number: 59
#button_key;
#open_edit_class;


#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#open_edit_class = false;
if(this._store.getState("button_edit34." + this.__uniq_id + ".open_edit_class") === undefined){
this._store.setState("button_edit34." + this.__uniq_id + ".open_edit_class",this.#open_edit_class);
}
this.#button_key = "edit";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}
set open_edit_class(val){this.#open_edit_class = val;}
get open_edit_class(){return this.#open_edit_class;}




_subscribe() {



this._unsubscribeFns.push(
this._store.subscribe("button_edit34." + this.__uniq_id + ".open_edit_class", (data) => {
this.#open_edit_class = data;

this._renderQueue.enqueue(this);}));




this._unsubscribeFns.push(
this._store.subscribe("button_edit34." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_edit34." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_edit34." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_edit34." + this.__uniq_id + ".pressed", true);


let button_edit34_uniq_id_v_1551573_1 = this.__uniq_id;
this._store.setState("button_edit34." + button_edit34_uniq_id_v_1551573_1 + ".open_edit_class",true);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_edit34." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];
this._store.deleteState("button_edit34." + this.__uniq_id + ".open_edit_class");
this._store.router._routes.delete("button_edit34." + this.__uniq_id + ".open_edit_class");
this._store.deleteState("ButtonEdit34." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonEdit34." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonEdit34(button_edit34){
button_edit34.obj = new ButtonEdit34(button_edit34);

}






class Image36{ // Line_Number: 62




#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);










}








_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("image_36." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("image_36." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("image_36." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("image_36." + this.__uniq_id + ".pressed", true);

let v_2102238_1 = this._el.closest("#container_all_class32").obj.container_key;

let v_2102241_1 = v_2102238_1?.delete(_call_back);



appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("image_36." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("Image36." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("Image36." + this.__uniq_id + ".pressed");
}
}
async function f_Image36(image_36){
image_36.obj = new Image36(image_36);

}




class FormEditClass37{ // Line_Number: 63
#form_key;





constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#form_key = "edit_class";


}
set form_key(val){this.#form_key = val;}
get form_key(){return this.#form_key;}





















}
async function f_FormEditClass37(form_edit_class37){
form_edit_class37.obj = new FormEditClass37(form_edit_class37);

}











class TextField41{ // Line_Number: 94






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {


let v_94944_1 = findNearestMatchesPerBranch(this._el.closest("#container_all_class32"), "#button_edit34")[0];
let button_edit34_uniq_id_v_94948_1 = v_94944_1.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("button_edit34." + button_edit34_uniq_id_v_94948_1 + ".open_edit_class", (data) => {
this._renderQueue.enqueue([this.v_95952.bind(this)]);

}));







}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_95952();


}

v_95952() {

let v_94944_1 = findNearestMatchesPerBranch(this._el.closest("#container_all_class32"), "#button_edit34")[0];
let button_edit34_uniq_id_v_94948_1 = v_94944_1.__uniq_id;
let v_94948_1 = appContext.store.getState("button_edit34." + button_edit34_uniq_id_v_94948_1 + ".open_edit_class");

if(v_94948_1){


let v_95956_1 = this._el.closest("#container_all_class32").obj.container_key;

let v_95959_1 = v_95956_1?.name;



let v_95965_1 = v_95959_1?.toString();
this._el.value = v_95965_1;
}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_TextField41(text_field_41){
text_field_41.obj = new TextField41(text_field_41);

}




class TextField42{ // Line_Number: 97






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {


let v_97995_1 = findNearestMatchesPerBranch(this._el.closest("#container_all_class32"), "#button_edit34")[0];
let button_edit34_uniq_id_v_97999_1 = v_97995_1.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("button_edit34." + button_edit34_uniq_id_v_97999_1 + ".open_edit_class", (data) => {
this._renderQueue.enqueue([this.v_981003.bind(this)]);

}));







}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_981003();


}

v_981003() {

let v_97995_1 = findNearestMatchesPerBranch(this._el.closest("#container_all_class32"), "#button_edit34")[0];
let button_edit34_uniq_id_v_97999_1 = v_97995_1.__uniq_id;
let v_97999_1 = appContext.store.getState("button_edit34." + button_edit34_uniq_id_v_97999_1 + ".open_edit_class");

if(v_97999_1){


let v_981007_1 = this._el.closest("#container_all_class32").obj.container_key;

let v_981010_1 = v_981007_1?.class_teacher;



let v_981016_1 = v_981010_1?.toString();
this._el.value = v_981016_1;
}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_TextField42(text_field_42){
text_field_42.obj = new TextField42(text_field_42);

}




class ButtonSubmit43{ // Line_Number: 100
#button_key;



#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#button_key = "submit";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}






_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("button_submit43." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_submit43." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_submit43." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





async _onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_submit43." + this.__uniq_id + ".pressed", true);

let v_1591616_1 = this._el.closest("#container_all_class32").obj.container_key;

let v_1601630_1 = findNearestMatchesPerBranch(this._el.closest("#form_edit_class37"), "#text_field_41")[0];
let v_1601634_1 = v_1601630_1?.["value"];

let v_1611644_1 = findNearestMatchesPerBranch(this._el.closest("#form_edit_class37"), "#text_field_42")[0];
let v_1611648_1 = v_1611644_1?.["value"];
let v_1601623_1 = v_1591616_1?.edit_class(_call_back, v_1601634_1, v_1611648_1);




let v_1621667_1 = findNearestMatchesPerBranch(this._el.closest("#form_edit_class37"), "#text_field_41")[0];
let v_1621671_1 = v_1621667_1?.["value"];

let ui_school1_uniq_id_v_1621658_1 = document.getElementById("ui_school1").obj.__uniq_id;
this._store.setState("ui_school1." + ui_school1_uniq_id_v_1621658_1 + ".current_class",v_1621671_1);

let element = document.getElementById("container_content47")
traverseAndExecute(element);


let v_1641735_1 = findNearestMatchesPerBranch(this._el.closest("#container_all_class32"), "#button_edit34")[0];
let button_edit34_uniq_id_v_1641739_1 = v_1641735_1.__uniq_id;
this._store.setState("button_edit34." + button_edit34_uniq_id_v_1641739_1 + ".open_edit_class",false);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_submit43." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("ButtonSubmit43." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonSubmit43." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonSubmit43(button_submit43){
button_submit43.obj = new ButtonSubmit43(button_submit43);

}






class ButtonCancel45{ // Line_Number: 102
#button_key;



#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#button_key = "cancel";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}






_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("button_cancel45." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_cancel45." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_cancel45." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_cancel45." + this.__uniq_id + ".pressed", true);


let v_1681785_1 = findNearestMatchesPerBranch(this._el.closest("#container_all_class32"), "#button_edit34")[0];
let button_edit34_uniq_id_v_1681789_1 = v_1681785_1.__uniq_id;
this._store.setState("button_edit34." + button_edit34_uniq_id_v_1681789_1 + ".open_edit_class",false);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_cancel45." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("ButtonCancel45." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonCancel45." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonCancel45(button_cancel45){
button_cancel45.obj = new ButtonCancel45(button_cancel45);

}








class ContainerContent47{ // Line_Number: 65
#container_key;

#students_seq_state_uniq_id;
#current_class_teacher_seq_state_uniq_id;



constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;
this._subscriptionRegistry = new Map();   // key → { set, subscribed }
this._subscriptions = [];
this.#students_seq_state_uniq_id = assignStateInstanceID();
this.#current_class_teacher_seq_state_uniq_id = assignStateInstanceID();






this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#container_key = "content";
this.cb_createDynamicWidget1 = this.createDynamicWidget1.bind(this);
this.cb_createDynamicWidget2 = this.createDynamicWidget2.bind(this);

}
set container_key(val){this.#container_key = val;}
get container_key(){return this.#container_key;}


students_seq(_call_back = null){


let ui_school1_uniq_id_v_66581_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_66581_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_66581_1 + ".current_class");
let v_66577_1 = school_?.student_list_seq(_call_back, v_66581_1);



appContext.state_tracker._initSubscription("students_seq", this.#students_seq_state_uniq_id, _call_back, this);
let students_seq_ident = v_66577_1;
return students_seq_ident;
}
current_class_teacher_seq(_call_back = null){


let ui_school1_uniq_id_v_68598_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_68598_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_68598_1 + ".current_class");
let v_68594_1 = school_?.get_class_by_name_seq(_call_back, v_68598_1);



appContext.state_tracker._initSubscription("current_class_teacher_seq", this.#current_class_teacher_seq_state_uniq_id, _call_back, this);
let current_class_teacher_seq_ident = v_68594_1;
return current_class_teacher_seq_ident;
}
set students_seq_state_uniq_id(val){this.#students_seq_state_uniq_id = val;}
set current_class_teacher_seq_state_uniq_id(val){this.#current_class_teacher_seq_state_uniq_id = val;}
get students_seq_state_uniq_id(){return this.#students_seq_state_uniq_id;}
get current_class_teacher_seq_state_uniq_id(){return this.#current_class_teacher_seq_state_uniq_id;}
createDynamicWidget1(){
const widTemp = this._el.querySelector(".f_BoxCurrentClassTeacher49");
const tempParent = widTemp.parentNode;


let v_70625_1 = this.current_class_teacher_seq(this.cb_createDynamicWidget1);



if(v_70625_1){
for (let [_index, i] of v_70625_1.entries()){
let box = widTemp.content.cloneNode(true).firstElementChild;
box.box_key = i;
box._index = _index + 1;
box.style.display = "none";
tempParent.insertBefore(box, widTemp);}
traverseAndExecute(findByAssoRef(this._el, "f_BoxCurrentClassTeacher49"));
}}
createDynamicWidget2(){
const widTemp = this._el.querySelector(".f_BoxStudents56");
const tempParent = widTemp.parentNode;


let v_76707_1 = this.students_seq(this.cb_createDynamicWidget2);



if(v_76707_1){
for (let [_index, i] of v_76707_1.entries()){
let box = widTemp.content.cloneNode(true).firstElementChild;
box.box_key = i;
box._index = _index + 1;
box.style.display = "none";
tempParent.insertBefore(box, widTemp);}
traverseAndExecute(findByAssoRef(this._el, "f_BoxStudents56"));
}}
_subscribe() {











}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {



this.v_71630();
this.v_77712();
}



v_71630() {
this.createDynamicWidget1();
}
v_77712() {
this.createDynamicWidget2();
}










destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_ContainerContent47(container_content47){
container_content47.obj = new ContainerContent47(container_content47);

}


class Text48{ // Line_Number: 69






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {

let ui_school1_uniq_id_v_69616_1 = document.getElementById("ui_school1").obj.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_69616_1 + ".current_class", (data) => {
this._renderQueue.enqueue([this.v_69609.bind(this)]);

}));








}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {
this.v_69609();



}
v_69609() {


let ui_school1_uniq_id_v_69616_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_69616_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_69616_1 + ".current_class");
let v_69612_1 = ["Class : ", v_69616_1];
let v_69611_1 = v_69612_1.join("");
this._el.textContent = v_69611_1;
}













destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Text48(text_48){
text_48.obj = new Text48(text_48);

}




class BoxCurrentClassTeacher49{ // Line_Number: 71
#box_key;





constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;


this._index = this._el._index;






this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#box_key = this._el.box_key;


}
set box_key(val){this.#box_key = val;}
get box_key(){return this.#box_key;}





















}
async function f_BoxCurrentClassTeacher49(box_current_class_teacher49){
box_current_class_teacher49.obj = new BoxCurrentClassTeacher49(box_current_class_teacher49);

}


class Text50{ // Line_Number: 71






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











this.cb_v_71638 = this.v_71638.bind(this);


}









initUI() {
const _call_back = null;






this.loadUI();



}

loadUI() {
this.v_71638();



}
v_71638() {

let v_71644 = this._el.closest(".box.widget_container").obj?.box_key;

let v_71645_1 = v_71644?.class_teacher;
v_71644?.class_teacherCB(this.cb_v_71638);


let v_71651_1 = v_71645_1?.toString();
let v_71641_1 = ["Class Teacher : ", v_71651_1];
let v_71640_1 = v_71641_1.join("");
this._el.textContent = v_71640_1;
}














}
async function f_Text50(text_50){
text_50.obj = new Text50(text_50);

}





class ButtonAddStudent51{ // Line_Number: 72
#button_key;



#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#button_key = "add_student";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}






_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("button_add_student51." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_add_student51." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_add_student51." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_add_student51." + this.__uniq_id + ".pressed", true);


let ui_school1_uniq_id_v_1721823_1 = document.getElementById("ui_school1").obj.__uniq_id;
this._store.setState("ui_school1." + ui_school1_uniq_id_v_1721823_1 + ".open_add_student",true);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_add_student51." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("ButtonAddStudent51." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonAddStudent51." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonAddStudent51(button_add_student51){
button_add_student51.obj = new ButtonAddStudent51(button_add_student51);

}






class BoxTitle53{ // Line_Number: 74
#box_key;





constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#box_key = "title";


}
set box_key(val){this.#box_key = val;}
get box_key(){return this.#box_key;}





















}
async function f_BoxTitle53(box_title53){
box_title53.obj = new BoxTitle53(box_title53);

}









class BoxStudents56{ // Line_Number: 77
#box_key;





constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;


this._index = this._el._index;






this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#box_key = this._el.box_key;


}
set box_key(val){this.#box_key = val;}
get box_key(){return this.#box_key;}





















}
async function f_BoxStudents56(box_students56){
box_students56.obj = new BoxStudents56(box_students56);

}


class Text57{ // Line_Number: 77






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











this.cb_v_77720 = this.v_77720.bind(this);


}









initUI() {
const _call_back = null;






this.loadUI();



}

loadUI() {
this.v_77720();



}
v_77720() {

let v_77726 = this._el.closest(".box.widget_container").obj?.box_key;

let v_77727_1 = v_77726?.name;
v_77726?.nameCB(this.cb_v_77720);


let v_77733_1 = v_77727_1?.toString();
let v_77723_1 = ["Name : ", v_77733_1];
let v_77722_1 = v_77723_1.join("");
this._el.textContent = v_77722_1;
}














}
async function f_Text57(text_57){
text_57.obj = new Text57(text_57);

}




class Text58{ // Line_Number: 78






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











this.cb_v_78747 = this.v_78747.bind(this);


}









initUI() {
const _call_back = null;






this.loadUI();



}

loadUI() {
this.v_78747();



}
v_78747() {

let v_78753 = this._el.closest(".box.widget_container").obj?.box_key;

let v_78754_1 = v_78753?.dob;
v_78753?.dobCB(this.cb_v_78747);


let v_78760_1 = v_78754_1?.toString();
let v_78750_1 = ["DOB : ", v_78760_1];
let v_78749_1 = v_78750_1.join("");
this._el.textContent = v_78749_1;
}














}
async function f_Text58(text_58){
text_58.obj = new Text58(text_58);

}




class Text59{ // Line_Number: 79






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











this.cb_v_79773 = this.v_79773.bind(this);


}









initUI() {
const _call_back = null;






this.loadUI();



}

loadUI() {
this.v_79773();



}
v_79773() {

let v_79779 = this._el.closest(".box.widget_container").obj?.box_key;

let v_79780_1 = v_79779?.father;
v_79779?.fatherCB(this.cb_v_79773);


let v_79786_1 = v_79780_1?.toString();
let v_79776_1 = ["Father : ", v_79786_1];
let v_79775_1 = v_79776_1.join("");
this._el.textContent = v_79775_1;
}














}
async function f_Text59(text_59){
text_59.obj = new Text59(text_59);

}




class Text60{ // Line_Number: 80






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











this.cb_v_80799 = this.v_80799.bind(this);


}









initUI() {
const _call_back = null;






this.loadUI();



}

loadUI() {
this.v_80799();



}
v_80799() {

let v_80805 = this._el.closest(".box.widget_container").obj?.box_key;

let v_80806_1 = v_80805?.email;
v_80805?.emailCB(this.cb_v_80799);


let v_80812_1 = v_80806_1?.toString();
let v_80802_1 = ["Email : ", v_80812_1];
let v_80801_1 = v_80802_1.join("");
this._el.textContent = v_80801_1;
}














}
async function f_Text60(text_60){
text_60.obj = new Text60(text_60);

}




class ButtonEditStudent61{ // Line_Number: 82
#button_key;
#open_edit_student;


#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#open_edit_student = false;
if(this._store.getState("button_edit_student61." + this.__uniq_id + ".open_edit_student") === undefined){
this._store.setState("button_edit_student61." + this.__uniq_id + ".open_edit_student",this.#open_edit_student);
}
this.#button_key = "edit_student";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}
set open_edit_student(val){this.#open_edit_student = val;}
get open_edit_student(){return this.#open_edit_student;}




_subscribe() {



this._unsubscribeFns.push(
this._store.subscribe("button_edit_student61." + this.__uniq_id + ".open_edit_student", (data) => {
this.#open_edit_student = data;

this._renderQueue.enqueue(this);}));




this._unsubscribeFns.push(
this._store.subscribe("button_edit_student61." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_edit_student61." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_edit_student61." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_edit_student61." + this.__uniq_id + ".pressed", true);


let button_edit_student61_uniq_id_v_1761866_1 = this.__uniq_id;
this._store.setState("button_edit_student61." + button_edit_student61_uniq_id_v_1761866_1 + ".open_edit_student",true);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_edit_student61." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];
this._store.deleteState("button_edit_student61." + this.__uniq_id + ".open_edit_student");
this._store.router._routes.delete("button_edit_student61." + this.__uniq_id + ".open_edit_student");
this._store.deleteState("ButtonEditStudent61." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonEditStudent61." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonEditStudent61(button_edit_student61){
button_edit_student61.obj = new ButtonEditStudent61(button_edit_student61);

}






class ButtonDelete63{ // Line_Number: 86
#button_key;



#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#button_key = "delete";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}






_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("button_delete63." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_delete63." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_delete63." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_delete63." + this.__uniq_id + ".pressed", true);

console.log("delete call");

let v_2162288_1 = this._el.closest("#box_students56").obj.box_key;

let v_2162291_1 = v_2162288_1?.delete_student(_call_back);



appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_delete63." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("ButtonDelete63." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonDelete63." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonDelete63(button_delete63){
button_delete63.obj = new ButtonDelete63(button_delete63);

}






class FormEditStudent65{ // Line_Number: 87
#form_key;





constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;









this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);








this.#form_key = "edit_student";


}
set form_key(val){this.#form_key = val;}
get form_key(){return this.#form_key;}





















}
async function f_FormEditStudent65(form_edit_student65){
form_edit_student65.obj = new FormEditStudent65(form_edit_student65);

}

















class TextField71{ // Line_Number: 111






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {


let ui_school1_uniq_id_v_1111162_1 = document.getElementById("ui_school1").obj.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_1111162_1 + ".open_add_student", (data) => {
this._renderQueue.enqueue([this.v_1121168.bind(this)]);

}));







}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_1121168();


}

v_1121168() {

let ui_school1_uniq_id_v_1111162_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_1111162_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_1111162_1 + ".open_add_student");
let v_1111159_1 = !(v_1111162_1);

if(v_1111159_1){


let v_1121172_1 = this._el.closest("#box_students56").obj.box_key;

let v_1121175_1 = v_1121172_1?.name;



let v_1121181_1 = v_1121175_1?.toString();
this._el.value = v_1121181_1;
}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_TextField71(text_field_71){
text_field_71.obj = new TextField71(text_field_71);

}




class TextField72{ // Line_Number: 114






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {


let ui_school1_uniq_id_v_1141206_1 = document.getElementById("ui_school1").obj.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_1141206_1 + ".open_add_student", (data) => {
this._renderQueue.enqueue([this.v_1151212.bind(this)]);

}));







}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_1151212();


}

v_1151212() {

let ui_school1_uniq_id_v_1141206_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_1141206_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_1141206_1 + ".open_add_student");
let v_1141203_1 = !(v_1141206_1);

if(v_1141203_1){


let v_1151216_1 = this._el.closest("#box_students56").obj.box_key;

let v_1151219_1 = v_1151216_1?.dob;



let v_1151225_1 = v_1151219_1?.toString();
this._el.value = v_1151225_1;
}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_TextField72(text_field_72){
text_field_72.obj = new TextField72(text_field_72);

}




class TextField73{ // Line_Number: 118






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {


let ui_school1_uniq_id_v_1181254_1 = document.getElementById("ui_school1").obj.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_1181254_1 + ".open_add_student", (data) => {
this._renderQueue.enqueue([this.v_1191260.bind(this)]);

}));







}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_1191260();


}

v_1191260() {

let ui_school1_uniq_id_v_1181254_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_1181254_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_1181254_1 + ".open_add_student");
let v_1181251_1 = !(v_1181254_1);

if(v_1181251_1){


let v_1191264_1 = this._el.closest("#box_students56").obj.box_key;

let v_1191267_1 = v_1191264_1?.father;



let v_1191273_1 = v_1191267_1?.toString();
this._el.value = v_1191273_1;
}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_TextField73(text_field_73){
text_field_73.obj = new TextField73(text_field_73);

}




class TextField74{ // Line_Number: 121






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {


let ui_school1_uniq_id_v_1211298_1 = document.getElementById("ui_school1").obj.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_1211298_1 + ".open_add_student", (data) => {
this._renderQueue.enqueue([this.v_1221304.bind(this)]);

}));







}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_1221304();


}

v_1221304() {

let ui_school1_uniq_id_v_1211298_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_1211298_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_1211298_1 + ".open_add_student");
let v_1211295_1 = !(v_1211298_1);

if(v_1211295_1){


let v_1221308_1 = this._el.closest("#box_students56").obj.box_key;

let v_1221311_1 = v_1221308_1?.email;



let v_1221317_1 = v_1221311_1?.toString();
this._el.value = v_1221317_1;
}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_TextField74(text_field_74){
text_field_74.obj = new TextField74(text_field_74);

}




class ButtonSubmit75{ // Line_Number: 125
#button_key;



#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#button_key = "submit";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}






_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("button_submit75." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_submit75." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_submit75." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





async _onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_submit75." + this.__uniq_id + ".pressed", true);

let v_1962060_1 = this._el.closest("#box_students56").obj.box_key;

let v_1972074_1 = findNearestMatchesPerBranch(this._el.closest("#form_edit_student65"), "#text_field_71")[0];
let v_1972078_1 = v_1972074_1?.["value"];

let v_1992094_1 = findNearestMatchesPerBranch(this._el.closest("#form_edit_student65"), "#text_field_72")[0];
let v_1992098_1 = v_1992094_1?.["value"];let v_1992104_1 = toDate(v_1992098_1);

let ui_school1_uniq_id_v_1982085_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_1982085_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_1982085_1 + ".current_class");

let v_2002114_1 = findNearestMatchesPerBranch(this._el.closest("#form_edit_student65"), "#text_field_73")[0];
let v_2002118_1 = v_2002114_1?.["value"];
let v_2002124_1 = v_2002118_1?.toString();

let v_2012134_1 = findNearestMatchesPerBranch(this._el.closest("#form_edit_student65"), "#text_field_74")[0];
let v_2012138_1 = v_2012134_1?.["value"];
let v_2012144_1 = v_2012138_1?.toString();
let v_1972067_1 = v_1962060_1?.edit_student(_call_back, v_1972078_1, v_1992104_1, v_1982085_1, v_2002124_1, v_2012144_1);





let v_2022158_1 = findNearestMatchesPerBranch(this._el.closest("#box_students56"), "#button_edit_student61")[0];
let button_edit_student61_uniq_id_v_2022162_1 = v_2022158_1.__uniq_id;
this._store.setState("button_edit_student61." + button_edit_student61_uniq_id_v_2022162_1 + ".open_edit_student",false);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_submit75." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("ButtonSubmit75." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonSubmit75." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonSubmit75(button_submit75){
button_submit75.obj = new ButtonSubmit75(button_submit75);

}






class ButtonCancel77{ // Line_Number: 127
#button_key;



#pressed;

constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;








this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);
this._onClick = this._onClick.bind(this);
this._el.addEventListener('click', this._onClick);







this.#button_key = "cancel";


}
set button_key(val){this.#button_key = val;}
get button_key(){return this.#button_key;}






_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("button_cancel77." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_cancel77." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_cancel77." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_cancel77." + this.__uniq_id + ".pressed", true);


let v_2062196_1 = findNearestMatchesPerBranch(this._el.closest("#box_students56"), "#button_edit_student61")[0];
let button_edit_student61_uniq_id_v_2062200_1 = v_2062196_1.__uniq_id;
this._store.setState("button_edit_student61." + button_edit_student61_uniq_id_v_2062200_1 + ".open_edit_student",false);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_cancel77." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("ButtonCancel77." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("ButtonCancel77." + this.__uniq_id + ".pressed");
}
}
async function f_ButtonCancel77(button_cancel77){
button_cancel77.obj = new ButtonCancel77(button_cancel77);

}









