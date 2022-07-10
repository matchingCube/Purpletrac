(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _LeafletBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletBasic.vue */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue");
/* harmony import */ var _LeafletMarkerCirclePolygon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeafletMarkerCirclePolygon.vue */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue");
/* harmony import */ var _LeafletPopup_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LeafletPopup.vue */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue");
/* harmony import */ var _LeafletGeoJSON_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LeafletGeoJSON.vue */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue");
/* harmony import */ var _LeafletGroup_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LeafletGroup.vue */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue");
/* harmony import */ var _LeafletCustomIcon_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LeafletCustomIcon.vue */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue");
//
//
//
//
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
    LeafletBasic: _LeafletBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LeafletMarkerCirclePolygon: _LeafletMarkerCirclePolygon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    LeafletPopup: _LeafletPopup_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LeafletGeoJSON: _LeafletGeoJSON_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    LeafletGroup: _LeafletGroup_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    LeafletCustomIcon: _LeafletCustomIcon_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/charts-and-maps/maps/leaflet/code.js");
//
//
//
//
//
//
//
//
//
//
//
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
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTileLayer"],
    LCircle: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LCircle"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      circle: {
        center: [47.413220, -1.0482],
        radius: 4500,
        color: '#EA5455'
      },
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_3__["codeBasic"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/@core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/charts-and-maps/maps/leaflet/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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




 // eslint-disable-next-line no-underscore-dangle

delete leaflet__WEBPACK_IMPORTED_MODULE_3__["Icon"].Default.prototype._getIconUrl;
leaflet__WEBPACK_IMPORTED_MODULE_3__["Icon"].Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
  shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Icon',
  components: {
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_2__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_2__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_2__["LMarker"],
    LIcon: vue2_leaflet__WEBPACK_IMPORTED_MODULE_2__["LIcon"]
  },
  data: function data() {
    return {
      zoom: 13,
      center: Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"])(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["icon"])({
        iconUrl: __webpack_require__(/*! @/assets/images/misc/leaf-green.png */ "./resources/js/src/assets/images/misc/leaf-green.png"),
        iconSize: [50, 50],
        iconAnchor: [16, 37]
      }),
      codeCustomIcon: _code__WEBPACK_IMPORTED_MODULE_4__["codeCustomIcon"]
    };
  }
});
/* eslint-disable global-require */

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_RealProjects_Laravel_Project_vue_laravel_purpletrac_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/@core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/charts-and-maps/maps/leaflet/code.js");



//
//
//
//
//
//
//
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
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_3__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_3__["LTileLayer"],
    LGeoJson: vue2_leaflet__WEBPACK_IMPORTED_MODULE_3__["LGeoJson"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      geojson: null,
      codeGeoJSON: _code__WEBPACK_IMPORTED_MODULE_5__["codeGeoJSON"]
    };
  },
  created: function created() {
    var _this = this;

    return Object(E_RealProjects_Laravel_Project_vue_laravel_purpletrac_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson');

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              _this.geojson = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/@core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/charts-and-maps/maps/leaflet/code.js");







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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




 // eslint-disable-next-line no-underscore-dangle

delete leaflet__WEBPACK_IMPORTED_MODULE_10__["Icon"].Default.prototype._getIconUrl;
leaflet__WEBPACK_IMPORTED_MODULE_10__["Icon"].Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
  shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")
});
/* eslint-disable global-require */

