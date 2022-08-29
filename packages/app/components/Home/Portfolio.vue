<template>
  <div>
    <div class="portfolio-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Portfolio Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">历史周目</h2>
              <p>
                自2019年4月创服以来，我们经历了版本1.13-1.19。累计七个周目，现在我们即将迎来第八周目......
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Portfolio
        ----------------------------------------------- -->
        <v-row class="mt-13">
          <v-col
            v-for="(item, index) of historyList"
            :key="index"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="portfolio-card overflow-hidden">
              <div class="portfolio-img">
                <img
                  :src="item.image_url"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-card-text>
                <h5 class="font-weight-medium font-18">
                  {{ item.name }}
                </h5>
                <p class="font-14 mb-0">
                  {{ item.description }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>

export default {
  name: "Portfolio",
  props: {
    historyList: {
      type: Array,
      default: ()=>[],
    },
  },
};
</script>
