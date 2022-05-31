<template>
  <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
  <v-app-bar max-height="85px" app class="app-header position-relative navbar-light header1">
    <v-container class="py-0 fill-height">
      <!-- Logo -->
      <div style="height: 100%">
        <NLink to="/">
          <img
            height="100%"
            :src="require('@/assets/images/logo.png')"
            alt="logo"
          />
        </NLink>
      </div>

      <v-spacer></v-spacer>
      <v-btn class="d-block d-md-none" text @click="toggleClass()">
        <v-app-bar-nav-icon />
      </v-btn>
      <!-- Desktop view Navigation -->
      <div
        class="navigation"
        :class="[isActive ? 'd-block' : '']"
        @click="isActive = !isActive"
      >
        <ul class="navbar-nav">
          <li class="nav-item" text>
            <n-link class="nav-link" nuxt to="/">首页</n-link>
          </li>
          <li class="nav-item" text>
            <n-link class="nav-link" nuxt to="/join">白名单申请</n-link>
          </li>
          <li class="nav-item" text>
            <n-link class="nav-link" nuxt to="/map">卫星地图</n-link>
          </li>
          <li class="nav-item" text>
            <n-link class="nav-link" nuxt to="/sponsor">赞助支持</n-link>
          </li>
          <li class="nav-item" text>
            <n-link class="nav-link" nuxt to="/gallery">画廊</n-link>
          </li>
        </ul>
      </div>
      <!-- login-regiter -->
      <v-btn
        class="d-none d-lg-flex btn-custom-nm ml-5"
        nuxt
        outlined
        color="primary"
        :to="user_game_id?'/user':'/login'"
        elevation="0"
      >
        {{ user_game_id || "登录" }}
      </v-btn>
    </v-container>
  </v-app-bar>
  <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
      items: [
        { title: "历史文件", link: "/history" },
        { title: "客户端下载" },
        { title: "Java 下载" },
      ],
      user_game_id: "",
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    toggleClass: function() {
      this.isActive = !this.isActive;
    },
    async getUserInfo() {
      await this.$store.dispatch("getUserInfo");
      this.user_game_id = this.$store.state.userInfo.user_game_id;
    },
  },
};
</script>
