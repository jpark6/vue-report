<template>
  <div class="intro">
    <div class="intro-inner">
      <h1>Daily<br />Report</h1>
      <router-link
        class="button"
        :to="todayUrl"
      >
        START
      </router-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'intro',
  computed: {
    todayUrl() {
      const todayUrl = moment().format('YYYY-MM-DD');
      return `/day/${todayUrl}`;
    },
  },
};
</script>

<style scoped>

</style>
