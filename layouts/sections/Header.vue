<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <Header2/>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "Header",

  components: {
    Header2: () => import("@/components/custom/header/Header2"),
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
  }
};
</script>
