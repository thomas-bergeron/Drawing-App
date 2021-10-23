(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");






const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: 'editor', component: _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"] },
    { path: '**', redirectTo: '/home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_editor_editor_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/editor/editor.module */ "./src/app/components/editor/editor.module.ts");
/* harmony import */ var _components_export_export_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/export/export.module */ "./src/app/components/export/export.module.ts");
/* harmony import */ var _components_main_page_main_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main-page/main-page.module */ "./src/app/components/main-page/main-page.module.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _components_main_page_main_page_module__WEBPACK_IMPORTED_MODULE_8__["MainPageModule"], _components_editor_editor_module__WEBPACK_IMPORTED_MODULE_6__["EditorModule"], _components_export_export_module__WEBPACK_IMPORTED_MODULE_7__["ExportModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _components_main_page_main_page_module__WEBPACK_IMPORTED_MODULE_8__["MainPageModule"], _components_editor_editor_module__WEBPACK_IMPORTED_MODULE_6__["EditorModule"], _components_export_export_module__WEBPACK_IMPORTED_MODULE_7__["ExportModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _components_main_page_main_page_module__WEBPACK_IMPORTED_MODULE_8__["MainPageModule"], _components_editor_editor_module__WEBPACK_IMPORTED_MODULE_6__["EditorModule"], _components_export_export_module__WEBPACK_IMPORTED_MODULE_7__["ExportModule"]],
                providers: [],
                bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/classes/bucket-options.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/bucket-options.ts ***!
  \*******************************************/
/*! exports provided: BucketOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BucketOptions", function() { return BucketOptions; });
class BucketOptions {
    constructor() {
        this.tolerance = 0;
    }
}


/***/ }),

/***/ "./src/app/classes/data-structures/queue.ts":
/*!**************************************************!*\
  !*** ./src/app/classes/data-structures/queue.ts ***!
  \**************************************************/
/*! exports provided: Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
class Queue {
    constructor() {
        this.store = [];
    }
    push(val) {
        this.store.push(val);
    }
    pop() {
        return this.store.shift();
    }
    get length() {
        return this.store.length;
    }
}


/***/ }),

/***/ "./src/app/classes/grid-options.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/grid-options.ts ***!
  \*****************************************/
/*! exports provided: GridOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridOptions", function() { return GridOptions; });
class GridOptions {
    constructor() {
        this.size = 50;
        this.opacity = 80;
        this.isActive = false;
    }
}


/***/ }),

/***/ "./src/app/classes/line-options.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/line-options.ts ***!
  \*****************************************/
/*! exports provided: LineOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineOptions", function() { return LineOptions; });
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");

class LineOptions {
    constructor() {
        this.connectionDotSize = _app_shared_global__WEBPACK_IMPORTED_MODULE_0__["Global"].MIN_TOOL_SIZE;
        this.hasConnectionDots = true;
    }
}


/***/ }),

/***/ "./src/app/classes/math-line.ts":
/*!**************************************!*\
  !*** ./src/app/classes/math-line.ts ***!
  \**************************************/
/*! exports provided: Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
class Line {
    constructor(point1, point2, distance) {
        this.r = this.calculateR(point1, point2);
        this.dx = -(distance / this.r) * (point2.y - point1.y);
        this.dy = (distance / this.r) * (point2.x - point1.x);
        this.initPoint = point1;
        this.finalPoint = point2;
    }
    calculateR(point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    getNewPoint(point) {
        return { x: point.x + this.dx, y: point.y + this.dy };
    }
    intersection(point1, point2, point3, point4) {
        let slope1 = 0;
        let slope2 = 0;
        let xin = 0;
        let yin = 0;
        if (point2.x - point1.x !== 0) {
            slope1 = (point2.y - point1.y) / (point2.x - point1.x);
        }
        if (point4.x - point3.x !== 0) {
            slope2 = (point4.y - point3.y) / (point4.x - point3.x);
        }
        if (slope1 !== slope2) {
            xin =
                ((point1.x * point2.y - point1.y * point2.x) * (point3.x - point4.x) -
                    (point3.x * point4.y - point3.y * point4.x) * (point1.x - point2.x)) /
                    ((point1.x - point2.x) * (point3.y - point4.y) - (point1.y - point2.y) * (point3.x - point4.x));
            yin =
                ((point1.x * point2.y - point1.y * point2.x) * (point3.y - point4.y) -
                    (point3.x * point4.y - point3.y * point4.x) * (point1.y - point2.y)) /
                    ((point1.x - point2.x) * (point3.y - point4.y) - (point1.y - point2.y) * (point3.x - point4.x));
        }
        return { x: xin, y: yin };
    }
}


/***/ }),

/***/ "./src/app/classes/shape-options.ts":
/*!******************************************!*\
  !*** ./src/app/classes/shape-options.ts ***!
  \******************************************/
/*! exports provided: ShapeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeOptions", function() { return ShapeOptions; });
class ShapeOptions {
    constructor(nbVertices) {
        this.contour = false;
        this.fill = true;
        if (nbVertices !== 0)
            this.nbVertices = nbVertices;
    }
}


/***/ }),

/***/ "./src/app/classes/spray-options.ts":
/*!******************************************!*\
  !*** ./src/app/classes/spray-options.ts ***!
  \******************************************/
/*! exports provided: SprayOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprayOptions", function() { return SprayOptions; });
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");

class SprayOptions {
    constructor() {
        this.dropletSize = 1;
        this.spraySize = _app_shared_global__WEBPACK_IMPORTED_MODULE_0__["Global"].MIN_SPRAY_SIZE;
        this.sprayTime = _app_shared_global__WEBPACK_IMPORTED_MODULE_0__["Global"].TIME_DELAY;
    }
}


/***/ }),

/***/ "./src/app/classes/stamp-options.ts":
/*!******************************************!*\
  !*** ./src/app/classes/stamp-options.ts ***!
  \******************************************/
/*! exports provided: StampOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampOptions", function() { return StampOptions; });
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");

class StampOptions {
    constructor() {
        this.scalingFactor = 1;
        this.orientation = 0;
        this.stampSrc = _app_shared_global__WEBPACK_IMPORTED_MODULE_0__["stamps"][0];
    }
}


/***/ }),

/***/ "./src/app/classes/text-options.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/text-options.ts ***!
  \*****************************************/
/*! exports provided: TextOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextOptions", function() { return TextOptions; });
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");

class TextOptions {
    constructor() {
        this.fontSize = _app_shared_global__WEBPACK_IMPORTED_MODULE_0__["Global"].DEFAULT_FONT_SIZE;
        this.font = _app_shared_global__WEBPACK_IMPORTED_MODULE_0__["Fonts"].Arial;
        this.isBold = false;
        this.isItalic = false;
        this.alignment = 'left';
    }
}


/***/ }),

/***/ "./src/app/classes/tool-info.ts":
/*!**************************************!*\
  !*** ./src/app/classes/tool-info.ts ***!
  \**************************************/
/*! exports provided: ToolInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolInfo", function() { return ToolInfo; });
class ToolInfo {
    constructor(name, buttonText, shortcut) {
        this.name = name;
        this.buttonText = buttonText;
        this.shortcut = shortcut;
    }
}


/***/ }),

/***/ "./src/app/classes/tool-option.ts":
/*!****************************************!*\
  !*** ./src/app/classes/tool-option.ts ***!
  \****************************************/
/*! exports provided: ToolOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolOption", function() { return ToolOption; });
/* harmony import */ var _app_classes_bucket_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/classes/bucket-options */ "./src/app/classes/bucket-options.ts");
/* harmony import */ var _app_classes_grid_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/grid-options */ "./src/app/classes/grid-options.ts");
/* harmony import */ var _app_classes_line_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/line-options */ "./src/app/classes/line-options.ts");
/* harmony import */ var _app_classes_shape_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/shape-options */ "./src/app/classes/shape-options.ts");
/* harmony import */ var _app_classes_spray_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/classes/spray-options */ "./src/app/classes/spray-options.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _stamp_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stamp-options */ "./src/app/classes/stamp-options.ts");
/* harmony import */ var _text_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-options */ "./src/app/classes/text-options.ts");








class ToolOption {
    constructor(shapeCrevices, lineOptions, sprayOptions, size, gridOptions, bucketOptions, textOptions, stampOptions) {
        this.size = _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].MIN_TOOL_SIZE;
        if (shapeCrevices !== undefined && shapeCrevices >= 0)
            this.shapeOptions = new _app_classes_shape_options__WEBPACK_IMPORTED_MODULE_3__["ShapeOptions"](shapeCrevices);
        if (lineOptions)
            this.lineOptions = new _app_classes_line_options__WEBPACK_IMPORTED_MODULE_2__["LineOptions"]();
        if (sprayOptions)
            this.sprayOptions = new _app_classes_spray_options__WEBPACK_IMPORTED_MODULE_4__["SprayOptions"]();
        if (textOptions)
            this.textOptions = new _text_options__WEBPACK_IMPORTED_MODULE_7__["TextOptions"]();
        if (gridOptions)
            this.gridOptions = new _app_classes_grid_options__WEBPACK_IMPORTED_MODULE_1__["GridOptions"]();
        if (stampOptions)
            this.stampOptions = new _stamp_options__WEBPACK_IMPORTED_MODULE_6__["StampOptions"]();
        if (size)
            this.size = size;
        if (bucketOptions)
            this.bucketOptions = new _app_classes_bucket_options__WEBPACK_IMPORTED_MODULE_0__["BucketOptions"]();
    }
}


/***/ }),

/***/ "./src/app/classes/tool.ts":
/*!*********************************!*\
  !*** ./src/app/classes/tool.ts ***!
  \*********************************/
/*! exports provided: Tool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tool", function() { return Tool; });
// tslint:disable:no-empty
class Tool {
    constructor(drawingService) {
        this.drawingService = drawingService;
        this.isDrawing = false;
    }
    onMouseDown(event) { }
    onMouseUp(event) { }
    onMouseMove(event) { }
    onDoubleClick(event) { }
    onWheel(event) { }
    handleCommand(command, isDown) { }
    getDrawingService() {
        return this.drawingService;
    }
    getPositionFromMouse(event) {
        return { x: event.offsetX, y: event.offsetY };
    }
    getPagePositionFromMouse(event) {
        return { x: event.pageX - this.drawingService.positionX, y: event.pageY };
    }
}


/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_commands_command_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/commands/command-manager.service */ "./src/app/services/commands/command-manager.service.ts");
/* harmony import */ var _app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/event-manager/event-manager.service */ "./src/app/services/event-manager/event-manager.service.ts");
/* harmony import */ var _app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/tools/tool.service */ "./src/app/services/tools/tool.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class AppComponent {
    constructor(toolService, commandManager, eventManager) {
        this.toolService = toolService;
        this.commandManager = commandManager;
        this.eventManager = eventManager;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_commands_command_manager_service__WEBPACK_IMPORTED_MODULE_1__["CommandManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_2__["EventManagerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"] }, { type: _app_services_commands_command_manager_service__WEBPACK_IMPORTED_MODULE_1__["CommandManagerService"] }, { type: _app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_2__["EventManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/attributes-panel/attributes-panel.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/attributes-panel/attributes-panel.component.ts ***!
  \***************************************************************************/
/*! exports provided: AttributesPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesPanelComponent", function() { return AttributesPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var src_app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tools/tool.service */ "./src/app/services/tools/tool.service.ts");
/* harmony import */ var src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-panel/color-panel.component */ "./src/app/components/color-panel/color-panel.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");















function AttributesPanelComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Attributs ", ctx_r0.activeTool.info.buttonText, " ");
} }
function AttributesPanelComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Taille du trait");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AttributesPanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributesPanelComponent_div_2_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-slider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_2_Template_mat_slider_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.toolService.currentTool.options.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.activeTool);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r1.max)("min", ctx_r1.min)("thumbLabel", true)("value", ctx_r1.toolService.currentTool.options.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.toolService.currentTool.options.size, "px ");
} }
function AttributesPanelComponent_div_3_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre de c\u00F4t\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-slider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_3_div_11_Template_mat_slider_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.toolService.currentTool.options.shapeOptions.nbVertices = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 12)("min", 3)("thumbLabel", true)("value", ctx_r16.toolService.currentTool.options.shapeOptions.nbVertices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.toolService.currentTool.options.shapeOptions.nbVertices, "");
} }
function AttributesPanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-slide-toggle", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function AttributesPanelComponent_div_3_Template_mat_slide_toggle_checkedChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.toolService.currentTool.options.shapeOptions.contour = $event; })("change", function AttributesPanelComponent_div_3_Template_mat_slide_toggle_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.toolService.currentTool.options.shapeOptions.contour = $event.checked; })("disabled", function AttributesPanelComponent_div_3_Template_mat_slide_toggle_disabled_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.toolService.currentTool.options.shapeOptions.fill; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-slide-toggle", 13, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function AttributesPanelComponent_div_3_Template_mat_slide_toggle_checkedChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.toolService.currentTool.options.shapeOptions.fill = $event; })("change", function AttributesPanelComponent_div_3_Template_mat_slide_toggle_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.toolService.currentTool.options.shapeOptions.fill = $event.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plein");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AttributesPanelComponent_div_3_div_11_Template, 5, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.toolService.currentTool.options.shapeOptions.contour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.toolService.currentTool.options.shapeOptions.fill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.toolService.currentTool.options.shapeOptions.nbVertices);
} }
function AttributesPanelComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rayon des points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_4_div_7_Template_mat_slider_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.toolService.currentTool.options.lineOptions.connectionDotSize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r26.max)("min", ctx_r26.min)("thumbLabel", true)("value", ctx_r26.toolService.currentTool.options.lineOptions.connectionDotSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r26.activeTool.options.lineOptions.connectionDotSize, "px");
} }
function AttributesPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Points de jonction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slide-toggle", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function AttributesPanelComponent_div_4_Template_mat_slide_toggle_checkedChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.toolService.currentTool.options.lineOptions.hasConnectionDots = $event; })("change", function AttributesPanelComponent_div_4_Template_mat_slide_toggle_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.toolService.currentTool.options.lineOptions.hasConnectionDots = $event.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AttributesPanelComponent_div_4_div_7_Template, 6, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.toolService.currentTool.options.lineOptions.hasConnectionDots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.checked);
} }
function AttributesPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Diam\u00E8tre des goutelletes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_5_Template_mat_slider_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.toolService.currentTool.options.sprayOptions.dropletSize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Diam\u00E8tre du jet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-slider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_5_Template_mat_slider_valueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.toolService.currentTool.options.sprayOptions.spraySize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00C9missions par secondes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-slider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_5_Template_mat_slider_valueChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.toolService.currentTool.options.sprayOptions.sprayTime = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 5)("min", 1)("thumbLabel", true)("value", ctx_r4.toolService.currentTool.options.sprayOptions.dropletSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.toolService.currentTool.options.sprayOptions.dropletSize, "px ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 50)("min", 10)("thumbLabel", true)("value", ctx_r4.toolService.currentTool.options.sprayOptions.spraySize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.toolService.currentTool.options.sprayOptions.spraySize, "px ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 5000)("min", 100)("thumbLabel", true)("value", ctx_r4.toolService.currentTool.options.sprayOptions.sprayTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.toolService.currentTool.options.sprayOptions.sprayTime, "");
} }
function AttributesPanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tol\u00E9rance (%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_6_Template_mat_slider_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.toolService.currentTool.options.bucketOptions.tolerance = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("min", 0)("thumbLabel", true)("value", ctx_r5.toolService.currentTool.options.bucketOptions.tolerance);
} }
function AttributesPanelComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Taille des carr\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributesPanelComponent_div_7_Template_mat_slider_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.toolService.updateGridSize($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Opacit\u00E9 de la grille");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-slider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_7_Template_mat_slider_valueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.toolService.currentTool.options.gridOptions.opacity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 250)("min", 5)("thumbLabel", true)("value", ctx_r6.toolService.currentTool.options.gridOptions.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.toolService.currentTool.options.gridOptions.size, "px ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("min", 40)("thumbLabel", true)("value", ctx_r6.toolService.currentTool.options.gridOptions.opacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.toolService.currentTool.options.gridOptions.opacity, "% ");
} }
function AttributesPanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AttributesPanelComponent_div_9_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const font_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", font_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](font_r44);
} }
function AttributesPanelComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Police");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_9_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.toolService.currentTool.options.textOptions.font = $event; })("closed", function AttributesPanelComponent_div_9_Template_mat_select_closed_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r41._elementRef.nativeElement.blur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AttributesPanelComponent_div_9_mat_option_6_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Taille de la police");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-slider", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_9_Template_mat_slider_valueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.toolService.currentTool.options.textOptions.fontSize = $event; })("change", function AttributesPanelComponent_div_9_Template_mat_slider_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r43._elementRef.nativeElement.blur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-slide-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function AttributesPanelComponent_div_9_Template_mat_slide_toggle_checkedChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.toolService.currentTool.options.textOptions.isBold = $event; })("change", function AttributesPanelComponent_div_9_Template_mat_slide_toggle_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.toolService.currentTool.options.textOptions.isBold = $event.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Gras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-slide-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function AttributesPanelComponent_div_9_Template_mat_slide_toggle_checkedChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.toolService.currentTool.options.textOptions.isItalic = $event; })("change", function AttributesPanelComponent_div_9_Template_mat_slide_toggle_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.toolService.currentTool.options.textOptions.isItalic = $event.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Italique");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-button-toggle-group", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_9_Template_mat_button_toggle_group_valueChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.toolService.currentTool.options.textOptions.alignment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-button-toggle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "format_align_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-button-toggle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "format_align_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-button-toggle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "format_align_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.toolService.currentTool.options.textOptions.font);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.fonts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 70)("min", 15)("thumbLabel", true)("value", ctx_r8.toolService.currentTool.options.textOptions.fontSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.toolService.currentTool.options.textOptions.fontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r8.toolService.currentTool.options.textOptions.isBold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r8.toolService.currentTool.options.textOptions.isItalic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.toolService.currentTool.options.textOptions.alignment);
} }
function AttributesPanelComponent_div_10_mat_button_toggle_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stamp_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stamp_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", stamp_r58, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AttributesPanelComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00C9tampe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle-group", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributesPanelComponent_div_10_Template_mat_button_toggle_group_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.toolService.currentTool.options.stampOptions.stampSrc = $event.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttributesPanelComponent_div_10_mat_button_toggle_4_Template, 2, 2, "mat-button-toggle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Facteur de mise \u00E0 l'\u00E9chelle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-slider", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_10_Template_mat_slider_valueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.toolService.currentTool.options.stampOptions.scalingFactor = $event; })("change", function AttributesPanelComponent_div_10_Template_mat_slider_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r56._elementRef.nativeElement.blur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rotation (degr\u00E9s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-slider", 33, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AttributesPanelComponent_div_10_Template_mat_slider_valueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.toolService.currentTool.options.stampOptions.orientation = $event; })("change", function AttributesPanelComponent_div_10_Template_mat_slider_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r57._elementRef.nativeElement.blur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r9.stamps[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.stamps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 3)("min", 0.1)("step", 0.1)("thumbLabel", true)("value", ctx_r9.toolService.currentTool.options.stampOptions.scalingFactor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.toolService.currentTool.options.stampOptions.scalingFactor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 360)("min", 0)("step", 1)("thumbLabel", true)("value", ctx_r9.toolService.currentTool.options.stampOptions.orientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.toolService.currentTool.options.stampOptions.orientation, "\u00B0");
} }
function AttributesPanelComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Point de controle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle-group", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributesPanelComponent_div_11_Template_mat_button_toggle_group_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.toolService.magnetService.changeControlPoint($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Centre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Centre gauche ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Centre droit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-button-toggle", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Centre haut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-button-toggle", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Centre bas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-button-toggle", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Coin haut gauche ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-button-toggle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Coin bas gauche ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-button-toggle", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Coin haut droit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-button-toggle", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Coin bas droit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r10.toolService.magnetService.controlPoint == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r10.toolService.magnetService.controlPoint == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r10.toolService.magnetService.controlPoint == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r10.toolService.magnetService.controlPoint == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r10.toolService.magnetService.controlPoint == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r10.toolService.magnetService.controlPoint == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r10.toolService.magnetService.controlPoint == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r10.toolService.magnetService.controlPoint == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r10.toolService.magnetService.controlPoint == 8);
} }
class AttributesPanelComponent {
    constructor(toolService) {
        this.toolService = toolService;
        this.min = 1;
        this.max = 50;
        this.value = 0;
        this.toolService.changeLimitSize$.subscribe((minSize) => {
            this.min = minSize;
        });
        this.activeTool = toolService.currentTool;
    }
    get fonts() {
        return Object.values(src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Fonts"]);
    }
    get stamps() {
        return src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["stamps"];
    }
}
AttributesPanelComponent.ɵfac = function AttributesPanelComponent_Factory(t) { return new (t || AttributesPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_2__["ToolService"])); };
AttributesPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributesPanelComponent, selectors: [["app-attributes-panel"]], inputs: { activeTool: "activeTool" }, decls: 14, vars: 12, consts: [[1, "container"], ["class", "header", 4, "ngIf"], [4, "ngIf"], ["id", "text-options-panel", 4, "ngIf"], ["id", "stamp-attributes", "id", "stamp-options-panel", 4, "ngIf"], [1, "color-picker-container"], [3, "ngClass"], [1, "header"], ["class", "label", 4, "ngIf"], [3, "max", "min", "thumbLabel", "value", "valueChange"], [1, "label"], [3, "checked", "checkedChange", "change", "disabled"], ["rectangle", ""], [3, "checked", "checkedChange", "change"], [2, "padding-left", "10px", 3, "checked", "checkedChange", "change"], ["slideToggle", ""], [3, "max", "min", "thumbLabel", "value", "change"], ["id", "eye-dropper-canvas"], ["id", "text-options-panel"], ["appearance", "fill"], [3, "value", "valueChange", "closed"], ["FontSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "max", "min", "thumbLabel", "value", "valueChange", "change"], ["FontSizeSlider", ""], [3, "value", "valueChange"], ["value", "left", "aria-label", "Text align left"], ["value", "center", "aria-label", "Text align center"], ["value", "right", "aria-label", "Text align right"], [3, "value"], ["id", "stamp-attributes", "id", "stamp-options-panel"], [1, "stamp-toggle-group", 3, "value", "change"], ["class", "stamp-button-toggle", 3, "value", 4, "ngFor", "ngForOf"], [1, "stamp-slider", 3, "max", "min", "step", "thumbLabel", "value", "valueChange", "change"], ["StampSizeSlider", ""], ["StampOrientationSlider", ""], [1, "stamp-button-toggle", 3, "value"], [1, "stamp-img", 3, "src"], ["vertical", "", 3, "change"], ["group", "matButtonToggleGroup"], ["value", "0", 3, "checked"], ["value", "1", 3, "checked"], ["value", "2", 3, "checked"], ["value", "3", 3, "checked"], ["value", "4", 3, "checked"], ["value", "5", 3, "checked"], ["value", "6", 3, "checked"], ["value", "7", 3, "checked"], ["value", "8", 3, "checked"]], template: function AttributesPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributesPanelComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttributesPanelComponent_div_2_Template, 5, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributesPanelComponent_div_3_Template, 12, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttributesPanelComponent_div_4_Template, 8, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AttributesPanelComponent_div_5_Template, 22, 15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AttributesPanelComponent_div_6_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AttributesPanelComponent_div_7_Template, 15, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AttributesPanelComponent_div_8_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AttributesPanelComponent_div_9_Template, 34, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AttributesPanelComponent_div_10_Template, 21, 14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AttributesPanelComponent_div_11_Template, 23, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-color-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTool && (ctx.activeTool.options.size !== 0 - 1 || ctx.activeTool.info.name === "eye-dropper" || ctx.activeTool.info.name === "text" || ctx.activeTool.info.name === "stamp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTool.options.size !== 0 - 1 && ctx.activeTool.info.name !== "shift-selection" && ctx.activeTool.info.name !== "spray" && ctx.activeTool.info.name !== "grille" && ctx.activeTool.info.name !== "fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toolService.currentTool.options.shapeOptions && ctx.activeTool.info.name !== "shift-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTool.options.lineOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTool.info.name === "spray");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTool.info.name === "fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTool.info.name === "grille");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTool.info.name === "eye-dropper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTool.info.name === "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTool.info.name === "stamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTool.info.name === "shift-selection" && ctx.toolService.magnetService.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.toolService.hasBegunDrawing() && ctx.toolService.currentTool.info.name !== "text" ? "disabled" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_5__["ColorPanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n  min-height: 98vh;\n  max-height: 100vh;\n  min-width: 150px;\n  max-width: 150px;\n  align-content: center;\n  margin-left: 10px;\n  color: black;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.color-picker-container[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: auto;\n  padding: 5px;\n  display: block;\n  background-color: #f4f7fd;\n  box-shadow: 19px 19px 26px #bdbdbd, -19px -19px 26px #ffffff;\n  border-radius: 10px;\n  padding-bottom: 2px;\n}\n\n.mat-slide-toggle[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n#eye-dropper-canvas[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: auto;\n  min-width: 150;\n  max-width: 150px;\n  min-height: 150px;\n  max-height: 150px;\n  image-rendering: optimizeSpeed;\n  \n  \n  \n  image-rendering: -o-crisp-edges;\n  \n  image-rendering: pixelated;\n  \n  -ms-interpolation-mode: nearest-neighbor;\n  \n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.stamp-img[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 100%;\n}\n\n.stamp-button-toggle[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 45%;\n}\n\n.stamp-slider[_ngcontent-%COMP%] {\n  min-width: 0px;\n  width: 80%;\n}\n\n.stamp-toggle-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  min-width: 80%;\n}\n\nb[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdHRyaWJ1dGVzLXBhbmVsL2F0dHJpYnV0ZXMtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtBQUREOztBQUlBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0FBREQ7O0FBSUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUREOztBQUdBO0VBQ0MsY0FBQTtBQUFEOztBQUdBO0VBQ0Msb0JBQUE7QUFBRDs7QUFHQTtFQUNDLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUFnQyxrQ0FBQTtFQUNHLGtDQUFBO0VBQ1Msa0NBQUE7RUFDNUMsK0JBQUE7RUFBaUMsa0NBQUE7RUFDakMsMEJBQUE7RUFBNEIsa0NBQUE7RUFDNUIsd0NBQUE7RUFBMEMsa0NBQUE7QUFNM0M7O0FBSEE7RUFDQyxVQUFBO0FBTUQ7O0FBSEE7RUFDQyxpQkFBQTtFQUNBLFdBQUE7QUFNRDs7QUFIQTtFQUNDLFlBQUE7RUFDQSxVQUFBO0FBTUQ7O0FBSEE7RUFDQyxjQUFBO0VBQ0EsVUFBQTtBQU1EOztBQUhBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7QUFNRDs7QUFIQTtFQUNDLGNBQUE7QUFNRDs7QUFIQTtFQUNDLGVBQUE7QUFNRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXR0cmlidXRlcy1wYW5lbC9hdHRyaWJ1dGVzLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1hcmdpbjogNXB4O1xuXHRtaW4taGVpZ2h0OiA5OHZoO1xuXHRtYXgtaGVpZ2h0OiAxMDB2aDtcblxuXHRtaW4td2lkdGg6IDE1MHB4O1xuXHRtYXgtd2lkdGg6IDE1MHB4O1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG5cdGNvbG9yOiBibGFjaztcbn1cblxuLmhlYWRlciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5jb2xvci1waWNrZXItY29udGFpbmVyIHtcblx0cG9zaXRpb246IHN0YXRpYztcblx0bWFyZ2luLXRvcDogYXV0bztcblx0cGFkZGluZzogNXB4O1xuXHRkaXNwbGF5OiBibG9jaztcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjdmZDtcblx0Ym94LXNoYWRvdzogMTlweCAxOXB4IDI2cHggI2JkYmRiZCwgLTE5cHggLTE5cHggMjZweCAjZmZmZmZmO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLm1hdC1zbGlkZS10b2dnbGUge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpc2FibGVkIHtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNleWUtZHJvcHBlci1jYW52YXMge1xuXHRkaXNwbGF5OiBibG9jaztcblx0bWFyZ2luLWJvdHRvbTogYXV0bztcblx0bWluLXdpZHRoOiAxNTA7XG5cdG1heC13aWR0aDogMTUwcHg7XG5cdG1pbi1oZWlnaHQ6IDE1MHB4O1xuXHRtYXgtaGVpZ2h0OiAxNTBweDtcblx0aW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkOyAvKiBPbGRlciB2ZXJzaW9ucyBvZiBGRiAgICAgICAgICAqL1xuXHRpbWFnZS1yZW5kZXJpbmc6IC1tb3otY3Jpc3AtZWRnZXM7IC8qIEZGIDYuMCsgICAgICAgICAgICAgICAgICAgICAgICovXG5cdGltYWdlLXJlbmRlcmluZzogLXdlYmtpdC1vcHRpbWl6ZS1jb250cmFzdDsgLyogU2FmYXJpICAgICAgICAgICAgICAgICAgICAgICAgKi9cblx0aW1hZ2UtcmVuZGVyaW5nOiAtby1jcmlzcC1lZGdlczsgLyogT1MgWCAmIFdpbmRvd3MgT3BlcmEgKDEyLjAyKykgKi9cblx0aW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7IC8qIEF3ZXNvbWUgZnV0dXJlLWJyb3dzZXJzICAgICAgICovXG5cdC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IG5lYXJlc3QtbmVpZ2hib3I7IC8qIElFICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG5cdHdpZHRoOiA5MCU7XG59XG5cbi5zdGFtcC1pbWcge1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5zdGFtcC1idXR0b24tdG9nZ2xlIHtcblx0aGVpZ2h0OiA2MHB4O1xuXHR3aWR0aDogNDUlO1xufVxuXG4uc3RhbXAtc2xpZGVyIHtcblx0bWluLXdpZHRoOiAwcHg7XG5cdHdpZHRoOiA4MCU7XG59XG5cbi5zdGFtcC10b2dnbGUtZ3JvdXAge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuXHRtaW4td2lkdGg6IDgwJTtcbn1cblxuYiB7XG5cdGZvbnQtc2l6ZTogMTFweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributesPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attributes-panel',
                templateUrl: './attributes-panel.component.html',
                styleUrls: ['./attributes-panel.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_2__["ToolService"] }]; }, { activeTool: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/attributes-panel/attributes-panel.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/attributes-panel/attributes-panel.module.ts ***!
  \************************************************************************/
/*! exports provided: AttributesPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesPanelModule", function() { return AttributesPanelModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_components_color_panel_color_panel_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/color-panel/color-panel.module */ "./src/app/components/color-panel/color-panel.module.ts");
/* harmony import */ var _attributes_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributes-panel.component */ "./src/app/components/attributes-panel/attributes-panel.component.ts");











class AttributesPanelModule {
}
AttributesPanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AttributesPanelModule });
AttributesPanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AttributesPanelModule_Factory(t) { return new (t || AttributesPanelModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
            _app_components_color_panel_color_panel_module__WEBPACK_IMPORTED_MODULE_8__["ColorPanelModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AttributesPanelModule, { declarations: [_attributes_panel_component__WEBPACK_IMPORTED_MODULE_9__["AttributesPanelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
        _app_components_color_panel_color_panel_module__WEBPACK_IMPORTED_MODULE_8__["ColorPanelModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], exports: [_attributes_panel_component__WEBPACK_IMPORTED_MODULE_9__["AttributesPanelComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AttributesPanelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_attributes_panel_component__WEBPACK_IMPORTED_MODULE_9__["AttributesPanelComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                    _app_components_color_panel_color_panel_module__WEBPACK_IMPORTED_MODULE_8__["ColorPanelModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                ],
                exports: [_attributes_panel_component__WEBPACK_IMPORTED_MODULE_9__["AttributesPanelComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/carrousel/carrousel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/carrousel/carrousel.component.ts ***!
  \*************************************************************/
/*! exports provided: CarrouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrouselComponent", function() { return CarrouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/build/es/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_index_save_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/index/save.service */ "./src/app/services/index/save.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _fiche_fiche_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../fiche/fiche.component */ "./src/app/components/fiche/fiche.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


























const _c0 = ["auto"];
const _c1 = ["etiquetteInput"];
function CarrouselComponent_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function CarrouselComponent_mat_chip_5_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const etiquette_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.remove(etiquette_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const etiquette_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectable", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", etiquette_r5, " ");
} }
function CarrouselComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const etiquette_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", etiquette_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", etiquette_r8, " ");
} }
class CarrouselComponent {
    constructor(basicService, drawingService, snackBar, dialog) {
        this.basicService = basicService;
        this.drawingService = drawingService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        // isLoading:boolean = false;
        this.outOfBounds = -1;
        this.indexFiche = 0;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"]];
        this.allDrawing = [];
        this.filteredDrawing = [];
        this.emptyDrawing = {
            name: 'Dessin vide',
            etiquette: [],
            image: '',
        };
        this.previousIsLoading = false;
        this.centerIsLoading = false;
        this.nextIsLoading = false;
        this.etiquettes = [];
        this.selectedEtiquettes = [];
        this.etiquetteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.filteredEtiquettes = this.etiquetteCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((etiquette) => (etiquette ? this._filter(etiquette) : this.etiquettes.slice())));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getAllDrawing();
            this.noDrawingFilter();
            this.allDrawing.forEach((dessin) => {
                dessin.etiquette.forEach((etiquette) => {
                    if (this.etiquettes.indexOf(etiquette) === -_app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE)
                        this.etiquettes.push(etiquette);
                });
            });
        });
    }
    handleKeyboardEventDown(event) {
        if (document.activeElement.id !== 'etiquetteInput') {
            event.preventDefault();
            switch (event.key) {
                case 'ArrowLeft':
                    this.increaseIndex();
                    break;
                case 'ArrowRight':
                    this.decreaseIndex();
                    break;
            }
        }
    }
    // mettre subscribe dans le INIT
    // on destroy retirer subscribe
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add etiquette
        if (this.selectedEtiquettes.indexOf(value) === this.outOfBounds) {
            const index = this.etiquettes.findIndex((x) => x === value);
            if (index >= 0) {
                this.selectedEtiquettes.push(this.etiquettes[index]);
                this.setDrawingFilter();
            }
            else {
                if (document.activeElement === document.getElementById('etiquetteInput')) {
                    this.snackBar.open('étiquette non existant', '', {
                        duration: 2000,
                    });
                }
            }
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.etiquetteCtrl.setValue(null);
    }
    remove(etiquette) {
        const index = this.selectedEtiquettes.indexOf(etiquette);
        if (index >= 0) {
            this.selectedEtiquettes.splice(index, _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE);
            if (this.selectedEtiquettes.length === 0) {
                this.noDrawingFilter();
            }
            else {
                this.setDrawingFilter();
            }
        }
    }
    selected(event) {
        if (this.selectedEtiquettes.indexOf(event.option.value) === this.outOfBounds) {
            this.selectedEtiquettes.push(event.option.value);
            this.setDrawingFilter();
        }
        this.etiquetteInput.nativeElement.value = '';
        this.etiquetteCtrl.setValue(null);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.etiquettes.filter((etiquette) => etiquette.toLowerCase().indexOf(filterValue) === 0 && this.selectedEtiquettes.indexOf(etiquette) === this.outOfBounds);
    }
    setDrawingFilter() {
        this.filteredDrawing = [];
        this.indexFiche = 0;
        for (let i = 0; i < this.allDrawing.length; i++) {
            this.selectedEtiquettes.forEach((etiquettes) => {
                if (this.allDrawing[i].etiquette.indexOf(etiquettes) !== -_app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE && this.filteredDrawing.indexOf(i) === -_app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE)
                    this.filteredDrawing.push(i);
            });
        }
    }
    noDrawingFilter() {
        this.filteredDrawing = [];
        this.indexFiche = 0;
        for (let i = 0; i < this.allDrawing.length; i++) {
            this.filteredDrawing.push(i);
        }
    }
    lesThanThreeDrawing(indexWithOneTwo, indexWithTwo) {
        if (this.filteredDrawing.length === 2 && this.indexFiche === indexWithTwo)
            return this.allDrawing[this.filteredDrawing[_app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE]];
        if (this.indexFiche === indexWithOneTwo)
            return this.allDrawing[this.filteredDrawing[0]];
        return this.emptyDrawing;
    }
    get centerFiche() {
        let dessin;
        if (this.filteredDrawing.length === 0)
            return this.emptyDrawing; // 0 dessin
        if (this.filteredDrawing.length < _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].LESS_THEN_THREE_DRAWING) {
            // 1-2 dessin
            dessin = this.lesThanThreeDrawing(0, _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE);
        }
        else {
            dessin = this.allDrawing[this.filteredDrawing[this.indexFiche]];
        }
        if (dessin.name !== 'Dessin vide' && dessin.image === undefined && !this.centerIsLoading) {
            this.centerIsLoading = true;
            this.addImageToDrawing(dessin).then(() => {
                this.centerIsLoading = false;
            });
        }
        return dessin;
    }
    get previousFiche() {
        // 1,2 //-1
        let dessin;
        if (this.filteredDrawing.length === 0)
            return this.emptyDrawing; // 0 dessin
        if (this.filteredDrawing.length < _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].LESS_THEN_THREE_DRAWING) {
            // 1-2 dessin
            dessin = this.lesThanThreeDrawing(1, 2);
        }
        else {
            dessin = this.allDrawing[this.filteredDrawing[this.indexFiche - 1]];
            if (this.indexFiche - _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE === -_app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE)
                dessin = this.allDrawing[this.filteredDrawing[this.filteredDrawing.length - _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE]];
        }
        if (dessin.name !== 'Dessin vide' && dessin.image === undefined && !this.previousIsLoading) {
            this.previousIsLoading = true;
            this.addImageToDrawing(dessin).then(() => {
                this.previousIsLoading = false;
            });
        }
        return dessin;
    }
    get nextFiche() {
        // 2-0
        let dessin;
        if (this.filteredDrawing.length === 0)
            return this.emptyDrawing; // 0 dessin
        if (this.filteredDrawing.length < _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].LESS_THEN_THREE_DRAWING) {
            // 1-2 dessin
            dessin = this.lesThanThreeDrawing(2, 0);
        }
        else {
            dessin = this.allDrawing[this.filteredDrawing[this.indexFiche + _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE]];
            if (this.indexFiche + 1 === this.filteredDrawing.length)
                dessin = this.allDrawing[this.filteredDrawing[0]];
        }
        if (dessin.name !== 'Dessin vide' && dessin.image === undefined && !this.nextIsLoading) {
            this.nextIsLoading = true;
            this.addImageToDrawing(dessin).then(() => {
                this.nextIsLoading = false;
            });
        }
        return dessin;
    }
    decreaseIndex() {
        this.indexFiche--;
        if (this.indexFiche === -_app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE)
            this.indexFiche = this.filteredDrawing.length < _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].LESS_THEN_THREE_DRAWING ? 2 : this.filteredDrawing.length - _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE;
    }
    increaseIndex() {
        this.indexFiche++;
        if (this.filteredDrawing.length < _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].LESS_THEN_THREE_DRAWING) {
            if (this.indexFiche > 2)
                this.indexFiche = 0;
        }
        else {
            if (this.indexFiche >= this.filteredDrawing.length)
                this.indexFiche = 0;
        }
    }
    getAllDrawing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.basicService
                .basicGet()
                .then((drawing) => {
                this.allDrawing = drawing;
            })
                .catch((error) => {
                if (error) {
                    this.allDrawing = [];
                    this.snackBar.open('une erreur est survenue', '', {
                        duration: 2000,
                    });
                }
            });
        });
    }
    deleteDrawing(drawing) {
        const data = new FormData();
        data.append('dessin', drawing.name);
        data.append('tags', JSON.stringify(this.etiquettes));
        data.append('id', drawing.id);
        this.basicService.deletePost(data).subscribe((response) => {
            let message = '';
            switch (response.status) {
                case http_status_codes__WEBPACK_IMPORTED_MODULE_9__["StatusCodes"].CREATED:
                    message = 'le dessin a été enlevé';
                    break;
                case http_status_codes__WEBPACK_IMPORTED_MODULE_9__["StatusCodes"].BAD_REQUEST:
                    message = "le dessin n'a pas pu être supprimé";
                    break;
                case http_status_codes__WEBPACK_IMPORTED_MODULE_9__["StatusCodes"].INTERNAL_SERVER_ERROR:
                    message = 'Une erreur est survenue';
                    break;
            }
            this.snackBar.open(message, '', {
                duration: 2000,
            });
        });
        this.allDrawing.splice(this.allDrawing.indexOf(drawing), _app_shared_global__WEBPACK_IMPORTED_MODULE_8__["Global"].ONE);
        if (this.selectedEtiquettes.length === 0) {
            this.noDrawingFilter();
        }
        else {
            this.setDrawingFilter();
        }
    }
    open(drawing) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (drawing.name === 'Dessin vide') {
                this.drawingService.canvasImage = drawing.image;
                this.dialog.close(true);
                return;
            }
            if (yield this.addImageToDrawing(drawing)) {
                this.drawingService.canvasImage = drawing.image;
                this.dialog.close(true);
            }
            else {
                this.snackBar.open('le dessin ne peut etre affiche', '', {
                    duration: 2000,
                });
            }
        });
    }
    addImageToDrawing(drawing) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((success) => {
                this.basicService.getDrawing(drawing.id).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    drawing.image = yield this.blobToURL(data);
                    success(true);
                }), (error) => {
                    if (error) {
                        this.allDrawing.splice(this.allDrawing.indexOf(drawing), 1);
                        if (this.selectedEtiquettes.length === 0) {
                            this.noDrawingFilter();
                        }
                        else {
                            this.setDrawingFilter();
                        }
                        success(false);
                    }
                });
            });
        });
    }
    blobToURL(blob) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const reader = new FileReader();
            return new Promise((success) => {
                reader.addEventListener('load', () => {
                    success(reader.result);
                });
                reader.readAsDataURL(blob);
            });
        });
    }
}
CarrouselComponent.ɵfac = function CarrouselComponent_Factory(t) { return new (t || CarrouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_index_save_service__WEBPACK_IMPORTED_MODULE_11__["SaveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"])); };
CarrouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CarrouselComponent, selectors: [["app-carrousel"]], viewQuery: function CarrouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.etiquetteInput = _t.first);
    } }, hostBindings: function CarrouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function CarrouselComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEventDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 26, vars: 12, consts: [["mat-dialog-title", "", 1, "title"], ["aria-label", "etiquette selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "filtre", "id", "etiquetteInput", 3, "matChipInputFor", "formControl", "matAutocomplete", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["etiquetteInput", ""], ["id", "autoComplete", 3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "left-button", 3, "click"], [1, "fiche-container"], [1, "fiche", 3, "dessin", "openFicheEvent", "deleteFicheEvent"], ["id", "right-button", 3, "click"], [1, "action"], ["mat-raised-button", "", "mat-dialog-close", "", 1, "close"], [3, "selectable", "removable", "removed"], ["matChipRemove", ""], [3, "value"]], template: function CarrouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Carrousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-chip-list", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CarrouselComponent_mat_chip_5_Template, 4, 3, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("matChipInputTokenEnd", function CarrouselComponent_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-autocomplete", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function CarrouselComponent_Template_mat_autocomplete_optionSelected_8_listener($event) { return ctx.selected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CarrouselComponent_mat_option_10_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarrouselComponent_Template_button_click_13_listener() { return ctx.increaseIndex(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "app-fiche", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("openFicheEvent", function CarrouselComponent_Template_app_fiche_openFicheEvent_17_listener($event) { return ctx.open($event); })("deleteFicheEvent", function CarrouselComponent_Template_app_fiche_deleteFicheEvent_17_listener($event) { return ctx.deleteDrawing($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "app-fiche", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("openFicheEvent", function CarrouselComponent_Template_app_fiche_openFicheEvent_18_listener($event) { return ctx.open($event); })("deleteFicheEvent", function CarrouselComponent_Template_app_fiche_deleteFicheEvent_18_listener($event) { return ctx.deleteDrawing($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "app-fiche", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("openFicheEvent", function CarrouselComponent_Template_app_fiche_openFicheEvent_19_listener($event) { return ctx.open($event); })("deleteFicheEvent", function CarrouselComponent_Template_app_fiche_deleteFicheEvent_19_listener($event) { return ctx.deleteDrawing($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarrouselComponent_Template_button_click_20_listener() { return ctx.decreaseIndex(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-dialog-actions", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedEtiquettes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matChipInputFor", _r0)("formControl", ctx.etiquetteCtrl)("matAutocomplete", _r3)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, ctx.filteredEtiquettes));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dessin", ctx.previousFiche);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dessin", ctx.centerFiche);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dessin", ctx.nextFiche);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _fiche_fiche_component__WEBPACK_IMPORTED_MODULE_16__["FicheComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  cursor: default;\n  font-family: Poppins, sans-serif;\n  text-align: center;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 55vh;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.fiche-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-width: 65vw;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.fiche[_ngcontent-%COMP%] {\n  flex: 33%;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.action[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.close[_ngcontent-%COMP%] {\n  background-color: #1f62f2;\n  color: white;\n}\n\napp-fiche[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 50vh;\n  max-width: 20vw;\n  border-style: solid;\n  border-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJyb3VzZWwvY2Fycm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFDQTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVEOztBQUFBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFHRDs7QUFEQTtFQUNDLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSUQ7O0FBRkE7RUFDQyx5QkFBQTtBQUtEOztBQUhBO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0FBTUQ7O0FBSEE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU1EIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJyb3VzZWwvY2Fycm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcblx0Zm9udC1zaXplOiAyOHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxubWF0LWRpYWxvZy1jb250ZW50IHtcblx0ZGlzcGxheTogZmxleDtcblx0bWluLWhlaWdodDogNTV2aDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZpY2hlLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdG1pbi13aWR0aDogNjV2dztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmljaGUge1xuXHRmbGV4OiAzMyU7XG5cdG1pbi13aWR0aDogMDtcblx0bWluLWhlaWdodDogMDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hY3Rpb24ge1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNsb3NlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzFmNjJmMjtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG5hcHAtZmljaGUge1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRoZWlnaHQ6IDUwdmg7XG5cdG1heC13aWR0aDogMjB2dztcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CarrouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-carrousel',
                templateUrl: './carrousel.component.html',
                styleUrls: ['./carrousel.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_index_save_service__WEBPACK_IMPORTED_MODULE_11__["SaveService"] }, { type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }]; }, { matAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['auto']
        }], etiquetteInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['etiquetteInput']
        }], handleKeyboardEventDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/carrousel/carrousel.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/carrousel/carrousel.module.ts ***!
  \**********************************************************/
/*! exports provided: CarrouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrouselModule", function() { return CarrouselModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_components_fiche_fiche_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/fiche/fiche.module */ "./src/app/components/fiche/fiche.module.ts");
/* harmony import */ var _carrousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carrousel.component */ "./src/app/components/carrousel/carrousel.component.ts");















class CarrouselModule {
}
CarrouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CarrouselModule });
CarrouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CarrouselModule_Factory(t) { return new (t || CarrouselModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            src_app_components_fiche_fiche_module__WEBPACK_IMPORTED_MODULE_12__["FicheModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CarrouselModule, { declarations: [_carrousel_component__WEBPACK_IMPORTED_MODULE_13__["CarrouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        src_app_components_fiche_fiche_module__WEBPACK_IMPORTED_MODULE_12__["FicheModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"]], exports: [_carrousel_component__WEBPACK_IMPORTED_MODULE_13__["CarrouselComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarrouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_carrousel_component__WEBPACK_IMPORTED_MODULE_13__["CarrouselComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    src_app_components_fiche_fiche_module__WEBPACK_IMPORTED_MODULE_12__["FicheModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                ],
                exports: [_carrousel_component__WEBPACK_IMPORTED_MODULE_13__["CarrouselComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/color-panel/color-panel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/color-panel/color-panel.component.ts ***!
  \*****************************************************************/
/*! exports provided: ColorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPanelComponent", function() { return ColorPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/color-picker/color-picker.component */ "./src/app/components/color-picker/color-picker.component.ts");







function ColorPanelComponent_app_color_picker_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-color-picker", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("shouldHide", function ColorPanelComponent_app_color_picker_2_Template_app_color_picker_shouldHide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r4.primaryColorPicker = false; return _r3.updateColor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isPrimaryColor", true);
} }
function ColorPanelComponent_app_color_picker_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-color-picker", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("shouldHide", function ColorPanelComponent_app_color_picker_5_Template_app_color_picker_shouldHide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r7.secondColorPicker = false; return _r6.updateColor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isPrimaryColor", false);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function ColorPanelComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ColorPanelComponent_div_7_Template_div_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.useColorHistory($event, ctx_r11.colorHistory[i_r10]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.colorHistory[i_r10] || "#e6e6e6"));
} }
class ColorPanelComponent {
    constructor(drawingService) {
        this.drawingService = drawingService;
        this.primaryColorPicker = false;
        this.secondColorPicker = false;
    }
    switchMainColors() {
        const primaryColor = this.primaryColor;
        this.primaryColor = this.secondaryColor;
        this.secondaryColor = primaryColor;
    }
    useColorHistory(event, color) {
        let changePrimaryColor = null;
        if (event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_1__["MouseButton"].Left) {
            changePrimaryColor = true;
        }
        else if (event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_1__["MouseButton"].Right) {
            changePrimaryColor = false;
        }
        if (changePrimaryColor !== null) {
            this.drawingService.changeColor(color, changePrimaryColor, false);
        }
    }
    get colorHistory() {
        return this.drawingService.colorHistory;
    }
    get primaryColor() {
        return this.drawingService.primaryColor;
    }
    set primaryColor(value) {
        this.drawingService.primaryColor = value;
    }
    get secondaryColor() {
        return this.drawingService.secondaryColor;
    }
    set secondaryColor(value) {
        this.drawingService.secondaryColor = value;
    }
}
ColorPanelComponent.ɵfac = function ColorPanelComponent_Factory(t) { return new (t || ColorPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"])); };
ColorPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPanelComponent, selectors: [["app-color-panel"]], decls: 8, vars: 9, consts: [[1, "switch-wrapper"], [1, "main-color", "primary", 3, "ngStyle", "click"], ["class", "color-picker primary", 3, "isPrimaryColor", "shouldHide", 4, "ngIf"], [3, "click"], [1, "main-color", "secondary", 3, "ngStyle", "click"], ["class", "color-picker secondary", 3, "isPrimaryColor", "shouldHide", 4, "ngIf"], [1, "color-history-wrapper"], ["class", "color", 3, "ngStyle", "mousedown", 4, "ngFor", "ngForOf"], [1, "color-picker", "primary", 3, "isPrimaryColor", "shouldHide"], ["mainColorPicker", ""], [1, "color-picker", "secondary", 3, "isPrimaryColor", "shouldHide"], ["secondaryColorPicker", ""], [1, "color", 3, "ngStyle", "mousedown"]], template: function ColorPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPanelComponent_Template_div_click_1_listener() { return ctx.primaryColorPicker = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPanelComponent_app_color_picker_2_Template, 2, 1, "app-color-picker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPanelComponent_Template_button_click_3_listener() { return ctx.switchMainColors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPanelComponent_Template_div_click_4_listener() { return ctx.secondColorPicker = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPanelComponent_app_color_picker_5_Template, 2, 1, "app-color-picker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorPanelComponent_div_7_Template, 1, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.primaryColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.primaryColorPicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.secondaryColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondColorPicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colorHistory);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], src_app_components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__["ColorPickerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  justify-content: center;\n  min-height: 210px;\n  margin-right: 0;\n  padding-right: 0;\n  overflow: hidden;\n}\n\n.main-color[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n\n.main-color.primary[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  top: 25%;\n  left: 18%;\n}\n\n.main-color.secondary[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 45%;\n  left: 40%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18%;\n  right: 20%;\n  width: 30px;\n  height: 30px;\n  padding: 10px;\n  background-image: url(\"/assets/arrow.svg\");\n  background-size: cover;\n  background-color: transparent;\n  transform: rotate(180deg);\n  border: none;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.color-picker[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n\n.color-picker.primary[_ngcontent-%COMP%] {\n  position: fixed;\n  transform: translate(5%, -105%);\n}\n\n.color-picker.secondary[_ngcontent-%COMP%] {\n  position: fixed;\n  transform: translate(190px, -50%);\n}\n\n.color-history-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 10px;\n  background-color: #f4f7fd;\n  border-radius: 10px;\n  box-shadow: 5px 5px 9px #d2d4da, -5px -5px 9px #ffffff;\n}\n\n.color[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 18px;\n  flex-shrink: 0;\n  margin-right: 4%;\n  margin-bottom: 5px;\n  border-radius: 25px;\n}\n\n.switch-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  position: relative;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1wYW5lbC9jb2xvci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FBQ0Q7O0FBRUE7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtBQUNEOztBQUVBO0VBQ0MsVUFBQTtBQUNEOztBQUVBO0VBQ0MsZUFBQTtFQUNBLCtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxlQUFBO0VBQ0EsaUNBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUVBLHNEQUFBO0FBQUQ7O0FBR0E7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRDs7QUFHQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbG9yLXBhbmVsL2NvbG9yLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHRkaXNwbGF5OiBibG9jaztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1pbi1oZWlnaHQ6IDIxMHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDA7XG5cdHBhZGRpbmctcmlnaHQ6IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYWluLWNvbG9yIHtcblx0aGVpZ2h0OiA1MHB4O1xuXHR3aWR0aDogNTBweDtcbn1cblxuLm1haW4tY29sb3IucHJpbWFyeSB7XG5cdHotaW5kZXg6IDE7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAyNSU7XG5cdGxlZnQ6IDE4JTtcbn1cblxuLm1haW4tY29sb3Iuc2Vjb25kYXJ5IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDQ1JTtcblx0bGVmdDogNDAlO1xufVxuXG5idXR0b24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTglO1xuXHRyaWdodDogMjAlO1xuXHR3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYXJyb3cuc3ZnJyk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5jb2xvci1waWNrZXIge1xuXHR6LWluZGV4OiAzO1xufVxuXG4uY29sb3ItcGlja2VyLnByaW1hcnkge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAtMTA1JSk7XG59XG5cbi5jb2xvci1waWNrZXIuc2Vjb25kYXJ5IHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxOTBweCwgLTUwJSk7XG59XG5cbi5jb2xvci1oaXN0b3J5LXdyYXBwZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmN2ZkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXG5cdGJveC1zaGFkb3c6IDVweCA1cHggOXB4ICNkMmQ0ZGEsIC01cHggLTVweCA5cHggI2ZmZmZmZjtcbn1cblxuLmNvbG9yIHtcblx0d2lkdGg6IDE1JTtcblx0aGVpZ2h0OiAxOHB4O1xuXHRmbGV4LXNocmluazogMDtcblx0bWFyZ2luLXJpZ2h0OiA0JTtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uc3dpdGNoLXdyYXBwZXIge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxNDBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-panel',
                templateUrl: './color-panel.component.html',
                styleUrls: ['./color-panel.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/color-panel/color-panel.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/color-panel/color-panel.module.ts ***!
  \**************************************************************/
/*! exports provided: ColorPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPanelModule", function() { return ColorPanelModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _app_components_color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/color-picker/color-picker.module */ "./src/app/components/color-picker/color-picker.module.ts");
/* harmony import */ var _color_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-panel.component */ "./src/app/components/color-panel/color-panel.component.ts");







class ColorPanelModule {
}
ColorPanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ColorPanelModule });
ColorPanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ColorPanelModule_Factory(t) { return new (t || ColorPanelModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_components_color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ColorPanelModule, { declarations: [_color_panel_component__WEBPACK_IMPORTED_MODULE_5__["ColorPanelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_components_color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]], exports: [_color_panel_component__WEBPACK_IMPORTED_MODULE_5__["ColorPanelComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ColorPanelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_color_panel_component__WEBPACK_IMPORTED_MODULE_5__["ColorPanelComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_components_color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]],
                exports: [_color_panel_component__WEBPACK_IMPORTED_MODULE_5__["ColorPanelComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/color-picker/color-palette/color-palette.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/color-picker/color-palette/color-palette.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ColorPaletteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPaletteComponent", function() { return ColorPaletteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var src_app_shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global */ "./src/app/shared/global.ts");





const _c0 = ["canvas"];
// Ce composant a ete construit a l'aide du tutoriel suivant
// https://malcoded.com/posts/angular-color-picker/
class ColorPaletteComponent {
    constructor(drawingService) {
        this.drawingService = drawingService;
        this.color = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }
    ngAfterViewInit() {
        this.selectedPosition = { x: this.canvas.nativeElement.width - 1, y: 0 };
        this.draw();
    }
    ngOnChanges(changes) {
        if (changes.hue && this.canvas) {
            this.draw();
            this.emitColor(this.selectedPosition.x, this.selectedPosition.y);
        }
    }
    onMouseDown(evt) {
        document.body.addEventListener('mousemove', this.onMouseMove);
        document.body.addEventListener('mouseup', this.onMouseUp);
        this.onMouseMove(evt);
    }
    onMouseUp() {
        document.body.removeEventListener('mousemove', this.onMouseMove);
        document.body.removeEventListener('mouseup', this.onMouseUp);
    }
    onMouseMove(evt) {
        const canvasDimensions = this.canvas.nativeElement.getBoundingClientRect();
        let x = evt.x - canvasDimensions.left;
        x = x < 0 ? 0 : x >= canvasDimensions.width ? canvasDimensions.width - 1 : x;
        let y = evt.y - canvasDimensions.top;
        y = y < 0 ? 0 : y > canvasDimensions.height ? canvasDimensions.height : y;
        this.selectedPosition = { x, y };
        this.draw();
        this.emitColor(x, y);
    }
    emitColor(x, y) {
        const hexColor = this.getColorAtPosition(x, y);
        this.color.emit(hexColor);
    }
    getColorAtPosition(x, y) {
        const imageData = this.ctx.getImageData(x, y, 1, 1).data;
        return this.drawingService.RGBToHex(imageData[0], imageData[1], imageData[2]);
    }
    draw() {
        if (!this.ctx) {
            this.ctx = this.canvas.nativeElement.getContext('2d');
        }
        const width = this.canvas.nativeElement.width;
        const height = this.canvas.nativeElement.height;
        this.ctx.fillStyle = this.hue;
        this.ctx.fillRect(1, 0, width - 1, height - 1);
        const whiteGrad = this.ctx.createLinearGradient(0, 0, width - 1, 0);
        whiteGrad.addColorStop(0, '#FFFFFFFF');
        whiteGrad.addColorStop(1, '#FFFFFF00');
        this.ctx.fillStyle = whiteGrad;
        this.ctx.fillRect(0, 0, width - 1, height);
        const blackGrad = this.ctx.createLinearGradient(0, 0, 0, height - 1);
        blackGrad.addColorStop(0, '#00000000');
        blackGrad.addColorStop(1, '#000000FF');
        this.ctx.fillStyle = blackGrad;
        this.ctx.fillRect(0, 1, width, height - 1);
        this.ctx.strokeStyle = 'white';
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(this.selectedPosition.x, this.selectedPosition.y, src_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].SELECTED_RECTANGLE_HEIGHT, 0, 2 * Math.PI);
        this.ctx.lineWidth = src_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].SELECTED_LINE_WIDTH;
        this.ctx.stroke();
    }
}
ColorPaletteComponent.ɵfac = function ColorPaletteComponent_Factory(t) { return new (t || ColorPaletteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"])); };
ColorPaletteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPaletteComponent, selectors: [["app-color-palette"]], viewQuery: function ColorPaletteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, inputs: { hue: "hue" }, outputs: { color: "color" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["width", "150", "height", "150", 1, "color-palette", 3, "mousedown"], ["canvas", ""]], template: function ColorPaletteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ColorPaletteComponent_Template_canvas_mousedown_0_listener($event) { return ctx.onMouseDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".color-palette[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1waWNrZXIvY29sb3ItcGFsZXR0ZS9jb2xvci1wYWxldHRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQUNEOztBQUVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbG9yLXBpY2tlci9jb2xvci1wYWxldHRlL2NvbG9yLXBhbGV0dGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItcGFsZXR0ZTpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3Qge1xuXHR3aWR0aDogMTUwcHg7XG5cdGhlaWdodDogMTUwcHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPaletteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-palette',
                templateUrl: './color-palette.component.html',
                styleUrls: ['./color-palette.component.scss'],
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas']
        }], hue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/color-picker/color-picker.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/color-picker/color-picker.component.ts ***!
  \*******************************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/event-manager/event-manager.service */ "./src/app/services/event-manager/event-manager.service.ts");
/* harmony import */ var src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-palette/color-palette.component */ "./src/app/components/color-picker/color-palette/color-palette.component.ts");
/* harmony import */ var _color_slider_color_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-slider/color-slider.component */ "./src/app/components/color-picker/color-slider/color-slider.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = function (a0, a1) { return { "background-color": a0, opacity: a1 }; };
class ColorPickerComponent {
    constructor(drawingService, eventManager, elementRef) {
        this.drawingService = drawingService;
        this.eventManager = eventManager;
        this.elementRef = elementRef;
        this.isPrimaryColor = true;
        this.shouldHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.HEX_COLOR_PATTERN = new RegExp('^([0-9A-Fa-f]{2})$');
        this.hue = '#FF0000FF';
    }
    ngOnInit() {
        this.color = this.isPrimaryColor ? this.drawingService.primaryColor : this.drawingService.secondaryColor;
        this.eventManager.disableShortcuts();
    }
    ngOnDestroy() {
        this.eventManager.enableShortcuts();
    }
    onMouseDown(evt) {
        const dimensions = this.elementRef.nativeElement.getBoundingClientRect();
        const x = evt.x - dimensions.left;
        const y = evt.y - dimensions.top;
        if (x < 0 || x >= dimensions.width || y < 0 || y > dimensions.height) {
            this.shouldHide.emit();
        }
    }
    changeColor(color) {
        this.color = this.replaceStringAt(this.color, 0, color);
    }
    updateColor() {
        this.drawingService.changeColor(this.color, this.isPrimaryColor, true);
    }
    handleKeyDown(event) {
        const charCodeAt = event.key.charCodeAt(0);
        if ((charCodeAt >= '0'.charCodeAt(0) && charCodeAt <= '9'.charCodeAt(0)) ||
            (charCodeAt >= 'a'.charCodeAt(0) && charCodeAt <= 'f'.charCodeAt(0)) ||
            (charCodeAt >= 'A'.charCodeAt(0) && charCodeAt <= 'F'.charCodeAt(0)) ||
            event.key === 'Backspace' ||
            event.key === 'Delete') {
            return;
        }
        event.preventDefault();
    }
    get hexR() {
        return this.color.substring(src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].RED_INDEX_HEX, src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].RED_INDEX_HEX + src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].HEX_COLOR_LENGTH);
    }
    set hexR(value) {
        if (value.length === 2 && value.match(this.HEX_COLOR_PATTERN)) {
            this.color = this.replaceStringAt(this.color, src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].RED_INDEX_HEX, value);
        }
    }
    get hexG() {
        return this.color.substring(src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].GREEN_INDEX_HEX, src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].GREEN_INDEX_HEX + src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].HEX_COLOR_LENGTH);
    }
    set hexG(value) {
        if (value.length === 2 && value.match(this.HEX_COLOR_PATTERN)) {
            this.color = this.replaceStringAt(this.color, src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].GREEN_INDEX_HEX, value);
        }
    }
    get hexB() {
        return this.color.substring(src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].BLUE_INDEX_HEX, src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].BLUE_INDEX_HEX + src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].HEX_COLOR_LENGTH);
    }
    set hexB(value) {
        if (value.length === 2 && value.match(this.HEX_COLOR_PATTERN)) {
            this.color = this.replaceStringAt(this.color, src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].BLUE_INDEX_HEX, value);
        }
    }
    get alpha() {
        const alphaString = this.color.substring(src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].ALPHA_INDEX_HEX, src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].ALPHA_INDEX_HEX + src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].HEX_COLOR_LENGTH);
        return +(parseInt(alphaString, 16) / src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].MAX_HEX_VALUE).toFixed(2);
    }
    set alpha(value) {
        let newAlpha = Math.floor(value * src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].MAX_HEX_VALUE)
            .toString(16)
            .toUpperCase();
        if (newAlpha.length === 1)
            newAlpha = '0' + newAlpha;
        this.color = this.replaceStringAt(this.color, src_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].ALPHA_INDEX_HEX, newAlpha);
    }
    replaceStringAt(stringToModify, index, stringToInsert) {
        return stringToModify.substring(0, index) + stringToInsert + stringToModify.substring(index + stringToInsert.length);
    }
}
ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) { return new (t || ColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_1__["EventManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPickerComponent, selectors: [["app-color-picker"]], hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ColorPickerComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function ColorPickerComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { isPrimaryColor: "isPrimaryColor" }, outputs: { shouldHide: "shouldHide" }, decls: 24, vars: 10, consts: [[1, "color-wrapper"], [3, "hue", "color"], ["colorPalette", ""], [3, "color"], ["colorSlider", ""], [1, "input-wrapper"], [1, "text-input-wrapper"], [1, "text-input"], ["matInput", "", "type", "search", "name", "r", "maxlength", "2", "pattern", "[a-fA-F0-9]{2}", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "search", "name", "g", "maxlength", "2", "pattern", "[a-fA-F0-9]{2}", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "search", "name", "b", "maxlength", "2", "pattern", "[a-fA-F0-9]{2}", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "opacity-color-wrapper"], ["name", "opacity", "min", "0", "max", "1", "step", "0.01", "thumbLabel", "true", 1, "opacity-slider", 3, "value", "input"], [1, "color-div", 3, "ngStyle"]], template: function ColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-color-palette", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("color", function ColorPickerComponent_Template_app_color_palette_color_1_listener($event) { return ctx.changeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-color-slider", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("color", function ColorPickerComponent_Template_app_color_slider_color_3_listener($event) { return ctx.hue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColorPickerComponent_Template_input_ngModelChange_10_listener($event) { return ctx.hexR = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColorPickerComponent_Template_input_ngModelChange_14_listener($event) { return ctx.hexG = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColorPickerComponent_Template_input_ngModelChange_18_listener($event) { return ctx.hexB = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ColorPickerComponent_Template_mat_slider_input_20_listener($event) { return ctx.alpha = $event.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hue", ctx.hue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hexR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hexG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hexB);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.alpha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.alpha, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.color, ctx.alpha));
    } }, directives: [_color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_4__["ColorPaletteComponent"], _color_slider_color_slider_component__WEBPACK_IMPORTED_MODULE_5__["ColorSliderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 200px;\n  padding: 20px;\n  background-color: gainsboro;\n  user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -o-user-select: none;\n}\n\n.color-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: 150px;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-radius: 1px;\n  border: 1px solid gainsboro;\n  padding: 8px;\n  height: 90px;\n  justify-content: center;\n}\n\n.color-div[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid gainsboro;\n}\n\n.text-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.text-input[_ngcontent-%COMP%] {\n  width: 30%;\n  font-family: \"Helvetica\";\n  line-height: 15px;\n  padding-right: 5%;\n}\n\n.opacity-color-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.opacity-slider[_ngcontent-%COMP%] {\n  min-width: 50%;\n}\n\nmat-slider[_ngcontent-%COMP%]    + b[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\napp-color-slider[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFFQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0VBQ0EsYUFBQTtBQUFEOztBQUdBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUFEOztBQUdBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUFEOztBQUdBO0VBQ0MsYUFBQTtBQUFEOztBQUdBO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUFEOztBQUdBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBQUQ7O0FBR0E7RUFDQyxjQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0FBQUQ7O0FBR0E7RUFDQyxpQkFBQTtBQUFEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDIwMHB4O1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XG5cblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5jb2xvci13cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0aGVpZ2h0OiAxNTBweDtcbn1cblxuLmlucHV0LXdyYXBwZXIge1xuXHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRib3JkZXItcmFkaXVzOiAxcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjAsIDIyMCwgMjIwKTtcblx0cGFkZGluZzogOHB4O1xuXHRoZWlnaHQ6IDkwcHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sb3ItZGl2IHtcblx0ZmxleC1zaHJpbms6IDA7XG5cdHdpZHRoOiAzMnB4O1xuXHRoZWlnaHQ6IDMycHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG4udGV4dC1pbnB1dC13cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLnRleHQtaW5wdXQge1xuXHR3aWR0aDogMzAlO1xuXHRmb250LWZhbWlseTogJ0hlbHZldGljYSc7XG5cdGxpbmUtaGVpZ2h0OiAxNXB4O1xuXHRwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLm9wYWNpdHktY29sb3Itd3JhcHBlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm9wYWNpdHktc2xpZGVyIHtcblx0bWluLXdpZHRoOiA1MCU7XG59XG5cbm1hdC1zbGlkZXIgKyBiIHtcblx0cGFkZGluZzogMTBweDtcbn1cblxuYXBwLWNvbG9yLXNsaWRlciB7XG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-picker',
                templateUrl: './color-picker.component.html',
                styleUrls: ['./color-picker.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"] }, { type: _app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_1__["EventManagerService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { isPrimaryColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], shouldHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousedown', ['$event']]
        }], handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/color-picker/color-picker.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/color-picker/color-picker.module.ts ***!
  \****************************************************************/
/*! exports provided: ColorPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return ColorPickerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var src_app_components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/color-picker/color-picker.component */ "./src/app/components/color-picker/color-picker.component.ts");
/* harmony import */ var _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-palette/color-palette.component */ "./src/app/components/color-picker/color-palette/color-palette.component.ts");
/* harmony import */ var _color_slider_color_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color-slider/color-slider.component */ "./src/app/components/color-picker/color-slider/color-slider.component.ts");










class ColorPickerModule {
}
ColorPickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ColorPickerModule });
ColorPickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ColorPickerModule_Factory(t) { return new (t || ColorPickerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ColorPickerModule, { declarations: [src_app_components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_6__["ColorPickerComponent"], _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_7__["ColorPaletteComponent"], _color_slider_color_slider_component__WEBPACK_IMPORTED_MODULE_8__["ColorSliderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [src_app_components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_6__["ColorPickerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ColorPickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [src_app_components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_6__["ColorPickerComponent"], _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_7__["ColorPaletteComponent"], _color_slider_color_slider_component__WEBPACK_IMPORTED_MODULE_8__["ColorSliderComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                exports: [src_app_components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_6__["ColorPickerComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/color-picker/color-slider/color-slider.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/color-picker/color-slider/color-slider.component.ts ***!
  \********************************************************************************/
/*! exports provided: ColorSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSliderComponent", function() { return ColorSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var src_app_shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global */ "./src/app/shared/global.ts");





const _c0 = ["canvas"];
// Ce composant a ete construit a l'aide du tutoriel suivant
// https://malcoded.com/posts/angular-color-picker/
class ColorSliderComponent {
    constructor(drawingService) {
        this.drawingService = drawingService;
        this.color = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }
    ngAfterViewInit() {
        this.selectedHeight = 1;
        this.draw();
    }
    onMouseUp() {
        document.body.removeEventListener('mousemove', this.onMouseMove);
        document.body.removeEventListener('mouseup', this.onMouseUp);
    }
    onMouseDown(evt) {
        document.body.addEventListener('mousemove', this.onMouseMove);
        document.body.addEventListener('mouseup', this.onMouseUp);
        this.onMouseMove(evt);
    }
    onMouseMove(evt) {
        const canvasDimensions = this.canvas.nativeElement.getBoundingClientRect();
        let y = evt.y - canvasDimensions.top;
        y = y < 0 ? 0 : y >= canvasDimensions.height ? canvasDimensions.height - 1 : y;
        this.selectedHeight = y;
        this.draw();
        this.emitColor(this.canvas.nativeElement.width / 2, y);
    }
    emitColor(x, y) {
        const hexColor = this.getColorAtPosition(x, y);
        this.color.emit(hexColor);
    }
    getColorAtPosition(x, y) {
        const imageData = this.ctx.getImageData(x, y, 1, 1).data;
        return this.drawingService.RGBToHex(imageData[0], imageData[1], imageData[2]);
    }
    draw() {
        if (!this.ctx) {
            this.ctx = this.canvas.nativeElement.getContext('2d');
        }
        const width = this.canvas.nativeElement.width;
        const height = this.canvas.nativeElement.height;
        const gradient = this.ctx.createLinearGradient(0, 0, 0, height);
        // tslint:disable:no-magic-numbers
        gradient.addColorStop(0, '#FF0000');
        gradient.addColorStop(1 / 6, '#FFFF00');
        gradient.addColorStop(1 / 3, '#00FF00');
        gradient.addColorStop(1 / 2, '#00FFFF');
        gradient.addColorStop(2 / 3, '#0000FF');
        gradient.addColorStop(5 / 6, '#FF00FF');
        gradient.addColorStop(1, '#FF0000');
        // tslint:enable:no-magic-numbers
        this.ctx.beginPath();
        this.ctx.rect(0, 0, width, height);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = src_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].SELECTED_LINE_WIDTH;
        this.ctx.rect(0, this.selectedHeight - src_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].SELECTED_LINE_WIDTH, width, src_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].SELECTED_RECTANGLE_HEIGHT);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}
ColorSliderComponent.ɵfac = function ColorSliderComponent_Factory(t) { return new (t || ColorSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"])); };
ColorSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorSliderComponent, selectors: [["app-color-slider"]], viewQuery: function ColorSliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, outputs: { color: "color" }, decls: 2, vars: 0, consts: [["width", "30", "height", "150", 1, "color-slider", 3, "mousedown"], ["canvas", ""]], template: function ColorSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ColorSliderComponent_Template_canvas_mousedown_0_listener($event) { return ctx.onMouseDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".color-slider[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 30px;\n}\n\n.color-slider[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1waWNrZXIvY29sb3Itc2xpZGVyL2NvbG9yLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxXQUFBO0FBQ0Q7O0FBRUE7RUFDQyxlQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbG9yLXBpY2tlci9jb2xvci1zbGlkZXIvY29sb3Itc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLXNsaWRlciB7XG5cdGhlaWdodDogMTUwcHg7XG5cdHdpZHRoOiAzMHB4O1xufVxuXG4uY29sb3Itc2xpZGVyOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-slider',
                templateUrl: './color-slider.component.html',
                styleUrls: ['./color-slider.component.scss'],
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas']
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/drawing/drawing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/drawing/drawing.component.ts ***!
  \*********************************************************/
/*! exports provided: DrawingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingComponent", function() { return DrawingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/event-manager/event-manager.service */ "./src/app/services/event-manager/event-manager.service.ts");
/* harmony import */ var _app_services_grid_grid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/grid/grid.service */ "./src/app/services/grid/grid.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _selection_selection_box_selection_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selection/selection-box/selection-box.component */ "./src/app/components/selection/selection-box/selection-box.component.ts");












const _c0 = ["baseCanvas"];
const _c1 = ["previewCanvas"];
const _c2 = ["container"];
const _c3 = function (a0) { return { opacity: a0 }; };
function DrawingComponent__svg_svg_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pattern", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r3.canvasWidth)("height", ctx_r3.canvasHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r3.gridService.options.gridOptions.size)("height", ctx_r3.gridService.options.gridOptions.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, ctx_r3.gridService.options.gridOptions.opacity / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r3.gridService.vPath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, ctx_r3.gridService.options.gridOptions.opacity / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r3.gridService.hPath);
} }
const _c4 = function (a0, a1) { return { "width.px": a0, "height.px": a1 }; };
function DrawingComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c4, ctx_r4.canvasPreview.x, ctx_r4.canvasPreview.y));
} }
class DrawingComponent {
    constructor(drawingService, eventManager, gridService) {
        this.drawingService = drawingService;
        this.eventManager = eventManager;
        this.gridService = gridService;
        this.isResizing = false;
        this.canvasSize = { x: _app_shared_global__WEBPACK_IMPORTED_MODULE_4__["Global"].DEFAULT_WIDTH, y: _app_shared_global__WEBPACK_IMPORTED_MODULE_4__["Global"].DEFAULT_HEIGHT };
        this.canvasResizePreview = { x: _app_shared_global__WEBPACK_IMPORTED_MODULE_4__["Global"].DEFAULT_WIDTH, y: _app_shared_global__WEBPACK_IMPORTED_MODULE_4__["Global"].DEFAULT_HEIGHT };
        this.canvasLimit = { x: _app_shared_global__WEBPACK_IMPORTED_MODULE_4__["Global"].DEFAULT_WIDTH, y: _app_shared_global__WEBPACK_IMPORTED_MODULE_4__["Global"].DEFAULT_HEIGHT };
        this.gridService.options.gridOptions.isActive = false;
    }
    ngAfterViewInit() {
        this.baseCtx = this.baseCanvas.nativeElement.getContext('2d');
        this.drawingService.baseCtx = this.baseCtx;
        this.previewCtx = this.previewCanvas.nativeElement.getContext('2d');
        this.drawingService.previewCtx = this.previewCtx;
        this.drawingService.containerSize.x = this.container.nativeElement.clientWidth;
        this.drawingService.containerSize.y = this.container.nativeElement.clientHeight;
        this.drawingService.canvasSize = this.canvasSize;
        setTimeout(() => {
            this.canvasLimit.x = this.drawingService.containerSize.x - _app_shared_global__WEBPACK_IMPORTED_MODULE_4__["Global"].DRAWING_CONTAINER_SIZE_BUFFER;
            this.canvasLimit.y = this.drawingService.containerSize.y - _app_shared_global__WEBPACK_IMPORTED_MODULE_4__["Global"].DRAWING_CONTAINER_SIZE_BUFFER;
            this.drawingService.initCanvas();
        });
    }
    get canvasWidth() {
        return this.canvasSize.x;
    }
    get canvasHeight() {
        return this.canvasSize.y;
    }
    get limitWidth() {
        return this.canvasLimit.x;
    }
    get limitHeight() {
        return this.canvasLimit.y;
    }
    get canvasPreview() {
        return this.canvasResizePreview;
    }
    get cornerResizePos() {
        return this.drawingService.cornerResizePos;
    }
    get rightResizePos() {
        return this.drawingService.rightResizePos;
    }
    get bottomResizePos() {
        return this.drawingService.bottomResizePos;
    }
    onMouseDown(event) {
        if (!this.isResizing) {
            this.eventManager.startDrawing(event);
        }
    }
    startPreview() {
        this.isResizing = true;
    }
    preview(distanceX, distanceY) {
        this.canvasResizePreview.x = this.canvasSize.x + distanceX;
        this.canvasResizePreview.y = this.canvasSize.y + distanceY;
        this.drawingService.placeResizeButton(this.canvasResizePreview);
    }
    endPreview() {
        const oldCanvas = this.baseCtx.canvas.toDataURL();
        const img = new Image();
        this.isResizing = false;
        this.previewCtx.canvas.width = this.baseCtx.canvas.width = this.canvasSize.x = this.canvasResizePreview.x;
        this.previewCtx.canvas.height = this.baseCtx.canvas.height = this.canvasSize.y = this.canvasResizePreview.y;
        this.baseCtx.fillStyle = 'white';
        this.baseCtx.fillRect(0, 0, this.canvasSize.x, this.canvasSize.y);
        this.drawingService.placeResizeButton(this.canvasSize);
        img.onload = () => {
            this.baseCtx.drawImage(img, 0, 0);
            localStorage.setItem('save', this.baseCtx.canvas.toDataURL());
        };
        img.src = oldCanvas;
        const canSize = Object.assign({}, this.canvasResizePreview);
        const funcResize = () => {
            this.actionWrapper(img, oldCanvas, canSize);
        };
        this.drawingService.addAction(funcResize);
    }
    actionWrapper(img, oldCanvas, canSize) {
        this.previewCtx.canvas.width = this.baseCtx.canvas.width = this.canvasSize.x = canSize.x;
        this.previewCtx.canvas.height = this.baseCtx.canvas.height = this.canvasSize.y = canSize.y;
        this.drawingService.placeResizeButton(this.canvasSize);
        img.onload = () => {
            this.baseCtx.drawImage(img, 0, 0);
        };
        img.src = oldCanvas;
    }
}
DrawingComponent.ɵfac = function DrawingComponent_Factory(t) { return new (t || DrawingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_2__["EventManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_grid_grid_service__WEBPACK_IMPORTED_MODULE_3__["GridService"])); };
DrawingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawingComponent, selectors: [["app-drawing"]], viewQuery: function DrawingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.baseCanvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.previewCanvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 15, vars: 13, consts: [["id", "drawing-container"], ["container", ""], [1, "limit", 3, "ngStyle"], ["id", "canvas-container", 3, "ngStyle", "mousedown"], ["id", "canvas"], ["baseCanvas", ""], ["id", "previewLayer"], ["previewCanvas", ""], ["class", "grid", 4, "ngIf"], ["id", "corner-cp", "cdkDrag", "", "cdkDragBoundary", ".limit", 1, "resize-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragReleased", "cdkDragMoved"], ["id", "right-cp", "cdkDrag", "", "cdkDragLockAxis", "x", "cdkDragBoundary", ".limit", 1, "resize-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragReleased", "cdkDragMoved"], ["id", "bottom-cp", "cdkDrag", "", "cdkDragLockAxis", "y", "cdkDragBoundary", ".limit", 1, "resize-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragReleased", "cdkDragMoved"], ["class", "preview", 3, "ngStyle", 4, "ngIf"], ["id", "selection"], [1, "grid"], ["id", "grid", "patternUnits", "userSpaceOnUse"], ["fill", "none", "stroke", "gray", "stroke-width", "1", 3, "ngStyle"], ["width", "100%", "height", "100%", "fill", "url(#grid)"], [1, "preview", 3, "ngStyle"]], template: function DrawingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function DrawingComponent_Template_div_mousedown_3_listener($event) { return ctx.onMouseDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DrawingComponent__svg_svg_9_Template, 6, 12, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function DrawingComponent_Template_div_cdkDragStarted_10_listener() { return ctx.startPreview(); })("cdkDragReleased", function DrawingComponent_Template_div_cdkDragReleased_10_listener() { return ctx.endPreview(); })("cdkDragMoved", function DrawingComponent_Template_div_cdkDragMoved_10_listener($event) { return ctx.preview($event.distance.x, $event.distance.y); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function DrawingComponent_Template_div_cdkDragStarted_11_listener() { return ctx.startPreview(); })("cdkDragReleased", function DrawingComponent_Template_div_cdkDragReleased_11_listener() { return ctx.endPreview(); })("cdkDragMoved", function DrawingComponent_Template_div_cdkDragMoved_11_listener($event) { return ctx.preview($event.distance.x, $event.distance.y); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function DrawingComponent_Template_div_cdkDragStarted_12_listener() { return ctx.startPreview(); })("cdkDragReleased", function DrawingComponent_Template_div_cdkDragReleased_12_listener() { return ctx.endPreview(); })("cdkDragMoved", function DrawingComponent_Template_div_cdkDragMoved_12_listener($event) { return ctx.preview($event.distance.x, $event.distance.y); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DrawingComponent_div_13_Template, 1, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-selection-box", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c4, ctx.limitWidth, ctx.limitHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c4, ctx.canvasWidth, ctx.canvasHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gridService.options.gridOptions.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.cornerResizePos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.rightResizePos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.bottomResizePos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isResizing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _selection_selection_box_selection_box_component__WEBPACK_IMPORTED_MODULE_7__["SelectionBoxComponent"]], styles: ["#drawing-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.limit[_ngcontent-%COMP%] {\n  position: relative;\n  width: 98%;\n  height: 98%;\n}\n\n#canvas-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ncanvas[_ngcontent-%COMP%] {\n  cursor: crosshair;\n  border: 1px solid #000000;\n  border-left: 0px;\n  border-top: 0px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n#canvas[_ngcontent-%COMP%] {\n  z-index: 1;\n  background-color: white;\n}\n\n#previewLayer[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.resize-button[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  margin: 0%;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  z-index: 10;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.resize-button[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n#right-cp[_ngcontent-%COMP%] {\n  cursor: e-resize;\n}\n\n#corner-cp[_ngcontent-%COMP%] {\n  cursor: nwse-resize;\n}\n\n#bottom-cp[_ngcontent-%COMP%] {\n  cursor: n-resize;\n}\n\n.preview[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px dotted black;\n  z-index: 3;\n}\n\n#selection[_ngcontent-%COMP%] {\n  cursor: grab;\n  position: absolute;\n  z-index: 9;\n}\n\n.grid[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcmF3aW5nL2RyYXdpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUQ7O0FBQUE7RUFDQyxrQkFBQTtBQUdEOztBQUFBO0VBQ0MsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdEOztBQUFBO0VBQ0MsVUFBQTtFQUNBLHVCQUFBO0FBR0Q7O0FBQUE7RUFDQyxVQUFBO0FBR0Q7O0FBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtHQUFBO0FBR0Q7O0FBQUE7RUFDQyxxSEFBQTtBQUdEOztBQURBO0VBQ0MsZ0JBQUE7QUFJRDs7QUFEQTtFQUNDLG1CQUFBO0FBSUQ7O0FBRkE7RUFDQyxnQkFBQTtBQUtEOztBQUhBO0VBQ0Msa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFNRDs7QUFIQTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFNRDs7QUFIQTtFQUNDLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBTUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RyYXdpbmcvZHJhd2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkcmF3aW5nLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cbi5saW1pdCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDk4JTtcblx0aGVpZ2h0OiA5OCU7XG59XG4jY2FudmFzLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuY2FudmFzIHtcblx0Y3Vyc29yOiBjcm9zc2hhaXI7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG5cdGJvcmRlci1sZWZ0OiAwcHg7XG5cdGJvcmRlci10b3A6IDBweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbiNjYW52YXMge1xuXHR6LWluZGV4OiAxO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI3ByZXZpZXdMYXllciB7XG5cdHotaW5kZXg6IDI7XG59XG5cbi5yZXNpemUtYnV0dG9uIHtcblx0d2lkdGg6IDEwcHg7XG5cdGhlaWdodDogMTBweDtcblx0bWFyZ2luOiAwJTtcblx0Ym9yZGVyOiBzb2xpZCAxcHggI2NjYztcblx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxMDtcblx0Ym94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ucmVzaXplLWJ1dHRvbjphY3RpdmUge1xuXHRib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4jcmlnaHQtY3Age1xuXHRjdXJzb3I6IGUtcmVzaXplO1xufVxuXG4jY29ybmVyLWNwIHtcblx0Y3Vyc29yOiBud3NlLXJlc2l6ZTtcbn1cbiNib3R0b20tY3Age1xuXHRjdXJzb3I6IG4tcmVzaXplO1xufVxuLnByZXZpZXcge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvcmRlcjogMXB4IGRvdHRlZCBibGFjaztcblx0ei1pbmRleDogMztcbn1cblxuI3NlbGVjdGlvbiB7XG5cdGN1cnNvcjogZ3JhYjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiA5O1xufVxuXG4uZ3JpZCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdHotaW5kZXg6IDk5OTk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drawing',
                templateUrl: './drawing.component.html',
                styleUrls: ['./drawing.component.scss'],
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"] }, { type: _app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_2__["EventManagerService"] }, { type: _app_services_grid_grid_service__WEBPACK_IMPORTED_MODULE_3__["GridService"] }]; }, { baseCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['baseCanvas', { static: false }]
        }], previewCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['previewCanvas', { static: false }]
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/drawing/drawing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/drawing/drawing.module.ts ***!
  \******************************************************/
/*! exports provided: DrawingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingModule", function() { return DrawingModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_components_selection_selection_box_selection_box_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/selection/selection-box/selection-box.module */ "./src/app/components/selection/selection-box/selection-box.module.ts");
/* harmony import */ var _drawing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawing.component */ "./src/app/components/drawing/drawing.component.ts");







class DrawingModule {
}
DrawingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DrawingModule });
DrawingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function DrawingModule_Factory(t) { return new (t || DrawingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _app_components_selection_selection_box_selection_box_module__WEBPACK_IMPORTED_MODULE_4__["SelectionBoxModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DrawingModule, { declarations: [_drawing_component__WEBPACK_IMPORTED_MODULE_5__["DrawingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _app_components_selection_selection_box_selection_box_module__WEBPACK_IMPORTED_MODULE_4__["SelectionBoxModule"]], exports: [_drawing_component__WEBPACK_IMPORTED_MODULE_5__["DrawingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DrawingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_drawing_component__WEBPACK_IMPORTED_MODULE_5__["DrawingComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _app_components_selection_selection_box_selection_box_module__WEBPACK_IMPORTED_MODULE_4__["SelectionBoxModule"]],
                exports: [_drawing_component__WEBPACK_IMPORTED_MODULE_5__["DrawingComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/event-manager/event-manager.service */ "./src/app/services/event-manager/event-manager.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _drawing_drawing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawing/drawing.component */ "./src/app/components/drawing/drawing.component.ts");






class EditorComponent {
    constructor(eventManager) {
        this.eventManager = eventManager;
    }
    ngOnInit() {
        // Je trouve plus pertinent d'avoir ces deux declarations que d'avoir deux fonctions
        // avec deux hostlistener qui font seulement appeler la fonction
        document.body.addEventListener('mousemove', this.eventManager.onMouseMove);
        document.body.addEventListener('wheel', this.eventManager.onWheel);
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_1__["EventManagerService"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], decls: 3, vars: 0, consts: [["oncontextmenu", "return false", 1, "background"], [1, "sidebar"], [1, "drawing"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-drawing", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _drawing_drawing_component__WEBPACK_IMPORTED_MODULE_3__["DrawingComponent"]], styles: [".background[_ngcontent-%COMP%] {\n  background-color: #bebebe;\n  overflow: auto;\n  z-index: -1;\n  display: flex;\n  position: fixed;\n  width: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  resize: none;\n  flex: 0;\n  border-right: 1px solid black;\n  height: 100%;\n  z-index: 10;\n}\n\n.drawing[_ngcontent-%COMP%] {\n  resize: none;\n  flex: 2;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0VBQ0EsV0FBQTtBQUFEOztBQUdBO0VBQ0MsWUFBQTtFQUNBLE9BQUE7RUFDQSw2QkFBQTtFQUVBLFlBQUE7RUFDRyxXQUFBO0FBREo7O0FBSUE7RUFDQyxZQUFBO0VBQ0EsT0FBQTtFQUVBLFdBQUE7QUFGRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2JlYmViZTtcblx0b3ZlcmZsb3c6IGF1dG87XG5cdHotaW5kZXg6IC0xO1xuXHRkaXNwbGF5OiBmbGV4O1xuXG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlYmFyIHtcblx0cmVzaXplOiBub25lO1xuXHRmbGV4OiAwO1xuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcblxuXHRoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi5kcmF3aW5nIHtcblx0cmVzaXplOiBub25lO1xuXHRmbGV4OiAyO1xuXG5cdHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editor',
                templateUrl: './editor.component.html',
                styleUrls: ['./editor.component.scss'],
            }]
    }], function () { return [{ type: _app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_1__["EventManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/editor/editor.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/editor/editor.module.ts ***!
  \****************************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_components_drawing_drawing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/drawing/drawing.module */ "./src/app/components/drawing/drawing.module.ts");
/* harmony import */ var src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/sidebar/sidebar.module */ "./src/app/components/sidebar/sidebar.module.ts");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.component */ "./src/app/components/editor/editor.component.ts");







class EditorModule {
}
EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EditorModule });
EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function EditorModule_Factory(t) { return new (t || EditorModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"], src_app_components_drawing_drawing_module__WEBPACK_IMPORTED_MODULE_3__["DrawingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditorModule, { declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"], src_app_components_drawing_drawing_module__WEBPACK_IMPORTED_MODULE_3__["DrawingModule"]], exports: [_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"], src_app_components_drawing_drawing_module__WEBPACK_IMPORTED_MODULE_3__["DrawingModule"]],
                exports: [_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/export/export.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/export/export.component.ts ***!
  \*******************************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");















function ExportComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExportComponent_mat_option_21_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.createModifiableImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", filter_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](filter_r1);
} }
class ExportComponent {
    constructor(drawingService, snackBar) {
        this.drawingService = drawingService;
        this.snackBar = snackBar;
        this.pngImage = '';
        this.jpegImage = '';
        this.name = '';
        this.type = '.png';
        this.imgurUrl = 'https://api.imgur.com/3/image';
        this.postLink = '';
        this.clientID = '69294db23e08528';
        this.filterList = ['blur', 'grayscale', 'sepia', 'invert', 'darken', 'none'];
        this.filter = 'none';
    }
    ngOnInit() {
        this.pngImage = this.drawingService.baseCtx.canvas.toDataURL('image/png');
        this.jpegImage = this.drawingService.baseCtx.canvas.toDataURL('image/jpeg');
    }
    exportLocal() {
        const exportLink = document.getElementById('link');
        if (exportLink) {
            if (!this.name) {
                this.name = 'monDessin';
            }
            exportLink.setAttribute('download', this.name + this.type);
            if (this.type === '.png') {
                exportLink.setAttribute('href', this.pngImage.replace('image/png', 'image/octet-stream'));
            }
            else if (this.type === '.jpeg') {
                exportLink.setAttribute('href', this.jpegImage.replace('image/jpeg', 'image/octet-stream'));
            }
            exportLink.click();
        }
    }
    exportImgur() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (this.type) {
                case '.png': {
                    this.imageUrl = this.pngImage.split(',')[1];
                    break;
                }
                case '.jpeg': {
                    this.imageUrl = this.jpegImage.split(',')[1];
                    break;
                }
            }
            const myHeaders = new Headers();
            myHeaders.append('Accept', 'application/json');
            myHeaders.append('Authorization', 'Client-ID ' + this.clientID);
            const formdata = new FormData();
            formdata.append('type', 'base64');
            formdata.append('image', this.imageUrl);
            formdata.append('name', this.name);
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'manual',
            };
            fetch(this.imgurUrl, requestOptions)
                .then((response) => response.json())
                .then((post) => {
                this.postLink = post.data.link;
                this.openSnackBar();
            })
                .catch((error) => console.log('error', error));
        });
    }
    openSnackBar() {
        this.snackBar
            .open('Publication réussie: ' + this.postLink, 'Ouvrir', { duration: 4000 })
            .onAction()
            // tslint:disable-next-line: deprecation
            .subscribe(() => {
            window.open(this.postLink);
        });
    }
    createModifiableImage() {
        const canvas = document.createElement('canvas');
        canvas.id = 'tmp-canvas';
        canvas.width = this.drawingService.baseCtx.canvas.width;
        canvas.height = this.drawingService.baseCtx.canvas.height;
        const ctx = canvas.getContext('2d');
        this.applyFilter(ctx);
    }
    applyFilter(ctx) {
        if (ctx) {
            switch (this.filter) {
                case 'blur': {
                    ctx.filter = 'blur(4px)';
                    break;
                }
                case 'grayscale': {
                    ctx.filter = 'grayscale(100%)';
                    break;
                }
                case 'sepia': {
                    ctx.filter = 'sepia(100%)';
                    break;
                }
                case 'invert': {
                    ctx.filter = 'invert(100%)';
                    break;
                }
                case 'darken': {
                    ctx.filter = 'brightness(50%)';
                    break;
                }
                case 'none': {
                    ctx.filter = 'none';
                    break;
                }
            }
            ctx.drawImage(this.drawingService.baseCtx.canvas, 0, 0, ctx.canvas.width, ctx.canvas.height);
            this.pngImage = ctx.canvas.toDataURL('image/png');
            this.jpegImage = ctx.canvas.toDataURL('image/jpeg');
        }
    }
}
ExportComponent.ɵfac = function ExportComponent_Factory(t) { return new (t || ExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
ExportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExportComponent, selectors: [["app-export"]], decls: 28, vars: 5, consts: [["mat-dialog-title", "", 1, "title"], ["id", "image", 3, "src"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 1, "content"], [3, "value", "valueChange"], ["value", ".png"], ["value", ".jpeg"], ["id", "link"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "content", 3, "click"], ["mat-raised-button", "", 1, "imgur", 3, "click"], ["mat-raised-button", "", "mat-dialog-close", "", 1, "close"], [3, "value", "click"]], template: function ExportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Exporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Nom du dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExportComponent_Template_input_ngModelChange_7_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Type d'image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ExportComponent_Template_mat_select_valueChange_11_listener($event) { return ctx.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "png");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "jpeg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ExportComponent_Template_mat_select_valueChange_20_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ExportComponent_mat_option_21_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExportComponent_Template_button_click_22_listener() { return ctx.exportLocal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Exporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExportComponent_Template_button_click_24_listener() { return ctx.exportImgur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Exporter sur Imgur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.pngImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filterList);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  cursor: default;\n  font-family: Poppins, sans-serif;\n  text-align: center;\n}\n\n.imgur[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  color: white;\n  background-color: #19bd6b;\n  margin-left: 10px;\n}\n\n.content[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin-left: 10px;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  position: center;\n  min-height: 52vh;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.action[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.close[_ngcontent-%COMP%] {\n  background-color: #1f62f2;\n  color: white;\n  justify-content: space-between;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBvcnQvZXhwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFFQTtFQUNDLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRDs7QUFFQTtFQUNDLDhCQUFBO0VBQ0EsaUJBQUE7QUFDRDs7QUFFQTtFQUNDLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cG9ydC9leHBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuXHRmb250LXNpemU6IDI4cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRjdXJzb3I6IGRlZmF1bHQ7XG5cdGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWd1ciB7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Y29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTliZDZiO1xuXHRtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNvbnRlbnQge1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2VudGVyIHtcblx0bWFyZ2luOiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbm1hdC1kaWFsb2ctY29udGVudCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBvc2l0aW9uOiBjZW50ZXI7XG5cdG1pbi1oZWlnaHQ6IDUydmg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFjdGlvbiB7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jbG9zZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxZjYyZjI7XG5cdGNvbG9yOiB3aGl0ZTtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-export',
                templateUrl: './export.component.html',
                styleUrls: ['./export.component.scss'],
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/export/export.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/export/export.module.ts ***!
  \****************************************************/
/*! exports provided: ExportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportModule", function() { return ExportModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _export_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./export.component */ "./src/app/components/export/export.component.ts");














class ExportModule {
}
ExportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExportModule });
ExportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExportModule_Factory(t) { return new (t || ExportModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExportModule, { declarations: [_export_component__WEBPACK_IMPORTED_MODULE_12__["ExportComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]], exports: [_export_component__WEBPACK_IMPORTED_MODULE_12__["ExportComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExportModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_export_component__WEBPACK_IMPORTED_MODULE_12__["ExportComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                ],
                exports: [_export_component__WEBPACK_IMPORTED_MODULE_12__["ExportComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/fiche/fiche.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/fiche/fiche.component.ts ***!
  \*****************************************************/
/*! exports provided: FicheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FicheComponent", function() { return FicheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





function FicheComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 6);
} }
function FicheComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FicheComponent_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.image(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FicheComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const etiquette_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](etiquette_r7);
} }
function FicheComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FicheComponent_ng_template_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FicheComponent {
    constructor() {
        this.dessin = { name: 'Dessin vide', etiquette: [], image: '' };
        this.deleteFicheEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openFicheEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get name() {
        return this.dessin.name;
    }
    image() {
        if (this.dessin.name === 'Dessin vide')
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAQAAAAi5ZK2AAABcUlEQVR42u3RAQ0AAAgDIN8/9K3hJlQg7fBMpEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pCMd6UhHOtKRjnSkI1060pGOdKQjHelIRzrSkY50pCMd6UhHunSkIx3pSEc60pGOdKQjHelIRzrSkY506dKlIx3pSEc60pGOdKQjHelIRzrSkY50pEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pCMd6UhHOtKRjnSkI1060pGOdKQjHelIRzrSkY50pCMd6UhHunTp0pGOdKQjHelIRzrSkY50pCMd6UhHOtKlIx3pSEc60pGOdKQjHelIRzrSkY50pEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pHPDAulX8xYd9+8SAAAAAElFTkSuQmCC';
        return this.dessin.image;
    }
    remove() {
        this.deleteFicheEvent.emit(this.dessin);
    }
    open() {
        this.openFicheEvent.emit(this.dessin);
    }
}
FicheComponent.ɵfac = function FicheComponent_Factory(t) { return new (t || FicheComponent)(); };
FicheComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FicheComponent, selectors: [["app-fiche"]], inputs: { dessin: "dessin" }, outputs: { deleteFicheEvent: "deleteFicheEvent", openFicheEvent: "openFicheEvent" }, decls: 8, vars: 5, consts: [["id", "name"], [3, "ngIf", "ngIfElse"], ["elseBlock", ""], ["id", "etiquette-container"], [4, "ngFor", "ngForOf"], [3, "ngIf"], ["mode", "indeterminate"], [3, "click"], ["id", "image-container"], [3, "src"], ["mat-button", "", 1, "remove", 3, "click"]], template: function FicheComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FicheComponent_ng_template_2_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FicheComponent_ng_template_3_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FicheComponent_div_6_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FicheComponent_ng_template_7_Template, 2, 0, "ng-template", 5);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dessin.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dessin.image === undefined)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dessin.etiquette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dessin.name !== "Dessin vide");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#name[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.remove[_ngcontent-%COMP%] {\n  background-color: rgba(209, 24, 24, 0.959);\n  color: white;\n}\n\n#image-container[_ngcontent-%COMP%] {\n  max-height: 20%;\n}\n\n#etiquette-container[_ngcontent-%COMP%] {\n  height: 30%;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWNoZS9maWNoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHFCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFDQTtFQUNDLDBDQUFBO0VBQ0EsWUFBQTtBQUVEOztBQUNBO0VBQ0MsZUFBQTtBQUVEOztBQUFBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FBR0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpY2hlL2ZpY2hlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hbWUge1xuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbmltZyB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWF4LWhlaWdodDogMTAwJTtcbn1cbi5yZW1vdmV7XG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgyMDksIDI0LCAyNCwgMC45NTkpO1xuXHRjb2xvcjp3aGl0ZTtcbn1cblxuI2ltYWdlLWNvbnRhaW5lciB7XG5cdG1heC1oZWlnaHQ6IDIwJTtcbn1cbiNldGlxdWV0dGUtY29udGFpbmVyIHtcblx0aGVpZ2h0OiAzMCU7XG5cdG92ZXJmbG93LXk6IGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FicheComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fiche',
                templateUrl: './fiche.component.html',
                styleUrls: ['./fiche.component.scss'],
            }]
    }], null, { dessin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteFicheEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openFicheEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/fiche/fiche.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/fiche/fiche.module.ts ***!
  \**************************************************/
/*! exports provided: FicheModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FicheModule", function() { return FicheModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _fiche_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fiche.component */ "./src/app/components/fiche/fiche.component.ts");






class FicheModule {
}
FicheModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FicheModule });
FicheModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FicheModule_Factory(t) { return new (t || FicheModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FicheModule, { declarations: [_fiche_component__WEBPACK_IMPORTED_MODULE_4__["FicheComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]], exports: [_fiche_component__WEBPACK_IMPORTED_MODULE_4__["FicheComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FicheModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_fiche_component__WEBPACK_IMPORTED_MODULE_4__["FicheComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]],
                exports: [_fiche_component__WEBPACK_IMPORTED_MODULE_4__["FicheComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_components_warning_warning_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/warning/warning.component */ "./src/app/components/warning/warning.component.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var src_app_components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/carrousel/carrousel.component */ "./src/app/components/carrousel/carrousel.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function MainPageComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.continueDrawing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continuer un dessin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainPageComponent {
    constructor(dialog, router, drawingService) {
        this.dialog = dialog;
        this.router = router;
        this.drawingService = drawingService;
        this.title = 'PolyDessin 2';
        this.thereIsDrawing = false;
        if (localStorage.getItem('save') !== null) {
            this.thereIsDrawing = true;
        }
    }
    newDrawing() {
        if (this.thereIsDrawing) {
            const dialogRef = this.dialog.open(_app_components_warning_warning_component__WEBPACK_IMPORTED_MODULE_3__["WarningComponent"], { panelClass: 'custom-warning-container' });
            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    this.drawingService.canvasImage = '';
                    this.router.navigate(['/editor']);
                }
            });
        }
        else {
            this.drawingService.canvasImage = '';
            this.router.navigate(['/editor']);
        }
    }
    continueDrawing() {
        this.drawingService.canvasImage = localStorage.getItem('save');
        this.router.navigate(['/editor']);
    }
    openModal() {
        const dialogRef = this.dialog.open(src_app_components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_5__["CarrouselComponent"], { panelClass: 'custom-carrousel-container' });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.router.navigate(['/editor']);
            }
        });
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 19, vars: 2, consts: [[1, "section"], [1, "header"], [1, "header-item"], [1, "container"], [1, "welcome-message"], ["mat-raised-button", "", 1, "button", 3, "click"], ["mat-raised-button", "", "class", "button", 3, "click", 4, "ngIf"], [1, "footer"], [1, "container-footer"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bienvenue sur notre site de dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_8_listener() { return ctx.newDrawing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cr\u00E9er un nouveau dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_10_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ouvrir le carrousel de dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MainPageComponent_button_12_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00C9quipe Poly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Thomas Bergeron, Olivier Coulombe-Raymond, Samuel Crosilla, Fr\u00E9d\u00E9ric Marchildon, Pierre Paquette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thereIsDrawing);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  top: 30%;\n  transform: translateY(-30%);\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n  font-size: 20px;\n  width: auto;\n  border-radius: 25px;\n  background: #f4f7fd;\n  box-shadow: 16px 16px 32px #cfd2d7, -16px -16px 32px #ffffff;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  height: auto;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  border-radius: 25px;\n  background: #f4f7fd;\n  box-shadow: inset 7px 7px 14px #d9dce1, inset -7px -7px 14px #ffffff;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  text-align: center;\n  background: white;\n  color: black;\n  font-size: 30px;\n  cursor: default;\n  position: relative;\n  box-shadow: 0px 6px 5px -1px rgba(0, 0, 0, 0.25);\n  width: 100%;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-left: 30px;\n  padding-bottom: 20px;\n  margin-top: 10px;\n  font-size: larger;\n}\n\n.section[_ngcontent-%COMP%] {\n  height: 99vh;\n  position: static;\n  background-color: #f4f7fd;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  text-align: center;\n  background: #1c1c28;\n  color: white;\n  cursor: default;\n  width: 100%;\n  height: 15%;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 40px;\n}\n\n.container-footer[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.server-message[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 20%;\n  min-width: min-content;\n}\n\n.welcome-message[_ngcontent-%COMP%] {\n  cursor: none;\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNEOztBQUVBO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9FQUFBO0FBQ0Q7O0FBRUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRUQ7O0FBQUE7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUdEOztBQUFBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtBQUVEOztBQURDO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHRDs7QUFBQTtFQUNDLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBR0Q7O0FBREE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUlEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogMzAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwJSk7XG59XG5cbi5idXR0b24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0d2lkdGg6IGF1dG87XG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdGJhY2tncm91bmQ6ICNmNGY3ZmQ7XG5cdGJveC1zaGFkb3c6IDE2cHggMTZweCAzMnB4ICNjZmQyZDcsIC0xNnB4IC0xNnB4IDMycHggI2ZmZmZmZjtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0aGVpZ2h0OiBhdXRvO1xuXHRwYWRkaW5nLWxlZnQ6IDUwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDUwcHg7XG5cdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdGJhY2tncm91bmQ6ICNmNGY3ZmQ7XG5cdGJveC1zaGFkb3c6IGluc2V0IDdweCA3cHggMTRweCAjZDlkY2UxLCBpbnNldCAtN3B4IC03cHggMTRweCAjZmZmZmZmO1xufVxuXG4uaGVhZGVyIHtcblx0bWFyZ2luOiAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRjdXJzb3I6IGRlZmF1bHQ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym94LXNoYWRvdzogMHB4IDZweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXHR3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXItaXRlbSB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHBhZGRpbmctbGVmdDogMzBweDtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG5cdGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuLnNlY3Rpb24ge1xuXHRoZWlnaHQ6IDk5dmg7XG5cdHBvc2l0aW9uOiBzdGF0aWM7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmNGY3ZmQ7XG59XG5cbi5mb290ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kOiAjMWMxYzI4O1xuXHRjb2xvcjogd2hpdGU7XG5cdGN1cnNvcjogZGVmYXVsdDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTUlO1xuXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogNTAwO1xuXG5cdGZvbnQtc2l6ZTogMjBweDtcblx0aDQge1xuXHRcdGZvbnQtc2l6ZTogMjVweDtcblx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXHR9XG59XG4uY29udGFpbmVyLWZvb3RlciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luLXRvcDogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnNlcnZlci1tZXNzYWdlIHtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHdpZHRoOiAyMCU7XG5cdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XG59XG4ud2VsY29tZS1tZXNzYWdlIHtcblx0Y3Vyc29yOiBub25lO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAzMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main-page/main-page.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/main-page/main-page.module.ts ***!
  \**********************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_components_carrousel_carrousel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/carrousel/carrousel.module */ "./src/app/components/carrousel/carrousel.module.ts");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page.component */ "./src/app/components/main-page/main-page.component.ts");










class MainPageModule {
}
MainPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MainPageModule });
MainPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MainPageModule_Factory(t) { return new (t || MainPageModule)(); }, imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], src_app_components_carrousel_carrousel_module__WEBPACK_IMPORTED_MODULE_7__["CarrouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MainPageModule, { declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], src_app_components_carrousel_carrousel_module__WEBPACK_IMPORTED_MODULE_7__["CarrouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]], exports: [_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MainPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"]],
                imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], src_app_components_carrousel_carrousel_module__WEBPACK_IMPORTED_MODULE_7__["CarrouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]],
                exports: [_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/save/save.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/save/save.component.ts ***!
  \***************************************************/
/*! exports provided: SaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveComponent", function() { return SaveComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/build/es/index.js");
/* harmony import */ var src_app_services_index_save_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/index/save.service */ "./src/app/services/index/save.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




















function SaveComponent_mat_chip_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function SaveComponent_mat_chip_12_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const etiquette_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.removeEtiquette(etiquette_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const etiquette_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", etiquette_r3.toString(), " ");
} }
class SaveComponent {
    constructor(basicService, drawingService, snackBar, dialog) {
        this.basicService = basicService;
        this.drawingService = drawingService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.name = '';
        this.etiquettes = [];
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]];
        this.image = '';
        this.isSaving = false;
    }
    ngOnInit() {
        this.image = this.getDataUrl(this.drawingService.baseCtx.canvas);
    }
    getDataUrl(canvas) {
        return canvas.toDataURL('tmp/png');
    }
    addEtiquette(event) {
        const input = event.input;
        const value = event.value;
        // Add etiquette
        if (value.length > _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].ETIQUETTE_MAX_VALUE) {
            this.snackBar.open('étiquette tros grand', '', {
                duration: 2000,
            });
        }
        else {
            if (this.etiquettes.indexOf(value) === -_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].ONE) {
                this.etiquettes.push(value);
            }
            else {
                // afficher index existe deja
                this.snackBar.open('étiquette déjà sélectionné', '', {
                    duration: 5000,
                });
            }
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    removeEtiquette(etiquette) {
        const index = this.etiquettes.indexOf(etiquette);
        if (index >= 0) {
            this.etiquettes.splice(index, 1);
        }
    }
    sendServer() {
        if (this.name === '') {
            this.snackBar.open('Donnez un nom', '', {
                duration: 5000,
            });
            return;
        }
        // afficher sauvegarde en cours
        this.isSaving = true;
        this.snackBar.open('en sauvegarde', '', {
            duration: 5000,
        });
        this.drawingService.baseCtx.canvas.toBlob((blob) => {
            const data = new FormData();
            data.append('dessin', blob, this.name);
            data.append('tags', JSON.stringify(this.etiquettes));
            this.basicService.basicPost(data).subscribe((response) => {
                let message = '';
                switch (response.status) {
                    case http_status_codes__WEBPACK_IMPORTED_MODULE_6__["StatusCodes"].CREATED:
                        message = 'le dessin a été sauvegardé';
                        break;
                    case http_status_codes__WEBPACK_IMPORTED_MODULE_6__["StatusCodes"].BAD_REQUEST:
                        message = 'Il y a une erreur dans les données';
                        break;
                    case http_status_codes__WEBPACK_IMPORTED_MODULE_6__["StatusCodes"].INTERNAL_SERVER_ERROR:
                        message = 'Une erreur est survenue';
                        break;
                }
                // get la reponse du serveur
                this.isSaving = false;
                this.snackBar.open(message, '', {
                    duration: 5000,
                });
                this.name = '';
                this.etiquettes = [];
            });
            this.dialog.close();
        });
    }
    close() {
        this.name = '';
        this.etiquettes = [];
    }
}
SaveComponent.ɵfac = function SaveComponent_Factory(t) { return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_index_save_service__WEBPACK_IMPORTED_MODULE_7__["SaveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
SaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SaveComponent, selectors: [["app-save"]], decls: 25, vars: 7, consts: [["mat-dialog-title", "", 1, "title"], ["matInput", "", "type", "text", "maxlength", "26", 3, "ngModel", "ngModelChange"], ["aria-label", "etiquette selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "ajouter un \u00E9tiquette", "id", "etiquetteInput", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["etiquetteInput", ""], [3, "src"], [1, "action"], ["mat-raised-button", "", 3, "disabled", "click"], ["mat-raised-button", "", "mat-dialog-close", "", 1, "close", 3, "disabled", "click"], [3, "selectable", "removable", "removed"], ["matChipRemove", ""]], template: function SaveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sauvegarde");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Nom du dessin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SaveComponent_Template_input_ngModelChange_6_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "26 caract\u00E8res maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-chip-list", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SaveComponent_mat_chip_12_Template, 4, 3, "mat-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function SaveComponent_Template_input_matChipInputTokenEnd_13_listener($event) { return ctx.addEtiquette($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Appuyer sur \"Entrer\" pour ajouter un \u00E9tiquette.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " 15 caract\u00E8res maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_21_listener() { return ctx.sendServer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sauvegarder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_23_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.etiquettes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipInput"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipRemove"]], styles: ["mat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 65vh;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.close[_ngcontent-%COMP%] {\n  background-color: #1f62f2;\n  color: white;\n}\n\n.action[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  border-radius: 25px;\n  background: #f4f7fd;\n  box-shadow: inset 7px 7px 14px #d9dce1, inset -7px -7px 14px #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYXZlL3NhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFDQTtFQUNDLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUQ7O0FBQ0E7RUFFQyx5QkFBQTtFQUNBLFlBQUE7QUFDRDs7QUFHQTtFQUNDLHlCQUFBO0FBQUQ7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0VBQUE7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZS9zYXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRpYWxvZy1jb250ZW50IHtcblx0ZGlzcGxheTogZmxleDtcblx0bWluLWhlaWdodDogNjV2aDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpdGxlIHtcblx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2xvc2Uge1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICMxZjYyZjI7XG5cdGNvbG9yOiB3aGl0ZTtcblxufVxuXG4uYWN0aW9uIHtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5idXR0b246aG92ZXIge1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZjRmN2ZkO1xuXHRib3gtc2hhZG93OiBpbnNldCA3cHggN3B4IDE0cHggI2Q5ZGNlMSwgaW5zZXQgLTdweCAtN3B4IDE0cHggI2ZmZmZmZjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-save',
                templateUrl: './save.component.html',
                styleUrls: ['./save.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_index_save_service__WEBPACK_IMPORTED_MODULE_7__["SaveService"] }, { type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/save/save.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/save/save.module.ts ***!
  \************************************************/
/*! exports provided: SaveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveModule", function() { return SaveModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_services_index_save_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/index/save.service */ "./src/app/services/index/save.service.ts");
/* harmony import */ var _save_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./save.component */ "./src/app/components/save/save.component.ts");














class SaveModule {
}
SaveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SaveModule });
SaveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SaveModule_Factory(t) { return new (t || SaveModule)(); }, providers: [_app_services_index_save_service__WEBPACK_IMPORTED_MODULE_11__["SaveService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SaveModule, { declarations: [_save_component__WEBPACK_IMPORTED_MODULE_12__["SaveComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]], exports: [_save_component__WEBPACK_IMPORTED_MODULE_12__["SaveComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SaveModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_save_component__WEBPACK_IMPORTED_MODULE_12__["SaveComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                ],
                providers: [_app_services_index_save_service__WEBPACK_IMPORTED_MODULE_11__["SaveService"]],
                exports: [_save_component__WEBPACK_IMPORTED_MODULE_12__["SaveComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/selection/selection-box/selection-box.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/selection/selection-box/selection-box.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SelectionBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionBoxComponent", function() { return SelectionBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/clipboard/clipboard.service */ "./src/app/services/clipboard/clipboard.service.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_services_selection_resize_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/selection/resize-selection.service */ "./src/app/services/selection/resize-selection.service.ts");
/* harmony import */ var _app_services_selection_shift_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/selection/shift-selection.service */ "./src/app/services/selection/shift-selection.service.ts");
/* harmony import */ var _app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/tools/tool.service */ "./src/app/services/tools/tool.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _selection_manager_selection_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../selection-manager/selection-manager.component */ "./src/app/components/selection/selection-manager/selection-manager.component.ts");
















const _c0 = function (a1, a2, a3, a4) { return { position: "absolute", "width.px": a1, "height.px": a2, "left.px": a3, "top.px": a4 }; };
const _c1 = function (a1, a2) { return { "position": "absolute", "width.px": a1, "height.px": a2, "left.px": 0, "top.px": 0 }; };
class SelectionBoxComponent {
    constructor(drawingService, toolService, shiftSelection, resizeSelectionService, clipboard) {
        this.drawingService = drawingService;
        this.toolService = toolService;
        this.shiftSelection = shiftSelection;
        this.resizeSelectionService = resizeSelectionService;
        this.clipboard = clipboard;
        this.position = _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].DEFAULT_VECTOR;
        this.size = _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].TEST_VECTOR;
        this.newSize = _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].TEST_VECTOR;
        this.delta = _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].DEFAULT_VECTOR;
        this.oldDistance = _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].DEFAULT_VECTOR;
        this.sign = _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].TEST_VECTOR;
        this.isResizing = false;
        this.toolService.changeCurrentSelectionMode$.subscribe((mode) => {
            this.changeCurrentSelectionMode(mode);
        });
    }
    placeBox(origin) {
        this.isResizing = false;
        const element = document.getElementById('selection-box');
        if (element) {
            element.style.display = 'block';
        }
        this.position = origin;
        if (origin === _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].RESET_VECTOR) {
            this.changeBoxSize(origin);
            element.style.display = 'none';
            this.currentSelectionMode.isActiveSelection = false;
        }
        const newVisibility = origin === _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].RESET_VECTOR ? 'hidden' : 'visible';
        const cpArray = document.getElementsByClassName('box-button');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < cpArray.length; i++) {
            cpArray[i].style.visibility = newVisibility;
        }
        this.drawingService.placeBoxButton(this.size);
    }
    changeBoxSize(delta) {
        this.isResizing = true;
        this.size = { x: Math.abs(delta.x), y: Math.abs(delta.y) };
        this.delta = delta;
    }
    changeCurrentSelectionMode(mode) {
        this.currentSelectionMode = mode;
        this.shiftSelection.selector = mode;
        this.clipboard.selector = mode;
        this.currentSelectionMode.changeBoxSize$.subscribe((delta) => {
            this.changeBoxSize(delta);
        });
        this.currentSelectionMode.placeBox$.subscribe((origin) => {
            this.placeBox(origin);
        });
    }
    get boxWidth() {
        return this.size.x;
    }
    get boxHeight() {
        return this.size.y;
    }
    get boxLeft() {
        return this.delta.x < 0 ? this.position.x + this.delta.x : this.position.x;
    }
    get boxTop() {
        return this.delta.y < 0 ? this.position.y + this.delta.y : this.position.y;
    }
    get eastBoxPos() {
        return this.drawingService.eastBoxPos;
    }
    get northBoxPos() {
        return this.drawingService.northBoxPos;
    }
    get northEastBoxPos() {
        return this.drawingService.northEastBoxPos;
    }
    get northWestBoxPos() {
        return this.drawingService.northWestBoxPos;
    }
    get southBoxPos() {
        return this.drawingService.southBoxPos;
    }
    get westBoxPos() {
        return this.drawingService.westBoxPos;
    }
    get southEastBoxPos() {
        return this.drawingService.southEastBoxPos;
    }
    get southWestBoxPos() {
        return this.drawingService.southWestBoxPos;
    }
    startPreview() {
        this.oldDistance = _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].DEFAULT_VECTOR;
        this.oldSize = this.newSize = this.size;
        this.resizeSelectionService.selector = this.currentSelectionMode;
        this.toolService.changeTool(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].RESIZE_SELECTION_SHORTCUT);
        this.toolService.currentTool.isDrawing = true;
        this.resizeSelectionService.resize(this.size, this.size, this.sign, '');
    }
    preview(distanceX, distanceY, tag) {
        const shiftIsPressed = this.resizeSelectionService.shiftIsPressed;
        const conditionOrigin = this.determineCondition({ x: distanceX, y: distanceY }, tag, shiftIsPressed);
        if (!shiftIsPressed) {
            this.resizeSelectionService.selector.origin.x += conditionOrigin.x === 0 ? distanceX - this.oldDistance.x : 0;
            this.resizeSelectionService.selector.origin.y += conditionOrigin.y === 0 ? distanceY - this.oldDistance.y : 0;
            this.sign = { x: conditionOrigin.x === 0 ? _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].MINUS_ONE : 1, y: conditionOrigin.y === 0 ? _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].MINUS_ONE : 1 };
        }
        else {
            this.resizeSelectionService.selector.origin.x += (distanceX - this.oldDistance.x) * (conditionOrigin.x !== 0 ? _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].MINUS_ONE : 1);
            this.resizeSelectionService.selector.origin.y += (distanceY - this.oldDistance.y) * (conditionOrigin.y !== 0 ? _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].MINUS_ONE : 1);
            this.sign = { x: conditionOrigin.x === 0 ? _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].MINUS_TWO : 2, y: conditionOrigin.y === 0 ? _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].MINUS_TWO : 2 };
        }
        this.newSize = {
            x: this.size.x + (distanceX - this.oldDistance.x) * this.sign.x,
            y: this.size.y + (distanceY - this.oldDistance.y) * this.sign.y,
        };
        this.oldDistance = { x: distanceX, y: distanceY };
        this.newSize = this.resizeSelectionService.resize(this.newSize, this.size, this.sign, tag);
        this.changeBoxSize(this.newSize);
    }
    determineCondition(distances, tag, isShift) {
        const condition = { x: 1, y: 1 };
        if (tag.includes('n')) {
            condition.y = this.oldSize.y - (isShift ? distances.y * 2 : distances.y) > 0 ? 0 : condition.y;
        }
        if (tag.includes('w')) {
            condition.x = this.oldSize.x - (isShift ? distances.x * 2 : distances.x) > 0 ? 0 : condition.x;
        }
        if (tag.includes('s')) {
            condition.y = this.oldSize.y + (isShift ? distances.y * 2 : distances.y) > 0 ? condition.y : 0;
        }
        if (tag.includes('e')) {
            condition.x = this.oldSize.x + (isShift ? distances.x * 2 : distances.x) > 0 ? condition.x : 0;
        }
        return condition;
    }
    endPreview() {
        this.size = this.newSize;
        this.resizeSelectionService.resize(this.size, this.size, this.sign, '');
        this.changeBoxSize(this.size);
        this.toolService.currentTool.isDrawing = false;
    }
}
SelectionBoxComponent.ɵfac = function SelectionBoxComponent_Factory(t) { return new (t || SelectionBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_5__["ToolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_selection_shift_selection_service__WEBPACK_IMPORTED_MODULE_4__["ShiftSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_selection_resize_selection_service__WEBPACK_IMPORTED_MODULE_3__["ResizeSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"])); };
SelectionBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectionBoxComponent, selectors: [["app-selection-box"]], decls: 11, vars: 18, consts: [["id", "selection-box", 3, "ngStyle"], ["container", ""], ["id", "east-cp", "cdkDrag", "", "cdkDragLockAxis", "x", 1, "box-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragMoved", "cdkDragReleased"], ["id", "north-cp", "cdkDrag", "", "cdkDragLockAxis", "y", 1, "box-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragMoved", "cdkDragReleased"], ["id", "ne-cp", "cdkDrag", "", 1, "box-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragMoved", "cdkDragReleased"], ["id", "nw-cp", "cdkDrag", "", 1, "box-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragMoved", "cdkDragReleased"], ["id", "south-cp", "cdkDrag", "", "cdkDragLockAxis", "y", 1, "box-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragMoved", "cdkDragReleased"], ["id", "se-cp", "cdkDrag", "", 1, "box-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragMoved", "cdkDragReleased"], ["id", "sw-cp", "cdkDrag", "", 1, "box-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragMoved", "cdkDragReleased"], ["id", "west-cp", "cdkDrag", "", "cdkDragLockAxis", "x", 1, "box-button", 3, "cdkDragFreeDragPosition", "cdkDragStarted", "cdkDragMoved", "cdkDragReleased"], ["id", "selection-manager", 3, "ngStyle"]], template: function SelectionBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function SelectionBoxComponent_Template_div_cdkDragStarted_2_listener() { return ctx.startPreview(); })("cdkDragMoved", function SelectionBoxComponent_Template_div_cdkDragMoved_2_listener($event) { return ctx.preview($event.distance.x, $event.distance.y, "e"); })("cdkDragReleased", function SelectionBoxComponent_Template_div_cdkDragReleased_2_listener() { return ctx.endPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function SelectionBoxComponent_Template_div_cdkDragStarted_3_listener() { return ctx.startPreview(); })("cdkDragMoved", function SelectionBoxComponent_Template_div_cdkDragMoved_3_listener($event) { return ctx.preview($event.distance.x, $event.distance.y, "n"); })("cdkDragReleased", function SelectionBoxComponent_Template_div_cdkDragReleased_3_listener() { return ctx.endPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function SelectionBoxComponent_Template_div_cdkDragStarted_4_listener() { return ctx.startPreview(); })("cdkDragMoved", function SelectionBoxComponent_Template_div_cdkDragMoved_4_listener($event) { return ctx.preview($event.distance.x, $event.distance.y, "ne"); })("cdkDragReleased", function SelectionBoxComponent_Template_div_cdkDragReleased_4_listener() { return ctx.endPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function SelectionBoxComponent_Template_div_cdkDragStarted_5_listener() { return ctx.startPreview(); })("cdkDragMoved", function SelectionBoxComponent_Template_div_cdkDragMoved_5_listener($event) { return ctx.preview($event.distance.x, $event.distance.y, "nw"); })("cdkDragReleased", function SelectionBoxComponent_Template_div_cdkDragReleased_5_listener() { return ctx.endPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function SelectionBoxComponent_Template_div_cdkDragStarted_6_listener() { return ctx.startPreview(); })("cdkDragMoved", function SelectionBoxComponent_Template_div_cdkDragMoved_6_listener($event) { return ctx.preview($event.distance.x, $event.distance.y, "s"); })("cdkDragReleased", function SelectionBoxComponent_Template_div_cdkDragReleased_6_listener() { return ctx.endPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function SelectionBoxComponent_Template_div_cdkDragStarted_7_listener() { return ctx.startPreview(); })("cdkDragMoved", function SelectionBoxComponent_Template_div_cdkDragMoved_7_listener($event) { return ctx.preview($event.distance.x, $event.distance.y, "se"); })("cdkDragReleased", function SelectionBoxComponent_Template_div_cdkDragReleased_7_listener() { return ctx.endPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function SelectionBoxComponent_Template_div_cdkDragStarted_8_listener() { return ctx.startPreview(); })("cdkDragMoved", function SelectionBoxComponent_Template_div_cdkDragMoved_8_listener($event) { return ctx.preview($event.distance.x, $event.distance.y, "sw"); })("cdkDragReleased", function SelectionBoxComponent_Template_div_cdkDragReleased_8_listener() { return ctx.endPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function SelectionBoxComponent_Template_div_cdkDragStarted_9_listener() { return ctx.startPreview(); })("cdkDragMoved", function SelectionBoxComponent_Template_div_cdkDragMoved_9_listener($event) { return ctx.preview($event.distance.x, $event.distance.y, "w"); })("cdkDragReleased", function SelectionBoxComponent_Template_div_cdkDragReleased_9_listener() { return ctx.endPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-selection-manager", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](10, _c0, ctx.boxWidth - 1, ctx.boxHeight - 1, ctx.boxLeft - 2, ctx.boxTop - 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.eastBoxPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.northBoxPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.northEastBoxPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.northWestBoxPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.southBoxPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.southEastBoxPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.southWestBoxPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.westBoxPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c1, ctx.boxWidth, ctx.boxHeight));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDrag"], _selection_manager_selection_manager_component__WEBPACK_IMPORTED_MODULE_9__["SelectionManagerComponent"]], styles: [".box-button[_ngcontent-%COMP%] {\n  cursor: default;\n  width: 7px;\n  height: 7px;\n  margin: 0%;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  visibility: hidden;\n  z-index: 1;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n#selection-box[_ngcontent-%COMP%] {\n  display: none;\n  border-left: 2px;\n  border-bottom: 2px;\n  border-top: 2px;\n  border-right: 2px;\n  border-style: solid;\n  border-color: #2b64e0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3Rpb24vc2VsZWN0aW9uLWJveC9zZWxlY3Rpb24tYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrR0FBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0csVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3Rpb24vc2VsZWN0aW9uLWJveC9zZWxlY3Rpb24tYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1idXR0b24ge1xuXHRjdXJzb3I6IGRlZmF1bHQ7XG5cdHdpZHRoOiA3cHg7XG5cdGhlaWdodDogN3B4O1xuXHRtYXJnaW46IDAlO1xuXHRib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuXHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0ei1pbmRleDogMTtcblx0Ym94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4jc2VsZWN0aW9uLWJveCB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdGJvcmRlci1sZWZ0OiAycHg7XG5cdGJvcmRlci1ib3R0b206IDJweDtcblx0Ym9yZGVyLXRvcDogMnB4O1xuXHRib3JkZXItcmlnaHQ6IDJweDtcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0Ym9yZGVyLWNvbG9yOiAjMmI2NGUwO1xuICAgIHotaW5kZXg6IDE7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectionBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selection-box',
                templateUrl: './selection-box.component.html',
                styleUrls: ['./selection-box.component.scss'],
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"] }, { type: _app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_5__["ToolService"] }, { type: _app_services_selection_shift_selection_service__WEBPACK_IMPORTED_MODULE_4__["ShiftSelectionService"] }, { type: _app_services_selection_resize_selection_service__WEBPACK_IMPORTED_MODULE_3__["ResizeSelectionService"] }, { type: _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/selection/selection-box/selection-box.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/selection/selection-box/selection-box.module.ts ***!
  \****************************************************************************/
/*! exports provided: SelectionBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionBoxModule", function() { return SelectionBoxModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_components_selection_selection_manager_selection_manager_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/selection/selection-manager/selection-manager.module */ "./src/app/components/selection/selection-manager/selection-manager.module.ts");
/* harmony import */ var _selection_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection-box.component */ "./src/app/components/selection/selection-box/selection-box.component.ts");







class SelectionBoxModule {
}
SelectionBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SelectionBoxModule });
SelectionBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SelectionBoxModule_Factory(t) { return new (t || SelectionBoxModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _app_components_selection_selection_manager_selection_manager_module__WEBPACK_IMPORTED_MODULE_4__["SelectionManagerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SelectionBoxModule, { declarations: [_selection_box_component__WEBPACK_IMPORTED_MODULE_5__["SelectionBoxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _app_components_selection_selection_manager_selection_manager_module__WEBPACK_IMPORTED_MODULE_4__["SelectionManagerModule"]], exports: [_selection_box_component__WEBPACK_IMPORTED_MODULE_5__["SelectionBoxComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SelectionBoxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_selection_box_component__WEBPACK_IMPORTED_MODULE_5__["SelectionBoxComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _app_components_selection_selection_manager_selection_manager_module__WEBPACK_IMPORTED_MODULE_4__["SelectionManagerModule"]],
                exports: [_selection_box_component__WEBPACK_IMPORTED_MODULE_5__["SelectionBoxComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/selection/selection-manager/selection-manager.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/selection/selection-manager/selection-manager.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SelectionManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionManagerComponent", function() { return SelectionManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/clipboard/clipboard.service */ "./src/app/services/clipboard/clipboard.service.ts");
/* harmony import */ var _app_services_selection_resize_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/selection/resize-selection.service */ "./src/app/services/selection/resize-selection.service.ts");
/* harmony import */ var _app_services_selection_shift_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/selection/shift-selection.service */ "./src/app/services/selection/shift-selection.service.ts");
/* harmony import */ var _app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/tools/tool.service */ "./src/app/services/tools/tool.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");











class SelectionManagerComponent {
    constructor(toolService, shiftSelection, resizeSelection, clipboard) {
        this.toolService = toolService;
        this.shiftSelection = shiftSelection;
        this.resizeSelection = resizeSelection;
        this.clipboard = clipboard;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.size = this.sign = _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].TEST_VECTOR;
        this.position = this.delta = _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_VECTOR;
        this.keyMap = new Map();
        this.keyMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Arrows"].ARROWDOWN, false);
        this.keyMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Arrows"].ARROWLEFT, false);
        this.keyMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Arrows"].ARROWRIGHT, false);
        this.keyMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Arrows"].ARROWUP, false);
        this.timerMode = false;
    }
    ngOnInit() {
        document.getElementById('selection').addEventListener('mousedown', this.onMouseDown);
        document.getElementById('selection').addEventListener('mouseup', this.onMouseUp);
    }
    onMouseDown(event) {
        if ('placeBox$' in this.toolService.currentTool) {
            this.shiftSelection.operation = 0;
        }
        this.toolService.changeTool(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].SHIFT_SELECTION_SHORTCUT);
        const element = document.getElementById('selection-manager');
        this.position = {
            x: parseFloat(element.parentElement.style.left),
            y: parseFloat(element.parentElement.style.top),
        };
        this.size = { x: parseFloat(element.style.width), y: parseFloat(element.style.height) };
        this.shiftSelection.handleMouseDown(event, this.position, this.size);
    }
    onMouseUp(event) {
        this.toolService.currentTool.isDrawing = false;
        this.shiftSelection.onMouseUp();
    }
    handleKeyDown(event) {
        if (this.keyIsArrow(event.key)) {
            this.handleArrowsDown(event.key);
        }
        else if (event.ctrlKey) {
            this.handleCtrlDown(event.key);
        }
        else if (event.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].SHIFT) {
            this.resizeSelection.shiftIsPressed = true;
        }
        else if (event.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].DELETE && this.clipboard.selector.isActiveSelection) {
            this.clipboard.handleCommand(event.key, this.shiftSelection.operation);
        }
        else if (event.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].ESCAPE) {
            this.handleEscapeDown();
        }
    }
    handleArrowsDown(key) {
        if ('placeBox$' in this.toolService.currentTool) {
            this.toolService.changeTool(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].SHIFT_SELECTION_SHORTCUT);
            this.shiftSelection.operation = 0;
        }
        this.keyMap.set(key, true);
        if (this.toolService.currentTool.info.shortcut === 'shiftSelection') {
            setTimeout(() => {
                const element = document.getElementById('selection-manager');
                this.size = { x: parseFloat(element.style.width), y: parseFloat(element.style.height) };
                this.toolService.currentTool.handleCommandMap(this.keyMap, this.size);
                this.timerMode = false;
                this.clipboard.selector.isActiveSelection = false;
                this.shiftSelection.isDrawing = true;
            }, this.timerMode ? _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].INIT_TIMER : _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].OTHER_TIMER);
        }
    }
    handleCtrlDown(key) {
        if (key === 'a') {
            this.toolService.changeTool(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Shortcut"].SURFACE_SELECTION);
            this.toolService.handleCommand(new KeyboardEvent('keydown', { key: 'a', ctrlKey: true }), true);
        }
        else if (this.clipboard.selector.isActiveSelection || key === 'v') {
            this.clipboard.handleCommand(key, this.shiftSelection.operation);
            this.clipboard.changeClipSize$.subscribe(() => {
                if ('cx'.includes(key)) {
                    this.changeClipSize();
                }
            });
            if (key === 'v') {
                this.shiftSelection.operation = 1;
                this.resizeSelection.isFirstResize = false;
                this.toolService.changeTool(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].SHIFT_SELECTION_SHORTCUT);
                this.shiftSelection.handleCommandMap(this.keyMap, this.clipboard.clipSize);
            }
        }
    }
    handleEscapeDown() {
        if ('placeBox$' in this.toolService.currentTool) {
            this.toolService.currentTool.deleteCurrentSelection();
        }
        else if (this.toolService.currentTool.info.shortcut === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].SHIFT_SELECTION_SHORTCUT) {
            this.toolService.currentTool.selector.deleteCurrentSelection();
        }
        else if (this.toolService.currentTool.info.shortcut === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESIZE_SELECTION_SHORTCUT) {
            this.toolService.currentTool.selector.deleteCurrentSelection();
        }
    }
    handleKeyUp(event) {
        if (this.keyIsArrow(event.key)) {
            if (this.toolService.currentTool.info.shortcut === 'shiftSelection') {
                setTimeout(() => {
                    this.keyMap.set(event.key, false);
                    this.toolService.currentTool.handleCommandMap(this.keyMap, this.size);
                    let counter = 0;
                    this.keyMap.forEach((value, key) => {
                        if (key.substring(0, _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].ARROW_SUBSTRING_LENGTH) === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Arrows"].ARROWDOWN.substring(0, _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].ARROW_SUBSTRING_LENGTH) &&
                            !value) {
                            counter++;
                        }
                    });
                    this.timerMode = counter === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].ARROW_NUMBER ? true : false;
                    if (this.timerMode) {
                        this.clipboard.selector.isActiveSelection = true;
                        this.toolService.changeTool(this.shiftSelection.selector.info.shortcut);
                        this.toolService.currentTool.isDrawing = false;
                    }
                }, this.timerMode ? _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].INIT_TIMER : _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].OTHER_TIMER);
            }
        }
        else if (event.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].SHIFT) {
            this.resizeSelection.shiftIsPressed = false;
        }
    }
    keyIsArrow(value) {
        return value === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Arrows"].ARROWDOWN || value === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Arrows"].ARROWLEFT || value === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Arrows"].ARROWRIGHT || value === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Arrows"].ARROWUP;
    }
    changeClipSize() {
        const element = document.getElementById('selection-manager');
        this.size = { x: parseFloat(element.style.width), y: parseFloat(element.style.height) };
        this.clipboard.clipSize = this.size;
    }
}
SelectionManagerComponent.ɵfac = function SelectionManagerComponent_Factory(t) { return new (t || SelectionManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_4__["ToolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_selection_shift_selection_service__WEBPACK_IMPORTED_MODULE_3__["ShiftSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_selection_resize_selection_service__WEBPACK_IMPORTED_MODULE_2__["ResizeSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"])); };
SelectionManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectionManagerComponent, selectors: [["app-selection-manager"]], hostBindings: function SelectionManagerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SelectionManagerComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveBody"])("keyup", function SelectionManagerComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveBody"]);
    } }, decls: 0, vars: 0, template: function SelectionManagerComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsZWN0aW9uL3NlbGVjdGlvbi1tYW5hZ2VyL3NlbGVjdGlvbi1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectionManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selection-manager',
                templateUrl: './selection-manager.component.html',
                styleUrls: ['./selection-manager.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_4__["ToolService"] }, { type: _app_services_selection_shift_selection_service__WEBPACK_IMPORTED_MODULE_3__["ShiftSelectionService"] }, { type: _app_services_selection_resize_selection_service__WEBPACK_IMPORTED_MODULE_2__["ResizeSelectionService"] }, { type: _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"] }]; }, { handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['body:keydown', ['$event']]
        }], handleKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['body:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/selection/selection-manager/selection-manager.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/selection/selection-manager/selection-manager.module.ts ***!
  \************************************************************************************/
/*! exports provided: SelectionManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionManagerModule", function() { return SelectionManagerModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _selection_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selection-manager.component */ "./src/app/components/selection/selection-manager/selection-manager.component.ts");






class SelectionManagerModule {
}
SelectionManagerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SelectionManagerModule });
SelectionManagerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SelectionManagerModule_Factory(t) { return new (t || SelectionManagerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SelectionManagerModule, { declarations: [_selection_manager_component__WEBPACK_IMPORTED_MODULE_4__["SelectionManagerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"]], exports: [_selection_manager_component__WEBPACK_IMPORTED_MODULE_4__["SelectionManagerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SelectionManagerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_selection_manager_component__WEBPACK_IMPORTED_MODULE_4__["SelectionManagerComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"]],
                exports: [_selection_manager_component__WEBPACK_IMPORTED_MODULE_4__["SelectionManagerComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/event-manager/event-manager.service */ "./src/app/services/event-manager/event-manager.service.ts");
/* harmony import */ var _app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/tools/tool.service */ "./src/app/services/tools/tool.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var src_app_components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/carrousel/carrousel.component */ "./src/app/components/carrousel/carrousel.component.ts");
/* harmony import */ var src_app_components_save_save_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/save/save.component */ "./src/app/components/save/save.component.ts");
/* harmony import */ var src_app_components_warning_warning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/warning/warning.component */ "./src/app/components/warning/warning.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _attributes_panel_attributes_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../attributes-panel/attributes-panel.component */ "./src/app/components/attributes-panel/attributes-panel.component.ts");



















const _c0 = ["sidebarElement"];
class SidebarComponent {
    constructor(toolService, dialog, drawingService, event) {
        this.toolService = toolService;
        this.dialog = dialog;
        this.drawingService = drawingService;
        this.event = event;
    }
    ngAfterViewInit() {
        this.drawingService.positionX = this.sidebarElement.nativeElement.offsetWidth;
    }
    openModal() {
        this.event.disableShortcuts();
        const dialogRef = this.dialog.open(src_app_components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_6__["CarrouselComponent"], { panelClass: 'custom-carrousel-container' });
        dialogRef.afterClosed().subscribe((result) => {
            this.event.enableShortcuts();
            if (result) {
                if (!this.drawingService.isEmpty()) {
                    const ref = this.dialog.open(src_app_components_warning_warning_component__WEBPACK_IMPORTED_MODULE_8__["WarningComponent"], { panelClass: 'custom-warning-container' });
                    ref.afterClosed().subscribe((response) => {
                        if (response)
                            this.drawingService.initCanvas();
                    });
                }
                else {
                    this.drawingService.initCanvas();
                }
            }
        });
    }
    toggleDrawingOptions(shortcut) {
        if (shortcut === 'g') {
            this.event.toggleView(shortcut);
        }
    }
    openExport() {
        this.event.exportWrapper();
    }
    openSaving() {
        this.event.disableShortcuts();
        const dialogRef = this.dialog.open(src_app_components_save_save_component__WEBPACK_IMPORTED_MODULE_7__["SaveComponent"], { panelClass: 'custom-dialog-container' });
        dialogRef.afterClosed().subscribe(() => this.event.enableShortcuts());
    }
    newDrawing() {
        if (!this.drawingService.isEmpty()) {
            this.event.disableShortcuts();
            const dialogRef = this.dialog.open(src_app_components_warning_warning_component__WEBPACK_IMPORTED_MODULE_8__["WarningComponent"], { panelClass: 'custom-warning-container' });
            dialogRef.afterClosed().subscribe((result) => {
                this.event.enableShortcuts();
                if (result)
                    this.drawingService.new();
            });
        }
    }
    undo() {
        this.drawingService.undo();
    }
    redo() {
        this.drawingService.redo();
    }
    valueChange(value) {
        const command = { key: _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].ESCAPE };
        this.toolService.changeTool(value);
        this.toolService.currentTool.handleCommand(command, true);
    }
    runShortcut(value) {
        const command = { key: value };
        if (this.toolService.currentTool.info.name.includes('selection') && !'rsv'.includes(value)) {
            this.drawingService.addAction(this.drawingService.lastAction);
        }
        this.toolService.changeTool(value);
        this.toolService.currentTool.handleCommand(command, true);
    }
    handleClipboard(key) {
        const operation = 'isShifting' in this.toolService.currentTool ? 1 : 0;
        this.toolService.clipboardService.handleCommand(key, operation);
    }
    selectionIsActive() {
        if ('placeBox$' in this.toolService.currentTool) {
            return this.toolService.currentTool.isActiveSelection;
        }
        else if (_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].SHIFT_SELECTION_SHORTCUT === this.toolService.currentTool.info.shortcut) {
            return this.toolService.currentTool.selector.isActiveSelection;
        }
        else if (_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESIZE_SELECTION_SHORTCUT === this.toolService.currentTool.info.shortcut) {
            return this.toolService.currentTool.selector.isActiveSelection;
        }
        return false;
    }
    clipboardNotEmpty() {
        return this.toolService.clipboardService.canPaste;
    }
    toolInUse() {
        return this.toolService.hasBegunDrawing();
    }
    verifyValue(value) {
        if (value === 'm') {
            return this.toolService.magnetIsActive();
        }
        return this.toolService.currentTool.info.shortcut === value;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_4__["ToolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_3__["EventManagerService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidebarElement = _t.first);
    } }, decls: 135, vars: 42, consts: [["id", "container", 1, "container"], ["sidebarElement", ""], [1, "bar-container"], ["mat-raised-button", "", "matTooltip", "liste d'options pour le dessin", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", "square", 3, "matMenuTriggerFor", "disabled"], ["tooltip", "matTooltip"], [1, "far", "fa-file"], [1, "container"], ["fichier", ""], ["mat-button", "", "value", "ctrl-o", "matTooltip", "Cr\u00E9er un nouveau dessin vide Raccourci: ctrl-o", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "click"], [1, "fas", "fa-plus"], ["mat-button", "", "value", "ctrl-s", "matTooltip", "Sauvegarder le dessin Raccourci: ctrl-s", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "click"], [1, "far", "fa-save"], ["mat-button", "", "matTooltip", "Ouvrir le carrousel de dessin Raccourci: ctrl-g", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "click"], [1, "far", "fa-folder-open"], ["mat-button", "", "value", "ctrl-e", "matTooltip", "Exporter le dessin Raccourci: ctrl-e", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "click"], [1, "fas", "fa-file-export"], ["name", "options", "vertical", "", 1, "button-group", 3, "change"], [1, "two-by-two"], ["value", "c", "disableRipple", "true", "matTooltip", "Dessiner avec un crayon Raccourci: c", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "checked", "disabled"], ["pencil", "", "tooltip", "matTooltip"], [1, "fas", "fa-pencil-alt"], ["value", "a", "matTooltip", "Dessiner avec un a\u00E9rosol Raccourci: a", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "disabled", "checked"], ["spray", "", "tooltip", "matTooltip"], [1, "fas", "fa-spray-can"], ["disableRipple", "true", "matTooltip", "Liste de forme \u00E0 placer dans le dessin", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "disabled", "matMenuTriggerFor", "checked"], [1, "fas", "fa-shapes"], ["formes", ""], ["vertical", "", 1, "button-group", 3, "change"], ["formeListe", "matButtonToggleGroup"], ["value", "1", "disableRipple", "true", "matTooltip", "Placer un rectangle ou carr\u00E9 Raccourci: 1", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "checked"], ["rectangle", "", "tooltip", "matTooltip"], [1, "far", "fa-square"], ["value", "2", "disableRipple", "true", "matTooltip", "Placer une ellipse ou cercle Raccourci: 2", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "checked"], ["ellipse", "", "tooltip", "matTooltip"], [1, "far", "fa-circle"], ["value", "3", "matTooltip", "Placer un polygone Raccourci: 3", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "checked"], ["polygone", "", "tooltip", "matTooltip"], [1, "fas", "fa-draw-polygon"], ["value", "l", "disableRipple", "true", "matTooltip", "Dessiner une ligne Raccourci: l", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "checked", "disabled"], ["line", "", "tooltip", "matTooltip"], [1, "fas", "fa-minus"], ["value", "t", "matTooltip", "Placer du texte Raccourci: t", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "disabled", "checked"], ["text", "", "tooltip", "matTooltip"], [1, "fas", "fa-text-height"], ["value", "b", "matTooltip", "Dessiner avec une couleur une partie du dessin Raccourci: b", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "disabled", "checked"], ["fill", "", "tooltip", "matTooltip"], [1, "fas", "fa-fill-drip"], ["value", "e", "disableRipple", "true", "matTooltip", "Effacer une partie du dessin Raccourci: e", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "checked", "disabled"], ["eraser", "", "tooltip", "matTooltip"], [1, "fas", "fa-eraser"], ["value", "d", "matTooltip", "Placer une image sur le dessin Raccourci: d", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "disabled", "checked"], ["stamp", "", "tooltip", "matTooltip"], [1, "fas", "fa-stamp"], ["value", "i", "matTooltip", "S\u00E9lectionner la couleur d'un pixel Raccourci: i", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "disabled", "checked"], ["select", "", "tooltip", "matTooltip"], [1, "fas", "fa-eye-dropper"], ["matTooltip", "Selection d'une partie du dessin \u00E0 l'aide d'une forme", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "disabled", "matMenuTriggerFor", "checked"], [1, "far", "fa-object-ungroup"], ["selection", ""], ["selectionListe", "matButtonToggleGroup"], ["value", "r", "matTooltip", "S\u00E9lection en rectangle ou carr\u00E9 Raccourci: r", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "checked"], ["rectangleSelection", "", "tooltip", "matTooltip"], [1, "fas", "fa-vector-square"], ["value", "s", "matTooltip", "S\u00E9lection en ellipse ou cercle Raccourci: s", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "checked"], ["ellipseSelection", "", "tooltip", "matTooltip"], ["value", "v", "matTooltip", "S\u00E9lection avec une forme cr\u00E9er Raccourci: v", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "checked"], ["lassoSelection", "", "tooltip", "matTooltip"], ["src", "/assets/lasso.png", 1, "lassoImage"], ["value", "ctrl-a", "matTooltip", "S\u00E9lectionner tout le dessin: ctrl + a", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "checked", "click"], ["surfaceSelection", "", "tooltip", "matTooltip"], [1, "far", "fa-object-group"], ["name", "options-process", 3, "change"], ["value", "ctrl-c", "matTooltip", "Copier une partie du dessin Raccourci: ctrl-c", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "multi-button", "btn", 3, "disabled", "click"], ["copy", "", "tooltip", "matTooltip"], [1, "far", "fa-copy"], ["value", "ctrl-v", "matTooltip", "Coller une partie du dessin Raccourci: ctrl-v", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "multi-button", "btn", 3, "disabled", "click"], ["paste", "", "tooltip", "matTooltip"], [1, "fas", "fa-paste"], ["value", "ctrl-x", "matTooltip", "Enlever une partie de dessin et la conserve pour copie Raccourci: ctrl-x", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "multi-button", "btn", 3, "disabled", "click"], ["cut", "", "tooltip", "matTooltip"], [1, "fas", "fa-cut"], ["value", "Delete", "matTooltip", "Supprimer la s\u00E9lection", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "multi-button", "btn", 3, "disabled", "change", "click"], [1, "fas", "fa-backspace"], [1, "btn", 3, "disabled", "click"], [1, "icon-container"], [1, "fas", "fa-undo"], [1, "fas", "fa-redo"], ["name", "outil-surface"], ["value", "g", "matTooltip", "affiche une grille sur le dessin Raccourci: g", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "disabled", "checked", "click"], ["grid", "", "tooltip", "matTooltip"], [1, "fas", "fa-border-all"], ["value", "m", "matTooltip", "bouger un outil le fait coller \u00E0 la grille Raccourci: m", "matTooltipPosition", "right", "matTooltipShowDelay", "1000", 1, "btn", 3, "disabled", "checked", "click"], ["magnet", "", "tooltip", "matTooltip"], [1, "fas", "fa-magnet"], ["id", "attributes-panel", 3, "activeTool"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_8_listener() { return ctx.newDrawing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_11_listener() { return ctx.openSaving(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_14_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_17_listener() { return ctx.openExport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-button-toggle-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_mat_button_toggle_group_change_20_listener($event) { return ctx.valueChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-button-toggle", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-button-toggle", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-button-toggle", 24, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-menu", null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-button-toggle-group", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_mat_button_toggle_group_change_36_listener($event) { return ctx.valueChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-button-toggle", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-button-toggle", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-button-toggle", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-button-toggle", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-button-toggle", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-button-toggle", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-button-toggle", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-button-toggle", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-button-toggle", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-button-toggle", 56, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-menu", null, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-button-toggle-group", 27, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_mat_button_toggle_group_change_82_listener($event) { return ctx.valueChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-button-toggle", 60, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-button-toggle", 63, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-button-toggle", 65, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-button-toggle", 68, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_button_toggle_click_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](97); return ctx.runShortcut(_r41.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-button-toggle-group", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_mat_button_toggle_group_change_100_listener($event) { return ctx.valueChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-button-toggle", 72, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_button_toggle_click_101_listener() { return ctx.handleClipboard("c"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-button-toggle", 75, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_button_toggle_click_105_listener() { return ctx.handleClipboard("v"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-button-toggle", 78, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_button_toggle_click_110_listener() { return ctx.handleClipboard("x"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-button-toggle", 81, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_mat_button_toggle_change_114_listener($event) { return ctx.valueChange($event.value); })("click", function SidebarComponent_Template_mat_button_toggle_click_114_listener() { return ctx.handleClipboard("Delete"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_119_listener() { return ctx.drawingService.undo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_122_listener() { return ctx.drawingService.redo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-button-toggle-group", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-button-toggle", 88, 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_button_toggle_click_126_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](127); return ctx.toolService.isToolActive(_r51.value) ? ctx.toggleDrawingOptions(_r51.value) : ctx.toolService.changeTool(_r51.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-button-toggle", 91, 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_button_toggle_click_130_listener() { return ctx.toolService.magnetService.toggleIsActive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "app-attributes-panel", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81);
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83);
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](89);
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](93);
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](97);
        const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](127);
        const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2)("disabled", ctx.toolInUse());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verifyValue(_r7.value))("disabled", ctx.toolInUse());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse())("checked", ctx.verifyValue(_r9.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse())("matMenuTriggerFor", _r12)("checked", ctx.verifyValue(_r13.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verifyValue(_r14.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verifyValue(_r16.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verifyValue(_r18.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verifyValue(_r20.value))("disabled", ctx.toolInUse());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse())("checked", ctx.verifyValue(_r22.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse())("checked", ctx.verifyValue(_r24.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verifyValue(_r26.value))("disabled", ctx.toolInUse());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse())("checked", ctx.verifyValue(_r28.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse())("checked", ctx.verifyValue(_r30.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse())("matMenuTriggerFor", _r33)("checked", ctx.verifyValue(_r34.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verifyValue(_r35.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verifyValue(_r37.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verifyValue(_r39.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verifyValue(_r41.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectionIsActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectionIsActive() && !ctx.clipboardNotEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectionIsActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectionIsActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse() || !ctx.drawingService.undoIsReady() || ctx.toolService.currentTool.info.name.includes("selection"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse() || !ctx.drawingService.redoIsReady() || ctx.toolService.currentTool.info.name.includes("selection"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse())("checked", ctx.toolService.isToolActive(_r51.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.toolInUse())("checked", ctx.verifyValue(_r53.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeTool", ctx.toolService.currentTool);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggle"], _attributes_panel_attributes_panel_component__WEBPACK_IMPORTED_MODULE_13__["AttributesPanelComponent"]], styles: [".button-group[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px 5px 5px 5px;\n}\n\n.button2[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  font-family: Poppins, sans-serif;\n  background-color: #f4f7fd;\n  box-shadow: 5px 5px 21px #dcdee4, -5px -5px 21px #ffffff;\n  transition: box-shadow 0.5s ease-in-out;\n  width: min-content;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 5px 10px 5px 10px;\n  margin-bottom: 15px;\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  font-family: Poppins, sans-serif;\n  background-color: #f4f7fd;\n  box-shadow: 5px 5px 21px #dcdee4, -5px -5px 21px #ffffff;\n  transition: box-shadow 0.5s ease-in-out;\n  color: black;\n  width: min-content;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0px 5px 0px 5px;\n  margin-bottom: 15px;\n}\n\n.multi-button[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.fas[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 10vw;\n  background-color: #f4f7fd;\n  border-right: 1px solid black;\n  margin: auto;\n  display: flex;\n  min-height: 100vh;\n  min-width: 10vw;\n  flex-direction: row;\n  text-align: center;\n}\n\n.color[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 20vh;\n  margin: 10px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: #f4f7fd;\n  transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  box-shadow: 0px -6px 10px white, 0px 4px 15px rgba(0, 0, 0, 0.15);\n  margin-left: 5px;\n  margin-bottom: 5px;\n  vertical-align: baseline !important;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 0px -2px 5px white, inset 0px 2px 5px rgba(0, 0, 0, 0.15);\n}\n\n.btn[ng-reflect-checked=true][_ngcontent-%COMP%] {\n  box-shadow: inset 0px -2px 5px white, inset 0px 2px 5px rgba(0, 0, 0, 0.15);\n  color: orangered;\n}\n\n.btn[ng-reflect-disabled=true][_ngcontent-%COMP%] {\n  box-shadow: inset 0px -2px 5px white, inset 0px 2px 5px rgba(0, 0, 0, 0.15);\n  cursor: not-allowed;\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  box-shadow: inset 0px -2px 5px white, inset 0px 2px 5px rgba(0, 0, 0, 0.15);\n  cursor: not-allowed;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 0;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: 0 !important;\n  outline-style: none;\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  box-shadow: inset 0px -2px 5px white, inset 0px 2px 5px rgba(0, 0, 0, 0.15);\n  cursor: not-allowed;\n}\n\nmat-dialog-container[_ngcontent-%COMP%] {\n  width: 80vw;\n  height: 80vh;\n}\n\n.two-by-two[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.square[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px 10px 10px 10px;\n  margin-top: 10px;\n}\n\n.lassoImage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0Esd0JBQUE7QUFDRDs7QUFFQTtFQUNDLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHdEQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBQ0Q7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSx3REFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7QUFDRDs7QUFFQTtFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2REFBQTtFQUNBLGlFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUFDO0VBRUMsMkVBQUE7QUFDRjs7QUFDQztFQUNDLDJFQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQztFQUNDLDJFQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQztFQUNDLDJFQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHQTtFQUNDLFNBQUE7QUFBRDs7QUFDQztFQUNDLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDQywyRUFBQTtFQUNBLG1CQUFBO0FBQUQ7O0FBR0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQUFEOztBQUdBO0VBQ0MsYUFBQTtBQUFEOztBQUVBO0VBQ0MsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tZ3JvdXAge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XG59XG5cbi5idXR0b24yIHtcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0Zm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmNGY3ZmQ7XG5cdGJveC1zaGFkb3c6IDVweCA1cHggMjFweCAjZGNkZWU0LCAtNXB4IC01cHggMjFweCAjZmZmZmZmO1xuXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQ7XG5cdHdpZHRoOiBtaW4tY29udGVudDtcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0cGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5idXR0b24ge1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjdmZDtcblx0Ym94LXNoYWRvdzogNXB4IDVweCAyMXB4ICNkY2RlZTQsIC01cHggLTVweCAyMXB4ICNmZmZmZmY7XG5cdHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluLW91dDtcblx0Y29sb3I6IGJsYWNrO1xuXHR3aWR0aDogbWluLWNvbnRlbnQ7XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm11bHRpLWJ1dHRvbiB7XG5cdG1hcmdpbjogYXV0bztcbn1cblxuLmZhcyB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRtaW4td2lkdGg6IDEwdnc7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmNGY3ZmQ7XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuXHRtYXJnaW46IGF1dG87XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRtaW4td2lkdGg6IDEwdnc7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbG9yIHtcblx0d2lkdGg6IDEwdnc7XG5cdGhlaWdodDogMjB2aDtcblx0bWFyZ2luOiAxMHB4O1xufVxuXG4uYnRuIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogNDVweDtcblx0aGVpZ2h0OiA0NXB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQ6ICNmNGY3ZmQ7XG5cdHRyYW5zaXRpb246IGFsbCAxMDBtcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG5cdGJveC1zaGFkb3c6IDBweCAtNnB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSwgMHB4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cdG1hcmdpbi1sZWZ0OiA1cHg7XG5cdG1hcmdpbi1ib3R0b206IDVweDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Jjpob3ZlciB7XG5cdFx0Ly8gYnV0dG9uIHN0YXRlIGFjdGl2ZVxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAtMnB4IDVweCByZ2IoMjU1LCAyNTUsIDI1NSksIGluc2V0IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cdH1cblx0JltuZy1yZWZsZWN0LWNoZWNrZWQ9J3RydWUnXSB7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IC0ycHggNXB4IHJnYigyNTUsIDI1NSwgMjU1KSwgaW5zZXQgMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblx0XHRjb2xvcjogb3JhbmdlcmVkO1xuXHR9XG5cdCZbbmctcmVmbGVjdC1kaXNhYmxlZD0ndHJ1ZSddIHtcblx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggLTJweCA1cHggcmdiKDI1NSwgMjU1LCAyNTUpLCBpbnNldCAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdH1cblx0JjpkaXNhYmxlZCB7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IC0ycHggNXB4IHJnYigyNTUsIDI1NSwgMjU1KSwgaW5zZXQgMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHR9XG59XG5cbmJ1dHRvbiB7XG5cdGJvcmRlcjogMDtcblx0Jjpmb2N1cyB7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdG91dGxpbmU6IDAgIWltcG9ydGFudDtcblx0XHRvdXRsaW5lLXN0eWxlOiBub25lO1xuXHR9XG59XG5cbi5idG46ZGlzYWJsZWQge1xuXHRib3gtc2hhZG93OiBpbnNldCAwcHggLTJweCA1cHggcmdiKDI1NSwgMjU1LCAyNTUpLCBpbnNldCAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG5cdHdpZHRoOiA4MHZ3O1xuXHRoZWlnaHQ6IDgwdmg7XG59XG5cbi50d28tYnktdHdvIHtcblx0ZGlzcGxheTogZmxleDtcbn1cbi5zcXVhcmUge1xuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcblx0bWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxhc3NvSW1hZ2Uge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss'],
            }]
    }], function () { return [{ type: _app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_4__["ToolService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_2__["DrawingService"] }, { type: _app_services_event_manager_event_manager_service__WEBPACK_IMPORTED_MODULE_3__["EventManagerService"] }]; }, { sidebarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidebarElement']
        }] }); })();


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.module.ts ***!
  \******************************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_components_attributes_panel_attributes_panel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/attributes-panel/attributes-panel.module */ "./src/app/components/attributes-panel/attributes-panel.module.ts");
/* harmony import */ var src_app_components_carrousel_carrousel_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/carrousel/carrousel.module */ "./src/app/components/carrousel/carrousel.module.ts");
/* harmony import */ var src_app_components_save_save_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/save/save.module */ "./src/app/components/save/save.module.ts");
/* harmony import */ var src_app_components_warning_warning_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/warning/warning.module */ "./src/app/components/warning/warning.module.ts");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");















class SidebarModule {
}
SidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SidebarModule });
SidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SidebarModule_Factory(t) { return new (t || SidebarModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            src_app_components_carrousel_carrousel_module__WEBPACK_IMPORTED_MODULE_10__["CarrouselModule"],
            src_app_components_warning_warning_module__WEBPACK_IMPORTED_MODULE_12__["WarningModule"],
            src_app_components_attributes_panel_attributes_panel_module__WEBPACK_IMPORTED_MODULE_9__["AttributesPanelModule"],
            src_app_components_save_save_module__WEBPACK_IMPORTED_MODULE_11__["SaveModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SidebarModule, { declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
        src_app_components_carrousel_carrousel_module__WEBPACK_IMPORTED_MODULE_10__["CarrouselModule"],
        src_app_components_warning_warning_module__WEBPACK_IMPORTED_MODULE_12__["WarningModule"],
        src_app_components_attributes_panel_attributes_panel_module__WEBPACK_IMPORTED_MODULE_9__["AttributesPanelModule"],
        src_app_components_save_save_module__WEBPACK_IMPORTED_MODULE_11__["SaveModule"]], exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                    src_app_components_carrousel_carrousel_module__WEBPACK_IMPORTED_MODULE_10__["CarrouselModule"],
                    src_app_components_warning_warning_module__WEBPACK_IMPORTED_MODULE_12__["WarningModule"],
                    src_app_components_attributes_panel_attributes_panel_module__WEBPACK_IMPORTED_MODULE_9__["AttributesPanelModule"],
                    src_app_components_save_save_module__WEBPACK_IMPORTED_MODULE_11__["SaveModule"],
                ],
                exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/warning/warning.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/warning/warning.component.ts ***!
  \*********************************************************/
/*! exports provided: WarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningComponent", function() { return WarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class WarningComponent {
}
WarningComponent.ɵfac = function WarningComponent_Factory(t) { return new (t || WarningComponent)(); };
WarningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarningComponent, selectors: [["app-warning"]], decls: 9, vars: 1, consts: [["mat-dialog-title", "", 1, "title"], [1, "action"], ["mat-raised-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "mat-dialog-close", "", 1, "close"]], template: function WarningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Attention");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Vous allez perdre votre dessin. \u00CAtes-vous certain? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Confirmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  cursor: default;\n}\n\n.action[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.close[_ngcontent-%COMP%] {\n  background-color: #1f62f2;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YXJuaW5nL3dhcm5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Q7O0FBQ0E7RUFDQyx5QkFBQTtBQUVEOztBQUFBO0VBRUMseUJBQUE7RUFDQSxZQUFBO0FBRUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dhcm5pbmcvd2FybmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG5cdGZvbnQtc2l6ZTogMjhweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGN1cnNvcjogZGVmYXVsdDtcbn1cbi5hY3Rpb24ge1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNsb3NlIHtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWY2MmYyO1xuXHRjb2xvcjogd2hpdGU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-warning',
                templateUrl: './warning.component.html',
                styleUrls: ['./warning.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/warning/warning.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/warning/warning.module.ts ***!
  \******************************************************/
/*! exports provided: WarningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningModule", function() { return WarningModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _warning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warning.component */ "./src/app/components/warning/warning.component.ts");







class WarningModule {
}
WarningModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WarningModule });
WarningModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function WarningModule_Factory(t) { return new (t || WarningModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WarningModule, { declarations: [_warning_component__WEBPACK_IMPORTED_MODULE_5__["WarningComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]], exports: [_warning_component__WEBPACK_IMPORTED_MODULE_5__["WarningComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WarningModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_warning_component__WEBPACK_IMPORTED_MODULE_5__["WarningComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]],
                exports: [_warning_component__WEBPACK_IMPORTED_MODULE_5__["WarningComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/clipboard/clipboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/clipboard/clipboard.service.ts ***!
  \*********************************************************/
/*! exports provided: ClipboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






class ClipboardService {
    constructor(drawingService) {
        this.drawingService = drawingService;
        this.changeClipSizeCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.changeClipSize$ = this.changeClipSizeCallSource.asObservable();
        this.clip = { selection: new ImageData(1, 1), posX: 0, posY: 0, width: 0, height: 0 };
        this.canPaste = false;
        this.clipSize = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].DEFAULT_VECTOR;
    }
    handleCommand(key, operation) {
        switch (key) {
            case _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].COPY_SHORTCUT:
                this.copySelection();
                break;
            case _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].CUT_SHORTCUT:
                this.cutSelection(operation);
                break;
            case _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].PASTE_SHORTCUT:
                this.pasteSelection();
                break;
            case _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Command"].DELETE:
                this.deleteSelection(operation);
                break;
        }
    }
    copySelection() {
        if (this.selector.isActiveSelection) {
            this.clip.selection = this.selector.selection;
            this.clip.posX = this.selector.origin.x;
            this.clip.posY = this.selector.origin.y;
            this.clip.width = Math.abs(this.selector.deltaX);
            this.clip.height = Math.abs(this.selector.deltaY);
            this.canPaste = true;
            this.callChangeClipSize();
        }
    }
    cutSelection(operation) {
        if (this.selector.isActiveSelection) {
            this.copySelection();
            const position = { x: this.clip.posX, y: this.clip.posY };
            this.clip.width = this.clip.width === 0 ? 1 : this.clip.width;
            this.clip.height = this.clip.height === 0 ? 1 : this.clip.height;
            this.selector.redrawSelection(position, operation !== 1 ? 0 : 1, { x: this.clip.width, y: this.clip.height }, this.clip.selection);
            this.selector.deleteCurrentSelection();
            const wrappedPosition = Object.assign({}, position);
            const wrappedSize = Object.assign({ x: this.clip.width, y: this.clip.height });
            const wrappedSelector = this.selector;
            const imageData = this.clip.selection;
            const func = () => {
                wrappedSelector.redrawSelection(wrappedPosition, operation !== 1 ? 0 : 1, wrappedSize, imageData);
                this.selector.deleteCurrentSelection();
            };
            this.drawingService.addAction(func);
        }
    }
    pasteSelection() {
        if (this.canPaste) {
            const position = { x: 0, y: 0 };
            this.clipSize.x = this.clipSize.x === 0 ? this.clip.width : this.clipSize.x;
            this.clipSize.y = this.clipSize.y === 0 ? this.clip.height : this.clipSize.y;
            this.selector.deltaX = this.clip.width;
            this.selector.deltaY = this.clip.height;
            this.selector.redrawSelection(position, 1, this.clipSize, this.clip.selection);
            const wrappedPosition = Object.assign({}, position);
            const wrappedSize = Object.assign({}, this.clipSize);
            const wrappedSelector = this.selector;
            const imageData = this.clip.selection;
            const func = () => {
                wrappedSelector.redrawSelection(wrappedPosition, 1, wrappedSize, imageData);
                this.selector.deleteCurrentSelection();
            };
            this.drawingService.addAction(func);
            this.selector.selection = this.clip.selection;
            this.clip.posX = this.clip.posY = 0;
            this.selector.origin = position;
            this.selector.isActiveSelection = true;
        }
    }
    deleteSelection(operation) {
        const tempClip = this.clip;
        this.cutSelection(operation);
        this.clip = tempClip;
        this.canPaste = false;
        this.selector.deltaX = this.selector.deltaY = 0;
    }
    callChangeClipSize() {
        this.changeClipSizeCallSource.next();
    }
}
ClipboardService.ɵfac = function ClipboardService_Factory(t) { return new (t || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"])); };
ClipboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClipboardService, factory: ClipboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClipboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_1__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/commands/command-manager.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/commands/command-manager.service.ts ***!
  \**************************************************************/
/*! exports provided: CommandManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandManagerService", function() { return CommandManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



// import { CanvasAction } from '@app/classes/canvas-action';
class CommandManagerService {
    constructor() {
        this.normalStack = [];
        this.historyStack = [];
        this.normalStack = [];
        this.historyStack = [];
    }
    undo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.undoIsReady()) {
                return;
            }
            this.historyStack.push(this.normalStack.pop());
            yield this.update();
        });
    }
    redo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.redoIsReady()) {
                return;
            }
            this.normalStack.push(this.historyStack.pop());
            yield this.update();
        });
    }
    clear() {
        this.normalStack = [];
        this.historyStack = [];
    }
    redoIsReady() {
        return !(this.historyStack.length < 1);
    }
    undoIsReady() {
        return !(this.normalStack.length < 2);
    }
    update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (const action of this.normalStack) {
                yield action();
            }
        });
    }
    replaceAction(action) {
        this.normalStack.pop();
        this.normalStack.push(action);
    }
    addAction(action) {
        this.normalStack.push(action);
        this.historyStack = [];
    }
}
CommandManagerService.ɵfac = function CommandManagerService_Factory(t) { return new (t || CommandManagerService)(); };
CommandManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommandManagerService, factory: CommandManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommandManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/drawing/drawing.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/drawing/drawing.service.ts ***!
  \*****************************************************/
/*! exports provided: DrawingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingService", function() { return DrawingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_commands_command_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/commands/command-manager.service */ "./src/app/services/commands/command-manager.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");





class DrawingService {
    constructor(commandManagerParam) {
        this.primaryColor = '#000000FF';
        this.secondaryColor = '#FF0000FF';
        this.colorHistory = new Array(_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].COLOR_HISTORY_COUNT);
        this.containerSize = { x: _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].DEFAULT_WIDTH, y: _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].DEFAULT_HEIGHT };
        this.canvasSize = { x: _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].DEFAULT_WIDTH, y: _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].DEFAULT_HEIGHT };
        this.canvasImage = '';
        // tslint:disable-next-line: no-empty
        this.lastAction = () => { };
        this.colorHistory[0] = this.primaryColor;
        this.colorHistory[1] = this.secondaryColor;
        this.commandManager = commandManagerParam;
        this.canvasImage = localStorage.getItem('save') !== null ? localStorage.getItem('save') : '';
    }
    clearCanvas(context) {
        context.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
        if (context === this.baseCtx) {
            context.fillStyle = 'white';
            context.fillRect(0, 0, this.canvasSize.x, this.canvasSize.y);
        }
    }
    addAction(action) {
        this.commandManager.addAction(action);
        localStorage.setItem('save', this.baseCtx.canvas.toDataURL());
    }
    undoIsReady() {
        return this.commandManager.undoIsReady();
    }
    redoIsReady() {
        return this.commandManager.redoIsReady();
    }
    undo() {
        if (this.undoIsReady()) {
            this.clearCanvas(this.baseCtx);
            if (this.canvasImage !== '') {
                const image = new Image();
                image.onload = () => {
                    this.baseCtx.drawImage(image, 0, 0);
                };
                image.src = this.canvasImage;
            }
        }
        this.commandManager.undo().then(() => {
            localStorage.setItem('save', this.baseCtx.canvas.toDataURL());
        });
    }
    redo() {
        if (this.canvasImage !== '') {
            const image = new Image();
            image.onload = () => {
                this.baseCtx.drawImage(image, 0, 0);
            };
            image.src = this.canvasImage;
        }
        this.commandManager.redo().then(() => {
            localStorage.setItem('save', this.baseCtx.canvas.toDataURL());
        });
    }
    changeColor(color, changePrimaryColor, forceAdd) {
        const nbColors = this.colorHistory.filter((element) => {
            return element != undefined;
        }).length;
        let colorIndex = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].UNDEFINED_COLOR;
        for (let i = 0; i < nbColors && colorIndex === _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].UNDEFINED_COLOR; i++) {
            if (this.compareColors(this.colorHistory[i], color))
                colorIndex = i;
        }
        if (!forceAdd && colorIndex === _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].UNDEFINED_COLOR)
            return;
        if (changePrimaryColor) {
            this.primaryColor = color;
        }
        else {
            this.secondaryColor = color;
        }
        if (colorIndex !== _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].UNDEFINED_COLOR) {
            this.colorHistory = this.colorHistory.slice(0, colorIndex).concat(this.colorHistory.slice(colorIndex + 1, _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].COLOR_HISTORY_COUNT));
            this.colorHistory.unshift(color);
        }
        else {
            this.colorHistory.pop();
            this.colorHistory.unshift(color);
        }
    }
    compareColors(firstColor, secondColor) {
        return firstColor.substring(0, _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].ALPHA_INDEX_HEX) === secondColor.substring(0, _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].ALPHA_INDEX_HEX);
    }
    // fonction adaptee de la page https://css-tricks.com/converting-color-spaces-in-javascript/
    RGBToHex(r, g, b, a) {
        let hexR = r.toString(16);
        let hexG = g.toString(16);
        let hexB = b.toString(16);
        let hexA;
        if (a !== undefined)
            hexA = a.toString(16) || '0';
        if (hexR.length === 1)
            hexR = '0' + hexR;
        if (hexG.length === 1)
            hexG = '0' + hexG;
        if (hexB.length === 1)
            hexB = '0' + hexB;
        if (hexA && hexA.length === 1)
            hexA = '0' + hexA;
        let color = '#' + hexR.toUpperCase() + hexG.toUpperCase() + hexB.toUpperCase();
        if (a !== undefined && hexA)
            color += hexA.toUpperCase();
        return color;
    }
    resetCursor(currentTool) {
        this.clearCanvas(this.previewCtx);
        switch (currentTool.info.name) {
            case 'eraser':
            case 'eye-dropper':
            case 'stamp':
                this.previewCtx.canvas.style.cursor = 'none';
                break;
            default:
                this.previewCtx.canvas.style.cursor = 'crosshair';
                break;
        }
    }
    isEmpty() {
        const pixelBuffer = new Uint32Array(this.baseCtx.getImageData(0, 0, this.canvasSize.x, this.canvasSize.y).data.buffer);
        return !pixelBuffer.some((color) => color !== 0);
    }
    isWhiteCanvas() {
        const pixelBuffer = new Uint32Array(this.baseCtx.getImageData(0, 0, this.canvasSize.x, this.canvasSize.y).data);
        return !pixelBuffer.some((color) => color !== _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MAX_HEX_VALUE);
    }
    new() {
        this.baseCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
        this.previewCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.x);
        this.commandManager.clear();
        this.canvasImage = '';
        this.initCanvas();
    }
    placeResizeButton(component) {
        this.bottomResizePos = { x: component.x / 2 - _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].HALF_CP_SIZE, y: component.y };
        this.rightResizePos = { x: component.x, y: component.y / 2 - _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].HALF_CP_SIZE };
        this.cornerResizePos = { x: component.x, y: component.y };
        if (component.x <= _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE) {
            component.x = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE;
            this.bottomResizePos.x = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE / 2 - _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].HALF_CP_SIZE;
            this.rightResizePos.x = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE;
            this.cornerResizePos.x = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE;
        }
        if (component.y <= _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE) {
            component.y = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE;
            this.bottomResizePos.y = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE;
            this.rightResizePos.y = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE / 2 - _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].HALF_CP_SIZE;
            this.cornerResizePos.y = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE;
        }
    }
    getCanvasDimensions() {
        return { x: Math.round(this.canvasSize.x), y: Math.round(this.canvasSize.y) };
    }
    placeBoxButton(component) {
        const boxShift = (_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].SHIFT_FACTOR * _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].BOX_CP_SIZE) / 2;
        this.eastBoxPos = { x: component.x - boxShift, y: component.y / 2 - _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].BOX_CP_SIZE };
        this.northBoxPos = { x: component.x / 2 - _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].BOX_CP_SIZE, y: -boxShift - 2 };
        this.northEastBoxPos = { x: component.x - boxShift, y: -boxShift - 2 };
        this.northWestBoxPos = { x: -boxShift, y: -boxShift };
        this.southBoxPos = { x: component.x / 2 - _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].BOX_CP_SIZE / 2 - 1, y: component.y - boxShift };
        this.southEastBoxPos = { x: component.x - boxShift, y: component.y - boxShift };
        this.southWestBoxPos = { x: -boxShift - 2, y: component.y - boxShift };
        this.westBoxPos = { x: -boxShift - 2, y: component.y / 2 - _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].BOX_CP_SIZE };
    }
    initCanvas() {
        if (this.canvasImage !== '') {
            const image = new Image();
            this.baseCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
            image.onload = () => {
                this.previewCtx.canvas.width = this.baseCtx.canvas.width = this.canvasSize.x = image.width;
                this.previewCtx.canvas.height = this.baseCtx.canvas.height = this.canvasSize.y = image.height;
                this.baseCtx.drawImage(image, 0, 0);
                this.placeResizeButton(this.canvasSize);
                this.addActionToStack();
            };
            image.src = this.canvasImage;
        }
        else {
            if (this.containerSize.x < _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE_CONDITION) {
                this.canvasSize.x = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE;
            }
            else {
                this.canvasSize.x = this.containerSize.x / 2;
            }
            if (this.containerSize.y < _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE_CONDITION) {
                this.canvasSize.y = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].MIN_SIZE;
            }
            else {
                this.canvasSize.y = this.containerSize.y / 2;
            }
            this.previewCtx.canvas.width = this.baseCtx.canvas.width = this.canvasSize.x;
            this.previewCtx.canvas.height = this.baseCtx.canvas.height = this.canvasSize.y;
            this.placeResizeButton(this.canvasSize);
            this.addActionToStack();
        }
        this.baseCtx.fillStyle = 'white';
        this.baseCtx.fillRect(0, 0, this.canvasSize.x, this.canvasSize.y);
        localStorage.setItem('save', this.canvasImage);
    }
    addActionToStack() {
        const canSize = Object.assign({}, this.canvasSize);
        const funcResize = () => {
            this.previewCtx.canvas.width = this.baseCtx.canvas.width = this.canvasSize.x = canSize.x;
            this.previewCtx.canvas.height = this.baseCtx.canvas.height = this.canvasSize.y = canSize.y;
            this.placeResizeButton(this.canvasSize);
        };
        this.commandManager.addAction(funcResize);
    }
}
DrawingService.ɵfac = function DrawingService_Factory(t) { return new (t || DrawingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_commands_command_manager_service__WEBPACK_IMPORTED_MODULE_1__["CommandManagerService"])); };
DrawingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DrawingService, factory: DrawingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_commands_command_manager_service__WEBPACK_IMPORTED_MODULE_1__["CommandManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/event-manager/event-manager.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/event-manager/event-manager.service.ts ***!
  \*****************************************************************/
/*! exports provided: EventManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventManagerService", function() { return EventManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _app_components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/carrousel/carrousel.component */ "./src/app/components/carrousel/carrousel.component.ts");
/* harmony import */ var _app_components_export_export_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/export/export.component */ "./src/app/components/export/export.component.ts");
/* harmony import */ var _app_components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/save/save.component */ "./src/app/components/save/save.component.ts");
/* harmony import */ var _app_components_warning_warning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/warning/warning.component */ "./src/app/components/warning/warning.component.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var src_app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tools/tool.service */ "./src/app/services/tools/tool.service.ts");













class EventManagerService {
    constructor(toolService, drawingService, dialog) {
        this.toolService = toolService;
        this.drawingService = drawingService;
        this.dialog = dialog;
        // On permet les no-string-literal et le no-any pour pouvoir tester les fonctions privees du service
        // tslint:disable:no-string-literal
        // tslint:disable: no-any
        this.isKeyDown = false;
        this.commandMap = new Map();
        this.handleKeydown = this.handleKeydown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onWheel = this.onWheel.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onDoubleClick = this.onDoubleClick.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.enableShortcuts();
        this.commandMap.set(this.getEventHashKey(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].REDO_EVENT), () => {
            this.redoWrapper();
        });
        this.commandMap.set(this.getEventHashKey(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].UNDO_EVENT), () => {
            this.undoWrapper();
        });
        this.commandMap.set(this.getEventHashKey(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].EXPORT_EVENT), () => {
            this.exportWrapper();
        });
        this.commandMap.set(this.getEventHashKey(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].CARROUSEL_EVENT), () => {
            this.carrouselWrapper();
        });
        this.commandMap.set(this.getEventHashKey(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].SAVE_EVENT), () => {
            this.saveWrapper();
        });
        this.commandMap.set(this.getEventHashKey(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].OPEN_EVENT), () => {
            this.openWrapper();
        });
    }
    enableShortcuts() {
        document.body.addEventListener('keydown', this.handleKeydown);
    }
    disableShortcuts() {
        document.body.removeEventListener('keydown', this.handleKeydown);
    }
    toggleView(shortcut) {
        if (shortcut.toLowerCase() === 'g') {
            this.toolService.getService(shortcut).toggleGrid();
        }
    }
    isGridActive() {
        const gridService = this.toolService.getService('g');
        if (gridService.info.name !== 'grille') {
            return false;
        }
        return gridService.options.gridOptions.isActive;
    }
    getEventHashKey(event) {
        const ctrlKey = event.ctrlKey ? 'ctrl+' : '';
        const shiftKey = event.shiftKey ? 'shift+' : '';
        const key = event.key.toLowerCase();
        return ctrlKey + shiftKey + key;
    }
    redoWrapper() {
        if (!this.toolService.currentTool.info.name.includes('selection')) {
            this.drawingService.redo();
        }
    }
    undoWrapper() {
        if (!this.toolService.currentTool.info.name.includes('selection')) {
            this.drawingService.undo();
        }
    }
    exportWrapper() {
        if (!this.drawingService.isEmpty()) {
            this.disableShortcuts();
            const dialogExportRef = this.dialog.open(_app_components_export_export_component__WEBPACK_IMPORTED_MODULE_3__["ExportComponent"], { panelClass: 'custom-dialog-container' });
            dialogExportRef.afterClosed().subscribe((result) => {
                this.enableShortcuts();
            });
        }
    }
    saveWrapper() {
        this.disableShortcuts();
        const dialogExportRef = this.dialog.open(_app_components_save_save_component__WEBPACK_IMPORTED_MODULE_4__["SaveComponent"], { panelClass: 'custom-dialog-container' });
        dialogExportRef.afterClosed().subscribe((result) => {
            this.enableShortcuts();
        });
    }
    carrouselWrapper() {
        this.disableShortcuts();
        const dialogCarrouselRef = this.dialog.open(_app_components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_2__["CarrouselComponent"], { panelClass: 'custom-carrousel-container' });
        dialogCarrouselRef.afterClosed().subscribe((result) => {
            this.enableShortcuts();
            if (result) {
                if (!this.drawingService.isEmpty()) {
                    const ref = this.dialog.open(_app_components_warning_warning_component__WEBPACK_IMPORTED_MODULE_5__["WarningComponent"], { panelClass: 'custom-warning-container' });
                    ref.afterClosed().subscribe((response) => {
                        if (response)
                            this.drawingService.initCanvas();
                    });
                }
                else {
                    this.drawingService.initCanvas();
                }
            }
        });
    }
    openWrapper() {
        if (!this.drawingService.isEmpty()) {
            this.disableShortcuts();
            const dialogNewRef = this.dialog.open(_app_components_warning_warning_component__WEBPACK_IMPORTED_MODULE_5__["WarningComponent"], { panelClass: 'custom-warning-container' });
            dialogNewRef.afterClosed().subscribe((result) => {
                this.enableShortcuts();
                if (result)
                    this.drawingService.new();
            });
        }
    }
    handleShortcut(event) {
        let hasHandled = true;
        const key = this.getEventHashKey(event);
        if (this.commandMap.has(key)) {
            this.commandMap.get(key)();
        }
        else {
            hasHandled = false;
            this.toolService.handleCommand(event, this.isKeyDown);
        }
        return hasHandled;
    }
    handleKeydown(event) {
        if (event.key !== 'F12') {
            event.preventDefault();
        }
        if (!this.toolService.hasBegunDrawing() && !this.handleShortcut(event)) {
            const key = (event.ctrlKey ? 'ctrl-' : '') + event.key;
            if (this.toolService.currentTool.info.name.includes('selection') && !'rsv'.includes(event.key) && this.toolService.isValidToolKey(key)) {
                this.drawingService.addAction(this.drawingService.lastAction);
            }
            this.toolService.changeTool(key);
        }
    }
    startDrawing(event) {
        if (this.toolService.currentTool.info.name === 'shift-selection' && this.getTarget(event).id === 'previewLayer') {
            this.toolService.changeTool(this.toolService.currentTool.selector.info.shortcut);
            return;
        }
        else if (this.toolService.currentTool.info.name === 'resize-selection' && this.getTarget(event).id === 'previewLayer') {
            this.toolService.changeTool(this.toolService.currentTool.selector.info.shortcut);
            return;
        }
        this.disableShortcuts();
        document.body.addEventListener('mouseup', this.onMouseUp);
        document.body.addEventListener('keydown', this.onKeyDown);
        if (!this.toolService.hasBegunDrawing() ||
            this.toolService.currentTool.info.name === 'line' ||
            this.toolService.currentTool.info.name === 'lasso') {
            this.toolService.currentTool.onMouseDown(event);
        }
    }
    getTarget(event) {
        return event.target;
    }
    onMouseMove(event) {
        this.toolService.currentTool.onMouseMove(event);
    }
    onWheel(event) {
        this.toolService.currentTool.onWheel(event);
    }
    onMouseUp(event) {
        this.toolService.currentTool.onMouseUp(event);
        document.body.removeEventListener('mouseup', this.onMouseUp);
        if (this.toolService.currentTool.info.name !== 'line' && this.toolService.currentTool.info.name !== 'lasso') {
            this.enableShortcuts();
            document.body.removeEventListener('keydown', this.onKeyDown);
        }
        else {
            if (this.toolService.currentTool.info.name === 'line') {
                document.body.addEventListener('dblclick', this.onDoubleClick);
            }
        }
    }
    onDoubleClick(event) {
        this.toolService.currentTool.onDoubleClick(event);
        this.enableShortcuts();
        document.body.removeEventListener('keydown', this.onKeyDown);
        document.body.removeEventListener('dblclick', this.onDoubleClick);
    }
    onKeyUp(event) {
        if (this.isKeyDown) {
            this.toolService.handleCommand(event, false);
            this.isKeyDown = !this.isKeyDown;
        }
        document.body.removeEventListener('keyup', this.onKeyUp);
    }
    onKeyDown(event) {
        event.preventDefault();
        if (!this.isKeyDown) {
            this.toolService.handleCommand(event, true);
            this.isKeyDown = !this.isKeyDown;
        }
        document.body.addEventListener('keyup', this.onKeyUp);
    }
}
EventManagerService.ɵfac = function EventManagerService_Factory(t) { return new (t || EventManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_8__["ToolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
EventManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventManagerService, factory: EventManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: src_app_services_tools_tool_service__WEBPACK_IMPORTED_MODULE_8__["ToolService"] }, { type: src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_7__["DrawingService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/grid/grid.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/grid/grid.service.ts ***!
  \***********************************************/
/*! exports provided: GridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridService", function() { return GridService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");








class GridService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.gridColor = 'rgba(221,221,221)';
        this.commandMap = new Map();
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('grille', 'Grille', 'g');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](undefined, undefined, undefined, 1, true);
        this.vPath = 'M ' + this.options.gridOptions.size + ' 0 V' + this.options.gridOptions.size;
        this.hPath = 'M 0 ' + this.options.gridOptions.size + ' H' + this.options.gridOptions.size;
        this.commandMap.set('+', () => {
            this.incrementGridSize();
        });
        this.commandMap.set('=', () => {
            this.incrementGridSize();
        });
        this.commandMap.set('-', () => {
            this.decrementGridSize();
        });
    }
    toggleGrid() {
        this.options.gridOptions.isActive = !this.options.gridOptions.isActive;
    }
    handleCommand(command, isDown) {
        const key = command.key;
        if (this.commandMap.has(key)) {
            this.commandMap.get(key)();
        }
    }
    updateSize(size) {
        this.options.gridOptions.size = size;
        this.vPath = 'M ' + this.options.gridOptions.size + ' 0 V' + this.options.gridOptions.size;
        this.hPath = 'M 0 ' + this.options.gridOptions.size + ' H' + this.options.gridOptions.size;
    }
    incrementGridSize() {
        if (this.options.gridOptions.size < _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].MAX_SQUARE_SIZE) {
            this.options.gridOptions.size += _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].INCREMENT_VALUE - (this.options.gridOptions.size % _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].INCREMENT_VALUE);
        }
        this.updateSize(this.options.gridOptions.size);
    }
    decrementGridSize() {
        if (this.options.gridOptions.size > _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].MIN_SQUARE_SIZE) {
            this.options.gridOptions.size -=
                this.options.gridOptions.size % _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].INCREMENT_VALUE === 0
                    ? _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].INCREMENT_VALUE
                    : this.options.gridOptions.size % _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].INCREMENT_VALUE;
        }
        else {
            this.options.gridOptions.size = _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].MIN_SQUARE_SIZE;
        }
        this.updateSize(this.options.gridOptions.size);
    }
}
GridService.ɵfac = function GridService_Factory(t) { return new (t || GridService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
GridService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GridService, factory: GridService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/grid/magnet.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/grid/magnet.service.ts ***!
  \*************************************************/
/*! exports provided: MagnetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnetService", function() { return MagnetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _grid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid.service */ "./src/app/services/grid/grid.service.ts");






class MagnetService {
    constructor(grid) {
        this.grid = grid;
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_1__["ToolInfo"]('magnétisme', 'Magnétisme', 'm');
        this.isActive = false;
        this.controlPoint = _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["ControlPoint"].Center;
    }
    toggleIsActive() {
        this.isActive = !this.isActive;
    }
    changeControlPoint(controlPoint) {
        this.controlPoint = +controlPoint;
    }
    calculatePosition(position, boxSize, usedMouse, direction) {
        if (this.isActive) {
            // init map
            const controlPointMap = new Map();
            controlPointMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["ControlPoint"].Center, { x: boxSize.x / 2, y: boxSize.y / 2 });
            controlPointMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["ControlPoint"].CenterDown, { x: boxSize.x / 2, y: boxSize.y });
            controlPointMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["ControlPoint"].CenterLeft, { x: 0, y: boxSize.y / 2 });
            controlPointMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["ControlPoint"].CenterRight, { x: boxSize.x, y: boxSize.y / 2 });
            controlPointMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["ControlPoint"].CenterUp, { x: boxSize.x / 2, y: 0 });
            controlPointMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["ControlPoint"].CornerDownLeft, { x: 0, y: boxSize.y });
            controlPointMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["ControlPoint"].CornerDownRight, { x: boxSize.x, y: boxSize.y });
            controlPointMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["ControlPoint"].CornerUpLeft, { x: 0, y: 0 });
            controlPointMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_2__["ControlPoint"].CornerUpRight, { x: boxSize.x, y: 0 });
            const gridSize = this.grid.options.gridOptions.size;
            const halfGrid = gridSize / 2;
            const offsetX = controlPointMap.get(this.controlPoint).x;
            const offsetY = controlPointMap.get(this.controlPoint).y;
            const posInGridX = (position.x + offsetX) % gridSize;
            const posInGridY = (position.y + offsetY) % gridSize;
            // // new position
            position.x = posInGridX > halfGrid ? position.x - posInGridX + gridSize : position.x - posInGridX;
            position.y = posInGridY > halfGrid ? position.y - posInGridY + gridSize : position.y - posInGridY;
            if (!usedMouse) {
                position.x = position.x + (direction.x / _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].SHIFT_AMOUNT) * gridSize;
                position.y = position.y + (direction.y / _app_shared_global__WEBPACK_IMPORTED_MODULE_2__["Global"].SHIFT_AMOUNT) * gridSize;
            }
        }
    }
}
MagnetService.ɵfac = function MagnetService_Factory(t) { return new (t || MagnetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_grid_service__WEBPACK_IMPORTED_MODULE_3__["GridService"])); };
MagnetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MagnetService, factory: MagnetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MagnetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _grid_service__WEBPACK_IMPORTED_MODULE_3__["GridService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/index/save.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/index/save.service.ts ***!
  \************************************************/
/*! exports provided: SaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveService", function() { return SaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");






class SaveService {
    constructor(http) {
        this.http = http;
    }
    basicGet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_URL + 'all').toPromise();
        });
    }
    basicPost(dessin) {
        return this.http.post(_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_URL, dessin, { observe: 'response' });
    }
    deletePost(dessin) {
        return this.http.post(_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_URL + 'delete', dessin, { observe: 'response' });
    }
    getDrawing(id) {
        return this.http.get(_app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].BASE_URL + `${id}`, { responseType: 'blob' });
    }
}
SaveService.ɵfac = function SaveService_Factory(t) { return new (t || SaveService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SaveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SaveService, factory: SaveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SaveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/selection/ellipse-selection.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/selection/ellipse-selection.service.ts ***!
  \*****************************************************************/
/*! exports provided: EllipseSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipseSelectionService", function() { return EllipseSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









class EllipseSelectionService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('ellipse-selection', 'Sélection en éllipse', 's');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](undefined, false, false, _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].UNDEFINED_SIZE);
        this.shiftDown = false;
        this.placeBoxCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_VECTOR);
        this.placeBox$ = this.placeBoxCallSource.asObservable();
        this.changeBoxSizeCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_VECTOR);
        this.changeBoxSize$ = this.changeBoxSizeCallSource.asObservable();
        this.selection = new ImageData(1, 1);
        this.deltaX = 1;
        this.deltaY = 1;
        this.isActiveSelection = false;
    }
    handleCommand(command) {
        if (!this.isDrawing) {
            this.shiftDown = false;
            return;
        }
        if (command.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].SHIFT) {
            this.shiftDown = !this.shiftDown;
            this.updatePreview();
        }
        else if (command.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].ESCAPE) {
            this.deleteCurrentSelection();
            this.isDrawing = false;
            this.shiftDown = false;
        }
    }
    updatePreview() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.changeStrokeSettings('black', _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_DASH_AMOUNT);
        if (this.shiftDown) {
            this.drawCircle(this.drawingService.previewCtx, this.origin, this.target);
        }
        else {
            this.drawEllipse(this.drawingService.previewCtx, this.origin, this.target);
        }
    }
    onMouseDown(event) {
        if (this.isActiveSelection) {
            this.isActiveSelection = false;
            this.isCircle = false;
            this.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESET_VECTOR);
            this.updatePreview();
            return;
        }
        this.isActiveSelection = false;
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.isDrawing = event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["MouseButton"].Left;
        if (this.isDrawing) {
            this.origin = this.getPagePositionFromMouse(event);
            this.target = this.getPagePositionFromMouse(event);
            this.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESET_VECTOR);
        }
    }
    onMouseUp(event) {
        if (this.isDrawing) {
            this.target = this.getPagePositionFromMouse(event);
            this.realDelta = { x: Math.abs(this.origin.x - this.target.x), y: Math.abs(this.origin.y - this.target.y) };
            if (!this.shiftDown) {
                this.limitRectanglePosition(this.drawingService.previewCtx, this.origin, this.target);
            }
            else {
                this.isCircle = true;
                this.limitSquarePosition(this.drawingService.previewCtx, this.origin, this.target);
            }
            this.selectRectangle(this.origin);
            this.origin = { x: Math.min(this.origin.x, this.target.x), y: Math.min(this.origin.y, this.target.y) };
        }
        _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].IS_FLIPPED = { x: 1, y: 1 };
        this.isDrawing = false;
    }
    onMouseMove(event) {
        if (this.isDrawing) {
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.target = this.getPagePositionFromMouse(event);
            this.updatePreview();
        }
    }
    drawEllipse(ctx, origin, target) {
        this.isCircle = false;
        const deltas = { x: target.x - origin.x, y: target.y - origin.y };
        this.strokeDashLine(ctx, origin, deltas);
        deltas.x = deltas.x === 0 ? 1 : deltas.x;
        deltas.y = deltas.y === 0 ? 1 : deltas.y;
        this.selection = this.drawingService.baseCtx.getImageData(origin.x, origin.y, deltas.x, deltas.y);
    }
    drawCircle(ctx, origin, target) {
        this.isCircle = true;
        this.deltaX = target.x - origin.x;
        this.deltaY = target.y - origin.y;
        this.strokeDashLine(ctx, origin, { x: this.deltaX, y: Math.sign(this.deltaY) * Math.abs(this.deltaX) });
        this.deltaX = this.deltaX === 0 ? 1 : this.deltaX;
        this.deltaY = this.deltaY === 0 ? 1 : this.deltaY;
        this.selection = this.drawingService.baseCtx.getImageData(origin.x, origin.y, this.deltaX, Math.sign(this.deltaY) * Math.abs(this.deltaX));
    }
    strokeDashLine(ctx, origin, deltas) {
        ctx.beginPath();
        if (this.isDrawing) {
            ctx.ellipse(origin.x + deltas.x / 2, origin.y + deltas.y / 2, Math.abs(deltas.x) / 2, Math.abs(deltas.y) / 2, 0, 0, 2 * Math.PI);
        }
        ctx.setLineDash([]);
        this.changeStrokeSettings('white', 0);
        ctx.stroke();
        ctx.beginPath();
        if (this.isDrawing) {
            ctx.ellipse(origin.x + deltas.x / 2, origin.y + deltas.y / 2, Math.abs(deltas.x) / 2, Math.abs(deltas.y) / 2, 0, 0, 2 * Math.PI);
        }
        ctx.setLineDash([]);
        this.changeStrokeSettings('black', _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_DASH_AMOUNT);
        ctx.stroke();
    }
    selectRectangle(origin) {
        this.callChangeBoxSize({ x: this.deltaX, y: this.deltaY });
        this.callPlaceBox(origin);
        this.changeStrokeSettings('black', 0);
        this.isActiveSelection = true;
    }
    limitRectanglePosition(ctx, origin, target) {
        target.x = target.x > ctx.canvas.width ? ctx.canvas.width : target.x;
        target.y = target.y > ctx.canvas.height ? ctx.canvas.height : target.y;
        target.x = target.x < 0 ? 0 : target.x;
        target.y = target.y < 0 ? 0 : target.y;
        this.deltaX = target.x - origin.x;
        this.deltaY = target.y - origin.y;
    }
    limitSquarePosition(ctx, origin, target) {
        this.deltaX = target.x - origin.x;
        this.deltaY = Math.sign(this.target.y - this.origin.y) * Math.abs(this.deltaX);
        if (origin.x + this.deltaX > ctx.canvas.width) {
            this.deltaX = ctx.canvas.width - origin.x;
        }
        if (origin.y + this.deltaY > ctx.canvas.height) {
            this.deltaY = ctx.canvas.height - origin.y;
        }
        if (origin.x + this.deltaX < 0) {
            this.deltaX = -origin.x;
        }
        if (origin.y + this.deltaY < 0) {
            this.deltaY = -origin.y;
        }
    }
    changeStrokeSettings(color, dashAmount) {
        this.drawingService.previewCtx.strokeStyle = color;
        this.drawingService.previewCtx.lineWidth = 1;
        this.drawingService.previewCtx.setLineDash([dashAmount]);
    }
    deleteCurrentSelection() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.selection = new ImageData(1, 1);
        this.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESET_VECTOR);
        this.isActiveSelection = false;
    }
    redrawSelection(position, status, deltas, selection) {
        const halfDelta = {
            x: (Math.abs(deltas.x / this.deltaX) * this.realDelta.x) / 2,
            y: (Math.abs(deltas.y / this.deltaY) * this.realDelta.y) / 2,
        };
        if (this.drawingService.previewCtx !== undefined) {
            if (status === 0) {
                const baseCtx = this.drawingService.baseCtx;
                baseCtx.save();
                baseCtx.beginPath();
                if (this.isCircle) {
                    baseCtx.ellipse(position.x + halfDelta.x, position.y + halfDelta.x, Math.abs(halfDelta.x), Math.abs(halfDelta.x), 0, 0, 2 * Math.PI);
                }
                else {
                    baseCtx.ellipse(position.x + halfDelta.x, position.y + halfDelta.y, Math.abs(halfDelta.x), Math.abs(halfDelta.y), 0, 0, 2 * Math.PI);
                }
                baseCtx.closePath();
                baseCtx.clip();
                this.drawingService.baseCtx.fillStyle = 'white';
                this.drawingService.baseCtx.fillRect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
                baseCtx.restore();
            }
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            const ctx = status !== 2 ? this.drawingService.previewCtx : this.drawingService.baseCtx;
            const divisionFactor = { x: Math.abs(deltas.x / this.deltaX), y: Math.abs(deltas.y / this.deltaY) };
            const maskCanvas = document.createElement('canvas');
            maskCanvas.width = window.innerWidth / divisionFactor.x;
            maskCanvas.height = window.innerHeight / divisionFactor.y;
            const maskCtx = maskCanvas.getContext('2d');
            maskCtx.putImageData(selection, position.x / divisionFactor.x, position.y / divisionFactor.y);
            ctx.save();
            ctx.beginPath();
            ctx.rect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
            ctx.closePath();
            ctx.clip();
            ctx.beginPath();
            if (this.isCircle) {
                ctx.ellipse(position.x + halfDelta.x, position.y + halfDelta.x, Math.abs(halfDelta.x), Math.abs(halfDelta.x), 0, 0, 2 * Math.PI);
            }
            else {
                ctx.ellipse(position.x + halfDelta.x, position.y + halfDelta.y, Math.abs(halfDelta.x), Math.abs(halfDelta.y), 0, 0, 2 * Math.PI);
            }
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.clip();
            ctx.scale(deltas.x / Math.abs(this.deltaX), deltas.y / Math.abs(this.deltaY));
            ctx.drawImage(maskCanvas, deltas.x < 0 ? deltas.x / divisionFactor.x - (2 * position.x) / divisionFactor.x : 0, deltas.y < 0 ? deltas.y / divisionFactor.y - (2 * position.y) / divisionFactor.y : 0);
            ctx.restore();
            this.callChangeBoxSize({ x: Math.abs(deltas.x), y: Math.abs(deltas.y) });
            this.callPlaceBox(position);
            this.origin = position;
        }
    }
    callPlaceBox(origin) {
        this.placeBoxCallSource.next(origin);
    }
    callChangeBoxSize(delta) {
        this.changeBoxSizeCallSource.next(delta);
    }
}
EllipseSelectionService.ɵfac = function EllipseSelectionService_Factory(t) { return new (t || EllipseSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
EllipseSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EllipseSelectionService, factory: EllipseSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EllipseSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/selection/lasso-selection.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/selection/lasso-selection.service.ts ***!
  \***************************************************************/
/*! exports provided: LassoSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LassoSelectionService", function() { return LassoSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/tools/line.service */ "./src/app/services/tools/line.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









class LassoSelectionService extends _app_services_tools_line_service__WEBPACK_IMPORTED_MODULE_4__["LineService"] {
    constructor(drawingService) {
        super(drawingService);
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_1__["ToolInfo"]('lasso', 'Sélection par Lasso', 'v');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_2__["ToolOption"](undefined, false, false, _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].UNDEFINED_SIZE);
        this.shiftDown = false;
        this.placeBoxCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_VECTOR);
        this.placeBox$ = this.placeBoxCallSource.asObservable();
        this.changeBoxSizeCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_VECTOR);
        this.changeBoxSize$ = this.changeBoxSizeCallSource.asObservable();
        this.selection = new ImageData(1, 1);
        this.deltaX = 1;
        this.deltaY = 1;
        this.isActiveSelection = false;
    }
    redrawSelection(position, status, deltas, selection) {
        if (this.drawingService.previewCtx !== undefined) {
            if (this.isActiveSelection && position !== this.origin) {
                _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].IS_FLIPPED = { x: 1, y: 1 };
            }
            if (status === 0) {
                const baseCtx = this.drawingService.baseCtx;
                baseCtx.save();
                baseCtx.beginPath();
                for (const point of this.pathDataCopy) {
                    baseCtx.lineTo(point.x, point.y);
                }
                baseCtx.closePath();
                baseCtx.clip();
                baseCtx.clearRect(position.x - 1, position.y - 1, deltas.x + 1, deltas.y + 1);
                baseCtx.restore();
            }
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            const ctx = status !== 2 ? this.drawingService.previewCtx : this.drawingService.baseCtx;
            const maskCanvas = document.createElement('canvas');
            const imgCanvas = document.createElement('canvas');
            maskCanvas.width = imgCanvas.width = ctx.canvas.width;
            maskCanvas.height = imgCanvas.height = ctx.canvas.height;
            const maskCtx = maskCanvas.getContext('2d');
            const imgCtx = imgCanvas.getContext('2d');
            imgCtx.putImageData(selection, 0, 0);
            ctx.save();
            maskCtx.beginPath();
            for (const point of this.pathDataCopy) {
                maskCtx.lineTo(point.x - this.minX, point.y - this.minY);
            }
            maskCtx.closePath();
            maskCtx.clip();
            maskCtx.fillStyle = ctx.fillStyle = 'white';
            maskCtx.fill();
            maskCtx.drawImage(imgCanvas, 0, 0);
            ctx.fill();
            ctx.scale(deltas.x / Math.abs(this.deltaX), deltas.y / Math.abs(this.deltaY));
            const divisionFactor = { x: Math.abs(deltas.x / this.deltaX), y: Math.abs(deltas.y / this.deltaY) };
            ctx.drawImage(maskCanvas, deltas.x < 0 ? -(position.x / divisionFactor.x) - Math.abs(this.deltaX) : position.x / divisionFactor.x, deltas.y < 0 ? -(position.y / divisionFactor.y) - Math.abs(this.deltaY) : position.y / divisionFactor.y);
            ctx.restore();
            this.callChangeBoxSize({ x: Math.abs(deltas.x), y: Math.abs(deltas.y) });
            this.callPlaceBox(position);
            this.origin = position;
            this.closed = false;
            _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].IS_FLIPPED = { x: Math.sign(deltas.x), y: Math.sign(deltas.y) };
        }
    }
    click(event) {
        this.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESET_VECTOR);
        this.pathDataCopy = [];
        _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].IS_FLIPPED = { x: 1, y: 1 };
        if (this.closed) {
            this.closed = false;
            this.isDrawing = false;
            this.updatePreview();
            return;
        }
        this.mousePos = this.getPositionFromMouse(event);
        this.isDrawing = true;
        if (this.shouldClosePath(this.pathData, this.mousePos)) {
            this.pathData.push(this.pathData[0]);
            if (!this.checkLastSegment()) {
                this.closed = true;
                this.updatePreview();
                this.drawRectangle();
                this.stopDrawing(event);
            }
        }
        else {
            this.updateTip();
            this.pathData.push(this.tipPos);
            this.checkLastSegment();
            this.updatePreview();
        }
    }
    // tslint:disable:no-empty
    onDoubleClick(event) { }
    shouldClosePath(path, mousePos) {
        return path.length > 1 && Math.abs(path[0].x - mousePos.x) <= _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RAYON_MAX && Math.abs(path[0].y - mousePos.y) <= _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RAYON_MAX;
    }
    drawLine(ctx, path, tipPosition) {
        if (path.length === 0) {
            return;
        }
        ctx.setLineDash(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].SELECTION_LINEDASH);
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = 'grey';
        if (this.closed && !this.checkLastSegment()) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'black';
        }
        ctx.beginPath();
        for (const point of path) {
            ctx.lineTo(point.x, point.y);
        }
        if (this.shouldClosePath(this.pathData, this.mousePos) && !this.isGuided) {
            tipPosition = path[0];
        }
        ctx.lineTo(tipPosition.x, tipPosition.y);
        ctx.stroke();
        this.updateTip();
    }
    checkLastSegment() {
        if (this.pathData.length > 2) {
            const isIntersection = [];
            for (let i = 0; i < this.pathData.length - 1; i++) {
                const segment1 = [this.pathData[i], this.pathData[i + 1]];
                const segment2 = [this.pathData[this.pathData.length - 2], this.pathData[this.pathData.length - 1]];
                isIntersection.push(this.calculateDeterminant(segment1, segment2));
            }
            if (isIntersection.includes(true)) {
                this.deleteLastSegment();
                return true;
            }
            if (this.pathData.length === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].CALL_AMOUNT) {
                if (this.shouldClosePath(this.pathData, this.pathData[2])) {
                    this.deleteLastSegment();
                    return true;
                }
            }
        }
        return false;
    }
    calculateDeterminant(segment1, segment2) {
        const determinants = [];
        for (let i = 0; i <= 1; i++) {
            const a = segment1[0].x - segment2[i].x;
            const b = segment1[1].x - segment2[i].x;
            const c = segment1[0].y - segment2[i].y;
            const d = segment1[1].y - segment2[i].y;
            const determinant = Math.sign(a * d - b * c);
            determinants.push(determinant);
        }
        for (let i = 0; i <= 1; i++) {
            const a = segment2[0].x - segment1[i].x;
            const b = segment2[1].x - segment1[i].x;
            const c = segment2[0].y - segment1[i].y;
            const d = segment2[1].y - segment1[i].y;
            const determinant = Math.sign(a * d - b * c);
            determinants.push(determinant);
        }
        // tslint:disable:no-magic-numbers
        const zeroes = determinants[0] === 0 && determinants[1] === 0 && determinants[2] === 0 && determinants[3] === 0;
        return determinants[0] === -determinants[1] && determinants[2] === -determinants[3] && !zeroes;
    }
    drawRectangle() {
        const maxX = Math.max.apply(Math, this.pathData.map((point) => {
            return point.x;
        }));
        const maxY = Math.max.apply(Math, this.pathData.map((point) => {
            return point.y;
        }));
        this.minX = Math.min.apply(Math, this.pathData.map((point) => {
            return point.x;
        }));
        this.minY = Math.min.apply(Math, this.pathData.map((point) => {
            return point.y;
        }));
        this.deltaX = maxX - this.minX;
        this.deltaY = maxY - this.minY;
        this.origin = { x: this.minX, y: this.minY };
        this.selection = this.drawingService.baseCtx.getImageData(this.origin.x, this.origin.y, this.deltaX, this.deltaY);
    }
    selectRectangle(origin) {
        this.changeStrokeSettings('#014BCC', 0);
        this.drawingService.previewCtx.strokeRect(origin.x, origin.y, this.deltaX, this.deltaY);
        this.callChangeBoxSize({ x: this.deltaX, y: this.deltaY });
        this.callPlaceBox(origin);
        this.isActiveSelection = true;
    }
    changeStrokeSettings(color, dashAmount) {
        this.drawingService.previewCtx.strokeStyle = color;
        this.drawingService.previewCtx.lineWidth = 1;
        this.drawingService.previewCtx.setLineDash([dashAmount]);
    }
    stopDrawing(event) {
        this.mousePos = this.getPositionFromMouse(event);
        this.updateTip();
        this.isDrawing = false;
        this.pathDataCopy = this.pathData;
        this.clearPath();
        this.unlock();
        this.selectRectangle(this.origin);
    }
    deleteCurrentSelection() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.selection = new ImageData(1, 1);
        this.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESET_VECTOR);
        this.isActiveSelection = false;
    }
    callPlaceBox(origin) {
        this.placeBoxCallSource.next(origin);
    }
    callChangeBoxSize(delta) {
        this.changeBoxSizeCallSource.next(delta);
    }
}
LassoSelectionService.ɵfac = function LassoSelectionService_Factory(t) { return new (t || LassoSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"])); };
LassoSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LassoSelectionService, factory: LassoSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LassoSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_3__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/selection/rectangle-selection.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/selection/rectangle-selection.service.ts ***!
  \*******************************************************************/
/*! exports provided: RectangleSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleSelectionService", function() { return RectangleSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shift_selection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shift-selection.service */ "./src/app/services/selection/shift-selection.service.ts");











class RectangleSelectionService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, shiftSelection) {
        super(drawingService);
        this.shiftSelection = shiftSelection;
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('rectangle-selection', 'Sélection en rectangle', 'r');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](undefined, false, false, _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].UNDEFINED_SIZE);
        this.shiftDown = false;
        this.placeBoxCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_VECTOR);
        this.placeBox$ = this.placeBoxCallSource.asObservable();
        this.changeBoxSizeCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_VECTOR);
        this.changeBoxSize$ = this.changeBoxSizeCallSource.asObservable();
        this.selection = new ImageData(1, 1);
        this.deltaX = 1;
        this.deltaY = 1;
        this.isActiveSelection = false;
    }
    handleCommand(command) {
        if (!this.isDrawing) {
            this.shiftDown = false;
            return;
        }
        if (command.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].SHIFT) {
            this.shiftDown = !this.shiftDown;
            this.updatePreview();
        }
        else if (command.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].ESCAPE) {
            this.deleteCurrentSelection();
            this.isDrawing = false;
            this.shiftDown = false;
        }
    }
    updatePreview() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        if (this.shiftDown) {
            this.drawSquare(this.drawingService.previewCtx, this.origin, this.target);
        }
        else {
            this.drawRectangle(this.drawingService.previewCtx, this.origin, this.target);
        }
    }
    onMouseDown(event) {
        if (this.isActiveSelection) {
            this.isActiveSelection = false;
            this.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESET_VECTOR);
            return;
        }
        this.isActiveSelection = false;
        this.isDrawing = event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["MouseButton"].Left;
        if (this.isDrawing) {
            this.origin = this.getPagePositionFromMouse(event);
            this.target = this.getPagePositionFromMouse(event);
            this.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESET_VECTOR);
        }
    }
    onMouseUp(event) {
        if (this.isDrawing) {
            this.target = this.getPagePositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            if (!this.shiftDown) {
                this.limitRectanglePosition(this.drawingService.previewCtx, this.origin, this.target);
            }
            else {
                this.limitSquarePosition(this.drawingService.previewCtx, this.origin, this.target);
            }
            this.selectRectangle(this.origin);
            this.origin = { x: Math.min(this.origin.x, this.target.x), y: Math.min(this.origin.y, this.target.y) };
        }
        _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].IS_FLIPPED = { x: 1, y: 1 };
        this.isDrawing = false;
    }
    onMouseMove(event) {
        if (this.isDrawing) {
            this.target = this.getPagePositionFromMouse(event);
            this.updatePreview();
        }
    }
    drawRectangle(ctx, origin, target) {
        const deltas = { x: target.x - origin.x, y: target.y - origin.y };
        this.strokeDashLine(ctx, origin, deltas);
        deltas.x = deltas.x === 0 ? 1 : deltas.x;
        deltas.y = deltas.y === 0 ? 1 : deltas.y;
        this.selection = this.drawingService.baseCtx.getImageData(origin.x, origin.y, deltas.x, deltas.y);
    }
    drawSquare(ctx, origin, target) {
        this.deltaX = target.x - origin.x;
        this.deltaY = target.y - origin.y;
        this.strokeDashLine(ctx, origin, { x: this.deltaX, y: Math.sign(this.deltaY) * Math.abs(this.deltaX) });
        this.deltaX = this.deltaX === 0 ? 1 : this.deltaX;
        this.deltaY = this.deltaY === 0 ? 1 : this.deltaY;
        this.selection = this.drawingService.baseCtx.getImageData(origin.x, origin.y, this.deltaX, Math.sign(this.deltaY) * Math.abs(this.deltaX));
    }
    strokeDashLine(ctx, origin, deltas) {
        this.changeStrokeSettings('white', 0);
        ctx.strokeRect(origin.x, origin.y, deltas.x, deltas.y);
        this.changeStrokeSettings('black', _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_DASH_AMOUNT);
        ctx.strokeRect(origin.x, origin.y, deltas.x, deltas.y);
    }
    selectRectangle(origin) {
        this.callChangeBoxSize({ x: this.deltaX, y: this.deltaY });
        this.callPlaceBox(origin);
        this.changeStrokeSettings('black', 0);
        this.isActiveSelection = true;
    }
    limitRectanglePosition(ctx, origin, target) {
        target.x = target.x > ctx.canvas.width ? ctx.canvas.width : target.x;
        target.y = target.y > ctx.canvas.height ? ctx.canvas.height : target.y;
        target.x = target.x < 0 ? 0 : target.x;
        target.y = target.y < 0 ? 0 : target.y;
        this.deltaX = target.x - origin.x;
        this.deltaY = target.y - origin.y;
    }
    limitSquarePosition(ctx, origin, target) {
        this.deltaX = target.x - origin.x;
        this.deltaY = Math.sign(this.target.y - this.origin.y) * Math.abs(this.deltaX);
        if (origin.x + this.deltaX > ctx.canvas.width) {
            this.deltaX = ctx.canvas.width - origin.x;
        }
        if (origin.y + this.deltaY > ctx.canvas.height) {
            this.deltaY = ctx.canvas.height - origin.y;
        }
        if (origin.x + this.deltaX < 0) {
            this.deltaX = -origin.x;
        }
        if (origin.y + this.deltaY < 0) {
            this.deltaY = -origin.y;
        }
    }
    changeStrokeSettings(color, dashAmount) {
        this.drawingService.previewCtx.strokeStyle = color;
        this.drawingService.previewCtx.lineWidth = 1;
        this.drawingService.previewCtx.setLineDash([dashAmount]);
    }
    deleteCurrentSelection() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.selection = new ImageData(1, 1);
        this.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESET_VECTOR);
        this.isActiveSelection = false;
    }
    redrawSelection(position, status, deltas, selection) {
        if (this.drawingService.previewCtx !== undefined) {
            if (status === 0) {
                this.drawingService.baseCtx.fillStyle = 'white';
                this.drawingService.baseCtx.fillRect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
            }
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            const ctx = status !== 2 ? this.drawingService.previewCtx : this.drawingService.baseCtx;
            const divisionFactor = { x: Math.abs(deltas.x / this.deltaX), y: Math.abs(deltas.y / this.deltaY) };
            const maskCanvas = document.createElement('canvas');
            maskCanvas.width = window.innerWidth / divisionFactor.x;
            maskCanvas.height = window.innerHeight / divisionFactor.y;
            const maskCtx = maskCanvas.getContext('2d');
            maskCtx.putImageData(selection, position.x / divisionFactor.x, position.y / divisionFactor.y);
            ctx.save();
            ctx.beginPath();
            ctx.rect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.clip();
            ctx.scale(deltas.x / Math.abs(this.deltaX), deltas.y / Math.abs(this.deltaY));
            ctx.drawImage(maskCanvas, deltas.x < 0 ? deltas.x / divisionFactor.x - (2 * position.x) / divisionFactor.x : 0, deltas.y < 0 ? deltas.y / divisionFactor.y - (2 * position.y) / divisionFactor.y : 0);
            ctx.restore();
            this.callChangeBoxSize({ x: Math.abs(deltas.x), y: Math.abs(deltas.y) });
            this.callPlaceBox(position);
            this.origin = position;
        }
    }
    callPlaceBox(origin) {
        this.placeBoxCallSource.next(origin);
    }
    callChangeBoxSize(delta) {
        this.changeBoxSizeCallSource.next(delta);
    }
}
RectangleSelectionService.ɵfac = function RectangleSelectionService_Factory(t) { return new (t || RectangleSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shift_selection_service__WEBPACK_IMPORTED_MODULE_7__["ShiftSelectionService"])); };
RectangleSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RectangleSelectionService, factory: RectangleSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangleSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }, { type: _shift_selection_service__WEBPACK_IMPORTED_MODULE_7__["ShiftSelectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/selection/resize-selection.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/selection/resize-selection.service.ts ***!
  \****************************************************************/
/*! exports provided: ResizeSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeSelectionService", function() { return ResizeSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");








class ResizeSelectionService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('resize-selection', 'Redimensionnement de sélection', 'resizeSelection');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](0, false, false, 0);
        // tslint:disable-next-line: no-empty
        this.lastAction = () => { };
        this.size = { x: 1, y: 1 };
        this.isFirstResize = true;
        this.shiftIsPressed = false;
    }
    resize(newSize, oldSize, sign, tag) {
        let mode = 1;
        if (this.isFirstResize) {
            this.isFirstResize = false;
            this.initBoxPosition = this.selector.origin;
            mode = 0;
        }
        sign.x = tag.includes('w') ? -sign.x : sign.x;
        sign.y = tag.includes('n') ? -sign.y : sign.y;
        newSize = { x: Math.sign(sign.x) * newSize.x, y: Math.sign(sign.y) * newSize.y };
        this.updateCanvas(mode, newSize, oldSize);
        _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].IS_FLIPPED = { x: Math.sign(sign.x), y: Math.sign(sign.y) };
        return { x: this.size.x * Math.sign(sign.x), y: this.size.y * Math.sign(sign.y) };
    }
    minLimitResize(position, oldSize) {
        if (position.x < 0) {
            position.x = 0;
            this.size.x = oldSize.x;
        }
        if (position.y < 0) {
            position.y = 0;
            this.size.y = oldSize.y;
        }
        return position;
    }
    endSelection() {
        this.updateCanvas(2, this.size, this.size);
        this.isFirstResize = true;
        this.selector.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESET_VECTOR);
    }
    updateCanvas(mode, newSize, oldSize) {
        const selection = this.selector.selection;
        this.size.x = newSize.x === 0 ? 1 : newSize.x;
        this.size.y = newSize.y === 0 ? 1 : newSize.y;
        this.selector.origin = this.minLimitResize(this.selector.origin, oldSize);
        this.selector.redrawSelection(this.selector.origin, mode, this.size, selection);
        const imageData = new ImageData(new Uint8ClampedArray(selection.data), selection.width, selection.height);
        const positionCopy = Object.assign({}, this.selector.origin);
        const delta = Object.assign({}, this.size);
        const initBoxPositionCopy = Object.assign({}, this.initBoxPosition);
        const resizeService = Object.assign({}, this);
        const func = () => {
            this.clearMethod(resizeService, initBoxPositionCopy, delta);
            resizeService.selector.redrawSelection(positionCopy, mode, delta, imageData);
            resizeService.selector.redrawSelection(positionCopy, 2, delta, imageData);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            document.getElementById('selection-box').style.display = 'none';
        };
        this.drawingService.lastAction = func;
    }
    clearMethod(resizeService, position, deltas) {
        if ('drawCircle' in resizeService.selector) {
            const baseCtx = this.drawingService.baseCtx;
            baseCtx.save();
            baseCtx.beginPath();
            baseCtx.ellipse(position.x + deltas.x / 2, position.y + deltas.y / 2, deltas.x / 2, deltas.y / 2, 0, 0, 2 * Math.PI);
            baseCtx.closePath();
            baseCtx.clip();
            this.drawingService.baseCtx.clearRect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
            baseCtx.restore();
        }
        else {
            this.drawingService.baseCtx.clearRect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
        }
    }
}
ResizeSelectionService.ɵfac = function ResizeSelectionService_Factory(t) { return new (t || ResizeSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
ResizeSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResizeSelectionService, factory: ResizeSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/selection/shift-selection.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/selection/shift-selection.service.ts ***!
  \***************************************************************/
/*! exports provided: ShiftSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftSelectionService", function() { return ShiftSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_services_grid_magnet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/grid/magnet.service */ "./src/app/services/grid/magnet.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");










class ShiftSelectionService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService, magnetService) {
        super(drawingService);
        this.magnetService = magnetService;
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('shift-selection', 'Déplacement de sélection', 'shiftSelection');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](0, false, false, 0);
        // tslint:disable-next-line: no-empty
        this.lastAction = () => { };
        this.isShifting = false;
        this.operation = 0;
        this.factors = { x: 0, y: 0 };
        this.size = { x: 1, y: 1 };
    }
    handleCommandMap(keyMap, size) {
        this.size = size;
        if (!this.isDrawing || !this.isShifting) {
            if (this.operation === 0) {
                this.initBoxPosition = this.selector.origin;
            }
            this.changeFactors(keyMap);
            this.selector.selectRectangle(this.selector.origin);
            const deltas = { x: Math.abs(this.size.x), y: Math.abs(this.size.y) };
            this.position = {
                x: this.selector.origin.x + this.factors.x,
                y: this.selector.origin.y + this.factors.y,
            };
            this.minLimitMouse();
            this.updateCanvas(this.operation, deltas, false);
            this.operation = 1;
        }
    }
    handleMouseDown(event, position, size) {
        this.initBoxPosition = position;
        this.size = size;
        this.onMouseDown(event);
    }
    onMouseDown(event) {
        this.isDrawing = event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["MouseButton"].Left;
        if (this.isDrawing) {
            this.selector.isActiveSelection = false;
            this.isShifting = true;
            this.mouseDownCoord = { x: event.x, y: event.y };
            this.position = this.initBoxPosition;
            this.updateCanvas(this.operation, { x: Math.abs(this.size.x), y: Math.abs(this.size.y) }, true);
            this.operation = 1;
        }
    }
    onMouseUp() {
        if (this.isShifting) {
            this.isShifting = false;
            this.isDrawing = false;
            this.selector.isActiveSelection = true;
            const deltas = { x: Math.abs(this.size.x), y: Math.abs(this.size.y) };
            this.minLimitMouse();
            this.updateCanvas(this.operation, deltas, true);
        }
    }
    onMouseMove(event) {
        if (this.isShifting) {
            const deltas = { x: Math.abs(this.size.x), y: Math.abs(this.size.y) };
            const eventPos = { x: event.x, y: event.y };
            this.position = {
                x: this.initBoxPosition.x + eventPos.x - this.mouseDownCoord.x,
                y: this.initBoxPosition.y + eventPos.y - this.mouseDownCoord.y,
            };
            this.minLimitMouse();
            this.updateCanvas(this.operation, deltas, true);
        }
    }
    minLimitMouse() {
        if (this.position.x < -Math.abs(this.size.x) + _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].RECTANGLE_LIMIT_OFFSET) {
            this.position.x = -Math.abs(this.size.x) + _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].RECTANGLE_LIMIT_OFFSET;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
        }
    }
    actionWrapper(shiftService, initBoxPositionCopy, delta, positionCopy2, deltas, imageData) {
        this.clearMethod(shiftService, initBoxPositionCopy, delta);
        shiftService.selector.redrawSelection(positionCopy2, 1, deltas, imageData);
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        const htmlElement = document.getElementById('selection-box');
        if (htmlElement)
            htmlElement.style.display = 'none';
    }
    actionWrapper2(shiftService, initBoxPositionCopy2, deltaCopy, positionCopy, mode, deltas, imageDataCopy) {
        this.clearMethod(shiftService, initBoxPositionCopy2, deltaCopy);
        shiftService.selector.redrawSelection(positionCopy, mode, deltas, imageDataCopy);
        shiftService.selector.redrawSelection(positionCopy, 2, deltas, imageDataCopy);
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        const htmlElement = document.getElementById('selection-box');
        if (htmlElement)
            htmlElement.style.display = 'none';
    }
    updateCanvas(mode, deltas, isMouse) {
        deltas = { x: deltas.x * _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].IS_FLIPPED.x, y: deltas.y * _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].IS_FLIPPED.y };
        this.magnetService.calculatePosition(this.position, this.size, isMouse, this.factors);
        const selection = this.selector.selection;
        if (!isMouse && mode === 0) {
            this.selector.redrawSelection(this.initBoxPosition, mode, deltas, selection);
            const imageData = new ImageData(new Uint8ClampedArray(selection.data), selection.width, selection.height);
            const positionCopy2 = Object.assign({}, this.position);
            const delta = Object.assign({}, deltas);
            const initBoxPositionCopy = Object.assign({}, this.initBoxPosition);
            const shiftService2 = Object.assign({}, this);
            this.drawingService.lastAction = () => {
                this.actionWrapper(shiftService2, initBoxPositionCopy, delta, positionCopy2, delta, imageData);
            };
        }
        this.selector.redrawSelection(this.position, mode, deltas, selection);
        const shiftService = Object.assign({}, this);
        const initBoxPositionCopy2 = Object.assign({}, this.initBoxPosition);
        const imageDataCopy = new ImageData(new Uint8ClampedArray(selection.data), selection.width, selection.height);
        const positionCopy = Object.assign({}, this.position);
        const deltaCopy = Object.assign({}, deltas);
        this.drawingService.lastAction = () => {
            this.actionWrapper2(shiftService, initBoxPositionCopy2, deltaCopy, positionCopy, mode, deltaCopy, imageDataCopy);
        };
    }
    clearMethod(shiftService, position, deltas) {
        if ('drawCircle' in shiftService.selector) {
            const baseCtx = this.drawingService.baseCtx;
            baseCtx.save();
            baseCtx.beginPath();
            baseCtx.ellipse(position.x + deltas.x / 2, position.y + deltas.y / 2, deltas.x / 2, deltas.y / 2, 0, 0, 2 * Math.PI);
            baseCtx.closePath();
            baseCtx.clip();
            baseCtx.clearRect(position.x - 1, position.y - 1, deltas.x + 1, deltas.y + 1);
            baseCtx.restore();
        }
        else {
            this.drawingService.baseCtx.clearRect(position.x - 1, position.y - 1, deltas.x + 1, deltas.y + 1);
        }
    }
    changeFactors(keyMap) {
        this.factors.x = keyMap.get(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Arrows"].ARROWLEFT) ? -_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].SHIFT_AMOUNT : 0;
        this.factors.x = keyMap.get(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Arrows"].ARROWRIGHT) ? _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].SHIFT_AMOUNT : this.factors.x;
        this.factors.y = keyMap.get(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Arrows"].ARROWUP) ? -_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].SHIFT_AMOUNT : 0;
        this.factors.y = keyMap.get(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Arrows"].ARROWDOWN) ? _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].SHIFT_AMOUNT : this.factors.y;
    }
    endSelection() {
        if (this.selector.deltaX !== 0 && this.selector.deltaY !== 0) {
            this.operation = 2;
            this.updateCanvas(this.operation, { x: Math.abs(this.size.x), y: Math.abs(this.size.y) }, true);
            this.selector.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].RESET_VECTOR);
        }
    }
}
ShiftSelectionService.ɵfac = function ShiftSelectionService_Factory(t) { return new (t || ShiftSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_grid_magnet_service__WEBPACK_IMPORTED_MODULE_5__["MagnetService"])); };
ShiftSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShiftSelectionService, factory: ShiftSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShiftSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }, { type: _app_services_grid_magnet_service__WEBPACK_IMPORTED_MODULE_5__["MagnetService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/selection/surface-selection.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/selection/surface-selection.service.ts ***!
  \*****************************************************************/
/*! exports provided: SurfaceSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurfaceSelectionService", function() { return SurfaceSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









class SurfaceSelectionService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('surface-selection', 'Sélection de la surface', 'ctrl-a');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](undefined, false, false, _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].UNDEFINED_SIZE);
        this.placeBoxCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_VECTOR);
        this.placeBox$ = this.placeBoxCallSource.asObservable();
        this.changeBoxSizeCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_VECTOR);
        this.changeBoxSize$ = this.changeBoxSizeCallSource.asObservable();
        this.selection = new ImageData(1, 1);
        this.isActiveSelection = false;
    }
    handleCommand(event) {
        this.isActiveSelection = false;
        this.origin = { x: 0, y: 0 };
        this.deltaX = this.drawingService.baseCtx.canvas.width;
        this.deltaY = this.drawingService.baseCtx.canvas.height;
        if (event.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Shortcut"].SURFACE_SELECTION.charAt(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Shortcut"].SURFACE_SELECTION.length - 1) || event.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Shortcut"].SURFACE_SELECTION) {
            this.selectRectangle();
        }
        if (event.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].ESCAPE) {
            this.deleteCurrentSelection();
        }
    }
    selectRectangle() {
        const ctx = this.drawingService.baseCtx;
        this.selection = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.callChangeBoxSize({ x: this.deltaX, y: this.deltaY });
        this.callPlaceBox(this.origin);
        this.isActiveSelection = true;
    }
    deleteCurrentSelection() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.selection = new ImageData(1, 1);
        this.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].RESET_VECTOR);
        this.isActiveSelection = false;
    }
    redrawSelection(position, status, deltas, selection) {
        if (this.drawingService.previewCtx !== undefined) {
            if (status === 0) {
                this.drawingService.baseCtx.fillStyle = 'white';
                this.drawingService.baseCtx.fillRect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
            }
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            const ctx = status !== 2 ? this.drawingService.previewCtx : this.drawingService.baseCtx;
            const divisionFactor = { x: Math.abs(deltas.x / this.deltaX), y: Math.abs(deltas.y / this.deltaY) };
            const maskCanvas = document.createElement('canvas');
            maskCanvas.width = window.innerWidth / divisionFactor.x;
            maskCanvas.height = window.innerHeight / divisionFactor.y;
            const maskCtx = maskCanvas.getContext('2d');
            maskCtx.putImageData(selection, position.x / divisionFactor.x, position.y / divisionFactor.y);
            ctx.save();
            ctx.beginPath();
            ctx.rect(position.x - 1, position.y - 1, Math.abs(deltas.x + 1), Math.abs(deltas.y + 1));
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.clip();
            ctx.scale(deltas.x / Math.abs(this.deltaX), deltas.y / Math.abs(this.deltaY));
            ctx.drawImage(maskCanvas, deltas.x < 0 ? deltas.x / divisionFactor.x - (2 * position.x) / divisionFactor.x : 0, deltas.y < 0 ? deltas.y / divisionFactor.y - (2 * position.y) / divisionFactor.y : 0);
            ctx.restore();
            this.callChangeBoxSize({ x: Math.abs(deltas.x), y: Math.abs(deltas.y) });
            this.callPlaceBox(position);
            this.origin = position;
        }
    }
    callPlaceBox(origin) {
        this.placeBoxCallSource.next(origin);
    }
    callChangeBoxSize(delta) {
        this.changeBoxSizeCallSource.next(delta);
    }
}
SurfaceSelectionService.ɵfac = function SurfaceSelectionService_Factory(t) { return new (t || SurfaceSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
SurfaceSelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SurfaceSelectionService, factory: SurfaceSelectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurfaceSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/ellipse.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/tools/ellipse.service.ts ***!
  \***************************************************/
/*! exports provided: EllipseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipseService", function() { return EllipseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");








class EllipseService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    // Le constructeur
    constructor(drawingService) {
        super(drawingService);
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('ellipse', 'Ellipse', '2');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](0);
        this.shiftDown = false;
        this.sign = {};
    }
    // Méthode qui check si shift est pesé et update le previewCtx
    handleCommand(command) {
        if (!this.isDrawing) {
            this.shiftDown = false;
            return;
        }
        if (command.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].SHIFT) {
            this.shiftDown = !this.shiftDown;
            this.updatePreview();
        }
        else if (command.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].ESCAPE) {
            this.isDrawing = false;
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
        }
    }
    // Update du previewCtx. Dessine un cercle si shift est pesé.
    updatePreview() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        if (this.shiftDown) {
            this.drawCircle(this.drawingService.previewCtx, this.origin, this.options, this.isDrawing, this.drawingService.primaryColor, this.drawingService.secondaryColor, this.target, this.sign);
        }
        else {
            this.drawEllipse(this.drawingService.previewCtx, this.origin, this.options, this.isDrawing, this.drawingService.primaryColor, this.drawingService.secondaryColor, this.target, this.sign);
        }
    }
    // Update du baseCtx. Dessine un cercle si shift est pesé.
    updateBase() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        const options = Object.assign({}, this.options);
        options.shapeOptions = Object.assign({}, this.options.shapeOptions);
        const origin = Object.assign({}, this.origin);
        const target = Object.assign({}, this.target);
        const sign = Object.assign({}, this.sign);
        const pColor = this.drawingService.primaryColor;
        const sColor = this.drawingService.secondaryColor;
        const mouseDown = this.isDrawing;
        const funcEllipse = () => {
            this.drawEllipse(this.drawingService.baseCtx, origin, options, mouseDown, pColor, sColor, target, sign);
        };
        const funcCircle = () => {
            this.drawCircle(this.drawingService.baseCtx, origin, options, mouseDown, pColor, sColor, target, sign);
        };
        if (this.shiftDown) {
            funcCircle();
            this.drawingService.addAction(funcCircle);
        }
        else {
            funcEllipse();
            this.drawingService.addAction(funcEllipse);
        }
    }
    // Mouse down function: enregistre les coordonnees du click et indique que le dessin de l'ellipse est commencé;
    // Donne la position de son origine et reset la position du target
    onMouseDown(event) {
        this.isDrawing = event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["MouseButton"].Left;
        if (!this.options.shapeOptions.contour && !this.options.shapeOptions.fill) {
            this.options.shapeOptions.contour = true;
        }
        if (this.isDrawing) {
            this.origin = this.getPagePositionFromMouse(event);
            this.target = this.getPagePositionFromMouse(event);
        }
    }
    // Mouse up function: enregistre les coordonnees du mouseUp, et dessine une ellipse sur le canvas de base.
    onMouseUp(event) {
        if (this.isDrawing) {
            this.target = this.getPagePositionFromMouse(event);
            this.updateBase();
            this.isDrawing = false;
        }
    }
    // Mouse move function: update le previewCtx à chaque mouvement de la souris. Si la souris n'est pas pesée,
    // clear le path continuellement.
    onMouseMove(event) {
        if (this.isDrawing) {
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.target = this.getPagePositionFromMouse(event);
            this.sign.y = Math.sign(this.target.y - this.origin.y);
            this.sign.x = Math.sign(this.target.x - this.origin.x);
            this.updatePreview();
        }
    }
    // Dessin de l'ellipse
    drawEllipse(ctx, origin, options, mouseDown, primaryColor, secondaryColor, target, sign) {
        ctx.beginPath();
        if (!mouseDown) {
            return;
        }
        // Style du perimetre autour de l'ellipse
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].ELLIPSE_PERIM_LINEWIDTH;
        ctx.setLineDash([_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].ELLIPSE_PERIM_LINEDASH]);
        const contourPadding = { x: 0, y: 0 };
        if (options.shapeOptions.contour) {
            contourPadding.x = sign.x * options.size;
            contourPadding.y = sign.y * options.size;
        }
        // Dessin du perimetre autour de l'ellipse
        if (ctx === this.drawingService.previewCtx) {
            ctx.strokeRect(origin.x, origin.y, target.x - origin.x + contourPadding.x, target.y - origin.y + contourPadding.y);
        }
        // Ellipse
        ctx.ellipse(origin.x + (target.x - origin.x) / 2 + contourPadding.x / 2, origin.y + (target.y - origin.y) / 2 + contourPadding.y / 2, Math.abs(target.x - origin.x) / 2, Math.abs(target.y - origin.y) / 2, 0, 0, 2 * Math.PI);
        ctx.setLineDash([]);
        ctx.strokeStyle = secondaryColor;
        ctx.lineWidth = options.size;
        ctx.fillStyle = primaryColor;
        if (options.shapeOptions.fill) {
            ctx.fill();
        }
        if (options.shapeOptions.contour) {
            ctx.stroke();
        }
    }
    // Dessin du cercle
    drawCircle(ctx, origin, options, mouseDown, primaryColor, secondaryColor, target, sign) {
        ctx.beginPath();
        if (!mouseDown) {
            return;
        }
        // Style du périmètre autour du cercle
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].ELLIPSE_PERIM_LINEWIDTH;
        ctx.setLineDash([_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].ELLIPSE_PERIM_LINEDASH]);
        const contourPadding = { x: 0, y: 0 };
        if (options.shapeOptions.contour) {
            contourPadding.x = sign.x * options.size;
            contourPadding.y = sign.y * options.size;
        }
        // Perimetre autour du cercle
        if (ctx === this.drawingService.previewCtx) {
            ctx.strokeRect(origin.x, origin.y, target.x - origin.x + contourPadding.x, sign.y * Math.abs(target.x - origin.x) + contourPadding.y);
        }
        // Cercle
        ctx.ellipse(origin.x + (target.x - origin.x) / 2 + contourPadding.x / 2, origin.y + sign.y * Math.abs((target.x - origin.x) / 2) + contourPadding.y / 2, Math.abs(target.x - origin.x) / 2, Math.abs(target.x - origin.x) / 2, 0, 0, 2 * Math.PI);
        // Affichage du cercle sur preview context
        ctx.setLineDash([]);
        ctx.strokeStyle = secondaryColor;
        ctx.lineWidth = options.size;
        ctx.fillStyle = primaryColor;
        if (options.shapeOptions.fill) {
            ctx.fill();
        }
        if (options.shapeOptions.contour) {
            ctx.stroke();
        }
    }
}
EllipseService.ɵfac = function EllipseService_Factory(t) { return new (t || EllipseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
EllipseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EllipseService, factory: EllipseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EllipseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/eraser.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/tools/eraser.service.ts ***!
  \**************************************************/
/*! exports provided: EraserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EraserService", function() { return EraserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");








class EraserService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('eraser', 'Efface', 'e');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](undefined, false, false, _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].ERASER_MIN_TRAIL_SIZE);
        this.clearPath();
    }
    onMouseDown(event) {
        this.isDrawing = event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["MouseButton"].Left;
        if (this.isDrawing) {
            this.clearPath();
            this.cursor = this.getPagePositionFromMouse(event);
            this.pathData.push(this.cursor);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.erase(this.drawingService.previewCtx, this.pathData, this.options);
            this.drawCursor(this.drawingService.previewCtx, this.cursor);
        }
    }
    onMouseUp(event) {
        if (this.isDrawing) {
            const mousePosition = this.getPagePositionFromMouse(event);
            this.pathData.push(mousePosition);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.erase(this.drawingService.baseCtx, this.pathData, this.options);
            this.isDrawing = false;
            const path = [...this.pathData];
            const options = Object.assign({}, this.options);
            const funcErase = () => {
                this.erase(this.drawingService.baseCtx, path, options);
            };
            this.drawingService.addAction(funcErase);
        }
        this.isDrawing = false;
        this.clearPath();
    }
    onMouseMove(event) {
        this.cursor = this.getPagePositionFromMouse(event);
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        if (this.isDrawing) {
            this.pathData.push(this.cursor);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.erase(this.drawingService.previewCtx, this.pathData, this.options);
        }
        this.drawCursor(this.drawingService.previewCtx, this.cursor);
    }
    erase(ctx, path, options) {
        const strokeStyle = ctx.strokeStyle;
        ctx.fillStyle = 'white';
        ctx.lineWidth = options.size;
        ctx.fillRect(path[0].x - options.size / 2, path[0].y - options.size / 2, options.size, options.size);
        for (let i = 0; i < path.length - 1; i++) {
            let point0 = { x: path[i].x, y: path[i].y };
            let point1 = { x: path[i + 1].x, y: path[i + 1].y };
            let deltas = { x: point1.x - point0.x, y: point1.y - point0.y };
            const isYAxis = Math.abs(deltas.y) > Math.abs(deltas.x);
            if (isYAxis) {
                point0 = { x: path[i].y, y: path[i].x };
                point1 = { x: path[i + 1].y, y: path[i + 1].x };
                deltas = { x: point1.x - point0.x, y: point1.y - point0.y };
            }
            if (point0.x > point1.x) {
                let tmp = {};
                tmp = point0;
                point0 = point1;
                point1 = tmp;
            }
            this.plotLine(ctx, point0, point1, deltas, isYAxis, options);
        }
        ctx.strokeStyle = strokeStyle;
    }
    plotLine(ctx, point0, point1, deltas, isYAxis, options) {
        const slope = deltas.y / deltas.x;
        const abscissa = point0.y - slope * point0.x;
        for (let x = point0.x; x < point1.x; x += 2) {
            const y = slope * x + abscissa;
            if (isYAxis) {
                ctx.fillRect(y - options.size / 2, x - options.size / 2, options.size, options.size);
            }
            else {
                ctx.fillRect(x - options.size / 2, y - options.size / 2, options.size, options.size);
            }
        }
    }
    clearPath() {
        this.pathData = [];
    }
    drawCursor(ctx, cursor) {
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.strokeRect(cursor.x - this.options.size / 2, cursor.y - this.options.size / 2, this.options.size, this.options.size);
        ctx.fillStyle = 'white';
        ctx.fillRect(cursor.x - this.options.size / 2, cursor.y - this.options.size / 2, this.options.size, this.options.size);
    }
}
EraserService.ɵfac = function EraserService_Factory(t) { return new (t || EraserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
EraserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EraserService, factory: EraserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EraserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/eye-dropper.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/tools/eye-dropper.service.ts ***!
  \*******************************************************/
/*! exports provided: EyeDropperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeDropperService", function() { return EyeDropperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");








class EyeDropperService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.PIXEL_SCALE = 16;
        this.CURSOR_SIZE = 40;
        this.CURSOR = new Image();
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('eye-dropper', 'EyeDropper', 'i');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](undefined, false, false, _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].UNDEFINED_SIZE);
        this.CURSOR.src = '../../assets/eye-dropper.png';
    }
    onMouseDown(event) {
        const position = this.getPagePositionFromMouse(event);
        const color = this.drawingService.baseCtx.getImageData(position.x, position.y, 1, 1).data;
        if (event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["MouseButton"].Left) {
            this.drawingService.changeColor(this.drawingService.RGBToHex(color[0], color[1], color[2], color[_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].GREEN_INDEX_HEX]), true, true);
        }
        else {
            this.drawingService.changeColor(this.drawingService.RGBToHex(color[0], color[1], color[2], color[_app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].GREEN_INDEX_HEX]), false, true);
        }
    }
    onMouseMove(event) {
        const canvas = document.getElementById('eye-dropper-canvas');
        const context = canvas.getContext('2d');
        this.drawingService.clearCanvas(context);
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        const cursor = this.getPagePositionFromMouse(event);
        if (cursor.x >= 0 && cursor.x <= this.drawingService.canvasSize.x && cursor.y >= 0 && cursor.y <= this.drawingService.canvasSize.y) {
            this.drawZoom(context, cursor);
            this.drawCursor(this.drawingService.previewCtx, cursor);
        }
    }
    drawZoom(ctx, position) {
        const radius = ctx.canvas.width / (this.PIXEL_SCALE * 2);
        const previewCtx = this.drawingService.previewCtx;
        const baseCtx = this.drawingService.baseCtx;
        ctx.imageSmoothingQuality = 'low';
        ctx.imageSmoothingEnabled = false;
        previewCtx.save();
        previewCtx.beginPath();
        previewCtx.ellipse(position.x, position.y, radius, radius, 0, 0, 2 * Math.PI);
        previewCtx.closePath();
        previewCtx.clip();
        previewCtx.drawImage(baseCtx.canvas, 0, 0);
        previewCtx.restore();
        ctx.drawImage(previewCtx.canvas, position.x - radius, position.y - radius, radius * 2, radius * 2, 0, 0, ctx.canvas.width, ctx.canvas.height);
        this.drawingService.clearCanvas(previewCtx);
        ctx.lineWidth = 2;
        ctx.globalCompositeOperation = 'difference';
        ctx.strokeStyle = 'white';
        ctx.strokeRect(ctx.canvas.width / 2, ctx.canvas.height / 2, this.PIXEL_SCALE, this.PIXEL_SCALE / 2);
    }
    drawCursor(ctx, position) {
        ctx.drawImage(this.CURSOR, position.x, position.y - this.CURSOR_SIZE, this.CURSOR_SIZE, this.CURSOR_SIZE);
    }
}
EyeDropperService.ɵfac = function EyeDropperService_Factory(t) { return new (t || EyeDropperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
EyeDropperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EyeDropperService, factory: EyeDropperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EyeDropperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/fill-bucket.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/tools/fill-bucket.service.ts ***!
  \*******************************************************/
/*! exports provided: FillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillService", function() { return FillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_data_structures_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/data-structures/queue */ "./src/app/classes/data-structures/queue.ts");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");










class FillService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_3__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.drawingService = drawingService;
        this.fillPoints = new Array();
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_4__["ToolInfo"]('fill', 'Fill', 'b');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_5__["ToolOption"](undefined, undefined, undefined, undefined, undefined, true);
        this.row = [_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].NEGATIVE_DEFAULT_DELTA, _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].NEGATIVE_DEFAULT_DELTA, _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].NEGATIVE_DEFAULT_DELTA, 0, 0, 1, 1, 1];
        this.col = [_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].NEGATIVE_DEFAULT_DELTA, 0, 1, _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].NEGATIVE_DEFAULT_DELTA, 1, _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].NEGATIVE_DEFAULT_DELTA, 0, 1];
        this.actionMap = new Map();
        this.actionMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["MouseButton"].Left, () => {
            this.leftClickMode(this.drawingService.baseCtx, this.startingPoint, this.baseColor, this.fillPoints, this.visitedMatrix, this.imageData, this.replacementColor);
        });
        this.actionMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["MouseButton"].Right, () => {
            this.rightClickMode(this.imageData, this.replacementColor, this.baseColor);
        });
    }
    copyImageData(ctx, src) {
        const image = ctx.createImageData(src.width, src.height);
        image.data.set(src.data);
        return image;
    }
    copyColor(color) {
        const col = new Uint8ClampedArray(_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].SIZE_OF_DATA);
        for (let i = 0; i < _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].SIZE_OF_DATA; i++) {
            col[i] = color[i];
        }
        return col;
    }
    deepCopyInstance(ctx) {
        return {
            ctx,
            startingPoint: Object.assign({}, this.startingPoint),
            baseColor: this.copyColor(this.baseColor),
            fillPoints: [...this.fillPoints],
            visitedMatrix: [...this.visitedMatrix],
            imageData: this.copyImageData(ctx, this.imageData),
            replacementColor: this.copyColor(this.replacementColor),
        };
    }
    getCanvasSize() {
        const dimensions = this.drawingService.getCanvasDimensions();
        if (isNaN(dimensions.x) || isNaN(dimensions.y) || !dimensions) {
            return { x: _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].DEFAULT_CANVAS_SIZE, y: _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].DEFAULT_CANVAS_SIZE };
        }
        return dimensions;
    }
    resetVisitedMatrix(visitedMatrix) {
        const width = this.getCanvasSize().x ? this.getCanvasSize().x : _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].DEFAULT_CANVAS_SIZE;
        const height = this.getCanvasSize().y ? this.getCanvasSize().y : _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].DEFAULT_CANVAS_SIZE;
        if (!visitedMatrix || visitedMatrix.length !== width || visitedMatrix[0].length !== height) {
            visitedMatrix = new Array(width).fill(false).map(() => new Array(height).fill(false));
        }
        else {
            for (let i = 0; i < width; i++) {
                for (let j = 0; j < height; j++) {
                    visitedMatrix[i][j] = false;
                }
            }
        }
        return visitedMatrix;
    }
    handleClick(event) {
        if (this.actionMap.has(event.button)) {
            this.actionMap.get(event.button)();
            const copy = this.deepCopyInstance(this.drawingService.baseCtx);
            let action;
            if (event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["MouseButton"].Left) {
                action = () => {
                    this.leftClickMode(copy.ctx, copy.startingPoint, copy.baseColor, copy.fillPoints, copy.visitedMatrix, copy.imageData, copy.replacementColor);
                };
            }
            else {
                action = () => {
                    this.rightClickMode(copy.imageData, copy.replacementColor, copy.baseColor);
                };
            }
            this.drawingService.addAction(action);
        }
    }
    rightClickMode(imageData, replacementColor, baseColor) {
        this.replaceAllColor(imageData, replacementColor, baseColor);
    }
    leftClickMode(ctx, startingPoint, baseColor, fillPoints, visitedMatrix, imageData, replacementColor) {
        visitedMatrix = this.resetVisitedMatrix(visitedMatrix);
        fillPoints = [];
        this.getRegionPoints(startingPoint, baseColor, fillPoints, visitedMatrix, ctx, imageData);
        this.paintBucketFill(ctx, imageData, replacementColor, fillPoints);
    }
    getImageData(ctx, point) {
        return ctx.getImageData(point.x, point.y, ctx.canvas.width, ctx.canvas.height);
    }
    putImageData(ctx, imageData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield ctx.putImageData(imageData, 0, 0);
        });
    }
    onMouseUp(event) {
        this.imageData = this.getImageData(this.drawingService.baseCtx, { x: 0, y: 0 });
        this.visitedMatrix = this.resetVisitedMatrix(this.visitedMatrix);
        this.fillPoints = [];
        this.startingPoint = this.getPagePositionFromMouse(event);
        this.fillPoints.push(this.startingPoint);
        this.baseColor = this.getRGBA(this.startingPoint, this.imageData);
        this.replacementColor = this.hexToRGB(this.drawingService.primaryColor);
        this.handleClick(event);
    }
    getIndex(point) {
        return (point.y * this.getCanvasSize().x + point.x) * _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].SIZE_OF_DATA;
    }
    getRGBA(point, imageData) {
        let index = this.getIndex(point);
        const data = new Uint8ClampedArray(_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].SIZE_OF_DATA);
        data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].R] = imageData.data[index];
        data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].G] = imageData.data[++index];
        data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].B] = imageData.data[++index];
        data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].A] = imageData.data[++index];
        return data;
    }
    hexToRGB(hex) {
        const data = new Uint8ClampedArray(_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].SIZE_OF_DATA);
        let i = 1;
        data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].R] = parseInt(hex.slice(i++, ++i), _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].HEX_BASE);
        data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].G] = parseInt(hex.slice(i++, ++i), _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].HEX_BASE);
        data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].B] = parseInt(hex.slice(i++, ++i), _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].HEX_BASE);
        data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].A] = parseInt(hex.slice(i++, ++i), _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].HEX_BASE);
        return data;
    }
    replaceColor(index, color) {
        this.imageData.data[index] = color[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].R];
        this.imageData.data[++index] = color[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].G];
        this.imageData.data[++index] = color[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].B];
        this.imageData.data[++index] = color[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].A];
    }
    isValid(pixel, imageData, baseColor) {
        return (pixel.x >= 0 &&
            pixel.x < this.getCanvasSize().x &&
            pixel.y >= 0 &&
            pixel.y < this.getCanvasSize().y &&
            this.acceptedColor(this.getRGBA(pixel, imageData), baseColor));
    }
    replaceAllColor(imageData, replacementColor, baseColor) {
        for (let i = 0; i < imageData.data.length; i += _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].SIZE_OF_DATA) {
            const data = new Uint8ClampedArray(_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].SIZE_OF_DATA);
            data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].R] = imageData.data[i];
            data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].G] = imageData.data[i + _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].G];
            data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].B] = imageData.data[i + _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].B];
            data[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].A] = imageData.data[i + _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].A];
            if (this.acceptedColor(data, baseColor)) {
                this.replaceColor(i, replacementColor);
            }
        }
        this.putImageData(this.drawingService.baseCtx, imageData);
    }
    getRegionPoints(startPos, baseColor, fillPoints, visitedMatrix, ctx, imageData) {
        const queue = new _app_classes_data_structures_queue__WEBPACK_IMPORTED_MODULE_2__["Queue"]();
        queue.push(startPos);
        if (fillPoints.length > 0) {
            fillPoints = [];
        }
        while (queue.length > 0) {
            const curNode = queue.pop();
            if (curNode.x > visitedMatrix.length || curNode.y > visitedMatrix[0].length) {
                break;
            }
            if (this.acceptedColor(this.getRGBA(curNode, imageData), baseColor)) {
                fillPoints.push(curNode);
            }
            visitedMatrix[curNode.x][curNode.y] = true;
            for (let i = 0; i < this.row.length; i++) {
                let visitedX = curNode.x + this.row[i] > 0 ? curNode.x + this.row[i] : 0;
                let visitedY = curNode.y + this.col[i] > 0 ? curNode.y + this.col[i] : 0;
                visitedX = curNode.x + this.row[i] < ctx.canvas.width ? visitedX : ctx.canvas.width - 1;
                visitedY = curNode.y + this.col[i] < ctx.canvas.height ? visitedY : ctx.canvas.height - 1;
                if (!visitedMatrix[visitedX][visitedY] && this.isValid({ x: visitedX, y: visitedY }, imageData, baseColor)) {
                    queue.push({ x: visitedX, y: visitedY });
                    visitedMatrix[visitedX][visitedY] = true;
                }
                else {
                    visitedMatrix[visitedX][visitedY] = true;
                }
            }
        }
    }
    acceptedColor(color, target) {
        return this.getTolerance(target, color) <= this.options.bucketOptions.tolerance;
    }
    getTolerance(base, target) {
        const dR = Math.abs((base[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].R] - target[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].R]) / _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].MAX_HEX_VALUE);
        const dG = Math.abs((base[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].G] - target[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].G]) / _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].MAX_HEX_VALUE);
        const dB = Math.abs((base[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].B] - target[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].B]) / _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].MAX_HEX_VALUE);
        const dA = Math.abs((base[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].A] - target[_app_shared_global__WEBPACK_IMPORTED_MODULE_7__["RGB"].A]) / _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].MAX_HEX_VALUE);
        return ((dR + dG + dB + dA) / _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].SIZE_OF_DATA) * _app_shared_global__WEBPACK_IMPORTED_MODULE_7__["Global"].PERCENTAGE_CONST;
    }
    paintBucketFill(ctx, imageData, replacementColor, fillPoints) {
        for (const point of fillPoints) {
            this.replaceColor(this.getIndex(point), replacementColor);
        }
        this.putImageData(ctx, imageData);
        fillPoints = [];
    }
}
FillService.ɵfac = function FillService_Factory(t) { return new (t || FillService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"])); };
FillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FillService, factory: FillService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FillService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_6__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/line.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/tools/line.service.ts ***!
  \************************************************/
/*! exports provided: LineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineService", function() { return LineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_line_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/line-options */ "./src/app/classes/line-options.ts");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");









// Ceci est une implémentation de base de l'outil Crayon pour aider à débuter le projet
// L'implémentation ici ne couvre pas tous les critères d'accepetation du projet
// Vous êtes encouragés de modifier et compléter le code.
// N'oubliez pas de regarder les tests dans le fichier spec.ts aussi!
class LineService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_3__["ToolInfo"]('line', 'Ligne', 'l');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_4__["ToolOption"](undefined, true);
        this.isGuided = false;
        this.clearPath();
    }
    handleCommand(command, isDown) {
        if (!this.isDrawing) {
            return;
        }
        switch (command.key) {
            case _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Command"].BACKSPACE: {
                if (isDown) {
                    this.deleteLastSegment();
                }
                break;
            }
            case _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Command"].SHIFT: {
                if (!this.isGuided && isDown) {
                    this.lock();
                }
                else {
                    this.unlock();
                }
                break;
            }
            case _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Command"].ESCAPE: {
                if (isDown) {
                    this.deleteLine();
                    this.drawingService.previewCtx.setLineDash([0]);
                }
                break;
            }
        }
    }
    onMouseDown(event) {
        this.isDrawing = true;
        this.click(event);
    }
    deleteLastSegment() {
        if (this.pathData.length < 2) {
            return;
        }
        this.pathData.pop();
        this.updateTip();
        this.updatePreview();
    }
    onMouseMove(event) {
        this.drawingService.previewCtx.canvas.style.cursor = 'crosshair';
        if (this.isDrawing) {
            this.mousePos = this.getPagePositionFromMouse(event);
            this.updateTip();
            this.updatePreview();
        }
    }
    stopDrawing(event) {
        this.mousePos = this.getPositionFromMouse(event);
        this.updateTip();
        const initialPoint = this.pathData[0];
        const distance = this.distanceBetweenPoints(initialPoint, this.tipPos);
        if (distance < _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].RAYON_MAX) {
            this.pathData.length -= 2;
            this.pathData.push(initialPoint);
        }
        else {
            this.pathData.length -= 1;
        }
        this.isDrawing = false;
        this.tipPos = this.pathData[this.pathData.length - 1];
        const path = [...this.pathData];
        const options = Object.assign({}, this.options);
        options.lineOptions = new _app_classes_line_options__WEBPACK_IMPORTED_MODULE_1__["LineOptions"]();
        options.lineOptions.connectionDotSize = this.options.lineOptions.connectionDotSize;
        options.lineOptions.hasConnectionDots = this.options.lineOptions.hasConnectionDots;
        const info = {
            ctx: this.drawingService.baseCtx,
            pointsPath: path,
            color: this.drawingService.primaryColor,
            options,
            lineOption: Object.assign({}, options.lineOptions),
        };
        const func = () => {
            this.drawLine(this.drawingService.baseCtx, info.pointsPath, {}, info.color, info.options);
        };
        func();
        this.drawingService.addAction(func);
        this.clearPath();
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.unlock();
    }
    updatePreview() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.drawLine(this.drawingService.previewCtx, this.pathData, this.tipPos, this.drawingService.primaryColor, this.options);
    }
    drawConnectDots(ctx, path, lineOptions) {
        for (const point of path) {
            this.drawCircle(point.x, point.y, ctx, lineOptions);
        }
    }
    drawCircle(x, y, ctx, lineOptions) {
        ctx.beginPath();
        ctx.arc(x, y, lineOptions.connectionDotSize, 0, 2 * Math.PI, true);
        ctx.fill();
    }
    lock() {
        if (this.pathData.length > 0) {
            this.line = this.getClosestLine(this.mousePos, this.pathData[this.pathData.length - 1]);
            this.toggleGuidingMode(true);
            this.updateTip();
            this.updatePreview();
        }
    }
    unlock() {
        this.toggleGuidingMode(false);
        if (this.pathData.length > 0) {
            this.updateTip();
            this.updatePreview();
        }
    }
    calculateGuidedPosition(oldPoint, line, mousePos) {
        const a = line[0]; // ax + by + c = 0
        const b = line[1];
        const c = line[2];
        let xFormula;
        let formula;
        if (a === 0) {
            xFormula = mousePos.x;
            formula = oldPoint.y;
        }
        else if (b === 0) {
            xFormula = oldPoint.x;
            formula = mousePos.y;
        }
        else {
            xFormula = mousePos.x;
            formula = -(a * mousePos.x + c) * b;
        }
        return { x: xFormula, y: formula };
    }
    drawLine(ctx, path, tipPosition, color, /*alpha: number, */ options) {
        if (path.length === 0) {
            return;
        }
        ctx.lineWidth = options.size;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        for (const point of path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.lineTo(tipPosition.x, tipPosition.y);
        ctx.stroke();
        if (options.lineOptions.hasConnectionDots) {
            this.drawConnectDots(ctx, path, options.lineOptions);
        }
    }
    toggleGuidingMode(isGuide) {
        this.isGuided = isGuide;
    }
    deleteLine() {
        this.clearPath();
        this.updatePreview();
        this.isDrawing = false;
    }
    distanceBetweenPoints(point1, point2) {
        const a = Math.pow(point1.x - point2.x, 2);
        const b = Math.pow(point1.y - point2.y, 2);
        return Math.sqrt(a + b);
    }
    clearPath() {
        this.pathData = [];
    }
    updateTip() {
        if (this.isGuided && this.pathData.length > 0) {
            this.guidedPos = this.calculateGuidedPosition(this.pathData[this.pathData.length - 1], this.line, this.mousePos);
            this.tipPos = this.guidedPos;
        }
        else {
            this.tipPos = this.mousePos;
        }
    }
    onDoubleClick(event) {
        this.stopDrawing(event);
    }
    click(event) {
        this.mousePos = this.getPositionFromMouse(event);
        this.updateTip();
        this.pathData.push(this.tipPos);
        this.updatePreview();
    }
    getDistanceFromPointToLine(point, line) {
        const val = Math.abs(line[0] * point.x + line[1] * point.y + line[2]);
        const divider = Math.sqrt(line[0] * line[0] + line[1] * line[1]);
        return val / divider;
    }
    getClosestLine(currentPoint, lastPoint) {
        const lineList = [..._app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].LINE_LIST];
        lineList[_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["EnumAngleLigne"].CENTTRENTECINQ].pop();
        lineList[_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["EnumAngleLigne"].QUARANTECINQ].pop();
        lineList[_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["EnumAngleLigne"].VERTICAL].pop();
        lineList[_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["EnumAngleLigne"].HORIZONTAL].pop();
        lineList[_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["EnumAngleLigne"].CENTTRENTECINQ].push(-(lastPoint.x + lastPoint.y));
        lineList[_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["EnumAngleLigne"].QUARANTECINQ].push(-(lastPoint.x - lastPoint.y));
        lineList[_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["EnumAngleLigne"].VERTICAL].push(-lastPoint.x);
        lineList[_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["EnumAngleLigne"].HORIZONTAL].push(-lastPoint.y);
        const distance = lineList.map((line) => this.getDistanceFromPointToLine(currentPoint, line));
        const maxDistance = Math.min(...distance);
        const maxIndex = distance.indexOf(maxDistance);
        return lineList[maxIndex];
    }
}
LineService.ɵfac = function LineService_Factory(t) { return new (t || LineService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"])); };
LineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LineService, factory: LineService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/pencil.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/tools/pencil.service.ts ***!
  \**************************************************/
/*! exports provided: PencilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PencilService", function() { return PencilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");








// Ceci est une implémentation de base de l'outil Crayon pour aider à débuter le projet
// L'implémentation ici ne couvre pas tous les critères d'accepetation du projet
// Vous êtes encouragés de modifier et compléter le code.
// N'oubliez pas de regarder les tests dans le fichier spec.ts aussi!
class PencilService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('pencil', 'Crayon', 'c');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"]();
        this.clearPath();
    }
    onMouseDown(event) {
        this.isDrawing = event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["MouseButton"].Left;
        if (this.isCanvasReady()) {
            this.mouseDownCoord = this.getPagePositionFromMouse(event);
            this.updateView(this.mouseDownCoord, this.drawingService.previewCtx, this.pathData);
        }
    }
    updateView(lastPoint, ctx, path) {
        path.push(lastPoint);
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.drawLine(ctx, path, new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](undefined, false, false, this.options.size), this.drawingService.primaryColor);
    }
    onMouseUp(event) {
        if (this.isDrawing) {
            const mousePosition = this.getPagePositionFromMouse(event);
            this.updateView(mousePosition, this.drawingService.baseCtx, this.pathData);
            const path = [...this.pathData];
            const info = { options: Object.assign({}, this.options), color: this.drawingService.primaryColor };
            const func = () => {
                this.drawLine(this.drawingService.baseCtx, path, info.options, info.color);
            };
            this.drawingService.addAction(func);
        }
        this.isDrawing = false;
        this.clearPath();
    }
    onMouseMove(event) {
        if (this.isCanvasReady()) {
            const mousePosition = this.getPagePositionFromMouse(event);
            this.updateView(mousePosition, this.drawingService.previewCtx, this.pathData);
        }
    }
    isCanvasReady() {
        return this.isDrawing;
    }
    drawLine(ctx, path, options, color /*, alpha: number*/) {
        ctx.lineWidth = options.size;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = color;
        ctx.beginPath();
        for (const point of path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
    }
    clearPath() {
        this.pathData = [];
    }
}
PencilService.ɵfac = function PencilService_Factory(t) { return new (t || PencilService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
PencilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PencilService, factory: PencilService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PencilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/polygone.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/tools/polygone.service.ts ***!
  \****************************************************/
/*! exports provided: PolygoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygoneService", function() { return PolygoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_math_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/math-line */ "./src/app/classes/math-line.ts");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");









class PolygoneService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_2__["Tool"] {
    // Le constructeur
    constructor(drawingService) {
        super(drawingService);
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_3__["ToolInfo"]('polygone', 'Polygone', '3');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_4__["ToolOption"](_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].DEFAULT_VERTICES_NUMBER);
        this.center = { x: 0, y: 0 };
        this.verticesCoords = new Array(this.options.shapeOptions.nbVertices + 1);
        this.breakPointRadius = -1;
    }
    handleCommand(command) {
        if (command.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Command"].ESCAPE) {
            this.isDrawing = false;
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
        }
    }
    // Update du previewCtx.
    updatePreview() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.drawCircularPerimeter();
        this.drawPolygone(this.drawingService.previewCtx, this.options.shapeOptions.nbVertices, this.verticesCoords, this.options.shapeOptions.fill, this.options.shapeOptions.contour, this.options.size, this.drawingService.primaryColor, this.drawingService.secondaryColor);
    }
    // Update du baseCtx.
    updateBase() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        const option = {
            nbVertices: this.options.shapeOptions.nbVertices,
            verticesCoord: [...this.verticesCoords],
            fill: this.options.shapeOptions.fill,
            contour: this.options.shapeOptions.contour,
            size: this.options.size,
            primaryColor: this.drawingService.primaryColor,
            secondaryColor: this.drawingService.secondaryColor,
        };
        const func = () => {
            this.drawPolygone(this.drawingService.baseCtx, option.nbVertices, option.verticesCoord, option.fill, option.contour, option.size, option.primaryColor, option.secondaryColor);
        };
        this.drawingService.addAction(func);
        this.drawPolygone(this.drawingService.baseCtx, this.options.shapeOptions.nbVertices, this.verticesCoords, this.options.shapeOptions.fill, this.options.shapeOptions.contour, this.options.size, this.drawingService.primaryColor, this.drawingService.secondaryColor);
    }
    // Mouse down function: enregistre les coordonnees du click et indique que le dessin du polygone est commencé;
    // Donne la position de son origine et reset la position du target
    onMouseDown(event) {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        this.isDrawing = event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["MouseButton"].Left;
        if (!this.options.shapeOptions.contour && !this.options.shapeOptions.fill) {
            this.options.shapeOptions.contour = true;
        }
        if (this.isDrawing) {
            this.origin = this.getPagePositionFromMouse(event);
            this.target = this.getPagePositionFromMouse(event);
        }
    }
    // Mouse up function: enregistre les coordonnees du mouseUp, et update le canvas de base.
    onMouseUp(event) {
        if (this.isDrawing) {
            this.target = this.getPagePositionFromMouse(event);
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.isDrawing = false;
            this.updateBase();
        }
    }
    // Update le previewCtx et le target à chaque mouvement si le dessin d'un rectangle est commencé
    onMouseMove(event) {
        if (this.isDrawing) {
            this.target = this.getPagePositionFromMouse(event);
            this.center.x = this.origin.x + (this.target.x - this.origin.x) / 2;
            this.center.y = this.origin.y + Math.sign(this.target.y - this.origin.y) * this.radius;
            this.verticesCoords = [];
            this.calculateRadius();
            this.getPolygonePoints();
            this.updatePreview();
        }
    }
    // Calcul du rayon du cercle
    calculateRadius() {
        this.radius = Math.abs((this.target.x - this.origin.x) / 2);
        if (this.options.shapeOptions.contour) {
            this.circleRadius = this.radius + this.options.size / 2;
        }
        else {
            this.circleRadius = this.radius;
        }
    }
    // update la liste des coordonnees des sommets du polygone
    getPolygonePoints() {
        const angleDiff = (2 * Math.PI) / this.options.shapeOptions.nbVertices;
        let currentCoordsX;
        let currentCoordsY;
        for (let i = 0; i < this.options.shapeOptions.nbVertices + 1; i++) {
            let currentAngle;
            if (this.target.y - this.origin.y < 0) {
                currentAngle = angleDiff * i - Math.PI / 2;
            }
            else {
                currentAngle = angleDiff * i + Math.PI / 2;
            }
            currentCoordsX = this.center.x + this.radius * Math.cos(currentAngle);
            currentCoordsY = this.center.y + this.radius * Math.sin(currentAngle);
            this.verticesCoords[i] = { x: currentCoordsX, y: currentCoordsY };
        }
    }
    drawPolygone(ctx, nbVertices, verticesCoords, fill, contour, size, primaryColor, secondaryColor) {
        ctx.lineWidth = size;
        ctx.lineJoin = 'round';
        ctx.fillStyle = primaryColor;
        ctx.strokeStyle = secondaryColor;
        ctx.setLineDash([]);
        if (nbVertices >= _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].DEFAULT_VERTICES_NUMBER && nbVertices <= _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].MAX_VERTICES_NUMBER) {
            const shape = new Path2D();
            const shapeFill = new Path2D();
            const vertices = contour ? this.findIntersectionPoints(verticesCoords, size) : verticesCoords;
            ctx.beginPath();
            if (fill) {
                if (vertices.length > 1) {
                    for (const point of vertices) {
                        shapeFill.lineTo(point.x, point.y);
                    }
                }
                shapeFill.closePath();
                ctx.fill(shapeFill, 'evenodd');
                if (!contour) {
                    ctx.fill(shape, 'evenodd');
                }
            }
            if (contour) {
                for (const point of verticesCoords) {
                    shape.lineTo(point.x, point.y);
                }
                shape.closePath();
                ctx.stroke(shape);
            }
        }
    }
    // dessin du perimetre circulaire
    drawCircularPerimeter() {
        this.drawingService.previewCtx.beginPath();
        if (this.isDrawing) {
            this.drawingService.previewCtx.strokeStyle = 'grey';
            this.drawingService.previewCtx.lineWidth = _app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].PERIM_LINEWIDTH;
            this.drawingService.previewCtx.setLineDash([_app_shared_global__WEBPACK_IMPORTED_MODULE_6__["Global"].PERIM_LINEDASH]);
            // Cercle
            this.drawingService.previewCtx.ellipse(this.center.x, this.center.y, this.circleRadius, this.circleRadius, 0, 0, 2 * Math.PI);
            this.drawingService.previewCtx.stroke();
        }
        this.drawingService.previewCtx.closePath();
    }
    distanceBetweenPoints(point1, point2) {
        const a = Math.pow(point1.x - point2.x, 2);
        const b = Math.pow(point1.y - point2.y, 2);
        return Math.sqrt(a + b);
    }
    isInverted(vertices2) {
        const newDist = this.distanceBetweenPoints(vertices2[0], vertices2[1]);
        if (Math.round(newDist) === 0) {
            this.breakPointRadius = this.circleRadius;
        }
        return this.breakPointRadius >= this.circleRadius;
    }
    findIntersectionPoints(vertices, size) {
        const lineArray = [];
        let verticesPoints = [];
        for (let i = 0; i < vertices.length - 1; i++) {
            lineArray.push(new _app_classes_math_line__WEBPACK_IMPORTED_MODULE_1__["Line"](vertices[i], vertices[i + 1], size / 2));
        }
        let point1;
        let point2;
        let point3;
        let point4;
        for (let i = 0; i < lineArray.length; i++) {
            point1 = lineArray[i].getNewPoint(lineArray[i].initPoint);
            point2 = lineArray[i].getNewPoint(lineArray[i].finalPoint);
            let intersectPoint = {};
            if (i === lineArray.length - 1) {
                point3 = lineArray[0].getNewPoint(lineArray[0].initPoint);
                point4 = lineArray[0].getNewPoint(lineArray[0].finalPoint);
                const intersectP = lineArray[0].intersection(point1, point2, point3, point4);
                verticesPoints.push(intersectP);
            }
            else {
                point3 = lineArray[i + 1].getNewPoint(lineArray[i + 1].initPoint);
                point4 = lineArray[i + 1].getNewPoint(lineArray[i + 1].finalPoint);
            }
            intersectPoint = lineArray[0].intersection(point1, point2, point3, point4);
            verticesPoints.push(intersectPoint);
        }
        if (this.isInverted(verticesPoints)) {
            verticesPoints = [];
        }
        else {
            verticesPoints.push(verticesPoints[0]);
        }
        return verticesPoints;
    }
}
PolygoneService.ɵfac = function PolygoneService_Factory(t) { return new (t || PolygoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"])); };
PolygoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PolygoneService, factory: PolygoneService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolygoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/rectangle.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/tools/rectangle.service.ts ***!
  \*****************************************************/
/*! exports provided: RectangleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleService", function() { return RectangleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");








class RectangleService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    // Le constructeur
    constructor(drawingService) {
        super(drawingService);
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('rectangle', 'Rectangle', '1');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](0);
        this.shiftDown = false;
    }
    // Méthode qui check si shift est pesé et update le previewCtx
    handleCommand(command) {
        if (!this.isDrawing) {
            this.shiftDown = false;
            return;
        }
        if (command.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].SHIFT) {
            this.shiftDown = !this.shiftDown;
            this.updatePreview();
        }
        else if (command.key === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Command"].ESCAPE) {
            this.isDrawing = false;
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
        }
    }
    // Update du previewCtx. Dessine un carré si shift est pesé.
    updatePreview() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        if (this.shiftDown) {
            this.drawSquare(this.drawingService.previewCtx, this.origin, this.target, this.options, this.drawingService.primaryColor, this.drawingService.secondaryColor);
        }
        else {
            this.drawRectangle(this.drawingService.previewCtx, this.origin, this.target, this.options, this.drawingService.primaryColor, this.drawingService.secondaryColor);
        }
    }
    // Update du baseCtx. Dessine un carré si shift est pesé.
    updateBase() {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        const options = Object.assign({}, this.options);
        options.shapeOptions = Object.assign({}, this.options.shapeOptions);
        const target = Object.assign({}, this.target);
        const origin = Object.assign({}, this.origin);
        const pColor = this.drawingService.primaryColor;
        const sColor = this.drawingService.secondaryColor;
        const funcSquare = () => {
            this.drawSquare(this.drawingService.baseCtx, origin, target, options, pColor, sColor);
        };
        const funcRect = () => {
            this.drawRectangle(this.drawingService.baseCtx, origin, target, options, pColor, sColor);
        };
        if (this.shiftDown) {
            funcSquare();
            this.drawingService.addAction(funcSquare);
        }
        else {
            funcRect();
            this.drawingService.addAction(funcRect);
        }
    }
    // Mouse down function: enregistre les coordonnees du click et indique que le dessin du rectangle est commencé;
    // Donne la position de son origine et reset la position du target
    onMouseDown(event) {
        this.isDrawing = event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["MouseButton"].Left;
        if (!this.options.shapeOptions.contour && !this.options.shapeOptions.fill) {
            this.options.shapeOptions.contour = true;
        }
        if (this.isDrawing) {
            this.origin = this.getPagePositionFromMouse(event);
            this.target = this.getPagePositionFromMouse(event);
        }
    }
    // Mouse up function: enregistre les coordonnees du mouseUp, et update le canvas de base.
    onMouseUp(event) {
        event.preventDefault();
        if (this.isDrawing) {
            this.target = this.getPagePositionFromMouse(event);
            this.updateBase();
        }
        this.isDrawing = false;
    }
    // Update le previewCtx et le target à chaque mouvement si le dessin d'un rectangle est commencé
    onMouseMove(event) {
        if (this.isDrawing) {
            this.target = this.getPagePositionFromMouse(event);
            this.updatePreview();
        }
    }
    getRectangleCenterCoord(origin, target) {
        let y = 0;
        let x = 0;
        if (origin.y > target.y) {
            y = (origin.y - target.y) / 2 + target.y;
        }
        else {
            y = (target.y - origin.y) / 2 + origin.y;
        }
        if (origin.x > target.x) {
            x = (origin.x - target.x) / 2 + target.x;
        }
        else {
            x = (target.x - origin.x) / 2 + origin.x;
        }
        return { x, y };
    }
    getFillPoints(origin, target, options) {
        const center = this.getRectangleCenterCoord(origin, target);
        const newOrigin = {};
        const newTarget = {};
        if (Math.abs(origin.x - target.x) <= options.size || Math.abs(origin.y - target.y) <= options.size) {
            return {};
        }
        if (origin.x > center.x) {
            newOrigin.x = origin.x - options.size / 2;
            newTarget.x = target.x + options.size / 2;
        }
        else {
            newOrigin.x = origin.x + options.size / 2;
            newTarget.x = target.x - options.size / 2;
        }
        if (origin.y > center.y) {
            newOrigin.y = origin.y - options.size / 2;
            newTarget.y = target.y + options.size / 2;
        }
        else {
            newOrigin.y = origin.y + options.size / 2;
            newTarget.y = target.y - options.size / 2;
        }
        return [newOrigin, newTarget];
    }
    // Dessin du rectangle sur le preview durant le drag and drop
    drawRectangle(ctx, origin, target, options, color, colorSec) {
        // Dessin du preview en fonction du style désiré
        ctx.strokeStyle = colorSec;
        ctx.lineWidth = options.size;
        ctx.lineCap = 'square';
        ctx.lineJoin = 'miter';
        ctx.fillStyle = color;
        if (options.shapeOptions.contour) {
            ctx.strokeRect(origin.x, origin.y, target.x - origin.x, target.y - origin.y);
        }
        ctx.fillStyle = color;
        if (options.shapeOptions.fill) {
            let newOrigin = {};
            let newTarget = {};
            const pointsVec = this.getFillPoints(origin, target, options);
            newOrigin = pointsVec.length === 2 ? pointsVec[0] : {};
            newTarget = pointsVec.length === 2 ? pointsVec[1] : {};
            ctx.fillRect(newOrigin.x, newOrigin.y, newTarget.x - newOrigin.x, newTarget.y - newOrigin.y);
        }
    }
    // Dessin du carré sur le preview durant le drag and drop
    drawSquare(ctx, origin, target, options, color, colorSec) {
        // Dessin du preview durant le drag and drop
        ctx.fillStyle = color;
        ctx.lineCap = 'square';
        ctx.lineJoin = 'miter';
        ctx.strokeStyle = colorSec;
        ctx.lineWidth = options.size;
        ctx.strokeStyle = colorSec;
        ctx.lineWidth = options.size;
        if (options.shapeOptions.contour) {
            ctx.strokeRect(origin.x, origin.y, target.x - origin.x, Math.sign(target.y - origin.y) * Math.abs(target.x - origin.x));
        }
        if (options.shapeOptions.fill) {
            let newOrigin = {};
            let newTarget = {};
            const pointsVec = this.getFillPoints(origin, target, options);
            newOrigin = pointsVec.length === 2 ? pointsVec[0] : {};
            newTarget = pointsVec.length === 2 ? pointsVec[1] : {};
            ctx.fillRect(newOrigin.x, newOrigin.y, newTarget.x - newOrigin.x, Math.sign(newTarget.y - newOrigin.y) * Math.abs(newTarget.x - newOrigin.x));
        }
    }
}
RectangleService.ɵfac = function RectangleService_Factory(t) { return new (t || RectangleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
RectangleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RectangleService, factory: RectangleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/spray.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tools/spray.service.ts ***!
  \*************************************************/
/*! exports provided: SprayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprayService", function() { return SprayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");








class SprayService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.pointPath = [];
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('spray', 'Aérosol', 'a');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](undefined, false, true);
        this.clearPath();
    }
    onMouseDown(event) {
        this.isDrawing = event.button === _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["MouseButton"].Left;
        if (this.isCanvasReady()) {
            this.mouseDownCoord = this.getPagePositionFromMouse(event);
            this.spray = setInterval(() => {
                this.updateView(this.mouseDownCoord, this.drawingService.previewCtx, this.pathData);
            }, _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].TIME_DELAY);
        }
    }
    updateView(lastPoint, ctx, path) {
        path.push(lastPoint);
        this.generateSpray(lastPoint);
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        const options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](undefined, false, true);
        options.sprayOptions = Object.assign({}, this.options.sprayOptions);
        options.size = this.options.size;
        this.drawLine(ctx, this.pointPath, options, this.drawingService.primaryColor);
    }
    generateSpray(point) {
        const radius = this.options.sprayOptions.spraySize;
        const dotsPerTick = (this.options.sprayOptions.sprayTime * _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].TIME_DELAY) / _app_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].SECOND_MS;
        for (let i = 0; i < dotsPerTick; i++) {
            const offSet = this.randomPoint(radius, point);
            this.pointPath.push(offSet);
        }
    }
    randomPoint(radius, origin) {
        for (;;) {
            const x = Math.random() * 2 - 1;
            const y = Math.random() * 2 - 1;
            if (x * x + y * y <= 1) {
                return { x: radius * x + origin.x, y: radius * y + origin.y };
            }
        }
    }
    onMouseUp(event) {
        clearInterval(this.spray);
        if (this.isDrawing) {
            const mousePosition = this.getPagePositionFromMouse(event);
            this.updateView(mousePosition, this.drawingService.baseCtx, this.pathData);
            const path = [...this.pointPath];
            const info = { options: Object.assign({}, this.options), color: this.drawingService.primaryColor };
            info.options.sprayOptions = Object.assign({}, this.options.sprayOptions);
            const func = () => {
                this.drawLine(this.drawingService.baseCtx, path, info.options, info.color);
            };
            this.drawingService.addAction(func);
        }
        this.isDrawing = false;
        this.clearPath();
    }
    onMouseMove(event) {
        this.drawingService.previewCtx.canvas.style.cursor = 'crosshair';
        if (this.isCanvasReady()) {
            const mousePosition = this.getPagePositionFromMouse(event);
            this.mouseDownCoord = mousePosition;
        }
    }
    isCanvasReady() {
        return this.isDrawing;
    }
    drawLine(ctx, path, options, color) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.fillStyle = color;
        ctx.beginPath();
        for (const pts of path) {
            ctx.fillRect(pts.x, pts.y, options.sprayOptions.dropletSize, options.sprayOptions.dropletSize);
        }
    }
    clearPath() {
        this.pathData = [];
        this.pointPath = [];
    }
}
SprayService.ɵfac = function SprayService_Factory(t) { return new (t || SprayService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"])); };
SprayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SprayService, factory: SprayService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SprayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/stamp.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tools/stamp.service.ts ***!
  \*************************************************/
/*! exports provided: StampService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampService", function() { return StampService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");








class StampService extends _app_classes_tool__WEBPACK_IMPORTED_MODULE_1__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.DEFAULT_ORIENTATION_INCREMENT = 15;
        this.MAX_ORIENTATION = 360;
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_2__["ToolInfo"]('stamp', 'Stamp', 'd');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_3__["ToolOption"](undefined, false, false, _app_shared_global__WEBPACK_IMPORTED_MODULE_4__["Global"].UNDEFINED_SIZE, false, false, false, true);
    }
    onMouseMove(event) {
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        const pos = this.getPagePositionFromMouse(event);
        if (pos.x < 0 || pos.x >= this.drawingService.canvasSize.x || pos.y < 0 || pos.y >= this.drawingService.canvasSize.y)
            return;
        const [image, size] = this.getImageInfo();
        this.drawImage(this.drawingService.previewCtx, image, pos, size, this.options.stampOptions.orientation);
    }
    onMouseDown(event) {
        if (event.button !== _app_shared_global__WEBPACK_IMPORTED_MODULE_4__["MouseButton"].Left)
            return;
        this.drawingService.clearCanvas(this.drawingService.previewCtx);
        const [image, size] = this.getImageInfo();
        const pos = this.getPagePositionFromMouse(event);
        const orientation = this.options.stampOptions.orientation;
        const drawImageCallable = () => {
            this.drawImage(this.drawingService.baseCtx, image, pos, size, orientation);
        };
        drawImageCallable();
        this.drawingService.addAction(drawImageCallable);
    }
    onWheel(event) {
        let incrementFactor = event.altKey ? 1 : this.DEFAULT_ORIENTATION_INCREMENT;
        // tslint:disable-next-line:no-magic-numbers
        incrementFactor *= event.deltaY > 0 ? 1 : -1;
        const oldOrientation = this.options.stampOptions.orientation;
        const newOrientation = oldOrientation - incrementFactor;
        if (newOrientation < 0) {
            this.options.stampOptions.orientation = 0;
        }
        else if (newOrientation > this.MAX_ORIENTATION) {
            this.options.stampOptions.orientation = this.MAX_ORIENTATION;
        }
        else {
            this.options.stampOptions.orientation = newOrientation;
        }
        if (this.options.stampOptions.orientation !== oldOrientation)
            this.onMouseMove(event);
    }
    getImageInfo() {
        const image = new Image();
        image.src = this.options.stampOptions.stampSrc;
        const size = {
            x: image.width * this.options.stampOptions.scalingFactor,
            y: image.height * this.options.stampOptions.scalingFactor,
        };
        return [image, size];
    }
    drawImage(ctx, image, pos, size, orientation) {
        ctx.save();
        ctx.translate(pos.x, pos.y);
        // disable pour ecrire 180 degres qui ne changera jamais
        // tslint:disable-next-line:no-magic-numbers
        ctx.rotate((orientation * Math.PI) / 180);
        ctx.drawImage(image, -size.x / 2, -size.y / 2, size.x, size.y);
        ctx.restore();
    }
}
StampService.ɵfac = function StampService_Factory(t) { return new (t || StampService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"])); };
StampService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StampService, factory: StampService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StampService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/text.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/tools/text.service.ts ***!
  \************************************************/
/*! exports provided: TextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextService", function() { return TextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/classes/tool-info */ "./src/app/classes/tool-info.ts");
/* harmony import */ var _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/classes/tool-option */ "./src/app/classes/tool-option.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var src_app_classes_tool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/tool */ "./src/app/classes/tool.ts");
/* harmony import */ var src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");








class TextService extends src_app_classes_tool__WEBPACK_IMPORTED_MODULE_4__["Tool"] {
    constructor(drawingService) {
        super(drawingService);
        this.DEFAULT_INDICATOR_SIZE = 4;
        // tslint:disable-next-line:no-magic-numbers
        this.CURSOR_HEIGHT_FACTOR = 2 / 3;
        this.info = new _app_classes_tool_info__WEBPACK_IMPORTED_MODULE_1__["ToolInfo"]('text', 'Texte', 't');
        this.options = new _app_classes_tool_option__WEBPACK_IMPORTED_MODULE_2__["ToolOption"](undefined, false, false, _app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].UNDEFINED_SIZE, false, false, true);
        this.isDrawing = false;
        this.currentPos = 0;
        this.text = '';
        this.commandMap = new Map();
        this.onMouseDown = this.onMouseDown.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.fontChanged = this.fontChanged.bind(this);
        this.commandMap.set('Backspace', () => {
            this.backspaceEvent();
        });
        this.commandMap.set('Delete', () => {
            this.deleteEvent();
        });
        this.commandMap.set('ArrowRight', () => {
            this.arrowRightEvent();
        });
        this.commandMap.set('ArrowLeft', () => {
            this.arrowLeftEvent();
        });
        this.commandMap.set('ArrowUp', () => {
            this.arrowUpEvent();
        });
        this.commandMap.set('ArrowDown', () => {
            this.arrowDownEvent();
        });
        this.commandMap.set('Escape', () => {
            this.escapeEvent();
        });
    }
    onMouseDown(event, preventDrawing) {
        if (!this.isDrawing) {
            event.stopPropagation();
            this.isDrawing = true;
            this.textPos = super.getPagePositionFromMouse(event);
            this.drawPreview();
            document.body.addEventListener('keydown', this.handleKeyDown);
            document.body.addEventListener('mousedown', this.onMouseDown);
        }
        else if (this.shouldEndEditing(event)) {
            if (!preventDrawing && this.text.length > 0) {
                const text = this.text;
                const textPos = this.textPos;
                const textOptions = Object.assign({}, this.options.textOptions);
                const color = this.drawingService.primaryColor;
                const drawTextCallable = () => {
                    this.drawText(this.drawingService.baseCtx, text, textPos, textOptions, color);
                };
                drawTextCallable();
                this.drawingService.addAction(drawTextCallable);
            }
            this.isDrawing = false;
            this.drawingService.clearCanvas(this.drawingService.previewCtx);
            this.text = '';
            this.currentPos = 0;
            document.body.removeEventListener('keydown', this.handleKeyDown);
            document.body.removeEventListener('mousedown', this.onMouseDown);
        }
        else {
            document.body.addEventListener('mouseup', this.fontChanged);
        }
    }
    fontChanged() {
        setTimeout(() => {
            this.drawPreview();
        });
        document.body.removeEventListener('mouseup', this.fontChanged);
    }
    shouldEndEditing(event) {
        let shouldEnd = true;
        const attributesPanel = document.getElementById('attributes-panel');
        const colorPicker = document.getElementsByClassName('color-picker')[0];
        shouldEnd =
            !(event.x >= attributesPanel.offsetLeft &&
                event.x <= attributesPanel.offsetLeft + attributesPanel.offsetWidth &&
                event.y >= attributesPanel.offsetTop &&
                event.y <= attributesPanel.offsetTop + attributesPanel.offsetHeight) && colorPicker === undefined;
        return shouldEnd;
    }
    handleKeyDown(event) {
        if (this.commandMap.has(event.key)) {
            this.commandMap.get(event.key)();
        }
        else if (!this.isPreventedKey(event)) {
            const char = event.key === 'Enter' ? '\n' : event.key;
            this.text = this.text.slice(0, this.currentPos) + char + this.text.slice(this.currentPos, this.text.length);
            this.currentPos++;
        }
        this.drawPreview();
    }
    isPreventedKey(event) {
        const preventedKeys = [
            'CapsLock',
            'Shift',
            'Meta',
            'Alt',
            'Control',
            'Tab',
            'AltGraph',
            'ContextMenu',
            'Dead',
            'F1',
            'F2',
            'F3',
            'F4',
            'F5',
            'F6',
            'F7',
            'F8',
            'F9',
            'F10',
            'F11',
            'F12',
        ];
        return preventedKeys.includes(event.key);
    }
    backspaceEvent() {
        const newText = this.text.slice(0, this.currentPos - 1) + this.text.slice(this.currentPos, this.text.length);
        if (newText.length < this.text.length) {
            this.text = newText;
            this.currentPos--;
        }
    }
    deleteEvent() {
        this.text = this.text.slice(0, this.currentPos) + this.text.slice(this.currentPos + 1, this.text.length);
    }
    arrowRightEvent() {
        if (this.currentPos + 1 <= this.text.length)
            this.currentPos++;
    }
    arrowLeftEvent() {
        if (this.currentPos - 1 >= 0)
            this.currentPos--;
    }
    arrowUpEvent() {
        const lines = this.text.split('\n');
        const pos = this.getLinePos();
        if (pos.x - 1 >= 0) {
            switch (this.options.textOptions.alignment) {
                case 'left':
                    this.currentPos = this.currentPos - (pos.y + Math.max(lines[pos.x - 1].slice(pos.y).length, 0) + 1);
                    break;
                case 'center':
                    const offset = pos.y - Math.floor(lines[pos.x].length / 2);
                    this.currentPos =
                        this.currentPos -
                            (lines[pos.x].slice(0, lines[pos.x].length / 2 + offset).length +
                                lines[pos.x - 1].slice(Math.max(Math.floor(lines[pos.x - 1].length / 2) + offset, 0)).length +
                                1);
                    break;
                case 'right':
                    this.currentPos = this.currentPos - (pos.y + Math.min(lines[pos.x].slice(pos.y).length, lines[pos.x - 1].length) + 1);
                    break;
            }
        }
    }
    arrowDownEvent() {
        const lines = this.text.split('\n');
        const pos = this.getLinePos();
        if (pos.x + 1 < lines.length)
            switch (this.options.textOptions.alignment) {
                case 'left':
                    this.currentPos = this.currentPos + (Math.max(lines[pos.x].slice(pos.y).length, 0) + lines[pos.x + 1].slice(0, pos.y).length + 1);
                    break;
                case 'center':
                    const offset = pos.y - Math.floor(lines[pos.x].length / 2);
                    this.currentPos =
                        this.currentPos +
                            lines[pos.x].slice(lines[pos.x].length / 2 + offset).length +
                            lines[pos.x + 1].slice(0, Math.max(Math.floor(lines[pos.x + 1].length / 2) + offset, 0)).length +
                            1;
                    break;
                case 'right':
                    this.currentPos =
                        this.currentPos +
                            lines[pos.x].slice(pos.y).length +
                            Math.max(lines[pos.x + 1].length - lines[pos.x].slice(pos.y).length, 0) +
                            1;
                    break;
            }
    }
    escapeEvent() {
        this.onMouseDown(new MouseEvent('mousedown'), true);
    }
    getLinePos() {
        const lines = this.text.split('\n');
        let returnValues = { x: _app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].UNDEFINED_SIZE, y: _app_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].UNDEFINED_SIZE };
        let linePos = 0;
        lines.forEach((line, index) => {
            const lineLength = line.length;
            if (this.currentPos >= linePos && this.currentPos <= linePos + lineLength) {
                returnValues = { x: index, y: this.currentPos - linePos };
            }
            linePos += lineLength + 1;
        });
        return returnValues;
    }
    drawPreview() {
        const ctx = this.drawingService.previewCtx;
        this.drawingService.clearCanvas(ctx);
        ctx.fillStyle = 'black';
        ctx.fillRect(this.textPos.x - this.DEFAULT_INDICATOR_SIZE / 2, this.textPos.y - this.DEFAULT_INDICATOR_SIZE / 2, this.DEFAULT_INDICATOR_SIZE, this.DEFAULT_INDICATOR_SIZE);
        const cursorPos = this.getLinePos();
        this.drawText(ctx, this.text, this.textPos, this.options.textOptions, this.drawingService.primaryColor, cursorPos);
    }
    drawText(ctx, text, pos, textOptions, color, cursorPos) {
        ctx.fillStyle = color;
        ctx.textAlign = textOptions.alignment;
        let boldItalic = textOptions.isItalic ? 'italic ' : '';
        boldItalic += textOptions.isBold ? 'bold ' : '';
        ctx.font = boldItalic + ' ' + textOptions.fontSize + 'px ' + textOptions.font;
        const lines = text.split('\n');
        let totalHeight = 0;
        let alignmentX = 0;
        if (textOptions.alignment !== 'left') {
            lines.forEach((line) => {
                const textWidth = ctx.measureText(line).width;
                if (textWidth > alignmentX)
                    alignmentX = textWidth;
            });
            if (textOptions.alignment === 'center')
                alignmentX = alignmentX / 2;
        }
        lines.forEach((line, index) => {
            const fontMetrics = ctx.measureText(line);
            const lineHeight = fontMetrics.fontBoundingBoxAscent + fontMetrics.fontBoundingBoxDescent;
            if (index > 0) {
                totalHeight += lineHeight;
            }
            if (cursorPos !== undefined && cursorPos.x === index) {
                const cursor = { x: 0, y: pos.y + totalHeight };
                switch (textOptions.alignment) {
                    case 'left':
                        cursor.x = pos.x + alignmentX + ctx.measureText(line.slice(0, cursorPos.y)).width;
                        break;
                    case 'center':
                        cursor.x = pos.x + alignmentX + ctx.measureText(line.slice(0, cursorPos.y)).width - ctx.measureText(line).width / 2;
                        break;
                    case 'right':
                        cursor.x = pos.x + alignmentX - ctx.measureText(line.slice(cursorPos.y)).width;
                        break;
                }
                ctx.save();
                ctx.fillStyle = 'black';
                ctx.fillRect(cursor.x, cursor.y, 1, -lineHeight * this.CURSOR_HEIGHT_FACTOR);
                ctx.restore();
            }
            ctx.fillText(line, pos.x + alignmentX, pos.y + totalHeight);
        });
    }
}
TextService.ɵfac = function TextService_Factory(t) { return new (t || TextService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"])); };
TextService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TextService, factory: TextService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: src_app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_5__["DrawingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tools/tool.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/tools/tool.service.ts ***!
  \************************************************/
/*! exports provided: ToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolService", function() { return ToolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_selection_surface_selection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services//selection/surface-selection.service */ "./src/app/services/selection/surface-selection.service.ts");
/* harmony import */ var _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/clipboard/clipboard.service */ "./src/app/services/clipboard/clipboard.service.ts");
/* harmony import */ var _app_services_commands_command_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/commands/command-manager.service */ "./src/app/services/commands/command-manager.service.ts");
/* harmony import */ var _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/drawing/drawing.service */ "./src/app/services/drawing/drawing.service.ts");
/* harmony import */ var _app_services_grid_grid_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/grid/grid.service */ "./src/app/services/grid/grid.service.ts");
/* harmony import */ var _app_services_grid_magnet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/grid/magnet.service */ "./src/app/services/grid/magnet.service.ts");
/* harmony import */ var _app_services_selection_ellipse_selection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/selection/ellipse-selection.service */ "./src/app/services/selection/ellipse-selection.service.ts");
/* harmony import */ var _app_services_selection_lasso_selection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/selection/lasso-selection.service */ "./src/app/services/selection/lasso-selection.service.ts");
/* harmony import */ var _app_services_selection_rectangle_selection_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/selection/rectangle-selection.service */ "./src/app/services/selection/rectangle-selection.service.ts");
/* harmony import */ var _app_services_selection_resize_selection_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/selection/resize-selection.service */ "./src/app/services/selection/resize-selection.service.ts");
/* harmony import */ var _app_services_selection_shift_selection_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/selection/shift-selection.service */ "./src/app/services/selection/shift-selection.service.ts");
/* harmony import */ var _app_shared_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ellipse_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ellipse.service */ "./src/app/services/tools/ellipse.service.ts");
/* harmony import */ var _eraser_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./eraser.service */ "./src/app/services/tools/eraser.service.ts");
/* harmony import */ var _eye_dropper_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./eye-dropper.service */ "./src/app/services/tools/eye-dropper.service.ts");
/* harmony import */ var _fill_bucket_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fill-bucket.service */ "./src/app/services/tools/fill-bucket.service.ts");
/* harmony import */ var _line_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./line.service */ "./src/app/services/tools/line.service.ts");
/* harmony import */ var _pencil_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pencil.service */ "./src/app/services/tools/pencil.service.ts");
/* harmony import */ var _polygone_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./polygone.service */ "./src/app/services/tools/polygone.service.ts");
/* harmony import */ var _rectangle_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rectangle.service */ "./src/app/services/tools/rectangle.service.ts");
/* harmony import */ var _spray_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./spray.service */ "./src/app/services/tools/spray.service.ts");
/* harmony import */ var _stamp_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./stamp.service */ "./src/app/services/tools/stamp.service.ts");
/* harmony import */ var _text_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./text.service */ "./src/app/services/tools/text.service.ts");














































class ToolService {
    constructor(pencilService, lineService, eraserService, rectangleService, ellipseService, polygoneService, rectangleSelectionService, ellipseSelectionService, surfaceSelectionService, shiftSelectionService, resizeSelectionService, sprayService, eyeDropperService, fillService, gridService, lassoSelectionService, textService, clipboardService, stampService, magnetService) {
        this.pencilService = pencilService;
        this.lineService = lineService;
        this.eraserService = eraserService;
        this.rectangleService = rectangleService;
        this.ellipseService = ellipseService;
        this.polygoneService = polygoneService;
        this.rectangleSelectionService = rectangleSelectionService;
        this.ellipseSelectionService = ellipseSelectionService;
        this.surfaceSelectionService = surfaceSelectionService;
        this.shiftSelectionService = shiftSelectionService;
        this.resizeSelectionService = resizeSelectionService;
        this.sprayService = sprayService;
        this.eyeDropperService = eyeDropperService;
        this.fillService = fillService;
        this.gridService = gridService;
        this.lassoSelectionService = lassoSelectionService;
        this.textService = textService;
        this.clipboardService = clipboardService;
        this.stampService = stampService;
        this.magnetService = magnetService;
        this.toolMap = new Map();
        this.changeLimitSizeCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_13__["BehaviorSubject"](0);
        this.changeLimitSize$ = this.changeLimitSizeCallSource.asObservable();
        this.changeCurrentSelectionModeCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_13__["BehaviorSubject"](new _app_services_selection_rectangle_selection_service__WEBPACK_IMPORTED_MODULE_9__["RectangleSelectionService"](new _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"](new _app_services_commands_command_manager_service__WEBPACK_IMPORTED_MODULE_3__["CommandManagerService"]()), new _app_services_selection_shift_selection_service__WEBPACK_IMPORTED_MODULE_11__["ShiftSelectionService"](new _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"](new _app_services_commands_command_manager_service__WEBPACK_IMPORTED_MODULE_3__["CommandManagerService"]()), new _app_services_grid_magnet_service__WEBPACK_IMPORTED_MODULE_6__["MagnetService"](new _app_services_grid_grid_service__WEBPACK_IMPORTED_MODULE_5__["GridService"](new _app_services_drawing_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"](new _app_services_commands_command_manager_service__WEBPACK_IMPORTED_MODULE_3__["CommandManagerService"]()))))));
        this.changeCurrentSelectionMode$ = this.changeCurrentSelectionModeCallSource.asObservable();
        this.toolMap.set(this.pencilService.info.shortcut, this.pencilService);
        this.toolMap.set(this.lineService.info.shortcut, this.lineService);
        this.toolMap.set(this.eraserService.info.shortcut, this.eraserService);
        this.toolMap.set(this.rectangleService.info.shortcut, this.rectangleService);
        this.toolMap.set(this.ellipseService.info.shortcut, this.ellipseService);
        this.toolMap.set(this.polygoneService.info.shortcut, this.polygoneService);
        this.toolMap.set(this.rectangleSelectionService.info.shortcut, this.rectangleSelectionService);
        this.toolMap.set(this.ellipseSelectionService.info.shortcut, this.ellipseSelectionService);
        this.toolMap.set(this.surfaceSelectionService.info.shortcut, this.surfaceSelectionService);
        this.toolMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_12__["Global"].SHIFT_SELECTION_SHORTCUT, this.shiftSelectionService);
        this.toolMap.set(_app_shared_global__WEBPACK_IMPORTED_MODULE_12__["Global"].RESIZE_SELECTION_SHORTCUT, this.resizeSelectionService);
        this.toolMap.set(this.sprayService.info.shortcut, this.sprayService);
        this.toolMap.set(this.eyeDropperService.info.shortcut, this.eyeDropperService);
        this.toolMap.set(this.fillService.info.shortcut, this.fillService);
        this.toolMap.set(this.gridService.info.shortcut, this.gridService);
        this.toolMap.set(this.lassoSelectionService.info.shortcut, this.lassoSelectionService);
        this.toolMap.set(this.textService.info.shortcut, this.textService);
        this.toolMap.set(this.stampService.info.shortcut, this.stampService);
        this.currentTool = pencilService;
    }
    changeTool(toolKey) {
        if (toolKey === 'g') {
            if (this.isToolActive(toolKey)) {
                this.gridService.toggleGrid();
                return;
            }
            this.gridService.toggleGrid();
        }
        else if (toolKey === 'm') {
            this.magnetService.toggleIsActive();
            return;
        }
        if (this.currentTool.info.shortcut === toolKey || !this.toolMap.has(toolKey))
            return;
        if (toolKey !== _app_shared_global__WEBPACK_IMPORTED_MODULE_12__["Global"].SHIFT_SELECTION_SHORTCUT && toolKey !== _app_shared_global__WEBPACK_IMPORTED_MODULE_12__["Global"].RESIZE_SELECTION_SHORTCUT) {
            if (this.currentTool.info.name === 'shift-selection') {
                this.currentTool.endSelection();
            }
            else if (this.currentTool.info.name === 'resize-selection') {
                this.currentTool.endSelection();
            }
            else if ('placeBox$' in this.currentTool) {
                this.currentTool.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_12__["Global"].RESET_VECTOR);
            }
        }
        this.currentTool = this.toolMap.get(toolKey);
        this.currentTool.info.name === 'eraser'
            ? this.callChangeLimitSize(_app_shared_global__WEBPACK_IMPORTED_MODULE_12__["Global"].ERASER_MIN_TRAIL_SIZE)
            : this.callChangeLimitSize(_app_shared_global__WEBPACK_IMPORTED_MODULE_12__["Global"].MIN_TOOL_SIZE);
        if ('placeBox$' in this.currentTool) {
            this.currentTool.callPlaceBox(_app_shared_global__WEBPACK_IMPORTED_MODULE_12__["Global"].RESET_VECTOR);
            this.callChangeCurrentSelectionMode(this.currentTool);
        }
        // Encapsulation à revoir
        this.currentTool.getDrawingService().resetCursor(this.currentTool);
    }
    isToolActive(shortcut) {
        if (shortcut === 'g') {
            return this.gridService.options.gridOptions.isActive;
        }
        else {
            return this.currentTool.info.shortcut === shortcut;
        }
    }
    getService(shortcut) {
        return this.toolMap.get(shortcut);
    }
    updateGridSize(size) {
        this.gridService.updateSize(size);
    }
    isValidToolKey(key) {
        return this.toolMap.has(key);
    }
    handleCommand(command, isDown) {
        this.currentTool.handleCommand(command, isDown);
    }
    callChangeLimitSize(minSize) {
        this.changeLimitSizeCallSource.next(minSize);
    }
    callChangeCurrentSelectionMode(mode) {
        this.changeCurrentSelectionModeCallSource.next(mode);
    }
    hasBegunDrawing() {
        return this.currentTool.isDrawing;
    }
    magnetIsActive() {
        return this.magnetService.isActive;
    }
}
ToolService.ɵfac = function ToolService_Factory(t) { return new (t || ToolService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pencil_service__WEBPACK_IMPORTED_MODULE_19__["PencilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_line_service__WEBPACK_IMPORTED_MODULE_18__["LineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_eraser_service__WEBPACK_IMPORTED_MODULE_15__["EraserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rectangle_service__WEBPACK_IMPORTED_MODULE_21__["RectangleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ellipse_service__WEBPACK_IMPORTED_MODULE_14__["EllipseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_polygone_service__WEBPACK_IMPORTED_MODULE_20__["PolygoneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_selection_rectangle_selection_service__WEBPACK_IMPORTED_MODULE_9__["RectangleSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_selection_ellipse_selection_service__WEBPACK_IMPORTED_MODULE_7__["EllipseSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_selection_surface_selection_service__WEBPACK_IMPORTED_MODULE_1__["SurfaceSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_selection_shift_selection_service__WEBPACK_IMPORTED_MODULE_11__["ShiftSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_selection_resize_selection_service__WEBPACK_IMPORTED_MODULE_10__["ResizeSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_spray_service__WEBPACK_IMPORTED_MODULE_22__["SprayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_eye_dropper_service__WEBPACK_IMPORTED_MODULE_16__["EyeDropperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fill_bucket_service__WEBPACK_IMPORTED_MODULE_17__["FillService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_grid_grid_service__WEBPACK_IMPORTED_MODULE_5__["GridService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_selection_lasso_selection_service__WEBPACK_IMPORTED_MODULE_8__["LassoSelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_text_service__WEBPACK_IMPORTED_MODULE_24__["TextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_2__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_stamp_service__WEBPACK_IMPORTED_MODULE_23__["StampService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_grid_magnet_service__WEBPACK_IMPORTED_MODULE_6__["MagnetService"])); };
ToolService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToolService, factory: ToolService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _pencil_service__WEBPACK_IMPORTED_MODULE_19__["PencilService"] }, { type: _line_service__WEBPACK_IMPORTED_MODULE_18__["LineService"] }, { type: _eraser_service__WEBPACK_IMPORTED_MODULE_15__["EraserService"] }, { type: _rectangle_service__WEBPACK_IMPORTED_MODULE_21__["RectangleService"] }, { type: _ellipse_service__WEBPACK_IMPORTED_MODULE_14__["EllipseService"] }, { type: _polygone_service__WEBPACK_IMPORTED_MODULE_20__["PolygoneService"] }, { type: _app_services_selection_rectangle_selection_service__WEBPACK_IMPORTED_MODULE_9__["RectangleSelectionService"] }, { type: _app_services_selection_ellipse_selection_service__WEBPACK_IMPORTED_MODULE_7__["EllipseSelectionService"] }, { type: _app_services_selection_surface_selection_service__WEBPACK_IMPORTED_MODULE_1__["SurfaceSelectionService"] }, { type: _app_services_selection_shift_selection_service__WEBPACK_IMPORTED_MODULE_11__["ShiftSelectionService"] }, { type: _app_services_selection_resize_selection_service__WEBPACK_IMPORTED_MODULE_10__["ResizeSelectionService"] }, { type: _spray_service__WEBPACK_IMPORTED_MODULE_22__["SprayService"] }, { type: _eye_dropper_service__WEBPACK_IMPORTED_MODULE_16__["EyeDropperService"] }, { type: _fill_bucket_service__WEBPACK_IMPORTED_MODULE_17__["FillService"] }, { type: _app_services_grid_grid_service__WEBPACK_IMPORTED_MODULE_5__["GridService"] }, { type: _app_services_selection_lasso_selection_service__WEBPACK_IMPORTED_MODULE_8__["LassoSelectionService"] }, { type: _text_service__WEBPACK_IMPORTED_MODULE_24__["TextService"] }, { type: _app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_2__["ClipboardService"] }, { type: _stamp_service__WEBPACK_IMPORTED_MODULE_23__["StampService"] }, { type: _app_services_grid_magnet_service__WEBPACK_IMPORTED_MODULE_6__["MagnetService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/global.ts":
/*!**********************************!*\
  !*** ./src/app/shared/global.ts ***!
  \**********************************/
/*! exports provided: Global, MouseEnum, MouseButton, RGB, Shortcut, EnumAngleLigne, Command, Arrows, Fonts, stamps, ControlPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseEnum", function() { return MouseEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseButton", function() { return MouseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGB", function() { return RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shortcut", function() { return Shortcut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumAngleLigne", function() { return EnumAngleLigne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrows", function() { return Arrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fonts", function() { return Fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stamps", function() { return stamps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPoint", function() { return ControlPoint; });
class Global {
}
Global.MAX_TOOL_SIZE = 40;
Global.MIN_TOOL_SIZE = 4;
Global.ONE = 1;
Global.DEFAULT_WIDTH = 1000;
Global.DEFAULT_HEIGHT = 800;
Global.NUMBER_OF_TOOLS = 10;
Global.DUMMY_PATH = [
    {
        x: 0,
        y: 0,
    },
    {
        x: 5,
        y: 0,
    },
    {
        x: 5,
        y: 5,
    },
    {
        x: 0,
        y: 5,
    },
];
Global.DUMMY_SIZE = 10;
Global.DRAWING_CONTAINER_SIZE_BUFFER = 5;
Global.NEW_SIZE = 300;
Global.WRONG_NEW_SIZE = 100;
Global.WRONG_NEW_MOUSE_POSITION = -1000;
Global.NEW_WIDTH = 300;
Global.NEW_HEIGHT = 400;
Global.MIN_SIZE_CONDITION = 500;
Global.RAYON_MAX = 20;
Global.MIN_SIZE = 250;
Global.MIN_SIZE_WITH_PADDING = 254;
Global.PADDING_SIZE = 1;
Global.HALF_CP_SIZE = 5;
Global.END_OF_PROPERTY_NUMBER = 4;
Global.LINE_LIST = [
    [1, 1, 0],
    [1, -Global.ONE, 0],
    [1, 0, 0],
    [0, 1, 0],
];
Global.SCROLLBAR_WIDTH = 10;
Global.INCORRECT_MOUSE_EVENT_INDEX = 4;
Global.mouseMoveEvent = new MouseEvent('mousemove', {
    cancelable: false,
    view: window,
    detail: 1,
    screenX: 450,
    screenY: 50,
    clientX: 450,
    clientY: 50,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    button: 0,
    bubbles: true,
});
// Constantes pour drawing component
Global.TIMEOUT = 100;
Global.PERIM_LINEWIDTH = 2;
Global.PERIM_LINEDASH = 6;
// tslint:disable:no-magic-numbers
Global.SELECTION_LINEDASH = [5, 15];
Global.MIN_EDGES = 3;
Global.DEFAULT_RADIUS = 100;
Global.TEST_NBVERTICES = 4;
Global.DEFAULT_CENTER = { x: 150, y: 150 };
Global.TEST_RADIUS = 14.5;
Global.TEST_VERTICES = [
    { x: 200, y: 300 },
    { x: 100, y: 200 },
    { x: 200, y: 100 },
    { x: 300, y: 200 },
    { x: 200, y: 300 },
];
// constantes pour shape-options
Global.DEFAULT_VERTICES_NUMBER = 3;
Global.MAX_VERTICES_NUMBER = 12;
// constantes pour ellipse-service
Global.ELLIPSE_PERIM_LINEWIDTH = 2;
Global.ELLIPSE_PERIM_LINEDASH = 6;
// constantes pour la sélection rectange/ellipse
Global.UNDEFINED_SIZE = -1;
Global.DEFAULT_DASH_AMOUNT = 5;
Global.BOX_CP_SIZE = 5;
Global.NEGATIVE_DEFAULT_DELTA = -1;
Global.SHIFT_FACTOR = 1.5;
Global.TEST_DELTA = 25;
Global.DEFAULT_CANVAS_SIZE = 500;
Global.DEFAULT_VECTOR = { x: 0, y: 0 };
Global.RESET_VECTOR = { x: -1, y: -1 };
Global.TEST_VECTOR = { x: 100, y: 100 };
Global.TEST_TARGET_VECTOR = { x: 125, y: 125 };
Global.NEGATIVE_TEST_VECTOR = { x: -100, y: -100 };
Global.ARROW_SUBSTRING_LENGTH = 5;
Global.ARROW_NUMBER = 4;
Global.TEST_EVENT_INDEX = 11;
Global.TEST_DISTANCE = 50;
Global.N_ONE = -1;
Global.N_TWO = -2;
Global.MINUS_ONE = -1;
Global.MINUS_TWO = -2;
Global.IS_FLIPPED = { x: 1, y: 1 };
Global.UNITARY_VECTOR = { x: 1, y: 1 };
Global.SHIFT_AMOUNT = 3;
Global.CALL_AMOUNT = 3;
Global.DUMMY_POSITION = { x: 3, y: 3 };
Global.INIT_TIMER = 500;
Global.OTHER_TIMER = 100;
Global.SHIFT_SELECTION_SHORTCUT = 'shiftSelection';
Global.RESIZE_SELECTION_SHORTCUT = 'resizeSelection';
Global.COPY_SHORTCUT = 'c';
Global.CUT_SHORTCUT = 'x';
Global.PASTE_SHORTCUT = 'v';
Global.RECTANGLE_LIMIT_OFFSET = 10;
// constante pour eraser-service
Global.ERASER_MIN_TRAIL_SIZE = 5;
Global.NUMBER_OF_INTERPOLATION = 5;
Global.EXTREME_NB_OF_INTERPOLATION = 500;
Global.NUMBER_OF_PLOTLINE_CALLS = 4;
Global.TEST_PATH = [
    { x: 0, y: 0 },
    { x: 10, y: 1 },
    { x: 5, y: 1 },
    { x: 5, y: 6 },
    { x: 5, y: 3 },
];
Global.Y_AXIS_TEST_PATH = [
    { x: 0, y: 0 },
    { x: 0, y: 5 },
];
Global.INVERTED_TEST_PATH = [
    { x: 5, y: 0 },
    { x: 0, y: 0 },
];
Global.FAR_INTERPOLATION_POINTS = [
    { x: 0, y: 0 },
    { x: 1000, y: 0 },
];
Global.MOUSE_EVENTS = [
    { offsetX: 25, offsetY: 25, button: 0, buttons: 0 },
    { offsetX: 25, offsetY: 25, button: 0, buttons: 1 },
    { offsetX: 0, offsetY: 0, button: 0, buttons: 0 },
    { offsetX: 1, offsetY: 0, button: 0 },
    { offsetX: 25, offsetY: 25, button: 1 },
    { offsetX: 44, offsetY: 25, button: 1 },
    { pageX: 35, pageY: 25, button: 0 },
    { pageX: 450, pageY: 25, button: 0 },
    { pageX: 469, pageY: 25, button: 0 },
    { offsetX: 470, offsetY: 25, button: 0 },
    { pageX: 470, pageY: 25, button: 0 },
    { x: 100, y: 100, button: 0 },
];
// constantes pour le bucket fill
Global.SIZE_OF_DATA = 4;
Global.PERCENTAGE_CONST = 100;
Global.HEX_BASE = 16;
Global.RANDOM_COLOR = {
    R: 255,
    G: 187,
    B: 204,
    A: 255,
};
Global.DUMMY_TOLERANCE = 20;
// constante pour event manager
Global.REDO_EVENT = new KeyboardEvent('keydown', { key: 'z', ctrlKey: true, shiftKey: true });
Global.UNDO_EVENT = new KeyboardEvent('keydown', { key: 'z', ctrlKey: true, shiftKey: false });
Global.EXPORT_EVENT = new KeyboardEvent('keydown', { key: 'e', ctrlKey: true, shiftKey: false });
Global.CARROUSEL_EVENT = new KeyboardEvent('keydown', { key: 'g', ctrlKey: true, shiftKey: false });
Global.SAVE_EVENT = new KeyboardEvent('keydown', { key: 's', ctrlKey: true, shiftKey: false });
Global.OPEN_EVENT = new KeyboardEvent('keydown', { key: 'o', ctrlKey: true, shiftKey: false });
// Constantes pour le color picker
Global.SELECTED_LINE_WIDTH = 5;
Global.SELECTED_RECTANGLE_HEIGHT = 10;
Global.RED_INDEX_HEX = 1;
Global.GREEN_INDEX_HEX = 3;
Global.BLUE_INDEX_HEX = 5;
Global.ALPHA_INDEX_HEX = 7;
Global.HEX_COLOR_LENGTH = 2;
Global.MAX_HEX_VALUE = 255;
Global.IMAGE_DATA_ALPHA_INDEX = 3;
Global.COLOR_HISTORY_COUNT = 10;
Global.UNDEFINED_COLOR = -1;
// constantes pour aerosol
Global.SECOND_MS = 1000;
Global.TIME_DELAY = 25;
Global.MIN_SPRAY_SIZE = 10;
// Constantes pour grille
Global.MAX_SQUARE_SIZE = 250;
Global.MIN_SQUARE_SIZE = 20;
Global.MAX_OPACITY = 100;
Global.MIN_OPACITY = 40;
Global.INCREMENT_VALUE = 5;
Global.KEYB_PLUS_EVENT = new KeyboardEvent('keydown', { key: '+' });
Global.KEYB_MINUS_EVENT = new KeyboardEvent('keydown', { key: '-' });
Global.KEYB_EQUAL_EVENT = new KeyboardEvent('keydown', { key: '=' });
// constantes pour la sélection
Global.TEST_PNG_URL = 'png,test';
Global.TEST_JPEG_URL = 'jpeg,test';
// save and carrousel
Global.ETIQUETTE_MAX_VALUE = 15;
Global.LESS_THEN_THREE_DRAWING = 3;
// save and carrousel testing
Global.ARROW_LEFT_EVENT = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
Global.ARROW_RIGHT_EVENT = new KeyboardEvent('keydown', { key: 'ArrowRight' });
Global.DRAWING_TESTING = [
    { name: 'test1', etiquette: ['drole'] },
    { name: 'test2', etiquette: ['test'] },
    { name: 'test3', etiquette: ['test1'] },
    { name: 'test4', etiquette: [] },
];
Global.FICHE_INDEX_TESTING = [
    0,
    1,
    2,
    Global.LESS_THEN_THREE_DRAWING,
];
// Constantes pour texte
Global.DEFAULT_FONT_SIZE = 30;
Global.MIN_FONT_SIZE = 15;
Global.MAX_FONT_SIZE = 70;
Global.BASE_URL = 'http://localhost:3000/api/save/';
var MouseEnum;
(function (MouseEnum) {
    MouseEnum[MouseEnum["DEFAULT"] = 0] = "DEFAULT";
    MouseEnum[MouseEnum["ENTER_DEFAULT"] = 1] = "ENTER_DEFAULT";
    MouseEnum[MouseEnum["TOP_LEFT"] = 2] = "TOP_LEFT";
    MouseEnum[MouseEnum["ONE_OFF_X"] = 3] = "ONE_OFF_X";
    MouseEnum[MouseEnum["RIGHT_CLICK"] = 4] = "RIGHT_CLICK";
    MouseEnum[MouseEnum["OFFSET_20"] = 5] = "OFFSET_20";
    MouseEnum[MouseEnum["PAGE_REF"] = 6] = "PAGE_REF";
    MouseEnum[MouseEnum["PAGE_INNER_CANVAS"] = 7] = "PAGE_INNER_CANVAS";
    MouseEnum[MouseEnum["PAGE_INNER_OFFSET20"] = 8] = "PAGE_INNER_OFFSET20";
    MouseEnum[MouseEnum["PAGE_OFFSET_ONE_OFF"] = 9] = "PAGE_OFFSET_ONE_OFF";
})(MouseEnum || (MouseEnum = {}));
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Middle"] = 1] = "Middle";
    MouseButton[MouseButton["Right"] = 2] = "Right";
    MouseButton[MouseButton["Back"] = 3] = "Back";
    MouseButton[MouseButton["Forward"] = 4] = "Forward";
})(MouseButton || (MouseButton = {}));
var RGB;
(function (RGB) {
    RGB[RGB["R"] = 0] = "R";
    RGB[RGB["G"] = 1] = "G";
    RGB[RGB["B"] = 2] = "B";
    RGB[RGB["A"] = 3] = "A";
})(RGB || (RGB = {}));
var Shortcut;
(function (Shortcut) {
    Shortcut["CRAYON"] = "c";
    Shortcut["LIGNE"] = "l";
    Shortcut["EFFACE"] = "e";
    Shortcut["RECT_SELECTION"] = "r";
    Shortcut["ELLIPSE_SELECTION"] = "s";
    Shortcut["SURFACE_SELECTION"] = "ctrl-a";
})(Shortcut || (Shortcut = {}));
var EnumAngleLigne;
(function (EnumAngleLigne) {
    EnumAngleLigne[EnumAngleLigne["CENTTRENTECINQ"] = 0] = "CENTTRENTECINQ";
    EnumAngleLigne[EnumAngleLigne["QUARANTECINQ"] = 1] = "QUARANTECINQ";
    EnumAngleLigne[EnumAngleLigne["VERTICAL"] = 2] = "VERTICAL";
    EnumAngleLigne[EnumAngleLigne["HORIZONTAL"] = 3] = "HORIZONTAL";
})(EnumAngleLigne || (EnumAngleLigne = {}));
var Command;
(function (Command) {
    Command["BACKSPACE"] = "Backspace";
    Command["SHIFT"] = "Shift";
    Command["ESCAPE"] = "Escape";
    Command["DELETE"] = "Delete";
})(Command || (Command = {}));
var Arrows;
(function (Arrows) {
    Arrows["ARROWDOWN"] = "ArrowDown";
    Arrows["ARROWLEFT"] = "ArrowLeft";
    Arrows["ARROWRIGHT"] = "ArrowRight";
    Arrows["ARROWUP"] = "ArrowUp";
})(Arrows || (Arrows = {}));
var Fonts;
(function (Fonts) {
    Fonts["Arial"] = "Arial";
    Fonts["Verdana"] = "Verdana";
    Fonts["Georgia"] = "Georgia";
    Fonts["TimesNewRoman"] = "Times New Roman";
    Fonts["ComicSans"] = "Comic Sans MS";
})(Fonts || (Fonts = {}));
const stamps = [
    'assets/stamps/shrek.jpg',
    'assets/stamps/unsure-boy.jpg',
    'assets/stamps/cloud.png',
    'assets/stamps/poly.jpg',
    'assets/stamps/cool-guy.png',
];
var ControlPoint;
(function (ControlPoint) {
    ControlPoint[ControlPoint["Center"] = 0] = "Center";
    ControlPoint[ControlPoint["CenterLeft"] = 1] = "CenterLeft";
    ControlPoint[ControlPoint["CenterRight"] = 2] = "CenterRight";
    ControlPoint[ControlPoint["CenterUp"] = 3] = "CenterUp";
    ControlPoint[ControlPoint["CenterDown"] = 4] = "CenterDown";
    ControlPoint[ControlPoint["CornerUpLeft"] = 5] = "CornerUpLeft";
    ControlPoint[ControlPoint["CornerDownLeft"] = 6] = "CornerDownLeft";
    ControlPoint[ControlPoint["CornerUpRight"] = 7] = "CornerUpRight";
    ControlPoint[ControlPoint["CornerDownRight"] = 8] = "CornerDownRight";
})(ControlPoint || (ControlPoint = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\berge\OneDrive\Documents\Université\H21\LOG2990 - Projet 2\Drawing-App\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map