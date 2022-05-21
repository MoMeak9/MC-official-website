<template>
  <div>
    <Banner/>
    <Feature2/>
    <Portfolio/>
    <Banner1/>
    <Team/>
    <ComingSoon/>
  </div>
</template>

<script>
export default {
  head() {
    return {};
  },

  data() {
    return {};
  },
  components: {
    Team: () => import("@/components/custom/team/Team"),
    Banner: () => import("@/components/shared/lp-banner/Banner"),
    ComingSoon: () => import("@/components/shared/coming-soon/ComingSoon"),
    Portfolio: () => import("@/components/custom/portfolio/Portfolio"),
    Banner1: () => import("@/components/custom/banner/Banner1"),
    Feature2: () => import("@/components/custom/features/Feature3"),
  },
};
</script>
