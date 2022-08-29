<template>
  <developing></developing>
</template>

<script>
export default {
  name: 'About',
  components: {
    Developing: () => import('@/layouts/developing'),
  },
};
</script>

<style scoped></style>
