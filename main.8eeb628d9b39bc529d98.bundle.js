webpackJsonp([4],{581:function(t,e){e.HmrState=function(){}},544:function(t,e,n){t.exports=function(t){return new Promise(function(e){n.e(1,function(a){e(t?n(418)[t]:n(418))})})}},545:function(t,e,n){t.exports=function(t){return new Promise(function(e){n.e(2,function(a){e(t?n(419)[t]:n(419))})})}},532:function(t,e,n){"use strict";var a=n(1),o=n(160),r=function(){function t(t){this.appState=t,this.angularclassLogo="assets/img/angularclass-avatar.png",this.name="Angular 2 Webpack Starter",this.url="https://twitter.com/AngularClass"}return t.prototype.ngOnInit=function(){console.log("Initial App State",this.appState.state)},t=__decorate([a.Component({selector:"app",encapsulation:a.ViewEncapsulation.None,styles:[n(746)],template:'\n    <nav>\n      <span>\n        <a [routerLink]=" [\'./\'] ">\n          Index\n        </a>\n      </span>\n      |\n      <span>\n        <a [routerLink]=" [\'./home\'] ">\n          Home\n        </a>\n      </span>\n      |\n      <span>\n        <a [routerLink]=" [\'./detail\'] ">\n          Detail\n        </a>\n      </span>\n      |\n      <span>\n        <a [routerLink]=" [\'./about\'] ">\n          About\n        </a>\n      </span>\n    </nav>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>\n\n    <footer>\n      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>\n      <div>\n        <a [href]="url">\n          <img [src]="angularclassLogo" width="25%">\n        </a>\n      </div>\n    </footer>\n  '}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.AppState&&o.AppState)&&e||Object])],t);var e}();e.App=r},367:function(t,e,n){"use strict";var a=n(244),o=n(534),r=n(540);e.routes=[{path:"",component:o.Home},{path:"home",component:o.Home},{path:"about",component:"About"},{path:"detail",component:"Detail",canActivate:[a.WebpackAsyncRoute]},{path:"**",component:r.NoContent}],e.asyncRoutes={About:n(545),Detail:n(544)},e.prefetchRouteCallbacks=[e.asyncRoutes.About,e.asyncRoutes.Detail]},160:function(t,e,n){"use strict";var a=n(1),o=n(581),r=function(){function t(){this._state={}}return Object.defineProperty(t.prototype,"state",{get:function(){return this._state=this._clone(this._state)},set:function(t){throw new Error("do not mutate the `.state` directly")},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var e=this.state;return e.hasOwnProperty(t)?e[t]:e},t.prototype.set=function(t,e){return this._state[t]=e},t.prototype._clone=function(t){return JSON.parse(JSON.stringify(t))},__decorate([o.HmrState(),__metadata("design:type",Object)],t.prototype,"_state",void 0),t=__decorate([a.Injectable(),__metadata("design:paramtypes",[])],t)}();e.AppState=r},746:function(t,e){t.exports="body,html{height:100%;font-family:Arial,Helvetica,sans-serif}span.active{background-color:gray}"},533:function(t,e,n){"use strict";var a=n(1),o=n(160),r=n(535),i=n(537),s=function(){function t(t,e){this.appState=t,this.title=e,this.localState={value:""}}return t.prototype.ngOnInit=function(){console.log("hello `Home` component")},t.prototype.submitState=function(t){console.log("submitState",t),this.appState.set("value",t),this.localState.value=""},t=__decorate([a.Component({selector:"home",providers:[r.Title],directives:[i.XLarge],pipes:[],styles:[n(747)],template:n(546)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.AppState&&o.AppState)&&e||Object,"function"==typeof(s="undefined"!=typeof r.Title&&r.Title)&&s||Object])],t);var e,s}();e.Home=s},747:function(t,e){t.exports=""},546:function(t,e){t.exports='<div class="card-container">\r\n  <h1 x-large class="sample-content">Your Content Here</h1>\r\n\r\n  <div>\r\n    For material design components use the <a href="https://github.com/AngularClass/angular2-webpack-starter/tree/material2"><b>material2</b></a> branch\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <div>\r\n    For hot module reloading run\r\n    <pre>npm run start:hmr</pre>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <div>\r\n    <h4>Local State</h4>\r\n\r\n    <form (ngSubmit)="submitState(localState.value)" autocomplete="off">\r\n\r\n      <input\r\n        [value]="localState.value"\r\n        (input)="localState.value = $event.target.value"\r\n        placeholder="Submit Local State to App State"\r\n        autofocus>\r\n\r\n      <button md-raised-button color="primary">Submit Value</button>\r\n    </form>\r\n    <!--\r\n        <input type="text" [value]="localState.value" (input)="localState.value = $event.target.value" autofocus>\r\n        Rather than wiring up two-way data-binding ourselves with [value] and (input)\r\n        we can use Angular\'s [(ngModel)] syntax\r\n        <input type="text" name="textInput" [(ngModel)]="localState.value" autofocus>\r\n      -->\r\n\r\n    <pre>this.localState = {{ localState | json }}</pre>\r\n\r\n  </div>\r\n\r\n</div>\r\n'},534:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(533))},535:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(536))},536:function(t,e,n){"use strict";var a=n(1),o=n(231),r=function(){function t(t){this.http=t,this.value="Angular 2"}return t.prototype.getData=function(){return console.log("Title#getData(): Get Data"),{value:"AngularClass"}},t=__decorate([a.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Http&&o.Http)&&e||Object])],t);var e}();e.Title=r},537:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(538))},538:function(t,e,n){"use strict";var a=n(1),o=function(){function t(t,e){e.setElementStyle(t.nativeElement,"fontSize","x-large")}return t=__decorate([a.Directive({selector:"[x-large]"}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.ElementRef&&a.ElementRef)&&e||Object,"function"==typeof(n="undefined"!=typeof a.Renderer&&a.Renderer)&&n||Object])],t);var e,n}();e.XLarge=o},539:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(532)),a(n(160)),a(n(367));var o=n(160);e.APP_PROVIDERS=[o.AppState]},540:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(541))},541:function(t,e,n){"use strict";var a=n(1),o=function(){function t(){}return t=__decorate([a.Component({selector:"no-content",template:"\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "}),__metadata("design:paramtypes",[])],t)}();e.NoContent=o},0:function(t,e,n){"use strict";function a(t){return o.bootstrap(s.App,r.PLATFORM_PROVIDERS.concat(i.ENV_PROVIDERS,s.APP_PROVIDERS)).then(i.decorateComponentRef).catch(function(t){return console.error(t)})}var o=n(352),r=n(542),i=n(543),s=n(539);e.main=a;document.addEventListener("DOMContentLoaded",function(){return a()})},368:function(t,e,n){"use strict";var a=n(1),o=n(124),r=n(219);e.APPLICATION_DIRECTIVES=o.ROUTER_DIRECTIVES.concat(r.REACTIVE_FORM_DIRECTIVES),e.DIRECTIVES=[{provide:a.PLATFORM_DIRECTIVES,multi:!0,useValue:e.APPLICATION_DIRECTIVES}]},369:function(t,e,n){"use strict";var a=n(1);e.APPLICATION_PIPES=[],e.PIPES=[{provide:a.PLATFORM_PIPES,multi:!0,useValue:e.APPLICATION_PIPES}]},370:function(t,e,n){"use strict";var a=n(35),o=n(231),r=n(124),i=n(219),s=n(244),u=n(366),c=n(367);e.APPLICATION_PROVIDERS=[i.disableDeprecatedForms(),i.provideForms(),r.provideRouter(c.routes),s.provideWebpack(c.asyncRoutes),u.providePrefetchIdleCallbacks(c.prefetchRouteCallbacks)].concat(o.HTTP_PROVIDERS,[{provide:a.LocationStrategy,useClass:a.HashLocationStrategy}]),e.PROVIDERS=e.APPLICATION_PROVIDERS.slice()},542:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(368)),a(n(369)),a(n(370));var o=n(368),r=n(369),i=n(370);e.PLATFORM_PROVIDERS=i.PROVIDERS.concat(o.DIRECTIVES,r.PIPES)},543:function(t,e,n){"use strict";var a=n(112),o=n(1),r=[],i=function(t){return t};a.disableDebugTools(),o.enableProdMode(),r=r.slice(),e.decorateComponentRef=i,e.ENV_PROVIDERS=r.slice()}});
//# sourceMappingURL=main.8eeb628d9b39bc529d98.bundle.map