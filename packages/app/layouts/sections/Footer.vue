<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer class="footer">
    <v-container>
      <v-row class="py-0 py-md-15">
        <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">服务器地址</h4>
          <p class="mt-10">
            Host：
            <a class="dark-link">game.lwmc.net</a>
          </p>
          <p>
            Site :
            <a class="dark-link" href="https://www.lwmc.net/">lwmc.net</a>
          </p>
        </v-col>
        <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">官方QQ群：770125832</h4>
          <p class="mt-10">腐竹QQ：1308994506</p>
        </v-col>
        <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">友情链接</h4>
          <p class="mt-10 mb-0">
            MCNav我的世界导航:
            <a class="dark-link" target="_blank" href="https://www.mcnav.net/">
              mcnav.net
            </a>
          </p>
          <!--          <p>-->
          <!--            Site :-->
          <!--            <a class="dark-link" href="https://www.wrappixel.com/"-->
          <!--              >wrappixel.com</a-->
          <!--            >-->
          <!--          </p>-->
        </v-col>
        <!-- -----------------------------------------------
        Fourth Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">社区</h4>

          <div class="social-icons mt-10">
            <a href="#">
              <i class="mdi mdi-facebook"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-twitter"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-google-plus"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-youtube"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
        </v-col>
      </v-row>
      <div class="footer-bottom-bar font-14">
        <div class="d-block d-md-flex justify-space-around">
          <p>
            <a href="https://beian.miit.gov.cn" class="link"
              >闽ICP备19026932号-3</a
            >
          </p>
          <p class="ml-auto">
            All Rights Reserved by
            <a href="https://www.lwmc.net/" class="link">lwmc.net</a>
          </p>
          <div class="ml-auto">
            <div class="d-flex align-center">
              <a href="/" class="link px-4">Terms of Use</a>
              <a href="/" class="link px-4">Legal Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-footer>
  <!-- -----------------------------------------------
        End Footer
  ----------------------------------------------- -->
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      data: [],
    };
  },
};
</script>
