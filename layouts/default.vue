<template>
  <v-app>
    <app-bar @change-drawer="changeDrawer"></app-bar>
    <v-main>
      <Nuxt/>
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
