(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ttvE:function(e,i,c){"use strict";c.r(i),c.d(i,"EpisodesModule",function(){return I});var t=c("ofXK"),s=c("tyNb"),b=c("fXoL"),o=c("sDpk");function r(e,i){if(1&e){const e=b.Kb();b.Jb(0,"button",7),b.Pb("click",function(){b.Xb(e);const c=i.index;return b.Rb().nextEpisodePage(c)}),b.bc(1),b.Ib()}if(2&e){const e=i.$implicit;b.wb(1),b.dc(" page ",e," ")}}function n(e,i){if(1&e){const e=b.Kb();b.Jb(0,"div",8),b.Pb("click",function(){b.Xb(e);const c=i.$implicit;return b.Rb().toEpisode(c.name,c.id)}),b.Jb(1,"div",9),b.Jb(2,"div",10),b.Jb(3,"h1"),b.bc(4),b.Ib(),b.Ib(),b.Jb(5,"div",11),b.Jb(6,"div",12),b.Jb(7,"p"),b.bc(8,"Episode No"),b.Ib(),b.Jb(9,"h4"),b.bc(10),b.Ib(),b.Jb(11,"p"),b.bc(12,"Name"),b.Ib(),b.Jb(13,"h5"),b.bc(14),b.Ib(),b.Jb(15,"p"),b.bc(16,"Season - Episode"),b.Ib(),b.Jb(17,"h5"),b.bc(18),b.Ib(),b.Jb(19,"p"),b.bc(20,"Characters Involved"),b.Ib(),b.Jb(21,"h5"),b.bc(22),b.Ib(),b.Ib(),b.Ib(),b.Ib(),b.Ib()}if(2&e){const e=i.$implicit;b.wb(4),b.cc(e.id),b.wb(6),b.cc(e.id),b.wb(4),b.cc(e.name),b.wb(4),b.cc(e.episode),b.wb(4),b.cc(e.characters.length)}}let a=(()=>{class e{constructor(e,i,c){this.episodesService=e,this.router=i,this.route=c,this.numberArray=["one","two","three"],this.episodesArray=[]}ngOnInit(){this.episodesService.getAllEpisodes().subscribe(e=>{this.episodesArray=e.results})}toEpisode(e,i){const c=i,t=e.replace(/ /g,"");this.router.navigate([t,c],{relativeTo:this.route})}nextEpisodePage(e){this.episodesService.getEpisodesPage(e+1).subscribe(e=>{this.episodesArray=e.results})}}return e.\u0275fac=function(i){return new(i||e)(b.Gb(o.a),b.Gb(s.c),b.Gb(s.a))},e.\u0275cmp=b.Ab({type:e,selectors:[["app-list-episodes"]],decls:7,vars:2,consts:[[1,"container"],[1,"row","pt-4"],["id","pages",1,"col"],["class","btn",3,"click",4,"ngFor","ngForOf"],[1,"container","py-4"],[1,"row"],["class","col-md-6",3,"click",4,"ngFor","ngForOf"],[1,"btn",3,"click"],[1,"col-md-6",3,"click"],[1,"row","episode-box"],[1,"col-md-4","display-number"],[1,"col-md-8"],[1,"episode-details"]],template:function(e,i){1&e&&(b.Jb(0,"div",0),b.Jb(1,"div",1),b.Jb(2,"div",2),b.ac(3,r,2,1,"button",3),b.Ib(),b.Ib(),b.Ib(),b.Jb(4,"div",4),b.Jb(5,"div",5),b.ac(6,n,23,5,"div",6),b.Ib(),b.Ib()),2&e&&(b.wb(3),b.Ub("ngForOf",i.numberArray),b.wb(3),b.Ub("ngForOf",i.episodesArray))},directives:[t.i],styles:[".episode-box[_ngcontent-%COMP%]:hover{background-color:#ff6a00}"]}),e})(),d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=b.Ab({type:e,selectors:[["app-main-episodes"]],decls:2,vars:0,consts:[["id","episodes"]],template:function(e,i){1&e&&(b.Jb(0,"section",0),b.Hb(1,"app-list-episodes"),b.Ib())},directives:[a],styles:["section[_ngcontent-%COMP%]{min-height:1000px}"]}),e})();var p=c("Avux");function l(e,i){if(1&e){const e=b.Kb();b.Jb(0,"div",8),b.Jb(1,"div",9),b.Pb("click",function(){b.Xb(e);const c=i.$implicit;return b.Rb().toCharacter(c.name,c.id)}),b.Jb(2,"div",10),b.Jb(3,"div",11),b.Hb(4,"img",12),b.Ib(),b.Ib(),b.Jb(5,"div",4),b.Jb(6,"div"),b.Jb(7,"p"),b.bc(8,"Name"),b.Ib(),b.Jb(9,"h4"),b.bc(10),b.Ib(),b.Jb(11,"p"),b.bc(12,"Status"),b.Ib(),b.Jb(13,"h5"),b.bc(14),b.Ib(),b.Jb(15,"p"),b.bc(16,"Species"),b.Ib(),b.Jb(17,"h5"),b.bc(18),b.Ib(),b.Ib(),b.Ib(),b.Ib(),b.Ib()}if(2&e){const e=i.$implicit;b.wb(4),b.Vb("src",e.image,b.Yb),b.Vb("alt",e.name),b.wb(6),b.cc(e.name),b.wb(4),b.cc(e.status),b.wb(4),b.ec("",e.species," - ",e.gender,"")}}const h=[{path:"",component:d},{path:":episodeName/:id",component:(()=>{class e{constructor(e,i,c,t){this.route=e,this.episodesService=i,this.characterService=c,this.router=t,this.episode={id:20,name:"Look Who's Purging Now",air_date:"September 27, 2015",episode:"S02E09",characters:["https://rickandmortyapi.com/api/character/1"],url:"https://rickandmortyapi.com/api/episode/20",created:"2017-11-10T12:56:35.772Z"},this.retrievedCharacterArray=[]}ngOnInit(){this.route.params.subscribe(e=>{this.episodeId=e.id}),this.episodesService.getEpisode(this.episodeId).subscribe(e=>{this.episode=e,this.retrieveCharacters(this.episode)})}retrieveCharacters(e){const i=this.episode.characters,c=[];for(let t of i){let e=t,i=e.lastIndexOf("/"),s=e.slice(i+1);c.push(s)}this.characterService.getMultipleCharacters(c).subscribe(e=>{this.retrievedCharacterArray=e})}toCharacter(e,i){const c=e.replace(/ /g,"");this.router.navigate(["characters",c,i])}}return e.\u0275fac=function(i){return new(i||e)(b.Gb(s.a),b.Gb(o.a),b.Gb(p.a),b.Gb(s.c))},e.\u0275cmp=b.Ab({type:e,selectors:[["app-single-episode"]],decls:28,vars:6,consts:[[1,"py-5"],[1,"container"],[1,"row","episode-box"],[1,"col-md-4","display-number"],[1,"col-md-8"],[1,"episode-details"],[1,"row","py-4"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"row","py-4","character-box",3,"click"],[1,"col-md-4"],[1,"image-box"],[1,"img-fluid",3,"src","alt"]],template:function(e,i){1&e&&(b.Jb(0,"section",0),b.Jb(1,"div",1),b.Jb(2,"div",2),b.Jb(3,"div",3),b.Jb(4,"h1"),b.bc(5),b.Ib(),b.Ib(),b.Jb(6,"div",4),b.Jb(7,"div",5),b.Jb(8,"p"),b.bc(9,"Episode No"),b.Ib(),b.Jb(10,"h4"),b.bc(11),b.Ib(),b.Jb(12,"p"),b.bc(13,"Name"),b.Ib(),b.Jb(14,"h5"),b.bc(15),b.Ib(),b.Jb(16,"p"),b.bc(17,"Season - Episode"),b.Ib(),b.Jb(18,"h5"),b.bc(19),b.Ib(),b.Jb(20,"p"),b.bc(21,"Characters Involved"),b.Ib(),b.Jb(22,"h5"),b.bc(23),b.Ib(),b.Ib(),b.Ib(),b.Ib(),b.Ib(),b.Ib(),b.Jb(24,"section"),b.Jb(25,"div",1),b.Jb(26,"div",6),b.ac(27,l,19,6,"div",7),b.Ib(),b.Ib(),b.Ib()),2&e&&(b.wb(5),b.cc(i.episode.id),b.wb(6),b.cc(i.episode.id),b.wb(4),b.cc(i.episode.name),b.wb(4),b.cc(i.episode.episode),b.wb(4),b.cc(i.episode.characters.length),b.wb(4),b.Ub("ngForOf",i.retrievedCharacterArray))},directives:[t.i],styles:["section[_ngcontent-%COMP%]{background-color:#d2691e}.episode-box[_ngcontent-%COMP%]{cursor:default}"]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Eb({type:e}),e.\u0275inj=b.Db({imports:[[s.d.forChild(h)],s.d]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Eb({type:e}),e.\u0275inj=b.Db({imports:[[t.b,u]]}),e})()}}]);