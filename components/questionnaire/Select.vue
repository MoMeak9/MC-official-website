<template>
  <div id="select">
    <h3>{{ item.title }}</h3>
    <div v-if="item.isMultiple===true">
      <v-checkbox
        v-for="subItem in item.subItem"
        :key="subItem.value"
        v-model="content"
        :label="subItem.label"
        :value="subItem.value"
      ></v-checkbox>
    </div>
    <div v-else>
      <v-radio-group v-model="content" row>
        <v-radio
          v-for="subItem in item.subItem"
          :key="subItem.value"
          :label="subItem.label"
          :value="subItem.value"
        ></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    item: {
      default() {
        return {
          title: 'title',
          subtitle: 'subtitle',
          isMultiple: false,
          content: '',
          subItem: [
            {
              value: '',
              label: '',
            }
          ]
        }
      },
      type: Object
    },
    index: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      content: []
    }
  },
  watch: {
    content() {
      this.$emit('change', this.content, this.index)
    }
  }
}
</script>

<style scoped lang="scss">
#select {
  h3 {
    margin-bottom: 15px;
  }
}
</style>
