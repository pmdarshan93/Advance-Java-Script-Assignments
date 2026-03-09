






class Row21{ // Line_Number: 79




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
this._store.subscribe("row_21." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([this.v_80896.bind(this)]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("row_21." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("row_21." + this.__uniq_id + ".pressed", this.#pressed);
}






this._subscribe();
this.loadUI();



}

loadUI() {

this.v_80896();


}

v_80896() {


if(this.#pressed){



this._el.closest("#layout_18").style.setProperty("display", false ? "flex" : "none");


let v_81905_1 = appContext.rootElement.querySelector(".layout.calculator.horizontal_container");

let v_81914_1 = findNearestMatchesPerBranch(v_81905_1, ".layout");




let v_81917_1 = v_81914_1[2 - 1];
v_81917_1.style.setProperty("display", true ? "flex" : "none");

}}





_onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("row_21." + this.__uniq_id + ".pressed", true);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("row_21." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("Row21." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("Row21." + this.__uniq_id + ".pressed");
}
}
async function f_Row21(row_21){
row_21.obj = new Row21(row_21);

}



































class Row34{ // Line_Number: 163





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
this._store.subscribe("row_34." + this.__uniq_id + ".hovered", (data) => {
this.#hovered = data;
this._renderQueue.enqueue([this.v_1641648.bind(this)]);

}));



}
initUI() {
const _call_back = null;



this.#hovered = false;
if(this._store.getState("row_34." + this.__uniq_id + ".hovered") === undefined){
this._store.setState("row_34." + this.__uniq_id + ".hovered", this.#hovered);
}





this._subscribe();
this.loadUI();



}

loadUI() {

this.v_1641648();


}

v_1641648() {


if(this.#hovered){

console.log("abca");

}}






_onHover(){
const _call_back = null;
this._store.setState("row_34." + this.__uniq_id + ".hovered", true);

}
_onHoverExit(){
const _call_back = null;
this._store.setState("row_34." + this.__uniq_id + ".hovered", false);
}




destroy() {



this._el.removeEventListener('mouseenter', this._onHover);

this._el.removeEventListener('mouseleave', this._onHoverExit);

this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Row34(row_34){
row_34.obj = new Row34(row_34);

}















