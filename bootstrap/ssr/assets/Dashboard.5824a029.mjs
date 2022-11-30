import { S as SideBar } from "./SideBar.f3200668.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@headlessui/vue";
const _sfc_main = {
  components: {
    SideBar
  },
  data() {
    return {
      name: "Dashboard"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SideBar = resolveComponent("SideBar");
  _push(ssrRenderComponent(_component_SideBar, mergeProps({ name: $data.name }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid md:grid-cols-3 sm:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><div class="bg-gradient-to-r flex-auto w-42 h-42 from-sky-600 to-sky-500 shadow-lg rounded-lg"${_scopeId}><div class="md:p-7 p-4"${_scopeId}><h2 class="text-2xl text-center text-gray-200 capitalize"${_scopeId}>3</h2><h1 class="text-2xl text-slate-50 text-center"${_scopeId}>Categories</h1></div></div></div><div${_scopeId}><div class="bg-gradient-to-r flex-auto w-42 h-42 from-amber-600 to-amber-500 shadow-lg rounded-lg"${_scopeId}><div class="md:p-7 p-4"${_scopeId}><h2 class="text-2xl text-center text-gray-200 capitalize"${_scopeId}>10</h2><h1 class="text-2xl text-slate-50 text-center"${_scopeId}>Sub Categories</h1></div></div></div><div${_scopeId}><div class="bg-gradient-to-r flex-auto w-42 h-42 from-rose-600 to-rose-500 shadow-lg rounded-lg"${_scopeId}><div class="md:p-7 p-4"${_scopeId}><h2 class="text-2xl text-center text-gray-200 capitalize"${_scopeId}>12</h2><h1 class="text-2xl text-slate-50 text-center"${_scopeId}>Itesm</h1></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "grid md:grid-cols-3 sm:grid-cols-2 gap-4" }, [
            createVNode("div", null, [
              createVNode("div", { class: "bg-gradient-to-r flex-auto w-42 h-42 from-sky-600 to-sky-500 shadow-lg rounded-lg" }, [
                createVNode("div", { class: "md:p-7 p-4" }, [
                  createVNode("h2", { class: "text-2xl text-center text-gray-200 capitalize" }, "3"),
                  createVNode("h1", { class: "text-2xl text-slate-50 text-center" }, "Categories")
                ])
              ])
            ]),
            createVNode("div", null, [
              createVNode("div", { class: "bg-gradient-to-r flex-auto w-42 h-42 from-amber-600 to-amber-500 shadow-lg rounded-lg" }, [
                createVNode("div", { class: "md:p-7 p-4" }, [
                  createVNode("h2", { class: "text-2xl text-center text-gray-200 capitalize" }, "10"),
                  createVNode("h1", { class: "text-2xl text-slate-50 text-center" }, "Sub Categories")
                ])
              ])
            ]),
            createVNode("div", null, [
              createVNode("div", { class: "bg-gradient-to-r flex-auto w-42 h-42 from-rose-600 to-rose-500 shadow-lg rounded-lg" }, [
                createVNode("div", { class: "md:p-7 p-4" }, [
                  createVNode("h2", { class: "text-2xl text-center text-gray-200 capitalize" }, "12"),
                  createVNode("h1", { class: "text-2xl text-slate-50 text-center" }, "Itesm")
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Dashboard as default
};
