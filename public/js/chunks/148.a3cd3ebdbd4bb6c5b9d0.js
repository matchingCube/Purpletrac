(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _core_layouts_components_content_with_sidebar_ContentWithSidebar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/layouts/components/content-with-sidebar/ContentWithSidebar.vue */ "./resources/js/src/@core/layouts/components/content-with-sidebar/ContentWithSidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroupAppend"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    ContentWithSidebar: _core_layouts_components_content_with_sidebar_ContentWithSidebar_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      search_query: '',
      commentCheckmark: '',
      blogDetail: [],
      blogSidebar: {},
      socialShareIcons: ['GithubIcon', 'GitlabIcon', 'FacebookIcon', 'TwitterIcon', 'LinkedinIcon']
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('/blog/list/data/detail').then(function (res) {
      _this.blogDetail = res.data;
    });
    this.$http.get('/blog/list/data/sidebar').then(function (res) {
      _this.blogSidebar = res.data;
    });
  },
  methods: {
    kFormatter: _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__["kFormatter"],
    tagsColor: function tagsColor(tag) {
      if (tag === 'Quote') return 'light-info';
      if (tag === 'Gaming') return 'light-danger';
      if (tag === 'Fashion') return 'light-primary';
      if (tag === 'Video') return 'light-warning';
      if (tag === 'Food') return 'light-success';
      return 'light-primary';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blog-list-wrapper .blog-title-truncate {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.blog-list-wrapper .blog-content-truncate {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.blog-detail-wrapper .blog-detail-share .dropdown-menu {\n  min-width: auto;\n}\n.blog-sidebar .blog-recent-posts img {\n  object-fit: cover;\n}\n.blog-sidebar .blog-recent-posts .text-body-heading:hover {\n  color: #5e50ee !important;\n}\n.blog-sidebar .blog-recent-post-title,\n.blog-sidebar .blog-category-title {\n  line-height: 23px;\n  letter-spacing: 0;\n}\n[dir] .blog-edit-wrapper .border {\n  border-color: #d8d6de !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=template&id=4c5677db&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=template&id=4c5677db& ***!
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
  return Object.keys(_vm.blogDetail).length
    ? _c(
        "content-with-sidebar",
        { staticClass: "cws-container cws-sidebar-right blog-wrapper" },
        [
          _c(
            "div",
            { staticClass: "blog-detail-wrapper" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          attrs: {
                            "img-src": _vm.blogDetail.blog.img,
                            "img-top": "",
                            "img-alt": "Blog Detail Pic",
                            title: _vm.blogDetail.blog.title,
                          },
                        },
                        [
                          _c(
                            "b-media",
                            { attrs: { "no-body": "" } },
                            [
                              _c(
                                "b-media-aside",
                                {
                                  staticClass: "mr-50",
                                  attrs: { "vertical-align": "center" },
                                },
                                [
                                  _c("b-avatar", {
                                    attrs: {
                                      href: "javascript:void(0)",
                                      size: "24",
                                      src: _vm.blogDetail.blog.avatar,
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-media-body", [
                                _c(
                                  "small",
                                  { staticClass: "text-muted mr-50" },
                                  [_vm._v("by")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  [
                                    _c("b-link", { staticClass: "text-body" }, [
                                      _vm._v(
                                        _vm._s(_vm.blogDetail.blog.userFullName)
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "text-muted ml-75 mr-50" },
                                  [_vm._v("|")]
                                ),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    _vm._s(_vm.blogDetail.blog.createdTime)
                                  ),
                                ]),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "my-1 py-25" },
                            _vm._l(_vm.blogDetail.blog.tags, function (tag) {
                              return _c(
                                "b-link",
                                { key: tag },
                                [
                                  _c(
                                    "b-badge",
                                    {
                                      staticClass: "mr-75",
                                      attrs: {
                                        pill: "",
                                        variant: _vm.tagsColor(tag),
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
                            1
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "blog-content",
                            domProps: {
                              innerHTML: _vm._s(_vm.blogDetail.blog.content),
                            },
                          }),
                          _vm._v(" "),
                          _vm._l(
                            _vm.blogDetail.blog.UserComment,
                            function (user) {
                              return _c(
                                "b-media",
                                { key: user.avatar, attrs: { "no-body": "" } },
                                [
                                  _c(
                                    "b-media-aside",
                                    [
                                      _c("b-avatar", {
                                        attrs: { size: "60", src: user.avatar },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-media-body",
                                    [
                                      _c(
                                        "h6",
                                        { staticClass: "font-weight-bolder" },
                                        [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(user.fullName) +
                                              "\n              "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("b-card-text", [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(user.comment) +
                                            "\n              "
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            }
                          ),
                          _vm._v(" "),
                          _c("hr", { staticClass: "my-2" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center justify-content-between",
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "d-flex align-items-center" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex align-items-center mr-1",
                                    },
                                    [
                                      _c(
                                        "b-link",
                                        { staticClass: "mr-50" },
                                        [
                                          _c("feather-icon", {
                                            staticClass: "text-body",
                                            attrs: {
                                              icon: "MessageSquareIcon",
                                              size: "21",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("b-link", [
                                        _c(
                                          "div",
                                          { staticClass: "text-body" },
                                          [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  _vm.kFormatter(
                                                    _vm.blogDetail.blog.comments
                                                  )
                                                ) +
                                                "\n                  "
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "d-flex align-items-center",
                                    },
                                    [
                                      _c(
                                        "b-link",
                                        { staticClass: "mr-50" },
                                        [
                                          _c("feather-icon", {
                                            staticClass: "text-body",
                                            attrs: {
                                              size: "21",
                                              icon: "BookmarkIcon",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("b-link", [
                                        _c(
                                          "div",
                                          { staticClass: "text-body" },
                                          [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  _vm.kFormatter(
                                                    _vm.blogDetail.blog
                                                      .bookmarked
                                                  )
                                                ) +
                                                "\n                  "
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "blog-detail-share" },
                                [
                                  _c(
                                    "b-dropdown",
                                    {
                                      attrs: {
                                        variant: "link",
                                        "toggle-class": "p-0",
                                        "no-caret": "",
                                        right: "",
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "button-content",
                                            fn: function () {
                                              return [
                                                _c("feather-icon", {
                                                  staticClass: "text-body",
                                                  attrs: {
                                                    size: "21",
                                                    icon: "Share2Icon",
                                                  },
                                                }),
                                              ]
                                            },
                                            proxy: true,
                                          },
                                        ],
                                        null,
                                        false,
                                        710295190
                                      ),
                                    },
                                    [
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.socialShareIcons,
                                        function (icon) {
                                          return _c(
                                            "b-dropdown-item",
                                            { key: icon, attrs: { href: "#" } },
                                            [
                                              _c("feather-icon", {
                                                attrs: {
                                                  icon: icon,
                                                  size: "18",
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        }
                                      ),
                                    ],
                                    2
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "mt-2",
                      attrs: { id: "blogComment", cols: "12" },
                    },
                    [
                      _c("h6", { staticClass: "section-label" }, [
                        _vm._v("\n          Comment\n        "),
                      ]),
                      _vm._v(" "),
                      _vm._l(
                        _vm.blogDetail.comments,
                        function (comment, index) {
                          return _c(
                            "b-card",
                            { key: index },
                            [
                              _c(
                                "b-media",
                                { attrs: { "no-body": "" } },
                                [
                                  _c(
                                    "b-media-aside",
                                    { staticClass: "mr-75" },
                                    [
                                      _c("b-avatar", {
                                        attrs: {
                                          src: comment.avatar,
                                          size: "38",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-media-body",
                                    [
                                      _c(
                                        "h6",
                                        {
                                          staticClass:
                                            "font-weight-bolder mb-25",
                                        },
                                        [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(comment.userFullName) +
                                              "\n              "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("b-card-text", [
                                        _vm._v(_vm._s(comment.commentedAt)),
                                      ]),
                                      _vm._v(" "),
                                      _c("b-card-text", [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(comment.commentText) +
                                            "\n              "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("b-link", [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-inline-flex align-items-center",
                                          },
                                          [
                                            _c("feather-icon", {
                                              staticClass: "mr-50",
                                              attrs: {
                                                icon: "CornerUpLeftIcon",
                                                size: "18",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("span", [_vm._v("Reply")]),
                                          ],
                                          1
                                        ),
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
                      ),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mt-2", attrs: { cols: "12" } },
                    [
                      _c("h6", { staticClass: "section-label" }, [
                        _vm._v("\n          Leave a Comment\n        "),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-card",
                        [
                          _c(
                            "b-form",
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { sm: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { staticClass: "mb-2" },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              name: "name",
                                              placeholder: "Name",
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
                                    { attrs: { sm: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { staticClass: "mb-2" },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              name: "email",
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
                                    { attrs: { sm: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { staticClass: "mb-2" },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              name: "website",
                                              placeholder: "Website",
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
                                        { staticClass: "mb-2" },
                                        [
                                          _c("b-form-textarea", {
                                            attrs: {
                                              name: "textarea",
                                              rows: "4",
                                              placeholder: "Website",
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
                                        "b-form-checkbox",
                                        {
                                          staticClass: "mb-2",
                                          attrs: {
                                            id: "checkbox-1",
                                            name: "checkbox-1",
                                          },
                                          model: {
                                            value: _vm.commentCheckmark,
                                            callback: function ($$v) {
                                              _vm.commentCheckmark = $$v
                                            },
                                            expression: "commentCheckmark",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                  Save my name, email, and website in this browser for the next time I comment.\n                "
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
                                        "b-button",
                                        {
                                          directives: [
                                            {
                                              name: "ripple",
                                              rawName: "v-ripple.400",
                                              value:
                                                "rgba(255, 255, 255, 0.15)",
                                              expression:
                                                "'rgba(255, 255, 255, 0.15)'",
                                              modifiers: { 400: true },
                                            },
                                          ],
                                          attrs: { variant: "primary" },
                                        },
                                        [
                                          _vm._v(
                                            "\n                  Post Comment\n                "
                                          ),
                                        ]
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
            {
              staticClass: "blog-sidebar py-2 py-lg-0",
              attrs: { slot: "sidebar" },
              slot: "sidebar",
            },
            [
              _c(
                "b-form-group",
                { staticClass: "blog-search" },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "input-group-merge" },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "search-input",
                          placeholder: "Search here",
                        },
                        model: {
                          value: _vm.search_query,
                          callback: function ($$v) {
                            _vm.search_query = $$v
                          },
                          expression: "search_query",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        {
                          staticClass: "cursor-pointer",
                          attrs: { "is-text": "" },
                        },
                        [_c("feather-icon", { attrs: { icon: "SearchIcon" } })],
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
                { staticClass: "blog-recent-posts mt-3" },
                [
                  _c("h6", { staticClass: "section-label mb-75" }, [
                    _vm._v("\n        Recent Posts\n      "),
                  ]),
                  _vm._v(" "),
                  _vm._l(
                    _vm.blogSidebar.recentPosts,
                    function (recentpost, index) {
                      return _c(
                        "b-media",
                        {
                          key: recentpost.img,
                          class: index ? "mt-2" : "",
                          attrs: { "no-body": "" },
                        },
                        [
                          _c(
                            "b-media-aside",
                            { staticClass: "mr-2" },
                            [
                              _c(
                                "b-link",
                                [
                                  _c("b-img", {
                                    attrs: {
                                      src: recentpost.img,
                                      alt: recentpost.img.slice(6),
                                      width: "100",
                                      rounded: "",
                                      height: "70",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-media-body", [
                            _c(
                              "h6",
                              { staticClass: "blog-recent-post-title" },
                              [
                                _c(
                                  "b-link",
                                  { staticClass: "text-body-heading" },
                                  [
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(recentpost.title) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-muted mb-0" }, [
                              _vm._v(
                                "\n            " +
                                  _vm._s(recentpost.createdTime) +
                                  "\n          "
                              ),
                            ]),
                          ]),
                        ],
                        1
                      )
                    }
                  ),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "blog-categories mt-3" },
                [
                  _c("h6", { staticClass: "section-label mb-1" }, [
                    _vm._v("\n        Categories\n      "),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.blogSidebar.categories, function (category) {
                    return _c(
                      "div",
                      {
                        key: category.icon,
                        staticClass:
                          "d-flex justify-content-start align-items-center mb-75",
                      },
                      [
                        _c(
                          "b-link",
                          [
                            _c(
                              "b-avatar",
                              {
                                staticClass: "mr-75",
                                attrs: {
                                  rounded: "",
                                  size: "32",
                                  variant: _vm.tagsColor(category.category),
                                },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: category.icon, size: "16" },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("b-link", [
                          _c(
                            "div",
                            { staticClass: "blog-category-title text-body" },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(category.category) +
                                  "\n          "
                              ),
                            ]
                          ),
                        ]),
                      ],
                      1
                    )
                  }),
                ],
                2
              ),
            ],
            1
          ),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/blog/BlogDetail.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/pages/blog/BlogDetail.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogDetail_vue_vue_type_template_id_4c5677db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogDetail.vue?vue&type=template&id=4c5677db& */ "./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=template&id=4c5677db&");
/* harmony import */ var _BlogDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BlogDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BlogDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogDetail_vue_vue_type_template_id_4c5677db___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogDetail_vue_vue_type_template_id_4c5677db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/blog/BlogDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=template&id=4c5677db&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=template&id=4c5677db& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_template_id_4c5677db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetail.vue?vue&type=template&id=4c5677db& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/blog/BlogDetail.vue?vue&type=template&id=4c5677db&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_template_id_4c5677db___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_template_id_4c5677db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);