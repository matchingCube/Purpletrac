(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/Toasts.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/Toasts.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _ToastsBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastsBasic.vue */ "./resources/js/src/views/components/toasts/ToastsBasic.vue");
/* harmony import */ var _ToastsTranslucent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastsTranslucent.vue */ "./resources/js/src/views/components/toasts/ToastsTranslucent.vue");
/* harmony import */ var _ToastsDelay_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToastsDelay.vue */ "./resources/js/src/views/components/toasts/ToastsDelay.vue");
/* harmony import */ var _ToastsTarget_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToastsTarget.vue */ "./resources/js/src/views/components/toasts/ToastsTarget.vue");
/* harmony import */ var _ToastsVariants_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToastsVariants.vue */ "./resources/js/src/views/components/toasts/ToastsVariants.vue");
/* harmony import */ var _ToastsLinks_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ToastsLinks.vue */ "./resources/js/src/views/components/toasts/ToastsLinks.vue");
/* harmony import */ var _ToastsAdvance_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToastsAdvance.vue */ "./resources/js/src/views/components/toasts/ToastsAdvance.vue");
//
//
//
//
//
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
    ToastsBasic: _ToastsBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ToastsTranslucent: _ToastsTranslucent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ToastsDelay: _ToastsDelay_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ToastsTarget: _ToastsTarget_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ToastsVariants: _ToastsVariants_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ToastsLinks: _ToastsLinks_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    ToastsAdvance: _ToastsAdvance_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/toasts/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // eslint-disable-next-line




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    // eslint-disable-next-line
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      count: 0,
      codeAdvance: _code__WEBPACK_IMPORTED_MODULE_3__["codeAdvance"]
    };
  },
  methods: {
    popToast: function popToast() {
      // Use a shorter name for this.$createElement
      var h = this.$createElement; // Increment the toast count

      this.count += 1; // Create the message

      var vNodesMsg = h('p', {
        "class": ['text-center', 'mb-0']
      }, [h('b-spinner', {
        props: {
          type: 'grow',
          small: true
        }
      }), ' Flashy ', h('strong', 'toast'), " message #".concat(this.count, " "), h('b-spinner', {
        props: {
          type: 'grow',
          small: true
        }
      })]); // Create the title

      var vNodesTitle = h('div', {
        "class": ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2']
      }, [h('strong', {
        "class": 'mr-2'
      }, 'The Title'), h('small', {
        "class": 'ml-auto font-italics'
      }, '5 minutes ago')]); // Pass the VNodes as an array for message and title

      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: false,
        variant: 'info'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/toasts/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BToast: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BToast"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_3__["codeBasic"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/toasts/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BToast: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BToast"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeToastDelay: _code__WEBPACK_IMPORTED_MODULE_3__["codeToastDelay"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/toasts/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeLinks: _code__WEBPACK_IMPORTED_MODULE_3__["codeLinks"]
    };
  },
  methods: {
    toast: function toast() {
      this.$bvToast.toast('Toast with action link', {
        href: '#foo',
        title: 'Toast Link'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/toasts/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      counter: 0,
      codeTarget: _code__WEBPACK_IMPORTED_MODULE_3__["codeTarget"]
    };
  },
  methods: {
    toast: function toast(toaster) {
      var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.counter += 1;
      this.$bvToast.toast("Toast ".concat(this.counter, " body content"), {
        title: "Toaster ".concat(toaster),
        toaster: toaster,
        solid: false,
        appendToast: append
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/toasts/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BToast: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BToast"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      visible: true,
      codeTranslucent: _code__WEBPACK_IMPORTED_MODULE_2__["codeTranslucent"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/toasts/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeVariant: _code__WEBPACK_IMPORTED_MODULE_3__["codeVariant"]
    };
  },
  methods: {
    makeToast: function makeToast() {
      var variant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.$bvToast.toast('Toast body content', {
        title: "Variant ".concat(variant || 'default'),
        variant: variant,
        solid: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".translucent-wrap[data-v-08f5fe89] {\n  height: 110px;\n  position: relative;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/Toasts.vue?vue&type=template&id=3b0a5c60&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/Toasts.vue?vue&type=template&id=3b0a5c60& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
          _c("toasts-basic"),
          _vm._v(" "),
          _c("toasts-translucent"),
          _vm._v(" "),
          _c("toasts-variants"),
          _vm._v(" "),
          _c("toasts-delay"),
          _vm._v(" "),
          _c("toasts-target"),
          _vm._v(" "),
          _c("toasts-links"),
          _vm._v(" "),
          _c("toasts-advance"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=template&id=44593732&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=template&id=44593732& ***!
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
      attrs: { title: "Advanced usage" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeAdvance) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("When using the ")]),
        _vm._v(" "),
        _c("code", [_vm._v("this.$bvToast.toast(...)")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            "\n      method for generating toasts, you may want the toast content to be more than just a string message. As mentioned\n      in the Toasts on demand section above, you can pass arrays of\n    "
          ),
        ]),
        _vm._v(" "),
        _c("code", [_vm._v("VNodes")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(" as the message and title for more complex content."),
        ]),
      ]),
      _vm._v(" "),
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
          on: { click: _vm.popToast },
        },
        [_vm._v("\n    Show Toast with custom content\n  ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=template&id=6f5112de&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=template&id=6f5112de& ***!
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
      attrs: { title: "Basic Toast" },
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
        _c("span", [_vm._v("Push notifications to your visitors with a ")]),
        _vm._v(" "),
        _c("code", [_vm._v("<b-toast>")]),
        _vm._v(" "),
        _c("span", [_vm._v(" and ")]),
        _vm._v(" "),
        _c("code", [_vm._v("<b-toaster>,")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            " lightweigt components which are easily customizable for generating alert messages."
          ),
        ]),
      ]),
      _vm._v(" "),
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
          on: {
            click: function ($event) {
              return _vm.$bvToast.show("example-toast")
            },
          },
        },
        [_vm._v("\n    Show toast\n  ")]
      ),
      _vm._v(" "),
      _c(
        "b-toast",
        {
          attrs: { id: "example-toast" },
          scopedSlots: _vm._u([
            {
              key: "toast-title",
              fn: function () {
                return [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-grow-1 align-items-center mr-1",
                    },
                    [
                      _c("b-img", {
                        staticClass: "mr-1",
                        attrs: {
                          src: __webpack_require__(/*! @/assets/images/logo/logo.png */ "./resources/js/src/assets/images/logo/logo.png"),
                          height: "18",
                          width: "25",
                          alt: "Toast image",
                        },
                      }),
                      _vm._v(" "),
                      _c("strong", { staticClass: "mr-auto" }, [
                        _vm._v("Vue Admin"),
                      ]),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("11 mins ago"),
                      ]),
                    ],
                    1
                  ),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _c("span", [
            _vm._v(
              "Hello, world! This is a toast message. Hope you're doing well.. :)"
            ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=template&id=8ebb749a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=template&id=8ebb749a& ***!
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
      attrs: { title: "Delay" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeToastDelay) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("Change to auto hide delay time via the ")]),
        _vm._v(" "),
        _c("code", [_vm._v("auto-hide-delay")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(" prop (value is in milliseconds), which defaults to "),
        ]),
        _vm._v(" "),
        _c("code", [_vm._v("5000")]),
        _vm._v(" "),
        _c("span", [_vm._v(" (minimum value ")]),
        _vm._v(" "),
        _c("code", [_vm._v("1000")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            "). Or, disable the auto-hide feature completely by setting the "
          ),
        ]),
        _vm._v(" "),
        _c("code", [_vm._v("no-auto-hide")]),
        _vm._v(" "),
        _c("span", [_vm._v(" prop to ")]),
        _vm._v(" "),
        _c("code", [_vm._v("true")]),
      ]),
      _vm._v(" "),
      _c(
        "div",
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
              on: {
                click: function ($event) {
                  return _vm.$bvToast.show("example-toast5")
                },
              },
            },
            [_vm._v("\n      Delay\n    ")]
          ),
          _vm._v(" "),
          _c(
            "b-toast",
            {
              attrs: { id: "example-toast5", "auto-hide-delay": "10000" },
              scopedSlots: _vm._u([
                {
                  key: "toast-title",
                  fn: function () {
                    return [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-grow-1 align-items-center mr-25",
                        },
                        [
                          _c("b-img", {
                            staticClass: "rounded mr-2",
                            attrs: {
                              src: __webpack_require__(/*! @/assets/images/logo/logo.png */ "./resources/js/src/assets/images/logo/logo.png"),
                              height: "18",
                              width: "25",
                              alt: "Toast image",
                            },
                          }),
                          _vm._v(" "),
                          _c("strong", { staticClass: "mr-auto" }, [
                            _vm._v("Vue Admin"),
                          ]),
                          _vm._v(" "),
                          _c("small", { staticClass: "text-muted" }, [
                            _vm._v("11 mins ago"),
                          ]),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c("span", [_vm._v("Hello, world! This is a toast message.")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=template&id=74d2d0e9&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=template&id=74d2d0e9& ***!
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
      attrs: { title: "Links" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeLinks) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _c("span", [_vm._v("Optionally convert the toast body to a link (")]),
        _vm._v(" "),
        _c("code", [_vm._v("<a>")]),
        _vm._v(" "),
        _c("span", [_vm._v(") or ")]),
        _vm._v(" "),
        _c("code", [_vm._v("<router-link>")]),
        _vm._v(" "),
        _c("span", [_vm._v(" (or ")]),
        _vm._v(" "),
        _c("code", [_vm._v("<nuxt-link>")]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            ") via the href and to props respectively. When set, the entire toast body becomes a link."
          ),
        ]),
      ]),
      _vm._v(" "),
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
          on: {
            click: function ($event) {
              return _vm.toast()
            },
          },
        },
        [_vm._v("\n    Toast with link\n  ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=template&id=451df8de&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=template&id=451df8de& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Toaster target" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeTarget) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", { staticClass: "mb-0" }, [
        _c("span", [
          _vm._v(
            'BootstrapVue comes with the following "built-in" toaster names (and associated styles defined in SCSS): '
          ),
        ]),
        _vm._v(" "),
        _c("code", [
          _vm._v(
            "b-toaster-top-right, b-toaster-top-left, b-toaster-top-center, b-toaster-top-full, b-toaster-bottom-right,\n      b-toaster-bottom-left, b-toaster-bottom-center, b-toaster-bottom-full\n    "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-inline-spacing" },
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
              on: {
                click: function ($event) {
                  return _vm.toast("b-toaster-top-right")
                },
              },
            },
            [_vm._v("\n      b-toaster-top-right\n    ")]
          ),
          _vm._v(" "),
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
              on: {
                click: function ($event) {
                  return _vm.toast("b-toaster-top-left")
                },
              },
            },
            [_vm._v("\n      b-toaster-top-left\n    ")]
          ),
          _vm._v(" "),
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
              on: {
                click: function ($event) {
                  return _vm.toast("b-toaster-top-center")
                },
              },
            },
            [_vm._v("\n      b-toaster-top-center\n    ")]
          ),
          _vm._v(" "),
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
              on: {
                click: function ($event) {
                  return _vm.toast("b-toaster-top-full")
                },
              },
            },
            [_vm._v("\n      b-toaster-top-full\n    ")]
          ),
          _vm._v(" "),
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
              on: {
                click: function ($event) {
                  return _vm.toast("b-toaster-bottom-right", true)
                },
              },
            },
            [_vm._v("\n      b-toaster-bottom-right\n    ")]
          ),
          _vm._v(" "),
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
              on: {
                click: function ($event) {
                  return _vm.toast("b-toaster-bottom-left", true)
                },
              },
            },
            [_vm._v("\n      b-toaster-bottom-left\n    ")]
          ),
          _vm._v(" "),
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
              on: {
                click: function ($event) {
                  return _vm.toast("b-toaster-bottom-center", true)
                },
              },
            },
            [_vm._v("\n      b-toaster-bottom-center\n    ")]
          ),
          _vm._v(" "),
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
              on: {
                click: function ($event) {
                  return _vm.toast("b-toaster-bottom-full", true)
                },
              },
            },
            [_vm._v("\n      b-toaster-bottom-full\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=template&id=08f5fe89&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=template&id=08f5fe89&scoped=true& ***!
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
      attrs: { "no-body": "", title: "Translucent" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeTranslucent) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-card-body",
        [
          _c("b-card-text", [
            _c("span", [_vm._v("we are using the ")]),
            _vm._v(" "),
            _c("code", [_vm._v("static")]),
            _vm._v(" "),
            _c("span", [
              _vm._v(
                "\n        prop in the above example to render the toast in-place in the document, rather than transporting it to a\n      "
              ),
            ]),
            _vm._v(" "),
            _c("code", [_vm._v("<b-toaster>")]),
            _vm._v(" "),
            _c("span", [_vm._v(" target container")]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "translucent-wrap bg-primary rounded-bottom p-1" },
        [
          _c(
            "b-toast",
            {
              attrs: { id: "example-toast3", static: "", "no-auto-hide": "" },
              scopedSlots: _vm._u([
                {
                  key: "toast-title",
                  fn: function () {
                    return [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-grow-1 align-items-center mr-1",
                        },
                        [
                          _c("b-img", {
                            staticClass: "mr-1",
                            attrs: {
                              src: __webpack_require__(/*! @/assets/images/logo/logo.png */ "./resources/js/src/assets/images/logo/logo.png"),
                              height: "18",
                              width: "25",
                              alt: "Toast image",
                            },
                          }),
                          _vm._v(" "),
                          _c("strong", { staticClass: "mr-auto" }, [
                            _vm._v("Vue Admin"),
                          ]),
                          _vm._v(" "),
                          _c("small", { staticClass: "text-muted" }, [
                            _vm._v("11 mins ago"),
                          ]),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
              model: {
                value: _vm.visible,
                callback: function ($$v) {
                  _vm.visible = $$v
                },
                expression: "visible",
              },
            },
            [
              _vm._v(" "),
              _c("span", [_vm._v("Hello, world! This is a toast message.")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=template&id=1769720e&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=template&id=1769720e& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Variants" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeVariant) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", { staticClass: "mb-0" }, [
        _vm._v(
          "\n    BootstrapVue toasts provide custom CSS to define color variants. Variants follow the standard Bootstrap v4 variant\n    names. If you have custom SCSS defined Bootstrap color theme variants, the toast custom SCSS will automatically\n    create toast variants for you (refer to the Theming reference section).\n  "
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-inline-spacing" },
        [
          _c(
            "b-button",
            {
              attrs: { variant: "gradient-primary" },
              on: {
                click: function ($event) {
                  return _vm.makeToast()
                },
              },
            },
            [_vm._v("\n      Default\n    ")]
          ),
          _vm._v(" "),
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
              on: {
                click: function ($event) {
                  return _vm.makeToast("primary")
                },
              },
            },
            [_vm._v("\n      Primary\n    ")]
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
              attrs: { variant: "outline-secondary" },
              on: {
                click: function ($event) {
                  return _vm.makeToast("secondary")
                },
              },
            },
            [_vm._v("\n      Secondary\n    ")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(255, 159, 67, 0.15)",
                  expression: "'rgba(255, 159, 67, 0.15)'",
                  modifiers: { 400: true },
                },
              ],
              attrs: { variant: "outline-warning" },
              on: {
                click: function ($event) {
                  return _vm.makeToast("warning")
                },
              },
            },
            [_vm._v("\n      Warning\n    ")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(255, 159, 67, 0.15)",
                  expression: "'rgba(255, 159, 67, 0.15)'",
                  modifiers: { 400: true },
                },
              ],
              attrs: { variant: "outline-danger" },
              on: {
                click: function ($event) {
                  return _vm.makeToast("danger")
                },
              },
            },
            [_vm._v("\n      Danger\n    ")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(40, 199, 111, 0.15)",
                  expression: "'rgba(40, 199, 111, 0.15)'",
                  modifiers: { 400: true },
                },
              ],
              attrs: { variant: "outline-success" },
              on: {
                click: function ($event) {
                  return _vm.makeToast("success")
                },
              },
            },
            [_vm._v("\n      Success\n    ")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(0, 207, 232, 0.15)",
                  expression: "'rgba(0, 207, 232, 0.15)'",
                  modifiers: { 400: true },
                },
              ],
              attrs: { variant: "outline-info" },
              on: {
                click: function ($event) {
                  return _vm.makeToast("info")
                },
              },
            },
            [_vm._v("\n      Info\n    ")]
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

/***/ "./resources/js/src/assets/images/logo/logo.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/logo/logo.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/resources/js/src/assets/images/logo/logo.png";

/***/ }),

/***/ "./resources/js/src/views/components/toasts/Toasts.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/Toasts.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toasts_vue_vue_type_template_id_3b0a5c60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toasts.vue?vue&type=template&id=3b0a5c60& */ "./resources/js/src/views/components/toasts/Toasts.vue?vue&type=template&id=3b0a5c60&");
/* harmony import */ var _Toasts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toasts.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/toasts/Toasts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Toasts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Toasts_vue_vue_type_template_id_3b0a5c60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Toasts_vue_vue_type_template_id_3b0a5c60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/toasts/Toasts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/toasts/Toasts.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/Toasts.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toasts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Toasts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/Toasts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toasts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/toasts/Toasts.vue?vue&type=template&id=3b0a5c60&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/Toasts.vue?vue&type=template&id=3b0a5c60& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toasts_vue_vue_type_template_id_3b0a5c60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Toasts.vue?vue&type=template&id=3b0a5c60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/Toasts.vue?vue&type=template&id=3b0a5c60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toasts_vue_vue_type_template_id_3b0a5c60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toasts_vue_vue_type_template_id_3b0a5c60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsAdvance.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsAdvance.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastsAdvance_vue_vue_type_template_id_44593732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastsAdvance.vue?vue&type=template&id=44593732& */ "./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=template&id=44593732&");
/* harmony import */ var _ToastsAdvance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastsAdvance.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ToastsAdvance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastsAdvance_vue_vue_type_template_id_44593732___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastsAdvance_vue_vue_type_template_id_44593732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/toasts/ToastsAdvance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsAdvance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsAdvance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsAdvance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=template&id=44593732&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=template&id=44593732& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsAdvance_vue_vue_type_template_id_44593732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsAdvance.vue?vue&type=template&id=44593732& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsAdvance.vue?vue&type=template&id=44593732&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsAdvance_vue_vue_type_template_id_44593732___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsAdvance_vue_vue_type_template_id_44593732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsBasic.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsBasic.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastsBasic_vue_vue_type_template_id_6f5112de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastsBasic.vue?vue&type=template&id=6f5112de& */ "./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=template&id=6f5112de&");
/* harmony import */ var _ToastsBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastsBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ToastsBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastsBasic_vue_vue_type_template_id_6f5112de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastsBasic_vue_vue_type_template_id_6f5112de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/toasts/ToastsBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=template&id=6f5112de&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=template&id=6f5112de& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsBasic_vue_vue_type_template_id_6f5112de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsBasic.vue?vue&type=template&id=6f5112de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsBasic.vue?vue&type=template&id=6f5112de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsBasic_vue_vue_type_template_id_6f5112de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsBasic_vue_vue_type_template_id_6f5112de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsDelay.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsDelay.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastsDelay_vue_vue_type_template_id_8ebb749a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastsDelay.vue?vue&type=template&id=8ebb749a& */ "./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=template&id=8ebb749a&");
/* harmony import */ var _ToastsDelay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastsDelay.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ToastsDelay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastsDelay_vue_vue_type_template_id_8ebb749a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastsDelay_vue_vue_type_template_id_8ebb749a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/toasts/ToastsDelay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsDelay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsDelay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsDelay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=template&id=8ebb749a&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=template&id=8ebb749a& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsDelay_vue_vue_type_template_id_8ebb749a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsDelay.vue?vue&type=template&id=8ebb749a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsDelay.vue?vue&type=template&id=8ebb749a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsDelay_vue_vue_type_template_id_8ebb749a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsDelay_vue_vue_type_template_id_8ebb749a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsLinks.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsLinks.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastsLinks_vue_vue_type_template_id_74d2d0e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastsLinks.vue?vue&type=template&id=74d2d0e9& */ "./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=template&id=74d2d0e9&");
/* harmony import */ var _ToastsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastsLinks.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ToastsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastsLinks_vue_vue_type_template_id_74d2d0e9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastsLinks_vue_vue_type_template_id_74d2d0e9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/toasts/ToastsLinks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsLinks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=template&id=74d2d0e9&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=template&id=74d2d0e9& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsLinks_vue_vue_type_template_id_74d2d0e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsLinks.vue?vue&type=template&id=74d2d0e9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsLinks.vue?vue&type=template&id=74d2d0e9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsLinks_vue_vue_type_template_id_74d2d0e9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsLinks_vue_vue_type_template_id_74d2d0e9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsTarget.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsTarget.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastsTarget_vue_vue_type_template_id_451df8de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastsTarget.vue?vue&type=template&id=451df8de& */ "./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=template&id=451df8de&");
/* harmony import */ var _ToastsTarget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastsTarget.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ToastsTarget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastsTarget_vue_vue_type_template_id_451df8de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastsTarget_vue_vue_type_template_id_451df8de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/toasts/ToastsTarget.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTarget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsTarget.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTarget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=template&id=451df8de&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=template&id=451df8de& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTarget_vue_vue_type_template_id_451df8de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsTarget.vue?vue&type=template&id=451df8de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTarget.vue?vue&type=template&id=451df8de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTarget_vue_vue_type_template_id_451df8de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTarget_vue_vue_type_template_id_451df8de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsTranslucent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsTranslucent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastsTranslucent_vue_vue_type_template_id_08f5fe89_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastsTranslucent.vue?vue&type=template&id=08f5fe89&scoped=true& */ "./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=template&id=08f5fe89&scoped=true&");
/* harmony import */ var _ToastsTranslucent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastsTranslucent.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ToastsTranslucent_vue_vue_type_style_index_0_id_08f5fe89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true& */ "./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ToastsTranslucent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastsTranslucent_vue_vue_type_template_id_08f5fe89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastsTranslucent_vue_vue_type_template_id_08f5fe89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08f5fe89",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/toasts/ToastsTranslucent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTranslucent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsTranslucent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTranslucent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTranslucent_vue_vue_type_style_index_0_id_08f5fe89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=style&index=0&id=08f5fe89&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTranslucent_vue_vue_type_style_index_0_id_08f5fe89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTranslucent_vue_vue_type_style_index_0_id_08f5fe89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTranslucent_vue_vue_type_style_index_0_id_08f5fe89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTranslucent_vue_vue_type_style_index_0_id_08f5fe89_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=template&id=08f5fe89&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=template&id=08f5fe89&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTranslucent_vue_vue_type_template_id_08f5fe89_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsTranslucent.vue?vue&type=template&id=08f5fe89&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsTranslucent.vue?vue&type=template&id=08f5fe89&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTranslucent_vue_vue_type_template_id_08f5fe89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsTranslucent_vue_vue_type_template_id_08f5fe89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsVariants.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsVariants.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastsVariants_vue_vue_type_template_id_1769720e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastsVariants.vue?vue&type=template&id=1769720e& */ "./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=template&id=1769720e&");
/* harmony import */ var _ToastsVariants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastsVariants.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ToastsVariants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastsVariants_vue_vue_type_template_id_1769720e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastsVariants_vue_vue_type_template_id_1769720e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/toasts/ToastsVariants.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsVariants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsVariants.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsVariants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=template&id=1769720e&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=template&id=1769720e& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsVariants_vue_vue_type_template_id_1769720e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastsVariants.vue?vue&type=template&id=1769720e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/toasts/ToastsVariants.vue?vue&type=template&id=1769720e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsVariants_vue_vue_type_template_id_1769720e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastsVariants_vue_vue_type_template_id_1769720e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/toasts/code.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/components/toasts/code.js ***!
  \**********************************************************/
