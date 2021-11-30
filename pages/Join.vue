<template>
  <v-container id="join">
    <v-row justify="center" align="center">
      <v-responsive :aspect-ratio="16/9"
                    max-height="700px"
                    max-width="1200px">
        <v-carousel v-model="model"
                    height="100%"
                    cycle
                    hide-delimiter-background
                    delimiter-icon="mdi-minus"
                    show-arrows-on-hover>
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
    <v-row justify="center"
           style="margin-top: 20px">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            v-if="$store.state.userInfo"
            color="blue"
            dark
            x-large
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>
              mdi-pencil
            </v-icon>
            开始进行白名单申请
          </v-btn>
          <v-btn
            v-else
            x-large
            disabled>
            <v-icon left>
              mdi-pencil
            </v-icon>
            请先登入后填写
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            友情提示：
          </v-card-title>
          <v-card-text>
            认真填写将增加通过概率，请不要在一天内重复多次填写此问卷，否则会被纳入黑名单哦！
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false;toQuestions()"
            >
              确认
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center" align="center">
      <v-main>
        &sect;我们的社区约定:

      </v-main>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Join",
  data: () => ({
    model: 0,
    dialog: false,
    images: [
      {
        path: require('../assets/images/join/1.jpg')
      },
      {
        path: require('../assets/images/join/2.jpg')
      },
      {
        path: require('../assets/images/join/3.png')
      },
      {
        path: require('../assets/images/join/4.jpg')
      },
    ],
  }),
  methods: {
    toQuestions() {
      this.$router.push('/questionnaire')
    }
  }
}
</script>

<style scoped lang="scss">
#join {
  margin-top: 20px;
}
</style>
