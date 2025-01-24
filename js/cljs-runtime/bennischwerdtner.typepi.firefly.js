goog.provide('bennischwerdtner.typepi.firefly');
bennischwerdtner.typepi.firefly.firefly = (function bennischwerdtner$typepi$firefly$firefly(p__40510){
var map__40511 = p__40510;
var map__40511__$1 = cljs.core.__destructure_map(map__40511);
var vec__40512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40511__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40512,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40512,(1),null);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40511__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(bennischwerdtner.typepi.firefly.css.cljs$core$IFn$_invoke$arity$7 ? bennischwerdtner.typepi.firefly.css.cljs$core$IFn$_invoke$arity$7(new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"p-2","p-2",1382724345),new cljs.core.Keyword(null,"min-w-0","min-w-0",-427498769),new cljs.core.Keyword(null,"text-center","text-center",653739096),new cljs.core.Keyword(null,"text-black","text-black",-1990796629),new cljs.core.Keyword(null,"rounded-full","rounded-full",1066527095),"c-background-success") : bennischwerdtner.typepi.firefly.css.call(null, new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"p-2","p-2",1382724345),new cljs.core.Keyword(null,"min-w-0","min-w-0",-427498769),new cljs.core.Keyword(null,"text-center","text-center",653739096),new cljs.core.Keyword(null,"text-black","text-black",-1990796629),new cljs.core.Keyword(null,"rounded-full","rounded-full",1066527095),"c-background-success")),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y], null)], null)], null);
});
bennischwerdtner.typepi.firefly.update_firefly = (function bennischwerdtner$typepi$firefly$update_firefly(e,state){
var reached_target_QMARK_ = ((function (){var G__40515 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var G__40516 = new cljs.core.Keyword(null,"green-points-position","green-points-position",1917436396).cljs$core$IFn$_invoke$arity$1(state);
return (bennischwerdtner.typepi.firefly.distance.cljs$core$IFn$_invoke$arity$2 ? bennischwerdtner.typepi.firefly.distance.cljs$core$IFn$_invoke$arity$2(G__40515,G__40516) : bennischwerdtner.typepi.firefly.distance.call(null, G__40515,G__40516));
})() < (40));
if(reached_target_QMARK_){
(bennischwerdtner.typepi.firefly.set_wobble_anim_BANG_.cljs$core$IFn$_invoke$arity$0 ? bennischwerdtner.typepi.firefly.set_wobble_anim_BANG_.cljs$core$IFn$_invoke$arity$0() : bennischwerdtner.typepi.firefly.set_wobble_anim_BANG_.call(null, ));

if(((300) < (bennischwerdtner.typepi.firefly.age.cljs$core$IFn$_invoke$arity$1 ? bennischwerdtner.typepi.firefly.age.cljs$core$IFn$_invoke$arity$1(e) : bennischwerdtner.typepi.firefly.age.call(null, e)))){
(bennischwerdtner.typepi.firefly.play_sound_BANG_.cljs$core$IFn$_invoke$arity$2 ? bennischwerdtner.typepi.firefly.play_sound_BANG_.cljs$core$IFn$_invoke$arity$2("757612__qubodup__pop-sound.wav",0.5) : bennischwerdtner.typepi.firefly.play_sound_BANG_.call(null, "757612__qubodup__pop-sound.wav",0.5));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.firefly.points,cljs.core.update,new cljs.core.Keyword(null,"green","green",-945526839),cljs.core.inc);
} else {
}

var G__40517 = e;
var G__40517__$1 = ((((((500) < (bennischwerdtner.typepi.firefly.age.cljs$core$IFn$_invoke$arity$1 ? bennischwerdtner.typepi.firefly.age.cljs$core$IFn$_invoke$arity$1(e) : bennischwerdtner.typepi.firefly.age.call(null, e)))) && (((bennischwerdtner.typepi.firefly.age.cljs$core$IFn$_invoke$arity$1 ? bennischwerdtner.typepi.firefly.age.cljs$core$IFn$_invoke$arity$1(e) : bennischwerdtner.typepi.firefly.age.call(null, e)) < (1000)))))?(bennischwerdtner.typepi.firefly.attracted.cljs$core$IFn$_invoke$arity$3 ? bennischwerdtner.typepi.firefly.attracted.cljs$core$IFn$_invoke$arity$3(G__40517,"green-points",0.5) : bennischwerdtner.typepi.firefly.attracted.call(null, G__40517,"green-points",0.5)):G__40517);
var G__40517__$2 = ((((1000) < (bennischwerdtner.typepi.firefly.age.cljs$core$IFn$_invoke$arity$1 ? bennischwerdtner.typepi.firefly.age.cljs$core$IFn$_invoke$arity$1(e) : bennischwerdtner.typepi.firefly.age.call(null, e))))?(bennischwerdtner.typepi.firefly.attracted.cljs$core$IFn$_invoke$arity$3 ? bennischwerdtner.typepi.firefly.attracted.cljs$core$IFn$_invoke$arity$3(G__40517__$1,"green-points",0.4) : bennischwerdtner.typepi.firefly.attracted.call(null, G__40517__$1,"green-points",0.4)):G__40517__$1);
if(reached_target_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40517__$2,new cljs.core.Keyword(null,"kill?","kill?",1633768568),true);
} else {
return G__40517__$2;
}
});
bennischwerdtner.typepi.firefly.spawn_firefly_BANG_ = (function bennischwerdtner$typepi$firefly$spawn_firefly_BANG_(){
(bennischwerdtner.typepi.firefly.set_blink_anim_BANG_.cljs$core$IFn$_invoke$arity$0 ? bennischwerdtner.typepi.firefly.set_blink_anim_BANG_.cljs$core$IFn$_invoke$arity$0() : bennischwerdtner.typepi.firefly.set_blink_anim_BANG_.call(null, ));

(bennischwerdtner.typepi.firefly.play_sound_BANG_.cljs$core$IFn$_invoke$arity$2 ? bennischwerdtner.typepi.firefly.play_sound_BANG_.cljs$core$IFn$_invoke$arity$2("plop.mp3",(1)) : bennischwerdtner.typepi.firefly.play_sound_BANG_.call(null, "plop.mp3",(1)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.firefly.game_state,cljs.core.update,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (ents){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(ents,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((1),(function (){
var G__40518 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"firefly?","firefly?",2082094686),true,new cljs.core.Keyword(null,"forces","forces",337219267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0.1 + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.05))], null)], null),new cljs.core.Keyword(null,"kinetic-energy","kinetic-energy",-625976084),(100),new cljs.core.Keyword(null,"pos","pos",-864607220),(bennischwerdtner.typepi.firefly.rand_on_element.cljs$core$IFn$_invoke$arity$1 ? bennischwerdtner.typepi.firefly.rand_on_element.cljs$core$IFn$_invoke$arity$1("number-text") : bennischwerdtner.typepi.firefly.rand_on_element.call(null, "number-text")),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(bennischwerdtner.typepi.firefly.norm.cljs$core$IFn$_invoke$arity$2 ? bennischwerdtner.typepi.firefly.norm.cljs$core$IFn$_invoke$arity$2((0),(6000)) : bennischwerdtner.typepi.firefly.norm.call(null, (0),(6000))),(bennischwerdtner.typepi.firefly.norm.cljs$core$IFn$_invoke$arity$2 ? bennischwerdtner.typepi.firefly.norm.cljs$core$IFn$_invoke$arity$2((-1000),(1000)) : bennischwerdtner.typepi.firefly.norm.call(null, (-1000),(1000)))], null)], null);
return (bennischwerdtner.typepi.firefly.__GT_entity.cljs$core$IFn$_invoke$arity$1 ? bennischwerdtner.typepi.firefly.__GT_entity.cljs$core$IFn$_invoke$arity$1(G__40518) : bennischwerdtner.typepi.firefly.__GT_entity.call(null, G__40518));
})));
}));
});

//# sourceMappingURL=bennischwerdtner.typepi.firefly.js.map
