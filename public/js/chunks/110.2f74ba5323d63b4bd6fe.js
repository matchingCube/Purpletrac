(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _QuillEditorSnow_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuillEditorSnow.vue */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue");
/* harmony import */ var _QuillEditorBubble_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuillEditorBubble.vue */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue");
/* harmony import */ var _QuillEditorCustom_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuillEditorCustom.vue */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue");
//
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
    QuillEditorSnow: _QuillEditorSnow_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    QuillEditorBubble: _QuillEditorBubble_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    QuillEditorCustom: _QuillEditorCustom_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/quill-editor/code.js");
//
//
//
//
//
//
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
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeBubble: _code__WEBPACK_IMPORTED_MODULE_3__["codeBubble"],
      editorOption: {
        theme: 'bubble',
        syntax: false,
        modules: {
          toolbar: [['bold', 'italic'], [{
            header: [1, 2, 3, 4, 5, 6, false]
          }], ['link', 'image']]
        }
      },
      content: "<h1 class=\"ql-align-center\">Quill Rich Text Editor</h1>\n                    <p class=\"card-text\"><br /></p>\n                    <p class=\"card-text\">\n                      Quill is a free, <a href=\"https://github.com/quilljs/quill/\">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href=\"http://quilljs.com/docs/modules/\">modular architecture</a> and expressive\n                      <a href=\"http://quilljs.com/docs/api/\">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class=\"card-text\"><br /></p>\n                    <iframe\n                      class=\"ql-video ql-align-center\"\n                      src=\"https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0\"\n                      width=\"560\"\n                      height=\"238\"\n                    ></iframe>\n                    <p class=\"card-text\"><br /></p>\n                    <p class=\"card-text\"><br /></p>\n                    <h2 class=\"ql-align-center\">Getting Started is Easy</h2>\n                    <p class=\"card-text\"><br /></p>\n                    <pre>\n// &lt;link href=\"https://cdn.quilljs.com/1.3.6/quill.snow.css\" rel=\"stylesheet\"&gt;\n// &lt;script src=\"https://cdn.quilljs.com/1.3.6/quill.min.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\nvar quill = new Quill('#editor', {\n    modules: {\n        toolbar: '#toolbar'\n    },\n    theme: 'bubble'\n});\n// Open your browser's developer console to try out the API!</pre>"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/quill-editor/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeCustom: _code__WEBPACK_IMPORTED_MODULE_3__["codeCustom"],
      editorOption: {
        modules: {
          toolbar: '#toolbar'
        }
      },
      content: "<h1 class=\"ql-align-center\">Quill Rich Text Editor</h1>\n                    <p class=\"card-text\"><br /></p>\n                    <p class=\"card-text\">\n                      Quill is a free, <a href=\"https://github.com/quilljs/quill/\">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href=\"http://quilljs.com/docs/modules/\">modular architecture</a> and expressive\n                      <a href=\"http://quilljs.com/docs/api/\">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class=\"card-text\"><br /></p>\n                    <iframe\n                      class=\"ql-video ql-align-center\"\n                      src=\"https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0\"\n                      width=\"560\"\n                      height=\"238\"\n                    ></iframe>\n                    <p class=\"card-text\"><br /></p>\n                    <p class=\"card-text\"><br /></p>\n                    <h2 class=\"ql-align-center\">Getting Started is Easy</h2>\n                    <p class=\"card-text\"><br /></p>\n                    <pre>\n// &lt;link href=\"https://cdn.quilljs.com/1.3.6/quill.snow.css\" rel=\"stylesheet\"&gt;\n// &lt;script src=\"https://cdn.quilljs.com/1.3.6/quill.min.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\nvar quill = new Quill('#editor', {\n    modules: {\n        toolbar: '#toolbar'\n    },\n    theme: 'snow'\n});\n// Open your browser's developer console to try out the API!</pre>"
    };
  },
  methods: {
    customButtonClick: function customButtonClick() {
      // eslint-disable-next-line
      alert('Button clicked!');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/quill-editor/code.js");
//
//
//
//
//
//
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
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeSnow: _code__WEBPACK_IMPORTED_MODULE_3__["codeSnow"],
      snowOption: {
        theme: 'snow'
      },
      content: "<h1 class=\"ql-align-center\">Quill Rich Text Editor</h1>\n                    <p class=\"card-text\"><br /></p>\n                    <p class=\"card-text\">\n                      Quill is a free, <a href=\"https://github.com/quilljs/quill/\">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href=\"http://quilljs.com/docs/modules/\">modular architecture</a> and expressive\n                      <a href=\"http://quilljs.com/docs/api/\">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class=\"card-text\"><br /></p>\n                    <iframe\n                      class=\"ql-video ql-align-center\"\n                      src=\"https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0\"\n                      width=\"560\"\n                      height=\"238\"\n                    ></iframe>\n                    <p class=\"card-text\"><br /></p>\n                    <p class=\"card-text\"><br /></p>\n                    <h2 class=\"ql-align-center\">Getting Started is Easy</h2>\n                    <p class=\"card-text\"><br /></p>\n                    <pre>\n// &lt;link href=\"https://cdn.quilljs.com/1.3.6/quill.snow.css\" rel=\"stylesheet\"&gt;\n// &lt;script src=\"https://cdn.quilljs.com/1.3.6/quill.min.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\nvar quill = new Quill('#editor', {\n    modules: {\n        toolbar: '#toolbar'\n    },\n    theme: 'snow'\n});\n// Open your browser's developer console to try out the API!</pre>"
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../../../node_modules/css-loader!quill/dist/quill.core.css */ "./node_modules/css-loader/index.js!./node_modules/quill/dist/quill.core.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../../node_modules/css-loader!quill/dist/quill.snow.css */ "./node_modules/css-loader/index.js!./node_modules/quill/dist/quill.snow.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../../node_modules/css-loader!quill/dist/quill.bubble.css */ "./node_modules/css-loader/index.js!./node_modules/quill/dist/quill.bubble.css"), "");

