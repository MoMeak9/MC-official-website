<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="7" lg="4">
      <v-card class="card-style">
        <v-card-title>
          <v-icon>mdi-draw</v-icon>
          注册 SIGN IN
        </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="registerForm.user_game_id"
            :rules="nameRules"
            label="绑定正版ID"
          ></v-text-field>

          <v-text-field
            v-model="registerForm.user_QQ"
            label="绑定QQ"
            :rules="QQNumber"
          ></v-text-field>

          <v-text-field
            v-model="registerForm.user_email"
            full-width
            :rules="emailRules"
            placeholder="我们将使用次邮箱通知你白名单审核结果"
            label="绑定邮箱"
          >
            <template #append-outer>
              <v-btn @click="sentEmail">发送验证码</v-btn>
            </template>
          </v-text-field>

          <v-text-field
            v-model="registerForm.code"
            label="验证码"
            :rules="codeRules"
          ></v-text-field>

          <v-text-field
            v-model="registerForm.user_password"
            type="password"
            label="登入密码"
            :rules="passwordRules"
          ></v-text-field>

          <v-text-field
            v-model="registerForm.checkPassword"
            type="password"
            :rules="[checkTwoPassword]"
            label="确认密码"
          ></v-text-field>

          <v-card-actions>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              注册
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">重置</v-btn>
            <v-spacer />
            <v-btn @click="changeType">去登入</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { register, sendCode } from '~/api/user';
import sentMessage from '~/utils/sentMessage';

export default {
  name: 'SignUpForm',
  data: () => ({
    valid: true,
    registerForm: {
      user_game_id: '',
      user_QQ: '',
      code: '',
      user_email: '',
      user_password: '',
      checkPassword: '',
    },
    nameRules: [(v) => !!v || '请输入您的正版ID'],
    emailRules: [
      (v) => !!v || '必须留下您的邮箱',
      (v) => /.+@.+\..+/.test(v) || '无效邮箱格式',
    ],
    QQNumber: [
      (v) => !!v || '留下您的QQ',
      (v) => /^[0-9]*$/.test(v) || '无效QQ格式',
    ],
    codeRules: [
      (v) => !!v || '请填写四位数验证码',
      (v) => /^[0-9]{4}$/.test(v) || '无效验证码格式',
    ],
    passwordRules: [(v) => !!v || '请填写您的密码'],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        register(this.registerForm)
          .then((res) => {
            sentMessage.success(this.$store, {
              message: res.message,
            });
            this.changeType();
          })
          .catch((err) => {
            sentMessage.error(this.$store, {
              message: err.message,
            });
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    changeType() {
      this.$emit('change-type', 'SIGN_IN');
    },
    checkTwoPassword(val) {
      if (val !== this.registerForm.user_password) {
        return '两次密码不一致';
      } else {
        return true;
      }
    },
    sentEmail() {
      sendCode({
        user_email: this.registerForm.user_email,
      })
        .then((res) => {
          sentMessage.success(this.$store, {
            message: res.message,
          });
        })
        .catch((err) => {
          sentMessage.error(this.$store, {
            message: err.message,
          });
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import 'assets/scss/index';
</style>
