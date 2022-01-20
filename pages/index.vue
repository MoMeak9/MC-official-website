<template>
  <div id="index">
    <v-parallax
      dark
      style="width: 100%;"
      src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202201201531215.png"
    >
      <v-row justify="center" align="center">
        <div style="text-align: center">
          <h1>LightWorld 辉光世界</h1>
          <h2>1.18 全新启航</h2>
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
    <v-container style="margin-top: 4rem">
      <div style="display: flex;flex-wrap: wrap">
        <v-col :cols="isPhone?5:12">
          <h2>辉光世界欢迎您</h2>
          <p>
            这是一个温馨和谐的服务器，提供了稳定流畅的体验，自从2019年开服以来我们努力创建一个环境良好更公平公正的游戏氛围，和玩家们一起度过了很多愉快的时光,在这里的日子将会是你值得回忆的美好。
            我们保证不做影响平衡、破坏公平的行为。服务器开放白名单以及正版验证，欢迎玩家提出意见或者举报违规行为，请大家自觉遵守游戏规则。
          </p>
        </v-col>
        <v-col v-if="isPhone" cols="7">
          <v-responsive :aspect-ratio="16/9">
            <v-carousel v-model="model"
                        cycle
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
        </v-col>
      </div>
      <v-row v-if="!isPhone" align="center">
        <v-responsive :aspect-ratio="16/9">
          <v-carousel v-model="model"
                      cycle
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

      <v-row justify="center" align="center" style="margin-top: 30px">
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
          min-width="350"
          style="width:80%;margin: 10px">
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
  data: () => ({
    model: 0,
    images: [
      {
        path: 'https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202201201524309.jpg'
      },
      {
        path: 'https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202201201524308.jpg'
      },
      {
        path: 'https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202201201524307.jpg'
      },
      {
        path: 'https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202201201524302.jpg'
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
  computed: {
    isPhone() {
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
      return null
    },
  },
  mounted() {
    getServerInfo().then(res => {
      this.serverInfo = res.data;
    })
  },
  methods: {
    toJoinUs() {
      this.$router.push('/join')
    }
  },
}
</script>
<style lang="scss" scoped>
p {
  text-indent: 2em;
  text-align: justify;
}

/* 滚动槽 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
