<template>
  <div id="index">
    <v-parallax
      dark
      style="width: 100%;"
      :src="require('/assets/images/new-year.png')"
    >
      <v-row justify="center" align="center">
        <div style="text-align: center">
          <h1>LightWorld 辉光世界</h1>
          <h2>静待1.18 ing......</h2>
          <h3>LightWorld MC</h3>
          <v-btn
            outlined
            large
            color="white"
            @click="toJoinUs">
            加入我们
          </v-btn>
        </div>
      </v-row>
    </v-parallax>
    <v-row justify="center" align="center" style="margin-top: 20px">
      <h2>服务器状态</h2>
      <v-icon>Server status</v-icon>
    </v-row>
    <server-info v-if="serverInfo"
                 :server-info="serverInfo">
    </server-info>
    <v-img v-else
           max-width="70vw"
           style="margin: auto"
           width="300px"
           :src="require('../assets/images/服务器异常.svg')">
    </v-img>
    <v-container style="margin-top: 20px">
      <v-row justify="center" align="center">
        <v-responsive :aspect-ratio="16/9"
                      max-height="700px"
                      max-width="1500px">
          <v-carousel v-model="model"
                      height="100%"
                      delimiter-icon="mdi-minus"
                      hide-delimiter-background>
            <v-carousel-item
              v-for="item in images"
              :key="item.path"
              style="max-width: 100vw"
              :src="item.path"
            >
            </v-carousel-item>
          </v-carousel>
        </v-responsive>
      </v-row>
      <v-row justify="center" align="center" style="margin-top: 20px">
        <h2>社区动态</h2>
        <v-icon>Community news</v-icon>
      </v-row>
      <v-row justify="center" align="center" style="margin-top: 20px">
        <v-card
          v-for="item in activitiesList"
          :key="item.ID"
          elevation="2"
          outlined
          style="width: 80%;margin: 10px">
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ item.subTitle }}
          </v-card-subtitle>
          <v-card-text>
            {{ item.introduction }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="item.show = !item.show"
            >
              <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="item.show">
              <v-divider></v-divider>
              <v-card-text>
                {{ item.text }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ServerInfo from "@/components/home/ServerInfo";
import {getServerInfo} from "@/api/website";

export default {
  components: {ServerInfo},
  comments: {
    ServerInfo
  },
  data: () => ({
    model: 0,
    images: [
      {
        path: require('../assets/images/1.jpg')
      },
      {
        path: require('../assets/images/2.jpg')
      },
      {
        path: require('../assets/images/3.jpg')
      },
      {
        path: require('../assets/images/4.jpg')
      }
    ],
    activitiesList: [
      {
        ID: 1,
        title: '1.18 开服预告',
        subTitle: '11月30日准时启程',
        text: '随着我的世界1.18正式版的更新，服务器也同步跟进，进入到1.18.X时代......',
        show: false,
        introduction: '随着我的世界1.18正式版的更新，服务器也同步跟进，进入到1.18.X时代......'
      }, {
        ID: 2,
        title: '1.17 辉光世界第六周目完结',
        subTitle: '存档将在下一周目开始后发放',
        text: '存档将在下一周目开始后发放',
        show: false,
        introduction: '存档将在下一周目开始后发放'
      }
    ],
    serverInfo: {}
  }),
  mounted() {
    getServerInfo().then(res => {
      this.serverInfo = res.data;
    })
  },
  methods: {
    toJoinUs() {
      this.$router.push('/join')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
