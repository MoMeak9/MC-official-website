<template>
<v-main style="background-color: #3e4555">
  123123
  <br>
  asd
  asd
  as
  d


</v-main>
</template>

<script lang="ts">
export default {
  name: "index",
  data() {
    return {
      list:[]
    };
  },
  asyncData(){

  },
  methods: {
    getList() {
      this.$http.get("/api/list").then(res => {
        this.list = res.data;
      });
    }
  },
}
</script>

<style scoped>

</style>
