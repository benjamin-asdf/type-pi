goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___45359 = arguments.length;
var i__5727__auto___45360 = (0);
while(true){
if((i__5727__auto___45360 < len__5726__auto___45359)){
args__5732__auto__.push((arguments[i__5727__auto___45360]));

var G__45361 = (i__5727__auto___45360 + (1));
i__5727__auto___45360 = G__45361;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45079){
var G__45080 = cljs.core.first(seq45079);
var seq45079__$1 = cljs.core.next(seq45079);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45080,seq45079__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45083 = cljs.core.seq(sources);
var chunk__45084 = null;
var count__45085 = (0);
var i__45086 = (0);
while(true){
if((i__45086 < count__45085)){
var map__45091 = chunk__45084.cljs$core$IIndexed$_nth$arity$2(null, i__45086);
var map__45091__$1 = cljs.core.__destructure_map(map__45091);
var src = map__45091__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45091__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45091__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45091__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45091__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45092){var e_45362 = e45092;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45362);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45362.message)].join('')));
}

var G__45363 = seq__45083;
var G__45364 = chunk__45084;
var G__45365 = count__45085;
var G__45366 = (i__45086 + (1));
seq__45083 = G__45363;
chunk__45084 = G__45364;
count__45085 = G__45365;
i__45086 = G__45366;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45083);
if(temp__5823__auto__){
var seq__45083__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45083__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45083__$1);
var G__45367 = cljs.core.chunk_rest(seq__45083__$1);
var G__45368 = c__5525__auto__;
var G__45369 = cljs.core.count(c__5525__auto__);
var G__45370 = (0);
seq__45083 = G__45367;
chunk__45084 = G__45368;
count__45085 = G__45369;
i__45086 = G__45370;
continue;
} else {
var map__45093 = cljs.core.first(seq__45083__$1);
var map__45093__$1 = cljs.core.__destructure_map(map__45093);
var src = map__45093__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45093__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45093__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45093__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45093__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45094){var e_45371 = e45094;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45371);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45371.message)].join('')));
}

var G__45372 = cljs.core.next(seq__45083__$1);
var G__45373 = null;
var G__45374 = (0);
var G__45375 = (0);
seq__45083 = G__45372;
chunk__45084 = G__45373;
count__45085 = G__45374;
i__45086 = G__45375;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__45095 = cljs.core.seq(js_requires);
var chunk__45096 = null;
var count__45097 = (0);
var i__45098 = (0);
while(true){
if((i__45098 < count__45097)){
var js_ns = chunk__45096.cljs$core$IIndexed$_nth$arity$2(null, i__45098);
var require_str_45376 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45376);


var G__45377 = seq__45095;
var G__45378 = chunk__45096;
var G__45379 = count__45097;
var G__45380 = (i__45098 + (1));
seq__45095 = G__45377;
chunk__45096 = G__45378;
count__45097 = G__45379;
i__45098 = G__45380;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45095);
if(temp__5823__auto__){
var seq__45095__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45095__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45095__$1);
var G__45381 = cljs.core.chunk_rest(seq__45095__$1);
var G__45382 = c__5525__auto__;
var G__45383 = cljs.core.count(c__5525__auto__);
var G__45384 = (0);
seq__45095 = G__45381;
chunk__45096 = G__45382;
count__45097 = G__45383;
i__45098 = G__45384;
continue;
} else {
var js_ns = cljs.core.first(seq__45095__$1);
var require_str_45385 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45385);


