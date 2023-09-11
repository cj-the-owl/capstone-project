<template>
  <nav-bar-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
import FooterComp from './components/footerComp.vue';
import navBarComp from './components/navBarComp.vue';
  export default {
    components: {navBarComp, FooterComp}
  }
</script>

<style>

body {
  background-color: #F9F0E9;
  font-family: 'IBM Plex Mono', monospace;
}

::-webkit-scrollbar {
  display: none;
}

</style>
