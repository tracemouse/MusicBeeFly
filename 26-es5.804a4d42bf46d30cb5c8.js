(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"iA3/":function(t,o,n){"use strict";n.r(o),n.d(o,"ion_app",function(){return u}),n.d(o,"ion_buttons",function(){return g}),n.d(o,"ion_content",function(){return p}),n.d(o,"ion_footer",function(){return m}),n.d(o,"ion_header",function(){return v}),n.d(o,"ion_router_outlet",function(){return w}),n.d(o,"ion_title",function(){return A}),n.d(o,"ion_toolbar",function(){return y});var e=n("rOct"),i=n("wy+k"),r=n("F6I7"),a=(n("CKsy"),n("q/Rq")),s=n("HDt2"),l=n("A/ga"),c=n("XxrI"),d=n("U45e"),u=function(){function t(t){Object(i.l)(this,t)}return t.prototype.componentDidLoad=function(){Object(s.a)(function(){var t=Object(r.f)(window,"hybrid");r.b.getBoolean("_testing")||n.e(9).then(n.bind(null,"3QYa")).then(function(t){return t.startTapClick(r.b)}),r.b.getBoolean("statusTap",t)&&n.e(7).then(n.bind(null,"3Ynf")).then(function(t){return t.startStatusTap()}),r.b.getBoolean("inputShims",b())&&n.e(6).then(n.bind(null,"MSwR")).then(function(t){return t.startInputShims(r.b)}),r.b.getBoolean("hardwareBackButton",t)&&n.e(4).then(n.bind(null,"wAIh")).then(function(t){return t.startHardwareBackButton()}),n.e(3).then(n.bind(null,"VB3q")).then(function(t){return t.startFocusVisible()})})},t.prototype.render=function(){var t,o=Object(i.e)(this);return Object(i.i)(i.a,{class:(t={},t[o]=!0,t["ion-page"]=!0,t["force-statusbar-padding"]=r.b.getBoolean("_forceStatusbarPadding"),t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"},enumerable:!0,configurable:!0}),t}(),b=function(){return Object(r.f)(window,"ios")&&Object(r.f)(window,"mobile")},g=function(){function t(t){Object(i.l)(this,t)}return t.prototype.render=function(){return Object(i.i)(i.a,{class:Object(i.e)(this)})},Object.defineProperty(t,"style",{get:function(){return".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-hover:rgba(var(--ion-color-contrast-rgb),0.08);--background-focused:rgba(var(--ion-color-contrast-rgb),0.24)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast);--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-tint);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:rgba(66,66,66,0.08)}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:var(--ion-toolbar-color-activated,#4a4a4a);--background-hover:rgba(66,66,66,0.92)}.sc-ion-buttons-md-s  .button-outline {--background:transparent;--background-activated:transparent;--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-clear {--background:transparent;--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"},enumerable:!0,configurable:!0}),t}(),p=function(){function t(t){Object(i.l)(this,t),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.mode=Object(i.e)(this),this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(i.d)(this,"ionScrollStart",7),this.ionScroll=Object(i.d)(this,"ionScroll",7),this.ionScrollEnd=Object(i.d)(this,"ionScrollEnd",7)}return t.prototype.disconnectedCallback=function(){this.onScrollEnd()},t.prototype.componentDidLoad=function(){this.resize()},t.prototype.onClick=function(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())},t.prototype.shouldForceOverscroll=function(){var t=this.forceOverscroll;return void 0===t?"ios"===this.mode&&Object(r.f)(window,"mobile"):t},t.prototype.resize=function(){this.fullscreen?Object(i.g)(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())},t.prototype.readDimensions=function(){var t=h(this.el),o=Math.max(this.el.offsetTop,0),n=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||n!==this.cBottom)&&(this.cTop=o,this.cBottom=n,this.el.forceUpdate())},t.prototype.onScroll=function(t){var o=this,n=Date.now(),e=!this.isScrolling;this.lastScroll=n,e&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,Object(i.g)(function(n){o.queued=!1,o.detail.event=t,f(o.detail,o.scrollEl,n,e),o.ionScroll.emit(o.detail)}))},t.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)},t.prototype.scrollToTop=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,0,t)},t.prototype.scrollToBottom=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)},t.prototype.scrollByPoint=function(t,o,n){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,n)},t.prototype.scrollToPoint=function(t,o,n){return void 0===n&&(n=0),e.b(this,void 0,void 0,function(){var i,r,a,s,l,c,d,u,b;return e.e(this,function(e){return i=this.scrollEl,n<32?(null!=o&&(i.scrollTop=o),null!=t&&(i.scrollLeft=t),[2]):(a=0,s=new Promise(function(t){return r=t}),l=i.scrollTop,c=i.scrollLeft,d=null!=o?o-l:0,u=null!=t?t-c:0,b=function(t){var o=Math.min(1,(t-a)/n)-1,e=Math.pow(o,3)+1;0!==d&&(i.scrollTop=Math.floor(e*d+l)),0!==u&&(i.scrollLeft=Math.floor(e*u+c)),e<1?requestAnimationFrame(b):r()},requestAnimationFrame(function(t){a=t,b(t)}),[2,s])})})},t.prototype.onScrollStart=function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()},100)},t.prototype.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))},t.prototype.render=function(){var t,o=this,n=this.scrollX,e=this.scrollY,s=Object(i.e)(this),l=this.shouldForceOverscroll(),c="ios"===s&&r.b.getBoolean("experimentalTransitionShadow",!0);return this.resize(),Object(i.i)(i.a,{class:Object.assign({},Object(a.a)(this.color),(t={},t[s]=!0,t["content-sizing"]=Object(a.c)("ion-popover",this.el),t.overscroll=l,t)),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}},Object(i.i)("main",{class:{"inner-scroll":!0,"scroll-x":n,"scroll-y":e,overscroll:(n||e)&&l},ref:function(t){return o.scrollEl=t},onScroll:function(t){return o.onScroll(t)}},Object(i.i)("slot",null)),c?Object(i.i)("div",{class:"transition-effect"},Object(i.i)("div",{class:"transition-cover"}),Object(i.i)("div",{class:"transition-shadow"})):null,Object(i.i)("slot",{name:"fixed"}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}'},enumerable:!0,configurable:!0}),t}(),h=function(t){return t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)},f=function(t,o,n,e){var i=t.currentX,r=t.currentY,a=o.scrollLeft,s=o.scrollTop,l=n-t.timeStamp;if(e&&(t.startTimeStamp=n,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.timeStamp=n,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){var c=(s-r)/l;t.velocityX=(a-i)/l*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}},m=function(){function t(t){Object(i.l)(this,t),this.translucent=!1}return t.prototype.render=function(){var t,o=Object(i.e)(this),n=this.translucent;return Object(i.i)(i.a,{role:"contentinfo",class:(t={},t[o]=!0,t["footer-"+o]=!0,t["footer-translucent"]=n,t["footer-translucent-"+o]=n,t)})},Object.defineProperty(t,"style",{get:function(){return'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}'},enumerable:!0,configurable:!0}),t}(),v=function(){function t(t){Object(i.l)(this,t),this.translucent=!1}return t.prototype.render=function(){var t,o=Object(i.e)(this);return Object(i.i)(i.a,{role:"banner",class:(t={},t[o]=!0,t["header-"+o]=!0,t["header-translucent"]=this.translucent,t["header-translucent-"+o]=this.translucent,t)})},Object.defineProperty(t,"style",{get:function(){return'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-md[no-border]:after{display:none}'},enumerable:!0,configurable:!0}),t}(),w=function(){function t(t){Object(i.l)(this,t),this.animationEnabled=!0,this.mode=Object(i.e)(this),this.animated=!0,this.ionNavWillLoad=Object(i.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(i.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(i.d)(this,"ionNavDidChange",3)}return t.prototype.swipeHandlerChanged=function(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)},t.prototype.connectedCallback=function(){return e.b(this,void 0,void 0,function(){var t,o=this;return e.e(this,function(e){switch(e.label){case 0:return t=this,[4,n.e(1).then(n.bind(null,"B6LC"))];case 1:return t.gesture=e.sent().createSwipeBackGesture(this.el,function(){return!!o.swipeHandler&&o.swipeHandler.canStart()&&o.animationEnabled},function(){return o.swipeHandler&&o.swipeHandler.onStart()},function(t){return o.ani&&o.ani.progressStep(t)},function(t,n,e){if(o.ani){o.animationEnabled=!1,o.ani.onFinish(function(){o.animationEnabled=!0},{oneTimeCallback:!0});var i=t?-.001:.001;t?i+=Object(d.b)(new d.a(0,0),new d.a(.32,.72),new d.a(0,1),new d.a(1,1),n):(o.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=Object(d.b)(new d.a(0,0),new d.a(1,0),new d.a(.68,.28),new d.a(1,1),n)),o.ani.progressEnd(t,i,e)}o.swipeHandler&&o.swipeHandler.onEnd(t)}),this.swipeHandlerChanged(),[2]}})})},t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.commit=function(t,o,n){return e.b(this,void 0,void 0,function(){var i,r,a;return e.e(this,function(e){switch(e.label){case 0:return[4,this.lock()];case 1:i=e.sent(),r=!1,e.label=2;case 2:return e.trys.push([2,4,,5]),[4,this.transition(t,o,n)];case 3:return r=e.sent(),[3,5];case 4:return a=e.sent(),console.error(a),[3,5];case 5:return i(),[2,r]}})})},t.prototype.setRouteId=function(t,o,n){return e.b(this,void 0,void 0,function(){return e.e(this,function(e){switch(e.label){case 0:return[4,this.setRoot(t,o,{duration:"root"===n?0:void 0,direction:"back"===n?"back":"forward"})];case 1:return[2,{changed:e.sent(),element:this.activeEl}]}})})},t.prototype.getRouteId=function(){return e.b(this,void 0,void 0,function(){var t;return e.e(this,function(o){return[2,(t=this.activeEl)?{id:t.tagName,element:t}:void 0]})})},t.prototype.setRoot=function(t,o,n){return e.b(this,void 0,void 0,function(){var i,r;return e.e(this,function(e){switch(e.label){case 0:return this.activeComponent===t?[2,!1]:(i=this.activeEl,[4,Object(l.a)(this.delegate,this.el,t,["ion-page","ion-page-invisible"],o)]);case 1:return r=e.sent(),this.activeComponent=t,this.activeEl=r,[4,this.commit(r,i,n)];case 2:return e.sent(),[4,Object(l.b)(this.delegate,i)];case 3:return e.sent(),[2,!0]}})})},t.prototype.transition=function(t,o,n){return void 0===n&&(n={}),e.b(this,void 0,void 0,function(){var i,a,s,l,d,u=this;return e.e(this,function(e){switch(e.label){case 0:return o===t?[2,!1]:(this.ionNavWillChange.emit(),a=(i=this).el,s=i.mode,l=this.animated&&r.b.getBoolean("animated",!0),d=this.animation||n.animationBuilder||r.b.get("navAnimation"),[4,Object(c.d)(Object.assign({mode:s,animated:l,animationBuilder:d,enteringEl:t,leavingEl:o,baseEl:a,progressCallback:n.progressAnimation?function(t){return u.ani=t}:void 0},n))]);case 1:return e.sent(),this.ionNavDidChange.emit(),[2,!0]}})})},t.prototype.lock=function(){return e.b(this,void 0,void 0,function(){var t,o;return e.e(this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return o=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,o]}})})},t.prototype.render=function(){return Object(i.i)("slot",null)},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{swipeHandler:["swipeHandlerChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),t}(),A=function(){function t(t){Object(i.l)(this,t)}return t.prototype.getMode=function(){var t=Object(i.e)(this),o=this.el.closest("ion-toolbar");return o&&o.mode||t},t.prototype.render=function(){var t,o=this.getMode();return Object(i.i)(i.a,{class:Object.assign((t={},t[o]=!0,t["title-"+o]=!0,t),Object(a.a)(this.color))},Object(i.i)("div",{class:"toolbar-title"},Object(i.i)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host,:host(.title-ios){-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.title-ios){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios,:host-context([dir=rtl]):host(.title-ios){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"},enumerable:!0,configurable:!0}),t}(),y=function(){function t(t){Object(i.l)(this,t),this.childrenStyles=new Map}return t.prototype.componentWillLoad=function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),o=t.find(function(t){return"start"===t.slot});o&&o.classList.add("buttons-first-slot");var n=t.reverse(),e=n.find(function(t){return"end"===t.slot})||n.find(function(t){return"primary"===t.slot})||n.find(function(t){return"secondary"===t.slot});e&&e.classList.add("buttons-last-slot")},t.prototype.childrenStyle=function(t){t.stopPropagation();var o=t.target.tagName,n=t.detail,e={},i=this.childrenStyles.get(o)||{},r=!1;Object.keys(n).forEach(function(t){var o="toolbar-"+t,a=n[t];a!==i[o]&&(r=!0),a&&(e[o]=!0)}),r&&(this.childrenStyles.set(o,e),this.el.forceUpdate())},t.prototype.render=function(){var t,o=Object(i.e)(this),n={};return this.childrenStyles.forEach(function(t){Object.assign(n,t)}),Object(i.i)(i.a,{class:Object.assign((t={},t[o]=!0,t),n,Object(a.a)(this.color))},Object(i.i)("div",{class:"toolbar-background"}),Object(i.i)("div",{class:"toolbar-container"},Object(i.i)("slot",{name:"start"}),Object(i.i)("slot",{name:"secondary"}),Object(i.i)("div",{class:"toolbar-content"},Object(i.i)("slot",null)),Object(i.i)("slot",{name:"primary"}),Object(i.i)("slot",{name:"end"})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"},enumerable:!0,configurable:!0}),t}()}}]);