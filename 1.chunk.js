webpackJsonp([1],{

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var detail_component_1 = __webpack_require__(753);
	exports.Detail = detail_component_1.Detail;
	var index_component_1 = __webpack_require__(754);
	exports.Index = index_component_1.Index;
	console.log('`Detail` bundle loaded asynchronously');
	// Must be exported for WebpackAsyncRoute
	__export(__webpack_require__(755));
	

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var Detail = (function () {
	    function Detail() {
	    }
	    Detail.prototype.ngOnInit = function () {
	        console.log('hello `Detail` component');
	    };
	    Detail = __decorate([
	        core_1.Component({
	            selector: 'detail',
	            template: "\n    <h1>Hello from Detail</h1>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Detail);
	    return Detail;
	}());
	exports.Detail = Detail;
	

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(124);
	var Index = (function () {
	    function Index() {
	    }
	    Index.prototype.ngOnInit = function () {
	        console.log('hello `Index` component');
	    };
	    Index = __decorate([
	        core_1.Component({
	            selector: 'index',
	            directives: router_1.ROUTER_DIRECTIVES.slice(),
	            template: "\n    <router-outlet></router-outlet>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Index);
	    return Index;
	}());
	exports.Index = Index;
	

/***/ },

/***/ 755:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var detail_component_1 = __webpack_require__(753);
	var index_component_1 = __webpack_require__(754);
	// async components must be named routes for WebpackAsyncRoute
	exports.routes = {
	    path: 'detail', component: index_component_1.Index,
	    children: [
	        { path: '', component: detail_component_1.Detail }
	    ]
	};
	

/***/ }

});
//# sourceMappingURL=1.map