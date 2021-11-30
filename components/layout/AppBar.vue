<template>
  <v-app-bar
    fixed
    app
  >
    <v-app-bar-nav-icon @click.stop="changeDrawer"/>
    <v-toolbar-title>
      Minecraft <strong style="color:rgb(43,216,241);">辉光</strong>世界
      <v-icon>mdi-server-network</v-icon>
    </v-toolbar-title>
    <v-spacer/>
    <strong style="margin-right: 10px">
      {{ userInfo.user_game_id }}
    </strong>
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

</style>
