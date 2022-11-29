
<template>
  <SideBar :name="name">
    <div>
      <div
        class="
          bg-gradient-to-r
          flex-auto
          w-42
          h-auto
          from-gray-900
          to-gray-700
          shadow-lg
          rounded-lg
        "
      >
        <div class="md:p-7 px-3 ml-5 p-4">
          <div class="grid grid-cols-2 gap-10">
            <h2 class="text-2xl py-2 text-gray-200 capitalize">
              Create new category
            </h2>
          </div>
          <h1 class="text-2xl text-slate-50">
            Here you can add new category !
          </h1>
        </div>

        <form class="w-2/3 m-auto py-3" @submit.prevent="submit">
          <div class="grid grid-cols-1 gap-10">
            <div class="mb-6">
              <label
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-gray-300
                "
                >Category Name</label
              >
              <input
                type="text"
                v-model="form.name"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900 text-sm
                  rounded-lg
                  focus:ring-gray-500 focus:border-gray-500
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-gray-500
                  dark:focus:border-gray-500
                "
                placeholder="Please add the Category name !"
                required
              />
            </div>
          </div>
          <div class="grid grid-cols-1 gap-10">
            <div class="mb-6">
              <label
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-gray-300
                "
                >Category Discount :
              </label>

              <input
                type="number"
                v-model="form.discount"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900 text-sm
                  rounded-lg
                  focus:ring-gray-500 focus:border-gray-500
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-gray-500
                  dark:focus:border-gray-500
                "
                placeholder="If the category has discount please add here !"
                min="0"
                max="100"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-10">
            <div class="mb-6">
              <label
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-gray-300
                "
                >Parent Category</label
              >
              <div class="relative flex w-full">
                <select
                  id="select-companies"
                  v-model="form.parent"
                  placeholder="Select categories..."
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-gray-500 focus:border-gray-500
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-gray-500
                    dark:focus:border-gray-500
                  "
                >
                  <option value="main">No Parent</option>
                  <option
                    v-for="category in categories"
                    :key="category.name"
                    v-bind:value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="
              bg-slate-900
              hover:bg-slate-800
              text-white
              font-bold
              py-2
              px-4
              m-4
              ml-0
              border-b-4 border-gray-700
              hover:border-gray-600
              rounded
            "
          >
            Add New Category
          </button>
        </form>
      </div>
    </div>
  </SideBar>
</template>



<script>
import SideBar from "../../Components/SideBar.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: {
    SideBar,
  },
  props: {
    categories: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const form = useForm({
      name: null,
      discount: null,
      parent: "main",
    });

    function submit() {
      form.post(route("categories.store"));
    }

    return { form, submit };
  },
  data() {
    return {
      name: "Categories",
    };
  },
};
</script>

<style >
input[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 5%;
  color: white;
}
</style>
