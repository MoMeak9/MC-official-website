<template>
  <v-app dark>
    <!--v-if="$route.name!=='login'"-->
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
    <Message />
  </v-app>
</template>

<script>
export default {
  head() {
    return {}
  },
  components: {
    Message: () => import('./Message.vue'),
    Header: () => import('@/layouts/sections/Header'),
    Footer: () => import('@/layouts/sections/Footer')
  },
  methods: {}
}
</script>

<style scoped lang='scss'>

</style>
