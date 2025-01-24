goog.provide('bennischwerdtner.typepi.lib');
bennischwerdtner.typepi.lib.ascending = cljs.core.compare;
bennischwerdtner.typepi.lib.descending = (function bennischwerdtner$typepi$lib$descending(a,b){
return cljs.core.compare(b,a);
});
bennischwerdtner.typepi.lib.by = (function bennischwerdtner$typepi$lib$by(var_args){
var G__48658 = arguments.length;
switch (G__48658) {
case 1:
return bennischwerdtner.typepi.lib.by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bennischwerdtner.typepi.lib.by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bennischwerdtner.typepi.lib.by.cljs$core$IFn$_invoke$arity$1 = (function (k){
return bennischwerdtner.typepi.lib.by.cljs$core$IFn$_invoke$arity$2(k,bennischwerdtner.typepi.lib.ascending);
}));

(bennischwerdtner.typepi.lib.by.cljs$core$IFn$_invoke$arity$2 = (function (k,c){
return (function (a,b){
var G__48659 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(a) : k.call(null, a));
var G__48660 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(b) : k.call(null, b));
return (c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(G__48659,G__48660) : c.call(null, G__48659,G__48660));
});
}));

(bennischwerdtner.typepi.lib.by.cljs$lang$maxFixedArity = 2);

