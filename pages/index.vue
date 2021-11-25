<template>
  <div>
    <v-row style="background-color: #FAFAFA;height: 100vh">
      <v-parallax
        dark
        style="width: 100%;height: 100%"
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row justify="center" align="center">
          <div style="text-align: center">
            <h1>LightWorld 辉光世界公益服</h1>
            <h2>静待1.18 ing......</h2>
            <h3>LightWorld Public Welfare Community</h3>
            <v-btn
              @click="toJoinUs"
              color="white"
              outlined
              large>
              加入我们
            </v-btn>
          </div>
        </v-row>
      </v-parallax>
    </v-row>
    <v-container style="margin-top: 20px">
      <v-row justify="center" align="center">
        <v-col cols="24">
          <v-carousel v-model="model">
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
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-card
          v-for="item in activitiesList"
          :key="item.ID"
          elevation="2"
          outlined
          style="width: 80%;margin: 10px">
          <v-card-title>
            标题
          </v-card-title>
          <v-card-subtitle>
            副标题
          </v-card-subtitle>
          <v-card-text>
            简介
          </v-card-text>
          <v-card-actions>
            <v-btn
              outlined>
              Learn more
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-expand-transition>
            <div>
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
                sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey,
                you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way
                to escape.
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
        ID: '',
        title: '',
        subTitle: '',
        text: '',
        show: false,
        introduction: ''
      }, {
        ID: '',
        title: '',
        subTitle: '',
        text: '',
        show: false,
        introduction: ''
      }, {
        ID: '',
        title: '',
        subTitle: '',
        text: '',
        show: false,
        introduction: ''
      }, {
        ID: '',
        title: '',
        subTitle: '',
        text: '',
        show: false,
        introduction: ''
      },
    ],
  }),
  methods: {
    toJoinUs() {
      this.$router.push('/join')
    }
  }
}
</script>
