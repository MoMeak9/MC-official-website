<template>
  <div>
    <v-row style="background-color: #FAFAFA;height: 100vh">
      <v-btn>
        加入我们
      </v-btn>
    </v-row>
    <v-container>
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
            <v-btn>
              Learn more
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
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
}
</script>