bennischwerdtner.typepi.lib.then = (function bennischwerdtner$typepi$lib$then(comparator1,comparator2){
return (function (a,b){
var r = (comparator1.cljs$core$IFn$_invoke$arity$2 ? comparator1.cljs$core$IFn$_invoke$arity$2(a,b) : comparator1.call(null, a,b));
if((r === (0))){
return (comparator2.cljs$core$IFn$_invoke$arity$2 ? comparator2.cljs$core$IFn$_invoke$arity$2(a,b) : comparator2.call(null, a,b));
} else {
return r;
}
});
});
bennischwerdtner.typepi.lib.v_STAR_ = (function bennischwerdtner$typepi$lib$v_STAR_(a,b){
if(((cljs.core.coll_QMARK_(a)) && (cljs.core.coll_QMARK_(b)))){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,a,b));
} else {
if(cljs.core.coll_QMARK_(a)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,a,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b)));
} else {
if(cljs.core.coll_QMARK_(b)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,b,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(a)));
} else {
return (a * b);

}
}
}
});
bennischwerdtner.typepi.lib.v_PLUS_ = (function bennischwerdtner$typepi$lib$v_PLUS_(a,b){
if(((cljs.core.coll_QMARK_(a)) && (cljs.core.coll_QMARK_(b)))){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,b));
} else {
if(cljs.core.coll_QMARK_(a)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b)));
} else {
if(cljs.core.coll_QMARK_(b)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,b,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(a)));
} else {
return (a + b);

}
}
}
});
bennischwerdtner.typepi.lib.v_ = (function bennischwerdtner$typepi$lib$v_(a,b){
return bennischwerdtner.typepi.lib.v_PLUS_(a,bennischwerdtner.typepi.lib.v_STAR_((-1),b));
});
bennischwerdtner.typepi.lib.normalize_vector = (function bennischwerdtner$typepi$lib$normalize_vector(v){
var len = Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48661_SHARP_){
return (p1__48661_SHARP_ * p1__48661_SHARP_);
}),v)));
if((len === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48662_SHARP_){
return (p1__48662_SHARP_ / len);
}),v));
}
});
bennischwerdtner.typepi.lib.vector_len = (function bennischwerdtner$typepi$lib$vector_len(v){
return Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48663_SHARP_){
return (p1__48663_SHARP_ * p1__48663_SHARP_);
}),v)));
});
bennischwerdtner.typepi.lib.play_sound_BANG_ = (function bennischwerdtner$typepi$lib$play_sound_BANG_(path,volume){
var elm = (function (){var or__5002__auto__ = document.getElementById(["audio-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var elm = document.createElement("audio");
(elm.id = ["audio-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));

(elm.src = path);

(elm.type = "audio/mpeg");

(elm.volume = volume);

document.body.appendChild(elm);

return elm;
}
})();
if(cljs.core.not(elm.paused)){
(elm.currentTime = (0));
} else {
}

(elm.volume = volume);

return elm.play();
});
bennischwerdtner.typepi.lib.__GT_entity = (function bennischwerdtner$typepi$lib$__GT_entity(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity?","entity?",-1085193334),true,new cljs.core.Keyword(null,"spawn-time","spawn-time",1452547596),(new Date())], null),opts], 0));
});
bennischwerdtner.typepi.lib.age = (function bennischwerdtner$typepi$lib$age(e){
return ((new Date()) - new cljs.core.Keyword(null,"spawn-time","spawn-time",1452547596).cljs$core$IFn$_invoke$arity$1(e));
});
bennischwerdtner.typepi.lib.gaussianRandish = (function bennischwerdtner$typepi$lib$gaussianRandish(){
return ((cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return (acc + Math.random());
}),(0),cljs.core.range.cljs$core$IFn$_invoke$arity$1((7))) / (7)) - ((1) / (2)));
});
bennischwerdtner.typepi.lib.norm = (function bennischwerdtner$typepi$lib$norm(mean,std){
return (mean + (std * bennischwerdtner.typepi.lib.gaussianRandish()));
});
bennischwerdtner.typepi.lib.brownian_motion = (function bennischwerdtner$typepi$lib$brownian_motion(p__48664,dt){
var map__48665 = p__48664;
var map__48665__$1 = cljs.core.__destructure_map(map__48665);
var e = map__48665__$1;
var kinetic_energy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48665__$1,new cljs.core.Keyword(null,"kinetic-energy","kinetic-energy",-625976084));
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48665__$1,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),bennischwerdtner.typepi.lib.v_PLUS_(acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((kinetic_energy * bennischwerdtner.typepi.lib.norm((0),(1))) * dt) * (20)),(((kinetic_energy * bennischwerdtner.typepi.lib.norm((0),(1))) * dt) * (20))], null)));
});
bennischwerdtner.typepi.lib.apply_forces = (function bennischwerdtner$typepi$lib$apply_forces(e,dt){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(function (a){
return bennischwerdtner.typepi.lib.v_PLUS_(a,bennischwerdtner.typepi.lib.v_STAR_((((1000) * 62.5) * dt),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (acc,f){
return bennischwerdtner.typepi.lib.v_PLUS_(acc,f);
}),cljs.core.vals(new cljs.core.Keyword(null,"forces","forces",337219267).cljs$core$IFn$_invoke$arity$1(e)))));
}));
});
bennischwerdtner.typepi.lib.element_position_1 = (function bennischwerdtner$typepi$lib$element_position_1(id){
var rect = document.getElementById(id).getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(rect.x + (rect.width / (2))),(rect.y + (rect.height / (2)))], null);
});
bennischwerdtner.typepi.lib.rand_on_element = (function bennischwerdtner$typepi$lib$rand_on_element(id){
var rect = document.getElementById(id).getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(rect.x + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(rect.width)),(rect.y + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(rect.height))], null);
});
bennischwerdtner.typepi.lib.attracted = (function bennischwerdtner$typepi$lib$attracted(e,id,force){
var diff = bennischwerdtner.typepi.lib.v_(bennischwerdtner.typepi.lib.element_position_1(id),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e));
var len = bennischwerdtner.typepi.lib.vector_len(diff);
return cljs.core.assoc_in(e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forces","forces",337219267),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attracted","attracted",2000317360),id], null)], null),bennischwerdtner.typepi.lib.v_STAR_(bennischwerdtner.typepi.lib.normalize_vector(diff),force));
});
bennischwerdtner.typepi.lib.physics_update_2d = (function bennischwerdtner$typepi$lib$physics_update_2d(entities,dt){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function bennischwerdtner$typepi$lib$physics_update_2d_$_iter__48666(s__48667){
return (new cljs.core.LazySeq(null,(function (){
var s__48667__$1 = s__48667;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__48667__$1);
if(temp__5823__auto__){
var s__48667__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48667__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__48667__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__48669 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__48668 = (0);
while(true){
if((i__48668 < size__5479__auto__)){
var e = cljs.core._nth(c__5478__auto__,i__48668);
cljs.core.chunk_append(b__48669,(function (){var G__48670 = e;
var G__48670__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48670,new cljs.core.Keyword(null,"velocity","velocity",-581524355),bennischwerdtner.typepi.lib.v_PLUS_,bennischwerdtner.typepi.lib.v_STAR_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e),dt)):G__48670);
var G__48670__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48670__$1,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),bennischwerdtner.typepi.lib.v_STAR_,((1) - ((dt * 62.5) * 0.1))):G__48670__$1);
var G__48670__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48670__$2,new cljs.core.Keyword(null,"pos","pos",-864607220),bennischwerdtner.typepi.lib.v_PLUS_,bennischwerdtner.typepi.lib.v_STAR_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e),dt)):G__48670__$2);
var G__48670__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48670__$3,new cljs.core.Keyword(null,"velocity","velocity",-581524355),bennischwerdtner.typepi.lib.v_STAR_,((1) - ((dt * 62.5) * 0.1))):G__48670__$3);
var G__48670__$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"kinetic-energy","kinetic-energy",-625976084).cljs$core$IFn$_invoke$arity$1(e))?bennischwerdtner.typepi.lib.brownian_motion(G__48670__$4,dt):G__48670__$4);
return bennischwerdtner.typepi.lib.apply_forces(G__48670__$5,dt);

})());

