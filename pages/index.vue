<template>
  <div>
    <v-row style="background-color: #FAFAFA;width: 100%">
      <v-parallax
        dark
        style="width: 100%;"
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
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
    </v-row>
    <v-container style="margin-top: 20px">
      <v-row justify="center" align="center">
        <v-responsive :aspect-ratio="16/9"
                      max-height="700px"
                      max-width="1500px">
          <v-carousel v-model="model"
                      height="100%"
                      hide-delimiter-background>
            <v-carousel-item
              v-for="(color, i) in colors"
              :key="color"
            >

              <v-sheet
                :color="color"
                height="100%"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="text-h2">
                    Slide {{ i + 1 }}
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-responsive>
      </v-row>
      <v-row justify="center" align="center">
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
export default {
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
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
  }),
  methods: {
    toJoinUs() {
      this.$router.push('/join')
    }
  }
}
</script>