var G__45386 = cljs.core.next(seq__45095__$1);
var G__45387 = null;
var G__45388 = (0);
var G__45389 = (0);
seq__45095 = G__45386;
chunk__45096 = G__45387;
count__45097 = G__45388;
i__45098 = G__45389;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45100){
var map__45101 = p__45100;
var map__45101__$1 = cljs.core.__destructure_map(map__45101);
var msg = map__45101__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45101__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45102(s__45103){
return (new cljs.core.LazySeq(null,(function (){
var s__45103__$1 = s__45103;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__45103__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__45108 = cljs.core.first(xs__6383__auto__);
var map__45108__$1 = cljs.core.__destructure_map(map__45108);
var src = map__45108__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45108__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45108__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__45103__$1,map__45108,map__45108__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45101,map__45101__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45102_$_iter__45104(s__45105){
return (new cljs.core.LazySeq(null,((function (s__45103__$1,map__45108,map__45108__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45101,map__45101__$1,msg,info,reload_info){
return (function (){
var s__45105__$1 = s__45105;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__45105__$1);
if(temp__5823__auto____$1){
var s__45105__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45105__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__45105__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__45107 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__45106 = (0);
while(true){
if((i__45106 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__45106);
cljs.core.chunk_append(b__45107,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45390 = (i__45106 + (1));
i__45106 = G__45390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45107),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45102_$_iter__45104(cljs.core.chunk_rest(s__45105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45107),null);
}
} else {
var warning = cljs.core.first(s__45105__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45102_$_iter__45104(cljs.core.rest(s__45105__$2)));
}
} else {
return null;
}
break;
}
});})(s__45103__$1,map__45108,map__45108__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45101,map__45101__$1,msg,info,reload_info))
,null,null));
});})(s__45103__$1,map__45108,map__45108__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45101,map__45101__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45102(cljs.core.rest(s__45103__$1)));
} else {
var G__45391 = cljs.core.rest(s__45103__$1);
s__45103__$1 = G__45391;
continue;
}
} else {
var G__45392 = cljs.core.rest(s__45103__$1);
s__45103__$1 = G__45392;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__45109_45393 = cljs.core.seq(warnings);
var chunk__45110_45394 = null;
var count__45111_45395 = (0);
var i__45112_45396 = (0);
while(true){
if((i__45112_45396 < count__45111_45395)){
var map__45115_45397 = chunk__45110_45394.cljs$core$IIndexed$_nth$arity$2(null, i__45112_45396);
var map__45115_45398__$1 = cljs.core.__destructure_map(map__45115_45397);
var w_45399 = map__45115_45398__$1;
var msg_45400__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45115_45398__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45115_45398__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45115_45398__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45115_45398__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45403)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45401),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45402),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45400__$1)].join(''));


var G__45404 = seq__45109_45393;
var G__45405 = chunk__45110_45394;
var G__45406 = count__45111_45395;
var G__45407 = (i__45112_45396 + (1));
seq__45109_45393 = G__45404;
chunk__45110_45394 = G__45405;
count__45111_45395 = G__45406;
i__45112_45396 = G__45407;
continue;
} else {
var temp__5823__auto___45408 = cljs.core.seq(seq__45109_45393);
if(temp__5823__auto___45408){
var seq__45109_45409__$1 = temp__5823__auto___45408;
if(cljs.core.chunked_seq_QMARK_(seq__45109_45409__$1)){
var c__5525__auto___45410 = cljs.core.chunk_first(seq__45109_45409__$1);
var G__45411 = cljs.core.chunk_rest(seq__45109_45409__$1);
var G__45412 = c__5525__auto___45410;
var G__45413 = cljs.core.count(c__5525__auto___45410);
var G__45414 = (0);
seq__45109_45393 = G__45411;
chunk__45110_45394 = G__45412;
count__45111_45395 = G__45413;
i__45112_45396 = G__45414;
continue;
} else {
var map__45116_45415 = cljs.core.first(seq__45109_45409__$1);
var map__45116_45416__$1 = cljs.core.__destructure_map(map__45116_45415);
var w_45417 = map__45116_45416__$1;
var msg_45418__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45116_45416__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45116_45416__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45116_45416__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45116_45416__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45421)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45419),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45420),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45418__$1)].join(''));