/*! exports provided: codeAdvance, codeToastDelay, codeBasic, codeLinks, codeTarget, codeTranslucent, codeVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAdvance", function() { return codeAdvance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeToastDelay", function() { return codeToastDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeLinks", function() { return codeLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeTarget", function() { return codeTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeTranslucent", function() { return codeTranslucent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVariant", function() { return codeVariant; });
var codeAdvance = "\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"popToast\"\n    >\n      Show Toast with custom content\n    </b-button>\n  </div>\n</template>\n\n<script>\n// eslint-disable-next-line\nimport { BButton, BSpinner } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    // eslint-disable-next-line\n    BSpinner,\n  },\n  directives: {\n    Ripple,\n  },\n  data: () => ({\n    count: 0,\n  }),\n  methods: {\n    popToast() {\n      // Use a shorter name for this.$createElement\n      const h = this.$createElement\n      // Increment the toast count\n      this.count += 1\n      // Create the message\n      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [\n        h('b-spinner', { props: { type: 'grow', small: true } }),\n        ' Flashy ',\n        h('strong', 'toast'),\n        `message #${this.count}`,\n        h('b-spinner', { props: { type: 'grow', small: true } }),\n      ])\n      // Create the title\n      const vNodesTitle = h('div', { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] }, [\n        h('strong', { class: 'mr-2' }, 'The Title'),\n        h('small', { class: 'ml-auto font-italics' }, '5 minutes ago'),\n      ])\n      // Pass the VNodes as an array for message and title\n      this.$bvToast.toast([vNodesMsg], {\n        title: [vNodesTitle],\n        solid: true,\n        variant: 'info',\n      })\n    },\n  },\n}\n</script>\n";
var codeToastDelay = "\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"$bvToast.show('example-toast5')\"\n    >\n      Delay\n    </b-button>\n\n    <!-- toast -->\n    <b-toast\n      id=\"example-toast5\"\n      auto-hide-delay=\"10000\"\n    >\n      <template #toast-title>\n        <div class=\"d-flex flex-grow-1 align-items-center mr-25\">\n          <b-img\n            :src=\"require('@/assets/images/logo/logo.png')\"\n            class=\"rounded mr-2\"\n            height=\"18\"\n            width=\"25\"\n            alt=\"Toast image\"\n          />\n          <strong class=\"mr-auto\">Vue Admin</strong>\n          <small class=\"text-muted\">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message.</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport { BToast, BButton, BImg } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BToast,\n    BButton,\n    BImg,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";
var codeBasic = "\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"$bvToast.show('example-toast')\"\n    >\n      Show toast\n    </b-button>\n\n    <!-- toast -->\n    <b-toast id=\"example-toast\">\n      <template #toast-title>\n        <div class=\"d-flex flex-grow-1 align-items-center mr-1\">\n          <b-img\n            :src=\"require('@/assets/images/logo/logo.png')\"\n            class=\"mr-1\"\n            height=\"18\"\n            width=\"25\"\n            alt=\"Toast image\"\n          />\n          <strong class=\"mr-auto\">Vue Admin</strong>\n          <small class=\"text-muted\">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message. Hope you're doing well.. :)</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport { BButton, BToast, BImg } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BToast,\n    BImg,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";
var codeLinks = "\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast()\"\n    >\n      Toast with link\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    toast() {\n      this.$bvToast.toast('Toast with action link', {\n        href: '#foo',\n        title: 'Example',\n      })\n    },\n  },\n}\n</script>\n";
var codeTarget = "\n<template>\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast('b-toaster-top-right')\"\n    >\n      b-toaster-top-right\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast('b-toaster-top-left')\"\n    >\n      b-toaster-top-left\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast('b-toaster-top-center')\"\n    >\n      b-toaster-top-center\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast('b-toaster-top-full')\"\n    >\n      b-toaster-top-full\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast('b-toaster-bottom-right', true)\"\n    >\n      b-toaster-bottom-right\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast('b-toaster-bottom-left', true)\"\n    >\n      b-toaster-bottom-left\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast('b-toaster-bottom-center', true)\"\n    >\n      b-toaster-bottom-center\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast('b-toaster-bottom-full', true)\"\n    >\n      b-toaster-bottom-full\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  data: () => ({\n    counter: 0,\n  }),\n  directives: {\n    Ripple,\n  },\n  methods: {\n    toast(toaster, append = false) {\n      this.counter += 1\n      this.$bvToast.toast(`Toast ${this.counter} body content` {\n        title: `Toaster ${toaster}`,\n        toaster,\n        solid: true,\n        appendToast: append,\n      })\n    },\n  },\n}\n</script>\n";
var codeTranslucent = "\n<template>\n  <div class=\"translucent-wrap bg-primary rounded-bottom p-1\">\n    <b-toast\n      id=\"example-toast3\"\n      v-model=\"visible\"\n      static\n      no-auto-hide\n    >\n      <template #toast-title>\n        <div class=\"d-flex flex-grow-1 align-items-center mr-1\">\n          <b-img\n            :src=\"require('@/assets/images/logo/logo.png')\"\n            class=\"mr-1\"\n            height=\"18\"\n            width=\"25\"\n            alt=\"Toast image\"\n          />\n          <strong class=\"mr-auto\">Vue Admin</strong>\n          <small class=\"text-muted\">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message.</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport {\n  BToast, BImg,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BToast,\n    BImg,\n  },\n   data() {\n    return {\n      visible: true,\n    }\n  },\n}\n</script>\n\n<style lang=\"scss\" scoped>\n.translucent-wrap {\n  height: 110px;\n  position: relative;\n}\n</style>\n";
var codeVariant = "\n<template>\n  <div class=\"demo-inline-spacing\">\n\n    <!-- default -->\n    <b-button\n      variant=\"gradient-primary\"\n      @click=\"makeToast()\"\n    >\n      Default\n    </b-button>\n\n    <!-- primary -->\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"makeToast('primary')\"\n    >\n      Primary\n    </b-button>\n\n    <!-- secondary -->\n    <b-button\n      v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n      variant=\"outline-secondary\"\n      @click=\"makeToast('secondary')\"\n    >\n      Secondary\n    </b-button>\n\n    <!-- warning -->\n    <b-button\n      v-ripple.400=\"'rgba(255, 159, 67, 0.15)'\"\n      variant=\"outline-warning\"\n      @click=\"makeToast('warning')\"\n    >\n      Warning\n    </b-button>\n\n    <!-- danger -->\n    <b-button\n      v-ripple.400=\"'rgba(255, 159, 67, 0.15)'\"\n      variant=\"outline-danger\"\n      @click=\"makeToast('danger')\"\n    >\n      Danger\n    </b-button>\n\n    <!-- success -->\n    <b-button\n      v-ripple.400=\"'rgba(40, 199, 111, 0.15)'\"\n      variant=\"outline-success\"\n      @click=\"makeToast('success')\"\n    >\n      Success\n    </b-button>\n\n    <!-- info -->\n    <b-button\n      v-ripple.400=\"'rgba(0, 207, 232, 0.15)'\"\n      variant=\"outline-info\"\n      @click=\"makeToast('info')\"\n    >\n      Info\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    makeToast(variant = null) {\n      this.$bvToast.toast('Toast body content', {\n        title: `Variant ${variant || 'default'}`,\n        variant,\n        solid: true,\n      })\n    },\n  },\n}\n</script>\n";

/***/ })

}]);