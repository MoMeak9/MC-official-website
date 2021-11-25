<template>
  <v-app>
    <app-bar @change-drawer="changeDrawer"></app-bar>
    <v-main>
      <Nuxt/>
    </v-main>
    <app-drawer ref="drawer"></app-drawer>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} LightWorld 辉光世界公益社区</span>
    </v-footer>
    <Message/>
  </v-app>
</template>

<script>
import Message from '../components/Message.vue'
import sentMessage from "../utils/sentMessage";
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