var G__45422 = cljs.core.next(seq__45109_45409__$1);
var G__45423 = null;
var G__45424 = (0);
var G__45425 = (0);
seq__45109_45393 = G__45422;
chunk__45110_45394 = G__45423;
count__45111_45395 = G__45424;
i__45112_45396 = G__45425;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45099_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45099_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45117){
var map__45118 = p__45117;
var map__45118__$1 = cljs.core.__destructure_map(map__45118);
var msg = map__45118__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__45119 = cljs.core.seq(updates);
var chunk__45121 = null;
var count__45122 = (0);
var i__45123 = (0);
while(true){
if((i__45123 < count__45122)){
var path = chunk__45121.cljs$core$IIndexed$_nth$arity$2(null, i__45123);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45233_45426 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45237_45427 = null;
var count__45238_45428 = (0);
var i__45239_45429 = (0);
while(true){
if((i__45239_45429 < count__45238_45428)){
var node_45430 = chunk__45237_45427.cljs$core$IIndexed$_nth$arity$2(null, i__45239_45429);
if(cljs.core.not(node_45430.shadow$old)){
var path_match_45431 = shadow.cljs.devtools.client.browser.match_paths(node_45430.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45431)){
var new_link_45432 = (function (){var G__45265 = node_45430.cloneNode(true);
G__45265.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45431),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45265;
})();
(node_45430.shadow$old = true);

(new_link_45432.onload = ((function (seq__45233_45426,chunk__45237_45427,count__45238_45428,i__45239_45429,seq__45119,chunk__45121,count__45122,i__45123,new_link_45432,path_match_45431,node_45430,path,map__45118,map__45118__$1,msg,updates,reload_info){
return (function (e){
var seq__45266_45433 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45268_45434 = null;
var count__45269_45435 = (0);
var i__45270_45436 = (0);
while(true){
if((i__45270_45436 < count__45269_45435)){
var map__45274_45437 = chunk__45268_45434.cljs$core$IIndexed$_nth$arity$2(null, i__45270_45436);
var map__45274_45438__$1 = cljs.core.__destructure_map(map__45274_45437);
var task_45439 = map__45274_45438__$1;
var fn_str_45440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45274_45438__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45274_45438__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45442 = goog.getObjectByName(fn_str_45440,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45441)].join(''));

(fn_obj_45442.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45442.cljs$core$IFn$_invoke$arity$2(path,new_link_45432) : fn_obj_45442.call(null, path,new_link_45432));


var G__45443 = seq__45266_45433;
var G__45444 = chunk__45268_45434;
var G__45445 = count__45269_45435;
var G__45446 = (i__45270_45436 + (1));
seq__45266_45433 = G__45443;
chunk__45268_45434 = G__45444;
count__45269_45435 = G__45445;
i__45270_45436 = G__45446;
continue;
} else {
var temp__5823__auto___45447 = cljs.core.seq(seq__45266_45433);
if(temp__5823__auto___45447){
var seq__45266_45448__$1 = temp__5823__auto___45447;
if(cljs.core.chunked_seq_QMARK_(seq__45266_45448__$1)){
var c__5525__auto___45449 = cljs.core.chunk_first(seq__45266_45448__$1);
var G__45450 = cljs.core.chunk_rest(seq__45266_45448__$1);
var G__45451 = c__5525__auto___45449;
var G__45452 = cljs.core.count(c__5525__auto___45449);
var G__45453 = (0);
seq__45266_45433 = G__45450;
chunk__45268_45434 = G__45451;
count__45269_45435 = G__45452;
i__45270_45436 = G__45453;
continue;
} else {
var map__45275_45454 = cljs.core.first(seq__45266_45448__$1);
var map__45275_45455__$1 = cljs.core.__destructure_map(map__45275_45454);
var task_45456 = map__45275_45455__$1;
var fn_str_45457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45275_45455__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45275_45455__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45459 = goog.getObjectByName(fn_str_45457,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45458)].join(''));

(fn_obj_45459.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45459.cljs$core$IFn$_invoke$arity$2(path,new_link_45432) : fn_obj_45459.call(null, path,new_link_45432));


var G__45460 = cljs.core.next(seq__45266_45448__$1);
var G__45461 = null;
var G__45462 = (0);
var G__45463 = (0);
seq__45266_45433 = G__45460;
chunk__45268_45434 = G__45461;
count__45269_45435 = G__45462;
i__45270_45436 = G__45463;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45430);
});})(seq__45233_45426,chunk__45237_45427,count__45238_45428,i__45239_45429,seq__45119,chunk__45121,count__45122,i__45123,new_link_45432,path_match_45431,node_45430,path,map__45118,map__45118__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45431], 0));

goog.dom.insertSiblingAfter(new_link_45432,node_45430);


var G__45464 = seq__45233_45426;
var G__45465 = chunk__45237_45427;
var G__45466 = count__45238_45428;
var G__45467 = (i__45239_45429 + (1));
seq__45233_45426 = G__45464;
chunk__45237_45427 = G__45465;
count__45238_45428 = G__45466;
i__45239_45429 = G__45467;
continue;
} else {
var G__45468 = seq__45233_45426;
var G__45469 = chunk__45237_45427;
var G__45470 = count__45238_45428;
var G__45471 = (i__45239_45429 + (1));
seq__45233_45426 = G__45468;
chunk__45237_45427 = G__45469;
count__45238_45428 = G__45470;
i__45239_45429 = G__45471;
continue;
}
} else {
var G__45472 = seq__45233_45426;
var G__45473 = chunk__45237_45427;
var G__45474 = count__45238_45428;
var G__45475 = (i__45239_45429 + (1));
seq__45233_45426 = G__45472;
chunk__45237_45427 = G__45473;
count__45238_45428 = G__45474;
i__45239_45429 = G__45475;
continue;
}
} else {
var temp__5823__auto___45476 = cljs.core.seq(seq__45233_45426);
if(temp__5823__auto___45476){
var seq__45233_45477__$1 = temp__5823__auto___45476;
if(cljs.core.chunked_seq_QMARK_(seq__45233_45477__$1)){
var c__5525__auto___45478 = cljs.core.chunk_first(seq__45233_45477__$1);
var G__45479 = cljs.core.chunk_rest(seq__45233_45477__$1);
var G__45480 = c__5525__auto___45478;
var G__45481 = cljs.core.count(c__5525__auto___45478);
var G__45482 = (0);
seq__45233_45426 = G__45479;
chunk__45237_45427 = G__45480;
count__45238_45428 = G__45481;
i__45239_45429 = G__45482;
continue;
} else {
var node_45483 = cljs.core.first(seq__45233_45477__$1);
if(cljs.core.not(node_45483.shadow$old)){
var path_match_45484 = shadow.cljs.devtools.client.browser.match_paths(node_45483.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45484)){
var new_link_45485 = (function (){var G__45276 = node_45483.cloneNode(true);
G__45276.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45484),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45276;
})();
(node_45483.shadow$old = true);

(new_link_45485.onload = ((function (seq__45233_45426,chunk__45237_45427,count__45238_45428,i__45239_45429,seq__45119,chunk__45121,count__45122,i__45123,new_link_45485,path_match_45484,node_45483,seq__45233_45477__$1,temp__5823__auto___45476,path,map__45118,map__45118__$1,msg,updates,reload_info){
return (function (e){
var seq__45277_45486 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45279_45487 = null;
var count__45280_45488 = (0);
var i__45281_45489 = (0);
while(true){
if((i__45281_45489 < count__45280_45488)){
var map__45285_45490 = chunk__45279_45487.cljs$core$IIndexed$_nth$arity$2(null, i__45281_45489);
var map__45285_45491__$1 = cljs.core.__destructure_map(map__45285_45490);
var task_45492 = map__45285_45491__$1;
var fn_str_45493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285_45491__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285_45491__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45495 = goog.getObjectByName(fn_str_45493,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45494)].join(''));

(fn_obj_45495.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45495.cljs$core$IFn$_invoke$arity$2(path,new_link_45485) : fn_obj_45495.call(null, path,new_link_45485));


var G__45496 = seq__45277_45486;
var G__45497 = chunk__45279_45487;
var G__45498 = count__45280_45488;
var G__45499 = (i__45281_45489 + (1));
seq__45277_45486 = G__45496;
chunk__45279_45487 = G__45497;
count__45280_45488 = G__45498;
i__45281_45489 = G__45499;
continue;
} else {
var temp__5823__auto___45500__$1 = cljs.core.seq(seq__45277_45486);
if(temp__5823__auto___45500__$1){
var seq__45277_45501__$1 = temp__5823__auto___45500__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45277_45501__$1)){
var c__5525__auto___45502 = cljs.core.chunk_first(seq__45277_45501__$1);
var G__45503 = cljs.core.chunk_rest(seq__45277_45501__$1);
var G__45504 = c__5525__auto___45502;
var G__45505 = cljs.core.count(c__5525__auto___45502);
var G__45506 = (0);
seq__45277_45486 = G__45503;
chunk__45279_45487 = G__45504;
count__45280_45488 = G__45505;
i__45281_45489 = G__45506;
continue;
} else {
var map__45286_45507 = cljs.core.first(seq__45277_45501__$1);
var map__45286_45508__$1 = cljs.core.__destructure_map(map__45286_45507);
var task_45509 = map__45286_45508__$1;
var fn_str_45510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286_45508__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286_45508__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45512 = goog.getObjectByName(fn_str_45510,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45511)].join(''));

(fn_obj_45512.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45512.cljs$core$IFn$_invoke$arity$2(path,new_link_45485) : fn_obj_45512.call(null, path,new_link_45485));


var G__45513 = cljs.core.next(seq__45277_45501__$1);
var G__45514 = null;
var G__45515 = (0);
var G__45516 = (0);
seq__45277_45486 = G__45513;
chunk__45279_45487 = G__45514;
count__45280_45488 = G__45515;
i__45281_45489 = G__45516;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45483);
});})(seq__45233_45426,chunk__45237_45427,count__45238_45428,i__45239_45429,seq__45119,chunk__45121,count__45122,i__45123,new_link_45485,path_match_45484,node_45483,seq__45233_45477__$1,temp__5823__auto___45476,path,map__45118,map__45118__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45484], 0));

goog.dom.insertSiblingAfter(new_link_45485,node_45483);


var G__45517 = cljs.core.next(seq__45233_45477__$1);
var G__45518 = null;
var G__45519 = (0);
var G__45520 = (0);
seq__45233_45426 = G__45517;
chunk__45237_45427 = G__45518;
count__45238_45428 = G__45519;
i__45239_45429 = G__45520;
continue;
} else {
var G__45521 = cljs.core.next(seq__45233_45477__$1);
var G__45522 = null;
var G__45523 = (0);
var G__45524 = (0);
seq__45233_45426 = G__45521;
chunk__45237_45427 = G__45522;
count__45238_45428 = G__45523;
i__45239_45429 = G__45524;
continue;
}
} else {
var G__45525 = cljs.core.next(seq__45233_45477__$1);
var G__45526 = null;
var G__45527 = (0);
var G__45528 = (0);
seq__45233_45426 = G__45525;
chunk__45237_45427 = G__45526;
count__45238_45428 = G__45527;
i__45239_45429 = G__45528;
continue;
}
}
} else {
}
}
break;
}


