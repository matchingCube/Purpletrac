(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/Timeline.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/timeline/Timeline.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _TimelineBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimelineBasic.vue */ "./resources/js/src/views/components/timeline/TimelineBasic.vue");
/* harmony import */ var _TimelineWithIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimelineWithIcon.vue */ "./resources/js/src/views/components/timeline/TimelineWithIcon.vue");
/* harmony import */ var _TimelineCustomContent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimelineCustomContent.vue */ "./resources/js/src/views/components/timeline/TimelineCustomContent.vue");
/* harmony import */ var _TimelineCustomContentWithIcon_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TimelineCustomContentWithIcon.vue */ "./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    TimelineBasic: _TimelineBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TimelineWithIcon: _TimelineWithIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TimelineCustomContent: _TimelineCustomContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TimelineCustomContentWithIcon: _TimelineCustomContentWithIcon_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/timeline/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppTimeline: _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppTimelineItem: _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_3__["codeBasic"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/timeline/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppTimeline: _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppTimelineItem: _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCollapse"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroupItem"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatarGroup"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  directives: {
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["VBToggle"],
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      codeCustomContent: _code__WEBPACK_IMPORTED_MODULE_5__["codeCustomContent"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/timeline/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppTimeline: _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppTimelineItem: _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCollapse"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroupItem"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatarGroup"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  directives: {
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["VBToggle"],
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      codeCustomContentWithIcon: _code__WEBPACK_IMPORTED_MODULE_5__["codeCustomContentWithIcon"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/timeline/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppTimeline: _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppTimelineItem: _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeWithIcon: _code__WEBPACK_IMPORTED_MODULE_3__["codeWithIcon"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/Timeline.vue?vue&type=template&id=718a7a80&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/timeline/Timeline.vue?vue&type=template&id=718a7a80& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12", md: "6" } },
        [_c("timeline-basic")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-col",
        { attrs: { cols: "12", md: "6" } },
        [_c("timeline-with-icon")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-col",
        { attrs: { cols: "12", md: "6" } },
        [_c("timeline-custom-content")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-col",
        { attrs: { cols: "12", md: "6" } },
        [_c("timeline-custom-content-with-icon")],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=template&id=997caf04&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=template&id=997caf04& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card-code",
    {
      attrs: { title: "Basic" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeBasic) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "app-timeline",
        [
          _c("app-timeline-item", {
            attrs: {
              title: "Goal Achieved",
              subtitle: "All milestones are completed",
              time: "few minutes ago",
              variant: "success",
            },
          }),
          _vm._v(" "),
          _c("app-timeline-item", {
            attrs: {
              title: "Last milestone remain",
              subtitle: "You are just one step away from your goal",
              time: "3 minutes ago",
              variant: "info",
            },
          }),
          _vm._v(" "),
          _c("app-timeline-item", {
            attrs: {
              title: "Your are running low on time",
              subtitle: "Only 30 minutes left to finish milestone",
              time: "21 minutes ago",
              variant: "warning",
            },
          }),
          _vm._v(" "),
          _c("app-timeline-item", {
            attrs: {
              title: "Client Meeting",
              subtitle: "New event has been added to your schedule",
              time: "36 minutes ago",
            },
          }),
          _vm._v(" "),
          _c("app-timeline-item", {
            attrs: {
              title: "Product Design",
              subtitle: "Product design added in workflow",
              time: "1 hour ago",
              variant: "secondary",
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=template&id=0266ef18&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=template&id=0266ef18& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card-code",
    {
      attrs: { title: "Custom Content" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeCustomContent) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "app-timeline",
        [
          _c("app-timeline-item", [
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
              },
              [
                _c("h6", [_vm._v("12 Invoices have been paid")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("12 min ago"),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("p", [_vm._v("Invoices have been paid to the company.")]),
            _vm._v(" "),
            _c(
              "p",
              [
                _c("b-img", {
                  staticClass: "mr-1",
                  attrs: {
                    src: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./resources/js/src/assets/images/icons/pdf.png"),
                    height: "auto",
                    width: "20",
                  },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "align-bottom" }, [
                  _vm._v("invoice.pdf"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "app-timeline-item",
            { attrs: { variant: "secondary" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
                },
                [
                  _c("h6", [_vm._v("Client Meeting")]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("45 min ago"),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("p", [_vm._v("Project meeting with john @10:15am.")]),
              _vm._v(" "),
              _c(
                "b-media",
                {
                  scopedSlots: _vm._u([
                    {
                      key: "aside",
                      fn: function () {
                        return [
                          _c("b-avatar", {
                            attrs: {
                              src: __webpack_require__(/*! @/assets/images/avatars/12-small.png */ "./resources/js/src/assets/images/avatars/12-small.png"),
                            },
                          }),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _c("h6", [_vm._v("John Doe (Client)")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("CEO of Infibeam")]),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "app-timeline-item",
            { attrs: { variant: "success" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
                },
                [
                  _c("h6", [_vm._v("Financial Report")]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("2 hours ago"),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v("Click the button below to read financial reports"),
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "b-toggle",
                      rawName: "v-b-toggle.report-list",
                      modifiers: { "report-list": true },
                    },
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: { size: "sm", variant: "outline-primary" },
                },
                [_vm._v("\n        Show Report\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-collapse",
                { attrs: { id: "report-list" } },
                [
                  _c(
                    "b-list-group",
                    { staticClass: "mt-1", attrs: { flush: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center bg-transparent",
                          attrs: { href: "#" },
                        },
                        [
                          _c("span", [_vm._v("Last Year's Profit: $20,000")]),
                          _vm._v(" "),
                          _c("feather-icon", { attrs: { icon: "Share2Icon" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center bg-transparent",
                          attrs: { href: "#" },
                        },
                        [
                          _c("span", [_vm._v("This Year's Profit: $25,000")]),
                          _vm._v(" "),
                          _c("feather-icon", { attrs: { icon: "Share2Icon" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center bg-transparent",
                          attrs: { href: "#" },
                        },
                        [
                          _c("span", [_vm._v("Last Year's Commision: $5,000")]),
                          _vm._v(" "),
                          _c("feather-icon", { attrs: { icon: "Share2Icon" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center bg-transparent",
                          attrs: { href: "#" },
                        },
                        [
                          _c("span", [_vm._v("This Year's Commision: $7,000")]),
                          _vm._v(" "),
                          _c("feather-icon", { attrs: { icon: "Share2Icon" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center bg-transparent",
                          attrs: { href: "#" },
                        },
                        [
                          _c("span", [
                            _vm._v("This Year's Total Balance: $70,000"),
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", { attrs: { icon: "Share2Icon" } }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("app-timeline-item", { attrs: { variant: "warning" } }, [
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
              },
              [
                _c("h6", [_vm._v("Interview Schedule")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("03:00 PM"),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v("Have to interview Katy Turner for the developer job."),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-sm-row flex-column justify-content-between align-items-start",
              },
              [
                _c(
                  "b-media",
                  {
                    scopedSlots: _vm._u([
                      {
                        key: "aside",
                        fn: function () {
                          return [
                            _c("b-avatar", {
                              attrs: {
                                src: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
                              },
                            }),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  },
                  [
                    _vm._v(" "),
                    _c("h6", [_vm._v("Katy Turner")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("Javascript Developer"),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("feather-icon", {
                      staticClass: "mr-1",
                      attrs: { icon: "MessageSquareIcon" },
                    }),
                    _vm._v(" "),
                    _c("feather-icon", { attrs: { icon: "PhoneCallIcon" } }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("app-timeline-item", { attrs: { variant: "danger" } }, [
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
              },
              [
                _c("h6", [_vm._v("Online Store")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("03:00 PM"),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS."
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-sm-row flex-column justify-content-between align-items-start",
              },
              [
                _c("div", { staticClass: "mb-1 mb-sm-0" }, [
                  _c("span", { staticClass: "text-muted mb-50" }, [
                    _vm._v("Developers"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("b-avatar", {
                        staticClass: "mr-50",
                        attrs: {
                          text: "A",
                          size: "24",
                          variant: "light-primary",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-avatar", {
                        staticClass: "mr-50",
                        attrs: {
                          text: "B",
                          size: "24",
                          variant: "light-success",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-avatar", {
                        staticClass: "mr-50",
                        attrs: {
                          text: "C",
                          size: "24",
                          variant: "light-danger",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-1 mb-sm-0" }, [
                  _c("span", { staticClass: "text-muted mb-50 d-block" }, [
                    _vm._v("Deadline"),
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("20 Dec 2077")]),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("span", { staticClass: "text-muted mb-50 d-block" }, [
                    _vm._v("Budget"),
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v("$50,000")]),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("app-timeline-item", { attrs: { variant: "info" } }, [
            _c(
              "div",
              {
                staticClass:
                  "d-flex align-items-start flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-50",
              },
              [
                _c("h6", [_vm._v("Designing UI")]),
                _vm._v(" "),
                _c(
                  "b-badge",
                  { attrs: { pill: "", variant: "light-primary" } },
                  [_vm._v("\n          Design\n        ")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Our main goal is to design a new mobile application for our client. The customer wants a clean & flat design."
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("span", { staticClass: "text-muted" }, [
                  _vm._v("\n          Participants\n        "),
                ]),
                _vm._v(" "),
                _c(
                  "b-avatar-group",
                  { staticClass: "mt-50", attrs: { size: "32px" } },
                  [
                    _c("b-avatar", {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover",
                          modifiers: { hover: true },
                        },
                      ],
                      staticClass: "pull-up",
                      attrs: {
                        title: "Jenny Looper",
                        src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
                      },
                    }),
                    _vm._v(" "),
                    _c("b-avatar", {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover",
                          modifiers: { hover: true },
                        },
                      ],
                      staticClass: "pull-up",
                      attrs: {
                        title: "Jennifer Lopez",
                        src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
                      },
                    }),
                    _vm._v(" "),
                    _c("b-avatar", {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover",
                          modifiers: { hover: true },
                        },
                      ],
                      staticClass: "pull-up",
                      attrs: {
                        title: "Arya Stark",
                        src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=template&id=529a0a17&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=template&id=529a0a17& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card-code",
    {
      attrs: { title: "Custom Content" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [
              _vm._v("\n    " + _vm._s(_vm.codeCustomContentWithIcon) + "\n  "),
            ]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "app-timeline",
        [
          _c("app-timeline-item", { attrs: { icon: "DollarSignIcon" } }, [
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
              },
              [
                _c("h6", [_vm._v("12 Invoices have been paid")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("12 min ago"),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("p", [_vm._v("Invoices have been paid to the company.")]),
            _vm._v(" "),
            _c(
              "p",
              [
                _c("b-img", {
                  staticClass: "mr-1",
                  attrs: {
                    src: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./resources/js/src/assets/images/icons/pdf.png"),
                    height: "auto",
                    width: "20",
                  },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "align-bottom" }, [
                  _vm._v("invoice.pdf"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "app-timeline-item",
            { attrs: { variant: "secondary", icon: "UserIcon" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
                },
                [
                  _c("h6", [_vm._v("Client Meeting")]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("45 min ago"),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("p", [_vm._v("Project meeting with john @10:15am.")]),
              _vm._v(" "),
              _c(
                "b-media",
                {
                  scopedSlots: _vm._u([
                    {
                      key: "aside",
                      fn: function () {
                        return [
                          _c("b-avatar", {
                            attrs: {
                              src: __webpack_require__(/*! @/assets/images/avatars/12-small.png */ "./resources/js/src/assets/images/avatars/12-small.png"),
                            },
                          }),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _c("h6", [_vm._v("John Doe (Client)")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("CEO of Infibeam")]),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "app-timeline-item",
            { attrs: { variant: "success", icon: "FileTextIcon" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
                },
                [
                  _c("h6", [_vm._v("Financial Report")]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("2 hours ago"),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v("Click the button below to read financial reports"),
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "b-toggle",
                      rawName: "v-b-toggle.report-list-with-icon",
                      modifiers: { "report-list-with-icon": true },
                    },
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: { size: "sm", variant: "outline-primary" },
                },
                [_vm._v("\n        Show Report\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-collapse",
                { attrs: { id: "report-list-with-icon" } },
                [
                  _c(
                    "b-list-group",
                    { staticClass: "mt-1", attrs: { flush: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center bg-transparent",
                          attrs: { href: "#" },
                        },
                        [
                          _c("span", [_vm._v("Last Year's Profit: $20,000")]),
                          _vm._v(" "),
                          _c("feather-icon", { attrs: { icon: "Share2Icon" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center bg-transparent",
                          attrs: { href: "#" },
                        },
                        [
                          _c("span", [_vm._v("This Year's Profit: $25,000")]),
                          _vm._v(" "),
                          _c("feather-icon", { attrs: { icon: "Share2Icon" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center bg-transparent",
                          attrs: { href: "#" },
                        },
                        [
                          _c("span", [_vm._v("Last Year's Commision: $5,000")]),
                          _vm._v(" "),
                          _c("feather-icon", { attrs: { icon: "Share2Icon" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center bg-transparent",
                          attrs: { href: "#" },
                        },
                        [
                          _c("span", [_vm._v("This Year's Commision: $7,000")]),
                          _vm._v(" "),
                          _c("feather-icon", { attrs: { icon: "Share2Icon" } }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center bg-transparent",
                          attrs: { href: "#" },
                        },
                        [
                          _c("span", [
                            _vm._v("This Year's Total Balance: $70,000"),
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", { attrs: { icon: "Share2Icon" } }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "app-timeline-item",
            { attrs: { variant: "warning", icon: "MapPinIcon" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
                },
                [
                  _c("h6", [_vm._v("Interview Schedule")]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("03:00 PM"),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v("Have to interview Katy Turner for the developer job."),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-sm-row flex-column justify-content-between align-items-start",
                },
                [
                  _c(
                    "b-media",
                    {
                      scopedSlots: _vm._u([
                        {
                          key: "aside",
                          fn: function () {
                            return [
                              _c("b-avatar", {
                                attrs: {
                                  src: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
                                },
                              }),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("h6", [_vm._v("Katy Turner")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("Javascript Developer"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("feather-icon", {
                        staticClass: "mr-1",
                        attrs: { icon: "MessageSquareIcon" },
                      }),
                      _vm._v(" "),
                      _c("feather-icon", { attrs: { icon: "PhoneCallIcon" } }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "app-timeline-item",
            { attrs: { variant: "danger", icon: "ShoppingBagIcon" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
                },
                [
                  _c("h6", [_vm._v("Online Store")]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("03:00 PM"),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS."
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-sm-row flex-column justify-content-between align-items-start",
                },
                [
                  _c("div", { staticClass: "mb-1 mb-sm-0" }, [
                    _c("span", { staticClass: "text-muted mb-50" }, [
                      _vm._v("Developers"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-avatar", {
                          staticClass: "mr-50",
                          attrs: {
                            text: "A",
                            size: "24",
                            variant: "light-primary",
                          },
                        }),
                        _vm._v(" "),
                        _c("b-avatar", {
                          staticClass: "mr-50",
                          attrs: {
                            text: "B",
                            size: "24",
                            variant: "light-success",
                          },
                        }),
                        _vm._v(" "),
                        _c("b-avatar", {
                          staticClass: "mr-50",
                          attrs: {
                            text: "C",
                            size: "24",
                            variant: "light-danger",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-1 mb-sm-0" }, [
                    _c("span", { staticClass: "text-muted mb-50 d-block" }, [
                      _vm._v("Deadline"),
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("20 Dec 2077")]),
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("span", { staticClass: "text-muted mb-50 d-block" }, [
                      _vm._v("Budget"),
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("$50,000")]),
                  ]),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "app-timeline-item",
            { attrs: { variant: "info", icon: "GridIcon" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-start flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-50",
                },
                [
                  _c("h6", [_vm._v("Designing UI")]),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    { attrs: { pill: "", variant: "light-primary" } },
                    [_vm._v("\n          Design\n        ")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Our main goal is to design a new mobile application for our client. The customer wants a clean & flat design."
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("\n          Participants\n        "),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-avatar-group",
                    { staticClass: "mt-50", attrs: { size: "32px" } },
                    [
                      _c("b-avatar", {
                        directives: [
                          {
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: { hover: true },
                          },
                        ],
                        staticClass: "pull-up",
                        attrs: {
                          title: "Jenny Looper",
                          src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
                        },
                      }),
                      _vm._v(" "),
                      _c("b-avatar", {
                        directives: [
                          {
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: { hover: true },
                          },
                        ],
                        staticClass: "pull-up",
                        attrs: {
                          title: "Jennifer Lopez",
                          src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
                        },
                      }),
                      _vm._v(" "),
                      _c("b-avatar", {
                        directives: [
                          {
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: { hover: true },
                          },
                        ],
                        staticClass: "pull-up",
                        attrs: {
                          title: "Arya Stark",
                          src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=template&id=48d3b5bf&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=template&id=48d3b5bf& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card-code",
    {
      attrs: { title: "With Icon" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeWithIcon) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "app-timeline",
        [
          _c("app-timeline-item", {
            attrs: {
              title: "Goal Achieved",
              subtitle: "All milestones are completed",
              icon: "AwardIcon",
              time: "few minutes ago",
              variant: "success",
            },
          }),
          _vm._v(" "),
          _c("app-timeline-item", {
            attrs: {
              title: "Last milestone remain",
              subtitle: "You are just one step away from your goal",
              icon: "InfoIcon",
              time: "3 minutes ago",
              variant: "info",
            },
          }),
          _vm._v(" "),
          _c("app-timeline-item", {
            attrs: {
              title: "Your are running low on time",
              subtitle: "Only 30 minutes left to finish milestone",
              icon: "ClockIcon",
              time: "21 minutes ago",
              variant: "warning",
            },
          }),
          _vm._v(" "),
          _c("app-timeline-item", {
            attrs: {
              title: "Client Meeting",
              subtitle: "New event has been added to your schedule",
              icon: "UserIcon",
              time: "36 minutes ago",
            },
          }),
          _vm._v(" "),
          _c("app-timeline-item", {
            attrs: {
              title: "Product Design",
              subtitle: "Product design added in workflow",
              icon: "GridIcon",
              time: "1 hour ago",
              variant: "success",
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/b-card-code/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/components/b-card-code/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");

/* harmony default export */ __webpack_exports__["default"] = (_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/assets/images/icons/pdf.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/pdf.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/resources/js/src/assets/images/icons/pdf.png";

/***/ }),

/***/ "./resources/js/src/views/components/timeline/Timeline.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/Timeline.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timeline_vue_vue_type_template_id_718a7a80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline.vue?vue&type=template&id=718a7a80& */ "./resources/js/src/views/components/timeline/Timeline.vue?vue&type=template&id=718a7a80&");
/* harmony import */ var _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/timeline/Timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Timeline_vue_vue_type_template_id_718a7a80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Timeline_vue_vue_type_template_id_718a7a80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/timeline/Timeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/timeline/Timeline.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/Timeline.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/Timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/timeline/Timeline.vue?vue&type=template&id=718a7a80&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/Timeline.vue?vue&type=template&id=718a7a80& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_718a7a80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=template&id=718a7a80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/Timeline.vue?vue&type=template&id=718a7a80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_718a7a80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_718a7a80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineBasic.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineBasic.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineBasic_vue_vue_type_template_id_997caf04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineBasic.vue?vue&type=template&id=997caf04& */ "./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=template&id=997caf04&");
/* harmony import */ var _TimelineBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimelineBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TimelineBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimelineBasic_vue_vue_type_template_id_997caf04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TimelineBasic_vue_vue_type_template_id_997caf04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/timeline/TimelineBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TimelineBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=template&id=997caf04&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=template&id=997caf04& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineBasic_vue_vue_type_template_id_997caf04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TimelineBasic.vue?vue&type=template&id=997caf04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineBasic.vue?vue&type=template&id=997caf04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineBasic_vue_vue_type_template_id_997caf04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineBasic_vue_vue_type_template_id_997caf04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineCustomContent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineCustomContent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineCustomContent_vue_vue_type_template_id_0266ef18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineCustomContent.vue?vue&type=template&id=0266ef18& */ "./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=template&id=0266ef18&");
/* harmony import */ var _TimelineCustomContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimelineCustomContent.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TimelineCustomContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimelineCustomContent_vue_vue_type_template_id_0266ef18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TimelineCustomContent_vue_vue_type_template_id_0266ef18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/timeline/TimelineCustomContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineCustomContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TimelineCustomContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineCustomContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=template&id=0266ef18&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=template&id=0266ef18& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineCustomContent_vue_vue_type_template_id_0266ef18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TimelineCustomContent.vue?vue&type=template&id=0266ef18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineCustomContent.vue?vue&type=template&id=0266ef18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineCustomContent_vue_vue_type_template_id_0266ef18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineCustomContent_vue_vue_type_template_id_0266ef18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineCustomContentWithIcon_vue_vue_type_template_id_529a0a17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineCustomContentWithIcon.vue?vue&type=template&id=529a0a17& */ "./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=template&id=529a0a17&");
/* harmony import */ var _TimelineCustomContentWithIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimelineCustomContentWithIcon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TimelineCustomContentWithIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimelineCustomContentWithIcon_vue_vue_type_template_id_529a0a17___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TimelineCustomContentWithIcon_vue_vue_type_template_id_529a0a17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineCustomContentWithIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TimelineCustomContentWithIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineCustomContentWithIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=template&id=529a0a17&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=template&id=529a0a17& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineCustomContentWithIcon_vue_vue_type_template_id_529a0a17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TimelineCustomContentWithIcon.vue?vue&type=template&id=529a0a17& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineCustomContentWithIcon.vue?vue&type=template&id=529a0a17&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineCustomContentWithIcon_vue_vue_type_template_id_529a0a17___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineCustomContentWithIcon_vue_vue_type_template_id_529a0a17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineWithIcon.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineWithIcon.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineWithIcon_vue_vue_type_template_id_48d3b5bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineWithIcon.vue?vue&type=template&id=48d3b5bf& */ "./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=template&id=48d3b5bf&");
/* harmony import */ var _TimelineWithIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimelineWithIcon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TimelineWithIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimelineWithIcon_vue_vue_type_template_id_48d3b5bf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TimelineWithIcon_vue_vue_type_template_id_48d3b5bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/timeline/TimelineWithIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineWithIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TimelineWithIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineWithIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=template&id=48d3b5bf&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=template&id=48d3b5bf& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineWithIcon_vue_vue_type_template_id_48d3b5bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TimelineWithIcon.vue?vue&type=template&id=48d3b5bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/timeline/TimelineWithIcon.vue?vue&type=template&id=48d3b5bf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineWithIcon_vue_vue_type_template_id_48d3b5bf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineWithIcon_vue_vue_type_template_id_48d3b5bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/timeline/code.js":
/*!************************************************************!*\
  !*** ./resources/js/src/views/components/timeline/code.js ***!
  \************************************************************/
/*! exports provided: codeBasic, codeWithIcon, codeCustomContent, codeCustomContentWithIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeWithIcon", function() { return codeWithIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeCustomContent", function() { return codeCustomContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeCustomContentWithIcon", function() { return codeCustomContentWithIcon; });
var codeBasic = "\n<template>\n  <app-timeline>\n    <app-timeline-item\n      title=\"Goal Achieved\"\n      subtitle=\"All milestones are completed\"\n      time=\"few minutes ago\"\n      variant=\"success\"\n    />\n\n    <app-timeline-item\n      title=\"Last milestone remain\"\n      subtitle=\"You are just one step away from your goal\"\n      time=\"3 minutes ago\"\n      variant=\"info\"\n    />\n\n    <app-timeline-item\n      title=\"Your are running low on time\"\n      subtitle=\"Only 30 minutes left to finish milestone\"\n      time=\"21 minutes ago\"\n      variant=\"warning\"\n    />\n\n    <app-timeline-item\n      title=\"Client Meeting\"\n      subtitle=\"New event has been added to your schedule\"\n      time=\"36 minutes ago\"\n    />\n\n    <app-timeline-item\n      title=\"Product Design\"\n      subtitle=\"Product design added in workflow\"\n      time=\"1 hour ago\"\n      variant=\"secondary\"\n    />\n  </app-timeline>\n</template>\n\n<script>\nimport AppTimeline from '@core/components/app-timeline/AppTimeline.vue'\nimport AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'\n\nexport default {\n  components: {\n    AppTimeline,\n    AppTimelineItem,\n  },\n}\n</script>\n";
var codeWithIcon = "\n<template>\n  <app-timeline>\n    <app-timeline-item\n      title=\"Goal Achieved\"\n      subtitle=\"All milestones are completed\"\n      icon=\"AwardIcon\"\n      time=\"few minutes ago\"\n      variant=\"success\"\n    />\n\n    <app-timeline-item\n      title=\"Last milestone remain\"\n      subtitle=\"You are just one step away from your goal\"\n      icon=\"InfoIcon\"\n      time=\"3 minutes ago\"\n      variant=\"info\"\n    />\n\n    <app-timeline-item\n      title=\"Your are running low on time\"\n      subtitle=\"Only 30 minutes left to finish milestone\"\n      icon=\"ClockIcon\"\n      time=\"21 minutes ago\"\n      variant=\"warning\"\n    />\n\n    <app-timeline-item\n      title=\"Client Meeting\"\n      subtitle=\"New event has been added to your schedule\"\n      icon=\"UserIcon\"\n      time=\"36 minutes ago\"\n    />\n\n    <app-timeline-item\n      title=\"Product Design\"\n      subtitle=\"Product design added in workflow\"\n      icon=\"GridIcon\"\n      time=\"1 hour ago\"\n      variant=\"success\"\n    />\n  </app-timeline>\n</template>\n\n<script>\nimport AppTimeline from '@core/components/app-timeline/AppTimeline.vue'\nimport AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'\n\nexport default {\n  components: {\n    AppTimeline,\n    AppTimelineItem,\n  },\n}\n</script>\n";
var codeCustomContent = "\n<template>\n  <app-timeline>\n\n    <!-- 12 INVOICES HAVE BEEN PAID -->\n    <app-timeline-item>\n      <div class=\"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0\">\n        <h6>12 Invoices have been paid</h6>\n        <small class=\"text-muted\">12 min ago</small>\n      </div>\n      <p>Invoices have been paid to the company.</p>\n      <p>\n        <b-img\n          :src=\"require('@/assets/images/icons/pdf.png')\"\n          height=\"auto\"\n          width=\"20\"\n          class=\"mr-1\"\n        />\n        <span class=\"align-bottom\">invoice.pdf</span>\n      </p>\n    </app-timeline-item>\n\n    <app-timeline-item variant=\"secondary\">\n\n      <div class=\"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0\">\n        <h6>Client Meeting</h6>\n        <small class=\"text-muted\">45 min ago</small>\n      </div>\n      <p>Project meeting with john @10:15am.</p>\n      <b-media>\n        <template #aside>\n          <b-avatar :src=\"require('@/assets/images/avatars/12-small.png')\" />\n        </template>\n        <h6>John Doe (Client)</h6>\n        <p>CEO of Infibeam</p>\n      </b-media>\n    </app-timeline-item>\n\n    <!-- FINANCIAL REPORT -->\n    <app-timeline-item variant=\"success\">\n\n      <div class=\"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0\">\n        <h6>Financial Report</h6>\n        <small class=\"text-muted\">2 hours ago</small>\n      </div>\n      <p>Click the button below to read financial reports</p>\n      <b-button\n        v-b-toggle.report-list\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        size=\"sm\"\n        variant=\"outline-primary\"\n      >\n        Show Report\n      </b-button>\n      <b-collapse id=\"report-list\">\n        <b-list-group\n          flush\n          class=\"mt-1\"\n        >\n          <b-list-group-item\n            href=\"#\"\n            class=\"d-flex justify-content-between align-items-center bg-transparent\"\n          >\n            <span>Last Year's Profit: $20,000</span>\n            <feather-icon icon=\"Share2Icon\" />\n          </b-list-group-item>\n          <b-list-group-item\n            href=\"#\"\n            class=\"d-flex justify-content-between align-items-center bg-transparent\"\n          >\n            <span>This Year's Profit: $25,000</span>\n            <feather-icon icon=\"Share2Icon\" />\n          </b-list-group-item>\n          <b-list-group-item\n            href=\"#\"\n            class=\"d-flex justify-content-between align-items-center bg-transparent\"\n          >\n            <span>Last Year's Commision: $5,000</span>\n            <feather-icon icon=\"Share2Icon\" />\n          </b-list-group-item>\n          <b-list-group-item\n            href=\"#\"\n            class=\"d-flex justify-content-between align-items-center bg-transparent\"\n          >\n            <span>This Year's Commision: $7,000</span>\n            <feather-icon icon=\"Share2Icon\" />\n          </b-list-group-item>\n          <b-list-group-item\n            href=\"#\"\n            class=\"d-flex justify-content-between align-items-center bg-transparent\"\n          >\n            <span>This Year's Total Balance: $70,000</span>\n            <feather-icon icon=\"Share2Icon\" />\n          </b-list-group-item>\n        </b-list-group>\n      </b-collapse>\n    </app-timeline-item>\n\n    <!-- INTERVIEW SCHEDULE -->\n    <app-timeline-item variant=\"warning\">\n      <div class=\"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0\">\n        <h6>Interview Schedule</h6>\n        <small class=\"text-muted\">03:00 PM</small>\n      </div>\n      <p>Have to interview Katy Turner for the developer job.</p>\n      <div class=\"d-flex flex-sm-row flex-column justify-content-between align-items-start\">\n        <b-media>\n          <template #aside>\n            <b-avatar :src=\"require('@/assets/images/avatars/1-small.png')\" />\n          </template>\n          <h6>Katy Turner</h6>\n          <span class=\"text-muted\">Javascript Developer</span>\n        </b-media>\n        <div>\n          <feather-icon\n            icon=\"MessageSquareIcon\"\n            class=\"mr-1\"\n          />\n          <feather-icon icon=\"PhoneCallIcon\" />\n        </div>\n      </div>\n    </app-timeline-item>\n\n    <!-- ONLINE STORE -->\n    <app-timeline-item variant=\"danger\">\n\n      <div class=\"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0\">\n        <h6>Online Store</h6>\n        <small class=\"text-muted\">03:00 PM</small>\n      </div>\n      <p>Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.</p>\n      <div class=\"d-flex flex-sm-row flex-column justify-content-between align-items-start\">\n        <!-- 1st Col -->\n        <div class=\"mb-1 mb-sm-0\">\n          <span class=\"text-muted mb-50\">Developers</span>\n\n          <div>\n            <b-avatar\n              text=\"A\"\n              class=\"mr-50\"\n              size=\"24\"\n              variant=\"light-primary\"\n            />\n            <b-avatar\n              text=\"B\"\n              class=\"mr-50\"\n              size=\"24\"\n              variant=\"light-success\"\n            />\n            <b-avatar\n              text=\"C\"\n              class=\"mr-50\"\n              size=\"24\"\n              variant=\"light-danger\"\n            />\n          </div>\n        </div>\n        <!-- 2nd Col -->\n        <div class=\"mb-1 mb-sm-0\">\n          <span class=\"text-muted mb-50 d-block\">Deadline</span>\n          <span>20 Dec 2077</span>\n        </div>\n        <!-- 3rd Col -->\n        <div>\n          <span class=\"text-muted mb-50 d-block\">Budget</span>\n          <span>$50,000</span>\n        </div>\n      </div>\n    </app-timeline-item>\n\n    <!-- DESIGNING UI -->\n    <app-timeline-item variant=\"info\">\n\n      <div class=\"d-flex align-items-start flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-50\">\n        <h6>Designing UI</h6>\n        <b-badge\n          pill\n          variant=\"light-primary\"\n        >\n          Design\n        </b-badge>\n      </div>\n      <p>Our main goal is to design a new mobile application for our client. The customer wants a clean &amp; flat design.</p>\n      <div>\n        <span class=\"text-muted\">\n          Participants\n        </span>\n        <b-avatar-group\n          size=\"32px\"\n          class=\"mt-50\"\n        >\n          <b-avatar\n            v-b-tooltip.hover\n            class=\"pull-up\"\n            title=\"Jenny Looper\"\n            :src=\"require('@/assets/images/portrait/small/avatar-s-5.jpg')\"\n          />\n          <b-avatar\n            v-b-tooltip.hover\n            class=\"pull-up\"\n            title=\"Jennifer Lopez\"\n            :src=\"require('@/assets/images/portrait/small/avatar-s-6.jpg')\"\n          />\n          <b-avatar\n            v-b-tooltip.hover\n            class=\"pull-up\"\n            title=\"Arya Stark\"\n            :src=\"require('@/assets/images/portrait/small/avatar-s-7.jpg')\"\n          />\n        </b-avatar-group>\n      </div>\n    </app-timeline-item>\n  </app-timeline>\n</template>\n\n<script>\nimport {\n  BImg, BAvatar, BMedia, BButton, BCollapse, VBToggle, BListGroup, BListGroupItem, BAvatarGroup, BBadge, VBTooltip,\n} from 'bootstrap-vue'\nimport AppTimeline from '@core/components/app-timeline/AppTimeline.vue'\nimport AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    AppTimeline,\n    AppTimelineItem,\n    BImg,\n    BMedia,\n    BAvatar,\n    BButton,\n    BCollapse,\n    BListGroup,\n    BListGroupItem,\n    BAvatarGroup,\n    BBadge,\n  },\n  directives: { 'b-toggle': VBToggle, 'b-tooltip': VBTooltip, Ripple },\n}\n</script>\n";
var codeCustomContentWithIcon = "\n<template>\n  <app-timeline>\n\n    <!-- 12 INVOICES HAVE BEEN PAID -->\n    <app-timeline-item icon=\"DollarSignIcon\">\n      <div class=\"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0\">\n        <h6>12 Invoices have been paid</h6>\n        <small class=\"text-muted\">12 min ago</small>\n      </div>\n      <p>Invoices have been paid to the company.</p>\n      <p>\n        <b-img\n          :src=\"require('@/assets/images/icons/pdf.png')\"\n          height=\"auto\"\n          width=\"20\"\n          class=\"mr-1\"\n        />\n        <span class=\"align-bottom\">invoice.pdf</span>\n      </p>\n    </app-timeline-item>\n\n    <app-timeline-item\n      variant=\"secondary\"\n      icon=\"UserIcon\"\n    >\n\n      <div class=\"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0\">\n        <h6>Client Meeting</h6>\n        <small class=\"text-muted\">45 min ago</small>\n      </div>\n      <p>Project meeting with john @10:15am.</p>\n      <b-media>\n        <template #aside>\n          <b-avatar :src=\"require('@/assets/images/avatars/12-small.png')\" />\n        </template>\n        <h6>John Doe (Client)</h6>\n        <p>CEO of Infibeam</p>\n      </b-media>\n    </app-timeline-item>\n\n    <!-- FINANCIAL REPORT -->\n    <app-timeline-item\n      variant=\"success\"\n      icon=\"FileTextIcon\"\n    >\n\n      <div class=\"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0\">\n        <h6>Financial Report</h6>\n        <small class=\"text-muted\">2 hours ago</small>\n      </div>\n      <p>Click the button below to read financial reports</p>\n      <b-button\n        v-b-toggle.report-list-with-icon\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        size=\"sm\"\n        variant=\"outline-primary\"\n      >\n        Show Report\n      </b-button>\n      <b-collapse id=\"report-list-with-icon\">\n        <b-list-group\n          flush\n          class=\"mt-1\"\n        >\n          <b-list-group-item\n            href=\"#\"\n            class=\"d-flex justify-content-between align-items-center bg-transparent\"\n          >\n            <span>Last Year's Profit: $20,000</span>\n            <feather-icon icon=\"Share2Icon\" />\n          </b-list-group-item>\n          <b-list-group-item\n            href=\"#\"\n            class=\"d-flex justify-content-between align-items-center bg-transparent\"\n          >\n            <span>This Year's Profit: $25,000</span>\n            <feather-icon icon=\"Share2Icon\" />\n          </b-list-group-item>\n          <b-list-group-item\n            href=\"#\"\n            class=\"d-flex justify-content-between align-items-center bg-transparent\"\n          >\n            <span>Last Year's Commision: $5,000</span>\n            <feather-icon icon=\"Share2Icon\" />\n          </b-list-group-item>\n          <b-list-group-item\n            href=\"#\"\n            class=\"d-flex justify-content-between align-items-center bg-transparent\"\n          >\n            <span>This Year's Commision: $7,000</span>\n            <feather-icon icon=\"Share2Icon\" />\n          </b-list-group-item>\n          <b-list-group-item\n            href=\"#\"\n            class=\"d-flex justify-content-between align-items-center bg-transparent\"\n          >\n            <span>This Year's Total Balance: $70,000</span>\n            <feather-icon icon=\"Share2Icon\" />\n          </b-list-group-item>\n        </b-list-group>\n      </b-collapse>\n    </app-timeline-item>\n\n    <!-- INTERVIEW SCHEDULE -->\n    <app-timeline-item\n      variant=\"warning\"\n      icon=\"MapPinIcon\"\n    >\n      <div class=\"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0\">\n        <h6>Interview Schedule</h6>\n        <small class=\"text-muted\">03:00 PM</small>\n      </div>\n      <p>Have to interview Katy Turner for the developer job.</p>\n      <div class=\"d-flex flex-sm-row flex-column justify-content-between align-items-start\">\n        <b-media>\n          <template #aside>\n            <b-avatar :src=\"require('@/assets/images/avatars/1-small.png')\" />\n          </template>\n          <h6>Katy Turner</h6>\n          <span class=\"text-muted\">Javascript Developer</span>\n        </b-media>\n        <div>\n          <feather-icon\n            icon=\"MessageSquareIcon\"\n            class=\"mr-1\"\n          />\n          <feather-icon icon=\"PhoneCallIcon\" />\n        </div>\n      </div>\n    </app-timeline-item>\n\n    <!-- ONLINE STORE -->\n    <app-timeline-item\n      variant=\"danger\"\n      icon=\"ShoppingBagIcon\"\n    >\n\n      <div class=\"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0\">\n        <h6>Online Store</h6>\n        <small class=\"text-muted\">03:00 PM</small>\n      </div>\n      <p>Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.</p>\n      <div class=\"d-flex flex-sm-row flex-column justify-content-between align-items-start\">\n        <!-- 1st Col -->\n        <div class=\"mb-1 mb-sm-0\">\n          <span class=\"text-muted mb-50\">Developers</span>\n\n          <div>\n            <b-avatar\n              text=\"A\"\n              class=\"mr-50\"\n              size=\"24\"\n              variant=\"light-primary\"\n            />\n            <b-avatar\n              text=\"B\"\n              class=\"mr-50\"\n              size=\"24\"\n              variant=\"light-success\"\n            />\n            <b-avatar\n              text=\"C\"\n              class=\"mr-50\"\n              size=\"24\"\n              variant=\"light-danger\"\n            />\n          </div>\n        </div>\n        <!-- 2nd Col -->\n        <div class=\"mb-1 mb-sm-0\">\n          <span class=\"text-muted mb-50 d-block\">Deadline</span>\n          <span>20 Dec 2077</span>\n        </div>\n        <!-- 3rd Col -->\n        <div>\n          <span class=\"text-muted mb-50 d-block\">Budget</span>\n          <span>$50,000</span>\n        </div>\n      </div>\n    </app-timeline-item>\n\n    <!-- DESIGNING UI -->\n    <app-timeline-item\n      variant=\"info\"\n      icon=\"GridIcon\"\n    >\n\n      <div class=\"d-flex align-items-start flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-50\">\n        <h6>Designing UI</h6>\n        <b-badge\n          pill\n          variant=\"light-primary\"\n        >\n          Design\n        </b-badge>\n      </div>\n      <p>Our main goal is to design a new mobile application for our client. The customer wants a clean &amp; flat design.</p>\n      <div>\n        <span class=\"text-muted\">\n          Participants\n        </span>\n        <b-avatar-group\n          size=\"32px\"\n          class=\"mt-50\"\n        >\n          <b-avatar\n            v-b-tooltip.hover\n            class=\"pull-up\"\n            title=\"Jenny Looper\"\n            :src=\"require('@/assets/images/portrait/small/avatar-s-5.jpg')\"\n          />\n          <b-avatar\n            v-b-tooltip.hover\n            class=\"pull-up\"\n            title=\"Jennifer Lopez\"\n            :src=\"require('@/assets/images/portrait/small/avatar-s-6.jpg')\"\n          />\n          <b-avatar\n            v-b-tooltip.hover\n            class=\"pull-up\"\n            title=\"Arya Stark\"\n            :src=\"require('@/assets/images/portrait/small/avatar-s-7.jpg')\"\n          />\n        </b-avatar-group>\n      </div>\n    </app-timeline-item>\n  </app-timeline>\n</template>\n\n<script>\nimport {\n  BImg, BAvatar, BMedia, BButton, BCollapse, VBToggle, BListGroup, BListGroupItem, BAvatarGroup, BBadge, VBTooltip,\n} from 'bootstrap-vue'\nimport AppTimeline from '@core/components/app-timeline/AppTimeline.vue'\nimport AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    AppTimeline,\n    AppTimelineItem,\n    BImg,\n    BMedia,\n    BAvatar,\n    BButton,\n    BCollapse,\n    BListGroup,\n    BListGroupItem,\n    BAvatarGroup,\n    BBadge,\n  },\n  directives: { 'b-toggle': VBToggle, 'b-tooltip': VBTooltip, Ripple },\n}\n</script>\n";

/***/ })

}]);