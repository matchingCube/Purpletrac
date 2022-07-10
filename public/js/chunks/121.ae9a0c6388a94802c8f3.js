(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VxTour',
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  props: {
    steps: {
      required: true,
      type: Array
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_components_app_tour_AppTour_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/app-tour/AppTour.vue */ "./resources/js/src/@core/components/app-tour/AppTour.vue");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/extensions/tour/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ShepherdExample',
  components: {
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    AppTour: _core_components_app_tour_AppTour_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeTour: _code__WEBPACK_IMPORTED_MODULE_4__["codeTour"],
      steps: [{
        target: '#tour-card',
        header: {
          title: 'Card'
        },
        content: 'This card contains demo for the tour.'
      }, {
        target: '#tour-card .icon-code',
        header: {
          title: 'View demo Source'
        },
        content: 'If you ever find your self confused, you can click on this code icon to check the source of current demo.'
      }, {
        target: '#tour-card .btn',
        header: {
          title: 'Trigger Tour'
        },
        content: 'You can click on this button to trigger the tour.'
      }]
    };
  },
  methods: {
    // tour steps
    tourStart: function tourStart() {
      this.$tours.vuexyTour.start();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../../node_modules/css-loader!vue-tour/dist/vue-tour.css */ "./node_modules/css-loader/index.js!./node_modules/vue-tour/dist/vue-tour.css"), "");

// module
exports.push([module.i, ".v-tour .v-step {\n  z-index: 55000;\n  filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.2));\n  min-width: 350px;\n}\n[dir] .v-tour .v-step {\n  background-color: #fff;\n  border-radius: 0.428rem;\n}\n[dir=ltr] .v-tour .v-step {\n  text-align: left;\n}\n[dir=rtl] .v-tour .v-step {\n  text-align: right;\n}\n[dir] .v-tour .v-step .v-step__arrow {\n  border-color: #4d148c;\n}\n[dir=ltr] .v-tour .v-step .v-step__arrow {\n  border-left-color: transparent;\n  border-right-color: transparent;\n}\n[dir=rtl] .v-tour .v-step .v-step__arrow {\n  border-right-color: transparent;\n  border-left-color: transparent;\n}\n.v-tour .v-step .v-step__header {\n  font-weight: 500;\n  line-height: 2rem;\n}\n[dir] .v-tour .v-step .v-step__header {\n  background-color: #4d148c;\n  padding: 0.38rem 1.2rem;\n  margin-bottom: 0;\n}\n[dir=ltr] .v-tour .v-step .v-step__header {\n  border-top-left-radius: 0.428rem;\n  border-top-right-radius: 0.428rem;\n}\n[dir=rtl] .v-tour .v-step .v-step__header {\n  border-top-right-radius: 0.428rem;\n  border-top-left-radius: 0.428rem;\n}\n.v-tour .v-step .v-step__content {\n  color: #6e6b7b;\n}\n[dir] .v-tour .v-step .v-step__content {\n  padding: 1rem 0;\n  margin-bottom: 0;\n}\n[dir=ltr] .v-tour .v-step .v-step__content {\n  border-bottom-left-radius: 0.428rem;\n  border-bottom-right-radius: 0.428rem;\n}\n[dir=rtl] .v-tour .v-step .v-step__content {\n  border-bottom-right-radius: 0.428rem;\n  border-bottom-left-radius: 0.428rem;\n}\n[dir] .dark-layout .v-step {\n  background-color: #283046;\n}\nhtml[dir=rtl] .v-tour .v-step .btn svg {\n  transform: rotate(180deg);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-tour/dist/vue-tour.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-tour/dist/vue-tour.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.v-tour--active{pointer-events:none}.v-tour{pointer-events:auto}.v-tour__target--highlighted{-webkit-box-shadow:0 0 0 4px rgba(0,0,0,.4);box-shadow:0 0 0 4px rgba(0,0,0,.4);pointer-events:auto;z-index:9999}.v-tour__target--relative{position:relative}.v-step[data-v-7c9c03f0]{background:#50596c;color:#fff;max-width:320px;border-radius:3px;-webkit-filter:drop-shadow(0 0 2px rgba(0,0,0,.5));filter:drop-shadow(0 0 2px rgba(0,0,0,.5));padding:1rem;text-align:center;z-index:10000}.v-step .v-step__arrow[data-v-7c9c03f0]{width:0;height:0;border-style:solid;position:absolute;margin:.5rem;border-color:#50596c}.v-step .v-step__arrow--dark[data-v-7c9c03f0]{border-color:#454d5d}.v-step[x-placement^=top][data-v-7c9c03f0]{margin-bottom:.5rem}.v-step[x-placement^=top] .v-step__arrow[data-v-7c9c03f0]{border-width:.5rem .5rem 0 .5rem;border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent;bottom:-.5rem;left:calc(50% - 1rem);margin-top:0;margin-bottom:0}.v-step[x-placement^=bottom][data-v-7c9c03f0]{margin-top:.5rem}.v-step[x-placement^=bottom] .v-step__arrow[data-v-7c9c03f0]{border-width:0 .5rem .5rem .5rem;border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;top:-.5rem;left:calc(50% - 1rem);margin-top:0;margin-bottom:0}.v-step[x-placement^=right][data-v-7c9c03f0]{margin-left:.5rem}.v-step[x-placement^=right] .v-step__arrow[data-v-7c9c03f0]{border-width:.5rem .5rem .5rem 0;border-left-color:transparent;border-top-color:transparent;border-bottom-color:transparent;left:-.5rem;top:calc(50% - 1rem);margin-left:0;margin-right:0}.v-step[x-placement^=left][data-v-7c9c03f0]{margin-right:.5rem}.v-step[x-placement^=left] .v-step__arrow[data-v-7c9c03f0]{border-width:.5rem 0 .5rem .5rem;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;right:-.5rem;top:calc(50% - 1rem);margin-left:0;margin-right:0}.v-step__header[data-v-7c9c03f0]{margin:-1rem -1rem .5rem;padding:.5rem;background-color:#454d5d;border-top-left-radius:3px;border-top-right-radius:3px}.v-step__content[data-v-7c9c03f0]{margin:0 0 1rem 0}.v-step__button[data-v-7c9c03f0]{background:transparent;border:.05rem solid #fff;border-radius:.1rem;color:#fff;cursor:pointer;display:inline-block;font-size:.8rem;height:1.8rem;line-height:1rem;outline:none;margin:0 .2rem;padding:.35rem .4rem;text-align:center;text-decoration:none;-webkit-transition:all .2s ease;transition:all .2s ease;vertical-align:middle;white-space:nowrap}.v-step__button[data-v-7c9c03f0]:hover{background-color:hsla(0,0%,100%,.95);color:#50596c}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tour.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=template&id=2f7e001e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=template&id=2f7e001e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("v-tour", {
    attrs: { name: "vuexyTour", steps: _vm.steps },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function (tour) {
          return [
            _c(
              "transition",
              { attrs: { name: "fade" } },
              _vm._l(tour.steps, function (step, index) {
                return tour.currentStep === index
                  ? _c(
                      "v-step",
                      {
                        key: index,
                        attrs: {
                          step: step,
                          "previous-step": tour.previousStep,
                          "next-step": tour.nextStep,
                          stop: tour.stop,
                          "is-first": tour.isFirst,
                          "is-last": tour.isLast,
                          labels: tour.labels,
                        },
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "tour-actions d-flex justify-content-between",
                            attrs: { slot: "actions" },
                            slot: "actions",
                          },
                          [
                            tour.currentStep != tour.steps.length - 1
                              ? _c(
                                  "b-button",
                                  {
                                    staticClass: "btn-tour-skip mr-1",
                                    attrs: {
                                      size: "sm",
                                      variant: "outline-primary",
                                    },
                                    on: { click: tour.stop },
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "mr-25 align-middle" },
                                      [_vm._v("Skip")]
                                    ),
                                    _vm._v(" "),
                                    _c("feather-icon", {
                                      attrs: { icon: "XIcon", size: "12" },
                                    }),
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            tour.currentStep
                              ? _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      size: "sm",
                                      variant: "outline-primary mr-1",
                                    },
                                    on: { click: tour.previousStep },
                                  },
                                  [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "ChevronLeftIcon",
                                        size: "12",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "ml-25 align-middle" },
                                      [_vm._v("Previous")]
                                    ),
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            tour.currentStep != tour.steps.length - 1
                              ? _c(
                                  "b-button",
                                  {
                                    staticClass: "btn-tour-next",
                                    attrs: { size: "sm", variant: "primary" },
                                    on: { click: tour.nextStep },
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "mr-25 align-middle" },
                                      [_vm._v("Next")]
                                    ),
                                    _vm._v(" "),
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "ChevronRightIcon",
                                        size: "12",
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            tour.currentStep == tour.steps.length - 1
                              ? _c(
                                  "b-button",
                                  {
                                    staticClass: "btn-tour-finish",
                                    attrs: { size: "sm", variant: "primary" },
                                    on: { click: tour.stop },
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "mr-25 align-middle" },
                                      [_vm._v("Finish")]
                                    ),
                                    _vm._v(" "),
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "CheckCircleIcon",
                                        size: "12",
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                      ]
                    )
                  : _vm._e()
              }),
              1
            ),
          ]
        },
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=template&id=5f01a4c4&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=template&id=5f01a4c4& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      attrs: { id: "tour-card", title: "Tour" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeTour) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-button",
        {
          directives: [
            {
              name: "ripple",
              rawName: "v-ripple.400",
              value: "rgba(113, 102, 240, 0.15)",
              expression: "'rgba(113, 102, 240, 0.15)'",
              modifiers: { 400: true },
            },
          ],
          attrs: { variant: "outline-primary" },
          on: { click: _vm.tourStart },
        },
        [_vm._v("\n    Start Tour\n  ")]
      ),
      _vm._v(" "),
      _c("app-tour", { attrs: { steps: _vm.steps } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/app-tour/AppTour.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/components/app-tour/AppTour.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppTour_vue_vue_type_template_id_2f7e001e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppTour.vue?vue&type=template&id=2f7e001e& */ "./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=template&id=2f7e001e&");
/* harmony import */ var _AppTour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppTour.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppTour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppTour_vue_vue_type_template_id_2f7e001e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppTour_vue_vue_type_template_id_2f7e001e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/app-tour/AppTour.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTour.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=template&id=2f7e001e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=template&id=2f7e001e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTour_vue_vue_type_template_id_2f7e001e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTour.vue?vue&type=template&id=2f7e001e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-tour/AppTour.vue?vue&type=template&id=2f7e001e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTour_vue_vue_type_template_id_2f7e001e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTour_vue_vue_type_template_id_2f7e001e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/extensions/tour/Tour.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/extensions/tour/Tour.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tour_vue_vue_type_template_id_5f01a4c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tour.vue?vue&type=template&id=5f01a4c4& */ "./resources/js/src/views/extensions/tour/Tour.vue?vue&type=template&id=5f01a4c4&");
/* harmony import */ var _Tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tour.vue?vue&type=script&lang=js& */ "./resources/js/src/views/extensions/tour/Tour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Tour_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tour.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/extensions/tour/Tour.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tour_vue_vue_type_template_id_5f01a4c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tour_vue_vue_type_template_id_5f01a4c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/extensions/tour/Tour.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/extensions/tour/Tour.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/extensions/tour/Tour.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tour.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/extensions/tour/Tour.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/tour/Tour.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tour.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/extensions/tour/Tour.vue?vue&type=template&id=5f01a4c4&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/tour/Tour.vue?vue&type=template&id=5f01a4c4& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_template_id_5f01a4c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tour.vue?vue&type=template&id=5f01a4c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/tour/Tour.vue?vue&type=template&id=5f01a4c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_template_id_5f01a4c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_vue_vue_type_template_id_5f01a4c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/extensions/tour/code.js":
/*!********************************************************!*\
  !*** ./resources/js/src/views/extensions/tour/code.js ***!
  \********************************************************/
