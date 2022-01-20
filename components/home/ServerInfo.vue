<template>
  <div id="server-info">
    <v-card>
      <v-card-text>
        <div>模组生存 1.7.10</div>
        <p class="text-h4 text--primary">
          工业模组生存
        </p>
        <strong style="font-size: 20px">
          Players: ~/~
        </strong>
        <div style="margin-top: 10px">
          <v-icon>
            1.7.10
          </v-icon>
          <v-icon color="red"
                  right>
            暂未开服
          </v-icon>
        </div>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-text>
        <div>纯净生存服</div>
        <p class="text-h4 text--primary">
          {{ serverInfo.serverName }}
        </p>
        <strong style="font-size: 20px">
          Players:
          {{ Number(serverInfo.current_players) }}/{{ serverInfo.max_players }}
        </strong>
        <div style="margin-top: 10px">
          <v-icon>
            1.18
          </v-icon>
          <v-icon color="green"
                  right>
            Online
          </v-icon>
        </div>
      </v-card-text>
    </v-card>
  </div>
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

<style scoped lang="scss">
#server-info {
  display: flex;
  flex-wrap: wrap;
  max-width: 950px;
  justify-content: space-between;
  margin: 1rem auto 0;

  .v-card {
    width: 400px;
    margin-top: 1rem;
  }
}
</style>
