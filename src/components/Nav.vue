<template>
<nav class="nav">
  <ul class="nav-list">
    <li>
      <button @click="today">
        <i class="xi-home" />
        <span>오늘</span>
      </button>
    </li>
    <li>
      <router-link to="/calendar">
        <i class="xi-calendar" />
        <span>달력</span>
      </router-link>
    </li>
    <li>
      <router-link to="/setting">
        <i class="xi-cog" />
        <span>설정</span>
      </router-link>
    </li>
    <li>
      <router-link to="/about">
        <i class="xi-emoticon-smiley" />
        <span>소개</span>
      </router-link>
    </li>
  </ul>
</nav>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Nav',
  methods: {
    today() {
      const todayUrl = `/day/${moment().format('YYYY-MM-DD')}`;
      console.log(todayUrl);
      this.$router.push(todayUrl);
    },
  },
};
</script>

<style scoped>

</style>
