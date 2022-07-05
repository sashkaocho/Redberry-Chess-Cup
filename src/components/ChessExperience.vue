<template>
  <h2>Chess Experience</h2>
  <p>This Is Basic Information Fields</p>
  <form>
    <div>
      <input placeholder="Level of knowledge*" type="text" />
      <select name="nameSelect">
        <option></option>
        <option value="1">Beginner</option>
        <option value="2">Intermediate</option>
        <option value="3">Professional</option>
      </select>
    </div>
    <div>
      <input placeholder="Choose your character*" type="text" />
      <select name="nameSelect">
        <option></option>
      </select>
    </div>
    <button @click.prevent="goToStep(2)">Back</button>
    <button @click.prevent="goToStep(4)">Done</button>
  </form>
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
