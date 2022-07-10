(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/utils/utils */ "./resources/js/src/@core/utils/utils.js");
/* harmony import */ var _core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/comp-functions/ui/app */ "./resources/js/src/@core/comp-functions/ui/app.js");
/* harmony import */ var _TodoLeftSidebar_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./TodoLeftSidebar.vue */ "./resources/js/src/views/apps/todo/TodoLeftSidebar.vue");
/* harmony import */ var _todoStoreModule__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./todoStoreModule */ "./resources/js/src/views/apps/todo/todoStoreModule.js");
/* harmony import */ var _TodoTaskHandlerSidebar_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./TodoTaskHandlerSidebar.vue */ "./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue");










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BFormInput"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BInputGroupPrepend"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BDropdownItem"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BFormCheckbox"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BBadge"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BAvatar"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_14___default.a,
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13___default.a,
    // App SFC
    TodoLeftSidebar: _TodoLeftSidebar_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    TodoTaskHandlerSidebar: _TodoTaskHandlerSidebar_vue__WEBPACK_IMPORTED_MODULE_20__["default"]
  },
  setup: function setup() {
    var TODO_APP_STORE_MODULE_NAME = 'app-todo'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_10__["default"].hasModule(TODO_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_10__["default"].registerModule(TODO_APP_STORE_MODULE_NAME, _todoStoreModule__WEBPACK_IMPORTED_MODULE_19__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_10__["default"].hasModule(TODO_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_10__["default"].unregisterModule(TODO_APP_STORE_MODULE_NAME);
    });

    var _useRouter = Object(_core_utils_utils__WEBPACK_IMPORTED_MODULE_16__["useRouter"])(),
        route = _useRouter.route,
        router = _useRouter.router;

    var routeSortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
      return route.value.query.sort;
    });
    var routeQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
      return route.value.query.q;
    });
    var routeParams = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
      return route.value.params;
    });
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["watch"])(routeParams, function () {
      // eslint-disable-next-line no-use-before-define
      fetchTasks();
    });
    var tasks = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])([]);
    var sortOptions = ['latest', 'title-asc', 'title-desc', 'assignee', 'due-date'];
    var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])(routeSortBy.value);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["watch"])(routeSortBy, function (val) {
      if (sortOptions.includes(val)) sortBy.value = val;else sortBy.value = val;
    });

    var resetSortAndNavigate = function resetSortAndNavigate() {
      var currentRouteQuery = JSON.parse(JSON.stringify(route.value.query));
      delete currentRouteQuery.sort;
      router.replace({
        name: route.name,
        query: currentRouteQuery
      })["catch"](function () {});
    };

    var blankTask = {
      id: null,
      title: '',
      dueDate: new Date(),
      description: '',
      assignee: null,
      tags: [],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    };
    var task = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])(JSON.parse(JSON.stringify(blankTask)));

    var clearTaskData = function clearTaskData() {
      task.value = JSON.parse(JSON.stringify(blankTask));
    };

    var addTask = function addTask(val) {
      _store__WEBPACK_IMPORTED_MODULE_10__["default"].dispatch('app-todo/addTask', val).then(function () {
        // eslint-disable-next-line no-use-before-define
        fetchTasks();
      });
    };

    var removeTask = function removeTask() {
      _store__WEBPACK_IMPORTED_MODULE_10__["default"].dispatch('app-todo/removeTask', {
        id: task.value.id
      }).then(function () {
        // eslint-disable-next-line no-use-before-define
        fetchTasks();
      });
    };

    var updateTask = function updateTask(taskData) {
      _store__WEBPACK_IMPORTED_MODULE_10__["default"].dispatch('app-todo/updateTask', {
        task: taskData
      }).then(function () {
        // eslint-disable-next-line no-use-before-define
        fetchTasks();
      });
    };

    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    };
    var isTaskHandlerSidebarActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])(false);
    var taskTags = [{
      title: 'Team',
      color: 'primary',
      route: {
        name: 'apps-todo-tag',
        params: {
          tag: 'team'
        }
      }
    }, {
      title: 'Low',
      color: 'success',
      route: {
        name: 'apps-todo-tag',
        params: {
          tag: 'low'
        }
      }
    }, {
      title: 'Medium',
      color: 'warning',
      route: {
        name: 'apps-todo-tag',
        params: {
          tag: 'medium'
        }
      }
    }, {
      title: 'High',
      color: 'danger',
      route: {
        name: 'apps-todo-tag',
        params: {
          tag: 'high'
        }
      }
    }, {
      title: 'Update',
      color: 'info',
      route: {
        name: 'apps-todo-tag',
        params: {
          tag: 'update'
        }
      }
    }];

    var resolveTagVariant = function resolveTagVariant(tag) {
      if (tag === 'team') return 'primary';
      if (tag === 'low') return 'success';
      if (tag === 'medium') return 'warning';
      if (tag === 'high') return 'danger';
      if (tag === 'update') return 'info';
      return 'primary';
    };

    var resolveAvatarVariant = function resolveAvatarVariant(tags) {
      if (tags.includes('high')) return 'primary';
      if (tags.includes('medium')) return 'warning';
      if (tags.includes('low')) return 'success';
      if (tags.includes('update')) return 'danger';
      if (tags.includes('team')) return 'info';
      return 'primary';
    }; // Search Query


    var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])(routeQuery.value);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["watch"])(routeQuery, function (val) {
      searchQuery.value = val;
    }); // eslint-disable-next-line no-use-before-define

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["watch"])([searchQuery, sortBy], function () {
      return fetchTasks();
    });

    var updateRouteQuery = function updateRouteQuery(val) {
      var currentRouteQuery = JSON.parse(JSON.stringify(route.value.query));
      if (val) currentRouteQuery.q = val;else delete currentRouteQuery.q;
      router.replace({
        name: route.name,
        query: currentRouteQuery
      });
    };

    var fetchTasks = function fetchTasks() {
      _store__WEBPACK_IMPORTED_MODULE_10__["default"].dispatch('app-todo/fetchTasks', {
        q: searchQuery.value,
        filter: router.currentRoute.params.filter,
        tag: router.currentRoute.params.tag,
        sortBy: sortBy.value
      }).then(function (response) {
        tasks.value = response.data;
      });
    };

    fetchTasks();

    var handleTaskClick = function handleTaskClick(taskData) {
      task.value = taskData;
      isTaskHandlerSidebarActive.value = true;
    }; // Single Task isCompleted update


    var updateTaskIsCompleted = function updateTaskIsCompleted(taskData) {
      // eslint-disable-next-line no-param-reassign
      taskData.isCompleted = !taskData.isCompleted;
      updateTask(taskData);
    };

    var _useResponsiveAppLeft = Object(_core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_17__["useResponsiveAppLeftSidebarVisibility"])(),
        mqShallShowLeftSidebar = _useResponsiveAppLeft.mqShallShowLeftSidebar;

    return {
      task: task,
      tasks: tasks,
      removeTask: removeTask,
      addTask: addTask,
      updateTask: updateTask,
      clearTaskData: clearTaskData,
      taskTags: taskTags,
      searchQuery: searchQuery,
      fetchTasks: fetchTasks,
      perfectScrollbarSettings: perfectScrollbarSettings,
      updateRouteQuery: updateRouteQuery,
      resetSortAndNavigate: resetSortAndNavigate,
      // UI
      resolveTagVariant: resolveTagVariant,
      resolveAvatarVariant: resolveAvatarVariant,
      isTaskHandlerSidebarActive: isTaskHandlerSidebarActive,
      // Click Handler
      handleTaskClick: handleTaskClick,
      // Filters
      formatDate: _core_utils_filter__WEBPACK_IMPORTED_MODULE_15__["formatDate"],
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_15__["avatarText"],
      // Single Task isCompleted update
      updateTaskIsCompleted: updateTaskIsCompleted,
      // Left Sidebar Responsive
      mqShallShowLeftSidebar: mqShallShowLeftSidebar
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/utils */ "./resources/js/src/@core/utils/utils.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroupItem"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    taskTags: {
      type: Array,
      required: true
    }
  },
  setup: function setup() {
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60
    };
    var taskFilters = [{
      title: 'My Task',
      icon: 'MailIcon',
      route: {
        name: 'apps-todo'
      }
    }, {
      title: 'Important',
      icon: 'StarIcon',
      route: {
        name: 'apps-todo-filter',
        params: {
          filter: 'important'
        }
      }
    }, {
      title: 'Completed',
      icon: 'CheckIcon',
      route: {
        name: 'apps-todo-filter',
        params: {
          filter: 'completed'
        }
      }
    }, {
      title: 'Deleted',
      icon: 'TrashIcon',
      route: {
        name: 'apps-todo-filter',
        params: {
          filter: 'deleted'
        }
      }
    }];
    return {
      perfectScrollbarSettings: perfectScrollbarSettings,
      taskFilters: taskFilters,
      isDynamicRouteActive: _core_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isDynamicRouteActive"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/comp-functions/forms/form-validation */ "./resources/js/src/@core/comp-functions/forms/form-validation.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _useTaskHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useTaskHandler */ "./resources/js/src/views/apps/todo/useTaskHandler.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // BSV
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSidebar"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInvalidFeedback"],
    // 3rd party packages
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_9__["quillEditor"],
    // Form Validation
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationObserver"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  model: {
    prop: 'isTaskHandlerSidebarActive',
    event: 'update:is-task-handler-sidebar-active'
  },
  props: {
    isTaskHandlerSidebarActive: {
      type: Boolean,
      required: true
    },
    task: {
      type: Object,
      required: true
    },
    clearTaskData: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      required: _validations__WEBPACK_IMPORTED_MODULE_5__["required"],
      email: _validations__WEBPACK_IMPORTED_MODULE_5__["email"],
      url: _validations__WEBPACK_IMPORTED_MODULE_5__["url"]
    };
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var _useTaskHandler = Object(_useTaskHandler__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_8__["toRefs"])(props), emit),
        taskLocal = _useTaskHandler.taskLocal,
        resetTaskLocal = _useTaskHandler.resetTaskLocal,
        assigneeOptions = _useTaskHandler.assigneeOptions,
        onSubmit = _useTaskHandler.onSubmit,
        tagOptions = _useTaskHandler.tagOptions,
        resolveAvatarVariant = _useTaskHandler.resolveAvatarVariant;

    var _formValidation = Object(_core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_7__["default"])(resetTaskLocal, props.clearTaskData),
        refFormObserver = _formValidation.refFormObserver,
        getValidationState = _formValidation.getValidationState,
        resetForm = _formValidation.resetForm,
        clearForm = _formValidation.clearForm;

    var editorOption = {
      modules: {
        toolbar: '#quill-toolbar'
      },
      placeholder: 'Write your description'
    };
    return {
      // Add New
      taskLocal: taskLocal,
      onSubmit: onSubmit,
      assigneeOptions: assigneeOptions,
      tagOptions: tagOptions,
      // Form Validation
      resetForm: resetForm,
      clearForm: clearForm,
      refFormObserver: refFormObserver,
      getValidationState: getValidationState,
      // UI
      editorOption: editorOption,
      resolveAvatarVariant: resolveAvatarVariant,
      // Filter/Formatter
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_6__["avatarText"]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".draggable-task-handle[data-v-1764b1bc] {\n  position: absolute;\n  top: 50%;\n  visibility: hidden;\n}[dir] .draggable-task-handle[data-v-1764b1bc] {\n  transform: translateY(-50%);\n  cursor: move;\n}[dir=ltr] .draggable-task-handle[data-v-1764b1bc] {\n  left: 8px;\n}[dir=rtl] .draggable-task-handle[data-v-1764b1bc] {\n  right: 8px;\n}\n.todo-task-list .todo-item:hover .draggable-task-handle[data-v-1764b1bc] {\n  visibility: visible;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .todo-application .content-area-wrapper {\n  border: 1px solid #ebe9f1;\n  border-radius: 0.428rem;\n}\n.todo-application .content-area-wrapper .sidebar .todo-sidebar {\n  width: 260px;\n  height: inherit;\n  display: flex;\n  transition: all 0.3s ease, background 0s;\n}\n[dir] .todo-application .content-area-wrapper .sidebar .todo-sidebar {\n  background-color: #fff;\n}\n[dir=ltr] .todo-application .content-area-wrapper .sidebar .todo-sidebar {\n  border-top-left-radius: 0.428rem;\n  border-bottom-left-radius: 0.428rem;\n}\n[dir=rtl] .todo-application .content-area-wrapper .sidebar .todo-sidebar {\n  border-top-right-radius: 0.428rem;\n  border-bottom-right-radius: 0.428rem;\n}\n.todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu {\n  width: 100%;\n  z-index: 3;\n}\n[dir] .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .add-task {\n  padding: 1.5rem;\n}\n.todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .sidebar-menu-list {\n  position: relative;\n  height: calc(100% - 80px);\n}\n.todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item {\n  font-weight: 500;\n  letter-spacing: 0.4px;\n}\n[dir] .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item {\n  padding: 0.58rem 1.5rem;\n  border: 0;\n  border-radius: 0;\n}\n[dir=ltr] .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item {\n  border-left: 2px solid transparent;\n}\n[dir=rtl] .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item {\n  border-right: 2px solid transparent;\n}\n[dir] .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item + .list-group-item.active {\n  margin-top: 0;\n}\n.todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item:hover, .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item:focus, .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item.active {\n  color: #7367f0;\n}\n[dir] .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item:hover, [dir] .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item:focus, [dir] .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item.active {\n  background: transparent;\n}\n[dir] .todo-application .content-area-wrapper .sidebar .todo-sidebar .todo-app-menu .list-group .list-group-item.active {\n  border-color: #7367f0;\n}\n[dir] .todo-application .content-area-wrapper .ql-editor {\n  padding-bottom: 0;\n}\n.todo-application .content-area-wrapper .content-right {\n  width: calc(100% - 260px);\n}\n[dir=ltr] .todo-application .content-area-wrapper .content-right {\n  border-left: 1px solid #ebe9f1;\n}\n[dir=rtl] .todo-application .content-area-wrapper .content-right {\n  border-right: 1px solid #ebe9f1;\n}\n.todo-application .content-area-wrapper .content-right .todo-app-list {\n  height: inherit;\n}\n[dir] .todo-application .content-area-wrapper .content-right .app-fixed-search {\n  padding: 0.35rem 0.5rem;\n  border-bottom: 1px solid #ebe9f1;\n  background-color: #fff;\n}\n[dir=ltr] .todo-application .content-area-wrapper .content-right .app-fixed-search {\n  border-top-right-radius: 0.357rem;\n}\n[dir=rtl] .todo-application .content-area-wrapper .content-right .app-fixed-search {\n  border-top-left-radius: 0.357rem;\n}\n[dir] .todo-application .content-area-wrapper .content-right .app-fixed-search .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .todo-application .content-area-wrapper .content-right .app-fixed-search input, [dir] .todo-application .content-area-wrapper .content-right .app-fixed-search .input-group-text {\n  border: 0;\n  background-color: transparent;\n}\n[dir=ltr] .todo-application .content-area-wrapper .content-right .todo-title {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n[dir=rtl] .todo-application .content-area-wrapper .content-right .todo-title {\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n}\n.todo-application .content-area-wrapper .content-right .completed .todo-title {\n  color: #b9b9c3;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper {\n  position: relative;\n  height: calc(100% - 3.56rem);\n}\n[dir] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper {\n  background-color: #fff;\n  border-radius: 0;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list {\n  list-style: none;\n}\n[dir] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list {\n  padding: 0;\n  margin: 0;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li {\n  transition: all 0.2s, border-color 0s;\n  position: relative;\n}\n[dir] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li {\n  cursor: pointer;\n  padding: 0.893rem 2rem;\n}\n[dir] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li:not(:first-child) {\n  border-top: 1px solid #ebe9f1;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li:hover {\n  transition: all 0.2s;\n}\n[dir] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 3px 10px 0 #ebe9f1;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .todo-title-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .todo-title-area,\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .title-wrapper {\n  display: flex;\n  align-items: center;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .todo-item-action {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .todo-item-action > small {\n  margin-left: auto;\n}\n[dir=rtl] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .todo-item-action > small {\n  margin-right: auto;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .todo-item-action a {\n  font-size: 1.2rem;\n  line-height: 1.5;\n}\n[dir] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .todo-item-action a {\n  cursor: pointer;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .badge-wrapper {\n  display: flex;\n}\n[dir=ltr] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .badge-wrapper .badge:not(:last-child) {\n  margin-right: 0.5rem;\n}\n[dir=rtl] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .todo-task-list li .badge-wrapper .badge:not(:last-child) {\n  margin-left: 0.5rem;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .no-results {\n  display: none;\n}\n[dir] .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .no-results {\n  padding: 1.5rem;\n  text-align: center;\n}\n.todo-application .content-area-wrapper .content-right .todo-task-list-wrapper .no-results.show {\n  display: block;\n}\n.todo-application .todo-item-action .close {\n  position: unset !important;\n  transition: none !important;\n}\n[dir] .todo-application .todo-item-action .close {\n  background: transparent !important;\n  box-shadow: none !important;\n  transform: none !important;\n}\n.todo-application .todo-item .drag-icon {\n  visibility: hidden;\n  position: absolute;\n  width: 1.75rem;\n  height: 4rem;\n}\n[dir] .todo-application .todo-item .drag-icon {\n  cursor: move;\n  padding: 0 5px;\n}\n[dir=ltr] .todo-application .todo-item .drag-icon {\n  left: 0.2rem;\n}\n[dir=rtl] .todo-application .todo-item .drag-icon {\n  right: 0.2rem;\n}\n.todo-application .todo-item:hover .drag-icon {\n  visibility: visible;\n}\n.todo-application form .error:not(li):not(input) {\n  color: #ea5455;\n  font-size: 85%;\n}\n[dir] .todo-application form .error:not(li):not(input) {\n  margin-top: 0.25rem;\n}\n.gu-mirror {\n  list-style-type: none;\n  list-style: none;\n}\n[dir] .gu-mirror {\n  padding: 0.893rem 2rem;\n  background-color: #fff;\n  border-top: 1px solid #ebe9f1;\n  border-bottom: 1px solid #ebe9f1;\n  box-shadow: 0 0 10px 0 rgba(34, 41, 47, 0.25);\n}\n.gu-mirror .todo-title-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.gu-mirror .todo-title-area,\n.gu-mirror .title-wrapper {\n  display: flex;\n  align-items: center;\n}\n.gu-mirror .todo-item-action {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir=ltr] .gu-mirror .todo-title {\n  padding-left: 1rem;\n}\n[dir=rtl] .gu-mirror .todo-title {\n  padding-right: 1rem;\n}\n.gu-mirror.completed .todo-title {\n  color: #b9b9c3;\n}\n@-webkit-keyframes fadeIn {\n0% {\n    opacity: 0;\n    top: 100px;\n}\n75% {\n    opacity: 0.5;\n    top: 0px;\n}\n100% {\n    opacity: 1;\n}\n}\n@media (max-width: 991.98px) {\n.todo-application .content-area-wrapper .sidebar-left .todo-sidebar {\n    transition: all 0.3s ease-in-out;\n    position: absolute;\n    z-index: 5;\n}\n[dir=ltr] .todo-application .content-area-wrapper .sidebar-left .todo-sidebar {\n    transform: translateX(-110%);\n    left: 0;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n}\n[dir=rtl] .todo-application .content-area-wrapper .sidebar-left .todo-sidebar {\n    transform: translateX(110%);\n    right: 0;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n}\n.todo-application .content-area-wrapper .sidebar-left.show .todo-sidebar {\n    transition: all 0.3s ease;\n}\n[dir] .todo-application .content-area-wrapper .sidebar-left.show .todo-sidebar {\n    transform: translateX(0%);\n}\n.todo-application .content-area-wrapper .content-right {\n    width: 100%;\n}\n[dir=ltr] .todo-application .content-area-wrapper .content-right {\n    border-left: 0;\n}\n[dir=rtl] .todo-application .content-area-wrapper .content-right {\n    border-right: 0;\n}\n[dir=ltr] .todo-application .content-area-wrapper .content-right .app-fixed-search {\n    border-top-left-radius: 0.357rem;\n}\n[dir=rtl] .todo-application .content-area-wrapper .content-right .app-fixed-search {\n    border-top-right-radius: 0.357rem;\n}\n.todo-application .content-area-wrapper .todo-title-wrapper {\n    flex-direction: column;\n}\n[dir] .todo-application .content-area-wrapper .todo-title-wrapper .title-wrapper {\n    margin-bottom: 0.5rem;\n}\n.todo-application .content-area-wrapper .todo-title-wrapper .todo-title {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n}\n[dir=ltr] .todo-application .content-area-wrapper .todo-title-wrapper .badge-wrapper {\n    margin-right: auto !important;\n}\n[dir=rtl] .todo-application .content-area-wrapper .todo-title-wrapper .badge-wrapper {\n    margin-left: auto !important;\n}\n}\n@media (max-width: 349.98px) {\n.todo-application .content-area-wrapper .sidebar .todo-sidebar {\n    width: 230px;\n}\n}\n.horizontal-menu .todo-application .content-area-wrapper .content-right .todo-task-list-wrapper {\n  height: calc(100% - 3.6rem);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../../node_modules/css-loader!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/index.js!./node_modules/flatpickr/dist/flatpickr.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../node_modules/css-loader!quill/dist/quill.core.css */ "./node_modules/css-loader/index.js!./node_modules/quill/dist/quill.core.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../node_modules/css-loader!quill/dist/quill.snow.css */ "./node_modules/css-loader/index.js!./node_modules/quill/dist/quill.snow.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../node_modules/css-loader!quill/dist/quill.bubble.css */ "./node_modules/css-loader/index.js!./node_modules/quill/dist/quill.bubble.css"), "");

// module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n}\n[dir] .vs__dropdown-option:hover {\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n}\n[dir] .vs__dropdown-option--disabled:hover {\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}\n\n/* Set dropdown font-families */\n.ql-toolbar .ql-font span[data-label=\"Sailec Light\"]::before {\n  font-family: \"Sailec Light\";\n}\n.ql-toolbar .ql-font span[data-label=\"Sofia Pro\"]::before {\n  font-family: \"Sofia\";\n}\n.ql-toolbar .ql-font span[data-label=\"Slabo 27px\"]::before {\n  font-family: \"Slabo 27px\";\n}\n.ql-toolbar .ql-font span[data-label=\"Roboto Slab\"]::before {\n  font-family: \"Roboto Slab\";\n}\n.ql-toolbar .ql-font span[data-label=Inconsolata]::before {\n  font-family: \"Inconsolata\";\n}\n.ql-toolbar .ql-font span[data-label=\"Ubuntu Mono\"]::before {\n  font-family: \"Ubuntu Mono\";\n}\n\n/* Set content font-families */\n.ql-font-sofia {\n  font-family: \"Sofia\";\n}\n.ql-font-slabo {\n  font-family: \"Slabo 27px\";\n}\n.ql-font-roboto {\n  font-family: \"Roboto Slab\";\n}\n.ql-font-inconsolata {\n  font-family: \"Inconsolata\";\n}\n.ql-font-ubuntu {\n  font-family: \"Ubuntu Mono\";\n}\n[dir] .ql-toolbar {\n  border-color: #d8d6de !important;\n}\n.ql-toolbar .ql-formats:focus,\n.ql-toolbar .ql-formats *:focus {\n  outline: 0;\n}\n.ql-toolbar .ql-formats .ql-picker-label:hover, .ql-toolbar .ql-formats .ql-picker-label:focus,\n.ql-toolbar .ql-formats button:hover,\n.ql-toolbar .ql-formats button:focus {\n  color: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-label:hover .ql-stroke, .ql-toolbar .ql-formats .ql-picker-label:focus .ql-stroke,\n.ql-toolbar .ql-formats button:hover .ql-stroke,\n.ql-toolbar .ql-formats button:focus .ql-stroke {\n  stroke: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-label:hover .ql-fill, .ql-toolbar .ql-formats .ql-picker-label:focus .ql-fill,\n.ql-toolbar .ql-formats button:hover .ql-fill,\n.ql-toolbar .ql-formats button:focus .ql-fill {\n  fill: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-label.ql-active,\n.ql-toolbar .ql-formats button.ql-active {\n  color: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-item.ql-selected {\n  color: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-options .ql-picker-item:hover {\n  color: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-options .ql-active {\n  color: #7367f0 !important;\n}\n.ql-bubble .ql-picker {\n  color: #fff !important;\n}\n.ql-bubble .ql-stroke {\n  stroke: #fff !important;\n}\n.ql-bubble .ql-fill {\n  fill: #fff !important;\n}\n.ql-container {\n  font-family: \"Montserrat\", Helvetica, Arial, serif;\n}\n[dir] .ql-container {\n  border-color: #d8d6de !important;\n}\n.ql-editor a {\n  color: #7367f0;\n}\n.ql-picker {\n  color: #5e5873 !important;\n}\n.ql-stroke {\n  stroke: #5e5873 !important;\n}\n.ql-active .ql-stroke {\n  stroke: #7367f0 !important;\n}\n.ql-active .ql-fill {\n  fill: #7367f0 !important;\n}\n.ql-fill {\n  fill: #5e5873 !important;\n}\n[dir=ltr] .ql-toolbar, [dir=ltr] .ql-container {\n  border-top-right-radius: 0.357rem;\n  border-top-left-radius: 0.357rem;\n}\n[dir=rtl] .ql-toolbar, [dir=rtl] .ql-container {\n  border-top-left-radius: 0.357rem;\n  border-top-right-radius: 0.357rem;\n}\n[dir=ltr] .ql-toolbar + .ql-container, [dir=ltr] .ql-container + .ql-toolbar {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n  border-top-right-radius: unset;\n  border-top-left-radius: unset;\n}\n[dir=rtl] .ql-toolbar + .ql-container, [dir=rtl] .ql-container + .ql-toolbar {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}\n[dir] .dark-layout .quill-toolbar, [dir] .dark-layout .ql-toolbar {\n  background-color: #283046;\n  border-color: #3b4253 !important;\n}\n.dark-layout .quill-toolbar .ql-picker,\n.dark-layout .ql-toolbar .ql-picker {\n  color: #fff !important;\n}\n.dark-layout .quill-toolbar .ql-stroke,\n.dark-layout .ql-toolbar .ql-stroke {\n  stroke: #fff !important;\n}\n.dark-layout .quill-toolbar .ql-fill,\n.dark-layout .ql-toolbar .ql-fill {\n  fill: #fff !important;\n}\n[dir] .dark-layout .quill-toolbar .ql-picker-options, [dir] .dark-layout .quill-toolbar .ql-picker-label, [dir] .dark-layout .ql-toolbar .ql-picker-options, [dir] .dark-layout .ql-toolbar .ql-picker-label {\n  background-color: #283046;\n}\n.dark-layout .quill-toolbar .ql-picker-options .ql-active,\n.dark-layout .quill-toolbar .ql-picker-label .ql-active,\n.dark-layout .ql-toolbar .ql-picker-options .ql-active,\n.dark-layout .ql-toolbar .ql-picker-label .ql-active {\n  color: #7367f0 !important;\n}\n.dark-layout .ql-active .ql-stroke {\n  stroke: #7367f0 !important;\n}\n.dark-layout .ql-active .ql-fill {\n  fill: #7367f0 !important;\n}\n[dir] .dark-layout .ql-bubble .ql-toolbar {\n  background: #3b4253;\n  border-radius: 2rem;\n}\n[dir] .dark-layout .ql-container {\n  border-color: #3b4253 !important;\n  background-color: #283046;\n}\n[dir] .dark-layout .ql-editor .ql-syntax {\n  background-color: #161d31;\n}\n.dark-layout .ql-editor.ql-blank:before {\n  color: #b4b7bd;\n}\n[dir=ltr] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) i, [dir=ltr] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  left: auto !important;\n  right: 0;\n}\n[dir=rtl] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) i, [dir=rtl] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  right: auto !important;\n  left: 0;\n}\n.quill-editor .ql-toolbar a,\n.quill-editor .ql-toolbar button:hover,\n.quill-editor .ql-toolbar .ql-picker:hover,\n.quill-editor .ql-editor a,\n.quill-editor .ql-editor button:hover,\n.quill-editor .ql-editor .ql-picker:hover {\n  color: #7367f0;\n}\n.quill-editor .ql-toolbar a .ql-fill,\n.quill-editor .ql-toolbar button:hover .ql-fill,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-fill,\n.quill-editor .ql-editor a .ql-fill,\n.quill-editor .ql-editor button:hover .ql-fill,\n.quill-editor .ql-editor .ql-picker:hover .ql-fill {\n  fill: #7367f0;\n}\n.quill-editor .ql-toolbar a .ql-stroke,\n.quill-editor .ql-toolbar button:hover .ql-stroke,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-stroke,\n.quill-editor .ql-editor a .ql-stroke,\n.quill-editor .ql-editor button:hover .ql-stroke,\n.quill-editor .ql-editor .ql-picker:hover .ql-stroke {\n  stroke: #7367f0;\n}\n.quill-editor .ql-toolbar a .ql-picker-label:hover,\n.quill-editor .ql-toolbar button:hover .ql-picker-label:hover,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-picker-label:hover,\n.quill-editor .ql-editor a .ql-picker-label:hover,\n.quill-editor .ql-editor button:hover .ql-picker-label:hover,\n.quill-editor .ql-editor .ql-picker:hover .ql-picker-label:hover {\n  color: #7367f0;\n}\n.quill-editor .ql-toolbar a .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-toolbar button:hover .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-editor a .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-editor button:hover .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-editor .ql-picker:hover .ql-picker-label:hover .ql-stroke {\n  stroke: #7367f0;\n}\n[dir=ltr] .quill-editor .ql-toolbar, [dir=ltr] .quill-editor .ql-container {\n  border-top-right-radius: 0.357rem;\n  border-top-left-radius: 0.357rem;\n}\n[dir=rtl] .quill-editor .ql-toolbar, [dir=rtl] .quill-editor .ql-container {\n  border-top-left-radius: 0.357rem;\n  border-top-right-radius: 0.357rem;\n}\n[dir=ltr] .quill-editor .ql-toolbar + .ql-container, [dir=ltr] .ql-container + .quill-editor .ql-toolbar {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n  border-top-right-radius: unset;\n  border-top-left-radius: unset;\n}\n[dir=rtl] .quill-editor .ql-toolbar + .ql-container, [dir=rtl] .ql-container + .quill-editor .ql-toolbar {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir=ltr] .assignee-selector[data-v-4a2592f3]  .vs__dropdown-toggle {\n  padding-left: 0;\n}[dir=rtl] .assignee-selector[data-v-4a2592f3]  .vs__dropdown-toggle {\n  padding-right: 0;\n}\n[dir] #quil-content[data-v-4a2592f3]  > .ql-container {\n  border-bottom: 0;\n}\n[dir=ltr] #quil-content[data-v-4a2592f3]  + #quill-toolbar {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] #quil-content[data-v-4a2592f3]  + #quill-toolbar {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc&scoped=true& ***!
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
    "div",
    { staticStyle: { height: "inherit" } },
    [
      _c("div", {
        staticClass: "body-content-overlay",
        class: { show: _vm.mqShallShowLeftSidebar },
        on: {
          click: function ($event) {
            _vm.mqShallShowLeftSidebar = false
          },
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "todo-app-list" },
        [
          _c(
            "div",
            { staticClass: "app-fixed-search d-flex align-items-center" },
            [
              _c(
                "div",
                { staticClass: "sidebar-toggle d-block d-lg-none ml-1" },
                [
                  _c("feather-icon", {
                    staticClass: "cursor-pointer",
                    attrs: { icon: "MenuIcon", size: "21" },
                    on: {
                      click: function ($event) {
                        _vm.mqShallShowLeftSidebar = true
                      },
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-content-center justify-content-between w-100",
                },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "input-group-merge" },
                    [
                      _c(
                        "b-input-group-prepend",
                        { attrs: { "is-text": "" } },
                        [
                          _c("feather-icon", {
                            staticClass: "text-muted",
                            attrs: { icon: "SearchIcon" },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-input", {
                        attrs: {
                          value: _vm.searchQuery,
                          placeholder: "Search task",
                        },
                        on: { input: _vm.updateRouteQuery },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "dropdown" },
                [
                  _c(
                    "b-dropdown",
                    {
                      attrs: {
                        variant: "link",
                        "no-caret": "",
                        "toggle-class": "p-0 mr-1",
                        right: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "button-content",
                          fn: function () {
                            return [
                              _c("feather-icon", {
                                staticClass: "align-middle text-body",
                                attrs: { icon: "MoreVerticalIcon", size: "16" },
                              }),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { on: { click: _vm.resetSortAndNavigate } },
                        [_vm._v("\n            Reset Sort\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          attrs: {
                            to: {
                              name: _vm.$route.name,
                              query: Object.assign({}, _vm.$route.query, {
                                sort: "title-asc",
                              }),
                            },
                          },
                        },
                        [_vm._v("\n            Sort A-Z\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          attrs: {
                            to: {
                              name: _vm.$route.name,
                              query: Object.assign({}, _vm.$route.query, {
                                sort: "title-desc",
                              }),
                            },
                          },
                        },
                        [_vm._v("\n            Sort Z-A\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          attrs: {
                            to: {
                              name: _vm.$route.name,
                              query: Object.assign({}, _vm.$route.query, {
                                sort: "assignee",
                              }),
                            },
                          },
                        },
                        [_vm._v("\n            Sort Assignee\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          attrs: {
                            to: {
                              name: _vm.$route.name,
                              query: Object.assign({}, _vm.$route.query, {
                                sort: "due-date",
                              }),
                            },
                          },
                        },
                        [_vm._v("\n            Sort Due Date\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "vue-perfect-scrollbar",
            {
              staticClass: "todo-task-list-wrapper list-group scroll-area",
              attrs: { settings: _vm.perfectScrollbarSettings },
            },
            [
              _c(
                "draggable",
                {
                  staticClass: "todo-task-list media-list",
                  attrs: { handle: ".draggable-task-handle", tag: "ul" },
                  model: {
                    value: _vm.tasks,
                    callback: function ($$v) {
                      _vm.tasks = $$v
                    },
                    expression: "tasks",
                  },
                },
                _vm._l(_vm.tasks, function (task) {
                  return _c(
                    "li",
                    {
                      key: task.id,
                      staticClass: "todo-item",
                      class: { completed: task.isCompleted },
                      on: {
                        click: function ($event) {
                          return _vm.handleTaskClick(task)
                        },
                      },
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "draggable-task-handle d-inline",
                        attrs: { icon: "MoreVerticalIcon" },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "todo-title-wrapper" }, [
                        _c("div", { staticClass: "todo-title-area" }, [
                          _c(
                            "div",
                            { staticClass: "title-wrapper" },
                            [
                              _c("b-form-checkbox", {
                                attrs: { checked: task.isCompleted },
                                on: {
                                  change: function ($event) {
                                    return _vm.updateTaskIsCompleted(task)
                                  },
                                },
                                nativeOn: {
                                  click: function ($event) {
                                    $event.stopPropagation()
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "todo-title" }, [
                                _vm._v(_vm._s(task.title)),
                              ]),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "todo-item-action" },
                          [
                            _c(
                              "div",
                              { staticClass: "badge-wrapper mr-1" },
                              _vm._l(task.tags, function (tag) {
                                return _c(
                                  "b-badge",
                                  {
                                    key: tag,
                                    staticClass: "text-capitalize",
                                    attrs: {
                                      pill: "",
                                      variant:
                                        "light-" + _vm.resolveTagVariant(tag),
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(tag) +
                                        "\n                "
                                    ),
                                  ]
                                )
                              }),
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "small",
                              { staticClass: "text-nowrap text-muted mr-1" },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.formatDate(task.dueDate, {
                                      month: "short",
                                      day: "numeric",
                                    })
                                  )
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            task.assignee
                              ? _c("b-avatar", {
                                  attrs: {
                                    size: "32",
                                    src: task.assignee.avatar,
                                    variant:
                                      "light-" +
                                      _vm.resolveAvatarVariant(task.tags),
                                    text: _vm.avatarText(
                                      task.assignee.fullName
                                    ),
                                  },
                                })
                              : _c(
                                  "b-avatar",
                                  {
                                    attrs: {
                                      size: "32",
                                      variant: "light-secondary",
                                    },
                                  },
                                  [
                                    _c("feather-icon", {
                                      attrs: { icon: "UserIcon", size: "16" },
                                    }),
                                  ],
                                  1
                                ),
                          ],
                          1
                        ),
                      ]),
                    ],
                    1
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "no-results",
                  class: { show: !_vm.tasks.length },
                },
                [_c("h5", [_vm._v("No Items Found")])]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("todo-task-handler-sidebar", {
        attrs: { task: _vm.task, "clear-task-data": _vm.clearTaskData },
        on: {
          "remove-task": _vm.removeTask,
          "add-task": _vm.addTask,
          "update-task": _vm.updateTask,
        },
        model: {
          value: _vm.isTaskHandlerSidebarActive,
          callback: function ($$v) {
            _vm.isTaskHandlerSidebarActive = $$v
          },
          expression: "isTaskHandlerSidebarActive",
        },
      }),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "content-renderer-sidebar-left" } },
        [
          _c("todo-left-sidebar", {
            class: { show: _vm.mqShallShowLeftSidebar },
            attrs: {
              "task-tags": _vm.taskTags,
              "is-task-handler-sidebar-active": _vm.isTaskHandlerSidebarActive,
            },
            on: {
              "update:isTaskHandlerSidebarActive": function ($event) {
                _vm.isTaskHandlerSidebarActive = $event
              },
              "update:is-task-handler-sidebar-active": function ($event) {
                _vm.isTaskHandlerSidebarActive = $event
              },
              "close-left-sidebar": function ($event) {
                _vm.mqShallShowLeftSidebar = false
              },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=template&id=2f0650ae&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=template&id=2f0650ae& ***!
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
  return _c("div", { staticClass: "sidebar-left" }, [
    _c("div", { staticClass: "sidebar" }, [
      _c("div", { staticClass: "sidebar-content todo-sidebar" }, [
        _c(
          "div",
          { staticClass: "todo-app-menu" },
          [
            _c(
              "div",
              { staticClass: "add-task" },
              [
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
                    attrs: { variant: "primary", block: "" },
                    on: {
                      click: function ($event) {
                        _vm.$emit("update:is-task-handler-sidebar-active", true)
                        _vm.$emit("close-left-sidebar")
                      },
                    },
                  },
                  [_vm._v("\n            Add Task\n          ")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vue-perfect-scrollbar",
              {
                staticClass: "sidebar-menu-list scroll-area",
                attrs: { settings: _vm.perfectScrollbarSettings },
              },
              [
                _c(
                  "b-list-group",
                  { staticClass: "list-group-filters" },
                  _vm._l(_vm.taskFilters, function (filter) {
                    return _c(
                      "b-list-group-item",
                      {
                        key: filter.title + _vm.$route.path,
                        attrs: {
                          to: filter.route,
                          active: _vm.isDynamicRouteActive(filter.route),
                        },
                        on: {
                          click: function ($event) {
                            return _vm.$emit("close-left-sidebar")
                          },
                        },
                      },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-75",
                          attrs: { icon: filter.icon, size: "18" },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "align-text-bottom line-height-1" },
                          [_vm._v(_vm._s(filter.title))]
                        ),
                      ],
                      1
                    )
                  }),
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-3 px-2 d-flex justify-content-between" },
                  [
                    _c("h6", { staticClass: "section-label mb-1" }, [
                      _vm._v("\n              Tags\n            "),
                    ]),
                    _vm._v(" "),
                    _c("feather-icon", { attrs: { icon: "PlusIcon" } }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-list-group",
                  { staticClass: "list-group-labels" },
                  _vm._l(_vm.taskTags, function (tag) {
                    return _c(
                      "b-list-group-item",
                      {
                        key: tag.title + _vm.$route.path,
                        attrs: {
                          to: tag.route,
                          active: _vm.isDynamicRouteActive(tag.route),
                        },
                        on: {
                          click: function ($event) {
                            return _vm.$emit("close-left-sidebar")
                          },
                        },
                      },
                      [
                        _c("span", {
                          staticClass: "bullet bullet-sm mr-1",
                          class: "bullet-" + tag.color,
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(tag.title))]),
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
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=template&id=4a2592f3&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=template&id=4a2592f3&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c("b-sidebar", {
        attrs: {
          id: "sidebar-task-handler",
          "sidebar-class": "sidebar-lg",
          visible: _vm.isTaskHandlerSidebarActive,
          "bg-variant": "white",
          shadow: "",
          backdrop: "",
          "no-header": "",
          right: "",
        },
        on: {
          change: function (val) {
            return _vm.$emit("update:is-task-handler-sidebar-active", val)
          },
          hidden: _vm.clearForm,
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var hide = ref.hide
              return [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1",
                  },
                  [
                    _vm.taskLocal.id
                      ? _c(
                          "b-button",
                          {
                            attrs: {
                              size: "sm",
                              variant: _vm.taskLocal.isCompleted
                                ? "outline-success"
                                : "outline-secondary",
                            },
                            on: {
                              click: function ($event) {
                                _vm.taskLocal.isCompleted =
                                  !_vm.taskLocal.isCompleted
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(
                                  _vm.taskLocal.isCompleted
                                    ? "Completed"
                                    : "Mark Complete"
                                ) +
                                "\n        "
                            ),
                          ]
                        )
                      : _c("h5", { staticClass: "mb-0" }, [
                          _vm._v("\n          Add Task\n        "),
                        ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("feather-icon", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.taskLocal.id,
                              expression: "taskLocal.id",
                            },
                          ],
                          staticClass: "cursor-pointer",
                          attrs: { icon: "TrashIcon" },
                          on: {
                            click: function ($event) {
                              _vm.$emit("remove-task")
                              hide()
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "ml-1 cursor-pointer",
                          class: { "text-warning": _vm.taskLocal.isImportant },
                          attrs: { icon: "StarIcon", size: "16" },
                          on: {
                            click: function ($event) {
                              _vm.taskLocal.isImportant =
                                !_vm.taskLocal.isImportant
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "ml-1 cursor-pointer",
                          attrs: { icon: "XIcon", size: "16" },
                          on: { click: hide },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("validation-observer", {
                  ref: "refFormObserver",
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function (ref) {
                          var handleSubmit = ref.handleSubmit
                          return [
                            _c(
                              "b-form",
                              {
                                staticClass: "p-2",
                                on: {
                                  submit: function ($event) {
                                    $event.preventDefault()
                                    return handleSubmit(_vm.onSubmit)
                                  },
                                  reset: function ($event) {
                                    $event.preventDefault()
                                    return _vm.resetForm.apply(null, arguments)
                                  },
                                },
                              },
                              [
                                _c("validation-provider", {
                                  attrs: { name: "Title", rules: "required" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: "Title",
                                                  "label-for": "task-title",
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    id: "task-title",
                                                    autofocus: "",
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    trim: "",
                                                    placeholder: "Task Title",
                                                  },
                                                  model: {
                                                    value: _vm.taskLocal.title,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.taskLocal,
                                                        "title",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "taskLocal.title",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                " +
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: "Assignee",
                                      "label-for": "assignee",
                                    },
                                  },
                                  [
                                    _c("v-select", {
                                      staticClass: "assignee-selector",
                                      attrs: {
                                        dir: _vm.$store.state.appConfig.isRTL
                                          ? "rtl"
                                          : "ltr",
                                        options: _vm.assigneeOptions,
                                        label: "fullName",
                                        "input-id": "assignee",
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "option",
                                            fn: function (ref) {
                                              var avatar = ref.avatar
                                              var fullName = ref.fullName
                                              return [
                                                _c("b-avatar", {
                                                  attrs: {
                                                    size: "26",
                                                    src: avatar,
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "ml-50 d-inline-block align-middle",
                                                  },
                                                  [
                                                    _vm._v(
                                                      " " + _vm._s(fullName)
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            },
                                          },
                                          {
                                            key: "selected-option",
                                            fn: function (ref) {
                                              var avatar = ref.avatar
                                              var fullName = ref.fullName
                                              return [
                                                _c("b-avatar", {
                                                  attrs: {
                                                    size: "26",
                                                    src: avatar,
                                                    variant:
                                                      "light-" +
                                                      _vm.resolveAvatarVariant(
                                                        _vm.taskLocal.tags
                                                      ),
                                                    text: _vm.avatarText(
                                                      fullName
                                                    ),
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "ml-50 d-inline-block align-middle",
                                                  },
                                                  [
                                                    _vm._v(
                                                      " " + _vm._s(fullName)
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            },
                                          },
                                        ],
                                        null,
                                        true
                                      ),
                                      model: {
                                        value: _vm.taskLocal.assignee,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.taskLocal,
                                            "assignee",
                                            $$v
                                          )
                                        },
                                        expression: "taskLocal.assignee",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("validation-provider", {
                                  attrs: {
                                    name: "Due Date",
                                    rules: "required",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: "Due Date",
                                                  "label-for": "due-date",
                                                },
                                              },
                                              [
                                                _c("flat-pickr", {
                                                  staticClass: "form-control",
                                                  model: {
                                                    value:
                                                      _vm.taskLocal.dueDate,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.taskLocal,
                                                        "dueDate",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "taskLocal.dueDate",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      state:
                                                        _vm.getValidationState(
                                                          validationContext
                                                        ),
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                " +
                                                        _vm._s(
                                                          validationContext
                                                            .errors[0]
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: { label: "Tag", "label-for": "tag" },
                                  },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        dir: _vm.$store.state.appConfig.isRTL
                                          ? "rtl"
                                          : "ltr",
                                        multiple: "",
                                        "close-on-select": false,
                                        options: _vm.tagOptions,
                                        reduce: function (option) {
                                          return option.value
                                        },
                                        "input-id": "tags",
                                      },
                                      model: {
                                        value: _vm.taskLocal.tags,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.taskLocal, "tags", $$v)
                                        },
                                        expression: "taskLocal.tags",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: "Description",
                                      "label-for": "task-description",
                                    },
                                  },
                                  [
                                    _c("quill-editor", {
                                      staticClass: "border-bottom-0",
                                      attrs: {
                                        id: "quil-content",
                                        options: _vm.editorOption,
                                      },
                                      model: {
                                        value: _vm.taskLocal.description,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.taskLocal,
                                            "description",
                                            $$v
                                          )
                                        },
                                        expression: "taskLocal.description",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-end border-top-0",
                                        attrs: { id: "quill-toolbar" },
                                      },
                                      [
                                        _c("button", {
                                          staticClass: "ql-bold",
                                        }),
                                        _vm._v(" "),
                                        _c("button", {
                                          staticClass: "ql-italic",
                                        }),
                                        _vm._v(" "),
                                        _c("button", {
                                          staticClass: "ql-underline",
                                        }),
                                        _vm._v(" "),
                                        _c("button", {
                                          staticClass: "ql-align",
                                        }),
                                        _vm._v(" "),
                                        _c("button", {
                                          staticClass: "ql-link",
                                        }),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "d-flex mt-2" },
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        directives: [
                                          {
                                            name: "ripple",
                                            rawName: "v-ripple.400",
                                            value: "rgba(255, 255, 255, 0.15)",
                                            expression:
                                              "'rgba(255, 255, 255, 0.15)'",
                                            modifiers: { 400: true },
                                          },
                                        ],
                                        staticClass: "mr-2",
                                        attrs: {
                                          variant: "primary",
                                          type: "submit",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n              " +
                                            _vm._s(
                                              _vm.taskLocal.id
                                                ? "Update"
                                                : "Add "
                                            ) +
                                            "\n            "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        directives: [
                                          {
                                            name: "ripple",
                                            rawName: "v-ripple.400",
                                            value: "rgba(186, 191, 199, 0.15)",
                                            expression:
                                              "'rgba(186, 191, 199, 0.15)'",
                                            modifiers: { 400: true },
                                          },
                                        ],
                                        attrs: {
                                          type: "reset",
                                          variant: "outline-secondary",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n              Reset\n            "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]
                        },
                      },
                    ],
                    null,
                    true
                  ),
                }),
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

/***/ "./resources/js/src/@core/comp-functions/forms/form-validation.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/@core/comp-functions/forms/form-validation.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formValidation; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
 // ===========================================================
// ! This is coupled with "veeValidate" plugin
// ===========================================================

function formValidation(resetFormData) {
  var clearFormData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  // ------------------------------------------------
  // refFormObserver
  // ! This is for veeValidate Observer
  // * Used for veeValidate form observer
  // ------------------------------------------------
  var refFormObserver = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null); // ------------------------------------------------
  // resetObserver
  // ! This function is coupled with veeValidate
  // * It resets form observer
  // ------------------------------------------------

  var resetObserver = function resetObserver() {
    refFormObserver.value.reset();
  }; // ------------------------------------------------
  // getValidationState
  // ! This function is coupled with veeValidate
  // * It returns true/false based on validation
  // ------------------------------------------------
  // eslint-disable-next-line object-curly-newline


  var getValidationState = function getValidationState(_ref) {
    var dirty = _ref.dirty,
        validated = _ref.validated,
        fieldRequired = _ref.required,
        changed = _ref.changed,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
    var result = dirty || validated ? valid : null;
    return !fieldRequired && !changed ? null : result;
  }; // ------------------------------------------------
  // resetForm
  // ! This function is coupled with veeValidate
  // * This uses resetFormData arg to reset form data
  // ------------------------------------------------


  var resetForm = function resetForm() {
    resetFormData();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
      resetObserver();
    });
  }; // ------------------------------------------------
  // clearForm
  // ! This function is coupled with veeValidate
  // * This uses clearFormData arg to reset form data
  // ------------------------------------------------


  var clearForm = function clearForm() {
    clearFormData();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
      resetObserver();
    });
  };

  return {
    refFormObserver: refFormObserver,
    resetObserver: resetObserver,
    getValidationState: getValidationState,
    resetForm: resetForm,
    clearForm: clearForm
  };
}

/***/ }),

/***/ "./resources/js/src/@core/comp-functions/ui/app.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/@core/comp-functions/ui/app.js ***!
  \*********************************************************/
/*! exports provided: useResponsiveAppLeftSidebarVisibility, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResponsiveAppLeftSidebarVisibility", function() { return useResponsiveAppLeftSidebarVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");


var useResponsiveAppLeftSidebarVisibility = function useResponsiveAppLeftSidebarVisibility() {
  var mqShallShowLeftSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false); // Close Active Sidebars and other stuff when going in large device

  var currentBreakPoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['app/currentBreakPoint'];
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(currentBreakPoint, function (val, oldVal) {
    // Reset chats & contacts left sidebar
    if (oldVal === 'md' && val === 'lg') mqShallShowLeftSidebar.value = false;
  });
  return {
    mqShallShowLeftSidebar: mqShallShowLeftSidebar
  };
};
var _ = {};

/***/ }),

/***/ "./resources/js/src/@core/utils/filter.js":
/*!************************************************!*\
  !*** ./resources/js/src/@core/utils/filter.js ***!
  \************************************************/
/*! exports provided: kFormatter, title, avatarText, formatDate, formatDateToMonthShort, filterTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFormatter", function() { return kFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarText", function() { return avatarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToMonthShort", function() { return formatDateToMonthShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTags", function() { return filterTags; });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./resources/js/src/@core/utils/utils.js");














var kFormatter = function kFormatter(num) {
  return num > 999 ? "".concat((num / 1000).toFixed(1), "k") : num;
};
var title = function title(value) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  if (!value) return '';
  var str = value.toString();
  var arr = str.split(replacer);
  var capitalizedArray = [];
  arr.forEach(function (word) {
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalized);
  });
  return capitalizedArray.join(' ');
};
var avatarText = function avatarText(value) {
  if (!value) return '';
  var nameArray = value.split(' ');
  return nameArray.map(function (word) {
    return word.charAt(0).toUpperCase();
  }).join('');
};
/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

var formatDate = function formatDate(value) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};
/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */

var formatDateToMonthShort = function formatDateToMonthShort(value) {
  var toTimeForCurrentDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = new Date(value);
  var formatting = {
    month: 'short',
    day: 'numeric'
  };

  if (toTimeForCurrentDay && Object(_utils__WEBPACK_IMPORTED_MODULE_13__["isToday"])(date)) {
    formatting = {
      hour: 'numeric',
      minute: 'numeric'
    };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
}; // Strip all the tags from markup and return plain text

var filterTags = function filterTags(value) {
  return value.replace(/<\/?[^>]+(>|$)/g, '');
};

/***/ }),

/***/ "./resources/js/src/@core/utils/utils.js":
/*!***********************************************!*\
  !*** ./resources/js/src/@core/utils/utils.js ***!
  \***********************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var E_RealProjects_Laravel_Project_vue_laravel_purpletrac_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_RealProjects_Laravel_Project_vue_laravel_purpletrac_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



 // eslint-disable-next-line object-curly-newline


var isObject = function isObject(obj) {
  return Object(E_RealProjects_Laravel_Project_vue_laravel_purpletrac_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */

  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}; // ? Light and Dark variant is not included
// prettier-ignore


var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(route),
      resolvedRoute = _router$resolve.route;

  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_3__["default"].currentRoute.path;
}; // Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1

var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return Object(E_RealProjects_Laravel_Project_vue_laravel_purpletrac_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(E_RealProjects_Laravel_Project_vue_laravel_purpletrac_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }
//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })
//   return a
// }

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validations.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validations.js ***!
  \*****************************************************************/
/*! exports provided: required, email, min, confirmed, regex, between, alpha, integer, digits, alphaDash, alphaNum, length, positive, credit, password, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmed", function() { return confirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaDash", function() { return alphaDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNum", function() { return alphaNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positive", function() { return positive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credit", function() { return credit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json");
var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json", 1);
/* harmony import */ var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json");
var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json", 1);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validators */ "./resources/js/src/@core/utils/validations/validators.js");



 // eslint-disable-next-line object-curly-newline

 // ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

var required = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('required', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"]);
var email = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('email', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"]);
var min = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('min', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"]);
var confirmed = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('confirmed', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"]);
var regex = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('regex', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["regex"]);
var between = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('between', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["between"]);
var alpha = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha"]);
var integer = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('integer', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"]);
var digits = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('digits', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["digits"]);
var alphaDash = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-dash', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"]);
var alphaNum = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-num', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]);
var length = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('length', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["length"]);
var positive = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('positive', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPositive"],
  message: 'Please enter positive number!'
});
var credit = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('credit-card', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorCreditCard"],
  message: 'It is not valid credit card!'
});
var password = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('password', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPassword"],
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit'
});
var url = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('url', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorUrlValidator"],
  message: 'URL is invalid'
}); // Install English and Arabic localizations.

Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["localize"])({
  en: {
    messages: vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__.messages,
    names: {
      email: 'Email',
      password: 'Password'
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?'
      }
    }
  },
  ar: {
    messages: vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__.messages,
    names: {
      email: 'البريد الإلكتروني',
      password: 'كلمة السر'
    },
    fields: {
      password: {
        min: 'كلمة السر قصيرة جداً سيتم اختراقك'
      }
    }
  }
}); // ////////////////////////////////////////////////////////
// NOTE:
// Quasar validation for reference only
// Remove this note once development is finished and make sure to
// to convert all of them in veevalidate version
// ////////////////////////////////////////////////////////
// export const required = (val) => {
//   return (val && val.length > 0) || '*Field is required'
// }
// export const required_obj = (obj) => {
//   if (obj === null || obj === undefined) return '*Field is required'
//   return (Object.entries(obj).length > 0 && obj.constructor === Object) || '*Field is required'
// }
// export const no_blank_spaces_arr = (arr) => {
//   return arr.every(val => (val.trim() && val.trim().length > 0)) || 'Blank Spaces are not allowed'
// }
// export const url = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   // Used
//   // https://stackoverflow.com/questions/4314741/url-regex-validation
//   // Other
//   // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
//   // https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
//   // https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/
//   /* eslint-disable no-useless-escape */
//   const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
//   /* eslint-enable no-useless-escape */
//   return re.test(val) || 'URL is invalid'
// }
// export const date = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   // https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js
//   return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(val) || 'Date is invalid'
// }
// export const max = (val, max) => {
//   // If blank return
//   if (val === undefined || val === null) return true
//   return val.length <= max || `More than ${max} characters are not allowed`
// }
// export const max_arr = (val, max) => {
//   return val.length <= max || `More than ${max} values are not allowed`
// }
// export const min = (val, min) => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   return val.length >= min || `Minimum ${min} characters are required`
// }
// export const num_range = (val, min, max) => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   const msg = 'Value is invalid'
//   if (min === null) return val <= max || msg
//   else if (max === null) return val >= min || msg
//   else return (val >= min && val <= max) || msg
// }

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validators.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validators.js ***!
  \****************************************************************/
/*! exports provided: validatorPositive, validatorPassword, validatorCreditCard, validatorUrlValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPositive", function() { return validatorPositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPassword", function() { return validatorPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorCreditCard", function() { return validatorCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorUrlValidator", function() { return validatorUrlValidator; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);


var validatorPositive = function validatorPositive(value) {
  if (value >= 0) {
    return true;
  }

  return false;
};
var validatorPassword = function validatorPassword(password) {
  /* eslint-disable no-useless-escape */
  var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  /* eslint-enable no-useless-escape */

  var validPassword = regExp.test(password);
  return validPassword;
};
var validatorCreditCard = function validatorCreditCard(creditnum) {
  /* eslint-disable no-useless-escape */
  var cRegExp = /^(?:3[47][0-9]{13})$/;
  /* eslint-enable no-useless-escape */

  var validCreditCard = cRegExp.test(creditnum);
  return validCreditCard;
};
var validatorUrlValidator = function validatorUrlValidator(val) {
  if (val === undefined || val === null || val.length === 0) {
    return true;
  }
  /* eslint-disable no-useless-escape */


  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  /* eslint-enable no-useless-escape */

  return re.test(val);
};

/***/ }),

/***/ "./resources/js/src/views/apps/todo/Todo.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/apps/todo/Todo.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo_vue_vue_type_template_id_1764b1bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.vue?vue&type=template&id=1764b1bc&scoped=true& */ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc&scoped=true&");
/* harmony import */ var _Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Todo_vue_vue_type_style_index_0_id_1764b1bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true& */ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true&");
/* harmony import */ var _Todo_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todo.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Todo_vue_vue_type_template_id_1764b1bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Todo_vue_vue_type_template_id_1764b1bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1764b1bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/todo/Todo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_1764b1bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&id=1764b1bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_1764b1bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_1764b1bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_1764b1bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_1764b1bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_1764b1bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=template&id=1764b1bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_1764b1bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_1764b1bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoLeftSidebar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoLeftSidebar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoLeftSidebar_vue_vue_type_template_id_2f0650ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoLeftSidebar.vue?vue&type=template&id=2f0650ae& */ "./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=template&id=2f0650ae&");
/* harmony import */ var _TodoLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoLeftSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoLeftSidebar_vue_vue_type_template_id_2f0650ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoLeftSidebar_vue_vue_type_template_id_2f0650ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/todo/TodoLeftSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoLeftSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=template&id=2f0650ae&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=template&id=2f0650ae& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoLeftSidebar_vue_vue_type_template_id_2f0650ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoLeftSidebar.vue?vue&type=template&id=2f0650ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoLeftSidebar.vue?vue&type=template&id=2f0650ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoLeftSidebar_vue_vue_type_template_id_2f0650ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoLeftSidebar_vue_vue_type_template_id_2f0650ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoTaskHandlerSidebar_vue_vue_type_template_id_4a2592f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoTaskHandlerSidebar.vue?vue&type=template&id=4a2592f3&scoped=true& */ "./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=template&id=4a2592f3&scoped=true&");
/* harmony import */ var _TodoTaskHandlerSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoTaskHandlerSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TodoTaskHandlerSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _TodoTaskHandlerSidebar_vue_vue_type_style_index_1_id_4a2592f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true& */ "./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _TodoTaskHandlerSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoTaskHandlerSidebar_vue_vue_type_template_id_4a2592f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoTaskHandlerSidebar_vue_vue_type_template_id_4a2592f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a2592f3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoTaskHandlerSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_style_index_1_id_4a2592f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=style&index=1&id=4a2592f3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_style_index_1_id_4a2592f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_style_index_1_id_4a2592f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_style_index_1_id_4a2592f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_style_index_1_id_4a2592f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=template&id=4a2592f3&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=template&id=4a2592f3&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_template_id_4a2592f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoTaskHandlerSidebar.vue?vue&type=template&id=4a2592f3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoTaskHandlerSidebar.vue?vue&type=template&id=4a2592f3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_template_id_4a2592f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTaskHandlerSidebar_vue_vue_type_template_id_4a2592f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/todo/todoStoreModule.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/todoStoreModule.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchTasks: function fetchTasks(ctx, payload) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/apps/todo/tasks', {
          params: payload
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    addTask: function addTask(ctx, taskData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/apps/todo/tasks', {
          task: taskData
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    updateTask: function updateTask(ctx, _ref) {
      var task = _ref.task;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/apps/todo/tasks/".concat(task.id), {
          task: task
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    removeTask: function removeTask(ctx, _ref2) {
      var id = _ref2.id;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("/apps/todo/tasks/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/apps/todo/useTaskHandler.js":
/*!************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/useTaskHandler.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTaskHandler; });
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



 // import store from '@/store'

function useTaskHandler(props, emit) {
  // ------------------------------------------------
  // taskLocal
  // ------------------------------------------------
  var taskLocal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(JSON.parse(JSON.stringify(props.task.value)));

  var resetTaskLocal = function resetTaskLocal() {
    taskLocal.value = JSON.parse(JSON.stringify(props.task.value));
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["watch"])(props.task, function () {
    resetTaskLocal();
  }); // ------------------------------------------------
  // isEventHandlerSidebarActive
  // * Clear form if sidebar is closed
  // ! We can hide it using @hidden event
  // ------------------------------------------------
  // watch(props.isEventHandlerSidebarActive, val => {
  //   // ? Don't reset event till transition is finished
  //   if (!val) {
  //     setTimeout(() => {
  //       clearForm.value()
  //     }, 350)
  //   }
  // })

  var onSubmit = function onSubmit() {
    var taskData = JSON.parse(JSON.stringify(taskLocal)); // * If event has id => Edit Event
    // Emit event for add/update event

    if (props.task.value.id) emit('update-task', taskData.value);else emit('add-task', taskData.value); // Close sidebar

    emit('update:is-task-handler-sidebar-active', false);
  }; // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*
  // ------------------------------------------------
  // guestOptions
  // ------------------------------------------------

  /* eslint-disable global-require */


  var assigneeOptions = [{
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    fullName: 'Jane Foster'
  }, {
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    fullName: 'Donna Frank'
  }, {
    avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
    fullName: 'Gabrielle Robertson'
  }, {
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    fullName: 'Lori Spears'
  }, {
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Sandy Vega'
  }, {
    avatar: __webpack_require__(/*! @/assets/images/avatars/11-small.png */ "./resources/js/src/assets/images/avatars/11-small.png"),
    fullName: 'Cheryl May'
  }];
  /* eslint-enable global-require */

  var resolveAvatarVariant = function resolveAvatarVariant(tags) {
    if (tags.includes('high')) return 'primary';
    if (tags.includes('medium')) return 'warning';
    if (tags.includes('low')) return 'success';
    if (tags.includes('update')) return 'danger';
    if (tags.includes('team')) return 'info';
    return 'primary';
  };

  var tagOptions = [{
    label: 'Team',
    value: 'team'
  }, {
    label: 'Low',
    value: 'low'
  }, {
    label: 'Medium',
    value: 'medium'
  }, {
    label: 'High',
    value: 'high'
  }, {
    label: 'Update',
    value: 'update'
  }];
  return {
    taskLocal: taskLocal,
    resetTaskLocal: resetTaskLocal,
    // UI
    assigneeOptions: assigneeOptions,
    resolveAvatarVariant: resolveAvatarVariant,
    tagOptions: tagOptions,
    onSubmit: onSubmit
  };
}

/***/ })

}]);