(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{zhS4:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),a=function(){},i=e("NcP4"),o=e("pMnS"),u=e("uM4N"),r=e("gIcY"),s=e("w+lc"),c=e("lLAP"),d=e("Fzqc"),p=e("wFw1"),m=e("OEb6"),b=e("l7TF"),h=e("v9Dh"),g=e("eDkP"),v=e("qAlS"),f=e("dWZg"),_=e("0glI"),x=e("WUWi"),Y=e("VzBR"),w=e("mrSG"),k=e("n6gG"),y=e("Wf4p"),O=0,C=function(l){function n(n,e,a,i,o,u,r){var s=l.call(this,n)||this;return s._focusMonitor=a,s._changeDetectorRef=i,s._ngZone=u,s._animationMode=r,s.onChange=function(l){},s.onTouched=function(){},s._uniqueId="mat-slide-toggle-"+ ++O,s._required=!1,s._checked=!1,s._dragging=!1,s.name=null,s.id=s._uniqueId,s.labelPosition="after",s.ariaLabel=null,s.ariaLabelledby=null,s.change=new t.m,s.tabIndex=parseInt(o)||0,s}return Object(w.b)(n,l),Object.defineProperty(n.prototype,"required",{get:function(){return this._required},set:function(l){this._required=Object(k.b)(l)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"checked",{get:function(){return this._checked},set:function(l){this._checked=Object(k.b)(l),this._changeDetectorRef.markForCheck()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputId",{get:function(){return(this.id||this._uniqueId)+"-input"},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){var l=this;this._focusMonitor.monitor(this._inputElement.nativeElement).subscribe(function(n){return l._onInputFocusChange(n)})},n.prototype.ngOnDestroy=function(){this._focusMonitor.stopMonitoring(this._inputElement.nativeElement)},n.prototype._onChangeEvent=function(l){l.stopPropagation(),this._dragging?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())},n.prototype._onInputClick=function(l){l.stopPropagation()},n.prototype.writeValue=function(l){this.checked=!!l},n.prototype.registerOnChange=function(l){this.onChange=l},n.prototype.registerOnTouched=function(l){this.onTouched=l},n.prototype.setDisabledState=function(l){this.disabled=l,this._changeDetectorRef.markForCheck()},n.prototype.focus=function(){this._focusMonitor.focusVia(this._inputElement.nativeElement,"keyboard")},n.prototype.toggle=function(){this.checked=!this.checked},n.prototype._onInputFocusChange=function(l){this._focusRipple||"keyboard"!==l?l||(this.onTouched(),this._focusRipple&&(this._focusRipple.fadeOut(),this._focusRipple=null)):this._focusRipple=this._ripple.launch(0,0,{persistent:!0})},n.prototype._emitChangeEvent=function(){this.onChange(this.checked),this.change.emit(new function(l,n){this.source=l,this.checked=n}(this,this.checked))},n.prototype._getDragPercentage=function(l){var n=l/this._thumbBarWidth*100;return this._previousChecked&&(n+=100),Math.max(0,Math.min(n,100))},n.prototype._onDragStart=function(){if(!this.disabled&&!this._dragging){var l=this._thumbEl.nativeElement;this._thumbBarWidth=this._thumbBarEl.nativeElement.clientWidth-l.clientWidth,l.classList.add("mat-dragging"),this._previousChecked=this.checked,this._dragging=!0}},n.prototype._onDrag=function(l){this._dragging&&(this._dragPercentage=this._getDragPercentage(l.deltaX),this._thumbEl.nativeElement.style.transform="translate3d("+this._dragPercentage/100*this._thumbBarWidth+"px, 0, 0)")},n.prototype._onDragEnd=function(){var l=this;if(this._dragging){var n=this._dragPercentage>50;n!==this.checked&&(this.checked=n,this._emitChangeEvent()),this._ngZone.runOutsideAngular(function(){return setTimeout(function(){l._dragging&&(l._dragging=!1,l._thumbEl.nativeElement.classList.remove("mat-dragging"),l._thumbEl.nativeElement.style.transform="")})})}},n.prototype._onLabelTextChange=function(){this._changeDetectorRef.markForCheck()},n}(Object(y.D)(Object(y.z)(Object(y.A)(Object(y.B)(function(l){this._elementRef=l})),"accent"))),M=function(){},P=e("6blF"),S=e("K9Ia"),E=e("Gi3i"),I=function(){function l(){}return l.prototype.create=function(l){return"undefined"==typeof MutationObserver?null:new MutationObserver(l)},l.ngInjectableDef=Object(t.R)({factory:function(){return new l},token:l,providedIn:"root"}),l}(),W=function(){function l(l){this._mutationObserverFactory=l,this._observedElements=new Map}return l.prototype.ngOnDestroy=function(){var l=this;this._observedElements.forEach(function(n,e){return l._cleanupObserver(e)})},l.prototype.observe=function(l){var n=this;return P.a.create(function(e){var t=n._observeElement(l).subscribe(e);return function(){t.unsubscribe(),n._unobserveElement(l)}})},l.prototype._observeElement=function(l){if(this._observedElements.has(l))this._observedElements.get(l).count++;else{var n=new S.a,e=this._mutationObserverFactory.create(function(l){return n.next(l)});e&&e.observe(l,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(l,{observer:e,stream:n,count:1})}return this._observedElements.get(l).stream},l.prototype._unobserveElement=function(l){this._observedElements.has(l)&&(this._observedElements.get(l).count--,this._observedElements.get(l).count||this._cleanupObserver(l))},l.prototype._cleanupObserver=function(l){if(this._observedElements.has(l)){var n=this._observedElements.get(l),e=n.observer,t=n.stream;e&&e.disconnect(),t.complete(),this._observedElements.delete(l)}},l.ngInjectableDef=Object(t.R)({factory:function(){return new l(Object(t.V)(I))},token:l,providedIn:"root"}),l}(),N=function(){function l(l,n,e){this._contentObserver=l,this._elementRef=n,this._ngZone=e,this.event=new t.m,this._disabled=!1,this._currentSubscription=null}return Object.defineProperty(l.prototype,"disabled",{get:function(){return this._disabled},set:function(l){this._disabled=Object(k.b)(l),this._disabled?this._unsubscribe():this._subscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"debounce",{get:function(){return this._debounce},set:function(l){this._debounce=Object(k.d)(l),this._subscribe()},enumerable:!0,configurable:!0}),l.prototype.ngAfterContentInit=function(){this._currentSubscription||this.disabled||this._subscribe()},l.prototype.ngOnDestroy=function(){this._unsubscribe()},l.prototype._subscribe=function(){var l=this;this._unsubscribe();var n=this._contentObserver.observe(this._elementRef.nativeElement);this._ngZone.runOutsideAngular(function(){l._currentSubscription=(l.debounce?n.pipe(Object(E.a)(l.debounce)):n).subscribe(l.event)})},l.prototype._unsubscribe=function(){this._currentSubscription&&this._currentSubscription.unsubscribe()},l}(),A=function(){},D=e("ZYjt"),B=t.Ma({encapsulation:2,styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px,0,0)}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}.mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-right:8px;margin-left:0}.mat-slide-toggle-label-before .mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0,0,0);transition:all 80ms linear;transition-property:transform;cursor:-webkit-grab;cursor:grab}.mat-slide-toggle-thumb-container.mat-dragging,.mat-slide-toggle-thumb-container:active{cursor:-webkit-grabbing;cursor:grabbing;transition-duration:0s}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-slide-toggle-thumb{background:#fff;border:solid 1px #000}}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}@media screen and (-ms-high-contrast:active){.mat-slide-toggle-bar{background:#fff}}.mat-slide-toggle-input{bottom:0;left:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle-ripple{position:absolute;top:calc(50% - 23px);left:calc(50% - 23px);height:46px;width:46px;z-index:1;pointer-events:none}"],data:{}});function j(l){return t.gb(2,[t.cb(402653184,1,{_thumbEl:0}),t.cb(402653184,2,{_thumbBarEl:0}),t.cb(402653184,3,{_inputElement:0}),t.cb(402653184,4,{_ripple:0}),(l()(),t.Oa(4,0,[["label",1]],null,10,"label",[["class","mat-slide-toggle-label"]],null,null,null,null,null)),(l()(),t.Oa(5,0,[[2,0],["toggleBar",1]],null,6,"div",[["class","mat-slide-toggle-bar"]],[[2,"mat-slide-toggle-bar-no-side-margin",null]],null,null,null,null)),(l()(),t.Oa(6,0,[[3,0],["input",1]],null,0,"input",[["class","mat-slide-toggle-input cdk-visually-hidden"],["type","checkbox"]],[[8,"id",0],[8,"required",0],[8,"tabIndex",0],[8,"checked",0],[8,"disabled",0],[1,"name",0],[1,"aria-label",0],[1,"aria-labelledby",0]],[[null,"change"],[null,"click"]],function(l,n,e){var t=!0,a=l.component;return"change"===n&&(t=!1!==a._onChangeEvent(e)&&t),"click"===n&&(t=!1!==a._onInputClick(e)&&t),t},null,null)),(l()(),t.Oa(7,0,[[1,0],["thumbContainer",1]],null,4,"div",[["class","mat-slide-toggle-thumb-container"]],null,[[null,"slidestart"],[null,"slide"],[null,"slideend"]],function(l,n,e){var t=!0,a=l.component;return"slidestart"===n&&(t=!1!==a._onDragStart()&&t),"slide"===n&&(t=!1!==a._onDrag(e)&&t),"slideend"===n&&(t=!1!==a._onDragEnd()&&t),t},null,null)),(l()(),t.Oa(8,0,null,null,0,"div",[["class","mat-slide-toggle-thumb"]],null,null,null,null,null)),(l()(),t.Oa(9,0,null,null,2,"div",[["class","mat-slide-toggle-ripple mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),t.Na(10,212992,[[4,4]],0,y.t,[t.k,t.x,f.a,[2,y.k],[2,p.a]],{centered:[0,"centered"],radius:[1,"radius"],animation:[2,"animation"],disabled:[3,"disabled"],trigger:[4,"trigger"]},null),t.ab(11,{enterDuration:0}),(l()(),t.Oa(12,0,[["labelContent",1]],null,2,"span",[["class","mat-slide-toggle-content"]],null,[[null,"cdkObserveContent"]],function(l,n,e){var t=!0;return"cdkObserveContent"===n&&(t=!1!==l.component._onLabelTextChange()&&t),t},null,null)),t.Na(13,1196032,null,0,N,[W,t.k,t.x],null,{event:"cdkObserveContent"}),t.Xa(null,0)],function(l,n){var e=n.component;l(n,10,0,!0,23,l(n,11,0,150),e.disableRipple||e.disabled,t.Ya(n,4))},function(l,n){var e=n.component;l(n,5,0,!t.Ya(n,12).textContent||!t.Ya(n,12).textContent.trim()),l(n,6,0,e.inputId,e.required,e.tabIndex,e.checked,e.disabled,e.name,e.ariaLabel,e.ariaLabelledby),l(n,9,0,t.Ya(n,10).unbounded)})}var z=e("Ip0R"),L=e("/ZL4"),R=e("hqrb"),V=e("ITaJ"),F=function(){function l(){}return l.prototype.getPreviewStyle=function(l){return{boxShadow:l.hOffset+"px "+l.vOffset+"px "+l.blur+"px "+l.spread+"px\n                       "+l.shadowColor.css+" "+(l.inset?"inset":""),backgroundColor:l.boxColor.css,width:l.width+"px",height:l.height+"px"}},l.prototype.getCssPreview=function(l){for(var n=l.hOffset+"px "+l.vOffset+"px "+l.blur+"px "+l.spread+"px "+l.shadowColor.css+(l.inset?" inset":""),e="",t=0,a=["-moz-","-webkit-",""];t<a.length;t++)e+=a[t]+"box-shadow: "+n+"; \n";return e},l}(),T=function(){function l(l,n){this.toolService=l,this.appTitle=n,this.tool={hOffset:10,vOffset:10,blur:5,spread:1,shadowColor:{hex:"#000000",opacity:1,css:"#000000"},inset:!1,boxColor:{hex:"#fc4a1a",opacity:1,css:"#fc4a1a"},width:200,height:200},this.showShadowColorPicker=!1,this.showBackgroundColorPicker=!1,n.setTitle("CSS3 Tools - Box-Shadow generator.")}return l.prototype.ngOnInit=function(){},l.prototype.getPreviewStyle=function(){return this.toolService.getPreviewStyle(this.tool)},l.prototype.onBackgroundColorChange=function(l){this.tool.boxColor.hex=l.hex,this.tool.boxColor.opacity=l.opacity,this.tool.boxColor.css=1===l.opacity?l.hex:l.getCssRGBA()},l.prototype.onShadowColorChange=function(l){this.tool.shadowColor.hex=l.hex,this.tool.shadowColor.opacity=l.opacity,this.tool.shadowColor.css=1===l.opacity?l.hex:l.getCssRGBA()},l.prototype.getCssPreview=function(){return this.toolService.getCssPreview(this.tool)},l.prototype.onDocumentMouseDown=function(){this.showShadowColorPicker=!1,this.showBackgroundColorPicker=!1},l}(),K=t.Ma({encapsulation:0,styles:[[".wrapper[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;margin:0 auto;padding:10px;box-sizing:border-box}.controls[_ngcontent-%COMP%], .preview[_ngcontent-%COMP%]{width:100%}.element-preview[_ngcontent-%COMP%]{margin:0 auto;box-sizing:border-box}.controls[_ngcontent-%COMP%]{text-align:center}.mat-slider[_ngcontent-%COMP%]{width:75%}  app-numeric-input input{width:30px}.background-color-preview[_ngcontent-%COMP%], .shadow-color-preview[_ngcontent-%COMP%]{height:30px;width:50px;margin:16px auto;cursor:pointer}.background-color[_ngcontent-%COMP%], .shadow-color[_ngcontent-%COMP%]{position:relative}.background-color-picker[_ngcontent-%COMP%], .shadow-color-picker[_ngcontent-%COMP%]{position:absolute;left:50%;z-index:10}.shadow-color-picker[_ngcontent-%COMP%]{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.background-color-picker[_ngcontent-%COMP%]{top:0;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.inset[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding:8px 0 18px}.element-preview-wrapper[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:350px;height:350px;margin:0 auto;border:1px solid #aaa;overflow:hidden}@media (min-width:768px){.background-color-preview[_ngcontent-%COMP%], .shadow-color-preview[_ngcontent-%COMP%]{margin:16px 0}.background-color-picker[_ngcontent-%COMP%], .shadow-color-picker[_ngcontent-%COMP%]{left:0}.shadow-color-picker[_ngcontent-%COMP%]{-webkit-transform:none;transform:none}.background-color-picker[_ngcontent-%COMP%]{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.wrapper[_ngcontent-%COMP%]{width:768px}.controls[_ngcontent-%COMP%]{text-align:left}.controls[_ngcontent-%COMP%], .preview[_ngcontent-%COMP%]{width:374px}.mat-slider[_ngcontent-%COMP%]{width:290px}}@media (min-width:992px){.wrapper[_ngcontent-%COMP%]{width:742px}.controls[_ngcontent-%COMP%], .preview[_ngcontent-%COMP%]{width:361px}.mat-slider[_ngcontent-%COMP%]{width:280px}}@media (min-width:1200px){.wrapper[_ngcontent-%COMP%]{width:950px}.controls[_ngcontent-%COMP%], .preview[_ngcontent-%COMP%]{width:465px}.mat-slider[_ngcontent-%COMP%]{width:340px}}"]],data:{}});function q(l){return t.gb(0,[(l()(),t.Oa(0,0,null,null,86,"div",[["class","wrapper"]],null,null,null,null,null)),(l()(),t.Oa(1,0,null,null,1,"h3",[["class","sr-only"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["box-shadow generator"])),(l()(),t.Oa(3,0,null,null,77,"div",[["class","controls"]],null,null,null,null,null)),(l()(),t.Oa(4,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.Oa(5,0,null,null,1,"label",[["class","d-block"],["for","h-offset"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["Horizontal Offset"])),(l()(),t.Oa(7,0,null,null,2,"mat-slider",[["class","mat-slider"],["color","primary"],["max","100"],["min","-100"],["role","slider"],["step","1"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"_mat-animation-noopable",null]],[[null,"input"],[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var a=!0,i=l.component;return"focus"===n&&(a=!1!==t.Ya(l,9)._onFocus()&&a),"blur"===n&&(a=!1!==t.Ya(l,9)._onBlur()&&a),"click"===n&&(a=!1!==t.Ya(l,9)._onClick(e)&&a),"keydown"===n&&(a=!1!==t.Ya(l,9)._onKeydown(e)&&a),"keyup"===n&&(a=!1!==t.Ya(l,9)._onKeyup()&&a),"mouseenter"===n&&(a=!1!==t.Ya(l,9)._onMouseenter()&&a),"slide"===n&&(a=!1!==t.Ya(l,9)._onSlide(e)&&a),"slideend"===n&&(a=!1!==t.Ya(l,9)._onSlideEnd()&&a),"slidestart"===n&&(a=!1!==t.Ya(l,9)._onSlideStart(e)&&a),"input"===n&&(a=!1!==(i.tool.hOffset=e.value)&&a),a},u.b,u.a)),t.bb(5120,null,r.c,function(l){return[l]},[s.a]),t.Na(9,245760,null,0,s.a,[t.k,c.c,t.h,[2,d.b],[8,null],[2,p.a]],{color:[0,"color"],max:[1,"max"],min:[2,"min"],step:[3,"step"],value:[4,"value"]},{input:"input"}),(l()(),t.Oa(10,0,null,null,1,"app-numeric-input",[],null,[[null,"input"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==(l.component.tool.hOffset=e)&&t),t},m.b,m.a)),t.Na(11,114688,null,0,b.a,[],{min:[0,"min"],max:[1,"max"],value:[2,"value"],id:[3,"id"]},{input:"input"}),(l()(),t.eb(-1,null,["px "])),(l()(),t.Oa(13,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.Oa(14,0,null,null,1,"label",[["class","d-block"],["for","v-offset"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["Vertical Offset"])),(l()(),t.Oa(16,0,null,null,2,"mat-slider",[["class","mat-slider"],["color","primary"],["max","100"],["min","-100"],["role","slider"],["step","1"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"_mat-animation-noopable",null]],[[null,"input"],[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var a=!0,i=l.component;return"focus"===n&&(a=!1!==t.Ya(l,18)._onFocus()&&a),"blur"===n&&(a=!1!==t.Ya(l,18)._onBlur()&&a),"click"===n&&(a=!1!==t.Ya(l,18)._onClick(e)&&a),"keydown"===n&&(a=!1!==t.Ya(l,18)._onKeydown(e)&&a),"keyup"===n&&(a=!1!==t.Ya(l,18)._onKeyup()&&a),"mouseenter"===n&&(a=!1!==t.Ya(l,18)._onMouseenter()&&a),"slide"===n&&(a=!1!==t.Ya(l,18)._onSlide(e)&&a),"slideend"===n&&(a=!1!==t.Ya(l,18)._onSlideEnd()&&a),"slidestart"===n&&(a=!1!==t.Ya(l,18)._onSlideStart(e)&&a),"input"===n&&(a=!1!==(i.tool.vOffset=e.value)&&a),a},u.b,u.a)),t.bb(5120,null,r.c,function(l){return[l]},[s.a]),t.Na(18,245760,null,0,s.a,[t.k,c.c,t.h,[2,d.b],[8,null],[2,p.a]],{color:[0,"color"],max:[1,"max"],min:[2,"min"],step:[3,"step"],value:[4,"value"]},{input:"input"}),(l()(),t.Oa(19,0,null,null,1,"app-numeric-input",[],null,[[null,"input"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==(l.component.tool.vOffset=e)&&t),t},m.b,m.a)),t.Na(20,114688,null,0,b.a,[],{min:[0,"min"],max:[1,"max"],value:[2,"value"],id:[3,"id"]},{input:"input"}),(l()(),t.eb(-1,null,["px "])),(l()(),t.Oa(22,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.Oa(23,0,null,null,1,"label",[["class","d-block"],["for","blur"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["Blur"])),(l()(),t.Oa(25,0,null,null,2,"mat-slider",[["class","mat-slider"],["color","primary"],["max","100"],["min","0"],["role","slider"],["step","1"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"_mat-animation-noopable",null]],[[null,"input"],[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var a=!0,i=l.component;return"focus"===n&&(a=!1!==t.Ya(l,27)._onFocus()&&a),"blur"===n&&(a=!1!==t.Ya(l,27)._onBlur()&&a),"click"===n&&(a=!1!==t.Ya(l,27)._onClick(e)&&a),"keydown"===n&&(a=!1!==t.Ya(l,27)._onKeydown(e)&&a),"keyup"===n&&(a=!1!==t.Ya(l,27)._onKeyup()&&a),"mouseenter"===n&&(a=!1!==t.Ya(l,27)._onMouseenter()&&a),"slide"===n&&(a=!1!==t.Ya(l,27)._onSlide(e)&&a),"slideend"===n&&(a=!1!==t.Ya(l,27)._onSlideEnd()&&a),"slidestart"===n&&(a=!1!==t.Ya(l,27)._onSlideStart(e)&&a),"input"===n&&(a=!1!==(i.tool.blur=e.value)&&a),a},u.b,u.a)),t.bb(5120,null,r.c,function(l){return[l]},[s.a]),t.Na(27,245760,null,0,s.a,[t.k,c.c,t.h,[2,d.b],[8,null],[2,p.a]],{color:[0,"color"],max:[1,"max"],min:[2,"min"],step:[3,"step"],value:[4,"value"]},{input:"input"}),(l()(),t.Oa(28,0,null,null,1,"app-numeric-input",[],null,[[null,"input"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==(l.component.tool.blur=e)&&t),t},m.b,m.a)),t.Na(29,114688,null,0,b.a,[],{min:[0,"min"],max:[1,"max"],value:[2,"value"],id:[3,"id"]},{input:"input"}),(l()(),t.eb(-1,null,["px "])),(l()(),t.Oa(31,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.Oa(32,0,null,null,1,"label",[["class","d-block"],["for","spread"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["Spread"])),(l()(),t.Oa(34,0,null,null,2,"mat-slider",[["class","mat-slider"],["color","primary"],["max","100"],["min","-100"],["role","slider"],["step","1"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"_mat-animation-noopable",null]],[[null,"input"],[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var a=!0,i=l.component;return"focus"===n&&(a=!1!==t.Ya(l,36)._onFocus()&&a),"blur"===n&&(a=!1!==t.Ya(l,36)._onBlur()&&a),"click"===n&&(a=!1!==t.Ya(l,36)._onClick(e)&&a),"keydown"===n&&(a=!1!==t.Ya(l,36)._onKeydown(e)&&a),"keyup"===n&&(a=!1!==t.Ya(l,36)._onKeyup()&&a),"mouseenter"===n&&(a=!1!==t.Ya(l,36)._onMouseenter()&&a),"slide"===n&&(a=!1!==t.Ya(l,36)._onSlide(e)&&a),"slideend"===n&&(a=!1!==t.Ya(l,36)._onSlideEnd()&&a),"slidestart"===n&&(a=!1!==t.Ya(l,36)._onSlideStart(e)&&a),"input"===n&&(a=!1!==(i.tool.spread=e.value)&&a),a},u.b,u.a)),t.bb(5120,null,r.c,function(l){return[l]},[s.a]),t.Na(36,245760,null,0,s.a,[t.k,c.c,t.h,[2,d.b],[8,null],[2,p.a]],{color:[0,"color"],max:[1,"max"],min:[2,"min"],step:[3,"step"],value:[4,"value"]},{input:"input"}),(l()(),t.Oa(37,0,null,null,1,"app-numeric-input",[],null,[[null,"input"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==(l.component.tool.spread=e)&&t),t},m.b,m.a)),t.Na(38,114688,null,0,b.a,[],{min:[0,"min"],max:[1,"max"],value:[2,"value"],id:[3,"id"]},{input:"input"}),(l()(),t.eb(-1,null,["px "])),(l()(),t.Oa(40,0,null,null,6,"div",[["class","shadow-color"]],null,null,null,null,null)),(l()(),t.Oa(41,0,null,null,1,"label",[["class","d-block"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["Shadow Color"])),(l()(),t.Oa(43,16777216,null,null,1,"div",[["class","shadow-color-preview"],["matTooltip","Show color-picker"]],[[4,"backgroundColor",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,e){var a=!0,i=l.component;return"longpress"===n&&(a=!1!==t.Ya(l,44).show()&&a),"keydown"===n&&(a=!1!==t.Ya(l,44)._handleKeydown(e)&&a),"touchend"===n&&(a=!1!==t.Ya(l,44)._handleTouchend()&&a),"click"===n&&(a=0!=(i.showShadowColorPicker=!0)&&a),a},null,null)),t.Na(44,147456,null,0,h.d,[g.c,t.k,v.b,t.N,t.x,f.a,c.b,c.c,h.b,[2,d.b],[2,h.a]],{message:[0,"message"]},null),(l()(),t.Oa(45,0,null,null,1,"app-color-picker",[["class","shadow-color-picker"]],[[8,"hidden",0]],[[null,"mousedown"],[null,"change"]],function(l,n,e){var t=!0,a=l.component;return"mousedown"===n&&(t=!1!==e.stopPropagation()&&t),"change"===n&&(t=!1!==a.onShadowColorChange(e)&&t),t},_.b,_.a)),t.Na(46,638976,null,0,x.a,[Y.a],{opacity:[0,"opacity"],color:[1,"color"]},{change:"change"}),(l()(),t.Oa(47,0,null,null,8,"div",[["class","inset"]],null,null,null,null,null)),(l()(),t.Oa(48,0,null,null,7,"label",[["class","d-block"]],null,null,null,null,null)),(l()(),t.Oa(49,0,null,null,5,"mat-slide-toggle",[["class","mat-slide-toggle"],["color","primary"]],[[8,"id",0],[2,"mat-checked",null],[2,"mat-disabled",null],[2,"mat-slide-toggle-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var t=!0;return"ngModelChange"===n&&(t=!1!==(l.component.tool.inset=e)&&t),t},j,B)),t.Na(50,1228800,null,0,C,[t.k,f.a,c.c,t.h,[8,null],t.x,[2,p.a]],{color:[0,"color"]},null),t.bb(1024,null,r.c,function(l){return[l]},[C]),t.Na(52,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.bb(2048,null,r.d,null,[r.g]),t.Na(54,16384,null,0,r.e,[[4,r.d]],null,null),(l()(),t.eb(-1,null,[" Inset "])),(l()(),t.Oa(56,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.Oa(57,0,null,null,1,"label",[["class","d-block"],["for","width"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["Width"])),(l()(),t.Oa(59,0,null,null,2,"mat-slider",[["class","mat-slider"],["color","primary"],["max","250"],["min","0"],["role","slider"],["step","1"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"_mat-animation-noopable",null]],[[null,"input"],[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var a=!0,i=l.component;return"focus"===n&&(a=!1!==t.Ya(l,61)._onFocus()&&a),"blur"===n&&(a=!1!==t.Ya(l,61)._onBlur()&&a),"click"===n&&(a=!1!==t.Ya(l,61)._onClick(e)&&a),"keydown"===n&&(a=!1!==t.Ya(l,61)._onKeydown(e)&&a),"keyup"===n&&(a=!1!==t.Ya(l,61)._onKeyup()&&a),"mouseenter"===n&&(a=!1!==t.Ya(l,61)._onMouseenter()&&a),"slide"===n&&(a=!1!==t.Ya(l,61)._onSlide(e)&&a),"slideend"===n&&(a=!1!==t.Ya(l,61)._onSlideEnd()&&a),"slidestart"===n&&(a=!1!==t.Ya(l,61)._onSlideStart(e)&&a),"input"===n&&(a=!1!==(i.tool.width=e.value)&&a),a},u.b,u.a)),t.bb(5120,null,r.c,function(l){return[l]},[s.a]),t.Na(61,245760,null,0,s.a,[t.k,c.c,t.h,[2,d.b],[8,null],[2,p.a]],{color:[0,"color"],max:[1,"max"],min:[2,"min"],step:[3,"step"],value:[4,"value"]},{input:"input"}),(l()(),t.Oa(62,0,null,null,1,"app-numeric-input",[],null,[[null,"input"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==(l.component.tool.width=e)&&t),t},m.b,m.a)),t.Na(63,114688,null,0,b.a,[],{min:[0,"min"],max:[1,"max"],value:[2,"value"],id:[3,"id"]},{input:"input"}),(l()(),t.eb(-1,null,["px "])),(l()(),t.Oa(65,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.Oa(66,0,null,null,1,"label",[["class","d-block"],["for","height"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["Height"])),(l()(),t.Oa(68,0,null,null,2,"mat-slider",[["class","mat-slider"],["color","primary"],["max","250"],["min","0"],["role","slider"],["step","1"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"_mat-animation-noopable",null]],[[null,"input"],[null,"focus"],[null,"blur"],[null,"click"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,e){var a=!0,i=l.component;return"focus"===n&&(a=!1!==t.Ya(l,70)._onFocus()&&a),"blur"===n&&(a=!1!==t.Ya(l,70)._onBlur()&&a),"click"===n&&(a=!1!==t.Ya(l,70)._onClick(e)&&a),"keydown"===n&&(a=!1!==t.Ya(l,70)._onKeydown(e)&&a),"keyup"===n&&(a=!1!==t.Ya(l,70)._onKeyup()&&a),"mouseenter"===n&&(a=!1!==t.Ya(l,70)._onMouseenter()&&a),"slide"===n&&(a=!1!==t.Ya(l,70)._onSlide(e)&&a),"slideend"===n&&(a=!1!==t.Ya(l,70)._onSlideEnd()&&a),"slidestart"===n&&(a=!1!==t.Ya(l,70)._onSlideStart(e)&&a),"input"===n&&(a=!1!==(i.tool.height=e.value)&&a),a},u.b,u.a)),t.bb(5120,null,r.c,function(l){return[l]},[s.a]),t.Na(70,245760,null,0,s.a,[t.k,c.c,t.h,[2,d.b],[8,null],[2,p.a]],{color:[0,"color"],max:[1,"max"],min:[2,"min"],step:[3,"step"],value:[4,"value"]},{input:"input"}),(l()(),t.Oa(71,0,null,null,1,"app-numeric-input",[],null,[[null,"input"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==(l.component.tool.height=e)&&t),t},m.b,m.a)),t.Na(72,114688,null,0,b.a,[],{min:[0,"min"],max:[1,"max"],value:[2,"value"],id:[3,"id"]},{input:"input"}),(l()(),t.eb(-1,null,["px "])),(l()(),t.Oa(74,0,null,null,6,"div",[["class","background-color"]],null,null,null,null,null)),(l()(),t.Oa(75,0,null,null,1,"label",[["class","d-block"]],null,null,null,null,null)),(l()(),t.eb(-1,null,["Background Color"])),(l()(),t.Oa(77,16777216,null,null,1,"div",[["class","background-color-preview"],["matTooltip","Show color-picker"]],[[4,"backgroundColor",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,e){var a=!0,i=l.component;return"longpress"===n&&(a=!1!==t.Ya(l,78).show()&&a),"keydown"===n&&(a=!1!==t.Ya(l,78)._handleKeydown(e)&&a),"touchend"===n&&(a=!1!==t.Ya(l,78)._handleTouchend()&&a),"click"===n&&(a=0!=(i.showBackgroundColorPicker=!0)&&a),a},null,null)),t.Na(78,147456,null,0,h.d,[g.c,t.k,v.b,t.N,t.x,f.a,c.b,c.c,h.b,[2,d.b],[2,h.a]],{message:[0,"message"]},null),(l()(),t.Oa(79,0,null,null,1,"app-color-picker",[["class","background-color-picker"]],[[8,"hidden",0]],[[null,"mousedown"],[null,"change"]],function(l,n,e){var t=!0,a=l.component;return"mousedown"===n&&(t=!1!==e.stopPropagation()&&t),"change"===n&&(t=!1!==a.onBackgroundColorChange(e)&&t),t},_.b,_.a)),t.Na(80,638976,null,0,x.a,[Y.a],{opacity:[0,"opacity"],color:[1,"color"]},{change:"change"}),(l()(),t.Oa(81,0,null,null,5,"div",[["class","preview"]],null,null,null,null,null)),(l()(),t.Oa(82,0,null,null,2,"div",[["class","element-preview-wrapper"]],null,null,null,null,null)),(l()(),t.Oa(83,0,null,null,1,"div",[["class","element-preview"]],null,null,null,null,null)),t.Na(84,278528,null,0,z.n,[t.r,t.k,t.C],{ngStyle:[0,"ngStyle"]},null),(l()(),t.Oa(85,0,null,null,1,"app-css-preview",[],null,null,null,L.b,L.a)),t.Na(86,114688,null,0,R.a,[V.a],{content:[0,"content"]},null)],function(l,n){var e=n.component;l(n,9,0,"primary","100","-100","1",e.tool.hOffset),l(n,11,0,-100,100,e.tool.hOffset,"h-offset"),l(n,18,0,"primary","100","-100","1",e.tool.vOffset),l(n,20,0,-100,100,e.tool.vOffset,"v-offset"),l(n,27,0,"primary","100","0","1",e.tool.blur),l(n,29,0,0,100,e.tool.blur,"blur"),l(n,36,0,"primary","100","-100","1",e.tool.spread),l(n,38,0,-100,100,e.tool.spread,"spread"),l(n,44,0,"Show color-picker"),l(n,46,0,e.tool.shadowColor.opacity,e.tool.shadowColor.hex),l(n,50,0,"primary"),l(n,52,0,e.tool.inset),l(n,61,0,"primary","250","0","1",e.tool.width),l(n,63,0,0,250,e.tool.width,"width"),l(n,70,0,"primary","250","0","1",e.tool.height),l(n,72,0,0,250,e.tool.height,"height"),l(n,78,0,"Show color-picker"),l(n,80,0,e.tool.boxColor.opacity,e.tool.boxColor.hex),l(n,84,0,e.getPreviewStyle()),l(n,86,0,e.getCssPreview())},function(l,n){var e=n.component;l(n,7,1,[t.Ya(n,9).tabIndex,t.Ya(n,9).disabled,t.Ya(n,9).max,t.Ya(n,9).min,t.Ya(n,9).value,t.Ya(n,9).vertical?"vertical":"horizontal",t.Ya(n,9).disabled,t.Ya(n,9).tickInterval,!t.Ya(n,9).vertical,t.Ya(n,9)._invertAxis,t.Ya(n,9)._isSliding,t.Ya(n,9).thumbLabel,t.Ya(n,9).vertical,t.Ya(n,9)._isMinValue,t.Ya(n,9).disabled||t.Ya(n,9)._isMinValue&&t.Ya(n,9)._thumbGap&&t.Ya(n,9)._invertAxis,"NoopAnimations"===t.Ya(n,9)._animationMode]),l(n,16,1,[t.Ya(n,18).tabIndex,t.Ya(n,18).disabled,t.Ya(n,18).max,t.Ya(n,18).min,t.Ya(n,18).value,t.Ya(n,18).vertical?"vertical":"horizontal",t.Ya(n,18).disabled,t.Ya(n,18).tickInterval,!t.Ya(n,18).vertical,t.Ya(n,18)._invertAxis,t.Ya(n,18)._isSliding,t.Ya(n,18).thumbLabel,t.Ya(n,18).vertical,t.Ya(n,18)._isMinValue,t.Ya(n,18).disabled||t.Ya(n,18)._isMinValue&&t.Ya(n,18)._thumbGap&&t.Ya(n,18)._invertAxis,"NoopAnimations"===t.Ya(n,18)._animationMode]),l(n,25,1,[t.Ya(n,27).tabIndex,t.Ya(n,27).disabled,t.Ya(n,27).max,t.Ya(n,27).min,t.Ya(n,27).value,t.Ya(n,27).vertical?"vertical":"horizontal",t.Ya(n,27).disabled,t.Ya(n,27).tickInterval,!t.Ya(n,27).vertical,t.Ya(n,27)._invertAxis,t.Ya(n,27)._isSliding,t.Ya(n,27).thumbLabel,t.Ya(n,27).vertical,t.Ya(n,27)._isMinValue,t.Ya(n,27).disabled||t.Ya(n,27)._isMinValue&&t.Ya(n,27)._thumbGap&&t.Ya(n,27)._invertAxis,"NoopAnimations"===t.Ya(n,27)._animationMode]),l(n,34,1,[t.Ya(n,36).tabIndex,t.Ya(n,36).disabled,t.Ya(n,36).max,t.Ya(n,36).min,t.Ya(n,36).value,t.Ya(n,36).vertical?"vertical":"horizontal",t.Ya(n,36).disabled,t.Ya(n,36).tickInterval,!t.Ya(n,36).vertical,t.Ya(n,36)._invertAxis,t.Ya(n,36)._isSliding,t.Ya(n,36).thumbLabel,t.Ya(n,36).vertical,t.Ya(n,36)._isMinValue,t.Ya(n,36).disabled||t.Ya(n,36)._isMinValue&&t.Ya(n,36)._thumbGap&&t.Ya(n,36)._invertAxis,"NoopAnimations"===t.Ya(n,36)._animationMode]),l(n,43,0,e.tool.shadowColor.css),l(n,45,0,!e.showShadowColorPicker),l(n,49,1,[t.Ya(n,50).id,t.Ya(n,50).checked,t.Ya(n,50).disabled,"before"==t.Ya(n,50).labelPosition,"NoopAnimations"===t.Ya(n,50)._animationMode,t.Ya(n,54).ngClassUntouched,t.Ya(n,54).ngClassTouched,t.Ya(n,54).ngClassPristine,t.Ya(n,54).ngClassDirty,t.Ya(n,54).ngClassValid,t.Ya(n,54).ngClassInvalid,t.Ya(n,54).ngClassPending]),l(n,59,1,[t.Ya(n,61).tabIndex,t.Ya(n,61).disabled,t.Ya(n,61).max,t.Ya(n,61).min,t.Ya(n,61).value,t.Ya(n,61).vertical?"vertical":"horizontal",t.Ya(n,61).disabled,t.Ya(n,61).tickInterval,!t.Ya(n,61).vertical,t.Ya(n,61)._invertAxis,t.Ya(n,61)._isSliding,t.Ya(n,61).thumbLabel,t.Ya(n,61).vertical,t.Ya(n,61)._isMinValue,t.Ya(n,61).disabled||t.Ya(n,61)._isMinValue&&t.Ya(n,61)._thumbGap&&t.Ya(n,61)._invertAxis,"NoopAnimations"===t.Ya(n,61)._animationMode]),l(n,68,1,[t.Ya(n,70).tabIndex,t.Ya(n,70).disabled,t.Ya(n,70).max,t.Ya(n,70).min,t.Ya(n,70).value,t.Ya(n,70).vertical?"vertical":"horizontal",t.Ya(n,70).disabled,t.Ya(n,70).tickInterval,!t.Ya(n,70).vertical,t.Ya(n,70)._invertAxis,t.Ya(n,70)._isSliding,t.Ya(n,70).thumbLabel,t.Ya(n,70).vertical,t.Ya(n,70)._isMinValue,t.Ya(n,70).disabled||t.Ya(n,70)._isMinValue&&t.Ya(n,70)._thumbGap&&t.Ya(n,70)._invertAxis,"NoopAnimations"===t.Ya(n,70)._animationMode]),l(n,77,0,e.tool.boxColor.css),l(n,79,0,!e.showBackgroundColorPicker)})}var G=t.Ka("app-box-shadow",T,function(l){return t.gb(0,[(l()(),t.Oa(0,0,null,null,1,"app-box-shadow",[],null,[["document","mousedown"]],function(l,n,e){var a=!0;return"document:mousedown"===n&&(a=!1!==t.Ya(l,1).onDocumentMouseDown()&&a),a},q,K)),t.Na(1,114688,null,0,T,[F,D.i],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Z=e("UodH"),X=e("4c35"),H=e("PCNd"),J=e("ZYCi"),U=function(){},Q=e("24bL");e.d(n,"BoxShadowModuleNgFactory",function(){return $});var $=t.La(a,[],function(l){return t.Va([t.Wa(512,t.j,t.Aa,[[8,[i.a,o.a,G]],[3,t.j],t.v]),t.Wa(4608,z.m,z.l,[t.s,[2,z.w]]),t.Wa(4608,r.i,r.i,[]),t.Wa(4608,g.c,g.c,[g.h,g.d,t.j,g.g,g.e,t.p,t.x,z.d,d.b]),t.Wa(5120,g.i,g.j,[g.c]),t.Wa(5120,h.b,h.c,[g.c]),t.Wa(4608,Y.a,Y.a,[]),t.Wa(4608,D.f,y.c,[[2,y.g],[2,y.l]]),t.Wa(4608,I,I,[]),t.Wa(4608,F,F,[]),t.Wa(1073742336,z.c,z.c,[]),t.Wa(1073742336,r.h,r.h,[]),t.Wa(1073742336,r.b,r.b,[]),t.Wa(1073742336,d.a,d.a,[]),t.Wa(1073742336,y.l,y.l,[[2,y.d]]),t.Wa(1073742336,f.b,f.b,[]),t.Wa(1073742336,y.u,y.u,[]),t.Wa(1073742336,Z.c,Z.c,[]),t.Wa(1073742336,X.c,X.c,[]),t.Wa(1073742336,v.a,v.a,[]),t.Wa(1073742336,g.f,g.f,[]),t.Wa(1073742336,h.e,h.e,[]),t.Wa(1073742336,H.a,H.a,[]),t.Wa(1073742336,J.r,J.r,[[2,J.x],[2,J.o]]),t.Wa(1073742336,U,U,[]),t.Wa(1073742336,Q.a,Q.a,[]),t.Wa(1073742336,s.b,s.b,[]),t.Wa(1073742336,A,A,[]),t.Wa(1073742336,M,M,[]),t.Wa(1073742336,a,a,[]),t.Wa(1024,J.m,function(){return[[{path:"",component:T}]]},[])])})}}]);