<template>
  <v-container>
    <v-card class="apply-qs">
      <h1>白名单审核问卷</h1>
      <p>本次白名单考核问卷将是你入服的唯一参照</p>
      <v-row v-for="(item, index) in questionList" :key="item.title">
        <Input v-if="item.type === 'input'" :item="item" :index="index" @change="updateData"></Input>
        <Select v-else-if="(item.type = 'select')" :item="item" :index="index" @change="updateData"></Select>
      </v-row>
      <div style="text-align: center; margin-top: 50px">
        <h2>问卷考试结束啦！</h2>
        <br />
        <v-btn @click="submitAnswer">提交</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import questionList from "@/utils/questionList";
import { submitPaper } from "~/api/paper";
import sentMessage from "~/utils/sentMessage";

export default {
  name: "Apply",
  components: {
    Select: () => import("../components/questionnaire/Select"),
    Input: () => import("../components/questionnaire/Input"),
  },
  data() {
    return {
      questionList,
    };
  },
  methods: {
    updateData(value, index) {
      this.questionList[index].content = value;
    },
    submitAnswer() {
      submitPaper({
        paper_content: this.questionList,
      }).then(res => {
        if (res.code === 1) {
          sentMessage.success(this.$store, {
            message: res.msg,
          });
          this.$router.push("/");
        } else {
          sentMessage.error(this.$store, {
            message: res.msg,
          });
          this.$router.back();
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.apply-qs {
  max-width: 100%;
  margin: auto;
  padding: 20px 40px;

  @media (min-width: 1024px) {
    width: 800px;
  }

  @media (max-width: 400px) {
    box-sizing: border-box;
    padding: 20px;
  }
}
</style>
