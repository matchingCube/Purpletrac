(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/Table.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/Table.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _TableBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableBasic.vue */ "./resources/js/src/views/table/bs-table/TableBasic.vue");
/* harmony import */ var _TableStyleOptions_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableStyleOptions.vue */ "./resources/js/src/views/table/bs-table/TableStyleOptions.vue");
/* harmony import */ var _TableRowColStyle_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableRowColStyle.vue */ "./resources/js/src/views/table/bs-table/TableRowColStyle.vue");
/* harmony import */ var _TableResponsive_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableResponsive.vue */ "./resources/js/src/views/table/bs-table/TableResponsive.vue");
/* harmony import */ var _TableFormatterCallback_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TableFormatterCallback.vue */ "./resources/js/src/views/table/bs-table/TableFormatterCallback.vue");
/* harmony import */ var _TableCustomRender_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TableCustomRender.vue */ "./resources/js/src/views/table/bs-table/TableCustomRender.vue");
/* harmony import */ var _TableStickyColumnsHeaders_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableStickyColumnsHeaders.vue */ "./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue");
/* harmony import */ var _TableRowdetailsSupport_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableRowdetailsSupport.vue */ "./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue");
/* harmony import */ var _TableRowSelectSupport_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TableRowSelectSupport.vue */ "./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue");
/* harmony import */ var _TableLightWeight_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableLightWeight.vue */ "./resources/js/src/views/table/bs-table/TableLightWeight.vue");
/* harmony import */ var _TableSimple_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TableSimple.vue */ "./resources/js/src/views/table/bs-table/TableSimple.vue");
/* harmony import */ var _TableKitchenSink_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TableKitchenSink.vue */ "./resources/js/src/views/table/bs-table/TableKitchenSink.vue");
//
//
//
//
//
//
//
//
//
//
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
    TableBasic: _TableBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TableStyleOptions: _TableStyleOptions_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TableRowColStyle: _TableRowColStyle_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TableResponsive: _TableResponsive_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TableFormatterCallback: _TableFormatterCallback_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    TableCustomRender: _TableCustomRender_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    TableStickyColumnsHeaders: _TableStickyColumnsHeaders_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    TableRowdetailsSupport: _TableRowdetailsSupport_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    TableRowSelectSupport: _TableRowSelectSupport_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    TableLightWeight: _TableLightWeight_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    TableSimple: _TableSimple_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    TableKitchenSink: _TableKitchenSink_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
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
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"]
  },
  data: function data() {
    return {
      items: [{
        age: 40,
        first_name: 'Dickerson',
        last_name: 'Macdonald',
        Occupation: 'Job'
      }, {
        age: 21,
        first_name: 'Larsen',
        last_name: 'Shaw',
        Occupation: 'Job'
      }, {
        age: 89,
        first_name: 'Geneva',
        last_name: 'Wilson',
        Occupation: 'Bussiness'
      }, {
        age: 38,
        first_name: 'Jami',
        last_name: 'Carney',
        Occupation: 'Bussiness'
      }, {
        age: 40,
        first_name: 'James',
        last_name: 'Thomson',
        Occupation: 'Job'
      }],
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_2__["codeBasic"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BProgress: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BProgress"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  data: function data() {
    return {
      fields: [// A virtual column that doesn't exist in items
      'index', // A column that needs custom formatting
      {
        key: 'name',
        label: 'Name'
      }, 'Category', // A regular column
      {
        key: 'Popularity',
        label: 'Popularity'
      }, // A regular column
      {
        key: 'order_status',
        label: 'Order Status'
      }, // A virtual column made up from two fields
      {
        key: 'price',
        label: 'Price'
      }],
      items: [{
        name: {
          first: 'Fitbit',
          last: 'Activity Tracker'
        },
        Category: 'Fitness',
        order_status: {
          status: 'Delivered',
          variant: 'success'
        },
        Popularity: {
          value: 50,
          variant: 'success'
        },
        price: 99.99
      }, {
        name: {
          first: 'Fitbit ',
          last: 'Flex Wireless Activity'
        },
        Category: 'Fitness',
        order_status: {
          status: 'Pending',
          variant: 'primary'
        },
        Popularity: {
          value: 36,
          variant: 'primary'
        },
        price: 89.85
      }, {
        name: {
          first: 'Fitbit',
          last: 'Sleep Tracker Wristband'
        },
        Category: 'Fitness',
        order_status: {
          status: 'Delivered',
          variant: 'success'
        },
        Popularity: {
          value: 76,
          variant: 'success'
        },
        price: 65.25
      }, {
        name: {
          first: 'Fitbit',
          last: 'Sleep Wristband'
        },
        Category: 'Fitness',
        order_status: {
          status: 'On Hold',
          variant: 'warning'
        },
        Popularity: {
          value: 55,
          variant: 'warning'
        },
        price: 75.55
      }, {
        name: {
          first: 'Fitbit',
          last: 'Clip for Zip Wireless Activity Trackers'
        },
        Category: 'Fitness',
        order_status: {
          status: 'Canceled',
          variant: 'danger'
        },
        Popularity: {
          value: 75,
          variant: 'danger'
        },
        price: 105.55
      }],
      codeDataRendering: _code__WEBPACK_IMPORTED_MODULE_2__["codeDataRendering"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTable"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BLink"]
  },
  data: function data() {
    return {
      fields: [{
        key: 'name',
        label: 'Full Name',
        formatter: function formatter(value) {
          return "".concat(value.first, " ").concat(value.last);
        }
      }, // A regular column
      'age', {
        // A regular column with custom formatter
        key: 'sex',
        formatter: function formatter(value) {
          return value.charAt(0).toUpperCase();
        }
      }, {
        // A virtual column with custom formatter
        key: 'birthYear',
        label: 'Birth Year',
        formatter: function formatter(value, key, item) {
          return new Date().getFullYear() - item.age;
        }
      }],
      items: [{
        name: {
          first: 'John',
          last: 'Doe'
        },
        sex: 'Male',
        age: 42
      }, {
        name: {
          first: 'Clemens',
          last: 'Doe'
        },
        sex: 'Female',
        age: 36
      }, {
        name: {
          first: 'Rubin',
          last: 'Kincade'
        },
        sex: 'male',
        age: 73
      }, {
        name: {
          first: 'Shirley',
          last: 'Partridge'
        },
        sex: 'female',
        age: 62
      }, {
        name: {
          first: 'Olenka',
          last: 'Brawley'
        },
        sex: 'female',
        age: 26
      }],
      codeFormatterCallback: _code__WEBPACK_IMPORTED_MODULE_4__["codeFormatterCallback"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BBadge"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormGroup"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormSelect"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BPagination"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BInputGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormInput"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BInputGroupAppend"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BButton"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCardBody"]
  },
  data: function data() {
    return {
      perPage: 5,
      pageOptions: [3, 5, 10],
      totalRows: 1,
      currentPage: 1,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      fields: [{
        key: 'id',
        label: 'Id'
      }, {
        key: 'avatar',
        label: 'Avatar'
      }, {
        key: 'full_name',
        label: 'Full Name',
        sortable: true
      }, {
        key: 'post',
        label: 'Post',
        sortable: true
      }, 'email', 'city', 'start_date', 'salary', 'age', 'experience', {
        key: 'status',
        label: 'Status',
        sortable: true
      }],

      /* eslint-disable global-require */
      items: [{
        id: 1,
        avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
        full_name: "Korrie O'Crevy",
        post: 'Nuclear Power Engineer',
        email: 'kocrevy0@thetimes.co.uk',
        city: 'Krasnosilka',
        start_date: '09/23/2016',
        salary: '$23896.35',
        age: '61',
        experience: '1 Year',
        status: 2
      }, {
        id: 2,
        avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
        full_name: 'Bailie Coulman',
        post: 'VP Quality Control',
        email: 'bcoulman1@yolasite.com',
        city: 'Hinigaran',
        start_date: '05/20/2018',
        salary: '$13633.69',
        age: '63',
        experience: '3 Years',
        status: 2
      }, {
        id: 3,
        avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
        full_name: 'Stella Ganderton',
        post: 'Operator',
        email: 'sganderton2@tuttocitta.it',
        city: 'Golcowa',
        start_date: '03/24/2018',
        salary: '$13076.28',
        age: '66',
        experience: '6 Years',
        status: 5
      }, {
        id: 4,
        avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
        full_name: 'Dorolice Crossman',
        post: 'Cost Accountant',
        email: 'dcrossman3@google.co.jp',
        city: 'Paquera',
        start_date: '12/03/2017',
        salary: '$12336.17',
        age: '22',
        experience: '2 Years',
        status: 2
      }, {
        id: 5,
        avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
        full_name: 'Harmonia Nisius',
        post: 'Senior Cost Accountant',
        email: 'hnisius4@gnu.org',
        city: 'Lucan',
        start_date: '08/25/2017',
        salary: '$10909.52',
        age: '33',
        experience: '3 Years',
        status: 2
      }, {
        id: 6,
        avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
        full_name: 'Genevra Honeywood',
        post: 'Geologist',
        email: 'ghoneywood5@narod.ru',
        city: 'Maofan',
        start_date: '06/01/2017',
        salary: '$17803.80',
        age: '61',
        experience: '1 Year',
        status: 1
      }, {
        id: 7,
        avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
        full_name: 'Eileen Diehn',
        post: 'Environmental Specialist',
        email: 'ediehn6@163.com',
        city: 'Lampuyang',
        start_date: '10/15/2017',
        salary: '$18991.67',
        age: '59',
        experience: '9 Years',
        status: 3
      }, {
        id: 8,
        avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
        full_name: 'Richardo Aldren',
        post: 'Senior Sales Associate',
        email: 'raldren7@mtv.com',
        city: 'Skoghall',
        start_date: '11/05/2016',
        salary: '$19230.13',
        age: '55',
        experience: '5 Years',
        status: 3
      }, {
        id: 9,
        avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
        full_name: 'Allyson Moakler',
        post: 'Safety Technician',
        email: 'amoakler8@shareasale.com',
        city: 'Mogilany',
        start_date: '12/29/2018',
        salary: '$11677.32',
        age: '39',
        experience: '9 Years',
        status: 5
      }, {
        id: 10,
        avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
        full_name: 'Merline Penhalewick',
        post: 'Junior Executive',
        email: 'mpenhalewick9@php.net',
        city: 'Kanuma',
        start_date: '04/19/2019',
        salary: '$15939.52',
        age: '23',
        experience: '3 Years',
        status: 2
      }],

      /* eslint-disable global-require */
      status: [{
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied'
      }, {
        1: 'light-primary',
        2: 'light-success',
        3: 'light-danger',
        4: 'light-warning',
        5: 'light-info'
      }],
      codeKitchenSink: _code__WEBPACK_IMPORTED_MODULE_6__["codeKitchenSink"]
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    }
  },
  mounted: function mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info: function info(item, index, button) {
      this.infoModal.title = "Row index: ".concat(index);
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    resetInfoModal: function resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.content = '';
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
//
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
    BTableLite: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTableLite"]
  },
  data: function data() {
    return {
      items: [{
        age: 40,
        first_name: 'Dickerson',
        last_name: 'Macdonald',
        Occupation: 'Job'
      }, {
        age: 21,
        first_name: 'Larsen',
        last_name: 'Shaw',
        Occupation: 'Job'
      }, {
        age: 89,
        first_name: 'Geneva',
        last_name: 'Wilson',
        Occupation: 'Bussiness'
      }, {
        age: 38,
        first_name: 'Jami',
        last_name: 'Carney',
        Occupation: 'Bussiness'
      }, {
        age: 40,
        first_name: 'James',
        last_name: 'Thomson',
        Occupation: 'Job'
      }],
      codeLight: _code__WEBPACK_IMPORTED_MODULE_2__["codeLight"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"]
  },
  data: function data() {
    return {
      fields: ['id', 'first_name', 'email', 'gender', 'ip_address', {
        key: 'Phone',
        label: 'Phone'
      }, 'Country'],
      items: [{
        id: '1',
        first_name: 'Marybelle',
        last_name: 'Della Scala',
        email: 'mdellascala0@opensource.org',
        gender: 'Female',
        ip_address: '85.254.7.181',
        Phone: '+86 350 673 7985',
        Country: 'China'
      }, {
        id: '2',
        first_name: 'Octavia',
        last_name: 'Tohill',
        email: 'otohill1@google.co.jp',
        gender: 'Female',
        ip_address: '93.70.144.212',
        Phone: '+63 938 283 0018',
        Country: 'Philippines'
      }, {
        id: '3',
        first_name: 'Jennie',
        last_name: 'Geroldi',
        email: 'jgeroldi2@slideshare.net',
        gender: 'Female',
        ip_address: '76.145.147.212',
        Phone: '+81 235 674 0110',
        Country: 'Japan'
      }, {
        id: '4',
        first_name: 'Vanya',
        last_name: 'Wharby',
        email: 'vwharby3@mozilla.org',
        gender: 'Male',
        ip_address: '139.234.247.155',
        Phone: '+30 349 556 7375',
        Country: 'Greece'
      }, {
        id: '5',
        first_name: 'Olenka',
        last_name: 'Brawley',
        email: 'obrawleyc@adobe.com',
        gender: 'Female',
        ip_address: '166.183.163.155',
        Phone: '+62 841 824 0990',
        Country: 'Indonesia'
      }],
      codeResponsive: _code__WEBPACK_IMPORTED_MODULE_2__["codeResponsive"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
//
//
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
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"]
  },
  data: function data() {
    return {
      fields: ['first_name', 'last_name', {
        key: 'age',
        variant: 'success'
      }],
      items: [{
        age: 40,
        first_name: 'Dickerson',
        last_name: 'Macdonald',
        status: 'awesome'
      }, {
        age: 21,
        first_name: 'Larsen',
        last_name: 'Shaw'
      }, {
        age: 89,
        first_name: 'Geneva',
        last_name: 'Wilson'
      }, {
        age: 89,
        first_name: 'Olenka',
        last_name: 'Brawley'
      }, {
        age: 89,
        first_name: 'Vernon',
        last_name: 'Perford'
      }],
      codeRowColStyle: _code__WEBPACK_IMPORTED_MODULE_2__["codeRowColStyle"]
    };
  },
  methods: {
    rowClass: function rowClass(item, type) {
      var colorClass = 'table-success';

      if (!item || type !== 'row') {
        return;
      } // eslint-disable-next-line consistent-return


      if (item.status === 'awesome') {
        return colorClass;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      modes: ['multi', 'single', 'range'],
      fields: ['id', {
        key: 'avatar',
        label: 'Avatar'
      }, 'full_name', 'post', 'email', 'city', 'start_date', 'salary', 'age', 'experience', {
        key: 'status',
        label: 'Status'
      }],

      /* eslint-disable global-require */
      items: [{
        id: 1,
        avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
        full_name: "Korrie O'Crevy",
        post: 'Nuclear Power Engineer',
        email: 'kocrevy0@thetimes.co.uk',
        city: 'Krasnosilka',
        start_date: '09/23/2016',
        salary: '$23896.35',
        age: '61',
        experience: '1 Year',
        status: 2
      }, {
        id: 2,
        avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
        full_name: 'Bailie Coulman',
        post: 'VP Quality Control',
        email: 'bcoulman1@yolasite.com',
        city: 'Hinigaran',
        start_date: '05/20/2018',
        salary: '$13633.69',
        age: '63',
        experience: '3 Years',
        status: 2
      }, {
        id: 3,
        avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
        full_name: 'Stella Ganderton',
        post: 'Operator',
        email: 'sganderton2@tuttocitta.it',
        city: 'Golcowa',
        start_date: '03/24/2018',
        salary: '$13076.28',
        age: '66',
        experience: '6 Years',
        status: 5
      }, {
        id: 4,
        avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
        full_name: 'Dorolice Crossman',
        post: 'Cost Accountant',
        email: 'dcrossman3@google.co.jp',
        city: 'Paquera',
        start_date: '12/03/2017',
        salary: '$12336.17',
        age: '22',
        experience: '2 Years',
        status: 2
      }, {
        id: 5,
        avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
        full_name: 'Harmonia Nisius',
        post: 'Senior Cost Accountant',
        email: 'hnisius4@gnu.org',
        city: 'Lucan',
        start_date: '08/25/2017',
        salary: '$10909.52',
        age: '33',
        experience: '3 Years',
        status: 2
      }, {
        id: 6,
        avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
        full_name: 'Genevra Honeywood',
        post: 'Geologist',
        email: 'ghoneywood5@narod.ru',
        city: 'Maofan',
        start_date: '06/01/2017',
        salary: '$17803.80',
        age: '61',
        experience: '1 Year',
        status: 1
      }, {
        id: 7,
        avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
        full_name: 'Eileen Diehn',
        post: 'Environmental Specialist',
        email: 'ediehn6@163.com',
        city: 'Lampuyang',
        start_date: '10/15/2017',
        salary: '$18991.67',
        age: '59',
        experience: '9 Years',
        status: 3
      }, {
        id: 8,
        avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
        full_name: 'Richardo Aldren',
        post: 'Senior Sales Associate',
        email: 'raldren7@mtv.com',
        city: 'Skoghall',
        start_date: '11/05/2016',
        salary: '$19230.13',
        age: '55',
        experience: '5 Years',
        status: 3
      }, {
        id: 9,
        avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
        full_name: 'Allyson Moakler',
        post: 'Safety Technician',
        email: 'amoakler8@shareasale.com',
        city: 'Mogilany',
        start_date: '12/29/2018',
        salary: '$11677.32',
        age: '39',
        experience: '9 Years',
        status: 5
      }, {
        id: 10,
        avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
        full_name: 'Merline Penhalewick',
        post: 'Junior Executive',
        email: 'mpenhalewick9@php.net',
        city: 'Kanuma',
        start_date: '04/19/2019',
        salary: '$15939.52',
        age: '23',
        experience: '3 Years',
        status: 2
      }],

      /* eslint-disable global-require */
      status: [{
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied'
      }, {
        1: 'light-primary',
        2: 'light-success',
        3: 'light-danger',
        4: 'light-warning',
        5: 'light-info'
      }],
      selectMode: 'multi',
      selected: [],
      codeRowSelectSupport: _code__WEBPACK_IMPORTED_MODULE_4__["codeRowSelectSupport"]
    };
  },
  methods: {
    onRowSelected: function onRowSelected(items) {
      this.selected = items;
    },
    selectAllRows: function selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected: function clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    selectThirdRow: function selectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.selectRow(2);
    },
    unselectThirdRow: function unselectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.unselectRow(2);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"]
  },
  data: function data() {
    return {
      fields: ['show_details', 'id', {
        key: 'avatar',
        label: 'Avatar'
      }, 'full_name', 'post', 'email', 'city', 'start_date', 'salary', 'age', 'experience', {
        key: 'status',
        label: 'Status'
      }],

      /* eslint-disable global-require */
      items: [{
        id: 1,
        avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
        full_name: "Korrie O'Crevy",
        post: 'Nuclear Power Engineer',
        email: 'kocrevy0@thetimes.co.uk',
        city: 'Krasnosilka',
        start_date: '09/23/2016',
        salary: '$23896.35',
        age: '61',
        experience: '1 Year',
        status: 2
      }, {
        id: 2,
        avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
        full_name: 'Bailie Coulman',
        post: 'VP Quality Control',
        email: 'bcoulman1@yolasite.com',
        city: 'Hinigaran',
        start_date: '05/20/2018',
        salary: '$13633.69',
        age: '63',
        experience: '3 Years',
        status: 2
      }, {
        id: 3,
        avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
        full_name: 'Stella Ganderton',
        post: 'Operator',
        email: 'sganderton2@tuttocitta.it',
        city: 'Golcowa',
        start_date: '03/24/2018',
        salary: '$13076.28',
        age: '66',
        experience: '6 Years',
        status: 5
      }, {
        id: 4,
        avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
        full_name: 'Dorolice Crossman',
        post: 'Cost Accountant',
        email: 'dcrossman3@google.co.jp',
        city: 'Paquera',
        start_date: '12/03/2017',
        salary: '$12336.17',
        age: '22',
        experience: '2 Years',
        status: 2
      }, {
        id: 5,
        avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
        full_name: 'Harmonia Nisius',
        post: 'Senior Cost Accountant',
        email: 'hnisius4@gnu.org',
        city: 'Lucan',
        start_date: '08/25/2017',
        salary: '$10909.52',
        age: '33',
        experience: '3 Years',
        status: 2
      }, {
        id: 6,
        avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
        full_name: 'Genevra Honeywood',
        post: 'Geologist',
        email: 'ghoneywood5@narod.ru',
        city: 'Maofan',
        start_date: '06/01/2017',
        salary: '$17803.80',
        age: '61',
        experience: '1 Year',
        status: 1
      }, {
        id: 7,
        avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
        full_name: 'Eileen Diehn',
        post: 'Environmental Specialist',
        email: 'ediehn6@163.com',
        city: 'Lampuyang',
        start_date: '10/15/2017',
        salary: '$18991.67',
        age: '59',
        experience: '9 Years',
        status: 3
      }, {
        id: 8,
        avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
        full_name: 'Richardo Aldren',
        post: 'Senior Sales Associate',
        email: 'raldren7@mtv.com',
        city: 'Skoghall',
        start_date: '11/05/2016',
        salary: '$19230.13',
        age: '55',
        experience: '5 Years',
        status: 3
      }, {
        id: 9,
        avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
        full_name: 'Allyson Moakler',
        post: 'Safety Technician',
        email: 'amoakler8@shareasale.com',
        city: 'Mogilany',
        start_date: '12/29/2018',
        salary: '$11677.32',
        age: '39',
        experience: '9 Years',
        status: 5
      }, {
        id: 10,
        avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
        full_name: 'Merline Penhalewick',
        post: 'Junior Executive',
        email: 'mpenhalewick9@php.net',
        city: 'Kanuma',
        start_date: '04/19/2019',
        salary: '$15939.52',
        age: '23',
        experience: '3 Years',
        status: 2
      }],

      /* eslint-disable global-require */
      status: [{
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied'
      }, {
        1: 'light-primary',
        2: 'light-success',
        3: 'light-danger',
        4: 'light-warning',
        5: 'light-info'
      }],
      codeRowDetailsSupport: _code__WEBPACK_IMPORTED_MODULE_2__["codeRowDetailsSupport"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTableSimple: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTableSimple"],
    BThead: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BThead"],
    BTr: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTr"],
    BTh: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTh"],
    BTd: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTd"],
    BTbody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTbody"],
    BTfoot: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTfoot"]
  },
  data: function data() {
    return {
      codeSimple: _code__WEBPACK_IMPORTED_MODULE_2__["codeSimple"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  data: function data() {
    return {
      stickyHeader: true,
      noCollapse: false,
      fields: [{
        key: 'id',
        stickyColumn: true,
        isRowHeader: true,
        variant: 'primary'
      }, {
        key: 'avatar',
        label: 'Avatar'
      }, 'full_name', {
        key: 'post',
        stickyColumn: true,
        variant: 'info'
      }, 'email', 'city', 'start_date', 'salary', 'age', 'experience', {
        key: 'status',
        label: 'Status'
      }],

      /* eslint-disable global-require */
      items: [{
        id: 1,
        avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
        full_name: "Korrie O'Crevy",
        post: 'Nuclear Power Engineer',
        email: 'kocrevy0@thetimes.co.uk',
        city: 'Krasnosilka',
        start_date: '09/23/2016',
        salary: '$23896.35',
        age: '61',
        experience: '1 Year',
        status: 2
      }, {
        id: 2,
        avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
        full_name: 'Bailie Coulman',
        post: 'VP Quality Control',
        email: 'bcoulman1@yolasite.com',
        city: 'Hinigaran',
        start_date: '05/20/2018',
        salary: '$13633.69',
        age: '63',
        experience: '3 Years',
        status: 2
      }, {
        id: 3,
        avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
        full_name: 'Stella Ganderton',
        post: 'Operator',
        email: 'sganderton2@tuttocitta.it',
        city: 'Golcowa',
        start_date: '03/24/2018',
        salary: '$13076.28',
        age: '66',
        experience: '6 Years',
        status: 5
      }, {
        id: 4,
        avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
        full_name: 'Dorolice Crossman',
        post: 'Cost Accountant',
        email: 'dcrossman3@google.co.jp',
        city: 'Paquera',
        start_date: '12/03/2017',
        salary: '$12336.17',
        age: '22',
        experience: '2 Years',
        status: 2
      }, {
        id: 5,
        avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
        full_name: 'Harmonia Nisius',
        post: 'Senior Cost Accountant',
        email: 'hnisius4@gnu.org',
        city: 'Lucan',
        start_date: '08/25/2017',
        salary: '$10909.52',
        age: '33',
        experience: '3 Years',
        status: 2
      }, {
        id: 6,
        avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
        full_name: 'Genevra Honeywood',
        post: 'Geologist',
        email: 'ghoneywood5@narod.ru',
        city: 'Maofan',
        start_date: '06/01/2017',
        salary: '$17803.80',
        age: '61',
        experience: '1 Year',
        status: 1
      }, {
        id: 7,
        avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
        full_name: 'Eileen Diehn',
        post: 'Environmental Specialist',
        email: 'ediehn6@163.com',
        city: 'Lampuyang',
        start_date: '10/15/2017',
        salary: '$18991.67',
        age: '59',
        experience: '9 Years',
        status: 3
      }, {
        id: 8,
        avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
        full_name: 'Richardo Aldren',
        post: 'Senior Sales Associate',
        email: 'raldren7@mtv.com',
        city: 'Skoghall',
        start_date: '11/05/2016',
        salary: '$19230.13',
        age: '55',
        experience: '5 Years',
        status: 3
      }, {
        id: 9,
        avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
        full_name: 'Allyson Moakler',
        post: 'Safety Technician',
        email: 'amoakler8@shareasale.com',
        city: 'Mogilany',
        start_date: '12/29/2018',
        salary: '$11677.32',
        age: '39',
        experience: '9 Years',
        status: 5
      }, {
        id: 10,
        avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
        full_name: 'Merline Penhalewick',
        post: 'Junior Executive',
        email: 'mpenhalewick9@php.net',
        city: 'Kanuma',
        start_date: '04/19/2019',
        salary: '$15939.52',
        age: '23',
        experience: '3 Years',
        status: 2
      }],

      /* eslint-disable global-require */
      status: [{
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied'
      }, {
        1: 'light-primary',
        2: 'light-success',
        3: 'light-danger',
        4: 'light-warning',
        5: 'light-info'
      }],
      codeSticky: _code__WEBPACK_IMPORTED_MODULE_2__["codeSticky"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormRadio"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormRadioGroup"]
  },
  data: function data() {
    return {
      fields: ['first_name', 'last_name', 'age'],
      items: [{
        age: 40,
        first_name: 'Dickerson',
        last_name: 'Macdonald'
      }, {
        age: 21,
        first_name: 'Larsen',
        last_name: 'Shaw'
      }, {
        age: 89,
        first_name: 'Geneva',
        last_name: 'Wilson'
      }, {
        age: 89,
        first_name: 'Olenka',
        last_name: 'Brawley'
      }, {
        age: 89,
        first_name: 'Vernon',
        last_name: 'Perford'
      }],
      tableVariants: ['none', 'primary', 'secondary', 'info', 'danger', 'warning', 'success', 'light', 'dark'],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: 'none',
      noCollapse: false,
      codeStyleOption: _code__WEBPACK_IMPORTED_MODULE_3__["codeStyleOption"]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/Table.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/Table.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n}\n[dir] .vs__dropdown-option:hover {\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #4d148c !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(77, 20, 140, 0.12);\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n}\n[dir] .vs__dropdown-option--disabled:hover {\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #4d148c;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #4d148c !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #4d148c;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #4d148c !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #4d148c;\n  border-bottom-color: #4d148c;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #4d148c;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(77, 20, 140, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".b-table-selectable .feather {\n  font-size: 1.3rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/Table.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/Table.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/Table.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/Table.vue?vue&type=template&id=14f61bc8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/Table.vue?vue&type=template&id=14f61bc8& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          _c("table-basic"),
          _vm._v(" "),
          _c("table-style-options"),
          _vm._v(" "),
          _c("table-row-col-style"),
          _vm._v(" "),
          _c("table-responsive"),
          _vm._v(" "),
          _c("table-formatter-callback"),
          _vm._v(" "),
          _c("table-custom-render"),
          _vm._v(" "),
          _c("table-sticky-columns-headers"),
          _vm._v(" "),
          _c("table-rowdetails-support"),
          _vm._v(" "),
          _c("table-row-select-support"),
          _vm._v(" "),
          _c("table-kitchen-sink"),
          _vm._v(" "),
          _c("table-light-weight"),
          _vm._v(" "),
          _c("table-simple"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=template&id=980a9abc&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=template&id=980a9abc& ***!
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
    "b-card-code",
    {
      attrs: { "no-body": "", title: "Basic Table" },
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
    [_c("b-table", { attrs: { responsive: "sm", items: _vm.items } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=template&id=cf3fb5ba&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=template&id=cf3fb5ba& ***!
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
      attrs: { title: "Custom data rendering", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeDataRendering) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-table", {
        staticClass: "mb-0",
        attrs: { fields: _vm.fields, items: _vm.items, responsive: "" },
        scopedSlots: _vm._u([
          {
            key: "cell(index)",
            fn: function (data) {
              return [_vm._v("\n      " + _vm._s(data.index + 1) + "\n    ")]
            },
          },
          {
            key: "cell(name)",
            fn: function (data) {
              return [
                _c("span", { staticClass: "text-nowrap" }, [
                  _vm._v(_vm._s(data.value.first + " - " + data.value.last)),
                ]),
              ]
            },
          },
          {
            key: "cell(Popularity)",
            fn: function (data) {
              return [
                _c("b-progress", {
                  attrs: {
                    value: data.value.value,
                    max: "100",
                    height: "7px",
                    variant: data.value.variant,
                    striped: "",
                  },
                }),
              ]
            },
          },
          {
            key: "cell(order_status)",
            fn: function (data) {
              return [
                _c(
                  "b-badge",
                  { attrs: { pill: "", variant: data.value.variant } },
                  [
                    _vm._v(
                      "\n        " + _vm._s(data.value.status) + "\n      "
                    ),
                  ]
                ),
              ]
            },
          },
          {
            key: "cell(price)",
            fn: function (data) {
              return [_vm._v("\n      " + _vm._s("$" + data.value) + "\n    ")]
            },
          },
          {
            key: "cell()",
            fn: function (data) {
              return [_vm._v("\n      " + _vm._s(data.value) + "\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=template&id=cf7c51ba&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=template&id=cf7c51ba& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Formatter callback", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [
              _vm._v("\n    " + _vm._s(_vm.codeFormatterCallback) + "\n  "),
            ]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-table", {
        attrs: { fields: _vm.fields, items: _vm.items, responsive: "" },
        scopedSlots: _vm._u([
          {
            key: "cell(name)",
            fn: function (data) {
              return [
                _c(
                  "b-link",
                  {
                    attrs: {
                      href:
                        "#" + data.value.replace(/[^a-z]+/i, "-").toLowerCase(),
                    },
                  },
                  [_vm._v("\n        " + _vm._s(data.value) + "\n      ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=template&id=62d8c54b&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=template&id=62d8c54b& ***!
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
      attrs: { title: "Table Kitchen Sink", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeKitchenSink) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-card-body", [
        _c(
          "div",
          { staticClass: "d-flex justify-content-between  flex-wrap" },
          [
            _c(
              "b-form-group",
              {
                staticClass: "mr-1 mb-md-0",
                attrs: {
                  label: "Sort",
                  "label-size": "sm",
                  "label-align-sm": "left",
                  "label-cols-sm": "2",
                  "label-for": "sortBySelect",
                },
              },
              [
                _c(
                  "b-input-group",
                  { attrs: { size: "sm" } },
                  [
                    _c("b-form-select", {
                      attrs: { id: "sortBySelect", options: _vm.sortOptions },
                      scopedSlots: _vm._u([
                        {
                          key: "first",
                          fn: function () {
                            return [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v(
                                  "\n                none\n              "
                                ),
                              ]),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                      model: {
                        value: _vm.sortBy,
                        callback: function ($$v) {
                          _vm.sortBy = $$v
                        },
                        expression: "sortBy",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "b-form-select",
                      {
                        attrs: { size: "sm", disabled: !_vm.sortBy },
                        model: {
                          value: _vm.sortDesc,
                          callback: function ($$v) {
                            _vm.sortDesc = $$v
                          },
                          expression: "sortDesc",
                        },
                      },
                      [
                        _c("option", { domProps: { value: false } }, [
                          _vm._v("\n              Asc\n            "),
                        ]),
                        _vm._v(" "),
                        _c("option", { domProps: { value: true } }, [
                          _vm._v("\n              Desc\n            "),
                        ]),
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
              "b-form-group",
              {
                staticClass: "mb-0",
                attrs: {
                  label: "Filter",
                  "label-cols-sm": "2",
                  "label-align-sm": "left",
                  "label-size": "sm",
                  "label-for": "filterInput",
                },
              },
              [
                _c(
                  "b-input-group",
                  { attrs: { size: "sm" } },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "filterInput",
                        type: "search",
                        placeholder: "Type to Search",
                      },
                      model: {
                        value: _vm.filter,
                        callback: function ($$v) {
                          _vm.filter = $$v
                        },
                        expression: "filter",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "b-input-group-append",
                      [
                        _c(
                          "b-button",
                          {
                            attrs: { disabled: !_vm.filter },
                            on: {
                              click: function ($event) {
                                _vm.filter = ""
                              },
                            },
                          },
                          [_vm._v("\n              Clear\n            ")]
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
      ]),
      _vm._v(" "),
      _c("b-table", {
        staticClass: "position-relative",
        attrs: {
          striped: "",
          hover: "",
          responsive: "",
          "per-page": _vm.perPage,
          "current-page": _vm.currentPage,
          items: _vm.items,
          fields: _vm.fields,
          "sort-by": _vm.sortBy,
          "sort-desc": _vm.sortDesc,
          "sort-direction": _vm.sortDirection,
          filter: _vm.filter,
          "filter-included-fields": _vm.filterOn,
        },
        on: {
          "update:sortBy": function ($event) {
            _vm.sortBy = $event
          },
          "update:sort-by": function ($event) {
            _vm.sortBy = $event
          },
          "update:sortDesc": function ($event) {
            _vm.sortDesc = $event
          },
          "update:sort-desc": function ($event) {
            _vm.sortDesc = $event
          },
          filtered: _vm.onFiltered,
        },
        scopedSlots: _vm._u([
          {
            key: "cell(avatar)",
            fn: function (data) {
              return [_c("b-avatar", { attrs: { src: data.value } })]
            },
          },
          {
            key: "cell(status)",
            fn: function (data) {
              return [
                _c(
                  "b-badge",
                  { attrs: { variant: _vm.status[1][data.value] } },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.status[0][data.value]) +
                        "\n      "
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "b-card-body",
        { staticClass: "d-flex justify-content-between flex-wrap pt-0" },
        [
          _c(
            "b-form-group",
            {
              staticClass: "text-nowrap mb-md-0 mr-1",
              attrs: {
                label: "Per Page",
                "label-cols": "6",
                "label-align": "left",
                "label-size": "sm",
                "label-for": "sortBySelect",
              },
            },
            [
              _c("b-form-select", {
                attrs: {
                  id: "perPageSelect",
                  size: "sm",
                  inline: "",
                  options: _vm.pageOptions,
                },
                model: {
                  value: _vm.perPage,
                  callback: function ($$v) {
                    _vm.perPage = $$v
                  },
                  expression: "perPage",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("b-pagination", {
                staticClass: "mb-0",
                attrs: {
                  "total-rows": _vm.totalRows,
                  "per-page": _vm.perPage,
                  "first-number": "",
                  "last-number": "",
                  "prev-class": "prev-item",
                  "next-class": "next-item",
                },
                scopedSlots: _vm._u([
                  {
                    key: "prev-text",
                    fn: function () {
                      return [
                        _c("feather-icon", {
                          attrs: { icon: "ChevronLeftIcon", size: "18" },
                        }),
                      ]
                    },
                    proxy: true,
                  },
                  {
                    key: "next-text",
                    fn: function () {
                      return [
                        _c("feather-icon", {
                          attrs: { icon: "ChevronRightIcon", size: "18" },
                        }),
                      ]
                    },
                    proxy: true,
                  },
                ]),
                model: {
                  value: _vm.currentPage,
                  callback: function ($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage",
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=template&id=aebef6bc&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=template&id=aebef6bc& ***!
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
      attrs: { title: "Table Light Component", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeLight) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-table-lite", {
        attrs: { hover: "", responsive: "", items: _vm.items },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=template&id=6a4654f0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=template&id=6a4654f0& ***!
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
      attrs: { title: "Table Responsive", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeResponsive) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-table", {
        staticClass: "mb-0",
        attrs: { responsive: "", items: _vm.items, fields: _vm.fields },
        scopedSlots: _vm._u([
          {
            key: "cell(Phone)",
            fn: function (data) {
              return [
                _c("span", { staticClass: "text-nowrap" }, [
                  _vm._v("\n        " + _vm._s(data.value) + "\n      "),
                ]),
              ]
            },
          },
          {
            key: "cell()",
            fn: function (data) {
              return [_vm._v("\n      " + _vm._s(data.value) + "\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=template&id=77d15a02&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=template&id=77d15a02& ***!
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
      attrs: { title: "Row & Col Style Option", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeRowColStyle) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-table", {
        staticClass: "rounded-bottom",
        attrs: {
          items: _vm.items,
          fields: _vm.fields,
          "tbody-tr-class": _vm.rowClass,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=template&id=56099135&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=template&id=56099135& ***!
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
      attrs: { title: "Row select support", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [
              _vm._v("\n    " + _vm._s(_vm.codeRowSelectSupport) + "\n  "),
            ]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-card-body",
        [
          _c(
            "b-form-group",
            {
              staticClass: "mb-0",
              attrs: {
                label: "Selection mode:",
                "label-cols-md": "3",
                "label-align-sm": "right",
              },
            },
            [
              _c("v-select", {
                attrs: {
                  dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                  label: "title",
                  options: _vm.modes,
                },
                model: {
                  value: _vm.selectMode,
                  callback: function ($$v) {
                    _vm.selectMode = $$v
                  },
                  expression: "selectMode",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        ref: "selectableTable",
        staticClass: "mb-0",
        attrs: {
          selectable: "",
          "select-mode": _vm.selectMode,
          items: _vm.items,
          fields: _vm.fields,
          responsive: "",
        },
        on: { "row-selected": _vm.onRowSelected },
        scopedSlots: _vm._u([
          {
            key: "cell(avatar)",
            fn: function (data) {
              return [_c("b-avatar", { attrs: { src: data.value } })]
            },
          },
          {
            key: "cell(status)",
            fn: function (data) {
              return [
                _c(
                  "b-badge",
                  { attrs: { variant: _vm.status[1][data.value] } },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.status[0][data.value]) +
                        "\n      "
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "b-card-body",
        { staticClass: "demo-inline-spacing pt-0" },
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
              on: { click: _vm.selectAllRows },
            },
            [_vm._v("\n      Select all\n    ")]
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
              on: { click: _vm.clearSelected },
            },
            [_vm._v("\n      Clear selected\n    ")]
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
              on: { click: _vm.selectThirdRow },
            },
            [_vm._v("\n      Select 3rd row\n    ")]
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
              on: { click: _vm.unselectThirdRow },
            },
            [_vm._v("\n      Unselect 3rd row\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=template&id=9851e90a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=template&id=9851e90a& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Row details support", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [
              _vm._v("\n    " + _vm._s(_vm.codeRowDetailsSupport) + "\n  "),
            ]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "div",
        [
          _c("b-table", {
            staticClass: "mb-0",
            attrs: {
              items: _vm.items,
              fields: _vm.fields,
              striped: "",
              responsive: "",
            },
            scopedSlots: _vm._u([
              {
                key: "cell(show_details)",
                fn: function (row) {
                  return [
                    _c(
                      "b-form-checkbox",
                      {
                        on: { change: row.toggleDetails },
                        model: {
                          value: row.detailsShowing,
                          callback: function ($$v) {
                            _vm.$set(row, "detailsShowing", $$v)
                          },
                          expression: "row.detailsShowing",
                        },
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(row.detailsShowing ? "Hide" : "Show") +
                            "\n        "
                        ),
                      ]
                    ),
                  ]
                },
              },
              {
                key: "row-details",
                fn: function (row) {
                  return [
                    _c(
                      "b-card",
                      [
                        _c(
                          "b-row",
                          { staticClass: "mb-2" },
                          [
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("Full Name : ")]),
                                _vm._v(
                                  _vm._s(row.item.full_name) + "\n            "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("Post : ")]),
                                _vm._v(
                                  _vm._s(row.item.post) + "\n            "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("Email : ")]),
                                _vm._v(
                                  _vm._s(row.item.email) + "\n            "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("City : ")]),
                                _vm._v(
                                  _vm._s(row.item.city) + "\n            "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("Salary : ")]),
                                _vm._v(
                                  _vm._s(row.item.salary) + "\n            "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("Age : ")]),
                                _vm._v(_vm._s(row.item.age) + "\n            "),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            attrs: { size: "sm", variant: "outline-secondary" },
                            on: { click: row.toggleDetails },
                          },
                          [_vm._v("\n            Hide Details\n          ")]
                        ),
                      ],
                      1
                    ),
                  ]
                },
              },
              {
                key: "cell(avatar)",
                fn: function (data) {
                  return [_c("b-avatar", { attrs: { src: data.value } })]
                },
              },
              {
                key: "cell(status)",
                fn: function (data) {
                  return [
                    _c(
                      "b-badge",
                      { attrs: { variant: _vm.status[1][data.value] } },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.status[0][data.value]) +
                            "\n        "
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=template&id=88b3b824&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=template&id=88b3b824& ***!
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
      attrs: { title: "Table Simple Component", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeSimple) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-table-simple",
        {
          staticClass: "rounded-bottom mb-0",
          attrs: { hover: "", "caption-top": "", responsive: "" },
        },
        [
          _c(
            "b-thead",
            { attrs: { "head-variant": "light" } },
            [
              _c(
                "b-tr",
                [
                  _c("b-th", { attrs: { colspan: "2" } }, [
                    _vm._v("\n          Region\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-th", { attrs: { colspan: "3" } }, [
                    _vm._v("\n          Clothes\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-th", { attrs: { colspan: "2" } }, [
                    _vm._v("\n          Accessories\n        "),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tr",
                [
                  _c("b-th", [_vm._v("Country")]),
                  _vm._v(" "),
                  _c("b-th", [_vm._v("City")]),
                  _vm._v(" "),
                  _c("b-th", [_vm._v("Trousers")]),
                  _vm._v(" "),
                  _c("b-th", [_vm._v("Skirts")]),
                  _vm._v(" "),
                  _c("b-th", [_vm._v("Dresses")]),
                  _vm._v(" "),
                  _c("b-th", [_vm._v("Bracelets")]),
                  _vm._v(" "),
                  _c("b-th", [_vm._v("Rings")]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tbody",
            [
              _c(
                "b-tr",
                [
                  _c("b-th", { attrs: { rowspan: "3" } }, [
                    _vm._v("\n          Belgium\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-th", { staticClass: "text-right" }, [
                    _vm._v("\n          Antwerp\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("56")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("22")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("43")]),
                  _vm._v(" "),
                  _c("b-td", { attrs: { variant: "success" } }, [
                    _vm._v("\n          72\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("23")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tr",
                [
                  _c("b-th", { staticClass: "text-right" }, [
                    _vm._v("\n          Gent\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("46")]),
                  _vm._v(" "),
                  _c("b-td", { attrs: { variant: "warning" } }, [
                    _vm._v("\n          18\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("50")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("61")]),
                  _vm._v(" "),
                  _c("b-td", { attrs: { variant: "danger" } }, [
                    _vm._v("\n          15\n        "),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tr",
                [
                  _c("b-th", { staticClass: "text-right" }, [
                    _vm._v("\n          Brussels\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("51")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("27")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("38")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("69")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("28")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tr",
                [
                  _c("b-th", { attrs: { rowspan: "2" } }, [
                    _vm._v("\n          The Netherlands\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-th", { staticClass: "text-right" }, [
                    _vm._v("\n          Amsterdam\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-td", { attrs: { variant: "success" } }, [
                    _vm._v("\n          89\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("34")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("69")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("85")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("38")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tr",
                [
                  _c("b-th", { staticClass: "text-right" }, [
                    _vm._v("\n          Utrecht\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("80")]),
                  _vm._v(" "),
                  _c("b-td", { attrs: { variant: "danger" } }, [
                    _vm._v("\n          12\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("43")]),
                  _vm._v(" "),
                  _c("b-td", [_vm._v("36")]),
                  _vm._v(" "),
                  _c("b-td", { attrs: { variant: "warning" } }, [
                    _vm._v("\n          19\n        "),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tfoot",
            [
              _c(
                "b-tr",
                [
                  _c(
                    "b-td",
                    {
                      staticClass: "text-right",
                      attrs: { colspan: "7", variant: "secondary" },
                    },
                    [_vm._v("\n          Total Rows: "), _c("b", [_vm._v("5")])]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=template&id=2df0fb24&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=template&id=2df0fb24& ***!
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
      attrs: { title: "Sticky columns and headers", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeSticky) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-card-body",
        [
          _c(
            "b-form-checkbox",
            {
              attrs: { inline: "" },
              model: {
                value: _vm.stickyHeader,
                callback: function ($$v) {
                  _vm.stickyHeader = $$v
                },
                expression: "stickyHeader",
              },
            },
            [_vm._v("\n      Sticky header\n    ")]
          ),
          _vm._v(" "),
          _c(
            "b-form-checkbox",
            {
              attrs: { inline: "" },
              model: {
                value: _vm.noCollapse,
                callback: function ($$v) {
                  _vm.noCollapse = $$v
                },
                expression: "noCollapse",
              },
            },
            [_vm._v("\n      No border collapse\n    ")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        staticClass: "mb-0",
        attrs: {
          "sticky-header": _vm.stickyHeader,
          "no-border-collapse": _vm.noCollapse,
          responsive: "",
          items: _vm.items,
          fields: _vm.fields,
        },
        scopedSlots: _vm._u([
          {
            key: "head(id)",
            fn: function () {
              return [
                _c("div", { staticClass: "text-nowrap" }, [
                  _vm._v("\n        Row ID\n      "),
                ]),
              ]
            },
            proxy: true,
          },
          {
            key: "head()",
            fn: function (scope) {
              return [
                _c("div", { staticClass: "text-nowrap" }, [
                  _vm._v("\n        " + _vm._s(scope.label) + "\n      "),
                ]),
              ]
            },
          },
          {
            key: "cell(avatar)",
            fn: function (data) {
              return [
                _c("b-avatar", {
                  staticClass: "mr-1",
                  attrs: { src: data.value },
                }),
              ]
            },
          },
          {
            key: "cell(status)",
            fn: function (data) {
              return [
                _c(
                  "b-badge",
                  { attrs: { variant: _vm.status[1][data.value] } },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.status[0][data.value]) +
                        "\n      "
                    ),
                  ]
                ),
              ]
            },
          },
          {
            key: "cell()",
            fn: function (data) {
              return [
                _c("span", { staticClass: "text-nowrap" }, [
                  _vm._v(_vm._s(data.value)),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=template&id=0d85d969&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=template&id=0d85d969& ***!
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
      attrs: { title: "Table Style Option", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeStyleOption) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "b-card-body",
        [
          _c("b-form-group", [
            _c("label", { staticClass: "mb-0" }, [_vm._v("Table Options")]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "demo-inline-spacing" },
              [
                _c(
                  "b-form-checkbox",
                  {
                    model: {
                      value: _vm.striped,
                      callback: function ($$v) {
                        _vm.striped = $$v
                      },
                      expression: "striped",
                    },
                  },
                  [_vm._v("\n          Striped\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "b-form-checkbox",
                  {
                    model: {
                      value: _vm.bordered,
                      callback: function ($$v) {
                        _vm.bordered = $$v
                      },
                      expression: "bordered",
                    },
                  },
                  [_vm._v("\n          Bordered\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "b-form-checkbox",
                  {
                    model: {
                      value: _vm.borderless,
                      callback: function ($$v) {
                        _vm.borderless = $$v
                      },
                      expression: "borderless",
                    },
                  },
                  [_vm._v("\n          Borderless\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "b-form-checkbox",
                  {
                    model: {
                      value: _vm.outlined,
                      callback: function ($$v) {
                        _vm.outlined = $$v
                      },
                      expression: "outlined",
                    },
                  },
                  [_vm._v("\n          Outlined\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "b-form-checkbox",
                  {
                    model: {
                      value: _vm.small,
                      callback: function ($$v) {
                        _vm.small = $$v
                      },
                      expression: "small",
                    },
                  },
                  [_vm._v("\n          Small\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "b-form-checkbox",
                  {
                    model: {
                      value: _vm.hover,
                      callback: function ($$v) {
                        _vm.hover = $$v
                      },
                      expression: "hover",
                    },
                  },
                  [_vm._v("\n          Hover\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "b-form-checkbox",
                  {
                    model: {
                      value: _vm.dark,
                      callback: function ($$v) {
                        _vm.dark = $$v
                      },
                      expression: "dark",
                    },
                  },
                  [_vm._v("\n          Dark\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "b-form-checkbox",
                  {
                    model: {
                      value: _vm.fixed,
                      callback: function ($$v) {
                        _vm.fixed = $$v
                      },
                      expression: "fixed",
                    },
                  },
                  [_vm._v("\n          Fixed\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "b-form-checkbox",
                  {
                    model: {
                      value: _vm.footClone,
                      callback: function ($$v) {
                        _vm.footClone = $$v
                      },
                      expression: "footClone",
                    },
                  },
                  [_vm._v("\n          Foot Clone\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "b-form-checkbox",
                  {
                    model: {
                      value: _vm.noCollapse,
                      callback: function ($$v) {
                        _vm.noCollapse = $$v
                      },
                      expression: "noCollapse",
                    },
                  },
                  [_vm._v("\n          No border collapse\n        ")]
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { label: "Head Variant", "label-cols-lg": "2" } },
            [
              _c(
                "b-form-radio-group",
                {
                  model: {
                    value: _vm.headVariant,
                    callback: function ($$v) {
                      _vm.headVariant = $$v
                    },
                    expression: "headVariant",
                  },
                },
                [
                  _c("b-form-radio", { attrs: { value: null } }, [
                    _vm._v("\n          None\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-form-radio", { attrs: { value: "light" } }, [
                    _vm._v("\n          Light\n        "),
                  ]),
                  _vm._v(" "),
                  _c("b-form-radio", { attrs: { value: "dark" } }, [
                    _vm._v("\n          Dark\n        "),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              staticClass: "mb-0",
              attrs: {
                label: "Table Variant",
                "label-for": "table-style-variant",
                "label-cols-lg": "2",
              },
            },
            [
              _c("v-select", {
                attrs: {
                  dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                  label: "tableVariants",
                  options: _vm.tableVariants,
                },
                model: {
                  value: _vm.tableVariant,
                  callback: function ($$v) {
                    _vm.tableVariant = $$v
                  },
                  expression: "tableVariant",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          striped: _vm.striped,
          bordered: _vm.bordered,
          borderless: _vm.borderless,
          outlined: _vm.outlined,
          small: _vm.small,
          hover: _vm.hover,
          dark: _vm.dark,
          fixed: _vm.fixed,
          "foot-clone": _vm.footClone,
          "no-border-collapse": _vm.noCollapse,
          items: _vm.items,
          fields: _vm.fields,
          "head-variant": _vm.headVariant,
          "table-variant": _vm.tableVariant,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/Table.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/Table.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_vue_vue_type_template_id_14f61bc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=14f61bc8& */ "./resources/js/src/views/table/bs-table/Table.vue?vue&type=template&id=14f61bc8&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/Table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/table/bs-table/Table.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_14f61bc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Table_vue_vue_type_template_id_14f61bc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/Table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/Table.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/Table.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/Table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/Table.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/Table.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/Table.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/table/bs-table/Table.vue?vue&type=template&id=14f61bc8&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/Table.vue?vue&type=template&id=14f61bc8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_14f61bc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=template&id=14f61bc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/Table.vue?vue&type=template&id=14f61bc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_14f61bc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_14f61bc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableBasic.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableBasic.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableBasic_vue_vue_type_template_id_980a9abc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableBasic.vue?vue&type=template&id=980a9abc& */ "./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=template&id=980a9abc&");
/* harmony import */ var _TableBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableBasic_vue_vue_type_template_id_980a9abc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableBasic_vue_vue_type_template_id_980a9abc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=template&id=980a9abc&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=template&id=980a9abc& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableBasic_vue_vue_type_template_id_980a9abc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableBasic.vue?vue&type=template&id=980a9abc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableBasic.vue?vue&type=template&id=980a9abc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableBasic_vue_vue_type_template_id_980a9abc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableBasic_vue_vue_type_template_id_980a9abc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableCustomRender.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableCustomRender.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableCustomRender_vue_vue_type_template_id_cf3fb5ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableCustomRender.vue?vue&type=template&id=cf3fb5ba& */ "./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=template&id=cf3fb5ba&");
/* harmony import */ var _TableCustomRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableCustomRender.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableCustomRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableCustomRender_vue_vue_type_template_id_cf3fb5ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableCustomRender_vue_vue_type_template_id_cf3fb5ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableCustomRender.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCustomRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableCustomRender.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCustomRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=template&id=cf3fb5ba&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=template&id=cf3fb5ba& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCustomRender_vue_vue_type_template_id_cf3fb5ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableCustomRender.vue?vue&type=template&id=cf3fb5ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableCustomRender.vue?vue&type=template&id=cf3fb5ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCustomRender_vue_vue_type_template_id_cf3fb5ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCustomRender_vue_vue_type_template_id_cf3fb5ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableFormatterCallback.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableFormatterCallback.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableFormatterCallback_vue_vue_type_template_id_cf7c51ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableFormatterCallback.vue?vue&type=template&id=cf7c51ba& */ "./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=template&id=cf7c51ba&");
/* harmony import */ var _TableFormatterCallback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableFormatterCallback.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableFormatterCallback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableFormatterCallback_vue_vue_type_template_id_cf7c51ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableFormatterCallback_vue_vue_type_template_id_cf7c51ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableFormatterCallback.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableFormatterCallback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableFormatterCallback.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableFormatterCallback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=template&id=cf7c51ba&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=template&id=cf7c51ba& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableFormatterCallback_vue_vue_type_template_id_cf7c51ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableFormatterCallback.vue?vue&type=template&id=cf7c51ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableFormatterCallback.vue?vue&type=template&id=cf7c51ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableFormatterCallback_vue_vue_type_template_id_cf7c51ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableFormatterCallback_vue_vue_type_template_id_cf7c51ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableKitchenSink.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableKitchenSink.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableKitchenSink_vue_vue_type_template_id_62d8c54b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableKitchenSink.vue?vue&type=template&id=62d8c54b& */ "./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=template&id=62d8c54b&");
/* harmony import */ var _TableKitchenSink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableKitchenSink.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableKitchenSink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableKitchenSink_vue_vue_type_template_id_62d8c54b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableKitchenSink_vue_vue_type_template_id_62d8c54b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableKitchenSink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableKitchenSink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableKitchenSink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableKitchenSink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=template&id=62d8c54b&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=template&id=62d8c54b& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableKitchenSink_vue_vue_type_template_id_62d8c54b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableKitchenSink.vue?vue&type=template&id=62d8c54b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableKitchenSink.vue?vue&type=template&id=62d8c54b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableKitchenSink_vue_vue_type_template_id_62d8c54b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableKitchenSink_vue_vue_type_template_id_62d8c54b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableLightWeight.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableLightWeight.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableLightWeight_vue_vue_type_template_id_aebef6bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableLightWeight.vue?vue&type=template&id=aebef6bc& */ "./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=template&id=aebef6bc&");
/* harmony import */ var _TableLightWeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableLightWeight.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableLightWeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableLightWeight_vue_vue_type_template_id_aebef6bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableLightWeight_vue_vue_type_template_id_aebef6bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableLightWeight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableLightWeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableLightWeight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableLightWeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=template&id=aebef6bc&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=template&id=aebef6bc& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableLightWeight_vue_vue_type_template_id_aebef6bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableLightWeight.vue?vue&type=template&id=aebef6bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableLightWeight.vue?vue&type=template&id=aebef6bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableLightWeight_vue_vue_type_template_id_aebef6bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableLightWeight_vue_vue_type_template_id_aebef6bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableResponsive.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableResponsive.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableResponsive_vue_vue_type_template_id_6a4654f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableResponsive.vue?vue&type=template&id=6a4654f0& */ "./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=template&id=6a4654f0&");
/* harmony import */ var _TableResponsive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableResponsive.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableResponsive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableResponsive_vue_vue_type_template_id_6a4654f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableResponsive_vue_vue_type_template_id_6a4654f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableResponsive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableResponsive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableResponsive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableResponsive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=template&id=6a4654f0&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=template&id=6a4654f0& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableResponsive_vue_vue_type_template_id_6a4654f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableResponsive.vue?vue&type=template&id=6a4654f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableResponsive.vue?vue&type=template&id=6a4654f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableResponsive_vue_vue_type_template_id_6a4654f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableResponsive_vue_vue_type_template_id_6a4654f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableRowColStyle.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableRowColStyle.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableRowColStyle_vue_vue_type_template_id_77d15a02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableRowColStyle.vue?vue&type=template&id=77d15a02& */ "./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=template&id=77d15a02&");
/* harmony import */ var _TableRowColStyle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableRowColStyle.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableRowColStyle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableRowColStyle_vue_vue_type_template_id_77d15a02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableRowColStyle_vue_vue_type_template_id_77d15a02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableRowColStyle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowColStyle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableRowColStyle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowColStyle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=template&id=77d15a02&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=template&id=77d15a02& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowColStyle_vue_vue_type_template_id_77d15a02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableRowColStyle.vue?vue&type=template&id=77d15a02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowColStyle.vue?vue&type=template&id=77d15a02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowColStyle_vue_vue_type_template_id_77d15a02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowColStyle_vue_vue_type_template_id_77d15a02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableRowSelectSupport_vue_vue_type_template_id_56099135___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableRowSelectSupport.vue?vue&type=template&id=56099135& */ "./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=template&id=56099135&");
/* harmony import */ var _TableRowSelectSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableRowSelectSupport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TableRowSelectSupport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TableRowSelectSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableRowSelectSupport_vue_vue_type_template_id_56099135___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableRowSelectSupport_vue_vue_type_template_id_56099135___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableRowSelectSupport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowSelectSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableRowSelectSupport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowSelectSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowSelectSupport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowSelectSupport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowSelectSupport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowSelectSupport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowSelectSupport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=template&id=56099135&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=template&id=56099135& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowSelectSupport_vue_vue_type_template_id_56099135___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableRowSelectSupport.vue?vue&type=template&id=56099135& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowSelectSupport.vue?vue&type=template&id=56099135&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowSelectSupport_vue_vue_type_template_id_56099135___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowSelectSupport_vue_vue_type_template_id_56099135___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableRowdetailsSupport_vue_vue_type_template_id_9851e90a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableRowdetailsSupport.vue?vue&type=template&id=9851e90a& */ "./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=template&id=9851e90a&");
/* harmony import */ var _TableRowdetailsSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableRowdetailsSupport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableRowdetailsSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableRowdetailsSupport_vue_vue_type_template_id_9851e90a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableRowdetailsSupport_vue_vue_type_template_id_9851e90a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowdetailsSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableRowdetailsSupport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowdetailsSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=template&id=9851e90a&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=template&id=9851e90a& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowdetailsSupport_vue_vue_type_template_id_9851e90a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableRowdetailsSupport.vue?vue&type=template&id=9851e90a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableRowdetailsSupport.vue?vue&type=template&id=9851e90a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowdetailsSupport_vue_vue_type_template_id_9851e90a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableRowdetailsSupport_vue_vue_type_template_id_9851e90a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableSimple.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableSimple.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableSimple_vue_vue_type_template_id_88b3b824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableSimple.vue?vue&type=template&id=88b3b824& */ "./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=template&id=88b3b824&");
/* harmony import */ var _TableSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableSimple.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableSimple_vue_vue_type_template_id_88b3b824___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableSimple_vue_vue_type_template_id_88b3b824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableSimple.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableSimple.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=template&id=88b3b824&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=template&id=88b3b824& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableSimple_vue_vue_type_template_id_88b3b824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableSimple.vue?vue&type=template&id=88b3b824& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableSimple.vue?vue&type=template&id=88b3b824&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableSimple_vue_vue_type_template_id_88b3b824___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableSimple_vue_vue_type_template_id_88b3b824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableStickyColumnsHeaders_vue_vue_type_template_id_2df0fb24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableStickyColumnsHeaders.vue?vue&type=template&id=2df0fb24& */ "./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=template&id=2df0fb24&");
/* harmony import */ var _TableStickyColumnsHeaders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableStickyColumnsHeaders.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableStickyColumnsHeaders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableStickyColumnsHeaders_vue_vue_type_template_id_2df0fb24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableStickyColumnsHeaders_vue_vue_type_template_id_2df0fb24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableStickyColumnsHeaders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableStickyColumnsHeaders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableStickyColumnsHeaders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=template&id=2df0fb24&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=template&id=2df0fb24& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableStickyColumnsHeaders_vue_vue_type_template_id_2df0fb24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableStickyColumnsHeaders.vue?vue&type=template&id=2df0fb24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableStickyColumnsHeaders.vue?vue&type=template&id=2df0fb24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableStickyColumnsHeaders_vue_vue_type_template_id_2df0fb24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableStickyColumnsHeaders_vue_vue_type_template_id_2df0fb24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableStyleOptions.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableStyleOptions.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableStyleOptions_vue_vue_type_template_id_0d85d969___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableStyleOptions.vue?vue&type=template&id=0d85d969& */ "./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=template&id=0d85d969&");
/* harmony import */ var _TableStyleOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableStyleOptions.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableStyleOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableStyleOptions_vue_vue_type_template_id_0d85d969___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableStyleOptions_vue_vue_type_template_id_0d85d969___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/bs-table/TableStyleOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableStyleOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableStyleOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableStyleOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=template&id=0d85d969&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=template&id=0d85d969& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableStyleOptions_vue_vue_type_template_id_0d85d969___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableStyleOptions.vue?vue&type=template&id=0d85d969& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/bs-table/TableStyleOptions.vue?vue&type=template&id=0d85d969&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableStyleOptions_vue_vue_type_template_id_0d85d969___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableStyleOptions_vue_vue_type_template_id_0d85d969___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/bs-table/code.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/table/bs-table/code.js ***!
  \*******************************************************/
/*! exports provided: codeBasic, codeStyleOption, codeRowColStyle, codeResponsive, codeFormatterCallback, codeDataRendering, codeSticky, codeRowDetailsSupport, codeRowSelectSupport, codeKitchenSink, codeLight, codeSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeStyleOption", function() { return codeStyleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRowColStyle", function() { return codeRowColStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeResponsive", function() { return codeResponsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeFormatterCallback", function() { return codeFormatterCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeDataRendering", function() { return codeDataRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSticky", function() { return codeSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRowDetailsSupport", function() { return codeRowDetailsSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRowSelectSupport", function() { return codeRowSelectSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeKitchenSink", function() { return codeKitchenSink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeLight", function() { return codeLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSimple", function() { return codeSimple; });
var codeBasic = "\n<template>\n  <b-table responsive=\"sm\" :items=\"items\"/>\n</template>\n\n<script>\nimport { BTable } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n  },\n  data() {\n    return {\n      items: [\n        {\n          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', Occupation: 'Job',\n        },\n        {\n          age: 21, first_name: 'Larsen', last_name: 'Shaw', Occupation: 'Job',\n        },\n        {\n          age: 89, first_name: 'Geneva', last_name: 'Wilson', Occupation: 'Bussiness',\n        },\n        {\n          age: 38, first_name: 'Jami', last_name: 'Carney', Occupation: 'Bussiness',\n        },\n        {\n          age: 40, first_name: 'James', last_name: 'Thomson', Occupation: 'Job',\n        },\n      ],\n    }\n  },\n}\n</script>\n";
var codeStyleOption = "\n<template>\n  <div>\n    <!-- checkbox -->\n    <b-form-group>\n      <label class=\"mb-0\">Table Options</label>\n      <div class=\"demo-inline-spacing\">\n        <b-form-checkbox\n          v-model=\"striped\"\n        >\n          Striped\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"bordered\"\n        >\n          Bordered\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"borderless\"\n        >\n          Borderless\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"outlined\"\n        >\n          Outlined\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"small\"\n        >\n          Small\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"hover\"\n        >\n          Hover\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"dark\"\n        >\n          Dark\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"fixed\"\n        >\n          Fixed\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"footClone\"\n        >\n          Foot Clone\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"noCollapse\"\n        >\n          No border collapse\n        </b-form-checkbox>\n      </div>\n    </b-form-group>\n\n    <!-- radio -->\n    <b-form-group\n      label=\"Head Variant\"\n      label-cols-lg=\"2\"\n    >\n      <b-form-radio-group\n        v-model=\"headVariant\"\n      >\n        <b-form-radio\n          :value=\"null\"\n        >\n          None\n        </b-form-radio>\n        <b-form-radio\n          value=\"light\"\n        >\n          Light\n        </b-form-radio>\n        <b-form-radio\n          value=\"dark\"\n        >\n          Dark\n        </b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n\n    <!-- variant select -->\n    <b-form-group\n      label=\"Table Variant\"\n      label-for=\"table-style-variant\"\n      label-cols-lg=\"2\"\n      class=\"mb-0\"\n    >\n      <v-select\n        v-model=\"tableVariant\"\n        :dir=\"$store.state.appConfig.isRTL ? 'rtl' : 'ltr'\"\n        label=\"tableVariants\"\n        :options=\"tableVariants\"\n      />\n    </b-form-group>\n\n    <!-- table -->\n    <b-table\n      :striped=\"striped\"\n      :bordered=\"bordered\"\n      :borderless=\"borderless\"\n      :outlined=\"outlined\"\n      :small=\"small\"\n      :hover=\"hover\"\n      :dark=\"dark\"\n      :fixed=\"fixed\"\n      :foot-clone=\"footClone\"\n      :no-border-collapse=\"noCollapse\"\n      :items=\"items\"\n      :fields=\"fields\"\n      :head-variant=\"headVariant\"\n      :table-variant=\"tableVariant\"\n    />\n  </div>\n</template>\n\n<script>\nimport {\n  BTable, BFormGroup, BFormRadio, BFormCheckbox, BFormRadioGroup, BCardBody,\n} from 'bootstrap-vue'\nimport vSelect from 'vue-select'\n\nexport default {\n  components: {\n    BTable,\n    BFormGroup,\n    BCardBody,\n    vSelect,\n    BFormRadio,\n    BFormCheckbox,\n    BFormRadioGroup,\n  },\n  data() {\n    return {\n      fields: ['first_name', 'last_name', 'age'],\n      items: [\n        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },\n        { age: 89, first_name: 'Olenka', last_name: 'Brawley' },\n        { age: 89, first_name: 'Vernon', last_name: 'Perford' },\n      ],\n      tableVariants: [\n        'none',\n        'primary',\n        'secondary',\n        'info',\n        'danger',\n        'warning',\n        'success',\n        'light',\n        'dark',\n      ],\n      striped: false,\n      bordered: false,\n      borderless: false,\n      outlined: false,\n      small: false,\n      hover: false,\n      dark: false,\n      fixed: false,\n      footClone: false,\n      headVariant: null,\n      tableVariant: 'none',\n      noCollapse: false,\n    }\n  },\n}\n</script>\n\n<style lang=\"scss\">\n@import '~@core/scss/vue/libs/vue-select.scss';\n</style>\n";
var codeRowColStyle = "\n<template>\n  <b-table\n    :items=\"items\"\n    :fields=\"fields\"\n    :tbody-tr-class=\"rowClass\"\n    class=\"rounded-bottom\"\n  />\n</template>\n\n<script>\nimport { BTable } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n  },\n  data() {\n    return {\n      fields: ['first_name', 'last_name', { key: 'age', variant: 'success' }],\n      items: [\n        {\n          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', status: 'awesome',\n        },\n        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },\n        { age: 89, first_name: 'Olenka', last_name: 'Brawley' },\n        { age: 89, first_name: 'Vernon', last_name: 'Perford' },\n      ],\n    }\n  },\n  methods: {\n    rowClass(item, type) {\n      const colorClass = 'table-success'\n      if (!item || type !== 'row') { return }\n\n      // eslint-disable-next-line consistent-return\n      if (item.status === 'awesome') { return colorClass }\n    },\n  },\n}\n</script>\n";
var codeResponsive = "\n<template>\n   <b-table\n    responsive\n    :items=\"items\"\n    :fields=\"fields\"\n    class=\"mb-0\"\n  >\n    <template #cell(Phone)=\"data\">\n      <span class=\"text-nowrap\">\n        {{ data.value }}\n      </span>\n    </template>\n\n    <!-- Optional default data cell scoped slot -->\n    <template #cell()=\"data\">\n      {{ data.value }}\n    </template>\n  </b-table>\n</template>\n\n<script>\nimport { BTable } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n  },\n  data() {\n    return {\n      fields: [\n        'id',\n        'first_name',\n        'email',\n        'gender',\n        'ip_address',\n        {\n          key: 'Phone', label: 'Phone',\n        },\n        'Country',\n      ],\n      items: [\n        {\n          id: '1',\n          first_name: 'Marybelle',\n          last_name: 'Della Scala',\n          email: 'mdellascala0@opensource.org',\n          gender: 'Female',\n          ip_address: '85.254.7.181',\n          Phone: '+86 350 673 7985',\n          Country: 'China',\n\n        },\n        {\n          id: '2',\n          first_name: 'Octavia',\n          last_name: 'Tohill',\n          email: 'otohill1@google.co.jp',\n          gender: 'Female',\n          ip_address: '93.70.144.212',\n          Phone: '+63 938 283 0018',\n          Country: 'Philippines',\n        },\n        {\n          id: '3',\n          first_name: 'Jennie',\n          last_name: 'Geroldi',\n          email: 'jgeroldi2@slideshare.net',\n          gender: 'Female',\n          ip_address: '76.145.147.212',\n          Phone: '+81 235 674 0110',\n          Country: 'Japan',\n        },\n        {\n          id: '4',\n          first_name: 'Vanya',\n          last_name: 'Wharby',\n          email: 'vwharby3@mozilla.org',\n          gender: 'Male',\n          ip_address: '139.234.247.155',\n          Phone: '+30 349 556 7375',\n          Country: 'Greece',\n        },\n        {\n          id: '5',\n          first_name: 'Olenka',\n          last_name: 'Brawley',\n          email: 'obrawleyc@adobe.com',\n          gender: 'Female',\n          ip_address: '166.183.163.155',\n          Phone: '+62 841 824 0990',\n          Country: 'Indonesia',\n        },\n      ],\n    }\n  },\n}\n</script>\n";
var codeFormatterCallback = "\n<template>\n   <b-table\n    :fields=\"fields\"\n    :items=\"items\"\n  >\n    <template #cell(name)=\"data\">\n      <a :href=\"`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`\">{{ data.value }}</a>\n    </template>\n  </b-table>\n</template>\n\n<script>\nimport { BTable } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n  },\n  data() {\n    return {\n      fields: [\n        {\n          key: 'name',\n          label: 'Full Name',\n          formatter: value => `${value.first} ${value.last}`,\n        },\n        // A regular column\n        'age',\n        {\n          // A regular column with custom formatter\n          key: 'sex',\n          formatter: value => value.charAt(0).toUpperCase(),\n        },\n        {\n          // A virtual column with custom formatter\n          key: 'birthYear',\n          label: 'Birth Year',\n          formatter: (value, key, item) => new Date().getFullYear() - item.age,\n        },\n      ],\n      items: [\n        { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },\n        { name: { first: 'Clemens', last: 'Doe' }, sex: 'Female', age: 36 },\n        { name: { first: 'Rubin', last: 'Kincade' }, sex: 'male', age: 73 },\n        { name: { first: 'Shirley', last: 'Partridge' }, sex: 'female', age: 62 },\n        { name: { first: 'Olenka', last: 'Brawley' }, sex: 'female', age: 26 },\n      ],\n    }\n  },\n}\n</script>\n";
var codeDataRendering = "\n<template>\n  <div>\n    <b-table\n      small\n      :fields=\"fields\"\n      :items=\"items\"\n      responsive=\"sm\"\n    >\n      <!-- A virtual column -->\n      <template #cell(index)=\"data\">\n        {{ data.index + 1 }}\n      </template>\n\n      <!-- A custom formatted column -->\n      <template #cell(name)=\"data\">\n        {{ data.value.first+' - '+ data.value.last }}\n      </template>\n\n      <!-- A custom formatted column -->\n      <template #cell(Popularity)=\"data\">\n        <b-progress\n          :value=\"data.value.value\"\n          max=\"100\"\n          :variant=\"data.value.variant\"\n          striped\n        />\n      </template>\n\n      <template #cell(order_status)=\"data\">\n        <b-badge\n          pill\n          :variant=\"data.value.variant\"\n        >\n          {{ data.value.status }}\n        </b-badge>\n      </template>\n\n      <!-- A virtual composite column -->\n      <template #cell(price)=\"data\">\n        {{ '$'+data.value }}\n      </template>\n\n      <!-- Optional default data cell scoped slot -->\n      <template #cell()=\"data\">\n        {{ data.value }}\n      </template>\n    </b-table>\n  </div>\n</template>\n\n<script>\nimport { BTable, BProgress, BBadge } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n    BProgress,\n    BBadge,\n  },\n  data() {\n    return {\n      fields: [\n        // A virtual column that doesn't exist in items\n        'index',\n        // A column that needs custom formatting\n        { key: 'name', label: 'Name' },\n        'Category',\n        // A regular column\n        { key: 'Popularity', label: 'Popularity' },\n        // A regular column\n        { key: 'order_status', label: 'Order Status' },\n        // A virtual column made up from two fields\n        { key: 'price', label: 'Price' },\n      ],\n      items: [\n        {\n          name: { first: 'Fitbit', last: 'Activity Tracker' },\n          Category: 'Fitness',\n          order_status: { status: 'Delivered', variant: 'success' },\n          Popularity: { value: 50, variant: 'success' },\n          price: 99.99,\n        },\n        {\n          name: { first: 'Fitbit ', last: 'Flex Wireless Activity' },\n          Category: 'Fitness',\n          order_status: { status: 'Pending', variant: 'primary' },\n          Popularity: { value: 36, variant: 'primary' },\n          price: 89.85,\n        },\n        {\n          name: { first: 'Fitbit', last: 'Sleep Tracker Wristband' },\n          Category: 'Fitness',\n          order_status: { status: 'Delivered', variant: 'success' },\n          Popularity: { value: 76, variant: 'success' },\n          price: 65.25,\n        },\n        {\n          name: { first: 'Fitbit', last: 'Sleep Wristband' },\n          Category: 'Fitness',\n          order_status: { status: 'On Hold', variant: 'warning' },\n          Popularity: { value: 55, variant: 'warning' },\n          price: 75.55,\n        },\n        {\n          name: { first: 'Fitbit', last: 'Clip for Zip Wireless Activity Trackers' },\n          Category: 'Fitness',\n          order_status: { status: 'Canceled', variant: 'danger' },\n          Popularity: { value: 75, variant: 'danger' },\n          price: 105.55,\n        },\n      ],\n    }\n  },\n}\n</script>\n";
var codeSticky = "\n<template>\n  <div>\n    <div class=\"d-flex mb-2\">\n      <b-form-checkbox\n        v-model=\"stickyHeader\"\n        class=\"vs-checkbox-con mr-1\"\n        plain\n      >\n        <span class=\"vs-checkbox\">\n          <span class=\"vs-checkbox--check\">\n            <i class=\"vs-icon feather icon-check\" />\n          </span>\n        </span>\n        <span class=\"vs-label\">Sticky header</span>\n      </b-form-checkbox>\n      <b-form-checkbox\n        v-model=\"noCollapse\"\n        class=\"vs-checkbox-con\"\n        plain\n      >\n        <span class=\"vs-checkbox\">\n          <span class=\"vs-checkbox--check\">\n            <i class=\"vs-icon feather icon-check\" />\n          </span>\n        </span>\n        <span class=\"vs-label\">No border collapse</span>\n      </b-form-checkbox>\n    </div>\n    <b-table\n      :sticky-header=\"stickyHeader\"\n      :no-border-collapse=\"noCollapse\"\n\n      responsive\n      :items=\"items\"\n      :fields=\"fields\"\n    >\n      <template #head(id)>\n        <div class=\"text-nowrap\">\n          Row ID\n        </div>\n      </template>\n\n      <template #head()=\"scope\">\n        <div class=\"text-nowrap\">\n          {{ scope.label }}\n        </div>\n      </template>\n\n      <template #cell(avatar)=\"data\">\n        <b-avatar\n          class=\"mr-1\"\n          :src=\"data.value\"\n        />\n      </template>\n\n      <template #cell(status)=\"data\">\n        <b-badge :variant=\"status[1][data.value]\">\n          {{ status[0][data.value] }}\n        </b-badge>\n      </template>\n\n      <template #cell()=\"data\">\n        <span class=\"text-nowrap\">{{ data.value }}</span>\n      </template>\n    </b-table>\n  </div>\n</template>\n\n<script>\nimport {\n  BTable, BFormCheckbox, BAvatar, BBadge,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n    BFormCheckbox,\n    BAvatar,\n    BBadge,\n  },\n  data() {\n    return {\n      stickyHeader: true,\n      noCollapse: false,\n      fields: [\n        {\n          key: 'id', stickyColumn: true, isRowHeader: true, variant: 'primary',\n        },\n        {\n          key: 'avatar', label: 'Avatar',\n        },\n        'full_name',\n        { key: 'post', stickyColumn: true, variant: 'info' },\n        'email',\n        'city',\n        'start_date',\n        'salary',\n        'age',\n        'experience',\n        { key: 'status', label: 'Status' },\n      ],\n      items: [\n        {\n          id: 1,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/10-small.png'),\n          full_name: \"Korrie O'Crevy\",\n          post: 'Nuclear Power Engineer',\n          email: 'kocrevy0@thetimes.co.uk',\n          city: 'Krasnosilka',\n          start_date: '09/23/2016',\n          salary: '$23896.35',\n          age: '61',\n          experience: '1 Year',\n          status: 2,\n        },\n        {\n          id: 2,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/1-small.png'),\n          full_name: 'Bailie Coulman',\n          post: 'VP Quality Control',\n          email: 'bcoulman1@yolasite.com',\n          city: 'Hinigaran',\n          start_date: '05/20/2018',\n          salary: '$13633.69',\n          age: '63',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 3,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Stella Ganderton',\n          post: 'Operator',\n          email: 'sganderton2@tuttocitta.it',\n          city: 'Golcowa',\n          start_date: '03/24/2018',\n          salary: '$13076.28',\n          age: '66',\n          experience: '6 Years',\n          status: 5,\n        },\n        {\n          id: 4,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/3-small.png'),\n          full_name: 'Dorolice Crossman',\n          post: 'Cost Accountant',\n          email: 'dcrossman3@google.co.jp',\n          city: 'Paquera',\n          start_date: '12/03/2017',\n          salary: '$12336.17',\n          age: '22',\n          experience: '2 Years',\n          status: 2,\n        },\n        {\n          id: 5,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/4-small.png'),\n          full_name: 'Harmonia Nisius',\n          post: 'Senior Cost Accountant',\n          email: 'hnisius4@gnu.org',\n          city: 'Lucan',\n          start_date: '08/25/2017',\n          salary: '$10909.52',\n          age: '33',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 6,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/5-small.png'),\n          full_name: 'Genevra Honeywood',\n          post: 'Geologist',\n          email: 'ghoneywood5@narod.ru',\n          city: 'Maofan',\n          start_date: '06/01/2017',\n          salary: '$17803.80',\n          age: '61',\n          experience: '1 Year',\n          status: 1,\n        },\n        {\n          id: 7,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/7-small.png'),\n          full_name: 'Eileen Diehn',\n          post: 'Environmental Specialist',\n          email: 'ediehn6@163.com',\n          city: 'Lampuyang',\n          start_date: '10/15/2017',\n          salary: '$18991.67',\n          age: '59',\n          experience: '9 Years',\n          status: 3,\n        },\n        {\n          id: 8,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Richardo Aldren',\n          post: 'Senior Sales Associate',\n          email: 'raldren7@mtv.com',\n          city: 'Skoghall',\n          start_date: '11/05/2016',\n          salary: '$19230.13',\n          age: '55',\n          experience: '5 Years',\n          status: 3,\n        },\n        {\n          id: 9,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/2-small.png'),\n          full_name: 'Allyson Moakler',\n          post: 'Safety Technician',\n          email: 'amoakler8@shareasale.com',\n          city: 'Mogilany',\n          start_date: '12/29/2018',\n          salary: '$11677.32',\n          age: '39',\n          experience: '9 Years',\n          status: 5,\n        },\n        {\n          id: 10,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/6-small.png'),\n          full_name: 'Merline Penhalewick',\n          post: 'Junior Executive',\n          email: 'mpenhalewick9@php.net',\n          city: 'Kanuma',\n          start_date: '04/19/2019',\n          salary: '$15939.52',\n          age: '23',\n          experience: '3 Years',\n          status: 2,\n        },\n      ],\n      status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],\n    }\n  },\n}\n</script>\n";
var codeRowDetailsSupport = "\n<template>\n  <div>\n    <b-table\n      :items=\"items\"\n      :fields=\"fields\"\n      striped\n      responsive\n    >\n      <template #cell(show_details)=\"row\">\n        <b-form-checkbox\n          v-model=\"row.detailsShowing\"\n          plain\n          class=\"vs-checkbox-con\"\n          @change=\"row.toggleDetails\"\n        >\n          <span class=\"vs-checkbox\">\n            <span class=\"vs-checkbox--check\">\n              <i class=\"vs-icon feather icon-check\" />\n            </span>\n          </span>\n          <span class=\"vs-label\">{{ row.detailsShowing ? 'Hide' : 'Show' }}</span>\n        </b-form-checkbox>\n      </template>\n\n      <template #row-details=\"row\">\n        <b-card>\n          <b-row class=\"mb-2\">\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>Full Name : </strong>{{ row.item.full_name }}\n            </b-col>\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>Post : </strong>{{ row.item.post }}\n            </b-col>\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>Email : </strong>{{ row.item.email }}\n            </b-col>\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>City : </strong>{{ row.item.city }}\n            </b-col>\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>Salary : </strong>{{ row.item.salary }}\n            </b-col>\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>Age : </strong>{{ row.item.age }}\n            </b-col>\n          </b-row>\n\n          <b-button\n            size=\"sm\"\n            variant=\"outline-secondary\"\n            @click=\"row.toggleDetails\"\n          >\n            Hide Details\n          </b-button>\n        </b-card>\n      </template>\n\n      <template #cell(avatar)=\"data\">\n        <b-avatar :src=\"data.value\" />\n      </template>\n\n       <template #cell(status)=\"data\">\n        <b-badge :variant=\"status[1][data.value]\">\n          {{ status[0][data.value] }}\n        </b-badge>\n      </template>\n    </b-table>\n  </div>\n</template>\n\n<script>\nimport {\n  BTable, BFormCheckbox, BButton, BCard, BRow, BCol, BAvatar, BBadge,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n    BButton,\n    BFormCheckbox,\n    BCard,\n    BRow,\n    BCol,\n    BBadge,\n    BAvatar,\n  },\n  data() {\n    return {\n      fields: ['show_details', 'id', { key: 'avatar', label: 'Avatar' }, 'full_name', 'post', 'email', 'city', 'start_date', 'salary', 'age', 'experience', { key: 'status', label: 'Status' }],\n      items: [\n        {\n          id: 1,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/10-small.png'),\n          full_name: \"Korrie O'Crevy\",\n          post: 'Nuclear Power Engineer',\n          email: 'kocrevy0@thetimes.co.uk',\n          city: 'Krasnosilka',\n          start_date: '09/23/2016',\n          salary: '$23896.35',\n          age: '61',\n          experience: '1 Year',\n          status: 2,\n        },\n        {\n          id: 2,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/1-small.png'),\n          full_name: 'Bailie Coulman',\n          post: 'VP Quality Control',\n          email: 'bcoulman1@yolasite.com',\n          city: 'Hinigaran',\n          start_date: '05/20/2018',\n          salary: '$13633.69',\n          age: '63',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 3,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Stella Ganderton',\n          post: 'Operator',\n          email: 'sganderton2@tuttocitta.it',\n          city: 'Golcowa',\n          start_date: '03/24/2018',\n          salary: '$13076.28',\n          age: '66',\n          experience: '6 Years',\n          status: 5,\n        },\n        {\n          id: 4,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/3-small.png'),\n          full_name: 'Dorolice Crossman',\n          post: 'Cost Accountant',\n          email: 'dcrossman3@google.co.jp',\n          city: 'Paquera',\n          start_date: '12/03/2017',\n          salary: '$12336.17',\n          age: '22',\n          experience: '2 Years',\n          status: 2,\n        },\n        {\n          id: 5,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/4-small.png'),\n          full_name: 'Harmonia Nisius',\n          post: 'Senior Cost Accountant',\n          email: 'hnisius4@gnu.org',\n          city: 'Lucan',\n          start_date: '08/25/2017',\n          salary: '$10909.52',\n          age: '33',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 6,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/5-small.png'),\n          full_name: 'Genevra Honeywood',\n          post: 'Geologist',\n          email: 'ghoneywood5@narod.ru',\n          city: 'Maofan',\n          start_date: '06/01/2017',\n          salary: '$17803.80',\n          age: '61',\n          experience: '1 Year',\n          status: 1,\n        },\n        {\n          id: 7,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/7-small.png'),\n          full_name: 'Eileen Diehn',\n          post: 'Environmental Specialist',\n          email: 'ediehn6@163.com',\n          city: 'Lampuyang',\n          start_date: '10/15/2017',\n          salary: '$18991.67',\n          age: '59',\n          experience: '9 Years',\n          status: 3,\n        },\n        {\n          id: 8,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Richardo Aldren',\n          post: 'Senior Sales Associate',\n          email: 'raldren7@mtv.com',\n          city: 'Skoghall',\n          start_date: '11/05/2016',\n          salary: '$19230.13',\n          age: '55',\n          experience: '5 Years',\n          status: 3,\n        },\n        {\n          id: 9,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/2-small.png'),\n          full_name: 'Allyson Moakler',\n          post: 'Safety Technician',\n          email: 'amoakler8@shareasale.com',\n          city: 'Mogilany',\n          start_date: '12/29/2018',\n          salary: '$11677.32',\n          age: '39',\n          experience: '9 Years',\n          status: 5,\n        },\n        {\n          id: 10,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/6-small.png'),\n          full_name: 'Merline Penhalewick',\n          post: 'Junior Executive',\n          email: 'mpenhalewick9@php.net',\n          city: 'Kanuma',\n          start_date: '04/19/2019',\n          salary: '$15939.52',\n          age: '23',\n          experience: '3 Years',\n          status: 2,\n        },\n      ],\n      status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],\n    }\n  },\n}\n</script>\n";
var codeRowSelectSupport = "\n<template>\n  <div>\n    <b-form-group\n      label=\"Selection mode:\"\n      label-cols-md=\"4\"\n    >\n      <!-- <b-form-select\n        v-model=\"selectMode\"\n        :options=\"modes\"\n      /> -->\n      <v-select\n        v-model=\"selectMode\"\n        label=\"title\"\n        :options=\"modes\"\n      />\n    </b-form-group>\n\n    <b-table\n      ref=\"selectableTable\"\n      selectable\n      :select-mode=\"selectMode\"\n      :items=\"items\"\n      :fields=\"fields\"\n      responsive=\"sm\"\n      @row-selected=\"onRowSelected\"\n    >\n      <!-- Example scoped slot for select state illustrative purposes -->\n      <template #cell(selected)=\"{ rowSelected }\">\n        <template v-if=\"rowSelected\">\n          <i class=\"feather icon-disc primary\" />\n        </template>\n\n        <template v-else>\n          <i class=\"feather icon-circle\" />\n        </template>\n      </template>\n\n      <template #cell(avatar)=\"data\">\n        <b-avatar :src=\"data.value\" />\n      </template>\n\n       <template #cell(status)=\"data\">\n        <b-badge :variant=\"status[1][data.value]\">\n          {{ status[0][data.value] }}\n        </b-badge>\n      </template>\n    </b-table>\n\n    <b-button\n      size=\"sm\"\n      class=\"mr-1\"\n      variant=\"primary\"\n      @click=\"selectAllRows\"\n    >\n      Select all\n    </b-button>\n    <b-button\n      size=\"sm\"\n      class=\"mr-1\"\n      variant=\"primary\"\n      @click=\"clearSelected\"\n    >\n      Clear selected\n    </b-button>\n    <b-button\n      size=\"sm\"\n      variant=\"primary\"\n      class=\"mr-1\"\n      @click=\"selectThirdRow\"\n    >\n      Select 3rd row\n    </b-button>\n    <b-button\n      variant=\"primary\"\n      size=\"sm\"\n      class=\"mr-1\"\n      @click=\"unselectThirdRow\"\n    >\n      Unselect 3rd row\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {\n  BTable, BButton, BFormGroup, BAvatar, BBadge,\n} from 'bootstrap-vue'\nimport vSelect from 'vue-select'\n\nexport default {\n  components: {\n    BTable,\n    BButton,\n    BFormGroup,\n    BAvatar,\n    BBadge,\n    vSelect,\n  },\n  data() {\n    return {\n      // selectedCheck: false,\n      modes: ['multi', 'single', 'range'],\n      fields: ['selected', 'id', { key: 'avatar', label: 'Avatar' }, 'full_name', 'post', 'email', 'city', 'start_date', 'salary', 'age', 'experience', { key: 'status', label: 'Status' }],\n      items: [\n        {\n          id: 1,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/10-small.png'),\n          full_name: \"Korrie O'Crevy\",\n          post: 'Nuclear Power Engineer',\n          email: 'kocrevy0@thetimes.co.uk',\n          city: 'Krasnosilka',\n          start_date: '09/23/2016',\n          salary: '$23896.35',\n          age: '61',\n          experience: '1 Year',\n          status: 2,\n        },\n        {\n          id: 2,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/1-small.png'),\n          full_name: 'Bailie Coulman',\n          post: 'VP Quality Control',\n          email: 'bcoulman1@yolasite.com',\n          city: 'Hinigaran',\n          start_date: '05/20/2018',\n          salary: '$13633.69',\n          age: '63',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 3,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Stella Ganderton',\n          post: 'Operator',\n          email: 'sganderton2@tuttocitta.it',\n          city: 'Golcowa',\n          start_date: '03/24/2018',\n          salary: '$13076.28',\n          age: '66',\n          experience: '6 Years',\n          status: 5,\n        },\n        {\n          id: 4,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/3-small.png'),\n          full_name: 'Dorolice Crossman',\n          post: 'Cost Accountant',\n          email: 'dcrossman3@google.co.jp',\n          city: 'Paquera',\n          start_date: '12/03/2017',\n          salary: '$12336.17',\n          age: '22',\n          experience: '2 Years',\n          status: 2,\n        },\n        {\n          id: 5,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/4-small.png'),\n          full_name: 'Harmonia Nisius',\n          post: 'Senior Cost Accountant',\n          email: 'hnisius4@gnu.org',\n          city: 'Lucan',\n          start_date: '08/25/2017',\n          salary: '$10909.52',\n          age: '33',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 6,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/5-small.png'),\n          full_name: 'Genevra Honeywood',\n          post: 'Geologist',\n          email: 'ghoneywood5@narod.ru',\n          city: 'Maofan',\n          start_date: '06/01/2017',\n          salary: '$17803.80',\n          status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],age: '61',\n          experience: '1 Year',\n          status: 1,\n        },\n        {\n          id: 7,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/7-small.png'),\n          full_name: 'Eileen Diehn',\n          post: 'Environmental Specialist',\n          email: 'ediehn6@163.com',\n          city: 'Lampuyang',\n          start_date: '10/15/2017',\n          salary: '$18991.67',\n          age: '59',\n          experience: '9 Years',\n          status: 3,\n        },\n        {\n          id: 8,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Richardo Aldren',\n          post: 'Senior Sales Associate',\n          email: 'raldren7@mtv.com',\n          city: 'Skoghall',\n          start_date: '11/05/2016',\n          salary: '$19230.13',\n          age: '55',\n          experience: '5 Years',\n          status: 3,\n        },\n        {\n          id: 9,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/2-small.png'),\n          full_name: 'Allyson Moakler',\n          post: 'Safety Technician',\n          email: 'amoakler8@shareasale.com',\n          city: 'Mogilany',\n          start_date: '12/29/2018',\n          salary: '$11677.32',\n          age: '39',\n          experience: '9 Years',\n          status: 5,\n        },\n        {\n          id: 10,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/6-small.png'),\n          full_name: 'Merline Penhalewick',\n          post: 'Junior Executive',\n          email: 'mpenhalewick9@php.net',\n          city: 'Kanuma',\n          start_date: '04/19/2019',\n          salary: '$15939.52',\n          age: '23',\n          experience: '3 Years',\n          status: 2,\n        },\n      ],\n      status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],\n      selectMode: 'multi',\n      selected: [],\n    }\n  },\n  methods: {\n    onRowSelected(items) {\n      this.selected = items\n    },\n    selectAllRows() {\n      this.$refs.selectableTable.selectAllRows()\n    },\n    clearSelected() {\n      this.$refs.selectableTable.clearSelected()\n    },\n    selectThirdRow() {\n      // Rows are indexed from 0, so the third row is index 2\n      this.$refs.selectableTable.selectRow(2)\n    },\n    unselectThirdRow() {\n      // Rows are indexed from 0, so the third row is index 2\n      this.$refs.selectableTable.unselectRow(2)\n    },\n  },\n}\n</script>\n\n<style lang=\"scss\">\n.b-table-selectable{\n  .feather{\n    font-size: 1.3rem;\n  }\n}\n\n</style>\n";
var codeKitchenSink = "\n<template>\n  <b-row>\n    <b-col\n      md=\"2\"\n      sm=\"4\"\n      class=\"my-1\"\n    >\n      <b-form-group\n        class=\"mb-0\"\n      >\n        <label class=\"d-inline-block text-sm-left mr-50\">Per page</label>\n        <b-form-select\n          id=\"perPageSelect\"\n          v-model=\"perPage\"\n          size=\"sm\"\n          :options=\"pageOptions\"\n          class=\"w-50\"\n        />\n      </b-form-group>\n    </b-col>\n    <b-col\n      md=\"4\"\n      sm=\"8\"\n      class=\"my-1\"\n    >\n      <b-form-group\n        label=\"Sort\"\n        label-cols-sm=\"3\"\n        label-align-sm=\"right\"\n        label-size=\"sm\"\n        label-for=\"sortBySelect\"\n        class=\"mb-0\"\n      >\n        <b-input-group size=\"sm\">\n          <b-form-select\n            id=\"sortBySelect\"\n            v-model=\"sortBy\"\n            :options=\"sortOptions\"\n            class=\"w-75\"\n          >\n            <template v-slot:first>\n              <option value=\"\">\n                -- none --\n              </option>\n            </template>\n          </b-form-select>\n          <b-form-select\n            v-model=\"sortDesc\"\n            size=\"sm\"\n            :disabled=\"!sortBy\"\n            class=\"w-25\"\n          >\n            <option :value=\"false\">\n              Asc\n            </option>\n            <option :value=\"true\">\n              Desc\n            </option>\n          </b-form-select>\n        </b-input-group>\n      </b-form-group>\n    </b-col>\n    <b-col\n      md=\"6\"\n      class=\"my-1\"\n    >\n      <b-form-group\n        label=\"Filter\"\n        label-cols-sm=\"3\"\n        label-align-sm=\"right\"\n        label-size=\"sm\"\n        label-for=\"filterInput\"\n        class=\"mb-0\"\n      >\n        <b-input-group size=\"sm\">\n          <b-form-input\n            id=\"filterInput\"\n            v-model=\"filter\"\n            type=\"search\"\n            placeholder=\"Type to Search\"\n          />\n          <b-input-group-append>\n            <b-button\n              :disabled=\"!filter\"\n              @click=\"filter = ''\"\n            >\n              Clear\n            </b-button>\n          </b-input-group-append>\n        </b-input-group>\n      </b-form-group>\n    </b-col>\n\n    <b-col cols=\"12\">\n      <b-table\n        striped\n        hover\n        responsive\n        :per-page=\"perPage\"\n        :current-page=\"currentPage\"\n        :items=\"items\"\n        :fields=\"fields\"\n        :sort-by.sync=\"sortBy\"\n        :sort-desc.sync=\"sortDesc\"\n        :sort-direction=\"sortDirection\"\n        :filter=\"filter\"\n        :filter-included-fields=\"filterOn\"\n        @filtered=\"onFiltered\"\n      >\n        <template #cell(avatar)=\"data\">\n          <b-avatar :src=\"data.value\" />\n        </template>\n\n        <template #cell(status)=\"data\">\n          <b-badge :variant=\"status[1][data.value]\">\n            {{ status[0][data.value] }}\n          </b-badge>\n        </template>\n      </b-table>\n    </b-col>\n\n    <b-col\n      cols=\"12\"\n    >\n      <b-pagination\n        v-model=\"currentPage\"\n        :total-rows=\"totalRows\"\n        :per-page=\"perPage\"\n        align=\"center\"\n        size=\"sm\"\n        class=\"my-0\"\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {\n  BTable, BAvatar, BBadge, BRow, BCol, BFormGroup, BFormSelect, BPagination, BInputGroup, BFormInput, BInputGroupAppend, BButton,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n    BAvatar,\n    BBadge,\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormSelect,\n    BPagination,\n    BInputGroup,\n    BFormInput,\n    BInputGroupAppend,\n    BButton,\n  },\n  data() {\n    return {\n      perPage: 5,\n      pageOptions: [3, 5, 10],\n      totalRows: 1,\n      currentPage: 1,\n      sortBy: '',\n      sortDesc: false,\n      sortDirection: 'asc',\n      filter: null,\n      filterOn: [],\n      infoModal: {\n        id: 'info-modal',\n        title: '',\n        content: '',\n      },\n      fields: [\n        {\n          key: 'id', label: 'Id',\n        },\n        {\n          key: 'avatar', label: 'Avatar',\n        },\n        { key: 'full_name', label: 'Full Name', sortable: true },\n        { key: 'post', label: 'Post', sortable: true },\n        'email',\n        'city',\n        'start_date',\n        'salary',\n        'age',\n        'experience',\n        { key: 'status', label: 'Status', sortable: true },\n      ],\n      items: [\n        {\n          id: 1,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/10-small.png'),\n          full_name: \"Korrie O'Crevy\",\n          post: 'Nuclear Power Engineer',\n          email: 'kocrevy0@thetimes.co.uk',\n          city: 'Krasnosilka',\n          start_date: '09/23/2016',\n          salary: '$23896.35',\n          age: '61',\n          experience: '1 Year',\n          status: 2,\n        },\n        {\n          id: 2,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/1-small.png'),\n          full_name: 'Bailie Coulman',\n          post: 'VP Quality Control',\n          email: 'bcoulman1@yolasite.com',\n          city: 'Hinigaran',\n          start_date: '05/20/2018',\n          salary: '$13633.69',\n          age: '63',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 3,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Stella Ganderton',\n          post: 'Operator',\n          email: 'sganderton2@tuttocitta.it',\n          city: 'Golcowa',\n          start_date: '03/24/2018',\n          salary: '$13076.28',\n          age: '66',\n          experience: '6 Years',\n          status: 5,\n        },\n        {\n          id: 4,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/3-small.png'),\n          full_name: 'Dorolice Crossman',\n          post: 'Cost Accountant',\n          email: 'dcrossman3@google.co.jp',\n          city: 'Paquera',\n          start_date: '12/03/2017',\n          salary: '$12336.17',\n          age: '22',\n          experience: '2 Years',\n          status: 2,\n        },\n        {\n          id: 5,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/4-small.png'),\n          full_name: 'Harmonia Nisius',\n          post: 'Senior Cost Accountant',\n          email: 'hnisius4@gnu.org',\n          city: 'Lucan',\n          start_date: '08/25/2017',\n          salary: '$10909.52',\n          age: '33',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 6,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/5-small.png'),\n          full_name: 'Genevra Honeywood',\n          post: 'Geologist',\n          email: 'ghoneywood5@narod.ru',\n          city: 'Maofan',\n          start_date: '06/01/2017',\n          salary: '$17803.80',\n          age: '61',\n          experience: '1 Year',\n          status: 1,\n        },\n        {\n          id: 7,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/7-small.png'),\n          full_name: 'Eileen Diehn',\n          post: 'Environmental Specialist',\n          email: 'ediehn6@163.com',\n          city: 'Lampuyang',\n          start_date: '10/15/2017',\n          salary: '$18991.67',\n          age: '59',\n          experience: '9 Years',\n          status: 3,\n        },\n        {\n          id: 8,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Richardo Aldren',\n          post: 'Senior Sales Associate',\n          email: 'raldren7@mtv.com',\n          city: 'Skoghall',\n          start_date: '11/05/2016',\n          salary: '$19230.13',\n          age: '55',\n          experience: '5 Years',\n          status: 3,\n        },\n        {\n          id: 9,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/2-small.png'),\n          full_name: 'Allyson Moakler',\n          post: 'Safety Technician',\n          email: 'amoakler8@shareasale.com',\n          city: 'Mogilany',\n          start_date: '12/29/2018',\n          salary: '$11677.32',\n          age: '39',\n          experience: '9 Years',\n          status: 5,\n        },\n        {\n          id: 10,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/6-small.png'),\n          full_name: 'Merline Penhalewick',\n          post: 'Junior Executive',\n          email: 'mpenhalewick9@php.net',\n          city: 'Kanuma',\n          start_date: '04/19/2019',\n          salary: '$15939.52',\n          age: '23',\n          experience: '3 Years',\n          status: 2,\n        },\n      ],\n      status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],\n    }\n  },\n  computed: {\n    sortOptions() {\n      // Create an options list from our fields\n      return this.fields\n        .filter(f => f.sortable)\n        .map(f => ({ text: f.label, value: f.key }))\n    },\n  },\n  mounted() {\n    // Set the initial number of items\n    this.totalRows = this.items.length\n  },\n  methods: {\n    info(item, index, button) {\n      this.infoModal.title = `Row index: ${index}`\n      this.infoModal.content = JSON.stringify(item, null, 2)\n      this.$root.$emit('bv::show::modal', this.infoModal.id, button)\n    },\n    resetInfoModal() {\n      this.infoModal.title = ''\n      this.infoModal.content = ''\n    },\n    onFiltered(filteredItems) {\n      // Trigger pagination to update the number of buttons/pages due to filtering\n      this.totalRows = filteredItems.length\n      this.currentPage = 1\n    },\n  },\n}\n</script>\n";
var codeLight = "\n<template>\n  <b-table-lite\n    hover\n    :items=\"items\"\n  />\n</template>\n\n<script>\nimport BCardCode from '@core/components/b-card-code/BCardCode.vue'\nimport { BTableLite } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BTableLite,\n  },\n  data() {\n    return {\n      items: [\n        {\n          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', Occupation: 'Job',\n        },\n        {\n          age: 21, first_name: 'Larsen', last_name: 'Shaw', Occupation: 'Job',\n        },\n        {\n          age: 89, first_name: 'Geneva', last_name: 'Wilson', Occupation: 'Bussiness',\n        },\n        {\n          age: 38, first_name: 'Jami', last_name: 'Carney', Occupation: 'Bussiness',\n        },\n        {\n          age: 40, first_name: 'James', last_name: 'Thomson', Occupation: 'Job',\n        },\n      ],\n    }\n  },\n}\n</script>\n";
var codeSimple = "\n<template>\n  <div>\n    <b-table-simple\n      hover\n      small\n      caption-top\n      responsive\n    >\n      <caption>Items sold in August, grouped by Country and City:</caption>\n      <colgroup><col><col></colgroup>\n      <colgroup><col><col><col></colgroup>\n      <colgroup><col><col></colgroup>\n      <b-thead head-variant=\"light\">\n        <b-tr>\n          <b-th colspan=\"2\">\n            Region\n          </b-th>\n          <b-th colspan=\"3\">\n            Clothes\n          </b-th>\n          <b-th colspan=\"2\">\n            Accessories\n          </b-th>\n        </b-tr>\n        <b-tr>\n          <b-th>Country</b-th>\n          <b-th>City</b-th>\n          <b-th>Trousers</b-th>\n          <b-th>Skirts</b-th>\n          <b-th>Dresses</b-th>\n          <b-th>Bracelets</b-th>\n          <b-th>Rings</b-th>\n        </b-tr>\n      </b-thead>\n      <b-tbody>\n        <b-tr>\n          <b-th rowspan=\"3\">\n            Belgium\n          </b-th>\n          <b-th class=\"text-right\">\n            Antwerp\n          </b-th>\n          <b-td>56</b-td>\n          <b-td>22</b-td>\n          <b-td>43</b-td>\n          <b-td variant=\"success\">\n            72\n          </b-td>\n          <b-td>23</b-td>\n        </b-tr>\n        <b-tr>\n          <b-th class=\"text-right\">\n            Gent\n          </b-th>\n          <b-td>46</b-td>\n          <b-td variant=\"warning\">\n            18\n          </b-td>\n          <b-td>50</b-td>\n          <b-td>61</b-td>\n          <b-td variant=\"danger\">\n            15\n          </b-td>\n        </b-tr>\n        <b-tr>\n          <b-th class=\"text-right\">\n            Brussels\n          </b-th>\n          <b-td>51</b-td>\n          <b-td>27</b-td>\n          <b-td>38</b-td>\n          <b-td>69</b-td>\n          <b-td>28</b-td>\n        </b-tr>\n        <b-tr>\n          <b-th rowspan=\"2\">\n            The Netherlands\n          </b-th>\n          <b-th class=\"text-right\">\n            Amsterdam\n          </b-th>\n          <b-td variant=\"success\">\n            89\n          </b-td>\n          <b-td>34</b-td>\n          <b-td>69</b-td>\n          <b-td>85</b-td>\n          <b-td>38</b-td>\n        </b-tr>\n        <b-tr>\n          <b-th class=\"text-right\">\n            Utrecht\n          </b-th>\n          <b-td>80</b-td>\n          <b-td variant=\"danger\">\n            12\n          </b-td>\n          <b-td>43</b-td>\n          <b-td>36</b-td>\n          <b-td variant=\"warning\">\n            19\n          </b-td>\n        </b-tr>\n      </b-tbody>\n      <b-tfoot>\n        <b-tr>\n          <b-td\n            colspan=\"7\"\n            variant=\"secondary\"\n            class=\"text-right\"\n          >\n            Total Rows: <b>5</b>\n          </b-td>\n        </b-tr>\n      </b-tfoot>\n    </b-table-simple>\n  </div>\n</template>\n";

/***/ })

}]);