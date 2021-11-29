<template>
  <v-container id="question">
    <h1>白名单审核问卷</h1>
    <p>
      本次白名单考核问卷将是你入服的唯一参照
    </p>
    <div v-for="(item,index) in questionList" :key="item.title">
      <Input v-if="item.type==='input'"
             :item="item"
             :index="index"
             @change="updateData"></Input>
      <Select v-else-if="item.type='select'"
              :item="item"
              :index="index"
              @change="updateData"></Select>
    </div>
    <div style="text-align: center;margin-top: 50px">
      <h2>问卷考试结束啦！</h2>
      <br>
      <v-btn @click="submitAnswer">提交</v-btn>
    </div>
  </v-container>
</template>

<script>
import Select from "../components/questionnaire/Select";
import Input from "../components/questionnaire/Input";
import questionList from "./questionList";
import {submitPaper} from "~/api/website";
import sentMessage from "~/utils/sentMessage";

export default {
  name: "Questionnaire",
  components: {
    Select,
    Input
  },
  data() {
    return {
      questionList
    }
  },
  methods: {
    updateData(value, index) {
      this.questionList[index].content = value
    },
    submitAnswer() {
      submitPaper({
        paper_content: this.questionList
      }).then(res => {
        if (res.head.code === 1) {
          sentMessage.success(this.$store, {
            message: res.head.msg
          })
          this.$router.push('/')
        } else {
          sentMessage.error(this.$store, {
            message: res.head.msg
          })
          this.$router.back()
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
