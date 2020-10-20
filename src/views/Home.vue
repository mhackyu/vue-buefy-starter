<template>
  <div class="container has-text-centered">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img
      class="ml-6"
      alt="Buefy logo"
      src="https://buefy.org/static/img/buefy.1d65c18.png"
      width="450px"
    />
    <HelloWorld msg="Vue.js and Buefy UI components starter template." />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>
