(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{W9vR:function(l,n,t){"use strict";t.r(n);var i=t("mFij");class e{}var o=t("pMnS"),u=t("oBZk"),r=t("ZVFW"),s=t("oeeU"),a=t("GWaF"),c=t("BmzL"),b=t("rOct"),h=t("aR35"),d=t("SGxG"),p=t("6lhk"),g=t("gPUr");class m{constructor(l,n,t,i){this.wsService=l,this.modalController=n,this.navCtrl=t,this.loadingController=i,this.loadingDuration=60*h.a.settings.timeout*1e3,this.playlists=[]}ngOnInit(){this.wsService.callMB({action:"getPlaylist"}).subscribe(l=>{l.isSucc&&this.pushData(l)})}pushData(l){this.playlists=l}ionViewWillEnter(){}ionViewWillLeave(){null!=this.loading&&this.loading.dismiss()}ngOnDestroy(){null!=this.loading&&this.loading.dismiss()}initLoading(){return b.b(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({duration:this.loadingDuration,message:"",translucent:!0,cssClass:"custom-class custom-loading"})})}showTracks(l){return b.b(this,void 0,void 0,function*(){yield this.initLoading(),yield this.loading.present(),this.wsService.callMB({action:"playlistTracklist",playlistUrl:l.playlistUrl}).subscribe(n=>{this.loading.dismiss(),n.isSucc&&this.showTracksPage(n,l)})})}showTracksPage(l,n){return b.b(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:p.a,enterAnimation:g.c,leaveAnimation:g.d,componentProps:{title:n.name,fileUrl:"",tracks:l}});return t.onDidDismiss().then(l=>{l.data.hasError&&this.navCtrl.navigateBack("/login")}),yield t.present()})}doRefresh(l){return b.b(this,void 0,void 0,function*(){yield this.initLoading(),yield this.loading.present(),this.wsService.callMB({action:"getPlaylist"}).subscribe(n=>{this.loading.dismiss(),l.target.complete(),n.isSucc&&this.pushData(n)})})}handleSbInput(l){const n=l.target.value.toLowerCase();requestAnimationFrame(()=>{Array.from(document.querySelector("#il-playlist").children).forEach(l=>{const t=l.textContent.toLowerCase().indexOf(n)>-1;l.style.display=t?"block":"none"})})}refresh(){this.wsService.callMB({action:"getPlaylist"}).subscribe(l=>{l.isSucc&&this.pushData(l)})}sbKeyup(l){return b.b(this,void 0,void 0,function*(){"Enter"==l.key&&l.target.blur()})}}var f=i.pb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--ion-background-color:#fff}.header-toolbar[_ngcontent-%COMP%]{--border-width:0!important}.list-1[_ngcontent-%COMP%]{margin-top:0}.header-title[_ngcontent-%COMP%]{text-align:left;font-size:1.3rem;font-weight:700;margin-left:10px;color:#222}.search-bar[_ngcontent-%COMP%]{margin-top:10px}.playlist-icon[_ngcontent-%COMP%]{margin-right:8px}.item-title[_ngcontent-%COMP%]{color:#333}"]],data:{}});function v(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,5,"ion-item",[["button",""]],null,[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.showTracks(l.context.$implicit)&&i),i},u.Q,u.k)),i.qb(1,49152,null,0,r.I,[i.h,i.k,i.x],{button:[0,"button"]},null),(l()(),i.rb(2,0,null,0,0,"img",[["class","playlist-icon"],["src","assets/svg/playlist.svg"]],null,null,null,null,null)),(l()(),i.rb(3,0,null,0,2,"ion-label",[["class","item-title"]],null,null,null,u.R,u.l)),i.qb(4,49152,null,0,r.O,[i.h,i.k,i.x],null,null),(l()(),i.Jb(5,0,["",""]))],function(l,n){l(n,1,0,"")},function(l,n){l(n,5,0,n.context.$implicit.name)})}function k(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,11,"ion-header",[["mode","ios"]],null,null,null,u.N,u.h)),i.qb(1,49152,null,0,r.C,[i.h,i.k,i.x],{mode:[0,"mode"]},null),(l()(),i.rb(2,0,null,0,9,"ion-toolbar",[["class","header-toolbar"]],null,null,null,u.lb,u.F)),i.qb(3,49152,null,0,r.Db,[i.h,i.k,i.x],null,null),(l()(),i.rb(4,0,null,0,2,"div",[["class","header-title"]],null,null,null,null,null)),(l()(),i.Jb(5,null,["",""])),i.Eb(131072,s.i,[s.j,i.h]),(l()(),i.rb(7,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,u.I,u.c)),i.qb(8,49152,null,0,r.m,[i.h,i.k,i.x],null,null),(l()(),i.rb(9,0,null,0,2,"ion-button",[["color","danger"]],null,[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.refresh()&&i),i},u.H,u.b)),i.qb(10,49152,null,0,r.l,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(11,0,null,0,0,"img",[["src","assets/svg/refresh.svg"]],null,null,null,null,null)),(l()(),i.rb(12,0,null,null,16,"ion-content",[],null,null,null,u.L,u.f)),i.qb(13,49152,null,0,r.v,[i.h,i.k,i.x],null,null),(l()(),i.rb(14,0,null,0,3,"ion-refresher",[["pullFactor","0.5"],["pullMax","200"],["pullMin","100"],["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,t){var i=!0;return"ionRefresh"===n&&(i=!1!==l.component.doRefresh(t)&&i),i},u.X,u.q)),i.qb(15,49152,null,0,r.eb,[i.h,i.k,i.x],{pullFactor:[0,"pullFactor"],pullMax:[1,"pullMax"],pullMin:[2,"pullMin"]},null),(l()(),i.rb(16,0,null,0,1,"ion-refresher-content",[],null,null,null,u.W,u.r)),i.qb(17,49152,null,0,r.fb,[i.h,i.k,i.x],null,null),(l()(),i.rb(18,0,null,0,6,"ion-toolbar",[["class","search-bar"]],null,null,null,u.lb,u.F)),i.qb(19,49152,null,0,r.Db,[i.h,i.k,i.x],null,null),(l()(),i.rb(20,0,null,0,4,"ion-searchbar",[["id","sb-playlist"],["mode","ios"]],null,[[null,"ionChange"],[null,"keyup"],[null,"ionBlur"]],function(l,n,t){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==i.Db(l,24)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==i.Db(l,24)._handleInputEvent(t.target)&&e),"ionChange"===n&&(e=!1!==o.handleSbInput(t)&&e),"keyup"===n&&(e=!1!==o.sbKeyup(t)&&e),e},u.Z,u.t)),i.Gb(5120,null,a.g,function(l){return[l]},[r.Pb]),i.qb(22,49152,null,0,r.lb,[i.h,i.k,i.x],{mode:[0,"mode"],placeholder:[1,"placeholder"]},null),i.Eb(131072,s.i,[s.j,i.h]),i.qb(24,16384,null,0,r.Pb,[i.k],null,null),(l()(),i.rb(25,0,null,0,3,"ion-list",[["class","list-1"],["id","il-playlist"],["lines","none"]],null,null,null,u.T,u.m)),i.qb(26,49152,null,0,r.P,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(l()(),i.gb(16777216,null,0,1,null,v)),i.qb(28,278528,null,0,c.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,1,0,"ios"),l(n,10,0,"danger"),l(n,15,0,"0.5","200","100"),l(n,22,0,"ios",i.vb(1,"",i.Kb(n,22,1,i.Db(n,23).transform("common.search-placeholder")),"")),l(n,26,0,"none"),l(n,28,0,t.playlists)},function(l,n){l(n,5,0,i.Kb(n,5,0,i.Db(n,6).transform("tab3.header")))})}function y(l){return i.Lb(0,[(l()(),i.rb(0,0,null,null,1,"app-tab3",[],null,null,null,k,f)),i.qb(1,245760,null,0,m,[d.a,r.Ib,r.Jb,r.Hb],null,null)],function(l,n){l(n,1,0)},null)}var x=i.nb("app-tab3",m,y,{},{},[]),B=t("m515");t.d(n,"Tab3PageModuleNgFactory",function(){return w});var w=i.ob(e,[],function(l){return i.Ab([i.Bb(512,i.j,i.Z,[[8,[o.a,x]],[3,i.j],i.v]),i.Bb(4608,c.l,c.k,[i.s,[2,c.v]]),i.Bb(4608,r.c,r.c,[i.x,i.g]),i.Bb(4608,r.Ib,r.Ib,[r.c,i.j,i.p]),i.Bb(4608,r.Nb,r.Nb,[r.c,i.j,i.p]),i.Bb(4608,a.o,a.o,[]),i.Bb(1073742336,c.b,c.b,[]),i.Bb(1073742336,r.Fb,r.Fb,[]),i.Bb(1073742336,a.n,a.n,[]),i.Bb(1073742336,a.d,a.d,[]),i.Bb(1073742336,s.g,s.g,[]),i.Bb(1073742336,B.n,B.n,[[2,B.s],[2,B.m]]),i.Bb(1073742336,e,e,[]),i.Bb(1024,B.k,function(){return[[{path:"",component:m}]]},[])])})}}]);