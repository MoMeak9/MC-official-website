<template>
  <v-card style="padding: 20px;width: 70vh">
    <v-card-title>
      <v-icon>
        ss
      </v-icon>
      登入 Login
    </v-card-title>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="邮箱"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        type="password"
        label="密码"
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
          @click="changeType"
        >
          去注册
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import {login} from "../api/user";

export default {
  name: "LoginCard",
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        login({
          user_email: this.email,
          user_password: this.password
        }).then(res => {
          console.log(res)
        })
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    changeType() {
      this.$emit('change-type', 'sign')
    }
  },
}
</script>

<style scoped>

</style>
