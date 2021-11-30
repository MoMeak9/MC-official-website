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

      <v-list-group>
        <template #activator>
          <v-list-item-icon>
            <v-icon>mdi-chart-bubble</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>关于我们</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="item in aboutUs"
          :key="item.to"
          :to="item.to"
          router
          exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
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
          icon: 'mdi-apps',
          title: '社区赞助',
          to: '/sponsorship'
        }
      ],
      aboutUs: [
        {
          icon: 'mdi-apps',
          title: '关于社区',
          to: '/about'
        },
        {
          icon: 'mdi-apps',
          title: '我们的团队',
          to: '/team'
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
