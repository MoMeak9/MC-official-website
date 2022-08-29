<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" absolute>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar color="accent" size="100" class="avatar">
          <h3>MC</h3>
        </v-avatar>
        <div class="userName">Minecraft</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <!-- <v-list-item v-for="[icon, text, rou] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <nuxt-link to="/user/${rou}"><v-list-item-title>{{ text }}</v-list-item-title></nuxt-link>
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <nuxt-link to="/user/detail" class="link">
              <v-list-item-title>个人信息</v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <nuxt-link to="/user/editDetail" class="link">
              <v-list-item-title>修改个人信息</v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-panorama</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <nuxt-link to="/user/imgUpload" class="link">
              <v-list-item-title>画廊上传</v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-chat</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <nuxt-link to="/user/message" class="link">
              <v-list-item-title>给腐竹留言</v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <nuxt-link to="/user/detail" class="link">
              <v-list-item-title>退出登录</v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="container">
        <nuxt-child />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-account-circle", "个人信息", "detail"],
      ["mdi-account-edit", "修改个人详情"],
      ["mdi-panorama", "画廊上传", "upload"],
      ["mdi-chat", "给腐竹留言"],
      ["mdi-logout", "退出登录"],
    ],
  }),
};
</script>

<style scoped>
.userName {
  margin-top: 10px;
}
.container {
  margin-left: 290px;
}
.link {
  text-decoration: none;
  color: black;
}
</style>
