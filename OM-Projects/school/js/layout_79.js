

class Layout80{ // Line_Number: 258






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





appContext._layered_elements_.push(this);





}










layeredElementUpdateUI(initial = false) {
let v_2592836_1 = appContext.rootElement.querySelector(".layout.school.horizontal_container");
let layout_reference_rect_ = v_2592836_1.getBoundingClientRect();

const unscaledLeft = layout_reference_rect_.left / appContext._zoom_factor_;
const unscaledTop  = layout_reference_rect_.top / appContext._zoom_factor_;
this._el.style.left = `${unscaledLeft}px`;
this._el.style.top = `${unscaledTop}px`;
this._el.style.position = 'fixed';
if(initial){
this._el.style.zIndex = (isNaN(+getComputedStyle(v_2592836_1).zIndex) ? 0 : +getComputedStyle(v_2592836_1).zIndex) + 1;
}
updateZIndex();
}












}
async function f_Layout80(layout_80){
layout_80.obj = new Layout80(layout_80);

}























class Column90{ // Line_Number: 300




#pressed;
#hovered;
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

this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("column_90." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([this.v_3073309.bind(this)]);

}));
this._unsubscribeFns.push(
this._store.subscribe("column_90." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_3013253.bind(this), this.v_3043281.bind(this)]);

}));



}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("column_90." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("column_90." + this.__uniq_id + ".pressed", this.#pressed);
}
this.#hovered = false;
if(this._store.getState("column_90." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("column_90." + this.__uniq_id + ".hovered", this.#hovered);
}





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_3013253();
this.v_3043281();
this.v_3073309();


}

v_3013253() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}
v_3043281() {

let v_3033276_1 = !(this.#hovered);

if(v_3033276_1){

this._el.style.setProperty("background-color", "var(--violet)");
this._el.style.setProperty("color", "var(--white)");
}}
v_3073309() {


if(this.#pressed){


let v_3073311_1 = appContext.rootElement.querySelector(".layout.school.horizontal_container");

let v_3073320_1 = findNearestMatchesPerBranch(v_3073311_1, ".layout");




let v_3073324_1 = 1;
let v_3073323_1 = v_3073320_1[v_3073324_1 - 1];
v_3073323_1.style.setProperty("display", false ? "flex" : "none");

}}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("column_90." + this.__uniq_id + ".pressed", true);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}
_onHover(){
const _call_back = null;
this._store.setState("column_90." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("column_90." + this.__uniq_id + ".hovered", false);
}

_onMouseOffClick(){
const _call_back = null;
this._store.setState("column_90." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);


this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("Column90." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("Column90." + this.__uniq_id + ".pressed");
}
}
async function f_Column90(column_90){
column_90.obj = new Column90(column_90);

}






class Column92{ // Line_Number: 316




#pressed;
#hovered;
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

this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("column_92." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([this.v_3233494.bind(this)]);

}));
this._unsubscribeFns.push(
this._store.subscribe("column_92." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_3173438.bind(this), this.v_3203466.bind(this)]);

}));



}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("column_92." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("column_92." + this.__uniq_id + ".pressed", this.#pressed);
}
this.#hovered = false;
if(this._store.getState("column_92." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("column_92." + this.__uniq_id + ".hovered", this.#hovered);
}




this._subscribe();
this.loadUI();



}

loadUI() {

this.v_3173438();
this.v_3203466();
this.v_3233494();


}

v_3173438() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}
v_3203466() {

let v_3193461_1 = !(this.#hovered);

if(v_3193461_1){

this._el.style.setProperty("background-color", "var(--violet)");
this._el.style.setProperty("color", "var(--white)");
}}
v_3233494() {


if(this.#pressed){


let v_3233496_1 = appContext.rootElement.querySelector(".layout.school.horizontal_container");

let v_3233505_1 = findNearestMatchesPerBranch(v_3233496_1, ".layout");




let v_3233509_1 = 1;
let v_3233508_1 = v_3233505_1[v_3233509_1 - 1];
v_3233508_1.style.setProperty("display", false ? "flex" : "none");

}}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("column_92." + this.__uniq_id + ".pressed", true);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}
_onHover(){
const _call_back = null;
this._store.setState("column_92." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("column_92." + this.__uniq_id + ".hovered", false);
}

_onMouseOffClick(){
const _call_back = null;
this._store.setState("column_92." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);


this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("Column92." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("Column92." + this.__uniq_id + ".pressed");
}
}
async function f_Column92(column_92){
column_92.obj = new Column92(column_92);

}









class Layout94{ // Line_Number: 331






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





appContext._layered_elements_.push(this);





}








_subscribe() {


let ui_school1_uniq_id_v_3313617_1 = document.getElementById("ui_school1").obj.__uniq_id;

let ui_school1_uniq_id_v_3333636_1 = document.getElementById("ui_school1").obj.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_3313617_1 + ".open_add_student", (data) => {
this._renderQueue.enqueue([this.v_3323621.bind(this), this.v_3343642.bind(this)]);

}));
this._unsubscribeFns.push(
this._store.subscribe("ui_school1." + ui_school1_uniq_id_v_3333636_1 + ".open_add_student", (data) => {
this._renderQueue.enqueue([this.v_3323621.bind(this), this.v_3343642.bind(this)]);

}));







}
initUI() {
const _call_back = null;









this._subscribe();
this.loadUI();



}
layeredElementUpdateUI(initial = false) {
let v_3363658_1 = appContext.rootElement.querySelector(".layout.school.horizontal_container");
let layout_reference_rect_ = v_3363658_1.getBoundingClientRect();

const unscaledLeft = layout_reference_rect_.left / appContext._zoom_factor_;
const unscaledTop  = layout_reference_rect_.top / appContext._zoom_factor_;
this._el.style.left = `${unscaledLeft}px`;
this._el.style.top = `${unscaledTop}px`;
this._el.style.position = 'fixed';
if(initial){
this._el.style.zIndex = (isNaN(+getComputedStyle(v_3363658_1).zIndex) ? 0 : +getComputedStyle(v_3363658_1).zIndex) + 1;
}
updateZIndex();
}
loadUI() {

this.v_3323621();
this.v_3343642();


}

