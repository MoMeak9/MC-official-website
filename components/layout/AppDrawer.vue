<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AppDrawer",
  props: {},
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '首页',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: '加入我们',
          to: '/join'
        },
        {
          icon: 'mdi-apps',
          title: '卫星地图',
          to: '/map'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '关于我们',
          to: '/inspire'
        }
      ],
      miniVariant: false,
    }
  }, methods: {
    changeDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style scoped>

</style>
