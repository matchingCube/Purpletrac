(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _FormTagsBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTagsBasic.vue */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue");
/* harmony import */ var _FormTagsSeparators_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormTagsSeparators.vue */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue");
/* harmony import */ var _FormTagsRemoval_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormTagsRemoval.vue */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue");
/* harmony import */ var _FormTagsStyling_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormTagsStyling.vue */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue");
/* harmony import */ var _FormTagsValidation_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormTagsValidation.vue */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue");
/* harmony import */ var _FormTagsDetecting_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormTagsDetecting.vue */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue");
/* harmony import */ var _FormTagsNativeInput_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormTagsNativeInput.vue */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue");
/* harmony import */ var _FormTagsCustom_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormTagsCustom.vue */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue");
/* harmony import */ var _FormTagsAdvanceCustom_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormTagsAdvanceCustom.vue */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue");
//
//
//
//
//
//
//
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
    BasicFormTags: _FormTagsBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SeparatorsFormTags: _FormTagsSeparators_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    RemovalFormTags: _FormTagsRemoval_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    StylingFormTags: _FormTagsStyling_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ValidationFormTags: _FormTagsValidation_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DetectingFormTags: _FormTagsDetecting_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    NativeInputFormTags: _FormTagsNativeInput_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    CustomFormTags: _FormTagsCustom_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    AdvanceCustomFormTags: _FormTagsAdvanceCustom_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-tag/code.js");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_6__["default"],
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormTags"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormGroup"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BDropdown"],
    BDropdownForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BDropdownForm"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormInput"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BDropdownDivider"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCardText"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BDropdownItem"],
    BFormTag: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormTag"],
    BDropdownText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BDropdownText"]
  },
  data: function data() {
    return {
      options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
      search: '',
      value: [],
      codeAdvanceCustom: _code__WEBPACK_IMPORTED_MODULE_8__["codeAdvanceCustom"]
    };
  },
  computed: {
    criteria: function criteria() {
      // Compute the search criteria
      return this.search.trim().toLowerCase();
    },
    availableOptions: function availableOptions() {
      var _this = this;

      var criteria = this.criteria; // Filter out already selected options

      var options = this.options.filter(function (opt) {
        return _this.value.indexOf(opt) === -1;
      });

      if (criteria) {
        // Show only options that match criteria
        return options.filter(function (opt) {
          return opt.toLowerCase().indexOf(criteria) > -1;
        });
      } // Show all options available


      return options;
    },
    searchDesc: function searchDesc() {
      if (this.criteria && this.availableOptions.length === 0) {
        return 'There are no tags matching your search criteria';
      }

      return '';
    }
  },
  methods: {
    onOptionClick: function onOptionClick(_ref) {
      var option = _ref.option,
          addTag = _ref.addTag;
      addTag(option);
      this.search = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-tag/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTags"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      value: ['apple', 'orange'],
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_2__["codeBasic"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-tag/code.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_3__["default"],
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormTags"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormGroup"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormSelect"],
    BFormTag: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormTag"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardText"]
  },
  data: function data() {
    return {
      options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
      value: [],
      codeCustom: _code__WEBPACK_IMPORTED_MODULE_5__["codeCustom"]
    };
  },
  computed: {
    availableOptions: function availableOptions() {
      var _this = this;

      return this.options.filter(function (opt) {
        return _this.value.indexOf(opt) === -1;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-tag/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTags"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      tags: [],
      validTags: [],
      invalidTags: [],
      duplicateTags: [],
      codeDetecting: _code__WEBPACK_IMPORTED_MODULE_2__["codeDetecting"]
    };
  },
  methods: {
    onTagState: function onTagState(valid, invalid, duplicate) {
      this.validTags = valid;
      this.invalidTags = invalid;
      this.duplicateTags = duplicate;
    },
    validator: function validator(tag) {
      return tag.length > 2 && tag.length < 6;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-tag/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTags"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroup"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroupAppend"]
  },
  data: function data() {
    return {
      value: ['apple', 'orange', 'banana', 'pear', 'peach'],
      codeNativeInput: _code__WEBPACK_IMPORTED_MODULE_2__["codeNativeInput"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-tag/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTags"],
    BFormText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormText"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      value: ['apple', 'orange', 'grape'],
      codeRemoval: _code__WEBPACK_IMPORTED_MODULE_2__["codeRemoval"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-tag/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTags"]
  },
  data: function data() {
    return {
      value: ['one', 'two'],
      codeSeparators: _code__WEBPACK_IMPORTED_MODULE_2__["codeSeparators"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-tag/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTags"]
  },
  data: function data() {
    return {
      value: ['apple', 'orange', 'grape'],
      codeStyling: _code__WEBPACK_IMPORTED_MODULE_2__["codeStyling"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-tag/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTags"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"]
  },
  data: function data() {
    return {
      tags: [],
      dirty: false,
      codeValidation: _code__WEBPACK_IMPORTED_MODULE_2__["codeValidation"]
    };
  },
  computed: {
    state: function state() {
      // Overall component validation state
      return this.dirty ? this.tags.length > 2 && this.tags.length < 9 : null;
    }
  },
  watch: {
    tags: function tags() {
      // Set the dirty flag on first change to the tags array
      this.dirty = true;
    }
  },
  methods: {
    tagValidator: function tagValidator(tag) {
      // Individual tag validator function
      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es-x/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=template&id=aec86c8c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=template&id=aec86c8c& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { cols: "12" } },
        [
          _c("basic-form-tags"),
          _vm._v(" "),
          _c("separators-form-tags"),
          _vm._v(" "),
          _c("removal-form-tags"),
          _vm._v(" "),
          _c("styling-form-tags"),
          _vm._v(" "),
          _c("validation-form-tags"),
          _vm._v(" "),
          _c("detecting-form-tags"),
          _vm._v(" "),
          _c("native-input-form-tags"),
          _vm._v(" "),
          _c("custom-form-tags"),
          _vm._v(" "),
          _c("advance-custom-form-tags"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=template&id=980ba1cc&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=template&id=980ba1cc& ***!
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
      attrs: { title: "Advanced custom rendering usage" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeAdvanceCustom) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("In situations where the ")]),
        _vm._v(" "),
        _c("code", [_vm._v("inputHandlers")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            "\n      will not work with your custom input, or if you need greater control over tag creation, you can take advantage\n      of the additional properties provided via the default slot's scope.\n    "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "b-form-group",
            { attrs: { label: "Tagged input using dropdown" } },
            [
              _c("b-form-tags", {
                attrs: { "no-outer-focus": "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var tags = ref.tags
                      var disabled = ref.disabled
                      var addTag = ref.addTag
                      var removeTag = ref.removeTag
                      return [
                        tags.length > 0
                          ? _c(
                              "ul",
                              {
                                staticClass: "list-inline d-inline-block mb-1",
                              },
                              _vm._l(tags, function (tag) {
                                return _c(
                                  "li",
                                  { key: tag, staticClass: "list-inline-item" },
                                  [
                                    _c(
                                      "b-form-tag",
                                      {
                                        attrs: {
                                          title: tag,
                                          disabled: disabled,
                                          variant: "primary",
                                        },
                                        on: {
                                          remove: function ($event) {
                                            return removeTag(tag)
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(tag) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "b-dropdown",
                          {
                            attrs: {
                              size: "sm",
                              variant: "outline-secondary",
                              block: "",
                              "menu-class": "w-100",
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "button-content",
                                  fn: function () {
                                    return [
                                      _c("feather-icon", {
                                        attrs: { icon: "LinkIcon" },
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "ml-25" }, [
                                        _vm._v("Choose tags"),
                                      ]),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              true
                            ),
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "b-dropdown-form",
                              {
                                on: {
                                  submit: function ($event) {
                                    $event.stopPropagation()
                                    $event.preventDefault()
                                    return function () {}.apply(null, arguments)
                                  },
                                },
                              },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    staticClass: "mb-0",
                                    attrs: {
                                      "label-for": "tag-search-input",
                                      label: "Search tags",
                                      "label-cols-md": "auto",
                                      "label-size": "sm",
                                      description: _vm.searchDesc,
                                      disabled: disabled,
                                    },
                                  },
                                  [
                                    _c("b-form-input", {
                                      attrs: {
                                        id: "tag-search-input",
                                        type: "search",
                                        size: "sm",
                                        autocomplete: "off",
                                      },
                                      model: {
                                        value: _vm.search,
                                        callback: function ($$v) {
                                          _vm.search = $$v
                                        },
                                        expression: "search",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _vm._l(_vm.availableOptions, function (option) {
                              return _c(
                                "b-dropdown-item",
                                {
                                  key: option,
                                  on: {
                                    click: function ($event) {
                                      return _vm.onOptionClick({
                                        option: option,
                                        addTag: addTag,
                                      })
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(option) +
                                      "\n            "
                                  ),
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _vm.availableOptions.length === 0
                              ? _c("b-dropdown-text", [
                                  _vm._v(
                                    "\n              There are no tags available to select\n            "
                                  ),
                                ])
                              : _vm._e(),
                          ],
                          2
                        ),
                      ]
                    },
                  },
                ]),
                model: {
                  value: _vm.value,
                  callback: function ($$v) {
                    _vm.value = $$v
                  },
                  expression: "value",
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=template&id=14793396&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=template&id=14793396& ***!
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
      attrs: { title: "Tags Basic" },
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
      _c("b-card-text", [
        _c("span", [_vm._v("Tags are added by clicking the")]),
        _vm._v(" "),
        _c("code", [_vm._v("Add")]),
        _vm._v(" "),
        _c("span", [_vm._v(" button, pressing the")]),
        _vm._v(" "),
        _c("code", [_vm._v("Enter")]),
        _vm._v(" "),
        _c("span", [_vm._v(" key or optionally when the")]),
        _vm._v(" "),
        _c("code", [_vm._v("change")]),
        _vm._v(" "),
        _c("span", [_vm._v(" event fires on the new tag input.")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("label", { attrs: { for: "tags-basic" } }, [
            _vm._v("Type a new tag and press enter"),
          ]),
          _vm._v(" "),
          _c("b-form-tags", {
            staticClass: "mb-2",
            attrs: { "input-id": "tags-basic" },
            model: {
              value: _vm.value,
              callback: function ($$v) {
                _vm.value = $$v
              },
              expression: "value",
            },
          }),
          _vm._v(" "),
          _c("b-card-text", [_vm._v("Value: " + _vm._s(_vm.value))]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=template&id=abfd760c&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=template&id=abfd760c& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Using custom form components" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeCustom) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _vm._v(
          "\n    The scope contains attributes and event handlers that can be directly bound to most custom inputs or select\n    components.\n  "
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "b-form-group",
            { attrs: { label: "Tagged input using select" } },
            [
              _c("b-form-tags", {
                attrs: {
                  size: "lg",
                  "add-on-change": "",
                  "no-outer-focus": "",
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var tags = ref.tags
                      var inputAttrs = ref.inputAttrs
                      var inputHandlers = ref.inputHandlers
                      var disabled = ref.disabled
                      var removeTag = ref.removeTag
                      return [
                        tags.length > 0
                          ? _c(
                              "ul",
                              {
                                staticClass: "list-inline d-inline-block mb-1",
                              },
                              _vm._l(tags, function (tag) {
                                return _c(
                                  "li",
                                  { key: tag, staticClass: "list-inline-item" },
                                  [
                                    _c(
                                      "b-form-tag",
                                      {
                                        attrs: {
                                          title: tag,
                                          disabled: disabled,
                                          variant: "primary",
                                        },
                                        on: {
                                          remove: function ($event) {
                                            return removeTag(tag)
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(tag) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "b-form-select",
                          _vm._g(
                            _vm._b(
                              {
                                attrs: {
                                  disabled:
                                    disabled ||
                                    _vm.availableOptions.length === 0,
                                  options: _vm.availableOptions,
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "first",
                                      fn: function () {
                                        return [
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                disabled: "",
                                                value: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                Choose a tag...\n              "
                                              ),
                                            ]
                                          ),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              "b-form-select",
                              inputAttrs,
                              false
                            ),
                            inputHandlers
                          )
                        ),
                      ]
                    },
                  },
                ]),
                model: {
                  value: _vm.value,
                  callback: function ($$v) {
                    _vm.value = $$v
                  },
                  expression: "value",
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=template&id=68390c66&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=template&id=68390c66& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Detecting new, invalid, and duplicate tags" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeDetecting) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("The event ")]),
        _vm._v(" "),
        _c("code", [_vm._v("tag-state")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            "will be emitted whenever new tags are entered into the new tag input element, tags that do not pass validation,\n      or duplicate tags are detected. The event handler will receive three arrays as its arguments:\n    "
          ),
        ]),
        _vm._v(" "),
        _c("code", [_vm._v("validTags, invalidTags , duplicateTags ")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("label", { attrs: { for: "tags-state-event" } }, [
            _vm._v("Enter tags"),
          ]),
          _vm._v(" "),
          _c("b-form-tags", {
            attrs: {
              "input-id": "tags-state-event",
              "tag-validator": _vm.validator,
              placeholder: "Enter tags (3-5 characters) separated by space",
              separator: " ",
            },
            on: { "tag-state": _vm.onTagState },
            model: {
              value: _vm.tags,
              callback: function ($$v) {
                _vm.tags = $$v
              },
              expression: "tags",
            },
          }),
          _vm._v(" "),
          _c("b-card-text", { staticClass: "mt-2" }, [
            _vm._v("\n      Tags: " + _vm._s(_vm.tags) + "\n    "),
          ]),
          _vm._v(" "),
          _c("b-card-text", [_vm._v("Event values:")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [_vm._v("validTags: " + _vm._s(_vm.validTags))]),
            _vm._v(" "),
            _c("li", [_vm._v("invalidTags: " + _vm._s(_vm.invalidTags))]),
            _vm._v(" "),
            _c("li", [_vm._v("duplicateTags: " + _vm._s(_vm.duplicateTags))]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=template&id=3daa338c&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=template&id=3daa338c& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Using native browser inputs" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeNativeInput) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [
          _vm._v(
            "The scope contains attributes and event handlers that can be directly bound to native "
          ),
        ]),
        _vm._v(" "),
        _c("code", [_vm._v("<input>")]),
        _vm._v(" "),
        _c("span", [_vm._v(" or ")]),
        _vm._v(" "),
        _c("code", [_vm._v("<select>")]),
        _vm._v(" "),
        _c("span", [_vm._v(" elements.")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("b-form-tags", {
            attrs: { "no-outer-focus": "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var tags = ref.tags
                  var inputAttrs = ref.inputAttrs
                  var inputHandlers = ref.inputHandlers
                  var addTag = ref.addTag
                  var removeTag = ref.removeTag
                  return [
                    _c(
                      "b-input-group",
                      { attrs: { "aria-controls": "my-custom-tags-list" } },
                      [
                        _c(
                          "input",
                          _vm._g(
                            _vm._b(
                              {
                                staticClass: "form-control",
                                attrs: {
                                  placeholder: "New tag - Press enter to add",
                                },
                              },
                              "input",
                              inputAttrs,
                              false
                            ),
                            inputHandlers
                          )
                        ),
                        _vm._v(" "),
                        _c(
                          "b-input-group-append",
                          [
                            _c(
                              "b-button",
                              {
                                attrs: { variant: "primary" },
                                on: {
                                  click: function ($event) {
                                    return addTag()
                                  },
                                },
                              },
                              [_vm._v("\n              Add\n            ")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      {
                        staticClass:
                          "list-unstyled d-inline-flex flex-wrap mb-0",
                        attrs: {
                          id: "my-custom-tags-list",
                          "aria-live": "polite",
                          "aria-atomic": "false",
                          "aria-relevant": "additions removals",
                        },
                      },
                      _vm._l(tags, function (tag) {
                        return _c(
                          "b-card",
                          {
                            key: tag,
                            staticClass: "shadow-none border mt-1 mr-1 mb-0",
                            attrs: {
                              id:
                                "my-custom-tags-tag_" +
                                tag.replace(/\s/g, "_") +
                                "_",
                              tag: "li",
                              "body-class": "py-1 pr-2 text-nowrap",
                            },
                          },
                          [
                            _c("strong", [_vm._v(_vm._s(tag))]),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "py-0",
                                attrs: {
                                  variant: "link",
                                  size: "sm",
                                  "aria-controls":
                                    "my-custom-tags-tag_" +
                                    tag.replace(/\s/g, "_") +
                                    "_",
                                },
                                on: {
                                  click: function ($event) {
                                    return removeTag(tag)
                                  },
                                },
                              },
                              [_vm._v("\n              remove\n            ")]
                            ),
                          ],
                          1
                        )
                      }),
                      1
                    ),
                  ]
                },
              },
            ]),
            model: {
              value: _vm.value,
              callback: function ($$v) {
                _vm.value = $$v
              },
              expression: "value",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=template&id=29de899a&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=template&id=29de899a& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Last tag removal via backspace keypress" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeRemoval) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("When the prop ")]),
        _vm._v(" "),
        _c("code", [_vm._v("remove-on-delete")]),
        _vm._v(" "),
        _c("span", [_vm._v(" is set, and the user presses ")]),
        _vm._v(" "),
        _c("code", [_vm._v("Backspace")]),
        _vm._v(" "),
        _c("span", [_vm._v(" (or ")]),
        _vm._v(" "),
        _c("code", [_vm._v("Del")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            ") and the input value is empty, the last tag in the tag list will be removed. "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("label", { attrs: { for: "tags-remove-on-delete" } }, [
            _vm._v("Enter new tags separated by space"),
          ]),
          _vm._v(" "),
          _c("b-form-tags", {
            staticClass: "mb-2",
            attrs: {
              "input-id": "tags-remove-on-delete",
              "input-attrs": {
                "aria-describedby": "tags-remove-on-delete-help",
              },
              separator: " ",
              placeholder: "Enter new tags separated by space",
              "remove-on-delete": "",
              "no-add-on-enter": "",
            },
            model: {
              value: _vm.value,
              callback: function ($$v) {
                _vm.value = $$v
              },
              expression: "value",
            },
          }),
          _vm._v(" "),
          _c("b-form-text", { attrs: { id: "tags-remove-on-delete-help" } }, [
            _vm._v("\n      Press "),
            _c("code", [_vm._v("Backspace")]),
            _vm._v(" to remove the last tag entered\n    "),
          ]),
          _vm._v(" "),
          _c("b-card-text", [_vm._v("Value: " + _vm._s(_vm.value))]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=template&id=79cb6cb7&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=template&id=79cb6cb7& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Tag creation using separators" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeSeparators) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [
          _vm._v(
            "To auto create tags when a separator character is typed (i.e. "
          ),
        ]),
        _vm._v(" "),
        _c("b", [_vm._v("Space")]),
        _vm._v(" "),
        _c("span", [_vm._v(", ")]),
        _vm._v(" "),
        _c("b", [_vm._v(",")]),
        _vm._v(" "),
        _c("span", [_vm._v(", etc), set the")]),
        _vm._v(" "),
        _c("code", [_vm._v("separator")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            "\n      prop to the character that will trigger the tag to be added.\n    "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("label", { attrs: { for: "tags-separators" } }, [
            _vm._v("Enter tags separated by space, comma or semicolon"),
          ]),
          _vm._v(" "),
          _c("b-form-tags", {
            staticClass: "mb-2",
            attrs: {
              "input-id": "tags-separators",
              separator: " ,;",
              placeholder:
                "Enter new tags separated by space, comma or semicolon",
              "no-add-on-enter": "",
            },
            model: {
              value: _vm.value,
              callback: function ($$v) {
                _vm.value = $$v
              },
              expression: "value",
            },
          }),
          _vm._v(" "),
          _c("b-card-text", [_vm._v("Value: " + _vm._s(_vm.value))]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=template&id=1be77716&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=template&id=1be77716& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Styling Options" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeStyling) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [
          _vm._v(
            "Several props are available to alter the basic styling of the default tagged interface:"
          ),
        ]),
        _vm._v(" "),
        _c("code", [
          _vm._v("tag-pills, tag-variant, size, placeholder, state, disabled"),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("label", { attrs: { for: "tags-pills" } }, [_vm._v("Enter tags")]),
          _vm._v(" "),
          _c("b-form-tags", {
            staticClass: "mb-2",
            attrs: {
              "input-id": "tags-pills",
              "tag-variant": "primary",
              "tag-pills": "",
              size: "lg",
              separator: " ",
              placeholder: "Enter new tags separated by space",
            },
            model: {
              value: _vm.value,
              callback: function ($$v) {
                _vm.value = $$v
              },
              expression: "value",
            },
          }),
          _vm._v(" "),
          _c("b-card-text", [_vm._v("Value: " + _vm._s(_vm.value))]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=template&id=4ee91d82&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=template&id=4ee91d82& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Tag validation" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeValidation) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [
          _vm._v("You can optionally provide a tag validator method via the "),
        ]),
        _vm._v(" "),
        _c("code", [_vm._v("tag-validator")]),
        _vm._v(" "),
        _c("span", [_vm._v(" prop.")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "b-form-group",
            {
              attrs: {
                state: _vm.state,
                label: "Tags validation example",
                "label-for": "tags-validation",
              },
              scopedSlots: _vm._u([
                {
                  key: "invalid-feedback",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n        You must provide at least 3 tags and no more than 8\n      "
                      ),
                    ]
                  },
                  proxy: true,
                },
                {
                  key: "description",
                  fn: function () {
                    return [
                      _c("div", { attrs: { id: "tags-validation-help" } }, [
                        _vm._v(
                          "\n          Tags must be 3 to 5 characters in length and all lower case. Enter tags separated by spaces or press enter.\n        "
                        ),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _c("b-form-tags", {
                attrs: {
                  "input-id": "tags-validation",
                  "input-attrs": { "aria-describedby": "tags-validation-help" },
                  state: _vm.state,
                  "tag-validator": _vm.tagValidator,
                  separator: " ",
                },
                model: {
                  value: _vm.tags,
                  callback: function ($$v) {
                    _vm.tags = $$v
                  },
                  expression: "tags",
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

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTag.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTag.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTag_vue_vue_type_template_id_aec86c8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTag.vue?vue&type=template&id=aec86c8c& */ "./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=template&id=aec86c8c&");
/* harmony import */ var _FormTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTag.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTag_vue_vue_type_template_id_aec86c8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTag_vue_vue_type_template_id_aec86c8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-tag/FormTag.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=template&id=aec86c8c&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=template&id=aec86c8c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTag_vue_vue_type_template_id_aec86c8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTag.vue?vue&type=template&id=aec86c8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTag.vue?vue&type=template&id=aec86c8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTag_vue_vue_type_template_id_aec86c8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTag_vue_vue_type_template_id_aec86c8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTagsAdvanceCustom_vue_vue_type_template_id_980ba1cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTagsAdvanceCustom.vue?vue&type=template&id=980ba1cc& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=template&id=980ba1cc&");
/* harmony import */ var _FormTagsAdvanceCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTagsAdvanceCustom.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTagsAdvanceCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTagsAdvanceCustom_vue_vue_type_template_id_980ba1cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTagsAdvanceCustom_vue_vue_type_template_id_980ba1cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsAdvanceCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsAdvanceCustom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsAdvanceCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=template&id=980ba1cc&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=template&id=980ba1cc& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsAdvanceCustom_vue_vue_type_template_id_980ba1cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsAdvanceCustom.vue?vue&type=template&id=980ba1cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsAdvanceCustom.vue?vue&type=template&id=980ba1cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsAdvanceCustom_vue_vue_type_template_id_980ba1cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsAdvanceCustom_vue_vue_type_template_id_980ba1cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTagsBasic_vue_vue_type_template_id_14793396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTagsBasic.vue?vue&type=template&id=14793396& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=template&id=14793396&");
/* harmony import */ var _FormTagsBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTagsBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTagsBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTagsBasic_vue_vue_type_template_id_14793396___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTagsBasic_vue_vue_type_template_id_14793396___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=template&id=14793396&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=template&id=14793396& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsBasic_vue_vue_type_template_id_14793396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsBasic.vue?vue&type=template&id=14793396& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsBasic.vue?vue&type=template&id=14793396&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsBasic_vue_vue_type_template_id_14793396___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsBasic_vue_vue_type_template_id_14793396___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTagsCustom_vue_vue_type_template_id_abfd760c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTagsCustom.vue?vue&type=template&id=abfd760c& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=template&id=abfd760c&");
/* harmony import */ var _FormTagsCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTagsCustom.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTagsCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTagsCustom_vue_vue_type_template_id_abfd760c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTagsCustom_vue_vue_type_template_id_abfd760c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsCustom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=template&id=abfd760c&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=template&id=abfd760c& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsCustom_vue_vue_type_template_id_abfd760c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsCustom.vue?vue&type=template&id=abfd760c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsCustom.vue?vue&type=template&id=abfd760c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsCustom_vue_vue_type_template_id_abfd760c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsCustom_vue_vue_type_template_id_abfd760c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTagsDetecting_vue_vue_type_template_id_68390c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTagsDetecting.vue?vue&type=template&id=68390c66& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=template&id=68390c66&");
/* harmony import */ var _FormTagsDetecting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTagsDetecting.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTagsDetecting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTagsDetecting_vue_vue_type_template_id_68390c66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTagsDetecting_vue_vue_type_template_id_68390c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsDetecting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsDetecting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsDetecting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=template&id=68390c66&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=template&id=68390c66& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsDetecting_vue_vue_type_template_id_68390c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsDetecting.vue?vue&type=template&id=68390c66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsDetecting.vue?vue&type=template&id=68390c66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsDetecting_vue_vue_type_template_id_68390c66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsDetecting_vue_vue_type_template_id_68390c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTagsNativeInput_vue_vue_type_template_id_3daa338c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTagsNativeInput.vue?vue&type=template&id=3daa338c& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=template&id=3daa338c&");
/* harmony import */ var _FormTagsNativeInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTagsNativeInput.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTagsNativeInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTagsNativeInput_vue_vue_type_template_id_3daa338c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTagsNativeInput_vue_vue_type_template_id_3daa338c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsNativeInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsNativeInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsNativeInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=template&id=3daa338c&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=template&id=3daa338c& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsNativeInput_vue_vue_type_template_id_3daa338c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsNativeInput.vue?vue&type=template&id=3daa338c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsNativeInput.vue?vue&type=template&id=3daa338c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsNativeInput_vue_vue_type_template_id_3daa338c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsNativeInput_vue_vue_type_template_id_3daa338c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTagsRemoval_vue_vue_type_template_id_29de899a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTagsRemoval.vue?vue&type=template&id=29de899a& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=template&id=29de899a&");
/* harmony import */ var _FormTagsRemoval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTagsRemoval.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTagsRemoval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTagsRemoval_vue_vue_type_template_id_29de899a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTagsRemoval_vue_vue_type_template_id_29de899a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsRemoval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsRemoval.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsRemoval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=template&id=29de899a&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=template&id=29de899a& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsRemoval_vue_vue_type_template_id_29de899a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsRemoval.vue?vue&type=template&id=29de899a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsRemoval.vue?vue&type=template&id=29de899a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsRemoval_vue_vue_type_template_id_29de899a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsRemoval_vue_vue_type_template_id_29de899a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTagsSeparators_vue_vue_type_template_id_79cb6cb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTagsSeparators.vue?vue&type=template&id=79cb6cb7& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=template&id=79cb6cb7&");
/* harmony import */ var _FormTagsSeparators_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTagsSeparators.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTagsSeparators_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTagsSeparators_vue_vue_type_template_id_79cb6cb7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTagsSeparators_vue_vue_type_template_id_79cb6cb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsSeparators_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsSeparators.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsSeparators_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=template&id=79cb6cb7&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=template&id=79cb6cb7& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsSeparators_vue_vue_type_template_id_79cb6cb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsSeparators.vue?vue&type=template&id=79cb6cb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsSeparators.vue?vue&type=template&id=79cb6cb7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsSeparators_vue_vue_type_template_id_79cb6cb7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsSeparators_vue_vue_type_template_id_79cb6cb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTagsStyling_vue_vue_type_template_id_1be77716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTagsStyling.vue?vue&type=template&id=1be77716& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=template&id=1be77716&");
/* harmony import */ var _FormTagsStyling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTagsStyling.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTagsStyling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTagsStyling_vue_vue_type_template_id_1be77716___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTagsStyling_vue_vue_type_template_id_1be77716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsStyling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsStyling.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsStyling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=template&id=1be77716&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=template&id=1be77716& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsStyling_vue_vue_type_template_id_1be77716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsStyling.vue?vue&type=template&id=1be77716& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsStyling.vue?vue&type=template&id=1be77716&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsStyling_vue_vue_type_template_id_1be77716___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsStyling_vue_vue_type_template_id_1be77716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTagsValidation_vue_vue_type_template_id_4ee91d82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTagsValidation.vue?vue&type=template&id=4ee91d82& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=template&id=4ee91d82&");
/* harmony import */ var _FormTagsValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTagsValidation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTagsValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTagsValidation_vue_vue_type_template_id_4ee91d82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTagsValidation_vue_vue_type_template_id_4ee91d82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsValidation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=template&id=4ee91d82&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=template&id=4ee91d82& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsValidation_vue_vue_type_template_id_4ee91d82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTagsValidation.vue?vue&type=template&id=4ee91d82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-tag/FormTagsValidation.vue?vue&type=template&id=4ee91d82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsValidation_vue_vue_type_template_id_4ee91d82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTagsValidation_vue_vue_type_template_id_4ee91d82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-tag/code.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-tag/code.js ***!
  \********************************************************************/
/*! exports provided: codeAdvanceCustom, codeBasic, codeCustom, codeDetecting, codeNativeInput, codeRemoval, codeSeparators, codeStyling, codeValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAdvanceCustom", function() { return codeAdvanceCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeCustom", function() { return codeCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeDetecting", function() { return codeDetecting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeNativeInput", function() { return codeNativeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRemoval", function() { return codeRemoval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSeparators", function() { return codeSeparators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeStyling", function() { return codeStyling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeValidation", function() { return codeValidation; });
var codeAdvanceCustom = "\n<template>\n  <div>\n    <b-form-group label=\"Tagged input using dropdown\">\n      <b-form-tags\n        v-model=\"value\"\n        no-outer-focus\n      >\n        <template v-slot=\"{ tags, disabled, addTag, removeTag }\">\n          <ul\n            v-if=\"tags.length > 0\"\n            class=\"list-inline d-inline-block mb-1\"\n          >\n            <li\n              v-for=\"tag in tags\"\n              :key=\"tag\"\n              class=\"list-inline-item\"\n            >\n              <b-form-tag\n                :title=\"tag\"\n                :disabled=\"disabled\"\n                variant=\"primary\"\n                @remove=\"removeTag(tag)\"\n              >\n                {{ tag }}\n              </b-form-tag>\n            </li>\n          </ul>\n\n          <b-dropdown\n            size=\"sm\"\n            variant=\"outline-secondary\"\n            block\n            menu-class=\"w-100\"\n          >\n            <template v-slot:button-content>\n              <b-icon icon=\"tag-fill\" /> Choose tags\n            </template>\n            <b-dropdown-form @submit.stop.prevent=\"() => {}\">\n              <b-form-group\n                label-for=\"tag-search-input\"\n                label=\"Search tags\"\n                label-cols-md=\"auto\"\n                class=\"mb-0\"\n                label-size=\"sm\"\n                :description=\"searchDesc\"\n                :disabled=\"disabled\"\n              >\n                <b-form-input\n                  id=\"tag-search-input\"\n                  v-model=\"search\"\n                  type=\"search\"\n                  size=\"sm\"\n                  autocomplete=\"off\"\n                />\n              </b-form-group>\n            </b-dropdown-form>\n            <b-dropdown-divider />\n            <b-dropdown-item\n              v-for=\"option in availableOptions\"\n              :key=\"option\"\n              @click=\"onOptionClick({ option, addTag })\"\n            >\n              {{ option }}\n            </b-dropdown-item>\n            <b-dropdown-text v-if=\"availableOptions.length === 0\">\n              There are no tags available to select\n            </b-dropdown-text>\n          </b-dropdown>\n        </template>\n      </b-form-tags>\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport {BFormTags,BFormGroup,BDropdown,BDropdownForm,BFormInput,BDropdownDivider,BDropdownItem,BFormTag,BDropdownText} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormTags,\n    BFormGroup,\n    BDropdown,\n    BDropdownForm,\n    BFormInput,\n    BDropdownDivider,\n    BDropdownItem,\n    BFormTag,\n    BDropdownText,\n  },\n  data: () => ({\n    options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],\n    search: '',\n    value: [],\n    codeAdvanceCustom,\n  }),\n  computed: {\n    criteria() {\n      // Compute the search criteria\n      return this.search.trim().toLowerCase()\n    },\n    availableOptions() {\n      const { criteria } = this\n\n      // Filter out already selected options\n      const options = this.options.filter(opt => this.value.indexOf(opt) === -1)\n      if (criteria) {\n        // Show only options that match criteria\n        return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1)\n      }\n\n      // Show all options available\n      return options\n    },\n    searchDesc() {\n      if (this.criteria && this.availableOptions.length === 0) {\n        return 'There are no tags matching your search criteria'\n      }\n      return ''\n    },\n  },\n  methods: {\n    onOptionClick({ option, addTag }) {\n      addTag(option)\n      this.search = ''\n    },\n  },\n}\n</script>\n";
var codeBasic = "\n<template>\n  <div>\n    <label for=\"tags-basic\">Type a new tag and press enter</label>\n    <b-form-tags\n      v-model=\"value\"\n      input-id=\"tags-basic\"\n      class=\"mb-2\"\n    />\n    <p>Value: {{ value }}</p>\n  </div>\n</template>\n\n<script>\nimport { BFormTags } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormTags,\n  },\n  data: () => ({\n    value: ['apple', 'orange'],\n  }),\n}\n</script>\n";
var codeCustom = "\n<template>\n  <div>\n    <b-form-group label=\"Tagged input using select\">\n      <!-- prop `add-on - change` is needed to enable adding tags vie the `change` event -->\n      <b-form-tags\n        v-model=\"value\"\n        size=\"lg\"\n        add-on-change\n        no-outer-focus\n      >\n        <template v-slot=\"{ tags, inputAttrs, inputHandlers, disabled, removeTag }\">\n          <ul\n            v-if=\"tags.length > 0\"\n            class=\"list-inline d-inline-block mb-1\"\n          >\n            <li\n              v-for=\"tag in tags\"\n              :key=\"tag\"\n              class=\"list-inline-item\"\n            >\n              <b-form-tag\n                :title=\"tag\"\n                :disabled=\"disabled\"\n                variant=\"primary\"\n                @remove=\"removeTag(tag)\"\n              >\n                {{ tag }}\n              </b-form-tag>\n            </li>\n          </ul>\n          <b-form-select\n            v-bind=\"inputAttrs\"\n            :disabled=\"disabled || availableOptions.length === 0\"\n            :options=\"availableOptions\"\n            v-on=\"inputHandlers\"\n          >\n            <template v-slot:first>\n              <!-- This is required to prevent bugs with Safari -->\n              <option\n                disabled\n                value=\"\"\n              >\n                Choose a tag...\n              </option>\n            </template>\n          </b-form-select>\n        </template>\n      </b-form-tags>\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport {BFormTags, BFormTag, BFormGroup, BFormSelect} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormTags,\n    BFormGroup,\n    BFormSelect,\n    BFormTag,\n  },\n  data: () => ({\n    options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],\n    value: [],\n    codeCustom,\n  }),\n  computed: {\n    availableOptions() {\n      return this.options.filter(opt => this.value.indexOf(opt) === -1)\n    },\n  },\n}\n</script>\n";
var codeDetecting = "\n<template>\n  <div>\n    <label for=\"tags-state-event\">Enter tags</label>\n    <b-form-tags\n      v-model=\"tags\"\n      input-id=\"tags-state-event\"\n      :tag-validator=\"validator\"\n      placeholder=\"Enter tags (3-5 characters) separated by space\"\n      separator=\" \"\n      @tag-state=\"onTagState\"\n    />\n    <p class=\"mt-2\">\n      Tags: {{ tags }}\n    </p>\n    <p>Event values:</p>\n    <ul>\n      <li>validTags: {{ validTags }}</li>\n      <li>invalidTags: {{ invalidTags }}</li>\n      <li>duplicateTags: {{ duplicateTags }}</li>\n    </ul>\n  </div>\n</template>\n\n<script>\nimport { BFormTags } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormTags,\n  },\n  data: () => ({\n    tags: [],\n    validTags: [],\n    invalidTags: [],\n    duplicateTags: [],\n    codeDetecting,\n  }),\n  methods: {\n    onTagState(valid, invalid, duplicate) {\n      this.validTags = valid\n      this.invalidTags = invalid\n      this.duplicateTags = duplicate\n    },\n    validator(tag) {\n      return tag.length > 2 && tag.length < 6\n    },\n  },\n}\n</script>\n";
var codeNativeInput = "\n<template>\n  <div>\n    <b-form-tags\n      v-model=\"value\"\n      no-outer-focus\n    >\n      <template #\"{ tags, inputAttrs, inputHandlers, addTag, removeTag }\">\n        <b-input-group aria-controls=\"my-custom-tags-list\">\n          <input\n            v-bind=\"inputAttrs\"\n            placeholder=\"New tag - Press enter to add\"\n            class=\"form-control\"\n            v-on=\"inputHandlers\"\n          >\n          <b-input-group-append>\n            <b-button\n              variant=\"primary\"\n              @click=\"addTag()\"\n            >\n              Add\n            </b-button>\n          </b-input-group-append>\n        </b-input-group>\n        <ul\n          id=\"my-custom-tags-list\"\n          class=\"list-unstyled d-inline-flex flex-wrap mb-0\"\n          aria-live=\"polite\"\n          aria-atomic=\"false\"\n          aria-relevant=\"additions removals\"\n        >\n          <!-- Always use the tag value as the :key, not the index! -->\n          <!-- Otherwise screen readers will not read the tag\n             additions and removals correctly -->\n          <b-card\n            v-for=\"tag in tags\"\n            :id=\"`my-custom-tags-tag_${tag.replace(/\\s/g, '_')}_`\"\n            :key=\"tag\"\n            tag=\"li\"\n            class=\"shadow-none border mt-1 mr-1 mb-0\"\n            body-class=\"py-1 pr-2 text-nowrap\"\n          >\n            <strong>{{ tag }}</strong>\n            <b-button\n              variant=\"link\"\n              size=\"sm\"\n              :aria-controls=\"`my-custom-tags-tag_${tag.replace(/\\s/g, '_')}_`\"\n              class=\"py-0\"\n              @click=\"removeTag(tag)\"\n            >\n              remove\n            </b-button>\n          </b-card>\n        </ul>\n      </template>\n    </b-form-tags>\n  </div>\n</template>\n\n<script>\nimport {\n  BFormTags, BInputGroup, BInputGroupAppend, BCard, BButton,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormTags,\n    BInputGroup,\n    BCard,\n    BButton,\n    BInputGroupAppend,\n  },\n  data: () => ({\n    value: ['apple', 'orange', 'banana', 'pear', 'peach'],\n  }),\n}\n</script>\n";
var codeRemoval = "\n<template>\n  <div>\n    <label for=\"tags-remove-on-delete\">Enter new tags separated by space</label>\n    <b-form-tags\n      v-model=\"value\"\n      input-id=\"tags-remove-on-delete\"\n      :input-attrs=\"{ 'aria-describedby': 'tags-remove-on-delete-help' }\"\n      separator=\" \"\n      placeholder=\"Enter new tags separated by space\"\n      remove-on-delete\n      no-add-on-enter\n      class=\"mb-2\"\n    />\n    <b-form-text id=\"tags-remove-on-delete-help\">\n      Press <kbd>Backspace</kbd> to remove the last tag entered\n    </b-form-text>\n    <p>Value: {{ value }}</p>\n  </div>\n</template>\n\n<script>\nimport { BFormTags, BFormText } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormTags,\n    BFormText,\n  },\n  data: () => ({\n    value: ['apple', 'orange', 'grape'],\n  }),\n}\n</script>\n";
var codeSeparators = "\n<template>\n  <div>\n    <label for=\"tags-separators\">Enter tags separated by space, comma or semicolon</label>\n    <b-form-tags\n      v-model=\"value\"\n      input-id=\"tags-separators\"\n      separator=\" ,;\"\n      placeholder=\"Enter new tags separated by space, comma or semicolon\"\n      no-add-on-enter\n      class=\"mb-2\"\n    />\n    <p>Value: {{ value }}</p>\n  </div>\n</template>\n\n<script>\nimport { BFormTags } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormTags,\n  },\n  data: () => ({\n    value: ['one', 'two'],\n  }),\n}\n</script>\n\n";
var codeStyling = "\n<template>\n  <div>\n    <label for=\"tags-pills\">Enter tags</label>\n    <b-form-tags\n      v-model=\"value\"\n      input-id=\"tags-pills\"\n      tag-variant=\"primary\"\n      tag-pills\n      size=\"lg\"\n      separator=\" \"\n      placeholder=\"Enter new tags separated by space\"\n      class=\"mb-2\"\n    />\n    <p>Value: {{ value }}</p>\n  </div>\n</template>\n\n<script>\nimport { BFormTags } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormTags,\n  },\n  data: () => ({\n    value: ['apple', 'orange', 'grape'],\n  }),\n}\n</script>\n";
var codeValidation = "\n<template>\n  <div>\n    <b-form-group\n      :state=\"state\"\n      label=\"Tags validation example\"\n      label-for=\"tags-validation\"\n    >\n      <b-form-tags\n        v-model=\"tags\"\n        input-id=\"tags-validation\"\n        :input-attrs=\"{ 'aria-describedby': 'tags-validation-help' }\"\n        :state=\"state\"\n        :tag-validator=\"tagValidator\"\n        separator=\" \"\n      />\n      <!-- The following slots are for b-form-group -->\n      <template #invalid-feedback>\n        You must provide at least 3 tags and no more than 8\n      </template>\n      <template #description>\n        <div id=\"tags-validation-help\">\n          Tags must be 3 to 5 characters in length and all lower case. Enter tags separated by spaces or press enter.\n        </div>\n      </template>\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormTags, BFormGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormTags,\n    BFormGroup,\n  },\n  data: () => ({\n    tags: [],\n    dirty: false,\n    codeValidation,\n  }),\n  computed: {\n    state() {\n      // Overall component validation state\n      return this.dirty ? this.tags.length > 2 && this.tags.length < 9 : null\n    },\n  },\n  watch: {\n    tags() {\n      // Set the dirty flag on first change to the tags array\n      this.dirty = true\n    },\n  },\n  methods: {\n    tagValidator(tag) {\n      // Individual tag validator function\n      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6\n    },\n  },\n}\n</script>\n";

/***/ })

}]);