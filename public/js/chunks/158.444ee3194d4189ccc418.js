(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[158],{

/***/ "./node_modules/vue-clickaway/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vue-clickaway/index.js ***!
  \*********************************************/
/*! exports provided: version, directive, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var version = '2.2.2';

var compatible = (/^2\./).test(vue__WEBPACK_IMPORTED_MODULE_0___default.a.version);
if (!compatible) {
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + vue__WEBPACK_IMPORTED_MODULE_0___default.a.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};


/***/ }),

/***/ "./node_modules/vue-context/src/js/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vue-context/src/js/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-context */ "./node_modules/vue-context/src/js/vue-context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _vue_context__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/vue-context/src/js/normalize-slot.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-context/src/js/normalize-slot.js ***!
  \***********************************************************/
/*! exports provided: normalizeSlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSlot", function() { return normalizeSlot; });
const normalizeSlot = (name, scope = {}, $scopedSlots = {}, $slots = {}) => {
    // Note: in Vue 2.6.x, all named slots are also scoped slots
    const slot = $scopedSlots[name] || $slots[name];

    return typeof slot === 'function' ? slot(scope) : slot;
};


/***/ }),

/***/ "./node_modules/vue-context/src/js/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/vue-context/src/js/utils.js ***!
  \**************************************************/
/*! exports provided: isArray, keyCodes, eventOn, eventOff, filterVisible, getBCR, selectAll, setAttr, parentElementByClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyCodes", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOn", function() { return eventOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOff", function() { return eventOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterVisible", function() { return filterVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBCR", function() { return getBCR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttr", function() { return setAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parentElementByClassName", function() { return parentElementByClassName; });
if (! Array.from) {
    Array.from = object => {
        'use strict';

        return [].slice.call(object);
    };
}

if (! Array.isArray) {
    Array.isArray = arg => Object.prototype.toString.call(arg) === '[object Array]';
}

// --- Constants ---
const arrayFrom = Array.from;

const isArray = Array.isArray;

const keyCodes = {
    ESC: 27,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

// --- Dom Utils ---

// Returns true if the parent element contains the child element
const contains = (parent, child) => {
    if (! parent || typeof parent.contains !== 'function') {
        return false;
    }

    return parent.contains(child);
};

// Attach an event listener to an element
const eventOn = (el, eventName, handler) => {
    if (el && el.addEventListener) {
        el.addEventListener(eventName, handler);
    }
};

// Remove an event listener from an element
const eventOff = (el, eventName, handler) => {
    if (el && el.removeEventListener) {
        el.removeEventListener(eventName, handler);
    }
};

// Filter visible elements
const filterVisible = elements => (elements || []).filter(isVisible);

// Return the Bounding Client Rect of an element
// Returns `null` if not an element
const getBCR = el => (isElement(el) ? el.getBoundingClientRect() : null);

// Determine if an element is an HTML element
const isElement = el => Boolean(el && el.nodeType === Node.ELEMENT_NODE);

// Determine if an HTML element is visible - Faster than CSS check
const isVisible = el => {
    if (! isElement(el) || ! contains(document.body, el)) {
        return false;
    }

    if (el.style.display === 'none') {
        return false;
    }

    const bcr = getBCR(el);

    return Boolean(bcr && bcr.height > 0 && bcr.width > 0);
};

// Select all elements matching a selector. Returns `[]` if none found
const selectAll = (selector, root) =>
    arrayFrom((isElement(root) ? root : document).querySelectorAll(selector));

// Set an attribute on an element
const setAttr = (el, attr, value) => {
    if (attr && isElement(el)) {
        el.setAttribute(attr, value);
    }
};

const parentElementByClassName = (element, className) => {
    let parentElement = element.parentElement;

    while (parentElement !== null && !parentElement.classList.contains(className)) {
        parentElement = parentElement.parentElement;
    }

    return parentElement;
};


/***/ }),

/***/ "./node_modules/vue-context/src/js/vue-context.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-context/src/js/vue-context.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_clickaway_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-clickaway/index */ "./node_modules/vue-clickaway/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/vue-context/src/js/utils.js");
/* harmony import */ var _normalize_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-slot */ "./node_modules/vue-context/src/js/normalize-slot.js");




