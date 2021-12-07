<template>
  <v-container id="join">
    <v-row justify="center" align="center">
      <v-responsive :aspect-ratio="16/9"
                    max-height="700px"
                    max-width="1200px">
        <v-carousel v-model="model"
                    height="100%"
                    cycle
                    hide-delimiter-background
                    delimiter-icon="mdi-minus"
                    show-arrows-on-hover>
          <v-carousel-item
            v-for="item in images"
            :key="item.path"
            style="max-width: 100vw"
            :src="item.path"
          >
          </v-carousel-item>
        </v-carousel>
      </v-responsive>
    </v-row>
    <v-row justify="center"
           style="margin-top: 20px">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            v-if="$store.state.userInfo"
            color="blue"
            dark
            x-large
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>
              mdi-pencil
            </v-icon>
            开始进行白名单申请
          </v-btn>
          <v-btn
            v-else
            x-large
            disabled>
            <v-icon left>
              mdi-pencil
            </v-icon>
            请先登入后填写
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            友情提示：
          </v-card-title>
          <v-card-text>
            请确保您已经熟读三则社区约定。
            认真填写将增加通过概率，请不要在一天内重复多次填写此问卷，否则会被纳入黑名单哦！
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false;toQuestions()"
            >
              确认
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center" align="center">
      <v-md-editor v-model="text"
                   mode="preview">
      </v-md-editor>
      <v-main>
      </v-main>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Join",
  data: () => ({
    model: 0,
    dialog: false,
    images: [
      {
        path: require('../assets/images/join/1.jpg')
      },
      {
        path: require('../assets/images/join/2.jpg')
      },
      {
        path: require('../assets/images/join/3.png')
      },
      {
        path: require('../assets/images/join/4.jpg')
      },
    ],
    // 注意更换为数据库内
    text: "## NO.1 玩家行为守则\n" +
      "禁止恶意破坏他人建筑；\n" +
      "\n" +
      "禁止恶意利用 bug 进行刷物品、卡 OP 等等；\n" +
      "\n" +
      "禁止恶意偷窃他人物品；\n" +
      "\n" +
      "禁止任何私下的 RMB 交易；\n" +
      "\n" +
      "禁止恶意举报其它玩家；\n" +
      "\n" +
      "禁止在他人建筑的过程中进行干扰；\n" +
      "\n" +
      "禁止在游戏中对任何玩家包括管理员和服主等等进行人身攻击；\n" +
      "\n" +
      "禁止使用任何包含违规内容的皮肤；\n" +
      "\n" +
      "禁止恶意模仿他人游戏 ID；\n" +
      "\n" +
      "系统刷新出的村子村民、末地传送门等资源为服务器公有财产，任何人不得 以圈地的形式私自占有。（通过治疗僵尸村民获得的村民除外）；\n" +
      "\n" +
      "一经申请白名单，表示您已经同意无条件遵守以上约定。\n" +
      "## NO.2 服务器玩家委员会（管理员）守则\n" +
      "\n" +
      " 1.所有服务器玩家委员会成员都要无条件遵守所有“服务器玩家守则”中的规定；\n" +
      "\n" +
      "2.所有玩家委员会委员禁止滥用职权(包括但不限于随意禁言他人，随意踢或封禁玩家等等)；\n" +
      "\n" +
      "3.所有玩家委员会委员都要严格按照条例对违规玩家或违规管理员进行处罚，不得有任何偏袒；\n" +
      "\n" +
      "4.所有玩家委员会委员都要无条件接受玩家的监督；\n" +
      "\n" +
      "5.所有玩家委员会委员都要热心帮助他人，与玩家和谐相处；\n" +
      "\n" +
      " 6.所有玩家委员会委员&群管理员都禁止收受【服务器有偿赞助】，违者从重处理。NO.3 服务器设施管理守则\n" +
      "\n" +
      " ### Spawn 出生点管理条例:\n" +
      "1. 服务器 spawn 出生点半径 6*16（96）格内禁止申请建造私有工业设施、并极度不推荐在其半径 128 格内建造个人居住点。\n" +
      "2. 建造于服务器强加区块内的设施因时刻消耗服务器算力，只允许建造公用工业设施。若在 1 月 15 日前已经建成的私有设施，可申请向腐竹索取收购费用并向全服开放使用。\n" +
      "### 公共设施管理条例： \n" +
      "1.设施标记有参与建筑的人员以及完整的使用说明。\n" +
      "\n" +
      "2.私聊腐竹报备，较大规模设施可以索取奖励以及专属群头衔。\n" +
      "\n" +
      "3.对于强加区块内的工业设施不限制物品领取和设备使用限制，对于非强加区块内的工业设施由建筑方自行设置领取/使用限制。\n" +
      "\n" +
      "4.建筑方承担相关设施的管理和维护。\n" +
      "\n" +
      "### 私有设施管理条例：\n" +
      "1.设施标记有参与建筑的人员以及显著的私有设施标识。\n" +
      "\n" +
      "2.禁止私自使用设施以及取走设施附产物。\n" +
      "\n" +
      "3.建筑方自行确定开放对象和使用限制，并自行维护。"
  }),
  methods: {
    toQuestions() {
      this.$router.push('/questionnaire')
    }
  }
}
</script>

<style scoped lang="scss">
#join {
  margin-top: 20px;
}
</style>
