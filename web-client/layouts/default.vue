<template>
  <v-app>
    <app-bar @change-drawer="changeDrawer"></app-bar>
    <v-main>
      <Nuxt/>
      <app-footer></app-footer>
    </v-main>
    <app-drawer ref="drawer"></app-drawer>
    <Message/>
  </v-app>
</template>

<script>
import Message from '../components/Message.vue'
import AppBar from "../components/layout/AppBar";
import AppDrawer from "../components/layout/AppDrawer";
import AppFooter from "~/components/layout/AppFooter";

export default {
  components: {
    Message,
    AppBar,
    AppDrawer,
    AppFooter
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
