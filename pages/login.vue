<template>
  <div class='login bg-light-info'>
    <v-row justify='center'>
      <v-col cols='12' sm='10' md='9' lg='7'>
        <div class='text-center'>
          <h2 class='ui-title font-weight-bold'>
            Sign In
          </h2>
          <p>
            Here you can check Demos we created you can easily use it. Its
            quite easy to Create your own dream website & dashboard in
            No-time.
          </p>
        </div>
      </v-col>
    </v-row>
    <LoginForm/>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {
    LoginForm: () => import('../components/Login/LoginForm.vue')
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang='scss'>
.login {
  min-height: 100vh;
  padding: 50px 0;
}
</style>
