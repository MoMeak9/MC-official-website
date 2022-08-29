<template>
  <div class="user-center">
    <v-main>
      <v-container class="container">
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-subheader>{{ card }}</v-subheader>
              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item :key="n">
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
        <nuxt-child />
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data: () => {
    return {
      cards: ["Today", "Yesterday"],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.user-center {
  text-align: center;
  padding: 20px;
}
</style>
