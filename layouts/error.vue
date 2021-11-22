<template>
  <v-app dark>
    <v-row
      v-if="error.statusCode === 404"
      justify="center"
      align="center">
      <v-img
        height="400px"
        contain
        :src="require('/assets/images/404.svg')">
      </v-img>
    </v-row>
    <v-row justify="center">
      <NuxtLink to="/">
        回到首页
      </NuxtLink>
    </v-row>
  </v-app>
</template>

<script>
import sentMessage from "../utils/sentMessage";

export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  mounted() {
    sentMessage.error(this.$store, {message: '页面不存在，送你回去！'})
    setTimeout(() => {
      this.$router.push('/')
    }, 3000)
  },
  methods: {
    back() {
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
