<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <Header1 />
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "Header",

  components: {
    Header1: () => import("@/components/custom/header/Header1"),
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {},
};
</script>
