<template>
  <Nav />
  <router-view/>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss" src="./assets/css/style.scss" />
