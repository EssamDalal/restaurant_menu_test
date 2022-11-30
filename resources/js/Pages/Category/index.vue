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
            <h1 class="text-2xl py-2 text-gray-200 capitalize">
              Categories
              <h5 class="text-slate-50">
                Here you can manage all the <br />
                info about Category !
              </h5>
            </h1>

            <div>
              <Link class="w-3/4 ml-3" :href="route('categories.create')"
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
                  Create New Category
                </button></Link
              >
            </div>
          </div>
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
            <th scope="col" class="px-6 py-3">Category name</th>
            <th scope="col" class="px-6 py-3">Category type</th>
            <th scope="col" class="px-6 py-3">Discount</th>
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
            v-for="category in categories"
            :key="category.name"
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
              {{ category.name }}
            </th>

            <td class="px-6 py-4" v-if="category.parent_id">Sub Category</td>
            <td class="px-6 py-4" v-else>Main Category</td>

            <td class="px-6 py-4" v-if="category.have_discount == '0'">
              No Discount
            </td>
            <td class="px-6 py-4" v-else>{{ category.discount }}%</td>
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
    categories: {
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
      name: "Categories",
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
