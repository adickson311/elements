(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{iCOC:function(l,n,u){"use strict";u.r(n);var e=u("kZht");class t{}var b=u("tjWy"),o=u("C9Ky"),a=u("1P7/"),c=u("gX7W"),d=u("FxgA");class i{constructor(){}ngOnInit(){}}var r=e.rb({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{display:inline-block;font-weight:700;margin:0 10px 10px 0}mat-card[_ngcontent-%COMP%]{padding:0;margin-bottom:80px;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:15px 20px}table[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{opacity:.8}"]],data:{}});function s(l){return e.Mb(0,[(l()(),e.tb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["API"])),(l()(),e.tb(2,0,null,null,106,"section",[],null,null,null,null,null)),(l()(),e.tb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["LazyElementDirective"])),(l()(),e.tb(5,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Directive"])),(l()(),e.tb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" A structural directive which lazy loads desired Angular element (or any other webcomponent) "])),(l()(),e.tb(10,0,null,null,98,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,a.d,a.a)),e.sb(11,49152,null,0,c.a,[[2,d.a]],null,null),(l()(),e.tb(12,0,null,0,96,"table",[],null,null,null,null,null)),(l()(),e.tb(13,0,null,null,4,"thead",[],null,null,null,null,null)),(l()(),e.tb(14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Property"])),(l()(),e.tb(16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Description"])),(l()(),e.tb(18,0,null,null,90,"tbody",[],null,null,null,null,null)),(l()(),e.tb(19,0,null,null,15,"tr",[],null,null,null,null,null)),(l()(),e.tb(20,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(21,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["selector"])),(l()(),e.tb(23,0,null,null,11,"td",[],null,null,null,null,null)),(l()(),e.tb(24,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" The selector is "])),(l()(),e.tb(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["axLazyElement"])),(l()(),e.Kb(-1,null,[" which should be used with "])),(l()(),e.tb(29,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["*"])),(l()(),e.Kb(-1,null,[" as in "])),(l()(),e.tb(32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["*axLazyElement"])),(l()(),e.Kb(-1,null,[" because it is a structural directive. "])),(l()(),e.tb(35,0,null,null,17,"tr",[],null,null,null,null,null)),(l()(),e.tb(36,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(37,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["@Input('axLazyElement')\nurl: string;"])),(l()(),e.tb(39,0,null,null,13,"td",[],null,null,null,null,null)),(l()(),e.tb(40,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" The url of the element bundle (or module). This is the main property which corresponds to the main directive selector. "])),(l()(),e.tb(42,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),e.tb(43,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Inline string value - "])),(l()(),e.tb(45,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["<some-element *axLazyElement=\"'https://elements.com/some-element'\"></some-element>"])),(l()(),e.tb(47,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Component property reference - "])),(l()(),e.tb(49,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,['<some-element *axLazyElement="url"></some-element>'])),(l()(),e.tb(51,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Pre-configurable"])),(l()(),e.tb(53,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),e.tb(54,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(55,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["@Input('axLazyElementLoadingTemplate')\nloadingTemplateRef: TemplateRef<any>;"])),(l()(),e.tb(57,0,null,null,12,"td",[],null,null,null,null,null)),(l()(),e.tb(58,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Reference to Angular template which will be displayed before the element bundle (or module) was loaded. To show loader we can create following template "])),(l()(),e.tb(60,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["<ng-template #loading>Loading...</ng-template>"])),(l()(),e.Kb(-1,null,[" and then we have to reference it "])),(l()(),e.tb(63,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,['<some-element *axLazyElement="url; loadingTemplate: loading"></some-element>'])),(l()(),e.tb(65,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Optional"])),(l()(),e.Kb(-1,null,["\xa0"])),(l()(),e.tb(68,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Default: undefined"])),(l()(),e.tb(70,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),e.tb(71,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(72,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["@Input('axLazyElementErrorTemplate')\nerrorTemplateRef: TemplateRef<any>;"])),(l()(),e.tb(74,0,null,null,12,"td",[],null,null,null,null,null)),(l()(),e.tb(75,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Reference to Angular template which will be hich will be displayed before the element bundle (or module) loading failed. To show error message we can create following template "])),(l()(),e.tb(77,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["<ng-template #error>Loading failed...</ng-template>"])),(l()(),e.Kb(-1,null,[" and then we have to reference it "])),(l()(),e.tb(80,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,['<some-element *axLazyElement="url; errorTemplate: error"></some-element>'])),(l()(),e.tb(82,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Optional"])),(l()(),e.Kb(-1,null,["\xa0"])),(l()(),e.tb(85,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Default: undefined"])),(l()(),e.tb(87,0,null,null,21,"tr",[],null,null,null,null,null)),(l()(),e.tb(88,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(89,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["@Input('axLazyElementModule')\nisModule: boolean;"])),(l()(),e.tb(91,0,null,null,17,"td",[],null,null,null,null,null)),(l()(),e.tb(92,0,null,null,9,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "])),(l()(),e.tb(94,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["<script>"])),(l()(),e.Kb(-1,null,[" tag which will get "])),(l()(),e.tb(97,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,['type="module"'])),(l()(),e.Kb(-1,null,[" in case this flag was set to true. The flag can be set using "])),(l()(),e.tb(100,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,['<some-element *axLazyElement="url; module: true"></some-element>'])),(l()(),e.tb(102,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Optional"])),(l()(),e.Kb(-1,null,["\xa0"])),(l()(),e.tb(105,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Default: false"])),(l()(),e.tb(107,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Pre-configurable"])),(l()(),e.tb(109,0,null,null,57,"section",[],null,null,null,null,null)),(l()(),e.tb(110,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["LazyElementModule"])),(l()(),e.tb(112,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Module"])),(l()(),e.tb(114,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(115,0,null,null,16,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" An Angular module which exports "])),(l()(),e.tb(117,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["*axLazyElement"])),(l()(),e.Kb(-1,null,[" and "])),(l()(),e.tb(120,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["*axLazyElementDynamic"])),(l()(),e.Kb(-1,null,[" directives so it has to be imported in other Angular modules which want to use these directives in the templates of their components. Module can be also pre-configured using "])),(l()(),e.tb(123,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["forRoot()"])),(l()(),e.Kb(-1,null,[" and "])),(l()(),e.tb(126,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["forFeature()"])),(l()(),e.Kb(-1,null,[" static methods by passing in "])),(l()(),e.tb(129,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["LazyElementModuleOptions"])),(l()(),e.Kb(-1,null,[" object. "])),(l()(),e.tb(132,0,null,null,34,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,a.d,a.a)),e.sb(133,49152,null,0,c.a,[[2,d.a]],null,null),(l()(),e.tb(134,0,null,0,32,"table",[],null,null,null,null,null)),(l()(),e.tb(135,0,null,null,4,"thead",[],null,null,null,null,null)),(l()(),e.tb(136,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Function"])),(l()(),e.tb(138,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Description"])),(l()(),e.tb(140,0,null,null,26,"tbody",[],null,null,null,null,null)),(l()(),e.tb(141,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),e.tb(142,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(143,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["forRoot(options: LazyElementModuleOptions)"])),(l()(),e.tb(145,0,null,null,8,"td",[],null,null,null,null,null)),(l()(),e.tb(146,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" The "])),(l()(),e.tb(148,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["forRoot()"])),(l()(),e.Kb(-1,null,[" static method which accepts options of "])),(l()(),e.tb(151,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["LazyElementModuleOptions"])),(l()(),e.Kb(-1,null,[" type "])),(l()(),e.tb(154,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),e.tb(155,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(156,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["forFeature(options: LazyElementModuleOptions)"])),(l()(),e.tb(158,0,null,null,8,"td",[],null,null,null,null,null)),(l()(),e.tb(159,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" The "])),(l()(),e.tb(161,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["forFeature()"])),(l()(),e.Kb(-1,null,[" static method which accepts options of "])),(l()(),e.tb(164,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["LazyElementModuleOptions"])),(l()(),e.Kb(-1,null,[" type "])),(l()(),e.tb(167,0,null,null,41,"section",[],null,null,null,null,null)),(l()(),e.tb(168,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["LazyElementModuleOptions"])),(l()(),e.tb(170,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Interface"])),(l()(),e.tb(172,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(173,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Type of an option object that can be passed to static "])),(l()(),e.tb(175,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["forRoo()"])),(l()(),e.Kb(-1,null,[" and "])),(l()(),e.tb(178,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["forFeature()"])),(l()(),e.Kb(-1,null,[" methods of "])),(l()(),e.tb(181,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["LazyElementModule"])),(l()(),e.Kb(-1,null,[". "])),(l()(),e.tb(184,0,null,null,24,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,a.d,a.a)),e.sb(185,49152,null,0,c.a,[[2,d.a]],null,null),(l()(),e.tb(186,0,null,0,22,"table",[],null,null,null,null,null)),(l()(),e.tb(187,0,null,null,4,"thead",[],null,null,null,null,null)),(l()(),e.tb(188,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Property"])),(l()(),e.tb(190,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Description"])),(l()(),e.tb(192,0,null,null,16,"tbody",[],null,null,null,null,null)),(l()(),e.tb(193,0,null,null,15,"tr",[],null,null,null,null,null)),(l()(),e.tb(194,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(195,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["elementConfigs: ElementConfig[]"])),(l()(),e.tb(197,0,null,null,11,"td",[],null,null,null,null,null)),(l()(),e.tb(198,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Optional array of "])),(l()(),e.tb(200,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["ElementConfig"])),(l()(),e.Kb(-1,null,["... "])),(l()(),e.tb(203,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(204,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Optional"])),(l()(),e.Kb(-1,null,["\xa0"])),(l()(),e.tb(207,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Default: []"])),(l()(),e.tb(209,0,null,null,63,"section",[],null,null,null,null,null)),(l()(),e.tb(210,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["ElementConfig"])),(l()(),e.tb(212,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Interface"])),(l()(),e.tb(214,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(215,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" The element config used to pre-configure "])),(l()(),e.tb(217,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["LazyElementModule"])),(l()(),e.Kb(-1,null,[" so that we do not have to specify url (and other supported options) inline inside of the "])),(l()(),e.tb(220,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["*axLazyElement"])),(l()(),e.Kb(-1,null,[" and "])),(l()(),e.tb(223,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["*axLazyElementDynamic"])),(l()(),e.Kb(-1,null,[" directives. The configs are matched to particular elements by the tag. The elements are still loaded lazily even though they are preconfigured in the module during application startup... "])),(l()(),e.tb(226,0,null,null,46,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,a.d,a.a)),e.sb(227,49152,null,0,c.a,[[2,d.a]],null,null),(l()(),e.tb(228,0,null,0,44,"table",[],null,null,null,null,null)),(l()(),e.tb(229,0,null,null,4,"thead",[],null,null,null,null,null)),(l()(),e.tb(230,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Property"])),(l()(),e.tb(232,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Description"])),(l()(),e.tb(234,0,null,null,38,"tbody",[],null,null,null,null,null)),(l()(),e.tb(235,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.tb(236,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(237,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["tag: string"])),(l()(),e.tb(239,0,null,null,5,"td",[],null,null,null,null,null)),(l()(),e.tb(240,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Tag of an element (eg: "])),(l()(),e.tb(242,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["some-element"])),(l()(),e.Kb(-1,null,[")"])),(l()(),e.tb(245,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.tb(246,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(247,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["url: string"])),(l()(),e.tb(249,0,null,null,5,"td",[],null,null,null,null,null)),(l()(),e.tb(250,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" The url of an element bundle or ES module (eg: "])),(l()(),e.tb(252,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["https://my-org.com/elements/some-element.js"])),(l()(),e.Kb(-1,null,[") "])),(l()(),e.tb(255,0,null,null,17,"tr",[],null,null,null,null,null)),(l()(),e.tb(256,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(257,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["isModule: boolean"])),(l()(),e.tb(259,0,null,null,13,"td",[],null,null,null,null,null)),(l()(),e.tb(260,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "])),(l()(),e.tb(262,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["<script>"])),(l()(),e.Kb(-1,null,[" tag which will get "])),(l()(),e.tb(265,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,['type="module"'])),(l()(),e.Kb(-1,null,[" in case this flag was set to true. "])),(l()(),e.tb(268,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Optional"])),(l()(),e.Kb(-1,null,["\xa0"])),(l()(),e.tb(271,0,null,null,1,"code",[["color","accent"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Default: undefined"]))],null,function(l,n){l(n,10,0,"NoopAnimations"===e.Eb(n,11)._animationMode),l(n,132,0,"NoopAnimations"===e.Eb(n,133)._animationMode),l(n,184,0,"NoopAnimations"===e.Eb(n,185)._animationMode),l(n,226,0,"NoopAnimations"===e.Eb(n,227)._animationMode)})}function m(l){return e.Mb(0,[(l()(),e.tb(0,0,null,null,1,"demo-api",[],null,null,null,s,r)),e.sb(1,114688,null,0,i,[],null,null)],function(l,n){l(n,1,0)},null)}var p=e.pb("demo-api",i,m,{},{},[]),K=u("An66"),h=u("owzC"),f=u("4rR8"),g=u("W/gs"),y=u("D4FV"),C=u("pOQZ"),w=u("ApNh"),E=u("ENSU"),M=u("a+5/"),L=u("dFIu"),z=u("uWIS"),x=u("SRVW"),O=u("8JnZ"),T=u("9qA3"),v=u("tBgR"),A=u("yy4G"),P=u("6ayG"),_=u("+rfW"),D=u("DiCn"),R=u("Cgd/"),F=u("ifl5"),I=u("PCNd"),N=u("1VvW");class j{}u.d(n,"ApiModuleNgFactory",function(){return W});var W=e.qb(t,[],function(l){return e.Bb([e.Cb(512,e.j,e.bb,[[8,[b.a,b.b,o.a,p]],[3,e.j],e.w]),e.Cb(4608,K.l,K.k,[e.t,[2,K.s]]),e.Cb(135680,h.b,h.b,[e.y,f.a]),e.Cb(4608,g.e,g.e,[e.L]),e.Cb(4608,y.a,y.a,[y.g,y.c,e.j,y.f,y.d,e.q,e.y,K.d,C.b,[2,K.g]]),e.Cb(5120,y.h,y.i,[y.a]),e.Cb(1073742336,K.c,K.c,[]),e.Cb(1073742336,C.a,C.a,[]),e.Cb(1073742336,w.h,w.h,[[2,w.b],[2,E.f]]),e.Cb(1073742336,c.d,c.d,[]),e.Cb(1073742336,M.c,M.c,[]),e.Cb(1073742336,w.i,w.i,[]),e.Cb(1073742336,f.b,f.b,[]),e.Cb(1073742336,w.q,w.q,[]),e.Cb(1073742336,w.o,w.o,[]),e.Cb(1073742336,L.a,L.a,[]),e.Cb(1073742336,z.d,z.d,[]),e.Cb(1073742336,g.c,g.c,[]),e.Cb(1073742336,x.a,x.a,[]),e.Cb(1073742336,O.c,O.c,[]),e.Cb(1073742336,T.b,T.b,[]),e.Cb(1073742336,v.c,v.c,[]),e.Cb(1073742336,A.h,A.h,[]),e.Cb(1073742336,P.b,P.b,[]),e.Cb(1073742336,_.c,_.c,[]),e.Cb(1073742336,D.f,D.f,[]),e.Cb(1073742336,R.d,R.d,[]),e.Cb(1073742336,y.e,y.e,[]),e.Cb(1073742336,F.e,F.e,[]),e.Cb(1073742336,I.a,I.a,[M.d,E.b]),e.Cb(1073742336,N.o,N.o,[[2,N.t],[2,N.k]]),e.Cb(1073742336,j,j,[]),e.Cb(1073742336,t,t,[]),e.Cb(1024,N.i,function(){return[[{path:"",component:i}]]},[])])})}}]);