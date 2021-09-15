<template>
  <div class="day">
    <h1 class="day-title">
      {{$route.params.date}}
    </h1>

    <ul class="day-list">
      <li
        v-for="item in items"
        :key="item.id"
        class="day-list-item"
      >
        <div class="time">
          <h2>{{item.id}}</h2>
        </div>

        <div class="action">
          <input
            type="text"
            placeholder="한 일을 작성해주세요"
            v-model="item.action"
          />
        </div>

        <day-score
          @onUpdateScore="onUpdateScore"
          :item="item"
        />

        <div class="note">
          <textarea
            v-model="item.note"
            placeholder="노트를 작성해주세요">
          </textarea>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DayScore from './DayScore.vue';

export default {
  name: 'Day',
  methods: {
    onUpdateScore(item, score) {
      // eslint-disable-next-line no-param-reassign
      item.score = score;
    },
  },
  computed: {},
  components: {
    DayScore,
  },
  data() {
    return {
      items: [
        {
          action: '', // 한 일
          id: '2021-09-10-08-10', // 날짜. id, key 역할
          note: '', // 노트
          open: false, // 편집모드
          score: undefined, // 점수
        },
        {
          action: '', // 한 일
          id: '2021-09-10-10-12', // 날짜. id, key 역할
          note: '', // 노트
          open: false, // 편집모드
          score: undefined, // 점수
        },
        {
          action: '', // 한 일
          id: '2021-09-11-08-10', // 날짜. id, key 역할
          note: '', // 노트
          open: false, // 편집모드
          score: undefined, // 점수
        },
        {
          action: '', // 한 일
          id: '2021-09-11-12-14', // 날짜. id, key 역할
          note: '', // 노트
          open: false, // 편집모드
          score: undefined, // 점수
        },
        {
          action: '', // 한 일
          id: '2021-09-12-08-10', // 날짜. id, key 역할
          note: '', // 노트
          open: false, // 편집모드
          score: undefined, // 점수
        },
        {
          action: '', // 한 일
          id: '2021-09-12-18-20', // 날짜. id, key 역할
          note: '', // 노트
          open: false, // 편집모드
          score: undefined, // 점수
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
