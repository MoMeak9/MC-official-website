<template>
  <div>
    <div class='team-component mini-spacer'>
      <v-container>
        <!-- -----------------------------------------------
            Start Team Text
        ----------------------------------------------- -->
        <v-row justify='center'>
          <v-col cols='12' sm='10' md='9' lg='7'>
            <div class='text-center'>
              <h2 class='section-title font-weight-medium'>
                我们的团队 Our Team
              </h2>
              <p>

              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Team Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Team
        ----------------------------------------------- -->
        <v-row class='mt-13'>
          <v-col
            v-for='(item,index) in teamNumbers'
            :key='index'
            cols='12'
            md='6'
            lg='3'>
            <v-card elevation='0' class='team-card overflow-hidden mb-15'>
              <div class='social-overlay'>
                <v-img
                  :src='getImage(item.imgUrl)'
                  alt='team'
                />
                <div class='img-overlay'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i class='mdi mdi-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='mdi mdi-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='mdi mdi-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='mdi mdi-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 class='team-title font-weight-medium font-18'>
                  {{ item.name }}
                </h5>
                <p class='team-subtitle'>
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
<script lang='ts'>
import { getImage } from '../../../assets/images/getImg'

export default {
  name: 'Team',
  data() {
    return {
      getImage,
      teamNumbers: [
        {
          name: 'MoMeaks',
          imgUrl: 'MoMeaks',
          role: 'op',
          description: '他说让腐竹先帮他写一下'
        },
        {
          name: 'youkw',
          imgUrl: 'youkw',
          role: 'op',
          description: '他说让腐竹先帮他写一下'
        },
        {
          name: 'risayama',
          imgUrl: 'risayama',
          role: 'op',
          description: '专业摸鱼的后台技术'
        },
        {
          name: 'Sakura_Six',
          imgUrl: 'Sakura_Six',
          role: '宣传委员',
          description: '我叫撒库拉性别女爱好男是个咸鱼喜欢打原神搞搞Unity之流的旁门左道;' +
            '曾以大保底80发的记录成为身边原神圈中的最非之人'
        },
        {
          name: 'rabbit_99',
          imgUrl: 'rabbit_99',
          role: '技术专员',
          description: '摸鱼型生电玩家'
        }
      ]
    }
  },
  methods: {}
}
</script>
