(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _AutoSuggestBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoSuggestBasic.vue */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue");
/* harmony import */ var _AutoSuggestSlot_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoSuggestSlot.vue */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue");
/* harmony import */ var _AutoSuggestSection_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AutoSuggestSection.vue */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue");
/* harmony import */ var _AutoSuggestAjax_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AutoSuggestAjax.vue */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue");
//
//
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
    AutoSuggestBasic: _AutoSuggestBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AutoSuggestSlot: _AutoSuggestSlot_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AutoSuggestSection: _AutoSuggestSection_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AutoSuggestAjax: _AutoSuggestAjax_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_autosuggest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-autosuggest */ "./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/autosuggest/code.js");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable vue/no-unused-components */

/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueAutosuggest: vue_autosuggest__WEBPACK_IMPORTED_MODULE_10__["VueAutosuggest"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCardText"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BAvatar"]
  },
  data: function data() {
    var _this = this;

    return {
      codeAjax: _code__WEBPACK_IMPORTED_MODULE_12__["codeAjax"],
      query: '',
      results: [],
      timeout: null,
      selected: null,
      debounceMilliseconds: 250,
      usersUrl: 'https://jsonplaceholder.typicode.com/users',
      photosUrl: 'https://jsonplaceholder.typicode.com/photos',
      inputProps: {
        id: 'autosuggest__input_ajax',
        placeholder: 'Do you feel lucky, punk?',
        "class": 'form-control',
        name: 'ajax'
      },
      suggestions: [],
      sectionConfigs: {
        destinations: {
          limit: 6,
          label: 'Destination',
          onSelected: function onSelected(selected) {
            _this.selected = selected.item;
          }
        },
        hotels: {
          limit: 6,
          label: 'Hotels',
          onSelected: function onSelected(selected) {
            _this.selected = selected.item;
          }
        }
      }
    };
  },
  methods: {
    fetchResults: function fetchResults() {
      var _this2 = this;

      var query = this.query;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        var photosPromise = axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(_this2.photosUrl);
        var usersPromise = axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(_this2.usersUrl);
        Promise.all([photosPromise, usersPromise]).then(function (values) {
          _this2.suggestions = [];
          _this2.selected = null;

          var photos = _this2.filterResults(values[0].data, query, 'title');

          var users = _this2.filterResults(values[1].data, query, 'name');

          users.length && _this2.suggestions.push({
            name: 'destinations',
            data: users
          });
          photos.length && _this2.suggestions.push({
            name: 'hotels',
            data: photos
          });
        });
      }, this.debounceMilliseconds);
    },
    filterResults: function filterResults(data, text, field) {
      return data.filter(function (item) {
        if (item[field].toLowerCase().indexOf(text.toLowerCase()) > -1) {
          return item[field];
        }

        return false;
      }).sort();
    },
    renderSuggestion: function renderSuggestion(suggestion) {
      var h = this.$createElement;

      if (suggestion.name === 'hotels') {
        var image = suggestion.item;
        return h("div", {
          "class": "d-flex"
        }, [h("div", [h("b-avatar", {
          "attrs": {
            "src": image.thumbnailUrl
          },
          "class": "mr-50"
        })]), h("div", [h("span", [image.title])])]);
      }

      return suggestion.item.name;
    },
    getSuggestionValue: function getSuggestionValue(suggestion) {
      var name = suggestion.name,
          item = suggestion.item;
      return name === 'hotels' ? item.title : item.name;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_autosuggest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-autosuggest */ "./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js");
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/autosuggest/code.js");






