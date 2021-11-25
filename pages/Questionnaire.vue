<template>
  <v-container id="question">
    <h1>白名单审核问卷</h1>
    <v-main
      align="center">
      本次白名单考核问卷将是你入服的唯一参照
    </v-main>
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
    <div style="text-align: center">
      <h2>考试结束啦！</h2>
      <br>
      <v-btn>提交</v-btn>
    </div>
  </v-container>
</template>

<script>
import Select from "../components/questionnaire/Select";
import Input from "../components/questionnaire/Input";
import questionList from "./questionList";

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

    }
  }
}
</script>

<style scoped lang="scss">
#question {
  width: 100vh;
}
</style>
