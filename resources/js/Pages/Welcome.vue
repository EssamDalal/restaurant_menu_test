<!-- This example requires Tailwind CSS v3.0+ -->
<template>
  <div class="isolate bg-white">
    <div
      class="
        absolute
        inset-x-0
        top-[-10rem]
        -z-10
        transform-gpu
        overflow-hidden
        blur-3xl
        sm:top-[-20rem]
      "
    >
      <svg
        class="
          relative
          left-[calc(50%-11rem)]
          -z-10
          h-[21.1875rem]
          max-w-none
          -translate-x-1/2
          rotate-[30deg]
          sm:left-[calc(50%-30rem)] sm:h-[42.375rem]
        "
        viewBox="0 0 1155 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
          fill-opacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="px-6 pt-6 lg:px-8">
      <div>
        <nav class="flex h-9 items-center justify-between" aria-label="Global">
          <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-20" src="image/logo.png" alt="" />
            </a>
          </div>
          <h1 class="font-semibold text-4xl">Resturant Menu</h1>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="
                -m-2.5
                inline-flex
                items-center
                justify-center
                rounded-md
                p-2.5
                text-gray-700
              "
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div
            class="
              hidden
              lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12
            "
          ></div>
          <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block text-white">
            <a
              v-if="$page.props.auth.user"
              :href="route('dashboard')"
              class="font-semibold text-gray-900 hover:text-gray-900"
              >Dashboard</a
            >

            <template v-else>
              <a
                :href="route('login')"
                class="font-semibold text-gray-900 hover:text-gray-900"
                >Log in</a
              >

              <!-- <a
                v-if="canRegister"
                :href="route('register')"
                class="ml-4 font-semibold text-gray-900 hover:text-gray-900"
                >Register</a
              > -->
            </template>
          </div>
        </nav>
      </div>
    </div>
    <main>
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto pt-10 pb-32 sm:pt-16 sm:pb-40">
          <div>
            <div class="grid grid-cols-2 gap-10">
              <div>
                <img src="image/menu.png" alt="menu image" />
              </div>
              <div class="text-4xl text-center pt-60">
                <p style="font-family: 'Cairo', sans-serif">
                  Welcome to the restaurant menu <br />Here you will see all the
                  categories and items list
                </p>
              </div>
            </div>
            <div
              class="grid grid-cols-2 gap-10"
              style="font-family: 'Cairo', sans-serif"
            >
              <div
                class="p-10 bg-green-500 bg-opacity-40 rounded-3xl"
                v-for="category in categories"
                :key="category.name"
              >
                <div class="bg-white p-6 rounded-lg shadow-lg">
                  <h2 class="text-2xl font-bold text-gray-800">
                    <!-- {{ category.name }} -->
                    <span v-if="category.discount"
                      >{{ category.discount }} %</span
                    >
                    <br />
                  </h2>
                  <div>
                    <Tree :tree="category"></Tree>
                  </div>
                  <span class="text-sm"></span>
                  <p class="text-gray-700 text-right">
                    by {{ category.user.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <footer>
    <div class="text-center p-6 bg-green-500 bg-opacity-40">
      <span>?? 2022 Copyright:</span>
      <a class="text-gray-600 font-semibold" href="#"> Essam Dalal</a>
    </div>
  </footer>
</template>

<script >
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Tree from "@/Components/Tree.vue";
export default {
  //   canLogin: Boolean,
  //   canRegister: Boolean,
  components: {
    Tree,
  },
  props: {
    categories: {
      type: Object,
      default: () => ({}),
    },
  },
};
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
</script>
