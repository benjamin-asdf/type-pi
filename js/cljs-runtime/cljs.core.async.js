goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39176 = (function (f,blockable,meta39177){
this.f = f;
this.blockable = blockable;
this.meta39177 = meta39177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39178,meta39177__$1){
var self__ = this;
var _39178__$1 = this;
return (new cljs.core.async.t_cljs$core$async39176(self__.f,self__.blockable,meta39177__$1));
}));

(cljs.core.async.t_cljs$core$async39176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39178){
var self__ = this;
var _39178__$1 = this;
return self__.meta39177;
}));

(cljs.core.async.t_cljs$core$async39176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async39176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async39176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39177","meta39177",-1854401820,null)], null);
}));

(cljs.core.async.t_cljs$core$async39176.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39176");

(cljs.core.async.t_cljs$core$async39176.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async39176");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39176.
 */
cljs.core.async.__GT_t_cljs$core$async39176 = (function cljs$core$async$__GT_t_cljs$core$async39176(f,blockable,meta39177){
return (new cljs.core.async.t_cljs$core$async39176(f,blockable,meta39177));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39172 = arguments.length;
switch (G__39172) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async39176(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39224 = arguments.length;
switch (G__39224) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39236 = arguments.length;
switch (G__39236) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39251 = arguments.length;
switch (G__39251) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_43067 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43067) : fn1.call(null, val_43067));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43067) : fn1.call(null, val_43067));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39274 = arguments.length;
switch (G__39274) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___43083 = n;
var x_43084 = (0);
while(true){
if((x_43084 < n__5593__auto___43083)){
(a[x_43084] = x_43084);

var G__43085 = (x_43084 + (1));
x_43084 = G__43085;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39283 = (function (flag,meta39284){
this.flag = flag;
this.meta39284 = meta39284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39285,meta39284__$1){
var self__ = this;
var _39285__$1 = this;
return (new cljs.core.async.t_cljs$core$async39283(self__.flag,meta39284__$1));
}));

(cljs.core.async.t_cljs$core$async39283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39285){
var self__ = this;
var _39285__$1 = this;
return self__.meta39284;
}));

(cljs.core.async.t_cljs$core$async39283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async39283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39284","meta39284",-1580446317,null)], null);
}));

(cljs.core.async.t_cljs$core$async39283.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39283");

(cljs.core.async.t_cljs$core$async39283.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async39283");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39283.
 */
cljs.core.async.__GT_t_cljs$core$async39283 = (function cljs$core$async$__GT_t_cljs$core$async39283(flag,meta39284){
return (new cljs.core.async.t_cljs$core$async39283(flag,meta39284));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async39283(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39295 = (function (flag,cb,meta39296){
this.flag = flag;
this.cb = cb;
this.meta39296 = meta39296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39297,meta39296__$1){
var self__ = this;
var _39297__$1 = this;
return (new cljs.core.async.t_cljs$core$async39295(self__.flag,self__.cb,meta39296__$1));
}));

(cljs.core.async.t_cljs$core$async39295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39297){
var self__ = this;
var _39297__$1 = this;
return self__.meta39296;
}));

(cljs.core.async.t_cljs$core$async39295.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39295.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39296","meta39296",54289089,null)], null);
}));

