(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _components_Bookmarks_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Bookmarks.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue");
/* harmony import */ var _components_Locale_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Locale.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/Locale.vue");
/* harmony import */ var _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SearchBar.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/SearchBar.vue");
/* harmony import */ var _components_DarkToggler_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DarkToggler.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue");
/* harmony import */ var _components_CartDropdown_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CartDropdown.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/CartDropdown.vue");
/* harmony import */ var _components_NotificationDropdown_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NotificationDropdown.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue");
/* harmony import */ var _components_UserDropdown_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/UserDropdown.vue */ "./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    // Navbar Components
    BNavbarNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbarNav"],
    Bookmarks: _components_Bookmarks_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Locale: _components_Locale_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SearchBar: _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    DarkToggler: _components_DarkToggler_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    CartDropdown: _components_CartDropdown_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    NotificationDropdown: _components_NotificationDropdown_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    UserDropdown: _components_UserDropdown_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_layouts_components_app_navbar_AppNavbarVerticalLayout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue */ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue");
/* harmony import */ var _core_layouts_components_AppFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/layouts/components/AppFooter.vue */ "./resources/js/src/@core/layouts/components/AppFooter.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_components_layout_content_renderer_LayoutContentRendererDefault_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue");
/* harmony import */ var _core_layouts_components_layout_content_renderer_LayoutContentRendererLeft_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue");
/* harmony import */ var _core_layouts_components_layout_content_renderer_LayoutContentRendererLeftDetached_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue");
/* harmony import */ var _components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/vertical-nav-menu/VerticalNavMenu.vue */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue");
/* harmony import */ var _useVerticalLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useVerticalLayout */ "./resources/js/src/@core/layouts/layout-vertical/useVerticalLayout.js");
/* harmony import */ var _mixinVerticalLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixinVerticalLayout */ "./resources/js/src/@core/layouts/layout-vertical/mixinVerticalLayout.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // AppBreadcrumb,
    AppNavbarVerticalLayout: _core_layouts_components_app_navbar_AppNavbarVerticalLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppFooter: _core_layouts_components_AppFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VerticalNavMenu: _components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    BNavbar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BNavbar"],
    LayoutContentRendererLeftDetached: _core_layouts_components_layout_content_renderer_LayoutContentRendererLeftDetached_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    LayoutContentRendererLeft: _core_layouts_components_layout_content_renderer_LayoutContentRendererLeft_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    LayoutContentRendererDefault: _core_layouts_components_layout_content_renderer_LayoutContentRendererDefault_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mixins: [_mixinVerticalLayout__WEBPACK_IMPORTED_MODULE_10__["default"]],
  props: {
    navMenuItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    layoutContentRenderer: function layoutContentRenderer() {
      var rendererType = this.$route.meta.contentRenderer;
      if (rendererType === 'sidebar-left') return 'layout-content-renderer-left';
      if (rendererType === 'sidebar-left-detached') return 'layout-content-renderer-left-detached';
      return 'layout-content-renderer-default';
    }
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        routerTransition = _useAppConfig.routerTransition,
        navbarBackgroundColor = _useAppConfig.navbarBackgroundColor,
        navbarType = _useAppConfig.navbarType,
        footerType = _useAppConfig.footerType,
        isNavMenuHidden = _useAppConfig.isNavMenuHidden;

    var _useVerticalLayout = Object(_useVerticalLayout__WEBPACK_IMPORTED_MODULE_9__["default"])(navbarType, footerType),
        isVerticalMenuActive = _useVerticalLayout.isVerticalMenuActive,
        toggleVerticalMenuActive = _useVerticalLayout.toggleVerticalMenuActive,
        isVerticalMenuCollapsed = _useVerticalLayout.isVerticalMenuCollapsed,
        layoutClasses = _useVerticalLayout.layoutClasses,
        overlayClasses = _useVerticalLayout.overlayClasses,
        resizeHandler = _useVerticalLayout.resizeHandler,
        navbarTypeClass = _useVerticalLayout.navbarTypeClass,
        footerTypeClass = _useVerticalLayout.footerTypeClass; // Resize handler


    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"])(function () {
      window.removeEventListener('resize', resizeHandler);
    });
    return {
      isVerticalMenuActive: isVerticalMenuActive,
      toggleVerticalMenuActive: toggleVerticalMenuActive,
      isVerticalMenuCollapsed: isVerticalMenuCollapsed,
      overlayClasses: overlayClasses,
      layoutClasses: layoutClasses,
      navbarTypeClass: navbarTypeClass,
      footerTypeClass: footerTypeClass,
      // App Config
      routerTransition: routerTransition,
      navbarBackgroundColor: navbarBackgroundColor,
      isNavMenuHidden: isNavMenuHidden
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_layout_vertical_LayoutVertical_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/layout-vertical/LayoutVertical.vue */ "./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue");
/* harmony import */ var _core_layouts_components_app_customizer_AppCustomizer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/components/app-customizer/AppCustomizer.vue */ "./resources/js/src/@core/layouts/components/app-customizer/AppCustomizer.vue");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _navigation_vertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/navigation/vertical */ "./resources/js/src/navigation/vertical/index.js");
//
//
//
//
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
    AppCustomizer: _core_layouts_components_app_customizer_AppCustomizer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LayoutVertical: _core_layouts_layout_vertical_LayoutVertical_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showCustomizer: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.customizer,
      navMenuItems: _navigation_vertical__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .bordered-layout .header-navbar {\n  box-shadow: none;\n  border: 1px solid #ebe9f1;\n}\n[dir] .bordered-layout .header-navbar.floating-nav {\n  border: 1px solid #ebe9f1;\n}\n[dir] .bordered-layout .header-navbar.fixed-top {\n  border-bottom: 1px solid #ebe9f1;\n  background: #f8f8f8;\n  box-shadow: none !important;\n}\n[dir] .bordered-layout .main-menu {\n  box-shadow: none;\n}\n[dir=ltr] .bordered-layout .main-menu {\n  border-right: 1px solid #ebe9f1;\n}\n[dir=rtl] .bordered-layout .main-menu {\n  border-left: 1px solid #ebe9f1;\n}\n[dir] .bordered-layout .main-menu.menu-light .navigation > li.open:not(.menu-item-closing) > a, [dir] .bordered-layout .main-menu.menu-light .navigation > li.sidebar-group-active > a {\n  background: #ededed;\n}\n[dir] .bordered-layout .dropdown-menu {\n  border: 1px solid #ebe9f1 !important;\n  box-shadow: none;\n}\n[dir] .bordered-layout .main-menu .navigation, [dir] .bordered-layout .main-menu {\n  background: #f8f8f8;\n}\n[dir] .bordered-layout .card, [dir] .bordered-layout .bs-stepper:not(.wizard-modern):not(.checkout-tab-steps), [dir] .bordered-layout .bs-stepper.wizard-modern .bs-stepper-content {\n  border: 1px solid #ebe9f1;\n  box-shadow: none;\n}\n[dir] .bordered-layout .footer {\n  box-shadow: none !important;\n}\n[dir] .bordered-layout .footer-fixed .footer {\n  border-top: 1px solid #ebe9f1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutVertical.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=template&id=da0ba830&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=template&id=da0ba830& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "navbar-container d-flex content align-items-center" },
    [
      _c("ul", { staticClass: "nav navbar-nav d-xl-none" }, [
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "b-link",
              {
                staticClass: "nav-link",
                on: { click: _vm.toggleVerticalMenuActive },
              },
              [_c("feather-icon", { attrs: { icon: "MenuIcon", size: "21" } })],
              1
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex",
        },
        [_c("bookmarks")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-navbar-nav",
        { staticClass: "nav align-items-center ml-auto" },
        [_c("search-bar"), _vm._v(" "), _c("user-dropdown")],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=template&id=2df4f6b5&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=template&id=2df4f6b5& ***!
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
    "div",
    {
      staticClass: "vertical-layout h-100",
      class: [_vm.layoutClasses],
      attrs: { "data-col": _vm.isNavMenuHidden ? "1-column" : null },
    },
    [
      _c(
        "b-navbar",
        {
          staticClass: "header-navbar navbar navbar-shadow align-items-center",
          class: [_vm.navbarTypeClass],
          attrs: { toggleable: false, variant: _vm.navbarBackgroundColor },
        },
        [
          _vm._t(
            "navbar",
            function () {
              return [
                _c("app-navbar-vertical-layout", {
                  attrs: {
                    "toggle-vertical-menu-active": _vm.toggleVerticalMenuActive,
                  },
                }),
              ]
            },
            {
              toggleVerticalMenuActive: _vm.toggleVerticalMenuActive,
              navbarBackgroundColor: _vm.navbarBackgroundColor,
              navbarTypeClass: _vm.navbarTypeClass.concat([
                "header-navbar navbar navbar-shadow align-items-center",
              ]),
            }
          ),
        ],
        2
      ),
      _vm._v(" "),
      !_vm.isNavMenuHidden
        ? _c("vertical-nav-menu", {
            attrs: {
              "is-vertical-menu-active": _vm.isVerticalMenuActive,
              "toggle-vertical-menu-active": _vm.toggleVerticalMenuActive,
              "nav-menu-items": _vm.navMenuItems,
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "header",
                  fn: function (slotProps) {
                    return [
                      _vm._t("vertical-menu-header", null, null, slotProps),
                    ]
                  },
                },
              ],
              null,
              true
            ),
          })
        : _vm._e(),
      _vm._v(" "),
      _c("div", {
        staticClass: "sidenav-overlay",
        class: _vm.overlayClasses,
        on: {
          click: function ($event) {
            _vm.isVerticalMenuActive = false
          },
        },
      }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(_vm.layoutContentRenderer, {
            key:
              _vm.layoutContentRenderer === "layout-content-renderer-left"
                ? _vm.$route.meta.navActiveLink || _vm.$route.name
                : null,
            tag: "component",
            scopedSlots: _vm._u(
              [
                _vm._l(_vm.$scopedSlots, function (index, name) {
                  return {
                    key: name,
                    fn: function (data) {
                      return [_vm._t(name, null, null, data)]
                    },
                  }
                }),
              ],
              null,
              true
            ),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "footer",
        { staticClass: "footer footer-light", class: [_vm.footerTypeClass] },
        [
          _vm._t("footer", function () {
            return [_c("app-footer")]
          }),
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("customizer"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=template&id=985d7c4c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=template&id=985d7c4c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "layout-vertical",
    { attrs: { "nav-menu-items": _vm.navMenuItems } },
    [
      _c("router-view"),
      _vm._v(" "),
      _vm.showCustomizer
        ? _c("app-customizer", {
            attrs: { slot: "customizer" },
            slot: "customizer",
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppNavbarVerticalLayout_vue_vue_type_template_id_da0ba830___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppNavbarVerticalLayout.vue?vue&type=template&id=da0ba830& */ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=template&id=da0ba830&");
/* harmony import */ var _AppNavbarVerticalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppNavbarVerticalLayout.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppNavbarVerticalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppNavbarVerticalLayout_vue_vue_type_template_id_da0ba830___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppNavbarVerticalLayout_vue_vue_type_template_id_da0ba830___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarVerticalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbarVerticalLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarVerticalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=template&id=da0ba830&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=template&id=da0ba830& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarVerticalLayout_vue_vue_type_template_id_da0ba830___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbarVerticalLayout.vue?vue&type=template&id=da0ba830& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/AppNavbarVerticalLayout.vue?vue&type=template&id=da0ba830&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarVerticalLayout_vue_vue_type_template_id_da0ba830___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarVerticalLayout_vue_vue_type_template_id_da0ba830___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutVertical_vue_vue_type_template_id_2df4f6b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutVertical.vue?vue&type=template&id=2df4f6b5& */ "./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=template&id=2df4f6b5&");
/* harmony import */ var _LayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutVertical.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LayoutVertical_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutVertical.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutVertical_vue_vue_type_template_id_2df4f6b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutVertical_vue_vue_type_template_id_2df4f6b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutVertical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutVertical.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=template&id=2df4f6b5&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=template&id=2df4f6b5& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_template_id_2df4f6b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutVertical.vue?vue&type=template&id=2df4f6b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/LayoutVertical.vue?vue&type=template&id=2df4f6b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_template_id_2df4f6b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_template_id_2df4f6b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/mixinVerticalLayout.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/mixinVerticalLayout.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: function $route() {
      if (this.$store.state.app.windowWidth < _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeBreakpoints"].xl) {
        this.isVerticalMenuActive = false;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/layouts/vertical/LayoutVertical.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/layouts/vertical/LayoutVertical.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutVertical_vue_vue_type_template_id_985d7c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutVertical.vue?vue&type=template&id=985d7c4c& */ "./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=template&id=985d7c4c&");
/* harmony import */ var _LayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutVertical.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutVertical_vue_vue_type_template_id_985d7c4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutVertical_vue_vue_type_template_id_985d7c4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/vertical/LayoutVertical.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutVertical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=template&id=985d7c4c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=template&id=985d7c4c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_template_id_985d7c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutVertical.vue?vue&type=template&id=985d7c4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/vertical/LayoutVertical.vue?vue&type=template&id=985d7c4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_template_id_985d7c4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutVertical_vue_vue_type_template_id_985d7c4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);