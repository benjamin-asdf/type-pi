goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37855){
var map__37856 = p__37855;
var map__37856__$1 = cljs.core.__destructure_map(map__37856);
var runtime = map__37856__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37856__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_38517 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_38517)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__37864 = runtime;
var G__37865 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_38517);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__37864,G__37865) : shadow.remote.runtime.shared.process.call(null, G__37864,G__37865));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__37867,res){
var map__37868 = p__37867;
var map__37868__$1 = cljs.core.__destructure_map(map__37868);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37868__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37868__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37869 = res;
var G__37869__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37869,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37869);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37869__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37869__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37892 = arguments.length;
switch (G__37892) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37896,msg,handlers,timeout_after_ms){
var map__37897 = p__37896;
var map__37897__$1 = cljs.core.__destructure_map(map__37897);
var runtime = map__37897__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38565 = arguments.length;
var i__5727__auto___38566 = (0);
while(true){
if((i__5727__auto___38566 < len__5726__auto___38565)){
args__5732__auto__.push((arguments[i__5727__auto___38566]));

var G__38568 = (i__5727__auto___38566 + (1));
i__5727__auto___38566 = G__38568;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37954,ev,args){
var map__37955 = p__37954;
var map__37955__$1 = cljs.core.__destructure_map(map__37955);
var runtime = map__37955__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37961 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37964 = null;
var count__37965 = (0);
var i__37966 = (0);
while(true){
if((i__37966 < count__37965)){
var ext = chunk__37964.cljs$core$IIndexed$_nth$arity$2(null, i__37966);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38569 = seq__37961;
var G__38570 = chunk__37964;
var G__38571 = count__37965;
var G__38572 = (i__37966 + (1));
seq__37961 = G__38569;
chunk__37964 = G__38570;
count__37965 = G__38571;
i__37966 = G__38572;
continue;
} else {
var G__38573 = seq__37961;
var G__38574 = chunk__37964;
var G__38575 = count__37965;
var G__38576 = (i__37966 + (1));
seq__37961 = G__38573;
chunk__37964 = G__38574;
count__37965 = G__38575;
i__37966 = G__38576;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37961);
if(temp__5823__auto__){
var seq__37961__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37961__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37961__$1);
var G__38581 = cljs.core.chunk_rest(seq__37961__$1);
var G__38582 = c__5525__auto__;
var G__38583 = cljs.core.count(c__5525__auto__);
var G__38584 = (0);
seq__37961 = G__38581;
chunk__37964 = G__38582;
count__37965 = G__38583;
i__37966 = G__38584;
continue;
} else {
var ext = cljs.core.first(seq__37961__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38589 = cljs.core.next(seq__37961__$1);
var G__38590 = null;
var G__38591 = (0);
var G__38592 = (0);
seq__37961 = G__38589;
chunk__37964 = G__38590;
count__37965 = G__38591;
i__37966 = G__38592;
continue;
} else {
var G__38593 = cljs.core.next(seq__37961__$1);
var G__38594 = null;
var G__38595 = (0);
var G__38596 = (0);
seq__37961 = G__38593;
chunk__37964 = G__38594;
count__37965 = G__38595;
i__37966 = G__38596;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37939){
var G__37940 = cljs.core.first(seq37939);
var seq37939__$1 = cljs.core.next(seq37939);
var G__37941 = cljs.core.first(seq37939__$1);
var seq37939__$2 = cljs.core.next(seq37939__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37940,G__37941,seq37939__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__38035,p__38036){
var map__38037 = p__38035;
var map__38037__$1 = cljs.core.__destructure_map(map__38037);
var runtime = map__38037__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38038 = p__38036;
var map__38038__$1 = cljs.core.__destructure_map(map__38038);
var msg = map__38038__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38038__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__38044 = cljs.core.deref(state_ref);
var map__38044__$1 = cljs.core.__destructure_map(map__38044);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38044__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38044__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__38072,msg){
var map__38073 = p__38072;
var map__38073__$1 = cljs.core.__destructure_map(map__38073);
var runtime = map__38073__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38073__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__38103,key,p__38104){
var map__38106 = p__38103;
var map__38106__$1 = cljs.core.__destructure_map(map__38106);
var state = map__38106__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38106__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__38107 = p__38104;
var map__38107__$1 = cljs.core.__destructure_map(map__38107);
var spec = map__38107__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__38121,key,spec){
var map__38125 = p__38121;
var map__38125__$1 = cljs.core.__destructure_map(map__38125);
var runtime = map__38125__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38125__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___38631 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___38631 == null)){
} else {
var on_welcome_38632 = temp__5827__auto___38631;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_38632.cljs$core$IFn$_invoke$arity$0 ? on_welcome_38632.cljs$core$IFn$_invoke$arity$0() : on_welcome_38632.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__38149_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__38149_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__38150_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__38150_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__38151_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__38151_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__38152_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__38152_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__38153_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__38153_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__38287,key){
var map__38288 = p__38287;
var map__38288__$1 = cljs.core.__destructure_map(map__38288);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__38302,msg){
var map__38303 = p__38302;
var map__38303__$1 = cljs.core.__destructure_map(map__38303);
var runtime = map__38303__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38303__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__38318,p__38319){
var map__38320 = p__38318;
var map__38320__$1 = cljs.core.__destructure_map(map__38320);
var runtime = map__38320__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38320__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38321 = p__38319;
var map__38321__$1 = cljs.core.__destructure_map(map__38321);
var msg = map__38321__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38321__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38321__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__38427 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__38429 = null;
var count__38430 = (0);
var i__38431 = (0);
while(true){
if((i__38431 < count__38430)){
var map__38502 = chunk__38429.cljs$core$IIndexed$_nth$arity$2(null, i__38431);
var map__38502__$1 = cljs.core.__destructure_map(map__38502);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38502__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__38680 = seq__38427;
var G__38681 = chunk__38429;
var G__38682 = count__38430;
var G__38683 = (i__38431 + (1));
seq__38427 = G__38680;
chunk__38429 = G__38681;
count__38430 = G__38682;
i__38431 = G__38683;
continue;
} else {
var G__38685 = seq__38427;
var G__38686 = chunk__38429;
var G__38687 = count__38430;
var G__38688 = (i__38431 + (1));
seq__38427 = G__38685;
chunk__38429 = G__38686;
count__38430 = G__38687;
i__38431 = G__38688;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38427);
if(temp__5823__auto__){
var seq__38427__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38427__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__38427__$1);
var G__38689 = cljs.core.chunk_rest(seq__38427__$1);
var G__38690 = c__5525__auto__;
var G__38691 = cljs.core.count(c__5525__auto__);
var G__38692 = (0);
seq__38427 = G__38689;
chunk__38429 = G__38690;
count__38430 = G__38691;
i__38431 = G__38692;
continue;
} else {
var map__38513 = cljs.core.first(seq__38427__$1);
var map__38513__$1 = cljs.core.__destructure_map(map__38513);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38513__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__38693 = cljs.core.next(seq__38427__$1);
var G__38694 = null;
var G__38695 = (0);
var G__38696 = (0);
seq__38427 = G__38693;
chunk__38429 = G__38694;
count__38430 = G__38695;
i__38431 = G__38696;
continue;
} else {
var G__38698 = cljs.core.next(seq__38427__$1);
var G__38699 = null;
var G__38700 = (0);
var G__38701 = (0);
seq__38427 = G__38698;
chunk__38429 = G__38699;
count__38430 = G__38700;
i__38431 = G__38701;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
