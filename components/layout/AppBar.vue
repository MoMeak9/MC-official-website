<template>
  <v-app-bar
    fixed
    app
  >
    <v-app-bar-nav-icon @click.stop="changeDrawer"/>
    <v-toolbar-title v-text="title"/>
    <v-spacer/>
    <v-btn style="margin-right: 10px">
      <v-icon>mdi-login-variant</v-icon>
      <nuxt-link to="/login?type=login" style="text-decoration: none;color: black">
        Login
      </nuxt-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      title: 'Minecraft 辉光世界'
    }
  },
  methods: {
    changeDrawer() {
      this.$emit('change-drawer')
    }
  }
}
</script>

<style scoped>

</style>