var markers1 = [{
  position: {
    lng: -1.219482,
    lat: 47.41322
  },
  visible: true,
  draggable: true
}, {
  position: {
    lng: -1.571045,
    lat: 47.457809
  }
}, {
  position: {
    lng: -1.560059,
    lat: 47.739323
  }
}, {
  position: {
    lng: -0.922852,
    lat: 47.886881
  }
}, {
  position: {
    lng: -0.769043,
    lat: 48.231991
  }
}, {
  position: {
    lng: 0.395508,
    lat: 48.268569
  }
}, {
  position: {
    lng: 0.604248,
    lat: 48.026672
  }
}, {
  position: {
    lng: 1.2854,
    lat: 47.982568
  }
}, {
  position: {
    lng: 1.318359,
    lat: 47.894248
  }
}, {
  position: {
    lng: 1.373291,
    lat: 47.879513
  }
}, {
  position: {
    lng: 1.384277,
    lat: 47.798397
  }
}, {
  position: {
    lng: 1.329346,
    lat: 47.754098
  }
}, {
  position: {
    lng: 1.329346,
    lat: 47.680183
  }
}, {
  position: {
    lng: 0.999756,
    lat: 47.635784
  }
}, {
  position: {
    lng: 0.86792,
    lat: 47.820532
  }
}, {
  position: {
    lng: 0.571289,
    lat: 47.820532
  }
}, {
  position: {
    lng: 0.439453,
    lat: 47.717154
  }
}, {
  position: {
    lng: 0.439453,
    lat: 47.61357
  }
}, {
  position: {
    lng: -0.571289,
    lat: 47.487513
  }
}, {
  position: {
    lng: -0.615234,
    lat: 47.680183
  }
}, {
  position: {
    lng: -0.812988,
    lat: 47.724545
  }
}, {
  position: {
    lng: -1.054688,
    lat: 47.680183
  }
}, {
  position: {
    lng: -1.219482,
    lat: 47.41322
  }
}];
var poly1 = [{
  lng: -1.219482,
  lat: 47.41322
}, {
  lng: -1.571045,
  lat: 47.457809
}, {
  lng: -1.560059,
  lat: 47.739323
}, {
  lng: -0.922852,
  lat: 47.886881
}, {
  lng: -0.769043,
  lat: 48.231991
}, {
  lng: 0.395508,
  lat: 48.268569
}, {
  lng: 0.604248,
  lat: 48.026672
}, {
  lng: 1.2854,
  lat: 47.982568
}, {
  lng: 1.318359,
  lat: 47.894248
}, {
  lng: 1.373291,
  lat: 47.879513
}, {
  lng: 1.384277,
  lat: 47.798397
}, {
  lng: 1.329346,
  lat: 47.754098
}, {
  lng: 1.329346,
  lat: 47.680183
}, {
  lng: 0.999756,
  lat: 47.635784
}, {
  lng: 0.86792,
  lat: 47.820532
}, {
  lng: 0.571289,
  lat: 47.820532
}, {
  lng: 0.439453,
  lat: 47.717154
}, {
  lng: 0.439453,
  lat: 47.61357
}, {
  lng: -0.571289,
  lat: 47.487513
}, {
  lng: -0.615234,
  lat: 47.680183
}, {
  lng: -0.812988,
  lat: 47.724545
}, {
  lng: -1.054688,
  lat: 47.680183
}, {
  lng: -1.219482,
  lat: 47.41322
}];
var tileProviders = [{
  name: 'OpenStreetMap',
  visible: true,
  attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}, {
  name: 'OpenTopoMap',
  visible: false,
  url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
  attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Example',
  components: {
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LMarker"],
    LPolyline: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LPolyline"],
    LLayerGroup: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LLayerGroup"],
    LTooltip: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LTooltip"],
    LPopup: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LPopup"],
    LControlZoom: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LControlZoom"],
    LControlAttribution: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LControlAttribution"],
    LControlScale: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LControlScale"],
    LControlLayers: vue2_leaflet__WEBPACK_IMPORTED_MODULE_9__["LControlLayers"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BButton"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BFormSelect"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BFormGroup"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      codeLayerGroup: _code__WEBPACK_IMPORTED_MODULE_11__["codeLayerGroup"],
      center: [51.505, -0.09],
      opacity: 0.6,
      token: 'your token if using mapbox',
      mapOptions: {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: true
      },
      zoom: 3,
      minZoom: 1,
      maxZoom: 20,
      zoomPosition: 'topleft',
      attributionPosition: 'bottomright',
      layersPosition: 'topright',
      attributionPrefix: 'Vue2Leaflet',
      imperial: false,
      Positions: ['topleft', 'topright', 'bottomleft', 'bottomright'],
      tileProviders: tileProviders,
      markers: [{
        id: 'm1',
        position: {
          lat: 51.505,
          lng: -0.09
        },
        tooltip: 'tooltip for marker1',
        draggable: true,
        visible: true
      }, {
        id: 'm2',
        position: {
          lat: 51.8905,
          lng: -0.09
        },
        tooltip: 'tooltip for marker2',
        draggable: true,
        visible: false
      }, {
        id: 'm3',
        position: {
          lat: 51.005,
          lng: -0.09
        },
        tooltip: 'tooltip for marker3',
        draggable: true,
        visible: true
      }, {
        id: 'm4',
        position: {
          lat: 50.7605,
          lng: -0.09
        },
        tooltip: 'tooltip for marker4',
        draggable: true,
        visible: false
      }],
      polylines: [{
        id: 'p1',
        points: [{
          lat: 37.772,
          lng: -122.214
        }, {
          lat: 21.291,
          lng: -157.821
        }, {
          lat: -18.142,
          lng: -181.569
        }, {
          lat: -27.467,
          lng: -206.973
        }],
        visible: true
      }, {
        id: 'p2',
        points: [[-73.91, 40.78], [-87.62, 41.83], [-96.72, 32.76]],
        visible: true
      }],
      stuff: [{
        id: 's1',
        markers: markers1,
        polyline: {
          points: poly1,
          visible: true
        },
        visible: true,
        markersVisible: true
      }],
      bounds: Object(leaflet__WEBPACK_IMPORTED_MODULE_10__["latLngBounds"])({
        lat: 51.476483373501964,
        lng: -0.14668464136775586
      }, {
        lat: 51.52948330894063,
        lng: -0.019140238291583955
      })
    };
  },
  methods: {
    alert: function (_alert) {
      function alert(_x) {
        return _alert.apply(this, arguments);
      }

      alert.toString = function () {
        return _alert.toString();
      };

      return alert;
    }(function (item) {
      // eslint-disable-next-line no-alert
      alert("this is ".concat(JSON.stringify(item)));
    }),
    addMarker: function addMarker() {
      var newMarker = {
        position: {
          lat: 50.5505,
          lng: -0.09
        },
        draggable: true,
        visible: true
      };
      this.markers.push(newMarker);
    },
    removeMarker: function removeMarker(index) {
      this.markers.splice(index, 1);
    },
    fitPolyline: function fitPolyline() {
      var bounds = Object(leaflet__WEBPACK_IMPORTED_MODULE_10__["latLngBounds"])(markers1.map(function (o) {
        return o.position;
      }));
      this.bounds = bounds;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/charts-and-maps/maps/leaflet/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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




 // eslint-disable-next-line no-underscore-dangle

delete leaflet__WEBPACK_IMPORTED_MODULE_2__["Icon"].Default.prototype._getIconUrl;
leaflet__WEBPACK_IMPORTED_MODULE_2__["Icon"].Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
  shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")
});
/* eslint-disable global-require */

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMarker"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    LCircle: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LCircle"],
    LPolygon: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LPolygon"]
  },
  data: function data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 10,
      center: [47.313220, -1.319482],
      markerLatLng: [47.313220, -1.319482],
      circle: {
        center: [47.313220, -1.319482],
        radius: 4500,
        color: '#EA5455'
      },
      polygon: {
        latlngs: [[47.2263299, -1.6222], [47.21024000000001, -1.6270065], [47.1969447, -1.6136169], [47.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834], [47.237287, -1.6266632], [47.2263299, -1.6222]],
        color: '#7367F0'
      },
      codeMarkerPolygon: _code__WEBPACK_IMPORTED_MODULE_4__["codeMarkerPolygon"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/charts-and-maps/maps/leaflet/code.js");
//
//
//
//
//
//
//
//
//
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
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMarker"],
    LPopup: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LPopup"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      markerLatLng: [47.313220, -1.319482, {
        draggable: 'true'
      }],
      codePopup: _code__WEBPACK_IMPORTED_MODULE_2__["codePopup"]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue2leaflet-map {\n  height: 400px;\n  z-index: 1;\n}\nhtml[dir=rtl] .leaflet-pane,\nhtml[dir=rtl] .leaflet-tile,\nhtml[dir=rtl] .leaflet-marker-icon,\nhtml[dir=rtl] .leaflet-marker-shadow,\nhtml[dir=rtl] .leaflet-tile-container,\nhtml[dir=rtl] .leaflet-pane > svg,\nhtml[dir=rtl] .leaflet-pane > canvas,\nhtml[dir=rtl] .leaflet-zoom-box,\nhtml[dir=rtl] .leaflet-image-layer,\nhtml[dir=rtl] .leaflet-layer {\n  left: 0;\n  right: unset;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Leaflet.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletBasic.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletPopup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=template&id=4ebdb332&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=template&id=4ebdb332& ***!
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
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12" } },
        [
          _c("leaflet-basic"),
          _vm._v(" "),
          _c("leaflet-marker-circle-polygon"),
          _vm._v(" "),
          _c("leaflet-popup"),
          _vm._v(" "),
          _c("leaflet-geo-jSON"),
          _vm._v(" "),
          _c("leaflet-group"),
          _vm._v(" "),
          _c("leaflet-custom-icon"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=template&id=c34b1592&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=template&id=c34b1592& ***!
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
      attrs: { title: "Basic Map" },
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
        "l-map",
        { attrs: { zoom: _vm.zoom, center: _vm.center } },
        [
          _c("l-tile-layer", { attrs: { url: _vm.url } }),
          _vm._v(" "),
          _c("l-circle", {
            attrs: {
              "lat-lng": _vm.circle.center,
              radius: _vm.circle.radius,
              color: _vm.circle.color,
            },
          }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=template&id=45680251&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=template&id=45680251& ***!
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
      attrs: { title: "Custom Icon" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeCustomIcon) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "l-map",
        { attrs: { zoom: _vm.zoom, center: _vm.center } },
        [
          _c("l-tile-layer", {
            attrs: { url: _vm.url, attribution: _vm.attribution },
          }),
          _vm._v(" "),
          _c("l-marker", { attrs: { "lat-lng": [47.41322, -1.219482] } }),
          _vm._v(" "),
          _c("l-marker", {
            attrs: { "lat-lng": [47.41322, -1.209482], icon: _vm.icon },
          }),
          _vm._v(" "),
          _c(
            "l-marker",
            { attrs: { "lat-lng": [47.41322, -1.199482] } },
            [
              _c(
                "l-icon",
                [
                  _c("b-img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/misc/leaf-red.png */ "./resources/js/src/assets/images/misc/leaf-red.png"),
                      height: "50",
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=template&id=2d71af02&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=template&id=2d71af02& ***!
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
      attrs: { title: "GeoJSON Map" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeGeoJSON) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "l-map",
        { attrs: { zoom: _vm.zoom, center: _vm.center } },
        [
          _c("l-tile-layer", { attrs: { url: _vm.url } }),
          _vm._v(" "),
          _c("l-geo-json", { attrs: { geojson: _vm.geojson } }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=template&id=a985f1f0&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=template&id=a985f1f0& ***!
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
      attrs: { title: "Layer Group" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeLayerGroup) + "\n  ")]
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
            "b-button",
            {
              attrs: { variant: "outline-primary" },
              on: { click: _vm.fitPolyline },
            },
            [_vm._v("\n      Fit map to polyline\n    ")]
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mt-2" },
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Contol Layers position: " } },
                    [
                      _c("b-form-select", {
                        attrs: { options: _vm.Positions },
                        model: {
                          value: _vm.layersPosition,
                          callback: function ($$v) {
                            _vm.layersPosition = $$v
                          },
                          expression: "layersPosition",
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Attribution position:" } },
                    [
                      _c("b-form-select", {
                        attrs: { options: _vm.Positions },
                        model: {
                          value: _vm.attributionPosition,
                          callback: function ($$v) {
                            _vm.attributionPosition = $$v
                          },
                          expression: "attributionPosition",
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
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "l-map",
        {
          staticStyle: { height: "500px", width: "100%" },
          attrs: {
            zoom: _vm.zoom,
            options: _vm.mapOptions,
            center: _vm.center,
            bounds: _vm.bounds,
            "min-zoom": _vm.minZoom,
            "max-zoom": _vm.maxZoom,
          },
          on: {
            "update:zoom": function ($event) {
              _vm.zoom = $event
            },
          },
        },
        [
          _c("l-control-layers", {
            attrs: {
              position: _vm.layersPosition,
              collapsed: false,
              "sort-layers": true,
            },
          }),
          _vm._v(" "),
          _vm._l(_vm.tileProviders, function (tileProvider) {
            return _c("l-tile-layer", {
              key: tileProvider.name,
              attrs: {
                name: tileProvider.name,
                visible: tileProvider.visible,
                url: tileProvider.url,
                attribution: tileProvider.attribution,
                token: _vm.token,
                "layer-type": "base",
              },
            })
          }),
          _vm._v(" "),
          _c("l-control-zoom", { attrs: { position: _vm.zoomPosition } }),
          _vm._v(" "),
          _c("l-control-attribution", {
            attrs: {
              position: _vm.attributionPosition,
              prefix: _vm.attributionPrefix,
            },
          }),
          _vm._v(" "),
          _c("l-control-scale", { attrs: { imperial: _vm.imperial } }),
          _vm._v(" "),
          _vm._l(_vm.markers, function (marker) {
            return _c(
              "l-marker",
              {
                key: marker.id,
                attrs: {
                  visible: marker.visible,
                  draggable: marker.draggable,
                  "lat-lng": marker.position,
                  icon: marker.icon,
                },
                on: {
                  "update:latLng": function ($event) {
                    return _vm.$set(marker, "position", $event)
                  },
                  "update:lat-lng": function ($event) {
                    return _vm.$set(marker, "position", $event)
                  },
                  click: function ($event) {
                    return _vm.alert(marker)
                  },
                },
              },
              [
                _c("l-popup", { attrs: { content: marker.tooltip } }),
                _vm._v(" "),
                _c("l-tooltip", { attrs: { content: marker.tooltip } }),
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "l-layer-group",
            { attrs: { "layer-type": "overlay", name: "Layer polyline" } },
            _vm._l(_vm.polylines, function (item) {
              return _c("l-polyline", {
                key: item.id,
                attrs: { "lat-lngs": item.points, visible: item.visible },
                on: {
                  click: function ($event) {
                    return _vm.alert(item)
                  },
                },
              })
            }),
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.stuff, function (item) {
            return _c(
              "l-layer-group",
              {
                key: item.id,
                attrs: {
                  visible: item.visible,
                  "layer-type": "overlay",
                  name: "Layer 1",
                },
                on: {
                  "update:visible": function ($event) {
                    return _vm.$set(item, "visible", $event)
                  },
                },
              },
              [
                _c(
                  "l-layer-group",
                  { attrs: { visible: item.markersVisible } },
                  _vm._l(item.markers, function (marker) {
                    return _c("l-marker", {
                      key: marker.id,
                      attrs: {
                        visible: marker.visible,
                        draggable: marker.draggable,
                        "lat-lng": marker.position,
                      },
                      on: {
                        click: function ($event) {
                          return _vm.alert(marker)
                        },
                      },
                    })
                  }),
                  1
                ),
                _vm._v(" "),
                _c("l-polyline", {
                  attrs: {
                    "lat-lngs": item.polyline.points,
                    visible: item.polyline.visible,
                  },
                  on: {
                    click: function ($event) {
                      return _vm.alert(item.polyline)
                    },
                  },
                }),
              ],
              1
            )
          }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=template&id=3456330e&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=template&id=3456330e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { title: "Marker, Circle & Polygon Map" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeMarkerPolygon) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "l-map",
        { attrs: { zoom: _vm.zoom, center: _vm.center } },
        [
          _c("l-tile-layer", { attrs: { url: _vm.url } }),
          _vm._v(" "),
          _c("l-marker", { attrs: { "lat-lng": _vm.markerLatLng } }),
          _vm._v(" "),
          _c("l-circle", {
            attrs: {
              "lat-lng": _vm.circle.center,
              radius: _vm.circle.radius,
              color: _vm.circle.color,
            },
          }),
          _vm._v(" "),
          _c("l-polygon", {
            attrs: {
              "lat-lngs": _vm.polygon.latlngs,
              color: _vm.polygon.color,
            },
          }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=template&id=4230ba96&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=template&id=4230ba96& ***!
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
      attrs: { title: "Popup Map" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codePopup) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "l-map",
        { attrs: { zoom: _vm.zoom, center: _vm.center } },
        [
          _c("l-tile-layer", { attrs: { url: _vm.url } }),
          _vm._v(" "),
          _c(
            "l-marker",
            { attrs: { "lat-lng": _vm.markerLatLng } },
            [_c("l-popup", [_vm._v("You're here!")])],
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

/***/ "./resources/js/src/assets/images/misc/leaf-green.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/misc/leaf-green.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/resources/js/src/assets/images/misc/leaf-green.png";

/***/ }),

/***/ "./resources/js/src/assets/images/misc/leaf-red.png":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/misc/leaf-red.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/resources/js/src/assets/images/misc/leaf-red.png";

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Leaflet_vue_vue_type_template_id_4ebdb332___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Leaflet.vue?vue&type=template&id=4ebdb332& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=template&id=4ebdb332&");
/* harmony import */ var _Leaflet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Leaflet.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Leaflet_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Leaflet.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Leaflet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Leaflet_vue_vue_type_template_id_4ebdb332___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Leaflet_vue_vue_type_template_id_4ebdb332___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaflet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Leaflet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaflet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaflet_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Leaflet.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaflet_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaflet_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaflet_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaflet_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=template&id=4ebdb332&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=template&id=4ebdb332& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaflet_vue_vue_type_template_id_4ebdb332___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Leaflet.vue?vue&type=template&id=4ebdb332& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/Leaflet.vue?vue&type=template&id=4ebdb332&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaflet_vue_vue_type_template_id_4ebdb332___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaflet_vue_vue_type_template_id_4ebdb332___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeafletBasic_vue_vue_type_template_id_c34b1592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeafletBasic.vue?vue&type=template&id=c34b1592& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=template&id=c34b1592&");
/* harmony import */ var _LeafletBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LeafletBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeafletBasic.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LeafletBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeafletBasic_vue_vue_type_template_id_c34b1592___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeafletBasic_vue_vue_type_template_id_c34b1592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletBasic.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=template&id=c34b1592&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=template&id=c34b1592& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_template_id_c34b1592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletBasic.vue?vue&type=template&id=c34b1592& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletBasic.vue?vue&type=template&id=c34b1592&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_template_id_c34b1592___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_template_id_c34b1592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeafletCustomIcon_vue_vue_type_template_id_45680251___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeafletCustomIcon.vue?vue&type=template&id=45680251& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=template&id=45680251&");
/* harmony import */ var _LeafletCustomIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletCustomIcon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LeafletCustomIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LeafletCustomIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeafletCustomIcon_vue_vue_type_template_id_45680251___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeafletCustomIcon_vue_vue_type_template_id_45680251___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletCustomIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletCustomIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletCustomIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletCustomIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletCustomIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletCustomIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletCustomIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletCustomIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=template&id=45680251&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=template&id=45680251& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletCustomIcon_vue_vue_type_template_id_45680251___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletCustomIcon.vue?vue&type=template&id=45680251& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletCustomIcon.vue?vue&type=template&id=45680251&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletCustomIcon_vue_vue_type_template_id_45680251___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletCustomIcon_vue_vue_type_template_id_45680251___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeafletGeoJSON_vue_vue_type_template_id_2d71af02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeafletGeoJSON.vue?vue&type=template&id=2d71af02& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=template&id=2d71af02&");
/* harmony import */ var _LeafletGeoJSON_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletGeoJSON.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LeafletGeoJSON_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LeafletGeoJSON_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeafletGeoJSON_vue_vue_type_template_id_2d71af02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeafletGeoJSON_vue_vue_type_template_id_2d71af02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGeoJSON_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletGeoJSON.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGeoJSON_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGeoJSON_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGeoJSON_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGeoJSON_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGeoJSON_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGeoJSON_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=template&id=2d71af02&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=template&id=2d71af02& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGeoJSON_vue_vue_type_template_id_2d71af02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletGeoJSON.vue?vue&type=template&id=2d71af02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGeoJSON.vue?vue&type=template&id=2d71af02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGeoJSON_vue_vue_type_template_id_2d71af02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGeoJSON_vue_vue_type_template_id_2d71af02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeafletGroup_vue_vue_type_template_id_a985f1f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeafletGroup.vue?vue&type=template&id=a985f1f0& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=template&id=a985f1f0&");
/* harmony import */ var _LeafletGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LeafletGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeafletGroup_vue_vue_type_template_id_a985f1f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeafletGroup_vue_vue_type_template_id_a985f1f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=template&id=a985f1f0&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=template&id=a985f1f0& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGroup_vue_vue_type_template_id_a985f1f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletGroup.vue?vue&type=template&id=a985f1f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletGroup.vue?vue&type=template&id=a985f1f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGroup_vue_vue_type_template_id_a985f1f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletGroup_vue_vue_type_template_id_a985f1f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeafletMarkerCirclePolygon_vue_vue_type_template_id_3456330e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeafletMarkerCirclePolygon.vue?vue&type=template&id=3456330e& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=template&id=3456330e&");
/* harmony import */ var _LeafletMarkerCirclePolygon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletMarkerCirclePolygon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LeafletMarkerCirclePolygon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LeafletMarkerCirclePolygon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeafletMarkerCirclePolygon_vue_vue_type_template_id_3456330e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeafletMarkerCirclePolygon_vue_vue_type_template_id_3456330e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletMarkerCirclePolygon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletMarkerCirclePolygon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletMarkerCirclePolygon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletMarkerCirclePolygon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletMarkerCirclePolygon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletMarkerCirclePolygon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletMarkerCirclePolygon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletMarkerCirclePolygon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=template&id=3456330e&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=template&id=3456330e& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletMarkerCirclePolygon_vue_vue_type_template_id_3456330e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletMarkerCirclePolygon.vue?vue&type=template&id=3456330e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletMarkerCirclePolygon.vue?vue&type=template&id=3456330e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletMarkerCirclePolygon_vue_vue_type_template_id_3456330e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletMarkerCirclePolygon_vue_vue_type_template_id_3456330e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeafletPopup_vue_vue_type_template_id_4230ba96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeafletPopup.vue?vue&type=template&id=4230ba96& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=template&id=4230ba96&");
/* harmony import */ var _LeafletPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletPopup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LeafletPopup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeafletPopup.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LeafletPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeafletPopup_vue_vue_type_template_id_4230ba96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeafletPopup_vue_vue_type_template_id_4230ba96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletPopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletPopup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletPopup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletPopup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletPopup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletPopup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletPopup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=template&id=4230ba96&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=template&id=4230ba96& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletPopup_vue_vue_type_template_id_4230ba96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletPopup.vue?vue&type=template&id=4230ba96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/maps/leaflet/LeafletPopup.vue?vue&type=template&id=4230ba96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletPopup_vue_vue_type_template_id_4230ba96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletPopup_vue_vue_type_template_id_4230ba96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/maps/leaflet/code.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/maps/leaflet/code.js ***!
  \*********************************************************************/
/*! exports provided: codeBasic, codeMarkerPolygon, codePopup, codeGeoJSON, codeLayerGroup, codeCustomIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeMarkerPolygon", function() { return codeMarkerPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codePopup", function() { return codePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeGeoJSON", function() { return codeGeoJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeLayerGroup", function() { return codeLayerGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeCustomIcon", function() { return codeCustomIcon; });
var codeBasic = "\n<template>\n  <div>\n    <l-map\n      :zoom=\"zoom\"\n      :center=\"center\"\n    >\n      <l-tile-layer :url=\"url\" />\n      <l-circle\n        :lat-lng=\"circle.center\"\n        :radius=\"circle.radius\"\n        :color=\"circle.color\"\n      />\n    </l-map>\n  </div>\n</template>\n\n<script>\nimport { LMap, LTileLayer, LCircle } from 'vue2-leaflet'\nimport 'leaflet/dist/leaflet.css'\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LCircle,\n  },\n  data() {\n    return {\n      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n      zoom: 8,\n      center: [47.313220, -1.319482],\n      circle: {\n        center: [47.413220, -1.0482],\n        radius: 4500,\n        color: '#EA5455',\n      },\n    }\n  },\n}\n</script>\n\n<style lang=\"scss\">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n";
var codeMarkerPolygon = "\n<template>\n  <div>\n    <l-map\n      :zoom=\"zoom\"\n      :center=\"center\"\n    >\n      <l-tile-layer :url=\"url\" />\n      <l-marker :lat-lng=\"markerLatLng\" />\n      <l-circle\n        :lat-lng=\"circle.center\"\n        :radius=\"circle.radius\"\n        :color=\"circle.color\"\n      />\n      <l-polygon\n        :lat-lngs=\"polygon.latlngs\"\n        :color=\"polygon.color\"\n      />\n    </l-map>\n  </div>\n</template>\n\n<script>\n/* eslint-disable global-require */\nimport {\n  LMap, LTileLayer, LMarker, LCircle, LPolygon,\n} from 'vue2-leaflet'\nimport { Icon } from 'leaflet'\nimport 'leaflet/dist/leaflet.css'\n\n// eslint-disable-next-line no-underscore-dangle\ndelete Icon.Default.prototype._getIconUrl\nIcon.Default.mergeOptions({\n  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),\n  iconUrl: require('leaflet/dist/images/marker-icon.png'),\n  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),\n})\n/* eslint-disable global-require */\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LMarker,\n    LCircle,\n    LPolygon,\n  },\n  data() {\n    return {\n      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n      zoom: 10,\n      center: [47.313220, -1.319482],\n      markerLatLng: [47.313220, -1.319482],\n      circle: {\n        center: [47.313220, -1.319482],\n        radius: 4500,\n        color: '#EA5455',\n      },\n      polygon: {\n        latlngs: [[47.2263299, -1.6222], [47.21024000000001, -1.6270065], [47.1969447, -1.6136169], [47.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834], [47.237287, -1.6266632], [47.2263299, -1.6222]],\n        color: '#7367F0',\n      },\n    }\n  },\n}\n</script>\n\n<style lang=\"scss\">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n";
var codePopup = "\n<template>\n  <div>\n    <l-map\n      :zoom=\"zoom\"\n      :center=\"center\"\n    >\n      <l-tile-layer :url=\"url\" />\n      <l-marker :lat-lng=\"markerLatLng\">\n        <l-popup>You're here!</l-popup>\n      </l-marker>\n    </l-map>\n  </div>\n</template>\n\n<script>\nimport {\n  LMap, LTileLayer, LMarker, LPopup,\n} from 'vue2-leaflet'\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LMarker,\n    LPopup,\n  },\n  data() {\n    return {\n      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n      zoom: 8,\n      center: [47.313220, -1.319482],\n      markerLatLng: [47.313220, -1.319482, { draggable: 'true' }],\n    }\n  },\n}\n</script>\n\n<style lang=\"scss\">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n";
var codeGeoJSON = "\n<template>\n  <div>\n    <l-map\n      :zoom=\"zoom\"\n      :center=\"center\"\n    >\n      <l-tile-layer :url=\"url\" />\n      <l-geo-json :geojson=\"geojson\" />\n    </l-map>\n  </div>\n</template>\n\n<script>\nimport { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet'\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LGeoJson,\n  },\n  data() {\n    return {\n      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n      zoom: 8,\n      center: [47.313220, -1.319482],\n      geojson: null,\n    }\n  },\n  async created() {\n    const response = await fetch('https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson')\n    this.geojson = await response.json()\n  },\n}\n</script>\n\n<style lang=\"scss\">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n";
var codeLayerGroup = "\n<template>\n  <div>\n     <div>\n      <b-button\n        variant=\"outline-primary\"\n        @click=\"fitPolyline\"\n      >\n        Fit map to polyline\n      </b-button>\n\n      <b-row class=\"mt-2\">\n        <b-col md=\"6\">\n          <b-form-group label=\"Contol Layers position: \">\n            <b-form-select\n              v-model=\"layersPosition\"\n              :options=\"Positions\"\n            />\n          </b-form-group>\n\n        </b-col>\n        <b-col md=\"6\">\n          <b-form-group label=\"Attribution position:\">\n            <b-form-select\n              v-model=\"attributionPosition\"\n              :options=\"Positions\"\n            />\n          </b-form-group>\n        </b-col>\n      </b-row>\n\n    </div>\n\n    <!-- map -->\n    <l-map\n      :zoom.sync=\"zoom\"\n      :options=\"mapOptions\"\n      :center=\"center\"\n      :bounds=\"bounds\"\n      :min-zoom=\"minZoom\"\n      :max-zoom=\"maxZoom\"\n      style=\"height: 500px; width: 100%\"\n    >\n      <l-control-layers\n        :position=\"layersPosition\"\n        :collapsed=\"false\"\n        :sort-layers=\"true\"\n      />\n      <l-tile-layer\n        v-for=\"tileProvider in tileProviders\"\n        :key=\"tileProvider.name\"\n        :name=\"tileProvider.name\"\n        :visible=\"tileProvider.visible\"\n        :url=\"tileProvider.url\"\n        :attribution=\"tileProvider.attribution\"\n        :token=\"token\"\n        layer-type=\"base\"\n      />\n      <l-control-zoom :position=\"zoomPosition\" />\n      <l-control-attribution\n        :position=\"attributionPosition\"\n        :prefix=\"attributionPrefix\"\n      />\n      <l-control-scale :imperial=\"imperial\" />\n      <l-marker\n        v-for=\"marker in markers\"\n        :key=\"marker.id\"\n        :visible=\"marker.visible\"\n        :draggable=\"marker.draggable\"\n        :lat-lng.sync=\"marker.position\"\n        :icon=\"marker.icon\"\n        @click=\"alert(marker)\"\n      >\n        <l-popup :content=\"marker.tooltip\" />\n        <l-tooltip :content=\"marker.tooltip\" />\n      </l-marker>\n      <l-layer-group\n        layer-type=\"overlay\"\n        name=\"Layer polyline\"\n      >\n        <l-polyline\n          v-for=\"item in polylines\"\n          :key=\"item.id\"\n          :lat-lngs=\"item.points\"\n          :visible=\"item.visible\"\n          @click=\"alert(item)\"\n        />\n      </l-layer-group>\n      <l-layer-group\n        v-for=\"item in stuff\"\n        :key=\"item.id\"\n        :visible.sync=\"item.visible\"\n        layer-type=\"overlay\"\n        name=\"Layer 1\"\n      >\n        <l-layer-group :visible=\"item.markersVisible\">\n          <l-marker\n            v-for=\"marker in item.markers\"\n            :key=\"marker.id\"\n            :visible=\"marker.visible\"\n            :draggable=\"marker.draggable\"\n            :lat-lng=\"marker.position\"\n            @click=\"alert(marker)\"\n          />\n        </l-layer-group>\n        <l-polyline\n          :lat-lngs=\"item.polyline.points\"\n          :visible=\"item.polyline.visible\"\n          @click=\"alert(item.polyline)\"\n        />\n      </l-layer-group>\n    </l-map>\n  </div>\n</template>\n\n<script>\n/* eslint-disable global-require */\nimport {\n  BButton, BFormSelect, BRow, BCol, BFormGroup,\n} from 'bootstrap-vue'\nimport {\n  LMap,\n  LTileLayer,\n  LMarker,\n  LPolyline,\n  LLayerGroup,\n  LTooltip,\n  LPopup,\n  LControlZoom,\n  LControlAttribution,\n  LControlScale,\n  LControlLayers,\n} from 'vue2-leaflet'\nimport { latLngBounds, Icon } from 'leaflet'\n\n// eslint-disable-next-line no-underscore-dangle\ndelete Icon.Default.prototype._getIconUrl\nIcon.Default.mergeOptions({\n  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),\n  iconUrl: require('leaflet/dist/images/marker-icon.png'),\n  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),\n})\n/* eslint-disable global-require */\nconst markers1 = [\n  {\n    position: { lng: -1.219482, lat: 47.41322 },\n    visible: true,\n    draggable: true,\n  },\n  { position: { lng: -1.571045, lat: 47.457809 } },\n  { position: { lng: -1.560059, lat: 47.739323 } },\n  { position: { lng: -0.922852, lat: 47.886881 } },\n  { position: { lng: -0.769043, lat: 48.231991 } },\n  { position: { lng: 0.395508, lat: 48.268569 } },\n  { position: { lng: 0.604248, lat: 48.026672 } },\n  { position: { lng: 1.2854, lat: 47.982568 } },\n  { position: { lng: 1.318359, lat: 47.894248 } },\n  { position: { lng: 1.373291, lat: 47.879513 } },\n  { position: { lng: 1.384277, lat: 47.798397 } },\n  { position: { lng: 1.329346, lat: 47.754098 } },\n  { position: { lng: 1.329346, lat: 47.680183 } },\n  { position: { lng: 0.999756, lat: 47.635784 } },\n  { position: { lng: 0.86792, lat: 47.820532 } },\n  { position: { lng: 0.571289, lat: 47.820532 } },\n  { position: { lng: 0.439453, lat: 47.717154 } },\n  { position: { lng: 0.439453, lat: 47.61357 } },\n  { position: { lng: -0.571289, lat: 47.487513 } },\n  { position: { lng: -0.615234, lat: 47.680183 } },\n  { position: { lng: -0.812988, lat: 47.724545 } },\n  { position: { lng: -1.054688, lat: 47.680183 } },\n  { position: { lng: -1.219482, lat: 47.41322 } },\n]\n\nconst poly1 = [\n  { lng: -1.219482, lat: 47.41322 },\n  { lng: -1.571045, lat: 47.457809 },\n  { lng: -1.560059, lat: 47.739323 },\n  { lng: -0.922852, lat: 47.886881 },\n  { lng: -0.769043, lat: 48.231991 },\n  { lng: 0.395508, lat: 48.268569 },\n  { lng: 0.604248, lat: 48.026672 },\n  { lng: 1.2854, lat: 47.982568 },\n  { lng: 1.318359, lat: 47.894248 },\n  { lng: 1.373291, lat: 47.879513 },\n  { lng: 1.384277, lat: 47.798397 },\n  { lng: 1.329346, lat: 47.754098 },\n  { lng: 1.329346, lat: 47.680183 },\n  { lng: 0.999756, lat: 47.635784 },\n  { lng: 0.86792, lat: 47.820532 },\n  { lng: 0.571289, lat: 47.820532 },\n  { lng: 0.439453, lat: 47.717154 },\n  { lng: 0.439453, lat: 47.61357 },\n  { lng: -0.571289, lat: 47.487513 },\n  { lng: -0.615234, lat: 47.680183 },\n  { lng: -0.812988, lat: 47.724545 },\n  { lng: -1.054688, lat: 47.680183 },\n  { lng: -1.219482, lat: 47.41322 },\n]\n\nconst tileProviders = [\n  {\n    name: 'OpenStreetMap',\n    visible: true,\n    attribution:\n      '&copy; <a target=\"_blank\" href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors',\n    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n  },\n  {\n    name: 'OpenTopoMap',\n    visible: false,\n    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',\n    attribution:\n      'Map data: &copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>, <a href=\"http://viewfinderpanoramas.org\">SRTM</a> | Map style: &copy; <a href=\"https://opentopomap.org\">OpenTopoMap</a> (<a href=\"https://creativecommons.org/licenses/by-sa/3.0/\">CC-BY-SA</a>)',\n  },\n]\n\nexport default {\n  name: 'Example',\n  components: {\n    LMap,\n    LTileLayer,\n    LMarker,\n    LPolyline,\n    LLayerGroup,\n    LTooltip,\n    LPopup,\n    LControlZoom,\n    LControlAttribution,\n    LControlScale,\n    LControlLayers,\n    BButton,\n    BFormSelect,\n    BRow,\n    BCol,\n    BFormGroup,\n  },\n  data() {\n    return {\n      center: [51.505, -0.09],\n      opacity: 0.6,\n      token: 'your token if using mapbox',\n      mapOptions: {\n        zoomControl: false,\n        attributionControl: false,\n        zoomSnap: true,\n      },\n      zoom: 3,\n      minZoom: 1,\n      maxZoom: 20,\n      zoomPosition: 'topleft',\n      attributionPosition: 'bottomright',\n      layersPosition: 'topright',\n      attributionPrefix: 'Vue2Leaflet',\n      imperial: false,\n      Positions: ['topleft', 'topright', 'bottomleft', 'bottomright'],\n      tileProviders,\n      markers: [\n        {\n          id: 'm1',\n          position: { lat: 51.505, lng: -0.09 },\n          tooltip: 'tooltip for marker1',\n          draggable: true,\n          visible: true,\n        },\n        {\n          id: 'm2',\n          position: { lat: 51.8905, lng: -0.09 },\n          tooltip: 'tooltip for marker2',\n          draggable: true,\n          visible: false,\n        },\n        {\n          id: 'm3',\n          position: { lat: 51.005, lng: -0.09 },\n          tooltip: 'tooltip for marker3',\n          draggable: true,\n          visible: true,\n        },\n        {\n          id: 'm4',\n          position: { lat: 50.7605, lng: -0.09 },\n          tooltip: 'tooltip for marker4',\n          draggable: true,\n          visible: false,\n        },\n      ],\n      polylines: [\n        {\n          id: 'p1',\n          points: [\n            { lat: 37.772, lng: -122.214 },\n            { lat: 21.291, lng: -157.821 },\n            { lat: -18.142, lng: -181.569 },\n            { lat: -27.467, lng: -206.973 },\n          ],\n          visible: true,\n        },\n        {\n          id: 'p2',\n          points: [\n            [-73.91, 40.78],\n            [-87.62, 41.83],\n            [-96.72, 32.76],\n          ],\n          visible: true,\n        },\n      ],\n      stuff: [\n        {\n          id: 's1',\n          markers: markers1,\n          polyline: { points: poly1, visible: true },\n          visible: true,\n          markersVisible: true,\n        },\n      ],\n      bounds: latLngBounds(\n        { lat: 51.476483373501964, lng: -0.14668464136775586 },\n        { lat: 51.52948330894063, lng: -0.019140238291583955 },\n      ),\n    }\n  },\n  methods: {\n    alert(item) {\n      // eslint-disable-next-line no-alert\n      alert(`this is ${JSON.stringify(item)}`)\n    },\n    addMarker() {\n      const newMarker = {\n        position: { lat: 50.5505, lng: -0.09 },\n        draggable: true,\n        visible: true,\n      }\n      this.markers.push(newMarker)\n    },\n    removeMarker(index) {\n      this.markers.splice(index, 1)\n    },\n    fitPolyline() {\n      const bounds = latLngBounds(markers1.map(o => o.position))\n      this.bounds = bounds\n    },\n  },\n}\n</script>\n";
var codeCustomIcon = "\n<template>\n  <div>\n    <l-map\n      :zoom=\"zoom\"\n      :center=\"center\"\n    >\n      <l-tile-layer\n        :url=\"url\"\n        :attribution=\"attribution\"\n      />\n\n      <!-- Use default icon -->\n      <l-marker :lat-lng=\"[47.41322, -1.219482]\" />\n\n      <!-- Use icon given in icon property -->\n      <l-marker\n        :lat-lng=\"[47.41322, -1.209482]\"\n        :icon=\"icon\"\n      />\n\n      <!-- Create image icon (icon) from l-icon tag -->\n      <l-marker :lat-lng=\"[47.41322, -1.199482]\">\n        <l-icon>\n          <b-img\n            :src=\"require('@/assets/images/misc/leaf-red.png')\"\n            height=\"50\"\n          />\n        </l-icon>\n      </l-marker>\n    </l-map>\n  </div>\n</template>\n\n<script>\n\n/* eslint-disable global-require */\nimport { BImg } from 'bootstrap-vue'\nimport {\n  LMap, LTileLayer, LMarker, LIcon,\n} from 'vue2-leaflet'\nimport { latLng, icon, Icon } from 'leaflet'\n\n// eslint-disable-next-line no-underscore-dangle\ndelete Icon.Default.prototype._getIconUrl\nIcon.Default.mergeOptions({\n  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),\n  iconUrl: require('leaflet/dist/images/marker-icon.png'),\n  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),\n})\n\nexport default {\n  name: 'Icon',\n  components: {\n    BImg,\n    LMap,\n    LTileLayer,\n    LMarker,\n    LIcon,\n  },\n  data() {\n    return {\n      zoom: 13,\n      center: latLng(47.41322, -1.219482),\n      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n      attribution: '&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors',\n      icon: icon({\n        iconUrl: require('@/assets/images/misc/leaf-green.png'),\n        iconSize: [50, 50],\n        iconAnchor: [16, 37],\n      }),\n    }\n  },\n}\n/* eslint-disable global-require */\n</script>\n\n<style lang=\"scss\">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n";

/***/ })

}]);