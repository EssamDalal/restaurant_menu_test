
<template>
  <SideBar :name="name">
    <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
      <div>
        <div
          class="
            bg-gradient-to-r
            flex-auto
            w-42
            h-42
            from-sky-600
            to-sky-500
            shadow-lg
            rounded-lg
          "
        >
          <div class="md:p-7 p-4">
            <h2 class="text-2xl text-center text-gray-200 capitalize">3</h2>
            <h1 class="text-2xl text-slate-50 text-center">Categories</h1>
          </div>
        </div>
      </div>
      <div>
        <div
          class="
            bg-gradient-to-r
            flex-auto
            w-42
            h-42
            from-amber-600
            to-amber-500
            shadow-lg
            rounded-lg
          "
        >
          <div class="md:p-7 p-4">
            <h2 class="text-2xl text-center text-gray-200 capitalize">10</h2>
            <h1 class="text-2xl text-slate-50 text-center">Sub Categories</h1>
          </div>
        </div>
      </div>

      <div>
        <div
          class="
            bg-gradient-to-r
            flex-auto
            w-42
            h-42
            from-rose-600
            to-rose-500
            shadow-lg
            rounded-lg
          "
        >
          <div class="md:p-7 p-4">
            <h2 class="text-2xl text-center text-gray-200 capitalize">12</h2>
            <h1 class="text-2xl text-slate-50 text-center">Itesm</h1>
          </div>
        </div>
      </div>
    </div>
  </SideBar>
</template>

<script>
import SideBar from "../Components/SideBar.vue";
export default {
  components: {
    SideBar,
  },

  data() {
    return {
      name: "Dashboard",
    };
  },
};
</script>

<style >
</style>
