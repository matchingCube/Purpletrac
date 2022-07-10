(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/Alert.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/Alert.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _AlertDefault_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertDefault.vue */ "./resources/js/src/views/components/alert/AlertDefault.vue");
/* harmony import */ var _AlertTitle_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlertTitle.vue */ "./resources/js/src/views/components/alert/AlertTitle.vue");
/* harmony import */ var _AlertIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlertIcon.vue */ "./resources/js/src/views/components/alert/AlertIcon.vue");
/* harmony import */ var _AlertColor_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AlertColor.vue */ "./resources/js/src/views/components/alert/AlertColor.vue");
/* harmony import */ var _AlertAutoDismiss_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AlertAutoDismiss.vue */ "./resources/js/src/views/components/alert/AlertAutoDismiss.vue");
/* harmony import */ var _AlertVModelSupport_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AlertVModelSupport.vue */ "./resources/js/src/views/components/alert/AlertVModelSupport.vue");
/* harmony import */ var _AlertAnimation_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AlertAnimation.vue */ "./resources/js/src/views/components/alert/AlertAnimation.vue");
/* harmony import */ var _AlertExample_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AlertExample.vue */ "./resources/js/src/views/components/alert/AlertExample.vue");
//
//
//
//
//
//
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
    AlertDefault: _AlertDefault_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AlertTitle: _AlertTitle_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AlertIcon: _AlertIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AlertColor: _AlertColor_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    AlertAutoDismiss: _AlertAutoDismiss_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    AlertVModelSupport: _AlertVModelSupport_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    AlertAnimation: _AlertAnimation_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    AlertExample: _AlertExample_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_directives_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/animations */ "./resources/js/src/@core/directives/animations.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  directives: {
    heightFade: _core_directives_animations__WEBPACK_IMPORTED_MODULE_2__["heightFade"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      dismissSecs: 50,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      codeAnimation: _code__WEBPACK_IMPORTED_MODULE_4__["codeAnimation"]
    };
  },
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert: function showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_directives_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/animations */ "./resources/js/src/@core/directives/animations.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  directives: {
    'height-fade': _core_directives_animations__WEBPACK_IMPORTED_MODULE_2__["heightFade"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      dismissSecs: 50,
      dismissCountDown: 0,
      codeAutoDismiss: _code__WEBPACK_IMPORTED_MODULE_4__["codeAutoDismiss"]
    };
  },
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert: function showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertColor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertColor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeAlertColor: _code__WEBPACK_IMPORTED_MODULE_2__["codeAlertColor"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeAlertDefaut: _code__WEBPACK_IMPORTED_MODULE_2__["codeAlertDefaut"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertExample.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertExample.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_directives_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/animations */ "./resources/js/src/@core/directives/animations.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/alert/code.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BAlert"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormInput"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardText"]
  },
  directives: {
    'height-fade': _core_directives_animations__WEBPACK_IMPORTED_MODULE_4__["heightFade"]
  },
  data: function data() {
    return {
      value: '',
      show: true,
      codeExample: _code__WEBPACK_IMPORTED_MODULE_5__["codeExample"]
    };
  },
  methods: {
    validateInput: function validateInput() {
      if (/^\d+$/.test(this.value)) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeIcon: _code__WEBPACK_IMPORTED_MODULE_2__["codeIcon"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"]
  },
  data: function data() {
    return {
      codeAlertTitle: _code__WEBPACK_IMPORTED_MODULE_2__["codeAlertTitle"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_directives_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/animations */ "./resources/js/src/@core/directives/animations.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  directives: {
    'height-fade': _core_directives_animations__WEBPACK_IMPORTED_MODULE_2__["heightFade"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      showDismissibleAlert: false,
      codeVsupport: _code__WEBPACK_IMPORTED_MODULE_4__["codeVsupport"]
    };
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/schedulers-fix.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/schedulers-fix.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return MSIE ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(fn, this, args);
    } : fn, timeout);
  } : scheduler;
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
module.exports = {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.test.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.test.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var Error = global.Error;
var un$Test = uncurryThis(/./.test);

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    var exec = this.exec;
    if (!isCallable(exec)) return un$Test(this, str);
    var result = call(exec, this, str);
    if (result !== null && !isObject(result)) {
      throw new Error('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-interval.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-interval.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setInterval = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js").setInterval;

// ie9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-timeout.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-timeout.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setTimeout = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js").setTimeout;

// ie9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/web.set-interval */ "./node_modules/core-js/modules/web.set-interval.js");
__webpack_require__(/*! ../modules/web.set-timeout */ "./node_modules/core-js/modules/web.set-timeout.js");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/Alert.vue?vue&type=template&id=4c8fce4c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/Alert.vue?vue&type=template&id=4c8fce4c& ***!
  \************************************************************************************************************************************************************************************************************************/
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
          _c("alert-default"),
          _vm._v(" "),
          _c("alert-title"),
          _vm._v(" "),
          _c("alert-color"),
          _vm._v(" "),
          _c("alert-icon"),
          _vm._v(" "),
          _c("alert-auto-dismiss"),
          _vm._v(" "),
          _c("alert-v-model-support"),
          _vm._v(" "),
          _c("alert-animation"),
          _vm._v(" "),
          _c("alert-example"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=template&id=52201ffa&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=template&id=52201ffa& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Alert Animation" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeAnimation) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("Use the ")]),
        _vm._v(" "),
        _c("code", [_vm._v("hightFaded")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            " directive to enable animation. By default alerts are not animated."
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "b-alert",
        {
          directives: [{ name: "height-fade", rawName: "v-height-fade" }],
          staticClass: "mb-0",
          attrs: { show: "", dismissible: "", fade: "", variant: "primary" },
        },
        [
          _c("div", { staticClass: "alert-body" }, [
            _c("span", [_vm._v("Dismissible Alert!")]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("b-card-text", { staticClass: "pt-2 mb-0" }, [
        _c("span", [
          _vm._v(
            "If you want to show animation even when alert get rendered. You can use "
          ),
        ]),
        _vm._v(" "),
        _c("code", [_vm._v("appear")]),
        _vm._v(" "),
        _c("span", [_vm._v(" modifier")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-inline-spacing mb-1" },
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
              attrs: { variant: "primary" },
              on: { click: _vm.showAlert },
            },
            [_vm._v("\n      Show alert with count-down timer\n    ")]
          ),
          _vm._v(" "),
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
              attrs: { variant: "primary" },
              on: {
                click: function ($event) {
                  _vm.showDismissibleAlert = true
                },
              },
            },
            [
              _vm._v(
                "\n      Show dismissible alert (" +
                  _vm._s(_vm.showDismissibleAlert ? "visible" : "hidden") +
                  ")\n    "
              ),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-alert",
        {
          directives: [
            {
              name: "height-fade",
              rawName: "v-height-fade.appear",
              modifiers: { appear: true },
            },
          ],
          staticClass: "mb-0",
          attrs: {
            variant: "danger",
            dismissible: "",
            fade: "",
            show: _vm.showDismissibleAlert,
          },
          on: {
            dismissed: function ($event) {
              _vm.showDismissibleAlert = false
            },
          },
        },
        [
          _c("div", { staticClass: "alert-body" }, [
            _c("span", [_vm._v("Dismissible Alert!")]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("b-card-text", { staticClass: "m-0 py-1" }, [
        _vm._v("\n    You can even use this on dismissible alerts.\n  "),
      ]),
      _vm._v(" "),
      _c(
        "b-alert",
        {
          directives: [
            {
              name: "height-fade",
              rawName: "v-height-fade.appear",
              modifiers: { appear: true },
            },
          ],
          staticClass: "mb-0",
          attrs: {
            show: _vm.dismissCountDown,
            dismissible: "",
            fade: "",
            variant: "warning",
          },
          on: { "dismiss-count-down": _vm.countDownChanged },
        },
        [
          _c("div", { staticClass: "alert-body" }, [
            _c("span", [
              _vm._v(
                "This alert will dismiss after " +
                  _vm._s(_vm.dismissCountDown) +
                  " seconds..."
              ),
            ]),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=template&id=5d08095e&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=template&id=5d08095e& ***!
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
      attrs: { title: "Auto dismissing alerts" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeAutoDismiss) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("To create a ")]),
        _vm._v(" "),
        _c("code", [_vm._v("<b-alert>")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            " that dismisses automatically after a period of time, set the "
          ),
        ]),
        _vm._v(" "),
        _c("code", [_vm._v("show")]),
        _vm._v(" "),
        _c("span", [_vm._v(" prop (or the ")]),
        _vm._v(" "),
        _c("code", [_vm._v("v-model")]),
        _vm._v(" "),
        _c("span", [_vm._v(") to the number of seconds you would like the ")]),
        _vm._v(" "),
        _c("code", [_vm._v("<b-alert>")]),
        _vm._v(" "),
        _c("span", [_vm._v(" to remain visible for.")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-spacing-0" },
        [
          _c(
            "b-alert",
            {
              directives: [
                {
                  name: "height-fade",
                  rawName: "v-height-fade.appear",
                  modifiers: { appear: true },
                },
              ],
              staticClass: "mb-0",
              attrs: {
                show: _vm.dismissCountDown,
                dismissible: "",
                variant: "warning",
              },
              on: {
                dismissed: function ($event) {
                  _vm.dismissCountDown = 0
                },
                "dismiss-count-down": _vm.countDownChanged,
              },
            },
            [
              _c("div", { staticClass: "alert-body" }, [
                _c("span", [
                  _vm._v(
                    "This alert will dismiss after " +
                      _vm._s(_vm.dismissCountDown) +
                      " seconds..."
                  ),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
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
              staticClass: "mt-75",
              attrs: { variant: "primary" },
              on: { click: _vm.showAlert },
            },
            [_vm._v("\n      Show alert with count-down timer\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertColor.vue?vue&type=template&id=6f61cb59&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertColor.vue?vue&type=template&id=6f61cb59& ***!
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
      _c(
        "b-card-code",
        {
          attrs: { title: "Colors" },
          scopedSlots: _vm._u([
            {
              key: "code",
              fn: function () {
                return [
                  _vm._v("\n      " + _vm._s(_vm.codeAlertColor) + "\n    "),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _c("b-card-text", [
            _c("span", [_vm._v("For proper styling of ")]),
            _vm._v(" "),
            _c("code", [_vm._v("<b-alert>")]),
            _vm._v(" "),
            _c("span", [
              _vm._v(
                " , use one of the four required contextual variants by setting the "
              ),
            ]),
            _vm._v(" "),
            _c("code", [_vm._v("variant")]),
            _vm._v(" "),
            _c("span", [_vm._v(" prop to one of the following: ")]),
            _vm._v(" "),
            _c("code", [_vm._v("info, success, warning")]),
            _vm._v(" "),
            _c("span", [_vm._v(" or ")]),
            _vm._v(" "),
            _c("code", [_vm._v("danger")]),
            _vm._v(" "),
            _c("span", [_vm._v(" . The default is ")]),
            _vm._v(" "),
            _c("code", [_vm._v("info")]),
            _vm._v(" "),
            _c("span", [_vm._v(" .")]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "demo-spacing-0" },
            [
              _c("b-alert", { attrs: { variant: "primary", show: "" } }, [
                _c("h4", { staticClass: "alert-heading" }, [
                  _vm._v("\n          Primary\n        "),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "alert-body" }, [
                  _c("span", [
                    _vm._v(
                      "Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("b-alert", { attrs: { variant: "secondary", show: "" } }, [
                _c("h4", { staticClass: "alert-heading" }, [
                  _vm._v("\n          Secondary\n        "),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "alert-body" }, [
                  _c("span", [
                    _vm._v(
                      "Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("b-alert", { attrs: { variant: "success", show: "" } }, [
                _c("h4", { staticClass: "alert-heading" }, [
                  _vm._v("\n          Success\n        "),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "alert-body" }, [
                  _c("span", [
                    _vm._v(
                      "Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("b-alert", { attrs: { variant: "danger", show: "" } }, [
                _c("h4", { staticClass: "alert-heading" }, [
                  _vm._v("\n          Danger\n        "),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "alert-body" }, [
                  _c("span", [
                    _vm._v(
                      "Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("b-alert", { attrs: { variant: "warning", show: "" } }, [
                _c("h4", { staticClass: "alert-heading" }, [
                  _vm._v("\n          Warning\n        "),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "alert-body" }, [
                  _c("span", [
                    _vm._v(
                      "Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("b-alert", { attrs: { variant: "info", show: "" } }, [
                _c("h4", { staticClass: "alert-heading" }, [
                  _vm._v("\n          Info\n        "),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "alert-body" }, [
                  _c("span", [
                    _vm._v(
                      "Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("b-alert", { attrs: { variant: "dark", show: "" } }, [
                _c("h4", { staticClass: "alert-heading" }, [
                  _vm._v("\n          Dark\n        "),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "alert-body" }, [
                  _c("span", [
                    _vm._v(
                      "Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."
                    ),
                  ]),
                ]),
              ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=template&id=087a93b7&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=template&id=087a93b7& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Default" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeAlertDefaut) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _vm._v(
          "Alerts are available for any length of text, as well as an optional dismiss button (and optional auto-dismissing)."
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-spacing-0" },
        [
          _c("b-alert", { attrs: { variant: "primary", show: "" } }, [
            _c("div", { staticClass: "alert-body" }, [
              _c("span", [
                _c("strong", [_vm._v("Good Morning!")]),
                _vm._v(" Start your day with some alerts."),
              ]),
            ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertExample.vue?vue&type=template&id=a28fdb40&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertExample.vue?vue&type=template&id=a28fdb40& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Example" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeExample) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("Use the ")]),
        _vm._v(" "),
        _c("code", [_vm._v("show")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            " prop to control the visibility state of the alert.\n      By default alerts are not shown. Set the prop "
          ),
        ]),
        _vm._v(" "),
        _c("code", [_vm._v("show")]),
        _vm._v(" "),
        _c("span", [_vm._v(" to explicitly display them.")]),
      ]),
      _vm._v(" "),
      _c(
        "b-form-group",
        [
          _c("label", [_vm._v("Enter only numbers")]),
          _vm._v(" "),
          _c("b-form-input", {
            staticClass: "w-25 w-sm-100",
            attrs: { placeholder: "0123456789" },
            on: { keyup: _vm.validateInput },
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
      _vm._v(" "),
      _c(
        "b-alert",
        {
          directives: [
            {
              name: "height-fade",
              rawName: "v-height-fade.appear",
              modifiers: { appear: true },
            },
          ],
          staticClass: "mb-0",
          attrs: { variant: "danger", show: _vm.show },
        },
        [
          _c(
            "div",
            { staticClass: "alert-body" },
            [
              _c("feather-icon", {
                staticClass: "mr-50",
                attrs: { icon: "InfoIcon" },
              }),
              _vm._v(
                "\n      the value is invalid you can only enter numbers\n    "
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=template&id=cc24381a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=template&id=cc24381a& ***!
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
      attrs: { title: "Icon" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeIcon) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("You can use icon inside ")]),
        _vm._v(" "),
        _c("code", [_vm._v(".alert-body")]),
        _vm._v(" "),
        _c("span", [_vm._v(" or ")]),
        _vm._v(" "),
        _c("code", [_vm._v(".alert-heading")]),
        _vm._v(" "),
        _c("span", [_vm._v(" section.")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-spacing-0" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [
                  _vm._v(
                    "Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer."
                  ),
                ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=template&id=7a023bce&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=template&id=7a023bce& ***!
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
    "b-card-code",
    {
      attrs: { title: "Title" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeAlertTitle) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("Add a title to the alert with the ")]),
        _vm._v(" "),
        _c("code", [_vm._v(".alert-heading")]),
        _vm._v(" "),
        _c("span", [_vm._v(" class.")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-spacing-0" },
        [
          _c("b-alert", { attrs: { variant: "warning", show: "" } }, [
            _c("h4", { staticClass: "alert-heading" }, [
              _vm._v("\n        Lorem ipsum dolor sit amet\n      "),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "alert-body" },
              [
                _vm._v("\n        Lorem ipsum dolor sit amet\n        "),
                _c("b-link", { staticClass: "alert-link" }, [
                  _vm._v("\n          consectetur\n        "),
                ]),
                _vm._v("\n        adipisicing elit. Ducimus, laborum!\n      "),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=template&id=c447ad1c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=template&id=c447ad1c& ***!
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
    "b-card-code",
    {
      attrs: { title: "v-model support" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeVsupport) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("You can use the ")]),
        _vm._v(" "),
        _c("code", [_vm._v("v-model")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(" directive to create two-way data bindings on the "),
        ]),
        _vm._v(" "),
        _c("code", [_vm._v("show")]),
        _vm._v(" "),
        _c("span", [_vm._v(" prop as in ")]),
        _vm._v(" "),
        _c("code", [_vm._v('v-model="showDismissibleAlert"')]),
        _vm._v(" "),
        _c("span", [_vm._v(" above.")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-spacing-0" },
        [
          _c(
            "b-alert",
            {
              directives: [
                {
                  name: "height-fade",
                  rawName: "v-height-fade.appear",
                  modifiers: { appear: true },
                },
              ],
              staticClass: "mb-0",
              attrs: { variant: "danger", dismissible: "" },
              model: {
                value: _vm.showDismissibleAlert,
                callback: function ($$v) {
                  _vm.showDismissibleAlert = $$v
                },
                expression: "showDismissibleAlert",
              },
            },
            [
              _c("div", { staticClass: "alert-body" }, [
                _vm._v("\n        Dismissible Alert!\n      "),
              ]),
            ]
          ),
          _vm._v(" "),
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
              staticClass: "mt-1",
              attrs: { variant: "primary" },
              on: {
                click: function ($event) {
                  _vm.showDismissibleAlert = !_vm.showDismissibleAlert
                },
              },
            },
            [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.showDismissibleAlert ? "Hide" : "Show") +
                  " dismissible alert\n    "
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

/***/ "./resources/js/src/@core/directives/animations.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/@core/directives/animations.js ***!
  \*********************************************************/
/*! exports provided: heightFade, temp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heightFade", function() { return heightFade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "temp", function() { return temp; });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);

var heightFade = {
  /* eslint-disable no-param-reassign */
  inserted: function inserted(el, binding) {
    var height = "".concat(el.offsetHeight, "px");

    if (binding.modifiers.appear) {
      el.style.overflow = 'hidden';
      el.style.maxHeight = '0px';
      el.style.opacity = 0; // Focus the element

      setTimeout(function () {
        el.style.maxHeight = height;
        el.style.opacity = 1;
        setTimeout(function () {
          el.style.overflow = 'unset';
        }, 300);
      }, 100);
    } else {
      el.style.maxHeight = height;
    }
  },
  unbind: function unbind(el) {
    if (el.style === undefined) return;
    el.style.overflow = 'hidden';
    el.style.maxHeight = '0px';
    el.style.opacity = 0;
  }
  /* eslint-enable no-param-reassign */

};
var temp = 2;

/***/ }),

/***/ "./resources/js/src/views/components/alert/Alert.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/components/alert/Alert.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert_vue_vue_type_template_id_4c8fce4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.vue?vue&type=template&id=4c8fce4c& */ "./resources/js/src/views/components/alert/Alert.vue?vue&type=template&id=4c8fce4c&");
/* harmony import */ var _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/alert/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alert_vue_vue_type_template_id_4c8fce4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alert_vue_vue_type_template_id_4c8fce4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/alert/Alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/alert/Alert.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/Alert.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/alert/Alert.vue?vue&type=template&id=4c8fce4c&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/Alert.vue?vue&type=template&id=4c8fce4c& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_4c8fce4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=template&id=4c8fce4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/Alert.vue?vue&type=template&id=4c8fce4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_4c8fce4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_4c8fce4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertAnimation.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertAnimation.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertAnimation_vue_vue_type_template_id_52201ffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertAnimation.vue?vue&type=template&id=52201ffa& */ "./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=template&id=52201ffa&");
/* harmony import */ var _AlertAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertAnimation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertAnimation_vue_vue_type_template_id_52201ffa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertAnimation_vue_vue_type_template_id_52201ffa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/alert/AlertAnimation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertAnimation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=template&id=52201ffa&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=template&id=52201ffa& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertAnimation_vue_vue_type_template_id_52201ffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertAnimation.vue?vue&type=template&id=52201ffa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertAnimation.vue?vue&type=template&id=52201ffa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertAnimation_vue_vue_type_template_id_52201ffa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertAnimation_vue_vue_type_template_id_52201ffa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertAutoDismiss.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertAutoDismiss.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertAutoDismiss_vue_vue_type_template_id_5d08095e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertAutoDismiss.vue?vue&type=template&id=5d08095e& */ "./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=template&id=5d08095e&");
/* harmony import */ var _AlertAutoDismiss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertAutoDismiss.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertAutoDismiss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertAutoDismiss_vue_vue_type_template_id_5d08095e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertAutoDismiss_vue_vue_type_template_id_5d08095e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/alert/AlertAutoDismiss.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertAutoDismiss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertAutoDismiss.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertAutoDismiss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=template&id=5d08095e&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=template&id=5d08095e& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertAutoDismiss_vue_vue_type_template_id_5d08095e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertAutoDismiss.vue?vue&type=template&id=5d08095e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertAutoDismiss.vue?vue&type=template&id=5d08095e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertAutoDismiss_vue_vue_type_template_id_5d08095e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertAutoDismiss_vue_vue_type_template_id_5d08095e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertColor.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertColor.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertColor_vue_vue_type_template_id_6f61cb59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertColor.vue?vue&type=template&id=6f61cb59& */ "./resources/js/src/views/components/alert/AlertColor.vue?vue&type=template&id=6f61cb59&");
/* harmony import */ var _AlertColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertColor.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/alert/AlertColor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertColor_vue_vue_type_template_id_6f61cb59___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertColor_vue_vue_type_template_id_6f61cb59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/alert/AlertColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertColor.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertColor.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertColor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertColor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertColor.vue?vue&type=template&id=6f61cb59&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertColor.vue?vue&type=template&id=6f61cb59& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertColor_vue_vue_type_template_id_6f61cb59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertColor.vue?vue&type=template&id=6f61cb59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertColor.vue?vue&type=template&id=6f61cb59&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertColor_vue_vue_type_template_id_6f61cb59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertColor_vue_vue_type_template_id_6f61cb59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertDefault.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertDefault.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertDefault_vue_vue_type_template_id_087a93b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertDefault.vue?vue&type=template&id=087a93b7& */ "./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=template&id=087a93b7&");
/* harmony import */ var _AlertDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertDefault.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertDefault_vue_vue_type_template_id_087a93b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertDefault_vue_vue_type_template_id_087a93b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/alert/AlertDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=template&id=087a93b7&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=template&id=087a93b7& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDefault_vue_vue_type_template_id_087a93b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertDefault.vue?vue&type=template&id=087a93b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertDefault.vue?vue&type=template&id=087a93b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDefault_vue_vue_type_template_id_087a93b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDefault_vue_vue_type_template_id_087a93b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertExample.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertExample.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertExample_vue_vue_type_template_id_a28fdb40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertExample.vue?vue&type=template&id=a28fdb40& */ "./resources/js/src/views/components/alert/AlertExample.vue?vue&type=template&id=a28fdb40&");
/* harmony import */ var _AlertExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertExample.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/alert/AlertExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertExample_vue_vue_type_template_id_a28fdb40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertExample_vue_vue_type_template_id_a28fdb40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/alert/AlertExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertExample.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertExample.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertExample.vue?vue&type=template&id=a28fdb40&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertExample.vue?vue&type=template&id=a28fdb40& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertExample_vue_vue_type_template_id_a28fdb40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertExample.vue?vue&type=template&id=a28fdb40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertExample.vue?vue&type=template&id=a28fdb40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertExample_vue_vue_type_template_id_a28fdb40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertExample_vue_vue_type_template_id_a28fdb40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertIcon.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertIcon.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertIcon_vue_vue_type_template_id_cc24381a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertIcon.vue?vue&type=template&id=cc24381a& */ "./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=template&id=cc24381a&");
/* harmony import */ var _AlertIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertIcon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertIcon_vue_vue_type_template_id_cc24381a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertIcon_vue_vue_type_template_id_cc24381a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/alert/AlertIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=template&id=cc24381a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=template&id=cc24381a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertIcon_vue_vue_type_template_id_cc24381a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertIcon.vue?vue&type=template&id=cc24381a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertIcon.vue?vue&type=template&id=cc24381a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertIcon_vue_vue_type_template_id_cc24381a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertIcon_vue_vue_type_template_id_cc24381a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertTitle.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertTitle.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertTitle_vue_vue_type_template_id_7a023bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertTitle.vue?vue&type=template&id=7a023bce& */ "./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=template&id=7a023bce&");
/* harmony import */ var _AlertTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertTitle.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertTitle_vue_vue_type_template_id_7a023bce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertTitle_vue_vue_type_template_id_7a023bce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/alert/AlertTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=template&id=7a023bce&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=template&id=7a023bce& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTitle_vue_vue_type_template_id_7a023bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertTitle.vue?vue&type=template&id=7a023bce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertTitle.vue?vue&type=template&id=7a023bce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTitle_vue_vue_type_template_id_7a023bce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTitle_vue_vue_type_template_id_7a023bce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertVModelSupport.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertVModelSupport.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertVModelSupport_vue_vue_type_template_id_c447ad1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertVModelSupport.vue?vue&type=template&id=c447ad1c& */ "./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=template&id=c447ad1c&");
/* harmony import */ var _AlertVModelSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertVModelSupport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertVModelSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertVModelSupport_vue_vue_type_template_id_c447ad1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertVModelSupport_vue_vue_type_template_id_c447ad1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/alert/AlertVModelSupport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertVModelSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertVModelSupport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertVModelSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=template&id=c447ad1c&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=template&id=c447ad1c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertVModelSupport_vue_vue_type_template_id_c447ad1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertVModelSupport.vue?vue&type=template&id=c447ad1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/alert/AlertVModelSupport.vue?vue&type=template&id=c447ad1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertVModelSupport_vue_vue_type_template_id_c447ad1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertVModelSupport_vue_vue_type_template_id_c447ad1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/alert/code.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/components/alert/code.js ***!
  \*********************************************************/
/*! exports provided: codeAlertDefaut, codeAlertTitle, codeAlertColor, codeIcon, codeAutoDismiss, codeVsupport, codeAnimation, codeExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAlertDefaut", function() { return codeAlertDefaut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAlertTitle", function() { return codeAlertTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAlertColor", function() { return codeAlertColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeIcon", function() { return codeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAutoDismiss", function() { return codeAutoDismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVsupport", function() { return codeVsupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAnimation", function() { return codeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeExample", function() { return codeExample; });
var codeAlertDefaut = "\n<template>\n  <div class=\"demo-spacing-0\">\n    <b-alert\n      variant=\"primary\"\n      show\n    >\n      <div class=\"alert-body\">\n        <span><strong>Good Morning!</strong> Start your day with some alerts.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BAlert,\n  },\n}\n</script>\n";
var codeAlertTitle = "\n<template>\n  <div class=\"demo-spacing-0\">\n    <b-alert\n      variant=\"warning\"\n      show\n    >\n      <h4 class=\"alert-heading\">\n        Lorem ipsum dolor sit amet\n      </h4>\n      <div class=\"alert-body\">\n        Lorem ipsum dolor sit amet\n        <b-link class=\"alert-link\">\n          consectetur\n        </b-link>\n        adipisicing elit. Ducimus, laborum!\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BLink } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BAlert,\n    BLink,\n  },\n}\n</script>\n";
var codeAlertColor = "\n<template>\n  <div class=\"demo-spacing-0\">\n    <!-- primary -->\n    <b-alert\n      variant=\"primary\"\n      show\n    >\n      <h4 class=\"alert-heading\">\n        Primary\n      </h4>\n      <div class=\"alert-body\">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    <!-- secondary -->\n    <b-alert\n      variant=\"secondary\"\n      show\n    >\n      <h4 class=\"alert-heading\">\n        Secondary\n      </h4>\n      <div class=\"alert-body\">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    <!-- success -->\n    <b-alert\n      variant=\"success\"\n      show\n    >\n      <h4 class=\"alert-heading\">\n        Success\n      </h4>\n      <div class=\"alert-body\">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    <!-- danger -->\n    <b-alert\n      variant=\"danger\"\n      show\n    >\n      <h4 class=\"alert-heading\">\n        Danger\n      </h4>\n      <div class=\"alert-body\">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    <!-- warning -->\n    <b-alert\n      variant=\"warning\"\n      show\n    >\n      <h4 class=\"alert-heading\">\n        Warning\n      </h4>\n      <div class=\"alert-body\">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    <!-- info -->\n    <b-alert\n      variant=\"info\"\n      show\n    >\n      <h4 class=\"alert-heading\">\n        Info\n      </h4>\n      <div class=\"alert-body\">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    <!-- dark -->\n    <b-alert\n      variant=\"dark\"\n      show\n    >\n      <h4 class=\"alert-heading\">\n        Dark\n      </h4>\n      <div class=\"alert-body\">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BAlert\n  },\n}\n</script>\n";
var codeIcon = "\n<template>\n  <div class=\"demo-spacing-0\">\n    <b-alert\n      show\n      variant=\"primary\"\n    >\n      <div class=\"alert-body\">\n        <feather-icon\n          class=\"mr-25\"\n          icon=\"StarIcon\"\n        />\n        <span class=\"ml-25\">Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BAlert\n  },\n}\n</script>\n";
var codeAutoDismiss = "\n<template>\n  <div class=\"demo-spacing-0\">\n    <b-alert\n      v-height-fade.appear\n      :show=\"dismissCountDown\"\n      dismissible\n      class=\"mb-0\"\n      variant=\"warning\"\n      @dismissed=\"dismissCountDown = 0\"\n      @dismiss-count-down=\"countDownChanged\"\n    >\n      <div class=\"alert-body\">\n        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>\n      </div>\n    </b-alert>\n\n    <!-- trigger button -->\n    <b-button\n      v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n      variant=\"primary\"\n      class=\"mt-75\"\n      @click=\"showAlert\"\n    >\n      Show alert with count-down timer\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton } from 'bootstrap-vue'\nimport { heightFade } from '@core/directives/animations'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BAlert,\n    BButton\n  },\n  directives: {\n    'height-fade': heightFade,\n    Ripple,\n  },\n  data() {\n    return {\n      dismissSecs: 50,\n      dismissCountDown: 0,\n    }\n  },\n   methods: {\n    countDownChanged(dismissCountDown) {\n      this.dismissCountDown = dismissCountDown\n    },\n    showAlert() {\n      this.dismissCountDown = this.dismissSecs\n    },\n  },\n}\n</script>\n";
var codeVsupport = "\n<template>\n  <div class=\"demo-spacing-0\">\n    <!-- alert -->\n    <b-alert\n      v-model=\"showDismissibleAlert\"\n      v-height-fade.appear\n      variant=\"danger\"\n      dismissible\n      class=\"mb-0\"\n    >\n      <div class=\"alert-body\">\n        Dismissible Alert!\n      </div>\n    </b-alert>\n\n    <!-- button -->\n    <b-button\n      v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n      variant=\"primary\"\n      class=\"mt-1\"\n      @click=\"showDismissibleAlert = !showDismissibleAlert\"\n    >\n      {{ showDismissibleAlert ? 'Hide' : 'Show' }} dismissible alert\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton } from 'bootstrap-vue'\nimport { heightFade } from '@core/directives/animations'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BAlert,\n    BButton\n  },\n  directives: {\n    'height-fade': heightFade,\n    Ripple,\n  },\n  data: () => ({\n    showDismissibleAlert: false,\n  }),\n}\n</script>\n";
var codeAnimation = "\n<template>\n  <div>\n    <!-- dismissible alert -->\n    <b-alert\n      v-height-fade\n      show\n      dismissible\n      fade\n      class=\"mb-0\"\n      variant=\"primary\"\n    >\n      <div class=\"alert-body\">\n        <span>Dismissible Alert!</span>\n      </div>\n    </b-alert>\n\n    <b-card-text class=\"pt-2 mb-0\">\n      <span>If you want to show animation even when alert get rendered. You can use </span>\n      <code>appear</code>\n      <span> modifier</span>\n    </b-card-text>\n\n    <!--  show alert with count-down timer button-->\n    <div class=\"demo-inline-spacing mb-1\">\n      <b-button\n        v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n        variant=\"primary\"\n        @click=\"showAlert\"\n      >\n        Show alert with count-down timer\n      </b-button>\n\n      <!-- show dismissible alert button -->\n      <b-button\n        v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n        variant=\"primary\"\n        @click=\"showDismissibleAlert = true\"\n      >\n        Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})\n      </b-button>\n    </div>\n\n    <!-- dismissible Alert -->\n    <b-alert\n      v-height-fade.appear\n      variant=\"danger\"\n      dismissible\n      fade\n      :show=\"showDismissibleAlert\"\n      class=\"mb-0\"\n      @dismissed=\"showDismissibleAlert = false\"\n    >\n      <div class=\"alert-body\">\n        <span>Dismissible Alert!</span>\n      </div>\n    </b-alert>\n\n    <b-card-text class=\"m-0 py-1\">\n      You can even use this on dismissible alerts.\n    </b-card-text>\n\n    <!-- count down dismissible alert  -->\n    <b-alert\n      v-height-fade.appear\n      :show=\"dismissCountDown\"\n      dismissible\n      fade\n      variant=\"warning\"\n      class=\"mb-0\"\n      @dismiss-count-down=\"countDownChanged\"\n    >\n      <div class=\"alert-body\">\n        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton, BCardText } from 'bootstrap-vue'\nimport { heightFade } from '@core/directives/animations'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BAlert,\n    BCardText,\n    BButton,\n  },\n    directives: {\n    heightFade,\n    Ripple,\n  },\n  data() {\n    return {\n      dismissSecs: 50,\n      dismissCountDown: 0,\n      showDismissibleAlert: false,\n    }\n  },\n  methods: {\n    countDownChanged(dismissCountDown) {\n      this.dismissCountDown = dismissCountDown\n    },\n    showAlert() {\n      this.dismissCountDown = this.dismissSecs\n    },\n  },\n}\n</script>\n";
var codeExample = "\n<template>\n  <div>\n    <b-form-group>\n      <label>Enter only numbers</label>\n      <b-form-input\n        v-model=\"value\"\n        class=\"w-25 w-sm-100\"\n        placeholder=\"0123456789\"\n        @keyup=\"validateInput\"\n      />\n    </b-form-group>\n\n    <!-- alert -->\n    <b-alert\n      v-height-fade.appear\n      variant=\"danger\"\n      :show=\"show\"\n      class=\"mb-0\"\n    >\n      <div class=\"alert-body\">\n        <feather-icon\n          icon=\"InfoIcon\"\n          class=\"mr-50\"\n        />\n        the value is invalid you can only enter numbers\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport {BAlert, BFormGroup, BFormInput} from 'bootstrap-vue'\nimport { heightFade } from '@core/directives/animations'\n\nexport default {\n  components: {\n    BAlert,\n    BFormGroup,\n    BFormInput,\n  },\n  directives: {\n    'height-fade': heightFade,\n  },\n  data() {\n    return {\n      value: '',\n      show: true,\n      codeExample,\n    }\n  },\n  methods: {\n    validateInput() {\n      if (/^\\d+$/.test(this.value)) {\n        this.show = false\n      } else {\n        this.show = true\n      }\n    },\n  },\n}\n</script>\n";

/***/ })

}]);