v_3323621() {

let ui_school1_uniq_id_v_3313617_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_3313617_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_3313617_1 + ".open_add_student");

if(v_3313617_1){


this._el.style.setProperty("display", true ? "flex" : "none");

}}
v_3343642() {

let ui_school1_uniq_id_v_3333636_1 = document.getElementById("ui_school1").obj.__uniq_id;
let v_3333636_1 = appContext.store.getState("ui_school1." + ui_school1_uniq_id_v_3333636_1 + ".open_add_student");
let v_3333633_1 = !(v_3333636_1);

if(v_3333633_1){


this._el.style.setProperty("display", false ? "flex" : "none");

}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Layout94(layout_94){
layout_94.obj = new Layout94(layout_94);

}







































class Column110{ // Line_Number: 415




#pressed;
#hovered;
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

this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("column_110." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([this.v_4224412.bind(this)]);

}));
this._unsubscribeFns.push(
this._store.subscribe("column_110." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_4164356.bind(this), this.v_4194384.bind(this)]);

}));



}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("column_110." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("column_110." + this.__uniq_id + ".pressed", this.#pressed);
}
this.#hovered = false;
if(this._store.getState("column_110." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("column_110." + this.__uniq_id + ".hovered", this.#hovered);
}







this._subscribe();
this.loadUI();



}

loadUI() {

this.v_4164356();
this.v_4194384();
this.v_4224412();


}

v_4164356() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}
v_4194384() {

let v_4184379_1 = !(this.#hovered);

if(v_4184379_1){

this._el.style.setProperty("background-color", "var(--violet)");
this._el.style.setProperty("color", "var(--white)");
}}
v_4224412() {


if(this.#pressed){


let v_4224414_1 = appContext.rootElement.querySelector(".layout.school.horizontal_container");

let v_4224423_1 = findNearestMatchesPerBranch(v_4224414_1, ".layout");




let v_4224427_1 = 2;
let v_4224426_1 = v_4224423_1[v_4224427_1 - 1];
v_4224426_1.style.setProperty("display", false ? "flex" : "none");

}}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("column_110." + this.__uniq_id + ".pressed", true);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}
_onHover(){
const _call_back = null;
this._store.setState("column_110." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("column_110." + this.__uniq_id + ".hovered", false);
}

_onMouseOffClick(){
const _call_back = null;
this._store.setState("column_110." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);


this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("Column110." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("Column110." + this.__uniq_id + ".pressed");
}
}
async function f_Column110(column_110){
column_110.obj = new Column110(column_110);

}






class Column112{ // Line_Number: 436




#pressed;
#hovered;
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

this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {





this._unsubscribeFns.push(
this._store.subscribe("column_112." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([this.v_4434613.bind(this)]);

}));
this._unsubscribeFns.push(
this._store.subscribe("column_112." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_4374557.bind(this), this.v_4404585.bind(this)]);

}));



}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("column_112." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("column_112." + this.__uniq_id + ".pressed", this.#pressed);
}
this.#hovered = false;
if(this._store.getState("column_112." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("column_112." + this.__uniq_id + ".hovered", this.#hovered);
}






this._subscribe();
this.loadUI();



}

loadUI() {

this.v_4374557();
this.v_4404585();
this.v_4434613();


}

v_4374557() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}
v_4404585() {

let v_4394580_1 = !(this.#hovered);

if(v_4394580_1){

this._el.style.setProperty("background-color", "var(--violet)");
this._el.style.setProperty("color", "var(--white)");
}}
v_4434613() {


if(this.#pressed){


let v_4434615_1 = appContext.rootElement.querySelector(".layout.school.horizontal_container");

let v_4434624_1 = findNearestMatchesPerBranch(v_4434615_1, ".layout");




let v_4434628_1 = 2;
let v_4434627_1 = v_4434624_1[v_4434628_1 - 1];
v_4434627_1.style.setProperty("display", false ? "flex" : "none");

}}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("column_112." + this.__uniq_id + ".pressed", true);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}
_onHover(){
const _call_back = null;
this._store.setState("column_112." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("column_112." + this.__uniq_id + ".hovered", false);
}

_onMouseOffClick(){
const _call_back = null;
this._store.setState("column_112." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);


this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("Column112." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("Column112." + this.__uniq_id + ".pressed");
}
}
async function f_Column112(column_112){
column_112.obj = new Column112(column_112);

}
















class Column118{ // Line_Number: 474






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;






this._el.addEventListener('scroll', e => _updateLayerInfo_?.(e));


this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}























}
async function f_Column118(column_118){
column_118.obj = new Column118(column_118);

}









class Column122{ // Line_Number: 495




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
this._store.subscribe("column_122." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([this.v_4965124.bind(this)]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("column_122." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("column_122." + this.__uniq_id + ".pressed", this.#pressed);
}



this._subscribe();
this.loadUI();



}

loadUI() {

this.v_4965124();


}

v_4965124() {


if(this.#pressed){


let v_4965126_1 = appContext.rootElement.querySelector(".layout.school.horizontal_container");

let v_4965135_1 = findNearestMatchesPerBranch(v_4965126_1, ".layout");




let v_4965139_1 = 1;
let v_4965138_1 = v_4965135_1[v_4965139_1 - 1];
v_4965138_1.style.setProperty("display", true ? "flex" : "none");

}}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("column_122." + this.__uniq_id + ".pressed", true);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("column_122." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("Column122." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("Column122." + this.__uniq_id + ".pressed");
}
}
async function f_Column122(column_122){
column_122.obj = new Column122(column_122);

}







class Row124{ // Line_Number: 502





#hovered;
constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;


this._index = 3;





this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);


this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {






this._unsubscribeFns.push(
this._store.subscribe("row_124." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_5035212.bind(this), this.v_5065240.bind(this)]);

}));



}
initUI() {
const _call_back = null;



this.#hovered = false;
if(this._store.getState("row_124." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("row_124." + this.__uniq_id + ".hovered", this.#hovered);
}






this._subscribe();
this.loadUI();



}

loadUI() {

this.v_5035212();
this.v_5065240();


}

v_5035212() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}
v_5065240() {

let v_5055235_1 = !(this.#hovered);

if(v_5055235_1){


this._el.style.setProperty("background", "none");

this._el.style.setProperty("color", "var(--white)");
}}






_onHover(){
const _call_back = null;
this._store.setState("row_124." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("row_124." + this.__uniq_id + ".hovered", false);
}




destroy() {



this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Row124(row_124){
row_124.obj = new Row124(row_124);

}

class dynamic_Row124{ // Line_Number: 502
constructor(el){
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this.createDynamicLayout();
}
createDynamicLayout(){
const tempParent = this._el.parentElement;
const layoutTemp = tempParent.querySelector(".f_Row124");
const oldLayouts = Array.from(this._el.querySelectorAll(":scope > .row.horizontal_container"));
for (const el of oldLayouts) {
traverseAndDestroy(el);
}
oldLayouts.forEach(el => el.remove());
let dynamicWid = tempParent.querySelectorAll(":scope > .container.widget_container");
for (const [i, card] of dynamicWid.entries()) {
const layout = layoutTemp.content.firstElementChild.cloneNode(false);
layout.appendChild(card);
this._el.insertBefore(layout, layoutTemp);
card.style.display = "flex";
}
}
}
async function dynamic_f_Row124(row_124){
row_124.obj = new dynamic_Row124(row_124);
}













class Layout130{ // Line_Number: 534






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





appContext._layered_elements_.push(this);





}








_subscribe() {


let v_5345484_1 = findNearestMatchesPerBranch(this._el.closest("#container_all_class32"), "#button_edit34")[0];
let button_edit34_uniq_id_v_5345488_1 = v_5345484_1.__uniq_id;

let v_5365517_1 = findNearestMatchesPerBranch(this._el.closest("#container_all_class32"), "#button_edit34")[0];
let button_edit34_uniq_id_v_5365521_1 = v_5365517_1.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("button_edit34." + button_edit34_uniq_id_v_5345488_1 + ".open_edit_class", (data) => {
this._renderQueue.enqueue([this.v_5355492.bind(this), this.v_5375527.bind(this)]);

}));
this._unsubscribeFns.push(
this._store.subscribe("button_edit34." + button_edit34_uniq_id_v_5365521_1 + ".open_edit_class", (data) => {
this._renderQueue.enqueue([this.v_5355492.bind(this), this.v_5375527.bind(this)]);

}));







}
initUI() {
const _call_back = null;










this._subscribe();
this.loadUI();



}
layeredElementUpdateUI(initial = false) {
let v_5385550_1 = appContext.rootElement.querySelector(".layout.school.horizontal_container");
let layout_reference_rect_ = v_5385550_1.getBoundingClientRect();

const unscaledLeft = layout_reference_rect_.left / appContext._zoom_factor_;
const unscaledTop  = layout_reference_rect_.top / appContext._zoom_factor_;
this._el.style.left = `${unscaledLeft}px`;
this._el.style.top = `${unscaledTop}px`;
this._el.style.position = 'fixed';
if(initial){
this._el.style.zIndex = (isNaN(+getComputedStyle(v_5385550_1).zIndex) ? 0 : +getComputedStyle(v_5385550_1).zIndex) + 1;
}
updateZIndex();
}
loadUI() {

this.v_5355492();
this.v_5375527();


}

v_5355492() {

let v_5345484_1 = findNearestMatchesPerBranch(this._el.closest("#container_all_class32"), "#button_edit34")[0];
let button_edit34_uniq_id_v_5345488_1 = v_5345484_1.__uniq_id;
let v_5345488_1 = appContext.store.getState("button_edit34." + button_edit34_uniq_id_v_5345488_1 + ".open_edit_class");

if(v_5345488_1){


this._el.style.setProperty("display", true ? "flex" : "none");

}}
v_5375527() {

let v_5365517_1 = findNearestMatchesPerBranch(this._el.closest("#container_all_class32"), "#button_edit34")[0];
let button_edit34_uniq_id_v_5365521_1 = v_5365517_1.__uniq_id;
let v_5365521_1 = appContext.store.getState("button_edit34." + button_edit34_uniq_id_v_5365521_1 + ".open_edit_class");
let v_5365511_1 = !(v_5365521_1);

if(v_5365511_1){


this._el.style.setProperty("display", false ? "flex" : "none");

}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Layout130(layout_130){
layout_130.obj = new Layout130(layout_130);

}























class Column140{ // Line_Number: 579





#hovered;
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


this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {






this._unsubscribeFns.push(
this._store.subscribe("column_140." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_5805967.bind(this), this.v_5835995.bind(this)]);

}));



}
initUI() {
const _call_back = null;



this.#hovered = false;
if(this._store.getState("column_140." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("column_140." + this.__uniq_id + ".hovered", this.#hovered);
}





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_5805967();
this.v_5835995();


}

v_5805967() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}
v_5835995() {

let v_5825990_1 = !(this.#hovered);

if(v_5825990_1){

this._el.style.setProperty("background-color", "var(--violet)");
this._el.style.setProperty("color", "var(--white)");
}}






_onHover(){
const _call_back = null;
this._store.setState("column_140." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("column_140." + this.__uniq_id + ".hovered", false);
}




destroy() {



this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Column140(column_140){
column_140.obj = new Column140(column_140);

}






class Column142{ // Line_Number: 593





#hovered;
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


this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {






this._unsubscribeFns.push(
this._store.subscribe("column_142." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_5946117.bind(this), this.v_5976145.bind(this)]);

}));



}
initUI() {
const _call_back = null;



this.#hovered = false;
if(this._store.getState("column_142." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("column_142." + this.__uniq_id + ".hovered", this.#hovered);
}




this._subscribe();
this.loadUI();



}

loadUI() {

this.v_5946117();
this.v_5976145();


}

v_5946117() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}
v_5976145() {

let v_5966140_1 = !(this.#hovered);

if(v_5966140_1){

this._el.style.setProperty("background-color", "var(--violet)");
this._el.style.setProperty("color", "var(--white)");
}}






_onHover(){
const _call_back = null;
this._store.setState("column_142." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("column_142." + this.__uniq_id + ".hovered", false);
}




destroy() {



this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Column142(column_142){
column_142.obj = new Column142(column_142);

}


















class Column149{ // Line_Number: 626






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;


this._index = 1;






this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}























}
async function f_Column149(column_149){
column_149.obj = new Column149(column_149);

}

class dynamic_Column149{ // Line_Number: 626
constructor(el){
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this.createDynamicLayout();
}
createDynamicLayout(){
const tempParent = this._el.parentElement;
const layoutTemp = tempParent.querySelector(".f_Column149");
const oldLayouts = Array.from(this._el.querySelectorAll(":scope > .column.vertical_container"));
for (const el of oldLayouts) {
traverseAndDestroy(el);
}
oldLayouts.forEach(el => el.remove());
let dynamicWid = tempParent.querySelectorAll(":scope > .box.widget_container");
for (const [i, card] of dynamicWid.entries()) {
const layout = layoutTemp.content.firstElementChild.cloneNode(false);
layout.appendChild(card);
this._el.insertBefore(layout, layoutTemp);
card.style.display = "flex";
}
}
}
async function dynamic_f_Column149(column_149){
column_149.obj = new dynamic_Column149(column_149);
}







class Row151{ // Line_Number: 670






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;






this._el.addEventListener('scroll', e => _updateLayerInfo_?.(e));

this._unsubscribeFns = [];
this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}








_subscribe() {










}
initUI() {
const _call_back = null;










this._subscribe();
this.loadUI();



}

loadUI() {




}














destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Row151(row_151){
row_151.obj = new Row151(row_151);

}


class Column152{ // Line_Number: 677






constructor(el, store = appContext.store, renderQueue = appContext.renderQueue, state_tracker = appContext.state_tracker) {
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this._store = store;
this._renderQueue = renderQueue;
this.__uniq_id = assignInstanceID(this._el);
this._state_tracker = state_tracker;


this._index = 1;






this._currentBreakpoint = null;
this._loadedContainer = null;
appContext.register(this._el, this);











}























}
async function f_Column152(column_152){
column_152.obj = new Column152(column_152);

}

class dynamic_Column152{ // Line_Number: 677
constructor(el){
if (!(el instanceof Element)) throw new Error("Needs a DOM element");
this._el = el;
this.createDynamicLayout();
}
createDynamicLayout(){
const tempParent = this._el.parentElement;
const layoutTemp = tempParent.querySelector(".f_Column152");
const oldLayouts = Array.from(this._el.querySelectorAll(":scope > .column.horizontal_container"));
for (const el of oldLayouts) {
traverseAndDestroy(el);
}
oldLayouts.forEach(el => el.remove());
let dynamicWid = tempParent.querySelectorAll(":scope > .box.widget_container");
for (const [i, card] of dynamicWid.entries()) {
const layout = layoutTemp.content.firstElementChild.cloneNode(false);
layout.appendChild(card);
this._el.insertBefore(layout, layoutTemp);
card.style.display = "flex";
}
}
}
async function dynamic_f_Column152(column_152){
column_152.obj = new dynamic_Column152(column_152);
}















class Column159{ // Line_Number: 699





#hovered;
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


this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {






this._unsubscribeFns.push(
this._store.subscribe("column_159." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_7006816.bind(this), this.v_7036844.bind(this)]);

}));



}
initUI() {
const _call_back = null;



this.#hovered = false;
if(this._store.getState("column_159." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("column_159." + this.__uniq_id + ".hovered", this.#hovered);
}


this._subscribe();
this.loadUI();



}

loadUI() {

this.v_7006816();
this.v_7036844();


}

v_7006816() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--violet)");
this._el.style.setProperty("color", "var(--white)");
}}
v_7036844() {

let v_7026839_1 = !(this.#hovered);

if(v_7026839_1){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}






_onHover(){
const _call_back = null;
this._store.setState("column_159." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("column_159." + this.__uniq_id + ".hovered", false);
}




destroy() {



this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Column159(column_159){
column_159.obj = new Column159(column_159);

}






class Column161{ // Line_Number: 710





#hovered;
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


this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {






this._unsubscribeFns.push(
this._store.subscribe("column_161." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_7116940.bind(this), this.v_7146968.bind(this)]);

}));



}
initUI() {
const _call_back = null;



this.#hovered = false;
if(this._store.getState("column_161." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("column_161." + this.__uniq_id + ".hovered", this.#hovered);
}



this._subscribe();
this.loadUI();



}

loadUI() {

this.v_7116940();
this.v_7146968();


}

v_7116940() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--violet)");
this._el.style.setProperty("color", "var(--white)");
}}
v_7146968() {

let v_7136963_1 = !(this.#hovered);

if(v_7136963_1){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}






_onHover(){
const _call_back = null;
this._store.setState("column_161." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("column_161." + this.__uniq_id + ".hovered", false);
}




destroy() {



this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Column161(column_161){
column_161.obj = new Column161(column_161);

}








class Layout163{ // Line_Number: 722






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





appContext._layered_elements_.push(this);





}








_subscribe() {


let v_7227076_1 = findNearestMatchesPerBranch(this._el.closest("#box_students56"), "#button_edit_student61")[0];
let button_edit_student61_uniq_id_v_7227080_1 = v_7227076_1.__uniq_id;

let v_7247109_1 = findNearestMatchesPerBranch(this._el.closest("#box_students56"), "#button_edit_student61")[0];
let button_edit_student61_uniq_id_v_7247113_1 = v_7247109_1.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("button_edit_student61." + button_edit_student61_uniq_id_v_7227080_1 + ".open_edit_student", (data) => {
this._renderQueue.enqueue([this.v_7237084.bind(this), this.v_7257119.bind(this)]);

}));
this._unsubscribeFns.push(
this._store.subscribe("button_edit_student61." + button_edit_student61_uniq_id_v_7247113_1 + ".open_edit_student", (data) => {
this._renderQueue.enqueue([this.v_7237084.bind(this), this.v_7257119.bind(this)]);

}));







}
initUI() {
const _call_back = null;









this._subscribe();
this.loadUI();



}
layeredElementUpdateUI(initial = false) {
let v_7267142_1 = appContext.rootElement.querySelector(".layout.school.horizontal_container");
let layout_reference_rect_ = v_7267142_1.getBoundingClientRect();

const unscaledLeft = layout_reference_rect_.left / appContext._zoom_factor_;
const unscaledTop  = layout_reference_rect_.top / appContext._zoom_factor_;
this._el.style.left = `${unscaledLeft}px`;
this._el.style.top = `${unscaledTop}px`;
this._el.style.position = 'fixed';
if(initial){
this._el.style.zIndex = (isNaN(+getComputedStyle(v_7267142_1).zIndex) ? 0 : +getComputedStyle(v_7267142_1).zIndex) + 1;
}
updateZIndex();
}
loadUI() {

this.v_7237084();
this.v_7257119();


}

v_7237084() {

let v_7227076_1 = findNearestMatchesPerBranch(this._el.closest("#box_students56"), "#button_edit_student61")[0];
let button_edit_student61_uniq_id_v_7227080_1 = v_7227076_1.__uniq_id;
let v_7227080_1 = appContext.store.getState("button_edit_student61." + button_edit_student61_uniq_id_v_7227080_1 + ".open_edit_student");

if(v_7227080_1){


this._el.style.setProperty("display", true ? "flex" : "none");

}}
v_7257119() {

let v_7247109_1 = findNearestMatchesPerBranch(this._el.closest("#box_students56"), "#button_edit_student61")[0];
let button_edit_student61_uniq_id_v_7247113_1 = v_7247109_1.__uniq_id;
let v_7247113_1 = appContext.store.getState("button_edit_student61." + button_edit_student61_uniq_id_v_7247113_1 + ".open_edit_student");
let v_7247103_1 = !(v_7247113_1);

if(v_7247103_1){


this._el.style.setProperty("display", false ? "flex" : "none");

}}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Layout163(layout_163){
layout_163.obj = new Layout163(layout_163);

}







































class Column179{ // Line_Number: 805





#hovered;
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


this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {






this._unsubscribeFns.push(
this._store.subscribe("column_179." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_8067843.bind(this), this.v_8097871.bind(this)]);

}));



}
initUI() {
const _call_back = null;



this.#hovered = false;
if(this._store.getState("column_179." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("column_179." + this.__uniq_id + ".hovered", this.#hovered);
}







this._subscribe();
this.loadUI();



}

loadUI() {

this.v_8067843();
this.v_8097871();


}

v_8067843() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}
v_8097871() {

let v_8087866_1 = !(this.#hovered);

if(v_8087866_1){

this._el.style.setProperty("background-color", "var(--violet)");
this._el.style.setProperty("color", "var(--white)");
}}






_onHover(){
const _call_back = null;
this._store.setState("column_179." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("column_179." + this.__uniq_id + ".hovered", false);
}




destroy() {



this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Column179(column_179){
column_179.obj = new Column179(column_179);

}






class Column181{ // Line_Number: 824





#hovered;
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


this._onHover = this._onHover.bind(this);
this._el.addEventListener('mouseenter', this._onHover);
this._onHoverExit = this._onHoverExit.bind(this);
this._el.addEventListener('mouseleave', this._onHoverExit);







}








_subscribe() {






this._unsubscribeFns.push(
this._store.subscribe("column_181." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_8258009.bind(this), this.v_8288037.bind(this)]);

}));



}
initUI() {
const _call_back = null;



this.#hovered = false;
if(this._store.getState("column_181." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("column_181." + this.__uniq_id + ".hovered", this.#hovered);
}






this._subscribe();
this.loadUI();



}

loadUI() {

this.v_8258009();
this.v_8288037();


}

v_8258009() {


if(this.#hovered){

this._el.style.setProperty("background-color", "var(--light)");
this._el.style.setProperty("color", "var(--black)");
}}
v_8288037() {

let v_8278032_1 = !(this.#hovered);

if(v_8278032_1){

this._el.style.setProperty("background-color", "var(--violet)");
this._el.style.setProperty("color", "var(--white)");
}}






_onHover(){
const _call_back = null;
this._store.setState("column_181." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("column_181." + this.__uniq_id + ".hovered", false);
}




destroy() {



this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Column181(column_181){
column_181.obj = new Column181(column_181);

}












class Column184{ // Line_Number: 847




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
this._store.subscribe("column_184." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([this.v_8488209.bind(this)]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("column_184." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("column_184." + this.__uniq_id + ".pressed", this.#pressed);
}






this._subscribe();
this.loadUI();



}

loadUI() {

this.v_8488209();


}

v_8488209() {


if(this.#pressed){


let v_8488211_1 = appContext.rootElement.querySelector(".layout.school.horizontal_container");

let v_8488220_1 = findNearestMatchesPerBranch(v_8488211_1, ".layout");




let v_8488224_1 = 2;
let v_8488223_1 = v_8488220_1[v_8488224_1 - 1];
v_8488223_1.style.setProperty("display", true ? "flex" : "none");

}}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("column_184." + this.__uniq_id + ".pressed", true);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("column_184." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("Column184." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("Column184." + this.__uniq_id + ".pressed");
}
}
async function f_Column184(column_184){
column_184.obj = new Column184(column_184);

}










