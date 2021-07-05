<template>
  <div class="min-h-screen bg-gray-100">
    <navigation v-if="this.$store.state.loginUser"></navigation>
    <main :class="[!this.$store.state.loginUser?'':'-mt-20',' pb-8']">
      <pm-screen v-if="actAsPM"></pm-screen>
      <router-view v-else />
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
import PmScreen from './components/views/PmScreen.vue';
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: { Navigation,PmScreen },
  computed: {
        ...mapState({
            actAsPM: (state) => state.actAsPM,
        }),
    },
};
</script>
