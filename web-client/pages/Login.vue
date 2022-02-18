<template>
  <v-row id="login" justify="center" align="center">
    <login-card v-if="type==='login'" @change-type="changeType"></login-card>
    <sign-card v-else @change-type="changeType"></sign-card>
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
  methods: {
    changeType(type) {
      this.type = type
    }
  }

}
</script>

<style scoped lang="scss">
#login {
  margin: 0;
  padding: 0;
  background: url("assets/images/login-background.jpeg") no-repeat fixed center;
  background-size: auto 100%;
  min-height: 100%;

  @media screen and (min-width: 1000px){
    background-size: 100% 100%;
  }
}
</style>
