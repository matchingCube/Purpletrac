(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _SweetAlertBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SweetAlertBasic.vue */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue");
/* harmony import */ var _SweetAlertPosition_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SweetAlertPosition.vue */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue");
/* harmony import */ var _SweetAlertAnimation_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SweetAlertAnimation.vue */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue");
/* harmony import */ var _SweetAlertTypes_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SweetAlertTypes.vue */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue");
/* harmony import */ var _SweetAlertOption_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SweetAlertOption.vue */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue");
/* harmony import */ var _SweetAlertConfirmOption_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SweetAlertConfirmOption.vue */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue");
//
//
//
//
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
    SweetAlertBasic: _SweetAlertBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SweetAlertPosition: _SweetAlertPosition_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SweetAlertAnimation: _SweetAlertAnimation_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SweetAlertTypes: _SweetAlertTypes_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    SweetAlertOption: _SweetAlertOption_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SweetAlertConfirmOption: _SweetAlertConfirmOption_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/extensions/sweet-alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeAnimation: _code__WEBPACK_IMPORTED_MODULE_4__["codeAnimation"]
    };
  },
  methods: {
    // bounce in method
    bounceIn: function bounceIn() {
      this.$swal({
        title: 'Bounce In Animation',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        showClass: {
          popup: 'animate__animated animate__bounceIn'
        },
        buttonsStyling: false
      });
    },
    // fade in
    fadeIn: function fadeIn() {
      this.$swal({
        title: 'Fade In Animation',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        showClass: {
          popup: 'animate__animated animate__fadeIn'
        },
        buttonsStyling: false
      });
    },
    // flip in
    flipIn: function flipIn() {
      this.$swal({
        title: 'Flip In Animation',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        showClass: {
          popup: 'animate__animated animate__flipInX'
        },
        buttonsStyling: false
      });
    },
    // tada
    tada: function tada() {
      this.$swal({
        title: 'Tada Animation',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        showClass: {
          popup: 'animate__animated animate__tada'
        },
        buttonsStyling: false
      });
    },
    // shake
    shake: function shake() {
      this.$swal({
        title: 'Shake Animation',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        showClass: {
          popup: 'animate__animated animate__shakeX'
        },
        buttonsStyling: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/extensions/sweet-alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_3__["codeBasic"]
    };
  },
  methods: {
    // basic
    showAlert: function showAlert() {
      this.$swal({
        title: 'Any fool can use a computer',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // whith title
    withTitle: function withTitle() {
      this.$swal({
        title: 'The Internet?,',
        text: 'That thing is still around?',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // with footer
    withFooter: function withFooter() {
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="javascript:void(0)">Why do I have this issue?</a>',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // with html
    withHtml: function withHtml() {
      this.$swal({
        title: '<span class="font-weight-bolder">HTML <u>example</u></span>',
        icon: 'info',
        html: 'You can use <span class="font-weight-bolder">bold text</span>, ' + '<a href="https://pixinvent.com/" target="_blank">links</a> ' + 'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonAriaLabel: 'Thumbs down',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1'
        },
        buttonsStyling: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/extensions/sweet-alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeConfirm: _code__WEBPACK_IMPORTED_MODULE_3__["codeConfirm"]
    };
  },
  methods: {
    // confirm texrt
    confirmText: function confirmText() {
      var _this = this;

      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1'
        },
        buttonsStyling: false
      }).then(function (result) {
        if (result.value) {
          _this.$swal({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          });
        }
      });
    },
    // comfirm button color
    confirmButtonColor: function confirmButtonColor() {
      var _this2 = this;

      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1'
        },
        buttonsStyling: false
      }).then(function (result) {
        if (result.value) {
          _this2.$swal({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          });
        } else if (result.dismiss === 'cancel') {
          _this2.$swal({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/extensions/sweet-alert/code.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      timerInterval: null,
      codeOptions: _code__WEBPACK_IMPORTED_MODULE_6__["codeOptions"]
    };
  },
  methods: {
    // custom image
    customImage: function customImage() {
      this.$swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        // eslint-disable-next-line global-require
        imageUrl: __webpack_require__(/*! @/assets/images/slider/04.jpg */ "./resources/js/src/assets/images/slider/04.jpg"),
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // auto close
    autoClose: function autoClose() {
      this.$swal({
        title: 'Auto close alert!',
        html: 'I will close in <strong>3</strong> seconds.',
        timer: 3000,
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // click out side
    clickOutside: function clickOutside() {
      this.$swal({
        title: 'Click outside to close!',
        text: 'This is a cool message!',
        allowOutsideClick: true,
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // ajax
    ajax: function ajax() {
      var _this2 = this;

      this.$swal({
        title: 'Search for a user',
        input: 'text',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1'
        },
        buttonsStyling: false,
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: function preConfirm(login) {
          var _this = this;

          if (!login) return null;
          return fetch("//api.github.com/users/".concat(login)).then(function (response) {
            if (!response.ok) {
              throw new Error(response.statusText);
            }

            return response.json();
          })["catch"](function (error) {
            _this.$swal.showValidationMessage("Request failed:  ".concat(error));
          });
        }
      }).then(function (result) {
        if (result.value) {
          _this2.$swal({
            title: "".concat(result.value.login, "'s avatar"),
            imageUrl: result.value.avatar_url,
            customClass: {
              confirmButton: 'btn btn-primary'
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/extensions/sweet-alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codePosition: _code__WEBPACK_IMPORTED_MODULE_3__["codePosition"]
    };
  },
  methods: {
    // top start
    topStart: function topStart() {
      this.$swal({
        position: 'top-start',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // top end
    topEnd: function topEnd() {
      this.$swal({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // bottom start
    bottomStart: function bottomStart() {
      this.$swal({
        position: 'bottom-start',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // bottom end
    bottomEnd: function bottomEnd() {
      this.$swal({
        position: 'bottom-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/extensions/sweet-alert/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      codeTypes: _code__WEBPACK_IMPORTED_MODULE_3__["codeTypes"]
    };
  },
  methods: {
    // success
    success: function success() {
      this.$swal({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // error
    error: function error() {
      this.$swal({
        title: 'Error!',
        text: ' You clicked the button!',
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // warning
    warning: function warning() {
      this.$swal({
        title: 'Warning!',
        text: ' You clicked the button!',
        icon: 'warning',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    },
    // info
    info: function info() {
      this.$swal({
        title: 'Info!',
        text: 'You clicked the button!',
        icon: 'info',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../../node_modules/css-loader!sweetalert2/dist/sweetalert2.min.css */ "./node_modules/css-loader/index.js!./node_modules/sweetalert2/dist/sweetalert2.min.css"), "");

// module
exports.push([module.i, "[dir] .swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n}\n[dir] .swal2-container .swal2-popup .swal2-close:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.5rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n[dir] .swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 1rem;\n  color: #6e6b7b;\n  line-height: 1.45;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input {\n  padding: 0.438rem 1rem;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #4d148c !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #4d148c;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line, [dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #721ecf;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #4d148c;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n}\n[dir] .swal2-container .swal2-popup pre {\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  color: #6e6b7b;\n}\n[dir] .swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n[dir] .dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content,\n.dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre,\n.dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlert.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=template&id=57d85f7d&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=template&id=57d85f7d& ***!
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
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12" } },
        [
          _c("sweet-alert-basic"),
          _vm._v(" "),
          _c("sweet-alert-position"),
          _vm._v(" "),
          _c("sweet-alert-animation"),
          _vm._v(" "),
          _c("sweet-alert-types"),
          _vm._v(" "),
          _c("sweet-alert-option"),
          _vm._v(" "),
          _c("sweet-alert-confirm-option"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=template&id=57b1a0b7&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=template&id=57b1a0b7& ***!
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
      attrs: { title: "Animations" },
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
      _c("b-card-text", { staticClass: "mb-0" }, [
        _c("span", [_vm._v("Use ")]),
        _vm._v(" "),
        _c("code", [_vm._v("popup")]),
        _vm._v(" "),
        _c("span", [_vm._v(" inside ")]),
        _vm._v(" "),
        _c("code", [_vm._v("showClass")]),
        _vm._v(" "),
        _c("span", [_vm._v(" parameter to add animation to your alert.")]),
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
              on: { click: _vm.bounceIn },
            },
            [_vm._v("\n      Bounce In\n    ")]
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
              on: { click: _vm.fadeIn },
            },
            [_vm._v("\n      Fade In\n    ")]
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
              on: { click: _vm.flipIn },
            },
            [_vm._v("\n      Flip In\n    ")]
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
              on: { click: _vm.tada },
            },
            [_vm._v("\n      Tada\n    ")]
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
              on: { click: _vm.shake },
            },
            [_vm._v("\n      Shake\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=template&id=734979e1&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=template&id=734979e1& ***!
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
      attrs: { title: "Basic Examples" },
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
      _c("b-card-text", { staticClass: "mb-0" }, [
        _vm._v(
          "\n    SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below!\n  "
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
              on: { click: _vm.showAlert },
            },
            [_vm._v("\n      Basic\n    ")]
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
              on: { click: _vm.withTitle },
            },
            [_vm._v("\n      With Title\n    ")]
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
              on: { click: _vm.withFooter },
            },
            [_vm._v("\n      With Footer\n    ")]
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
              on: { click: _vm.withHtml },
            },
            [_vm._v("\n      HTML\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=template&id=0ceeba88&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=template&id=0ceeba88& ***!
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
      attrs: { title: "Confirm Options" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeConfirm) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("div", { staticClass: "demo-inline-spacing" }, [
        _c(
          "div",
          [
            _c("h5", [_vm._v("Confirm Button Text")]),
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
                on: { click: _vm.confirmText },
              },
              [_vm._v("\n        Confirm Text\n      ")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("h5", [_vm._v("Confirm Button Text")]),
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
                on: { click: _vm.confirmButtonColor },
              },
              [_vm._v("\n        Confirm Button Color\n      ")]
            ),
          ],
          1
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=template&id=e538fc5c&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=template&id=e538fc5c& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Options" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeOptions) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
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
              on: { click: _vm.customImage },
            },
            [_vm._v("\n      Custom Image\n    ")]
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
              on: { click: _vm.autoClose },
            },
            [_vm._v("\n      Auto Close\n    ")]
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
              on: { click: _vm.clickOutside },
            },
            [_vm._v("\n      Click Outside\n    ")]
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
              on: { click: _vm.ajax },
            },
            [_vm._v("\n      Ajax\n    ")]
          ),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=template&id=a3624974&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=template&id=a3624974& ***!
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
      attrs: { title: "Position" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codePosition) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", { staticClass: "mb-0" }, [
        _vm._v("\n    You can specify position of your alert with "),
        _c("code", [
          _vm._v(
            "{position : 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' }"
          ),
        ]),
        _vm._v(" in js.\n  "),
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
              on: { click: _vm.topStart },
            },
            [_vm._v("\n      Top Start\n    ")]
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
              on: { click: _vm.topEnd },
            },
            [_vm._v("\n      Top End\n    ")]
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
              on: { click: _vm.bottomStart },
            },
            [_vm._v("\n      Bottom Starts\n    ")]
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
              on: { click: _vm.bottomEnd },
            },
            [_vm._v("\n      Bottom End\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=template&id=0ede3ea8&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=template&id=0ede3ea8& ***!
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
      attrs: { title: "Types" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeTypes) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [
        _vm._v(
          '\n    The type of the modal. SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "success", "error", "warning" and "info". You can also set it as "input" to get a prompt modal. It can either be put in the object under the key "icon" or passed as the third parameter of the function.\n  '
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
              on: { click: _vm.success },
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
                  value: "rgba(234, 84, 85, 0.15)",
                  expression: "'rgba(234, 84, 85, 0.15)'",
                  modifiers: { 400: true },
                },
              ],
              attrs: { variant: "outline-danger" },
              on: { click: _vm.error },
            },
            [_vm._v("\n      Error\n    ")]
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
              on: { click: _vm.warning },
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
                  value: "rgba(0, 207, 232, 0.15)",
                  expression: "'rgba(0, 207, 232, 0.15)'",
                  modifiers: { 400: true },
                },
              ],
              attrs: { variant: "outline-info" },
              on: { click: _vm.info },
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

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SweetAlert_vue_vue_type_template_id_57d85f7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlert.vue?vue&type=template&id=57d85f7d& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=template&id=57d85f7d&");
/* harmony import */ var _SweetAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SweetAlert.vue?vue&type=script&lang=js& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SweetAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SweetAlert.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SweetAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SweetAlert_vue_vue_type_template_id_57d85f7d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SweetAlert_vue_vue_type_template_id_57d85f7d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/extensions/sweet-alert/SweetAlert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlert.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=template&id=57d85f7d&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=template&id=57d85f7d& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlert_vue_vue_type_template_id_57d85f7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlert.vue?vue&type=template&id=57d85f7d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlert.vue?vue&type=template&id=57d85f7d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlert_vue_vue_type_template_id_57d85f7d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlert_vue_vue_type_template_id_57d85f7d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SweetAlertAnimation_vue_vue_type_template_id_57b1a0b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlertAnimation.vue?vue&type=template&id=57b1a0b7& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=template&id=57b1a0b7&");
/* harmony import */ var _SweetAlertAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SweetAlertAnimation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SweetAlertAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SweetAlertAnimation_vue_vue_type_template_id_57b1a0b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SweetAlertAnimation_vue_vue_type_template_id_57b1a0b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertAnimation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=template&id=57b1a0b7&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=template&id=57b1a0b7& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertAnimation_vue_vue_type_template_id_57b1a0b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertAnimation.vue?vue&type=template&id=57b1a0b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertAnimation.vue?vue&type=template&id=57b1a0b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertAnimation_vue_vue_type_template_id_57b1a0b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertAnimation_vue_vue_type_template_id_57b1a0b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SweetAlertBasic_vue_vue_type_template_id_734979e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlertBasic.vue?vue&type=template&id=734979e1& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=template&id=734979e1&");
/* harmony import */ var _SweetAlertBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SweetAlertBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SweetAlertBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SweetAlertBasic_vue_vue_type_template_id_734979e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SweetAlertBasic_vue_vue_type_template_id_734979e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=template&id=734979e1&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=template&id=734979e1& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertBasic_vue_vue_type_template_id_734979e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertBasic.vue?vue&type=template&id=734979e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertBasic.vue?vue&type=template&id=734979e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertBasic_vue_vue_type_template_id_734979e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertBasic_vue_vue_type_template_id_734979e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SweetAlertConfirmOption_vue_vue_type_template_id_0ceeba88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlertConfirmOption.vue?vue&type=template&id=0ceeba88& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=template&id=0ceeba88&");
/* harmony import */ var _SweetAlertConfirmOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SweetAlertConfirmOption.vue?vue&type=script&lang=js& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SweetAlertConfirmOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SweetAlertConfirmOption_vue_vue_type_template_id_0ceeba88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SweetAlertConfirmOption_vue_vue_type_template_id_0ceeba88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertConfirmOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertConfirmOption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertConfirmOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=template&id=0ceeba88&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=template&id=0ceeba88& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertConfirmOption_vue_vue_type_template_id_0ceeba88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertConfirmOption.vue?vue&type=template&id=0ceeba88& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertConfirmOption.vue?vue&type=template&id=0ceeba88&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertConfirmOption_vue_vue_type_template_id_0ceeba88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertConfirmOption_vue_vue_type_template_id_0ceeba88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SweetAlertOption_vue_vue_type_template_id_e538fc5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlertOption.vue?vue&type=template&id=e538fc5c& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=template&id=e538fc5c&");
/* harmony import */ var _SweetAlertOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SweetAlertOption.vue?vue&type=script&lang=js& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SweetAlertOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SweetAlertOption_vue_vue_type_template_id_e538fc5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SweetAlertOption_vue_vue_type_template_id_e538fc5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertOption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=template&id=e538fc5c&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=template&id=e538fc5c& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertOption_vue_vue_type_template_id_e538fc5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertOption.vue?vue&type=template&id=e538fc5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertOption.vue?vue&type=template&id=e538fc5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertOption_vue_vue_type_template_id_e538fc5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertOption_vue_vue_type_template_id_e538fc5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SweetAlertPosition_vue_vue_type_template_id_a3624974___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlertPosition.vue?vue&type=template&id=a3624974& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=template&id=a3624974&");
/* harmony import */ var _SweetAlertPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SweetAlertPosition.vue?vue&type=script&lang=js& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SweetAlertPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SweetAlertPosition_vue_vue_type_template_id_a3624974___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SweetAlertPosition_vue_vue_type_template_id_a3624974___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertPosition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=template&id=a3624974&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=template&id=a3624974& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertPosition_vue_vue_type_template_id_a3624974___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertPosition.vue?vue&type=template&id=a3624974& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertPosition.vue?vue&type=template&id=a3624974&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertPosition_vue_vue_type_template_id_a3624974___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertPosition_vue_vue_type_template_id_a3624974___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SweetAlertTypes_vue_vue_type_template_id_0ede3ea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlertTypes.vue?vue&type=template&id=0ede3ea8& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=template&id=0ede3ea8&");
/* harmony import */ var _SweetAlertTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SweetAlertTypes.vue?vue&type=script&lang=js& */ "./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SweetAlertTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SweetAlertTypes_vue_vue_type_template_id_0ede3ea8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SweetAlertTypes_vue_vue_type_template_id_0ede3ea8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertTypes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=template&id=0ede3ea8&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=template&id=0ede3ea8& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertTypes_vue_vue_type_template_id_0ede3ea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SweetAlertTypes.vue?vue&type=template&id=0ede3ea8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/extensions/sweet-alert/SweetAlertTypes.vue?vue&type=template&id=0ede3ea8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertTypes_vue_vue_type_template_id_0ede3ea8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SweetAlertTypes_vue_vue_type_template_id_0ede3ea8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/extensions/sweet-alert/code.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/extensions/sweet-alert/code.js ***!
  \***************************************************************/
/*! exports provided: codeBasic, codePosition, codeAnimation, codeTypes, codeOptions, codeConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codePosition", function() { return codePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAnimation", function() { return codeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeTypes", function() { return codeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeOptions", function() { return codeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeConfirm", function() { return codeConfirm; });
var codeBasic = "\n<template>\n  <!-- trigger buttons -->\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showAlert\"\n    >\n      Basic\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"withTitle\"\n    >\n      With Title\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"withFooter\"\n    >\n      With Footer\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"withHtml\"\n    >\n      HTML\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {  BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n\n    // basic\n    showAlert() {\n      this.$swal({\n        title: 'Any fool can use a computer',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // whith title\n    withTitle() {\n      this.$swal({\n        title: 'The Internet?,',\n        text: 'That thing is still around?',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // with footer\n    withFooter() {\n      this.$swal({\n        icon: 'error',\n        title: 'Oops...',\n        text: 'Something went wrong!',\n        footer: '<a href=\"javascript:void(0)\">Why do I have this issue?</a>',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // with html\n    withHtml() {\n      this.$swal({\n        title: '<span class=\"font-weight-bolder\">HTML <u>example</u></span>',\n        icon: 'info',\n        html:\n          'You can use <span class=\"font-weight-bolder\">bold text</span>, '\n          + '<a href=\"https://pixinvent.com/\" target=\"_blank\">links</a> '\n          + 'and other HTML tags',\n        showCloseButton: true,\n        showCancelButton: true,\n        focusConfirm: false,\n        confirmButtonText: 'Great!',\n        confirmButtonAriaLabel: 'Thumbs up, great!',\n        cancelButtonAriaLabel: 'Thumbs down',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n          cancelButton: 'btn btn-outline-danger ml-1',\n        },\n        buttonsStyling: false,\n      })\n    },\n  },\n}\n</script>\n";
var codePosition = "\n<template>\n  <!-- trigger button -->\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"topStart\"\n    >\n      Top Start\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"topEnd\"\n    >\n      Top End\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"bottomStart\"\n    >\n      Bottom Starts\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"bottomEnd\"\n    >\n      Bottom End\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n\n    // top start\n    topStart() {\n      this.$swal({\n        position: 'top-start',\n        icon: 'success',\n        title: 'Your work has been saved',\n        showConfirmButton: false,\n        timer: 1500,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n    // top end\n    topEnd() {\n      this.$swal({\n        position: 'top-end',\n        icon: 'success',\n        title: 'Your work has been saved',\n        showConfirmButton: false,\n        timer: 1500,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n    // bottom start\n    bottomStart() {\n      this.$swal({\n        position: 'bottom-start',\n        icon: 'success',\n        title: 'Your work has been saved',\n        showConfirmButton: false,\n        timer: 1500,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // bottom end\n    bottomEnd() {\n      this.$swal({\n        position: 'bottom-end',\n        icon: 'success',\n        title: 'Your work has been saved',\n        showConfirmButton: false,\n        timer: 1500,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n  },\n}\n</script>\n";
var codeAnimation = "\n<template>\n  <!-- trigger button -->\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"bounceIn\"\n    >\n      Bounce In\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"fadeIn\"\n    >\n      Fade In\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"flipIn\"\n    >\n      Flip In\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"tada\"\n    >\n      Tada\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"shake\"\n    >\n      Shake\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {  BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport 'animate.css'\n\nexport default {\n  components: {\n    BCardCode,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n\n    // bounce in method\n    bounceIn() {\n      this.$swal({\n        title: 'Bounce In Animation',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        showClass: {\n          popup: 'animate__animated animate__bounceIn',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // fade in\n    fadeIn() {\n      this.$swal({\n        title: 'Fade In Animation',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        showClass: {\n          popup: 'animate__animated animate__fadeIn',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // flip in\n    flipIn() {\n      this.$swal({\n        title: 'Flip In Animation',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        showClass: {\n          popup: 'animate__animated animate__flipInX',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // tada\n    tada() {\n      this.$swal({\n        title: 'Tada Animation',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        showClass: {\n          popup: 'animate__animated animate__tada',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // shake\n    shake() {\n      this.$swal({\n        title: 'Shake Animation',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        showClass: {\n          popup: 'animate__animated animate__shakeX',\n        },\n        buttonsStyling: false,\n      })\n    },\n  },\n}\n</script>\n";
var codeTypes = "\n<template>\n  <!-- trigger button -->\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(40, 199, 111, 0.15)'\"\n      variant=\"outline-success\"\n      @click=\"success\"\n    >\n      Success\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(234, 84, 85, 0.15)'\"\n      variant=\"outline-danger\"\n      @click=\"error\"\n    >\n      Error\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(255, 159, 67, 0.15)'\"\n      variant=\"outline-warning\"\n      @click=\"warning\"\n    >\n      Warning\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(0, 207, 232, 0.15)'\"\n      variant=\"outline-info\"\n      @click=\"info\"\n    >\n      Info\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {  BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BCardCode,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n\n    // success\n    success() {\n      this.$swal({\n        title: 'Good job!',\n        text: 'You clicked the button!',\n        icon: 'success',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // error\n    error() {\n      this.$swal({\n        title: 'Error!',\n        text: ' You clicked the button!',\n        icon: 'error',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // warning\n    warning() {\n      this.$swal({\n        title: 'Warning!',\n        text: ' You clicked the button!',\n        icon: 'warning',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // info\n    info() {\n      this.$swal({\n        title: 'Info!',\n        text: 'You clicked the button!',\n        icon: 'info',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n  },\n}\n</script>\n";
var codeOptions = "\n<template>\n  <!-- trigger button -->\n  <div class=\"demo-inline-spacing\">\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"customImage\"\n    >\n      Custom Image\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"autoClose\"\n    >\n      Auto Close\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"clickOutside\"\n    >\n      Click Outside\n    </b-button>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"ajax\"\n    >\n      Ajax\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      timerInterval: null,\n    }\n  },\n  methods: {\n\n    // custom image\n    customImage() {\n      this.$swal({\n        title: 'Sweet!',\n        text: 'Modal with a custom image.',\n        // eslint-disable-next-line global-require\n        imageUrl: require('@/assets/images/slider/04.jpg'),\n        imageWidth: 400,\n        imageHeight: 200,\n        imageAlt: 'Custom image',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // auto close\n    autoClose() {\n      this.$swal({\n        title: 'Auto close alert!',\n        html: 'I will close in <strong>3</strong> seconds.',\n        timer: 3000,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // click out side\n    clickOutside() {\n      this.$swal({\n        title: 'Click outside to close!',\n        text: 'This is a cool message!',\n        allowOutsideClick: true,\n        customClass: {\n          confirmButton: 'btn btn-primary',\n        },\n        buttonsStyling: false,\n      })\n    },\n\n    // ajax\n    ajax() {\n      this.$swal({\n        title: 'Search for a user',\n        input: 'text',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n          cancelButton: 'btn btn-outline-danger ml-1',\n        },\n        buttonsStyling: false,\n        inputAttributes: {\n          autocapitalize: 'off',\n        },\n        showCancelButton: true,\n        confirmButtonText: 'Look up',\n        showLoaderOnConfirm: true,\n        preConfirm(login) {\n          if (!login) return null\n          return fetch(`//api.github.com/users/${login}`)\n            .then(response => {\n              if (!response.ok) {\n                throw new Error(response.statusText)\n              }\n              return response.json()\n            })\n            .catch(error => {\n              this.$swal.showValidationMessage(`Request failed:  ${error}`)\n            })\n        },\n      }).then(result => {\n        if (result.value) {\n          this.$swal({\n            title: `${result.value.login}'s avatar`,\n            imageUrl: result.value.avatar_url,\n            customClass: { confirmButton: 'btn btn-primary' },\n          })\n        }\n      })\n    },\n  },\n}\n</script>\n";
var codeConfirm = "\n<template>\n  <!-- trigger buttons -->\n  <div class=\"demo-inline-spacing\">\n    <div>\n      <h5>Confirm Button Text</h5>\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"confirmText\"\n      >\n        Confirm Text\n      </b-button>\n    </div>\n    <div>\n      <h5>Confirm Button Text</h5>\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"confirmButtonColor\"\n      >\n        Confirm Button Color\n      </b-button>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    // confirm texrt\n    confirmText() {\n      this.$swal({\n        title: 'Are you sure?',\n        text: \"You won't be able to revert this!\",\n        icon: 'warning',\n        showCancelButton: true,\n        confirmButtonText: 'Yes, delete it!',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n          cancelButton: 'btn btn-outline-danger ml-1',\n        },\n        buttonsStyling: false,\n      }).then(result => {\n        if (result.value) {\n          this.$swal({\n            icon: 'success',\n            title: 'Deleted!',\n            text: 'Your file has been deleted.',\n            customClass: {\n              confirmButton: 'btn btn-success',\n            },\n          })\n        }\n      })\n    },\n\n    // comfirm button color\n    confirmButtonColor() {\n      this.$swal({\n        title: 'Are you sure?',\n        text: \"You won't be able to revert this!\",\n        icon: 'warning',\n        showCancelButton: true,\n        confirmButtonText: 'Yes, delete it!',\n        customClass: {\n          confirmButton: 'btn btn-primary',\n          cancelButton: 'btn btn-outline-danger ml-1',\n        },\n        buttonsStyling: false,\n      }).then(result => {\n        if (result.value) {\n          this.$swal({\n            icon: 'success',\n            title: 'Deleted!',\n            text: 'Your file has been deleted.',\n            customClass: {\n              confirmButton: 'btn btn-success',\n            },\n          })\n        } else if (result.dismiss === 'cancel') {\n          this.$swal({\n            title: 'Cancelled',\n            text: 'Your imaginary file is safe :)',\n            icon: 'error',\n            customClass: {\n              confirmButton: 'btn btn-success',\n            },\n          })\n        }\n      })\n    },\n  },\n}\n</script>\n";

/***/ })

}]);