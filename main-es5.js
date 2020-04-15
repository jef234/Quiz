function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _setup_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./setup/setup.component */
    "./src/app/setup/setup.component.ts");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _services_quizGuard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/quizGuard.service */
    "./src/app/services/quizGuard.service.ts");
    /* harmony import */


    var _review_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./review/review.component */
    "./src/app/review/review.component.ts");

    var routes = [{
      path: 'welcome',
      component: _setup_setup_component__WEBPACK_IMPORTED_MODULE_2__["SetupComponent"]
    }, {
      path: 'play',
      canActivate: [_services_quizGuard_service__WEBPACK_IMPORTED_MODULE_5__["QuizGuardService"]],
      component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"]
    }, {
      path: 'review',
      canActivate: [_services_quizGuard_service__WEBPACK_IMPORTED_MODULE_5__["QuizGuardService"]],
      component: _review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"]
    }, {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation-bar/navigation-bar.component */
    "./src/app/navigation-bar/navigation-bar.component.ts");
    /* harmony import */


    var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./progress-bar/progress-bar.component */
    "./src/app/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Quick Quiz';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container", "mb-5", "mt-3"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-progress-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavigationBarComponent"], _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxZW07XHJcbn0gKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navigation-bar/navigation-bar.component */
    "./src/app/navigation-bar/navigation-bar.component.ts");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _setup_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./setup/setup.component */
    "./src/app/setup/setup.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./progress-bar/progress-bar.component */
    "./src/app/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _services_quizGuard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/quizGuard.service */
    "./src/app/services/quizGuard.service.ts");
    /* harmony import */


    var _services_test_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var _review_review_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./review/review.component */
    "./src/app/review/review.component.ts");
    /* harmony import */


    var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipe/safe-html.pipe */
    "./src/app/pipe/safe-html.pipe.ts");
    /* harmony import */


    var _directives_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./directives/scroll-spy.directive */
    "./src/app/directives/scroll-spy.directive.ts");
    /* harmony import */


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], _services_quizGuard_service__WEBPACK_IMPORTED_MODULE_12__["QuizGuardService"], _services_test_service__WEBPACK_IMPORTED_MODULE_13__["TestService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_17__["NgCircleProgressModule"].forRoot({
        backgroundPadding: 0,
        radius: 20,
        outerStrokeWidth: 10,
        innerStrokeWidth: 0,
        imageHeight: 20,
        imageWidth: 20,
        showUnits: false,
        showBackground: false,
        showInnerStroke: false,
        startFromZero: false
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavigationBarComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"], _setup_setup_component__WEBPACK_IMPORTED_MODULE_8__["SetupComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ProgressBarComponent"], _review_review_component__WEBPACK_IMPORTED_MODULE_14__["ReviewComponent"], _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__["SafeHtmlPipe"], _directives_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_16__["ScrollSpyDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_17__["NgCircleProgressModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavigationBarComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"], _setup_setup_component__WEBPACK_IMPORTED_MODULE_8__["SetupComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ProgressBarComponent"], _review_review_component__WEBPACK_IMPORTED_MODULE_14__["ReviewComponent"], _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_15__["SafeHtmlPipe"], _directives_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_16__["ScrollSpyDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_17__["NgCircleProgressModule"].forRoot({
            backgroundPadding: 0,
            radius: 20,
            outerStrokeWidth: 10,
            innerStrokeWidth: 0,
            imageHeight: 20,
            imageWidth: 20,
            showUnits: false,
            showBackground: false,
            showInnerStroke: false,
            startFromZero: false
          })],
          providers: [_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], _services_quizGuard_service__WEBPACK_IMPORTED_MODULE_12__["QuizGuardService"], _services_test_service__WEBPACK_IMPORTED_MODULE_13__["TestService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/scroll-spy.directive.ts":
  /*!****************************************************!*\
    !*** ./src/app/directives/scroll-spy.directive.ts ***!
    \****************************************************/

  /*! exports provided: ScrollSpyDirective */

  /***/
  function srcAppDirectivesScrollSpyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function () {
      return ScrollSpyDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ScrollSpyDirective = /*#__PURE__*/function () {
      function ScrollSpyDirective(elementRef) {
        _classCallCheck(this, ScrollSpyDirective);

        this.elementRef = elementRef;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ScrollSpyDirective, [{
        key: "onScroll",
        value: function onScroll(event) {
          var _this = this;

          var currentSection;
          var children = this.elementRef.nativeElement.children;
          var scrollTop = event.target.scrollTop;
          var parentOffset = event.target.offsetTop;

          var _iterator = _createForOfIteratorHelper(children),
              _step;

          try {
            var _loop = function _loop() {
              var element = _step.value;

              if (_this.spiedTags.some(function (spiedTag) {
                return spiedTag === element.tagName;
              })) {
                if (element.offsetTop - parentOffset <= scrollTop) {
                  currentSection = element.id;
                }
              }
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(event); // this.sectionChange.emit(this.currentSection);
          }
        }
      }]);

      return ScrollSpyDirective;
    }();

    ScrollSpyDirective.ɵfac = function ScrollSpyDirective_Factory(t) {
      return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ScrollSpyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ScrollSpyDirective,
      selectors: [["", "appScrollSpy", ""]],
      hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ScrollSpyDirective_mouseenter_HostBindingHandler($event) {
            return ctx.onScroll($event);
          });
        }
      },
      inputs: {
        spiedTags: "spiedTags"
      },
      outputs: {
        sectionChange: "sectionChange"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollSpyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appScrollSpy]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        spiedTags: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/model/model-setup.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/model/model-setup.module.ts ***!
    \*********************************************/

  /*! exports provided: ModelSetupModule */

  /***/
  function srcAppModelModelSetupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelSetupModule", function () {
      return ModelSetupModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ModelSetupModule = function ModelSetupModule(triviaAmount, triviaCategory, triviaDifficulty, triviaType) {
      _classCallCheck(this, ModelSetupModule);

      this.triviaAmount = triviaAmount;
      this.triviaCategory = triviaCategory;
      this.triviaDifficulty = triviaDifficulty;
      this.triviaType = triviaType;
    };

    ModelSetupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModelSetupModule
    });
    ModelSetupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModelSetupModule_Factory(t) {
        return new (t || ModelSetupModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](String), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](String), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](String), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](String));
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModelSetupModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelSetupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [String]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [String]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [String]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [String]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navigation-bar/navigation-bar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
    \************************************************************/

  /*! exports provided: NavigationBarComponent */

  /***/
  function srcAppNavigationBarNavigationBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
      return NavigationBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["welcome"];
    };

    var _c1 = function _c1() {
      return ["play"];
    };

    var _c2 = function _c2() {
      return ["review"];
    };

    var NavigationBarComponent = /*#__PURE__*/function () {
      function NavigationBarComponent() {
        _classCallCheck(this, NavigationBarComponent);
      }

      _createClass(NavigationBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          document.getElementById('navbar-toggler').click();
        }
      }]);

      return NavigationBarComponent;
    }();

    NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) {
      return new (t || NavigationBarComponent)();
    };

    NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationBarComponent,
      selectors: [["app-navigation-bar"]],
      decls: 19,
      vars: 8,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "navbar-brand", 3, "routerLink"], ["id", "navbar-toggler", "type", "button", "data-toggle", "collapse", "data-target", "#navbarColor01", "aria-controls", "navbarColor01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor01", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink", "click"], [1, "sr-only"], [1, "nav-item"]],
      template: function NavigationBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quick Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_9_listener() {
            return ctx.closeMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_14_listener() {
            return ctx.closeMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Play");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_17_listener() {
            return ctx.closeMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation-bar',
          templateUrl: './navigation-bar.component.html',
          styleUrls: ['./navigation-bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipe/safe-html.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipe/safe-html.pipe.ts ***!
    \****************************************/

  /*! exports provided: SafeHtmlPipe */

  /***/
  function srcAppPipeSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
      return SafeHtmlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var element = document.createElement('div');

    var SafeHtmlPipe = /*#__PURE__*/function () {
      function SafeHtmlPipe() {
        _classCallCheck(this, SafeHtmlPipe);
      }

      _createClass(SafeHtmlPipe, [{
        key: "transform",
        value: function transform(str) {
          element.innerHTML = str;
          return element.textContent;
        }
      }]);

      return SafeHtmlPipe;
    }();

    SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
      return new (t || SafeHtmlPipe)();
    };

    SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeHtml'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/progress-bar/progress-bar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/progress-bar/progress-bar.component.ts ***!
    \********************************************************/

  /*! exports provided: ProgressBarComponent */

  /***/
  function srcAppProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
      return ProgressBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "width": a0
      };
    };

    var ProgressBarComponent = /*#__PURE__*/function () {
      function ProgressBarComponent(sharedService) {
        _classCallCheck(this, ProgressBarComponent);

        this.sharedService = sharedService;
        this.reg = 0;
        this.regPct = 0;
        this.game = 0;
        this.gamePct = 0;
        this.result = 0;
        this.resultPct = 0;
      }

      _createClass(ProgressBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.initialiseProgressBar();
          this.sharedService.sharedQuizApiUrl.subscribe(function (value) {
            return _this2.quizApiUrl = value;
          });
          this.sharedService.sharedRegPct.subscribe(function (value) {
            return _this2.regPct = value;
          });
          this.sharedService.sharedGamePct.subscribe(function (value) {
            return _this2.gamePct = value;
          });
          this.sharedService.sharedResultPct.subscribe(function (value) {
            return _this2.resultPct = value;
          });
        }
      }, {
        key: "initialiseProgressBar",
        value: function initialiseProgressBar() {
          var _this3 = this;

          setTimeout(function () {
            if (_this3.reg < 100) {
              _this3.reg = _this3.reg + 1;
              _this3.regPct = _this3.reg / 3;
            } else if (_this3.game < 100) {
              _this3.game = _this3.game + 1;
              _this3.gamePct = _this3.game / 3;
            } else if (_this3.result < 100) {
              _this3.result = _this3.result + 1;
              _this3.resultPct = _this3.result / 3;
            }

            if (_this3.reg < 100 || _this3.game < 100 || _this3.result < 100) {
              _this3.initialiseProgressBar();
            } else if (_this3.reg === 100 && _this3.game === 100 && _this3.result === 100) {
              setTimeout(function () {
                _this3.reg = 0;
                _this3.regPct = 0;
                _this3.game = 0;
                _this3.gamePct = 0;
                _this3.result = 0;
                _this3.resultPct = 0;
              }, 1000);
            }
          }, 2.5);
        }
      }, {
        key: "onRegPctChange",
        value: function onRegPctChange(value) {
          this.regPct = value;
        }
      }]);

      return ProgressBarComponent;
    }();

    ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
      return new (t || ProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]));
    };

    ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressBarComponent,
      selectors: [["app-progress-bar"]],
      decls: 4,
      vars: 9,
      consts: [[1, "progress"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-info", 3, "ngStyle"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 3, "ngStyle"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-success", 3, "ngStyle"]],
      template: function ProgressBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.regPct + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.gamePct + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.resultPct + "%"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-progress-bar',
          templateUrl: './progress-bar.component.html',
          styleUrls: ['./progress-bar.component.css']
        }]
      }], function () {
        return [{
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/review/review.component.ts":
  /*!********************************************!*\
    !*** ./src/app/review/review.component.ts ***!
    \********************************************/

  /*! exports provided: ReviewComponent */

  /***/
  function srcAppReviewReviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewComponent", function () {
      return ReviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../directives/scroll-spy.directive */
    "./src/app/directives/scroll-spy.directive.ts");
    /* harmony import */


    var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pipe/safe-html.pipe */
    "./src/app/pipe/safe-html.pipe.ts");

    function ReviewComponent_span_0_div_1_li_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r20.highlightAns(ctx_r20.userAns.answers[i_r19], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r20.test.results[i_r19].correct_answer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r20.test.results[i_r19].incorrect_answers[2])));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r20.test.results[i_r19].incorrect_answers[2]));
      }
    }

    function ReviewComponent_span_0_div_1_li_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r21.highlightAns(ctx_r21.userAns.answers[i_r19], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r21.test.results[i_r19].correct_answer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r21.test.results[i_r19].incorrect_answers[3])));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.test.results[i_r19].incorrect_answers[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, 3)]);
      }
    }

    var _c0 = function _c0() {
      return ["DIV"];
    };

    function ReviewComponent_span_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sectionChange", function ReviewComponent_span_0_div_1_Template_div_sectionChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.onSectionChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReviewComponent_span_0_div_1_li_22_Template, 5, 8, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReviewComponent_span_0_div_1_li_23_Template, 5, 8, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r19 = ctx.index;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r19 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Question : ", i_r19 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.test.results[i_r19].category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, ctx_r17.test.results[i_r19].question));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.highlightAns(ctx_r17.userAns.answers[i_r19], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, ctx_r17.test.results[i_r19].correct_answer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, ctx_r17.test.results[i_r19].incorrect_answers[0])));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 17, ctx_r17.test.results[i_r19].incorrect_answers[0]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.highlightAns(ctx_r17.userAns.answers[i_r19], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 19, ctx_r17.test.results[i_r19].correct_answer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 21, ctx_r17.test.results[i_r19].incorrect_answers[1])));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, ctx_r17.test.results[i_r19].incorrect_answers[1]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.test.results[i_r19].type === "multiple");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.test.results[i_r19].type === "multiple");
      }
    }

    var _c1 = function _c1() {
      return ["/play"];
    };

    var _c2 = function _c2() {
      return ["/welcome"];
    };

    function ReviewComponent_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReviewComponent_span_0_div_1_Template, 24, 26, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Play Again");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quiz Setup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.test.results);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You Scored ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, ctx_r16.userAns.score / ctx_r16.test.results.length * 100, "1.0-0"), "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r16.userAns.score / ctx_r16.test.results.length * 16.75, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
      }
    }

    var ReviewComponent = /*#__PURE__*/function () {
      function ReviewComponent(router, sharedService) {
        _classCallCheck(this, ReviewComponent);

        this.router = router;
        this.sharedService = sharedService;
        this.reviewedTest = 0;
      }

      _createClass(ReviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.sharedService.sharedTest.subscribe(function (value) {
            return _this4.test = value;
          });
          this.sharedService.sharedUserAns.subscribe(function (value) {
            _this4.userAns = value;

            if (!_this4.userAns || _this4.userAns.answers.length !== _this4.test.results.length) {
              _this4.router.navigate(['/play']);
            }
          });
        }
      }, {
        key: "highlightAns",
        value: function highlightAns(userAns, correcrAns, answer) {
          if (userAns === answer) {
            if (answer === correcrAns) {
              return 'text-success border-success';
            } else {
              return 'text-danger border-danger';
            }
          }

          return '';
        }
      }, {
        key: "onSectionChange",
        value: function onSectionChange(element) {
          this.reviewedTest += 1;
          element.target.classList.remove('border');
          element.target.classList.remove('border-secondary');
          this.sharedService.onResultPctChange(this.reviewedTest * 100 / this.test.results.length / 3);
        }
      }]);

      return ReviewComponent;
    }();

    ReviewComponent.ɵfac = function ReviewComponent_Factory(t) {
      return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewComponent,
      selectors: [["app-review"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "card", "mt-3"], [1, "card-body", "text-center"], [1, "card-title"], [1, "crop", "card-text", "mx-auto", "mb-3"], [1, "fas", "fa-star", "fa-3x"], [1, "btn", "btn-primary", "mr-3", 3, "routerLink"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "row"], [1, "col-12", "unselectable"], ["appScrollSpy", "", 1, "card", "mt-3", "border", "border-secondary", 3, "id", "spiedTags", "sectionChange"], [1, "card-header", "bg-dark", "text-white"], [1, "card-body"], [1, "card-text"], [1, "list-group", "list-group-flush"], [1, "list-group-item", 3, "ngClass"], ["class", "list-group-item", 3, "ngClass", 4, "ngIf"]],
      template: function ReviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReviewComponent_span_0_Template, 18, 11, "span", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.test);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _directives_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_4__["ScrollSpyDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__["SafeHtmlPipe"]],
      styles: [".list-group-item[_ngcontent-%COMP%]:focus, .list-group-item[_ngcontent-%COMP%]:hover {\r\n    z-index: 0;\r\n}\r\n.border-success[_ngcontent-%COMP%], .border-danger[_ngcontent-%COMP%] {\r\n  z-index: 1 !important;\r\n}\r\n.border-success[_ngcontent-%COMP%]:focus, .border-danger[_ngcontent-%COMP%]:focus, .border-success[_ngcontent-%COMP%]:hover, .border-danger[_ngcontent-%COMP%]:hover {\r\n  z-index: 1 !important;\r\n}\r\n.crop[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: #fcd670;\r\n  text-align: inherit;\r\n}\r\n.unselectable[_ngcontent-%COMP%] {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.list-group-item[_ngcontent-%COMP%]{\r\n  background-color: inherit !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7Ozs7RUFJRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUV6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbTpmb2N1cywgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbi5ib3JkZXItc3VjY2VzcyxcclxuLmJvcmRlci1kYW5nZXIge1xyXG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyLXN1Y2Nlc3M6Zm9jdXMsXHJcbi5ib3JkZXItZGFuZ2VyOmZvY3VzLFxyXG4uYm9yZGVyLXN1Y2Nlc3M6aG92ZXIsXHJcbi5ib3JkZXItZGFuZ2VyOmhvdmVyIHtcclxuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jcm9we1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogI2ZjZDY3MDtcclxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG59XHJcblxyXG4udW5zZWxlY3RhYmxlIHtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-review',
          templateUrl: './review.component.html',
          styleUrls: ['./review.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/quizGuard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/quizGuard.service.ts ***!
    \***********************************************/

  /*! exports provided: QuizGuardService */

  /***/
  function srcAppServicesQuizGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizGuardService", function () {
      return QuizGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared.service */
    "./src/app/services/shared.service.ts");

    var QuizGuardService = /*#__PURE__*/function () {
      function QuizGuardService(router, sharedService) {
        var _this5 = this;

        _classCallCheck(this, QuizGuardService);

        this.router = router;
        this.sharedService = sharedService;
        this.sharedService.sharedQuizApiUrl.subscribe(function (value) {
          return _this5.quizApiUrl = value;
        });
      }

      _createClass(QuizGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.quizApiUrl === '') {
            // alert('Quiz not started');
            this.router.navigate(['/welcome']);
            return false;
          }

          return true;
        }
      }]);

      return QuizGuardService;
    }();

    QuizGuardService.ɵfac = function QuizGuardService_Factory(t) {
      return new (t || QuizGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    QuizGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: QuizGuardService,
      factory: QuizGuardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/shared.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/shared.service.ts ***!
    \********************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppServicesSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SharedService = /*#__PURE__*/function () {
      function SharedService() {
        _classCallCheck(this, SharedService);

        this.quizApiUrl = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.sharedQuizApiUrl = this.quizApiUrl.asObservable();
        this.regPct = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.sharedRegPct = this.regPct.asObservable();
        this.test = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.Itest);
        this.sharedTest = this.test.asObservable();
        this.userAns = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.IuserAns);
        this.sharedUserAns = this.userAns.asObservable();
        this.gamePct = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.sharedGamePct = this.gamePct.asObservable();
        this.resultPct = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.sharedResultPct = this.resultPct.asObservable();
      }

      _createClass(SharedService, [{
        key: "setQuizApiUrl",
        value: function setQuizApiUrl(message) {
          this.quizApiUrl.next(message);
        }
      }, {
        key: "onRegPctChange",
        value: function onRegPctChange(value) {
          this.regPct.next(value);
        }
      }, {
        key: "setTest",
        value: function setTest(Test) {
          this.test.next(Test);
        }
      }, {
        key: "setUserAns",
        value: function setUserAns(userAns) {
          this.userAns.next(userAns);
        }
      }, {
        key: "onGamePctChange",
        value: function onGamePctChange(value) {
          this.gamePct.next(value);
        }
      }, {
        key: "onResultPctChange",
        value: function onResultPctChange(value) {
          this.resultPct.next(value);
        }
      }]);

      return SharedService;
    }();

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)();
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/test.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/test.service.ts ***!
    \******************************************/

  /*! exports provided: TestService */

  /***/
  function srcAppServicesTestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestService", function () {
      return TestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TestService = /*#__PURE__*/function () {
      function TestService(http) {
        _classCallCheck(this, TestService);

        this.http = http;
      }

      _createClass(TestService, [{
        key: "getTests",
        value: function getTests(quizApiUrl) {
          return this.http.get(quizApiUrl);
        }
      }]);

      return TestService;
    }();

    TestService.ɵfac = function TestService_Factory(t) {
      return new (t || TestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TestService,
      factory: TestService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/setup/setup.component.ts":
  /*!******************************************!*\
    !*** ./src/app/setup/setup.component.ts ***!
    \******************************************/

  /*! exports provided: SetupComponent */

  /***/
  function srcAppSetupSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetupComponent", function () {
      return SetupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_model_setup_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/model-setup.module */
    "./src/app/model/model-setup.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SetupComponent = /*#__PURE__*/function () {
      function SetupComponent(router, sharedService) {
        _classCallCheck(this, SetupComponent);

        this.router = router;
        this.sharedService = sharedService;
        this.reg = 0;
        this.ta = false;
        this.tc = false;
        this.td = false;
        this.tt = false;
        this.playTime = 20;
        this.model = new _model_model_setup_module__WEBPACK_IMPORTED_MODULE_1__["ModelSetupModule"]('10', 'any', 'any', 'any');
      }

      _createClass(SetupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.sharedService.sharedQuizApiUrl.subscribe(function (value) {
            return _this6.quizApiUrl = value;
          });
          this.sharedService.sharedRegPct.subscribe(function (value) {
            return _this6.regPct = value;
          });

          if (this.regPct === 0) {
            setTimeout(function () {
              document.getElementById('btnSubmit').disabled = true;
            }, 1);
            setTimeout(function () {
              document.getElementById('btnSubmit').disabled = false;
            }, 3500);
          }
        }
      }, {
        key: "updatePlayTime",
        value: function updatePlayTime(value) {
          this.playTime = value * 2;
        }
      }, {
        key: "completeStep",
        value: function completeStep(name) {
          var stepflag = 0;

          if (name === 'trivia_amount' && this.ta === false) {
            stepflag = 1;
            this.ta = true;
          } else if (name === 'trivia_category' && this.tc === false) {
            stepflag = 1;
            this.tc = true;
          } else if (name === 'trivia_difficulty' && this.td === false) {
            stepflag = 1;
            this.td = true;
          } else if (name === 'trivia_type' && this.tt === false) {
            stepflag = 1;
            this.tt = true;
          }

          if (stepflag === 1) {
            this.reg = this.reg + 25;
            this.regPct = this.reg / 3;
            this.sharedService.onRegPctChange(this.regPct);
          }
        }
      }, {
        key: "submitForm",
        value: function submitForm(form) {
          var _form$value = form.value,
              trivia_amount = _form$value.trivia_amount,
              trivia_category = _form$value.trivia_category,
              trivia_difficulty = _form$value.trivia_difficulty,
              trivia_type = _form$value.trivia_type;
          this.quizApiUrl = "https://opentdb.com/api.php?amount=".concat(trivia_amount);

          if (trivia_category !== 'any') {
            this.quizApiUrl += "&category=".concat(trivia_category);
          }

          if (trivia_difficulty !== 'any') {
            this.quizApiUrl += "&difficulty=".concat(trivia_difficulty);
          }

          if (trivia_type !== 'any') {
            this.quizApiUrl += "&type=".concat(trivia_type);
          }

          this.sharedService.setQuizApiUrl(this.quizApiUrl);
          this.sharedService.onRegPctChange(100 / 3);
          this.sharedService.onGamePctChange(0);
          this.sharedService.onResultPctChange(0);
          this.router.navigate(['/play']);
        }
      }]);

      return SetupComponent;
    }();

    SetupComponent.ɵfac = function SetupComponent_Factory(t) {
      return new (t || SetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]));
    };

    SetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SetupComponent,
      selectors: [["app-setup"]],
      decls: 107,
      vars: 22,
      consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header", "bg-dark", "text-white"], [1, "card-body"], ["method", "post", 1, "form-api", 3, "submit"], ["form", "ngForm"], [1, "form-group"], ["for", "trivia_amount"], ["name", "trivia_amount", "required", "", "aria-describedby", "triviaAmountHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["triviaAmount", "ngModel"], ["value", "10"], ["value", "20"], ["value", "30"], ["value", "40"], ["value", "50"], ["id", "triviaAmountHelpBlock", 1, "form-text", "text-muted"], ["for", "trivia_category"], ["name", "trivia_category", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["triviaCategory", "ngModel"], ["value", "any"], ["value", "9"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["value", "28"], ["value", "29"], ["value", "31"], ["value", "32"], ["for", "trivia_difficulty"], ["name", "trivia_difficulty", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["triviaDifficulty", "ngModel"], ["value", "easy"], ["value", "medium"], ["value", "hard"], ["for", "trivia_type"], ["name", "trivia_type", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["triviaType", "ngModel"], ["value", "multiple"], ["value", "boolean"], ["id", "btnSubmit", "disabled", "disabled", "type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"]],
      template: function SetupComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Quiz Setup ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SetupComponent_Template_form_submit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            return ctx.submitForm(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Number of Questions:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SetupComponent_Template_select_ngModelChange_11_listener($event) {
            return ctx.model.triviaAmount = $event;
          })("change", function SetupComponent_Template_select_change_11_listener($event) {
            ctx.updatePlayTime($event.target.value);
            return ctx.completeStep($event.target.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select Category: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SetupComponent_Template_select_ngModelChange_28_listener($event) {
            return ctx.model.triviaCategory = $event;
          })("change", function SetupComponent_Template_select_change_28_listener($event) {
            return ctx.completeStep($event.target.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Any Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "General Knowledge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Entertainment: Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Entertainment: Film");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Entertainment: Music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Entertainment: Musicals & Theatres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Entertainment: Television");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Entertainment: Video Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Entertainment: Board Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Science & Nature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Science: Computers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Science: Mathematics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Mythology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Sports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Geography");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Politics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Art");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Celebrities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Animals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Vehicles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Entertainment: Comics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Science: Gadgets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Entertainment: Japanese Anime & Manga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Entertainment: Cartoon & Animations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Select Difficulty: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "select", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SetupComponent_Template_select_ngModelChange_83_listener($event) {
            return ctx.model.triviaDifficulty = $event;
          })("change", function SetupComponent_Template_select_change_83_listener($event) {
            return ctx.completeStep($event.target.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Any Difficulty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Easy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Hard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Select Type: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "select", 49, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SetupComponent_Template_select_ngModelChange_96_listener($event) {
            return ctx.model.triviaType = $event;
          })("change", function SetupComponent_Template_select_change_96_listener($event) {
            return ctx.completeStep($event.target.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Any Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Multiple Choice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "True / False");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", _r1.touched && _r1.valid && !_r1.errors)("is-invalid", _r1.touched && _r1.invalid && _r1.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.triviaAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Play time: ", ctx.playTime, " minutes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", _r2.touched && _r2.valid)("is-invalid", _r2.touched && _r2.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.triviaCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", _r3.touched && _r3.valid)("is-invalid", _r3.touched && _r3.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.triviaDifficulty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", _r4.touched && _r4.valid)("is-invalid", _r4.touched && _r4.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.triviaType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHVwL3NldHVwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-setup',
          templateUrl: './setup.component.html',
          styleUrls: ['./setup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/test/test.component.ts":
  /*!****************************************!*\
    !*** ./src/app/test/test.component.ts ***!
    \****************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var _services_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");
    /* harmony import */


    var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../pipe/safe-html.pipe */
    "./src/app/pipe/safe-html.pipe.ts");

    function TestComponent_span_0_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_span_0_button_22_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.validateAnswer($event.target.outerText);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r7.test.results[ctx_r7.currTest].incorrect_answers[2]));
      }
    }

    function TestComponent_span_0_button_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_span_0_button_23_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.validateAnswer($event.target.outerText);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r8.test.results[ctx_r8.currTest].incorrect_answers[3]));
      }
    }

    function TestComponent_span_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle-progress", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_span_0_Template_button_click_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.validateAnswer($event.target.outerText);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_span_0_Template_button_click_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.validateAnswer($event.target.outerText);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TestComponent_span_0_button_22_Template, 3, 3, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TestComponent_span_0_button_23_Template, 3, 3, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", ctx_r6.perTimeLeft)("maxPercent", ctx_r6.timeMax)("radius", 35)("outerStrokeWidth", 10)("innerStrokeWidth", 0)("outerStrokeColor", "#78C000")("innerStrokeColor", "#C7E596")("animation", true)("animationDuration", 300)("renderOnClick", false)("showSubtitle", true)("subtitle", ctx_r6.subTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Question : ", ctx_r6.currTest + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.test.results[ctx_r6.currTest].category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, ctx_r6.test.results[ctx_r6.currTest].question));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 21, ctx_r6.test.results[ctx_r6.currTest].incorrect_answers[0]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, ctx_r6.test.results[ctx_r6.currTest].incorrect_answers[1]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.test.results[ctx_r6.currTest].type === "multiple");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.test.results[ctx_r6.currTest].type === "multiple");
      }
    }

    var TestComponent = /*#__PURE__*/function () {
      function TestComponent(router, sharedService, testService) {
        _classCallCheck(this, TestComponent);

        this.router = router;
        this.sharedService = sharedService;
        this.testService = testService;
        this.currTest = 0;
        this.gamePct = 0;
        this.timeLeft = 0;
        this.perTimeLeft = 0;
        this.timeMax = 100;
        this.subTitle = 'Time left %';
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.sharedService.onGamePctChange(0);
          this.sharedService.sharedQuizApiUrl.subscribe(function (value) {
            return _this7.quizApiUrl = value;
          });
          this.testService.getTests(this.quizApiUrl).subscribe(function (data) {
            _this7.test = data;

            if (_this7.test.response_code !== 0) {
              _this7.router.navigate(['/welcome']);
            }

            var _iterator2 = _createForOfIteratorHelper(_this7.test.results),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var result = _step2.value;
                result.incorrect_answers = _this7.suffleAnswers(result.correct_answer, result.incorrect_answers);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this7.timeLeft = _this7.test.results.length * 2 * 60;

            _this7.startTimer();
          });
          this.userAns = {
            score: 0,
            answers: []
          };
        }
      }, {
        key: "suffleAnswers",
        value: function suffleAnswers(correctAns, incorrectAns) {
          var arr = incorrectAns;
          arr.push(correctAns);
          var m = arr.length;
          var temp = '';
          var i = 0;

          while (m) {
            i = Math.floor(Math.random() * m--);
            temp = arr[m];
            arr[m] = arr[i];
            arr[i] = temp;
          }

          return arr;
        }
      }, {
        key: "validateAnswer",
        value: function validateAnswer(userAns) {
          this.userAns.answers.push(userAns);

          if (userAns === this.test.results[this.currTest].correct_answer) {
            this.userAns.score += 1;
          }

          if (this.currTest < this.test.results.length - 1) {
            this.currTest += 1;
            this.sharedService.onGamePctChange(this.currTest / this.test.results.length * 100 / 3);
          } else {
            this.sharedService.setTest(this.test);
            this.sharedService.setUserAns(this.userAns);
            this.sharedService.onGamePctChange(100 / 3);
            this.sharedService.onResultPctChange(0);
            this.router.navigate(['/review']);
          }
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this8 = this;

          this.interval = setInterval(function () {
            if (_this8.timeLeft > 0) {
              _this8.timeLeft--;
              _this8.perTimeLeft = _this8.timeLeft / (_this8.test.results.length * 2 * 60) * 100;
            } else {
              for (var i = _this8.userAns.answers.length; i < _this8.test.results.length; i++) {
                _this8.userAns.answers[i] = '';
              }

              _this8.sharedService.setTest(_this8.test);

              _this8.sharedService.setUserAns(_this8.userAns);

              _this8.sharedService.onRegPctChange(100 / 3);

              _this8.sharedService.onGamePctChange(100 / 3);

              _this8.sharedService.onResultPctChange(0);

              clearInterval(_this8.interval);

              _this8.router.navigate(['/review']);
            }
          }, 1000);
        }
      }]);

      return TestComponent;
    }();

    TestComponent.ɵfac = function TestComponent_Factory(t) {
      return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"]));
    };

    TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestComponent,
      selectors: [["app-test"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "row"], [1, "col-3", "offset-9"], [1, "text-right", 3, "percent", "maxPercent", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "animationDuration", "renderOnClick", "showSubtitle", "subtitle"], [1, "row", "unselectable"], [1, "col-12"], [1, "card", "mt-3"], [1, "card-header", "bg-dark", "text-white"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "list-group", "list-group-flush"], ["type", "button", 1, "list-group-item", "btn", "btn-light", "btn-block", "btn-warp", 3, "click"], ["type", "button", "class", "list-group-item btn btn-light btn-block btn-warp", 3, "click", 4, "ngIf"]],
      template: function TestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestComponent_span_0_Template, 24, 25, "span", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.test);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__["CircleProgressComponent"]],
      pipes: [_pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__["SafeHtmlPipe"]],
      styles: [".btn-warp[_ngcontent-%COMP%]{\r\n    word-wrap: break-word;\r\n    white-space: normal;\r\n}\r\n\r\n.unselectable[_ngcontent-%COMP%] {\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUV6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi13YXJwe1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG5cclxuLnVuc2VsZWN0YWJsZSB7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test',
          templateUrl: './test.component.html',
          styleUrls: ['./test.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _services_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\jr051323\MEAN\Angular\Simplilearn\Project\Quiz\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map