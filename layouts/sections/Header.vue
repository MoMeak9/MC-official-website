<template>
  <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
  <v-app-bar app class="app-header position-relative navbar-light header1" flat>
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
            <n-link class="nav-link" nuxt to="/freebies">友情链接</n-link>
          </li>
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <li class="nav-item" text>
                <a class="nav-link" href="#" v-bind="attrs" v-on="on">
                  服务器支持
                </a>
              </li>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" nav>
                <n-link
                  style="text-decoration: none; color: #8c9295"
                  nuxt
                  :to="item.link"
                >
                  友情链接
                </n-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </ul>
      </div>
      <!-- login-regiter -->
      <v-btn
        class="d-none d-lg-flex btn-custom-nm ml-5"
        nuxt
        outlined
        color="primary"
        to="/login"
        elevation="0"
      >
        登入
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
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  methods: {
    toggleClass: function() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