/*! exports provided: codeTour, codedefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeTour", function() { return codeTour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codedefault", function() { return codedefault; });
var codeTour = "\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"tourStart\"\n    >\n      Start Tour\n    </b-button>\n\n    <app-tour :steps=\"steps\" />\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport AppTour from '@core/components/app-tour/AppTour.vue'\n\nexport default {\n  name: 'ShepherdExample',\n  components: {\n    BButton,\n    AppTour,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      steps: [\n        {\n          target: '#tour-card',\n          header: {\n            title: 'Card',\n          },\n          content: 'This card contains demo for the tour.',\n        },\n        {\n          target: '#tour-card .icon-code',\n          header: {\n            title: 'View demo Source',\n          },\n          content: 'If you ever find your self confused, you can click on this code icon to check the source of current demo.',\n        },\n        {\n          target: '#tour-card .btn',\n          header: {\n            title: 'Trigger Tour',\n          },\n          content: 'You can click on this button to trigger the tour.',\n        },\n      ],\n    }\n  },\n  methods: {\n\n    // tour steps\n    tourStart() {\n      this.$tours.vuexyTour.start()\n    },\n  },\n}\n</script>\n\n<style lang=\"scss\">\n@import '~@core/scss/vue/libs/tour.scss';\n</style>\n";
var codedefault = 'defaul';

/***/ })

}]);