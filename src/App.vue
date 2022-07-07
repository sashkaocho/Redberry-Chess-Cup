<template>
  <main>
    <the-knight-cup></the-knight-cup>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  methods: {
    goToStep(step) {
      this.$store.state.currentStep = step;
    },
  },
};
</script>

<style></style>
