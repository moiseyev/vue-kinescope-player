!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.kinescopeVueKinescopePlayer={})}(this,function(e){"use strict";var t="__kinescope_player_react_js",a=[["auto-quality-changed","autoqualitychanged"],["call-action","callaction"],["call-bookmark","callbookmark"],["destroy","destroy"],["duration-change","durationchange"],["ended","ended"],["error","error"],["fullscreen-change","fullscreenchange"],["pause","pause"],["play","play"],["playback-rate-change","ratechange"],["playing","playing"],["progress","progress"],["quality-changed","qualitychanged"],["ready","ready"],["seek-chapter","seekchapter"],["seeked","seeked"],["seeking","seeking"],["size-changed","sizechanged"],["time-update","timeupdate"],["volume-change","volumechange"],["waiting","waiting"]],n=1,i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Loader",{on:{"js-load":this.handleJsLoad,"js-load-error":this.handleJsLoadError}},[t("div",{ref:"player"})])},staticRenderFns:[],props:{videoId:{type:[Number,String],required:!0},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"100%"},autoPlay:{type:Boolean,default:!1},muted:{type:Boolean,default:!1}},components:{Loader:{render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)},staticRenderFns:[],name:"Loader",created:function(){this.jsLoading()},methods:{loadJsNotLoad:function(){var e=document.getElementById(t);e&&e.addEventListener("load",this.loadJs)},loadJs:function(){var e=document.getElementById(t);e&&e.removeEventListener("load",this.loadJs),this.handleJsLoad()},jsLoading:function(){if(this.testLoadJs())window&&window.Kinescope&&window.Kinescope.IframePlayer?this.handleJsLoad():this.loadJsNotLoad();else{var e=document.createElement("script");e.id=t,e.async=!1,document.body.appendChild(e),e.onload=this.handleJsLoad,e.onerror=this.handleJsLoadError,e.src="https://player.kinescope.io/latest/iframe.player.js"}},testLoadJs:function(){return!!document.getElementById(t)},handleJsLoad:function(){this.$emit("js-load")},handleJsLoadError:function(e){this.$emit("js-load-error",e)}}}},data:function(){return{playerLoad:!1,player:null}},mounted:function(){this.playerLoad&&this.create()},computed:{propsChanged:function(){return{videoId:this.videoId,width:this.width,height:this.height,autoPlay:this.autoPlay,muted:this.muted}}},watch:{propsChanged:async function(){await this.updatePlayer()}},methods:{getNextIndex:function(){return n++},getNextPlayerId:function(){return"__kinescope_player_"+this.getNextIndex()},create:async function(){var e=this,t=this.getNextPlayerId(),n=document.createElement("div");n.setAttribute("id",t),this.$refs.player.appendChild(n),this.player=await this.createPlayer(t),a.forEach(function(t){var a=t[0],n=t[1];e.player&&e.player.on(n,function(t){e.$emit(a,t.data)})})},destroy:async function(){this.player&&(await this.player.destroy(),this.player=null)},createPlayer:function(e){var t={url:this.getIFrameUrl(),size:{width:this.width,height:this.height},behaviour:{autoPlay:this.autoPlay,muted:this.muted}};return window.Kinescope.IframePlayer.create(e,t)},updatePlayer:async function(){await this.destroy(),await this.create()},getIFrameUrl:function(){return"https://kinescope.io/embed/"+this.videoId},handleJsLoad:function(){this.playerLoad=!0,this.$emit("js-load"),this.create()},handleJsLoadError:function(e){this.$emit("js-load-error",e)}}};function o(e){e.component("kinescope-player",i)}"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o,e.KinescopePlayer=i,Object.defineProperty(e,"__esModule",{value:!0})});
