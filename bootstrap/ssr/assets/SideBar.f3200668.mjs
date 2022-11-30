import { ref, resolveComponent, mergeProps, withCtx, createVNode, withModifiers, Transition, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false }
];
const _sfc_main = {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
  },
  name: "SideBar",
  props: {
    name
  },
  setup() {
    const showSideBar = ref(false);
    return {
      showSideBar,
      navigation
    };
  },
  methods: {
    logout() {
      this.$inertia.post(route("logout"));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Disclosure = resolveComponent("Disclosure");
  const _component_DisclosureButton = resolveComponent("DisclosureButton");
  const _component_Menu = resolveComponent("Menu");
  const _component_MenuButton = resolveComponent("MenuButton");
  const _component_MenuItems = resolveComponent("MenuItems");
  const _component_MenuItem = resolveComponent("MenuItem");
  const _component_DisclosurePanel = resolveComponent("DisclosurePanel");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-screen" }, _attrs))}><div class="${ssrRenderClass([{ "relative -translate-x-0": $setup.showSideBar }, "bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:translate-x-0 transform -translate-x-full transition duration-300 ease-in-out"])}"><a${ssrRenderAttr("href", _ctx.route("dashboard"))} class="flex items-center space-x-2 px-4 text-slate-300"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg><span class="font-extrabold text-white">Restaurant Menu</span></a><nav><a${ssrRenderAttr("href", _ctx.route("dashboard"))} class="${ssrRenderClass([[$props.name == "Dashboard" ? "bg-gray-900 text-white" : ""], "group flex items-center space-x-2 py-3 px-4 hover:bg-slate-900 rounded transition duration-300 text-slate-300"])}"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg><span class="text-white group-hover:text-slate-50">Dashboard</span></a><a${ssrRenderAttr("href", _ctx.route("categories.index"))} class="${ssrRenderClass([[$props.name == "Categories" ? "bg-gray-900 text-white" : ""], "group flex items-center space-x-2 py-3 px-4 hover:bg-slate-900 rounded transition duration-300 text-slate-300"])}"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="text-white group-hover:text-slate-50">Categories</span></a><a${ssrRenderAttr("href", _ctx.route("items.index"))} class="${ssrRenderClass([[$props.name == "Items" ? "bg-gray-900 text-white" : ""], "group flex items-center space-x-2 py-3 px-4 hover:bg-slate-900 rounded transition duration-300 text-slate-300"])}"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="text-white group-hover:text-slate-50">Items</span></a></nav></div><div class="flex-1">`);
  _push(ssrRenderComponent(_component_Disclosure, {
    as: "nav",
    class: "bg-gray-800"
  }, {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"${_scopeId}><div class="relative flex items-center justify-between h-16"${_scopeId}><div class="absolute inset-y-0 left-0 flex items-center sm:hidden"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_DisclosureButton, { class: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="sr-only"${_scopeId2}>Open main menu</span>`);
            } else {
              return [
                createVNode("span", { class: "sr-only" }, "Open main menu")
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</div><div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"${_scopeId}><div class="flex-shrink-0 flex items-center"${_scopeId}><h1 class="text-2x1 text-slate-50"${_scopeId}>Admin Page</h1></div><div class="hidden sm:block sm:ml-6"${_scopeId}></div></div><div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"${_scopeId}><button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"${_scopeId}><span class="sr-only"${_scopeId}>View notifications</span></button>`);
        _push2(ssrRenderComponent(_component_Menu, {
          as: "div",
          class: "ml-3 relative"
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_MenuButton, { class: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="sr-only"${_scopeId3}>Open user menu</span><img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("span", { class: "sr-only" }, "Open user menu"),
                      createVNode("img", {
                        class: "h-8 w-8 rounded-full",
                        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(`</div>`);
              _push3(ssrRenderComponent(_component_MenuItems, { class: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_MenuItem, null, {
                      default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<a href="#" class="${ssrRenderClass([
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 w-full"
                          ])}"${_scopeId4}>Your Profile</a>`);
                        } else {
                          return [
                            createVNode("a", {
                              href: "#",
                              class: [
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full"
                              ]
                            }, "Your Profile", 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_MenuItem, null, {
                      default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<a href="#" class="${ssrRenderClass([
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 w-full"
                          ])}"${_scopeId4}>Settings</a>`);
                        } else {
                          return [
                            createVNode("a", {
                              href: "#",
                              class: [
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full"
                              ]
                            }, "Settings", 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`<hr${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_MenuItem, null, {
                      default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<form${_scopeId4}><button class="${ssrRenderClass([
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 w-full"
                          ])}"${_scopeId4}> Sign out </button></form>`);
                        } else {
                          return [
                            createVNode("form", {
                              onSubmit: withModifiers($options.logout, ["prevent"])
                            }, [
                              createVNode("button", {
                                class: [
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 w-full"
                                ]
                              }, " Sign out ", 2)
                            ], 40, ["onSubmit"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_MenuItem, null, {
                        default: withCtx(({ active }) => [
                          createVNode("a", {
                            href: "#",
                            class: [
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 w-full"
                            ]
                          }, "Your Profile", 2)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MenuItem, null, {
                        default: withCtx(({ active }) => [
                          createVNode("a", {
                            href: "#",
                            class: [
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 w-full"
                            ]
                          }, "Settings", 2)
                        ]),
                        _: 1
                      }),
                      createVNode("hr"),
                      createVNode(_component_MenuItem, null, {
                        default: withCtx(({ active }) => [
                          createVNode("form", {
                            onSubmit: withModifiers($options.logout, ["prevent"])
                          }, [
                            createVNode("button", {
                              class: [
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full"
                              ]
                            }, " Sign out ", 2)
                          ], 40, ["onSubmit"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_component_MenuButton, { class: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "sr-only" }, "Open user menu"),
                      createVNode("img", {
                        class: "h-8 w-8 rounded-full",
                        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                        alt: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode(Transition, {
                  "enter-active-class": "transition ease-out duration-100",
                  "enter-from-class": "transform opacity-0 scale-95",
                  "enter-to-class": "transform opacity-100 scale-100",
                  "leave-active-class": "transition ease-in duration-75",
                  "leave-from-class": "transform opacity-100 scale-100",
                  "leave-to-class": "transform opacity-0 scale-95"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_MenuItems, { class: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                      default: withCtx(() => [
                        createVNode(_component_MenuItem, null, {
                          default: withCtx(({ active }) => [
                            createVNode("a", {
                              href: "#",
                              class: [
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full"
                              ]
                            }, "Your Profile", 2)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenuItem, null, {
                          default: withCtx(({ active }) => [
                            createVNode("a", {
                              href: "#",
                              class: [
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full"
                              ]
                            }, "Settings", 2)
                          ]),
                          _: 1
                        }),
                        createVNode("hr"),
                        createVNode(_component_MenuItem, null, {
                          default: withCtx(({ active }) => [
                            createVNode("form", {
                              onSubmit: withModifiers($options.logout, ["prevent"])
                            }, [
                              createVNode("button", {
                                class: [
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 w-full"
                                ]
                              }, " Sign out ", 2)
                            ], 40, ["onSubmit"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</div></div></div>`);
        _push2(ssrRenderComponent(_component_DisclosurePanel, { class: "sm:hidden" }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="px-2 pt-2 pb-3 space-y-1"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_DisclosureButton, { class: "bg-gray-900 text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Dashboard`);
                  } else {
                    return [
                      createTextVNode("Dashboard")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              ssrRenderList($setup.navigation, (item) => {
                _push3(ssrRenderComponent(_component_DisclosureButton, {
                  key: item.name,
                  as: "a",
                  href: item.href,
                  class: [
                    item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  ],
                  "aria-current": item.current ? "page" : void 0
                }, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`asfas`);
                    } else {
                      return [
                        createTextVNode("asfas")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "px-2 pt-2 pb-3 space-y-1" }, [
                  createVNode(_component_DisclosureButton, { class: "bg-gray-900 text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Dashboard")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList($setup.navigation, (item) => {
                    return openBlock(), createBlock(_component_DisclosureButton, {
                      key: item.name,
                      as: "a",
                      href: item.href,
                      class: [
                        item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      ],
                      "aria-current": item.current ? "page" : void 0
                    }, {
                      default: withCtx(() => [
                        createTextVNode("asfas")
                      ]),
                      _: 2
                    }, 1032, ["href", "class", "aria-current"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" }, [
            createVNode("div", { class: "relative flex items-center justify-between h-16" }, [
              createVNode("div", { class: "absolute inset-y-0 left-0 flex items-center sm:hidden" }, [
                createVNode(_component_DisclosureButton, { class: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "sr-only" }, "Open main menu")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start" }, [
                createVNode("div", { class: "flex-shrink-0 flex items-center" }, [
                  createVNode("h1", { class: "text-2x1 text-slate-50" }, "Admin Page")
                ]),
                createVNode("div", { class: "hidden sm:block sm:ml-6" })
              ]),
              createVNode("div", { class: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" }, [
                createVNode("button", {
                  type: "button",
                  class: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                }, [
                  createVNode("span", { class: "sr-only" }, "View notifications")
                ]),
                createVNode(_component_Menu, {
                  as: "div",
                  class: "ml-3 relative"
                }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode(_component_MenuButton, { class: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "sr-only" }, "Open user menu"),
                          createVNode("img", {
                            class: "h-8 w-8 rounded-full",
                            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                            alt: ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(Transition, {
                      "enter-active-class": "transition ease-out duration-100",
                      "enter-from-class": "transform opacity-0 scale-95",
                      "enter-to-class": "transform opacity-100 scale-100",
                      "leave-active-class": "transition ease-in duration-75",
                      "leave-from-class": "transform opacity-100 scale-100",
                      "leave-to-class": "transform opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_MenuItems, { class: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                          default: withCtx(() => [
                            createVNode(_component_MenuItem, null, {
                              default: withCtx(({ active }) => [
                                createVNode("a", {
                                  href: "#",
                                  class: [
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 w-full"
                                  ]
                                }, "Your Profile", 2)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenuItem, null, {
                              default: withCtx(({ active }) => [
                                createVNode("a", {
                                  href: "#",
                                  class: [
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 w-full"
                                  ]
                                }, "Settings", 2)
                              ]),
                              _: 1
                            }),
                            createVNode("hr"),
                            createVNode(_component_MenuItem, null, {
                              default: withCtx(({ active }) => [
                                createVNode("form", {
                                  onSubmit: withModifiers($options.logout, ["prevent"])
                                }, [
                                  createVNode("button", {
                                    class: [
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700 w-full"
                                    ]
                                  }, " Sign out ", 2)
                                ], 40, ["onSubmit"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createVNode(_component_DisclosurePanel, { class: "sm:hidden" }, {
            default: withCtx(() => [
              createVNode("div", { class: "px-2 pt-2 pb-3 space-y-1" }, [
                createVNode(_component_DisclosureButton, { class: "bg-gray-900 text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" }, {
                  default: withCtx(() => [
                    createTextVNode("Dashboard")
                  ]),
                  _: 1
                }),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.navigation, (item) => {
                  return openBlock(), createBlock(_component_DisclosureButton, {
                    key: item.name,
                    as: "a",
                    href: item.href,
                    class: [
                      item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    ],
                    "aria-current": item.current ? "page" : void 0
                  }, {
                    default: withCtx(() => [
                      createTextVNode("asfas")
                    ]),
                    _: 2
                  }, 1032, ["href", "class", "aria-current"]);
                }), 128))
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="p-8 text-indigo-700">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SideBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SideBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SideBar as S
};
