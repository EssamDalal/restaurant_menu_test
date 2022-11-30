import { S as SideBar } from "./SideBar.f3200668.mjs";
import { useForm } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@headlessui/vue";
const create_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    SideBar
  },
  props: {
    categories: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const form = useForm({
      name: null,
      discount: null,
      parent: null,
      description: null
    });
    function submit() {
      form.post(route("items.store"));
    }
    return { form, submit };
  },
  data() {
    return {
      name: "Items"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SideBar = resolveComponent("SideBar");
  _push(ssrRenderComponent(_component_SideBar, mergeProps({ name: $data.name }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="bg-gradient-to-r flex-auto w-42 h-auto from-gray-900 to-gray-700 shadow-lg rounded-lg"${_scopeId}><div class="md:p-7 px-3 ml-5 p-4"${_scopeId}><div class="grid grid-cols-2 gap-10"${_scopeId}><h2 class="text-2xl py-2 text-gray-200 capitalize"${_scopeId}> Create new Item </h2></div><h1 class="text-2xl text-slate-50"${_scopeId}>Here you can add a new Item !</h1></div><form class="w-2/3 m-auto py-3"${_scopeId}><div class="grid grid-cols-1 gap-10"${_scopeId}><div class="mb-6"${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>Item Name</label><input type="text"${ssrRenderAttr("value", $setup.form.name)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Please add an Item name !" required${_scopeId}></div></div><div class="grid grid-cols-1 gap-10"${_scopeId}><div class="mb-6"${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>Item Discount : </label><input type="number"${ssrRenderAttr("value", $setup.form.discount)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="If the item has discount please add it here !" min="0" max="100"${_scopeId}></div></div><div class="mb-6"${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>Item Description</label><input type="text"${ssrRenderAttr("value", $setup.form.description)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Please add an Item description !" required${_scopeId}></div><div class="grid grid-cols-1 gap-10"${_scopeId}><div class="mb-6"${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>categories</label><div class="relative flex w-full"${_scopeId}><select id="select-companies" placeholder="Select categories..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"${_scopeId}><!--[-->`);
        ssrRenderList($props.categories, (category) => {
          _push2(`<option${ssrRenderAttr("value", category.id)}${_scopeId}>${ssrInterpolate(category.name)}</option>`);
        });
        _push2(`<!--]--></select></div></div></div><button type="submit" class="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 m-4 ml-0 border-b-4 border-gray-700 hover:border-gray-600 rounded"${_scopeId}> Add New Item </button></form></div></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { class: "bg-gradient-to-r flex-auto w-42 h-auto from-gray-900 to-gray-700 shadow-lg rounded-lg" }, [
              createVNode("div", { class: "md:p-7 px-3 ml-5 p-4" }, [
                createVNode("div", { class: "grid grid-cols-2 gap-10" }, [
                  createVNode("h2", { class: "text-2xl py-2 text-gray-200 capitalize" }, " Create new Item ")
                ]),
                createVNode("h1", { class: "text-2xl text-slate-50" }, "Here you can add a new Item !")
              ]),
              createVNode("form", {
                class: "w-2/3 m-auto py-3",
                onSubmit: withModifiers($setup.submit, ["prevent"])
              }, [
                createVNode("div", { class: "grid grid-cols-1 gap-10" }, [
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "Item Name"),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => $setup.form.name = $event,
                      class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500",
                      placeholder: "Please add an Item name !",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $setup.form.name]
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 gap-10" }, [
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "Item Discount : "),
                    withDirectives(createVNode("input", {
                      type: "number",
                      "onUpdate:modelValue": ($event) => $setup.form.discount = $event,
                      class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500",
                      placeholder: "If the item has discount please add it here !",
                      min: "0",
                      max: "100"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $setup.form.discount]
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-6" }, [
                  createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "Item Description"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $setup.form.description = $event,
                    class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500",
                    placeholder: "Please add an Item description !",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $setup.form.description]
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 gap-10" }, [
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "categories"),
                    createVNode("div", { class: "relative flex w-full" }, [
                      withDirectives(createVNode("select", {
                        id: "select-companies",
                        "onUpdate:modelValue": ($event) => $setup.form.parent = $event,
                        placeholder: "Select categories...",
                        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList($props.categories, (category) => {
                          return openBlock(), createBlock("option", {
                            key: category.name,
                            value: category.id
                          }, toDisplayString(category.name), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, $setup.form.parent]
                      ])
                    ])
                  ])
                ]),
                createVNode("button", {
                  type: "submit",
                  class: "bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 m-4 ml-0 border-b-4 border-gray-700 hover:border-gray-600 rounded"
                }, " Add New Item ")
              ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Item/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  create as default
};
