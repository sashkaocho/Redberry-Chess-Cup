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
      <select name="nameSelect" @click="loadCharacters">
        <option value=""></option>
        <chess-characters
          v-for="character in characters"
          :name="character.name"
          :image="character.image"
          :key="character.id"
        ></chess-characters>
      </select>
    </div>
    <div>
      <p>
        <input type="radio" name="answer" value="Yes" />
        Yes
      </p>
      <p><input type="radio" name="answer" value="No" /> No</p>
    </div>
    <button @click.prevent="navigatePrev">Back</button>
    <button @click.prevent="navigateNext">Done</button>
  </form>
</template>

<script>
import ChessCharacters from './ChessCharacters.vue';

export default {
  components: {
    ChessCharacters,
  },
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    loadCharacters() {
      fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          // console.log(data[0].name);
          const characters = [];
          for (const id in data) {
            characters.push({
              id: id,
              name: data[id].name,
              image: data[id].image,
            });
          }
          // console.log(characters);
          this.characters = characters;
        });
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
