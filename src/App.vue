<template>
  <div id="app">
    <the-nav-bar></the-nav-bar>
    <section class="section">
      <router-view />
    </section>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';

export default {
  components: {
    TheNavBar
  }
};
</script>
