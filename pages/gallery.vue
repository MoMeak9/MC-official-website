<template>
  <waterfall :imgs-arr="imgsArr"
             :img-width="300"
             height="100vh"
             @scrollReachBottom="handleReachBottom" />
</template>

<script>
import waterfall from "@/components/Waterfall/waterfall";
import { getGallery } from "@/api/website";

export default {
  name: "Gallery",
  components: {
    waterfall,
  },
  async asyncData() {
    const { data: imgsArr } = await getGallery();
    return {
      imgsArr,
    };
  },
  data() {
    return {
      imgsArr: [],
      page: 1,
      pageSize: 10,
    };
  },
  methods: {
    async handleReachBottom() {
      const { data } = await getGallery({
        page: ++this.page,
        pageSize: ++this.pageSize,
      });
      this.imgsArr = this.imgsArr.concat(data);
    },
  },
};
</script>

<style scoped>

</style>
