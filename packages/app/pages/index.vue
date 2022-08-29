<template>
  <div>
    <Banner />
    <Feature2 />
    <Portfolio :history-list="historyList" />
    <Banner1 />
    <Team :team-numbers="teamNumbers" />
    <ComingSoon />
  </div>
</template>

<script>
import { getTeamMember } from '@/api/website';
import { getPeriod } from '@/api/website';

export default {
  components: {
    Team: () => import('@/components/Home/Team'),
    Banner: () => import('@/components/Home/BannerFirst'),
    ComingSoon: () => import('@/components/Home/ComingSoon'),
    Portfolio: () => import('@/components/Home/Portfolio'),
    Banner1: () => import('@/components/Home/Banner'),
    Feature2: () => import('@/components/Home/Feature'),
  },
  asyncData() {
    return Promise.all([getTeamMember(), getPeriod()]).then((res) => {
      return {
        teamNumbers: res[0].data,
        historyList: res[1].data,
      };
    });
  },
  data() {
    return {
      teamNumbers: [],
      historyList: [],
    };
  },
  head() {
    return {};
  },
};
</script>
