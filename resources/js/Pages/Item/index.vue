<template>
  <SideBar :name="name">
    <div>
      <div
        class="
          bg-gradient-to-r
          flex-auto
          w-42
          h-56
          from-gray-900
          to-gray-700
          shadow-lg
          rounded-lg
        "
      >
        <div class="md:p-7 p-4">
          <div class="grid grid-cols-2 gap-10">
            <h2 class="text-2xl py-2 text-gray-200 capitalize">Items</h2>
            <Link class="w-3/4 ml-3" :href="route('items.create')"
              ><button
                class="
                  bg-slate-900
                  hover:bg-slate-800
                  text-white
                  w-full
                  font-bold
                  py-2
                  px-4
                  border-b-4 border-gray-700
                  hover:border-gray-600
                  rounded
                "
              >
                Create New Item
              </button></Link
            >
          </div>
          <h1 class="text-2xl text-slate-50">
            Here you can manage all the info about Item !
          </h1>
        </div>
      </div>
    </div>

    <div class="relative -mt-20 overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="
            text-xs text-gray-700
            uppercase
            bg-gray-50
            dark:bg-gray-700 dark:text-gray-400
          "
        >
          <tr>
            <th scope="col" class="px-6 py-3">Item name</th>
            <th scope="col" class="px-6 py-3">Category name</th>
            <th scope="col" class="px-6 py-3">Discount</th>
            <th scope="col" class="px-6 py-3">Description</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="
              bg-white
              border-b
              pointer
              dark:bg-gray-800 dark:border-gray-700
              hover:bg-gray-50
              dark:hover:bg-gray-600
            "
            v-for="items in items"
            :key="items.name"
          >
            <th
              scope="row"
              class="
                px-6
                py-4
                font-medium
                text-gray-900
                dark:text-white
                whitespace-nowrap
              "
            >
              {{ items.name }}
            </th>
            <td class="px-6 py-4">{{ items.parent_id }}</td>
            <td class="px-6 py-4" v-if="items.have_discount == '0'">
              No Discount
            </td>
            <td class="px-6 py-4" v-else>{{ items.discount }}%</td>
            <td class="px-6 py-4">{{ items.description }}</td>
            <td class="px-6 py-4">asfsaf</td>
          </tr>
        </tbody>
      </table>
    </div>
  </SideBar>
</template>

<script>
import SideBar from "../../Components/SideBar.vue";
import { Link } from "@inertiajs/inertia-vue3";
export default {
  components: {
    SideBar,
    Link,
  },
  props: {
    items: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    // clickRow: function (fair) {
    //   //   alert("clickList fired with " + fair.id);
    //   //   console.log("clickList fired with " + fair.id);
    //   this.$inertia.get(route("admin.fair.show", fair));
    // },
    // destoy(id) {
    //   this.$inertia.delete(route("admin.fair.destroy", id));
    // },
  },
  data() {
    return {
      name: "Items",
      isHidden: false,
    };
  },
};
</script>

<style >
.pointer {
  cursor: pointer;
}
</style>
