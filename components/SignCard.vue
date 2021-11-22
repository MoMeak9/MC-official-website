<template>
  <v-card style="padding: 20px;width: 70vh">
    <v-card-title>
      <v-icon>
        ss
      </v-icon>
      注册 SIGN IN
    </v-card-title>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="registerForm.ID"
        :counter="10"
        :rules="nameRules"
        label="绑定正版ID"
        required
      ></v-text-field>

      <v-text-field
        v-model="registerForm.QQ"
        label="绑定QQ"
        required
      ></v-text-field>

      <v-text-field
        v-model="registerForm.email"
        :rules="emailRules"
        placeholder="我们将使用次邮箱通知你白名单审核结果等"
        label="绑定邮箱"
        required
      >
        <template #append-outer>
          <v-btn @click="sentEmail">
            发送验证码
          </v-btn>
        </template>
      </v-text-field>

      <v-text-field
        v-model="registerForm.password"
        type="password"
        label="站点密码"
        required
      ></v-text-field>

      <v-text-field
        v-model="registerForm.checkPassword"
        type="password"
        :rules="[checkTwoPassword]"
        label="确认密码"
        required
      ></v-text-field>

      <v-card-actions>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          登入
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          重置
        </v-btn>
        <v-spacer/>
        <v-btn
          @click=changeType
        >
          去注册
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "Sign",
  data: () => ({
    valid: true,
    registerForm: {
      ID: '',
      QQ:'',
      email: '',
      password: '',
      checkPassword: ''
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    emailRules: [
      v => !!v || '必须留下您的邮箱',
      v => /.+@.+\..+/.test(v) || '无效邮箱格式',
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    changeType() {
      this.$emit('change-type', 'login')
    },
    checkTwoPassword(val) {
      if (val !== this.registerForm.password) {
        return "两次密码不一致"
      } else {
        return true
      }
    },sentEmail(){

    }
  },
}
</script>

<style scoped>

</style>
