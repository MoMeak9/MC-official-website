<template>
  <div id="about">
    <v-row justify="center" class="white--text" style="padding-top: 40px">
      <h1>社区发展史 History</h1>
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
    <v-row justify="center" class="white--text">
      <h1>社区会员 Community Members</h1>
    </v-row>
    <v-row justify="center">
      <v-card style="margin: 30px 0 50px" max-width="100vw">
        <v-card-title>
          <strong>会员搜索：</strong>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :loading="desserts.length===0"
          loading-text="Loading... Please wait"
          :headers="headers"
          :items="desserts"
          :items-per-page="10"
        >
          <template #item.user_image_url="{ item }">
            <div style="padding: 2px 0">
              <v-avatar>
                <v-img :src="item.user_image_url"></v-img>
              </v-avatar>
            </div>
          </template>
          <template #item.is_whitelist="{ item }">
            <v-chip v-if="item.is_whitelist===1" dark color="green">
              通过审核
            </v-chip>
            <v-chip v-else dark color="red">
              未列入
            </v-chip>
          </template>
          <template #item.user_is_ban="{ item }">
            <v-chip v-if="item.user_is_ban===1" dark color="red">
              封禁
            </v-chip>
            <v-chip v-else dark color="green">
              正常
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import {getAllUsers} from "@/api/user";

export default {
  name: "About",
  data() {
    return {
      search: '',
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
      }],
      headers: [
        {text: '头像', value: 'user_image_url', sortable: false},
        {text: 'ID', value: 'user_game_id'},
        {text: '白名单状态', value: 'is_whitelist'},
        {text: '用户信用状态', value: 'user_is_ban'},
      ],
      desserts: []
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
  mounted() {
    getAllUsers().then(res => {
      this.desserts = res.data
      console.log(res)
    })
  }
}
</script>

<style scoped lang="scss">
#about {
  margin: 0;
  padding: 0;
  background: url("https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/2021124maxresdefault.jpg") no-repeat center fixed;
  background-size: auto 100%;
  min-height: 100%;

  h1{
    -webkit-text-stroke: 2px #333;
  }

  @media screen and (min-width: 1000px) {
    background-size: 100% 100%;
  }

  .row {
    margin: 0;
    padding: 0;
  }
}
</style>
