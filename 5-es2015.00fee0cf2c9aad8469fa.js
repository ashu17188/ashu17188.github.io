(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{TDBs:function(e,t,o){"use strict";o.r(t),o.d(t,"DashboardModule",function(){return Pe});var i=o("ofXK"),n=o("3Pt+"),r=o("arFO"),a=o("OFbc"),s=o("tyNb"),c=o("fXoL");function l(e,t){if(1&e&&(c.Wb(0,"th",10),c.Kc(1),c.Vb()),2&e){const e=t.$implicit;c.Db(1),c.Mc(" ",e.value," ")}}function b(e,t){if(1&e&&(c.Ub(0),c.Rb(1,"img",11),c.Tb()),2&e){const e=c.ic().$implicit,t=c.ic().$implicit;c.Db(1),c.oc("src",t[e.imgKey],c.Dc)}}function d(e,t){if(1&e&&(c.Wb(0,"td"),c.Ic(1,b,2,1,"ng-container",6),c.Kc(2),c.Vb()),2&e){const e=t.$implicit,o=c.ic().$implicit;c.Db(1),c.oc("ngIf",null==e?null:e.imgKey),c.Db(1),c.Mc(" ",o[e.key]," ")}}function u(e,t){if(1&e&&(c.Wb(0,"tr"),c.Wb(1,"td"),c.Kc(2),c.Vb(),c.Ic(3,d,3,2,"td",9),c.Vb()),2&e){const e=t.index,o=c.ic(2);c.Db(2),c.Lc(e+1),c.Db(1),c.oc("ngForOf",o.header)}}function h(e,t){if(1&e&&(c.Ub(0),c.Wb(1,"table",7),c.Wb(2,"thead"),c.Wb(3,"tr"),c.Wb(4,"th"),c.Kc(5,"#"),c.Vb(),c.Ic(6,l,2,1,"th",8),c.Vb(),c.Vb(),c.Wb(7,"tbody"),c.Ic(8,u,4,2,"tr",9),c.Vb(),c.Vb(),c.Tb()),2&e){const e=c.ic();c.Db(6),c.oc("ngForOf",e.header),c.Db(2),c.oc("ngForOf",e.data)}}let p=(()=>{class e{constructor(e,t){this.cd=e,this.header=[],this.data=[],this.filter=new n.d("")}ngOnInit(){}ngAfterViewInit(){this.cd.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(c.i),c.Qb(i.e))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-bootstrap-table"]],inputs:{header:"header",data:"data"},features:[c.Cb([i.e])],decls:8,vars:2,consts:[[1,"bt-table"],[1,"form"],[1,"form-group","form-inline"],["type","text",1,"form-control","ml-2",3,"formControl"],[1,"row"],[1,"col-md-12","my-2","px-0"],[4,"ngIf"],[1,"table","table-striped"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],[1,"mr-2",2,"width","20px",3,"src"]],template:function(e,t){1&e&&(c.Wb(0,"section",0),c.Wb(1,"form",1),c.Wb(2,"div",2),c.Kc(3," Full text search: "),c.Rb(4,"input",3),c.Vb(),c.Vb(),c.Wb(5,"div",4),c.Wb(6,"div",5),c.Ic(7,h,9,2,"ng-container",6),c.Vb(),c.Vb(),c.Vb()),2&e&&(c.Db(4),c.oc("formControl",t.filter),c.Db(3),c.oc("ngIf",t.data))},directives:[n.u,n.m,n.n,n.a,n.l,n.e,i.m,i.l],styles:[""]}),e})();var f=o("1kvY"),m=o("mrSG"),g=o("7zfz"),v=o("tk/3");let y=(()=>{class e{constructor(e){this.http=e,this.serverUrl=" https://apiv2.gofile.io/getServer"}getAvailableServer(){return this.http.get(this.serverUrl)}}return e.\u0275fac=function(t){return new(t||e)(c.dc(v.b))},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var w=o("5eHb"),C=o("sZVK"),V=o("NCSE");let W=(()=>{class e{constructor(e,t,o){this.fileuploadService=e,this.toastr=t,this.gblConfigService=o,this.uploadedFiles=[]}ngOnInit(){this.getUrl()}onUpload(e){for(let t of e.files)this.uploadedFiles.push(t)}getUrl(){return Object(m.a)(this,void 0,void 0,function*(){yield this.fileuploadService.getAvailableServer().subscribe(e=>{this.serverUrl=`https://${e.data.server}.gofile.io/uploadFile`})})}onBasicUploadDone(e){this.toastr.success("File uploaded successfully.","Angular Css Website.")}onProgress(e){this.gblConfigService.isNgxLoading=!0}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(y),c.Qb(w.b),c.Qb(C.a))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-primeng-fileupload"]],features:[c.Cb([g.c])],decls:9,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"muc-title"],[1,"col-md-3"],["mode","basic","name","file","accept","image/*","maxFileSize","1000000",3,"url","onUpload","onProgress"]],template:function(e,t){1&e&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Kc(3,"File upload example"),c.Vb(),c.Vb(),c.Vb(),c.Wb(4,"div",0),c.Wb(5,"div",3),c.Wb(6,"h3"),c.Kc(7,"Basic"),c.Vb(),c.Wb(8,"p-fileUpload",4),c.gc("onUpload",function(e){return t.onBasicUploadDone(e)})("onProgress",function(e){return t.onProgress(e)}),c.Vb(),c.Vb(),c.Vb()),2&e&&(c.Db(8),c.pc("url",t.serverUrl))},directives:[V.a],styles:[""]}),e})();var O=o("jIHw"),k=o("/RsI");const D=function(){return{width:"50vw"}},M=function(){return{width:"70vw"}};let P=(()=>{class e{ngOnInit(){}showModalDialog(){this.displayModal=!0}showBasicDialog(){this.displayBasic=!0}showBasicDialog2(){this.displayBasic2=!0}showMaximizableDialog(){this.displayMaximizable=!0}showPositionDialog(e){this.position=e,this.displayPosition=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Kb({type:e,selectors:[["app-primeng-dialog"]],inputs:{displayMaximizableIframe:"displayMaximizableIframe",content:"content"},decls:79,vars:41,consts:[[1,"row"],[1,"col-12"],[1,"muc-title"],[1,"col-md-3"],["type","button","pButton","","icon","pi pi-external-link","label","Show",3,"click"],["type","button","pButton","","icon","pi pi-external-link","label","Long Content",3,"click"],["header","Godfather Casting",3,"visible","baseZIndex","visibleChange"],["type","button","pButton","","icon","pi pi-check","label","Yes",3,"click"],["type","button","pButton","","icon","pi pi-times","label","No",1,"ui-button-secondary",3,"click"],["header","Godfather I",3,"visible","modal","baseZIndex","draggable","resizable","visibleChange"],["header","Godfather I",3,"visible","modal","maximizable","baseZIndex","draggable","resizable","visibleChange"],[1,"col-2"],[1,"col-9"],[1,"col-*"],["type","button","pButton","","icon","pi pi-arrow-right","label","Left",1,"ui-button-warning",3,"click"],["type","button","pButton","","icon","pi pi-arrow-left","label","Right",1,"ui-button-warning",3,"click"],["type","button","pButton","","icon","pi pi-arrow-down","label","TopLeft",1,"ui-button-warning",3,"click"],["type","button","pButton","","icon","pi pi-arrow-down","label","Top",1,"ui-button-warning",3,"click"],["type","button","pButton","","icon","pi pi-arrow-down","label","TopRight",1,"ui-button-warning",3,"click"],["type","button","pButton","","icon","pi pi-arrow-up","label","BottomLeft",1,"ui-button-warning",3,"click"],["type","button","pButton","","icon","pi pi-arrow-up","label","Bottom",1,"ui-button-warning",3,"click"],["type","button","pButton","","icon","pi pi-arrow-up","label","BottomRight",1,"ui-button-warning",3,"click"],["header","Godfather I",3,"visible","position","modal","baseZIndex","draggable","resizable","visibleChange"],["header","Error Modal",3,"visible","modal","maximizable","baseZIndex","draggable","resizable","visibleChange"]],template:function(e,t){1&e&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Kc(3,"Dialog Example"),c.Vb(),c.Vb(),c.Vb(),c.Wb(4,"div",0),c.Wb(5,"div",3),c.Wb(6,"h3"),c.Kc(7,"Basic"),c.Vb(),c.Wb(8,"button",4),c.gc("click",function(){return t.showBasicDialog()}),c.Vb(),c.Vb(),c.Wb(9,"div",3),c.Wb(10,"h3"),c.Kc(11,"Long content modal"),c.Vb(),c.Wb(12,"button",5),c.gc("click",function(){return t.showBasicDialog2()}),c.Vb(),c.Wb(13,"p-dialog",6),c.gc("visibleChange",function(e){return t.displayBasic2=e}),c.Kc(14," Puzo was first to show interest in having Marlon Brando portray Don Vito Corleone by sending a letter to Brando in which he stated Brando was the \"only actor who can play the Godfather.\" Despite Puzo's wishes, the executives at Paramount were against having Brando, partly due to the poor performance of his recent films and also his short temper. Coppola favored Brando or Laurence Olivier for the role, but Olivier's agent refused the role claiming Olivier was sick; however, Olivier went on to star in Sleuth later that year. The studio mainly pushed for Ernest Borgnine to receive the part. Other considerations were George C. Scott, Richard Conte, Anthony Quinn, and Orson Welles. "),c.Rb(15,"br"),c.Rb(16,"br"),c.Kc(17," After months of debate between Coppola and Paramount over Brando, the two finalists for the role were Borgnine and Brando, the latter of whom Paramount president Stanley Jaffe required to perform a screen test. Coppola did not want to offend Brando and stated that he needed to test equipment in order to set up the screen test at Brando's California residence. For make-up, Brando stuck cotton balls in his cheeks, put shoe polish in his hair to darken it, and rolled his collar. Coppola placed Brando's audition tape in the middle of the videos of the audition tapes as the Paramount executives watched them. The executives were impressed with Brando's efforts and allowed Coppola to cast Brando for the role if Brando accepted a lower salary and put up a bond to ensure he would not cause any delays in production. Brando earned $1.6 million from a net participation deal. "),c.Rb(18,"br"),c.Rb(19,"br"),c.Kc(20," From the start of production, Coppola wanted Robert Duvall to play the part of Tom Hagen. After screen testing several other actors, Coppola eventually got his wish and Duvall was awarded the part of Tom Hagen. Al Martino, a then famed singer in nightclubs, was notified of the character Johnny Fontane by a friend who read the eponymous novel and felt Martino represented the character of Johnny Fontane. Martino then contacted producer Albert S. Ruddy, who gave him the part. However, Martino was stripped of the part after Coppola became director and then awarded the role to singer Vic Damone. According to Martino, after being stripped of the role, he went to Russell Bufalino, his godfather and a crime boss, who then orchestrated the publication of various news articles that claimed Coppola was unaware of Ruddy giving Martino the part. Damone eventually dropped the role because he did not want to provoke the mob, in addition to being paid too little. Ultimately, the part of Johnny Fontane was given to Martino. "),c.Rb(21,"br"),c.Rb(22,"br"),c.Kc(23," Robert De Niro originally was given the part of Paulie Gatto. A spot in The Gang That Couldn't Shoot Straight opened up after Al Pacino quit the project in favor of The Godfather, which led De Niro to audition for the role and leave The Godfather after receiving the part. After De Niro quit, Johnny Martino was given the role of Gatto. Coppola cast Diane Keaton for the role of Kay Adams due to her reputation for being eccentric. John Cazale was given the part of Fredo Corleone after Coppola saw him perform in an Off Broadway production. Gianni Russo was given the role of Carlo Rizzi after he was asked to perform a screen test in which he acted out the fight between Rizzi and Connie. "),c.Rb(24,"br"),c.Rb(25,"br"),c.Kc(26," Nearing the start of filming on March 29, Michael Corleone had yet to be cast. Paramount executives wanted a popular actor, either Warren Beatty or Robert Redford. Producer Robert Evans wanted Ryan O'Neal to receive the role in part due to his recent success in Love Story. Pacino was Coppola's favorite for the role as he could picture him roaming the Sicilian countryside, and wanted an unknown actor who looked like an Italian-American. However, Paramount executives found Pacino to be too short to play Michael. Dustin Hoffman, Martin Sheen, and James Caan also auditioned. Caan was well received by the Paramount executives and was given the part of Michael initially, while the role of Sonny Corleone was awarded to Carmine Caridi. Coppola still pushed for Pacino to play Michael after the fact and Evans eventually conceded, allowing Pacino to have the role of Michael as long as Caan played Sonny. Evans preferred Caan over Caridi because Caan was seven inches shorter than Caridi, which was much closer to Pacino's height. Despite agreeing to play Michael Corleone, Pacino was contracted to star in MGM's The Gang That Couldn't Shoot Straight, but the two studios agreed on a settlement and Pacino was signed by Paramount three weeks before shooting began. "),c.Rb(27,"br"),c.Rb(28,"br"),c.Kc(29," Coppola gave several roles in the film to family members. He gave his sister, Talia Shire, the role of Connie Corleone. His daughter Sofia played Michael Francis Rizzi, Connie's and Carlo's newborn son. Carmine Coppola, his father, appeared in the film as an extra playing a piano during a scene. Coppola's wife, mother, and two sons all appeared as extras in the picture. Several smaller roles, like Luca Brasi, were cast after the filming had started. "),c.Rb(30,"br"),c.Rb(31,"br"),c.Wb(32,"p-footer"),c.Wb(33,"button",7),c.gc("click",function(){return t.displayBasic2=!1}),c.Vb(),c.Wb(34,"button",8),c.gc("click",function(){return t.displayBasic2=!1}),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(35,"div",3),c.Wb(36,"h3"),c.Kc(37,"Modal"),c.Vb(),c.Wb(38,"button",4),c.gc("click",function(){return t.showModalDialog()}),c.Vb(),c.Wb(39,"p-dialog",9),c.gc("visibleChange",function(e){return t.displayModal=e}),c.Wb(40,"p"),c.Kc(41,"The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family."),c.Vb(),c.Wb(42,"p-footer"),c.Wb(43,"button",7),c.gc("click",function(){return t.displayModal=!1}),c.Vb(),c.Wb(44,"button",8),c.gc("click",function(){return t.displayModal=!1}),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(45,"div",3),c.Wb(46,"h3"),c.Kc(47,"Maximizable"),c.Vb(),c.Wb(48,"button",4),c.gc("click",function(){return t.showMaximizableDialog()}),c.Vb(),c.Wb(49,"p-dialog",10),c.gc("visibleChange",function(e){return t.displayMaximizable=e}),c.Wb(50,"p"),c.Kc(51,"The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family."),c.Vb(),c.Wb(52,"p-footer"),c.Wb(53,"button",7),c.gc("click",function(){return t.displayMaximizable=!1}),c.Vb(),c.Wb(54,"button",8),c.gc("click",function(){return t.displayMaximizable=!1}),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(55,"div",0),c.Wb(56,"div",11),c.Wb(57,"h3"),c.Kc(58,"Position"),c.Vb(),c.Vb(),c.Wb(59,"div",12),c.Wb(60,"div",13),c.Wb(61,"button",14),c.gc("click",function(){return t.showPositionDialog("left")}),c.Vb(),c.Wb(62,"button",15),c.gc("click",function(){return t.showPositionDialog("right")}),c.Vb(),c.Vb(),c.Wb(63,"div",13),c.Wb(64,"button",16),c.gc("click",function(){return t.showPositionDialog("topleft")}),c.Vb(),c.Wb(65,"button",17),c.gc("click",function(){return t.showPositionDialog("top")}),c.Vb(),c.Wb(66,"button",18),c.gc("click",function(){return t.showPositionDialog("topright")}),c.Vb(),c.Vb(),c.Wb(67,"div",13),c.Wb(68,"button",19),c.gc("click",function(){return t.showPositionDialog("bottomleft")}),c.Vb(),c.Wb(69,"button",20),c.gc("click",function(){return t.showPositionDialog("bottom")}),c.Vb(),c.Wb(70,"button",21),c.gc("click",function(){return t.showPositionDialog("bottomright")}),c.Vb(),c.Vb(),c.Vb(),c.Wb(71,"p-dialog",22),c.gc("visibleChange",function(e){return t.displayPosition=e}),c.Wb(72,"p"),c.Kc(73,"The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family."),c.Vb(),c.Wb(74,"p-footer"),c.Wb(75,"button",7),c.gc("click",function(){return t.displayPosition=!1}),c.Vb(),c.Wb(76,"button",8),c.gc("click",function(){return t.displayPosition=!1}),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(77,"p-dialog",23),c.gc("visibleChange",function(e){return t.displayMaximizableIframe=e}),c.Kc(78),c.Vb()),2&e&&(c.Db(13),c.Fc(c.rc(36,D)),c.oc("visible",t.displayBasic2)("baseZIndex",1e4),c.Db(26),c.Fc(c.rc(37,D)),c.oc("visible",t.displayModal)("modal",!0)("baseZIndex",1e4)("draggable",!1)("resizable",!1),c.Db(10),c.Fc(c.rc(38,D)),c.oc("visible",t.displayMaximizable)("modal",!0)("maximizable",!0)("baseZIndex",1e4)("draggable",!1)("resizable",!1),c.Db(22),c.Fc(c.rc(39,D)),c.oc("visible",t.displayPosition)("position",t.position)("modal",!0)("baseZIndex",1e4)("draggable",!1)("resizable",!1),c.Db(6),c.Fc(c.rc(40,M)),c.oc("visible",t.displayMaximizableIframe)("modal",!0)("maximizable",!0)("baseZIndex",1e4)("draggable",!1)("resizable",!0),c.Db(1),c.Mc(" ",t.content," "))},directives:[O.b,k.a,g.a],styles:["[_nghost-%COMP%]     .ui-button{margin:.5em .5em .5em 0;width:140px}@media screen and (max-width:40em){[_nghost-%COMP%]     .ui-dialog{width:75vw!important}}"]}),e})();var x=o("l7P3"),S=o("3mi4");class K{constructor(){}sort(e){let t=e.length;for(let o=t/2;o>=0;o--)this.sink(e,o,t);for(;t>0;)this.exch(e,0,t-=1),this.sink(e,0,t);console.log(`After heap sort: ${e}`)}sink(e,t,o){for(;2*t<o-1;){let i=2*t;if(i<o&&this.less(e,i,i+1)&&i++,!this.less(e,t,i))break;this.exch(e,t,i),t=i}}exch(e,t,o){let i=e[t];e[t]=e[o],e[o]=i}less(e,t,o){return e[t]<e[o]}}function I(e,t){if(1&e&&(c.Wb(0,"option"),c.Kc(1),c.Vb()),2&e){const e=t.$implicit;c.Db(1),c.Lc(e)}}function T(e,t){1&e&&(c.Wb(0,"div"),c.Kc(1,"Number of tickets is required."),c.Vb())}function R(e,t){if(1&e&&(c.Wb(0,"div",21),c.Ic(1,T,2,0,"div",22),c.Vb()),2&e){const e=c.ic();c.Db(1),c.oc("ngIf",e.f.numberOfTickets.errors.required)}}function F(e,t){1&e&&(c.Wb(0,"div",21),c.Kc(1,"Name is required"),c.Vb())}function B(e,t){1&e&&(c.Wb(0,"div",21),c.Kc(1,"Email is required"),c.Vb())}const A=function(e){return{"is-invalid":e}};function N(e,t){if(1&e&&(c.Wb(0,"div",23),c.Wb(1,"div",24),c.Wb(2,"h5",25),c.Kc(3),c.Vb(),c.Wb(4,"form",26),c.Wb(5,"div",27),c.Wb(6,"label",28),c.Kc(7,"Name"),c.Vb(),c.Rb(8,"input",29),c.Ic(9,F,2,0,"div",16),c.Vb(),c.Wb(10,"div",27),c.Wb(11,"label",28),c.Kc(12,"Email"),c.Vb(),c.Rb(13,"input",30),c.Ic(14,B,2,0,"div",16),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&e){const e=t.$implicit,o=t.index,i=c.ic();c.Db(3),c.Mc("Ticket ",o+1,""),c.Db(1),c.oc("formGroup",e),c.Db(4),c.oc("ngClass",c.sc(6,A,i.submitted&&e.controls.name.errors)),c.Db(1),c.oc("ngIf",null==e.controls.name.errors?null:e.controls.name.errors.required),c.Db(4),c.oc("ngClass",c.sc(8,A,i.submitted&&e.controls.email.errors)),c.Db(1),c.oc("ngIf",null==e.controls.email.errors?null:e.controls.email.errors.required)}}const z=function(){return[1,2,3,4,5,6,7,8,9,10]};let j=(()=>{class e{constructor(e,t){this.store=e,this.formBuilder=t,this.submitted=!1,this.formStringValue="",this.count$=this.store.pipe(Object(x.f)("count"))}ngOnInit(){this.dynamicForm=this.formBuilder.group({numberOfTickets:["",n.s.required],tickets:new n.b([])})}get f(){return this.dynamicForm.controls}get t(){return this.f.tickets}onChangeTickets(e){const t=e.target.value||0;if(this.t.length<t)for(let o=this.t.length;o<t;o++)this.t.push(this.formBuilder.group({name:["",n.s.required],email:["",[n.s.required,n.s.email]]}));else for(let o=this.t.length;o>=t;o--)this.t.removeAt(o)}onSubmit(){this.submitted=!0,this.dynamicForm.invalid||(this.formStringValue=JSON.stringify(this.dynamicForm.value),console.log(JSON.stringify(this.dynamicForm.value)))}onReset(){this.submitted=!1,this.dynamicForm.reset(),this.t.clear()}onClear(){this.submitted=!1,this.t.reset()}increment(){this.store.dispatch(Object(S.b)())}decrement(){this.store.dispatch(Object(S.a)())}reset(){this.store.dispatch(Object(S.c)())}cp(){(new K).sort([4,6,5,3,2,9])}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(x.a),c.Qb(n.c))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-counter"]],decls:35,vars:11,consts:[[1,"row"],[1,"col-md-12"],[1,"count-value"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-info",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],[1,"col-12","mt-5"],[3,"formGroup","ngSubmit"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"form-row"],["for",""],["formControlName","numberOfTickets",1,"form-control",3,"ngClass","change"],["value",""],[4,"ngFor","ngForOf"],["class","invalid-feedback",4,"ngIf"],["class","list-group list-group-flush",4,"ngFor","ngForOf"],[1,"card-footer","text-center"],[1,"btn","btn-primary","mr-1"],["type","reset",1,"btn","btn-secondary","mr-1",3,"click"],[1,"invalid-feedback"],[4,"ngIf"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"card-title"],[1,"form-row",3,"formGroup"],[1,"form-group","col-6"],["for","name"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],["type","text","formControlName","email",1,"form-control",3,"ngClass"]],template:function(e,t){1&e&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Kc(3),c.jc(4,"async"),c.Vb(),c.Wb(5,"button",3),c.gc("click",function(){return t.increment()}),c.Kc(6,"Increment"),c.Vb(),c.Wb(7,"button",4),c.gc("click",function(){return t.decrement()}),c.Kc(8,"Decrement"),c.Vb(),c.Wb(9,"button",5),c.gc("click",function(){return t.reset()}),c.Kc(10,"Reset"),c.Vb(),c.Vb(),c.Vb(),c.Wb(11,"div",0),c.Wb(12,"div",6),c.Wb(13,"form",7),c.gc("ngSubmit",function(){return t.onSubmit()}),c.Wb(14,"div",8),c.Wb(15,"div",9),c.Kc(16,"Dynamic reactive form validation"),c.Vb(),c.Wb(17,"div",10),c.Wb(18,"div",11),c.Wb(19,"label",12),c.Kc(20,"Number of tickets"),c.Vb(),c.Wb(21,"select",13),c.gc("change",function(e){return t.onChangeTickets(e)}),c.Rb(22,"option",14),c.Ic(23,I,2,1,"option",15),c.Vb(),c.Ic(24,R,2,1,"div",16),c.Vb(),c.Vb(),c.Ic(25,N,15,10,"div",17),c.Wb(26,"div",18),c.Wb(27,"button",19),c.Kc(28,"Buy Tickets"),c.Vb(),c.Wb(29,"button",20),c.gc("click",function(){return t.onReset()}),c.Kc(30,"Reset Tickets"),c.Vb(),c.Wb(31,"button",4),c.gc("click",function(){return t.onClear()}),c.Kc(32,"Clear Tickets"),c.Vb(),c.Wb(33,"button",5),c.gc("click",function(){return t.cp()}),c.Kc(34,"Test CP"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&e&&(c.Db(3),c.Lc(c.kc(4,6,t.count$)),c.Db(10),c.oc("formGroup",t.dynamicForm),c.Db(8),c.oc("ngClass",c.sc(8,A,t.submitted&&t.f.numberOfTickets.errors)),c.Db(2),c.oc("ngForOf",c.rc(10,z)),c.Db(1),c.oc("ngIf",t.submitted&&t.f.numberOfTickets.errors),c.Db(1),c.oc("ngForOf",t.t.controls))},directives:[n.u,n.m,n.h,n.r,n.l,n.f,i.k,n.p,n.t,i.l,i.m,n.a],pipes:[i.b],styles:[""]}),e})();var $=o("vkgz"),L=o("UXun"),_=o("XNiG"),Q=o("zx2A");class U{constructor(e,t){this.notifier=e,this.source=t}call(e,t){return t.subscribe(new G(e,this.notifier,this.source))}}class G extends Q.b{constructor(e,t,o){super(e),this.notifier=t,this.source=o}error(e){if(!this.isStopped){let o=this.errors,i=this.retries,n=this.retriesSubscription;if(i)this.errors=void 0,this.retriesSubscription=void 0;else{o=new _.a;try{const{notifier:e}=this;i=e(o)}catch(t){return super.error(t)}n=Object(Q.c)(i,new Q.a(this))}this._unsubscribeAndRecycle(),this.errors=o,this.retries=i,this.retriesSubscription=n,o.next(e)}}_unsubscribe(){const{errors:e,retriesSubscription:t}=this;e&&(e.unsubscribe(),this.errors=void 0),t&&(t.unsubscribe(),this.retriesSubscription=void 0),this.retries=void 0}notifyNext(){const{_unsubscribe:e}=this;this._unsubscribe=null,this._unsubscribeAndRecycle(),this._unsubscribe=e,this.source.subscribe(this)}}var q=o("bOdf"),H=o("3E0/"),E=o("JIr8"),J=o("z6cu"),Z=o("LRne"),X=o("rEr+");function Y(e,t){if(1&e&&(c.Wb(0,"th"),c.Kc(1),c.Vb()),2&e){const e=t.$implicit;c.Db(1),c.Lc(e.value)}}function ee(e,t){if(1&e&&(c.Wb(0,"tr"),c.Ic(1,Y,2,1,"th",10),c.Vb()),2&e){const e=c.ic();c.Db(1),c.oc("ngForOf",e.headers)}}function te(e,t){if(1&e&&(c.Wb(0,"td"),c.Kc(1),c.Vb()),2&e){const e=t.$implicit,o=c.ic().$implicit,i=c.ic();c.Db(1),c.Lc(i.getPropByString(o,e.key))}}function oe(e,t){if(1&e&&(c.Wb(0,"tr"),c.Ic(1,te,2,1,"td",10),c.Vb()),2&e){const e=c.ic();c.Db(1),c.oc("ngForOf",e.headers)}}function ie(e,t){1&e&&c.Rb(0,"p-button",11)}function ne(e,t){1&e&&c.Rb(0,"p-button",12)}const re=function(){return[10,25,50]};let ae=(()=>{class e{constructor(){this.headers=[]}ngOnInit(){}getPropByString(e,t){if(!t)return e;let o,i=t.split("."),n=0;for(let a=i.length-1;n<a;n++){o=i[n];var r=e[o];if(void 0===r)break;e=r}return e[i[n]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Kb({type:e,selectors:[["app-primeng-table"]],inputs:{headers:"headers",items:"items"},decls:13,vars:6,consts:[[1,"row"],[1,"col-12"],[1,"muc-title"],[1,"card"],[1,"card-header"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],["pTemplate","paginatorright"],[4,"ngFor","ngForOf"],["type","button","icon","pi pi-plus","styleClass","p-button-text"],["type","button","icon","pi pi-cloud","styleClass","p-button-text"]],template:function(e,t){1&e&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Kc(3,"PrimeNg Table example"),c.Vb(),c.Vb(),c.Vb(),c.Wb(4,"div",3),c.Wb(5,"div",4),c.Wb(6,"h5"),c.Kc(7,"Just configure header, table will be auto populated from given data. Nested properties support. "),c.Vb(),c.Vb(),c.Wb(8,"p-table",5),c.Ic(9,ee,2,1,"ng-template",6),c.Ic(10,oe,2,1,"ng-template",7),c.Ic(11,ie,1,0,"ng-template",8),c.Ic(12,ne,1,0,"ng-template",9),c.Vb(),c.Vb()),2&e&&(c.Db(8),c.oc("value",t.items)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",c.rc(5,re)))},directives:[X.a,g.d,i.l],styles:[""]}),e})(),se=(()=>{class e{constructor(e){this.http=e,this.corsHeaders=new v.f({"X-Content-Type-Options":"nonsniff","content-type":"application/json",Accept:"application/json","Access-Control-Allow-Methods":"GET,PUT,OPTIONS","Access-Control-Allow-Headers":"Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent","Access-Control-Allow-Origin":"http://localhost:4200"})}getCountries(){return new v.d({status:500,statusText:"Required api is not available"}),Object(J.a)(e=>v.d)}}return e.\u0275fac=function(t){return new(t||e)(c.dc(v.b))},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ce=(()=>{class e{constructor(){}eventEmitter(e,t,o=null,i=null){ga("send","event",{eventCategory:e,eventLabel:o,eventAction:t,eventValue:i})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),le=(()=>{class e{constructor(e){this.http=e}getCustomersSmall(){return this.http.get("assets/showcase/data/customers-small.json").toPromise().then(e=>e.data).then(e=>e)}getCustomersMedium(){return this.http.get("assets/showcase/data/customers-medium.json").toPromise().then(e=>e.data).then(e=>e)}getCustomersLarge(){return this.http.get("assets/showcase/data/customers-large.json").toPromise().then(e=>e.data).then(e=>e)}getCustomersXLarge(){return this.http.get("assets/showcase/data/customers-xlarge.json").toPromise().then(e=>e.data).then(e=>e)}}return e.\u0275fac=function(t){return new(t||e)(c.dc(v.b))},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var be=o("S/Aq");let de=(()=>{class e{constructor(e){this.firestore=e}createCoffeeOrder(e){return new Promise((t,o)=>{this.firestore.collection("coffeeOrders").add(e).then(e=>{},e=>o(e))})}updateCoffeeOrder(e){return this.firestore.collection("coffeeOrders").doc(e.payload.doc.id).set({completed:!0},{merge:!0})}getCoffeeOrders(){return this.firestore.collection("coffeeOrders").snapshotChanges()}deleteCoffeeOrder(e){return this.firestore.collection("coffeeOrders").doc(e.payload.doc.id).delete()}}return e.\u0275fac=function(t){return new(t||e)(c.dc(be.a))},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function ue(e,t){if(1&e){const e=c.Xb();c.Wb(0,"button",7),c.gc("click",function(){const t=c.Bc(e).$implicit;return c.ic().addCoffee(t)}),c.Kc(1),c.Vb()}if(2&e){const e=t.$implicit;c.Db(1),c.Mc(" ",e," ")}}function he(e,t){if(1&e){const e=c.Xb();c.Wb(0,"li"),c.Wb(1,"span",8),c.Kc(2),c.Wb(3,"a",9),c.gc("click",function(){const t=c.Bc(e).$implicit;return c.ic().removeCoffee(t)}),c.Kc(4,"x"),c.Vb(),c.Vb(),c.Vb()}if(2&e){const e=t.$implicit;c.Db(2),c.Mc(" ",e," ")}}let pe=(()=>{class e{constructor(e){this.ordersService=e,this.form=new n.g({customerName:new n.d("",n.s.required),orderNumber:new n.d(""),coffeeOrder:new n.d(""),completed:new n.d(!1),createdOn:new n.d(new Date),updatedOn:new n.d(new Date)}),this.coffees=["Americano","Flat White","Cappuccino","Latte","Espresso","Machiato","Mocha","Hot Chocolate","Tea"],this.coffeeOrder=[],this.addCoffee=e=>this.coffeeOrder.push(e),this.removeCoffee=e=>{let t=this.coffeeOrder.indexOf(e);t>-1&&this.coffeeOrder.splice(t,1)}}ngOnInit(){}onSubmit(){this.form.value.coffeeOrder=this.coffeeOrder,this.ordersService.createCoffeeOrder(this.form.value).then(e=>{})}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(de))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-orders"]],decls:10,vars:3,consts:[[3,"formGroup"],[1,"form-group"],["placeholder","Customer Name","formControlName","customerName","type","text",1,"form-control"],["class","btn btn-primary m-2",3,"click",4,"ngFor","ngForOf"],[1,""],[4,"ngFor","ngForOf"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-primary","m-2",3,"click"],[1,"badge","badge-success","m-2"],[1,"btn",3,"click"]],template:function(e,t){1&e&&(c.Wb(0,"h5"),c.Kc(1,"Coffee Order:"),c.Vb(),c.Wb(2,"form",0),c.Wb(3,"div",1),c.Rb(4,"input",2),c.Vb(),c.Ic(5,ue,2,1,"button",3),c.Wb(6,"ul",4),c.Ic(7,he,5,1,"li",5),c.Vb(),c.Wb(8,"button",6),c.gc("click",function(){return t.onSubmit()}),c.Kc(9," Submit "),c.Vb(),c.Vb()),2&e&&(c.Db(2),c.oc("formGroup",t.form),c.Db(3),c.oc("ngForOf",t.coffees),c.Db(2),c.oc("ngForOf",t.coffeeOrder))},directives:[n.u,n.m,n.h,n.a,n.l,n.f,i.l],styles:["form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline}"]}),e})();function fe(e,t){if(1&e&&(c.Wb(0,"span"),c.Kc(1),c.Vb()),2&e){const e=t.$implicit;c.Db(1),c.Mc(" ",e," ")}}function me(e,t){if(1&e){const e=c.Xb();c.Wb(0,"tr"),c.Wb(1,"td"),c.Kc(2),c.Vb(),c.Wb(3,"td"),c.Kc(4),c.Vb(),c.Wb(5,"td"),c.Ic(6,fe,2,1,"span",2),c.Vb(),c.Wb(7,"td"),c.Wb(8,"i",3),c.gc("click",function(){const t=c.Bc(e).$implicit;return c.ic().markCompleted(t)}),c.Vb(),c.Wb(9,"button",4),c.gc("click",function(){const t=c.Bc(e).$implicit;return c.ic().deleteOrder(t)}),c.Kc(10,"Delete"),c.Vb(),c.Vb(),c.Vb()}if(2&e){const e=t.$implicit;c.Db(2),c.Mc(" ",e.payload.doc.data().orderNumber," "),c.Db(2),c.Lc(e.payload.doc.data().customerName),c.Db(2),c.oc("ngForOf",e.payload.doc.data().coffeeOrder),c.Db(2),c.oc("hidden",e.payload.doc.data().completed),c.Db(1),c.oc("hidden",e.payload.doc.data().completed)}}let ge=(()=>{class e{constructor(e){this.ordersService=e,this.getCoffeeOrders=()=>this.ordersService.getCoffeeOrders().subscribe(e=>this.coffeeOrders=e),this.deleteOrder=e=>this.ordersService.deleteCoffeeOrder(e),this.markCompleted=e=>this.ordersService.updateCoffeeOrder(e)}ngOnInit(){this.getCoffeeOrders()}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(de))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-order-list"]],decls:13,vars:1,consts:[[1,"table","table-striped"],[1,"thead-dark"],[4,"ngFor","ngForOf"],[1,"fa","fa-check","text-success","fa-2x",3,"hidden","click"],["type","button",1,"btn","btn-danger",3,"hidden","click"]],template:function(e,t){1&e&&(c.Wb(0,"table",0),c.Wb(1,"thead",1),c.Wb(2,"tr"),c.Wb(3,"th"),c.Kc(4,"Order No."),c.Vb(),c.Wb(5,"th"),c.Kc(6,"Customer Name"),c.Vb(),c.Wb(7,"th"),c.Kc(8,"Coffee Name"),c.Vb(),c.Wb(9,"th"),c.Kc(10,"Action"),c.Vb(),c.Vb(),c.Vb(),c.Wb(11,"tbody"),c.Ic(12,me,11,5,"tr",2),c.Vb(),c.Vb()),2&e&&(c.Db(12),c.oc("ngForOf",t.coffeeOrders))},directives:[i.l],styles:["#coffee-list[_ngcontent-%COMP%]{margin:0 .5rem;padding:.3rem}"]}),e})();const ve=["btTable"],ye=["pgFileUpload"],we=["pgDialog"],Ce=["customCounter"],Ve=["pgTable"];let We=(()=>{class e{constructor(e,t,o,i,n,r,a,c,l){this.countryService=e,this.injector=t,this.resolver=o,this.loader=i,this.compiler=n,this.configService=r,this.router=a,this.googleAnalyticsService=c,this.customerService=l,this.imageUrl="",this.reconnectionAttempt=0,this.router.events.subscribe(e=>{e instanceof s.a&&(ga("set","page",e.urlAfterRedirects),ga("send","pageview"))})}ngOnInit(){this.configService.load(f.a.PRACTICE_JSON),setTimeout(e=>{this.pgFileUpload.clear();const t=this.resolver.resolveComponentFactory(W);this.pgFileUpload.createComponent(t),this.pgDialog.clear();const o=this.resolver.resolveComponentFactory(P);this.dialogComponentRef=this.pgDialog.createComponent(o),this.customCounter.clear();const i=this.resolver.resolveComponentFactory(j);this.customCounter.createComponent(i),this.getCustomerData()}),this.cities1=[{label:"Select City",value:null},{label:"New York",value:{id:1,name:"New York",code:"NY"}},{label:"Rome",value:{id:2,name:"Rome",code:"RM"}},{label:"London",value:{id:3,name:"London",code:"LDN"}},{label:"Istanbul",value:{id:4,name:"Istanbul",code:"IST"}},{label:"Paris",value:{id:5,name:"Paris",code:"PRS"}}]}get styles(){return{"width.px":50,fill:"blue","padding.px":1,"margin.px":5}}getCountries(e){var t;e.length<2||(this.googleAnalyticsService.eventEmitter("Api call","Feching countries","getCountries()",1),this.googleAnalyticsService.eventEmitter("testCategory","testAction","testLabel",10),this.countryService.getCountries().pipe(Object($.a)(()=>{console.log("HTTP request executed")}),Object(L.a)(),(t=e=>e.pipe(Object(q.a)((e,t)=>{if(t>=3)return Object(J.a)(Object.assign(Object.assign({},e),{retries:3}));let o=0;return 0===t?o=1e3:1===t?o=2e3:2===t&&(o=3e3),Object(Z.a)(e).pipe(Object($.a)(()=>{console.log(`Retry attempt ${t+1}, delay: ${o}`),this.dialogComponentRef.instance.content=`Retry attempt ${t+1}, delay: ${o}`,this.dialogComponentRef.instance.displayMaximizableIframe=!0,console.log()}),Object(H.a)(o))})),e=>e.lift(new U(t,e))),Object(E.a)(e=>(this.dialogComponentRef.instance.content="Retry attempt completed",console.log(`error after retries: ${e}`),Object(Z.a)([])))).subscribe(t=>{this.countrylist=t.filter(t=>-1!==t.name.toLowerCase().indexOf(e.toLowerCase())),console.log(this.countrylist),this.createBootstrapTableComponent(this.countrylist)},e=>{console.log(`Error occurred in api call: ${e}`)}))}createBootstrapTableComponent(e){this.btTable.clear();const t=this.resolver.resolveComponentFactory(p),o=this.btTable.createComponent(t);o.instance.data=e,o.instance.header=this.configService.getConfigData().header,console.log()}getCustomerData(){this.customerService.getCustomersMedium().then(e=>{this.createPrimeNgTableComponent(this.configService.getConfigData().customerHeader,e)})}createPrimeNgTableComponent(e,t){this.pgTable.clear();const o=this.resolver.resolveComponentFactory(ae),i=this.pgTable.createComponent(o);i.instance.headers=e,i.instance.items=t}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(se),c.Qb(c.u),c.Qb(c.k),c.Qb(c.A),c.Qb(c.j),c.Qb(C.a),c.Qb(s.b),c.Qb(ce),c.Qb(le))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-practice"]],viewQuery:function(e,t){if(1&e&&(c.Oc(ve,1,c.S),c.Oc(ye,1,c.S),c.Oc(we,1,c.S),c.Oc(Ce,1,c.S),c.Oc(Ve,1,c.S)),2&e){let e;c.yc(e=c.hc())&&(t.btTable=e.first),c.yc(e=c.hc())&&(t.pgFileUpload=e.first),c.yc(e=c.hc())&&(t.pgDialog=e.first),c.yc(e=c.hc())&&(t.customCounter=e.first),c.yc(e=c.hc())&&(t.pgTable=e.first)}},decls:45,vars:1,consts:[[1,"mu-practice-section"],[1,"container-fluid"],[1,"row"],[1,"mu-practice-area"],["customCounter",""],["pgFileUpload",""],["pgDialog",""],["pgTable",""],[1,"col-md-12"],[1,"col-md-6"],[1,"mu-practice-single"],["for",""],["type","text","placeholder","Search country",1,"col-7","col-md-8","form-control",3,"ngModel","ngModelChange","keyup.enter"],["type","submit",1,"btn","btn-info","m-2","mx-md-2","my-md-0",3,"click"],["btTable",""]],template:function(e,t){1&e&&(c.Wb(0,"section",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Wb(3,"div",3),c.Wb(4,"template",null,4),c.Kc(6,"\n        "),c.Vb(),c.Vb(),c.Vb(),c.Wb(7,"div",2),c.Wb(8,"div",3),c.Wb(9,"template",null,5),c.Kc(11,"\n        "),c.Vb(),c.Vb(),c.Vb(),c.Wb(12,"div",2),c.Wb(13,"div",3),c.Wb(14,"template",null,6),c.Kc(16,"\n      "),c.Vb(),c.Vb(),c.Vb(),c.Wb(17,"div",2),c.Wb(18,"div",3),c.Wb(19,"template",null,7),c.Kc(21,"\n      "),c.Vb(),c.Vb(),c.Vb(),c.Wb(22,"div",2),c.Wb(23,"div",3),c.Wb(24,"div",8),c.Wb(25,"div",2),c.Wb(26,"div",9),c.Wb(27,"div",10),c.Rb(28,"app-orders"),c.Rb(29,"app-order-list"),c.Vb(),c.Vb(),c.Wb(30,"div",9),c.Wb(31,"div",10),c.Wb(32,"div",2),c.Wb(33,"div",8),c.Wb(34,"label",11),c.Kc(35,"Dynamic component example"),c.Vb(),c.Vb(),c.Wb(36,"input",12),c.gc("ngModelChange",function(e){return t.searchCntry=e})("keyup.enter",function(){return t.getCountries(t.searchCntry)}),c.Vb(),c.Wb(37,"button",13),c.gc("click",function(){return t.getCountries(t.searchCntry)}),c.Kc(38,"Search country"),c.Vb(),c.Vb(),c.Wb(39,"template",null,14),c.Kc(41,"\n                "),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(42,"div",2),c.Wb(43,"div",8),c.Rb(44,"app-user"),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&e&&(c.Db(36),c.oc("ngModel",t.searchCntry))},directives:[pe,ge,n.a,n.l,n.o],styles:[".primeng-area[_ngcontent-%COMP%]   .email-svg[_ngcontent-%COMP%]{color:#00f;width:1.5rem;height:1rem}.mu-practice-section[_ngcontent-%COMP%]   .mu-practice-area[_ngcontent-%COMP%]{width:100%;background:#f8f9fa;margin:1rem;padding:10px;border-radius:5px}.mu-practice-section[_ngcontent-%COMP%]   .mu-practice-area[_ngcontent-%COMP%]   .mu-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}"]}),e})();const Oe=["cHeader"],ke=[{path:"",component:(()=>{class e{constructor(e,t,o){this.formBuilder=e,this.resolver=t,this.router=o,this.title="angular_tutorial",this.submitted=!1,this.sayHello=!0,this.showSidebar=!1,this.loginForm=this.formBuilder.group({email:["",[n.s.required,n.s.email]],password:["",n.s.required]}),this.router.events.subscribe(e=>{e instanceof s.a&&(ga("set","page",e.urlAfterRedirects),ga("send","pageview"))})}ngAfterViewInit(){}ngOnInit(){this.bodyText="This text can be updated in modal 1"}onSubmit(){this.submitted=!0,console.log("Values after sorting : ")}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(n.c),c.Qb(c.k),c.Qb(s.b))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-dashboard"]],viewQuery:function(e,t){if(1&e&&c.Oc(Oe,1,c.S),2&e){let e;c.yc(e=c.hc())&&(t.cHeader=e.first)}},decls:2,vars:0,template:function(e,t){1&e&&(c.Rb(0,"app-practice"),c.Rb(1,"app-uploader"))},directives:[We],styles:[""]}),e})()}];let De=(()=>{class e{}return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(t){return new(t||e)},imports:[[s.d.forChild(ke)],s.d]}),e})();var Me=o("VuPx");let Pe=(()=>{class e{}return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(t){return new(t||e)},imports:[[i.c,De,n.i,n.q,r.b,a.a.forRoot(),Me.a]]}),e})()}}]);