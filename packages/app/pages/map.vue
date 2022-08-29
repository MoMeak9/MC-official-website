<template>
  <div class="map">
    <iframe
      src="https://map.lwmc.net/"
      height="100%"
      width="100%"
      marginheight="0"
      marginwidth="0"
      frameborder="no"
      scrolling="no"
    />
  </div>
</template>

<script>
export default {
  name: 'Map',
};
</script>

<style scoped lang="scss">
.map {
  height: 100vh;
}
</style>
