(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{d2Dx:function(l,n,u){"use strict";u.r(n);var e=u("kZht");class t{}var i=u("C9Ky");class s{constructor(){}ngOnInit(){}}var o=e.rb({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]],data:{}});function a(l){return e.Mb(0,[(l()(),e.tb(0,0,null,null,100,"div",[["class","wrapper"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Use cases"])),(l()(),e.tb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Let's explore some of the use cases which can be solved using this library... "])),(l()(),e.tb(5,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,['Microfrontends style "sub-applications"'])),(l()(),e.tb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Imagine a large enterprise organization building many standalone frontend applications which look exactly the same but handle only single aspect of business requirements. A user will seamlessly switch between apps using standard HTML hyperlinks without noticing anything special. From users perspective it behaves as a single application with lots of features. "])),(l()(),e.tb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[' Let\'s say many of these application will share some piece of functionality, for example a "case widget" which will let employees know what they should be working on. '])),(l()(),e.tb(11,0,null,null,1,"blockquote",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" This kind of widget will be pretty isolated in terms of its model (data) and its sharing with the rest of application. Application will most likely just pass in some context and react to widget events... "])),(l()(),e.tb(13,0,null,null,13,":svg:svg",[["viewBox","0 0 555 340"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),e.tb(14,0,null,null,3,":svg:g",[],null,null,null,null,null)),(l()(),e.tb(15,0,null,null,0,":svg:rect",[["fill","none"],["height","342"],["id","canvas_background"],["width","557"],["x","-1"],["y","-1"]],null,null,null,null,null)),(l()(),e.tb(16,0,null,null,1,":svg:g",[["display","none"],["height","100%"],["id","canvasGrid"],["overflow","visible"],["width","100%"],["x","0"],["y","0"]],null,null,null,null,null)),(l()(),e.tb(17,0,null,null,0,":svg:rect",[["fill","url(#gridpattern)"],["height","100%"],["stroke-width","0"],["width","100%"],["x","0"],["y","0"]],null,null,null,null,null)),(l()(),e.tb(18,0,null,null,8,":svg:g",[],null,null,null,null,null)),(l()(),e.tb(19,0,null,null,0,":svg:rect",[["fill","#999999"],["height","276"],["id","svg_5"],["stroke-width","2"],["width","483"],["x","48.5"],["y","39.0375"]],null,null,null,null,null)),(l()(),e.tb(20,0,null,null,0,":svg:rect",[["fill","#b2b2b2"],["height","276"],["id","svg_4"],["stroke-width","2"],["width","483"],["x","39.5"],["y","30.0375"]],null,null,null,null,null)),(l()(),e.tb(21,0,null,null,0,":svg:rect",[["fill","#cccccc"],["height","276"],["id","svg_3"],["stroke-width","2"],["width","483"],["x","29.5"],["y","21.0375"]],null,null,null,null,null)),(l()(),e.tb(22,0,null,null,0,":svg:rect",[["fill","#ffffff"],["height","60"],["id","svg_6"],["stroke","null"],["stroke-opacity","null"],["stroke-width","2"],["width","449"],["x","46.5"],["y","38.0375"]],null,null,null,null,null)),(l()(),e.tb(23,0,null,null,0,":svg:rect",[["fill","#ffffff"],["height","163.999991"],["id","svg_7"],["stroke","null"],["stroke-opacity","null"],["stroke-width","2"],["width","340.000019"],["x","47.5"],["y","116.0375"]],null,null,null,null,null)),(l()(),e.tb(24,0,null,null,0,":svg:rect",[["fill","#ffffff"],["fill-opacity","null"],["height","154.999995"],["id","svg_8"],["stroke","#ce2f2f"],["stroke-width","9"],["width","80.999998"],["x","409.500002"],["y","121.037495"]],null,null,null,null,null)),(l()(),e.tb(25,0,null,null,1,":svg:text",[[":xml:space","preserve"],["fill","#d32f2f"],["font-family","'Courier New', Courier, monospace"],["font-size","15"],["font-weight","bold"],["id","svg_9"],["stroke","null"],["stroke-opacity","null"],["stroke-width","0"],["text-anchor","start"],["x","409"],["y","201.0375"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" element "])),(l()(),e.tb(27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" In real life scenario, many of these applications will be developed by independent teams and have independent release cycles. This means that if we implement our widget as standard Angular library and released a new version (for example 3.1.0) we would have to wait for new releases (and deployments) of every consumer application before we could be sure that the our widget lib made it fully to the production... "])),(l()(),e.tb(29,0,null,null,25,":svg:svg",[["viewBox","0 0 1540 320"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),e.tb(30,0,null,null,24,":svg:g",[],null,null,null,null,null)),(l()(),e.tb(31,0,null,null,3,":svg:g",[["id","svg_1"]],null,null,null,null,null)),(l()(),e.tb(32,0,null,null,0,":svg:rect",[["fill","none"],["height","322"],["id","canvas_background"],["width","1542"],["x","-1"],["y","-1"]],null,null,null,null,null)),(l()(),e.tb(33,0,null,null,1,":svg:g",[["display","none"],["id","canvasGrid"]],null,null,null,null,null)),(l()(),e.tb(34,0,null,null,0,":svg:rect",[["fill","url(#gridpattern)"],["height","100%"],["id","svg_2"],["stroke-width","0"],["width","100%"],["x","0"],["y","0"]],null,null,null,null,null)),(l()(),e.tb(35,0,null,null,19,":svg:g",[["id","svg_10"]],null,null,null,null,null)),(l()(),e.tb(36,0,null,null,0,":svg:rect",[["fill","#cccccc"],["height","276"],["id","svg_3"],["stroke-width","2"],["width","483"],["x","29.5"],["y","21.0375"]],null,null,null,null,null)),(l()(),e.tb(37,0,null,null,0,":svg:rect",[["fill","#ffffff"],["height","60"],["id","svg_6"],["stroke","null"],["stroke-opacity","null"],["stroke-width","2"],["width","449"],["x","46.5"],["y","38.0375"]],null,null,null,null,null)),(l()(),e.tb(38,0,null,null,0,":svg:rect",[["fill","#ffffff"],["height","163.999991"],["id","svg_7"],["stroke","null"],["stroke-opacity","null"],["stroke-width","2"],["width","340.000019"],["x","47.5"],["y","116.0375"]],null,null,null,null,null)),(l()(),e.tb(39,0,null,null,0,":svg:rect",[["fill","#ffffff"],["fill-opacity","null"],["height","154.999995"],["id","svg_8"],["stroke","#ce2f2f"],["stroke-width","9"],["width","80.999998"],["x","409.500002"],["y","121.037495"]],null,null,null,null,null)),(l()(),e.tb(40,0,null,null,1,":svg:text",[[":xml:space","preserve"],["fill","#d32f2f"],["font-family","'Courier New', Courier, monospace"],["font-size","15"],["font-weight","bold"],["id","svg_9"],["stroke","null"],["stroke-opacity","null"],["stroke-width","0"],["text-anchor","start"],["x","420"],["y","201.0375"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" 3.1.0 "])),(l()(),e.tb(42,0,null,null,0,":svg:rect",[["fill","#cccccc"],["height","276"],["id","svg_11"],["stroke-width","2"],["width","483"],["x","533.959262"],["y","21.0375"]],null,null,null,null,null)),(l()(),e.tb(43,0,null,null,0,":svg:rect",[["fill","#ffffff"],["height","60"],["id","svg_12"],["stroke","null"],["stroke-opacity","null"],["stroke-width","2"],["width","449"],["x","550.959262"],["y","38.0375"]],null,null,null,null,null)),(l()(),e.tb(44,0,null,null,0,":svg:rect",[["fill","#ffffff"],["height","163.999991"],["id","svg_13"],["stroke","null"],["stroke-opacity","null"],["stroke-width","2"],["width","340.000019"],["x","551.959262"],["y","116.0375"]],null,null,null,null,null)),(l()(),e.tb(45,0,null,null,0,":svg:rect",[["fill","#ffffff"],["fill-opacity","null"],["height","154.999995"],["id","svg_14"],["stroke","#880e4f"],["stroke-width","9"],["width","80.999998"],["x","913.959264"],["y","121.037495"]],null,null,null,null,null)),(l()(),e.tb(46,0,null,null,0,":svg:rect",[["fill","#cccccc"],["height","276"],["id","svg_16"],["stroke-width","2"],["width","483"],["x","1035.034418"],["y","21.0375"]],null,null,null,null,null)),(l()(),e.tb(47,0,null,null,0,":svg:rect",[["fill","#ffffff"],["height","60"],["id","svg_17"],["stroke","null"],["stroke-opacity","null"],["stroke-width","2"],["width","449"],["x","1052.034418"],["y","38.0375"]],null,null,null,null,null)),(l()(),e.tb(48,0,null,null,0,":svg:rect",[["fill","#ffffff"],["height","163.999991"],["id","svg_18"],["stroke","null"],["stroke-opacity","null"],["stroke-width","2"],["width","340.000019"],["x","1053.034418"],["y","116.0375"]],null,null,null,null,null)),(l()(),e.tb(49,0,null,null,0,":svg:rect",[["fill","#ffffff"],["fill-opacity","null"],["height","154.999995"],["id","svg_19"],["stroke","#ce2f2f"],["stroke-width","9"],["width","80.999998"],["x","1415.03442"],["y","121.037495"]],null,null,null,null,null)),(l()(),e.tb(50,0,null,null,1,":svg:text",[[":xml:space","preserve"],["fill","#d32f2f"],["font-family","'Courier New', Courier, monospace"],["font-size","15"],["font-weight","bold"],["id","svg_20"],["stroke","null"],["stroke-opacity","null"],["stroke-width","0"],["text-anchor","start"],["x","1425"],["y","201.0375"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" 3.1.0 "])),(l()(),e.tb(52,0,null,null,1,":svg:text",[[":xml:space","preserve"],["fill","#880e4f"],["font-family","'Courier New', Courier, monospace"],["font-size","15"],["font-weight","bold"],["id","svg_22"],["stroke","#880e4f"],["stroke-width","0"],["text-anchor","start"],["x","922"],["y","204.509208"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" 3.0.0 "])),(l()(),e.tb(54,0,null,null,0,":svg:path",[["d","m971.193548,170.97478l-4.847966,-8.064448c-1.461644,-2.430603 -3.852363,-6.409695 -5.314016,-8.840768l-4.847513,-8.063958c-1.463095,-2.432029 -3.853812,-2.432029 -5.314971,0l-4.846532,8.063958c-1.461644,2.431074 -3.853819,6.411091 -5.314981,8.840768l-4.847025,8.064448c-1.461641,2.432948 -0.265302,4.42155 2.657497,4.42155l30.015113,0c2.925717,0 4.120575,-1.988603 2.660394,-4.42155l0.000001,0zm-16.282676,1.248439l-2.875314,0l0,-2.651602l2.875314,0l0,2.651602zm-0.138526,-4.605406l-2.595808,0l-0.25797,-11.345229l3.088729,0l-0.234949,11.345229l-0.000001,0z"],["fill","#880e4f"],["id","svg_25"],["stroke","null"],["stroke-opacity","null"],["stroke-width","2"]],null,null,null,null,null)),(l()(),e.tb(55,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Or we can face situation when we are running different versions of the same widget in various apps which may cause other problems related to breaking changes, incompatible data models which may introduce additional complexity for backends... "])),(l()(),e.tb(57,0,null,null,1,"blockquote",[["class","large"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Wouldn't it be great if we could deploy new version of our widget independently from release cycle of consumer applications? "])),(l()(),e.tb(59,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[' This is exactly what is enabled by this library! The "sub-application" element is released and deployed independently as a single file bundle which is then '])),(l()(),e.tb(61,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["referenced ONLY by the url"])),(l()(),e.Kb(-1,null,[" in the consumer apps. "])),(l()(),e.tb(64,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" To make referencing easier, the bundle file name can always stay the same (for example "])),(l()(),e.tb(66,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["some-element.js"])),(l()(),e.Kb(-1,null,[" without any hash) for every version of the element. The cache busting is then handled with the help of "])),(l()(),e.tb(69,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["etag"])),(l()(),e.Kb(-1,null,[" which is transparently calculated based on the file content on the server. Learn more about "])),(l()(),e.tb(72,0,null,null,1,"a",[["href","https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"],["target","_blank"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["ETag"])),(l()(),e.Kb(-1,null,[" HTTP response headers. "])),(l()(),e.tb(75,0,null,null,1,"blockquote",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" We could still employ query params (or even file name versioning) in case we would like to have more granular control about which version of the element will be downloaded by the consumer appto facilitate stuff like A/B testing. Please note that this has to be implemented with corresponding support on the server side. "])),(l()(),e.tb(77,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["On-demand loading of a heavy 3rd party component"])),(l()(),e.tb(79,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Let's say we are building an Angular application and we are paying extra attention to architecture of the features making them nicely isolated and lazy loaded. The performance, maintainability and start up time of our application is great! "])),(l()(),e.tb(81,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Then comes in a new requirement to add possibility to inline edit every item of a large list using a powerful (but also very heavy) rich text editor. As a result the size and hence loading of that feature will suffer even though the editor is only displayed as a result of user interaction and never from the start. "])),(l()(),e.tb(83,0,null,null,4,"blockquote",[["class","large"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Ability to seamlessly load element once it was rendered as a result of user interaction is exactly what can be achieved using "])),(l()(),e.tb(85,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["*axLazyElement"])),(l()(),e.Kb(-1,null,[" directive! "])),(l()(),e.tb(88,0,null,null,4,"blockquote",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Another possible solution to this problem could be by implementing custom component loader service using plain Angular. Unfortunately, currently (as of version "])),(l()(),e.tb(90,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["8.1.0"])),(l()(),e.Kb(-1,null,[") such an approach is only possible using deprecated APIs and is pretty complex in itself... "])),(l()(),e.tb(93,0,null,null,7,"blockquote",[["class","large"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Are you thinking about some different use case not mentioned in this section? Please, let us know and open an "])),(l()(),e.tb(95,0,null,null,1,"a",[["href",""],["target","_blank"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["issue"])),(l()(),e.Kb(-1,null,[" or submit a "])),(l()(),e.tb(98,0,null,null,1,"a",[["href",""],["target","_blank"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["PR"])),(l()(),e.Kb(-1,null,[" to make this docs better for other users! \u{1f609} "]))],null,null)}function r(l){return e.Mb(0,[(l()(),e.tb(0,0,null,null,1,"demo-use-cases",[],null,null,null,a,o)),e.sb(1,114688,null,0,s,[],null,null)],function(l,n){l(n,1,0)},null)}var c=e.pb("demo-use-cases",s,r,{},{},[]),h=u("An66"),d=u("1VvW");class f{}u.d(n,"UseCasesModuleNgFactory",function(){return b});var b=e.qb(t,[],function(l){return e.Bb([e.Cb(512,e.j,e.bb,[[8,[i.a,c]],[3,e.j],e.w]),e.Cb(4608,h.l,h.k,[e.t,[2,h.s]]),e.Cb(1073742336,h.c,h.c,[]),e.Cb(1073742336,d.o,d.o,[[2,d.t],[2,d.k]]),e.Cb(1073742336,f,f,[]),e.Cb(1073742336,t,t,[]),e.Cb(1024,d.i,function(){return[[{path:"",component:s}]]},[])])})}}]);