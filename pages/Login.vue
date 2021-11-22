<template>
  <v-row id="login" justify="center" align="center">
    <login-card v-if="type==='login'" @change-type="changeType"></login-card>
    <sign-card @change-type="changeType" v-else></sign-card>
  </v-row>
</template>

<script>
import LoginCard from "../components/LoginCard";
import SignCard from "../components/SignCard";

export default {
  name: "Login",
  components: {
    LoginCard,
    SignCard
  },
  data: () => ({
    type: 'login'
  }),
  mounted() {
    this.type = this.$route.query.type
  },
  methods: {
    changeType(type) {
      this.type = type
    }
  }

}
</script>

<style scoped lang="scss">
#login {
  min-height: 80vh;
}
</style>
