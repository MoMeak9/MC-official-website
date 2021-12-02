<template>
  <v-row id="personal"
         justify="center">
    <v-card max-width="450px"
            style="padding: 0 20px">
      <v-btn @click="upload">
        123123
      </v-btn>
      <v-avatar size="200">
      </v-avatar>
      <v-form
        ref="form"
        lazy-validation
      >
        <v-text-field
          v-model="editInfoForm.user_game_id"
          :counter="10"
          label="游戏ID"
          required
        ></v-text-field>

        <v-text-field
          v-model="editInfoForm.user_game_id"
          label="邮箱"
          required
        ></v-text-field>
      </v-form>
    </v-card>
    {{ editInfoForm }}

    <v-file-input
      v-show="false"
      id="upload"
      ref="upload"
      hide-input
      @change="uploadFile"
    >
      <v-btn @click="upload">
        123123
      </v-btn>
    </v-file-input>
  </v-row>
</template>

<script>
import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
  name: "Users",
  data() {
    return {
      editInfoForm: {}
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted() {
    this.editInfoForm = JSON.parse(JSON.stringify(this.userInfo))
  },
  methods: {
    upload() {
      // 个坑好深
      this.$refs.upload.$refs.input.click()
    },
    uploadFile(file) {
      console.log(file)
    }
  }
}
</script>

<style scoped lang="scss">
#personal {

}
</style>
