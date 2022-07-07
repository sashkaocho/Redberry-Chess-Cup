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
    <div>
      <p><input type="radio" name="answer" value="Yes" /> Yes</p>
      <p><input type="radio" name="answer" value="No" /> No</p>
    </div>
    <button @click.prevent="navigatePrev">Back</button>
    <button @click.prevent="navigateNext">Done</button>
  </form>
</template>

<script>
export default {
  methods: {
    loadCharacters() {
      fetch();
    },
    navigatePrev() {
      if (this.$route.name == 'experience') {
        this.$router.push('/registration');
      }
    },
    navigateNext() {
      if (this.$route.name == 'experience') {
        this.$router.push('/complete');
      }
    },
  },
};
</script>

<style></style>
