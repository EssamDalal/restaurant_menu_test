import { S as SideBar } from "./SideBar.f3200668.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@headlessui/vue";
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    SideBar,
    Link
  },
  props: {
    items: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {},
  data() {
    return {
      name: "Items",
      isHidden: false
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SideBar = resolveComponent("SideBar");
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_SideBar, mergeProps({ name: $data.name }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="bg-gradient-to-r flex-auto w-42 h-56 from-gray-900 to-gray-700 shadow-lg rounded-lg"${_scopeId}><div class="md:p-7 p-4"${_scopeId}><div class="grid grid-cols-2 gap-10"${_scopeId}><h2 class="text-2xl py-2 text-gray-200 capitalize"${_scopeId}>Items</h2>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "w-3/4 ml-3",
          href: _ctx.route("items.create")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<button class="bg-slate-900 hover:bg-slate-800 text-white w-full font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-600 rounded"${_scopeId2}> Create New Item </button>`);
            } else {
              return [
                createVNode("button", { class: "bg-slate-900 hover:bg-slate-800 text-white w-full font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-600 rounded" }, " Create New Item ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><h1 class="text-2xl text-slate-50"${_scopeId}> Here you can manage all the info about Item ! </h1></div></div></div><div class="relative -mt-20 overflow-x-auto shadow-md sm:rounded-lg"${_scopeId}><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3"${_scopeId}>Item name</th><th scope="col" class="px-6 py-3"${_scopeId}>Category name</th><th scope="col" class="px-6 py-3"${_scopeId}>Discount</th><th scope="col" class="px-6 py-3"${_scopeId}>Description</th><th scope="col" class="px-6 py-3"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
        ssrRenderList($props.items, (items) => {
          _push2(`<tr class="bg-white border-b pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"${_scopeId}>${ssrInterpolate(items.name)}</th><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(items.parent_id)}</td>`);
          if (items.have_discount == "0") {
            _push2(`<td class="px-6 py-4"${_scopeId}> No Discount </td>`);
          } else {
            _push2(`<td class="px-6 py-4"${_scopeId}>${ssrInterpolate(items.discount)}%</td>`);
          }
          _push2(`<td class="px-6 py-4"${_scopeId}>${ssrInterpolate(items.description)}</td><td class="px-6 py-4"${_scopeId}>asfsaf</td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { class: "bg-gradient-to-r flex-auto w-42 h-56 from-gray-900 to-gray-700 shadow-lg rounded-lg" }, [
              createVNode("div", { class: "md:p-7 p-4" }, [
                createVNode("div", { class: "grid grid-cols-2 gap-10" }, [
                  createVNode("h2", { class: "text-2xl py-2 text-gray-200 capitalize" }, "Items"),
                  createVNode(_component_Link, {
                    class: "w-3/4 ml-3",
                    href: _ctx.route("items.create")
                  }, {
                    default: withCtx(() => [
                      createVNode("button", { class: "bg-slate-900 hover:bg-slate-800 text-white w-full font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-600 rounded" }, " Create New Item ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("h1", { class: "text-2xl text-slate-50" }, " Here you can manage all the info about Item ! ")
              ])
            ])
          ]),
          createVNode("div", { class: "relative -mt-20 overflow-x-auto shadow-md sm:rounded-lg" }, [
            createVNode("table", { class: "w-full text-sm text-left text-gray-500 dark:text-gray-400" }, [
              createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" }, [
                createVNode("tr", null, [
                  createVNode("th", {
                    scope: "col",
                    class: "px-6 py-3"
                  }, "Item name"),
                  createVNode("th", {
                    scope: "col",
                    class: "px-6 py-3"
                  }, "Category name"),
                  createVNode("th", {
                    scope: "col",
                    class: "px-6 py-3"
                  }, "Discount"),
                  createVNode("th", {
                    scope: "col",
                    class: "px-6 py-3"
                  }, "Description"),
                  createVNode("th", {
                    scope: "col",
                    class: "px-6 py-3"
                  }, "Action")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.items, (items) => {
                  return openBlock(), createBlock("tr", {
                    class: "bg-white border-b pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                    key: items.name
                  }, [
                    createVNode("th", {
                      scope: "row",
                      class: "px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    }, toDisplayString(items.name), 1),
                    createVNode("td", { class: "px-6 py-4" }, toDisplayString(items.parent_id), 1),
                    items.have_discount == "0" ? (openBlock(), createBlock("td", {
                      key: 0,
                      class: "px-6 py-4"
                    }, " No Discount ")) : (openBlock(), createBlock("td", {
                      key: 1,
                      class: "px-6 py-4"
                    }, toDisplayString(items.discount) + "%", 1)),
                    createVNode("td", { class: "px-6 py-4" }, toDisplayString(items.description), 1),
                    createVNode("td", { class: "px-6 py-4" }, "asfsaf")
                  ]);
                }), 128))
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Item/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
