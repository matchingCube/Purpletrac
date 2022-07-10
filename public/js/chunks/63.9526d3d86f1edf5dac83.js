(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  props: {
    variant: {
      type: String,
      "default": 'primary'
    },
    icon: {
      type: String,
      "default": null
    },
    title: {
      type: String,
      "default": null
    },
    text: {
      type: String,
      "default": null
    },
    hideClose: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _GoodTableBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodTableBasic.vue */ "./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue");
/* harmony import */ var _GoodTableRowGroup_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoodTableRowGroup.vue */ "./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue");
/* harmony import */ var _GoodTableColumnSearch_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoodTableColumnSearch.vue */ "./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue");
/* harmony import */ var _GoodTableAdvanceSearch_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GoodTableAdvanceSearch.vue */ "./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue");
/* harmony import */ var _GoodTableI18n_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GoodTableI18n.vue */ "./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue");
/* harmony import */ var _GoodTableSsr_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GoodTableSsr.vue */ "./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue");
//
//
//
//
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
    GoodTableBasic: _GoodTableBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    GoodTableRowGroup: _GoodTableRowGroup_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    GoodTableColumnSearch: _GoodTableColumnSearch_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    GoodTableAdvanceSearch: _GoodTableAdvanceSearch_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    GoodTableI18n: _GoodTableI18n_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    GoodTableSsr: _GoodTableSsr_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/vue-good-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_3__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSelect"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      pageLength: 5,
      dir: false,
      codeAdvance: _code__WEBPACK_IMPORTED_MODULE_5__["codeAdvance"],
      columns: [{
        label: 'Name',
        field: 'fullName'
      }, {
        label: 'Email',
        field: 'email'
      }, {
        label: 'Post',
        field: 'post'
      }, {
        label: 'City',
        field: 'city'
      }, {
        label: 'Date',
        field: 'startDate'
      }, {
        label: 'Salary',
        field: 'salary'
      }],
      rows: [],
      searchTerm: ''
    };
  },
  computed: {
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_4__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this = this;

    this.$http.get('/good-table/advanced-search').then(function (res) {
      _this.rows = res.data;
    });
  },
  methods: {
    advanceSearch: function advanceSearch(val) {
      this.searchTerm = val;
    },
    onRowClick: function onRowClick(params) {
      this.$toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        props: {
          title: "Hello user! You have clicked on row ".concat(params.row.id),
          icon: 'UserIcon',
          variant: 'success'
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/vue-good-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_2__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSelect"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"]
  },
  data: function data() {
    return {
      pageLength: 3,
      dir: false,
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_4__["codeBasic"],
      columns: [{
        label: 'Name',
        field: 'fullName'
      }, {
        label: 'Email',
        field: 'email'
      }, {
        label: 'Date',
        field: 'startDate'
      }, {
        label: 'Salary',
        field: 'salary'
      }, {
        label: 'Status',
        field: 'status'
      }, {
        label: 'Action',
        field: 'action'
      }],
      rows: [],
      searchTerm: '',
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
      }]
    };
  },
  computed: {
    statusVariant: function statusVariant() {
      var statusColor = {
        /* eslint-disable key-spacing */
        Current: 'light-primary',
        Professional: 'light-success',
        Rejected: 'light-danger',
        Resigned: 'light-warning',
        Applied: 'light-info'
        /* eslint-enable key-spacing */

      };
      return function (status) {
        return statusColor[status];
      };
    },
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this = this;

    this.$http.get('/good-table/basic').then(function (res) {
      _this.rows = res.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/vue-good-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_2__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSelect"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"]
  },
  data: function data() {
    return {
      pageLength: 3,
      dir: false,
      codeColumnSearch: _code__WEBPACK_IMPORTED_MODULE_4__["codeColumnSearch"],
      columns: [{
        label: 'Name',
        field: 'fullName',
        filterOptions: {
          enabled: true,
          placeholder: 'Search Name'
        }
      }, {
        label: 'Email',
        field: 'email',
        filterOptions: {
          enabled: true,
          placeholder: 'Search Email'
        }
      }, {
        label: 'Date',
        field: 'startDate',
        filterOptions: {
          enabled: true,
          placeholder: 'Search Date'
        }
      }, {
        label: 'Salary',
        field: 'salary',
        filterOptions: {
          enabled: true,
          placeholder: 'Search Salary'
        }
      }, {
        label: 'Status',
        field: 'status',
        filterOptions: {
          enabled: true,
          placeholder: 'Search Status'
        }
      }, {
        label: 'Action',
        field: 'action'
      }],
      rows: [],
      searchTerm: ''
    };
  },
  computed: {
    statusVariant: function statusVariant() {
      var statusColor = {
        /* eslint-disable key-spacing */
        Current: 'light-primary',
        Professional: 'light-success',
        Rejected: 'light-danger',
        Resigned: 'light-warning',
        Applied: 'light-info'
        /* eslint-enable key-spacing */

      };
      return function (status) {
        return statusColor[status];
      };
    },
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this = this;

    this.$http.get('/good-table/basic').then(function (res) {
      _this.rows = res.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/vue-good-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_2__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSelect"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"]
  },
  data: function data() {
    return {
      pageLength: 5,
      codeI18n: _code__WEBPACK_IMPORTED_MODULE_4__["codeI18n"],
      dir: false,
      columns: [{
        label: 'Name',
        field: 'fullName'
      }, {
        label: 'Email',
        field: 'email'
      }, {
        label: 'Date',
        field: 'startDate'
      }, {
        label: 'Salary',
        field: 'salary'
      }, {
        label: 'Status',
        field: 'status'
      }, {
        label: 'Action',
        field: 'action'
      }],
      rows: [],
      searchTerm: ''
    };
  },
  computed: {
    statusVariant: function statusVariant() {
      var statusColor = {
        /* eslint-disable key-spacing */
        Current: 'light-primary',
        Professional: 'light-success',
        Rejected: 'light-danger',
        Resigned: 'light-warning',
        Applied: 'light-info'
        /* eslint-enable key-spacing */

      };
      return function (status) {
        return statusColor[status];
      };
    },
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this = this;

    this.$http.get('/good-table/basic').then(function (res) {
      _this.rows = res.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/vue-good-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_2__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSelect"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"]
  },
  data: function data() {
    return {
      pageLength: 5,
      dir: false,
      codeRowGroup: _code__WEBPACK_IMPORTED_MODULE_4__["codeRowGroup"],
      columns: [{
        label: 'Name',
        field: 'fullName'
      }, {
        label: 'Email',
        field: 'email'
      }, {
        label: 'Date',
        field: 'startDate'
      }, {
        label: 'Salary',
        field: 'salary'
      }, {
        label: 'Status',
        field: 'status'
      }, {
        label: 'Action',
        field: 'action'
      }],
      rows: [],
      searchTerm: ''
    };
  },
  computed: {
    statusVariant: function statusVariant() {
      var statusColor = {
        /* eslint-disable key-spacing */
        Current: 'light-primary',
        Professional: 'light-success',
        Rejected: 'light-danger',
        Resigned: 'light-warning',
        Applied: 'light-info'
        /* eslint-enable key-spacing */

      };
      return function (status) {
        return statusColor[status];
      };
    },
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this = this;

    this.$http.get('/good-table/row-group').then(function (res) {
      _this.rows = res.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/themes/prism-tomorrow.css */ "./node_modules/prismjs/themes/prism-tomorrow.css");
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-prism-component */ "./node_modules/vue-prism-component/dist/vue-prism-component.common.js");
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_prism_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/table/vue-good-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_2__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSelect"],
    Prism: vue_prism_component__WEBPACK_IMPORTED_MODULE_5___default.a,
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"]
  },
  data: function data() {
    return {
      log: [],
      pageLength: 3,
      dir: false,
      pages: ['3', '5', '10'],
      codeSSR: _code__WEBPACK_IMPORTED_MODULE_7__["codeSSR"],
      columns: [{
        label: 'Name',
        field: 'fullName'
      }, {
        label: 'Email',
        field: 'email'
      }, {
        label: 'Date',
        field: 'startDate'
      }, {
        label: 'Salary',
        field: 'salary'
      }, {
        label: 'Status',
        field: 'status'
      }, {
        label: 'Action',
        field: 'action'
      }],
      rows: [],
      searchTerm: '',
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
      }]
    };
  },
  computed: {
    statusVariant: function statusVariant() {
      var statusColor = {
        /* eslint-disable key-spacing */
        Current: 'light-primary',
        Professional: 'light-success',
        Rejected: 'light-danger',
        Resigned: 'light-warning',
        Applied: 'light-info'
        /* eslint-enable key-spacing */

      };
      return function (status) {
        return statusColor[status];
      };
    },
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_6__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this = this;

    this.$http.get('/good-table/table_ssr').then(function (res) {
      _this.rows = res.data;
    });
  },
  methods: {
    handleSearch: function handleSearch(searching) {
      this.log.push("The user searched for: ".concat(searching));
    },
    handleChangePage: function handleChangePage(page) {
      this.log.push("The user changed the page to: ".concat(page));
    },
    handlePageChange: function handlePageChange(active) {
      this.log.push("the user change page:  ".concat(active));
    },
    onSortChange: function onSortChange(params) {
      this.log.push("the user ordered:  ".concat(params[0].type));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toastification-close-icon[data-v-7834b2fa],\n.toastification-title[data-v-7834b2fa] {\n  line-height: 26px;\n}\n.toastification-title[data-v-7834b2fa] {\n  color: inherit;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .vgt-wrap .vgt-table th.sortable:before {\n  border-top-color: #ebe9f1;\n}\n[dir] .vgt-wrap .vgt-table th.sortable:after {\n  border-bottom-color: #ebe9f1;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #7367f0;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #7367f0;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  left: 2rem;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  right: 2rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table {\n  background-color: #283046;\n  border-color: #3b4253;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th, [dir] body.dark-layout .vgt-wrap .vgt-table td, [dir] body.dark-layout .vgt-wrap .vgt-table tr {\n  border-color: #3b4253;\n  background-color: #283046;\n}\nbody.dark-layout .vgt-wrap .vgt-table th span,\nbody.dark-layout .vgt-wrap .vgt-table td span,\nbody.dark-layout .vgt-wrap .vgt-table tr span {\n  color: #b4b7bd;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input,\nbody.dark-layout .vgt-wrap .vgt-table td input,\nbody.dark-layout .vgt-wrap .vgt-table tr input {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th input, [dir] body.dark-layout .vgt-wrap .vgt-table td input, [dir] body.dark-layout .vgt-wrap .vgt-table tr input {\n  background-color: #283046;\n  border-color: #404656;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table td input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table tr input::placeholder {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::before {\n  border-top-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #7367f0;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #7367f0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item {\n  margin-right: 0.3571rem;\n  margin-left: 0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2):not(.active) .page-link {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2):not(.active) .page-link {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item {\n  margin-right: 0;\n  margin-left: 0.3571rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.active .page-link {\n  border-top-right-radius: 5rem !important;\n  border-bottom-right-radius: 5rem !important;\n}\n[dir] .vgt-table.striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(51, 68, 109, 0.03);\n}\n\n/* Utility styles\n************************************************/\n[dir=ltr] .vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-right-align {\n  text-align: left;\n}\n[dir=ltr] .vgt-left-align {\n  text-align: left;\n}\n[dir=rtl] .vgt-left-align {\n  text-align: right;\n}\n[dir] .vgt-center-align {\n  text-align: center;\n}\n[dir=ltr] .vgt-pull-left {\n  float: left !important;\n}\n[dir=rtl] .vgt-pull-left {\n  float: right !important;\n}\n[dir=ltr] .vgt-pull-right {\n  float: right !important;\n}\n[dir=rtl] .vgt-pull-right {\n  float: left !important;\n}\n.vgt-clearfix::after {\n  display: block;\n  content: \"\";\n}\n[dir] .vgt-clearfix::after {\n  clear: both;\n}\n.vgt-responsive {\n  width: 100%;\n  overflow-x: auto;\n  position: relative;\n}\n.vgt-text-disabled {\n  color: #909399;\n}\n.sr-only {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n.vgt-wrap {\n  position: relative;\n}\n.vgt-fixed-header {\n  position: absolute;\n  z-index: 10;\n  overflow-x: auto;\n}\ntable.vgt-table {\n  font-size: 16px;\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 100%;\n  table-layout: auto;\n}\n[dir] table.vgt-table {\n  background-color: #FFFFFF;\n  border: 1px solid #ebe9f1;\n}\ntable.vgt-table td {\n  vertical-align: top;\n  color: #6e6b7b;\n}\n[dir] table.vgt-table td {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n  border-bottom: 1px solid #ebe9f1;\n}\n[dir] table.vgt-table tr.clickable {\n  cursor: pointer;\n}\n[dir] table.vgt-table tr.clickable:hover {\n  background-color: #F1F5FD;\n}\n.vgt-table th {\n  vertical-align: middle;\n  position: relative;\n}\n[dir=ltr] .vgt-table th {\n  padding: 0.75em 1.5em 0.75em 0.75em;\n}\n[dir=rtl] .vgt-table th {\n  padding: 0.75em 0.75em 0.75em 1.5em;\n}\n.vgt-table th.sortable button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n[dir] .vgt-table th.sortable button {\n  background: transparent;\n  border: none;\n}\n[dir=ltr] .vgt-table th.sortable button {\n  left: 0;\n}\n[dir=rtl] .vgt-table th.sortable button {\n  right: 0;\n}\n.vgt-table th.sortable button:focus {\n  outline: none;\n}\n.vgt-table th.sortable button:after {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:after {\n  margin-top: -7px;\n  border-bottom: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:after {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:after {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.sortable button:before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:before {\n  margin-bottom: -7px;\n  border-top: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:before {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:before {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.line-numbers, .vgt-table th.vgt-checkbox-col {\n  color: #6e6b7b;\n  word-wrap: break-word;\n  width: 25px;\n}\n[dir] .vgt-table th.line-numbers, [dir] .vgt-table th.vgt-checkbox-col {\n  padding: 0 0.75em 0 0.75em;\n  text-align: center;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table th.line-numbers, [dir=ltr] .vgt-table th.vgt-checkbox-col {\n  border-right: 1px solid #ebe9f1;\n}\n[dir=rtl] .vgt-table th.line-numbers, [dir=rtl] .vgt-table th.vgt-checkbox-col {\n  border-left: 1px solid #ebe9f1;\n}\n[dir] .vgt-table th.filter-th {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n}\n[dir] .vgt-table th.vgt-row-header {\n  border-bottom: 2px solid #ebe9f1;\n  border-top: 2px solid #ebe9f1;\n  background-color: white;\n}\n.vgt-table th.vgt-row-header .triangle {\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n[dir] .vgt-table th.vgt-row-header .triangle {\n  border-radius: 15%;\n  margin: 0px 8px;\n}\n.vgt-table th.vgt-row-header .triangle:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n  transition: 0.3s ease transform;\n}\n[dir] .vgt-table th.vgt-row-header .triangle:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle:after {\n  left: 50%;\n  border-left: 6px solid #6e6b7b;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle:after {\n  right: 50%;\n  border-right: 6px solid #6e6b7b;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(-90deg);\n}\n.vgt-table thead th {\n  color: #6e6b7b;\n  vertical-align: bottom;\n}\n[dir] .vgt-table thead th {\n  border-bottom: 1px solid #ebe9f1;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table thead th {\n  padding-right: 1.5em;\n}\n[dir=rtl] .vgt-table thead th {\n  padding-left: 1.5em;\n}\n.vgt-table thead th.vgt-checkbox-col {\n  vertical-align: middle;\n}\n[dir] .vgt-table thead th.sorting-asc button:after {\n  border-bottom: 5px solid #409eff;\n}\n[dir] .vgt-table thead th.sorting-desc button:before {\n  border-top: 5px solid #409eff;\n}\n.vgt-input, .vgt-select {\n  width: 100%;\n  height: 32px;\n  line-height: 1;\n  display: block;\n  font-size: 14px;\n  font-weight: normal;\n  color: #6e6b7b;\n  box-sizing: border-box;\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n[dir] .vgt-input, [dir] .vgt-select {\n  padding: 6px 12px;\n  border-radius: 4px;\n  background-image: none;\n  background-color: #fff;\n  border: 1px solid #d8d6de;\n}\n.vgt-input::placeholder, .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #6e6b7b;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-input:focus, .vgt-select:focus {\n  outline: none;\n}\n[dir] .vgt-input:focus, [dir] .vgt-select:focus {\n  border-color: #409eff;\n}\n.vgt-loading {\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n}\n[dir] .vgt-loading {\n  margin-top: 117px;\n}\n.vgt-loading__content {\n  color: #409eff;\n}\n[dir] .vgt-loading__content {\n  background-color: #c0dfff;\n  padding: 7px 30px;\n  border-radius: 3px;\n}\n.vgt-inner-wrap.is-loading {\n  opacity: 0.5;\n  pointer-events: none;\n}\n[dir] .vgt-table.bordered td, [dir] .vgt-table.bordered th {\n  border: 1px solid #ebe9f1;\n}\n[dir] .vgt-table.bordered th.vgt-row-header {\n  border-bottom: 3px solid #ebe9f1;\n}\n[dir=ltr] .vgt-wrap.rtl {\n  direction: rtl;\n}\n[dir=rtl] .vgt-wrap.rtl {\n  direction: ltr;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table thead th, [dir=ltr] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-left: 1.5em;\n  padding-right: 0.75em;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table thead th, [dir=rtl] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-right: 1.5em;\n  padding-left: 0.75em;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-right: 5px;\n  margin-left: 0px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-left: 5px;\n  margin-right: 0px;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  right: inherit;\n  left: 6px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  left: inherit;\n  right: 6px;\n}\n[dir] .vgt-table.condensed td, [dir] .vgt-table.condensed th.vgt-row-header {\n  padding: 0.4em 0.4em 0.4em 0.4em;\n}\n\n/*responsive compactMode*/\n@media (max-width: 576px) {\n.vgt-compact * {\n    box-sizing: border-box;\n}\n.vgt-compact tbody,\n.vgt-compact tr,\n.vgt-compact td {\n    display: block;\n    width: 100%;\n}\n.vgt-compact thead {\n    display: none;\n}\n[dir] .vgt-compact tr {\n    margin-bottom: 15px;\n}\n.vgt-compact td {\n    position: relative;\n}\n[dir=ltr] .vgt-compact td {\n    text-align: right;\n}\n[dir=rtl] .vgt-compact td {\n    text-align: left;\n}\n.vgt-compact td:before {\n    content: attr(data-label);\n    position: relative;\n    width: 40%;\n    font-weight: bold;\n}\n[dir=ltr] .vgt-compact td:before {\n    float: left;\n    left: 0;\n    padding-left: 10px;\n    text-align: left;\n}\n[dir=rtl] .vgt-compact td:before {\n    float: right;\n    right: 0;\n    padding-right: 10px;\n    text-align: right;\n}\n.vgt-compact th.line-numbers {\n    width: 100% !important;\n    display: block;\n}\n[dir] .vgt-compact th.line-numbers {\n    padding: 0.3em 1em !important;\n}\n}\n.vgt-global-search {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: stretch;\n}\n[dir] .vgt-global-search {\n  padding: 5px 0px;\n  border: 1px solid #ebe9f1;\n  border-bottom: 0px;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-global-search form {\n  display: flex;\n}\n[dir] .vgt-global-search form label {\n  margin-top: 3px;\n}\n.vgt-global-search__input {\n  position: relative;\n  flex-grow: 1;\n}\n[dir=ltr] .vgt-global-search__input {\n  padding-left: 40px;\n}\n[dir=rtl] .vgt-global-search__input {\n  padding-right: 40px;\n}\n.vgt-global-search__input .input__icon {\n  position: absolute;\n  max-width: 32px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon {\n  left: 0px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon {\n  right: 0px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass {\n  display: block;\n  width: 16px;\n  height: 16px;\n  position: relative;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-top: 3px;\n  border: 2px solid #494949;\n  border-radius: 50%;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-left: 8px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-right: 8px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -5px;\n  width: 8px;\n  height: 4px;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #494949;\n  border-radius: 2px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  right: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  left: -7px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n}\n[dir=ltr] .vgt-global-search__actions {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-global-search__actions {\n  margin-right: 10px;\n}\n.vgt-selection-info-row {\n  font-size: 13px;\n  color: #d3aa3b;\n  font-weight: bold;\n}\n[dir] .vgt-selection-info-row {\n  background: #fdf9e8;\n  padding: 5px 16px;\n  border-top: 1px solid #ebe9f1;\n}\n[dir=ltr] .vgt-selection-info-row {\n  border-left: 1px solid #ebe9f1;\n  border-right: 1px solid #ebe9f1;\n}\n[dir=rtl] .vgt-selection-info-row {\n  border-right: 1px solid #ebe9f1;\n  border-left: 1px solid #ebe9f1;\n}\n.vgt-selection-info-row a {\n  font-weight: bold;\n  display: inline-block;\n}\n[dir=ltr] .vgt-selection-info-row a {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-selection-info-row a {\n  margin-right: 10px;\n}\n[dir] .vgt-wrap__actions-footer {\n  border: 1px solid #ebe9f1;\n}\n.vgt-wrap__footer {\n  color: #6e6b7b;\n  font-size: 1.1rem;\n}\n[dir] .vgt-wrap__footer {\n  padding: 1em;\n  border: 1px solid #ebe9f1;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap__footer .footer__row-count__label, .vgt-wrap__footer .footer__row-count__select {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__row-count__label {\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__row-count__select {\n  font-size: 1.1rem;\n  width: auto;\n  height: auto;\n  color: #6e6b7b;\n  font-weight: bold;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select {\n  background-color: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count__select {\n  margin-left: 8px;\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count__select {\n  margin-right: 8px;\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n.vgt-wrap__footer .footer__row-count__select:focus {\n  outline: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #6e6b7b;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap__footer .footer__navigation {\n  font-size: 1.1rem;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-right: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-left: 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-btn, .vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n  vertical-align: middle;\n  color: #909399;\n}\n.vgt-wrap__footer .footer__navigation__page-btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-decoration: none;\n  color: #6e6b7b;\n  font-weight: bold;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn {\n  background: transparent;\n  border: none;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn:hover {\n  cursor: pointer;\n}\n.vgt-wrap__footer .footer__navigation__page-btn.disabled, .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  opacity: 0.5;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled, [dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  cursor: not-allowed;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #6e6b7b;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #6e6b7b;\n}\n.vgt-wrap__footer .footer__navigation__page-btn span {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  border-radius: 15%;\n  margin: 0;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  left: 50%;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  right: 50%;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-right: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-left: 6px solid #409eff;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-left: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-right: 6px solid #409eff;\n  margin-right: -3px;\n}\n.vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n}\n[dir] .vgt-wrap__footer .footer__navigation__info, [dir] .vgt-wrap__footer .footer__navigation__page-info {\n  margin: 0px 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-info span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n  font-weight: bold;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  text-align: center;\n  margin: 0px 10px;\n}\n@media only screen and (max-width: 750px) {\n  /* on small screens hide the info */\n.vgt-wrap__footer .footer__navigation__info {\n    display: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-left: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-right: 16px;\n}\n}\n[dir] .vgt-table.nocturnal {\n  border: 1px solid #435169;\n  background-color: #324057;\n}\n[dir] .vgt-table.nocturnal tr.clickable:hover {\n  background-color: #445168;\n}\n.vgt-table.nocturnal td {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal td {\n  border-bottom: 1px solid #435169;\n}\n.vgt-table.nocturnal th.line-numbers, .vgt-table.nocturnal th.vgt-checkbox-col {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal th.line-numbers, [dir] .vgt-table.nocturnal th.vgt-checkbox-col {\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir=ltr] .vgt-table.nocturnal th.line-numbers, [dir=ltr] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.nocturnal th.line-numbers, [dir=rtl] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.nocturnal thead th {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-table.nocturnal thead th.sortable:before {\n  border-top-color: #3e5170;\n}\n[dir] .vgt-table.nocturnal thead th.sortable:after {\n  border-bottom-color: #3e5170;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-desc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.nocturnal.bordered td, [dir] .vgt-table.nocturnal.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input, .vgt-table.nocturnal .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal .vgt-input, [dir] .vgt-table.nocturnal .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input::placeholder, .vgt-table.nocturnal .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__label {\n  color: #8290A7;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  color: #C7CED8;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  background: #232d3f;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 10px;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #C7CED8;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #C7CED8;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-info {\n  color: #8290A7;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-table.black-rhino {\n  border: 1px solid #435169;\n  background-color: #dfe5ee;\n}\n[dir] .vgt-table.black-rhino tr.clickable:hover {\n  background-color: #fff;\n}\n.vgt-table.black-rhino td {\n  color: #49515e;\n}\n[dir] .vgt-table.black-rhino td {\n  border-bottom: 1px solid #bbc5d6;\n}\n.vgt-table.black-rhino th.line-numbers, .vgt-table.black-rhino th.vgt-checkbox-col {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino th.line-numbers, [dir] .vgt-table.black-rhino th.vgt-checkbox-col {\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino th.line-numbers, [dir=ltr] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.black-rhino th.line-numbers, [dir=rtl] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.black-rhino thead th {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino thead th {\n  text-shadow: 1px 1px #3e5170;\n}\n[dir=rtl] .vgt-table.black-rhino thead th {\n  text-shadow: -1px 1px #3e5170;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:before {\n  border-top-color: #607498;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:after {\n  border-bottom-color: #607498;\n}\n.vgt-table.black-rhino thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.black-rhino.bordered td {\n  border: 1px solid #bbc5d6;\n}\n[dir] .vgt-table.black-rhino.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.black-rhino .vgt-input, .vgt-table.black-rhino .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino .vgt-input, [dir] .vgt-table.black-rhino .vgt-select {\n  background-color: #34445f;\n  border: 1px solid transparent;\n}\n.vgt-table.black-rhino .vgt-input::placeholder, .vgt-table.black-rhino .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  color: #49515e;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  background: #34445f;\n  border: none;\n  border-radius: 3px;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #49515e;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #dae2f0;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-info {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  background-color: #44516c;\n  border: 1px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-inner-wrap {\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.1), 0 1px 2px 0 rgba(50, 50, 93, 0.06);\n}\n.vgt-table.polar-bear {\n  border-spacing: 0;\n  border-collapse: separate;\n  font-size: 1rem;\n}\n[dir] .vgt-table.polar-bear {\n  background-color: #FFFFFF;\n  border: 1px solid #e3e8ee;\n  border-bottom: none;\n  border-radius: 0.25rem;\n}\n.vgt-table.polar-bear td {\n  color: #525f7f;\n}\n[dir] .vgt-table.polar-bear td {\n  padding: 1em 0.75em 1em 0.75em;\n  border-bottom: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: left;\n}\n.vgt-table.polar-bear th.line-numbers, .vgt-table.polar-bear th.vgt-checkbox-col {\n  color: #394567;\n}\n[dir] .vgt-table.polar-bear th.line-numbers, [dir] .vgt-table.polar-bear th.vgt-checkbox-col {\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-table.polar-bear th.line-numbers, [dir=ltr] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-right: 1px solid #e3e8ee;\n}\n[dir=rtl] .vgt-table.polar-bear th.line-numbers, [dir=rtl] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-left: 1px solid #e3e8ee;\n}\n.vgt-table.polar-bear thead th {\n  color: #667b94;\n  font-weight: 600;\n}\n[dir] .vgt-table.polar-bear thead th {\n  border-bottom: 1px solid #e3e8ee;\n  background: #f7fafc;\n}\n.vgt-table.polar-bear thead th.sorting-asc, .vgt-table.polar-bear thead th.sorting-desc {\n  color: #5e72e4;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-desc:before {\n  border-top: 5px solid #7485e8;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-asc:after {\n  border-bottom: 5px solid #7485e8;\n}\n.vgt-table.polar-bear thead th .vgt-input, .vgt-table.polar-bear thead th .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input, [dir] .vgt-table.polar-bear thead th .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-table.polar-bear thead th .vgt-input:focus, .vgt-table.polar-bear thead th .vgt-select:focus {\n  outline: 0;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input:focus, [dir] .vgt-table.polar-bear thead th .vgt-select:focus {\n  border-color: #cae0fe;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir] .vgt-table.polar-bear.bordered td {\n  border: 1px solid #e3e8ee;\n  background: #FFFFFF;\n}\n[dir] .vgt-table.polar-bear.bordered th {\n  border: 1px solid #e3e8ee;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  border-top: 0px;\n  background: linear-gradient(#f7fafc, #f7fafc);\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  color: #525f7f;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  text-align: center;\n  background: #FFFFFF;\n  border: none;\n  padding: 5px;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 30px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 30px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #5e72e4;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -3px;\n  border-top: 6px solid #525f7f;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  right: 15px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  left: 15px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #394567;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-info {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #dde3ea;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #dde3ea;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #394567;\n  opacity: 0.3;\n  /* Firefox */\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTable.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "toastification" }, [
    _c(
      "div",
      { staticClass: "d-flex align-items-start" },
      [
        _c(
          "b-avatar",
          {
            staticClass: "mr-75 flex-shrink-0",
            attrs: { variant: _vm.variant, size: "1.8rem" },
          },
          [_c("feather-icon", { attrs: { icon: _vm.icon, size: "15" } })],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-grow-1" }, [
          _c("div", [
            _vm.title
              ? _c("h5", {
                  staticClass: "mb-0 font-weight-bolder toastification-title",
                  class: "text-" + _vm.variant,
                  domProps: { textContent: _vm._s(_vm.title) },
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.text
              ? _c("small", {
                  staticClass: "d-inline-block text-body",
                  domProps: { textContent: _vm._s(_vm.text) },
                })
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "cursor-pointer toastification-close-icon ml-auto ",
              on: {
                click: function ($event) {
                  return _vm.$emit("close-toast")
                },
              },
            },
            [
              !_vm.hideClose
                ? _c("feather-icon", {
                    staticClass: "text-body",
                    attrs: { icon: "XIcon" },
                  })
                : _vm._e(),
            ],
            1
          ),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=template&id=c5686d1c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=template&id=c5686d1c& ***!
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
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12" } },
        [
          _c("good-table-basic"),
          _vm._v(" "),
          _c("good-table-row-group"),
          _vm._v(" "),
          _c("good-table-column-search"),
          _vm._v(" "),
          _c("good-table-advance-search"),
          _vm._v(" "),
          _c("good-table-i18n"),
          _vm._v(" "),
          _c("good-table-ssr"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=template&id=7ff22cb0&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=template&id=7ff22cb0& ***!
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
    "b-card-code",
    {
      attrs: { title: "Advance Search Table" },
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
      _c(
        "div",
        { staticClass: "custom-search" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "4" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("Name:")]),
                      _vm._v(" "),
                      _c("b-form-input", {
                        staticClass: "d-inline-block",
                        attrs: { placeholder: "Search", type: "text" },
                        on: { input: _vm.advanceSearch },
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
                { attrs: { md: "4" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("Email:")]),
                      _vm._v(" "),
                      _c("b-form-input", {
                        staticClass: "d-inline-block",
                        attrs: { placeholder: "Search", type: "text" },
                        on: { input: _vm.advanceSearch },
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
                { attrs: { md: "4" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("Post:")]),
                      _vm._v(" "),
                      _c("b-form-input", {
                        staticClass: "d-inline-block",
                        attrs: { placeholder: "Search", type: "text" },
                        on: { input: _vm.advanceSearch },
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
                { attrs: { md: "4" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("City:")]),
                      _vm._v(" "),
                      _c("b-form-input", {
                        staticClass: "d-inline-block",
                        attrs: { placeholder: "Search", type: "text" },
                        on: { input: _vm.advanceSearch },
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
                { attrs: { md: "4" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("Date:")]),
                      _vm._v(" "),
                      _c("b-form-input", {
                        staticClass: "d-inline-block",
                        attrs: { placeholder: "Search", type: "text" },
                        on: { input: _vm.advanceSearch },
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
                { attrs: { md: "4" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [_vm._v("Salary:")]),
                      _vm._v(" "),
                      _c("b-form-input", {
                        staticClass: "d-inline-block",
                        attrs: { placeholder: "Search", type: "text" },
                        on: { input: _vm.advanceSearch },
                      }),
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
      _c("vue-good-table", {
        attrs: {
          columns: _vm.columns,
          rows: _vm.rows,
          rtl: _vm.direction,
          "search-options": {
            enabled: true,
            externalQuery: _vm.searchTerm,
          },
          "select-options": {
            enabled: true,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            selectionInfoClass: "custom-class",
            selectionText: "rows selected",
            clearSelectionText: "clear",
            disableSelectInfo: true, // disable the select info panel on top
            selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
          },
          "pagination-options": {
            enabled: true,
            perPage: _vm.pageLength,
          },
          theme: "my-theme",
        },
        on: { "on-row-click": _vm.onRowClick },
        scopedSlots: _vm._u([
          {
            key: "table-row",
            fn: function (props) {
              return [
                props.column.field === "fullName"
                  ? _c(
                      "span",
                      { staticClass: "text-nowrap" },
                      [
                        _c("b-avatar", {
                          staticClass: "mx-1",
                          attrs: { src: props.row.avatar },
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(props.row.fullName))]),
                      ],
                      1
                    )
                  : _c("span", [
                      _vm._v(
                        "\n        " +
                          _vm._s(props.formattedRow[props.column.field]) +
                          "\n      "
                      ),
                    ]),
              ]
            },
          },
          {
            key: "pagination-bottom",
            fn: function (props) {
              return [
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-between flex-wrap" },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mb-0 mt-1" },
                      [
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("\n            Showing 1 to\n          "),
                        ]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "mx-1",
                          attrs: { options: ["3", "5", "10"] },
                          on: {
                            input: function (value) {
                              return props.perPageChanged({
                                currentPerPage: value,
                              })
                            },
                          },
                          model: {
                            value: _vm.pageLength,
                            callback: function ($$v) {
                              _vm.pageLength = $$v
                            },
                            expression: "pageLength",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v(" of " + _vm._s(props.total) + " entries "),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-pagination", {
                          staticClass: "mt-1 mb-0",
                          attrs: {
                            value: 1,
                            "total-rows": props.total,
                            "per-page": _vm.pageLength,
                            "first-number": "",
                            "last-number": "",
                            align: "right",
                            "prev-class": "prev-item",
                            "next-class": "next-item",
                          },
                          on: {
                            input: function (value) {
                              return props.pageChanged({ currentPage: value })
                            },
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "prev-text",
                                fn: function () {
                                  return [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "ChevronLeftIcon",
                                        size: "18",
                                      },
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
                                      attrs: {
                                        icon: "ChevronRightIcon",
                                        size: "18",
                                      },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        }),
                      ],
                      1
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=template&id=6ca3010c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=template&id=6ca3010c& ***!
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
      attrs: { title: "Basic Table" },
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
        { staticClass: "custom-search d-flex justify-content-end" },
        [
          _c("b-form-group", [
            _c(
              "div",
              { staticClass: "d-flex align-items-center" },
              [
                _c("label", { staticClass: "mr-1" }, [_vm._v("Search")]),
                _vm._v(" "),
                _c("b-form-input", {
                  staticClass: "d-inline-block",
                  attrs: { placeholder: "Search", type: "text" },
                  model: {
                    value: _vm.searchTerm,
                    callback: function ($$v) {
                      _vm.searchTerm = $$v
                    },
                    expression: "searchTerm",
                  },
                }),
              ],
              1
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("vue-good-table", {
        attrs: {
          columns: _vm.columns,
          rows: _vm.rows,
          rtl: _vm.direction,
          "search-options": {
            enabled: true,
            externalQuery: _vm.searchTerm,
          },
          "select-options": {
            enabled: true,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            selectionInfoClass: "custom-class",
            selectionText: "rows selected",
            clearSelectionText: "clear",
            disableSelectInfo: true, // disable the select info panel on top
            selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
          },
          "pagination-options": {
            enabled: true,
            perPage: _vm.pageLength,
          },
        },
        scopedSlots: _vm._u([
          {
            key: "table-row",
            fn: function (props) {
              return [
                props.column.field === "fullName"
                  ? _c(
                      "span",
                      { staticClass: "text-nowrap" },
                      [
                        _c("b-avatar", {
                          staticClass: "mx-1",
                          attrs: { src: props.row.avatar },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v(_vm._s(props.row.fullName)),
                        ]),
                      ],
                      1
                    )
                  : props.column.field === "status"
                  ? _c(
                      "span",
                      [
                        _c(
                          "b-badge",
                          {
                            attrs: {
                              variant: _vm.statusVariant(props.row.status),
                            },
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(props.row.status) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : props.column.field === "action"
                  ? _c("span", [
                      _c(
                        "span",
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                variant: "link",
                                "toggle-class": "text-decoration-none",
                                "no-caret": "",
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "button-content",
                                    fn: function () {
                                      return [
                                        _c("feather-icon", {
                                          staticClass:
                                            "text-body align-middle mr-25",
                                          attrs: {
                                            icon: "MoreVerticalIcon",
                                            size: "16",
                                          },
                                        }),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ],
                                null,
                                true
                              ),
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "Edit2Icon" },
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Edit")]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "TrashIcon" },
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Delete")]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ])
                  : _c("span", [
                      _vm._v(
                        "\n        " +
                          _vm._s(props.formattedRow[props.column.field]) +
                          "\n      "
                      ),
                    ]),
              ]
            },
          },
          {
            key: "pagination-bottom",
            fn: function (props) {
              return [
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-between flex-wrap" },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mb-0 mt-1" },
                      [
                        _c("span", { staticClass: "text-nowrap " }, [
                          _vm._v("\n            Showing 1 to\n          "),
                        ]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "mx-1",
                          attrs: { options: ["3", "5", "10"] },
                          on: {
                            input: function (value) {
                              return props.perPageChanged({
                                currentPerPage: value,
                              })
                            },
                          },
                          model: {
                            value: _vm.pageLength,
                            callback: function ($$v) {
                              _vm.pageLength = $$v
                            },
                            expression: "pageLength",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v(" of " + _vm._s(props.total) + " entries "),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-pagination", {
                          staticClass: "mt-1 mb-0",
                          attrs: {
                            value: 1,
                            "total-rows": props.total,
                            "per-page": _vm.pageLength,
                            "first-number": "",
                            "last-number": "",
                            align: "right",
                            "prev-class": "prev-item",
                            "next-class": "next-item",
                          },
                          on: {
                            input: function (value) {
                              return props.pageChanged({ currentPage: value })
                            },
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "prev-text",
                                fn: function () {
                                  return [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "ChevronLeftIcon",
                                        size: "18",
                                      },
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
                                      attrs: {
                                        icon: "ChevronRightIcon",
                                        size: "18",
                                      },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        }),
                      ],
                      1
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=template&id=a82a37a0&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=template&id=a82a37a0& ***!
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
      attrs: { title: "Column Search Table" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeColumnSearch) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "div",
        { staticClass: "custom-search d-flex justify-content-end" },
        [
          _c("b-form-group", [
            _c(
              "div",
              { staticClass: "d-flex align-items-center" },
              [
                _c("label", { staticClass: "mr-1" }, [_vm._v("Search")]),
                _vm._v(" "),
                _c("b-form-input", {
                  staticClass: "d-inline-block",
                  attrs: { placeholder: "Search", type: "text" },
                  model: {
                    value: _vm.searchTerm,
                    callback: function ($$v) {
                      _vm.searchTerm = $$v
                    },
                    expression: "searchTerm",
                  },
                }),
              ],
              1
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("vue-good-table", {
        attrs: {
          columns: _vm.columns,
          rows: _vm.rows,
          rtl: _vm.direction,
          "search-options": {
            enabled: true,
            externalQuery: _vm.searchTerm,
          },
          "pagination-options": {
            enabled: true,
            perPage: _vm.pageLength,
          },
        },
        scopedSlots: _vm._u([
          {
            key: "table-row",
            fn: function (props) {
              return [
                props.column.field === "fullName"
                  ? _c(
                      "div",
                      { staticClass: "text-nowrap" },
                      [
                        _c("b-avatar", {
                          staticClass: "mx-1",
                          attrs: { src: props.row.avatar },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v(_vm._s(props.row.fullName)),
                        ]),
                      ],
                      1
                    )
                  : props.column.field === "status"
                  ? _c(
                      "span",
                      [
                        _c(
                          "b-badge",
                          {
                            attrs: {
                              variant: _vm.statusVariant(props.row.status),
                            },
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(props.row.status) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : props.column.field === "action"
                  ? _c("span", [
                      _c(
                        "span",
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                variant: "link",
                                "toggle-class": "text-decoration-none",
                                "no-caret": "",
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "button-content",
                                    fn: function () {
                                      return [
                                        _c("feather-icon", {
                                          staticClass:
                                            "text-body align-middle mr-25",
                                          attrs: {
                                            icon: "MoreVerticalIcon",
                                            size: "16",
                                          },
                                        }),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ],
                                null,
                                true
                              ),
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "Edit2Icon" },
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Edit")]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "TrashIcon" },
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Delete")]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ])
                  : _c("span", [
                      _vm._v(
                        "\n        " +
                          _vm._s(props.formattedRow[props.column.field]) +
                          "\n      "
                      ),
                    ]),
              ]
            },
          },
          {
            key: "pagination-bottom",
            fn: function (props) {
              return [
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-between flex-wrap" },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mb-0 mt-1" },
                      [
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("\n            Showing 1 to\n          "),
                        ]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "mx-1",
                          attrs: { options: ["3", "5", "10"] },
                          on: {
                            input: function (value) {
                              return props.perPageChanged({
                                currentPerPage: value,
                              })
                            },
                          },
                          model: {
                            value: _vm.pageLength,
                            callback: function ($$v) {
                              _vm.pageLength = $$v
                            },
                            expression: "pageLength",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap " }, [
                          _vm._v(" of " + _vm._s(props.total) + " entries "),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-pagination", {
                          staticClass: "mt-1 mb-0",
                          attrs: {
                            value: 1,
                            "total-rows": props.total,
                            "per-page": _vm.pageLength,
                            "first-number": "",
                            "last-number": "",
                            align: "right",
                            "prev-class": "prev-item",
                            "next-class": "next-item",
                          },
                          on: {
                            input: function (value) {
                              return props.pageChanged({ currentPage: value })
                            },
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "prev-text",
                                fn: function () {
                                  return [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "ChevronLeftIcon",
                                        size: "18",
                                      },
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
                                      attrs: {
                                        icon: "ChevronRightIcon",
                                        size: "18",
                                      },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        }),
                      ],
                      1
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=template&id=61b56bb0&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=template&id=61b56bb0& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "I18n Table" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeI18n) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c("b-alert", { attrs: { variant: "primary", show: "" } }, [
        _c("div", { staticClass: "alert-body" }, [
          _c("span", [_vm._v("Change language from navbar to view effect.")]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "custom-search d-flex justify-content-end" },
        [
          _c("b-form-group", [
            _c(
              "div",
              { staticClass: "d-flex align-items-center" },
              [
                _c("label", { staticClass: "mr-1" }, [
                  _vm._v(_vm._s(_vm.$t("message.seachLabel"))),
                ]),
                _vm._v(" "),
                _c("b-form-input", {
                  staticClass: "d-inline-block",
                  attrs: {
                    placeholder: _vm.$t("message.SearchPlaceholder"),
                    type: "text",
                  },
                  model: {
                    value: _vm.searchTerm,
                    callback: function ($$v) {
                      _vm.searchTerm = $$v
                    },
                    expression: "searchTerm",
                  },
                }),
              ],
              1
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("vue-good-table", {
        attrs: {
          columns: _vm.columns,
          rows: _vm.rows,
          rtl: _vm.direction,
          "search-options": {
            enabled: true,
            externalQuery: _vm.searchTerm,
          },
          "select-options": {
            enabled: true,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            selectionInfoClass: "custom-class",
            selectionText: "rows selected",
            clearSelectionText: "clear",
            disableSelectInfo: true, // disable the select info panel on top
            selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
          },
          "pagination-options": {
            enabled: true,
            perPage: _vm.pageLength,
          },
        },
        scopedSlots: _vm._u([
          {
            key: "table-column",
            fn: function (props) {
              return [
                props.column.label === "Name"
                  ? _c("span", { staticClass: "text-nowrap" }, [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.$t("message.tableHeader.name")) +
                          "\n      "
                      ),
                    ])
                  : props.column.label === "Email"
                  ? _c("span", { staticClass: "text-nowrap" }, [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.$t("message.tableHeader.email")) +
                          "\n      "
                      ),
                    ])
                  : props.column.label === "Date"
                  ? _c("span", { staticClass: "text-nowrap" }, [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.$t("message.tableHeader.date")) +
                          "\n      "
                      ),
                    ])
                  : props.column.label === "Salary"
                  ? _c("span", { staticClass: "text-nowrap" }, [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.$t("message.tableHeader.salary")) +
                          "\n      "
                      ),
                    ])
                  : props.column.label === "Status"
                  ? _c("span", { staticClass: "text-nowrap" }, [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.$t("message.tableHeader.status")) +
                          "\n      "
                      ),
                    ])
                  : props.column.label === "Action"
                  ? _c("span", { staticClass: "text-nowrap" }, [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.$t("message.tableHeader.action")) +
                          "\n      "
                      ),
                    ])
                  : _c("span", [
                      _vm._v(
                        "\n        " + _vm._s(props.column.label) + "\n      "
                      ),
                    ]),
              ]
            },
          },
          {
            key: "table-row",
            fn: function (props) {
              return [
                props.column.field === "fullName"
                  ? _c(
                      "span",
                      { staticClass: "text-nowrap" },
                      [
                        _c("b-avatar", {
                          staticClass: "mx-1",
                          attrs: { src: props.row.avatar },
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(props.row.fullName))]),
                      ],
                      1
                    )
                  : props.column.field === "status"
                  ? _c(
                      "span",
                      [
                        _c(
                          "b-badge",
                          {
                            attrs: {
                              variant: _vm.statusVariant(props.row.status),
                            },
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(props.row.status) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : props.column.field === "action"
                  ? _c("span", [
                      _c(
                        "span",
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                variant: "link",
                                "toggle-class": "text-decoration-none",
                                "no-caret": "",
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "button-content",
                                    fn: function () {
                                      return [
                                        _c("feather-icon", {
                                          staticClass:
                                            "text-body align-middle mr-25",
                                          attrs: {
                                            icon: "MoreVerticalIcon",
                                            size: "16",
                                          },
                                        }),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ],
                                null,
                                true
                              ),
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "Edit2Icon" },
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Edit")]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "TrashIcon" },
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Delete")]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ])
                  : _c("span", [
                      _vm._v(
                        "\n        " +
                          _vm._s(props.formattedRow[props.column.field]) +
                          "\n      "
                      ),
                    ]),
              ]
            },
          },
          {
            key: "pagination-bottom",
            fn: function (props) {
              return [
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-between flex-wrap" },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mb-0 mt-1" },
                      [
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("message.pagelength")) +
                              "\n          "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "mx-1",
                          attrs: { options: ["3", "5", "10"] },
                          on: {
                            input: function (value) {
                              return props.perPageChanged({
                                currentPerPage: value,
                              })
                            },
                          },
                          model: {
                            value: _vm.pageLength,
                            callback: function ($$v) {
                              _vm.pageLength = $$v
                            },
                            expression: "pageLength",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v(
                            "  " +
                              _vm._s(_vm.$t("message.of")) +
                              " " +
                              _vm._s(props.total) +
                              " " +
                              _vm._s(_vm.$t("message.pageText2")) +
                              " "
                          ),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-pagination", {
                          staticClass: "mt-1 mb-0",
                          attrs: {
                            value: 1,
                            "total-rows": props.total,
                            "per-page": _vm.pageLength,
                            "first-number": "",
                            "last-number": "",
                            align: "right",
                            "prev-class": "prev-item",
                            "next-class": "next-item",
                          },
                          on: {
                            input: function (value) {
                              return props.pageChanged({ currentPage: value })
                            },
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "prev-text",
                                fn: function () {
                                  return [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "ChevronLeftIcon",
                                        size: "18",
                                      },
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
                                      attrs: {
                                        icon: "ChevronRightIcon",
                                        size: "18",
                                      },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        }),
                      ],
                      1
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=template&id=6f361dd7&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=template&id=6f361dd7& ***!
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
      attrs: { title: "Row Group Table" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeRowGroup) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "div",
        { staticClass: "custom-search d-flex justify-content-end" },
        [
          _c("b-form-group", [
            _c(
              "div",
              { staticClass: "d-flex align-items-center" },
              [
                _c("label", { staticClass: "mr-1" }, [_vm._v("Search")]),
                _vm._v(" "),
                _c("b-form-input", {
                  staticClass: "d-inline-block",
                  attrs: { placeholder: "Search", type: "text" },
                  model: {
                    value: _vm.searchTerm,
                    callback: function ($$v) {
                      _vm.searchTerm = $$v
                    },
                    expression: "searchTerm",
                  },
                }),
              ],
              1
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("vue-good-table", {
        attrs: {
          columns: _vm.columns,
          rows: _vm.rows,
          rtl: _vm.direction,
          "search-options": {
            enabled: true,
            externalQuery: _vm.searchTerm,
          },
          "select-options": {
            enabled: true,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            selectionInfoClass: "custom-class",
            selectionText: "rows selected",
            clearSelectionText: "clear",
            disableSelectInfo: true, // disable the select info panel on top
            selectAllByGroup: false, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
          },
          "pagination-options": {
            enabled: true,
            perPage: _vm.pageLength,
          },
          "group-options": {
            enabled: true,
          },
        },
        scopedSlots: _vm._u([
          {
            key: "table-row",
            fn: function (props) {
              return [
                props.column.field === "fullName"
                  ? _c(
                      "span",
                      { staticClass: "text-nowrap" },
                      [
                        _c("b-avatar", {
                          staticClass: "mx-1",
                          attrs: { src: props.row.avatar },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v(_vm._s(props.row.fullName)),
                        ]),
                      ],
                      1
                    )
                  : props.column.field === "status"
                  ? _c(
                      "span",
                      [
                        _c(
                          "b-badge",
                          {
                            attrs: {
                              variant: _vm.statusVariant(props.row.status),
                            },
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(props.row.status) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : props.column.field === "action"
                  ? _c("span", [
                      _c(
                        "span",
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                variant: "link",
                                "toggle-class": "text-decoration-none",
                                "no-caret": "",
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "button-content",
                                    fn: function () {
                                      return [
                                        _c("feather-icon", {
                                          staticClass:
                                            "text-body align-middle mr-25",
                                          attrs: {
                                            icon: "MoreVerticalIcon",
                                            size: "16",
                                          },
                                        }),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ],
                                null,
                                true
                              ),
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "Edit2Icon" },
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Edit")]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "TrashIcon" },
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Delete")]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ])
                  : _c("span", [
                      _vm._v(
                        "\n        " +
                          _vm._s(props.formattedRow[props.column.field]) +
                          "\n      "
                      ),
                    ]),
              ]
            },
          },
          {
            key: "pagination-bottom",
            fn: function (props) {
              return [
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-between flex-wrap" },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mb-0 mt-1" },
                      [
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("\n            Showing 1 to\n          "),
                        ]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "mx-1",
                          attrs: { options: ["3", "5", "10"] },
                          on: {
                            input: function (value) {
                              return props.perPageChanged({
                                currentPerPage: value,
                              })
                            },
                          },
                          model: {
                            value: _vm.pageLength,
                            callback: function ($$v) {
                              _vm.pageLength = $$v
                            },
                            expression: "pageLength",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v(" of " + _vm._s(props.total) + " entries "),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-pagination", {
                          staticClass: "mt-1 mb-0",
                          attrs: {
                            value: 1,
                            "total-rows": props.total,
                            "per-page": _vm.pageLength,
                            "first-number": "",
                            "last-number": "",
                            align: "right",
                            "prev-class": "prev-item",
                            "next-class": "next-item",
                          },
                          on: {
                            input: function (value) {
                              return props.pageChanged({ currentPage: value })
                            },
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "prev-text",
                                fn: function () {
                                  return [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "ChevronLeftIcon",
                                        size: "18",
                                      },
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
                                      attrs: {
                                        icon: "ChevronRightIcon",
                                        size: "18",
                                      },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        }),
                      ],
                      1
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=template&id=564df270&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=template&id=564df270& ***!
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
      attrs: { title: "SSR" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeSSR) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "div",
        { staticClass: "custom-search d-flex justify-content-end" },
        [
          _c("b-form-group", [
            _c(
              "div",
              { staticClass: "d-flex align-items-center" },
              [
                _c("label", { staticClass: "mr-1" }, [_vm._v("Search")]),
                _vm._v(" "),
                _c("b-form-input", {
                  staticClass: "d-inline-block",
                  attrs: { placeholder: "Search", type: "text" },
                  on: { input: _vm.handleSearch },
                  model: {
                    value: _vm.searchTerm,
                    callback: function ($$v) {
                      _vm.searchTerm = $$v
                    },
                    expression: "searchTerm",
                  },
                }),
              ],
              1
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("vue-good-table", {
        attrs: {
          mode: "remote",
          columns: _vm.columns,
          rows: _vm.rows,
          rtl: _vm.direction,
          "search-options": {
            enabled: true,
            externalQuery: _vm.searchTerm,
          },
          "select-options": {
            enabled: true,
            selectOnCheckboxOnly: true,
            selectionInfoClass: "custom-class",
            selectionText: "rows selected",
            clearSelectionText: "clear",
            disableSelectInfo: true,
            selectAllByGroup: true,
          },
          "pagination-options": {
            enabled: true,
          },
        },
        on: { "on-sort-change": _vm.onSortChange },
        scopedSlots: _vm._u([
          {
            key: "table-row",
            fn: function (props) {
              return [
                props.column.field === "fullName"
                  ? _c(
                      "span",
                      { staticClass: "text-nowrap" },
                      [
                        _c("b-avatar", {
                          staticClass: "mx-1",
                          attrs: { src: props.row.avatar },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v(_vm._s(props.row.fullName)),
                        ]),
                      ],
                      1
                    )
                  : props.column.field === "status"
                  ? _c(
                      "span",
                      [
                        _c(
                          "b-badge",
                          {
                            attrs: {
                              variant: _vm.statusVariant(props.row.status),
                            },
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(props.row.status) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : props.column.field === "action"
                  ? _c("span", [
                      _c(
                        "span",
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                variant: "link",
                                "toggle-class": "text-decoration-none",
                                "no-caret": "",
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "button-content",
                                    fn: function () {
                                      return [
                                        _c("feather-icon", {
                                          staticClass:
                                            "text-body align-middle mr-25",
                                          attrs: {
                                            icon: "MoreVerticalIcon",
                                            size: "16",
                                          },
                                        }),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ],
                                null,
                                true
                              ),
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "Edit2Icon" },
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Edit")]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "TrashIcon" },
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Delete")]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ])
                  : _c("span", [
                      _vm._v(
                        "\n        " +
                          _vm._s(props.formattedRow[props.column.field]) +
                          "\n      "
                      ),
                    ]),
              ]
            },
          },
          {
            key: "pagination-bottom",
            fn: function (props) {
              return [
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-between flex-wrap" },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mb-0 mt-1" },
                      [
                        _c("span", { staticClass: "text-nowrap " }, [
                          _vm._v("\n            Showing 1 to\n          "),
                        ]),
                        _vm._v(" "),
                        _c("b-form-select", {
                          staticClass: "mx-1",
                          attrs: { options: _vm.pages },
                          on: { input: _vm.handlePageChange },
                          model: {
                            value: _vm.pageLength,
                            callback: function ($$v) {
                              _vm.pageLength = $$v
                            },
                            expression: "pageLength",
                          },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v(" of " + _vm._s(props.total) + " entries "),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-pagination", {
                          staticClass: "mt-1 mb-0",
                          attrs: {
                            value: 1,
                            "total-rows": props.total,
                            "per-page": _vm.pageLength,
                            "first-number": "",
                            "last-number": "",
                            align: "right",
                            "prev-class": "prev-item",
                            "next-class": "next-item",
                          },
                          on: { change: _vm.handleChangePage },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "prev-text",
                                fn: function () {
                                  return [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "ChevronLeftIcon",
                                        size: "18",
                                      },
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
                                      attrs: {
                                        icon: "ChevronRightIcon",
                                        size: "18",
                                      },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("prism", { staticClass: "rounded mt-1" }, [
        _vm._v("\n    " + _vm._s(_vm.log.join("\n")) + "\n  "),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&");
/* harmony import */ var _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7834b2fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/toastification/ToastificationContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTable.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTable.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoodTable_vue_vue_type_template_id_c5686d1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodTable.vue?vue&type=template&id=c5686d1c& */ "./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=template&id=c5686d1c&");
/* harmony import */ var _GoodTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GoodTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoodTable.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GoodTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoodTable_vue_vue_type_template_id_c5686d1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoodTable_vue_vue_type_template_id_c5686d1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/vue-good-table/GoodTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTable.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=template&id=c5686d1c&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=template&id=c5686d1c& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTable_vue_vue_type_template_id_c5686d1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTable.vue?vue&type=template&id=c5686d1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTable.vue?vue&type=template&id=c5686d1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTable_vue_vue_type_template_id_c5686d1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTable_vue_vue_type_template_id_c5686d1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoodTableAdvanceSearch_vue_vue_type_template_id_7ff22cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodTableAdvanceSearch.vue?vue&type=template&id=7ff22cb0& */ "./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=template&id=7ff22cb0&");
/* harmony import */ var _GoodTableAdvanceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodTableAdvanceSearch.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoodTableAdvanceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoodTableAdvanceSearch_vue_vue_type_template_id_7ff22cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoodTableAdvanceSearch_vue_vue_type_template_id_7ff22cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableAdvanceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableAdvanceSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableAdvanceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=template&id=7ff22cb0&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=template&id=7ff22cb0& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableAdvanceSearch_vue_vue_type_template_id_7ff22cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableAdvanceSearch.vue?vue&type=template&id=7ff22cb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableAdvanceSearch.vue?vue&type=template&id=7ff22cb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableAdvanceSearch_vue_vue_type_template_id_7ff22cb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableAdvanceSearch_vue_vue_type_template_id_7ff22cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoodTableBasic_vue_vue_type_template_id_6ca3010c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodTableBasic.vue?vue&type=template&id=6ca3010c& */ "./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=template&id=6ca3010c&");
/* harmony import */ var _GoodTableBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodTableBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoodTableBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoodTableBasic_vue_vue_type_template_id_6ca3010c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoodTableBasic_vue_vue_type_template_id_6ca3010c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/vue-good-table/GoodTableBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=template&id=6ca3010c&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=template&id=6ca3010c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableBasic_vue_vue_type_template_id_6ca3010c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableBasic.vue?vue&type=template&id=6ca3010c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableBasic.vue?vue&type=template&id=6ca3010c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableBasic_vue_vue_type_template_id_6ca3010c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableBasic_vue_vue_type_template_id_6ca3010c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoodTableColumnSearch_vue_vue_type_template_id_a82a37a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodTableColumnSearch.vue?vue&type=template&id=a82a37a0& */ "./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=template&id=a82a37a0&");
/* harmony import */ var _GoodTableColumnSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodTableColumnSearch.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoodTableColumnSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoodTableColumnSearch_vue_vue_type_template_id_a82a37a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoodTableColumnSearch_vue_vue_type_template_id_a82a37a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableColumnSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableColumnSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableColumnSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=template&id=a82a37a0&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=template&id=a82a37a0& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableColumnSearch_vue_vue_type_template_id_a82a37a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableColumnSearch.vue?vue&type=template&id=a82a37a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableColumnSearch.vue?vue&type=template&id=a82a37a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableColumnSearch_vue_vue_type_template_id_a82a37a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableColumnSearch_vue_vue_type_template_id_a82a37a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoodTableI18n_vue_vue_type_template_id_61b56bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodTableI18n.vue?vue&type=template&id=61b56bb0& */ "./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=template&id=61b56bb0&");
/* harmony import */ var _GoodTableI18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodTableI18n.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoodTableI18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoodTableI18n_vue_vue_type_template_id_61b56bb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoodTableI18n_vue_vue_type_template_id_61b56bb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/vue-good-table/GoodTableI18n.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableI18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableI18n.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableI18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=template&id=61b56bb0&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=template&id=61b56bb0& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableI18n_vue_vue_type_template_id_61b56bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableI18n.vue?vue&type=template&id=61b56bb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableI18n.vue?vue&type=template&id=61b56bb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableI18n_vue_vue_type_template_id_61b56bb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableI18n_vue_vue_type_template_id_61b56bb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoodTableRowGroup_vue_vue_type_template_id_6f361dd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodTableRowGroup.vue?vue&type=template&id=6f361dd7& */ "./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=template&id=6f361dd7&");
/* harmony import */ var _GoodTableRowGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodTableRowGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoodTableRowGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoodTableRowGroup_vue_vue_type_template_id_6f361dd7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoodTableRowGroup_vue_vue_type_template_id_6f361dd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableRowGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableRowGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableRowGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=template&id=6f361dd7&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=template&id=6f361dd7& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableRowGroup_vue_vue_type_template_id_6f361dd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableRowGroup.vue?vue&type=template&id=6f361dd7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableRowGroup.vue?vue&type=template&id=6f361dd7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableRowGroup_vue_vue_type_template_id_6f361dd7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableRowGroup_vue_vue_type_template_id_6f361dd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoodTableSsr_vue_vue_type_template_id_564df270___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodTableSsr.vue?vue&type=template&id=564df270& */ "./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=template&id=564df270&");
/* harmony import */ var _GoodTableSsr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodTableSsr.vue?vue&type=script&lang=js& */ "./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoodTableSsr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoodTableSsr_vue_vue_type_template_id_564df270___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoodTableSsr_vue_vue_type_template_id_564df270___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/table/vue-good-table/GoodTableSsr.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableSsr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableSsr.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableSsr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=template&id=564df270&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=template&id=564df270& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableSsr_vue_vue_type_template_id_564df270___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoodTableSsr.vue?vue&type=template&id=564df270& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/table/vue-good-table/GoodTableSsr.vue?vue&type=template&id=564df270&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableSsr_vue_vue_type_template_id_564df270___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodTableSsr_vue_vue_type_template_id_564df270___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/table/vue-good-table/code.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/table/vue-good-table/code.js ***!
  \*************************************************************/
/*! exports provided: codeBasic, codeColumnSearch, codeRowGroup, codeAdvance, codeI18n, codeSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeColumnSearch", function() { return codeColumnSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRowGroup", function() { return codeRowGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAdvance", function() { return codeAdvance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeI18n", function() { return codeI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSSR", function() { return codeSSR; });
var codeBasic = "\n<template>\n  <div>\n    <!-- search input -->\n    <div class=\"custom-search d-flex justify-content-end\">\n      <b-form-group>\n        <div class=\"d-flex align-items-center\">\n          <label class=\"mr-1\">Search</label>\n          <b-form-input\n            v-model=\"searchTerm\"\n            placeholder=\"Search\"\n            type=\"text\"\n            class=\"d-inline-block\"\n          />\n        </div>\n      </b-form-group>\n    </div>\n\n    <!-- table -->\n    <vue-good-table\n      :columns=\"columns\"\n      :rows=\"rows\"\n      :rtl=\"direction\"\n      :search-options=\"{\n        enabled: true,\n        externalQuery: searchTerm }\"\n      :select-options=\"{\n        enabled: true,\n        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row\n        selectionInfoClass: 'custom-class',\n        selectionText: 'rows selected',\n        clearSelectionText: 'clear',\n        disableSelectInfo: true, // disable the select info panel on top\n        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group\n      }\"\n      :pagination-options=\"{\n        enabled: true,\n        perPage:pageLength\n      }\"\n    >\n      <template\n        slot=\"table-row\"\n        slot-scope=\"props\"\n      >\n\n        <!-- Column: Name -->\n        <span\n          v-if=\"props.column.field === 'fullName'\"\n          class=\"text-nowrap\"\n        >\n          <b-avatar\n            :src=\"props.row.avatar\"\n            class=\"mx-1\"\n          />\n          <span class=\"text-nowrap\">{{ props.row.fullName }}</span>\n        </span>\n\n        <!-- Column: Status -->\n        <span v-else-if=\"props.column.field === 'status'\">\n          <b-badge :variant=\"statusVariant(props.row.status)\">\n            {{ props.row.status }}\n          </b-badge>\n        </span>\n\n        <!-- Column: Action -->\n        <span v-else-if=\"props.column.field === 'action'\">\n          <span>\n            <b-dropdown\n              variant=\"link\"\n              toggle-class=\"text-decoration-none\"\n              no-caret\n            >\n              <template v-slot:button-content>\n                <feather-icon\n                  icon=\"MoreVerticalIcon\"\n                  size=\"16\"\n                  class=\"text-body align-middle mr-25\"\n                />\n              </template>\n              <b-dropdown-item>\n                <feather-icon\n                  icon=\"Edit2Icon\"\n                  class=\"mr-50\"\n                />\n                <span>Edit</span>\n              </b-dropdown-item>\n              <b-dropdown-item>\n                <feather-icon\n                  icon=\"TrashIcon\"\n                  class=\"mr-50\"\n                />\n                <span>Delete</span>\n              </b-dropdown-item>\n            </b-dropdown>\n          </span>\n        </span>\n\n        <!-- Column: Common -->\n        <span v-else>\n          {{ props.formattedRow[props.column.field] }}\n        </span>\n      </template>\n\n      <!-- pagination -->\n      <template\n        slot=\"pagination-bottom\"\n        slot-scope=\"props\"\n      >\n        <div class=\"d-flex justify-content-between flex-wrap\">\n          <div class=\"d-flex align-items-center mb-0 mt-1\">\n            <span class=\"text-nowrap \">\n              Showing 1 to\n            </span>\n            <b-form-select\n              v-model=\"pageLength\"\n              :options=\"['3','5','10']\"\n              class=\"mx-1\"\n              @input=\"(value)=>props.perPageChanged({currentPerPage:value})\"\n            />\n            <span class=\"text-nowrap\"> of {{ props.total }} entries </span>\n          </div>\n          <div>\n            <b-pagination\n              :value=\"1\"\n              :total-rows=\"props.total\"\n              :per-page=\"pageLength\"\n              first-number\n              last-number\n              align=\"right\"\n              prev-class=\"prev-item\"\n              next-class=\"next-item\"\n              class=\"mt-1 mb-0\"\n              @input=\"(value)=>props.pageChanged({currentPage:value})\"\n            >\n              <template #prev-text>\n                <feather-icon\n                  icon=\"ChevronLeftIcon\"\n                  size=\"18\"\n                />\n              </template>\n              <template #next-text>\n                <feather-icon\n                  icon=\"ChevronRightIcon\"\n                  size=\"18\"\n                />\n              </template>\n            </b-pagination>\n          </div>\n        </div>\n      </template>\n    </vue-good-table>\n  </div>\n</template>\n\n<script>\nimport {\n  BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem,\n} from 'bootstrap-vue'\nimport { VueGoodTable } from 'vue-good-table'\nimport store from '@/store/index'\n\nexport default {\n  components: {\n    VueGoodTable,\n    BAvatar,\n    BBadge,\n    BPagination,\n    BFormGroup,\n    BFormInput,\n    BFormSelect,\n    BDropdown,\n    BDropdownItem,\n  },\n  data() {\n    return {\n      pageLength: 3,\n      dir: false,\n      columns: [\n        {\n          label: 'Name',\n          field: 'fullName',\n        },\n        {\n          label: 'Email',\n          field: 'email',\n        },\n        {\n          label: 'Date',\n          field: 'startDate',\n        },\n        {\n          label: 'Salary',\n          field: 'salary',\n        },\n        {\n          label: 'Status',\n          field: 'status',\n        },\n        {\n          label: 'Action',\n          field: 'action',\n        },\n      ],\n      rows: [],\n      searchTerm: '',\n      status: [{\n        1: 'Current',\n        2: 'Professional',\n        3: 'Rejected',\n        4: 'Resigned',\n        5: 'Applied',\n      },\n      {\n        1: 'light-primary',\n        2: 'light-success',\n        3: 'light-danger',\n        4: 'light-warning',\n        5: 'light-info',\n      }],\n    }\n  },\n  computed: {\n    statusVariant() {\n      const statusColor = {\n        /* eslint-disable key-spacing */\n        Current      : 'light-primary',\n        Professional : 'light-success',\n        Rejected     : 'light-danger',\n        Resigned     : 'light-warning',\n        Applied      : 'light-info',\n        /* eslint-enable key-spacing */\n      }\n\n      return status => statusColor[status]\n    },\n    direction() {\n      if (store.state.appConfig.isRTL) {\n        // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n        this.dir = true\n        return this.dir\n      }\n      // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n      this.dir = false\n      return this.dir\n    },\n  },\n  created() {\n    this.$http.get('/good-table/basic')\n      .then(res => { this.rows = res.data })\n  },\n}\n</script>\n";
var codeColumnSearch = "\n<template>\n  <div>\n    <!-- input search -->\n    <div class=\"custom-search d-flex justify-content-end\">\n      <b-form-group>\n        <div class=\"d-flex align-items-center\">\n          <label class=\"mr-1\">Search</label>\n          <b-form-input\n            v-model=\"searchTerm\"\n            placeholder=\"Search\"\n            type=\"text\"\n            class=\"d-inline-block\"\n          />\n        </div>\n      </b-form-group>\n    </div>\n\n    <!-- table -->\n    <vue-good-table\n      :columns=\"columns\"\n      :rows=\"rows\"\n      :rtl=\"direction\"\n      :search-options=\"{\n        enabled: true,\n        externalQuery: searchTerm }\"\n      :pagination-options=\"{\n        enabled: true,\n        perPage:pageLength\n      }\"\n    >\n      <template\n        slot=\"table-row\"\n        slot-scope=\"props\"\n      >\n\n        <!-- Column: Name -->\n        <div\n          v-if=\"props.column.field === 'fullName'\"\n          class=\"text-nowrap\"\n        >\n          <b-avatar\n            :src=\"props.row.avatar\"\n            class=\"mx-1\"\n          />\n          <span class=\"text-nowrap\">{{ props.row.fullName }}</span>\n        </div>\n\n        <!-- Column: Status -->\n        <span v-else-if=\"props.column.field === 'status'\">\n          <b-badge :variant=\"statusVariant(props.row.status)\">\n            {{ props.row.status }}\n          </b-badge>\n        </span>\n\n        <!-- Column: Action -->\n        <span v-else-if=\"props.column.field === 'action'\">\n          <span>\n            <b-dropdown\n              variant=\"link\"\n              toggle-class=\"text-decoration-none\"\n              no-caret\n            >\n              <template v-slot:button-content>\n                <feather-icon\n                  icon=\"MoreVerticalIcon\"\n                  size=\"16\"\n                  class=\"text-body align-middle mr-25\"\n                />\n              </template>\n              <b-dropdown-item>\n                <feather-icon\n                  icon=\"Edit2Icon\"\n                  class=\"mr-50\"\n                />\n                <span>Edit</span>\n              </b-dropdown-item>\n              <b-dropdown-item>\n                <feather-icon\n                  icon=\"TrashIcon\"\n                  class=\"mr-50\"\n                />\n                <span>Delete</span>\n              </b-dropdown-item>\n            </b-dropdown>\n          </span>\n        </span>\n\n        <!-- Column: Common -->\n        <span v-else>\n          {{ props.formattedRow[props.column.field] }}\n        </span>\n      </template>\n\n      <!-- pagination -->\n      <template\n        slot=\"pagination-bottom\"\n        slot-scope=\"props\"\n      >\n        <div class=\"d-flex justify-content-between flex-wrap\">\n          <div class=\"d-flex align-items-center mb-0 mt-1\">\n            <span class=\"text-nowrap\">\n              Showing 1 to\n            </span>\n            <b-form-select\n              v-model=\"pageLength\"\n              :options=\"['3','5','10']\"\n              class=\"mx-1\"\n              @input=\"(value)=>props.perPageChanged({currentPerPage:value})\"\n            />\n            <span class=\"text-nowrap \"> of {{ props.total }} entries </span>\n          </div>\n          <div>\n            <b-pagination\n              :value=\"1\"\n              :total-rows=\"props.total\"\n              :per-page=\"pageLength\"\n              first-number\n              last-number\n              align=\"right\"\n              prev-class=\"prev-item\"\n              next-class=\"next-item\"\n              class=\"mt-1 mb-0\"\n              @input=\"(value)=>props.pageChanged({currentPage:value})\"\n            >\n              <template #prev-text>\n                <feather-icon\n                  icon=\"ChevronLeftIcon\"\n                  size=\"18\"\n                />\n              </template>\n              <template #next-text>\n                <feather-icon\n                  icon=\"ChevronRightIcon\"\n                  size=\"18\"\n                />\n              </template>\n            </b-pagination>\n          </div>\n        </div>\n      </template>\n    </vue-good-table>\n  </div>\n</template>\n\n<script>\nimport {\n  BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem,\n} from 'bootstrap-vue'\nimport { VueGoodTable } from 'vue-good-table'\nimport store from '@/store/index'\n\nexport default {\n  components: {\n    VueGoodTable,\n    BAvatar,\n    BBadge,\n    BPagination,\n    BFormGroup,\n    BFormInput,\n    BFormSelect,\n    BDropdown,\n    BDropdownItem,\n  },\n  data() {\n    return {\n      pageLength: 3,\n      dir: false,\n      columns: [\n        {\n          label: 'Name',\n          field: 'fullName',\n          filterOptions: {\n            enabled: true,\n            placeholder: 'Search Name',\n          },\n        },\n        {\n          label: 'Email',\n          field: 'email',\n          filterOptions: {\n            enabled: true,\n            placeholder: 'Search Email',\n          },\n        },\n        {\n          label: 'Date',\n          field: 'startDate',\n          filterOptions: {\n            enabled: true,\n            placeholder: 'Search Date',\n          },\n        },\n        {\n          label: 'Salary',\n          field: 'salary',\n          filterOptions: {\n            enabled: true,\n            placeholder: 'Search Salary',\n          },\n        },\n        {\n          label: 'Status',\n          field: 'status',\n          filterOptions: {\n            enabled: true,\n            placeholder: 'Search Status',\n          },\n        },\n        {\n          label: 'Action',\n          field: 'action',\n        },\n      ],\n      rows: [],\n      searchTerm: '',\n    }\n  },\n  computed: {\n    statusVariant() {\n      const statusColor = {\n        /* eslint-disable key-spacing */\n        Current      : 'light-primary',\n        Professional : 'light-success',\n        Rejected     : 'light-danger',\n        Resigned     : 'light-warning',\n        Applied      : 'light-info',\n        /* eslint-enable key-spacing */\n      }\n\n      return status => statusColor[status]\n    },\n    direction() {\n      if (store.state.appConfig.isRTL) {\n        // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n        this.dir = true\n        return this.dir\n      }\n      // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n      this.dir = false\n      return this.dir\n    },\n  },\n  created() {\n    this.$http.get('/good-table/basic')\n      .then(res => { this.rows = res.data })\n  },\n}\n</script>\n";
var codeRowGroup = "\n<template>\n  <div>\n    <!-- search input -->\n    <div class=\"custom-search d-flex justify-content-end\">\n      <b-form-group>\n        <div class=\"d-flex align-items-center\">\n          <label class=\"mr-1\">Search</label>\n          <b-form-input\n            v-model=\"searchTerm\"\n            placeholder=\"Search\"\n            type=\"text\"\n            class=\"d-inline-block\"\n          />\n        </div>\n      </b-form-group>\n    </div>\n\n    <!-- table -->\n    <vue-good-table\n      :columns=\"columns\"\n      :rows=\"rows\"\n      :rtl=\"direction\"\n      :search-options=\"{\n        enabled: true,\n        externalQuery: searchTerm }\"\n      :select-options=\"{\n        enabled: true,\n        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row\n        selectionInfoClass: 'custom-class',\n        selectionText: 'rows selected',\n        clearSelectionText: 'clear',\n        disableSelectInfo: true, // disable the select info panel on top\n        selectAllByGroup: false, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group\n      }\"\n      :pagination-options=\"{\n        enabled: true,\n        perPage:pageLength\n      }\"\n      :group-options=\"{\n        enabled: true\n      }\"\n    >\n      <template\n        slot=\"table-row\"\n        slot-scope=\"props\"\n      >\n\n        <!-- Column: Name -->\n        <span\n          v-if=\"props.column.field === 'fullName'\"\n          class=\"text-nowrap\"\n        >\n          <b-avatar\n            :src=\"props.row.avatar\"\n            class=\"mx-1\"\n          />\n          <span class=\"text-nowrap\">{{ props.row.fullName }}</span>\n        </span>\n\n        <!-- Column: Status -->\n        <span v-else-if=\"props.column.field === 'status'\">\n          <b-badge :variant=\"statusVariant(props.row.status)\">\n            {{ props.row.status }}\n          </b-badge>\n        </span>\n\n        <!-- Column: Action -->\n        <span v-else-if=\"props.column.field === 'action'\">\n          <span>\n            <b-dropdown\n              variant=\"link\"\n              toggle-class=\"text-decoration-none\"\n              no-caret\n            >\n              <template v-slot:button-content>\n                <feather-icon\n                  icon=\"MoreVerticalIcon\"\n                  size=\"16\"\n                  class=\"text-body align-middle mr-25\"\n                />\n              </template>\n              <b-dropdown-item>\n                <feather-icon\n                  icon=\"Edit2Icon\"\n                  class=\"mr-50\"\n                />\n                <span>Edit</span>\n              </b-dropdown-item>\n              <b-dropdown-item>\n                <feather-icon\n                  icon=\"TrashIcon\"\n                  class=\"mr-50\"\n                />\n                <span>Delete</span>\n              </b-dropdown-item>\n            </b-dropdown>\n          </span>\n        </span>\n\n        <!-- Column: Common -->\n        <span v-else>\n          {{ props.formattedRow[props.column.field] }}\n        </span>\n      </template>\n      <!-- pagination -->\n      <template\n        slot=\"pagination-bottom\"\n        slot-scope=\"props\"\n      >\n        <div class=\"d-flex justify-content-between flex-wrap\">\n          <div class=\"d-flex align-items-center mb-0 mt-1\">\n            <span class=\"text-nowrap\">\n              Showing 1 to\n            </span>\n            <b-form-select\n              v-model=\"pageLength\"\n              :options=\"['3','5','10']\"\n              class=\"mx-1\"\n              @input=\"(value)=>props.perPageChanged({currentPerPage:value})\"\n            />\n            <span class=\"text-nowrap\"> of {{ props.total }} entries </span>\n          </div>\n          <div>\n            <b-pagination\n              :value=\"1\"\n              :total-rows=\"props.total\"\n              :per-page=\"pageLength\"\n              first-number\n              last-number\n              align=\"right\"\n              prev-class=\"prev-item\"\n              next-class=\"next-item\"\n              class=\"mt-1 mb-0\"\n              @input=\"(value)=>props.pageChanged({currentPage:value})\"\n            >\n              <template #prev-text>\n                <feather-icon\n                  icon=\"ChevronLeftIcon\"\n                  size=\"18\"\n                />\n              </template>\n              <template #next-text>\n                <feather-icon\n                  icon=\"ChevronRightIcon\"\n                  size=\"18\"\n                />\n              </template>\n            </b-pagination>\n          </div>\n        </div>\n      </template>\n    </vue-good-table>\n  </div>\n</template>\n\n<script>\nimport {\n  BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdownItem, BDropdown,\n} from 'bootstrap-vue'\nimport { VueGoodTable } from 'vue-good-table'\nimport store from '@/store/index'\n\nexport default {\n  components: {\n    VueGoodTable,\n    BAvatar,\n    BBadge,\n    BPagination,\n    BFormGroup,\n    BFormInput,\n    BFormSelect,\n    BDropdownItem,\n    BDropdown,\n  },\n  data() {\n    return {\n      pageLength: 5,\n      dir: false,\n      columns: [\n        {\n          label: 'Name',\n          field: 'fullName',\n        },\n        {\n          label: 'Email',\n          field: 'email',\n        },\n        {\n          label: 'Date',\n          field: 'startDate',\n        },\n        {\n          label: 'Salary',\n          field: 'salary',\n        },\n        {\n          label: 'Status',\n          field: 'status',\n        },\n        {\n          label: 'Action',\n          field: 'action',\n        },\n      ],\n      rows: [],\n      searchTerm: '',\n    }\n  },\n  computed: {\n    statusVariant() {\n      const statusColor = {\n        /* eslint-disable key-spacing */\n        Current      : 'light-primary',\n        Professional : 'light-success',\n        Rejected     : 'light-danger',\n        Resigned     : 'light-warning',\n        Applied      : 'light-info',\n        /* eslint-enable key-spacing */\n      }\n\n      return status => statusColor[status]\n    },\n    direction() {\n      if (store.state.appConfig.isRTL) {\n        // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n        this.dir = true\n        return this.dir\n      }\n      // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n      this.dir = false\n      return this.dir\n    },\n  },\n  created() {\n    this.$http.get('/good-table/row-group')\n      .then(res => { this.rows = res.data })\n  },\n}\n</script>\n";
var codeAdvance = "\n<template>\n  <div>\n    <div class=\"custom-search\">\n\n      <!-- advance search input -->\n      <b-row>\n        <b-col md=\"4\">\n          <b-form-group>\n            <label>Name:</label>\n            <b-form-input\n              placeholder=\"Search\"\n              type=\"text\"\n              class=\"d-inline-block\"\n              @input=\"advanceSearch\"\n            />\n          </b-form-group>\n        </b-col>\n        <b-col md=\"4\">\n          <b-form-group>\n            <label>Email:</label>\n            <b-form-input\n              placeholder=\"Search\"\n              type=\"text\"\n              class=\"d-inline-block\"\n              @input=\"advanceSearch\"\n            />\n          </b-form-group>\n        </b-col>\n        <b-col md=\"4\">\n          <b-form-group>\n            <label>Post:</label>\n            <b-form-input\n              placeholder=\"Search\"\n              type=\"text\"\n              class=\"d-inline-block\"\n              @input=\"advanceSearch\"\n            />\n          </b-form-group>\n        </b-col>\n        <b-col md=\"4\">\n          <b-form-group>\n            <label>City:</label>\n            <b-form-input\n              placeholder=\"Search\"\n              type=\"text\"\n              class=\"d-inline-block\"\n              @input=\"advanceSearch\"\n            />\n          </b-form-group>\n        </b-col>\n        <b-col md=\"4\">\n          <b-form-group>\n            <label>Date:</label>\n            <b-form-input\n              placeholder=\"Search\"\n              type=\"text\"\n              class=\"d-inline-block\"\n              @input=\"advanceSearch\"\n            />\n          </b-form-group>\n        </b-col>\n        <b-col md=\"4\">\n          <b-form-group>\n            <label>Salary:</label>\n            <b-form-input\n              placeholder=\"Search\"\n              type=\"text\"\n              class=\"d-inline-block\"\n              @input=\"advanceSearch\"\n            />\n          </b-form-group>\n        </b-col>\n      </b-row>\n    </div>\n\n    <!-- table -->\n    <vue-good-table\n      :columns=\"columns\"\n      :rows=\"rows\"\n      :rtl=\"direction\"\n      :search-options=\"{\n        enabled: true,\n        externalQuery: searchTerm }\"\n      :select-options=\"{\n        enabled: true,\n        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row\n        selectionInfoClass: 'custom-class',\n        selectionText: 'rows selected',\n        clearSelectionText: 'clear',\n        disableSelectInfo: true, // disable the select info panel on top\n        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group\n      }\"\n      :pagination-options=\"{\n        enabled: true,\n        perPage:pageLength\n      }\"\n      theme=\"my-theme\"\n      @on-row-click=\"onRowClick\"\n    >\n      <template\n        slot=\"table-row\"\n        slot-scope=\"props\"\n      >\n        <span\n          v-if=\"props.column.field === 'fullName'\"\n          class=\"text-nowrap\"\n        >\n          <b-avatar\n            :src=\"props.row.avatar\"\n            class=\"mx-1\"\n          />\n          <span>{{ props.row.fullName }}</span>\n        </span>\n        <span v-else>\n          {{ props.formattedRow[props.column.field] }}\n        </span>\n      </template>\n\n      <!-- pagination -->\n      <template\n        slot=\"pagination-bottom\"\n        slot-scope=\"props\"\n      >\n        <div class=\"d-flex justify-content-between flex-wrap\">\n          <div class=\"d-flex align-items-center mb-0 mt-1\">\n            <span class=\"text-nowrap\">\n              Showing 1 to\n            </span>\n            <b-form-select\n              v-model=\"pageLength\"\n              :options=\"['3','5','10']\"\n              class=\"mx-1\"\n              @input=\"(value)=>props.perPageChanged({currentPerPage:value})\"\n            />\n            <span class=\"text-nowrap\"> of {{ props.total }} entries </span>\n          </div>\n          <div>\n            <b-pagination\n              :value=\"1\"\n              :total-rows=\"props.total\"\n              :per-page=\"pageLength\"\n              first-number\n              last-number\n              align=\"right\"\n              prev-class=\"prev-item\"\n              next-class=\"next-item\"\n              class=\"mt-1 mb-0\"\n              @input=\"(value)=>props.pageChanged({currentPage:value})\"\n            >\n              <template #prev-text>\n                <feather-icon\n                  icon=\"ChevronLeftIcon\"\n                  size=\"18\"\n                />\n              </template>\n              <template #next-text>\n                <feather-icon\n                  icon=\"ChevronRightIcon\"\n                  size=\"18\"\n                />\n              </template>\n            </b-pagination>\n          </div>\n        </div>\n      </template>\n    </vue-good-table>\n  </div>\n</template>\n\n<script>\nimport {\n  BAvatar, BPagination, BFormGroup, BFormInput, BFormSelect, BRow, BCol,\n} from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport { VueGoodTable } from 'vue-good-table'\nimport store from '@/store/index'\n\nexport default {\n  components: {\n    VueGoodTable,\n    BAvatar,\n    BPagination,\n    BFormGroup,\n    BFormInput,\n    BFormSelect,\n    BRow,\n    BCol,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  data() {\n    return {\n      pageLength: 5,\n      dir: false,\n      columns: [\n        {\n          label: 'Name',\n          field: 'fullName',\n        },\n        {\n          label: 'Email',\n          field: 'email',\n        },\n        {\n          label: 'Post',\n          field: 'post',\n        },\n        {\n          label: 'City',\n          field: 'city',\n        },\n        {\n          label: 'Date',\n          field: 'startDate',\n        },\n        {\n          label: 'Salary',\n          field: 'salary',\n        },\n      ],\n      rows: [],\n      searchTerm: '',\n    }\n  },\n  computed: {\n    direction() {\n      if (store.state.appConfig.isRTL) {\n        // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n        this.dir = true\n        return this.dir\n      }\n      // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n      this.dir = false\n      return this.dir\n    },\n  },\n  created() {\n    this.$http.get('/good-table/advanced-search')\n      .then(res => { this.rows = res.data })\n  },\n  methods: {\n    advanceSearch(val) {\n      this.searchTerm = val\n    },\n    onRowClick(params) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: `Hello user! You have clicked on row ${params.row.id}`,\n          icon: 'UserIcon',\n          variant: 'success',\n        },\n      })\n    },\n  },\n}\n</script>\n";
var codeI18n = "\n<template>\n  <div>\n    <!-- search input -->\n    <div class=\"custom-search d-flex justify-content-end\">\n      <b-form-group>\n        <div class=\"d-flex align-items-center\">\n          <label class=\"mr-1\">{{ $t('message.seachLabel') }}</label>\n          <b-form-input\n            v-model=\"searchTerm\"\n            :placeholder=\" $t('message.SearchPlaceholder')\"\n            type=\"text\"\n            class=\"d-inline-block\"\n          />\n        </div>\n      </b-form-group>\n    </div>\n\n    <!-- table -->\n    <vue-good-table\n      :columns=\"columns\"\n      :rows=\"rows\"\n      :rtl=\"direction\"\n      :search-options=\"{\n        enabled: true,\n        externalQuery: searchTerm }\"\n      :select-options=\"{\n        enabled: true,\n        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row\n        selectionInfoClass: 'custom-class',\n        selectionText: 'rows selected',\n        clearSelectionText: 'clear',\n        disableSelectInfo: true, // disable the select info panel on top\n        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group\n      }\"\n      :pagination-options=\"{\n        enabled: true,\n        perPage:pageLength\n      }\"\n    >\n\n      <!-- Slot: Table Column -->\n      <template\n        slot=\"table-column\"\n        slot-scope=\"props\"\n      >\n        <span\n          v-if=\"props.column.label ==='Name'\"\n          class=\"text-nowrap\"\n        >\n          {{ $t('message.tableHeader.name') }}\n        </span>\n        <span\n          v-else-if=\"props.column.label ==='Email'\"\n          class=\"text-nowrap\"\n        >\n          {{ $t('message.tableHeader.email') }}\n        </span>\n        <span\n          v-else-if=\"props.column.label ==='Date'\"\n          class=\"text-nowrap\"\n        >\n          {{ $t('message.tableHeader.date') }}\n        </span>\n        <span\n          v-else-if=\"props.column.label ==='Salary'\"\n          class=\"text-nowrap\"\n        >\n          {{ $t('message.tableHeader.salary') }}\n        </span>\n        <span\n          v-else-if=\"props.column.label ==='Status'\"\n          class=\"text-nowrap\"\n        >\n          {{ $t('message.tableHeader.status') }}\n        </span>\n        <span\n          v-else-if=\"props.column.label ==='Action'\"\n          class=\"text-nowrap\"\n        >\n          {{ $t('message.tableHeader.action') }}\n        </span>\n        <span v-else>\n          {{ props.column.label }}\n        </span>\n      </template>\n\n      <!-- Slot: Table Row -->\n      <template\n        slot=\"table-row\"\n        slot-scope=\"props\"\n      >\n\n        <!-- Column: Name -->\n        <span\n          v-if=\"props.column.field === 'fullName'\"\n          class=\"text-nowrap\"\n        >\n          <b-avatar\n            :src=\"props.row.avatar\"\n            class=\"mx-1\"\n          />\n          <span>{{ props.row.fullName }}</span>\n        </span>\n\n        <!-- Column: Status -->\n        <span v-else-if=\"props.column.field === 'status'\">\n          <b-badge :variant=\"statusVariant(props.row.status)\">\n            {{ props.row.status }}\n          </b-badge>\n        </span>\n\n        <!-- Column: Action -->\n        <span v-else-if=\"props.column.field === 'action'\">\n          <span>\n            <b-dropdown\n              variant=\"link\"\n              toggle-class=\"text-decoration-none\"\n              no-caret\n            >\n              <template v-slot:button-content>\n                <feather-icon\n                  icon=\"MoreVerticalIcon\"\n                  size=\"16\"\n                  class=\"text-body align-middle mr-25\"\n                />\n              </template>\n              <b-dropdown-item>\n                <feather-icon\n                  icon=\"Edit2Icon\"\n                  class=\"mr-50\"\n                />\n                <span>Edit</span>\n              </b-dropdown-item>\n              <b-dropdown-item>\n                <feather-icon\n                  icon=\"TrashIcon\"\n                  class=\"mr-50\"\n                />\n                <span>Delete</span>\n              </b-dropdown-item>\n            </b-dropdown>\n          </span>\n        </span>\n\n        <!-- Column: Common -->\n        <span v-else>\n          {{ props.formattedRow[props.column.field] }}\n        </span>\n      </template>\n\n      <!-- pagination -->\n      <template\n        slot=\"pagination-bottom\"\n        slot-scope=\"props\"\n      >\n        <div class=\"d-flex justify-content-between flex-wrap\">\n          <div class=\"d-flex align-items-center mb-0 mt-1\">\n            <span class=\"text-nowrap\">\n              {{ $t('message.pagelength') }}\n            </span>\n            <b-form-select\n              v-model=\"pageLength\"\n              :options=\"['3','5','10']\"\n              class=\"mx-1\"\n              @input=\"(value)=>props.perPageChanged({currentPerPage:value})\"\n            />\n            <span class=\"text-nowrap\">  {{ $t('message.of') }} {{ props.total }} {{ $t('message.pageText2') }} </span>\n          </div>\n          <div>\n            <b-pagination\n              :value=\"1\"\n              :total-rows=\"props.total\"\n              :per-page=\"pageLength\"\n              first-number\n              last-number\n              align=\"right\"\n              prev-class=\"prev-item\"\n              next-class=\"next-item\"\n              class=\"mt-1 mb-0\"\n              @input=\"(value)=>props.pageChanged({currentPage:value})\"\n            >\n              <template #prev-text>\n                <feather-icon\n                  icon=\"ChevronLeftIcon\"\n                  size=\"18\"\n                />\n              </template>\n              <template #next-text>\n                <feather-icon\n                  icon=\"ChevronRightIcon\"\n                  size=\"18\"\n                />\n              </template>\n            </b-pagination>\n          </div>\n        </div>\n      </template>\n    </vue-good-table>\n  </div>\n</template>\n\n<script>\nimport {\n  BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BAlert, BDropdown, BDropdownItem,\n} from 'bootstrap-vue'\nimport { VueGoodTable } from 'vue-good-table'\nimport store from '@/store/index'\n\nexport default {\n  components: {\n    VueGoodTable,\n    BAvatar,\n    BBadge,\n    BPagination,\n    BFormGroup,\n    BFormInput,\n    BFormSelect,\n    BAlert,\n    BDropdown,\n    BDropdownItem,\n  },\n  data() {\n    return {\n      pageLength: 5,\n      dir: false,\n      columns: [\n        {\n          label: 'Name',\n          field: 'fullName',\n        },\n        {\n          label: 'Email',\n          field: 'email',\n        },\n        {\n          label: 'Date',\n          field: 'startDate',\n        },\n        {\n          label: 'Salary',\n          field: 'salary',\n        },\n        {\n          label: 'Status',\n          field: 'status',\n        },\n        {\n          label: 'Action',\n          field: 'action',\n        },\n      ],\n      rows: [],\n      searchTerm: '',\n\n    }\n  },\n  computed: {\n    statusVariant() {\n      const statusColor = {\n        /* eslint-disable key-spacing */\n        Current      : 'light-primary',\n        Professional : 'light-success',\n        Rejected     : 'light-danger',\n        Resigned     : 'light-warning',\n        Applied      : 'light-info',\n        /* eslint-enable key-spacing */\n      }\n\n      return status => statusColor[status]\n    },\n    direction() {\n      if (store.state.appConfig.isRTL) {\n        // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n        this.dir = true\n        return this.dir\n      }\n      // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n      this.dir = false\n      return this.dir\n    },\n  },\n  created() {\n    this.$http.get('/good-table/basic')\n      .then(res => { this.rows = res.data })\n  },\n}\n</script>\n";
var codeSSR = "\n<template>\n  <b-card-code title=\"SSR\">\n\n    <!-- search input -->\n    <div class=\"custom-search d-flex justify-content-end\">\n      <b-form-group>\n        <div class=\"d-flex align-items-center\">\n          <label class=\"mr-1\">Search</label>\n          <b-form-input\n            v-model=\"searchTerm\"\n            placeholder=\"Search\"\n            type=\"text\"\n            class=\"d-inline-block\"\n            @input=\"handleSearch\"\n          />\n        </div>\n      </b-form-group>\n    </div>\n\n    <!-- table -->\n    <vue-good-table\n      mode=\"remote\"\n      :columns=\"columns\"\n      :rows=\"rows\"\n      :rtl=\"direction\"\n      :search-options=\"{\n        enabled: true,\n        externalQuery: searchTerm\n      }\"\n      :select-options=\"{\n        enabled: true,\n        selectOnCheckboxOnly: true,\n        selectionInfoClass: 'custom-class',\n        selectionText: 'rows selected',\n        clearSelectionText: 'clear',\n        disableSelectInfo: true,\n        selectAllByGroup: true,\n      }\"\n      :pagination-options=\"{\n        enabled: true,\n      }\"\n      @on-sort-change=\"onSortChange\"\n    >\n      <template\n        slot=\"table-row\"\n        slot-scope=\"props\"\n      >\n\n        <!-- Column: Name -->\n        <span\n          v-if=\"props.column.field === 'fullName'\"\n          class=\"text-nowrap\"\n        >\n          <b-avatar\n            :src=\"props.row.avatar\"\n            class=\"mx-1\"\n          />\n          <span class=\"text-nowrap\">{{ props.row.fullName }}</span>\n        </span>\n\n        <!-- Column: Status -->\n        <span v-else-if=\"props.column.field === 'status'\">\n          <b-badge :variant=\"statusVariant(props.row.status)\">\n            {{ props.row.status }}\n          </b-badge>\n        </span>\n\n        <!-- Column: Action -->\n        <span v-else-if=\"props.column.field === 'action'\">\n          <span>\n            <b-dropdown\n              variant=\"link\"\n              toggle-class=\"text-decoration-none\"\n              no-caret\n            >\n              <template v-slot:button-content>\n                <feather-icon\n                  icon=\"MoreVerticalIcon\"\n                  size=\"16\"\n                  class=\"text-body align-middle mr-25\"\n                />\n              </template>\n              <b-dropdown-item>\n                <feather-icon\n                  icon=\"Edit2Icon\"\n                  class=\"mr-50\"\n                />\n                <span>Edit</span>\n              </b-dropdown-item>\n              <b-dropdown-item>\n                <feather-icon\n                  icon=\"TrashIcon\"\n                  class=\"mr-50\"\n                />\n                <span>Delete</span>\n              </b-dropdown-item>\n            </b-dropdown>\n          </span>\n        </span>\n\n        <!-- Column: Common -->\n        <span v-else>\n          {{ props.formattedRow[props.column.field] }}\n        </span>\n      </template>\n\n      <!-- pagination -->\n      <template\n        slot=\"pagination-bottom\"\n        slot-scope=\"props\"\n      >\n        <div class=\"d-flex justify-content-between flex-wrap\">\n\n          <!-- page length -->\n          <div class=\"d-flex align-items-center mb-0 mt-1\">\n            <span class=\"text-nowrap \">\n              Showing 1 to\n            </span>\n            <b-form-select\n              v-model=\"pageLength\"\n              :options=\"pages\"\n              class=\"mx-1\"\n              @input=\"handlePageChange\"\n            />\n            <span class=\"text-nowrap\"> of {{ props.total }} entries </span>\n          </div>\n\n          <!-- pagination -->\n          <div>\n            <b-pagination\n              :value=\"1\"\n              :total-rows=\"props.total\"\n              :per-page=\"pageLength\"\n              first-number\n              last-number\n              align=\"right\"\n              prev-class=\"prev-item\"\n              next-class=\"next-item\"\n              class=\"mt-1 mb-0\"\n              @change=\"handleChangePage\"\n            >\n              <template #prev-text>\n                <feather-icon\n                  icon=\"ChevronLeftIcon\"\n                  size=\"18\"\n                />\n              </template>\n              <template #next-text>\n                <feather-icon\n                  icon=\"ChevronRightIcon\"\n                  size=\"18\"\n                />\n              </template>\n            </b-pagination>\n          </div>\n        </div>\n      </template>\n    </vue-good-table>\n\n    <prism class=\"rounded mt-1\">\n      {{ log.join(\"\n\") }}\n    </prism>\n\n    <template #code>\n      {{ codeBasic }}\n    </template>\n  </b-card-code>\n</template>\n\n<script>\nimport {\n  BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdownItem, BDropdown,\n} from 'bootstrap-vue'\nimport { VueGoodTable } from 'vue-good-table'\nimport 'prismjs'\nimport 'prismjs/themes/prism-tomorrow.css'\nimport Prism from 'vue-prism-component'\nimport store from '@/store/index'\n\nexport default {\n  components: {\n    BCardCode,\n    VueGoodTable,\n    BAvatar,\n    BBadge,\n    BPagination,\n    BFormGroup,\n    BFormInput,\n    BFormSelect,\n    Prism,\n    BDropdownItem,\n    BDropdown,\n  },\n  data() {\n    return {\n      log: [],\n      pageLength: 3,\n      dir: false,\n      pages: ['3', '5', '10'],\n      columns: [\n        {\n          label: 'Name',\n          field: 'fullName',\n        },\n        {\n          label: 'Email',\n          field: 'email',\n        },\n        {\n          label: 'Date',\n          field: 'startDate',\n        },\n        {\n          label: 'Salary',\n          field: 'salary',\n        },\n        {\n          label: 'Status',\n          field: 'status',\n        },\n        {\n          label: 'Action',\n          field: 'action',\n        },\n      ],\n      rows: [],\n      searchTerm: '',\n      status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],\n    }\n  },\n  computed: {\n    statusVariant() {\n      const statusColor = {\n        /* eslint-disable key-spacing */\n        Current      : 'light-primary',\n        Professional : 'light-success',\n        Rejected     : 'light-danger',\n        Resigned     : 'light-warning',\n        Applied      : 'light-info',\n        /* eslint-enable key-spacing */\n      }\n\n      return status => statusColor[status]\n    },\n    direction() {\n      if (store.state.appConfig.isRTL) {\n        // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n        this.dir = true\n        return this.dir\n      }\n      // eslint-disable-next-line vue/no-side-effects-in-computed-properties\n      this.dir = false\n      return this.dir\n    },\n  },\n  created() {\n    this.$http.get('/good-table/table_ssr')\n      .then(res => { this.rows = res.data })\n  },\n  methods: {\n    handleSearch(searching) {\n      this.log.push(`The user searched for: ${searching}`)\n    },\n    handleChangePage(page) {\n      this.log.push(`The user changed the page to: ${page}`)\n    },\n    handlePageChange(active) {\n      this.log.push(`the user change page:  ${active}`)\n    },\n    onSortChange(params) {\n      this.log.push(`the user ordered:  ${params[0].type}`)\n    },\n  },\n}\n</script>\n";

/***/ })

}]);