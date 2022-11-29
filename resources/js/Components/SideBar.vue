<template>
  <div class="relative flex min-h-screen">
    <div
      class="
        bg-gradient-to-r
        from-gray-800
        to-gray-700
        shadow-lg
        w-64
        space-y-6
        px-2
        py-4
        absolute
        inset-y-0
        left-0
        md:relative md:translate-x-0
        transform
        -translate-x-full
        transition
        duration-300
        ease-in-out
      "
      :class="{ 'relative -translate-x-0': showSideBar }"
    >
      <a
        :href="route('dashboard')"
        class="flex items-center space-x-2 px-4 text-slate-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          /></svg
        ><span class="font-extrabold text-white">Restaurant Menu</span>
      </a>
      <nav>
        <a
          :href="route('dashboard')"
          :class="[name == 'Dashboard' ? 'bg-gray-900 text-white' : '']"
          class="
            group
            flex
            items-center
            space-x-2
            py-3
            px-4
            hover:bg-slate-900
            rounded
            transition
            duration-300
            text-slate-300
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            /></svg
          ><span class="text-white group-hover:text-slate-50"
            >Dashboard</span
          ></a
        >
        <a
          :href="route('categories.index')"
          :class="[name == 'Categories' ? 'bg-gray-900 text-white' : '']"
          class="
            group
            flex
            items-center
            space-x-2
            py-3
            px-4
            hover:bg-slate-900
            rounded
            transition
            duration-300
            text-slate-300
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            /></svg
          ><span class="text-white group-hover:text-slate-50"
            >Categories</span
          ></a
        >
        <a
          :href="route('items.index')"
          :class="[name == 'Items' ? 'bg-gray-900 text-white' : '']"
          class="
            group
            flex
            items-center
            space-x-2
            py-3
            px-4
            hover:bg-slate-900
            rounded
            transition
            duration-300
            text-slate-300
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            /></svg
          ><span class="text-white group-hover:text-slate-50">Items</span></a
        >
      </nav>
    </div>
    <div class="flex-1">
      <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <DisclosureButton
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-md
                  text-gray-400
                  hover:text-white hover:bg-gray-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-white
                "
              >
                <span class="sr-only">Open main menu</span>
              </DisclosureButton>
            </div>
            <div
              class="
                flex-1 flex
                items-center
                justify-center
                sm:items-stretch sm:justify-start
              "
            >
              <div class="flex-shrink-0 flex items-center">
                <h1 class="text-2x1 text-slate-50">Admin Page</h1>
              </div>
              <div class="hidden sm:block sm:ml-6"></div>
            </div>
            <div
              class="
                absolute
                inset-y-0
                right-0
                flex
                items-center
                pr-2
                sm:static sm:inset-auto sm:ml-6 sm:pr-0
              "
            >
              <button
                type="button"
                class="
                  bg-gray-800
                  p-1
                  rounded-full
                  text-gray-400
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-800
                  focus:ring-white
                "
              >
                <span class="sr-only">View notifications</span>
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton
                    class="
                      bg-gray-800
                      flex
                      text-sm
                      rounded-full
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-offset-gray-800
                      focus:ring-white
                    "
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="
                      origin-top-right
                      absolute
                      right-0
                      mt-2
                      w-48
                      rounded-md
                      shadow-lg
                      py-1
                      bg-white
                      ring-1 ring-black ring-opacity-5
                      focus:outline-none
                    "
                  >
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700 w-full',
                        ]"
                        >Your Profile</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700 w-full',
                        ]"
                        >Settings</a
                      >
                    </MenuItem>
                    <hr />
                    <MenuItem v-slot="{ active }">
                      <form @submit.prevent="logout">
                        <button
                          :class="[
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700 w-full',
                          ]"
                        >
                          Sign out
                        </button>
                      </form>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel class="sm:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <DisclosureButton
              class="
                bg-gray-900
                text-white
                hover:bg-gray-700 hover:text-white
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
              "
              >Dashboard</DisclosureButton
            >
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="a"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block px-3 py-2 rounded-md text-base font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >asfas</DisclosureButton
            >
          </div>
        </DisclosurePanel>
      </Disclosure>

      <div class="p-8 text-indigo-700"><slot></slot></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  name: "SideBar",

  props: {
    name,
  },

  setup() {
    const showSideBar = ref(false);

    return {
      showSideBar,
      navigation,
    };
  },
  methods: {
    // logout() {
    //   this.$inertia.post(route("logout"));
    // },
  },
};
</script>

<style >
</style>