var G__48696 = (i__48668 + (1));
i__48668 = G__48696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48669),bennischwerdtner$typepi$lib$physics_update_2d_$_iter__48666(cljs.core.chunk_rest(s__48667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48669),null);
}
} else {
var e = cljs.core.first(s__48667__$2);
return cljs.core.cons((function (){var G__48671 = e;
var G__48671__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48671,new cljs.core.Keyword(null,"velocity","velocity",-581524355),bennischwerdtner.typepi.lib.v_PLUS_,bennischwerdtner.typepi.lib.v_STAR_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e),dt)):G__48671);
var G__48671__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48671__$1,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),bennischwerdtner.typepi.lib.v_STAR_,((1) - ((dt * 62.5) * 0.1))):G__48671__$1);
var G__48671__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48671__$2,new cljs.core.Keyword(null,"pos","pos",-864607220),bennischwerdtner.typepi.lib.v_PLUS_,bennischwerdtner.typepi.lib.v_STAR_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e),dt)):G__48671__$2);
var G__48671__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48671__$3,new cljs.core.Keyword(null,"velocity","velocity",-581524355),bennischwerdtner.typepi.lib.v_STAR_,((1) - ((dt * 62.5) * 0.1))):G__48671__$3);
var G__48671__$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"kinetic-energy","kinetic-energy",-625976084).cljs$core$IFn$_invoke$arity$1(e))?bennischwerdtner.typepi.lib.brownian_motion(G__48671__$4,dt):G__48671__$4);
return bennischwerdtner.typepi.lib.apply_forces(G__48671__$5,dt);

})(),bennischwerdtner$typepi$lib$physics_update_2d_$_iter__48666(cljs.core.rest(s__48667__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(entities);
})());
});
bennischwerdtner.typepi.lib.distance = (function bennischwerdtner$typepi$lib$distance(a,b){
return Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48672_SHARP_){
return (p1__48672_SHARP_ * p1__48672_SHARP_);
}),bennischwerdtner.typepi.lib.v_(a,b))));
});
if((typeof bennischwerdtner !== 'undefined') && (typeof bennischwerdtner.typepi !== 'undefined') && (typeof bennischwerdtner.typepi.lib !== 'undefined') && (typeof bennischwerdtner.typepi.lib.entity_update !== 'undefined')){
} else {
bennischwerdtner.typepi.lib.entity_update = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48673 = cljs.core.get_global_hierarchy;
return (fexpr__48673.cljs$core$IFn$_invoke$arity$0 ? fexpr__48673.cljs$core$IFn$_invoke$arity$0() : fexpr__48673.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bennischwerdtner.typepi.lib","entity-update"),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
bennischwerdtner.typepi.lib.entity_update.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return x;
}));
bennischwerdtner.typepi.lib.update_entities = (function bennischwerdtner$typepi$lib$update_entities(entities,dt){
var state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"green-points-position","green-points-position",1917436396),bennischwerdtner.typepi.lib.element_position_1("green-points")], null);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function bennischwerdtner$typepi$lib$update_entities_$_iter__48675(s__48676){
return (new cljs.core.LazySeq(null,(function (){
var s__48676__$1 = s__48676;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__48676__$1);
if(temp__5823__auto__){
var s__48676__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48676__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__48676__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__48678 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__48677 = (0);
while(true){
if((i__48677 < size__5479__auto__)){
var e = cljs.core._nth(c__5478__auto__,i__48677);
if(cljs.core.not(new cljs.core.Keyword(null,"kill?","kill?",1633768568).cljs$core$IFn$_invoke$arity$1(e))){
cljs.core.chunk_append(b__48678,(function (){var G__48679 = e;
var G__48679__$1 = bennischwerdtner.typepi.lib.entity_update.cljs$core$IFn$_invoke$arity$2(G__48679,state)
;
var G__48679__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48679__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),((function (i__48677,s__48676__$1,G__48679,G__48679__$1,e,c__5478__auto__,size__5479__auto__,b__48678,s__48676__$2,temp__5823__auto__,state){
return (function (p1__48674_SHARP_){
return (p1__48674_SHARP_ - dt);
});})(i__48677,s__48676__$1,G__48679,G__48679__$1,e,c__5478__auto__,size__5479__auto__,b__48678,s__48676__$2,temp__5823__auto__,state))
):G__48679__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(and__5000__auto__)){
return (new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e) < (0));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48679__$2,new cljs.core.Keyword(null,"kill?","kill?",1633768568),true);
} else {
return G__48679__$2;
}
})());

var G__48699 = (i__48677 + (1));
i__48677 = G__48699;
continue;
} else {
var G__48700 = (i__48677 + (1));
i__48677 = G__48700;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48678),bennischwerdtner$typepi$lib$update_entities_$_iter__48675(cljs.core.chunk_rest(s__48676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48678),null);
}
} else {
var e = cljs.core.first(s__48676__$2);
if(cljs.core.not(new cljs.core.Keyword(null,"kill?","kill?",1633768568).cljs$core$IFn$_invoke$arity$1(e))){
return cljs.core.cons((function (){var G__48680 = e;
var G__48680__$1 = bennischwerdtner.typepi.lib.entity_update.cljs$core$IFn$_invoke$arity$2(G__48680,state)
;
var G__48680__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48680__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),((function (s__48676__$1,G__48680,G__48680__$1,e,s__48676__$2,temp__5823__auto__,state){
return (function (p1__48674_SHARP_){
return (p1__48674_SHARP_ - dt);
});})(s__48676__$1,G__48680,G__48680__$1,e,s__48676__$2,temp__5823__auto__,state))
):G__48680__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(and__5000__auto__)){
return (new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e) < (0));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48680__$2,new cljs.core.Keyword(null,"kill?","kill?",1633768568),true);
} else {
return G__48680__$2;
}
})(),bennischwerdtner$typepi$lib$update_entities_$_iter__48675(cljs.core.rest(s__48676__$2)));
} else {
var G__48701 = cljs.core.rest(s__48676__$2);
s__48676__$1 = G__48701;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(entities);
})());
});
bennischwerdtner.typepi.lib.current_search_params = (function bennischwerdtner$typepi$lib$current_search_params(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$1((function (p__48681){
var vec__48682 = p__48681;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48682,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
})),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(new URLSearchParams(location.search)).entries()))));
});
bennischwerdtner.typepi.lib.event__GT_key_chord = (function bennischwerdtner$typepi$lib$event__GT_key_chord(e){
var key = e.key;
var alt_key_QMARK_ = e.altKey;
var ctrl_key_QMARK_ = e.ctrlKey;
var shift_key_QMARK_ = e.shiftKey;
var meta_key_QMARK_ = e.metaKey;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"alt-key?","alt-key?",234827606),alt_key_QMARK_,new cljs.core.Keyword(null,"ctrl-key?","ctrl-key?",-1119755702),ctrl_key_QMARK_,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),shift_key_QMARK_,new cljs.core.Keyword(null,"meta-key?","meta-key?",940581001),meta_key_QMARK_], null);
});
bennischwerdtner.typepi.lib.key_chord_composed_QMARK_ = (function bennischwerdtner$typepi$lib$key_chord_composed_QMARK_(kc){
var or__5002__auto__ = new cljs.core.Keyword(null,"alt-key?","alt-key?",234827606).cljs$core$IFn$_invoke$arity$1(kc);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"ctrl-key?","ctrl-key?",-1119755702).cljs$core$IFn$_invoke$arity$1(kc);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163).cljs$core$IFn$_invoke$arity$1(kc);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return new cljs.core.Keyword(null,"meta-key?","meta-key?",940581001).cljs$core$IFn$_invoke$arity$1(kc);
}
}
}
});
bennischwerdtner.typepi.lib.key_chord__GT_printed = (function bennischwerdtner$typepi$lib$key_chord__GT_printed(kc){
var keys_and_names = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alt-key?","alt-key?",234827606),"Alt"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl-key?","ctrl-key?",-1119755702),"Ctrl"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),"Shift"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-key?","meta-key?",940581001),"Meta"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(kc)], null)], null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" + ",(function (){var iter__5480__auto__ = (function bennischwerdtner$typepi$lib$key_chord__GT_printed_$_iter__48685(s__48686){
return (new cljs.core.LazySeq(null,(function (){
var s__48686__$1 = s__48686;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__48686__$1);
if(temp__5823__auto__){
var s__48686__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48686__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__48686__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__48688 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__48687 = (0);
while(true){
if((i__48687 < size__5479__auto__)){
var vec__48689 = cljs.core._nth(c__5478__auto__,i__48687);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48689,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48689,(1),null);
if(cljs.core.truth_((kc.cljs$core$IFn$_invoke$arity$1 ? kc.cljs$core$IFn$_invoke$arity$1(k) : kc.call(null, k)))){
cljs.core.chunk_append(b__48688,n);

var G__48702 = (i__48687 + (1));
i__48687 = G__48702;
continue;
} else {
var G__48703 = (i__48687 + (1));
i__48687 = G__48703;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48688),bennischwerdtner$typepi$lib$key_chord__GT_printed_$_iter__48685(cljs.core.chunk_rest(s__48686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48688),null);
}
} else {
var vec__48692 = cljs.core.first(s__48686__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48692,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48692,(1),null);
if(cljs.core.truth_((kc.cljs$core$IFn$_invoke$arity$1 ? kc.cljs$core$IFn$_invoke$arity$1(k) : kc.call(null, k)))){
return cljs.core.cons(n,bennischwerdtner$typepi$lib$key_chord__GT_printed_$_iter__48685(cljs.core.rest(s__48686__$2)));
} else {
var G__48704 = cljs.core.rest(s__48686__$2);
s__48686__$1 = G__48704;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(keys_and_names);
})()));
});
bennischwerdtner.typepi.lib.keychord_or_key__GT_string = (function bennischwerdtner$typepi$lib$keychord_or_key__GT_string(kc){
if(cljs.core.map_QMARK_(kc)){
return bennischwerdtner.typepi.lib.key_chord__GT_printed(kc);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(kc);

}
});

//# sourceMappingURL=bennischwerdtner.typepi.lib.js.map
