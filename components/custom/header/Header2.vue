<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar app class="app-header position-relative bg-dark header2" flat>
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <div class="logo">
          <NLink to="/">
            <v-img
              :src="require('@/assets/images/logos/white-logo.png')"
              alt="logo"
            />
          </NLink>
        </div>

        <v-spacer></v-spacer>
        <v-btn
          class="d-block d-md-none"
          color="white"
          text
          @click="toggleClass()"
        >
          <v-app-bar-nav-icon class="white--text" />
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/"> 首页 </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/join"> 白名单申请 </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/map"> 卫星地图 </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/freebies"> 服务器动态 </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/sponsor"> 赞助支持 </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/freebies"> 友情链接 </n-link>
            </li>
          </ul>
        </div>
        <!-- login-regiter -->
        <v-btn
          class="d-none d-lg-flex btn-custom-nm ml-5"
          nuxt
          depressed
          color="primary"
          to="/"
          elevation="0"
        >
          加入我们
        </v-btn>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "Header2",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleClass: function (event) {
      this.isActive = !this.isActive;
    },
  },
};
</script>
