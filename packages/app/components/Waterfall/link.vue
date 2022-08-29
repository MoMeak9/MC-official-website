<template>
  <div class="link">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: ['to'],
};
</script>
