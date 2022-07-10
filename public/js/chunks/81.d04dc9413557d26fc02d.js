(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_RealProjects_Laravel_Project_vue_laravel_purpletrac_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/comp-functions/ui/app */ "./resources/js/src/@core/comp-functions/ui/app.js");
/* harmony import */ var _ChatLeftSidebar_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChatLeftSidebar.vue */ "./resources/js/src/views/apps/chat/ChatLeftSidebar.vue");
/* harmony import */ var _chatStoreModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chatStoreModule */ "./resources/js/src/views/apps/chat/chatStoreModule.js");
/* harmony import */ var _ChatActiveChatContentDetailsSidedbar_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChatActiveChatContentDetailsSidedbar.vue */ "./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue");
/* harmony import */ var _ChatLog_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ChatLog.vue */ "./resources/js/src/views/apps/chat/ChatLog.vue");
/* harmony import */ var _useChat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useChat */ "./resources/js/src/views/apps/chat/useChat.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import { formatDate } from '@core/utils/filter'








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // BSV
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BAvatar"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BDropdownItem"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BForm"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BInputGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BButton"],
    // 3rd Party
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a,
    // SFC
    ChatLeftSidebar: _ChatLeftSidebar_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    ChatActiveChatContentDetailsSidedbar: _ChatActiveChatContentDetailsSidedbar_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    ChatLog: _ChatLog_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  setup: function setup() {
    var CHAT_APP_STORE_MODULE_NAME = 'app-chat'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_3__["default"].hasModule(CHAT_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_3__["default"].registerModule(CHAT_APP_STORE_MODULE_NAME, _chatStoreModule__WEBPACK_IMPORTED_MODULE_10__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_3__["default"].hasModule(CHAT_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_3__["default"].unregisterModule(CHAT_APP_STORE_MODULE_NAME);
    });

    var _useChat = Object(_useChat__WEBPACK_IMPORTED_MODULE_13__["default"])(),
        resolveAvatarBadgeVariant = _useChat.resolveAvatarBadgeVariant; // Scroll to Bottom ChatLog


    var refChatLogPS = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])(null);

    var scrollToBottomInChatLog = function scrollToBottomInChatLog() {
      var scrollEl = refChatLogPS.value.$el || refChatLogPS.value;
      scrollEl.scrollTop = scrollEl.scrollHeight;
    }; // ------------------------------------------------
    // Chats & Contacts
    // ------------------------------------------------


    var chatsContacts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])([]);
    var contacts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])([]);

    var fetchChatAndContacts = function fetchChatAndContacts() {
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('app-chat/fetchChatsAndContacts').then(function (response) {
        chatsContacts.value = response.data.chatsContacts;
        contacts.value = response.data.contacts; // eslint-disable-next-line no-use-before-define

        profileUserDataMinimal.value = response.data.profileUser;
      });
    };

    fetchChatAndContacts(); // ------------------------------------------------
    // Single Chat
    // ------------------------------------------------

    var activeChat = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])({});
    var chatInputMessage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])('');

    var openChatOfContact = function openChatOfContact(userId) {
      // Reset send message input value
      chatInputMessage.value = '';
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('app-chat/getChat', {
        userId: userId
      }).then(function (response) {
        activeChat.value = response.data; // Set unseenMsgs to 0

        var contact = chatsContacts.value.find(function (c) {
          return c.id === userId;
        });
        if (contact) contact.chat.unseenMsgs = 0; // Scroll to bottom

        Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["nextTick"])(function () {
          scrollToBottomInChatLog();
        });
      }); // if SM device =>  Close Chat & Contacts left sidebar
      // eslint-disable-next-line no-use-before-define

      mqShallShowLeftSidebar.value = false;
    };

    var sendMessage = function sendMessage() {
      if (!chatInputMessage.value) return;
      var payload = {
        contactId: activeChat.value.contact.id,
        // eslint-disable-next-line no-use-before-define
        senderId: profileUserDataMinimal.value.id,
        message: chatInputMessage.value
      };
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('app-chat/sendMessage', payload).then(function (response) {
        var _response$data = response.data,
            newMessageData = _response$data.newMessageData,
            chat = _response$data.chat; // ? If it's not undefined => New chat is created (Contact is not in list of chats)

        if (chat !== undefined) {
          activeChat.value = {
            chat: chat,
            contact: activeChat.value.contact
          };
          chatsContacts.value.push(Object(E_RealProjects_Laravel_Project_vue_laravel_purpletrac_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(E_RealProjects_Laravel_Project_vue_laravel_purpletrac_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, activeChat.value.contact), {}, {
            chat: {
              id: chat.id,
              lastMessage: newMessageData,
              unseenMsgs: 0
            }
          }));
        } else {
          // Add message to log
          activeChat.value.chat.chat.push(newMessageData);
        } // Reset send message input value


        chatInputMessage.value = ''; // Set Last Message for active contact

        var contact = chatsContacts.value.find(function (c) {
          return c.id === activeChat.value.contact.id;
        });
        contact.chat.lastMessage = newMessageData; // Scroll to bottom

        Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["nextTick"])(function () {
          scrollToBottomInChatLog();
        });
      });
    };

    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    }; // User Profile Sidebar
    // ? Will contain all details of profile user (e.g. settings, about etc.)

    var profileUserData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])({}); // ? Will contain id, name and avatar & status

    var profileUserDataMinimal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])({});
    var shallShowUserProfileSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])(false);

    var showUserProfileSidebar = function showUserProfileSidebar() {
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('app-chat/getProfileUser').then(function (response) {
        profileUserData.value = response.data;
        shallShowUserProfileSidebar.value = true;
      });
    }; // Active Chat Contact Details


    var shallShowActiveChatContactSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])(false); // UI + SM Devices
    // Left Sidebar Responsiveness

    var _useResponsiveAppLeft = Object(_core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_8__["useResponsiveAppLeftSidebarVisibility"])(),
        mqShallShowLeftSidebar = _useResponsiveAppLeft.mqShallShowLeftSidebar;

    var startConversation = function startConversation() {
      if (_store__WEBPACK_IMPORTED_MODULE_3__["default"].state.app.windowWidth < _themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeBreakpoints"].lg) {
        mqShallShowLeftSidebar.value = true;
      }
    };

    return {
      // Filters
      // formatDate,
      // useChat
      resolveAvatarBadgeVariant: resolveAvatarBadgeVariant,
      // Chat & Contacts
      chatsContacts: chatsContacts,
      contacts: contacts,
      // Single Chat
      refChatLogPS: refChatLogPS,
      activeChat: activeChat,
      chatInputMessage: chatInputMessage,
      openChatOfContact: openChatOfContact,
      sendMessage: sendMessage,
      // Profile User Minimal Data
      profileUserDataMinimal: profileUserDataMinimal,
      // User Profile Sidebar
      profileUserData: profileUserData,
      shallShowUserProfileSidebar: shallShowUserProfileSidebar,
      showUserProfileSidebar: showUserProfileSidebar,
      // Active Chat Contact Details
      shallShowActiveChatContactSidebar: shallShowActiveChatContactSidebar,
      // UI
      perfectScrollbarSettings: perfectScrollbarSettings,
      // UI + SM Devices
      startConversation: startConversation,
      mqShallShowLeftSidebar: mqShallShowLeftSidebar
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    // 3rd Party
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    shallShowActiveChatContactSidebar: {
      type: Boolean,
      required: true
    },
    contact: {
      type: Object,
      required: true
    }
  },
  setup: function setup() {
    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    };
    return {
      perfectScrollbarSettings: perfectScrollbarSettings
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _useChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useChat */ "./resources/js/src/views/apps/chat/useChat.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"]
  },
  props: {
    tag: {
      type: String,
      "default": 'div'
    },
    user: {
      type: Object,
      required: true
    },
    isChatContact: {
      type: Boolean,
      dedfault: false
    }
  },
  setup: function setup() {
    var _useChat = Object(_useChat__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        resolveAvatarBadgeVariant = _useChat.resolveAvatarBadgeVariant;

    return {
      formatDateToMonthShort: _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__["formatDateToMonthShort"],
      resolveAvatarBadgeVariant: resolveAvatarBadgeVariant
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _ChatContact_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChatContact.vue */ "./resources/js/src/views/apps/chat/ChatContact.vue");
/* harmony import */ var _UserProfileSidebar_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UserProfileSidebar.vue */ "./resources/js/src/views/apps/chat/UserProfileSidebar.vue");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BAvatar"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BInputGroupPrepend"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormInput"],
    // 3rd party
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7___default.a,
    // SFC
    ChatContact: _ChatContact_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    UserProfileSidebar: _UserProfileSidebar_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: {
    chatsContacts: {
      type: Array,
      required: true
    },
    contacts: {
      type: Array,
      required: true
    },
    shallShowUserProfileSidebar: {
      type: Boolean,
      required: true
    },
    profileUserData: {
      type: Object,
      required: true
    },
    profileUserMinimalData: {
      type: Object,
      required: true
    },
    activeChatContactId: {
      type: Number,
      "default": null
    },
    mqShallShowLeftSidebar: {
      type: Boolean,
      required: true
    }
  },
  setup: function setup(props) {
    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    };

    var resolveChatContact = function resolveChatContact(userId) {
      return props.contacts.find(function (contact) {
        return contact.id === userId;
      });
    }; // Search Query


    var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_8__["ref"])('');

    var searchFilterFunction = function searchFilterFunction(contact) {
      return contact.fullName.toLowerCase().includes(searchQuery.value.toLowerCase());
    };

    var filteredChatsContacts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_8__["computed"])(function () {
      return props.chatsContacts.filter(searchFilterFunction);
    });
    var filteredContacts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_8__["computed"])(function () {
      return props.contacts.filter(searchFilterFunction);
    });
    return {
      // Search Query
      searchQuery: searchQuery,
      filteredChatsContacts: filteredChatsContacts,
      filteredContacts: filteredContacts,
      // UI
      resolveChatContact: resolveChatContact,
      perfectScrollbarSettings: perfectScrollbarSettings
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BAvatar"]
  },
  props: {
    chatData: {
      type: Object,
      required: true
    },
    profileUserAvatar: {
      type: String,
      required: true
    }
  },
  setup: function setup(props) {
    var formattedChatData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["computed"])(function () {
      var contact = {
        id: props.chatData.contact.id,
        avatar: props.chatData.contact.avatar
      };
      var chatLog = [];

      if (props.chatData.chat) {
        chatLog = props.chatData.chat.chat;
      }

      var formattedChatLog = [];
      var chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined;
      var msgGroup = {
        sender: chatMessageSenderId,
        messages: []
      };
      chatLog.forEach(function (msg, index) {
        if (chatMessageSenderId === msg.senderId) {
          msgGroup.messages.push({
            msg: msg.message,
            time: msg.time
          });
        } else {
          chatMessageSenderId = msg.senderId;
          formattedChatLog.push(msgGroup);
          msgGroup = {
            senderId: msg.senderId,
            messages: [{
              msg: msg.message,
              time: msg.time
            }]
          };
        }

        if (index === chatLog.length - 1) formattedChatLog.push(msgGroup);
      });
      return {
        formattedChatLog: formattedChatLog,
        contact: contact,
        profileUserAvatar: props.profileUserAvatar
      };
    });
    return {
      formattedChatData: formattedChatData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadioGroup"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    shallShowUserProfileSidebar: {
      type: Boolean,
      required: true
    },
    profileUserData: {
      type: Object,
      required: true
    }
  },
  setup: function setup() {
    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    };
    var userStatusOptions = [{
      text: 'Active',
      value: 'online',
      radioVariant: 'success'
    }, {
      text: 'Do Not Disturb',
      value: 'busy',
      radioVariant: 'danger'
    }, {
      text: 'Away',
      value: 'away',
      radioVariant: 'warning'
    }, {
      text: 'Offline',
      value: 'offline',
      radioVariant: 'secondary'
    }];
    return {
      perfectScrollbarSettings: perfectScrollbarSettings,
      userStatusOptions: userStatusOptions
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .chat-application .content-area-wrapper {\n  border: 1px solid #ebe9f1;\n  border-radius: 0.428rem;\n}\n.chat-application .chat-profile-sidebar {\n  height: inherit;\n  width: 360px;\n  position: absolute;\n  transition: all 0.3s ease, background 0s, border 0s, color 0s;\n  z-index: 6;\n}\n[dir] .chat-application .chat-profile-sidebar {\n  border-radius: 0.25rem;\n  background-color: #fff;\n}\n[dir=ltr] .chat-application .chat-profile-sidebar {\n  border-right: 1px solid #ebe9f1;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  transform: translateX(-110%);\n}\n[dir=rtl] .chat-application .chat-profile-sidebar {\n  border-left: 1px solid #ebe9f1;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  transform: translateX(110%);\n}\n.chat-application .chat-profile-sidebar.show {\n  transition: all 0.3s ease, background 0s, border 0s, color 0s;\n}\n[dir] .chat-application .chat-profile-sidebar.show {\n  transform: translateX(0);\n}\n.chat-application .chat-profile-sidebar .chat-profile-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n}\n[dir] .chat-application .chat-profile-sidebar .chat-profile-header {\n  text-align: center;\n}\n[dir] .chat-application .chat-profile-sidebar .chat-profile-header .avatar {\n  margin-bottom: 1.25rem;\n}\n.chat-application .chat-profile-sidebar .profile-sidebar-area {\n  height: calc(100% - 200px);\n  position: relative;\n}\n[dir] .chat-application .chat-profile-sidebar .profile-sidebar-area {\n  padding: 0 2rem 1.5rem;\n}\n.chat-application .close-icon {\n  position: absolute;\n  top: 0.85rem;\n}\n[dir] .chat-application .close-icon {\n  cursor: pointer;\n}\n[dir=ltr] .chat-application .close-icon {\n  right: 1rem;\n}\n[dir=rtl] .chat-application .close-icon {\n  left: 1rem;\n}\n.chat-application .sidebar-close-icon svg,\n.chat-application .sidebar-close-icon i,\n.chat-application .close-icon svg,\n.chat-application .close-icon i {\n  font-size: 1.143rem;\n  height: 1.143rem;\n  width: 1.143rem;\n}\n[dir] .chat-application .avatar-border img {\n  border: 2px solid #fff;\n}\n.chat-application .sidebar-content {\n  height: inherit;\n  width: 360px;\n}\n[dir] .chat-application .sidebar-content {\n  background-color: #fff;\n  border-radius: 0.25rem;\n  margin: 0;\n  box-shadow: none;\n}\n[dir=ltr] .chat-application .sidebar-content {\n  border-right: 1px solid #ebe9f1;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .chat-application .sidebar-content {\n  border-left: 1px solid #ebe9f1;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.chat-application .sidebar-content .sidebar-close-icon {\n  position: absolute;\n  top: 0.25rem;\n  font-size: 1.25rem;\n  z-index: 1;\n  visibility: hidden;\n}\n[dir] .chat-application .sidebar-content .sidebar-close-icon {\n  cursor: pointer;\n}\n[dir=ltr] .chat-application .sidebar-content .sidebar-close-icon {\n  right: 0.25rem;\n}\n[dir=rtl] .chat-application .sidebar-content .sidebar-close-icon {\n  left: 0.25rem;\n}\n.chat-application .sidebar-content .chat-fixed-search {\n  width: 360px;\n  height: 65px;\n  display: flex;\n}\n[dir] .chat-application .sidebar-content .chat-fixed-search {\n  border-bottom: 1px solid #ebe9f1;\n  padding: 0 1.286rem;\n}\n.chat-application .sidebar-content .chat-fixed-search .sidebar-profile-toggle .avatar {\n  display: inline-table;\n}\n[dir] .chat-application .sidebar-content .chat-fixed-search .input-group:focus-within {\n  background-color: transparent;\n  box-shadow: none;\n}\n.chat-application .sidebar-content .chat-list-title {\n  color: #4d148c;\n}\n[dir] .chat-application .sidebar-content .chat-list-title {\n  margin: 2rem 1.286rem 0.5rem;\n}\n.chat-application .sidebar-content .chat-user-list-wrapper {\n  position: relative;\n  height: calc(100% - 65px);\n  width: 360px;\n}\n[dir] .chat-application .sidebar-content .chat-user-list-wrapper {\n  border-radius: 0;\n}\n.chat-application .sidebar-content .chat-user-list-wrapper .avatar {\n  height: 42px;\n}\n.chat-application .sidebar-content .chat-user-list-wrapper .avatar [class*=avatar-status-] {\n  bottom: 1px;\n}\n[dir=ltr] .chat-application .sidebar-content .chat-user-list-wrapper .avatar [class*=avatar-status-] {\n  right: 1px;\n}\n[dir=rtl] .chat-application .sidebar-content .chat-user-list-wrapper .avatar [class*=avatar-status-] {\n  left: 1px;\n}\n.chat-application .sidebar-content .chat-user-list-wrapper .contact-list .chat-info {\n  width: calc(100% - 46px);\n}\n[dir=ltr] .chat-application .sidebar-content .chat-user-list-wrapper .contact-list .chat-info {\n  padding-right: 0;\n}\n[dir=rtl] .chat-application .sidebar-content .chat-user-list-wrapper .contact-list .chat-info {\n  padding-left: 0;\n}\n.chat-application .sidebar-content .chat-user-list-wrapper .no-results {\n  display: none !important;\n}\n[dir] .chat-application .sidebar-content .chat-user-list-wrapper .no-results {\n  padding: 0.786rem 1.286rem;\n}\n.chat-application .sidebar-content .chat-user-list-wrapper .no-results.show {\n  display: block !important;\n}\n[dir] .chat-application .sidebar-content .chat-user-list-wrapper ul {\n  margin-bottom: 0;\n}\n[dir=ltr] .chat-application .sidebar-content .chat-user-list-wrapper ul {\n  padding-left: 0;\n}\n[dir=rtl] .chat-application .sidebar-content .chat-user-list-wrapper ul {\n  padding-right: 0;\n}\n.chat-application .sidebar-content .chat-user-list-wrapper li {\n  display: flex;\n}\n[dir] .chat-application .sidebar-content .chat-user-list-wrapper li {\n  padding: 0.786rem 1.286rem;\n}\n.chat-application .sidebar-content .chat-user-list-wrapper li .chat-info {\n  width: calc(100% - 46px - 46px);\n}\n[dir] .chat-application .sidebar-content .chat-user-list-wrapper li .chat-info {\n  margin-top: 0.3rem;\n  padding: 0 0.75rem;\n}\n.chat-application .sidebar-content .chat-user-list-wrapper li .chat-info .card-text,\n.chat-application .sidebar-content .chat-user-list-wrapper li .chat-info p {\n  color: #b9b9c3;\n}\n.chat-application .sidebar-content .chat-user-list-wrapper li .chat-time {\n  color: #b9b9c3;\n}\n[dir] .chat-application .sidebar-content .chat-user-list-wrapper li:hover {\n  cursor: pointer;\n  background: #f8f8f8;\n}\n[dir] .chat-application .sidebar-content .chat-user-list-wrapper li.active {\n  background-repeat: repeat-x;\n}\n[dir=ltr] .chat-application .sidebar-content .chat-user-list-wrapper li.active {\n  background-image: linear-gradient(80deg, #4d148c, #661ab9);\n}\n[dir=rtl] .chat-application .sidebar-content .chat-user-list-wrapper li.active {\n  background-image: linear-gradient(-80deg, #4d148c, #661ab9);\n}\n.chat-application .sidebar-content .chat-user-list-wrapper li.active h1,\n.chat-application .sidebar-content .chat-user-list-wrapper li.active h2,\n.chat-application .sidebar-content .chat-user-list-wrapper li.active h3,\n.chat-application .sidebar-content .chat-user-list-wrapper li.active h4,\n.chat-application .sidebar-content .chat-user-list-wrapper li.active h5,\n.chat-application .sidebar-content .chat-user-list-wrapper li.active h6,\n.chat-application .sidebar-content .chat-user-list-wrapper li.active .card-text,\n.chat-application .sidebar-content .chat-user-list-wrapper li.active .chat-time {\n  color: #fff;\n}\n[dir] .chat-application .sidebar-content .chat-user-list-wrapper li img {\n  border: 2px solid #fff;\n}\n.chat-application .chat-app-window {\n  height: 100%;\n}\n[dir] .chat-application .chat-app-window .start-chat-area, [dir] .chat-application .chat-app-window .user-chats {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNjAgMjYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNjAgMjYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0UxRTBFOTt9Cjwvc3R5bGU+CjxnPgoJPGcgaWQ9ImktbGlrZS1mb29kIj4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQuNCwxNmMwLjIsMC42LDAuNCwxLjMsMC41LDJoLTMuN2wxLjIsMi4zbDAuNSwwLjlsLTAuMiwwLjFWMjhjMi4yLDEuNywyLjcsNC44LDEsNwoJCQljLTAuOCwxLTEuOSwxLjctMy4yLDEuOVYzN2MtMC45LDMuNS00LjEsNi03LjgsNmgtMjBjLTMuNiwwLTYuOC0yLjUtNy43LTZ2LTAuMWMtMi43LTAuNC00LjYtMy00LjItNS43YzAuMi0xLjMsMC45LTIuNSwxLjktMy4yCgkJCXYtNi44bC0wLjgtMS42bC0wLjQtMC45bDAuOS0wLjRMLTE3LDE4aC0zQy0xNy4yLDUuNi00LjktMi4yLDcuNSwwLjZDMTUuNCwyLjMsMjEuOSw4LjIsMjQuNCwxNnogTS0xMi40LDE4Yy0wLjIsMC0wLjMsMC0wLjQsMC4xCgkJCWwtMy4xLDEuNmwwLjksMS44bDEuMy0wLjdjMC44LTAuNCwxLjgtMC40LDIuNywwbDIuMiwxLjFjMC4zLDAuMSwwLjYsMC4xLDAuOSwwbDIuMi0xLjFjMC44LTAuNCwxLjgtMC40LDIuNywwbDIuMiwxLjEKCQkJYzAuMywwLjEsMC42LDAuMSwwLjksMGwyLjItMS4xYzAuOC0wLjQsMS44LTAuNCwyLjcsMGwyLjIsMS4xQzcuNCwyMiw3LjcsMjIsOCwyMS45bDIuOS0xLjNjMC44LTAuMywxLjctMC4zLDIuNCwwbDIuOSwxLjMKCQkJYzAuMywwLjEsMC42LDAuMSwwLjksMGwzLjEtMS41bC0wLjktMS44bC0xLjQsMC43Yy0wLjgsMC40LTEuNywwLjQtMi42LDAuMWwtMi44LTEuMkMxMi4zLDE4LDEyLjIsMTgsMTIuMSwxOGwwLDAKCQkJYy0wLjEsMC0wLjMsMC0wLjQsMC4xbC0yLjgsMS4yYy0wLjgsMC40LTEuOCwwLjMtMi42LTAuMUw0LDE4LjFDMy45LDE4LDMuNywxOCwzLjYsMThsMCwwYy0wLjIsMC0wLjMsMC0wLjQsMC4xTDEsMTkuMgoJCQljLTAuOCwwLjQtMS44LDAuNC0yLjcsMEwtNCwxOC4xQy00LjEsMTgtNC4zLDE4LTQuNCwxOGwwLDBjLTAuMiwwLTAuMywwLTAuNCwwLjFMLTcsMTkuMmMtMC44LDAuNC0xLjgsMC40LTIuNywwbC0yLjItMS4xCgkJCUMtMTIuMSwxOC0xMi4zLDE4LTEyLjQsMThMLTEyLjQsMThMLTEyLjQsMTh6IE0tMTIuNCwxNmgtNC45Qy0xMy41LDUuMS0xLjUtMC43LDkuNSwzLjJjNiwyLjEsMTAuNyw2LjgsMTIuOCwxMi44aC0yLjFsLTAuMS0wLjEKCQkJTDE5LjksMTZILTEyLjRMLTEyLjQsMTZ6IE0xNy45LDIzLjdsMS40LTAuN2gxLjN2MmgtMzZ2LTEuMWwwLjMtMC4ybDEuNC0wLjdoMi42bDEuNCwwLjdjMC44LDAuNCwxLjgsMC40LDIuNywwbDEuNC0wLjdILTMKCQkJbDEuNCwwLjdjMC44LDAuNCwxLjgsMC40LDIuNywwTDIuMywyM2gyLjZsMS40LDAuN2MwLjcsMC40LDEuNywwLjQsMi41LDBsMS43LTAuN2gzLjJsMS43LDAuN0MxNi4yLDI0LjEsMTcuMSwyNC4xLDE3LjksMjMuN3oKCQkJIE0tMTMuOCwyN2wxNi40LDQuOUwxOC45LDI3SC0xMy44eiBNLTE0LjQsMjloMC4zbDE2LjcsNWwxNi43LTVoMC4zYzEuNywwLDMsMS4zLDMsM3MtMS4zLDMtMywzaC0zNGMtMS43LDAtMy0xLjMtMy0zCgkJCUMtMTcuNCwzMC4zLTE2LjEsMjktMTQuNCwyOXogTS0xMy4xLDM3YzAuOCwyLjQsMy4xLDQsNS43LDRoMjBjMi41LDAsNC44LTEuNiw1LjctNEMxOC4yLDM3LTEzLjEsMzctMTMuMSwzN3oiLz4KCQk8cGF0aCBpZD0icGF0aDZfZmlsbC1jb3B5IiBjbGFzcz0ic3QwIiBkPSJNMjg0LjQsMTZjMC4yLDAuNiwwLjQsMS4zLDAuNSwyaC0zLjdsMS4yLDIuM2wwLjUsMC45bC0wLjIsMC4xVjI4YzIuMiwxLjcsMi43LDQuOCwxLDcKCQkJYy0wLjgsMS0xLjksMS43LTMuMiwxLjlWMzdjLTAuOSwzLjUtNC4xLDYtNy44LDZoLTIwYy0zLjYsMC02LjgtMi41LTcuNy02di0wLjFjLTIuNy0wLjQtNC42LTMtNC4yLTUuN2MwLjItMS4zLDAuOS0yLjUsMS45LTMuMgoJCQl2LTYuOGwtMC44LTEuNmwtMC40LTAuOWwwLjktMC40TDI0MywxOGgtM2MyLjgtMTIuNCwxNS4xLTIwLjIsMjcuNS0xNy40QzI3NS40LDIuMywyODEuOSw4LjIsMjg0LjQsMTZ6IE0yNDcuNSwxOAoJCQljLTAuMiwwLTAuMywwLTAuNCwwLjFsLTMuMSwxLjZsMC45LDEuOGwxLjMtMC43YzAuOC0wLjQsMS44LTAuNCwyLjcsMGwyLjIsMS4xYzAuMywwLjEsMC42LDAuMSwwLjksMGwyLjItMS4xCgkJCWMwLjgtMC40LDEuOC0wLjQsMi43LDBsMi4yLDEuMWMwLjMsMC4xLDAuNiwwLjEsMC45LDBsMi4yLTEuMWMwLjgtMC40LDEuOC0wLjQsMi43LDBsMi4yLDEuMWMwLjMsMC4xLDAuNiwwLjEsMC45LDBsMi45LTEuMwoJCQljMC44LTAuMywxLjctMC4zLDIuNCwwbDIuOSwxLjNjMC4zLDAuMSwwLjYsMC4xLDAuOSwwbDMuMS0xLjVsLTAuOS0xLjhsLTEuNCwwLjdjLTAuOCwwLjQtMS43LDAuNC0yLjYsMC4xbC0yLjgtMS4yCgkJCWMtMC4xLTAuMS0wLjMtMC4xLTAuNC0wLjFsMCwwYy0wLjEsMC0wLjMsMC0wLjQsMC4xbC0yLjgsMS4yYy0wLjgsMC40LTEuOCwwLjMtMi42LTAuMWwtMi4zLTEuMWMtMC4xLTAuMS0wLjMtMC4xLTAuNS0wLjFsMCwwCgkJCWMtMC4yLDAtMC4zLDAtMC40LDAuMWwtMi4yLDEuMWMtMC44LDAuNC0xLjgsMC40LTIuNywwbC0yLjItMS4xYy0wLjEtMC4xLTAuMy0wLjEtMC40LTAuMWwwLDBjLTAuMiwwLTAuMywwLTAuNCwwLjFsLTIuMiwxLjEKCQkJYy0wLjgsMC40LTEuOCwwLjQtMi43LDBsLTIuMi0xLjFDMjQ3LjksMTgsMjQ3LjcsMTgsMjQ3LjUsMThMMjQ3LjUsMThMMjQ3LjUsMTh6IE0yNDcuNSwxNmgtNC45YzMuOS0xMC45LDE1LjktMTYuNywyNi44LTEyLjgKCQkJYzYsMi4xLDEwLjcsNi44LDEyLjgsMTIuOGgtMi4xbC0wLjEtMC4xbC0wLjMsMC4xSDI0Ny41TDI0Ny41LDE2eiBNMjc3LjksMjMuN2wxLjQtMC43aDEuM3YyaC0zNnYtMS4xbDAuMy0wLjJsMS40LTAuN2gyLjYKCQkJbDEuNCwwLjdjMC44LDAuNCwxLjgsMC40LDIuNywwbDEuNC0wLjdoMi42bDEuNCwwLjdjMC44LDAuNCwxLjgsMC40LDIuNywwbDEuNC0wLjdoMi42bDEuNCwwLjdjMC44LDAuNCwxLjcsMC40LDIuNiwwLjFsMS43LTAuNwoJCQloMy4ybDEuNywwLjdDMjc2LjIsMjQuMSwyNzcuMSwyNC4xLDI3Ny45LDIzLjdMMjc3LjksMjMuN3ogTTI0Ni4yLDI3bDE2LjQsNC45TDI3OSwyN0gyNDYuMnogTTI0NS41LDI5aDAuM2wxNi43LDVsMTYuNy01aDAuMwoJCQljMS43LDAsMywxLjMsMywzcy0xLjMsMy0zLDNoLTM0Yy0xLjcsMC0zLTEuMy0zLTNTMjQzLjksMjksMjQ1LjUsMjl6IE0yNDYuOSwzN2MwLjgsMi40LDMuMSw0LDUuNiw0aDIwYzIuNSwwLDQuOC0xLjYsNS43LTQKCQkJSDI0Ni45eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTkuNSwyMWMtMS4zLTMuNi00LjctNi04LjUtNmgtNDJjLTMuOCwwLTcuMiwyLjQtOC41LDZjLTMuMywwLjMtNS44LDMuMi01LjUsNi41YzAuMiwyLjksMi42LDUuMiw1LjUsNS41CgkJCWMtMS43LDQuNywwLjgsOS44LDUuNCwxMS41YzEsMC4zLDIsMC41LDMsMC41aDQyYzUsMCw5LTQsOS05YzAtMS0wLjItMi4xLTAuNS0zYzMuMy0wLjMsNS44LTMuMiw1LjUtNi41CgkJCUMxNjQuNywyMy42LDE2Mi40LDIxLjMsMTU5LjUsMjF6IE0xNTEsMTdoLTQyYy0yLjcsMC01LjIsMS42LTYuMyw0aDU0LjdDMTU2LjIsMTguNiwxNTMuNywxNywxNTEsMTd6IE0xNDEuNyw0MwoJCQljMi4xLTEuNywzLjMtNC4zLDMuMy03aC0yYzAsMy45LTMuMSw3LTcsN2gtNC4zYzIuMS0xLjcsMy4zLTQuMywzLjMtN2gtMmMwLDMuOS0zLjEsNy03LDdoLTQuM2MyLjEtMS43LDMuMy00LjMsMy4zLTdoLTIKCQkJYzAsMy45LTMuMSw3LTcsN2gtN2MtMy45LDAtNy0zLjEtNy03czMuMS03LDctN2g0MmMzLjksMCw3LDMuMSw3LDdzLTMuMSw3LTcsN0gxNDEuN3ogTTEwOSwyN2MtMywwLTUuOCwxLjUtNy41LDRIMTAxCgkJCWMtMi4yLDAtNC0xLjgtNC00czEuOC00LDQtNGg1OGMyLjIsMCw0LDEuOCw0LDRzLTEuOCw0LTQsNGgtMC41Yy0xLjctMi41LTQuNS00LTcuNS00SDEwOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzksMTE1YzQuNCwwLDgtMy42LDgtOHMtMy42LTgtOC04cy04LDMuNi04LDhTMzQuNiwxMTUsMzksMTE1eiBNNDUsMTA3YzAsMy4zLTIuNyw2LTYsNnMtNi0yLjctNi02CgkJCXMyLjctNiw2LTZTNDUsMTAzLjcsNDUsMTA3eiBNNDIsNzh2LTJoOHYtNkg0MGMtMi4yLDAtNCwxLjgtNCw0djEwSDIybC0xLjMsNEwyMCw5MGgyLjJsMy44LDQwaDI2bDMuOC00MEg1OGwtMC43LTJMNTYsODRINDJWNzh6CgkJCSBNMzgsNzR2MTBoMlY3NGg4di0yaC04QzM4LjksNzIsMzgsNzIuOSwzOCw3NHogTTQwLDg2aDE0LjZsMC43LDJIMjIuOGwwLjctMkg0MHogTTUzLjgsOTBIMjQuMmwzLjYsMzhoMjIuNEw1My44LDkweiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjksOTJoLTZ2NGgtNnY0aC02djE0aC0zbDAuMiwybDMuOCwzMmgzNmwzLjgtMzJsMC4yLTJoLTN2LTE0aC02di00aC02di00SDEyOXogTTE0NywxMTR2LTEyaC00djRoM3Y4SDE0NwoJCQl6IE0xNDQsMTE0di02aC00djZIMTQ0eiBNMTM4LDEyMHYtMTZoLTR2MTkuMkMxMzUuNiwxMjIuNSwxMzcsMTIxLjQsMTM4LDEyMHogTTEzMiwxMjMuOFYxMDBoLTR2MjMuOAoJCQlDMTI5LjMsMTI0LjEsMTMwLjcsMTI0LjEsMTMyLDEyMy44eiBNMTI2LDEyMy4yVjEwNGgtNHYxNkMxMjMsMTIxLjQsMTI0LjQsMTIyLjUsMTI2LDEyMy4yeiBNMTIwLDExNHYtNmgtNHY2SDEyMHogTTExNCwxMTR2LThoMwoJCQl2LTRoLTR2MTJIMTE0eiBNMTQxLDEwMnYtNGgtNHY0aDN2NGgxVjEwMnogTTEzNSwxMDJ2LThoLTR2NGgzdjRIMTM1eiBNMTI5LDk4di00aC00djhoMXYtNEgxMjl6IE0xMjMsMTAydi00aC00djhoMXYtNEgxMjN6CgkJCSBNMTMwLDEyNmM1LjksMCwxMC45LTQuMiwxMS44LTEwaDcuOWwtMy41LDMwaC0zMi40bC0zLjUtMzBoNy45QzExOS4xLDEyMS44LDEyNC4xLDEyNiwxMzAsMTI2eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMTIsODZ2MmgtNHYtMkgyMTJ6IE0yMTYsODZoLTJ2MmgyVjg2eiBNMTk2LDg2TDE5Niw4NmMtMi43LDAuNy00LjUsMy4zLTMuOSw2YzAuNCwxLjgsMS42LDMuMiwzLjMsMy44CgkJCWwwLjEsMC4ybDEuMSw0LjVjMC4yLDAuOSwxLDEuNSwxLjksMS41bDAsMGw3LDI0LjZjMC4yLDAuOSwxLDEuNCwxLjksMS40aDVjMC45LDAsMS43LTAuNiwxLjktMS40bDctMjQuNmMwLjksMCwxLjctMC42LDEuOS0xLjUKCQkJbDEuMS00LjVsMC4xLTAuMmMyLjYtMC45LDQuMS0zLjcsMy4yLTYuM2MtMC42LTEuNy0yLTMtMy44LTMuM1Y4NmMwLTcuNy02LjMtMTQtMTQtMTRTMTk2LDc4LjMsMTk2LDg2eiBNMjAwLDg2aDZ2MmgtOQoJCQljLTEuNywwLTMsMS4zLTMsM3MxLjMsMywzLDNoMjZjMS43LDAsMy0xLjMsMy0zcy0xLjMtMy0zLTNoLTN2LTJoMmMwLTYuNi01LjQtMTItMTItMTJzLTEyLDUuNC0xMiwxMkgyMDB6IE0xOTguNiwxMDBsLTEtNGgyNC45CgkJCWwtMSw0SDE5OC42eiBNMjA3LjUsMTI2bC02LjktMjRoMTguN2wtNi45LDI0SDIwNy41eiBNMTUwLDI0MmMxMi4yLDAsMjItOS44LDIyLTIycy05LjgtMjItMjItMjJzLTIyLDkuOC0yMiwyMgoJCQlTMTM3LjgsMjQyLDE1MCwyNDJ6IE0xNzQsMjIwYzAsMTMuMy0xMC43LDI0LTI0LDI0cy0yNC0xMC43LTI0LTI0bDAsMGMwLTEzLjMsMTAuNy0yNCwyNC0yNFMxNzQsMjA2LjcsMTc0LDIyMHogTTE0NS42LDIzNy43CgkJCWwyLTAuOWMxLjUtMC42LDMuMi0wLjYsNC43LDBsMiwwLjljMC45LDAuNCwyLDAsMi41LTAuOGwxLjEtMS45YzAuOC0xLjQsMi4yLTIuNCwzLjgtMi44bDIuMS0wLjVjMS0wLjIsMS42LTEuMSwxLjUtMi4xbC0wLjItMi4yCgkJCWMtMC4xLTEuNiwwLjQtMy4yLDEuNC00LjVsMS40LTEuN2MwLjctMC44LDAuNy0xLjksMC0yLjZsLTEuNC0xLjdjLTEuMS0xLjItMS42LTIuOC0xLjQtNC41bDAuMi0yLjJjMC4xLTEtMC42LTEuOS0xLjYtMi4xCgkJCWwtMi4xLTAuNWMtMS42LTAuNC0zLTEuNC0zLjgtMi44bC0xLjEtMS45Yy0wLjUtMC45LTEuNi0xLjItMi41LTAuOGwtMiwwLjljLTEuNSwwLjYtMy4yLDAuNi00LjcsMGwtMi0wLjljLTAuOS0wLjQtMiwwLTIuNSwwLjgKCQkJbC0xLDIuMWMtMC44LDEuNC0yLjIsMi40LTMuOCwyLjhsLTIuMSwwLjVjLTEsMC4yLTEuNiwxLjEtMS41LDIuMWwwLjIsMi4yYzAuMSwxLjYtMC40LDMuMi0xLjQsNC41bC0xLjQsMS43CgkJCWMtMC43LDAuOC0wLjcsMS45LDAsMi42bDEuNCwxLjdjMS4xLDEuMiwxLjYsMi44LDEuNCw0LjVsLTAuMiwyLjJjLTAuMSwxLDAuNiwxLjksMS42LDIuMWwyLjEsMC41YzEuNiwwLjQsMywxLjQsMy44LDIuOGwxLjEsMS45CgkJCUMxNDMuNiwyMzcuOCwxNDQuNywyMzguMSwxNDUuNiwyMzcuN0wxNDUuNiwyMzcuN3ogTTE0OC40LDIzOC43YzEtMC40LDIuMS0wLjQsMy4xLDBsMiwwLjljMS44LDAuOCw0LDAuMSw1LTEuNmwxLjEtMS45CgkJCWMwLjYtMC45LDEuNS0xLjYsMi41LTEuOGwyLjEtMC41YzEuOS0wLjQsMy4zLTIuMywzLjEtNC4ybC0wLjItMi4yYy0wLjEtMS4xLDAuMy0yLjIsMS0zbDEuNC0xLjdjMS4zLTEuNSwxLjMtMy43LDAtNS4ybC0xLjQtMS43CgkJCWMtMC43LTAuOC0xLjEtMS45LTEtM2wwLjItMi4yYzAuMi0yLTEuMS0zLjgtMy4xLTQuMmwtMi4xLTAuNWMtMS4xLTAuMi0yLTAuOS0yLjUtMS44bC0xLjEtMS45Yy0xLTEuNy0zLjItMi40LTUtMS42bC0yLDAuOQoJCQljLTEsMC40LTIuMSwwLjQtMy4xLDBsLTItMC45Yy0xLjgtMC44LTQtMC4xLTUsMS42bC0xLjEsMS45Yy0wLjYsMC45LTEuNSwxLjYtMi41LDEuOGwtMi4xLDAuNWMtMS45LDAuNC0zLjMsMi4zLTMuMSw0LjJsMC4yLDIuMgoJCQljMC4xLDEuMS0wLjMsMi4yLTEsM2wtMS40LDEuN2MtMS4zLDEuNS0xLjMsMy43LDAsNS4ybDEuNCwxLjdjMC43LDAuOCwxLjEsMS45LDEsM2wtMC4yLDIuMmMtMC4yLDIsMS4xLDMuOCwzLjEsNC4ybDIuMSwwLjUKCQkJYzEuMSwwLjIsMiwwLjksMi41LDEuOGwxLjEsMS45YzEsMS43LDMuMiwyLjQsNSwxLjZMMTQ4LjQsMjM4Ljd6IE0xNTIsMjA3YzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMQoJCQlTMTUyLDIwNy42LDE1MiwyMDd6IE0xNTgsMjA5YzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMVMxNTgsMjA5LjYsMTU4LDIwOXogTTE0NywyMTBjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMQoJCQlzLTAuNCwxLTEsMVMxNDcsMjEwLjYsMTQ3LDIxMHogTTE0MSwyMTBjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMXMtMC40LDEtMSwxUzE0MSwyMTAuNiwxNDEsMjEweiBNMTQ0LDIwNWMwLTAuNiwwLjQtMSwxLTEKCQkJczEsMC40LDEsMXMtMC40LDEtMSwxUzE0NCwyMDUuNiwxNDQsMjA1eiBNMTM2LDIxM2MwLTAuNiwwLjQtMSwxLTFzMSwwLjQsMSwxcy0wLjQsMS0xLDFTMTM2LDIxMy42LDEzNiwyMTN6IE0xMzksMjE5CgkJCWMwLTAuNiwwLjQtMSwxLTFzMSwwLjQsMSwxcy0wLjQsMS0xLDFTMTM5LDIxOS42LDEzOSwyMTl6IE0xMzksMjI1YzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMVMxMzksMjI1LjYsMTM5LDIyNXoKCQkJIE0xNDMsMjMyYzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMVMxNDMsMjMyLjYsMTQzLDIzMnogTTE0OCwyMzBjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMXMtMC40LDEtMSwxCgkJCVMxNDgsMjMwLjYsMTQ4LDIzMHogTTE1MywyMzRjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMXMtMC40LDEtMSwxUzE1MywyMzQuNiwxNTMsMjM0eiBNMTU3LDIyOGMwLTAuNiwwLjQtMSwxLTFzMSwwLjQsMSwxCgkJCXMtMC40LDEtMSwxUzE1NywyMjguNiwxNTcsMjI4eiBNMTYzLDIyNGMwLTAuNiwwLjQtMSwxLTFzMSwwLjQsMSwxcy0wLjQsMS0xLDFTMTYzLDIyNC42LDE2MywyMjR6IE0xNTksMjIxYzAtMC42LDAuNC0xLDEtMQoJCQlzMSwwLjQsMSwxcy0wLjQsMS0xLDFTMTU5LDIyMS42LDE1OSwyMjF6IE0xNjMsMjE4YzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMVMxNjMsMjE4LjYsMTYzLDIxOHogTTE1OCwyMTQKCQkJYzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMVMxNTgsMjE0LjYsMTU4LDIxNHogTTEzNCwyMjBjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMXMtMC40LDEtMSwxUzEzNCwyMjAuNiwxMzQsMjIwegoJCQkgTTE1MCwyMjVjMi44LDAsNS0yLjIsNS01cy0yLjItNS01LTVzLTUsMi4yLTUsNVMxNDcuMiwyMjUsMTUwLDIyNXogTTE1NywyMjBjMCwzLjktMy4xLDctNyw3cy03LTMuMS03LTdzMy4xLTcsNy03CgkJCVMxNTcsMjE2LjEsMTU3LDIyMHogTTI0MywxOTFjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMmMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgyNDN6IE0yNjIsMjAwYzAtMC42LDAuNC0xLDEtMWgyCgkJCWMwLjYsMCwxLDAuNCwxLDFzLTAuNCwxLTEsMWgtMkMyNjIuNCwyMDEsMjYyLDIwMC42LDI2MiwyMDB6IE0yNDgsMjA1Yy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDJjMC42LDAsMS0wLjQsMS0xcy0wLjQtMS0xLTEKCQkJSDI0OHogTTIyMywyMDZjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMmMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgyMjN6IE0yMjgsMjEwYy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDIKCQkJYzAuNiwwLDEtMC40LDEtMXMtMC40LTEtMS0xSDIyOHogTTIzNywyMTBjMC0wLjYsMC40LTEsMS0xaDJjMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFoLTJDMjM3LjQsMjExLDIzNywyMTAuNiwyMzcsMjEwegoJCQkgTTI1MiwyMTFjMC0wLjYsMC40LTEsMS0xaDJjMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFoLTJDMjUyLjQsMjEyLDI1MiwyMTEuNiwyNTIsMjExeiBNMjY0LDIwOWMtMC42LDAtMSwwLjQtMSwxczAuNCwxLDEsMWgyCgkJCWMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgyNjR6IE0yNTMsMTk1YzAtMC42LDAuNC0xLDEtMWgyYzAuNiwwLDEsMC40LDEsMXMtMC40LDEtMSwxaC0yQzI1My40LDE5NiwyNTMsMTk1LjYsMjUzLDE5NXoKCQkJIE0yMzQsMTk1Yy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDJjMC42LDAsMS0wLjQsMS0xcy0wLjQtMS0xLTFIMjM0eiBNMjQwLDIwMGMwLTAuNiwwLjQtMSwxLTFoMmMwLjYsMCwxLDAuNCwxLDFzLTAuNCwxLTEsMQoJCQloLTJDMjQwLjQsMjAxLDI0MCwyMDAuNiwyNDAsMjAweiBNMjE1LDIxNWMwLTAuNSwwLTAuOSwwLTEuNGMtMi41LTEuMS0zLjctNC0yLjYtNi42YzAuMi0wLjUsMC41LTEsMC45LTEuNGMtMC45LTIsMC00LjIsMS45LTUuMgoJCQljLTAuOC0yLjYsMC43LTUuNCwzLjQtNi4ybDAsMGMwLjQtMC41LDAuOS0wLjksMS41LTEuMWMwLjUtMi43LDMuMS00LjUsNS44LTQuMWMwLjcsMC4xLDEuNCwwLjQsMiwwLjhjNS4zLTMuOCwxMS42LTUuOSwxOC4yLTUuOQoJCQljNi44LDAsMTMuMSwyLjIsMTguMiw1LjljMi4zLTEuNiw1LjQtMSw3LDEuM2MwLjQsMC42LDAuNywxLjMsMC44LDJjMC42LDAuMiwxLjEsMC42LDEuNSwxLjFjMi43LDAuOCw0LjIsMy41LDMuNCw2LjJsMCwwCgkJCWMxLjksMSwyLjcsMy4yLDEuOSw1LjJjMS45LDIsMS44LDUuMi0wLjIsN2MtMC40LDAuNC0wLjksMC43LTEuNSwxYzAsMC41LDAsMC45LDAsMS40djFoLTYydi0xSDIxNXogTTIxNS44LDIwNy44CgkJCWMtMC4zLDEuMi0wLjUsMi40LTAuNiwzLjZjLTEuMy0xLTEuNi0yLjktMC42LTQuMmwwLDBDMjE1LDIwNy41LDIxNS40LDIwNy43LDIxNS44LDIwNy44TDIxNS44LDIwNy44eiBNMjE3LjMsMjAzLjIKCQkJYy0wLjQsMC45LTAuNywxLjgtMSwyLjdjLTEtMC40LTEuNi0xLjUtMS4zLTIuNWMwLjItMC41LDAuNi0wLjksMS4xLTEuMkMyMTYuNSwyMDIuNiwyMTYuOSwyMDIuOSwyMTcuMywyMDMuMkwyMTcuMywyMDMuMnoKCQkJIE0yMTkuNiwxOTguN2MtMC41LDAuOS0xLDEuOC0xLjUsMi43Yy0xLjMtMS0xLjUtMi45LTAuNS00LjJjMC4xLTAuMiwwLjMtMC4zLDAuNC0wLjVDMjE4LjMsMTk3LjYsMjE4LjksMTk4LjMsMjE5LjYsMTk4LjcKCQkJTDIxOS42LDE5OC43eiBNMjIwLjgsMTk3YzAuNC0wLjUsMC43LTEsMS4xLTEuNWMtMC4zLTAuNS0wLjktMC43LTEuNC0wLjRzLTAuNywwLjktMC40LDEuNEMyMjAuMywxOTYuNywyMjAuNSwxOTYuOSwyMjAuOCwxOTcKCQkJTDIyMC44LDE5N3ogTTIyNi4xLDE5MS4yYy0xLDAuOS0yLDEuOC0yLjksMi44Yy0wLjMtMC4zLTAuNy0wLjYtMS4xLTAuOGMwLjQtMS42LDIuMS0yLjUsMy43LTIuMQoJCQlDMjI1LjksMTkxLjEsMjI2LDE5MS4yLDIyNi4xLDE5MS4yTDIyNi4xLDE5MS4yeiBNMjY4LjgsMTk0Yy0wLjktMS0xLjktMS45LTIuOS0yLjhjMS41LTAuNiwzLjMsMC4xLDMuOSwxLjcKCQkJYzAsMC4xLDAuMSwwLjIsMC4xLDAuM0MyNjkuNSwxOTMuNCwyNjkuMSwxOTMuNiwyNjguOCwxOTRMMjY4LjgsMTk0eiBNMjcwLjEsMTk1LjVjMC40LDAuNSwwLjgsMSwxLjEsMS40CgkJCWMwLjUtMC4xLDAuOS0wLjcsMC44LTEuMnMtMC43LTAuOS0xLjItMC44QzI3MC41LDE5NS4xLDI3MC4zLDE5NS4zLDI3MC4xLDE5NS41eiBNMjczLjksMjAxLjRjLTAuNS0wLjktMS0xLjgtMS41LTIuNwoJCQljMC44LTAuNCwxLjQtMS4xLDEuNi0yYzEuMywxLjEsMS40LDMsMC40LDQuMkMyNzQuMiwyMDEuMSwyNzQsMjAxLjIsMjczLjksMjAxLjR6IE0yNzUuNiwyMDUuOWMtMC4zLTAuOS0wLjYtMS44LTEtMi43CgkJCWMwLjQtMC4zLDAuOC0wLjYsMS4yLTFjMSwwLjUsMS40LDEuNywxLDIuN0MyNzYuNiwyMDUuMywyNzYuMiwyMDUuNywyNzUuNiwyMDUuOXogTTI3Ni44LDIxMS40Yy0wLjEtMS4yLTAuNC0yLjQtMC42LTMuNgoJCQljMC41LTAuMSwwLjktMC40LDEuMi0wLjZDMjc4LjQsMjA4LjUsMjc4LjEsMjEwLjQsMjc2LjgsMjExLjRMMjc2LjgsMjExLjRMMjc2LjgsMjExLjR6IE0yNzUsMjE0Yy0wLjUtMTYtMTMuOS0yOC42LTI5LjktMjguMQoJCQljLTE1LjMsMC41LTI3LjYsMTIuOC0yOC4xLDI4LjFIMjc1TDI3NSwyMTR6IE03Mi4zLDE5OC4xYy0wLjItMC4zLTAuMy0wLjctMC4zLTEuMXYtMTJoLTJ2MTJjMCwyLjIsMS44LDQsNCw0CgkJCWMxLjIsMCwyLjMtMC41LDMuMS0xLjRjMC42LTAuNywwLjktMS42LDAuOS0yLjV2LTEyaC0ydjEyYzAsMS4xLTAuOSwyLTIsMmwwLDBDNzMuMywxOTksNzIuNywxOTguNyw3Mi4zLDE5OC4xeiBNNzUsMTc2CgkJCWMwLjQsMCwwLjcsMCwxLjEtMC4xYzAuNSwyLjIsMi42LDMuNSw0LjgsM2MwLjUtMC4xLDEtMC4zLDEuNC0wLjZjMS4xLDIuMSwxLjcsNC40LDEuNyw2Ljd2MjRjMCwzLjMtMi43LDYtNiw2aC0zdjkKCQkJYzAsMi44LTIuMiw1LTUsNXMtNS0yLjItNS01di05aC0zYy0zLjMsMC02LTIuNy02LTZ2LTI0YzAtNy43LDYuMy0xNCwxNC0xNEM3MCwxNzMuOCw3Mi4yLDE3Niw3NSwxNzZ6IE01OCwxOTF2MTIKCQkJYzAsMC44LDAuNSwxLjUsMS4yLDEuOGMwLjksMC40LDEuOSwwLjEsMi40LTAuN2MwLjItMC4zLDAuMy0wLjcsMC4zLTEuMXYtMTJoMnYxMmMwLDIuMi0xLjcsNC0zLjksNGMtMC41LDAtMS0wLjEtMS40LTAuMgoJCQljLTAuMi0wLjEtMC40LTAuMi0wLjctMC4zdjIuNWMwLDIuMiwxLjgsNCw0LDRoMTZjMi4yLDAsNC0xLjgsNC00di0yNGMwLTEuNS0wLjItMi45LTAuNy00LjJjLTAuNCwwLjEtMC45LDAuMi0xLjMsMC4yCgkJCWMtMi4xLDAtNC4xLTEuMS01LjItM2MtMy0wLjEtNS42LTItNi41LTQuOUM2Mi40LDE3NCw1OCwxNzksNTgsMTg1VjE5MXogTTY3LDIxNXY5YzAsMS43LDEuMywzLDMsM3MzLTEuMywzLTN2LTlINjd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0xNywxOTFjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMmMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgtMTd6IE0yLDIwMGMwLTAuNiwwLjQtMSwxLTFoMgoJCQljMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFIM0MyLjQsMjAxLDIsMjAwLjYsMiwyMDB6IE0tMTIsMjA1Yy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDJjMC42LDAsMS0wLjQsMS0xcy0wLjQtMS0xLTFILTEyegoJCQkgTS0zNywyMDZjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMmMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgtMzd6IE0tMzIsMjEwYy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDJjMC42LDAsMS0wLjQsMS0xCgkJCXMtMC40LTEtMS0xSC0zMnogTS0yMywyMTBjMC0wLjYsMC40LTEsMS0xaDJjMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFoLTJDLTIyLjYsMjExLTIzLDIxMC42LTIzLDIxMHogTS04LDIxMWMwLTAuNiwwLjQtMSwxLTEKCQkJaDJjMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFoLTJDLTcuNiwyMTItOCwyMTEuNi04LDIxMXogTTQsMjA5Yy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDJjMC42LDAsMS0wLjQsMS0xcy0wLjQtMS0xLTFINHoKCQkJIE0tNywxOTVjMC0wLjYsMC40LTEsMS0xaDJjMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFoLTJDLTYuNiwxOTYtNywxOTUuNi03LDE5NXogTS0yNiwxOTVjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMgoJCQljMC42LDAsMS0wLjQsMS0xcy0wLjQtMS0xLTFILTI2eiBNLTIwLDIwMGMwLTAuNiwwLjQtMSwxLTFoMmMwLjYsMCwxLDAuNCwxLDFzLTAuNCwxLTEsMWgtMkMtMTkuNiwyMDEtMjAsMjAwLjYtMjAsMjAweiBNLTQ1LDIxNQoJCQljMC0wLjUsMC0wLjksMC0xLjRjLTIuNS0xLjEtMy43LTQtMi42LTYuNmMwLjItMC41LDAuNS0xLDAuOS0xLjRjLTAuOS0yLDAtNC4yLDEuOS01LjJjLTAuOC0yLjYsMC43LTUuNCwzLjQtNi4ybDAsMAoJCQljMC40LTAuNSwwLjktMC45LDEuNS0xLjFjMC41LTIuNywzLjEtNC41LDUuOC00LjFjMC43LDAuMSwxLjQsMC40LDIsMC44YzUuMy0zLjgsMTEuNi01LjksMTguMi01LjljNi44LDAsMTMuMSwyLjIsMTguMiw1LjkKCQkJYzIuMy0xLjYsNS40LTEsNywxLjNjMC40LDAuNiwwLjcsMS4zLDAuOCwyYzAuNiwwLjIsMS4xLDAuNiwxLjUsMS4xYzIuNywwLjgsNC4yLDMuNSwzLjQsNi4ybDAsMGMxLjksMSwyLjcsMy4yLDEuOSw1LjIKCQkJYzEuOSwyLDEuOCw1LjItMC4yLDdjLTAuNCwwLjQtMC45LDAuNy0xLjUsMWMwLDAuNSwwLDAuOSwwLDEuNHYxaC02MnYtMUgtNDV6IE0tNDQuMiwyMDcuOGMtMC4zLDEuMi0wLjUsMi40LTAuNiwzLjYKCQkJYy0xLjMtMS0xLjYtMi45LTAuNi00LjJsMCwwQy00NSwyMDcuNS00NC42LDIwNy43LTQ0LjIsMjA3LjhMLTQ0LjIsMjA3Ljh6IE0tNDIuNywyMDMuMmMtMC40LDAuOS0wLjcsMS44LTEsMi43CgkJCWMtMS0wLjQtMS42LTEuNS0xLjMtMi41YzAuMi0wLjUsMC42LTAuOSwxLjEtMS4yQy00My41LDIwMi42LTQzLjEsMjAyLjktNDIuNywyMDMuMkwtNDIuNywyMDMuMnogTS00MC40LDE5OC43CgkJCWMtMC41LDAuOS0xLDEuOC0xLjUsMi43Yy0xLjMtMS0xLjUtMi45LTAuNS00LjJjMC4xLTAuMiwwLjMtMC4zLDAuNC0wLjVDLTQxLjcsMTk3LjYtNDEuMSwxOTguMy00MC40LDE5OC43eiBNLTM5LjIsMTk3CgkJCWMwLjMtMC41LDAuNy0xLDEuMS0xLjVjLTAuMy0wLjUtMC45LTAuNy0xLjQtMC40cy0wLjcsMC45LTAuNCwxLjRDLTM5LjcsMTk2LjctMzkuNSwxOTYuOS0zOS4yLDE5N0wtMzkuMiwxOTd6IE0tMzMuOSwxOTEuMgoJCQljLTEsMC45LTIsMS44LTIuOSwyLjhjLTAuMy0wLjMtMC43LTAuNi0xLjEtMC44YzAuNC0xLjYsMi4xLTIuNSwzLjctMi4xQy0zNC4xLDE5MS4xLTM0LDE5MS4yLTMzLjksMTkxLjJMLTMzLjksMTkxLjJ6IE04LjgsMTk0CgkJCWMtMC45LTEtMS45LTEuOS0yLjktMi44YzEuNS0wLjYsMy4zLDAuMSwzLjksMS43YzAsMC4xLDAuMSwwLjIsMC4xLDAuM0M5LjUsMTkzLjQsOS4xLDE5My42LDguOCwxOTRMOC44LDE5NHogTTEwLjEsMTk1LjUKCQkJYzAuNCwwLjUsMC44LDEsMS4xLDEuNGMwLjUtMC4xLDAuOS0wLjcsMC44LTEuMmMtMC4xLTAuNS0wLjctMC45LTEuMi0wLjhDMTAuNSwxOTUuMSwxMC4zLDE5NS4zLDEwLjEsMTk1LjV6IE0xMy45LDIwMS40CgkJCWMtMC41LTAuOS0wLjktMS44LTEuNS0yLjdjMC44LTAuNCwxLjQtMS4xLDEuNi0yYzEuMywxLjEsMS40LDMsMC40LDQuMkMxNC4yLDIwMS4xLDE0LDIwMS4yLDEzLjksMjAxLjR6IE0xNS43LDIwNS45CgkJCWMtMC4zLTAuOS0wLjYtMS44LTEtMi43YzAuNC0wLjMsMC44LTAuNiwxLjItMWMxLDAuNSwxLjQsMS43LDEsMi43QzE2LjYsMjA1LjMsMTYuMiwyMDUuNywxNS43LDIwNS45eiBNMTYuOCwyMTEuNAoJCQljLTAuMS0xLjItMC40LTIuNC0wLjYtMy42YzAuNS0wLjEsMC45LTAuNCwxLjItMC42QzE4LjQsMjA4LjUsMTguMSwyMTAuNCwxNi44LDIxMS40TDE2LjgsMjExLjRMMTYuOCwyMTEuNHogTTE1LDIxNAoJCQljLTAuNS0xNi0xMy45LTI4LjYtMjkuOS0yOC4xYy0xNS4zLDAuNS0yNy42LDEyLjgtMjguMSwyOC4xSDE1TDE1LDIxNHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K\");\n  background-color: #f2f0f7;\n  background-repeat: repeat;\n  background-size: 210px;\n}\n.chat-application .chat-app-window .start-chat-area {\n  height: inherit;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.chat-application .chat-app-window .start-chat-area .start-chat-icon,\n.chat-application .chat-app-window .start-chat-area .start-chat-text {\n  color: #6e6b7b;\n}\n[dir] .chat-application .chat-app-window .start-chat-area .start-chat-icon, [dir] .chat-application .chat-app-window .start-chat-area .start-chat-text {\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(34, 41, 47, 0.12) !important;\n}\n[dir] .chat-application .chat-app-window .start-chat-area .start-chat-text {\n  padding: 0.5rem 1rem;\n  border-radius: calc(0.357rem * 4);\n  cursor: pointer;\n}\n[dir] .chat-application .chat-app-window .start-chat-area .start-chat-icon {\n  border-radius: 50%;\n  padding: 2rem;\n}\n.chat-application .chat-app-window .start-chat-area .start-chat-icon svg,\n.chat-application .chat-app-window .start-chat-area .start-chat-icon i {\n  height: 4rem;\n  width: 4rem;\n  font-size: 4rem;\n}\n.chat-application .user-profile-sidebar {\n  width: 360px;\n  position: absolute;\n  transition: all 0.3s ease, background 0s, border 0s, color 0s;\n  z-index: 6;\n  bottom: 0;\n  top: 0;\n}\n[dir] .chat-application .user-profile-sidebar {\n  border-radius: 0.25rem;\n  background-color: #fff;\n}\n[dir=ltr] .chat-application .user-profile-sidebar {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  transform: translateX(110%);\n  right: 0;\n}\n[dir=rtl] .chat-application .user-profile-sidebar {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  transform: translateX(-110%);\n  left: 0;\n}\n.chat-application .user-profile-sidebar.show {\n  transition: all 0.3s ease, background 0s, border 0s, color 0s;\n}\n[dir] .chat-application .user-profile-sidebar.show {\n  transform: translateX(0%);\n}\n.chat-application .user-profile-sidebar .user-profile-header .header-profile-sidebar {\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n[dir] .chat-application .user-profile-sidebar .user-profile-header .header-profile-sidebar {\n  text-align: center;\n}\n[dir] .chat-application .user-profile-sidebar .user-profile-header .avatar {\n  margin-bottom: 1.25rem;\n}\n.chat-application .user-profile-sidebar .user-profile-sidebar-area {\n  position: relative;\n  height: calc(100% - 200px);\n}\n[dir] .chat-application .user-profile-sidebar .user-profile-sidebar-area {\n  padding: 0 2rem 1.5rem;\n}\n@media (max-width: 991.98px) {\n.content-right {\n    width: 100%;\n}\n.chat-application .sidebar-content {\n    transition: all 0.3s ease-in-out;\n    position: absolute;\n    z-index: 5;\n}\n[dir=ltr] .chat-application .sidebar-content {\n    transform: translateX(-110%);\n}\n[dir=rtl] .chat-application .sidebar-content {\n    transform: translateX(110%);\n}\n.chat-application .sidebar-content.show {\n    transition: all 0.3s ease;\n}\n[dir] .chat-application .sidebar-content.show {\n    transform: translateX(0);\n}\n}\n@media (max-width: 767.98px) {\n.chat-application .sidebar-content .sidebar-close-icon {\n    visibility: visible;\n    top: 15px;\n    line-height: 1;\n}\n[dir] .chat-application .sidebar-content .sidebar-close-icon {\n    padding: 0.65rem;\n}\n[dir=ltr] .chat-application .sidebar-content .sidebar-close-icon {\n    right: 0;\n}\n[dir=rtl] .chat-application .sidebar-content .sidebar-close-icon {\n    left: 0;\n}\n[dir=ltr] .chat-application .sidebar-content .chat-fixed-search {\n    padding-right: 2.5rem;\n}\n[dir=rtl] .chat-application .sidebar-content .chat-fixed-search {\n    padding-left: 2.5rem;\n}\n}\n@media (max-width: 575.98px) {\n.chat-application .sidebar {\n    position: unset !important;\n}\n.chat-application .sidebar-content {\n    width: 100%;\n}\n.chat-application .sidebar-content .chat-fixed-search,\n.chat-application .sidebar-content .chat-user-list-wrapper {\n    width: 100%;\n}\n.chat-application .chat-profile-sidebar {\n    width: 100%;\n}\n.chat-application .user-profile-sidebar {\n    width: 100%;\n}\n}\n.chat-app-window .user-chats {\n  position: relative;\n  height: calc(100% - 65px - 65px);\n}\n[dir] .chat-app-window .user-chats {\n  background-color: #f2f0f7;\n  padding: 1rem;\n}\n[dir] .chat-app-window .user-chats .avatar img {\n  border: 2px solid #fff;\n}\n.chat-app-window .active-chat {\n  height: inherit;\n}\n.chat-app-window .active-chat .chat-header {\n  display: flex;\n  justify-content: space-between;\n  height: 65px;\n}\n[dir] .chat-app-window .active-chat .chat-header {\n  background-color: #fff;\n  padding: 0 1rem;\n  border-bottom: 1px solid #ebe9f1;\n}\n[dir=ltr] .chat-app-window .chats .chat-avatar {\n  float: right;\n}\n[dir=rtl] .chat-app-window .chats .chat-avatar {\n  float: left;\n}\n.chat-app-window .chats .chat-body {\n  display: block;\n  overflow: hidden;\n}\n[dir=ltr] .chat-app-window .chats .chat-body {\n  margin: 10px 30px 0 0;\n}\n[dir=rtl] .chat-app-window .chats .chat-body {\n  margin: 10px 0 0 30px;\n}\n.chat-app-window .chats .chat-body .chat-content {\n  color: #fff;\n  max-width: 75%;\n}\n[dir] .chat-app-window .chats .chat-body .chat-content {\n  padding: 0.7rem 1rem;\n  clear: both;\n  background-repeat: repeat-x;\n  border-radius: 0.357rem;\n  box-shadow: 0 4px 8px 0 rgba(34, 41, 47, 0.12);\n}\n[dir=ltr] .chat-app-window .chats .chat-body .chat-content {\n  float: right;\n  margin: 0 1rem 10px 0;\n  background-image: linear-gradient(80deg, #4d148c, #661ab9);\n}\n[dir=rtl] .chat-app-window .chats .chat-body .chat-content {\n  float: left;\n  margin: 0 0 10px 1rem;\n  background-image: linear-gradient(-80deg, #4d148c, #661ab9);\n}\n[dir] .chat-app-window .chats .chat-body .chat-content p {\n  margin: 0;\n}\n[dir=ltr] .chat-app-window .chats .chat-left .chat-avatar {\n  float: left;\n}\n[dir=rtl] .chat-app-window .chats .chat-left .chat-avatar {\n  float: right;\n}\n.chat-app-window .chats .chat-left .chat-body .chat-content {\n  color: #6e6b7b;\n}\n[dir] .chat-app-window .chats .chat-left .chat-body .chat-content {\n  background: none;\n  background-color: white;\n}\n[dir=ltr] .chat-app-window .chats .chat-left .chat-body .chat-content {\n  float: left;\n  margin: 0 0 10px 1rem;\n}\n[dir=rtl] .chat-app-window .chats .chat-left .chat-body .chat-content {\n  float: right;\n  margin: 0 1rem 10px 0;\n}\n.chat-app-window .chat-app-form {\n  height: 65px;\n  display: flex;\n  align-items: center;\n}\n[dir] .chat-app-window .chat-app-form {\n  padding: 0 1rem;\n  background-color: #fff;\n  border-top: 1px solid #ebe9f1;\n}\n[dir] .chat-widget .card-header {\n  padding-top: 0.8rem;\n  padding-bottom: 0.8rem;\n}\n.chat-widget .chat-app-window .user-chats {\n  height: 390px;\n}\n[dir] .chat-widget .chat-app-window .user-chats {\n  background-color: #f8f8f8;\n}\n.chat-widget .chat-app-window .chat-app-form {\n  height: 56px;\n}\n[dir] .chat-widget .chat-app-window .chat-app-form {\n  border-top: 0;\n}\n[dir=ltr] .chat-widget .chat-app-window .chat-app-form {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .chat-widget .chat-app-window .chat-app-form {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n[dir] .chat-widget .chat-app-window .chat-app-form .input-group-text, [dir] .chat-widget .chat-app-window .chat-app-form .message {\n  border: 0;\n}\n[dir=ltr] .chat-widget .chat-app-window .chat-app-form .input-group-text, [dir=ltr] .chat-widget .chat-app-window .chat-app-form .message {\n  padding-left: 0;\n}\n[dir=rtl] .chat-widget .chat-app-window .chat-app-form .input-group-text, [dir=rtl] .chat-widget .chat-app-window .chat-app-form .message {\n  padding-right: 0;\n}\n[dir] .chat-widget .chat-app-window .chat-app-form .input-group:not(.bootstrap-touchspin):focus-within {\n  box-shadow: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #user-status-options[data-v-1805d3c2]  .custom-radio {\n  margin-bottom: 1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&scoped=true& ***!
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
        class: {
          show:
            _vm.shallShowUserProfileSidebar ||
            _vm.shallShowActiveChatContactSidebar ||
            _vm.mqShallShowLeftSidebar,
        },
        on: {
          click: function ($event) {
            _vm.mqShallShowLeftSidebar =
              _vm.shallShowActiveChatContactSidebar =
              _vm.shallShowUserProfileSidebar =
                false
          },
        },
      }),
      _vm._v(" "),
      _c("section", { staticClass: "chat-app-window" }, [
        !_vm.activeChat.contact
          ? _c("div", { staticClass: "start-chat-area" }, [
              _c(
                "div",
                { staticClass: "mb-1 start-chat-icon" },
                [
                  _c("feather-icon", {
                    attrs: { icon: "MessageSquareIcon", size: "56" },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h4",
                {
                  staticClass: "sidebar-toggle start-chat-text",
                  on: { click: _vm.startConversation },
                },
                [_vm._v("\n        Start Conversation\n      ")]
              ),
            ])
          : _c(
              "div",
              { staticClass: "active-chat" },
              [
                _c("div", { staticClass: "chat-navbar" }, [
                  _c("header", { staticClass: "chat-header" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "sidebar-toggle d-block d-lg-none mr-1",
                          },
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
                        _c("b-avatar", {
                          staticClass: "mr-1 cursor-pointer badge-minimal",
                          attrs: {
                            size: "36",
                            src: _vm.activeChat.contact.avatar,
                            badge: "",
                            "badge-variant": _vm.resolveAvatarBadgeVariant(
                              _vm.activeChat.contact.status
                            ),
                          },
                          nativeOn: {
                            click: function ($event) {
                              _vm.shallShowActiveChatContactSidebar = true
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("h6", { staticClass: "mb-0" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.activeChat.contact.fullName) +
                              "\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c("feather-icon", {
                          staticClass: "cursor-pointer d-sm-block d-none mr-1",
                          attrs: { icon: "PhoneCallIcon", size: "17" },
                        }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "cursor-pointer d-sm-block d-none mr-1",
                          attrs: { icon: "VideoIcon", size: "17" },
                        }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "cursor-pointer d-sm-block d-none mr-50",
                          attrs: { icon: "SearchIcon", size: "17" },
                        }),
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
                                  "toggle-class": "p-0",
                                  right: "",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "button-content",
                                    fn: function () {
                                      return [
                                        _c("feather-icon", {
                                          staticClass: "align-middle text-body",
                                          attrs: {
                                            icon: "MoreVerticalIcon",
                                            size: "17",
                                          },
                                        }),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ]),
                              },
                              [
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v(
                                    "\n                  View Contact\n                "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v(
                                    "\n                  Mute Notifications\n                "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v(
                                    "\n                  Block Contact\n                "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v(
                                    "\n                  Clear Chat\n                "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [
                                  _vm._v(
                                    "\n                  Report\n                "
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
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "vue-perfect-scrollbar",
                  {
                    ref: "refChatLogPS",
                    staticClass: "user-chats scroll-area",
                    attrs: { settings: _vm.perfectScrollbarSettings },
                  },
                  [
                    _c("chat-log", {
                      attrs: {
                        "chat-data": _vm.activeChat,
                        "profile-user-avatar":
                          _vm.profileUserDataMinimal.avatar,
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form",
                  {
                    staticClass: "chat-app-form",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.sendMessage.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c(
                      "b-input-group",
                      {
                        staticClass: "input-group-merge form-send-message mr-1",
                      },
                      [
                        _c("b-form-input", {
                          attrs: { placeholder: "Enter your message" },
                          model: {
                            value: _vm.chatInputMessage,
                            callback: function ($$v) {
                              _vm.chatInputMessage = $$v
                            },
                            expression: "chatInputMessage",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      { attrs: { variant: "primary", type: "submit" } },
                      [_vm._v("\n          Send\n        ")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
      ]),
      _vm._v(" "),
      _c("chat-active-chat-content-details-sidedbar", {
        attrs: {
          "shall-show-active-chat-contact-sidebar":
            _vm.shallShowActiveChatContactSidebar,
          contact: _vm.activeChat.contact || {},
        },
        on: {
          "update:shallShowActiveChatContactSidebar": function ($event) {
            _vm.shallShowActiveChatContactSidebar = $event
          },
          "update:shall-show-active-chat-contact-sidebar": function ($event) {
            _vm.shallShowActiveChatContactSidebar = $event
          },
        },
      }),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "content-renderer-sidebar-left" } },
        [
          _c("chat-left-sidebar", {
            attrs: {
              "chats-contacts": _vm.chatsContacts,
              contacts: _vm.contacts,
              "active-chat-contact-id": _vm.activeChat.contact
                ? _vm.activeChat.contact.id
                : null,
              "shall-show-user-profile-sidebar":
                _vm.shallShowUserProfileSidebar,
              "profile-user-data": _vm.profileUserData,
              "profile-user-minimal-data": _vm.profileUserDataMinimal,
              "mq-shall-show-left-sidebar": _vm.mqShallShowLeftSidebar,
            },
            on: {
              "update:shallShowUserProfileSidebar": function ($event) {
                _vm.shallShowUserProfileSidebar = $event
              },
              "update:shall-show-user-profile-sidebar": function ($event) {
                _vm.shallShowUserProfileSidebar = $event
              },
              "update:mqShallShowLeftSidebar": function ($event) {
                _vm.mqShallShowLeftSidebar = $event
              },
              "update:mq-shall-show-left-sidebar": function ($event) {
                _vm.mqShallShowLeftSidebar = $event
              },
              "show-user-profile": _vm.showUserProfileSidebar,
              "open-chat": _vm.openChatOfContact,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=7902f169&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=7902f169& ***!
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
    "div",
    {
      staticClass: "user-profile-sidebar",
      class: { show: _vm.shallShowActiveChatContactSidebar },
    },
    [
      _vm.contact
        ? _c("header", { staticClass: "user-profile-header" }, [
            _c(
              "span",
              { staticClass: "close-icon" },
              [
                _c("feather-icon", {
                  attrs: { icon: "XIcon" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit(
                        "update:shall-show-active-chat-contact-sidebar",
                        false
                      )
                    },
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "header-profile-sidebar" }, [
              _c(
                "div",
                { staticClass: "avatar box-shadow-1 avatar-xl avatar-border" },
                [
                  _c("b-avatar", {
                    attrs: { size: "70", src: _vm.contact.avatar },
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "avatar-status-xl",
                    class: "avatar-status-" + _vm.contact.status,
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "chat-user-name" }, [
                _vm._v(
                  "\n        " + _vm._s(_vm.contact.fullName) + "\n      "
                ),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "user-post text-capitalize" }, [
                _vm._v(_vm._s(_vm.contact.role)),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "user-profile-sidebar-area scroll-area",
          attrs: { settings: _vm.perfectScrollbarSettings },
        },
        [
          _c("h6", { staticClass: "section-label mb-1" }, [
            _vm._v("\n      About\n    "),
          ]),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.contact.about))]),
          _vm._v(" "),
          _c("div", { staticClass: "personal-info" }, [
            _c("h6", { staticClass: "section-label mb-1 mt-3" }, [
              _vm._v("\n        Personal Information\n      "),
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "list-unstyled" }, [
              _c(
                "li",
                { staticClass: "mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "MailIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("lucifer@email.com"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "PhoneCallIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("+1(123) 456 - 7890"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "ClockIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Mon - Fri 10AM - 8PM"),
                  ]),
                ],
                1
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "more-options" }, [
            _c("h6", { staticClass: "section-label mb-1 mt-3" }, [
              _vm._v("\n        Options\n      "),
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "list-unstyled" }, [
              _c(
                "li",
                { staticClass: "cursor-pointer mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "TagIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Add Tag"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "cursor-pointer mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "StarIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Important Contact"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "cursor-pointer mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "ImageIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Shared Media"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "cursor-pointer mb-1" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "TrashIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Delete Contact"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "cursor-pointer" },
                [
                  _c("feather-icon", {
                    staticClass: "mr-75",
                    attrs: { icon: "SlashIcon", size: "16" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Block Contact"),
                  ]),
                ],
                1
              ),
            ]),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4& ***!
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
  return _c(
    _vm.tag,
    _vm._g({ tag: "component" }, _vm.$listeners),
    [
      _c("b-avatar", {
        staticClass: "badge-minimal",
        attrs: {
          size: "42",
          src: _vm.user.avatar,
          badge: _vm.isChatContact,
          "badge-variant": _vm.resolveAvatarBadgeVariant(_vm.user.status),
          variant: "transparent",
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "chat-info flex-grow-1" }, [
        _c("h5", { staticClass: "mb-0" }, [
          _vm._v("\n      " + _vm._s(_vm.user.fullName) + "\n    "),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "card-text text-truncate" }, [
          _vm._v(
            "\n      " +
              _vm._s(
                _vm.isChatContact
                  ? _vm.user.chat.lastMessage.message
                  : _vm.user.about
              ) +
              "\n    "
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm.isChatContact
        ? _c(
            "div",
            { staticClass: "chat-meta text-nowrap" },
            [
              _c("small", { staticClass: "float-right mb-25 chat-time" }, [
                _vm._v(
                  _vm._s(
                    _vm.formatDateToMonthShort(_vm.user.chat.lastMessage.time, {
                      hour: "numeric",
                      minute: "numeric",
                    })
                  )
                ),
              ]),
              _vm._v(" "),
              _vm.user.chat.unseenMsgs
                ? _c(
                    "b-badge",
                    {
                      staticClass: "float-right",
                      attrs: { pill: "", variant: "primary" },
                    },
                    [
                      _vm._v(
                        "\n      " + _vm._s(_vm.user.chat.unseenMsgs) + "\n    "
                      ),
                    ]
                  )
                : _vm._e(),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=3e00d469&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=3e00d469& ***!
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
    _c(
      "div",
      { staticClass: "sidebar" },
      [
        _c("user-profile-sidebar", {
          attrs: {
            "shall-show-user-profile-sidebar": _vm.shallShowUserProfileSidebar,
            "profile-user-data": _vm.profileUserData,
          },
          on: {
            "close-sidebar": function ($event) {
              return _vm.$emit("update:shall-show-user-profile-sidebar", false)
            },
          },
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "sidebar-content",
            class: { show: _vm.mqShallShowLeftSidebar },
          },
          [
            _c(
              "span",
              { staticClass: "sidebar-close-icon" },
              [
                _c("feather-icon", {
                  attrs: { icon: "XIcon", size: "16" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit(
                        "update:mq-shall-show-left-sidebar",
                        false
                      )
                    },
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "chat-fixed-search" }, [
              _c(
                "div",
                { staticClass: "d-flex align-items-center w-100" },
                [
                  _c(
                    "div",
                    { staticClass: "sidebar-profile-toggle" },
                    [
                      _c("b-avatar", {
                        staticClass:
                          "cursor-pointer badge-minimal avatar-border-2",
                        attrs: {
                          size: "42",
                          src: _vm.profileUserMinimalData.avatar,
                          variant: "transparent",
                          badge: "",
                          "badge-variant": "success",
                        },
                        nativeOn: {
                          click: function ($event) {
                            return _vm.$emit("show-user-profile")
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "input-group-merge ml-1 w-100 round" },
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
                        attrs: { placeholder: "Search..." },
                        model: {
                          value: _vm.searchQuery,
                          callback: function ($$v) {
                            _vm.searchQuery = $$v
                          },
                          expression: "searchQuery",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c(
              "vue-perfect-scrollbar",
              {
                staticClass: "chat-user-list-wrapper list-group scroll-area",
                attrs: { settings: _vm.perfectScrollbarSettings },
              },
              [
                _c("h4", { staticClass: "chat-list-title" }, [
                  _vm._v("\n          Chats\n        "),
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "chat-users-list chat-list media-list" },
                  _vm._l(_vm.filteredChatsContacts, function (contact) {
                    return _c("chat-contact", {
                      key: contact.id,
                      class: { active: _vm.activeChatContactId === contact.id },
                      attrs: {
                        user: contact,
                        tag: "li",
                        "is-chat-contact": "",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.$emit("open-chat", contact.id)
                        },
                      },
                    })
                  }),
                  1
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "chat-list-title" }, [
                  _vm._v("\n          Contacts\n        "),
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "chat-users-list contact-list media-list" },
                  _vm._l(_vm.filteredContacts, function (contact) {
                    return _c("chat-contact", {
                      key: contact.id,
                      attrs: { user: contact, tag: "li" },
                      on: {
                        click: function ($event) {
                          return _vm.$emit("open-chat", contact.id)
                        },
                      },
                    })
                  }),
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "chats" },
    _vm._l(_vm.formattedChatData.formattedChatLog, function (msgGrp, index) {
      return _c(
        "div",
        {
          key: msgGrp.senderId + String(index),
          staticClass: "chat",
          class: {
            "chat-left": msgGrp.senderId === _vm.formattedChatData.contact.id,
          },
        },
        [
          _c(
            "div",
            { staticClass: "chat-avatar" },
            [
              _c("b-avatar", {
                staticClass: "avatar-border-2 box-shadow-1",
                attrs: {
                  size: "36",
                  variant: "transparent",
                  src:
                    msgGrp.senderId === _vm.formattedChatData.contact.id
                      ? _vm.formattedChatData.contact.avatar
                      : _vm.profileUserAvatar,
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "chat-body" },
            _vm._l(msgGrp.messages, function (msgData) {
              return _c(
                "div",
                { key: msgData.time, staticClass: "chat-content" },
                [_c("p", [_vm._v(_vm._s(msgData.msg))])]
              )
            }),
            0
          ),
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=1805d3c2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=1805d3c2&scoped=true& ***!
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
    "div",
    {
      staticClass: "chat-profile-sidebar",
      class: { show: _vm.shallShowUserProfileSidebar },
    },
    [
      _c("header", { staticClass: "chat-profile-header" }, [
        _c(
          "span",
          { staticClass: "close-icon" },
          [
            _c("feather-icon", {
              attrs: { icon: "XIcon" },
              on: {
                click: function ($event) {
                  return _vm.$emit("close-sidebar")
                },
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "header-profile-sidebar" }, [
          _c(
            "div",
            { staticClass: "avatar box-shadow-1 avatar-xl avatar-border" },
            [
              _c("b-avatar", {
                attrs: { size: "70", src: _vm.profileUserData.avatar },
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "avatar-status-xl",
                class: "avatar-status-" + _vm.profileUserData.status,
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("h4", { staticClass: "chat-user-name" }, [
            _vm._v(
              "\n        " + _vm._s(_vm.profileUserData.fullName) + "\n      "
            ),
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "user-post text-capitalize" }, [
            _vm._v(_vm._s(_vm.profileUserData.role)),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "profile-sidebar-area scroll-area",
          attrs: { settings: _vm.perfectScrollbarSettings },
        },
        [
          _c("h6", { staticClass: "section-label mb-1" }, [
            _vm._v("\n      About\n    "),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "about-user" },
            [
              _c("b-form-textarea", {
                attrs: {
                  placeholder: "Something about yourself...",
                  rows: "5",
                },
                model: {
                  value: _vm.profileUserData.about,
                  callback: function ($$v) {
                    _vm.$set(_vm.profileUserData, "about", $$v)
                  },
                  expression: "profileUserData.about",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("h6", { staticClass: "section-label mb-1 mt-3" }, [
            _vm._v("\n      Status\n    "),
          ]),
          _vm._v(" "),
          _c(
            "b-form-radio-group",
            {
              attrs: { id: "user-status-options", stacked: "" },
              model: {
                value: _vm.profileUserData.status,
                callback: function ($$v) {
                  _vm.$set(_vm.profileUserData, "status", $$v)
                },
                expression: "profileUserData.status",
              },
            },
            _vm._l(_vm.userStatusOptions, function (option) {
              return _c(
                "b-form-radio",
                {
                  key: option.value,
                  class: "custom-control-" + option.radioVariant,
                  attrs: { value: option.value },
                },
                [_vm._v("\n        " + _vm._s(option.text) + "\n      ")]
              )
            }),
            1
          ),
          _vm._v(" "),
          _c("h6", { staticClass: "section-label mb-1 mt-2" }, [
            _vm._v("\n      Settings\n    "),
          ]),
          _vm._v(" "),
          _vm.profileUserData.settings
            ? _c("ul", { staticClass: "list-unstyled" }, [
                _c(
                  "li",
                  {
                    staticClass:
                      "d-flex justify-content-between align-items-center mb-1",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-75",
                          attrs: { icon: "CheckSquareIcon", size: "18" },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle" }, [
                          _vm._v("Two-step Verification"),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("b-form-checkbox", {
                      attrs: { switch: "" },
                      model: {
                        value:
                          _vm.profileUserData.settings
                            .isTwoStepAuthVerificationEnabled,
                        callback: function ($$v) {
                          _vm.$set(
                            _vm.profileUserData.settings,
                            "isTwoStepAuthVerificationEnabled",
                            $$v
                          )
                        },
                        expression:
                          "profileUserData.settings.isTwoStepAuthVerificationEnabled",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass:
                      "d-flex justify-content-between align-items-center mb-1",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-75",
                          attrs: { icon: "BellIcon", size: "18" },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle" }, [
                          _vm._v("Notification"),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("b-form-checkbox", {
                      attrs: { switch: "" },
                      model: {
                        value: _vm.profileUserData.settings.isNotificationsOn,
                        callback: function ($$v) {
                          _vm.$set(
                            _vm.profileUserData.settings,
                            "isNotificationsOn",
                            $$v
                          )
                        },
                        expression:
                          "profileUserData.settings.isNotificationsOn",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass:
                      "mb-1 d-flex align-items-center cursor-pointer",
                  },
                  [
                    _c("feather-icon", {
                      staticClass: "mr-75",
                      attrs: { icon: "UserIcon", size: "18" },
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "align-middle" }, [
                      _vm._v("Invite Friends"),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "d-flex align-items-center cursor-pointer" },
                  [
                    _c("feather-icon", {
                      staticClass: "mr-75",
                      attrs: { icon: "TrashIcon", size: "18" },
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "align-middle" }, [
                      _vm._v("Delete Account"),
                    ]),
                  ],
                  1
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-3" },
            [
              _c("b-button", { attrs: { variant: "primary" } }, [
                _vm._v("\n        Logout\n      "),
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
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/src/views/apps/chat/Chat.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_9701a608_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=9701a608&scoped=true& */ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&scoped=true&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_9701a608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_9701a608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9701a608",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_9701a608_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=9701a608&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_9701a608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_9701a608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_7902f169___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=7902f169& */ "./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=7902f169&");
/* harmony import */ var _ChatActiveChatContentDetailsSidedbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatActiveChatContentDetailsSidedbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_7902f169___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_7902f169___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatContentDetailsSidedbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatContentDetailsSidedbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=7902f169&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=7902f169& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_7902f169___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=7902f169& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatActiveChatContentDetailsSidedbar.vue?vue&type=template&id=7902f169&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_7902f169___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatActiveChatContentDetailsSidedbar_vue_vue_type_template_id_7902f169___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatContact.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatContact.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatContact.vue?vue&type=template&id=4fb83bb4& */ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&");
/* harmony import */ var _ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatContact.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/ChatContact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContact.vue?vue&type=template&id=4fb83bb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLeftSidebar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLeftSidebar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatLeftSidebar_vue_vue_type_template_id_3e00d469___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatLeftSidebar.vue?vue&type=template&id=3e00d469& */ "./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=3e00d469&");
/* harmony import */ var _ChatLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatLeftSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatLeftSidebar_vue_vue_type_template_id_3e00d469___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatLeftSidebar_vue_vue_type_template_id_3e00d469___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/ChatLeftSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLeftSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=3e00d469&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=3e00d469& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebar_vue_vue_type_template_id_3e00d469___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLeftSidebar.vue?vue&type=template&id=3e00d469& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLeftSidebar.vue?vue&type=template&id=3e00d469&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebar_vue_vue_type_template_id_3e00d469___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLeftSidebar_vue_vue_type_template_id_3e00d469___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLog.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLog.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=template&id=7c7f3250& */ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&");
/* harmony import */ var _ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/ChatLog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLog.vue?vue&type=template&id=7c7f3250& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/UserProfileSidebar.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/UserProfileSidebar.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfileSidebar_vue_vue_type_template_id_1805d3c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfileSidebar.vue?vue&type=template&id=1805d3c2&scoped=true& */ "./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=1805d3c2&scoped=true&");
/* harmony import */ var _UserProfileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfileSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserProfileSidebar_vue_vue_type_style_index_0_id_1805d3c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true& */ "./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserProfileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfileSidebar_vue_vue_type_template_id_1805d3c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfileSidebar_vue_vue_type_template_id_1805d3c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1805d3c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/UserProfileSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfileSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_style_index_0_id_1805d3c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=style&index=0&id=1805d3c2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_style_index_0_id_1805d3c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_style_index_0_id_1805d3c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_style_index_0_id_1805d3c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_style_index_0_id_1805d3c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=1805d3c2&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=1805d3c2&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_template_id_1805d3c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfileSidebar.vue?vue&type=template&id=1805d3c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfileSidebar.vue?vue&type=template&id=1805d3c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_template_id_1805d3c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfileSidebar_vue_vue_type_template_id_1805d3c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/chatStoreModule.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/chatStoreModule.js ***!
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
    fetchChatsAndContacts: function fetchChatsAndContacts() {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/apps/chat/chats-and-contacts').then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    getProfileUser: function getProfileUser() {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/apps/chat/users/profile-user').then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    getChat: function getChat(ctx, _ref) {
      var userId = _ref.userId;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/apps/chat/chats/".concat(userId)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    sendMessage: function sendMessage(ctx, _ref2) {
      var contactId = _ref2.contactId,
          message = _ref2.message,
          senderId = _ref2.senderId;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/apps/chat/chats/".concat(contactId), {
          message: message,
          senderId: senderId
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/apps/chat/useChat.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/apps/chat/useChat.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useChat; });
function useChat() {
  var resolveAvatarBadgeVariant = function resolveAvatarBadgeVariant(status) {
    if (status === 'online') return 'success';
    if (status === 'busy') return 'danger';
    if (status === 'away') return 'warning';
    return 'secondary';
  };

  return {
    resolveAvatarBadgeVariant: resolveAvatarBadgeVariant
  };
}

/***/ })

}]);