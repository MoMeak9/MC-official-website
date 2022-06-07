<template>
    <waterfall :imgs-arr="imgsArr"
               :img-width="300"
               height="100vh"
               @scrollReachBottom="handleReachBottom" />
</template>

<script>
import waterfall from "@/components/waterfall/waterfall";

export default {
  name: "Gallery",
  components: {
    waterfall,
  },
  data() {
    return {
      imgsArr: [
      ],
    };
  },
  methods: {
    handleReachBottom: function() {
      this.imgsArr = this.imgsArr.concat(this.imgsArr);
    },
  },
};
</script>

<style scoped>

</style>