// module
exports.push([module.i, "/* Set dropdown font-families */\n.ql-toolbar .ql-font span[data-label=\"Sailec Light\"]::before {\n  font-family: \"Sailec Light\";\n}\n.ql-toolbar .ql-font span[data-label=\"Sofia Pro\"]::before {\n  font-family: \"Sofia\";\n}\n.ql-toolbar .ql-font span[data-label=\"Slabo 27px\"]::before {\n  font-family: \"Slabo 27px\";\n}\n.ql-toolbar .ql-font span[data-label=\"Roboto Slab\"]::before {\n  font-family: \"Roboto Slab\";\n}\n.ql-toolbar .ql-font span[data-label=Inconsolata]::before {\n  font-family: \"Inconsolata\";\n}\n.ql-toolbar .ql-font span[data-label=\"Ubuntu Mono\"]::before {\n  font-family: \"Ubuntu Mono\";\n}\n\n/* Set content font-families */\n.ql-font-sofia {\n  font-family: \"Sofia\";\n}\n.ql-font-slabo {\n  font-family: \"Slabo 27px\";\n}\n.ql-font-roboto {\n  font-family: \"Roboto Slab\";\n}\n.ql-font-inconsolata {\n  font-family: \"Inconsolata\";\n}\n.ql-font-ubuntu {\n  font-family: \"Ubuntu Mono\";\n}\n[dir] .ql-toolbar {\n  border-color: #d8d6de !important;\n}\n.ql-toolbar .ql-formats:focus,\n.ql-toolbar .ql-formats *:focus {\n  outline: 0;\n}\n.ql-toolbar .ql-formats .ql-picker-label:hover, .ql-toolbar .ql-formats .ql-picker-label:focus,\n.ql-toolbar .ql-formats button:hover,\n.ql-toolbar .ql-formats button:focus {\n  color: #4d148c !important;\n}\n.ql-toolbar .ql-formats .ql-picker-label:hover .ql-stroke, .ql-toolbar .ql-formats .ql-picker-label:focus .ql-stroke,\n.ql-toolbar .ql-formats button:hover .ql-stroke,\n.ql-toolbar .ql-formats button:focus .ql-stroke {\n  stroke: #4d148c !important;\n}\n.ql-toolbar .ql-formats .ql-picker-label:hover .ql-fill, .ql-toolbar .ql-formats .ql-picker-label:focus .ql-fill,\n.ql-toolbar .ql-formats button:hover .ql-fill,\n.ql-toolbar .ql-formats button:focus .ql-fill {\n  fill: #4d148c !important;\n}\n.ql-toolbar .ql-formats .ql-picker-label.ql-active,\n.ql-toolbar .ql-formats button.ql-active {\n  color: #4d148c !important;\n}\n.ql-toolbar .ql-formats .ql-picker-item.ql-selected {\n  color: #4d148c !important;\n}\n.ql-toolbar .ql-formats .ql-picker-options .ql-picker-item:hover {\n  color: #4d148c !important;\n}\n.ql-toolbar .ql-formats .ql-picker-options .ql-active {\n  color: #4d148c !important;\n}\n.ql-bubble .ql-picker {\n  color: #fff !important;\n}\n.ql-bubble .ql-stroke {\n  stroke: #fff !important;\n}\n.ql-bubble .ql-fill {\n  fill: #fff !important;\n}\n.ql-container {\n  font-family: \"Montserrat\", Helvetica, Arial, serif;\n}\n[dir] .ql-container {\n  border-color: #d8d6de !important;\n}\n.ql-editor a {\n  color: #4d148c;\n}\n.ql-picker {\n  color: #5e5873 !important;\n}\n.ql-stroke {\n  stroke: #5e5873 !important;\n}\n.ql-active .ql-stroke {\n  stroke: #4d148c !important;\n}\n.ql-active .ql-fill {\n  fill: #4d148c !important;\n}\n.ql-fill {\n  fill: #5e5873 !important;\n}\n[dir=ltr] .ql-toolbar, [dir=ltr] .ql-container {\n  border-top-right-radius: 0.357rem;\n  border-top-left-radius: 0.357rem;\n}\n[dir=rtl] .ql-toolbar, [dir=rtl] .ql-container {\n  border-top-left-radius: 0.357rem;\n  border-top-right-radius: 0.357rem;\n}\n[dir=ltr] .ql-toolbar + .ql-container, [dir=ltr] .ql-container + .ql-toolbar {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n  border-top-right-radius: unset;\n  border-top-left-radius: unset;\n}\n[dir=rtl] .ql-toolbar + .ql-container, [dir=rtl] .ql-container + .ql-toolbar {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}\n[dir] .dark-layout .quill-toolbar, [dir] .dark-layout .ql-toolbar {\n  background-color: #283046;\n  border-color: #3b4253 !important;\n}\n.dark-layout .quill-toolbar .ql-picker,\n.dark-layout .ql-toolbar .ql-picker {\n  color: #fff !important;\n}\n.dark-layout .quill-toolbar .ql-stroke,\n.dark-layout .ql-toolbar .ql-stroke {\n  stroke: #fff !important;\n}\n.dark-layout .quill-toolbar .ql-fill,\n.dark-layout .ql-toolbar .ql-fill {\n  fill: #fff !important;\n}\n[dir] .dark-layout .quill-toolbar .ql-picker-options, [dir] .dark-layout .quill-toolbar .ql-picker-label, [dir] .dark-layout .ql-toolbar .ql-picker-options, [dir] .dark-layout .ql-toolbar .ql-picker-label {\n  background-color: #283046;\n}\n.dark-layout .quill-toolbar .ql-picker-options .ql-active,\n.dark-layout .quill-toolbar .ql-picker-label .ql-active,\n.dark-layout .ql-toolbar .ql-picker-options .ql-active,\n.dark-layout .ql-toolbar .ql-picker-label .ql-active {\n  color: #4d148c !important;\n}\n.dark-layout .ql-active .ql-stroke {\n  stroke: #4d148c !important;\n}\n.dark-layout .ql-active .ql-fill {\n  fill: #4d148c !important;\n}\n[dir] .dark-layout .ql-bubble .ql-toolbar {\n  background: #3b4253;\n  border-radius: 2rem;\n}\n[dir] .dark-layout .ql-container {\n  border-color: #3b4253 !important;\n  background-color: #283046;\n}\n[dir] .dark-layout .ql-editor .ql-syntax {\n  background-color: #161d31;\n}\n.dark-layout .ql-editor.ql-blank:before {\n  color: #b4b7bd;\n}\n[dir=ltr] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) i, [dir=ltr] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  left: auto !important;\n  right: 0;\n}\n[dir=rtl] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) i, [dir=rtl] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  right: auto !important;\n  left: 0;\n}\n.quill-editor .ql-toolbar a,\n.quill-editor .ql-toolbar button:hover,\n.quill-editor .ql-toolbar .ql-picker:hover,\n.quill-editor .ql-editor a,\n.quill-editor .ql-editor button:hover,\n.quill-editor .ql-editor .ql-picker:hover {\n  color: #4d148c;\n}\n.quill-editor .ql-toolbar a .ql-fill,\n.quill-editor .ql-toolbar button:hover .ql-fill,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-fill,\n.quill-editor .ql-editor a .ql-fill,\n.quill-editor .ql-editor button:hover .ql-fill,\n.quill-editor .ql-editor .ql-picker:hover .ql-fill {\n  fill: #4d148c;\n}\n.quill-editor .ql-toolbar a .ql-stroke,\n.quill-editor .ql-toolbar button:hover .ql-stroke,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-stroke,\n.quill-editor .ql-editor a .ql-stroke,\n.quill-editor .ql-editor button:hover .ql-stroke,\n.quill-editor .ql-editor .ql-picker:hover .ql-stroke {\n  stroke: #4d148c;\n}\n.quill-editor .ql-toolbar a .ql-picker-label:hover,\n.quill-editor .ql-toolbar button:hover .ql-picker-label:hover,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-picker-label:hover,\n.quill-editor .ql-editor a .ql-picker-label:hover,\n.quill-editor .ql-editor button:hover .ql-picker-label:hover,\n.quill-editor .ql-editor .ql-picker:hover .ql-picker-label:hover {\n  color: #4d148c;\n}\n.quill-editor .ql-toolbar a .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-toolbar button:hover .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-editor a .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-editor button:hover .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-editor .ql-picker:hover .ql-picker-label:hover .ql-stroke {\n  stroke: #4d148c;\n}\n[dir=ltr] .quill-editor .ql-toolbar, [dir=ltr] .quill-editor .ql-container {\n  border-top-right-radius: 0.357rem;\n  border-top-left-radius: 0.357rem;\n}\n[dir=rtl] .quill-editor .ql-toolbar, [dir=rtl] .quill-editor .ql-container {\n  border-top-left-radius: 0.357rem;\n  border-top-right-radius: 0.357rem;\n}\n[dir=ltr] .quill-editor .ql-toolbar + .ql-container, [dir=ltr] .ql-container + .quill-editor .ql-toolbar {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n  border-top-right-radius: unset;\n  border-top-left-radius: unset;\n}\n[dir=rtl] .quill-editor .ql-toolbar + .ql-container, [dir=rtl] .ql-container + .quill-editor .ql-toolbar {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=template&id=17b4577a&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=template&id=17b4577a& ***!
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
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12" } },
        [
          _c("quill-editor-snow"),
          _vm._v(" "),
          _c("quill-editor-bubble"),
          _vm._v(" "),
          _c("quill-editor-custom"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=template&id=40dfdeb4&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=template&id=40dfdeb4& ***!
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
      attrs: { title: "Bubble Editor" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeBubble) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [_vm._v("Bubble is a simple tooltip based theme.")]),
      _vm._v(" "),
      _c("quill-editor", {
        attrs: { options: _vm.editorOption },
        model: {
          value: _vm.content,
          callback: function ($$v) {
            _vm.content = $$v
          },
          expression: "content",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=template&id=778ced0b&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=template&id=778ced0b& ***!
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
      attrs: { title: "Custom Toolbar" },
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
        _vm._v("You have freedom to create your own custom toolbar"),
      ]),
      _vm._v(" "),
      _c(
        "quill-editor",
        {
          attrs: { options: _vm.editorOption },
          model: {
            value: _vm.content,
            callback: function ($$v) {
              _vm.content = $$v
            },
            expression: "content",
          },
        },
        [
          _c(
            "div",
            { attrs: { slot: "toolbar", id: "toolbar" }, slot: "toolbar" },
            [
              _c("button", { staticClass: "ql-bold" }, [
                _vm._v("\n        Bold\n      "),
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "ql-italic" }, [
                _vm._v("\n        Italic\n      "),
              ]),
              _vm._v(" "),
              _c("select", { staticClass: "ql-size" }, [
                _c("option", { attrs: { value: "small" } }),
                _vm._v(" "),
                _c("option", { attrs: { selected: "" } }),
                _vm._v(" "),
                _c("option", { attrs: { value: "large" } }),
                _vm._v(" "),
                _c("option", { attrs: { value: "huge" } }),
              ]),
              _vm._v(" "),
              _c("select", { staticClass: "ql-font" }, [
                _c("option", { attrs: { selected: "selected" } }),
                _vm._v(" "),
                _c("option", { attrs: { value: "serif" } }),
                _vm._v(" "),
                _c("option", { attrs: { value: "monospace" } }),
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "ql-script",
                attrs: { value: "sub" },
              }),
              _vm._v(" "),
              _c("button", {
                staticClass: "ql-script",
                attrs: { value: "super" },
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "w-auto btn btn-primary",
                  on: { click: _vm.customButtonClick },
                },
                [_vm._v("\n        Click here\n      ")]
              ),
            ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=template&id=4198f29d&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=template&id=4198f29d& ***!
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
      attrs: { title: "Snow Editor" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeSnow) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-text", [_vm._v("Snow is a clean, flat toolbar theme")]),
      _vm._v(" "),
      _c("quill-editor", {
        attrs: { options: _vm.snowOption },
        model: {
          value: _vm.content,
          callback: function ($$v) {
            _vm.content = $$v
          },
          expression: "content",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuillEditor_vue_vue_type_template_id_17b4577a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuillEditor.vue?vue&type=template&id=17b4577a& */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=template&id=17b4577a&");
/* harmony import */ var _QuillEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuillEditor.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuillEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuillEditor.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuillEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuillEditor_vue_vue_type_template_id_17b4577a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuillEditor_vue_vue_type_template_id_17b4577a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=template&id=17b4577a&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=template&id=17b4577a& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_template_id_17b4577a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditor.vue?vue&type=template&id=17b4577a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditor.vue?vue&type=template&id=17b4577a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_template_id_17b4577a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_template_id_17b4577a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuillEditorBubble_vue_vue_type_template_id_40dfdeb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuillEditorBubble.vue?vue&type=template&id=40dfdeb4& */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=template&id=40dfdeb4&");
/* harmony import */ var _QuillEditorBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuillEditorBubble.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuillEditorBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuillEditorBubble_vue_vue_type_template_id_40dfdeb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuillEditorBubble_vue_vue_type_template_id_40dfdeb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditorBubble.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=template&id=40dfdeb4&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=template&id=40dfdeb4& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorBubble_vue_vue_type_template_id_40dfdeb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditorBubble.vue?vue&type=template&id=40dfdeb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorBubble.vue?vue&type=template&id=40dfdeb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorBubble_vue_vue_type_template_id_40dfdeb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorBubble_vue_vue_type_template_id_40dfdeb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuillEditorCustom_vue_vue_type_template_id_778ced0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuillEditorCustom.vue?vue&type=template&id=778ced0b& */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=template&id=778ced0b&");
/* harmony import */ var _QuillEditorCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuillEditorCustom.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuillEditorCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuillEditorCustom_vue_vue_type_template_id_778ced0b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuillEditorCustom_vue_vue_type_template_id_778ced0b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditorCustom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=template&id=778ced0b&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=template&id=778ced0b& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorCustom_vue_vue_type_template_id_778ced0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditorCustom.vue?vue&type=template&id=778ced0b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorCustom.vue?vue&type=template&id=778ced0b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorCustom_vue_vue_type_template_id_778ced0b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorCustom_vue_vue_type_template_id_778ced0b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuillEditorSnow_vue_vue_type_template_id_4198f29d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuillEditorSnow.vue?vue&type=template&id=4198f29d& */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=template&id=4198f29d&");
/* harmony import */ var _QuillEditorSnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuillEditorSnow.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuillEditorSnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuillEditorSnow_vue_vue_type_template_id_4198f29d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuillEditorSnow_vue_vue_type_template_id_4198f29d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorSnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditorSnow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorSnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=template&id=4198f29d&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=template&id=4198f29d& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorSnow_vue_vue_type_template_id_4198f29d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditorSnow.vue?vue&type=template&id=4198f29d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/quill-editor/QuillEditorSnow.vue?vue&type=template&id=4198f29d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorSnow_vue_vue_type_template_id_4198f29d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorSnow_vue_vue_type_template_id_4198f29d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/quill-editor/code.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/quill-editor/code.js ***!
  \************************************************************************/
/*! exports provided: codeBubble, codeSnow, codeCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBubble", function() { return codeBubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSnow", function() { return codeSnow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeCustom", function() { return codeCustom; });
var codeBubble = "\n<template>\n  <div>\n    <quill-editor\n      v-model=\"content\"\n      :options=\"editorOption\"\n    />\n  </div>\n</template>\n\n<script>\nimport { quillEditor } from 'vue-quill-editor'\n\n// eslint-disable-next-line\nimport 'quill/dist/quill.core.css'\n// eslint-disable-next-line\nimport 'quill/dist/quill.snow.css'\n// eslint-disable-next-line\nimport 'quill/dist/quill.bubble.css'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    editorOption: {\n      theme: 'bubble',\n    },\n    content: `<h2><span>Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href=\"https://github.com/quilljs/quill/\">open source</a> WYSIWYG editor built for the modern web. With its <a href=\"http://quilljs.com/docs/modules/\">modular architecture</a> and expressive <a href=\"http://quilljs.com/docs/api/\">API</a>.</p><br />\n<iframe class=\"ql-video\" src=\"https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0\" width=\"560\" height=\"238\"></iframe>`,\n  }),\n}\n</script>\n";
var codeSnow = "\n<template>\n  <quill-editor\n    v-model=\"content\"\n    :options=\"snowOption\"\n  />\n</template>\n\n<script>\n// eslint-disable-next-line\nimport 'quill/dist/quill.core.css'\n// eslint-disable-next-line\nimport 'quill/dist/quill.snow.css'\n// eslint-disable-next-line\nimport 'quill/dist/quill.bubble.css'\n\nimport { quillEditor } from 'vue-quill-editor'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    content: `<h1>Quill Rich Text Editor</h1>\n  <p>Quill is a free, <a href=\"https://github.com/quilljs/quill/\">open source</a> WYSIWYG editor built for the modern web. With its <a href=\"http://quilljs.com/docs/modules/\">modular architecture</a> and expressive <a href=\"http://quilljs.com/docs/api/\">API</a>, it is completely customizable to fit any need.</p>\n  <iframe class=\"ql-video\" src=\"https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0\" width=\"560\" height=\"238\"></iframe>\n  <p><br></p>\n  <h2>Getting Started is Easy</h2>\n  <p><br></p>\n  <pre>\n// &lt;link href=\"https://cdn.quilljs.com/1.0.5/quill.snow.css\" rel=\"stylesheet\"&gt;\n// &lt;script src=\"https://cdn.quilljs.com/1.0.5/quill.min.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\n  var quill = new Quill('#editor', {\n  modules: {\n  toolbar: '#toolbar'\n  },\n  theme: 'snow'\n  });\n// Open your browser's developer console to try out the API!</pre>  `,\n  }),\n}\n</script>\n";
var codeCustom = "\n<template>\n  <div>\n    <quill-editor\n      v-model=\"content\"\n      :options=\"editorOption\"\n      >\n      <div\n        id=\"toolbar\"\n        slot=\"toolbar\"\n      >\n        <!-- Add a bold button -->\n        <button class=\"ql-bold\">\n          Bold\n        </button>\n        <button class=\"ql-italic\">\n          Italic\n        </button>\n\n        <!-- Add font size dropdown -->\n        <select class=\"ql-size\">\n          <option value=\"small\" />\n          <!-- Note a missing, thus falsy value, is used to reset to default -->\n          <option selected />\n          <option value=\"large\" />\n          <option value=\"huge\" />\n        </select>\n\n        <select class=\"ql-font\">\n          <option selected=\"selected\" />\n          <option value=\"serif\" />\n          <option value=\"monospace\" />\n        </select>\n\n        <!-- Add subscript and superscript buttons -->\n        <button\n          class=\"ql-script\"\n          value=\"sub\"\n        />\n        <button\n          class=\"ql-script\"\n          value=\"super\"\n        />\n\n        <!-- You can also add your own -->\n        <button\n          style=\"width:auto\"\n          @click=\"customButtonClick\"\n        >\n          Click here\n        </button>\n      </div>\n    </quill-editor>\n  </div>\n</template>\n\n<script>\n// eslint-disable-next-line\nimport 'quill/dist/quill.core.css'\n// eslint-disable-next-line\nimport 'quill/dist/quill.snow.css'\n// eslint-disable-next-line\nimport 'quill/dist/quill.bubble.css'\nimport { quillEditor } from 'vue-quill-editor'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    editorOption: {\n      modules: {\n        toolbar: '#toolbar',\n      },\n    },\n    content: `<h2><span class=\"ql-font-serif\">Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href=\"https://github.com/quilljs/quill/\">open source</a> WYSIWYG editor built for the modern web. With its <a href=\"http://quilljs.com/docs/modules/\">modular architecture</a> and expressive <a href=\"http://quilljs.com/docs/api/\">API</a>, it is completely customizable to fit any need.</p><br />\n<iframe class=\"ql-video\" src=\"https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0\" width=\"560\" height=\"238\"></iframe>`,\n  }),\n  methods: {\n    customButtonClick() {\n      alert('Button clicked!')\n    },\n  },\n}\n</script>\n";

/***/ })

}]);