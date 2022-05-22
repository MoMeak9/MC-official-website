<template>
  <div>
    <div class='feature3-component mini-spacer'>
      <v-container class='position-relative'>
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->
        <v-row>
          <v-col cols='12' lg='10'>
            <v-img
              :src="require('@/assets/images/features/3/feature-img.jpg')"
              alt='feature'
              class='rounded'
            />
          </v-col>
          <v-col cols='12' md='7' lg='5' class='feature3-card'>
            <v-card class='card-shadow'>
              <v-card-text>
                <div class='pa-10 text-center'>
                  <h3 class='feature3-title font-weight-medium'>
                    MineCraft公益社区
                  </h3>
                  <p class='text-left'>
                    这是一个温馨和谐的服务器，提供了稳定流畅的体验，自从2019年开服以来我们努力创建一个环境良好更公平公正的游戏氛围，和玩家们一起度过了很多愉快的时光,在这里的日子将会是你值得回忆的美好。
                    我们保证不做影响平衡、破坏公平的行为。服务器开放白名单以及正版验证，欢迎玩家提出意见或者举报违规行为，请大家自觉遵守游戏规则。
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 3 Text
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Feature3',
  data() {
    return {}
  },
  methods: {}
}
</script>
