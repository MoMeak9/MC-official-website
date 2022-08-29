<template>
  <div class="user-center">
    <userInfo></userInfo>
  </div>
</template>

<script>
export default {
  name: "User",
  components: {
    userInfo: () => import("../components/userInfo/userInfo.vue"),
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
