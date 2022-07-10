(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _FormLayoutHorizontal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayoutHorizontal.vue */ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue");
/* harmony import */ var _FormLayoutHorizontalIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormLayoutHorizontalIcon.vue */ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue");
/* harmony import */ var _FormLayoutVertical_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormLayoutVertical.vue */ "./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue");
/* harmony import */ var _FormLayoutVerticalIcon_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormLayoutVerticalIcon.vue */ "./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue");
/* harmony import */ var _FormLayoutMultipleColumn_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormLayoutMultipleColumn.vue */ "./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue");
/* harmony import */ var _FormLayoutDatalistHelper_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormLayoutDatalistHelper.vue */ "./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue");
/* harmony import */ var _FormLayoutFeedbackHelper_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormLayoutFeedbackHelper.vue */ "./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FormLayoutHorizontal: _FormLayoutHorizontal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormLayoutHorizontalIcon: _FormLayoutHorizontalIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FormLayoutVertical: _FormLayoutVertical_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    FormLayoutVerticalIcon: _FormLayoutVerticalIcon_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormLayoutMultipleColumn: _FormLayoutMultipleColumn_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    FormLayoutDatalistHelper: _FormLayoutDatalistHelper_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    FormLayoutFeedbackHelper: _FormLayoutFeedbackHelper_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-layout/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BFormText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BFormDatalist: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormDatalist"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      options: ['Devloper', 'Manager', 'CEO', 'CTO', 'Full Stack Devloper'],
      codeHelper: _code__WEBPACK_IMPORTED_MODULE_3__["codeHelper"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-layout/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroupPrepend"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BFormText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BFormDatalist: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormDatalist"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInvalidFeedback"],
    BFormValidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormValidFeedback"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      options: ['Devloper', 'Manager', 'CEO', 'CTO', 'Full Stack Devloper'],
      userId: '',
      occupationID: '',
      codeFeedbackHelper: _code__WEBPACK_IMPORTED_MODULE_3__["codeFeedbackHelper"]
    };
  },
  computed: {
    validation: function validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
    validationOccupation: function validationOccupation() {
      return this.occupationID.length > 1;
    }
  },
  methods: {
    reset: function reset() {
      this.userId = '';
      this.occupationID = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-layout/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeHorizontal: _code__WEBPACK_IMPORTED_MODULE_3__["codeHorizontal"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-layout/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroupPrepend"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeHorizontalIcon: _code__WEBPACK_IMPORTED_MODULE_3__["codeHorizontalIcon"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-layout/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeMultipleColumn: _code__WEBPACK_IMPORTED_MODULE_3__["codeMultipleColumn"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-layout/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeVertical: _code__WEBPACK_IMPORTED_MODULE_3__["codeVertical"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-layout/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroupPrepend"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeVerticalIcon: _code__WEBPACK_IMPORTED_MODULE_3__["codeVerticalIcon"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=template&id=9e603158&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=template&id=9e603158& ***!
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
    { staticClass: "match-height" },
    [
      _c("b-col", { attrs: { lg: "6" } }, [_c("form-layout-horizontal")], 1),
      _vm._v(" "),
      _c(
        "b-col",
        { attrs: { lg: "6" } },
        [_c("form-layout-horizontal-icon")],
        1
      ),
      _vm._v(" "),
      _c("b-col", { attrs: { lg: "6" } }, [_c("form-layout-vertical")], 1),
      _vm._v(" "),
      _c("b-col", { attrs: { lg: "6" } }, [_c("form-layout-vertical-icon")], 1),
      _vm._v(" "),
      _c(
        "b-col",
        { attrs: { cols: "12" } },
        [_c("form-layout-multiple-column")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-col",
        { attrs: { lg: "6" } },
        [_c("form-layout-datalist-helper")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-col",
        { attrs: { lg: "6" } },
        [_c("form-layout-feedback-helper")],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=template&id=0e455eec&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=template&id=0e455eec& ***!
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
      attrs: { title: "Form text & Datalist helper" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeHelper) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Username", "label-for": "h-username" } },
                    [
                      _c("b-form-input", {
                        attrs: { id: "h-username", placeholder: "Username" },
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Email", "label-for": "d-email" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "d-email",
                          type: "email",
                          placeholder: "Email",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-form-text", [_vm._v("Enter a Valid Email")]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Password", "label-for": "d-password" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "d-password",
                          type: "password",
                          placeholder: "Password",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-form-text", [
                        _vm._v("Your password must be 8-20 characters long."),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Occupation",
                        "label-for": "h-occupation",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "h-occupation",
                          list: "input-list",
                          placeholder: "Occupation",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-form-datalist", {
                        attrs: { id: "input-list", options: _vm.options },
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          attrs: {
                            id: "checkbox-9",
                            name: "checkbox-9",
                            value: "Remember_me",
                          },
                        },
                        [_vm._v("\n            Remember me\n          ")]
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
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mr-1",
                      attrs: { type: "submit", variant: "primary" },
                    },
                    [_vm._v("\n          Submit\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      attrs: { type: "reset", variant: "outline-secondary" },
                    },
                    [_vm._v("\n          Reset\n        ")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=template&id=c66fcef2&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=template&id=c66fcef2& ***!
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
      attrs: { title: "Form Feedback helpers" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeFeedbackHelper) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Username", "label-for": "fh-usename" } },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "UserIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "fh-usename",
                              placeholder: "Username",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Email", "label-for": "fh-email" } },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "MailIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "fh-email",
                              type: "email",
                              placeholder: "Email",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-text", { staticClass: "text-danger" }, [
                        _vm._v("\n            Enter a Valid Email\n          "),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: { label: "Password", "label-for": "fh-password" },
                    },
                    [
                      _c(
                        "b-input-group",
                        {
                          staticClass: "input-group-merge",
                          class: _vm.validation ? "is-valid" : "is-invalid",
                        },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "LockIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "fh-password",
                              type: "password",
                              state: _vm.validation,
                              placeholder: "Password",
                            },
                            model: {
                              value: _vm.userId,
                              callback: function ($$v) {
                                _vm.userId = $$v
                              },
                              expression: "userId",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-invalid-feedback",
                        { attrs: { state: _vm.validation } },
                        [
                          _vm._v(
                            "\n            Your password must be 8-20 characters long.\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-valid-feedback",
                        { attrs: { state: _vm.validation } },
                        [_vm._v("\n            Looks Good.\n          ")]
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Occupation" } },
                    [
                      _c(
                        "b-input-group",
                        {
                          staticClass: "input-group-merge",
                          class: _vm.validationOccupation
                            ? "is-valid"
                            : "is-invalid",
                        },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "LockIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              list: "input-list",
                              placeholder: "Occupation",
                              state: _vm.validationOccupation,
                            },
                            model: {
                              value: _vm.occupationID,
                              callback: function ($$v) {
                                _vm.occupationID = $$v
                              },
                              expression: "occupationID",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-datalist", {
                        attrs: { id: "input-list", options: _vm.options },
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          attrs: {
                            id: "checkbox-8",
                            name: "checkbox-8",
                            value: "Remember_me",
                          },
                        },
                        [_vm._v("\n            Remember me\n          ")]
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
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mr-1",
                      attrs: { type: "submit", variant: "primary" },
                    },
                    [_vm._v("\n          Submit\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      attrs: { type: "reset", variant: "outline-secondary" },
                      on: { click: _vm.reset },
                    },
                    [_vm._v("\n          Reset\n        ")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=template&id=1523d298&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=template&id=1523d298& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Horizontal Form" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeHorizontal) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "First Name",
                        "label-for": "h-first-name",
                        "label-cols-md": "4",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "h-first-name",
                          placeholder: "First Name",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Email",
                        "label-for": "h-email",
                        "label-cols-md": "4",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "h-email",
                          type: "email",
                          placeholder: "Email",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Mobile",
                        "label-for": "h-number",
                        "label-cols-md": "4",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "h-number",
                          type: "number",
                          placeholder: "Mobile",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Password",
                        "label-for": "h-password",
                        "label-cols-md": "4",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "h-password",
                          type: "password",
                          placeholder: "Password",
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
                { attrs: { md: "8", "offset-md": "4" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          attrs: {
                            id: "checkbox-2",
                            name: "checkbox-2",
                            value: "Remember_me",
                          },
                        },
                        [_vm._v("\n            Remember me\n          ")]
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
                { attrs: { "offset-md": "4" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mr-1",
                      attrs: { type: "submit", variant: "primary" },
                    },
                    [_vm._v("\n          Submit\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      attrs: { type: "reset", variant: "outline-secondary" },
                    },
                    [_vm._v("\n          Reset\n        ")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=template&id=614a8eb1&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=template&id=614a8eb1& ***!
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
      attrs: { title: "Horizontal Form With Icons" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeHorizontalIcon) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "First Name",
                        "label-for": "hi-first-name",
                        "label-cols-md": "4",
                      },
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "UserIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "hi-first-name",
                              placeholder: "First Name",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Email",
                        "label-for": "hi-email",
                        "label-cols-md": "4",
                      },
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "MailIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "hi-email",
                              type: "email",
                              placeholder: "Email",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Mobile",
                        "label-for": "hi-number",
                        "label-cols-md": "4",
                      },
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "SmartphoneIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "hi-number",
                              type: "number",
                              placeholder: "Mobile",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Password",
                        "label-for": "hi-password",
                        "label-cols-md": "4",
                      },
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "LockIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "hi-password",
                              type: "password",
                              placeholder: "Password",
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
                { attrs: { md: "8", "offset-md": "4" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          attrs: {
                            id: "checkbox-1",
                            name: "checkbox-1",
                            value: "Remember_me",
                          },
                        },
                        [_vm._v("\n            Remember me\n          ")]
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
                { attrs: { "offset-md": "4" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mr-1",
                      attrs: { type: "submit", variant: "primary" },
                    },
                    [_vm._v("\n          Submit\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      attrs: { type: "reset", variant: "outline-secondary" },
                    },
                    [_vm._v("\n          Reset\n        ")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=template&id=4c3bde0c&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=template&id=4c3bde0c& ***!
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
      attrs: { title: "Multiple Column" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeMultipleColumn) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "First Name",
                        "label-for": "mc-first-name",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "mc-first-name",
                          placeholder: "First Name",
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Last Name",
                        "label-for": "mc-last-name",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: { id: "mc-last-name", placeholder: "Last Name" },
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "City", "label-for": "mc-city" } },
                    [
                      _c("b-form-input", {
                        attrs: { id: "mc-city", placeholder: "City" },
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Country", "label-for": "mc-country" } },
                    [
                      _c("b-form-input", {
                        attrs: { id: "mc-country", placeholder: "Country" },
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Company", "label-for": "mc-company" } },
                    [
                      _c(
                        "div",
                        { staticClass: "form-label-group" },
                        [
                          _c("b-form-input", {
                            attrs: { id: "mc-company", placeholder: "Company" },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { "label-for": "mc-email", label: "Email" } },
                    [
                      _c(
                        "div",
                        { staticClass: "form-label-group" },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "mc-email",
                              type: "email",
                              placeholder: "Email",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          attrs: {
                            id: "checkbox-10",
                            name: "checkbox-10",
                            value: "Remember_me",
                          },
                        },
                        [_vm._v("\n            Remember me\n          ")]
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
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mr-1",
                      attrs: { type: "submit", variant: "primary" },
                    },
                    [_vm._v("\n          Submit\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      attrs: { type: "reset", variant: "outline-secondary" },
                    },
                    [_vm._v("\n          Reset\n        ")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=template&id=8fcf082c&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=template&id=8fcf082c& ***!
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
      attrs: { title: "Vertical Form" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeVertical) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "First Name",
                        "label-for": "v-first-name",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "v-first-name",
                          placeholder: "First Name",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Email", "label-for": "v-email" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "v-email",
                          type: "email",
                          placeholder: "Email",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Mobile", "label-for": "v-mobile" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "v-mobile",
                          type: "number",
                          placeholder: "Mobile",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Password", "label-for": "v-password" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "v-password",
                          type: "password",
                          placeholder: "Password",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          attrs: {
                            id: "checkbox-3",
                            name: "checkbox-3",
                            value: "Remember_me",
                          },
                        },
                        [_vm._v("\n            Remember me\n          ")]
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mr-1",
                      attrs: { type: "submit", variant: "primary" },
                    },
                    [_vm._v("\n          Submit\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      attrs: { type: "reset", variant: "outline-secondary" },
                    },
                    [_vm._v("\n          Reset\n        ")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=template&id=877381fa&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=template&id=877381fa& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Vertical Form With Icons" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeVerticalIcon) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "First Name",
                        "label-for": "vi-first-name",
                      },
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "UserIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "vi-first-name",
                              placeholder: "First Name",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Email", "label-for": "vi-email" } },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "MailIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "vi-email",
                              type: "email",
                              placeholder: "Email",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Mobile", "label-for": "vi-mobile" } },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "SmartphoneIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "vi-mobile",
                              type: "number",
                              placeholder: "Mobile",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: { label: "Password", "label-for": "vi-password" },
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "LockIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "vi-password",
                              type: "password",
                              placeholder: "Password",
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          attrs: {
                            id: "checkbox-4",
                            name: "checkbox-4",
                            value: "Remember_me",
                          },
                        },
                        [_vm._v("\n            Remember me\n          ")]
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
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mr-1",
                      attrs: { type: "submit", variant: "primary" },
                    },
                    [_vm._v("\n          Submit\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      attrs: { type: "reset", variant: "outline-secondary" },
                    },
                    [_vm._v("\n          Reset\n        ")]
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

/***/ "./resources/js/src/views/forms/form-layout/FormLayout.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayout.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLayout_vue_vue_type_template_id_9e603158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLayout.vue?vue&type=template&id=9e603158& */ "./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=template&id=9e603158&");
/* harmony import */ var _FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayout.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLayout_vue_vue_type_template_id_9e603158___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLayout_vue_vue_type_template_id_9e603158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-layout/FormLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=template&id=9e603158&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=template&id=9e603158& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_template_id_9e603158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayout.vue?vue&type=template&id=9e603158& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayout.vue?vue&type=template&id=9e603158&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_template_id_9e603158___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_template_id_9e603158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLayoutDatalistHelper_vue_vue_type_template_id_0e455eec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLayoutDatalistHelper.vue?vue&type=template&id=0e455eec& */ "./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=template&id=0e455eec&");
/* harmony import */ var _FormLayoutDatalistHelper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayoutDatalistHelper.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLayoutDatalistHelper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLayoutDatalistHelper_vue_vue_type_template_id_0e455eec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLayoutDatalistHelper_vue_vue_type_template_id_0e455eec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutDatalistHelper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutDatalistHelper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutDatalistHelper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=template&id=0e455eec&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=template&id=0e455eec& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutDatalistHelper_vue_vue_type_template_id_0e455eec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutDatalistHelper.vue?vue&type=template&id=0e455eec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutDatalistHelper.vue?vue&type=template&id=0e455eec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutDatalistHelper_vue_vue_type_template_id_0e455eec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutDatalistHelper_vue_vue_type_template_id_0e455eec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLayoutFeedbackHelper_vue_vue_type_template_id_c66fcef2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLayoutFeedbackHelper.vue?vue&type=template&id=c66fcef2& */ "./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=template&id=c66fcef2&");
/* harmony import */ var _FormLayoutFeedbackHelper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayoutFeedbackHelper.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLayoutFeedbackHelper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLayoutFeedbackHelper_vue_vue_type_template_id_c66fcef2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLayoutFeedbackHelper_vue_vue_type_template_id_c66fcef2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutFeedbackHelper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutFeedbackHelper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutFeedbackHelper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=template&id=c66fcef2&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=template&id=c66fcef2& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutFeedbackHelper_vue_vue_type_template_id_c66fcef2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutFeedbackHelper.vue?vue&type=template&id=c66fcef2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutFeedbackHelper.vue?vue&type=template&id=c66fcef2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutFeedbackHelper_vue_vue_type_template_id_c66fcef2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutFeedbackHelper_vue_vue_type_template_id_c66fcef2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLayoutHorizontal_vue_vue_type_template_id_1523d298___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLayoutHorizontal.vue?vue&type=template&id=1523d298& */ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=template&id=1523d298&");
/* harmony import */ var _FormLayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayoutHorizontal.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLayoutHorizontal_vue_vue_type_template_id_1523d298___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLayoutHorizontal_vue_vue_type_template_id_1523d298___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=template&id=1523d298&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=template&id=1523d298& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutHorizontal_vue_vue_type_template_id_1523d298___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutHorizontal.vue?vue&type=template&id=1523d298& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutHorizontal.vue?vue&type=template&id=1523d298&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutHorizontal_vue_vue_type_template_id_1523d298___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutHorizontal_vue_vue_type_template_id_1523d298___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLayoutHorizontalIcon_vue_vue_type_template_id_614a8eb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLayoutHorizontalIcon.vue?vue&type=template&id=614a8eb1& */ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=template&id=614a8eb1&");
/* harmony import */ var _FormLayoutHorizontalIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayoutHorizontalIcon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLayoutHorizontalIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLayoutHorizontalIcon_vue_vue_type_template_id_614a8eb1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLayoutHorizontalIcon_vue_vue_type_template_id_614a8eb1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutHorizontalIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutHorizontalIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutHorizontalIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=template&id=614a8eb1&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=template&id=614a8eb1& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutHorizontalIcon_vue_vue_type_template_id_614a8eb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutHorizontalIcon.vue?vue&type=template&id=614a8eb1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutHorizontalIcon.vue?vue&type=template&id=614a8eb1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutHorizontalIcon_vue_vue_type_template_id_614a8eb1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutHorizontalIcon_vue_vue_type_template_id_614a8eb1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLayoutMultipleColumn_vue_vue_type_template_id_4c3bde0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLayoutMultipleColumn.vue?vue&type=template&id=4c3bde0c& */ "./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=template&id=4c3bde0c&");
/* harmony import */ var _FormLayoutMultipleColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayoutMultipleColumn.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLayoutMultipleColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLayoutMultipleColumn_vue_vue_type_template_id_4c3bde0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLayoutMultipleColumn_vue_vue_type_template_id_4c3bde0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutMultipleColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutMultipleColumn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutMultipleColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=template&id=4c3bde0c&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=template&id=4c3bde0c& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutMultipleColumn_vue_vue_type_template_id_4c3bde0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutMultipleColumn.vue?vue&type=template&id=4c3bde0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutMultipleColumn.vue?vue&type=template&id=4c3bde0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutMultipleColumn_vue_vue_type_template_id_4c3bde0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutMultipleColumn_vue_vue_type_template_id_4c3bde0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLayoutVertical_vue_vue_type_template_id_8fcf082c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLayoutVertical.vue?vue&type=template&id=8fcf082c& */ "./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=template&id=8fcf082c&");
/* harmony import */ var _FormLayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayoutVertical.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLayoutVertical_vue_vue_type_template_id_8fcf082c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLayoutVertical_vue_vue_type_template_id_8fcf082c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-layout/FormLayoutVertical.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutVertical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=template&id=8fcf082c&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=template&id=8fcf082c& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutVertical_vue_vue_type_template_id_8fcf082c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutVertical.vue?vue&type=template&id=8fcf082c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutVertical.vue?vue&type=template&id=8fcf082c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutVertical_vue_vue_type_template_id_8fcf082c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutVertical_vue_vue_type_template_id_8fcf082c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLayoutVerticalIcon_vue_vue_type_template_id_877381fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLayoutVerticalIcon.vue?vue&type=template&id=877381fa& */ "./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=template&id=877381fa&");
/* harmony import */ var _FormLayoutVerticalIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayoutVerticalIcon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLayoutVerticalIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLayoutVerticalIcon_vue_vue_type_template_id_877381fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLayoutVerticalIcon_vue_vue_type_template_id_877381fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutVerticalIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutVerticalIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutVerticalIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=template&id=877381fa&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=template&id=877381fa& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutVerticalIcon_vue_vue_type_template_id_877381fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLayoutVerticalIcon.vue?vue&type=template&id=877381fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-layout/FormLayoutVerticalIcon.vue?vue&type=template&id=877381fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutVerticalIcon_vue_vue_type_template_id_877381fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayoutVerticalIcon_vue_vue_type_template_id_877381fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-layout/code.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/forms/form-layout/code.js ***!
  \**********************************************************/
/*! exports provided: codeFeedbackHelper, codeHelper, codeHorizontal, codeHorizontalIcon, codeMultipleColumn, codeVertical, codeVerticalIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeFeedbackHelper", function() { return codeFeedbackHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeHelper", function() { return codeHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeHorizontal", function() { return codeHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeHorizontalIcon", function() { return codeHorizontalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeMultipleColumn", function() { return codeMultipleColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVertical", function() { return codeVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVerticalIcon", function() { return codeVerticalIcon; });
var codeFeedbackHelper = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n      <!-- username -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Username\"\n          label-for=\"fh-usename\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"UserIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"fh-usename\"\n              placeholder=\"Username\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n\n      <!-- email -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"fh-email\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"MailIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"fh-email\"\n              type=\"email\"\n              placeholder=\"Email\"\n            />\n          </b-input-group>\n          <b-form-text class=\"text-danger\">\n            Enter a Valid Email\n          </b-form-text>\n        </b-form-group>\n      </b-col>\n\n      <!-- password -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"fh-password\"\n        >\n          <b-input-group\n            class=\"input-group-merge\"\n            :class=\"validation ? 'is-valid' : 'is-invalid'\"\n          >\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"LockIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"fh-password\"\n              v-model=\"userId\"\n              type=\"password\"\n              :state=\"validation\"\n              placeholder=\"Password\"\n            />\n          </b-input-group>\n          <b-form-invalid-feedback :state=\"validation\">\n            Your password must be 8-20 characters long.\n          </b-form-invalid-feedback>\n          <b-form-valid-feedback :state=\"validation\">\n            Looks Good.\n          </b-form-valid-feedback>\n        </b-form-group>\n      </b-col>\n\n      <!-- occupation -->\n      <b-col cols=\"12\">\n        <b-form-group label=\"Occupation\">\n          <b-input-group\n            class=\"input-group-merge\"\n            :class=\"validationOccupation ? 'is-valid' : 'is-invalid'\"\n          >\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"LockIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              v-model=\"occupationID\"\n              list=\"input-list\"\n              placeholder=\"Occupation\"\n              :state=\"validationOccupation\"\n            />\n          </b-input-group>\n          <b-form-datalist\n            id=\"input-list\"\n            :options=\"options\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- checkbox -->\n      <b-col cols=\"12\">\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-8\"\n            name=\"checkbox-8\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col>\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n          @click=\"reset\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-form>\n</template>\n\n<script>\nimport {\n  BRow,\n  BCol,\n  BFormGroup,\n  BFormInput,\n  BFormCheckbox,\n  BForm,\n  BButton,\n  BFormText,\n  BFormDatalist,\n  BFormInvalidFeedback,\n  BInputGroup,\n  BInputGroupPrepend,\n  BFormValidFeedback,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BInputGroup,\n    BInputGroupPrepend,\n    BFormInput,\n    BFormCheckbox,\n    BForm,\n    BFormText,\n    BButton,\n    BFormDatalist,\n    BFormInvalidFeedback,\n    BFormValidFeedback,\n  },\n directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      options: ['Devloper', 'Manager', 'CEO', 'CTO', 'Full Stack Devloper'],\n      userId: '',\n      occupationID: '',\n    }\n  },\n  computed: {\n    validation() {\n      return this.userId.length > 4 && this.userId.length < 13\n    },\n    validationOccupation() {\n      return this.occupationID.length > 1\n    },\n  },\n  methods: {\n    reset() {\n      this.userId = ''\n      this.occupationID = ''\n    },\n  },\n}\n</script>\n";
var codeHelper = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n\n      <!-- username -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Username\"\n          label-for=\"h-username\"\n        >\n          <b-form-input\n            id=\"h-username\"\n            placeholder=\"Username\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- email -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"d-email\"\n        >\n          <b-form-input\n            id=\"d-email\"\n            type=\"email\"\n            placeholder=\"Email\"\n          />\n          <b-form-text>Enter a Valid Email</b-form-text>\n        </b-form-group>\n      </b-col>\n\n      <!-- password -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"d-password\"\n        >\n          <b-form-input\n            id=\"d-password\"\n            type=\"password\"\n            placeholder=\"Password\"\n          />\n          <b-form-text>Your password must be 8-20 characters long.</b-form-text>\n        </b-form-group>\n      </b-col>\n\n      <!-- occupation -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Occupation\"\n          label-for=\"h-occupation\"\n        >\n          <b-form-input\n            id=\"h-occupation\"\n            list=\"input-list\"\n            placeholder=\"Occupation\"\n          />\n          <b-form-datalist\n            id=\"input-list\"\n            :options=\"options\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- checkbox -->\n      <b-col cols=\"12\">\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-9\"\n            name=\"checkbox-9\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col>\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-form>\n</template>\n\n<script>\nimport {\n  BRow,\n  BCol,\n  BFormGroup,\n  BFormInput,\n  BFormCheckbox,\n  BForm,\n  BButton,\n  BFormText,\n  BFormDatalist,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BForm,\n    BFormText,\n    BButton,\n    BFormDatalist,\n  },\n   directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      options: ['Devloper', 'Manager', 'CEO', 'CTO', 'Full Stack Devloper'],\n    }\n  },\n}\n</script>\n";
var codeHorizontal = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"First Name\"\n          label-for=\"h-first-name\"\n          label-cols-md=\"4\"\n        >\n          <b-form-input\n            id=\"h-first-name\"\n            placeholder=\"First Name\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"h-email\"\n          label-cols-md=\"4\"\n        >\n          <b-form-input\n            id=\"h-email\"\n            type=\"email\"\n            placeholder=\"Email\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Mobile\"\n          label-for=\"h-number\"\n          label-cols-md=\"4\"\n        >\n          <b-form-input\n            id=\"h-number\"\n            type=\"number\"\n            placeholder=\"Mobile\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"h-password\"\n          label-cols-md=\"4\"\n        >\n          <b-form-input\n            id=\"h-password\"\n            type=\"password\"\n            placeholder=\"Password\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col\n        md=\"8\"\n        offset-md=\"4\"\n      >\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-2\"\n            name=\"checkbox-2\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col offset-md=\"4\">\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n\n  </b-form>\n</template>\n\n<script>\nimport {\n  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BForm,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";
var codeHorizontalIcon = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"First Name\"\n          label-for=\"hi-first-name\"\n          label-cols-md=\"4\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"UserIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"hi-first-name\"\n              placeholder=\"First Name\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"hi-email\"\n          label-cols-md=\"4\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"MailIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"hi-email\"\n              type=\"email\"\n              placeholder=\"Email\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Mobile\"\n          label-for=\"hi-number\"\n          label-cols-md=\"4\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"SmartphoneIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"hi-number\"\n              type=\"number\"\n              placeholder=\"Mobile\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"hi-password\"\n          label-cols-md=\"4\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"LockIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"hi-password\"\n              type=\"password\"\n              placeholder=\"Password\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n      <b-col\n        md=\"8\"\n        offset-md=\"4\"\n      >\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-1\"\n            name=\"checkbox-1\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col offset-md=\"4\">\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n\n  </b-form>\n</template>\n\n<script>\nimport {\n  BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BRow, BCol,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BInputGroup,\n    BInputGroupPrepend,\n    BForm,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";
var codeMultipleColumn = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n      <b-col md=\"6\">\n        <b-form-group\n          label=\"First Name\"\n          label-for=\"mc-first-name\"\n        >\n          <b-form-input\n            id=\"mc-first-name\"\n            placeholder=\"First Name\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group\n          label=\"Last Name\"\n          label-for=\"mc-last-name\"\n        >\n          <b-form-input\n            id=\"mc-last-name\"\n            placeholder=\"Last Name\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group\n          label=\"City\"\n          label-for=\"mc-city\"\n        >\n          <b-form-input\n            id=\"mc-city\"\n            placeholder=\"City\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group\n          label=\"Country\"\n          label-for=\"mc-country\"\n        >\n          <b-form-input\n            id=\"mc-country\"\n            placeholder=\"Country\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group\n          label=\"Company\"\n          label-for=\"mc-company\"\n        >\n          <div class=\"form-label-group\">\n            <b-form-input\n              id=\"mc-company\"\n              placeholder=\"Company\"\n            />\n          </div>\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group\n          label-for=\"mc-email\"\n          label=\"Email\"\n        >\n          <div class=\"form-label-group\">\n            <b-form-input\n              id=\"mc-email\"\n              type=\"email\"\n              placeholder=\"Email\"\n            />\n          </div>\n        </b-form-group>\n      </b-col>\n\n      <b-col cols=\"12\">\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-10\"\n            name=\"checkbox-10\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col>\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-form>\n</template>\n\n\n<script>\nimport {\n  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BForm,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";
var codeVertical = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n\n      <!-- first name -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"First Name\"\n          label-for=\"v-first-name\"\n        >\n          <b-form-input\n            id=\"v-first-name\"\n            placeholder=\"First Name\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- email -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"v-email\"\n        >\n          <b-form-input\n            id=\"v-email\"\n            type=\"email\"\n            placeholder=\"Email\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- mobile -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Mobile\"\n          label-for=\"v-mobile\"\n        >\n          <b-form-input\n            id=\"v-mobile\"\n            type=\"number\"\n            placeholder=\"Mobile\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- password -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"v-password\"\n        >\n          <b-form-input\n            id=\"v-password\"\n            type=\"password\"\n            placeholder=\"Password\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- checkbox -->\n      <b-col cols=\"12\">\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-3\"\n            name=\"checkbox-3\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col cols=\"12\">\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-form>\n</template>\n\n<script>\nimport {\n  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BForm,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";
var codeVerticalIcon = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n\n      <!-- first name -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"First Name\"\n          label-for=\"vi-first-name\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"UserIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"vi-first-name\"\n              placeholder=\"First Name\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n\n      <!-- email -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"vi-email\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"MailIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"vi-email\"\n              type=\"email\"\n              placeholder=\"Email\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n\n      <!-- mobile -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Mobile\"\n          label-for=\"vi-mobile\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"SmartphoneIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"vi-mobile\"\n              type=\"number\"\n              placeholder=\"Mobile\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n\n      <!-- password -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"vi-password\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"LockIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"vi-password\"\n              type=\"password\"\n              placeholder=\"Password\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n\n      <!-- checkbox -->\n      <b-col cols=\"12\">\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-4\"\n            name=\"checkbox-4\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- reset and submit -->\n      <b-col cols=\"12\">\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-form>\n</template>\n\n<script>\nimport {\n  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BInputGroup,\n    BInputGroupPrepend,\n    BForm,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";

/***/ })

}]);