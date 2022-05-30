<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="7" lg="4">
      <v-card class="card-style">
        <v-card-title>
          <v-icon>mdi-login</v-icon>
          登入 Login
        </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
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

            <v-btn color="error" class="mr-4" @click="reset">重置</v-btn>
            <v-spacer />
            <v-btn @click="changeType">去注册</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import storage from "store";
import { login } from "~/api/user";
import sentMessage from "~/utils/sentMessage";

export default {
  name: "LoginForm",
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    password: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        login({
          user_email: this.email,
          user_password: this.password,
        }).then(res => {
          console.log(res);
          if (res.code === 1) {
            sentMessage.success(this.$store, {
              message: `欢迎你，旅行者：${res.data.userBean.user_game_id}`,
            });
            storage.set("token", res.data.token);
            this.$store.commit("setToken", res.data.token);
            this.$store.commit("setUserInfo", res.data.userBean);
            this.$router.push("/");
          } else {
            sentMessage.error(this.$store, {
              message: res.msg,
            });
          }
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    changeType() {
      this.$emit("change-type", "sign");
    },
  },
};
</script>

<style scoped lang="scss">
@import "assets/scss/index";
</style>
