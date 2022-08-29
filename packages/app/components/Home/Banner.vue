<template>
  <div>
    <div class="banner1-component">
      <v-container>
        <!-- -----------------------------------------------
            Start Banner1
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="7" lg="6" class="d-flex align-center">
            <div class="text-center text-md-left">
              <v-chip small class="bg-dark" text-color="white">周目预告</v-chip>
              <h2
                class="banner1-title font-weight-bold text-uppercase white--text"
              >
                1.19【第八周目】已经到来 6月8日正式启动！
              </h2>
              <p class="white--text op-8 font-weight-regular">
                1.19是荒野更新的首个正式版，也是Java版即将到来的一次主要更新，计划于2022年发布。此次更新将会加入深暗之域和红树林沼泽生物群系及其相关内容。<br />
                这可能是我们服务器第一个长期版本哦！
              </p>
              <div class="mt-16 pt-2">
                <v-btn
                  nuxt
                  large
                  rounded
                  target="_blank"
                  href="https://minecraft.fandom.com/zh/wiki/Java%E7%89%881.19?variant=zh"
                  class="btn-custom-md"
                  depressed
                  color="white"
                  elevation="0"
                >
                  了解更多
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" lg="5">
            <img
              width="60%"
              :src="getImage('banner3')"
              alt="feature"
              class="rounded"
            />
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Banner1
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
import { getImage } from 'assets/images/getImg';

export default {
  name: 'Banner1',
  data() {
    return { getImage };
  },
  methods: {},
};
</script>
