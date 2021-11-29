<template>
  <div id="input">
    <h3>{{ item.title }}</h3>
    <v-text-field
      style="max-width: 90vw"
      :value="item.content"
      :label="item.subtitle"
      placeholder="官网正版ID"
      outlined
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    item: {
      default() {
        return {
          title: 'title',
          subtitle: 'subtitle',
          content: 'content'
        }
      },
      type: Object
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
#input {
  h3 {
    margin-bottom: 15px;
  }
}
</style>
