<template>
  <v-container>
    <v-carousel v-model="model"
                cycle
                height="500"
                hide-delimiter-background
                show-arrows-on-hover>
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
    <v-row justify="center"
           style="margin-top: 20px">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Click Me
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
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-content>
        &sect;我们的社区约定:

      </v-content>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Join",
  data: () => ({
    model: 0,
    dialog: false,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  })
}
</script>

<style scoped>

</style>
