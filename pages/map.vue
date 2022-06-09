<template>
  <div>
    <developing></developing>
  </div>
</template>

<script>
export default {
  name: "Map",
  components: {
    Developing: () => import("@/layouts/developing"),
  },
};
</script>

<style scoped></style>
