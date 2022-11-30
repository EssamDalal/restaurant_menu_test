import { useSSRContext, resolveComponent, mergeProps } from "vue";
import "@inertiajs/inertia-vue3";
import { ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main$2 = {
  name: "node",
  props: {
    node: Object
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_node = resolveComponent("node");
  _push(`<!--[--><span class="text-2xl text-center font-serif font-bold mb-2 text-gray-800 capitalize">${ssrInterpolate($props.node.name)} <span class="text-yellow-900">${ssrInterpolate($props.node.discount)} % </span></span>`);
  if ($props.node.items && $props.node.items.length) {
    _push(`<ul><!--[-->`);
    ssrRenderList($props.node.items, (item) => {
      _push(`<li style="${ssrRenderStyle({ "list-style-image": "url('image/menu_list.png')" })}" class="text-base">${ssrInterpolate(item.name)} ${ssrInterpolate(item.discount)} % </li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.node.n_level_subcategories && $props.node.n_level_subcategories.length) {
    _push(`<ul><!--[-->`);
    ssrRenderList($props.node.n_level_subcategories, (child) => {
      _push(ssrRenderComponent(_component_node, {
        key: child.name,
        node: child
      }, null, _parent));
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NodeTree.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NodeTree = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const Tree_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  props: {
    tree: Object
  },
  components: {
    NodeTree
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_node_tree = resolveComponent("node-tree");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tree" }, _attrs))}><ul class="tree-list">`);
  _push(ssrRenderComponent(_component_node_tree, { node: $props.tree }, null, _parent));
  _push(`</ul></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Tree.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Tree = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Tree
  },
  props: {
    categories: {
      type: Object,
      default: () => ({})
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Bars3Icon = resolveComponent("Bars3Icon");
  const _component_Tree = resolveComponent("Tree");
  _push(`<!--[--><div class="isolate bg-white"><div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"><svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"></path><defs><linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse"><stop stop-color="#9089FC"></stop><stop offset="1" stop-color="#FF80B5"></stop></linearGradient></defs></svg></div><div class="px-6 pt-6 lg:px-8"><div><nav class="flex h-9 items-center justify-between" aria-label="Global"><div class="flex lg:min-w-0 lg:flex-1" aria-label="Global"><a href="#" class="-m-1.5 p-1.5"><span class="sr-only">Your Company</span><img class="h-20" src="image/logo.png" alt=""></a></div><h1 class="font-semibold text-4xl">Resturant Menu</h1><div class="flex lg:hidden"><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"><span class="sr-only">Open main menu</span>`);
  _push(ssrRenderComponent(_component_Bars3Icon, {
    class: "h-6 w-6",
    "aria-hidden": "true"
  }, null, _parent));
  _push(`</button></div><div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12"></div><div class="hidden fixed top-0 right-0 px-6 py-4 sm:block text-white">`);
  if (_ctx.$page.props.auth.user) {
    _push(`<a${ssrRenderAttr("href", _ctx.route("dashboard"))} class="font-semibold text-gray-900 hover:text-gray-900">Dashboard</a>`);
  } else {
    _push(`<a${ssrRenderAttr("href", _ctx.route("login"))} class="font-semibold text-gray-900 hover:text-gray-900">Log in</a>`);
  }
  _push(`</div></nav></div></div><main><div class="relative px-6 lg:px-8"><div class="mx-auto pt-10 pb-32 sm:pt-16 sm:pb-40"><div><div class="grid grid-cols-2 gap-10"><div><img src="image/menu.png" alt="menu image"></div><div class="text-4xl text-center pt-60"><p style="${ssrRenderStyle({ "font-family": "'Cairo', sans-serif" })}"> Welcome to the restaurant menu <br>Here you will see all the categories and items list </p></div></div><div class="grid grid-cols-2 gap-10" style="${ssrRenderStyle({ "font-family": "'Cairo', sans-serif" })}"><!--[-->`);
  ssrRenderList($props.categories, (category) => {
    _push(`<div class="p-10 bg-green-500 bg-opacity-40 rounded-3xl"><div class="bg-white p-6 rounded-lg shadow-lg"><h2 class="text-2xl font-bold text-gray-800">`);
    if (category.discount) {
      _push(`<span>${ssrInterpolate(category.discount)} %</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<br></h2><div>`);
    _push(ssrRenderComponent(_component_Tree, { tree: category }, null, _parent));
    _push(`</div><span class="text-sm"></span><p class="text-gray-700 text-right"> by ${ssrInterpolate(category.user.name)}</p></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></main></div><footer><div class="text-center p-6 bg-green-500 bg-opacity-40"><span>\xA9 2022 Copyright:</span><a class="text-gray-600 font-semibold" href="#"> Essam Dalal</a></div></footer><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Welcome as default
};
