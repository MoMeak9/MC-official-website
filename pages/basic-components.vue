<template>
  <div>
    <BannerTwo />
    <AllComponents />
    <ComingSoon />
  </div>
</template>

<script>
export default {
  components: {
    BannerTwo: () => import("@/components/shared/lp-banner/BannerTwo"),
    ComingSoon: () => import("@/components/shared/coming-soon/ComingSoon"),
    AllComponents: () => import("@/components/basic/AllComponents"),
  },

  data() {
    return {};
  },
  head() {
    return {
      title: "Basic Components",
      meta: [
        {
          hid: "description",
          name: "Next Ui Kit",
          content: "Next Ui Kit is the best way",
        },
      ],
    };
  },
};
</script>
