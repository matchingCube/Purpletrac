(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
//
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
  props: {
    accordion: {
      type: Boolean,
      "default": false
    },
    hover: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": 'default'
    }
  },
  data: function data() {
    return {
      collapseID: ''
    };
  },
  computed: {
    collapseClasses: function collapseClasses() {
      var classes = []; // Collapse Type

      var collapseVariants = {
        "default": 'collapse-default',
        border: 'collapse-border',
        shadow: 'collapse-shadow',
        margin: 'collapse-margin'
      };
      classes.push(collapseVariants[this.type]);
      return classes;
    }
  },
  created: function created() {
    this.collapseID = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"]
  },
  props: {
    isVisible: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      visible: false,
      collapseItemID: '',
      openOnHover: this.$parent.hover
    };
  },
  computed: {
    accordion: function accordion() {
      return this.$parent.accordion ? "accordion-".concat(this.$parent.collapseID) : null;
    }
  },
  created: function created() {
    this.collapseItemID = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
    this.visible = this.isVisible;
  },
  methods: {
    updateVisible: function updateVisible() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.visible = val;
      this.$emit('visible', val);
    },
    collapseOpen: function collapseOpen() {
      if (this.openOnHover) this.updateVisible(true);
    },
    collapseClose: function collapseClose() {
      if (this.openOnHover) this.updateVisible(false);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapse.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue");
/* harmony import */ var _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapseItem.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* eslint-disable global-require */

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    AppCollapseItem: _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppCollapse: _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      status: 'monthly',
      monthlyPlanShow: true,
      pricing: {}
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('/pricing/data').then(function (res) {
      _this.pricing = res.data;
    });
  },
  methods: {
    tooglePlan: function tooglePlan() {
      if (this.status === 'monthly') {
        this.monthlyPlanShow = true;
      } else {
        this.monthlyPlanShow = false;
      }
    }
  }
});
/* eslint-disable global-require */

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .pricing-card .card.popular {\n  border: 1px solid #7367f0;\n}\n.pricing-card .list-group-circle {\n  font-weight: 500;\n  color: #5e5873;\n}\n[dir] .pricing-card .annual-plan {\n  margin-bottom: 1.7rem;\n}\n.pricing-card .annual-plan .plan-price sup {\n  top: -1.5rem;\n}\n[dir=ltr] .pricing-card .annual-plan .plan-price sup {\n  left: 0.2rem;\n}\n[dir=rtl] .pricing-card .annual-plan .plan-price sup {\n  right: 0.2rem;\n}\n.pricing-card .annual-plan .plan-price span {\n  font-size: 3.5rem;\n  line-height: 0.8;\n}\n.pricing-card .annual-plan .plan-price sub {\n  bottom: 0;\n}\n[dir=ltr] .pricing-card .annual-plan .plan-price sub {\n  right: 0.14rem;\n}\n[dir=rtl] .pricing-card .annual-plan .plan-price sub {\n  left: 0.14rem;\n}\n.pricing-card .annual-plan .annual-pricing {\n  position: absolute;\n}\n[dir] .pricing-card .annual-plan .annual-pricing {\n  margin: auto;\n}\n[dir=ltr] .pricing-card .annual-plan .annual-pricing {\n  left: 0;\n  right: 0;\n}\n[dir=rtl] .pricing-card .annual-plan .annual-pricing {\n  right: 0;\n  left: 0;\n}\n.pricing-free-trial {\n  height: 16.71rem;\n}\n[dir] .pricing-free-trial {\n  background-color: rgba(186, 191, 199, 0.12);\n  margin-top: 7.5rem;\n  margin-bottom: 6.3rem;\n}\n[dir=ltr] .pricing-free-trial {\n  margin-right: -2rem;\n  margin-left: -2rem;\n}\n[dir=rtl] .pricing-free-trial {\n  margin-left: -2rem;\n  margin-right: -2rem;\n}\n[dir] .pricing-free-trial .row {\n  margin: 0;\n}\n[dir] .pricing-free-trial .pricing-trial-content {\n  padding: 0 1rem;\n}\n.pricing-free-trial .pricing-trial-content img {\n  position: relative;\n  top: -3.1rem;\n}\n@media (max-width: 767.98px) {\n.pricing-free-trial {\n    height: auto;\n}\n.pricing-free-trial .pricing-trial-content {\n    flex-direction: column;\n    align-items: center;\n}\n.pricing-free-trial .pricing-trial-content .pricing-trial-img {\n    top: 0;\n    height: 150px;\n}\n[dir] .pricing-free-trial .pricing-trial-content .pricing-trial-img {\n    margin-top: 2rem;\n}\n}\n@media (max-width: 575.98px) {\n[dir=ltr] .pricing-free-trial {\n    margin-right: -1.2rem;\n    margin-left: -1.2rem;\n}\n[dir=rtl] .pricing-free-trial {\n    margin-left: -1.2rem;\n    margin-right: -1.2rem;\n}\n}\n[dir=ltr] .pricing-card .annual-plan .plan-price sup {\n  left: 0;\n}\n[dir=rtl] .pricing-card .annual-plan .plan-price sup {\n  right: 0;\n}\n[dir=ltr] .pricing-card .annual-plan .plan-price sub {\n  right: 0;\n}\n[dir=rtl] .pricing-card .annual-plan .plan-price sub {\n  left: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pricing.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570& ***!
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
    "div",
    {
      staticClass: "collapse-icon",
      class: _vm.collapseClasses,
      attrs: { role: "tablist" },
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a& ***!
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
    "b-card",
    {
      class: { open: _vm.visible },
      attrs: { "no-body": "" },
      on: { mouseenter: _vm.collapseOpen, mouseleave: _vm.collapseClose },
    },
    [
      _c(
        "b-card-header",
        {
          class: { collapsed: !_vm.visible },
          attrs: {
            "aria-expanded": _vm.visible ? "true" : "false",
            "aria-controls": _vm.collapseItemID,
            role: "tab",
            "data-toggle": "collapse",
          },
          on: {
            click: function ($event) {
              return _vm.updateVisible(!_vm.visible)
            },
          },
        },
        [
          _vm._t("header", function () {
            return [
              _c("span", { staticClass: "lead collapse-title" }, [
                _vm._v(_vm._s(_vm.title)),
              ]),
            ]
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-collapse",
        {
          attrs: {
            id: _vm.collapseItemID,
            accordion: _vm.accordion,
            role: "tabpanel",
          },
          model: {
            value: _vm.visible,
            callback: function ($$v) {
              _vm.visible = $$v
            },
            expression: "visible",
          },
        },
        [_c("b-card-body", [_vm._t("default")], 2)],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=template&id=16374f10&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=template&id=16374f10& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return Object.keys(_vm.pricing).length
    ? _c(
        "section",
        { attrs: { id: "pricing-plan" } },
        [
          _c("div", { staticClass: "text-center" }, [
            _c("h1", { staticClass: "mt-5" }, [
              _vm._v("\n      Pricing Plans\n    "),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-2 pb-75" }, [
              _vm._v(
                "\n      All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs.\n    "
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex align-items-center justify-content-center mb-5 pb-50",
              },
              [
                _c("h6", { staticClass: "mr-1 mb-0" }, [
                  _vm._v("\n        Monthly\n      "),
                ]),
                _vm._v(" "),
                _c("b-form-checkbox", {
                  attrs: {
                    id: "priceSwitch",
                    name: "price-switch",
                    value: "annually",
                    "unchecked-value": "monthly",
                    switch: "",
                  },
                  on: { input: _vm.tooglePlan },
                  model: {
                    value: _vm.status,
                    callback: function ($$v) {
                      _vm.status = $$v
                    },
                    expression: "status",
                  },
                }),
                _vm._v(" "),
                _c("h6", { staticClass: "ml-50 mb-0" }, [
                  _vm._v("\n        Annually\n      "),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "pricing-card" },
            [
              _c(
                "b-col",
                {
                  staticClass: "mx-auto",
                  attrs: {
                    "offset-sm-2": "",
                    sm: "10",
                    md: "12",
                    "offset-lg": "2",
                    lg: "10",
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "4" } },
                        [
                          _c(
                            "b-card",
                            { attrs: { align: "center" } },
                            [
                              _vm.pricing.basicPlan.img
                                ? _c("b-img", {
                                    staticClass: "mb-2 mt-5",
                                    attrs: {
                                      src: _vm.pricing.basicPlan.img,
                                      alt: "basic svg img",
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("h3", [
                                _vm._v(_vm._s(_vm.pricing.basicPlan.title)),
                              ]),
                              _vm._v(" "),
                              _c("b-card-text", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.pricing.basicPlan.subtitle) +
                                    "\n            "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "annual-plan" }, [
                                _c("div", { staticClass: "plan-price mt-2" }, [
                                  _c(
                                    "sup",
                                    {
                                      staticClass:
                                        "font-medium-1 font-weight-bold text-primary",
                                    },
                                    [_vm._v("$")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "pricing-basic-value font-weight-bolder text-primary",
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.monthlyPlanShow
                                            ? _vm.pricing.basicPlan.monthlyPrice
                                            : _vm.pricing.basicPlan.yearlyPlan
                                                .perMonth
                                        )
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "sub",
                                    {
                                      staticClass:
                                        "pricing-duration text-body font-medium-1 font-weight-bold",
                                    },
                                    [_vm._v("/month")]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !_vm.monthlyPlanShow,
                                        expression: "!monthlyPlanShow",
                                      },
                                    ],
                                    staticClass: "annual-pricing text-muted",
                                  },
                                  [
                                    _vm._v(
                                      "USD " +
                                        _vm._s(
                                          _vm.pricing.basicPlan.yearlyPlan
                                            .totalAnual
                                        ) +
                                        " / year"
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-list-group",
                                { staticClass: "list-group-circle text-left" },
                                _vm._l(
                                  _vm.pricing.basicPlan.planBenefits,
                                  function (data, index) {
                                    return _c(
                                      "b-list-group-item",
                                      { key: index },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(data) +
                                            "\n              "
                                        ),
                                      ]
                                    )
                                  }
                                ),
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
                                      value: "rgba(40, 199, 111, 0.15)",
                                      expression: "'rgba(40, 199, 111, 0.15)'",
                                      modifiers: { 400: true },
                                    },
                                  ],
                                  staticClass: "mt-2",
                                  attrs: {
                                    block: "",
                                    variant: "outline-success",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n              Your current plan\n            "
                                  ),
                                ]
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
                        { attrs: { md: "4" } },
                        [
                          _c(
                            "b-card",
                            {
                              staticClass: "popular",
                              attrs: { align: "center" },
                            },
                            [
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.pricing.standardPlan.popular,
                                      expression:
                                        "pricing.standardPlan.popular",
                                    },
                                  ],
                                  staticClass: "pricing-badge text-right",
                                },
                                [
                                  _c(
                                    "b-badge",
                                    {
                                      attrs: {
                                        variant: "light-primary",
                                        pill: "",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                Popular\n              "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.pricing.standardPlan.img
                                ? _c("b-img", {
                                    staticClass: "mb-1",
                                    attrs: {
                                      src: _vm.pricing.standardPlan.img,
                                      alt: "svg img",
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("h3", [
                                _vm._v(_vm._s(_vm.pricing.standardPlan.title)),
                              ]),
                              _vm._v(" "),
                              _c("b-card-text", [
                                _vm._v(
                                  _vm._s(_vm.pricing.standardPlan.subtitle)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "annual-plan" }, [
                                _c("div", { staticClass: "plan-price mt-2" }, [
                                  _c(
                                    "sup",
                                    {
                                      staticClass:
                                        "font-medium-1 font-weight-bold text-primary",
                                    },
                                    [_vm._v("$")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "pricing-basic-value font-weight-bolder text-primary",
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.monthlyPlanShow
                                            ? _vm.pricing.standardPlan
                                                .monthlyPrice
                                            : _vm.pricing.standardPlan
                                                .yearlyPlan.perMonth
                                        )
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "sub",
                                    {
                                      staticClass:
                                        "pricing-duration text-body font-medium-1 font-weight-bold",
                                    },
                                    [_vm._v("/month")]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !_vm.monthlyPlanShow,
                                        expression: "!monthlyPlanShow",
                                      },
                                    ],
                                    staticClass: "annual-pricing text-muted",
                                  },
                                  [
                                    _vm._v(
                                      "USD " +
                                        _vm._s(
                                          _vm.pricing.standardPlan.yearlyPlan
                                            .totalAnual
                                        ) +
                                        " / year"
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-list-group",
                                { staticClass: "list-group-circle text-left" },
                                _vm._l(
                                  _vm.pricing.standardPlan.planBenefits,
                                  function (data, index) {
                                    return _c(
                                      "b-list-group-item",
                                      { key: index },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(data) +
                                            "\n              "
                                        ),
                                      ]
                                    )
                                  }
                                ),
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
                                  staticClass: "mt-2",
                                  attrs: { block: "", variant: "primary" },
                                },
                                [
                                  _vm._v(
                                    "\n              Upgrade\n            "
                                  ),
                                ]
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
                        { attrs: { md: "4" } },
                        [
                          _c(
                            "b-card",
                            { attrs: { align: "center" } },
                            [
                              _vm.pricing.enterprisePlan.img
                                ? _c("b-img", {
                                    staticClass: "mb-2",
                                    attrs: {
                                      src: _vm.pricing.enterprisePlan.img,
                                      alt: "enterprise svg img",
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("h3", [
                                _vm._v(
                                  _vm._s(_vm.pricing.enterprisePlan.title)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("b-card-text", [
                                _vm._v(
                                  _vm._s(_vm.pricing.enterprisePlan.subtitle)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "annual-plan" }, [
                                _c("div", { staticClass: "plan-price mt-2" }, [
                                  _c(
                                    "sup",
                                    {
                                      staticClass:
                                        "font-medium-1 font-weight-bold text-primary",
                                    },
                                    [_vm._v("$")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "pricing-basic-value font-weight-bolder text-primary",
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.monthlyPlanShow
                                            ? _vm.pricing.enterprisePlan
                                                .monthlyPrice
                                            : _vm.pricing.enterprisePlan
                                                .yearlyPlan.perMonth
                                        )
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "sub",
                                    {
                                      staticClass:
                                        "pricing-duration text-body font-medium-1 font-weight-bold",
                                    },
                                    [_vm._v("/month")]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !_vm.monthlyPlanShow,
                                        expression: "!monthlyPlanShow",
                                      },
                                    ],
                                    staticClass: "annual-pricing text-muted",
                                  },
                                  [
                                    _vm._v(
                                      "USD " +
                                        _vm._s(
                                          _vm.pricing.enterprisePlan.yearlyPlan
                                            .totalAnual
                                        ) +
                                        " / year"
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _vm._l(
                                _vm.pricing.enterprisePlan.planBenefits,
                                function (data, index) {
                                  return _c(
                                    "b-list-group",
                                    {
                                      key: index,
                                      staticClass:
                                        "list-group-circle text-left",
                                    },
                                    [
                                      _c("b-list-group-item", [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(data) +
                                            "\n              "
                                        ),
                                      ]),
                                    ],
                                    1
                                  )
                                }
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
                                  staticClass: "mt-2",
                                  attrs: {
                                    block: "",
                                    variant: "outline-primary",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n              Upgrade\n            "
                                  ),
                                ]
                              ),
                            ],
                            2
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
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pricing-free-trial" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "mx-auto",
                      attrs: { lg: "10", "offset-lg": "3" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "pricing-trial-content d-flex justify-content-between",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "text-center text-md-left mt-3" },
                            [
                              _c("h3", { staticClass: "text-primary" }, [
                                _vm._v(
                                  "\n              Still not convinced? Start with a 14-day FREE trial!\n            "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("h5", [
                                _vm._v(
                                  "You will get full access to with all the features for 14 days."
                                ),
                              ]),
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
                                  staticClass: "mt-2 mt-lg-3",
                                  attrs: { variant: "primary" },
                                },
                                [
                                  _vm._v(
                                    "\n              Start 14-day FREE trial\n            "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-img", {
                            staticClass: "pricing-trial-img",
                            attrs: {
                              fluid: "",
                              src: __webpack_require__(/*! @/assets/images/illustration/pricing-Illustration.svg */ "./resources/js/src/assets/images/illustration/pricing-Illustration.svg"),
                              alt: "svg img",
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pricing-faq" },
            [
              _c("h3", { staticClass: "text-center" }, [
                _vm._v("\n      FAQ's\n    "),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-center" }, [
                _vm._v(
                  "\n      Let us help answer the most common questions.\n    "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "py-2" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "mx-auto",
                      attrs: { lg: "10", "offset-lg": "2" },
                    },
                    [
                      _c(
                        "app-collapse",
                        { attrs: { accordion: "", type: "margin" } },
                        _vm._l(_vm.pricing.qandA, function (data, index) {
                          return _c(
                            "app-collapse-item",
                            { key: index, attrs: { title: data.question } },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(data.ans) +
                                  "\n          "
                              ),
                            ]
                          )
                        }),
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
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapse.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCollapse.vue?vue&type=template&id=ddcc2570& */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&");
/* harmony import */ var _AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCollapse.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/app-collapse/AppCollapse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapse.vue?vue&type=template&id=ddcc2570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCollapseItem.vue?vue&type=template&id=47019a0a& */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&");
/* harmony import */ var _AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCollapseItem.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/app-collapse/AppCollapseItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapseItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapseItem.vue?vue&type=template&id=47019a0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/assets/images/illustration/pricing-Illustration.svg":
/*!******************************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/pricing-Illustration.svg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/resources/js/src/assets/images/illustration/pricing-Illustration.svg";

/***/ }),

/***/ "./resources/js/src/views/pages/pricing/Pricing.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/pages/pricing/Pricing.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pricing_vue_vue_type_template_id_16374f10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pricing.vue?vue&type=template&id=16374f10& */ "./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=template&id=16374f10&");
/* harmony import */ var _Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pricing.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Pricing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pricing.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pricing_vue_vue_type_template_id_16374f10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pricing_vue_vue_type_template_id_16374f10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/pricing/Pricing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pricing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pricing.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=template&id=16374f10&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=template&id=16374f10& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_16374f10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pricing.vue?vue&type=template&id=16374f10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/pricing/Pricing.vue?vue&type=template&id=16374f10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_16374f10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_16374f10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);