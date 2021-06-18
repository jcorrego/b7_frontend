<template>
  <nav v-if="this.$store.state.loginUser" class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="hidden lg:block h-8 w-auto"
              src="../assets/bairesdev-logo-blue.svg"
              alt="BairesDev"
            >
            <img
              class="block lg:hidden h-8 w-auto"
              src="../assets/bairesdev-icon.svg"
              alt="BairesDev"
            >
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              v-for="(option,index) in options"
              :key="index"
              :to="option.url"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              aria-current="page"
              exact-active-class="border-indigo-500 text-gray-900"
            >{{ option.label }}</router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">

          <div class="ml-3 relative">
            <div>
              <button
                type="button"
                class="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                @click="showUserMenu = !showUserMenu"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  :src="$store.state.loginUser.google.user.profileImage"
                  alt=""
                >
              </button>
            </div>

            <transition
              name="fade"
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                v-show="showUserMenu"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  @click.prevent="logout"
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >Sign out</a>
              </div>
            </transition>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            type="button"
            class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="showMobileMenu = !showMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <span
              v-show="!showMobileMenu"
              class="h-6 w-6"
            ><i class="fad fa-bars"></i></span>
            <span
              v-show="showMobileMenu"
              class="h-6 w-6"
            ><i class="fad fa-times-square"></i></span>
          </button>
        </div>
      </div>
    </div>
    <div
      v-show="showMobileMenu"
      class="sm:hidden"
      id="mobile-menu"
    >
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          v-for="(option,index) in options"
          :key="index"
          :to="option.url"
          class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          aria-current="page"
          exact-active-class="bg-indigo-50 border-indigo-500 text-indigo-700"
        >{{ option.label }}</router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="$store.state.loginUser.google.user.profileImage"
              alt=""
            >
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">{{ $store.state.loginUser.google.user.name }}</div>
            <div class="text-sm font-medium text-gray-500">{{ $store.state.loginUser.google.user.email }}</div>
          </div>
        </div>
        <div class="mt-3 space-y-1">
          <a @click.prevent="logout"
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >Sign out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {

  },
  data() {
    return {
      showUserMenu: false,
      showMobileMenu: false,
      options: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'Track Time',
          url: '/track',
        },
      ],
    };
  },
  methods: {
    logout() {
      this.showUserMenu = false;
      this.showMobileMenu = false;
      this.$store.commit('removeLoginUser');
      this.$router.push('/login');
    },
  },
};
</script>
