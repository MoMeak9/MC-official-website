<template>
  <div>
    <div class="portfolio-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Portfolio Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">历史周目</h2>
              <p>自2019年4月创服以来，我们经历了版本1.13-1.19。累计七个周目，现在我们即将迎来第八周目......</p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Portfolio
        ----------------------------------------------- -->
        <v-row class="mt-13">
          <v-col v-for="(item, index) of historyList" :key="index" cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden">
              <div class="portfolio-img">
                <img
                  src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/images%2Fperiods%2F1.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-card-text>
                <h5 class="font-weight-medium font-18">
                  {{ item.time }}
                </h5>
                <p class="font-14 mb-0">
                  {{ item.content }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Portfolio",
  data() {
    return {
      historyList: [
        {
          time: "【一周目】2019年4月6日",
          content: "1.13.2服务器开服，启用白名单审核入会制；服务器开启第一周目，迎接第一位玩家。",
        },
        {
          time: "【二周目】2019年6月3日",
          content: "服务器1.14.x第二周目启动",
        },
        {
          time: "【三周目】2020年1月14日",
          content: "服务器1.15.2第三周目，服务器向纯净服靠拢",
        },
        {
          time: "【四周目】2020年1月20日",
          content: "开启内外服，内服纯净并开启正版验证，外服（第四周目）为插件服",
        },
        {
          time: "【五周目】2020年9月7日",
          content: "服务器1.16.3第五周目，内外服合并，开启正版验证",
        },
        {
          time: "【六周目】2020年11月5日",
          content: "服务器1.17.X第六周目开启，正式会员超过300人",
        },
        {
          time: "【七周目】2021年12月1日",
          content: "服务器1.18.X第七周目启动...",
        },
        {
          time: "【八周目】待定......",
          content: "服务器1.19第八周目启动...",
        },
      ],
    };
  },
  methods: {},
};
</script>
