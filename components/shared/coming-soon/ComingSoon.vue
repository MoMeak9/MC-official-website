<template>
  <div class="coming-wrapper" ref="coming-soon">
    <v-container>
      <!-- -----------------------------------------------
            Start Coming Soon
        ----------------------------------------------- -->
      <v-row>
        <v-col cols="12" sm="10" md="6" class="d-flex align-center">
          <div>
            <h2 class="coming-title font-weight-bold white--text">
              快速加群
            </h2>
            <h4 class="coming-subtitle white--text font-weight-bold">
              你还在等什么？快速加群了解我们的最新动态
            </h4>
            <div class="mt-16 pt-2">
              <v-btn
                nuxt
                large
                to="/#"
                class="btn-custom-md"
                color="primary"
                elevation="0"
              >
                JOIN US
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Coming Soon
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ComingSoon",
  data() {
    return {};
  },
  methods: {}
};
</script>
