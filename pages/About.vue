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
        content: '1.13.2服务器开服，启用白名单审核入会制'
      }, {
        time: '2019年4月6日',
        content: '服务器开启第一周目，迎接第一位玩家。'
      }, {
        time: '2019年6月3日',
        content: '服务器1.14.3第二周目'
      }, {
        time: '2019年7月3日',
        content: '服务器升级至1.14.4'
      }, {
        time: '2020年1月14日',
        content: '服务器1.15.2第三周目'
      }, {
        time: '2020年1月20日',
        content: '开启内外服，内服纯净并开启正版验证，外服（第四周目）为插件服'
      }, {
        time: '2020年9月7日',
        content: '服务器1.16.3第五周目，内外服合并，开启正版验证'
      }, {
        time: '2020年11月5日',
        content: '服务器1.17第六周目开启'
      }, {
        time: '2021年2月10日',
        content: '第六周目新年特别活动'
      }, {
        time: '2021年4月15日',
        content: '正式会员超过300人'
      }, {
        time: '2021年12月1日',
        content: '服务器1.18第七周目启动...'
      }
      ],
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
      desserts:
        [
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
