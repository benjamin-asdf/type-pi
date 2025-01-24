goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44533,p__44534){
var map__44539 = p__44533;
var map__44539__$1 = cljs.core.__destructure_map(map__44539);
var svc = map__44539__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44539__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44539__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44539__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44540 = p__44534;
var map__44540__$1 = cljs.core.__destructure_map(map__44540);
var msg = map__44540__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44540__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44540__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44540__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44540__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44560,p__44561){
var map__44622 = p__44560;
var map__44622__$1 = cljs.core.__destructure_map(map__44622);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44622__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44623 = p__44561;
var map__44623__$1 = cljs.core.__destructure_map(map__44623);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44623__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44639,p__44640){
var map__44641 = p__44639;
var map__44641__$1 = cljs.core.__destructure_map(map__44641);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44641__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44641__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44642 = p__44640;
var map__44642__$1 = cljs.core.__destructure_map(map__44642);
var msg = map__44642__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44642__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44655,tid){
var map__44657 = p__44655;
var map__44657__$1 = cljs.core.__destructure_map(map__44657);
var svc = map__44657__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44657__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44688 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44689 = null;
var count__44690 = (0);
var i__44691 = (0);
while(true){
if((i__44691 < count__44690)){
var vec__44722 = chunk__44689.cljs$core$IIndexed$_nth$arity$2(null, i__44691);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44722,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44722,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44776 = seq__44688;
var G__44777 = chunk__44689;
var G__44778 = count__44690;
var G__44779 = (i__44691 + (1));
seq__44688 = G__44776;
chunk__44689 = G__44777;
count__44690 = G__44778;
i__44691 = G__44779;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44688);
if(temp__5823__auto__){
var seq__44688__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44688__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44688__$1);
var G__44784 = cljs.core.chunk_rest(seq__44688__$1);
var G__44785 = c__5525__auto__;
var G__44786 = cljs.core.count(c__5525__auto__);
var G__44787 = (0);
seq__44688 = G__44784;
chunk__44689 = G__44785;
count__44690 = G__44786;
i__44691 = G__44787;
continue;
} else {
var vec__44740 = cljs.core.first(seq__44688__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44740,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44740,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44788 = cljs.core.next(seq__44688__$1);
var G__44789 = null;
var G__44790 = (0);
var G__44791 = (0);
seq__44688 = G__44788;
chunk__44689 = G__44789;
count__44690 = G__44790;
i__44691 = G__44791;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44670_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44670_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44675_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44675_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44676_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44676_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44677_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44677_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44745){
var map__44747 = p__44745;
var map__44747__$1 = cljs.core.__destructure_map(map__44747);
var svc = map__44747__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44747__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44747__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
