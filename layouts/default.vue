<template>
  <v-app>
    <app-bar @change-drawer="changeDrawer"></app-bar>
    <v-main>
      <Nuxt/>
      <v-footer>
        <span>&copy; {{ new Date().getFullYear() }} LightWorld 辉光世界公益社区</span>
        <v-spacer></v-spacer>
        <a href="https://beian.miit.gov.cn/" style="text-decoration: none">闽ICP备19026932号-2</a>
      </v-footer>
    </v-main>
    <app-drawer ref="drawer"></app-drawer>
    <Message/>
  </v-app>
</template>

<script>
import Message from '../components/Message.vue'
import AppBar from "../components/layout/AppBar";
import AppDrawer from "../components/layout/AppDrawer";

export default {
  components: {
    Message,
    AppBar,
    AppDrawer

  },
  data() {
    return {
      drawer: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  mounted() {
  },
  methods: {
    changeDrawer() {
      this.$refs.drawer.changeDrawer()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