(cljs.core.async.t_cljs$core$async39295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39295");

(cljs.core.async.t_cljs$core$async39295.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async39295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39295.
 */
cljs.core.async.__GT_t_cljs$core$async39295 = (function cljs$core$async$__GT_t_cljs$core$async39295(flag,cb,meta39296){
return (new cljs.core.async.t_cljs$core$async39295(flag,cb,meta39296));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async39295(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39327_SHARP_){
var G__39350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39327_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39350) : fret.call(null, G__39350));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39328_SHARP_){
var G__39351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39328_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39351) : fret.call(null, G__39351));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43123 = (i + (1));
i = G__43123;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___43125 = arguments.length;
var i__5727__auto___43126 = (0);
while(true){
if((i__5727__auto___43126 < len__5726__auto___43125)){
args__5732__auto__.push((arguments[i__5727__auto___43126]));

var G__43127 = (i__5727__auto___43126 + (1));
i__5727__auto___43126 = G__43127;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39415){
var map__39416 = p__39415;
var map__39416__$1 = cljs.core.__destructure_map(map__39416);
var opts = map__39416__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39386){
var G__39389 = cljs.core.first(seq39386);
var seq39386__$1 = cljs.core.next(seq39386);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39389,seq39386__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39427 = arguments.length;
switch (G__39427) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39041__auto___43129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_39633){
var state_val_39638 = (state_39633[(1)]);
if((state_val_39638 === (7))){
var inst_39589 = (state_39633[(2)]);
var state_39633__$1 = state_39633;
var statearr_39653_43130 = state_39633__$1;
(statearr_39653_43130[(2)] = inst_39589);

(statearr_39653_43130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (1))){
var state_39633__$1 = state_39633;
var statearr_39654_43132 = state_39633__$1;
(statearr_39654_43132[(2)] = null);

(statearr_39654_43132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (4))){
var inst_39551 = (state_39633[(7)]);
var inst_39551__$1 = (state_39633[(2)]);
var inst_39553 = (inst_39551__$1 == null);
var state_39633__$1 = (function (){var statearr_39657 = state_39633;
(statearr_39657[(7)] = inst_39551__$1);

return statearr_39657;
})();
if(cljs.core.truth_(inst_39553)){
var statearr_39659_43133 = state_39633__$1;
(statearr_39659_43133[(1)] = (5));

} else {
var statearr_39663_43134 = state_39633__$1;
(statearr_39663_43134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (13))){
var state_39633__$1 = state_39633;
var statearr_39664_43135 = state_39633__$1;
(statearr_39664_43135[(2)] = null);

(statearr_39664_43135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (6))){
var inst_39551 = (state_39633[(7)]);
var state_39633__$1 = state_39633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39633__$1,(11),to,inst_39551);
} else {
if((state_val_39638 === (3))){
var inst_39605 = (state_39633[(2)]);
var state_39633__$1 = state_39633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39633__$1,inst_39605);
} else {
if((state_val_39638 === (12))){
var state_39633__$1 = state_39633;
var statearr_39665_43136 = state_39633__$1;
(statearr_39665_43136[(2)] = null);

(statearr_39665_43136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (2))){
var state_39633__$1 = state_39633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39633__$1,(4),from);
} else {
if((state_val_39638 === (11))){
var inst_39565 = (state_39633[(2)]);
var state_39633__$1 = state_39633;
if(cljs.core.truth_(inst_39565)){
var statearr_39667_43137 = state_39633__$1;
(statearr_39667_43137[(1)] = (12));

} else {
var statearr_39668_43138 = state_39633__$1;
(statearr_39668_43138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (9))){
var state_39633__$1 = state_39633;
var statearr_39669_43139 = state_39633__$1;
(statearr_39669_43139[(2)] = null);

(statearr_39669_43139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (5))){
var state_39633__$1 = state_39633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39670_43140 = state_39633__$1;
(statearr_39670_43140[(1)] = (8));

} else {
var statearr_39672_43141 = state_39633__$1;
(statearr_39672_43141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (14))){
var inst_39587 = (state_39633[(2)]);
var state_39633__$1 = state_39633;
var statearr_39673_43142 = state_39633__$1;
(statearr_39673_43142[(2)] = inst_39587);

(statearr_39673_43142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (10))){
var inst_39562 = (state_39633[(2)]);
var state_39633__$1 = state_39633;
var statearr_39676_43143 = state_39633__$1;
(statearr_39676_43143[(2)] = inst_39562);

(statearr_39676_43143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (8))){
var inst_39556 = cljs.core.async.close_BANG_(to);
var state_39633__$1 = state_39633;
var statearr_39677_43144 = state_39633__$1;
(statearr_39677_43144[(2)] = inst_39556);

(statearr_39677_43144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_39682 = [null,null,null,null,null,null,null,null];
(statearr_39682[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_39682[(1)] = (1));

return statearr_39682;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_39633){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_39633);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e39686){var ex__37760__auto__ = e39686;
var statearr_39687_43146 = state_39633;
(statearr_39687_43146[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_39633[(4)]))){
var statearr_39688_43147 = state_39633;
(statearr_39688_43147[(1)] = cljs.core.first((state_39633[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43148 = state_39633;
state_39633 = G__43148;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_39633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_39633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_39692 = f__39042__auto__();
(statearr_39692[(6)] = c__39041__auto___43129);

return statearr_39692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__39706){
var vec__39708 = p__39706;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39708,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39708,(1),null);
var job = vec__39708;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__39041__auto___43149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_39720){
var state_val_39721 = (state_39720[(1)]);
if((state_val_39721 === (1))){
var state_39720__$1 = state_39720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39720__$1,(2),res,v);
} else {
if((state_val_39721 === (2))){
var inst_39715 = (state_39720[(2)]);
var inst_39716 = cljs.core.async.close_BANG_(res);
var state_39720__$1 = (function (){var statearr_39729 = state_39720;
(statearr_39729[(7)] = inst_39715);

return statearr_39729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39720__$1,inst_39716);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0 = (function (){
var statearr_39733 = [null,null,null,null,null,null,null,null];
(statearr_39733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__);

(statearr_39733[(1)] = (1));

return statearr_39733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1 = (function (state_39720){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_39720);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e39735){var ex__37760__auto__ = e39735;
var statearr_39736_43162 = state_39720;
(statearr_39736_43162[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_39720[(4)]))){
var statearr_39739_43164 = state_39720;
(statearr_39739_43164[(1)] = cljs.core.first((state_39720[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43166 = state_39720;
state_39720 = G__43166;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__ = function(state_39720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1.call(this,state_39720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_39742 = f__39042__auto__();
(statearr_39742[(6)] = c__39041__auto___43149);

return statearr_39742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39758){
var vec__39759 = p__39758;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39759,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39759,(1),null);
var job = vec__39759;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___43171 = n;
var __43172 = (0);
while(true){
if((__43172 < n__5593__auto___43171)){
var G__39768_43173 = type;
var G__39768_43174__$1 = (((G__39768_43173 instanceof cljs.core.Keyword))?G__39768_43173.fqn:null);
switch (G__39768_43174__$1) {
case "compute":
var c__39041__auto___43176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43172,c__39041__auto___43176,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async){
return (function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = ((function (__43172,c__39041__auto___43176,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async){
return (function (state_39787){
var state_val_39788 = (state_39787[(1)]);
if((state_val_39788 === (1))){
var state_39787__$1 = state_39787;
var statearr_39795_43177 = state_39787__$1;
(statearr_39795_43177[(2)] = null);

(statearr_39795_43177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39788 === (2))){
var state_39787__$1 = state_39787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39787__$1,(4),jobs);
} else {
if((state_val_39788 === (3))){
var inst_39784 = (state_39787[(2)]);
var state_39787__$1 = state_39787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39787__$1,inst_39784);
} else {
if((state_val_39788 === (4))){
var inst_39776 = (state_39787[(2)]);
var inst_39777 = process__$1(inst_39776);
var state_39787__$1 = state_39787;
if(cljs.core.truth_(inst_39777)){
var statearr_39797_43178 = state_39787__$1;
(statearr_39797_43178[(1)] = (5));

} else {
var statearr_39798_43179 = state_39787__$1;
(statearr_39798_43179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39788 === (5))){
var state_39787__$1 = state_39787;
var statearr_39799_43180 = state_39787__$1;
(statearr_39799_43180[(2)] = null);

(statearr_39799_43180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39788 === (6))){
var state_39787__$1 = state_39787;
var statearr_39800_43181 = state_39787__$1;
(statearr_39800_43181[(2)] = null);

(statearr_39800_43181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39788 === (7))){
var inst_39782 = (state_39787[(2)]);
var state_39787__$1 = state_39787;
var statearr_39808_43182 = state_39787__$1;
(statearr_39808_43182[(2)] = inst_39782);

(statearr_39808_43182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43172,c__39041__auto___43176,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async))
;
return ((function (__43172,switch__37756__auto__,c__39041__auto___43176,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0 = (function (){
var statearr_39814 = [null,null,null,null,null,null,null];
(statearr_39814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__);

(statearr_39814[(1)] = (1));

return statearr_39814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1 = (function (state_39787){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_39787);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e39823){var ex__37760__auto__ = e39823;
var statearr_39829_43183 = state_39787;
(statearr_39829_43183[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_39787[(4)]))){
var statearr_39831_43184 = state_39787;
(statearr_39831_43184[(1)] = cljs.core.first((state_39787[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43186 = state_39787;
state_39787 = G__43186;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__ = function(state_39787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1.call(this,state_39787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__;
})()
;})(__43172,switch__37756__auto__,c__39041__auto___43176,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async))
})();
var state__39043__auto__ = (function (){var statearr_39840 = f__39042__auto__();
(statearr_39840[(6)] = c__39041__auto___43176);

return statearr_39840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
});})(__43172,c__39041__auto___43176,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async))
);


break;
case "async":
var c__39041__auto___43189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43172,c__39041__auto___43189,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async){
return (function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = ((function (__43172,c__39041__auto___43189,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async){
return (function (state_39886){
var state_val_39887 = (state_39886[(1)]);
if((state_val_39887 === (1))){
var state_39886__$1 = state_39886;
var statearr_39923_43190 = state_39886__$1;
(statearr_39923_43190[(2)] = null);

(statearr_39923_43190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39887 === (2))){
var state_39886__$1 = state_39886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39886__$1,(4),jobs);
} else {
if((state_val_39887 === (3))){
var inst_39881 = (state_39886[(2)]);
var state_39886__$1 = state_39886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39886__$1,inst_39881);
} else {
if((state_val_39887 === (4))){
var inst_39861 = (state_39886[(2)]);
var inst_39863 = async(inst_39861);
var state_39886__$1 = state_39886;
if(cljs.core.truth_(inst_39863)){
var statearr_39937_43192 = state_39886__$1;
(statearr_39937_43192[(1)] = (5));

} else {
var statearr_39944_43193 = state_39886__$1;
(statearr_39944_43193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39887 === (5))){
var state_39886__$1 = state_39886;
var statearr_39953_43194 = state_39886__$1;
(statearr_39953_43194[(2)] = null);

(statearr_39953_43194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39887 === (6))){
var state_39886__$1 = state_39886;
var statearr_39972_43195 = state_39886__$1;
(statearr_39972_43195[(2)] = null);

(statearr_39972_43195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39887 === (7))){
var inst_39875 = (state_39886[(2)]);
var state_39886__$1 = state_39886;
var statearr_39977_43200 = state_39886__$1;
(statearr_39977_43200[(2)] = inst_39875);

(statearr_39977_43200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43172,c__39041__auto___43189,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async))
;
return ((function (__43172,switch__37756__auto__,c__39041__auto___43189,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0 = (function (){
var statearr_39980 = [null,null,null,null,null,null,null];
(statearr_39980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__);

(statearr_39980[(1)] = (1));

return statearr_39980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1 = (function (state_39886){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_39886);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e39984){var ex__37760__auto__ = e39984;
var statearr_39986_43202 = state_39886;
(statearr_39986_43202[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_39886[(4)]))){
var statearr_39992_43204 = state_39886;
(statearr_39992_43204[(1)] = cljs.core.first((state_39886[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43209 = state_39886;
state_39886 = G__43209;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__ = function(state_39886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1.call(this,state_39886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__;
})()
;})(__43172,switch__37756__auto__,c__39041__auto___43189,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async))
})();
var state__39043__auto__ = (function (){var statearr_39999 = f__39042__auto__();
(statearr_39999[(6)] = c__39041__auto___43189);

return statearr_39999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
});})(__43172,c__39041__auto___43189,G__39768_43173,G__39768_43174__$1,n__5593__auto___43171,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39768_43174__$1)].join('')));

}

var G__43211 = (__43172 + (1));
__43172 = G__43211;
continue;
} else {
}
break;
}

var c__39041__auto___43212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_40035){
var state_val_40036 = (state_40035[(1)]);
if((state_val_40036 === (7))){
var inst_40028 = (state_40035[(2)]);
var state_40035__$1 = state_40035;
var statearr_40046_43213 = state_40035__$1;
(statearr_40046_43213[(2)] = inst_40028);

(statearr_40046_43213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40036 === (1))){
var state_40035__$1 = state_40035;
var statearr_40047_43214 = state_40035__$1;
(statearr_40047_43214[(2)] = null);

(statearr_40047_43214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40036 === (4))){
var inst_40007 = (state_40035[(7)]);
var inst_40007__$1 = (state_40035[(2)]);
var inst_40009 = (inst_40007__$1 == null);
var state_40035__$1 = (function (){var statearr_40050 = state_40035;
(statearr_40050[(7)] = inst_40007__$1);

return statearr_40050;
})();
if(cljs.core.truth_(inst_40009)){
var statearr_40053_43215 = state_40035__$1;
(statearr_40053_43215[(1)] = (5));

} else {
var statearr_40055_43216 = state_40035__$1;
(statearr_40055_43216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40036 === (6))){
var inst_40007 = (state_40035[(7)]);
var inst_40013 = (state_40035[(8)]);
var inst_40013__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40018 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40020 = [inst_40007,inst_40013__$1];
var inst_40021 = (new cljs.core.PersistentVector(null,2,(5),inst_40018,inst_40020,null));
var state_40035__$1 = (function (){var statearr_40060 = state_40035;
(statearr_40060[(8)] = inst_40013__$1);

return statearr_40060;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40035__$1,(8),jobs,inst_40021);
} else {
if((state_val_40036 === (3))){
var inst_40030 = (state_40035[(2)]);
var state_40035__$1 = state_40035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40035__$1,inst_40030);
} else {
if((state_val_40036 === (2))){
var state_40035__$1 = state_40035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40035__$1,(4),from);
} else {
if((state_val_40036 === (9))){
var inst_40025 = (state_40035[(2)]);
var state_40035__$1 = (function (){var statearr_40068 = state_40035;
(statearr_40068[(9)] = inst_40025);

return statearr_40068;
})();
var statearr_40069_43218 = state_40035__$1;
(statearr_40069_43218[(2)] = null);

(statearr_40069_43218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40036 === (5))){
var inst_40011 = cljs.core.async.close_BANG_(jobs);
var state_40035__$1 = state_40035;
var statearr_40075_43219 = state_40035__$1;
(statearr_40075_43219[(2)] = inst_40011);

(statearr_40075_43219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40036 === (8))){
var inst_40013 = (state_40035[(8)]);
var inst_40023 = (state_40035[(2)]);
var state_40035__$1 = (function (){var statearr_40077 = state_40035;
(statearr_40077[(10)] = inst_40023);

return statearr_40077;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40035__$1,(9),results,inst_40013);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0 = (function (){
var statearr_40080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__);

(statearr_40080[(1)] = (1));

return statearr_40080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1 = (function (state_40035){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_40035);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e40083){var ex__37760__auto__ = e40083;
var statearr_40084_43224 = state_40035;
(statearr_40084_43224[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_40035[(4)]))){
var statearr_40086_43225 = state_40035;
(statearr_40086_43225[(1)] = cljs.core.first((state_40035[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43226 = state_40035;
state_40035 = G__43226;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__ = function(state_40035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1.call(this,state_40035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_40092 = f__39042__auto__();
(statearr_40092[(6)] = c__39041__auto___43212);

return statearr_40092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


var c__39041__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_40148){
var state_val_40149 = (state_40148[(1)]);
if((state_val_40149 === (7))){
var inst_40141 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40156_43229 = state_40148__$1;
(statearr_40156_43229[(2)] = inst_40141);

(statearr_40156_43229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (20))){
var state_40148__$1 = state_40148;
var statearr_40157_43230 = state_40148__$1;
(statearr_40157_43230[(2)] = null);

(statearr_40157_43230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (1))){
var state_40148__$1 = state_40148;
var statearr_40159_43231 = state_40148__$1;
(statearr_40159_43231[(2)] = null);

(statearr_40159_43231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (4))){
var inst_40096 = (state_40148[(7)]);
var inst_40096__$1 = (state_40148[(2)]);
var inst_40102 = (inst_40096__$1 == null);
var state_40148__$1 = (function (){var statearr_40163 = state_40148;
(statearr_40163[(7)] = inst_40096__$1);

return statearr_40163;
})();
if(cljs.core.truth_(inst_40102)){
var statearr_40164_43233 = state_40148__$1;
(statearr_40164_43233[(1)] = (5));

} else {
var statearr_40165_43234 = state_40148__$1;
(statearr_40165_43234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (15))){
var inst_40122 = (state_40148[(8)]);
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40148__$1,(18),to,inst_40122);
} else {
if((state_val_40149 === (21))){
var inst_40136 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40169_43235 = state_40148__$1;
(statearr_40169_43235[(2)] = inst_40136);

(statearr_40169_43235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (13))){
var inst_40138 = (state_40148[(2)]);
var state_40148__$1 = (function (){var statearr_40171 = state_40148;
(statearr_40171[(9)] = inst_40138);

return statearr_40171;
})();
var statearr_40173_43236 = state_40148__$1;
(statearr_40173_43236[(2)] = null);

(statearr_40173_43236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (6))){
var inst_40096 = (state_40148[(7)]);
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40148__$1,(11),inst_40096);
} else {
if((state_val_40149 === (17))){
var inst_40131 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
if(cljs.core.truth_(inst_40131)){
var statearr_40176_43237 = state_40148__$1;
(statearr_40176_43237[(1)] = (19));

} else {
var statearr_40178_43238 = state_40148__$1;
(statearr_40178_43238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (3))){
var inst_40143 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40148__$1,inst_40143);
} else {
if((state_val_40149 === (12))){
var inst_40112 = (state_40148[(10)]);
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40148__$1,(14),inst_40112);
} else {
if((state_val_40149 === (2))){
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40148__$1,(4),results);
} else {
if((state_val_40149 === (19))){
var state_40148__$1 = state_40148;
var statearr_40185_43239 = state_40148__$1;
(statearr_40185_43239[(2)] = null);

(statearr_40185_43239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (11))){
var inst_40112 = (state_40148[(2)]);
var state_40148__$1 = (function (){var statearr_40189 = state_40148;
(statearr_40189[(10)] = inst_40112);

return statearr_40189;
})();
var statearr_40190_43240 = state_40148__$1;
(statearr_40190_43240[(2)] = null);

(statearr_40190_43240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (9))){
var state_40148__$1 = state_40148;
var statearr_40192_43241 = state_40148__$1;
(statearr_40192_43241[(2)] = null);

(statearr_40192_43241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (5))){
var state_40148__$1 = state_40148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40193_43242 = state_40148__$1;
(statearr_40193_43242[(1)] = (8));

} else {
var statearr_40195_43243 = state_40148__$1;
(statearr_40195_43243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (14))){
var inst_40122 = (state_40148[(8)]);
var inst_40124 = (state_40148[(11)]);
var inst_40122__$1 = (state_40148[(2)]);
var inst_40123 = (inst_40122__$1 == null);
var inst_40124__$1 = cljs.core.not(inst_40123);
var state_40148__$1 = (function (){var statearr_40198 = state_40148;
(statearr_40198[(8)] = inst_40122__$1);

(statearr_40198[(11)] = inst_40124__$1);

return statearr_40198;
})();
if(inst_40124__$1){
var statearr_40199_43245 = state_40148__$1;
(statearr_40199_43245[(1)] = (15));

} else {
var statearr_40201_43246 = state_40148__$1;
(statearr_40201_43246[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (16))){
var inst_40124 = (state_40148[(11)]);
var state_40148__$1 = state_40148;
var statearr_40202_43247 = state_40148__$1;
(statearr_40202_43247[(2)] = inst_40124);

(statearr_40202_43247[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (10))){
var inst_40109 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40206_43248 = state_40148__$1;
(statearr_40206_43248[(2)] = inst_40109);

(statearr_40206_43248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (18))){
var inst_40127 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40207_43249 = state_40148__$1;
(statearr_40207_43249[(2)] = inst_40127);

(statearr_40207_43249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (8))){
var inst_40106 = cljs.core.async.close_BANG_(to);
var state_40148__$1 = state_40148;
var statearr_40209_43250 = state_40148__$1;
(statearr_40209_43250[(2)] = inst_40106);

(statearr_40209_43250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0 = (function (){
var statearr_40213 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__);

(statearr_40213[(1)] = (1));

return statearr_40213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1 = (function (state_40148){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_40148);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e40216){var ex__37760__auto__ = e40216;
var statearr_40218_43252 = state_40148;
(statearr_40218_43252[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_40148[(4)]))){
var statearr_40226_43253 = state_40148;
(statearr_40226_43253[(1)] = cljs.core.first((state_40148[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43254 = state_40148;
state_40148 = G__43254;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__ = function(state_40148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1.call(this,state_40148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_40236 = f__39042__auto__();
(statearr_40236[(6)] = c__39041__auto__);

return statearr_40236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));

return c__39041__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40246 = arguments.length;
switch (G__40246) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40257 = arguments.length;
switch (G__40257) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40262 = arguments.length;
switch (G__40262) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__39041__auto___43258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_40299){
var state_val_40300 = (state_40299[(1)]);
if((state_val_40300 === (7))){
var inst_40295 = (state_40299[(2)]);
var state_40299__$1 = state_40299;
var statearr_40325_43259 = state_40299__$1;
(statearr_40325_43259[(2)] = inst_40295);

(statearr_40325_43259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (1))){
var state_40299__$1 = state_40299;
var statearr_40329_43260 = state_40299__$1;
(statearr_40329_43260[(2)] = null);

(statearr_40329_43260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (4))){
var inst_40276 = (state_40299[(7)]);
var inst_40276__$1 = (state_40299[(2)]);
var inst_40277 = (inst_40276__$1 == null);
var state_40299__$1 = (function (){var statearr_40334 = state_40299;
(statearr_40334[(7)] = inst_40276__$1);

return statearr_40334;
})();
if(cljs.core.truth_(inst_40277)){
var statearr_40335_43261 = state_40299__$1;
(statearr_40335_43261[(1)] = (5));

} else {
var statearr_40336_43262 = state_40299__$1;
(statearr_40336_43262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (13))){
var state_40299__$1 = state_40299;
var statearr_40338_43263 = state_40299__$1;
(statearr_40338_43263[(2)] = null);

(statearr_40338_43263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (6))){
var inst_40276 = (state_40299[(7)]);
var inst_40282 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40276) : p.call(null, inst_40276));
var state_40299__$1 = state_40299;
if(cljs.core.truth_(inst_40282)){
var statearr_40341_43264 = state_40299__$1;
(statearr_40341_43264[(1)] = (9));

} else {
var statearr_40346_43265 = state_40299__$1;
(statearr_40346_43265[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (3))){
var inst_40297 = (state_40299[(2)]);
var state_40299__$1 = state_40299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40299__$1,inst_40297);
} else {
if((state_val_40300 === (12))){
var state_40299__$1 = state_40299;
var statearr_40350_43266 = state_40299__$1;
(statearr_40350_43266[(2)] = null);

(statearr_40350_43266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (2))){
var state_40299__$1 = state_40299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40299__$1,(4),ch);
} else {
if((state_val_40300 === (11))){
var inst_40276 = (state_40299[(7)]);
var inst_40286 = (state_40299[(2)]);
var state_40299__$1 = state_40299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40299__$1,(8),inst_40286,inst_40276);
} else {
if((state_val_40300 === (9))){
var state_40299__$1 = state_40299;
var statearr_40359_43267 = state_40299__$1;
(statearr_40359_43267[(2)] = tc);

(statearr_40359_43267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (5))){
var inst_40279 = cljs.core.async.close_BANG_(tc);
var inst_40280 = cljs.core.async.close_BANG_(fc);
var state_40299__$1 = (function (){var statearr_40362 = state_40299;
(statearr_40362[(8)] = inst_40279);

return statearr_40362;
})();
var statearr_40363_43268 = state_40299__$1;
(statearr_40363_43268[(2)] = inst_40280);

(statearr_40363_43268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (14))){
var inst_40293 = (state_40299[(2)]);
var state_40299__$1 = state_40299;
var statearr_40364_43269 = state_40299__$1;
(statearr_40364_43269[(2)] = inst_40293);

(statearr_40364_43269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (10))){
var state_40299__$1 = state_40299;
var statearr_40369_43270 = state_40299__$1;
(statearr_40369_43270[(2)] = fc);

(statearr_40369_43270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (8))){
var inst_40288 = (state_40299[(2)]);
var state_40299__$1 = state_40299;
if(cljs.core.truth_(inst_40288)){
var statearr_40372_43271 = state_40299__$1;
(statearr_40372_43271[(1)] = (12));

} else {
var statearr_40373_43272 = state_40299__$1;
(statearr_40373_43272[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_40375 = [null,null,null,null,null,null,null,null,null];
(statearr_40375[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_40375[(1)] = (1));

return statearr_40375;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_40299){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_40299);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e40377){var ex__37760__auto__ = e40377;
var statearr_40378_43273 = state_40299;
(statearr_40378_43273[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_40299[(4)]))){
var statearr_40379_43274 = state_40299;
(statearr_40379_43274[(1)] = cljs.core.first((state_40299[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43275 = state_40299;
state_40299 = G__43275;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_40299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_40299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_40380 = f__39042__auto__();
(statearr_40380[(6)] = c__39041__auto___43258);

return statearr_40380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__39041__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_40421){
var state_val_40422 = (state_40421[(1)]);
if((state_val_40422 === (7))){
var inst_40413 = (state_40421[(2)]);
var state_40421__$1 = state_40421;
var statearr_40448_43276 = state_40421__$1;
(statearr_40448_43276[(2)] = inst_40413);

(statearr_40448_43276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40422 === (1))){
var inst_40391 = init;
var inst_40392 = inst_40391;
var state_40421__$1 = (function (){var statearr_40452 = state_40421;
(statearr_40452[(7)] = inst_40392);

return statearr_40452;
})();
var statearr_40453_43277 = state_40421__$1;
(statearr_40453_43277[(2)] = null);

(statearr_40453_43277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40422 === (4))){
var inst_40398 = (state_40421[(8)]);
var inst_40398__$1 = (state_40421[(2)]);
var inst_40400 = (inst_40398__$1 == null);
var state_40421__$1 = (function (){var statearr_40455 = state_40421;
(statearr_40455[(8)] = inst_40398__$1);

return statearr_40455;
})();
if(cljs.core.truth_(inst_40400)){
var statearr_40456_43278 = state_40421__$1;
(statearr_40456_43278[(1)] = (5));

} else {
var statearr_40457_43279 = state_40421__$1;
(statearr_40457_43279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40422 === (6))){
var inst_40392 = (state_40421[(7)]);
var inst_40398 = (state_40421[(8)]);
var inst_40403 = (state_40421[(9)]);
var inst_40403__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40392,inst_40398) : f.call(null, inst_40392,inst_40398));
var inst_40404 = cljs.core.reduced_QMARK_(inst_40403__$1);
var state_40421__$1 = (function (){var statearr_40461 = state_40421;
(statearr_40461[(9)] = inst_40403__$1);

return statearr_40461;
})();
if(inst_40404){
var statearr_40464_43284 = state_40421__$1;
(statearr_40464_43284[(1)] = (8));

} else {
var statearr_40465_43285 = state_40421__$1;
(statearr_40465_43285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40422 === (3))){
var inst_40415 = (state_40421[(2)]);
var state_40421__$1 = state_40421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40421__$1,inst_40415);
} else {
if((state_val_40422 === (2))){
var state_40421__$1 = state_40421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40421__$1,(4),ch);
} else {
if((state_val_40422 === (9))){
var inst_40403 = (state_40421[(9)]);
var inst_40392 = inst_40403;
var state_40421__$1 = (function (){var statearr_40466 = state_40421;
(statearr_40466[(7)] = inst_40392);

return statearr_40466;
})();
var statearr_40467_43286 = state_40421__$1;
(statearr_40467_43286[(2)] = null);

(statearr_40467_43286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40422 === (5))){
var inst_40392 = (state_40421[(7)]);
var state_40421__$1 = state_40421;
var statearr_40474_43287 = state_40421__$1;
(statearr_40474_43287[(2)] = inst_40392);

(statearr_40474_43287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40422 === (10))){
var inst_40411 = (state_40421[(2)]);
var state_40421__$1 = state_40421;
var statearr_40477_43289 = state_40421__$1;
(statearr_40477_43289[(2)] = inst_40411);

(statearr_40477_43289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40422 === (8))){
var inst_40403 = (state_40421[(9)]);
var inst_40407 = cljs.core.deref(inst_40403);
var state_40421__$1 = state_40421;
var statearr_40482_43291 = state_40421__$1;
(statearr_40482_43291[(2)] = inst_40407);

(statearr_40482_43291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__37757__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37757__auto____0 = (function (){
var statearr_40488 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40488[(0)] = cljs$core$async$reduce_$_state_machine__37757__auto__);

(statearr_40488[(1)] = (1));

return statearr_40488;
});
var cljs$core$async$reduce_$_state_machine__37757__auto____1 = (function (state_40421){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_40421);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e40490){var ex__37760__auto__ = e40490;
var statearr_40491_43295 = state_40421;
(statearr_40491_43295[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_40421[(4)]))){
var statearr_40495_43296 = state_40421;
(statearr_40495_43296[(1)] = cljs.core.first((state_40421[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43297 = state_40421;
state_40421 = G__43297;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37757__auto__ = function(state_40421){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37757__auto____1.call(this,state_40421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37757__auto____0;
cljs$core$async$reduce_$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37757__auto____1;
return cljs$core$async$reduce_$_state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_40501 = f__39042__auto__();
(statearr_40501[(6)] = c__39041__auto__);

return statearr_40501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));

return c__39041__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__39041__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_40517){
var state_val_40518 = (state_40517[(1)]);
if((state_val_40518 === (1))){
var inst_40511 = cljs.core.async.reduce(f__$1,init,ch);
var state_40517__$1 = state_40517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40517__$1,(2),inst_40511);
} else {
if((state_val_40518 === (2))){
var inst_40513 = (state_40517[(2)]);
var inst_40514 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_40513) : f__$1.call(null, inst_40513));
var state_40517__$1 = state_40517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40517__$1,inst_40514);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37757__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37757__auto____0 = (function (){
var statearr_40520 = [null,null,null,null,null,null,null];
(statearr_40520[(0)] = cljs$core$async$transduce_$_state_machine__37757__auto__);

(statearr_40520[(1)] = (1));

return statearr_40520;
});
var cljs$core$async$transduce_$_state_machine__37757__auto____1 = (function (state_40517){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_40517);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e40521){var ex__37760__auto__ = e40521;
var statearr_40526_43303 = state_40517;
(statearr_40526_43303[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_40517[(4)]))){
var statearr_40527_43304 = state_40517;
(statearr_40527_43304[(1)] = cljs.core.first((state_40517[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43305 = state_40517;
state_40517 = G__43305;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37757__auto__ = function(state_40517){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37757__auto____1.call(this,state_40517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37757__auto____0;
cljs$core$async$transduce_$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37757__auto____1;
return cljs$core$async$transduce_$_state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_40536 = f__39042__auto__();
(statearr_40536[(6)] = c__39041__auto__);

return statearr_40536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));

return c__39041__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__40545 = arguments.length;
switch (G__40545) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39041__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_40584){
var state_val_40585 = (state_40584[(1)]);
if((state_val_40585 === (7))){
var inst_40565 = (state_40584[(2)]);
var state_40584__$1 = state_40584;
var statearr_40593_43314 = state_40584__$1;
(statearr_40593_43314[(2)] = inst_40565);

(statearr_40593_43314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40585 === (1))){
var inst_40550 = cljs.core.seq(coll);
var inst_40551 = inst_40550;
var state_40584__$1 = (function (){var statearr_40599 = state_40584;
(statearr_40599[(7)] = inst_40551);

return statearr_40599;
})();
var statearr_40601_43315 = state_40584__$1;
(statearr_40601_43315[(2)] = null);

(statearr_40601_43315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40585 === (4))){
var inst_40551 = (state_40584[(7)]);
var inst_40563 = cljs.core.first(inst_40551);
var state_40584__$1 = state_40584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40584__$1,(7),ch,inst_40563);
} else {
if((state_val_40585 === (13))){
var inst_40577 = (state_40584[(2)]);
var state_40584__$1 = state_40584;
var statearr_40608_43316 = state_40584__$1;
(statearr_40608_43316[(2)] = inst_40577);

(statearr_40608_43316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40585 === (6))){
var inst_40568 = (state_40584[(2)]);
var state_40584__$1 = state_40584;
if(cljs.core.truth_(inst_40568)){
var statearr_40609_43322 = state_40584__$1;
(statearr_40609_43322[(1)] = (8));

} else {
var statearr_40613_43323 = state_40584__$1;
(statearr_40613_43323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40585 === (3))){
var inst_40581 = (state_40584[(2)]);
var state_40584__$1 = state_40584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40584__$1,inst_40581);
} else {
if((state_val_40585 === (12))){
var state_40584__$1 = state_40584;
var statearr_40616_43324 = state_40584__$1;
(statearr_40616_43324[(2)] = null);

(statearr_40616_43324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40585 === (2))){
var inst_40551 = (state_40584[(7)]);
var state_40584__$1 = state_40584;
if(cljs.core.truth_(inst_40551)){
var statearr_40617_43325 = state_40584__$1;
(statearr_40617_43325[(1)] = (4));

} else {
var statearr_40618_43326 = state_40584__$1;
(statearr_40618_43326[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40585 === (11))){
var inst_40574 = cljs.core.async.close_BANG_(ch);
var state_40584__$1 = state_40584;
var statearr_40619_43327 = state_40584__$1;
(statearr_40619_43327[(2)] = inst_40574);

(statearr_40619_43327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40585 === (9))){
var state_40584__$1 = state_40584;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40620_43332 = state_40584__$1;
(statearr_40620_43332[(1)] = (11));

} else {
var statearr_40621_43333 = state_40584__$1;
(statearr_40621_43333[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40585 === (5))){
var inst_40551 = (state_40584[(7)]);
var state_40584__$1 = state_40584;
var statearr_40622_43334 = state_40584__$1;
(statearr_40622_43334[(2)] = inst_40551);

(statearr_40622_43334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40585 === (10))){
var inst_40579 = (state_40584[(2)]);
var state_40584__$1 = state_40584;
var statearr_40623_43335 = state_40584__$1;
(statearr_40623_43335[(2)] = inst_40579);

(statearr_40623_43335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40585 === (8))){
var inst_40551 = (state_40584[(7)]);
var inst_40570 = cljs.core.next(inst_40551);
var inst_40551__$1 = inst_40570;
var state_40584__$1 = (function (){var statearr_40624 = state_40584;
(statearr_40624[(7)] = inst_40551__$1);

return statearr_40624;
})();
var statearr_40625_43336 = state_40584__$1;
(statearr_40625_43336[(2)] = null);

(statearr_40625_43336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_40634 = [null,null,null,null,null,null,null,null];
(statearr_40634[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_40634[(1)] = (1));

return statearr_40634;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_40584){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_40584);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e40639){var ex__37760__auto__ = e40639;
var statearr_40644_43337 = state_40584;
(statearr_40644_43337[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_40584[(4)]))){
var statearr_40645_43338 = state_40584;
(statearr_40645_43338[(1)] = cljs.core.first((state_40584[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43339 = state_40584;
state_40584 = G__43339;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_40584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_40584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_40647 = f__39042__auto__();
(statearr_40647[(6)] = c__39041__auto__);

return statearr_40647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));

return c__39041__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40653 = arguments.length;
switch (G__40653) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_43343 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_43343(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43346 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_43346(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43347 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_43347(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43348 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_43348(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40693 = (function (ch,cs,meta40694){
this.ch = ch;
this.cs = cs;
this.meta40694 = meta40694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40695,meta40694__$1){
var self__ = this;
var _40695__$1 = this;
return (new cljs.core.async.t_cljs$core$async40693(self__.ch,self__.cs,meta40694__$1));
}));

(cljs.core.async.t_cljs$core$async40693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40695){
var self__ = this;
var _40695__$1 = this;
return self__.meta40694;
}));

(cljs.core.async.t_cljs$core$async40693.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40693.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40693.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async40693.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async40693.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async40693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40694","meta40694",1620561721,null)], null);
}));

(cljs.core.async.t_cljs$core$async40693.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40693");

(cljs.core.async.t_cljs$core$async40693.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40693");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40693.
 */
cljs.core.async.__GT_t_cljs$core$async40693 = (function cljs$core$async$__GT_t_cljs$core$async40693(ch,cs,meta40694){
return (new cljs.core.async.t_cljs$core$async40693(ch,cs,meta40694));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async40693(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__39041__auto___43362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_40883){
var state_val_40884 = (state_40883[(1)]);
if((state_val_40884 === (7))){
var inst_40868 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40887_43363 = state_40883__$1;
(statearr_40887_43363[(2)] = inst_40868);

(statearr_40887_43363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (20))){
var inst_40748 = (state_40883[(7)]);
var inst_40762 = cljs.core.first(inst_40748);
var inst_40764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40762,(0),null);
var inst_40765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40762,(1),null);
var state_40883__$1 = (function (){var statearr_40891 = state_40883;
(statearr_40891[(8)] = inst_40764);

return statearr_40891;
})();
if(cljs.core.truth_(inst_40765)){
var statearr_40892_43367 = state_40883__$1;
(statearr_40892_43367[(1)] = (22));

} else {
var statearr_40893_43368 = state_40883__$1;
(statearr_40893_43368[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (27))){
var inst_40716 = (state_40883[(9)]);
var inst_40799 = (state_40883[(10)]);
var inst_40797 = (state_40883[(11)]);
var inst_40805 = (state_40883[(12)]);
var inst_40805__$1 = cljs.core._nth(inst_40797,inst_40799);
var inst_40807 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40805__$1,inst_40716,done);
var state_40883__$1 = (function (){var statearr_40896 = state_40883;
(statearr_40896[(12)] = inst_40805__$1);

return statearr_40896;
})();
if(cljs.core.truth_(inst_40807)){
var statearr_40897_43369 = state_40883__$1;
(statearr_40897_43369[(1)] = (30));

} else {
var statearr_40901_43370 = state_40883__$1;
(statearr_40901_43370[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (1))){
var state_40883__$1 = state_40883;
var statearr_40915_43371 = state_40883__$1;
(statearr_40915_43371[(2)] = null);

(statearr_40915_43371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (24))){
var inst_40748 = (state_40883[(7)]);
var inst_40770 = (state_40883[(2)]);
var inst_40771 = cljs.core.next(inst_40748);
var inst_40725 = inst_40771;
var inst_40726 = null;
var inst_40727 = (0);
var inst_40728 = (0);
var state_40883__$1 = (function (){var statearr_40922 = state_40883;
(statearr_40922[(13)] = inst_40728);

(statearr_40922[(14)] = inst_40726);

(statearr_40922[(15)] = inst_40725);

(statearr_40922[(16)] = inst_40770);

(statearr_40922[(17)] = inst_40727);

return statearr_40922;
})();
var statearr_40923_43372 = state_40883__$1;
(statearr_40923_43372[(2)] = null);

(statearr_40923_43372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (39))){
var state_40883__$1 = state_40883;
var statearr_40938_43376 = state_40883__$1;
(statearr_40938_43376[(2)] = null);

(statearr_40938_43376[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (4))){
var inst_40716 = (state_40883[(9)]);
var inst_40716__$1 = (state_40883[(2)]);
var inst_40717 = (inst_40716__$1 == null);
var state_40883__$1 = (function (){var statearr_40942 = state_40883;
(statearr_40942[(9)] = inst_40716__$1);

return statearr_40942;
})();
if(cljs.core.truth_(inst_40717)){
var statearr_40943_43377 = state_40883__$1;
(statearr_40943_43377[(1)] = (5));

} else {
var statearr_40944_43378 = state_40883__$1;
(statearr_40944_43378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (15))){
var inst_40728 = (state_40883[(13)]);
var inst_40726 = (state_40883[(14)]);
var inst_40725 = (state_40883[(15)]);
var inst_40727 = (state_40883[(17)]);
var inst_40743 = (state_40883[(2)]);
var inst_40744 = (inst_40728 + (1));
var tmp40931 = inst_40726;
var tmp40932 = inst_40725;
var tmp40933 = inst_40727;
var inst_40725__$1 = tmp40932;
var inst_40726__$1 = tmp40931;
var inst_40727__$1 = tmp40933;
var inst_40728__$1 = inst_40744;
var state_40883__$1 = (function (){var statearr_40946 = state_40883;
(statearr_40946[(13)] = inst_40728__$1);

(statearr_40946[(14)] = inst_40726__$1);

(statearr_40946[(18)] = inst_40743);

(statearr_40946[(15)] = inst_40725__$1);

(statearr_40946[(17)] = inst_40727__$1);

return statearr_40946;
})();
var statearr_40948_43383 = state_40883__$1;
(statearr_40948_43383[(2)] = null);

(statearr_40948_43383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (21))){
var inst_40774 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40953_43384 = state_40883__$1;
(statearr_40953_43384[(2)] = inst_40774);

(statearr_40953_43384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (31))){
var inst_40805 = (state_40883[(12)]);
var inst_40810 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_40805);
var state_40883__$1 = state_40883;
var statearr_40958_43385 = state_40883__$1;
(statearr_40958_43385[(2)] = inst_40810);

(statearr_40958_43385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (32))){
var inst_40799 = (state_40883[(10)]);
var inst_40797 = (state_40883[(11)]);
var inst_40796 = (state_40883[(19)]);
var inst_40798 = (state_40883[(20)]);
var inst_40812 = (state_40883[(2)]);
var inst_40813 = (inst_40799 + (1));
var tmp40950 = inst_40797;
var tmp40951 = inst_40796;
var tmp40952 = inst_40798;
var inst_40796__$1 = tmp40951;
var inst_40797__$1 = tmp40950;
var inst_40798__$1 = tmp40952;
var inst_40799__$1 = inst_40813;
var state_40883__$1 = (function (){var statearr_40961 = state_40883;
(statearr_40961[(21)] = inst_40812);

(statearr_40961[(10)] = inst_40799__$1);

(statearr_40961[(11)] = inst_40797__$1);

(statearr_40961[(19)] = inst_40796__$1);

(statearr_40961[(20)] = inst_40798__$1);

return statearr_40961;
})();
var statearr_40962_43386 = state_40883__$1;
(statearr_40962_43386[(2)] = null);

(statearr_40962_43386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (40))){
var inst_40825 = (state_40883[(22)]);
var inst_40830 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_40825);
var state_40883__$1 = state_40883;
var statearr_40963_43387 = state_40883__$1;
(statearr_40963_43387[(2)] = inst_40830);

(statearr_40963_43387[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (33))){
var inst_40816 = (state_40883[(23)]);
var inst_40818 = cljs.core.chunked_seq_QMARK_(inst_40816);
var state_40883__$1 = state_40883;
if(inst_40818){
var statearr_40965_43388 = state_40883__$1;
(statearr_40965_43388[(1)] = (36));

} else {
var statearr_40969_43389 = state_40883__$1;
(statearr_40969_43389[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (13))){
var inst_40737 = (state_40883[(24)]);
var inst_40740 = cljs.core.async.close_BANG_(inst_40737);
var state_40883__$1 = state_40883;
var statearr_40974_43390 = state_40883__$1;
(statearr_40974_43390[(2)] = inst_40740);

(statearr_40974_43390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (22))){
var inst_40764 = (state_40883[(8)]);
var inst_40767 = cljs.core.async.close_BANG_(inst_40764);
var state_40883__$1 = state_40883;
var statearr_40979_43391 = state_40883__$1;
(statearr_40979_43391[(2)] = inst_40767);

(statearr_40979_43391[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (36))){
var inst_40816 = (state_40883[(23)]);
var inst_40820 = cljs.core.chunk_first(inst_40816);
var inst_40821 = cljs.core.chunk_rest(inst_40816);
var inst_40822 = cljs.core.count(inst_40820);
var inst_40796 = inst_40821;
var inst_40797 = inst_40820;
var inst_40798 = inst_40822;
var inst_40799 = (0);
var state_40883__$1 = (function (){var statearr_40981 = state_40883;
(statearr_40981[(10)] = inst_40799);

(statearr_40981[(11)] = inst_40797);

(statearr_40981[(19)] = inst_40796);

(statearr_40981[(20)] = inst_40798);

return statearr_40981;
})();
var statearr_40983_43392 = state_40883__$1;
(statearr_40983_43392[(2)] = null);

(statearr_40983_43392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (41))){
var inst_40816 = (state_40883[(23)]);
var inst_40832 = (state_40883[(2)]);
var inst_40833 = cljs.core.next(inst_40816);
var inst_40796 = inst_40833;
var inst_40797 = null;
var inst_40798 = (0);
var inst_40799 = (0);
var state_40883__$1 = (function (){var statearr_40984 = state_40883;
(statearr_40984[(10)] = inst_40799);

(statearr_40984[(11)] = inst_40797);

(statearr_40984[(19)] = inst_40796);

(statearr_40984[(25)] = inst_40832);

(statearr_40984[(20)] = inst_40798);

return statearr_40984;
})();
var statearr_40985_43393 = state_40883__$1;
(statearr_40985_43393[(2)] = null);

(statearr_40985_43393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (43))){
var state_40883__$1 = state_40883;
var statearr_40986_43394 = state_40883__$1;
(statearr_40986_43394[(2)] = null);

(statearr_40986_43394[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (29))){
var inst_40849 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40987_43395 = state_40883__$1;
(statearr_40987_43395[(2)] = inst_40849);

(statearr_40987_43395[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (44))){
var inst_40865 = (state_40883[(2)]);
var state_40883__$1 = (function (){var statearr_40989 = state_40883;
(statearr_40989[(26)] = inst_40865);

return statearr_40989;
})();
var statearr_40990_43400 = state_40883__$1;
(statearr_40990_43400[(2)] = null);

(statearr_40990_43400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (6))){
var inst_40785 = (state_40883[(27)]);
var inst_40784 = cljs.core.deref(cs);
var inst_40785__$1 = cljs.core.keys(inst_40784);
var inst_40789 = cljs.core.count(inst_40785__$1);
var inst_40790 = cljs.core.reset_BANG_(dctr,inst_40789);
var inst_40795 = cljs.core.seq(inst_40785__$1);
var inst_40796 = inst_40795;
var inst_40797 = null;
var inst_40798 = (0);
var inst_40799 = (0);
var state_40883__$1 = (function (){var statearr_40991 = state_40883;
(statearr_40991[(10)] = inst_40799);

(statearr_40991[(28)] = inst_40790);

(statearr_40991[(27)] = inst_40785__$1);

(statearr_40991[(11)] = inst_40797);

(statearr_40991[(19)] = inst_40796);

(statearr_40991[(20)] = inst_40798);

return statearr_40991;
})();
var statearr_40992_43401 = state_40883__$1;
(statearr_40992_43401[(2)] = null);

(statearr_40992_43401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (28))){
var inst_40816 = (state_40883[(23)]);
var inst_40796 = (state_40883[(19)]);
var inst_40816__$1 = cljs.core.seq(inst_40796);
var state_40883__$1 = (function (){var statearr_40994 = state_40883;
(statearr_40994[(23)] = inst_40816__$1);

return statearr_40994;
})();
if(inst_40816__$1){
var statearr_40996_43405 = state_40883__$1;
(statearr_40996_43405[(1)] = (33));

} else {
var statearr_40998_43406 = state_40883__$1;
(statearr_40998_43406[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (25))){
var inst_40799 = (state_40883[(10)]);
var inst_40798 = (state_40883[(20)]);
var inst_40802 = (inst_40799 < inst_40798);
var inst_40803 = inst_40802;
var state_40883__$1 = state_40883;
if(cljs.core.truth_(inst_40803)){
var statearr_41000_43407 = state_40883__$1;
(statearr_41000_43407[(1)] = (27));

} else {
var statearr_41001_43408 = state_40883__$1;
(statearr_41001_43408[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (34))){
var state_40883__$1 = state_40883;
var statearr_41006_43409 = state_40883__$1;
(statearr_41006_43409[(2)] = null);

(statearr_41006_43409[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (17))){
var state_40883__$1 = state_40883;
var statearr_41007_43410 = state_40883__$1;
(statearr_41007_43410[(2)] = null);

(statearr_41007_43410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (3))){
var inst_40870 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40883__$1,inst_40870);
} else {
if((state_val_40884 === (12))){
var inst_40779 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_41011_43411 = state_40883__$1;
(statearr_41011_43411[(2)] = inst_40779);

(statearr_41011_43411[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (2))){
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40883__$1,(4),ch);
} else {
if((state_val_40884 === (23))){
var state_40883__$1 = state_40883;
var statearr_41012_43412 = state_40883__$1;
(statearr_41012_43412[(2)] = null);

(statearr_41012_43412[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (35))){
var inst_40839 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_41014_43413 = state_40883__$1;
(statearr_41014_43413[(2)] = inst_40839);

(statearr_41014_43413[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (19))){
var inst_40748 = (state_40883[(7)]);
var inst_40754 = cljs.core.chunk_first(inst_40748);
var inst_40755 = cljs.core.chunk_rest(inst_40748);
var inst_40756 = cljs.core.count(inst_40754);
var inst_40725 = inst_40755;
var inst_40726 = inst_40754;
var inst_40727 = inst_40756;
var inst_40728 = (0);
var state_40883__$1 = (function (){var statearr_41015 = state_40883;
(statearr_41015[(13)] = inst_40728);

(statearr_41015[(14)] = inst_40726);

(statearr_41015[(15)] = inst_40725);

(statearr_41015[(17)] = inst_40727);

return statearr_41015;
})();
var statearr_41016_43415 = state_40883__$1;
(statearr_41016_43415[(2)] = null);

(statearr_41016_43415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (11))){
var inst_40748 = (state_40883[(7)]);
var inst_40725 = (state_40883[(15)]);
var inst_40748__$1 = cljs.core.seq(inst_40725);
var state_40883__$1 = (function (){var statearr_41021 = state_40883;
(statearr_41021[(7)] = inst_40748__$1);

return statearr_41021;
})();
if(inst_40748__$1){
var statearr_41022_43416 = state_40883__$1;
(statearr_41022_43416[(1)] = (16));

} else {
var statearr_41024_43417 = state_40883__$1;
(statearr_41024_43417[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (9))){
var inst_40781 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_41028_43418 = state_40883__$1;
(statearr_41028_43418[(2)] = inst_40781);

(statearr_41028_43418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (5))){
var inst_40723 = cljs.core.deref(cs);
var inst_40724 = cljs.core.seq(inst_40723);
var inst_40725 = inst_40724;
var inst_40726 = null;
var inst_40727 = (0);
var inst_40728 = (0);
var state_40883__$1 = (function (){var statearr_41031 = state_40883;
(statearr_41031[(13)] = inst_40728);

(statearr_41031[(14)] = inst_40726);

(statearr_41031[(15)] = inst_40725);

(statearr_41031[(17)] = inst_40727);

return statearr_41031;
})();
var statearr_41033_43419 = state_40883__$1;
(statearr_41033_43419[(2)] = null);

(statearr_41033_43419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (14))){
var state_40883__$1 = state_40883;
var statearr_41037_43420 = state_40883__$1;
(statearr_41037_43420[(2)] = null);

(statearr_41037_43420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (45))){
var inst_40862 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_41038_43424 = state_40883__$1;
(statearr_41038_43424[(2)] = inst_40862);

(statearr_41038_43424[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (26))){
var inst_40785 = (state_40883[(27)]);
var inst_40851 = (state_40883[(2)]);
var inst_40853 = cljs.core.seq(inst_40785);
var state_40883__$1 = (function (){var statearr_41040 = state_40883;
(statearr_41040[(29)] = inst_40851);

return statearr_41040;
})();
if(inst_40853){
var statearr_41042_43425 = state_40883__$1;
(statearr_41042_43425[(1)] = (42));

} else {
var statearr_41044_43426 = state_40883__$1;
(statearr_41044_43426[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (16))){
var inst_40748 = (state_40883[(7)]);
var inst_40751 = cljs.core.chunked_seq_QMARK_(inst_40748);
var state_40883__$1 = state_40883;
if(inst_40751){
var statearr_41048_43427 = state_40883__$1;
(statearr_41048_43427[(1)] = (19));

} else {
var statearr_41049_43446 = state_40883__$1;
(statearr_41049_43446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (38))){
var inst_40836 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_41050_43454 = state_40883__$1;
(statearr_41050_43454[(2)] = inst_40836);

(statearr_41050_43454[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (30))){
var state_40883__$1 = state_40883;
var statearr_41051_43455 = state_40883__$1;
(statearr_41051_43455[(2)] = null);

(statearr_41051_43455[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (10))){
var inst_40728 = (state_40883[(13)]);
var inst_40726 = (state_40883[(14)]);
var inst_40736 = cljs.core._nth(inst_40726,inst_40728);
var inst_40737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40736,(0),null);
var inst_40738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40736,(1),null);
var state_40883__$1 = (function (){var statearr_41057 = state_40883;
(statearr_41057[(24)] = inst_40737);

return statearr_41057;
})();
if(cljs.core.truth_(inst_40738)){
var statearr_41058_43456 = state_40883__$1;
(statearr_41058_43456[(1)] = (13));

} else {
var statearr_41060_43457 = state_40883__$1;
(statearr_41060_43457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (18))){
var inst_40777 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_41061_43458 = state_40883__$1;
(statearr_41061_43458[(2)] = inst_40777);

(statearr_41061_43458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (42))){
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40883__$1,(45),dchan);
} else {
if((state_val_40884 === (37))){
var inst_40816 = (state_40883[(23)]);
var inst_40716 = (state_40883[(9)]);
var inst_40825 = (state_40883[(22)]);
var inst_40825__$1 = cljs.core.first(inst_40816);
var inst_40826 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40825__$1,inst_40716,done);
var state_40883__$1 = (function (){var statearr_41071 = state_40883;
(statearr_41071[(22)] = inst_40825__$1);

return statearr_41071;
})();
if(cljs.core.truth_(inst_40826)){
var statearr_41072_43459 = state_40883__$1;
(statearr_41072_43459[(1)] = (39));

} else {
var statearr_41073_43463 = state_40883__$1;
(statearr_41073_43463[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (8))){
var inst_40728 = (state_40883[(13)]);
var inst_40727 = (state_40883[(17)]);
var inst_40730 = (inst_40728 < inst_40727);
var inst_40731 = inst_40730;
var state_40883__$1 = state_40883;
if(cljs.core.truth_(inst_40731)){
var statearr_41076_43464 = state_40883__$1;
(statearr_41076_43464[(1)] = (10));

} else {
var statearr_41078_43465 = state_40883__$1;
(statearr_41078_43465[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__37757__auto__ = null;
var cljs$core$async$mult_$_state_machine__37757__auto____0 = (function (){
var statearr_41083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41083[(0)] = cljs$core$async$mult_$_state_machine__37757__auto__);

(statearr_41083[(1)] = (1));

return statearr_41083;
});
var cljs$core$async$mult_$_state_machine__37757__auto____1 = (function (state_40883){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_40883);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e41085){var ex__37760__auto__ = e41085;
var statearr_41086_43469 = state_40883;
(statearr_41086_43469[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_40883[(4)]))){
var statearr_41087_43470 = state_40883;
(statearr_41087_43470[(1)] = cljs.core.first((state_40883[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43471 = state_40883;
state_40883 = G__43471;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37757__auto__ = function(state_40883){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37757__auto____1.call(this,state_40883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37757__auto____0;
cljs$core$async$mult_$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37757__auto____1;
return cljs$core$async$mult_$_state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_41088 = f__39042__auto__();
(statearr_41088[(6)] = c__39041__auto___43362);

return statearr_41088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41104 = arguments.length;
switch (G__41104) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_43480 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_43480(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43484 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_43484(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43491 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43491(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43492 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_43492(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43504 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43504(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___43505 = arguments.length;
var i__5727__auto___43506 = (0);
while(true){
if((i__5727__auto___43506 < len__5726__auto___43505)){
args__5732__auto__.push((arguments[i__5727__auto___43506]));

var G__43507 = (i__5727__auto___43506 + (1));
i__5727__auto___43506 = G__43507;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41190){
var map__41197 = p__41190;
var map__41197__$1 = cljs.core.__destructure_map(map__41197);
var opts = map__41197__$1;
var statearr_41198_43508 = state;
(statearr_41198_43508[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_41207_43509 = state;
(statearr_41207_43509[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_41210_43510 = state;
(statearr_41210_43510[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41180){
var G__41181 = cljs.core.first(seq41180);
var seq41180__$1 = cljs.core.next(seq41180);
var G__41182 = cljs.core.first(seq41180__$1);
var seq41180__$2 = cljs.core.next(seq41180__$1);
var G__41183 = cljs.core.first(seq41180__$2);
var seq41180__$3 = cljs.core.next(seq41180__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41181,G__41182,G__41183,seq41180__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41220 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41221){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41221 = meta41221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41222,meta41221__$1){
var self__ = this;
var _41222__$1 = this;
return (new cljs.core.async.t_cljs$core$async41220(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41221__$1));
}));

(cljs.core.async.t_cljs$core$async41220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41222){
var self__ = this;
var _41222__$1 = this;
return self__.meta41221;
}));

(cljs.core.async.t_cljs$core$async41220.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async41220.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41220.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async41220.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async41220.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async41220.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async41220.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async41220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41221","meta41221",-26184994,null)], null);
}));

(cljs.core.async.t_cljs$core$async41220.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41220");

(cljs.core.async.t_cljs$core$async41220.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async41220");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41220.
 */
cljs.core.async.__GT_t_cljs$core$async41220 = (function cljs$core$async$__GT_t_cljs$core$async41220(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41221){
return (new cljs.core.async.t_cljs$core$async41220(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41221));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async41220(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__39041__auto___43518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_41304){
var state_val_41305 = (state_41304[(1)]);
if((state_val_41305 === (7))){
var inst_41261 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
if(cljs.core.truth_(inst_41261)){
var statearr_41309_43519 = state_41304__$1;
(statearr_41309_43519[(1)] = (8));

} else {
var statearr_41310_43521 = state_41304__$1;
(statearr_41310_43521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (20))){
var inst_41254 = (state_41304[(7)]);
var state_41304__$1 = state_41304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41304__$1,(23),out,inst_41254);
} else {
if((state_val_41305 === (1))){
var inst_41237 = calc_state();
var inst_41238 = cljs.core.__destructure_map(inst_41237);
var inst_41239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41238,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41238,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41238,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41242 = inst_41237;
var state_41304__$1 = (function (){var statearr_41332 = state_41304;
(statearr_41332[(8)] = inst_41239);

(statearr_41332[(9)] = inst_41241);

(statearr_41332[(10)] = inst_41240);

(statearr_41332[(11)] = inst_41242);

return statearr_41332;
})();
var statearr_41333_43522 = state_41304__$1;
(statearr_41333_43522[(2)] = null);

(statearr_41333_43522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (24))){
var inst_41245 = (state_41304[(12)]);
var inst_41242 = inst_41245;
var state_41304__$1 = (function (){var statearr_41337 = state_41304;
(statearr_41337[(11)] = inst_41242);

return statearr_41337;
})();
var statearr_41338_43523 = state_41304__$1;
(statearr_41338_43523[(2)] = null);

(statearr_41338_43523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (4))){
var inst_41256 = (state_41304[(13)]);
var inst_41254 = (state_41304[(7)]);
var inst_41253 = (state_41304[(2)]);
var inst_41254__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41253,(0),null);
var inst_41255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41253,(1),null);
var inst_41256__$1 = (inst_41254__$1 == null);
var state_41304__$1 = (function (){var statearr_41353 = state_41304;
(statearr_41353[(13)] = inst_41256__$1);

(statearr_41353[(7)] = inst_41254__$1);

(statearr_41353[(14)] = inst_41255);

return statearr_41353;
})();
if(cljs.core.truth_(inst_41256__$1)){
var statearr_41354_43524 = state_41304__$1;
(statearr_41354_43524[(1)] = (5));

} else {
var statearr_41361_43525 = state_41304__$1;
(statearr_41361_43525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (15))){
var inst_41275 = (state_41304[(15)]);
var inst_41246 = (state_41304[(16)]);
var inst_41275__$1 = cljs.core.empty_QMARK_(inst_41246);
var state_41304__$1 = (function (){var statearr_41363 = state_41304;
(statearr_41363[(15)] = inst_41275__$1);

return statearr_41363;
})();
if(inst_41275__$1){
var statearr_41364_43526 = state_41304__$1;
(statearr_41364_43526[(1)] = (17));

} else {
var statearr_41365_43527 = state_41304__$1;
(statearr_41365_43527[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (21))){
var inst_41245 = (state_41304[(12)]);
var inst_41242 = inst_41245;
var state_41304__$1 = (function (){var statearr_41369 = state_41304;
(statearr_41369[(11)] = inst_41242);

return statearr_41369;
})();
var statearr_41370_43528 = state_41304__$1;
(statearr_41370_43528[(2)] = null);

(statearr_41370_43528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (13))){
var inst_41268 = (state_41304[(2)]);
var inst_41269 = calc_state();
var inst_41242 = inst_41269;
var state_41304__$1 = (function (){var statearr_41372 = state_41304;
(statearr_41372[(11)] = inst_41242);

(statearr_41372[(17)] = inst_41268);

return statearr_41372;
})();
var statearr_41374_43530 = state_41304__$1;
(statearr_41374_43530[(2)] = null);

(statearr_41374_43530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (22))){
var inst_41298 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
var statearr_41375_43531 = state_41304__$1;
(statearr_41375_43531[(2)] = inst_41298);

(statearr_41375_43531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (6))){
var inst_41255 = (state_41304[(14)]);
var inst_41259 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41255,change);
var state_41304__$1 = state_41304;
var statearr_41376_43532 = state_41304__$1;
(statearr_41376_43532[(2)] = inst_41259);

(statearr_41376_43532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (25))){
var state_41304__$1 = state_41304;
var statearr_41378_43533 = state_41304__$1;
(statearr_41378_43533[(2)] = null);

(statearr_41378_43533[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (17))){
var inst_41247 = (state_41304[(18)]);
var inst_41255 = (state_41304[(14)]);
var inst_41277 = (inst_41247.cljs$core$IFn$_invoke$arity$1 ? inst_41247.cljs$core$IFn$_invoke$arity$1(inst_41255) : inst_41247.call(null, inst_41255));
var inst_41278 = cljs.core.not(inst_41277);
var state_41304__$1 = state_41304;
var statearr_41380_43534 = state_41304__$1;
(statearr_41380_43534[(2)] = inst_41278);

(statearr_41380_43534[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (3))){
var inst_41302 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41304__$1,inst_41302);
} else {
if((state_val_41305 === (12))){
var state_41304__$1 = state_41304;
var statearr_41386_43535 = state_41304__$1;
(statearr_41386_43535[(2)] = null);

(statearr_41386_43535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (2))){
var inst_41242 = (state_41304[(11)]);
var inst_41245 = (state_41304[(12)]);
var inst_41245__$1 = cljs.core.__destructure_map(inst_41242);
var inst_41246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41245__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41245__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41245__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41304__$1 = (function (){var statearr_41388 = state_41304;
(statearr_41388[(16)] = inst_41246);

(statearr_41388[(18)] = inst_41247);

(statearr_41388[(12)] = inst_41245__$1);

return statearr_41388;
})();
return cljs.core.async.ioc_alts_BANG_(state_41304__$1,(4),inst_41248);
} else {
if((state_val_41305 === (23))){
var inst_41289 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
if(cljs.core.truth_(inst_41289)){
var statearr_41389_43536 = state_41304__$1;
(statearr_41389_43536[(1)] = (24));

} else {
var statearr_41399_43537 = state_41304__$1;
(statearr_41399_43537[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (19))){
var inst_41281 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
var statearr_41403_43538 = state_41304__$1;
(statearr_41403_43538[(2)] = inst_41281);

(statearr_41403_43538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (11))){
var inst_41255 = (state_41304[(14)]);
var inst_41265 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41255);
var state_41304__$1 = state_41304;
var statearr_41407_43539 = state_41304__$1;
(statearr_41407_43539[(2)] = inst_41265);

(statearr_41407_43539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (9))){
var inst_41272 = (state_41304[(19)]);
var inst_41246 = (state_41304[(16)]);
var inst_41255 = (state_41304[(14)]);
var inst_41272__$1 = (inst_41246.cljs$core$IFn$_invoke$arity$1 ? inst_41246.cljs$core$IFn$_invoke$arity$1(inst_41255) : inst_41246.call(null, inst_41255));
var state_41304__$1 = (function (){var statearr_41408 = state_41304;
(statearr_41408[(19)] = inst_41272__$1);

return statearr_41408;
})();
if(cljs.core.truth_(inst_41272__$1)){
var statearr_41409_43540 = state_41304__$1;
(statearr_41409_43540[(1)] = (14));

} else {
var statearr_41410_43541 = state_41304__$1;
(statearr_41410_43541[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (5))){
var inst_41256 = (state_41304[(13)]);
var state_41304__$1 = state_41304;
var statearr_41411_43543 = state_41304__$1;
(statearr_41411_43543[(2)] = inst_41256);

(statearr_41411_43543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (14))){
var inst_41272 = (state_41304[(19)]);
var state_41304__$1 = state_41304;
var statearr_41412_43544 = state_41304__$1;
(statearr_41412_43544[(2)] = inst_41272);

(statearr_41412_43544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (26))){
var inst_41294 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
var statearr_41413_43545 = state_41304__$1;
(statearr_41413_43545[(2)] = inst_41294);

(statearr_41413_43545[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (16))){
var inst_41283 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
if(cljs.core.truth_(inst_41283)){
var statearr_41414_43547 = state_41304__$1;
(statearr_41414_43547[(1)] = (20));

} else {
var statearr_41417_43548 = state_41304__$1;
(statearr_41417_43548[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (10))){
var inst_41300 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
var statearr_41418_43549 = state_41304__$1;
(statearr_41418_43549[(2)] = inst_41300);

(statearr_41418_43549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (18))){
var inst_41275 = (state_41304[(15)]);
var state_41304__$1 = state_41304;
var statearr_41463_43550 = state_41304__$1;
(statearr_41463_43550[(2)] = inst_41275);

(statearr_41463_43550[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (8))){
var inst_41254 = (state_41304[(7)]);
var inst_41263 = (inst_41254 == null);
var state_41304__$1 = state_41304;
if(cljs.core.truth_(inst_41263)){
var statearr_41482_43551 = state_41304__$1;
(statearr_41482_43551[(1)] = (11));

} else {
var statearr_41488_43552 = state_41304__$1;
(statearr_41488_43552[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__37757__auto__ = null;
var cljs$core$async$mix_$_state_machine__37757__auto____0 = (function (){
var statearr_41494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41494[(0)] = cljs$core$async$mix_$_state_machine__37757__auto__);

(statearr_41494[(1)] = (1));

return statearr_41494;
});
var cljs$core$async$mix_$_state_machine__37757__auto____1 = (function (state_41304){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_41304);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e41499){var ex__37760__auto__ = e41499;
var statearr_41500_43556 = state_41304;
(statearr_41500_43556[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_41304[(4)]))){
var statearr_41501_43557 = state_41304;
(statearr_41501_43557[(1)] = cljs.core.first((state_41304[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43558 = state_41304;
state_41304 = G__43558;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37757__auto__ = function(state_41304){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37757__auto____1.call(this,state_41304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37757__auto____0;
cljs$core$async$mix_$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37757__auto____1;
return cljs$core$async$mix_$_state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_41502 = f__39042__auto__();
(statearr_41502[(6)] = c__39041__auto___43518);

return statearr_41502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_43563 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_43563(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_43571 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_43571(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_43578 = (function() {
var G__43580 = null;
var G__43580__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__43580__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__43580 = function(p,v){
switch(arguments.length){
case 1:
return G__43580__1.call(this,p);
case 2:
return G__43580__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43580.cljs$core$IFn$_invoke$arity$1 = G__43580__1;
G__43580.cljs$core$IFn$_invoke$arity$2 = G__43580__2;
return G__43580;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41550 = arguments.length;
switch (G__41550) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43578(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43578(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41572 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41573){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41573 = meta41573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41574,meta41573__$1){
var self__ = this;
var _41574__$1 = this;
return (new cljs.core.async.t_cljs$core$async41572(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41573__$1));
}));

(cljs.core.async.t_cljs$core$async41572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41574){
var self__ = this;
var _41574__$1 = this;
return self__.meta41573;
}));

(cljs.core.async.t_cljs$core$async41572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41572.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41572.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async41572.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async41572.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async41572.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async41572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41573","meta41573",-591229287,null)], null);
}));

(cljs.core.async.t_cljs$core$async41572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41572");

(cljs.core.async.t_cljs$core$async41572.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async41572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41572.
 */
cljs.core.async.__GT_t_cljs$core$async41572 = (function cljs$core$async$__GT_t_cljs$core$async41572(ch,topic_fn,buf_fn,mults,ensure_mult,meta41573){
return (new cljs.core.async.t_cljs$core$async41572(ch,topic_fn,buf_fn,mults,ensure_mult,meta41573));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41566 = arguments.length;
switch (G__41566) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__41557_SHARP_){
if(cljs.core.truth_((p1__41557_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41557_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41557_SHARP_.call(null, topic)))){
return p1__41557_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41557_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async41572(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__39041__auto___43604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_41714){
var state_val_41715 = (state_41714[(1)]);
if((state_val_41715 === (7))){
var inst_41702 = (state_41714[(2)]);
var state_41714__$1 = state_41714;
var statearr_41716_43605 = state_41714__$1;
(statearr_41716_43605[(2)] = inst_41702);

(statearr_41716_43605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (20))){
var state_41714__$1 = state_41714;
var statearr_41717_43606 = state_41714__$1;
(statearr_41717_43606[(2)] = null);

(statearr_41717_43606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (1))){
var state_41714__$1 = state_41714;
var statearr_41718_43607 = state_41714__$1;
(statearr_41718_43607[(2)] = null);

(statearr_41718_43607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (24))){
var inst_41685 = (state_41714[(7)]);
var inst_41694 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41685);
var state_41714__$1 = state_41714;
var statearr_41719_43608 = state_41714__$1;
(statearr_41719_43608[(2)] = inst_41694);

(statearr_41719_43608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (4))){
var inst_41620 = (state_41714[(8)]);
var inst_41620__$1 = (state_41714[(2)]);
var inst_41621 = (inst_41620__$1 == null);
var state_41714__$1 = (function (){var statearr_41720 = state_41714;
(statearr_41720[(8)] = inst_41620__$1);

return statearr_41720;
})();
if(cljs.core.truth_(inst_41621)){
var statearr_41721_43609 = state_41714__$1;
(statearr_41721_43609[(1)] = (5));

} else {
var statearr_41722_43610 = state_41714__$1;
(statearr_41722_43610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (15))){
var inst_41679 = (state_41714[(2)]);
var state_41714__$1 = state_41714;
var statearr_41723_43611 = state_41714__$1;
(statearr_41723_43611[(2)] = inst_41679);

(statearr_41723_43611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (21))){
var inst_41699 = (state_41714[(2)]);
var state_41714__$1 = (function (){var statearr_41724 = state_41714;
(statearr_41724[(9)] = inst_41699);

return statearr_41724;
})();
var statearr_41725_43612 = state_41714__$1;
(statearr_41725_43612[(2)] = null);

(statearr_41725_43612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (13))){
var inst_41654 = (state_41714[(10)]);
var inst_41659 = cljs.core.chunked_seq_QMARK_(inst_41654);
var state_41714__$1 = state_41714;
if(inst_41659){
var statearr_41729_43613 = state_41714__$1;
(statearr_41729_43613[(1)] = (16));

} else {
var statearr_41730_43614 = state_41714__$1;
(statearr_41730_43614[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (22))){
var inst_41691 = (state_41714[(2)]);
var state_41714__$1 = state_41714;
if(cljs.core.truth_(inst_41691)){
var statearr_41731_43615 = state_41714__$1;
(statearr_41731_43615[(1)] = (23));

} else {
var statearr_41732_43616 = state_41714__$1;
(statearr_41732_43616[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (6))){
var inst_41620 = (state_41714[(8)]);
var inst_41687 = (state_41714[(11)]);
var inst_41685 = (state_41714[(7)]);
var inst_41685__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41620) : topic_fn.call(null, inst_41620));
var inst_41686 = cljs.core.deref(mults);
var inst_41687__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41686,inst_41685__$1);
var state_41714__$1 = (function (){var statearr_41733 = state_41714;
(statearr_41733[(11)] = inst_41687__$1);

(statearr_41733[(7)] = inst_41685__$1);

return statearr_41733;
})();
if(cljs.core.truth_(inst_41687__$1)){
var statearr_41734_43617 = state_41714__$1;
(statearr_41734_43617[(1)] = (19));

} else {
var statearr_41735_43618 = state_41714__$1;
(statearr_41735_43618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (25))){
var inst_41696 = (state_41714[(2)]);
var state_41714__$1 = state_41714;
var statearr_41736_43619 = state_41714__$1;
(statearr_41736_43619[(2)] = inst_41696);

(statearr_41736_43619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (17))){
var inst_41654 = (state_41714[(10)]);
var inst_41670 = cljs.core.first(inst_41654);
var inst_41671 = cljs.core.async.muxch_STAR_(inst_41670);
var inst_41672 = cljs.core.async.close_BANG_(inst_41671);
var inst_41673 = cljs.core.next(inst_41654);
var inst_41630 = inst_41673;
var inst_41631 = null;
var inst_41632 = (0);
var inst_41633 = (0);
var state_41714__$1 = (function (){var statearr_41737 = state_41714;
(statearr_41737[(12)] = inst_41672);

(statearr_41737[(13)] = inst_41630);

(statearr_41737[(14)] = inst_41633);

(statearr_41737[(15)] = inst_41631);

(statearr_41737[(16)] = inst_41632);

return statearr_41737;
})();
var statearr_41738_43622 = state_41714__$1;
(statearr_41738_43622[(2)] = null);

(statearr_41738_43622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (3))){
var inst_41704 = (state_41714[(2)]);
var state_41714__$1 = state_41714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41714__$1,inst_41704);
} else {
if((state_val_41715 === (12))){
var inst_41681 = (state_41714[(2)]);
var state_41714__$1 = state_41714;
var statearr_41739_43623 = state_41714__$1;
(statearr_41739_43623[(2)] = inst_41681);

(statearr_41739_43623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (2))){
var state_41714__$1 = state_41714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41714__$1,(4),ch);
} else {
if((state_val_41715 === (23))){
var state_41714__$1 = state_41714;
var statearr_41740_43624 = state_41714__$1;
(statearr_41740_43624[(2)] = null);

(statearr_41740_43624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (19))){
var inst_41620 = (state_41714[(8)]);
var inst_41687 = (state_41714[(11)]);
var inst_41689 = cljs.core.async.muxch_STAR_(inst_41687);
var state_41714__$1 = state_41714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41714__$1,(22),inst_41689,inst_41620);
} else {
if((state_val_41715 === (11))){
var inst_41630 = (state_41714[(13)]);
var inst_41654 = (state_41714[(10)]);
var inst_41654__$1 = cljs.core.seq(inst_41630);
var state_41714__$1 = (function (){var statearr_41741 = state_41714;
(statearr_41741[(10)] = inst_41654__$1);

return statearr_41741;
})();
if(inst_41654__$1){
var statearr_41742_43628 = state_41714__$1;
(statearr_41742_43628[(1)] = (13));

} else {
var statearr_41743_43629 = state_41714__$1;
(statearr_41743_43629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (9))){
var inst_41683 = (state_41714[(2)]);
var state_41714__$1 = state_41714;
var statearr_41744_43630 = state_41714__$1;
(statearr_41744_43630[(2)] = inst_41683);

(statearr_41744_43630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (5))){
var inst_41627 = cljs.core.deref(mults);
var inst_41628 = cljs.core.vals(inst_41627);
var inst_41629 = cljs.core.seq(inst_41628);
var inst_41630 = inst_41629;
var inst_41631 = null;
var inst_41632 = (0);
var inst_41633 = (0);
var state_41714__$1 = (function (){var statearr_41745 = state_41714;
(statearr_41745[(13)] = inst_41630);

(statearr_41745[(14)] = inst_41633);

(statearr_41745[(15)] = inst_41631);

(statearr_41745[(16)] = inst_41632);

return statearr_41745;
})();
var statearr_41746_43631 = state_41714__$1;
(statearr_41746_43631[(2)] = null);

(statearr_41746_43631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (14))){
var state_41714__$1 = state_41714;
var statearr_41750_43632 = state_41714__$1;
(statearr_41750_43632[(2)] = null);

(statearr_41750_43632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (16))){
var inst_41654 = (state_41714[(10)]);
var inst_41661 = cljs.core.chunk_first(inst_41654);
var inst_41662 = cljs.core.chunk_rest(inst_41654);
var inst_41663 = cljs.core.count(inst_41661);
var inst_41630 = inst_41662;
var inst_41631 = inst_41661;
var inst_41632 = inst_41663;
var inst_41633 = (0);
var state_41714__$1 = (function (){var statearr_41756 = state_41714;
(statearr_41756[(13)] = inst_41630);

(statearr_41756[(14)] = inst_41633);

(statearr_41756[(15)] = inst_41631);

(statearr_41756[(16)] = inst_41632);

return statearr_41756;
})();
var statearr_41757_43633 = state_41714__$1;
(statearr_41757_43633[(2)] = null);

(statearr_41757_43633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (10))){
var inst_41630 = (state_41714[(13)]);
var inst_41633 = (state_41714[(14)]);
var inst_41631 = (state_41714[(15)]);
var inst_41632 = (state_41714[(16)]);
var inst_41641 = cljs.core._nth(inst_41631,inst_41633);
var inst_41646 = cljs.core.async.muxch_STAR_(inst_41641);
var inst_41647 = cljs.core.async.close_BANG_(inst_41646);
var inst_41651 = (inst_41633 + (1));
var tmp41747 = inst_41630;
var tmp41748 = inst_41631;
var tmp41749 = inst_41632;
var inst_41630__$1 = tmp41747;
var inst_41631__$1 = tmp41748;
var inst_41632__$1 = tmp41749;
var inst_41633__$1 = inst_41651;
var state_41714__$1 = (function (){var statearr_41759 = state_41714;
(statearr_41759[(13)] = inst_41630__$1);

(statearr_41759[(14)] = inst_41633__$1);

(statearr_41759[(15)] = inst_41631__$1);

(statearr_41759[(16)] = inst_41632__$1);

(statearr_41759[(17)] = inst_41647);

return statearr_41759;
})();
var statearr_41764_43634 = state_41714__$1;
(statearr_41764_43634[(2)] = null);

(statearr_41764_43634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (18))){
var inst_41676 = (state_41714[(2)]);
var state_41714__$1 = state_41714;
var statearr_41771_43635 = state_41714__$1;
(statearr_41771_43635[(2)] = inst_41676);

(statearr_41771_43635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41715 === (8))){
var inst_41633 = (state_41714[(14)]);
var inst_41632 = (state_41714[(16)]);
var inst_41638 = (inst_41633 < inst_41632);
var inst_41639 = inst_41638;
var state_41714__$1 = state_41714;
if(cljs.core.truth_(inst_41639)){
var statearr_41775_43637 = state_41714__$1;
(statearr_41775_43637[(1)] = (10));

} else {
var statearr_41776_43638 = state_41714__$1;
(statearr_41776_43638[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_41778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41778[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_41778[(1)] = (1));

return statearr_41778;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_41714){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_41714);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e41780){var ex__37760__auto__ = e41780;
var statearr_41781_43639 = state_41714;
(statearr_41781_43639[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_41714[(4)]))){
var statearr_41785_43640 = state_41714;
(statearr_41785_43640[(1)] = cljs.core.first((state_41714[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43641 = state_41714;
state_41714 = G__43641;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_41714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_41714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_41786 = f__39042__auto__();
(statearr_41786[(6)] = c__39041__auto___43604);

return statearr_41786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41789 = arguments.length;
switch (G__41789) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41797 = arguments.length;
switch (G__41797) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41809 = arguments.length;
switch (G__41809) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__39041__auto___43646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_41901){
var state_val_41902 = (state_41901[(1)]);
if((state_val_41902 === (7))){
var state_41901__$1 = state_41901;
var statearr_41906_43647 = state_41901__$1;
(statearr_41906_43647[(2)] = null);

(statearr_41906_43647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (1))){
var state_41901__$1 = state_41901;
var statearr_41907_43648 = state_41901__$1;
(statearr_41907_43648[(2)] = null);

(statearr_41907_43648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (4))){
var inst_41841 = (state_41901[(7)]);
var inst_41842 = (state_41901[(8)]);
var inst_41844 = (inst_41842 < inst_41841);
var state_41901__$1 = state_41901;
if(cljs.core.truth_(inst_41844)){
var statearr_41908_43649 = state_41901__$1;
(statearr_41908_43649[(1)] = (6));

} else {
var statearr_41909_43650 = state_41901__$1;
(statearr_41909_43650[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (15))){
var inst_41885 = (state_41901[(9)]);
var inst_41891 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_41885);
var state_41901__$1 = state_41901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41901__$1,(17),out,inst_41891);
} else {
if((state_val_41902 === (13))){
var inst_41885 = (state_41901[(9)]);
var inst_41885__$1 = (state_41901[(2)]);
var inst_41886 = cljs.core.some(cljs.core.nil_QMARK_,inst_41885__$1);
var state_41901__$1 = (function (){var statearr_41911 = state_41901;
(statearr_41911[(9)] = inst_41885__$1);

return statearr_41911;
})();
if(cljs.core.truth_(inst_41886)){
var statearr_41913_43653 = state_41901__$1;
(statearr_41913_43653[(1)] = (14));

} else {
var statearr_41923_43654 = state_41901__$1;
(statearr_41923_43654[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (6))){
var state_41901__$1 = state_41901;
var statearr_41924_43655 = state_41901__$1;
(statearr_41924_43655[(2)] = null);

(statearr_41924_43655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (17))){
var inst_41893 = (state_41901[(2)]);
var state_41901__$1 = (function (){var statearr_41937 = state_41901;
(statearr_41937[(10)] = inst_41893);

return statearr_41937;
})();
var statearr_41938_43659 = state_41901__$1;
(statearr_41938_43659[(2)] = null);

(statearr_41938_43659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (3))){
var inst_41898 = (state_41901[(2)]);
var state_41901__$1 = state_41901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41901__$1,inst_41898);
} else {
if((state_val_41902 === (12))){
var _ = (function (){var statearr_41946 = state_41901;
(statearr_41946[(4)] = cljs.core.rest((state_41901[(4)])));

return statearr_41946;
})();
var state_41901__$1 = state_41901;
var ex41935 = (state_41901__$1[(2)]);
var statearr_41947_43660 = state_41901__$1;
(statearr_41947_43660[(5)] = ex41935);


if((ex41935 instanceof Object)){
var statearr_41955_43661 = state_41901__$1;
(statearr_41955_43661[(1)] = (11));

(statearr_41955_43661[(5)] = null);

} else {
throw ex41935;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (2))){
var inst_41840 = cljs.core.reset_BANG_(dctr,cnt);
var inst_41841 = cnt;
var inst_41842 = (0);
var state_41901__$1 = (function (){var statearr_41957 = state_41901;
(statearr_41957[(7)] = inst_41841);

(statearr_41957[(11)] = inst_41840);

(statearr_41957[(8)] = inst_41842);

return statearr_41957;
})();
var statearr_41958_43662 = state_41901__$1;
(statearr_41958_43662[(2)] = null);

(statearr_41958_43662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (11))){
var inst_41862 = (state_41901[(2)]);
var inst_41865 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_41901__$1 = (function (){var statearr_41961 = state_41901;
(statearr_41961[(12)] = inst_41862);

return statearr_41961;
})();
var statearr_41962_43663 = state_41901__$1;
(statearr_41962_43663[(2)] = inst_41865);

(statearr_41962_43663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (9))){
var inst_41842 = (state_41901[(8)]);
var _ = (function (){var statearr_41971 = state_41901;
(statearr_41971[(4)] = cljs.core.cons((12),(state_41901[(4)])));

return statearr_41971;
})();
var inst_41871 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41842) : chs__$1.call(null, inst_41842));
var inst_41872 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41842) : done.call(null, inst_41842));
var inst_41873 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41871,inst_41872);
var ___$1 = (function (){var statearr_41972 = state_41901;
(statearr_41972[(4)] = cljs.core.rest((state_41901[(4)])));

return statearr_41972;
})();
var state_41901__$1 = state_41901;
var statearr_41973_43664 = state_41901__$1;
(statearr_41973_43664[(2)] = inst_41873);

(statearr_41973_43664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (5))){
var inst_41883 = (state_41901[(2)]);
var state_41901__$1 = (function (){var statearr_41974 = state_41901;
(statearr_41974[(13)] = inst_41883);

return statearr_41974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41901__$1,(13),dchan);
} else {
if((state_val_41902 === (14))){
var inst_41889 = cljs.core.async.close_BANG_(out);
var state_41901__$1 = state_41901;
var statearr_41976_43665 = state_41901__$1;
(statearr_41976_43665[(2)] = inst_41889);

(statearr_41976_43665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (16))){
var inst_41896 = (state_41901[(2)]);
var state_41901__$1 = state_41901;
var statearr_41977_43666 = state_41901__$1;
(statearr_41977_43666[(2)] = inst_41896);

(statearr_41977_43666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (10))){
var inst_41842 = (state_41901[(8)]);
var inst_41876 = (state_41901[(2)]);
var inst_41877 = (inst_41842 + (1));
var inst_41842__$1 = inst_41877;
var state_41901__$1 = (function (){var statearr_41981 = state_41901;
(statearr_41981[(8)] = inst_41842__$1);

(statearr_41981[(14)] = inst_41876);

return statearr_41981;
})();
var statearr_41985_43667 = state_41901__$1;
(statearr_41985_43667[(2)] = null);

(statearr_41985_43667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41902 === (8))){
var inst_41881 = (state_41901[(2)]);
var state_41901__$1 = state_41901;
var statearr_41987_43668 = state_41901__$1;
(statearr_41987_43668[(2)] = inst_41881);

(statearr_41987_43668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_41988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41988[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_41988[(1)] = (1));

return statearr_41988;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_41901){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_41901);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e41989){var ex__37760__auto__ = e41989;
var statearr_41990_43669 = state_41901;
(statearr_41990_43669[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_41901[(4)]))){
var statearr_41991_43670 = state_41901;
(statearr_41991_43670[(1)] = cljs.core.first((state_41901[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43671 = state_41901;
state_41901 = G__43671;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_41901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_41901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_41993 = f__39042__auto__();
(statearr_41993[(6)] = c__39041__auto___43646);

return statearr_41993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42004 = arguments.length;
switch (G__42004) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39041__auto___43674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_42045){
var state_val_42046 = (state_42045[(1)]);
if((state_val_42046 === (7))){
var inst_42019 = (state_42045[(7)]);
var inst_42020 = (state_42045[(8)]);
var inst_42019__$1 = (state_42045[(2)]);
var inst_42020__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42019__$1,(0),null);
var inst_42021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42019__$1,(1),null);
var inst_42022 = (inst_42020__$1 == null);
var state_42045__$1 = (function (){var statearr_42050 = state_42045;
(statearr_42050[(9)] = inst_42021);

(statearr_42050[(7)] = inst_42019__$1);

(statearr_42050[(8)] = inst_42020__$1);

return statearr_42050;
})();
if(cljs.core.truth_(inst_42022)){
var statearr_42051_43676 = state_42045__$1;
(statearr_42051_43676[(1)] = (8));

} else {
var statearr_42052_43677 = state_42045__$1;
(statearr_42052_43677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (1))){
var inst_42009 = cljs.core.vec(chs);
var inst_42010 = inst_42009;
var state_42045__$1 = (function (){var statearr_42053 = state_42045;
(statearr_42053[(10)] = inst_42010);

return statearr_42053;
})();
var statearr_42054_43678 = state_42045__$1;
(statearr_42054_43678[(2)] = null);

(statearr_42054_43678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (4))){
var inst_42010 = (state_42045[(10)]);
var state_42045__$1 = state_42045;
return cljs.core.async.ioc_alts_BANG_(state_42045__$1,(7),inst_42010);
} else {
if((state_val_42046 === (6))){
var inst_42041 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
var statearr_42059_43680 = state_42045__$1;
(statearr_42059_43680[(2)] = inst_42041);

(statearr_42059_43680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (3))){
var inst_42043 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42045__$1,inst_42043);
} else {
if((state_val_42046 === (2))){
var inst_42010 = (state_42045[(10)]);
var inst_42012 = cljs.core.count(inst_42010);
var inst_42013 = (inst_42012 > (0));
var state_42045__$1 = state_42045;
if(cljs.core.truth_(inst_42013)){
var statearr_42062_43681 = state_42045__$1;
(statearr_42062_43681[(1)] = (4));

} else {
var statearr_42063_43682 = state_42045__$1;
(statearr_42063_43682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (11))){
var inst_42010 = (state_42045[(10)]);
var inst_42033 = (state_42045[(2)]);
var tmp42060 = inst_42010;
var inst_42010__$1 = tmp42060;
var state_42045__$1 = (function (){var statearr_42064 = state_42045;
(statearr_42064[(11)] = inst_42033);

(statearr_42064[(10)] = inst_42010__$1);

return statearr_42064;
})();
var statearr_42065_43683 = state_42045__$1;
(statearr_42065_43683[(2)] = null);

(statearr_42065_43683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (9))){
var inst_42020 = (state_42045[(8)]);
var state_42045__$1 = state_42045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42045__$1,(11),out,inst_42020);
} else {
if((state_val_42046 === (5))){
var inst_42038 = cljs.core.async.close_BANG_(out);
var state_42045__$1 = state_42045;
var statearr_42082_43685 = state_42045__$1;
(statearr_42082_43685[(2)] = inst_42038);

(statearr_42082_43685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (10))){
var inst_42036 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
var statearr_42083_43686 = state_42045__$1;
(statearr_42083_43686[(2)] = inst_42036);

(statearr_42083_43686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (8))){
var inst_42021 = (state_42045[(9)]);
var inst_42019 = (state_42045[(7)]);
var inst_42020 = (state_42045[(8)]);
var inst_42010 = (state_42045[(10)]);
var inst_42028 = (function (){var cs = inst_42010;
var vec__42015 = inst_42019;
var v = inst_42020;
var c = inst_42021;
return (function (p1__42001_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42001_SHARP_);
});
})();
var inst_42029 = cljs.core.filterv(inst_42028,inst_42010);
var inst_42010__$1 = inst_42029;
var state_42045__$1 = (function (){var statearr_42090 = state_42045;
(statearr_42090[(10)] = inst_42010__$1);

return statearr_42090;
})();
var statearr_42091_43688 = state_42045__$1;
(statearr_42091_43688[(2)] = null);

(statearr_42091_43688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_42098 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42098[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_42098[(1)] = (1));

return statearr_42098;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_42045){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_42045);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e42102){var ex__37760__auto__ = e42102;
var statearr_42103_43689 = state_42045;
(statearr_42103_43689[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_42045[(4)]))){
var statearr_42104_43690 = state_42045;
(statearr_42104_43690[(1)] = cljs.core.first((state_42045[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43691 = state_42045;
state_42045 = G__43691;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_42045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_42045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_42106 = f__39042__auto__();
(statearr_42106[(6)] = c__39041__auto___43674);

return statearr_42106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42109 = arguments.length;
switch (G__42109) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39041__auto___43694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_42147){
var state_val_42148 = (state_42147[(1)]);
if((state_val_42148 === (7))){
var inst_42128 = (state_42147[(7)]);
var inst_42128__$1 = (state_42147[(2)]);
var inst_42129 = (inst_42128__$1 == null);
var inst_42130 = cljs.core.not(inst_42129);
var state_42147__$1 = (function (){var statearr_42155 = state_42147;
(statearr_42155[(7)] = inst_42128__$1);

return statearr_42155;
})();
if(inst_42130){
var statearr_42156_43695 = state_42147__$1;
(statearr_42156_43695[(1)] = (8));

} else {
var statearr_42157_43696 = state_42147__$1;
(statearr_42157_43696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (1))){
var inst_42122 = (0);
var state_42147__$1 = (function (){var statearr_42158 = state_42147;
(statearr_42158[(8)] = inst_42122);

return statearr_42158;
})();
var statearr_42159_43697 = state_42147__$1;
(statearr_42159_43697[(2)] = null);

(statearr_42159_43697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (4))){
var state_42147__$1 = state_42147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42147__$1,(7),ch);
} else {
if((state_val_42148 === (6))){
var inst_42141 = (state_42147[(2)]);
var state_42147__$1 = state_42147;
var statearr_42160_43702 = state_42147__$1;
(statearr_42160_43702[(2)] = inst_42141);

(statearr_42160_43702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (3))){
var inst_42143 = (state_42147[(2)]);
var inst_42144 = cljs.core.async.close_BANG_(out);
var state_42147__$1 = (function (){var statearr_42165 = state_42147;
(statearr_42165[(9)] = inst_42143);

return statearr_42165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42147__$1,inst_42144);
} else {
if((state_val_42148 === (2))){
var inst_42122 = (state_42147[(8)]);
var inst_42125 = (inst_42122 < n);
var state_42147__$1 = state_42147;
if(cljs.core.truth_(inst_42125)){
var statearr_42166_43704 = state_42147__$1;
(statearr_42166_43704[(1)] = (4));

} else {
var statearr_42167_43705 = state_42147__$1;
(statearr_42167_43705[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (11))){
var inst_42122 = (state_42147[(8)]);
var inst_42133 = (state_42147[(2)]);
var inst_42134 = (inst_42122 + (1));
var inst_42122__$1 = inst_42134;
var state_42147__$1 = (function (){var statearr_42168 = state_42147;
(statearr_42168[(10)] = inst_42133);

(statearr_42168[(8)] = inst_42122__$1);

return statearr_42168;
})();
var statearr_42169_43706 = state_42147__$1;
(statearr_42169_43706[(2)] = null);

(statearr_42169_43706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (9))){
var state_42147__$1 = state_42147;
var statearr_42170_43707 = state_42147__$1;
(statearr_42170_43707[(2)] = null);

(statearr_42170_43707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (5))){
var state_42147__$1 = state_42147;
var statearr_42171_43708 = state_42147__$1;
(statearr_42171_43708[(2)] = null);

(statearr_42171_43708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (10))){
var inst_42138 = (state_42147[(2)]);
var state_42147__$1 = state_42147;
var statearr_42179_43709 = state_42147__$1;
(statearr_42179_43709[(2)] = inst_42138);

(statearr_42179_43709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (8))){
var inst_42128 = (state_42147[(7)]);
var state_42147__$1 = state_42147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42147__$1,(11),out,inst_42128);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_42183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42183[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_42183[(1)] = (1));

return statearr_42183;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_42147){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_42147);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e42184){var ex__37760__auto__ = e42184;
var statearr_42185_43711 = state_42147;
(statearr_42185_43711[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_42147[(4)]))){
var statearr_42186_43712 = state_42147;
(statearr_42186_43712[(1)] = cljs.core.first((state_42147[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43713 = state_42147;
state_42147 = G__43713;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_42147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_42147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_42190 = f__39042__auto__();
(statearr_42190[(6)] = c__39041__auto___43694);

return statearr_42190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42202 = (function (f,ch,meta42196,_,fn1,meta42203){
this.f = f;
this.ch = ch;
this.meta42196 = meta42196;
this._ = _;
this.fn1 = fn1;
this.meta42203 = meta42203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42204,meta42203__$1){
var self__ = this;
var _42204__$1 = this;
return (new cljs.core.async.t_cljs$core$async42202(self__.f,self__.ch,self__.meta42196,self__._,self__.fn1,meta42203__$1));
}));

(cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42204){
var self__ = this;
var _42204__$1 = this;
return self__.meta42203;
}));

(cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42194_SHARP_){
var G__42238 = (((p1__42194_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42194_SHARP_) : self__.f.call(null, p1__42194_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42238) : f1.call(null, G__42238));
});
}));

(cljs.core.async.t_cljs$core$async42202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42196","meta42196",-889243671,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42195","cljs.core.async/t_cljs$core$async42195",-661722079,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42203","meta42203",-1887719123,null)], null);
}));

(cljs.core.async.t_cljs$core$async42202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42202");

(cljs.core.async.t_cljs$core$async42202.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42202.
 */
cljs.core.async.__GT_t_cljs$core$async42202 = (function cljs$core$async$__GT_t_cljs$core$async42202(f,ch,meta42196,_,fn1,meta42203){
return (new cljs.core.async.t_cljs$core$async42202(f,ch,meta42196,_,fn1,meta42203));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42195 = (function (f,ch,meta42196){
this.f = f;
this.ch = ch;
this.meta42196 = meta42196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42197,meta42196__$1){
var self__ = this;
var _42197__$1 = this;
return (new cljs.core.async.t_cljs$core$async42195(self__.f,self__.ch,meta42196__$1));
}));

(cljs.core.async.t_cljs$core$async42195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42197){
var self__ = this;
var _42197__$1 = this;
return self__.meta42196;
}));

(cljs.core.async.t_cljs$core$async42195.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42195.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42195.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42195.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42195.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async42202(self__.f,self__.ch,self__.meta42196,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42248 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42248) : self__.f.call(null, G__42248));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42195.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42195.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42196","meta42196",-889243671,null)], null);
}));

(cljs.core.async.t_cljs$core$async42195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42195");

(cljs.core.async.t_cljs$core$async42195.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42195.
 */
cljs.core.async.__GT_t_cljs$core$async42195 = (function cljs$core$async$__GT_t_cljs$core$async42195(f,ch,meta42196){
return (new cljs.core.async.t_cljs$core$async42195(f,ch,meta42196));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async42195(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42253 = (function (f,ch,meta42254){
this.f = f;
this.ch = ch;
this.meta42254 = meta42254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42255,meta42254__$1){
var self__ = this;
var _42255__$1 = this;
return (new cljs.core.async.t_cljs$core$async42253(self__.f,self__.ch,meta42254__$1));
}));

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42255){
var self__ = this;
var _42255__$1 = this;
return self__.meta42254;
}));

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42254","meta42254",717162054,null)], null);
}));

(cljs.core.async.t_cljs$core$async42253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42253");

(cljs.core.async.t_cljs$core$async42253.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42253.
 */
cljs.core.async.__GT_t_cljs$core$async42253 = (function cljs$core$async$__GT_t_cljs$core$async42253(f,ch,meta42254){
return (new cljs.core.async.t_cljs$core$async42253(f,ch,meta42254));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async42253(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42260 = (function (p,ch,meta42261){
this.p = p;
this.ch = ch;
this.meta42261 = meta42261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42262,meta42261__$1){
var self__ = this;
var _42262__$1 = this;
return (new cljs.core.async.t_cljs$core$async42260(self__.p,self__.ch,meta42261__$1));
}));

(cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42262){
var self__ = this;
var _42262__$1 = this;
return self__.meta42261;
}));

(cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42261","meta42261",1101647188,null)], null);
}));

(cljs.core.async.t_cljs$core$async42260.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42260");

(cljs.core.async.t_cljs$core$async42260.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async42260");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42260.
 */
cljs.core.async.__GT_t_cljs$core$async42260 = (function cljs$core$async$__GT_t_cljs$core$async42260(p,ch,meta42261){
return (new cljs.core.async.t_cljs$core$async42260(p,ch,meta42261));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async42260(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42275 = arguments.length;
switch (G__42275) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39041__auto___43726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_42298){
var state_val_42299 = (state_42298[(1)]);
if((state_val_42299 === (7))){
var inst_42294 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42300_43727 = state_42298__$1;
(statearr_42300_43727[(2)] = inst_42294);

(statearr_42300_43727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (1))){
var state_42298__$1 = state_42298;
var statearr_42301_43728 = state_42298__$1;
(statearr_42301_43728[(2)] = null);

(statearr_42301_43728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (4))){
var inst_42280 = (state_42298[(7)]);
var inst_42280__$1 = (state_42298[(2)]);
var inst_42281 = (inst_42280__$1 == null);
var state_42298__$1 = (function (){var statearr_42302 = state_42298;
(statearr_42302[(7)] = inst_42280__$1);

return statearr_42302;
})();
if(cljs.core.truth_(inst_42281)){
var statearr_42303_43729 = state_42298__$1;
(statearr_42303_43729[(1)] = (5));

} else {
var statearr_42304_43730 = state_42298__$1;
(statearr_42304_43730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (6))){
var inst_42280 = (state_42298[(7)]);
var inst_42285 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42280) : p.call(null, inst_42280));
var state_42298__$1 = state_42298;
if(cljs.core.truth_(inst_42285)){
var statearr_42305_43731 = state_42298__$1;
(statearr_42305_43731[(1)] = (8));

} else {
var statearr_42306_43732 = state_42298__$1;
(statearr_42306_43732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (3))){
var inst_42296 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42298__$1,inst_42296);
} else {
if((state_val_42299 === (2))){
var state_42298__$1 = state_42298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42298__$1,(4),ch);
} else {
if((state_val_42299 === (11))){
var inst_42288 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42307_43733 = state_42298__$1;
(statearr_42307_43733[(2)] = inst_42288);

(statearr_42307_43733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (9))){
var state_42298__$1 = state_42298;
var statearr_42308_43734 = state_42298__$1;
(statearr_42308_43734[(2)] = null);

(statearr_42308_43734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (5))){
var inst_42283 = cljs.core.async.close_BANG_(out);
var state_42298__$1 = state_42298;
var statearr_42309_43736 = state_42298__$1;
(statearr_42309_43736[(2)] = inst_42283);

(statearr_42309_43736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (10))){
var inst_42291 = (state_42298[(2)]);
var state_42298__$1 = (function (){var statearr_42310 = state_42298;
(statearr_42310[(8)] = inst_42291);

return statearr_42310;
})();
var statearr_42311_43737 = state_42298__$1;
(statearr_42311_43737[(2)] = null);

(statearr_42311_43737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (8))){
var inst_42280 = (state_42298[(7)]);
var state_42298__$1 = state_42298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42298__$1,(11),out,inst_42280);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_42325 = [null,null,null,null,null,null,null,null,null];
(statearr_42325[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_42325[(1)] = (1));

return statearr_42325;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_42298){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_42298);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e42326){var ex__37760__auto__ = e42326;
var statearr_42327_43738 = state_42298;
(statearr_42327_43738[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_42298[(4)]))){
var statearr_42328_43739 = state_42298;
(statearr_42328_43739[(1)] = cljs.core.first((state_42298[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43740 = state_42298;
state_42298 = G__43740;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_42298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_42298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_42332 = f__39042__auto__();
(statearr_42332[(6)] = c__39041__auto___43726);

return statearr_42332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42334 = arguments.length;
switch (G__42334) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39041__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_42403){
var state_val_42404 = (state_42403[(1)]);
if((state_val_42404 === (7))){
var inst_42396 = (state_42403[(2)]);
var state_42403__$1 = state_42403;
var statearr_42408_43742 = state_42403__$1;
(statearr_42408_43742[(2)] = inst_42396);

(statearr_42408_43742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (20))){
var inst_42363 = (state_42403[(7)]);
var inst_42377 = (state_42403[(2)]);
var inst_42378 = cljs.core.next(inst_42363);
var inst_42349 = inst_42378;
var inst_42350 = null;
var inst_42351 = (0);
var inst_42352 = (0);
var state_42403__$1 = (function (){var statearr_42409 = state_42403;
(statearr_42409[(8)] = inst_42350);

(statearr_42409[(9)] = inst_42351);

(statearr_42409[(10)] = inst_42349);

(statearr_42409[(11)] = inst_42352);

(statearr_42409[(12)] = inst_42377);

return statearr_42409;
})();
var statearr_42410_43743 = state_42403__$1;
(statearr_42410_43743[(2)] = null);

(statearr_42410_43743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (1))){
var state_42403__$1 = state_42403;
var statearr_42411_43744 = state_42403__$1;
(statearr_42411_43744[(2)] = null);

(statearr_42411_43744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (4))){
var inst_42338 = (state_42403[(13)]);
var inst_42338__$1 = (state_42403[(2)]);
var inst_42339 = (inst_42338__$1 == null);
var state_42403__$1 = (function (){var statearr_42412 = state_42403;
(statearr_42412[(13)] = inst_42338__$1);

return statearr_42412;
})();
if(cljs.core.truth_(inst_42339)){
var statearr_42413_43745 = state_42403__$1;
(statearr_42413_43745[(1)] = (5));

} else {
var statearr_42414_43746 = state_42403__$1;
(statearr_42414_43746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (15))){
var state_42403__$1 = state_42403;
var statearr_42418_43747 = state_42403__$1;
(statearr_42418_43747[(2)] = null);

(statearr_42418_43747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (21))){
var state_42403__$1 = state_42403;
var statearr_42419_43748 = state_42403__$1;
(statearr_42419_43748[(2)] = null);

(statearr_42419_43748[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (13))){
var inst_42350 = (state_42403[(8)]);
var inst_42351 = (state_42403[(9)]);
var inst_42349 = (state_42403[(10)]);
var inst_42352 = (state_42403[(11)]);
var inst_42359 = (state_42403[(2)]);
var inst_42360 = (inst_42352 + (1));
var tmp42415 = inst_42350;
var tmp42416 = inst_42351;
var tmp42417 = inst_42349;
var inst_42349__$1 = tmp42417;
var inst_42350__$1 = tmp42415;
var inst_42351__$1 = tmp42416;
var inst_42352__$1 = inst_42360;
var state_42403__$1 = (function (){var statearr_42421 = state_42403;
(statearr_42421[(14)] = inst_42359);

(statearr_42421[(8)] = inst_42350__$1);

(statearr_42421[(9)] = inst_42351__$1);

(statearr_42421[(10)] = inst_42349__$1);

(statearr_42421[(11)] = inst_42352__$1);

return statearr_42421;
})();
var statearr_42425_43749 = state_42403__$1;
(statearr_42425_43749[(2)] = null);

(statearr_42425_43749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (22))){
var state_42403__$1 = state_42403;
var statearr_42426_43751 = state_42403__$1;
(statearr_42426_43751[(2)] = null);

(statearr_42426_43751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (6))){
var inst_42338 = (state_42403[(13)]);
var inst_42347 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42338) : f.call(null, inst_42338));
var inst_42348 = cljs.core.seq(inst_42347);
var inst_42349 = inst_42348;
var inst_42350 = null;
var inst_42351 = (0);
var inst_42352 = (0);
var state_42403__$1 = (function (){var statearr_42428 = state_42403;
(statearr_42428[(8)] = inst_42350);

(statearr_42428[(9)] = inst_42351);

(statearr_42428[(10)] = inst_42349);

(statearr_42428[(11)] = inst_42352);

return statearr_42428;
})();
var statearr_42430_43752 = state_42403__$1;
(statearr_42430_43752[(2)] = null);

(statearr_42430_43752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (17))){
var inst_42363 = (state_42403[(7)]);
var inst_42370 = cljs.core.chunk_first(inst_42363);
var inst_42371 = cljs.core.chunk_rest(inst_42363);
var inst_42372 = cljs.core.count(inst_42370);
var inst_42349 = inst_42371;
var inst_42350 = inst_42370;
var inst_42351 = inst_42372;
var inst_42352 = (0);
var state_42403__$1 = (function (){var statearr_42432 = state_42403;
(statearr_42432[(8)] = inst_42350);

(statearr_42432[(9)] = inst_42351);

(statearr_42432[(10)] = inst_42349);

(statearr_42432[(11)] = inst_42352);

return statearr_42432;
})();
var statearr_42433_43754 = state_42403__$1;
(statearr_42433_43754[(2)] = null);

(statearr_42433_43754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (3))){
var inst_42398 = (state_42403[(2)]);
var state_42403__$1 = state_42403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42403__$1,inst_42398);
} else {
if((state_val_42404 === (12))){
var inst_42386 = (state_42403[(2)]);
var state_42403__$1 = state_42403;
var statearr_42438_43755 = state_42403__$1;
(statearr_42438_43755[(2)] = inst_42386);

(statearr_42438_43755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (2))){
var state_42403__$1 = state_42403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42403__$1,(4),in$);
} else {
if((state_val_42404 === (23))){
var inst_42394 = (state_42403[(2)]);
var state_42403__$1 = state_42403;
var statearr_42439_43757 = state_42403__$1;
(statearr_42439_43757[(2)] = inst_42394);

(statearr_42439_43757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (19))){
var inst_42381 = (state_42403[(2)]);
var state_42403__$1 = state_42403;
var statearr_42440_43758 = state_42403__$1;
(statearr_42440_43758[(2)] = inst_42381);

(statearr_42440_43758[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (11))){
var inst_42363 = (state_42403[(7)]);
var inst_42349 = (state_42403[(10)]);
var inst_42363__$1 = cljs.core.seq(inst_42349);
var state_42403__$1 = (function (){var statearr_42441 = state_42403;
(statearr_42441[(7)] = inst_42363__$1);

return statearr_42441;
})();
if(inst_42363__$1){
var statearr_42442_43759 = state_42403__$1;
(statearr_42442_43759[(1)] = (14));

} else {
var statearr_42443_43760 = state_42403__$1;
(statearr_42443_43760[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (9))){
var inst_42388 = (state_42403[(2)]);
var inst_42389 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_42403__$1 = (function (){var statearr_42444 = state_42403;
(statearr_42444[(15)] = inst_42388);

return statearr_42444;
})();
if(cljs.core.truth_(inst_42389)){
var statearr_42446_43761 = state_42403__$1;
(statearr_42446_43761[(1)] = (21));

} else {
var statearr_42450_43762 = state_42403__$1;
(statearr_42450_43762[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (5))){
var inst_42341 = cljs.core.async.close_BANG_(out);
var state_42403__$1 = state_42403;
var statearr_42451_43763 = state_42403__$1;
(statearr_42451_43763[(2)] = inst_42341);

(statearr_42451_43763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (14))){
var inst_42363 = (state_42403[(7)]);
var inst_42368 = cljs.core.chunked_seq_QMARK_(inst_42363);
var state_42403__$1 = state_42403;
if(inst_42368){
var statearr_42456_43764 = state_42403__$1;
(statearr_42456_43764[(1)] = (17));

} else {
var statearr_42457_43765 = state_42403__$1;
(statearr_42457_43765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (16))){
var inst_42384 = (state_42403[(2)]);
var state_42403__$1 = state_42403;
var statearr_42458_43766 = state_42403__$1;
(statearr_42458_43766[(2)] = inst_42384);

(statearr_42458_43766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42404 === (10))){
var inst_42350 = (state_42403[(8)]);
var inst_42352 = (state_42403[(11)]);
var inst_42357 = cljs.core._nth(inst_42350,inst_42352);
var state_42403__$1 = state_42403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42403__$1,(13),out,inst_42357);
} else {
if((state_val_42404 === (18))){
var inst_42363 = (state_42403[(7)]);
var inst_42375 = cljs.core.first(inst_42363);
var state_42403__$1 = state_42403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42403__$1,(20),out,inst_42375);
} else {
if((state_val_42404 === (8))){
var inst_42351 = (state_42403[(9)]);
var inst_42352 = (state_42403[(11)]);
var inst_42354 = (inst_42352 < inst_42351);
var inst_42355 = inst_42354;
var state_42403__$1 = state_42403;
if(cljs.core.truth_(inst_42355)){
var statearr_42463_43767 = state_42403__$1;
(statearr_42463_43767[(1)] = (10));

} else {
var statearr_42464_43768 = state_42403__$1;
(statearr_42464_43768[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37757__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37757__auto____0 = (function (){
var statearr_42465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42465[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37757__auto__);

(statearr_42465[(1)] = (1));

return statearr_42465;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37757__auto____1 = (function (state_42403){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_42403);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e42466){var ex__37760__auto__ = e42466;
var statearr_42467_43769 = state_42403;
(statearr_42467_43769[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_42403[(4)]))){
var statearr_42468_43771 = state_42403;
(statearr_42468_43771[(1)] = cljs.core.first((state_42403[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43772 = state_42403;
state_42403 = G__43772;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37757__auto__ = function(state_42403){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37757__auto____1.call(this,state_42403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37757__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37757__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_42471 = f__39042__auto__();
(statearr_42471[(6)] = c__39041__auto__);

return statearr_42471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));

return c__39041__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42476 = arguments.length;
switch (G__42476) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42482 = arguments.length;
switch (G__42482) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42500 = arguments.length;
switch (G__42500) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39041__auto___43778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_42542){
var state_val_42544 = (state_42542[(1)]);
if((state_val_42544 === (7))){
var inst_42537 = (state_42542[(2)]);
var state_42542__$1 = state_42542;
var statearr_42547_43779 = state_42542__$1;
(statearr_42547_43779[(2)] = inst_42537);

(statearr_42547_43779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (1))){
var inst_42518 = null;
var state_42542__$1 = (function (){var statearr_42550 = state_42542;
(statearr_42550[(7)] = inst_42518);

return statearr_42550;
})();
var statearr_42551_43780 = state_42542__$1;
(statearr_42551_43780[(2)] = null);

(statearr_42551_43780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (4))){
var inst_42522 = (state_42542[(8)]);
var inst_42522__$1 = (state_42542[(2)]);
var inst_42523 = (inst_42522__$1 == null);
var inst_42524 = cljs.core.not(inst_42523);
var state_42542__$1 = (function (){var statearr_42552 = state_42542;
(statearr_42552[(8)] = inst_42522__$1);

return statearr_42552;
})();
if(inst_42524){
var statearr_42553_43781 = state_42542__$1;
(statearr_42553_43781[(1)] = (5));

} else {
var statearr_42554_43782 = state_42542__$1;
(statearr_42554_43782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (6))){
var state_42542__$1 = state_42542;
var statearr_42555_43783 = state_42542__$1;
(statearr_42555_43783[(2)] = null);

(statearr_42555_43783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (3))){
var inst_42539 = (state_42542[(2)]);
var inst_42540 = cljs.core.async.close_BANG_(out);
var state_42542__$1 = (function (){var statearr_42556 = state_42542;
(statearr_42556[(9)] = inst_42539);

return statearr_42556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42542__$1,inst_42540);
} else {
if((state_val_42544 === (2))){
var state_42542__$1 = state_42542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42542__$1,(4),ch);
} else {
if((state_val_42544 === (11))){
var inst_42522 = (state_42542[(8)]);
var inst_42531 = (state_42542[(2)]);
var inst_42518 = inst_42522;
var state_42542__$1 = (function (){var statearr_42578 = state_42542;
(statearr_42578[(7)] = inst_42518);

(statearr_42578[(10)] = inst_42531);

return statearr_42578;
})();
var statearr_42579_43784 = state_42542__$1;
(statearr_42579_43784[(2)] = null);

(statearr_42579_43784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (9))){
var inst_42522 = (state_42542[(8)]);
var state_42542__$1 = state_42542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42542__$1,(11),out,inst_42522);
} else {
if((state_val_42544 === (5))){
var inst_42518 = (state_42542[(7)]);
var inst_42522 = (state_42542[(8)]);
var inst_42526 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42522,inst_42518);
var state_42542__$1 = state_42542;
if(inst_42526){
var statearr_42588_43786 = state_42542__$1;
(statearr_42588_43786[(1)] = (8));

} else {
var statearr_42589_43787 = state_42542__$1;
(statearr_42589_43787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (10))){
var inst_42534 = (state_42542[(2)]);
var state_42542__$1 = state_42542;
var statearr_42590_43788 = state_42542__$1;
(statearr_42590_43788[(2)] = inst_42534);

(statearr_42590_43788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42544 === (8))){
var inst_42518 = (state_42542[(7)]);
var tmp42580 = inst_42518;
var inst_42518__$1 = tmp42580;
var state_42542__$1 = (function (){var statearr_42591 = state_42542;
(statearr_42591[(7)] = inst_42518__$1);

return statearr_42591;
})();
var statearr_42592_43790 = state_42542__$1;
(statearr_42592_43790[(2)] = null);

(statearr_42592_43790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_42610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42610[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_42610[(1)] = (1));

return statearr_42610;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_42542){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_42542);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e42611){var ex__37760__auto__ = e42611;
var statearr_42612_43793 = state_42542;
(statearr_42612_43793[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_42542[(4)]))){
var statearr_42617_43794 = state_42542;
(statearr_42617_43794[(1)] = cljs.core.first((state_42542[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43795 = state_42542;
state_42542 = G__43795;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_42542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_42542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_42638 = f__39042__auto__();
(statearr_42638[(6)] = c__39041__auto___43778);

return statearr_42638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42659 = arguments.length;
switch (G__42659) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39041__auto___43797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_42738){
var state_val_42739 = (state_42738[(1)]);
if((state_val_42739 === (7))){
var inst_42734 = (state_42738[(2)]);
var state_42738__$1 = state_42738;
var statearr_42741_43801 = state_42738__$1;
(statearr_42741_43801[(2)] = inst_42734);

(statearr_42741_43801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (1))){
var inst_42696 = (new Array(n));
var inst_42697 = inst_42696;
var inst_42698 = (0);
var state_42738__$1 = (function (){var statearr_42746 = state_42738;
(statearr_42746[(7)] = inst_42697);

(statearr_42746[(8)] = inst_42698);

return statearr_42746;
})();
var statearr_42747_43802 = state_42738__$1;
(statearr_42747_43802[(2)] = null);

(statearr_42747_43802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (4))){
var inst_42701 = (state_42738[(9)]);
var inst_42701__$1 = (state_42738[(2)]);
var inst_42706 = (inst_42701__$1 == null);
var inst_42707 = cljs.core.not(inst_42706);
var state_42738__$1 = (function (){var statearr_42748 = state_42738;
(statearr_42748[(9)] = inst_42701__$1);

return statearr_42748;
})();
if(inst_42707){
var statearr_42749_43805 = state_42738__$1;
(statearr_42749_43805[(1)] = (5));

} else {
var statearr_42750_43806 = state_42738__$1;
(statearr_42750_43806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (15))){
var inst_42727 = (state_42738[(2)]);
var state_42738__$1 = state_42738;
var statearr_42757_43807 = state_42738__$1;
(statearr_42757_43807[(2)] = inst_42727);

(statearr_42757_43807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (13))){
var state_42738__$1 = state_42738;
var statearr_42759_43808 = state_42738__$1;
(statearr_42759_43808[(2)] = null);

(statearr_42759_43808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (6))){
var inst_42698 = (state_42738[(8)]);
var inst_42723 = (inst_42698 > (0));
var state_42738__$1 = state_42738;
if(cljs.core.truth_(inst_42723)){
var statearr_42764_43809 = state_42738__$1;
(statearr_42764_43809[(1)] = (12));

} else {
var statearr_42765_43810 = state_42738__$1;
(statearr_42765_43810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (3))){
var inst_42736 = (state_42738[(2)]);
var state_42738__$1 = state_42738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42738__$1,inst_42736);
} else {
if((state_val_42739 === (12))){
var inst_42697 = (state_42738[(7)]);
var inst_42725 = cljs.core.vec(inst_42697);
var state_42738__$1 = state_42738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42738__$1,(15),out,inst_42725);
} else {
if((state_val_42739 === (2))){
var state_42738__$1 = state_42738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42738__$1,(4),ch);
} else {
if((state_val_42739 === (11))){
var inst_42717 = (state_42738[(2)]);
var inst_42718 = (new Array(n));
var inst_42697 = inst_42718;
var inst_42698 = (0);
var state_42738__$1 = (function (){var statearr_42767 = state_42738;
(statearr_42767[(10)] = inst_42717);

(statearr_42767[(7)] = inst_42697);

(statearr_42767[(8)] = inst_42698);

return statearr_42767;
})();
var statearr_42769_43811 = state_42738__$1;
(statearr_42769_43811[(2)] = null);

(statearr_42769_43811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (9))){
var inst_42697 = (state_42738[(7)]);
var inst_42715 = cljs.core.vec(inst_42697);
var state_42738__$1 = state_42738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42738__$1,(11),out,inst_42715);
} else {
if((state_val_42739 === (5))){
var inst_42697 = (state_42738[(7)]);
var inst_42698 = (state_42738[(8)]);
var inst_42710 = (state_42738[(11)]);
var inst_42701 = (state_42738[(9)]);
var inst_42709 = (inst_42697[inst_42698] = inst_42701);
var inst_42710__$1 = (inst_42698 + (1));
var inst_42711 = (inst_42710__$1 < n);
var state_42738__$1 = (function (){var statearr_42770 = state_42738;
(statearr_42770[(12)] = inst_42709);

(statearr_42770[(11)] = inst_42710__$1);

return statearr_42770;
})();
if(cljs.core.truth_(inst_42711)){
var statearr_42771_43812 = state_42738__$1;
(statearr_42771_43812[(1)] = (8));

} else {
var statearr_42772_43813 = state_42738__$1;
(statearr_42772_43813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (14))){
var inst_42730 = (state_42738[(2)]);
var inst_42732 = cljs.core.async.close_BANG_(out);
var state_42738__$1 = (function (){var statearr_42774 = state_42738;
(statearr_42774[(13)] = inst_42730);

return statearr_42774;
})();
var statearr_42775_43814 = state_42738__$1;
(statearr_42775_43814[(2)] = inst_42732);

(statearr_42775_43814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (10))){
var inst_42721 = (state_42738[(2)]);
var state_42738__$1 = state_42738;
var statearr_42776_43818 = state_42738__$1;
(statearr_42776_43818[(2)] = inst_42721);

(statearr_42776_43818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (8))){
var inst_42697 = (state_42738[(7)]);
var inst_42710 = (state_42738[(11)]);
var tmp42773 = inst_42697;
var inst_42697__$1 = tmp42773;
var inst_42698 = inst_42710;
var state_42738__$1 = (function (){var statearr_42779 = state_42738;
(statearr_42779[(7)] = inst_42697__$1);

(statearr_42779[(8)] = inst_42698);

return statearr_42779;
})();
var statearr_42780_43820 = state_42738__$1;
(statearr_42780_43820[(2)] = null);

(statearr_42780_43820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_42782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42782[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_42782[(1)] = (1));

return statearr_42782;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_42738){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_42738);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e42783){var ex__37760__auto__ = e42783;
var statearr_42784_43822 = state_42738;
(statearr_42784_43822[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_42738[(4)]))){
var statearr_42786_43824 = state_42738;
(statearr_42786_43824[(1)] = cljs.core.first((state_42738[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43825 = state_42738;
state_42738 = G__43825;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_42738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_42738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_42788 = f__39042__auto__();
(statearr_42788[(6)] = c__39041__auto___43797);

return statearr_42788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42804 = arguments.length;
switch (G__42804) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39041__auto___43827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39042__auto__ = (function (){var switch__37756__auto__ = (function (state_42862){
var state_val_42863 = (state_42862[(1)]);
if((state_val_42863 === (7))){
var inst_42858 = (state_42862[(2)]);
var state_42862__$1 = state_42862;
var statearr_42868_43828 = state_42862__$1;
(statearr_42868_43828[(2)] = inst_42858);

(statearr_42868_43828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (1))){
var inst_42815 = [];
var inst_42816 = inst_42815;
var inst_42817 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42862__$1 = (function (){var statearr_42873 = state_42862;
(statearr_42873[(7)] = inst_42816);

(statearr_42873[(8)] = inst_42817);

return statearr_42873;
})();
var statearr_42874_43829 = state_42862__$1;
(statearr_42874_43829[(2)] = null);

(statearr_42874_43829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (4))){
var inst_42820 = (state_42862[(9)]);
var inst_42820__$1 = (state_42862[(2)]);
var inst_42822 = (inst_42820__$1 == null);
var inst_42823 = cljs.core.not(inst_42822);
var state_42862__$1 = (function (){var statearr_42879 = state_42862;
(statearr_42879[(9)] = inst_42820__$1);

return statearr_42879;
})();
if(inst_42823){
var statearr_42880_43830 = state_42862__$1;
(statearr_42880_43830[(1)] = (5));

} else {
var statearr_42881_43831 = state_42862__$1;
(statearr_42881_43831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (15))){
var inst_42816 = (state_42862[(7)]);
var inst_42850 = cljs.core.vec(inst_42816);
var state_42862__$1 = state_42862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42862__$1,(18),out,inst_42850);
} else {
if((state_val_42863 === (13))){
var inst_42844 = (state_42862[(2)]);
var state_42862__$1 = state_42862;
var statearr_42884_43832 = state_42862__$1;
(statearr_42884_43832[(2)] = inst_42844);

(statearr_42884_43832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (6))){
var inst_42816 = (state_42862[(7)]);
var inst_42847 = inst_42816.length;
var inst_42848 = (inst_42847 > (0));
var state_42862__$1 = state_42862;
if(cljs.core.truth_(inst_42848)){
var statearr_42885_43833 = state_42862__$1;
(statearr_42885_43833[(1)] = (15));

} else {
var statearr_42886_43834 = state_42862__$1;
(statearr_42886_43834[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (17))){
var inst_42855 = (state_42862[(2)]);
var inst_42856 = cljs.core.async.close_BANG_(out);
var state_42862__$1 = (function (){var statearr_42887 = state_42862;
(statearr_42887[(10)] = inst_42855);

return statearr_42887;
})();
var statearr_42888_43835 = state_42862__$1;
(statearr_42888_43835[(2)] = inst_42856);

(statearr_42888_43835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (3))){
var inst_42860 = (state_42862[(2)]);
var state_42862__$1 = state_42862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42862__$1,inst_42860);
} else {
if((state_val_42863 === (12))){
var inst_42816 = (state_42862[(7)]);
var inst_42837 = cljs.core.vec(inst_42816);
var state_42862__$1 = state_42862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42862__$1,(14),out,inst_42837);
} else {
if((state_val_42863 === (2))){
var state_42862__$1 = state_42862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42862__$1,(4),ch);
} else {
if((state_val_42863 === (11))){
var inst_42816 = (state_42862[(7)]);
var inst_42820 = (state_42862[(9)]);
var inst_42825 = (state_42862[(11)]);
var inst_42833 = inst_42816.push(inst_42820);
var tmp42889 = inst_42816;
var inst_42816__$1 = tmp42889;
var inst_42817 = inst_42825;
var state_42862__$1 = (function (){var statearr_42891 = state_42862;
(statearr_42891[(7)] = inst_42816__$1);

(statearr_42891[(8)] = inst_42817);

(statearr_42891[(12)] = inst_42833);

return statearr_42891;
})();
var statearr_42892_43841 = state_42862__$1;
(statearr_42892_43841[(2)] = null);

(statearr_42892_43841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (9))){
var inst_42817 = (state_42862[(8)]);
var inst_42829 = cljs.core.keyword_identical_QMARK_(inst_42817,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_42862__$1 = state_42862;
var statearr_42897_43844 = state_42862__$1;
(statearr_42897_43844[(2)] = inst_42829);

(statearr_42897_43844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (5))){
var inst_42826 = (state_42862[(13)]);
var inst_42817 = (state_42862[(8)]);
var inst_42820 = (state_42862[(9)]);
var inst_42825 = (state_42862[(11)]);
var inst_42825__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42820) : f.call(null, inst_42820));
var inst_42826__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42825__$1,inst_42817);
var state_42862__$1 = (function (){var statearr_42901 = state_42862;
(statearr_42901[(13)] = inst_42826__$1);

(statearr_42901[(11)] = inst_42825__$1);

return statearr_42901;
})();
if(inst_42826__$1){
var statearr_42902_43845 = state_42862__$1;
(statearr_42902_43845[(1)] = (8));

} else {
var statearr_42903_43850 = state_42862__$1;
(statearr_42903_43850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (14))){
var inst_42820 = (state_42862[(9)]);
var inst_42825 = (state_42862[(11)]);
var inst_42839 = (state_42862[(2)]);
var inst_42840 = [];
var inst_42841 = inst_42840.push(inst_42820);
var inst_42816 = inst_42840;
var inst_42817 = inst_42825;
var state_42862__$1 = (function (){var statearr_42906 = state_42862;
(statearr_42906[(7)] = inst_42816);

(statearr_42906[(8)] = inst_42817);

(statearr_42906[(14)] = inst_42839);

(statearr_42906[(15)] = inst_42841);

return statearr_42906;
})();
var statearr_42907_43853 = state_42862__$1;
(statearr_42907_43853[(2)] = null);

(statearr_42907_43853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (16))){
var state_42862__$1 = state_42862;
var statearr_42908_43854 = state_42862__$1;
(statearr_42908_43854[(2)] = null);

(statearr_42908_43854[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (10))){
var inst_42831 = (state_42862[(2)]);
var state_42862__$1 = state_42862;
if(cljs.core.truth_(inst_42831)){
var statearr_42909_43855 = state_42862__$1;
(statearr_42909_43855[(1)] = (11));

} else {
var statearr_42910_43856 = state_42862__$1;
(statearr_42910_43856[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (18))){
var inst_42852 = (state_42862[(2)]);
var state_42862__$1 = state_42862;
var statearr_42911_43862 = state_42862__$1;
(statearr_42911_43862[(2)] = inst_42852);

(statearr_42911_43862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42863 === (8))){
var inst_42826 = (state_42862[(13)]);
var state_42862__$1 = state_42862;
var statearr_42912_43864 = state_42862__$1;
(statearr_42912_43864[(2)] = inst_42826);

(statearr_42912_43864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37757__auto__ = null;
var cljs$core$async$state_machine__37757__auto____0 = (function (){
var statearr_42918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42918[(0)] = cljs$core$async$state_machine__37757__auto__);

(statearr_42918[(1)] = (1));

return statearr_42918;
});
var cljs$core$async$state_machine__37757__auto____1 = (function (state_42862){
while(true){
var ret_value__37758__auto__ = (function (){try{while(true){
var result__37759__auto__ = switch__37756__auto__(state_42862);
if(cljs.core.keyword_identical_QMARK_(result__37759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37759__auto__;
}
break;
}
}catch (e42926){var ex__37760__auto__ = e42926;
var statearr_42927_43874 = state_42862;
(statearr_42927_43874[(2)] = ex__37760__auto__);


if(cljs.core.seq((state_42862[(4)]))){
var statearr_42928_43879 = state_42862;
(statearr_42928_43879[(1)] = cljs.core.first((state_42862[(4)])));

} else {
throw ex__37760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43881 = state_42862;
state_42862 = G__43881;
continue;
} else {
return ret_value__37758__auto__;
}
break;
}
});
cljs$core$async$state_machine__37757__auto__ = function(state_42862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37757__auto____1.call(this,state_42862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37757__auto____0;
cljs$core$async$state_machine__37757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37757__auto____1;
return cljs$core$async$state_machine__37757__auto__;
})()
})();
var state__39043__auto__ = (function (){var statearr_42930 = f__39042__auto__();
(statearr_42930[(6)] = c__39041__auto___43827);

return statearr_42930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39043__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
