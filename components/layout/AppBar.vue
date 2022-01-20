<template>
  <v-app-bar
    fixed
    app
  >
    <v-app-bar-nav-icon @click.stop="changeDrawer"/>
    <v-toolbar-title>
      Minecraft <strong>辉光</strong>世界
      <v-icon>mdi-server-network</v-icon>
    </v-toolbar-title>
    <v-spacer/>

    <nuxt-link to="user" style="text-decoration: none">
      <strong class="user-name">
        {{ userInfo.user_game_id }}
      </strong>
    </nuxt-link>

    <v-btn
      v-if="userInfo==null||userInfo===''"
      style="margin-right: 10px">
      <nuxt-link to="/login" style="text-decoration: none;color: black">
        <v-icon>mdi-login-variant</v-icon>
        Login
      </nuxt-link>
    </v-btn>
    <v-btn
      v-else
      @click="Logout">
      Log out
    </v-btn>
  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from "vuex/dist/vuex.mjs";
import storage from 'store'

export default {
  name: "AppBar",
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['userInfo', 'userName'])
  },
  mounted() {
    if (storage.get('token')) {
      this.getUserInfo()
    }
  },
  methods: {
    ...mapActions(['getUserInfo', 'Logout']),
    changeDrawer() {
      this.$emit('change-drawer')
    }
  }
}
</script>

<style scoped>
strong {
  background: linear-gradient(to right, #78bbea, blue);
  -webkit-background-clip: text;
  color: transparent;
}

.user-name {
  margin-right: 10px;
}
</style>