var G__45529 = seq__45119;
var G__45530 = chunk__45121;
var G__45531 = count__45122;
var G__45532 = (i__45123 + (1));
seq__45119 = G__45529;
chunk__45121 = G__45530;
count__45122 = G__45531;
i__45123 = G__45532;
continue;
} else {
var G__45533 = seq__45119;
var G__45534 = chunk__45121;
var G__45535 = count__45122;
var G__45536 = (i__45123 + (1));
seq__45119 = G__45533;
chunk__45121 = G__45534;
count__45122 = G__45535;
i__45123 = G__45536;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45119);
if(temp__5823__auto__){
var seq__45119__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45119__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__45119__$1);
var G__45537 = cljs.core.chunk_rest(seq__45119__$1);
var G__45538 = c__5525__auto__;
var G__45539 = cljs.core.count(c__5525__auto__);
var G__45540 = (0);
seq__45119 = G__45537;
chunk__45121 = G__45538;
count__45122 = G__45539;
i__45123 = G__45540;
continue;
} else {
var path = cljs.core.first(seq__45119__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45287_45541 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45291_45542 = null;
var count__45292_45543 = (0);
var i__45293_45544 = (0);
while(true){
if((i__45293_45544 < count__45292_45543)){
var node_45545 = chunk__45291_45542.cljs$core$IIndexed$_nth$arity$2(null, i__45293_45544);
if(cljs.core.not(node_45545.shadow$old)){
var path_match_45546 = shadow.cljs.devtools.client.browser.match_paths(node_45545.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45546)){
var new_link_45547 = (function (){var G__45319 = node_45545.cloneNode(true);
G__45319.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45546),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45319;
})();
(node_45545.shadow$old = true);

(new_link_45547.onload = ((function (seq__45287_45541,chunk__45291_45542,count__45292_45543,i__45293_45544,seq__45119,chunk__45121,count__45122,i__45123,new_link_45547,path_match_45546,node_45545,path,seq__45119__$1,temp__5823__auto__,map__45118,map__45118__$1,msg,updates,reload_info){
return (function (e){
var seq__45320_45548 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45322_45549 = null;
var count__45323_45550 = (0);
var i__45324_45551 = (0);
while(true){
if((i__45324_45551 < count__45323_45550)){
var map__45328_45552 = chunk__45322_45549.cljs$core$IIndexed$_nth$arity$2(null, i__45324_45551);
var map__45328_45553__$1 = cljs.core.__destructure_map(map__45328_45552);
var task_45554 = map__45328_45553__$1;
var fn_str_45555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45328_45553__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45328_45553__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45557 = goog.getObjectByName(fn_str_45555,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45556)].join(''));

(fn_obj_45557.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45557.cljs$core$IFn$_invoke$arity$2(path,new_link_45547) : fn_obj_45557.call(null, path,new_link_45547));


var G__45558 = seq__45320_45548;
var G__45559 = chunk__45322_45549;
var G__45560 = count__45323_45550;
var G__45561 = (i__45324_45551 + (1));
seq__45320_45548 = G__45558;
chunk__45322_45549 = G__45559;
count__45323_45550 = G__45560;
i__45324_45551 = G__45561;
continue;
} else {
var temp__5823__auto___45562__$1 = cljs.core.seq(seq__45320_45548);
if(temp__5823__auto___45562__$1){
var seq__45320_45563__$1 = temp__5823__auto___45562__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45320_45563__$1)){
var c__5525__auto___45564 = cljs.core.chunk_first(seq__45320_45563__$1);
var G__45565 = cljs.core.chunk_rest(seq__45320_45563__$1);
var G__45566 = c__5525__auto___45564;
var G__45567 = cljs.core.count(c__5525__auto___45564);
var G__45568 = (0);
seq__45320_45548 = G__45565;
chunk__45322_45549 = G__45566;
count__45323_45550 = G__45567;
i__45324_45551 = G__45568;
continue;
} else {
var map__45329_45569 = cljs.core.first(seq__45320_45563__$1);
var map__45329_45570__$1 = cljs.core.__destructure_map(map__45329_45569);
var task_45571 = map__45329_45570__$1;
var fn_str_45572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45329_45570__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45329_45570__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45574 = goog.getObjectByName(fn_str_45572,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45573)].join(''));

(fn_obj_45574.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45574.cljs$core$IFn$_invoke$arity$2(path,new_link_45547) : fn_obj_45574.call(null, path,new_link_45547));


var G__45575 = cljs.core.next(seq__45320_45563__$1);
var G__45576 = null;
var G__45577 = (0);
var G__45578 = (0);
seq__45320_45548 = G__45575;
chunk__45322_45549 = G__45576;
count__45323_45550 = G__45577;
i__45324_45551 = G__45578;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45545);
});})(seq__45287_45541,chunk__45291_45542,count__45292_45543,i__45293_45544,seq__45119,chunk__45121,count__45122,i__45123,new_link_45547,path_match_45546,node_45545,path,seq__45119__$1,temp__5823__auto__,map__45118,map__45118__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45546], 0));

goog.dom.insertSiblingAfter(new_link_45547,node_45545);


var G__45579 = seq__45287_45541;
var G__45580 = chunk__45291_45542;
var G__45581 = count__45292_45543;
var G__45582 = (i__45293_45544 + (1));
seq__45287_45541 = G__45579;
chunk__45291_45542 = G__45580;
count__45292_45543 = G__45581;
i__45293_45544 = G__45582;
continue;
} else {
var G__45583 = seq__45287_45541;
var G__45584 = chunk__45291_45542;
var G__45585 = count__45292_45543;
var G__45586 = (i__45293_45544 + (1));
seq__45287_45541 = G__45583;
chunk__45291_45542 = G__45584;
count__45292_45543 = G__45585;
i__45293_45544 = G__45586;
continue;
}
} else {
var G__45587 = seq__45287_45541;
var G__45588 = chunk__45291_45542;
var G__45589 = count__45292_45543;
var G__45590 = (i__45293_45544 + (1));
seq__45287_45541 = G__45587;
chunk__45291_45542 = G__45588;
count__45292_45543 = G__45589;
i__45293_45544 = G__45590;
continue;
}
} else {
var temp__5823__auto___45591__$1 = cljs.core.seq(seq__45287_45541);
if(temp__5823__auto___45591__$1){
var seq__45287_45592__$1 = temp__5823__auto___45591__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45287_45592__$1)){
var c__5525__auto___45593 = cljs.core.chunk_first(seq__45287_45592__$1);
var G__45594 = cljs.core.chunk_rest(seq__45287_45592__$1);
var G__45595 = c__5525__auto___45593;
var G__45596 = cljs.core.count(c__5525__auto___45593);
var G__45597 = (0);
seq__45287_45541 = G__45594;
chunk__45291_45542 = G__45595;
count__45292_45543 = G__45596;
i__45293_45544 = G__45597;
continue;
} else {
var node_45598 = cljs.core.first(seq__45287_45592__$1);
if(cljs.core.not(node_45598.shadow$old)){
var path_match_45599 = shadow.cljs.devtools.client.browser.match_paths(node_45598.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45599)){
var new_link_45600 = (function (){var G__45330 = node_45598.cloneNode(true);
G__45330.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45599),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45330;
})();
(node_45598.shadow$old = true);

(new_link_45600.onload = ((function (seq__45287_45541,chunk__45291_45542,count__45292_45543,i__45293_45544,seq__45119,chunk__45121,count__45122,i__45123,new_link_45600,path_match_45599,node_45598,seq__45287_45592__$1,temp__5823__auto___45591__$1,path,seq__45119__$1,temp__5823__auto__,map__45118,map__45118__$1,msg,updates,reload_info){
return (function (e){
var seq__45331_45601 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45333_45602 = null;
var count__45334_45603 = (0);
var i__45335_45604 = (0);
while(true){
if((i__45335_45604 < count__45334_45603)){
var map__45339_45605 = chunk__45333_45602.cljs$core$IIndexed$_nth$arity$2(null, i__45335_45604);
var map__45339_45606__$1 = cljs.core.__destructure_map(map__45339_45605);
var task_45607 = map__45339_45606__$1;
var fn_str_45608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45339_45606__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45339_45606__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45610 = goog.getObjectByName(fn_str_45608,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45609)].join(''));

(fn_obj_45610.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45610.cljs$core$IFn$_invoke$arity$2(path,new_link_45600) : fn_obj_45610.call(null, path,new_link_45600));


var G__45611 = seq__45331_45601;
var G__45612 = chunk__45333_45602;
var G__45613 = count__45334_45603;
var G__45614 = (i__45335_45604 + (1));
seq__45331_45601 = G__45611;
chunk__45333_45602 = G__45612;
count__45334_45603 = G__45613;
i__45335_45604 = G__45614;
continue;
} else {
var temp__5823__auto___45615__$2 = cljs.core.seq(seq__45331_45601);
if(temp__5823__auto___45615__$2){
var seq__45331_45616__$1 = temp__5823__auto___45615__$2;
if(cljs.core.chunked_seq_QMARK_(seq__45331_45616__$1)){
var c__5525__auto___45617 = cljs.core.chunk_first(seq__45331_45616__$1);
var G__45618 = cljs.core.chunk_rest(seq__45331_45616__$1);
var G__45619 = c__5525__auto___45617;
var G__45620 = cljs.core.count(c__5525__auto___45617);
var G__45621 = (0);
seq__45331_45601 = G__45618;
chunk__45333_45602 = G__45619;
count__45334_45603 = G__45620;
i__45335_45604 = G__45621;
continue;
} else {
var map__45340_45622 = cljs.core.first(seq__45331_45616__$1);
var map__45340_45623__$1 = cljs.core.__destructure_map(map__45340_45622);
var task_45624 = map__45340_45623__$1;
var fn_str_45625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45340_45623__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45340_45623__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45627 = goog.getObjectByName(fn_str_45625,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45626)].join(''));

(fn_obj_45627.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45627.cljs$core$IFn$_invoke$arity$2(path,new_link_45600) : fn_obj_45627.call(null, path,new_link_45600));


var G__45628 = cljs.core.next(seq__45331_45616__$1);
var G__45629 = null;
var G__45630 = (0);
var G__45631 = (0);
seq__45331_45601 = G__45628;
chunk__45333_45602 = G__45629;
count__45334_45603 = G__45630;
i__45335_45604 = G__45631;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45598);
});})(seq__45287_45541,chunk__45291_45542,count__45292_45543,i__45293_45544,seq__45119,chunk__45121,count__45122,i__45123,new_link_45600,path_match_45599,node_45598,seq__45287_45592__$1,temp__5823__auto___45591__$1,path,seq__45119__$1,temp__5823__auto__,map__45118,map__45118__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45599], 0));

