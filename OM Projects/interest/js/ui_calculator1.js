
class UiCalculator1{ // Line_Number: 6

#amount;




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








this.#amount = 0;
if(this._store.getState("ui_calculator1." + this.__uniq_id + ".amount") === undefined){
this._store.setState("ui_calculator1." + this.__uniq_id + ".amount",this.#amount);
}



}


set amount(val){this.#amount = val;}
get amount(){return this.#amount;}




_subscribe() {



this._unsubscribeFns.push(
this._store.subscribe("ui_calculator1." + this.__uniq_id + ".amount", (data) => {
this.#amount = data;

this._renderQueue.enqueue(this);}));









}
initUI() {
const _call_back = null;





this._subscribe();




}












destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];
this._store.deleteState("ui_calculator1." + this.__uniq_id + ".amount");
this._store.router._routes.delete("ui_calculator1." + this.__uniq_id + ".amount");

}
}
async function f_UiCalculator1(ui_calculator1){
ui_calculator1.obj = new UiCalculator1(ui_calculator1);

}























class Button13{ // Line_Number: 23




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
this._store.subscribe("button_13." + this.__uniq_id + ".pressed", (data) => {
this.#pressed = data;
this._renderQueue.enqueue([]);

}));




}
initUI() {
const _call_back = null;


this.#pressed = false;
if(this._store.getState("button_13." + this.__uniq_id + ".pressed") === undefined){
this._store.setState("button_13." + this.__uniq_id + ".pressed", this.#pressed);
}


this._subscribe();




}





async _onClick(e){
const _call_back = null;
e.stopPropagation();
this._store.setState("button_13." + this.__uniq_id + ".pressed", true);
let v_29234_1 = appContext.rootElement.querySelector(".ui.calculator.widget_container");
let v_29241_1 = findNearestMatchesPerBranch(v_29234_1, "#text_field_10")[0];
let v_29245_1 = v_29241_1?.["value"];
let v_29250_1 = appContext.rootElement.querySelector(".ui.calculator.widget_container");
let v_29257_1 = findNearestMatchesPerBranch(v_29250_1, "#text_field_11")[0];
let v_29261_1 = v_29257_1?.["value"];
let v_29248_1 = v_29245_1*v_29261_1;
let v_29268_1 = appContext.rootElement.querySelector(".ui.calculator.widget_container");
let v_29275_1 = findNearestMatchesPerBranch(v_29268_1, "#text_field_12")[0];
let v_29279_1 = v_29275_1?.["value"];
let v_29266_1 = v_29248_1*v_29279_1;
let v_29232_1 = v_29266_1;

let v_29284_1 = v_29232_1/100;
let v_29223_1 = appContext.rootElement.querySelector(".ui.calculator.widget_container");
let ui_calculator1_uniq_id_v_29227_1 = v_29223_1.__uniq_id;
this._store.setState("ui_calculator1." + ui_calculator1_uniq_id_v_29227_1 + ".amount",v_29284_1);

appContext.setLastClicked(this);
requestAnimationFrame(()=>{_updateLayerInfo_();})
}



_onMouseOffClick(){
const _call_back = null;
this._store.setState("button_13." + this.__uniq_id + ".pressed", false);

}


destroy() {
this._el.removeEventListener('click', this._onClick);




this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];

this._store.deleteState("Button13." + this.__uniq_id + ".pressed");
this._store.router._routes.delete("Button13." + this.__uniq_id + ".pressed");
}
}
async function f_Button13(button_13){
button_13.obj = new Button13(button_13);

}









class Text16{ // Line_Number: 25






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
let v_25191_1 = appContext.rootElement.querySelector(".ui.calculator.widget_container");
let ui_calculator1_uniq_id_v_25195_1 = v_25191_1.__uniq_id;



this._unsubscribeFns.push(
this._store.subscribe("ui_calculator1." + ui_calculator1_uniq_id_v_25195_1 + ".amount", (data) => {
this._renderQueue.enqueue([this.v_25189.bind(this)]);

}));








}
initUI() {
const _call_back = null;





this._subscribe();
this.loadUI();



}

loadUI() {
this.v_25189();



}
v_25189() {
let v_25191_1 = appContext.rootElement.querySelector(".ui.calculator.widget_container");
let ui_calculator1_uniq_id_v_25195_1 = v_25191_1.__uniq_id;
let v_25195_1 = appContext.store.getState("ui_calculator1." + ui_calculator1_uniq_id_v_25195_1 + ".amount");
let v_25201_1 = v_25195_1.toString();
this._el.textContent = v_25201_1;
}













destroy() {





this._unsubscribeFns.forEach(fn => fn && fn());
this._unsubscribeFns = [];


}
}
async function f_Text16(text_16){
text_16.obj = new Text16(text_16);

}



