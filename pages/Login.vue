<template>
  <div class="login bg-light-info">
    <client-only placeholder="Loading...">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2 class="ui-title font-weight-bold">
              {{ type === "SIGN_IN" ? "Sign In" : "Sign Up" }}
            </h2>
            <p></p>
          </div>
        </v-col>
      </v-row>
      <LoginForm v-if="type === 'SIGN_IN'" @change-type="changeType" />
      <SignUpForm v-else @change-type="changeType" />
    </client-only>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
    LoginForm: () => import("../components/Login/LoginForm.vue"),
    SignUpForm: () => import("../components/Login/SignUpForm.vue"),
  },
  data() {
    return {
      type: "SIGN_IN",
    };
  },
  methods: {
    changeType(type) {
      this.type = type;
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  min-height: 100vh;
  padding: 50px 0;
}
</style>
