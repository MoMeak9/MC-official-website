<template>
  <!--  <v-container class="container rounded my-sm-16 pa-12">-->
  <!--    <v-row class="ma-auto">-->
  <!--      <v-col cols="12" md="5">-->
  <!--        <p class="text-h3 black&#45;&#45;text mb-4 mb-md-6">如果你也想支持我们</p>-->
  <!--        <p class="text-h3 black&#45;&#45;text mb-4 mb-md-6">请扫下方二维码</p>-->
  <!--        <p class="text-h3 black&#45;&#45;text mb-8 mb-md-12">感谢您的支持</p>-->
  <!--        <div class="d-flex">-->
  <!--          <div>-->
  <!--            <v-img-->
  <!--              max-height="150"-->
  <!--              max-width="150"-->
  <!--              :src="require('@/assets/images/sponsor/QRcode/支付宝.png')"-->
  <!--              alt="支付宝收款码"-->
  <!--              class="rounded"-->
  <!--            ></v-img>-->
  <!--            <p class="text-center mt-2">支付宝</p>-->
  <!--          </div>-->
  <!--          <div class="ml-6 ml-md-12">-->
  <!--            <v-img-->
  <!--              max-height="150"-->
  <!--              max-width="150"-->
  <!--              :src="require('@/assets/images/sponsor/QRcode/微信.png')"-->
  <!--              alt="微信收款码"-->
  <!--              class="rounded"-->
  <!--            ></v-img>-->
  <!--            <p class="text-center mt-2">微信</p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <v-img-->
  <!--          max-width="240"-->
  <!--          :src="require('@/assets/images/sponsor/sponsorBackground.png')"-->
  <!--          alt="backgroundIMG"-->
  <!--          class="d-none d-md-block mt-8 mt-md-10 ml-n4"-->
  <!--        ></v-img>-->
  <!--      </v-col>-->
  <!--      <v-col cols="12" md="7" class="my-auto">-->
  <!--        <p class="text-h3 black&#45;&#45;text mb-8 mb-md-12">特别鸣谢</p>-->
  <!--        <v-data-table-->
  <!--          loading-->
  <!--          loading-text="加载中... 请稍后"-->
  <!--          :headers="sponsorHeaders"-->
  <!--          :items="sponsorList"-->
  <!--          :items-per-page="5"-->
  <!--          class="elevation-1"-->
  <!--        ></v-data-table>-->
  <!--      </v-col>-->
  <!--    </v-row>-->
  <!--  </v-container>-->
  <developing></developing>
</template>

<script>
import { getSponsorList } from '~/api/website';

export default {
  name: 'Sponsor',
  components: {
    Developing: () => import('@/layouts/developing'),
  },
  data() {
    return {
      sponsorHeaders: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'user_game_id',
        },
        { text: '赞助额', value: 'total_number' },
      ],
      loadingState: true,
      sponsorList: [
        {
          user_game_id: 'lili0',
          total_number: 9239,
        },
        {
          user_game_id: 'lili1',
          total_number: 9239,
        },
        {
          user_game_id: 'lili2',
          total_number: 9239,
        },
        {
          user_game_id: 'lili3',
          total_number: 9239,
        },
        {
          user_game_id: 'lili4',
          total_number: 9239,
        },
        {
          user_game_id: 'lili5',
          total_number: 9239,
        },
        {
          user_game_id: 'lili6',
          total_number: 9239,
        },
      ],
      pages: {
        page: 1,
        pageSize: 10,
      },
    };
  },
  mounted() {
    // this.getSponsors();
  },
  methods: {
    getSponsors() {
      getSponsorList(this.pages)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  background-color: #90caf9;
}
</style>
