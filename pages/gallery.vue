<template>
  <waterfall :imgs-arr="imgsArr"
             :img-width="300"
             height="100vh"
             @scrollReachBottom="handleReachBottom">
  </waterfall>
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
    const page = 1;
    const pageSize = 24;
    const { data: imgsArr } = await getGallery({
      page,
      pageSize,
    });
    return {
      imgsArr,
      page,
      pageSize,
    };
  },
  data() {
    return {
      imgsArr: [],
      page: 0,
      pageSize: 0,
    };
  },
  methods: {
    async handleReachBottom() {
      const { data } = await getGallery({
        page: ++this.page,
        pageSize: 10,
      });
      if(data.length===0){
        this.imgsArr = this.imgsArr.concat(this.imgsArr);
      }
      this.imgsArr = this.imgsArr.concat(data);
    },
  },
};
</script>

<style scoped>

</style>