goog.dom.insertSiblingAfter(new_link_45600,node_45598);


var G__45632 = cljs.core.next(seq__45287_45592__$1);
var G__45633 = null;
var G__45634 = (0);
var G__45635 = (0);
seq__45287_45541 = G__45632;
chunk__45291_45542 = G__45633;
count__45292_45543 = G__45634;
i__45293_45544 = G__45635;
continue;
} else {
var G__45636 = cljs.core.next(seq__45287_45592__$1);
var G__45637 = null;
var G__45638 = (0);
var G__45639 = (0);
seq__45287_45541 = G__45636;
chunk__45291_45542 = G__45637;
count__45292_45543 = G__45638;
i__45293_45544 = G__45639;
continue;
}
} else {
var G__45640 = cljs.core.next(seq__45287_45592__$1);
var G__45641 = null;
var G__45642 = (0);
var G__45643 = (0);
seq__45287_45541 = G__45640;
chunk__45291_45542 = G__45641;
count__45292_45543 = G__45642;
i__45293_45544 = G__45643;
continue;
}
}
} else {
}
}
break;
}


var G__45644 = cljs.core.next(seq__45119__$1);
var G__45645 = null;
var G__45646 = (0);
var G__45647 = (0);
seq__45119 = G__45644;
chunk__45121 = G__45645;
count__45122 = G__45646;
i__45123 = G__45647;
continue;
} else {
var G__45648 = cljs.core.next(seq__45119__$1);
var G__45649 = null;
var G__45650 = (0);
var G__45651 = (0);
seq__45119 = G__45648;
chunk__45121 = G__45649;
count__45122 = G__45650;
i__45123 = G__45651;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__45341){
var map__45342 = p__45341;
var map__45342__$1 = cljs.core.__destructure_map(map__45342);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45342__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45343,done,error){
var map__45344 = p__45343;
var map__45344__$1 = cljs.core.__destructure_map(map__45344);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45344__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45345,done,error){
var map__45346 = p__45345;
var map__45346__$1 = cljs.core.__destructure_map(map__45346);
var msg = map__45346__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45346__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45346__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45346__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45347){
var map__45348 = p__45347;
var map__45348__$1 = cljs.core.__destructure_map(map__45348);
var src = map__45348__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45348__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45349 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45349) : done.call(null, G__45349));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45350){
var map__45351 = p__45350;
var map__45351__$1 = cljs.core.__destructure_map(map__45351);
var msg__$1 = map__45351__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45351__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e45352){var ex = e45352;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45353){
var map__45354 = p__45353;
var map__45354__$1 = cljs.core.__destructure_map(map__45354);
var env = map__45354__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45354__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45355){
var map__45356 = p__45355;
var map__45356__$1 = cljs.core.__destructure_map(map__45356);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45356__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45356__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45357){
var map__45358 = p__45357;
var map__45358__$1 = cljs.core.__destructure_map(map__45358);
var svc = map__45358__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45358__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
