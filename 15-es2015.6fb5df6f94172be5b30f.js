(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"f+ep":function(n,l,t){"use strict";t.r(l);var i=t("mFij"),e=t("rOct"),o=t("ZVFW"),u=t("aR35"),r=t("avBb"),s=t("SGxG");class a{constructor(n,l,t,i,e,o,r){this.navCtrl=n,this.translateService=l,this.alertController=t,this.myDBService=i,this.activeRoute=e,this.loadingController=o,this.wsService=r,this.inputIp=u.a.settings.ip,this.inputPort=u.a.settings.port,this.inputPassword=u.a.settings.password,this.loginDisabled=!1,this.loadingDuration=6e4,this.bandIps=["localhost","musicbeefly.tracemouse.top","musicbee-fly.tracemouse.top","musicbee.tracemouse.top"],this.activeRoute.queryParams.subscribe(n=>{this.from=n.from})}ngOnInit(){}ionViewWillEnter(){this.inputIp=u.a.settings.ip,this.inputPort=u.a.settings.port,this.inputPassword=u.a.settings.password,this.bandIps.indexOf(this.inputIp)>=0&&(this.inputIp="",this.inputPort=""),"exit"!=this.from&&this.wsService.callMB({action:"getMB"},null,!0).subscribe(n=>{this.loginDisabled=!1,n.isSucc&&(u.a.settings.ip=this.inputIp,u.a.settings.port=this.inputPort,u.a.settings.rootUrl=u.a.settings.protocol+"//"+u.a.settings.ip+":"+u.a.settings.port,u.a.settings.versionPlugin=n.pluginVersion,this.myDBService.saveSettingsData(),this.navCtrl.navigateForward("/tabs/tab1"))},n=>{console.log("%c \u8bf7\u6c42\u5904\u7406\u5931\u8d25 %c","color:red","err",n)})}initLoading(){return e.b(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({duration:this.loadingDuration,message:"",translucent:!0,cssClass:"custom-class custom-loading"})})}logIn(){return e.b(this,void 0,void 0,function*(){yield this.initLoading(),yield this.loading.present(),this.loginDisabled=!0,this.testMB(u.a.global.ws_schema+this.inputIp+":"+this.inputPort+"/wsjsonrpc?password="+this.inputPassword)})}getIp(n){this.inputIp=n.value}getPort(n){this.inputPort=n.value}getPassword(n){this.inputPassword=n.value}testMB(n){return e.b(this,void 0,void 0,function*(){this.wsService.callMB({action:"getMB"},n,!0).subscribe(n=>{this.loginDisabled=!1,this.loading.dismiss(),n.isSucc&&(u.a.settings.ip=this.inputIp,u.a.settings.port=this.inputPort,u.a.settings.password=this.inputPassword,u.a.settings.rootUrl=u.a.settings.protocol+"//"+u.a.settings.ip+":"+u.a.settings.port,u.a.settings.versionPlugin=n.pluginVersion,this.myDBService.saveSettingsData(),this.navCtrl.navigateForward("/tabs/tab1"))},l=>{console.log("%c \u8bf7\u6c42\u5904\u7406\u5931\u8d25 %c","color:red","url",n,"err",l),this.loading.dismiss(),this.presentConnError()})})}presentConnError(){return e.b(this,void 0,void 0,function*(){var n;yield this.translateService.get("message").subscribe(l=>{n=l});const l=yield this.alertController.create({header:n.error,subHeader:n["err-conn-fail"],message:n["err-conn-fail-msg"],buttons:[n.ok]});l.onDidDismiss().then(n=>{this.loginDisabled=!1}),yield l.present()})}}class b{}var p=t("pMnS"),c=t("oBZk"),g=t("oeeU"),d=t("GWaF"),h=t("m515"),m=i.pb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{padding-right:16px}.header-toolbar[_ngcontent-%COMP%]{--border-width:0!important}.lbl-button[_ngcontent-%COMP%]{margin-top:15px}.button[_ngcontent-%COMP%]{--border-radius:25px!important}.logo[_ngcontent-%COMP%]{border-radius:50%;width:100px;box-shadow:2px 2px 5px #ccc}.logo-box[_ngcontent-%COMP%]{margin:10px auto 15px;text-align:center}"]],data:{}});function v(n){return i.Mb(0,[(n()(),i.rb(0,0,null,null,3,"ion-header",[],null,null,null,c.Q,c.i)),i.qb(1,49152,null,0,o.C,[i.h,i.k,i.x],null,null),(n()(),i.rb(2,0,null,0,1,"ion-toolbar",[["class","header-toolbar"],["translucent",""]],null,null,null,c.pb,c.H)),i.qb(3,49152,null,0,o.Db,[i.h,i.k,i.x],null,null),(n()(),i.rb(4,0,null,null,50,"ion-content",[],null,null,null,c.O,c.g)),i.qb(5,49152,null,0,o.v,[i.h,i.k,i.x],null,null),(n()(),i.rb(6,0,null,0,48,"ion-list",[],null,null,null,c.W,c.n)),i.qb(7,49152,null,0,o.P,[i.h,i.k,i.x],null,null),(n()(),i.rb(8,0,null,0,1,"div",[["class","logo-box"]],null,null,null,null,null)),(n()(),i.rb(9,0,null,null,0,"img",[["class","logo"],["src","assets/img/cover.jpg"]],null,null,null,null,null)),(n()(),i.rb(10,0,null,0,12,"ion-item",[["class","mb-input"]],null,null,null,c.T,c.l)),i.qb(11,49152,null,0,o.I,[i.h,i.k,i.x],null,null),(n()(),i.rb(12,0,null,0,6,"ion-label",[["position","floating"]],null,null,null,c.U,c.m)),i.qb(13,49152,null,0,o.O,[i.h,i.k,i.x],{position:[0,"position"]},null),(n()(),i.Kb(14,0,[""," "])),i.Fb(131072,g.i,[g.j,i.h]),(n()(),i.rb(16,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,c.lb,c.D)),i.qb(17,49152,null,0,o.yb,[i.h,i.k,i.x],{color:[0,"color"]},null),(n()(),i.Kb(-1,0,["*"])),(n()(),i.rb(19,0,null,0,3,"ion-input",[["clearInput",""],["inputmode","ip"],["placeholder","192.168.1.10"],["required","true"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==i.Db(n,22)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==i.Db(n,22)._handleInputEvent(t.target)&&e),"ionBlur"===l&&(e=!1!==o.getIp(i.Db(n,21))&&e),e},c.S,c.k)),i.Hb(5120,null,d.g,function(n){return[n]},[o.Qb]),i.qb(21,49152,[["ip",4]],0,o.H,[i.h,i.k,i.x],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"],value:[5,"value"]},null),i.qb(22,16384,null,0,o.Qb,[i.k],null,null),(n()(),i.rb(23,0,null,0,12,"ion-item",[["class","mb-input"]],null,null,null,c.T,c.l)),i.qb(24,49152,null,0,o.I,[i.h,i.k,i.x],null,null),(n()(),i.rb(25,0,null,0,6,"ion-label",[["position","floating"]],null,null,null,c.U,c.m)),i.qb(26,49152,null,0,o.O,[i.h,i.k,i.x],{position:[0,"position"]},null),(n()(),i.Kb(27,0,[""," "])),i.Fb(131072,g.i,[g.j,i.h]),(n()(),i.rb(29,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,c.lb,c.D)),i.qb(30,49152,null,0,o.yb,[i.h,i.k,i.x],{color:[0,"color"]},null),(n()(),i.Kb(-1,0,["*"])),(n()(),i.rb(32,0,null,0,3,"ion-input",[["clearInput",""],["inputmode","tel"],["maxlength","5"],["minlength","2"],["pattern","[0-9]*"],["placeholder","9999"],["required","true"],["type","tel"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==i.Db(n,35)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==i.Db(n,35)._handleInputEvent(t.target)&&e),"ionBlur"===l&&(e=!1!==o.getPort(i.Db(n,34))&&e),e},c.S,c.k)),i.Hb(5120,null,d.g,function(n){return[n]},[o.Qb]),i.qb(34,49152,[["port",4]],0,o.H,[i.h,i.k,i.x],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],maxlength:[2,"maxlength"],minlength:[3,"minlength"],pattern:[4,"pattern"],placeholder:[5,"placeholder"],required:[6,"required"],type:[7,"type"],value:[8,"value"]},null),i.qb(35,16384,null,0,o.Qb,[i.k],null,null),(n()(),i.rb(36,0,null,0,10,"ion-item",[["class","mb-input"]],null,null,null,c.T,c.l)),i.qb(37,49152,null,0,o.I,[i.h,i.k,i.x],null,null),(n()(),i.rb(38,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,c.U,c.m)),i.qb(39,49152,null,0,o.O,[i.h,i.k,i.x],{position:[0,"position"]},null),(n()(),i.Kb(40,0,["",""])),i.Fb(131072,g.i,[g.j,i.h]),(n()(),i.rb(42,0,null,0,4,"ion-input",[["clearInput",""],["inputmode","password"],["maxlength","8"],["minlength","0"],["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==i.Db(n,46)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==i.Db(n,46)._handleInputEvent(t.target)&&e),"ionBlur"===l&&(e=!1!==o.getPassword(i.Db(n,44))&&e),e},c.S,c.k)),i.Hb(5120,null,d.g,function(n){return[n]},[o.Qb]),i.qb(44,49152,[["password",4]],0,o.H,[i.h,i.k,i.x],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],maxlength:[2,"maxlength"],minlength:[3,"minlength"],placeholder:[4,"placeholder"],type:[5,"type"],value:[6,"value"]},null),i.Fb(131072,g.i,[g.j,i.h]),i.qb(46,16384,null,0,o.Qb,[i.k],null,null),(n()(),i.rb(47,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,c.T,c.l)),i.qb(48,49152,null,0,o.I,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(n()(),i.rb(49,0,null,0,5,"ion-label",[["class","lbl-button"]],null,null,null,c.U,c.m)),i.qb(50,49152,null,0,o.O,[i.h,i.k,i.x],null,null),(n()(),i.rb(51,0,null,0,3,"ion-button",[["class","button"],["color","danger"],["expand","block"],["size","default"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.logIn()&&i),i},c.K,c.c)),i.qb(52,49152,null,0,o.l,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],size:[3,"size"]},null),(n()(),i.Kb(53,0,["",""])),i.Fb(131072,g.i,[g.j,i.h])],function(n,l){var t=l.component;n(l,13,0,"floating"),n(l,17,0,"danger"),n(l,21,0,"","ip","192.168.1.10","true","text",i.vb(1,"",t.inputIp,"")),n(l,26,0,"floating"),n(l,30,0,"danger"),n(l,34,0,"","tel","5","2","[0-9]*","9999","true","tel",i.vb(1,"",t.inputPort,"")),n(l,39,0,"floating"),n(l,44,0,"","password","8","0",i.vb(1,"",i.Lb(l,44,4,i.Db(l,45).transform("login.password-placeholder")),""),"password",i.vb(1,"",t.inputPassword,"")),n(l,48,0,"none"),n(l,52,0,"danger",i.vb(1,"",t.loginDisabled,""),"block","default")},function(n,l){n(l,14,0,i.Lb(l,14,0,i.Db(l,15).transform("common.ip"))),n(l,27,0,i.Lb(l,27,0,i.Db(l,28).transform("common.port"))),n(l,40,0,i.Lb(l,40,0,i.Db(l,41).transform("common.password"))),n(l,53,0,i.Lb(l,53,0,i.Db(l,54).transform("login.button-text")))})}function x(n){return i.Mb(0,[(n()(),i.rb(0,0,null,null,1,"app-login",[],null,null,null,v,m)),i.qb(1,114688,null,0,a,[o.Jb,g.j,o.b,r.a,h.a,o.Hb,s.a],null,null)],function(n,l){n(l,1,0)},null)}var f=i.nb("app-login",a,x,{},{},[]),B=t("BmzL");t.d(l,"LoginPageModuleNgFactory",function(){return w});var w=i.ob(b,[],function(n){return i.Ab([i.Bb(512,i.j,i.Z,[[8,[p.a,f]],[3,i.j],i.v]),i.Bb(4608,B.l,B.k,[i.s,[2,B.v]]),i.Bb(4608,d.o,d.o,[]),i.Bb(4608,o.c,o.c,[i.x,i.g]),i.Bb(4608,o.Ib,o.Ib,[o.c,i.j,i.p]),i.Bb(4608,o.Nb,o.Nb,[o.c,i.j,i.p]),i.Bb(1073742336,B.b,B.b,[]),i.Bb(1073742336,d.n,d.n,[]),i.Bb(1073742336,d.d,d.d,[]),i.Bb(1073742336,o.Fb,o.Fb,[]),i.Bb(1073742336,g.g,g.g,[]),i.Bb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),i.Bb(1073742336,b,b,[]),i.Bb(1024,h.k,function(){return[[{path:"",component:a}]]},[])])})}}]);