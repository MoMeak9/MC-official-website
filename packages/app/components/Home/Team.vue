<template>
  <div>
    <div class="team-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Team Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                我们的团队 Our Team
              </h2>
              <p></p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Team Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Team
        ----------------------------------------------- -->
        <v-row class="mt-13">
          <v-col
            v-for="(item, index) in teamNumbers"
            :key="index"
            cols="12"
            md="6"
            lg="3"
          >
            <v-card elevation="0" class="team-card overflow-hidden mb-15">
              <div class="social-overlay">
                <v-img :src="item.image_url" alt="team" />
                <div class="img-overlay">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 class="team-title font-weight-medium font-18">
                  {{ item.name }}
                </h5>
                <p class="team-subtitle">
                  {{ item.role }}
                </p>
              </div>
              <p>
                {{ item.description }}
              </p>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Team
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Team',
  props: {
    teamNumbers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
