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
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-icon></v-icon> -->
    </v-navigation-drawer>

    <v-main>
      <v-container class="container">
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-subheader>{{ card }}</v-subheader>
              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item :key="n">
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
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
      ["mdi-account-circle", "个人信息"],
      ["mdi-account-edit", "修改个人详情"],
      ["mdi-panorama", "画廊上传"],
      ["mdi-chat", "给腐竹留言"],
      ["mdi-logout", "退出登录"],
    ],
  }),
};
</script>

<style scoped>
.userName{
  margin-top: 10px;
}
.container {
  margin-left: 290px;
}
</style>
