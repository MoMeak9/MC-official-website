<template>
  <v-container id="about">
    <v-row justify="center" style="margin: 20px 0 0">
      <h1>社区发展史</h1>
      <v-icon>History</v-icon>
    </v-row>
    <v-row justify="center">
      <v-timeline :dense="!isDense">

        <v-timeline-item v-for="item in historyList" :key="item.time">
          <v-card :width="isDense?'500px':'280px'" style="padding: 10px">
            <strong>{{ item.time }}</strong>
            <br>
            {{ item.content }}
          </v-card>
        </v-timeline-item>

      </v-timeline>
    </v-row>
    <v-row justify="center">
      <h1>社区会员</h1>
      <v-icon>Community Members</v-icon>
    </v-row>
    <v-row justify="center">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
        ></v-data-table>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      historyList: [{
        time: '2019年4月5日',
        content: '服务器开服'
      }, {
        time: '2019年4月6日',
        content: '服务器开启第一周目，迎接第一位玩家。'
      }, {
        time: '2019年4月5日',
        content: '服务器开服'
      }, {
        time: '2019年4月5日',
        content: '服务器开服'
      }, {
        time: '2019年4月5日',
        content: '服务器开服'
      }, {
        time: '2019年4月5日',
        content: '服务器开服'
      }, {
        time: '2019年4月5日',
        content: '服务器开服'
      }, {
        time: '2021年4月15日',
        content: '正式会员超过300人'
      }, {
        time: '2021年2月10日',
        content: '第五周目新年特别活动'
      }],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {text: 'Calories', value: 'calories'},
        {text: 'Fat (g)', value: 'fat'},
        {text: 'Carbs (g)', value: 'carbs'},
        {text: 'Protein (g)', value: 'protein'},
        {text: 'Iron (%)', value: 'iron'},
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        }
      ]
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    isDense() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return false
        case 'sm':
          return false
        case 'md':
          return true
        case 'lg':
          return true
        case 'xl':
          return true
      }
    },
  },
}
</script>

<style scoped lang="scss">
#about {

}
</style>
