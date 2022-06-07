<template>
  <div class="user-center">
    <developing></developing>
    <v-btn depressed
           color="primary"
           @click="loginOut">
      退出登入
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "User",
  components: {
    Developing: () => import("@/layouts/developing"),
  },
  data: () => {
    return {};
  },
  methods: {
    loginOut() {
      this.$store.dispatch("Logout");
      this.$router.push('/')
    },
  },
};
</script>

<style scoped lang="scss">
.user-center {
  text-align: center;
  padding: 20px;
}
</style>
