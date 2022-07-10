(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_dashboard_ecommerce_Ecommerce_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/dashboard/ecommerce/Ecommerce.vue */ "./resources/js/src/views/dashboard/ecommerce/Ecommerce.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    Ecommerce: _views_dashboard_ecommerce_Ecommerce_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      contentWidth: this.$store.state.appConfig.layout.contentWidth
    };
  },
  created: function created() {
    this.$store.commit('appConfig/UPDATE_CONTENT_WIDTH', 'boxed');
  },
  destroyed: function destroyed() {
    this.$store.commit('appConfig/UPDATE_CONTENT_WIDTH', this.contentWidth);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=template&id=8c8579de&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=template&id=8c8579de& ***!
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
  return _c(
    "div",
    [
      _c("b-alert", { attrs: { variant: "primary", show: "" } }, [
        _c("div", { staticClass: "alert-body" }, [
          _c(
            "p",
            [
              _c("strong", [_vm._v("Info: ")]),
              _vm._v(" "),
              _c("span", [_vm._v("Please check the ")]),
              _vm._v(" "),
              _c(
                "b-link",
                {
                  staticClass: "alert-link",
                  attrs: {
                    href: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/guide/layout/page-layout-examples.html#boxed-content",
                    target: "_blank",
                  },
                },
                [_vm._v("Boxed Layout documentation")]
              ),
              _vm._v(" "),
              _c("span", [_vm._v(" for more details.")]),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("ecommerce"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/ui/page-layouts/BoxedLayout.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/ui/page-layouts/BoxedLayout.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxedLayout_vue_vue_type_template_id_8c8579de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxedLayout.vue?vue&type=template&id=8c8579de& */ "./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=template&id=8c8579de&");
/* harmony import */ var _BoxedLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxedLayout.vue?vue&type=script&lang=js& */ "./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BoxedLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BoxedLayout_vue_vue_type_template_id_8c8579de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BoxedLayout_vue_vue_type_template_id_8c8579de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/ui/page-layouts/BoxedLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxedLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxedLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxedLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=template&id=8c8579de&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=template&id=8c8579de& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxedLayout_vue_vue_type_template_id_8c8579de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxedLayout.vue?vue&type=template&id=8c8579de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui/page-layouts/BoxedLayout.vue?vue&type=template&id=8c8579de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxedLayout_vue_vue_type_template_id_8c8579de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxedLayout_vue_vue_type_template_id_8c8579de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);