/* harmony default export */ __webpack_exports__["default"] = ({
    directives: {
        onClickaway: vue_clickaway_index__WEBPACK_IMPORTED_MODULE_0__["directive"]
    },

    props: {
        closeOnClick: {
            type: Boolean,
            default: true
        },
        closeOnScroll: {
            type: Boolean,
            default: true
        },
        lazy: {
            type: Boolean,
            default: false
        },
        itemSelector: {
            type: [String, Array],
            default: () => ['.v-context-item', '.v-context > li > a']
        },
        role: {
            type: String,
            default: 'menu'
        },
        subMenuOffset: {
            type: Number,
            default: 10
        },
        useScrollHeight: {
            type: Boolean,
            default: false
        },
        useScrollWidth: {
            type: Boolean,
            default: false
        },
        heightOffset: {
            type: Number,
            default: 25
        },
        widthOffset: {
            type: Number,
            default: 25
        },
        tag: {
            type: String,
            default: 'ul'
        }
    },

    computed: {
        style() {
            return this.show
                ? { top: `${this.top}px`, left: `${this.left}px` }
                : null;
        }
    },

    data() {
        return {
            top: null,
            left: null,
            show: false,
            data: null,
            localItemSelector: '',
            activeSubMenu: null
        };
    },

    created() {
        this.localItemSelector = this.mapItemSelector(this.itemSelector);
    },

    beforeDestroy() {
        if (this.closeOnScroll) {
            this.removeScrollEventListener();
        }
    },

    methods: {
        addScrollEventListener() {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["eventOn"])(window, 'scroll', this.close);
        },

        addHoverEventListener(element) {
            element.querySelectorAll('.v-context__sub').forEach(
                subMenuNode => {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["eventOn"])(subMenuNode, 'mouseenter', this.openSubMenu);
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["eventOn"])(subMenuNode, 'mouseleave', this.closeSubMenu);
                }
            );
        },

        close() {
            if (! this.show) {
                return;
            }

            // make sure all sub menus are closed
            while (this.activeSubMenu !== null) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parentElementByClassName"])(this.activeSubMenu, 'v-context__sub').dispatchEvent(new Event('mouseleave'));
            }

            this.resetData();
            this.removeHoverEventListener(this.$el);

            if (this.closeOnScroll) {
                this.removeScrollEventListener();
            }

            this.$emit('close');
        },

        focusItem(index, items) {
            const el = items.find((el, idx) => idx === index);
            el && el.focus();
        },

        focusNext(event, up) {
            if (! this.show) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            this.$nextTick(() => {
                const items = this.getItems();
                if (items.length < 1) {
                    return;
                }

                let index = items.indexOf(event.target);
                if (up && index > 0) {
                    index--;
                } else if (! up && index < items.length - 1) {
                    index++;
                }

                if (index < 0) {
                    index = 0;
                }

                this.focusItem(index, items);
            });
        },

        getItems() {
            // if a sub menu is active only return the elements of the sub menu to keep the scope
            return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["filterVisible"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["selectAll"])(this.localItemSelector, this.activeSubMenu || this.$el));
        },

        mapItemSelector(itemSelector) {
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(itemSelector)) {
                itemSelector = itemSelector
                    .map(selector => `${selector}:not(.disabled):not([disabled])`)
                    .join(', ');
            }

            return itemSelector;
        },

        onClick() {
            this.close();
        },

        onKeydown(event) {
            const key = event.keyCode;

            if (key === _utils__WEBPACK_IMPORTED_MODULE_1__["keyCodes"].ESC) {
                // Close on esc
                this.close();
            } else if (key === _utils__WEBPACK_IMPORTED_MODULE_1__["keyCodes"].DOWN) {
                // Down arrow
                this.focusNext(event, false);
            } else if (key === _utils__WEBPACK_IMPORTED_MODULE_1__["keyCodes"].UP) {
                // Up arrow
                this.focusNext(event, true);
            } else if (key === _utils__WEBPACK_IMPORTED_MODULE_1__["keyCodes"].RIGHT) {
                // check if a parent element which is associated with a sub menu can be found.
                const menuContainer = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parentElementByClassName"])(event.target, 'v-context__sub');

                // try to open a sub menu if the sub menu isn't the current sub menu
                if (menuContainer && menuContainer.getElementsByClassName('v-context')[0] !== this.activeSubMenu) {
                    menuContainer.dispatchEvent(new Event('mouseenter'));
                    this.focusNext(event, false);
                }
            } else if (key === _utils__WEBPACK_IMPORTED_MODULE_1__["keyCodes"].LEFT) {
                if (!this.activeSubMenu) {
                    return;
                }

                const parentMenu = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parentElementByClassName"])(this.activeSubMenu, 'v-context__sub');
                parentMenu.dispatchEvent(new Event('mouseleave'));

                const items = this.getItems(),
                      index = items.indexOf(parentMenu.getElementsByTagName('a')[0]);

                this.focusItem(index, items);
            }
        },

        open(event, data) {
            this.data = data;
            this.show = true;

            this.$nextTick(() => {
                [this.top, this.left] = this.positionMenu(event.clientY, event.clientX, this.$el);

                this.$el.focus();
                this.setItemRoles();
                this.addHoverEventListener(this.$el);

                if (this.closeOnScroll) {
                    this.addScrollEventListener();
                }

                this.$emit('open', event, this.data, this.top, this.left);
            });
        },

        openSubMenu(event) {
            const subMenuElement = this.getSubMenuElementByEvent(event),
                  parentMenu = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parentElementByClassName"])(subMenuElement.parentElement, 'v-context'),
                  bcr = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getBCR"])(event.target);

            // check if another sub menu is open. In this case make sure no other as well as no nested sub menu is open
            if (this.activeSubMenu !== parentMenu) {
                while (this.activeSubMenu !== null
                    && this.activeSubMenu !== parentMenu
                    && this.activeSubMenu !== subMenuElement
                ) {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parentElementByClassName"])(this.activeSubMenu, 'v-context__sub')
                        .dispatchEvent(new Event('mouseleave'));
                }
            }

            // first set the display and afterwards execute position calculation for correct element offsets
            subMenuElement.style.display = 'block';

            let [elementTop, elementLeft] = this.positionMenu(bcr.top, bcr.right - this.subMenuOffset, subMenuElement);

            subMenuElement.style.left = `${elementLeft}px`;
            subMenuElement.style.top = `${elementTop}px`;

            this.activeSubMenu = subMenuElement;
        },

        closeSubMenu(event) {
            const subMenuElement = this.getSubMenuElementByEvent(event),
                  parentMenu = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parentElementByClassName"])(subMenuElement, 'v-context');

            // if a sub menu is closed and it's not the currently active sub menu (eg. a lowe layered sub menu closed
            // by a mouseleave event) close all nested sub menus
            if (this.activeSubMenu !== subMenuElement) {
                while (this.activeSubMenu !== null && this.activeSubMenu !== subMenuElement) {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parentElementByClassName"])(this.activeSubMenu, 'v-context__sub')
                        .dispatchEvent(new Event('mouseleave'));
                }
            }

            subMenuElement.style.display = 'none';

            // check if a parent menu exists and the parent menu is a sub menu to keep track of the correct sub menu
            this.activeSubMenu = parentMenu && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parentElementByClassName"])(parentMenu, 'v-context__sub')
                ? parentMenu
                : null;
        },

        getSubMenuElementByEvent (event) {
            return event.target.getElementsByTagName('ul')[0];
        },

        positionMenu(top, left, element) {
            const elementHeight = this.useScrollHeight ? element.scrollHeight : element.offsetHeight;
            const largestHeight = window.innerHeight - elementHeight - this.heightOffset;

            const elementWidth = this.useScrollWidth ? element.scrollWidth : element.offsetWidth;
            const largestWidth = window.innerWidth - elementWidth - this.widthOffset;

            if (top > largestHeight) {
                top = largestHeight;
            }

            if (left > largestWidth) {
                left = largestWidth;
            }

            return [top, left];
        },

        removeScrollEventListener() {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["eventOff"])(window, 'scroll', this.close);
        },

        removeHoverEventListener(element) {
            element.querySelectorAll('.v-context__sub').forEach(
                (subMenuNode) => {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["eventOff"])(subMenuNode, 'mouseenter', this.openSubMenu);
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["eventOff"])(subMenuNode, 'mouseleave', this.closeSubMenu);
                }
            );
        },

        resetData() {
            this.top = null;
            this.left = null;
            this.data = null;
            this.show = false;
        },

        setItemRoles() {
            // Add role="menuitem" and tabindex="-1" to all items
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["selectAll"])(this.localItemSelector, this.$el)
                .forEach(el => {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setAttr"])(el, 'role', 'menuitem');
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setAttr"])(el, 'tabindex', '-1');
                });
        }
    },

    watch: {
        closeOnScroll(newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }

            if (newValue && this.show) {
                this.addScrollEventListener();
            } else {
                this.removeScrollEventListener();
            }
        },

        itemSelector(selector, oldValue) {
            if (selector !== oldValue) {
                this.localItemSelector = this.mapItemSelector(selector);
            }
        }
    },

    render(h) {
        if (this.lazy && ! this.show) {
            return h(false);
        }

        // Only register the events we need
        const on = {
            // `!` modifier for capture
            '!contextmenu': e => {
                e.preventDefault();
            },
            keydown: this.onKeydown // up, down, esc
        };

        if (this.closeOnClick) {
            on.click = this.onClick;
        }

        // Only register the directives we need
        const directives = [
            {
                name: 'on-clickaway',
                value: this.close,
                rawName: 'v-on-clickaway'
            }
        ];

        if (! this.lazy) {
            directives.push({
                name: 'show',
                value: this.show,
                rawName: 'v-show',
                expression: 'show'
            });
        }

        return h(
            this.tag,
            {
                staticClass: 'v-context',
                style: this.style,
                attrs: {
                    tabindex: '-1',
                    role: this.role,
                    'aria-hidden': this.lazy ? null : String(! this.show)
                },
                on,
                directives
            },
            [Object(_normalize_slot__WEBPACK_IMPORTED_MODULE_2__["normalizeSlot"])('default', { data: this.data }, this.$scopedSlots, this.$slots)]
        );
    }
});


/***/ })

}]);