<template>
  <div class="developing">
    <v-img
      contain
      height="60vh"
      max-width="100%"
      :src="getImage('developing')" />
    <h4>
      工具人一号还在紧锣密鼓滴开发中......
    </h4>
  </div>
</template>

<script>
import { getImage } from "assets/images/getImg";

export default {
  name: "Developing",
  data() {
    return {
      getImage,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.developing {
  padding: 20px;
  text-align: center;
}
</style>
