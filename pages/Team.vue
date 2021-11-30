<template>
  <div id="about-team">
    <v-container style="text-align: center;color: white">
      <h1>我们的团队</h1>
      <v-icon color="white">Teams</v-icon>
      <v-row justify="center">
        <v-card
          style="margin:20px 60px;background-color:rgba(255,255,255,0.8)"
          max-width="100vw"
          min-width="300"
        >
          <div style="text-align: center;padding: 20px 0">
            <v-avatar size="150">
              <img
                :src="require('../assets/images/teamNumber/1.jpg')"
                alt="MoMeaks"
              >
            </v-avatar>
          </div>
          <v-card-title style="text-align: center;display: block">Mo_Meak_s</v-card-title>
          <v-card-subtitle class="pb-0">
            腐竹
          </v-card-subtitle>
          <v-card-text class="text--primary" style="margin-top: 20px">
            <p>在读大学生一只</p>
          </v-card-text>
        </v-card>
      </v-row>
      <div id="team">
        <v-card
          v-for="item in teamNumbers"
          :key="item.name"
          style="margin:20px 60px;background-color:rgba(255,255,255,0.8)"
          max-width="300"
          min-width="300"
        >
          <div style="text-align: center;padding: 20px 0">
            <v-avatar size="150">
              <img
                :src="item.imgUrl"
                :alt="item.name"
              >
            </v-avatar>
          </div>
          <v-card-title style="text-align: center;display: block">
            {{ item.name }}
          </v-card-title>

          <v-card-subtitle class="pb-0">
            {{ item.job }}
          </v-card-subtitle>

          <v-card-text class="text--primary" style="margin-top: 20px">
            <p>{{ item.intro }}</p>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data: () => ({
    teamNumbers: [
      {
        name: '优酷',
        imgUrl: require('../assets/images/teamNumber/2.jpg'),
        job: 'op',
        intro: '这个人很懒......',
      },
      {
        name: 'GNK48-赛博贵物',
        imgUrl: require('../assets/images/teamNumber/3.jpg'),
        job: 'op',
        intro: '这个人很懒......',
      },
      {
        name: 'Sakura_Six',
        imgUrl: require('../assets/images/teamNumber/4.jpg'),
        job: '宣传委员',
        intro: '我叫撒库拉性别女爱好男是个咸鱼喜欢打原神搞搞Unity之流的旁门左道;' +
          '曾以大保底80发的记录成为身边原神圈中的最非之人',
      },
      {
        name: 'rabbit_99',
        imgUrl: require('../assets/images/teamNumber/5.jpg'),
        job: '技术专员',
        intro: '这个人很懒......',
      }
    ]
  })
}
</script>

<style scoped lang="scss">
#about-team {
  background: url("../assets/images/teambg.jpg") no-repeat fixed center;
  background-size: auto 100%;
  min-height: 100%;

  #team {
    display: flex;
    flex: 1 1 0;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
