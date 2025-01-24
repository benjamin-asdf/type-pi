goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_39287 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_39287(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_39291 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_39291(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37784 = coll;
var G__37785 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37784,G__37785) : shadow.dom.lazy_native_coll_seq.call(null, G__37784,G__37785));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37817 = arguments.length;
switch (G__37817) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37823 = arguments.length;
switch (G__37823) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37826 = arguments.length;
switch (G__37826) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37841 = arguments.length;
switch (G__37841) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37848 = arguments.length;
switch (G__37848) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37854 = arguments.length;
switch (G__37854) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e37866){if((e37866 instanceof Object)){
var e = e37866;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37866;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37877 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37878 = null;
var count__37879 = (0);
var i__37880 = (0);
while(true){
if((i__37880 < count__37879)){
var el = chunk__37878.cljs$core$IIndexed$_nth$arity$2(null, i__37880);
var handler_39331__$1 = ((function (seq__37877,chunk__37878,count__37879,i__37880,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__37877,chunk__37878,count__37879,i__37880,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39331__$1);


var G__39332 = seq__37877;
var G__39333 = chunk__37878;
var G__39334 = count__37879;
var G__39335 = (i__37880 + (1));
seq__37877 = G__39332;
chunk__37878 = G__39333;
count__37879 = G__39334;
i__37880 = G__39335;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37877);
if(temp__5823__auto__){
var seq__37877__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37877__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37877__$1);
var G__39336 = cljs.core.chunk_rest(seq__37877__$1);
var G__39337 = c__5525__auto__;
var G__39338 = cljs.core.count(c__5525__auto__);
var G__39339 = (0);
seq__37877 = G__39336;
chunk__37878 = G__39337;
count__37879 = G__39338;
i__37880 = G__39339;
continue;
} else {
var el = cljs.core.first(seq__37877__$1);
var handler_39340__$1 = ((function (seq__37877,chunk__37878,count__37879,i__37880,el,seq__37877__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__37877,chunk__37878,count__37879,i__37880,el,seq__37877__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39340__$1);


var G__39341 = cljs.core.next(seq__37877__$1);
var G__39342 = null;
var G__39343 = (0);
var G__39344 = (0);
seq__37877 = G__39341;
chunk__37878 = G__39342;
count__37879 = G__39343;
i__37880 = G__39344;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37911 = arguments.length;
switch (G__37911) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37934 = cljs.core.seq(events);
var chunk__37935 = null;
var count__37936 = (0);
var i__37937 = (0);
while(true){
if((i__37937 < count__37936)){
var vec__37973 = chunk__37935.cljs$core$IIndexed$_nth$arity$2(null, i__37937);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37973,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39357 = seq__37934;
var G__39358 = chunk__37935;
var G__39359 = count__37936;
var G__39360 = (i__37937 + (1));
seq__37934 = G__39357;
chunk__37935 = G__39358;
count__37936 = G__39359;
i__37937 = G__39360;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37934);
if(temp__5823__auto__){
var seq__37934__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37934__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37934__$1);
var G__39366 = cljs.core.chunk_rest(seq__37934__$1);
var G__39367 = c__5525__auto__;
var G__39368 = cljs.core.count(c__5525__auto__);
var G__39369 = (0);
seq__37934 = G__39366;
chunk__37935 = G__39367;
count__37936 = G__39368;
i__37937 = G__39369;
continue;
} else {
var vec__37978 = cljs.core.first(seq__37934__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37978,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37978,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39375 = cljs.core.next(seq__37934__$1);
var G__39376 = null;
var G__39377 = (0);
var G__39378 = (0);
seq__37934 = G__39375;
chunk__37935 = G__39376;
count__37936 = G__39377;
i__37937 = G__39378;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37985 = cljs.core.seq(styles);
var chunk__37986 = null;
var count__37987 = (0);
var i__37988 = (0);
while(true){
if((i__37988 < count__37987)){
var vec__38018 = chunk__37986.cljs$core$IIndexed$_nth$arity$2(null, i__37988);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38018,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39382 = seq__37985;
var G__39383 = chunk__37986;
var G__39384 = count__37987;
var G__39385 = (i__37988 + (1));
seq__37985 = G__39382;
chunk__37986 = G__39383;
count__37987 = G__39384;
i__37988 = G__39385;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37985);
if(temp__5823__auto__){
var seq__37985__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37985__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37985__$1);
var G__39391 = cljs.core.chunk_rest(seq__37985__$1);
var G__39392 = c__5525__auto__;
var G__39393 = cljs.core.count(c__5525__auto__);
var G__39394 = (0);
seq__37985 = G__39391;
chunk__37986 = G__39392;
count__37987 = G__39393;
i__37988 = G__39394;
continue;
} else {
var vec__38026 = cljs.core.first(seq__37985__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38026,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39395 = cljs.core.next(seq__37985__$1);
var G__39396 = null;
var G__39397 = (0);
var G__39398 = (0);
seq__37985 = G__39395;
chunk__37986 = G__39396;
count__37987 = G__39397;
i__37988 = G__39398;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__38050_39401 = key;
var G__38050_39402__$1 = (((G__38050_39401 instanceof cljs.core.Keyword))?G__38050_39401.fqn:null);
switch (G__38050_39402__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_39417 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_39417,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_39417,"aria-");
}
})())){
el.setAttribute(ks_39417,value);
} else {
(el[ks_39417] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38135){
var map__38136 = p__38135;
var map__38136__$1 = cljs.core.__destructure_map(map__38136);
var props = map__38136__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38145 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38145,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38145,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38145,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38155 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38155,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38155;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38166 = arguments.length;
switch (G__38166) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38300){
var vec__38304 = p__38300;
var seq__38305 = cljs.core.seq(vec__38304);
var first__38306 = cljs.core.first(seq__38305);
var seq__38305__$1 = cljs.core.next(seq__38305);
var nn = first__38306;
var first__38306__$1 = cljs.core.first(seq__38305__$1);
var seq__38305__$2 = cljs.core.next(seq__38305__$1);
var np = first__38306__$1;
var nc = seq__38305__$2;
var node = vec__38304;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38313 = nn;
var G__38314 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38313,G__38314) : create_fn.call(null, G__38313,G__38314));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38316 = nn;
var G__38317 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38316,G__38317) : create_fn.call(null, G__38316,G__38317));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38326 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38326,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38326,(1),null);
var seq__38337_39431 = cljs.core.seq(node_children);
var chunk__38338_39432 = null;
var count__38339_39433 = (0);
var i__38340_39434 = (0);
while(true){
if((i__38340_39434 < count__38339_39433)){
var child_struct_39435 = chunk__38338_39432.cljs$core$IIndexed$_nth$arity$2(null, i__38340_39434);
var children_39438 = shadow.dom.dom_node(child_struct_39435);
if(cljs.core.seq_QMARK_(children_39438)){
var seq__38440_39439 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39438));
var chunk__38443_39440 = null;
var count__38444_39441 = (0);
var i__38445_39442 = (0);
while(true){
if((i__38445_39442 < count__38444_39441)){
var child_39443 = chunk__38443_39440.cljs$core$IIndexed$_nth$arity$2(null, i__38445_39442);
if(cljs.core.truth_(child_39443)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39443);


var G__39444 = seq__38440_39439;
var G__39445 = chunk__38443_39440;
var G__39446 = count__38444_39441;
var G__39447 = (i__38445_39442 + (1));
seq__38440_39439 = G__39444;
chunk__38443_39440 = G__39445;
count__38444_39441 = G__39446;
i__38445_39442 = G__39447;
continue;
} else {
var G__39448 = seq__38440_39439;
var G__39449 = chunk__38443_39440;
var G__39450 = count__38444_39441;
var G__39451 = (i__38445_39442 + (1));
seq__38440_39439 = G__39448;
chunk__38443_39440 = G__39449;
count__38444_39441 = G__39450;
i__38445_39442 = G__39451;
continue;
}
} else {
var temp__5823__auto___39452 = cljs.core.seq(seq__38440_39439);
if(temp__5823__auto___39452){
var seq__38440_39454__$1 = temp__5823__auto___39452;
if(cljs.core.chunked_seq_QMARK_(seq__38440_39454__$1)){
var c__5525__auto___39455 = cljs.core.chunk_first(seq__38440_39454__$1);
var G__39456 = cljs.core.chunk_rest(seq__38440_39454__$1);
var G__39457 = c__5525__auto___39455;
var G__39458 = cljs.core.count(c__5525__auto___39455);
var G__39459 = (0);
seq__38440_39439 = G__39456;
chunk__38443_39440 = G__39457;
count__38444_39441 = G__39458;
i__38445_39442 = G__39459;
continue;
} else {
var child_39460 = cljs.core.first(seq__38440_39454__$1);
if(cljs.core.truth_(child_39460)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39460);


var G__39461 = cljs.core.next(seq__38440_39454__$1);
var G__39462 = null;
var G__39463 = (0);
var G__39464 = (0);
seq__38440_39439 = G__39461;
chunk__38443_39440 = G__39462;
count__38444_39441 = G__39463;
i__38445_39442 = G__39464;
continue;
} else {
var G__39465 = cljs.core.next(seq__38440_39454__$1);
var G__39466 = null;
var G__39467 = (0);
var G__39468 = (0);
seq__38440_39439 = G__39465;
chunk__38443_39440 = G__39466;
count__38444_39441 = G__39467;
i__38445_39442 = G__39468;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39438);
}


var G__39469 = seq__38337_39431;
var G__39470 = chunk__38338_39432;
var G__39471 = count__38339_39433;
var G__39472 = (i__38340_39434 + (1));
seq__38337_39431 = G__39469;
chunk__38338_39432 = G__39470;
count__38339_39433 = G__39471;
i__38340_39434 = G__39472;
continue;
} else {
var temp__5823__auto___39473 = cljs.core.seq(seq__38337_39431);
if(temp__5823__auto___39473){
var seq__38337_39474__$1 = temp__5823__auto___39473;
if(cljs.core.chunked_seq_QMARK_(seq__38337_39474__$1)){
var c__5525__auto___39475 = cljs.core.chunk_first(seq__38337_39474__$1);
var G__39476 = cljs.core.chunk_rest(seq__38337_39474__$1);
var G__39477 = c__5525__auto___39475;
var G__39478 = cljs.core.count(c__5525__auto___39475);
var G__39479 = (0);
seq__38337_39431 = G__39476;
chunk__38338_39432 = G__39477;
count__38339_39433 = G__39478;
i__38340_39434 = G__39479;
continue;
} else {
var child_struct_39480 = cljs.core.first(seq__38337_39474__$1);
var children_39485 = shadow.dom.dom_node(child_struct_39480);
if(cljs.core.seq_QMARK_(children_39485)){
var seq__38490_39486 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39485));
var chunk__38492_39487 = null;
var count__38493_39488 = (0);
var i__38494_39489 = (0);
while(true){
if((i__38494_39489 < count__38493_39488)){
var child_39490 = chunk__38492_39487.cljs$core$IIndexed$_nth$arity$2(null, i__38494_39489);
if(cljs.core.truth_(child_39490)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39490);


var G__39491 = seq__38490_39486;
var G__39492 = chunk__38492_39487;
var G__39493 = count__38493_39488;
var G__39494 = (i__38494_39489 + (1));
seq__38490_39486 = G__39491;
chunk__38492_39487 = G__39492;
count__38493_39488 = G__39493;
i__38494_39489 = G__39494;
continue;
} else {
var G__39495 = seq__38490_39486;
var G__39496 = chunk__38492_39487;
var G__39497 = count__38493_39488;
var G__39498 = (i__38494_39489 + (1));
seq__38490_39486 = G__39495;
chunk__38492_39487 = G__39496;
count__38493_39488 = G__39497;
i__38494_39489 = G__39498;
continue;
}
} else {
var temp__5823__auto___39499__$1 = cljs.core.seq(seq__38490_39486);
if(temp__5823__auto___39499__$1){
var seq__38490_39500__$1 = temp__5823__auto___39499__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38490_39500__$1)){
var c__5525__auto___39501 = cljs.core.chunk_first(seq__38490_39500__$1);
var G__39502 = cljs.core.chunk_rest(seq__38490_39500__$1);
var G__39503 = c__5525__auto___39501;
var G__39504 = cljs.core.count(c__5525__auto___39501);
var G__39505 = (0);
seq__38490_39486 = G__39502;
chunk__38492_39487 = G__39503;
count__38493_39488 = G__39504;
i__38494_39489 = G__39505;
continue;
} else {
var child_39506 = cljs.core.first(seq__38490_39500__$1);
if(cljs.core.truth_(child_39506)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39506);


var G__39507 = cljs.core.next(seq__38490_39500__$1);
var G__39508 = null;
var G__39509 = (0);
var G__39510 = (0);
seq__38490_39486 = G__39507;
chunk__38492_39487 = G__39508;
count__38493_39488 = G__39509;
i__38494_39489 = G__39510;
continue;
} else {
var G__39511 = cljs.core.next(seq__38490_39500__$1);
var G__39512 = null;
var G__39513 = (0);
var G__39514 = (0);
seq__38490_39486 = G__39511;
chunk__38492_39487 = G__39512;
count__38493_39488 = G__39513;
i__38494_39489 = G__39514;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39485);
}


var G__39515 = cljs.core.next(seq__38337_39474__$1);
var G__39516 = null;
var G__39517 = (0);
var G__39518 = (0);
seq__38337_39431 = G__39515;
chunk__38338_39432 = G__39516;
count__38339_39433 = G__39517;
i__38340_39434 = G__39518;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38535 = cljs.core.seq(node);
var chunk__38536 = null;
var count__38537 = (0);
var i__38538 = (0);
while(true){
if((i__38538 < count__38537)){
var n = chunk__38536.cljs$core$IIndexed$_nth$arity$2(null, i__38538);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__39525 = seq__38535;
var G__39526 = chunk__38536;
var G__39527 = count__38537;
var G__39528 = (i__38538 + (1));
seq__38535 = G__39525;
chunk__38536 = G__39526;
count__38537 = G__39527;
i__38538 = G__39528;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38535);
if(temp__5823__auto__){
var seq__38535__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38535__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__38535__$1);
var G__39531 = cljs.core.chunk_rest(seq__38535__$1);
var G__39532 = c__5525__auto__;
var G__39533 = cljs.core.count(c__5525__auto__);
var G__39534 = (0);
seq__38535 = G__39531;
chunk__38536 = G__39532;
count__38537 = G__39533;
i__38538 = G__39534;
continue;
} else {
var n = cljs.core.first(seq__38535__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__39535 = cljs.core.next(seq__38535__$1);
var G__39536 = null;
var G__39537 = (0);
var G__39538 = (0);
seq__38535 = G__39535;
chunk__38536 = G__39536;
count__38537 = G__39537;
i__38538 = G__39538;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38560 = arguments.length;
switch (G__38560) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__38579 = arguments.length;
switch (G__38579) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__38625 = arguments.length;
switch (G__38625) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___39557 = arguments.length;
var i__5727__auto___39558 = (0);
while(true){
if((i__5727__auto___39558 < len__5726__auto___39557)){
args__5732__auto__.push((arguments[i__5727__auto___39558]));

var G__39560 = (i__5727__auto___39558 + (1));
i__5727__auto___39558 = G__39560;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38728_39567 = cljs.core.seq(nodes);
var chunk__38729_39568 = null;
var count__38730_39569 = (0);
var i__38731_39570 = (0);
while(true){
if((i__38731_39570 < count__38730_39569)){
var node_39571 = chunk__38729_39568.cljs$core$IIndexed$_nth$arity$2(null, i__38731_39570);
fragment.appendChild(shadow.dom._to_dom(node_39571));


var G__39578 = seq__38728_39567;
var G__39579 = chunk__38729_39568;
var G__39580 = count__38730_39569;
var G__39581 = (i__38731_39570 + (1));
seq__38728_39567 = G__39578;
chunk__38729_39568 = G__39579;
count__38730_39569 = G__39580;
i__38731_39570 = G__39581;
continue;
} else {
var temp__5823__auto___39582 = cljs.core.seq(seq__38728_39567);
if(temp__5823__auto___39582){
var seq__38728_39584__$1 = temp__5823__auto___39582;
if(cljs.core.chunked_seq_QMARK_(seq__38728_39584__$1)){
var c__5525__auto___39590 = cljs.core.chunk_first(seq__38728_39584__$1);
var G__39591 = cljs.core.chunk_rest(seq__38728_39584__$1);
var G__39592 = c__5525__auto___39590;
var G__39593 = cljs.core.count(c__5525__auto___39590);
var G__39594 = (0);
seq__38728_39567 = G__39591;
chunk__38729_39568 = G__39592;
count__38730_39569 = G__39593;
i__38731_39570 = G__39594;
continue;
} else {
var node_39595 = cljs.core.first(seq__38728_39584__$1);
fragment.appendChild(shadow.dom._to_dom(node_39595));


var G__39598 = cljs.core.next(seq__38728_39584__$1);
var G__39599 = null;
var G__39600 = (0);
var G__39601 = (0);
seq__38728_39567 = G__39598;
chunk__38729_39568 = G__39599;
count__38730_39569 = G__39600;
i__38731_39570 = G__39601;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38717){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38717));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38739_39607 = cljs.core.seq(scripts);
var chunk__38740_39608 = null;
var count__38741_39609 = (0);
var i__38742_39610 = (0);
while(true){
if((i__38742_39610 < count__38741_39609)){
var vec__38754_39611 = chunk__38740_39608.cljs$core$IIndexed$_nth$arity$2(null, i__38742_39610);
var script_tag_39612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38754_39611,(0),null);
var script_body_39613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38754_39611,(1),null);
eval(script_body_39613);


var G__39614 = seq__38739_39607;
var G__39615 = chunk__38740_39608;
var G__39616 = count__38741_39609;
var G__39617 = (i__38742_39610 + (1));
seq__38739_39607 = G__39614;
chunk__38740_39608 = G__39615;
count__38741_39609 = G__39616;
i__38742_39610 = G__39617;
continue;
} else {
var temp__5823__auto___39618 = cljs.core.seq(seq__38739_39607);
if(temp__5823__auto___39618){
var seq__38739_39619__$1 = temp__5823__auto___39618;
if(cljs.core.chunked_seq_QMARK_(seq__38739_39619__$1)){
var c__5525__auto___39620 = cljs.core.chunk_first(seq__38739_39619__$1);
var G__39622 = cljs.core.chunk_rest(seq__38739_39619__$1);
var G__39623 = c__5525__auto___39620;
var G__39624 = cljs.core.count(c__5525__auto___39620);
var G__39625 = (0);
seq__38739_39607 = G__39622;
chunk__38740_39608 = G__39623;
count__38741_39609 = G__39624;
i__38742_39610 = G__39625;
continue;
} else {
var vec__38757_39626 = cljs.core.first(seq__38739_39619__$1);
var script_tag_39627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38757_39626,(0),null);
var script_body_39628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38757_39626,(1),null);
eval(script_body_39628);


var G__39629 = cljs.core.next(seq__38739_39619__$1);
var G__39630 = null;
var G__39631 = (0);
var G__39632 = (0);
seq__38739_39607 = G__39629;
chunk__38740_39608 = G__39630;
count__38741_39609 = G__39631;
i__38742_39610 = G__39632;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38762){
var vec__38763 = p__38762;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38763,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38763,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__38772 = arguments.length;
switch (G__38772) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__38796 = cljs.core.seq(style_keys);
var chunk__38797 = null;
var count__38798 = (0);
var i__38799 = (0);
while(true){
if((i__38799 < count__38798)){
var it = chunk__38797.cljs$core$IIndexed$_nth$arity$2(null, i__38799);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39640 = seq__38796;
var G__39641 = chunk__38797;
var G__39642 = count__38798;
var G__39643 = (i__38799 + (1));
seq__38796 = G__39640;
chunk__38797 = G__39641;
count__38798 = G__39642;
i__38799 = G__39643;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38796);
if(temp__5823__auto__){
var seq__38796__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38796__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__38796__$1);
var G__39645 = cljs.core.chunk_rest(seq__38796__$1);
var G__39646 = c__5525__auto__;
var G__39647 = cljs.core.count(c__5525__auto__);
var G__39648 = (0);
seq__38796 = G__39645;
chunk__38797 = G__39646;
count__38798 = G__39647;
i__38799 = G__39648;
continue;
} else {
var it = cljs.core.first(seq__38796__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39649 = cljs.core.next(seq__38796__$1);
var G__39650 = null;
var G__39651 = (0);
var G__39652 = (0);
seq__38796 = G__39649;
chunk__38797 = G__39650;
count__38798 = G__39651;
i__38799 = G__39652;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k38822,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__38838 = k38822;
var G__38838__$1 = (((G__38838 instanceof cljs.core.Keyword))?G__38838.fqn:null);
switch (G__38838__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38822,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__38839){
var vec__38840 = p__38839;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38840,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38840,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38821){
var self__ = this;
var G__38821__$1 = this;
return (new cljs.core.RecordIter((0),G__38821__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38823,other38824){
var self__ = this;
var this38823__$1 = this;
return (((!((other38824 == null)))) && ((((this38823__$1.constructor === other38824.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38823__$1.x,other38824.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38823__$1.y,other38824.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38823__$1.__extmap,other38824.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k38822){
var self__ = this;
var this__5307__auto____$1 = this;
var G__38862 = k38822;
var G__38862__$1 = (((G__38862 instanceof cljs.core.Keyword))?G__38862.fqn:null);
switch (G__38862__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38822);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__38821){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__38864 = cljs.core.keyword_identical_QMARK_;
var expr__38865 = k__5309__auto__;
if(cljs.core.truth_((pred__38864.cljs$core$IFn$_invoke$arity$2 ? pred__38864.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38865) : pred__38864.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__38865)))){
return (new shadow.dom.Coordinate(G__38821,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38864.cljs$core$IFn$_invoke$arity$2 ? pred__38864.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38865) : pred__38864.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__38865)))){
return (new shadow.dom.Coordinate(self__.x,G__38821,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__38821),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__38821){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38821,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38836){
var extmap__5342__auto__ = (function (){var G__38899 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38836,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38836)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38899);
} else {
return G__38899;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38836),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38836),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k38954,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__38981 = k38954;
var G__38981__$1 = (((G__38981 instanceof cljs.core.Keyword))?G__38981.fqn:null);
switch (G__38981__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38954,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__38984){
var vec__38985 = p__38984;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38985,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38985,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38953){
var self__ = this;
var G__38953__$1 = this;
return (new cljs.core.RecordIter((0),G__38953__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38955,other38956){
var self__ = this;
var this38955__$1 = this;
return (((!((other38956 == null)))) && ((((this38955__$1.constructor === other38956.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38955__$1.w,other38956.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38955__$1.h,other38956.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38955__$1.__extmap,other38956.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k38954){
var self__ = this;
var this__5307__auto____$1 = this;
var G__39018 = k38954;
var G__39018__$1 = (((G__39018 instanceof cljs.core.Keyword))?G__39018.fqn:null);
switch (G__39018__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38954);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__38953){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__39021 = cljs.core.keyword_identical_QMARK_;
var expr__39022 = k__5309__auto__;
if(cljs.core.truth_((pred__39021.cljs$core$IFn$_invoke$arity$2 ? pred__39021.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39022) : pred__39021.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__39022)))){
return (new shadow.dom.Size(G__38953,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39021.cljs$core$IFn$_invoke$arity$2 ? pred__39021.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39022) : pred__39021.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__39022)))){
return (new shadow.dom.Size(self__.w,G__38953,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__38953),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__38953){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38953,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38973){
var extmap__5342__auto__ = (function (){var G__39032 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38973,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38973)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39032);
} else {
return G__39032;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38973),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38973),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__39763 = (i + (1));
var G__39764 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39763;
ret = G__39764;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39086){
var vec__39088 = p__39086;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39088,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39099 = arguments.length;
switch (G__39099) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__39792 = ps;
var G__39793 = (i + (1));
el__$1 = G__39792;
i = G__39793;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__39146 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39146,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39146,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39146,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39151_39801 = cljs.core.seq(props);
var chunk__39152_39802 = null;
var count__39153_39803 = (0);
var i__39154_39804 = (0);
while(true){
if((i__39154_39804 < count__39153_39803)){
var vec__39168_39805 = chunk__39152_39802.cljs$core$IIndexed$_nth$arity$2(null, i__39154_39804);
var k_39806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39168_39805,(0),null);
var v_39807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39168_39805,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_39806);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39806),v_39807);


var G__39809 = seq__39151_39801;
var G__39810 = chunk__39152_39802;
var G__39811 = count__39153_39803;
var G__39812 = (i__39154_39804 + (1));
seq__39151_39801 = G__39809;
chunk__39152_39802 = G__39810;
count__39153_39803 = G__39811;
i__39154_39804 = G__39812;
continue;
} else {
var temp__5823__auto___39815 = cljs.core.seq(seq__39151_39801);
if(temp__5823__auto___39815){
var seq__39151_39817__$1 = temp__5823__auto___39815;
if(cljs.core.chunked_seq_QMARK_(seq__39151_39817__$1)){
var c__5525__auto___39818 = cljs.core.chunk_first(seq__39151_39817__$1);
var G__39819 = cljs.core.chunk_rest(seq__39151_39817__$1);
var G__39820 = c__5525__auto___39818;
var G__39821 = cljs.core.count(c__5525__auto___39818);
var G__39822 = (0);
seq__39151_39801 = G__39819;
chunk__39152_39802 = G__39820;
count__39153_39803 = G__39821;
i__39154_39804 = G__39822;
continue;
} else {
var vec__39173_39824 = cljs.core.first(seq__39151_39817__$1);
var k_39825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39173_39824,(0),null);
var v_39826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39173_39824,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_39825);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39825),v_39826);


var G__39833 = cljs.core.next(seq__39151_39817__$1);
var G__39834 = null;
var G__39835 = (0);
var G__39836 = (0);
seq__39151_39801 = G__39833;
chunk__39152_39802 = G__39834;
count__39153_39803 = G__39835;
i__39154_39804 = G__39836;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__39188 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39188,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39188,(1),null);
var seq__39191_39842 = cljs.core.seq(node_children);
var chunk__39193_39843 = null;
var count__39194_39844 = (0);
var i__39195_39845 = (0);
while(true){
if((i__39195_39845 < count__39194_39844)){
var child_struct_39846 = chunk__39193_39843.cljs$core$IIndexed$_nth$arity$2(null, i__39195_39845);
if((!((child_struct_39846 == null)))){
if(typeof child_struct_39846 === 'string'){
var text_39848 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39848),child_struct_39846].join(''));
} else {
var children_39854 = shadow.dom.svg_node(child_struct_39846);
if(cljs.core.seq_QMARK_(children_39854)){
var seq__39229_39856 = cljs.core.seq(children_39854);
var chunk__39231_39857 = null;
var count__39232_39858 = (0);
var i__39233_39859 = (0);
while(true){
if((i__39233_39859 < count__39232_39858)){
var child_39862 = chunk__39231_39857.cljs$core$IIndexed$_nth$arity$2(null, i__39233_39859);
if(cljs.core.truth_(child_39862)){
node.appendChild(child_39862);


var G__39867 = seq__39229_39856;
var G__39868 = chunk__39231_39857;
var G__39869 = count__39232_39858;
var G__39870 = (i__39233_39859 + (1));
seq__39229_39856 = G__39867;
chunk__39231_39857 = G__39868;
count__39232_39858 = G__39869;
i__39233_39859 = G__39870;
continue;
} else {
var G__39876 = seq__39229_39856;
var G__39877 = chunk__39231_39857;
var G__39878 = count__39232_39858;
var G__39879 = (i__39233_39859 + (1));
seq__39229_39856 = G__39876;
chunk__39231_39857 = G__39877;
count__39232_39858 = G__39878;
i__39233_39859 = G__39879;
continue;
}
} else {
var temp__5823__auto___39884 = cljs.core.seq(seq__39229_39856);
if(temp__5823__auto___39884){
var seq__39229_39885__$1 = temp__5823__auto___39884;
if(cljs.core.chunked_seq_QMARK_(seq__39229_39885__$1)){
var c__5525__auto___39888 = cljs.core.chunk_first(seq__39229_39885__$1);
var G__39889 = cljs.core.chunk_rest(seq__39229_39885__$1);
var G__39890 = c__5525__auto___39888;
var G__39891 = cljs.core.count(c__5525__auto___39888);
var G__39892 = (0);
seq__39229_39856 = G__39889;
chunk__39231_39857 = G__39890;
count__39232_39858 = G__39891;
i__39233_39859 = G__39892;
continue;
} else {
var child_39896 = cljs.core.first(seq__39229_39885__$1);
if(cljs.core.truth_(child_39896)){
node.appendChild(child_39896);


var G__39898 = cljs.core.next(seq__39229_39885__$1);
var G__39899 = null;
var G__39900 = (0);
var G__39901 = (0);
seq__39229_39856 = G__39898;
chunk__39231_39857 = G__39899;
count__39232_39858 = G__39900;
i__39233_39859 = G__39901;
continue;
} else {
var G__39902 = cljs.core.next(seq__39229_39885__$1);
var G__39903 = null;
var G__39904 = (0);
var G__39905 = (0);
seq__39229_39856 = G__39902;
chunk__39231_39857 = G__39903;
count__39232_39858 = G__39904;
i__39233_39859 = G__39905;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39854);
}
}


var G__39906 = seq__39191_39842;
var G__39907 = chunk__39193_39843;
var G__39908 = count__39194_39844;
var G__39909 = (i__39195_39845 + (1));
seq__39191_39842 = G__39906;
chunk__39193_39843 = G__39907;
count__39194_39844 = G__39908;
i__39195_39845 = G__39909;
continue;
} else {
var G__39910 = seq__39191_39842;
var G__39911 = chunk__39193_39843;
var G__39912 = count__39194_39844;
var G__39913 = (i__39195_39845 + (1));
seq__39191_39842 = G__39910;
chunk__39193_39843 = G__39911;
count__39194_39844 = G__39912;
i__39195_39845 = G__39913;
continue;
}
} else {
var temp__5823__auto___39914 = cljs.core.seq(seq__39191_39842);
if(temp__5823__auto___39914){
var seq__39191_39917__$1 = temp__5823__auto___39914;
if(cljs.core.chunked_seq_QMARK_(seq__39191_39917__$1)){
var c__5525__auto___39918 = cljs.core.chunk_first(seq__39191_39917__$1);
var G__39919 = cljs.core.chunk_rest(seq__39191_39917__$1);
var G__39920 = c__5525__auto___39918;
var G__39921 = cljs.core.count(c__5525__auto___39918);
var G__39922 = (0);
seq__39191_39842 = G__39919;
chunk__39193_39843 = G__39920;
count__39194_39844 = G__39921;
i__39195_39845 = G__39922;
continue;
} else {
var child_struct_39924 = cljs.core.first(seq__39191_39917__$1);
if((!((child_struct_39924 == null)))){
if(typeof child_struct_39924 === 'string'){
var text_39925 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39925),child_struct_39924].join(''));
} else {
var children_39926 = shadow.dom.svg_node(child_struct_39924);
if(cljs.core.seq_QMARK_(children_39926)){
var seq__39242_39927 = cljs.core.seq(children_39926);
var chunk__39244_39928 = null;
var count__39245_39929 = (0);
var i__39246_39930 = (0);
while(true){
if((i__39246_39930 < count__39245_39929)){
var child_39932 = chunk__39244_39928.cljs$core$IIndexed$_nth$arity$2(null, i__39246_39930);
if(cljs.core.truth_(child_39932)){
node.appendChild(child_39932);


var G__39933 = seq__39242_39927;
var G__39934 = chunk__39244_39928;
var G__39935 = count__39245_39929;
var G__39936 = (i__39246_39930 + (1));
seq__39242_39927 = G__39933;
chunk__39244_39928 = G__39934;
count__39245_39929 = G__39935;
i__39246_39930 = G__39936;
continue;
} else {
var G__39938 = seq__39242_39927;
var G__39939 = chunk__39244_39928;
var G__39940 = count__39245_39929;
var G__39941 = (i__39246_39930 + (1));
seq__39242_39927 = G__39938;
chunk__39244_39928 = G__39939;
count__39245_39929 = G__39940;
i__39246_39930 = G__39941;
continue;
}
} else {
var temp__5823__auto___39945__$1 = cljs.core.seq(seq__39242_39927);
if(temp__5823__auto___39945__$1){
var seq__39242_39947__$1 = temp__5823__auto___39945__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39242_39947__$1)){
var c__5525__auto___39948 = cljs.core.chunk_first(seq__39242_39947__$1);
var G__39949 = cljs.core.chunk_rest(seq__39242_39947__$1);
var G__39950 = c__5525__auto___39948;
var G__39951 = cljs.core.count(c__5525__auto___39948);
var G__39952 = (0);
seq__39242_39927 = G__39949;
chunk__39244_39928 = G__39950;
count__39245_39929 = G__39951;
i__39246_39930 = G__39952;
continue;
} else {
var child_39954 = cljs.core.first(seq__39242_39947__$1);
if(cljs.core.truth_(child_39954)){
node.appendChild(child_39954);


var G__39956 = cljs.core.next(seq__39242_39947__$1);
var G__39957 = null;
var G__39958 = (0);
var G__39959 = (0);
seq__39242_39927 = G__39956;
chunk__39244_39928 = G__39957;
count__39245_39929 = G__39958;
i__39246_39930 = G__39959;
continue;
} else {
var G__39960 = cljs.core.next(seq__39242_39947__$1);
var G__39961 = null;
var G__39962 = (0);
var G__39963 = (0);
seq__39242_39927 = G__39960;
chunk__39244_39928 = G__39961;
count__39245_39929 = G__39962;
i__39246_39930 = G__39963;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39926);
}
}


var G__39964 = cljs.core.next(seq__39191_39917__$1);
var G__39965 = null;
var G__39966 = (0);
var G__39967 = (0);
seq__39191_39842 = G__39964;
chunk__39193_39843 = G__39965;
count__39194_39844 = G__39966;
i__39195_39845 = G__39967;
continue;
} else {
var G__39968 = cljs.core.next(seq__39191_39917__$1);
var G__39969 = null;
var G__39970 = (0);
var G__39971 = (0);
seq__39191_39842 = G__39968;
chunk__39193_39843 = G__39969;
count__39194_39844 = G__39970;
i__39195_39845 = G__39971;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___39985 = arguments.length;
var i__5727__auto___39987 = (0);
while(true){
if((i__5727__auto___39987 < len__5726__auto___39985)){
args__5732__auto__.push((arguments[i__5727__auto___39987]));

var G__39988 = (i__5727__auto___39987 + (1));
i__5727__auto___39987 = G__39988;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39275){
var G__39276 = cljs.core.first(seq39275);
var seq39275__$1 = cljs.core.next(seq39275);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39276,seq39275__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
