<template>
  <div id="app">
    <navigation></navigation>
    <div class="min-h-screen bg-gray-100">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: { Navigation },
};
</script>