//
//
//
//
//
//
//
//
//
//
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
    VueAutosuggest: vue_autosuggest__WEBPACK_IMPORTED_MODULE_6__["VueAutosuggest"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      datasuggest: [],
      filteredOptions: [],
      limit: 10,
      selected: null,
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_8__["codeBasic"]
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('/autosuggest/data').then(function (res) {
      _this.datasuggest = res;
    });
  },
  methods: {
    onInputChange: function onInputChange(text) {
      if (text === '' || text === undefined) {
        return;
      }
      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */


      var filteredDevelopers = this.datasuggest.data[0].developers.filter(function (item) {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      }).slice(0, this.limit);
      var filteredDesigner = this.datasuggest.data[0].designers.filter(function (item) {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      }).slice(0, this.limit);
      var filteredData = filteredDevelopers.concat(filteredDesigner);
      this.filteredOptions = [{
        data: filteredData
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_autosuggest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-autosuggest */ "./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js");
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/autosuggest/code.js");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable vue/no-unused-components */

/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueAutosuggest: vue_autosuggest__WEBPACK_IMPORTED_MODULE_5__["VueAutosuggest"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BAvatar"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCardText"]
  },
  data: function data() {
    var _this = this;

    return {
      codeSection: _code__WEBPACK_IMPORTED_MODULE_8__["codeSection"],
      datasuggest: [],
      query: '',
      suggestions: [],
      selected: null,
      inputProps: {
        id: 'autosuggest__input',
        "class": 'form-control',
        placeholder: "Type 'e'"
      },
      sectionConfigs: {
        developers: {
          limit: 6,
          label: 'Developers',
          onSelected: function onSelected(selected) {
            _this.selected = selected.item;
          }
        },
        pages: {
          limit: 6,
          label: 'Pages',
          onSelected: function onSelected(selected) {
            _this.selected = selected.item;
          }
        }
      },
      limit: 10
    };
  },
  created: function created() {
    var _this2 = this;

    this.$http.get('/autosuggest/data').then(function (res) {
      _this2.datasuggest = res;
    });
  },
  methods: {
    fetchResults: function fetchResults(text) {
      var query = this.query;

      if (query) {
        this.suggestions = [];
      }
      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */


      var filteredDevelopers = this.datasuggest.data[0].developers.filter(function (item) {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      }).slice(0, this.limit);
      var filteredPages = this.datasuggest.data[0].pages.filter(function (item) {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      }).slice(0, this.limit);
      filteredDevelopers.length && this.suggestions.push({
        name: 'developers',
        data: filteredDevelopers
      });
      filteredPages.length && this.suggestions.push({
        name: 'pages',
        data: filteredPages
      });
    },
    renderSuggestion: function renderSuggestion(suggestion) {
      var h = this.$createElement;

      if (suggestion.name === 'developers') {
        var dev = suggestion.item;
        return h("div", {
          "class": "d-flex align-items-center"
        }, [h("b-avatar", {
          "attrs": {
            "src": dev.img
          },
          "class": "mr-50"
        }), h("div", {
          "class": "detail"
        }, [h("b-card-text", {
          "class": "mb-0"
        }, [dev.name]), h("small", {
          "class": "text-muted"
        }, [dev.email])])]);
      }

      if (suggestion.name === 'pages') {
        var page = suggestion.item;
        return h("div", {
          "class": "d-flex align-items-center"
        }, [h("feather-icon", {
          "attrs": {
            "icon": page.icon,
            "size": '18'
          },
          "class": 'mr-75'
        }), h("span", [page.name])]);
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_autosuggest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-autosuggest */ "./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js");
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/autosuggest/code.js");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueAutosuggest: vue_autosuggest__WEBPACK_IMPORTED_MODULE_6__["VueAutosuggest"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCardText"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BAvatar"]
  },
  data: function data() {
    return {
      datasuggest: [],
      filteredOptions: [],
      inputProps: {
        id: 'autosuggest__input',
        "class": 'form-control',
        placeholder: "Type 'e'"
      },
      limit: 10,
      codeSlot: _code__WEBPACK_IMPORTED_MODULE_9__["codeSlot"]
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('/autosuggest/data').then(function (res) {
      _this.datasuggest = res;
    });
  },
  methods: {
    onSelected: function onSelected(option) {
      this.selected = option.item;
    },
    onInputChange: function onInputChange(text) {
      if (text === '' || text === undefined) {
        return;
      }
      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */


      var filteredDevelopers = this.datasuggest.data[0].developers.filter(function (item) {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      }).slice(0, this.limit);
      var filteredDesigner = this.datasuggest.data[0].designers.filter(function (item) {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      }).slice(0, this.limit);
      var filteredData = filteredDevelopers.concat(filteredDesigner);
      this.filteredOptions = [{
        data: filteredData
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".autosuggest__results-container {\n  position: relative;\n  z-index: 999;\n}\n.autosuggest__results-container .autosuggest__results {\n  position: absolute;\n  width: 100%;\n  overflow-y: auto;\n  max-height: 40vh;\n}\n[dir] .autosuggest__results-container .autosuggest__results {\n  background-color: #fff;\n  margin-top: 1rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n}\n[dir] .autosuggest__results-container .autosuggest__results ul {\n  margin-bottom: 0;\n}\n[dir=ltr] .autosuggest__results-container .autosuggest__results ul {\n  padding-left: 0;\n}\n[dir=rtl] .autosuggest__results-container .autosuggest__results ul {\n  padding-right: 0;\n}\n.autosuggest__results-container .autosuggest__results ul li {\n  list-style: none;\n}\n[dir] .autosuggest__results-container .autosuggest__results ul li {\n  padding: 0.75rem 1rem;\n}\n[dir] .autosuggest__results-container .autosuggest__results ul li:hover, [dir] .autosuggest__results-container .autosuggest__results ul li.autosuggest__results-item--highlighted {\n  background: #ededed;\n}\n.autosuggest__results-container .autosuggest__results ul li .detail {\n  line-height: 0.5;\n}\n.autosuggest__results-container .autosuggest__results ul .autosuggest__results-before {\n  color: #4d148c;\n  font-weight: 600;\n}\nbody.dark-layout .autosuggest__results-container .autosuggest__results {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .autosuggest__results-container .autosuggest__results {\n  background-color: #283046;\n}\n[dir] body.dark-layout .autosuggest__results-container .autosuggest__results .autosuggest__results-item--highlighted, [dir] body.dark-layout .autosuggest__results-container .autosuggest__results .autosuggest__results-item:hover, [dir] body.dark-layout .autosuggest__results-container .autosuggest__results .autosuggest__results-before:hover {\n  background-color: #242b3d;\n}\nbody.dark-layout .autosuggest__results-container .autosuggest__results .my-suggestion-item {\n  color: #b4b7bd;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre[data-v-5eb64bae] {\n  min-height: 295px;\n}[dir] pre[data-v-5eb64bae] {\n  padding: 1.5rem;\n  margin-bottom: 0;\n  border-radius: 0.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=template&id=52bbb72e&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=template&id=52bbb72e& ***!
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
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12" } },
        [
          _c("auto-suggest-basic"),
          _vm._v(" "),
          _c("auto-suggest-slot"),
          _vm._v(" "),
          _c("auto-suggest-section"),
          _vm._v(" "),
          _c("auto-suggest-ajax"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=template&id=5eb64bae&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=template&id=5eb64bae&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Ajax" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeAjax) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("vue-autosuggest", {
        ref: "autocomplete",
        attrs: {
          suggestions: _vm.suggestions,
          "input-props": _vm.inputProps,
          "section-configs": _vm.sectionConfigs,
          "render-suggestion": _vm.renderSuggestion,
          "get-suggestion-value": _vm.getSuggestionValue,
        },
        on: { input: _vm.fetchResults },
        model: {
          value: _vm.query,
          callback: function ($$v) {
            _vm.query = $$v
          },
          expression: "query",
        },
      }),
      _vm._v(" "),
      _c("b-card-text", { staticClass: "mt-1" }, [
        _vm._v("\n    Selected element (object):\n  "),
      ]),
      _vm._v(" "),
      _c("b-card", { staticClass: "border", attrs: { "no-body": "" } }, [
        _c("pre", [_vm._v(_vm._s(JSON.stringify(_vm.selected, null, 4)))]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=template&id=5a9c2f16&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=template&id=5a9c2f16& ***!
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
      attrs: { title: "Basic" },
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
      _c("vue-autosuggest", {
        attrs: {
          suggestions: _vm.filteredOptions,
          limit: 10,
          "input-props": {
            id: "autosuggest__input",
            class: "form-control",
            placeholder: "Do you feel lucky?",
          },
        },
        on: { input: _vm.onInputChange },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var suggestion = ref.suggestion
              return [
                _c("span", { staticClass: "my-suggestion-item" }, [
                  _vm._v(_vm._s(suggestion.item.name)),
                ]),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=template&id=ff562028&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=template&id=ff562028& ***!
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
      attrs: { title: "Section" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeSection) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("vue-autosuggest", {
        attrs: {
          suggestions: _vm.suggestions,
          "input-props": _vm.inputProps,
          "section-configs": _vm.sectionConfigs,
          "render-suggestion": _vm.renderSuggestion,
          limit: 10,
        },
        on: { input: _vm.fetchResults },
        model: {
          value: _vm.query,
          callback: function ($$v) {
            _vm.query = $$v
          },
          expression: "query",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=template&id=c01c19f2&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=template&id=c01c19f2& ***!
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
      attrs: { title: "Slot" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeSlot) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("vue-autosuggest", {
        attrs: {
          suggestions: _vm.filteredOptions,
          "input-props": _vm.inputProps,
          "on-selected": _vm.onSelected,
          limit: 10,
        },
        on: { input: _vm.onInputChange },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var suggestion = ref.suggestion
              return [
                _c(
                  "div",
                  { staticClass: "d-flex align-items-center" },
                  [
                    _c("b-avatar", { attrs: { src: suggestion.item.img } }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "detail ml-50" },
                      [
                        _c("b-card-text", { staticClass: "mb-0" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(suggestion.item.name) +
                              "\n          "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(suggestion.item.time) +
                              "\n          "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoSuggest_vue_vue_type_template_id_52bbb72e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoSuggest.vue?vue&type=template&id=52bbb72e& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=template&id=52bbb72e&");
/* harmony import */ var _AutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoSuggest.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutoSuggest_vue_vue_type_template_id_52bbb72e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AutoSuggest_vue_vue_type_template_id_52bbb72e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=template&id=52bbb72e&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=template&id=52bbb72e& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggest_vue_vue_type_template_id_52bbb72e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggest.vue?vue&type=template&id=52bbb72e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggest.vue?vue&type=template&id=52bbb72e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggest_vue_vue_type_template_id_52bbb72e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggest_vue_vue_type_template_id_52bbb72e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoSuggestAjax_vue_vue_type_template_id_5eb64bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoSuggestAjax.vue?vue&type=template&id=5eb64bae&scoped=true& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=template&id=5eb64bae&scoped=true&");
/* harmony import */ var _AutoSuggestAjax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoSuggestAjax.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AutoSuggestAjax_vue_vue_type_style_index_0_id_5eb64bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AutoSuggestAjax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutoSuggestAjax_vue_vue_type_template_id_5eb64bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AutoSuggestAjax_vue_vue_type_template_id_5eb64bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5eb64bae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestAjax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggestAjax.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestAjax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestAjax_vue_vue_type_style_index_0_id_5eb64bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=style&index=0&id=5eb64bae&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestAjax_vue_vue_type_style_index_0_id_5eb64bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestAjax_vue_vue_type_style_index_0_id_5eb64bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestAjax_vue_vue_type_style_index_0_id_5eb64bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestAjax_vue_vue_type_style_index_0_id_5eb64bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=template&id=5eb64bae&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=template&id=5eb64bae&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestAjax_vue_vue_type_template_id_5eb64bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggestAjax.vue?vue&type=template&id=5eb64bae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestAjax.vue?vue&type=template&id=5eb64bae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestAjax_vue_vue_type_template_id_5eb64bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestAjax_vue_vue_type_template_id_5eb64bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoSuggestBasic_vue_vue_type_template_id_5a9c2f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoSuggestBasic.vue?vue&type=template&id=5a9c2f16& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=template&id=5a9c2f16&");
/* harmony import */ var _AutoSuggestBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoSuggestBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AutoSuggestBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutoSuggestBasic_vue_vue_type_template_id_5a9c2f16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AutoSuggestBasic_vue_vue_type_template_id_5a9c2f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggestBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=template&id=5a9c2f16&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=template&id=5a9c2f16& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestBasic_vue_vue_type_template_id_5a9c2f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggestBasic.vue?vue&type=template&id=5a9c2f16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestBasic.vue?vue&type=template&id=5a9c2f16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestBasic_vue_vue_type_template_id_5a9c2f16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestBasic_vue_vue_type_template_id_5a9c2f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoSuggestSection_vue_vue_type_template_id_ff562028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoSuggestSection.vue?vue&type=template&id=ff562028& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=template&id=ff562028&");
/* harmony import */ var _AutoSuggestSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoSuggestSection.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AutoSuggestSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutoSuggestSection_vue_vue_type_template_id_ff562028___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AutoSuggestSection_vue_vue_type_template_id_ff562028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggestSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=template&id=ff562028&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=template&id=ff562028& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestSection_vue_vue_type_template_id_ff562028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggestSection.vue?vue&type=template&id=ff562028& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSection.vue?vue&type=template&id=ff562028&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestSection_vue_vue_type_template_id_ff562028___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestSection_vue_vue_type_template_id_ff562028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoSuggestSlot_vue_vue_type_template_id_c01c19f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoSuggestSlot.vue?vue&type=template&id=c01c19f2& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=template&id=c01c19f2&");
/* harmony import */ var _AutoSuggestSlot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoSuggestSlot.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AutoSuggestSlot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutoSuggestSlot_vue_vue_type_template_id_c01c19f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AutoSuggestSlot_vue_vue_type_template_id_c01c19f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestSlot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggestSlot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestSlot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=template&id=c01c19f2&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=template&id=c01c19f2& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestSlot_vue_vue_type_template_id_c01c19f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoSuggestSlot.vue?vue&type=template&id=c01c19f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/autosuggest/AutoSuggestSlot.vue?vue&type=template&id=c01c19f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestSlot_vue_vue_type_template_id_c01c19f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoSuggestSlot_vue_vue_type_template_id_c01c19f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/autosuggest/code.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/autosuggest/code.js ***!
  \***********************************************************************/
/*! exports provided: codeBasic, codeSlot, codeSection, codeAjax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSlot", function() { return codeSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSection", function() { return codeSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAjax", function() { return codeAjax; });
var codeBasic = "\n<template>\n  <vue-autosuggest\n    :suggestions=\"filteredOptions\"\n    :limit=\"10\"\n    :input-props=\"{id:'autosuggest__input',class:'form-control', placeholder:'Do you feel lucky?'}\"\n    @input=\"onInputChange\"\n  >\n    <template slot-scope=\"{suggestion}\">\n      <span class=\"my-suggestion-item\">{{ suggestion.item.name }}</span>\n    </template>\n  </vue-autosuggest>\n</template>\n\n<script>\nimport { VueAutosuggest } from 'vue-autosuggest'\n\nexport default {\n  components: {\n    VueAutosuggest,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      filteredOptions: [],\n      limit: 10,\n      selected: null,\n    }\n  },\n  created() {\n    this.$http.get('/autosuggest/data')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    onInputChange(text) {\n      if (text === '' || text === undefined) {\n        return\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredDesigner = this.datasuggest.data[0].designers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredData = filteredDevelopers.concat(filteredDesigner)\n      this.filteredOptions = [{\n        data: filteredData,\n      }]\n    },\n  },\n}\n</script>\n";
var codeSlot = "\n<template>\n  <vue-autosuggest\n    :suggestions=\"filteredOptions\"\n    :input-props=\"inputProps\"\n    :on-selected=\"onSelected\"\n    :limit=\"10\"\n    @input=\"onInputChange\"\n  >\n    <template slot-scope=\"{suggestion}\">\n      <div class=\"d-flex align-items-center\">\n        <b-avatar :src=\"suggestion.item.img\" />\n        <div class=\"detail ml-50\">\n          <b-card-text class=\"mb-0\">\n            {{ suggestion.item.name }}\n          </b-card-text>\n          <small class=\"text-muted\">\n            {{ suggestion.item.time }}\n          </small>\n        </div>\n      </div>\n    </template>\n  </vue-autosuggest>\n</template>\n\n<script>\nimport { VueAutosuggest } from 'vue-autosuggest'\nimport { BAvatar, BCardText } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BCardText,\n    BAvatar,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      filteredOptions: [],\n      inputProps: {\n        id: 'autosuggest__input',\n        class: 'form-control',\n        placeholder: \"Type 'e'\",\n      },\n      limit: 10,\n    }\n  },\n  created() {\n    this.$http.get('/autosuggest/data')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    onSelected(option) {\n      this.selected = option.item\n    },\n    onInputChange(text) {\n      if (text === '' || text === undefined) {\n        return\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredDesigner = this.datasuggest.data[0].designers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredData = filteredDevelopers.concat(filteredDesigner)\n      this.filteredOptions = [{\n        data: filteredData,\n      }]\n    },\n  },\n}\n</script>\n";
var codeSection = "\n<template>\n  <vue-autosuggest\n    v-model=\"query\"\n    :suggestions=\"suggestions\"\n    :input-props=\"inputProps\"\n    :section-configs=\"sectionConfigs\"\n    :render-suggestion=\"renderSuggestion\"\n    :limit=\"10\"\n    @input=\"fetchResults\"\n  />\n</template>\n\n<script>\n/* eslint-disable vue/no-unused-components */\n/* eslint no-unused-expressions: [\"error\", { \"allowShortCircuit\": true }] */\nimport { VueAutosuggest } from 'vue-autosuggest'\nimport { BAvatar, BCardText } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BAvatar,\n    BCardText,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      query: '',\n      suggestions: [],\n      selected: null,\n      inputProps: {\n        id: 'autosuggest__input',\n        class: 'form-control',\n        placeholder: \"Type 'e'\",\n      },\n      sectionConfigs: {\n        developers: {\n          limit: 6,\n          label: 'Developers',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n        pages: {\n          limit: 6,\n          label: 'Pages',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n      },\n      limit: 10,\n    }\n  },\n  created() {\n    this.$http.get('/autosuggest/data')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    fetchResults(text) {\n      const { query } = this\n      if (query) {\n        this.suggestions = []\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredPages = this.datasuggest.data[0].pages.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      filteredDevelopers.length && this.suggestions.push({ name: 'developers', data: filteredDevelopers })\n      filteredPages.length && this.suggestions.push({ name: 'pages', data: filteredPages })\n    },\n    renderSuggestion(suggestion) {\n      if (suggestion.name === 'developers') {\n        const dev = suggestion.item\n        return (\n          <div class=\"d-flex align-items-center\">\n            <b-avatar src={dev.img} class=\"mr-50\"></b-avatar>\n            <div class=\"detail\">\n              <b-card-text class=\"mb-0\">{dev.name}</b-card-text>\n              <small class=\"text-muted\">{dev.email}</small>\n            </div>\n          </div>\n        )\n      }\n      if (suggestion.name === 'pages') {\n        const page = suggestion.item\n        return (\n          <div class=\"d-flex align-items-center\">\n            <feather-icon icon={page.icon} size={'18'} class={'mr-75'} />\n            <span>{page.name}</span>\n          </div>\n        )\n      }\n      return false\n    },\n  },\n}\n</script>\n";
var codeAjax = "\n<template>\n  <div>\n    <vue-autosuggest\n      ref=\"autocomplete\"\n      v-model=\"query\"\n      :suggestions=\"suggestions\"\n      :input-props=\"inputProps\"\n      :section-configs=\"sectionConfigs\"\n      :render-suggestion=\"renderSuggestion\"\n      :get-suggestion-value=\"getSuggestionValue\"\n      @input=\"fetchResults\"\n    />\n\n    <b-card-text class=\"mt-1\">\n      Selected element (object):\n    </b-card-text>\n    <b-card\n      class=\"border\"\n      no-body\n    >\n      <pre>{{ JSON.stringify(selected, null, 4) }}</pre>\n    </b-card>\n  </div>\n</template>\n\n<script>\n/* eslint-disable vue/no-unused-components */\n/* eslint no-unused-expressions: [\"error\", { \"allowShortCircuit\": true }] */\nimport { BCard, BCardText, BAvatar } from 'bootstrap-vue'\nimport { VueAutosuggest } from 'vue-autosuggest'\nimport axios from 'axios'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BCard,\n    BCardText,\n    BAvatar,\n  },\n  data() {\n    return {\n      query: '',\n      results: [],\n      timeout: null,\n      selected: null,\n      debounceMilliseconds: 250,\n      usersUrl: 'https://jsonplaceholder.typicode.com/users',\n      photosUrl: 'https://jsonplaceholder.typicode.com/photos',\n      inputProps: {\n        id: 'autosuggest__input_ajax',\n        placeholder: 'Do you feel lucky, punk?',\n        class: 'form-control',\n        name: 'ajax',\n      },\n      suggestions: [],\n      sectionConfigs: {\n        destinations: {\n          limit: 6,\n          label: 'Destination',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n        hotels: {\n          limit: 6,\n          label: 'Hotels',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n      },\n    }\n  },\n  methods: {\n    fetchResults() {\n      const { query } = this\n\n      clearTimeout(this.timeout)\n      this.timeout = setTimeout(() => {\n        const photosPromise = axios.get(this.photosUrl)\n        const usersPromise = axios.get(this.usersUrl)\n\n        Promise.all([photosPromise, usersPromise]).then(values => {\n          this.suggestions = []\n          this.selected = null\n\n          const photos = this.filterResults(values[0].data, query, 'title')\n          const users = this.filterResults(values[1].data, query, 'name')\n          users.length && this.suggestions.push({ name: 'destinations', data: users })\n          photos.length && this.suggestions.push({ name: 'hotels', data: photos })\n        })\n      }, this.debounceMilliseconds)\n    },\n    filterResults(data, text, field) {\n      return data.filter(item => {\n        if (item[field].toLowerCase().indexOf(text.toLowerCase()) > -1) {\n          return item[field]\n        }\n        return false\n      }).sort()\n    },\n    renderSuggestion(suggestion) {\n      if (suggestion.name === 'hotels') {\n        const image = suggestion.item\n        return (\n          <div class=\"d-flex\">\n            <div>\n              <b-avatar src={image.thumbnailUrl} class=\"mr-50\"></b-avatar>\n            </div>\n            <div>\n              <span>{image.title}</span>\n            </div>\n          </div>\n        )\n      }\n      return suggestion.item.name\n    },\n    getSuggestionValue(suggestion) {\n      const { name, item } = suggestion\n      return name === 'hotels' ? item.title : item.name\n    },\n  },\n}\n</script>\n\n<style lang=\"scss\" scoped>\npre{\n  min-height: 295px;\n  padding: 1.5rem;\n  margin-bottom: 0;\n  border-radius: .5rem;\n}\n</style>\n";

/***/ })

}]);