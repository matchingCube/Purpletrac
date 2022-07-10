(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[150],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.us */ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-input-mask/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // eslint-disable-next-line import/no-extraneous-dependencies



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroupPrepend"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroup"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"]
  },
  data: function data() {
    return {
      form: {
        cardNumber: null,
        date: null,
        phone: null
      },
      options: {
        creditCard: {
          creditCard: true
        },
        date: {
          date: true,
          delimiter: '-',
          datePattern: ['Y', 'm', 'd']
        },
        phone: {
          phone: true,
          phoneRegionCode: 'US'
        },
        time: {
          time: true,
          timePattern: ['h', 'm', 's']
        },
        number: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand'
        },
        block: {
          blocks: [4, 3, 3],
          uppercase: true
        },
        delimiter: {
          delimiter: '·',
          blocks: [3, 3, 3],
          uppercase: true
        },
        customDelimiter: {
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
          uppercase: true
        },
        prefix: {
          prefix: '+63',
          blocks: [3, 3, 3, 4],
          uppercase: true
        }
      },
      codeMask: _code__WEBPACK_IMPORTED_MODULE_4__["codeMask"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Input Mask" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeMask) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "6", xl: "4" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Credit Card", "label-for": "cardNumber" } },
                [
                  _c("cleave", {
                    staticClass: "form-control",
                    attrs: {
                      id: "cardNumber",
                      raw: false,
                      options: _vm.options.creditCard,
                      placeholder: "0000 0000 0000 0000",
                    },
                    model: {
                      value: _vm.form.cardNumber,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "cardNumber", $$v)
                      },
                      expression: "form.cardNumber",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6", xl: "4" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Phone Number", "label-for": "phone" } },
                [
                  _c(
                    "b-input-group",
                    [
                      _c(
                        "b-input-group-prepend",
                        { attrs: { "is-text": "" } },
                        [_vm._v("\n            US (+1)\n          ")]
                      ),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          id: "phone",
                          raw: false,
                          options: _vm.options.phone,
                          placeholder: "1234 567 8900",
                        },
                        model: {
                          value: _vm.form.phone,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "phone", $$v)
                          },
                          expression: "form.phone",
                        },
                      }),
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
            "b-col",
            { attrs: { md: "6", xl: "4" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Date", "label-for": "date" } },
                [
                  _c("cleave", {
                    staticClass: "form-control",
                    attrs: {
                      id: "date",
                      raw: false,
                      options: _vm.options.date,
                      placeholder: "YYYY-MM-DD",
                    },
                    model: {
                      value: _vm.form.date,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "date", $$v)
                      },
                      expression: "form.date",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6", xl: "4" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Time", "label-for": "time" } },
                [
                  _c("cleave", {
                    staticClass: "form-control",
                    attrs: {
                      id: "time",
                      raw: false,
                      options: _vm.options.time,
                      placeholder: "hh:mm:ss",
                    },
                    model: {
                      value: _vm.form.time,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "time", $$v)
                      },
                      expression: "form.time",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6", xl: "4" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: { label: "Numeral Formatting", "label-for": "number" },
                },
                [
                  _c("cleave", {
                    staticClass: "form-control",
                    attrs: {
                      id: "number",
                      raw: false,
                      options: _vm.options.number,
                      placeholder: "10,000",
                    },
                    model: {
                      value: _vm.form.number,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "number", $$v)
                      },
                      expression: "form.number",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6", xl: "4" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Blocks", "label-for": "block" } },
                [
                  _c("cleave", {
                    staticClass: "form-control",
                    attrs: {
                      id: "block",
                      raw: false,
                      options: _vm.options.block,
                      placeholder: "Block [4,3,3]",
                    },
                    model: {
                      value: _vm.form.block,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "block", $$v)
                      },
                      expression: "form.block",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6", xl: "4" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Delimiters", "label-for": "delimiter" } },
                [
                  _c("cleave", {
                    staticClass: "form-control",
                    attrs: {
                      id: "delimiter",
                      raw: false,
                      options: _vm.options.delimiter,
                      placeholder: "Delimiter: '.'",
                    },
                    model: {
                      value: _vm.form.delimiter,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "delimiter", $$v)
                      },
                      expression: "form.delimiter",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6", xl: "4" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Custom Delimiters",
                    "label-for": "customDelimiter",
                  },
                },
                [
                  _c("cleave", {
                    staticClass: "form-control",
                    attrs: {
                      id: "customDelimiter",
                      raw: false,
                      options: _vm.options.customDelimiter,
                      placeholder: "Delimiter: ['.', '.', '-']",
                    },
                    model: {
                      value: _vm.form.customDelimiter,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "customDelimiter", $$v)
                      },
                      expression: "form.customDelimiter",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6", xl: "4" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Prefix", "label-for": "prefix" } },
                [
                  _c("cleave", {
                    staticClass: "form-control",
                    attrs: {
                      id: "prefix",
                      raw: false,
                      options: _vm.options.prefix,
                    },
                    model: {
                      value: _vm.form.prefix,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "prefix", $$v)
                      },
                      expression: "form.prefix",
                    },
                  }),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormInputMask_vue_vue_type_template_id_398ddc89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormInputMask.vue?vue&type=template&id=398ddc89& */ "./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89&");
/* harmony import */ var _FormInputMask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormInputMask.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormInputMask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormInputMask_vue_vue_type_template_id_398ddc89___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormInputMask_vue_vue_type_template_id_398ddc89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputMask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormInputMask.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputMask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputMask_vue_vue_type_template_id_398ddc89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormInputMask.vue?vue&type=template&id=398ddc89& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputMask_vue_vue_type_template_id_398ddc89___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputMask_vue_vue_type_template_id_398ddc89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-input-mask/code.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-input-mask/code.js ***!
  \***************************************************************************/
/*! exports provided: codeMask, codeDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeMask", function() { return codeMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeDefault", function() { return codeDefault; });
var codeMask = "\n<template>\n  <b-row>\n\n    <!-- credit card -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Credit Card\"\n        label-for=\"cardNumber\"\n      >\n        <cleave\n          id=\"cardNumber\"\n          v-model=\"form.cardNumber\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.creditCard\"\n          placeholder=\"0000 0000 0000 0000\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- phone number -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Phone Number\"\n        label-for=\"phone\"\n      >\n        <b-input-group>\n          <b-input-group-prepend is-text>\n            US (+1)\n          </b-input-group-prepend>\n          <cleave\n            id=\"phone\"\n            v-model=\"form.phone\"\n            class=\"form-control\"\n            :raw=\"false\"\n            :options=\"options.phone\"\n            placeholder=\"1234 567 8900\"\n          />\n        </b-input-group>\n\n      </b-form-group>\n    </b-col>\n\n    <!-- date -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Date\"\n        label-for=\"date\"\n      >\n        <cleave\n          id=\"date\"\n          v-model=\"form.date\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.date\"\n          placeholder=\"YYYY-MM-DD\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- time -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Time\"\n        label-for=\"time\"\n      >\n        <cleave\n          id=\"time\"\n          v-model=\"form.time\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.time\"\n          placeholder=\"hh:mm:ss\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- Numeral Formatting -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Numeral Formatting\"\n        label-for=\"number\"\n      >\n        <cleave\n          id=\"number\"\n          v-model=\"form.number\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.number\"\n          placeholder=\"10,000\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- block -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Blocks\"\n        label-for=\"block\"\n      >\n        <cleave\n          id=\"block\"\n          v-model=\"form.block\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.block\"\n          placeholder=\"Block [4,3,3]\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- delimiters -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Delimiters\"\n        label-for=\"delimiter\"\n      >\n        <cleave\n          id=\"delimiter\"\n          v-model=\"form.delimiter\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.delimiter\"\n          placeholder=\"Delimiter: '.'\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- Custom Delimiters -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Custom Delimiters\"\n        label-for=\"customDelimiter\"\n      >\n        <cleave\n          id=\"customDelimiter\"\n          v-model=\"form.customDelimiter\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.customDelimiter\"\n          placeholder=\"Delimiter: ['.', '.', '-']\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- prefix -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Prefix\"\n        label-for=\"prefix\"\n      >\n        <cleave\n          id=\"prefix\"\n          v-model=\"form.prefix\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.prefix\"\n        />\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BRow, BCol, BFormGroup, BInputGroupPrepend, BInputGroup} from 'bootstrap-vue'\nimport Cleave from 'vue-cleave-component'\n// eslint-disable-next-line import/no-extraneous-dependencies\nimport 'cleave.js/dist/addons/cleave-phone.us'\n\nexport default {\n  components: {\n    BFormGroup,\n    BInputGroupPrepend,\n    BInputGroup,\n    Cleave,\n    BRow,\n    BCol,\n  },\n  data() {\n    return {\n      form: {\n        cardNumber: null,\n        date: null,\n        phone: null,\n      },\n      options: {\n        creditCard: {\n          creditCard: true,\n        },\n        date: {\n          date: true,\n          delimiter: '-',\n          datePattern: ['Y', 'm', 'd'],\n        },\n        phone: {\n          phone: true,\n          phoneRegionCode: 'US',\n        },\n        time: {\n          time: true,\n          timePattern: ['h', 'm', 's'],\n        },\n        number: {\n          numeral: true,\n          numeralThousandsGroupStyle: 'thousand',\n        },\n        block: {\n          blocks: [4, 3, 3],\n          uppercase: true,\n        },\n        delimiter: {\n          delimiter: '\xB7',\n          blocks: [3, 3, 3],\n          uppercase: true,\n        },\n        customDelimiter: {\n          delimiters: ['.', '.', '-'],\n          blocks: [3, 3, 3, 2],\n          uppercase: true,\n        },\n        prefix: {\n          prefix: '+63',\n          blocks: [3, 3, 3, 4],\n          uppercase: true,\n        },\n      },\n    }\n  },\n}\n</script> \n";
var codeDefault = '';

/***/ })

}]);