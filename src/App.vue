<template>
  <div class="min-h-screen bg-gray-100">
    <navigation v-if="this.$store.state.loginUser"></navigation>
    <main :class="[!this.$store.state.loginUser?'':'-mt-20',' pb-8']">
      <router-view/>
    </main>
    <footer v-if="this.$store.state.loginUser">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"><span class="block sm:inline">&copy; BairesDev 2009 – 2021. All rights reserved.</span></div>
      </div>
    </footer>
  </div>
</template>


<script>
import Navigation from './components/navigation/Navigation.vue';

export default {
  name: 'app',
  components: { Navigation },
};
</script>
