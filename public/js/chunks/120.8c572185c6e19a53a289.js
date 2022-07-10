(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _FormRepeaterBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormRepeaterBasic.vue */ "./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue");
//
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
    FormRepeaterBasic: _FormRepeaterBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/mixins/ui/transition */ "./resources/js/src/@core/mixins/ui/transition.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-repeater/code.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BForm"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_3__["heightTransition"]],
  data: function data() {
    return {
      items: [{
        id: 1,
        selected: 'male',
        selected1: 'designer',
        prevHeight: 0
      }],
      nextTodoId: 2,
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_5__["codeBasic"]
    };
  },
  mounted: function mounted() {
    this.initTrHeight();
  },
  created: function created() {
    window.addEventListener('resize', this.initTrHeight);
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.initTrHeight);
  },
  methods: {
    repeateAgain: function repeateAgain() {
      var _this = this;

      this.items.push({
        id: this.nextTodoId += this.nextTodoId
      });
      this.$nextTick(function () {
        _this.trAddHeight(_this.$refs.row[0].offsetHeight);
      });
    },
    removeItem: function removeItem(index) {
      this.items.splice(index, 1);
      this.trTrimHeight(this.$refs.row[0].offsetHeight);
    },
    initTrHeight: function initTrHeight() {
      var _this2 = this;

      this.trSetHeight(null);
      this.$nextTick(function () {
        _this2.trSetHeight(_this2.$refs.form.scrollHeight);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".repeater-form[data-v-38f5c26a] {\n  overflow: hidden;\n  transition: 0.35s height;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=template&id=067db558&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=template&id=067db558& ***!
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
    "div",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [_c("form-repeater-basic")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=template&id=38f5c26a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=template&id=38f5c26a&scoped=true& ***!
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
      attrs: { title: "Repeating Forms" },
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
        "div",
        [
          _c(
            "b-form",
            {
              ref: "form",
              staticClass: "repeater-form",
              style: { height: _vm.trHeight },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.repeateAgain.apply(null, arguments)
                },
              },
            },
            _vm._l(_vm.items, function (item, index) {
              return _c(
                "b-row",
                {
                  key: item.id,
                  ref: "row",
                  refInFor: true,
                  attrs: { id: item.id },
                },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "4" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Item Name",
                            "label-for": "item-name",
                          },
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "item-name",
                              type: "text",
                              placeholder: "Vuexy Admin Template",
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
                    { attrs: { md: "2" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Cost", "label-for": "cost" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "cost",
                              type: "number",
                              placeholder: "32",
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
                    { attrs: { md: "2" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: { label: "Quantity", "label-for": "quantity" },
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "quantity",
                              type: "number",
                              placeholder: "1",
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
                    { attrs: { lg: "2", md: "1" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Price", "label-for": "price" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "pzrice",
                              value: "32$",
                              plaintext: "",
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
                    { staticClass: "mb-50", attrs: { lg: "2", md: "3" } },
                    [
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
                          staticClass: "mt-0 mt-md-2",
                          attrs: { variant: "outline-danger" },
                          on: {
                            click: function ($event) {
                              return _vm.removeItem(index)
                            },
                          },
                        },
                        [
                          _c("feather-icon", {
                            staticClass: "mr-25",
                            attrs: { icon: "XIcon" },
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Delete")]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "12" } }, [_c("hr")]),
                ],
                1
              )
            }),
            1
          ),
        ],
        1
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
          on: { click: _vm.repeateAgain },
        },
        [
          _c("feather-icon", {
            staticClass: "mr-25",
            attrs: { icon: "PlusIcon" },
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Add New")]),
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

/***/ "./resources/js/src/@core/mixins/ui/transition.js":
/*!********************************************************!*\
  !*** ./resources/js/src/@core/mixins/ui/transition.js ***!
  \********************************************************/
/*! exports provided: heightTransition, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heightTransition", function() { return heightTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);

var heightTransition = {
  /*
      HowTo:
      1. Add dynamic style to element and set style as `trHeight`
      2. Set transition speed using `transition: 0.35s height;` <= you can use appropriate value;
      3. Optionally you can set `overflow: hidden;` to hide element overflow while height is animated.
      4. Set initial height using `trSetHeight` before any operation. [mounted hook is recommended - You can use `ref` for dynamic contents]
      5. Toggle height using height operations 🍻
      6. Toggle usage of $nextTick for height operations is any issue occur [experimental] 🔬
    */
  data: function data() {
    return {
      trHeight: null
    };
  },
  methods: {
    trAddHeight: function trAddHeight(val) {
      // Add height to existing height
      // Usage: Where new element is append or more height is added (e.g. list append)

      /* Assumes:
       - Height is assigned and is `String`
       - Incoming value is valid number in `Number` or `String`
      */
      var heightValue = Number(this.trHeight.substring(0, this.trHeight.length - 2));
      this.trHeight = "".concat(heightValue + Number(val), "px");
    },
    trTrimHeight: function trTrimHeight(val) {
      // Remove height from existing height
      // Usage: Where new element is removed or height is remove (e.g. list pop/ele remove)

      /* Assumes:
       - Height is assigned and is `String`
       - Incoming value is valid number in `Number` or `String`
      */
      var heightValue = Number(this.trHeight.substring(0, this.trHeight.length - 2));
      this.trHeight = "".concat(heightValue - Number(val), "px");
    },
    trSetHeight: function trSetHeight(val) {
      // Set height
      // Usage: Mostly for assigning initial value from mounted hook

      /* Assumes:
       - Height is not assigned and what to assign for add/remove operation
       - What to set height at something for odd usage
       - Incoming value is valid number in `Number` or `String`
      */
      if (val === null) this.trHeight = 'auto';else this.trHeight = "".concat(Number(val), "px");
    }
  }
}; // Ignore below for now. We will remove it when we add more transition in future.

var _ = null;

/***/ }),

/***/ "./resources/js/src/views/forms/form-repeater/FormRepeater.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/forms/form-repeater/FormRepeater.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormRepeater_vue_vue_type_template_id_067db558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormRepeater.vue?vue&type=template&id=067db558& */ "./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=template&id=067db558&");
/* harmony import */ var _FormRepeater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormRepeater.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormRepeater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormRepeater_vue_vue_type_template_id_067db558___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormRepeater_vue_vue_type_template_id_067db558___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-repeater/FormRepeater.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRepeater.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=template&id=067db558&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=template&id=067db558& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeater_vue_vue_type_template_id_067db558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRepeater.vue?vue&type=template&id=067db558& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeater.vue?vue&type=template&id=067db558&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeater_vue_vue_type_template_id_067db558___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeater_vue_vue_type_template_id_067db558___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormRepeaterBasic_vue_vue_type_template_id_38f5c26a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormRepeaterBasic.vue?vue&type=template&id=38f5c26a&scoped=true& */ "./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=template&id=38f5c26a&scoped=true&");
/* harmony import */ var _FormRepeaterBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormRepeaterBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormRepeaterBasic_vue_vue_type_style_index_0_id_38f5c26a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true& */ "./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormRepeaterBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormRepeaterBasic_vue_vue_type_template_id_38f5c26a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormRepeaterBasic_vue_vue_type_template_id_38f5c26a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38f5c26a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRepeaterBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_style_index_0_id_38f5c26a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=style&index=0&id=38f5c26a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_style_index_0_id_38f5c26a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_style_index_0_id_38f5c26a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_style_index_0_id_38f5c26a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_style_index_0_id_38f5c26a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=template&id=38f5c26a&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=template&id=38f5c26a&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_template_id_38f5c26a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRepeaterBasic.vue?vue&type=template&id=38f5c26a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue?vue&type=template&id=38f5c26a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_template_id_38f5c26a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_template_id_38f5c26a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-repeater/code.js":
/*!************************************************************!*\
  !*** ./resources/js/src/views/forms/form-repeater/code.js ***!
  \************************************************************/
/*! exports provided: codeBasic, codeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeInfo", function() { return codeInfo; });
var codeBasic = "\n<template>\n  <div>\n     <div>\n      <b-form\n        ref=\"form\"\n        :style=\"{height: trHeight}\"\n        class=\"repeater-form\"\n        @submit.prevent=\"repeateAgain\"\n      >\n\n        <!-- Row Loop -->\n        <b-row\n          v-for=\"(item, index) in items\"\n          :id=\"item.id\"\n          :key=\"item.id\"\n          ref=\"row\"\n        >\n\n          <!-- Item Name -->\n          <b-col md=\"4\">\n            <b-form-group\n              label=\"Item Name\"\n              label-for=\"item-name\"\n            >\n              <b-form-input\n                id=\"item-name\"\n                type=\"text\"\n                placeholder=\"Vuexy Admin Template\"\n              />\n            </b-form-group>\n          </b-col>\n\n          <!-- Cost -->\n          <b-col md=\"2\">\n            <b-form-group\n              label=\"Cost\"\n              label-for=\"cost\"\n            >\n              <b-form-input\n                id=\"cost\"\n                type=\"number\"\n                placeholder=\"32\"\n              />\n            </b-form-group>\n          </b-col>\n\n          <!-- Quantity -->\n          <b-col md=\"2\">\n            <b-form-group\n              label=\"Quantity\"\n              label-for=\"quantity\"\n            >\n              <b-form-input\n                id=\"quantity\"\n                type=\"number\"\n                placeholder=\"1\"\n              />\n            </b-form-group>\n          </b-col>\n\n          <!-- Profession -->\n          <b-col\n            lg=\"2\"\n            md=\"1\"\n          >\n            <b-form-group\n              label=\"Price\"\n              label-for=\"price\"\n            >\n              <b-form-input\n                id=\"pzrice\"\n                value=\"32$\"\n                plaintext\n              />\n            </b-form-group>\n          </b-col>\n\n          <!-- Remove Button -->\n          <b-col\n            lg=\"2\"\n            md=\"3\"\n            class=\"mb-50\"\n          >\n            <b-button\n              v-ripple.400=\"'rgba(234, 84, 85, 0.15)'\"\n              variant=\"outline-danger\"\n              class=\"mt-0 mt-md-2\"\n              @click=\"removeItem(index)\"\n            >\n              <feather-icon\n                icon=\"XIcon\"\n                class=\"mr-25\"\n              />\n              <span>Delete</span>\n            </b-button>\n          </b-col>\n          <b-col cols=\"12\">\n            <hr>\n          </b-col>\n        </b-row>\n\n      </b-form>\n    </div>\n    <b-button\n      v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n      variant=\"primary\"\n      @click=\"repeateAgain\"\n    >\n      <feather-icon\n        icon=\"PlusIcon\"\n        class=\"mr-25\"\n      />\n      <span>Add New</span>\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {\n  BForm, BFormGroup, BFormInput, BRow, BCol, BButton,\n} from 'bootstrap-vue'\nimport { heightTransition } from '@core/mixins/ui/transition'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BForm,\n    BRow,\n    BCol,\n    BButton,\n    BFormGroup,\n    BFormInput,\n  },\n  directives: {\n    Ripple,\n  },\n  mixins: [heightTransition],\n  data() {\n    return {\n      items: [{\n        id: 1,\n        selected: 'male',\n        selected1: 'designer',\n        prevHeight: 0,\n      }],\n      nextTodoId: 2,\n    }\n  },\n  mounted() {\n    this.initTrHeight()\n  },\n  created() {\n    window.addEventListener('resize', this.initTrHeight)\n  },\n  destroyed() {\n    window.removeEventListener('resize', this.initTrHeight)\n  },\n  methods: {\n    repeateAgain() {\n      this.items.push({\n        id: this.nextTodoId += this.nextTodoId,\n      })\n\n      this.$nextTick(() => {\n        this.trAddHeight(this.$refs.row[0].offsetHeight)\n      })\n    },\n    removeItem(index) {\n      this.items.splice(index, 1)\n      this.trTrimHeight(this.$refs.row[0].offsetHeight)\n    },\n    initTrHeight() {\n      this.trSetHeight(null)\n      this.$nextTick(() => {\n        this.trSetHeight(this.$refs.form.scrollHeight)\n      })\n    },\n  },\n}\n</script>\n\n<style lang=\"scss\" scoped>\n.repeater-form {\n  overflow: hidden;\n  transition: .35s height;\n}\n</style>\n";
var codeInfo = 'default';

/***/ })

}]);