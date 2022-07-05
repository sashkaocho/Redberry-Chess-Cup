<template>
  <main>
    <main-page v-if="this.$store.state.currentStep === 1"></main-page>
    <personal-information
      v-if="this.$store.state.currentStep === 2"
    ></personal-information>
    <chess-experience
      v-if="this.$store.state.currentStep === 3"
    ></chess-experience>
    <completed-boarding
      v-if="this.$store.state.currentStep === 4"
    ></completed-boarding>
  </main>
</template>

<script>
import MainPage from './components/MainPage.vue';
import PersonalInformation from './components/PersonalInformation.vue';
import ChessExperience from './components/ChessExperience.vue';
import CompletedBoarding from './components/CompletedBoarding.vue';

export default {
  components: {
    MainPage,
    PersonalInformation,
    ChessExperience,
    CompletedBoarding,
  },
  methods: {
    goToStep(step) {
      this.$store.state.currentStep = step;
    },
  },
};
</script>

<style></style>
