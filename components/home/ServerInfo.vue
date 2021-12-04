<template>
  <v-card
    style="margin: 40px auto 0"
    max-width="350"
  >
    <v-card-text>
      <div>{{ serverInfo.serverName }}</div>
      <p class="text-h4 text--primary">
        {{ serverInfo.serverName }}
      </p>
      <strong style="font-size: 20px">
        Players:
        {{ Number(serverInfo.current_players) + 2 }}/{{ serverInfo.max_players }}
      </strong>
      <div style="margin-top: 10px">
        <v-icon>
          1.18
        </v-icon>
        <v-icon color="green">
          Online
        </v-icon>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ServerInfo",
  props: {
    serverInfo: {
      default() {
        return {}
      },
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
