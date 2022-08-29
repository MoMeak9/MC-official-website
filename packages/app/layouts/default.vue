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
  components: {
    Message: () => import("./Message.vue"),
    Header: () => import("@/layouts/sections/Header"),
    Footer: () => import("@/layouts/sections/Footer"),
  },
  head() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 10px; /*竖向滚动条的宽度*/
  height: 10px; /*横向滚动条的高度*/
}

::-webkit-scrollbar-thumb { /*滚动条里面的小方块*/
  background: #019ee5;
  border-radius: 5px;
}

::-webkit-scrollbar-track { /*滚动条轨道的样式*/
  background: #ccc;
  border-radius: 5px;
}
</style>
