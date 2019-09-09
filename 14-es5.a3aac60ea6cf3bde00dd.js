(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8cDG":function(l,n,t){"use strict";t.r(n);var e=t("hjJQ"),r=function(){return function(){}}(),u=t("pMnS"),i=t("oBZk"),o=t("ZVFW"),s=t("0X4B"),a=t("J/JT"),c=t("0aFO"),b=t("rOct"),h=t("aR35"),f=t("avBb"),d=t("SGxG"),p=t("6lhk"),m=t("an0q"),g=t("gPUr"),k=function(){function l(l,n,t,e,r){this.myDBService=l,this.wsService=n,this.modalController=t,this.loadingController=e,this.navCtrl=r,this.loadingDuration=60*h.a.settings.timeout*1e3,this.tracks=[],this.tracksByfolder=[],this.tracksByAlbum=[],this.tracksByArtist=[],this.sgLibrary="folder",this.folders=[],this.albums=[],this.artists=[],this.cover="assets/img/cover.jpg"}return l.prototype.handleSbInput=function(l){var n=this,t=l.target.value.toLowerCase().trim();requestAnimationFrame(function(){var l;"folder"==n.sgLibrary?l=Array.from(document.querySelector("#il_folder").children):"album"==n.sgLibrary?l=Array.from(document.querySelector("#il_album").children):"artist"==n.sgLibrary&&(l=Array.from(document.querySelector("#il_artist").children)),l.forEach(function(l){var n=l.textContent.toLowerCase().indexOf(t)>-1;l.style.display=n?"block":"none"})})},l.prototype.ionViewDidLoad=function(){},l.prototype.ngOnInit=function(){this.sgLibrary="",this.refreshEvent=null,this.getAllTracks()},l.prototype.ionViewWillEnter=function(){},l.prototype.ionViewDidEnter=function(){},l.prototype.ionViewWillLeave=function(){null!=this.loading&&this.loading.dismiss()},l.prototype.ngOnDestroy=function(){null!=this.loading&&this.loading.dismiss()},l.prototype.refresh=function(){this.tracks=[],this.tracksByfolder=[],this.tracksByAlbum=[],this.tracksByArtist=[],this.sgLibrary="",this.getAllTracks()},l.prototype.initLoading=function(){return b.b(this,void 0,void 0,function(){var l;return b.e(this,function(n){switch(n.label){case 0:return l=this,[4,this.loadingController.create({duration:this.loadingDuration,message:"",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return l.loading=n.sent(),[2]}})})},l.prototype.getAllTracks=function(){return b.b(this,void 0,void 0,function(){var l=this;return b.e(this,function(n){switch(n.label){case 0:return[4,this.initLoading()];case 1:return n.sent(),[4,this.loading.present()];case 2:return n.sent(),this.wsService.callMB({action:"librarySearch",query:""}).subscribe(function(n){l.saveAllTracks(n),null!=l.refreshEvent&&l.refreshEvent.target.complete()}),[2]}})})},l.prototype.saveAllTracks=function(l){return b.b(this,void 0,void 0,function(){return b.e(this,function(n){return this.tracks=l,this.folders=[],this.albums=[],this.artists=[],this.loading.dismiss(),this.sgLibrary="folder",[2]})})},l.prototype.refreshFolder=function(){return b.b(this,void 0,void 0,function(){var l,n,t,e,r,u,i,o,s,a,c;return b.e(this,function(b){for(this.tracksByfolder=this.tracks.slice(),this.tracksByfolder=this.tracksByfolder.sort(this.sortByFolder),this.folders=[],l="",n=0,t="",e=0,r="",u=this.tracksByfolder.length,i=0;i<u;i++)(o=this.tracksByfolder[i]).folder!=l&&(""!=l&&((s={name:"",fileUrl:"",count:0,start:0,artWork:this.cover,type:"",sampleRate:""}).name=l,s.fileUrl=t,s.count=n,s.start=e,a=t.lastIndexOf("."),s.type=t.substr(a+1).toUpperCase(),s.sampleRate=r,c="http://"+h.a.settings.ip+":"+h.a.settings.port+"/getArtwork",c+="?fileUrl="+encodeURI(t),s.artWork=c,this.folders.push(s)),l=o.folder,n=0,e=i,t=o.fileUrl,r=o.sampleRate),n++;return""!=l&&((s={name:"",fileUrl:"",count:0,start:0,artWork:this.cover,type:"",sampleRate:""}).name=l,s.fileUrl=t,s.count=n,s.start=e,a=t.lastIndexOf("."),s.type=t.substr(a+1).toUpperCase(),s.sampleRate=r,c="http://"+h.a.settings.ip+":"+h.a.settings.port+"/getArtwork",c+="?fileUrl="+encodeURI(t),s.artWork=c,this.folders.push(s)),[2]})})},l.prototype.refreshFolderCover=function(){return b.b(this,void 0,void 0,function(){var l,n,t;return b.e(this,function(e){for(l=this.folders.length,n=0;n<l;n++)t={action:"getLibArtwork",fileUrl:this.folders[n].fileUrl,pushData:JSON.stringify({idx:n,type:"folder"})},this.wsService.sendJsonrpc(t);return[2]})})},l.prototype.pushFolderImg=function(l,n){var t;try{t=parseInt(l)}catch(e){return void console.log(e)}"data:image/jpeg;base64,"!=n&&(this.folders[t].artWork=n)},l.prototype.refreshAlbum=function(){return b.b(this,void 0,void 0,function(){var l,n,t,e,r,u,i,o,s,a,c;return b.e(this,function(b){for(this.tracksByAlbum=this.tracks.slice(),this.tracksByAlbum=this.tracksByAlbum.sort(this.sortByAlbum),this.albums=[],l="",n=0,t="",e=0,r="",u=this.tracksByAlbum.length,i=0;i<u;i++)(o=this.tracksByAlbum[i]).album!=l&&(""!=l&&((s={name:"",fileUrl:"",count:0,start:0,artWork:this.cover,type:"",sampleRate:""}).name=l,s.fileUrl=t,s.count=n,s.start=e,a=t.lastIndexOf("."),s.type=t.substr(a+1).toUpperCase(),s.sampleRate=r,c="http://"+h.a.settings.ip+":"+h.a.settings.port+"/getArtwork",c+="?fileUrl="+encodeURI(t),s.artWork=c,this.albums.push(s)),l=o.album,n=0,e=i,r=o.sampleRate,t=o.fileUrl),n++;return""!=l&&((s={name:"",fileUrl:"",count:0,start:0,artWork:this.cover,type:"",sampleRate:""}).name=l,s.fileUrl=t,s.count=n,s.start=e,a=t.lastIndexOf("."),s.type=t.substr(a+1).toUpperCase(),s.sampleRate=r,c="http://"+h.a.settings.ip+":"+h.a.settings.port+"/getArtwork",c+="?fileUrl="+encodeURI(t),s.artWork=c,this.albums.push(s)),[2]})})},l.prototype.refreshAlbumCover=function(){return b.b(this,void 0,void 0,function(){var l,n,t;return b.e(this,function(e){for(l=this.albums.length,n=0;n<l;n++)t={action:"getLibArtwork",fileUrl:this.albums[n].fileUrl,pushData:JSON.stringify({idx:n,type:"album"})},this.wsService.sendJsonrpc(t);return[2]})})},l.prototype.pushAlbumImg=function(l,n){var t;try{t=parseInt(l)}catch(e){return void console.log(e)}"data:image/jpeg;base64,"!=n&&(this.albums[t].artWork=n)},l.prototype.refreshArtist=function(){return b.b(this,void 0,void 0,function(){var l,n,t,e,r,u,i,o,s;return b.e(this,function(a){for(this.tracksByArtist=this.tracks.slice(),this.tracksByArtist=this.tracksByArtist.sort(this.sortByArtist),this.artists=[],l="",n=0,t="",e=0,r=this.tracksByArtist.length,u=0;u<r;u++)(i=this.tracksByArtist[u]).artist!=l&&(""!=l&&((o={name:"",fileUrl:"",count:0,start:0,artWork:this.cover,type:"",sampleRate:""}).name=l,o.fileUrl=t,o.count=n,o.start=e,s="http://"+h.a.settings.ip+":"+h.a.settings.port+"/getArtwork",s+="?fileUrl="+encodeURI(t),o.artWork=s,this.artists.push(o)),l=i.artist,n=0,e=u,t=i.fileUrl),n++;return""!=l&&((o={name:"",fileUrl:"",count:0,start:0,artWork:this.cover,type:"",sampleRate:""}).name=l,o.fileUrl=t,o.count=n,o.start=e,s="http://"+h.a.settings.ip+":"+h.a.settings.port+"/getArtwork",s+="?fileUrl="+encodeURI(t),o.artWork=s,this.artists.push(o)),[2]})})},l.prototype.refreshArtistCover=function(){return b.b(this,void 0,void 0,function(){var l,n,t;return b.e(this,function(e){for(l=this.artists.length,n=0;n<l;n++)t={action:"getLibArtwork",fileUrl:this.artists[n].fileUrl,pushData:JSON.stringify({idx:n,type:"artist"})},this.wsService.sendJsonrpc(t);return[2]})})},l.prototype.pushArtistImg=function(l,n){"data:image/jpeg;base64,"!=n&&(this.artists[l].artWork=n)},l.prototype.doRefresh=function(l){this.tracks=[],this.tracksByfolder=[],this.tracksByAlbum=[],this.tracksByArtist=[],this.sgLibrary="",this.refreshEvent=l,this.getAllTracks()},l.prototype.showTracksByFolder=function(l){var n=[];null!=l&&(n=this.tracksByfolder.slice(l.start,l.start+l.count)),this.showTracksPage(n,l)},l.prototype.showTracksByAlbum=function(l){var n=[];null!=l&&(n=this.tracksByAlbum.slice(l.start,l.start+l.count)),this.showTracksPage(n,l)},l.prototype.showTracksByArtist=function(l){var n=[];null!=l&&(n=this.tracksByArtist.slice(l.start,l.start+l.count)),this.showTracksPage(n,l)},l.prototype.showTracksPage=function(l,n){return b.b(this,void 0,void 0,function(){var t,e=this;return b.e(this,function(r){switch(r.label){case 0:return[4,this.modalController.create({component:p.a,enterAnimation:g.c,leaveAnimation:g.d,componentProps:{title:n.name,fileUrl:n.fileUrl,tracks:l}})];case 1:return(t=r.sent()).onDidDismiss().then(function(l){l.data.hasError&&e.navCtrl.navigateBack("/login")}),[4,t.present()];case 2:return[2,r.sent()]}})})},l.prototype.segmentChanged=function(l){if("folder"==this.sgLibrary){if(this.tracksByfolder.length>0)return;this.refreshFolder()}else if("album"==this.sgLibrary){if(this.tracksByAlbum.length>0)return;this.refreshAlbum()}else if("artist"==this.sgLibrary){if(this.tracksByArtist.length>0)return;this.refreshArtist()}},l.prototype.search=function(){return b.b(this,void 0,void 0,function(){var l,n=this;return b.e(this,function(t){switch(t.label){case 0:return[4,this.modalController.create({component:m.a,enterAnimation:g.c,leaveAnimation:g.d,componentProps:{}})];case 1:return(l=t.sent()).onDidDismiss().then(function(l){l.data.hasError&&n.navCtrl.navigateBack("/login")}),[4,l.present()];case 2:return[2,t.sent()]}})})},l.prototype.sortByFolder=function(l,n){return l.folder==n.folder?0:l.folder<n.folder?-1:l.folder>n.folder?1:void 0},l.prototype.sortByArtist=function(l,n){return l.artist==n.artist?0:l.artist<n.artist?-1:l.artist>n.artist?1:void 0},l.prototype.sortByAlbum=function(l,n){return l.album==n.album?0:l.album<n.album?-1:l.album>n.album?1:void 0},l.prototype.sbKeyup=function(l){return b.b(this,void 0,void 0,function(){return b.e(this,function(n){return"Enter"!=l.key?[2]:(l.target.blur(),[2])})})},l}(),y=e.rb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--ion-background-color:#fff}ion-item[_ngcontent-%COMP%]{margin-top:5px}.header-title[_ngcontent-%COMP%]{text-align:left;font-size:1.3rem;font-weight:700;margin-left:10px;color:#222}.header-toolbar[_ngcontent-%COMP%]{--border-width:0!important}.sg_icon[_ngcontent-%COMP%]{font-size:1rem;margin-right:.2rem}.cover-img[_ngcontent-%COMP%]{border-radius:5px}.item-title[_ngcontent-%COMP%]{margin-left:10px;font-size:1rem;font-weight:400;color:#333;word-break:break-all;white-space:normal}.item-subtitle[_ngcontent-%COMP%]{margin-left:10px;font-size:.7rem;line-height:1.5em}.track-sampleRate[_ngcontent-%COMP%]{text-transform:capitalize;text-overflow:ellipsis;font-size:.6rem;color:#ffce00;border:1px solid #ffce00;border-radius:3px;margin-right:5px;padding:1px}.track-audioType[_ngcontent-%COMP%]{text-transform:capitalize;text-overflow:ellipsis;font-size:.6rem;color:#7ecfc0;border:1px solid #7ecfc0;border-radius:3px;margin-right:5px;padding:1px}"]],data:{}});function v(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,15,"ion-item",[["button",""]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showTracksByFolder(l.context.$implicit)&&e),e},i.Q,i.k)),e.sb(1,49152,null,0,o.I,[e.h,e.k,e.z],{button:[0,"button"]},null),(l()(),e.tb(2,0,null,0,2,"ion-thumbnail",[["item-start",""]],null,null,null,i.ib,i.C)),e.sb(3,49152,null,0,o.Ab,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,0,"img",[["class","cover-img"]],[[8,"src",4]],null,null,null,null)),(l()(),e.tb(5,0,null,0,10,"ion-label",[],null,null,null,i.R,i.l)),e.sb(6,49152,null,0,o.O,[e.h,e.k,e.z],null,null),(l()(),e.tb(7,0,null,0,1,"p",[["class","item-title"]],null,null,null,null,null)),(l()(),e.Lb(8,null,["",""])),(l()(),e.tb(9,0,null,0,6,"p",[["class","item-subtitle"]],null,null,null,null,null)),(l()(),e.tb(10,0,null,null,1,"span",[["class","track-audioType"]],null,null,null,null,null)),(l()(),e.Lb(11,null,["",""])),(l()(),e.tb(12,0,null,null,1,"span",[["class","track-sampleRate"]],null,null,null,null,null)),(l()(),e.Lb(13,null,["",""])),(l()(),e.Lb(14,null,[""," "," "])),e.Gb(131072,s.i,[s.j,e.h])],function(l,n){l(n,1,0,"")},function(l,n){l(n,4,0,e.xb(1,"",n.context.$implicit.artWork,"")),l(n,8,0,n.context.$implicit.name),l(n,11,0,n.context.$implicit.type),l(n,13,0,n.context.$implicit.sampleRate),l(n,14,0,n.context.$implicit.count,e.Mb(n,14,1,e.Fb(n,15).transform("tab2.tracks")))})}function C(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,11,"div",[["id","sg_folder"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,6,"ion-toolbar",[],null,null,null,i.lb,i.F)),e.sb(2,49152,null,0,o.Db,[e.h,e.k,e.z],null,null),(l()(),e.tb(3,0,null,0,4,"ion-searchbar",[["id","sb_folder"],["mode","ios"]],null,[[null,"ionChange"],[null,"keyup"],[null,"ionBlur"]],function(l,n,t){var r=!0,u=l.component;return"ionBlur"===n&&(r=!1!==e.Fb(l,7)._handleBlurEvent(t.target)&&r),"ionChange"===n&&(r=!1!==e.Fb(l,7)._handleInputEvent(t.target)&&r),"ionChange"===n&&(r=!1!==u.handleSbInput(t)&&r),"keyup"===n&&(r=!1!==u.sbKeyup(t)&&r),r},i.Z,i.t)),e.Ib(5120,null,a.g,function(l){return[l]},[o.Pb]),e.sb(5,49152,null,0,o.lb,[e.h,e.k,e.z],{mode:[0,"mode"],placeholder:[1,"placeholder"]},null),e.Gb(131072,s.i,[s.j,e.h]),e.sb(7,16384,null,0,o.Pb,[e.k],null,null),(l()(),e.tb(8,0,null,null,3,"ion-list",[["id","il_folder"],["lines","none"]],null,null,null,i.T,i.m)),e.sb(9,49152,null,0,o.P,[e.h,e.k,e.z],{lines:[0,"lines"]},null),(l()(),e.ib(16777216,null,0,1,null,v)),e.sb(11,278528,null,0,c.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,5,0,"ios",e.xb(1,"",e.Mb(n,5,1,e.Fb(n,6).transform("common.search-placeholder")),"")),l(n,9,0,"none"),l(n,11,0,t.folders)},null)}function A(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,15,"ion-item",[["button",""]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showTracksByAlbum(l.context.$implicit)&&e),e},i.Q,i.k)),e.sb(1,49152,null,0,o.I,[e.h,e.k,e.z],{button:[0,"button"]},null),(l()(),e.tb(2,0,null,0,2,"ion-thumbnail",[["item-start",""]],null,null,null,i.ib,i.C)),e.sb(3,49152,null,0,o.Ab,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,0,"img",[["class","cover-img"]],[[8,"src",4]],null,null,null,null)),(l()(),e.tb(5,0,null,0,10,"ion-label",[],null,null,null,i.R,i.l)),e.sb(6,49152,null,0,o.O,[e.h,e.k,e.z],null,null),(l()(),e.tb(7,0,null,0,1,"p",[["class","item-title"]],null,null,null,null,null)),(l()(),e.Lb(8,null,["",""])),(l()(),e.tb(9,0,null,0,6,"p",[["class","item-subtitle"]],null,null,null,null,null)),(l()(),e.tb(10,0,null,null,1,"span",[["class","track-audioType"]],null,null,null,null,null)),(l()(),e.Lb(11,null,["",""])),(l()(),e.tb(12,0,null,null,1,"span",[["class","track-sampleRate"]],null,null,null,null,null)),(l()(),e.Lb(13,null,["",""])),(l()(),e.Lb(14,null,[""," "," "])),e.Gb(131072,s.i,[s.j,e.h])],function(l,n){l(n,1,0,"")},function(l,n){l(n,4,0,e.xb(1,"",n.context.$implicit.artWork,"")),l(n,8,0,n.context.$implicit.name),l(n,11,0,n.context.$implicit.type),l(n,13,0,n.context.$implicit.sampleRate),l(n,14,0,n.context.$implicit.count,e.Mb(n,14,1,e.Fb(n,15).transform("tab2.tracks")))})}function B(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,6,"ion-toolbar",[],null,null,null,i.lb,i.F)),e.sb(2,49152,null,0,o.Db,[e.h,e.k,e.z],null,null),(l()(),e.tb(3,0,null,0,4,"ion-searchbar",[["id","sb_album"],["mode","ios"]],null,[[null,"ionChange"],[null,"keyup"],[null,"ionBlur"]],function(l,n,t){var r=!0,u=l.component;return"ionBlur"===n&&(r=!1!==e.Fb(l,7)._handleBlurEvent(t.target)&&r),"ionChange"===n&&(r=!1!==e.Fb(l,7)._handleInputEvent(t.target)&&r),"ionChange"===n&&(r=!1!==u.handleSbInput(t)&&r),"keyup"===n&&(r=!1!==u.sbKeyup(t)&&r),r},i.Z,i.t)),e.Ib(5120,null,a.g,function(l){return[l]},[o.Pb]),e.sb(5,49152,null,0,o.lb,[e.h,e.k,e.z],{mode:[0,"mode"],placeholder:[1,"placeholder"]},null),e.Gb(131072,s.i,[s.j,e.h]),e.sb(7,16384,null,0,o.Pb,[e.k],null,null),(l()(),e.tb(8,0,null,null,3,"ion-list",[["id","il_album"],["lines","none"]],null,null,null,i.T,i.m)),e.sb(9,49152,null,0,o.P,[e.h,e.k,e.z],{lines:[0,"lines"]},null),(l()(),e.ib(16777216,null,0,1,null,A)),e.sb(11,278528,null,0,c.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,5,0,"ios",e.xb(1,"",e.Mb(n,5,1,e.Fb(n,6).transform("common.search-placeholder")),"")),l(n,9,0,"none"),l(n,11,0,t.albums)},null)}function w(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,11,"ion-item",[["button",""]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showTracksByArtist(l.context.$implicit)&&e),e},i.Q,i.k)),e.sb(1,49152,null,0,o.I,[e.h,e.k,e.z],{button:[0,"button"]},null),(l()(),e.tb(2,0,null,0,2,"ion-thumbnail",[["item-start",""]],null,null,null,i.ib,i.C)),e.sb(3,49152,null,0,o.Ab,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,0,"img",[["class","cover-img"]],[[8,"src",4]],null,null,null,null)),(l()(),e.tb(5,0,null,0,6,"ion-label",[],null,null,null,i.R,i.l)),e.sb(6,49152,null,0,o.O,[e.h,e.k,e.z],null,null),(l()(),e.tb(7,0,null,0,1,"p",[["class","item-title"]],null,null,null,null,null)),(l()(),e.Lb(8,null,["",""])),(l()(),e.tb(9,0,null,0,2,"p",[["class","item-subtitle"]],null,null,null,null,null)),(l()(),e.Lb(10,null,[""," ",""])),e.Gb(131072,s.i,[s.j,e.h])],function(l,n){l(n,1,0,"")},function(l,n){l(n,4,0,e.xb(1,"",n.context.$implicit.artWork,"")),l(n,8,0,n.context.$implicit.name),l(n,10,0,n.context.$implicit.count,e.Mb(n,10,1,e.Fb(n,11).transform("tab2.tracks")))})}function x(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,6,"ion-toolbar",[],null,null,null,i.lb,i.F)),e.sb(2,49152,null,0,o.Db,[e.h,e.k,e.z],null,null),(l()(),e.tb(3,0,null,0,4,"ion-searchbar",[["id","sb_artist"],["mode","ios"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,t){var r=!0,u=l.component;return"ionBlur"===n&&(r=!1!==e.Fb(l,7)._handleBlurEvent(t.target)&&r),"ionChange"===n&&(r=!1!==e.Fb(l,7)._handleInputEvent(t.target)&&r),"ionChange"===n&&(r=!1!==u.handleSbInput(t)&&r),r},i.Z,i.t)),e.Ib(5120,null,a.g,function(l){return[l]},[o.Pb]),e.sb(5,49152,null,0,o.lb,[e.h,e.k,e.z],{mode:[0,"mode"],placeholder:[1,"placeholder"]},null),e.Gb(131072,s.i,[s.j,e.h]),e.sb(7,16384,null,0,o.Pb,[e.k],null,null),(l()(),e.tb(8,0,null,null,3,"ion-list",[["id","il_artist"],["lines","none"]],null,null,null,i.T,i.m)),e.sb(9,49152,null,0,o.P,[e.h,e.k,e.z],{lines:[0,"lines"]},null),(l()(),e.ib(16777216,null,0,1,null,w)),e.sb(11,278528,null,0,c.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,5,0,"ios",e.xb(1,"",e.Mb(n,5,1,e.Fb(n,6).transform("common.search-placeholder")),"")),l(n,9,0,"none"),l(n,11,0,t.artists)},null)}function F(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,14,"ion-header",[["mode","ios"]],null,null,null,i.N,i.h)),e.sb(1,49152,null,0,o.C,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(l()(),e.tb(2,0,null,0,12,"ion-toolbar",[["class","header-toolbar"],["translucent",""]],null,null,null,i.lb,i.F)),e.sb(3,49152,null,0,o.Db,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,2,"div",[["class","header-title"]],null,null,null,null,null)),(l()(),e.Lb(5,null,["",""])),e.Gb(131072,s.i,[s.j,e.h]),(l()(),e.tb(7,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,i.I,i.c)),e.sb(8,49152,null,0,o.m,[e.h,e.k,e.z],null,null),(l()(),e.tb(9,0,null,0,2,"ion-button",[["color","danger"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.refresh()&&e),e},i.H,i.b)),e.sb(10,49152,null,0,o.l,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(11,0,null,0,0,"img",[["src","assets/svg/refresh.svg"]],null,null,null,null,null)),(l()(),e.tb(12,0,null,0,2,"ion-button",[["color","danger"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.search()&&e),e},i.H,i.b)),e.sb(13,49152,null,0,o.l,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(14,0,null,0,0,"img",[["src","assets/svg/search.svg"]],null,null,null,null,null)),(l()(),e.tb(15,0,null,null,40,"ion-content",[["delegate-handle","scrollerHandle"],["fullscreen",""],["overflow-scroll","false"]],null,null,null,i.L,i.f)),e.sb(16,49152,null,0,o.v,[e.h,e.k,e.z],{fullscreen:[0,"fullscreen"]},null),(l()(),e.tb(17,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,t){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.doRefresh(t)&&e),e},i.X,i.q)),e.sb(18,49152,null,0,o.eb,[e.h,e.k,e.z],null,null),(l()(),e.tb(19,0,null,0,1,"ion-refresher-content",[],null,null,null,i.W,i.r)),e.sb(20,49152,null,0,o.fb,[e.h,e.k,e.z],null,null),(l()(),e.tb(21,0,null,0,26,"div",[["padding",""]],null,null,null,null,null)),e.sb(22,16384,null,0,o.f,[e.k],null,null),(l()(),e.tb(23,0,null,null,24,"ion-segment",[["color","danger"],["mode","ios"],["scrollable",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"keyup"],[null,"ionBlur"]],function(l,n,t){var r=!0,u=l.component;return"ionBlur"===n&&(r=!1!==e.Fb(l,25)._handleBlurEvent(t.target)&&r),"ionChange"===n&&(r=!1!==e.Fb(l,25)._handleChangeEvent(t.target)&&r),"ngModelChange"===n&&(r=!1!==(u.sgLibrary=t)&&r),"ionChange"===n&&(r=!1!==u.segmentChanged(t)&&r),"keyup"===n&&(r=!1!==u.sbKeyup(t)&&r),r},i.bb,i.u)),e.sb(24,49152,null,0,o.mb,[e.h,e.k,e.z],{color:[0,"color"],mode:[1,"mode"],scrollable:[2,"scrollable"]},null),e.sb(25,16384,null,0,o.Ob,[e.k],null,null),e.Ib(1024,null,a.g,function(l){return[l]},[o.Ob]),e.sb(27,671744,null,0,a.l,[[8,null],[8,null],[8,null],[6,a.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,a.h,null,[a.l]),e.sb(29,16384,null,0,a.i,[[4,a.h]],null,null),(l()(),e.tb(30,0,null,0,5,"ion-segment-button",[["checked",""],["layout","icon-start"],["mode","ios"],["value","folder"]],null,null,null,i.ab,i.v)),e.sb(31,49152,null,0,o.nb,[e.h,e.k,e.z],{checked:[0,"checked"],layout:[1,"layout"],mode:[2,"mode"],value:[3,"value"]},null),(l()(),e.tb(32,0,null,0,3,"ion-label",[],null,null,null,i.R,i.l)),e.sb(33,49152,null,0,o.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(34,0,["",""])),e.Gb(131072,s.i,[s.j,e.h]),(l()(),e.tb(36,0,null,0,5,"ion-segment-button",[["layout","icon-start"],["mode","ios"],["value","album"]],null,null,null,i.ab,i.v)),e.sb(37,49152,null,0,o.nb,[e.h,e.k,e.z],{layout:[0,"layout"],mode:[1,"mode"],value:[2,"value"]},null),(l()(),e.tb(38,0,null,0,3,"ion-label",[],null,null,null,i.R,i.l)),e.sb(39,49152,null,0,o.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(40,0,["",""])),e.Gb(131072,s.i,[s.j,e.h]),(l()(),e.tb(42,0,null,0,5,"ion-segment-button",[["layout","icon-start"],["mode","ios"],["value","artist"]],null,null,null,i.ab,i.v)),e.sb(43,49152,null,0,o.nb,[e.h,e.k,e.z],{layout:[0,"layout"],mode:[1,"mode"],value:[2,"value"]},null),(l()(),e.tb(44,0,null,0,3,"ion-label",[],null,null,null,i.R,i.l)),e.sb(45,49152,null,0,o.O,[e.h,e.k,e.z],null,null),(l()(),e.Lb(46,0,["",""])),e.Gb(131072,s.i,[s.j,e.h]),(l()(),e.tb(48,0,null,0,7,"div",[],null,null,null,null,null)),e.sb(49,16384,null,0,c.m,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),e.ib(16777216,null,null,1,null,C)),e.sb(51,278528,null,0,c.n,[e.O,e.L,c.m],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),e.ib(16777216,null,null,1,null,B)),e.sb(53,278528,null,0,c.n,[e.O,e.L,c.m],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),e.ib(16777216,null,null,1,null,x)),e.sb(55,278528,null,0,c.n,[e.O,e.L,c.m],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(l,n){var t=n.component;l(n,1,0,"ios"),l(n,10,0,"danger"),l(n,13,0,"danger"),l(n,16,0,""),l(n,24,0,"danger","ios",""),l(n,27,0,t.sgLibrary),l(n,31,0,"","icon-start","ios","folder"),l(n,37,0,"icon-start","ios","album"),l(n,43,0,"icon-start","ios","artist"),l(n,49,0,t.sgLibrary),l(n,51,0,"folder"),l(n,53,0,"album"),l(n,55,0,"artist")},function(l,n){l(n,5,0,e.Mb(n,5,0,e.Fb(n,6).transform("tab2.header"))),l(n,23,0,e.Fb(n,29).ngClassUntouched,e.Fb(n,29).ngClassTouched,e.Fb(n,29).ngClassPristine,e.Fb(n,29).ngClassDirty,e.Fb(n,29).ngClassValid,e.Fb(n,29).ngClassInvalid,e.Fb(n,29).ngClassPending),l(n,34,0,e.Mb(n,34,0,e.Fb(n,35).transform("tab2.st-folder"))),l(n,40,0,e.Mb(n,40,0,e.Fb(n,41).transform("tab2.st-album"))),l(n,46,0,e.Mb(n,46,0,e.Fb(n,47).transform("tab2.st-artists")))})}function L(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"app-tab2",[],null,null,null,F,y)),e.sb(1,245760,null,0,k,[f.a,d.a,o.Ib,o.Hb,o.Jb],null,null)],function(l,n){l(n,1,0)},null)}var z=e.pb("app-tab2",k,L,{},{},[]),O=t("1YCk");t.d(n,"Tab2PageModuleNgFactory",function(){return U});var U=e.qb(r,[],function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[u.a,z]],[3,e.j],e.x]),e.Db(4608,c.l,c.k,[e.u,[2,c.v]]),e.Db(4608,o.c,o.c,[e.z,e.g]),e.Db(4608,o.Ib,o.Ib,[o.c,e.j,e.q]),e.Db(4608,o.Nb,o.Nb,[o.c,e.j,e.q]),e.Db(4608,a.o,a.o,[]),e.Db(1073742336,c.b,c.b,[]),e.Db(1073742336,o.Fb,o.Fb,[]),e.Db(1073742336,a.n,a.n,[]),e.Db(1073742336,a.d,a.d,[]),e.Db(1073742336,s.g,s.g,[]),e.Db(1073742336,O.n,O.n,[[2,O.s],[2,O.m]]),e.Db(1073742336,r,r,[]),e.Db(1024,O.k,function(){return[[{path:"",component:k}]]},[])])})}}]);