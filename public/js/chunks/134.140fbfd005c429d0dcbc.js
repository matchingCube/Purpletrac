(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[134],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18nChange_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18nChange.vue */ "./resources/js/src/views/extensions/i18n/i18nChange.vue");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    i18nChange: _i18nChange_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/extensions/i18n/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormRadio"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormRadioGroup"]
  },
  data: function data() {
    return {
      locale: this.$i18n.locale,
      codeChange: _code__WEBPACK_IMPORTED_MODULE_2__["codeChange"]
    };
  },
  watch: {
    locale: function locale(val) {
      this.$i18n.locale = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=template&id=94cc5584&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=template&id=94cc5584& ***!
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
  return _c("i18n-change")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=template&id=201a588e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=template&id=201a588e& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Change Locale" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeChange) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", { staticClass: "mb-0" }, [
        _vm._v("\n    Your Current Locale: "),
        _c("strong", [_vm._v(_vm._s(_vm.locale))]),
      ]),
      _vm._v(" "),
      _c(
        "b-form-group",
        { staticClass: "mb-0" },
        [
          _c(
            "b-form-radio-group",
            {
              staticClass: "demo-inline-spacing",
              attrs: { id: "radio-group-2", name: "radio-sub-component" },
              model: {
                value: _vm.locale,
                callback: function ($$v) {
                  _vm.locale = $$v
                },
                expression: "locale",
              },
            },
            [
              _c("b-form-radio", { attrs: { value: "en" } }, [
                _vm._v("\n        English\n      "),
              ]),
              _vm._v(" "),
              _c("b-form-radio", { attrs: { value: "fr" } }, [
                _vm._v("\n        French\n      "),
              ]),
              _vm._v(" "),
              _c("b-form-radio", { attrs: { value: "de" } }, [
                _vm._v("\n        German\n      "),
              ]),
              _vm._v(" "),
              _c("b-form-radio", { attrs: { value: "pt" } }, [
                _vm._v("\n        Portuguese\n      "),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "border rounded mt-3 p-2" }, [
        _c("h5", { staticClass: "mb-1" }, [
          _vm._v("\n      " + _vm._s(_vm.$t("message.title")) + "\n    "),
        ]),
        _vm._v("\n    " + _vm._s(_vm.$t("message.text")) + "\n  "),
      ]),
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

/***/ "./resources/js/src/views/extensions/i18n/code.js":
/*!********************************************************!*\
  !*** ./resources/js/src/views/extensions/i18n/code.js ***!
  \********************************************************/
/*! exports provided: codeChange, codeDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeChange", function() { return codeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeDefault", function() { return codeDefault; });
var codeChange = "\n<template>\n  <div>\n    <!-- radio buttons -->\n    <b-form-group class=\"mb-0\">\n      <b-form-radio-group\n        id=\"radio-group-2\"\n        v-model=\"locale\"\n        name=\"radio-sub-component\"\n        class=\"demo-inline-spacing\"\n      >\n        <b-form-radio\n          value=\"en\"\n        >\n          English\n        </b-form-radio>\n        <b-form-radio\n          value=\"fr\"\n        >\n          French\n        </b-form-radio>\n        <b-form-radio\n          value=\"de\"\n        >\n          German\n        </b-form-radio>\n        <b-form-radio value=\"pt\">\n          Portuguese\n        </b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n\n    <!-- card -->\n    <div class=\"border rounded mt-3 p-2\">\n      <h5 class=\"mb-1\">\n        {{ $t('message.title') }}\n      </h5>\n      {{ $t('message.text') }}\n    </div>\n  </div>\n</template>\n\n<script>\nimport {\n  BFormRadio, BFormRadioGroup, BFormGroup, BCardText,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormRadio,\n    BCardText,\n    BFormRadioGroup,\n  },\n  data() {\n    return {\n      locale: this.$i18n.locale,\n    }\n  },\n  watch: {\n    locale(val) {\n      this.$i18n.locale = val\n    },\n  },\n}\n</script>\n";
var codeDefault = 'default';

/***/ }),

/***/ "./resources/js/src/views/extensions/i18n/i18n.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/extensions/i18n/i18n.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n_vue_vue_type_template_id_94cc5584___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.vue?vue&type=template&id=94cc5584& */ "./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=template&id=94cc5584&");
/* harmony import */ var _i18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.vue?vue&type=script&lang=js& */ "./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _i18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _i18n_vue_vue_type_template_id_94cc5584___WEBPACK_IMPORTED_MODULE_0__["render"],
  _i18n_vue_vue_type_template_id_94cc5584___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/extensions/i18n/i18n.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_i18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./i18n.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_i18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=template&id=94cc5584&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=template&id=94cc5584& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_i18n_vue_vue_type_template_id_94cc5584___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./i18n.vue?vue&type=template&id=94cc5584& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/i18n/i18n.vue?vue&type=template&id=94cc5584&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_i18n_vue_vue_type_template_id_94cc5584___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_i18n_vue_vue_type_template_id_94cc5584___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/extensions/i18n/i18nChange.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/extensions/i18n/i18nChange.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18nChange_vue_vue_type_template_id_201a588e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18nChange.vue?vue&type=template&id=201a588e& */ "./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=template&id=201a588e&");
/* harmony import */ var _i18nChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18nChange.vue?vue&type=script&lang=js& */ "./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _i18nChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _i18nChange_vue_vue_type_template_id_201a588e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _i18nChange_vue_vue_type_template_id_201a588e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/extensions/i18n/i18nChange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_i18nChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./i18nChange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_i18nChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=template&id=201a588e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=template&id=201a588e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_i18nChange_vue_vue_type_template_id_201a588e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./i18nChange.vue?vue&type=template&id=201a588e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/i18n/i18nChange.vue?vue&type=template&id=201a588e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_i18nChange_vue_vue_type_template_id_201a588e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_i18nChange_vue_vue_type_template_id_201a588e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);