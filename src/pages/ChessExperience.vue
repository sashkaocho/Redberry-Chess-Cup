<template>
  <div class="third">
    <img src="../components/img/thirdpage.png" alt="" />
  </div>
  <h1 class="reg_title">first step is done, continue to finish onboarding</h1>
  <hr />
  <h1>
    "many have become chess masters; no one has become the master of chess."
  </h1>
  <h1 class="author">- siegbert tarrasch</h1>
  <the-progress></the-progress>
  <h2>Chess Experience</h2>
  <strong>This Is Basic Information Fields</strong>
  <base-dialog v-if="formIsInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Please fill all fields</p>
    </template>
  </base-dialog>
  <form>
    <h3 class="level_title">Level of knowledge*</h3>
    <div class="level">
      <select v-model="level" name="nameSelect">
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Professional">Professional</option>
      </select>
    </div>
    <h3 class="char_title">Choose your character*</h3>
    <div class="character">
      <select name="nameSelect" @click="loadCharacters" v-model="character">
        <chess-characters
          v-for="character in characters"
          :name="character.name"
          :image="character.image"
          :key="character.id"
          :value="character.id"
        ></chess-characters>
      </select>
    </div>
    <h3>Have you participated in the Redberry Championship?</h3>
    <div class="yes">
      <input
        type="radio"
        id="ans"
        value="true"
        name="rating"
        v-model="answer"
      />
      <label for="ans">Yes</label>
    </div>
    <div class="no">
      <input
        type="radio"
        id="ans"
        value="false"
        name="rating"
        v-model="answer"
      />
      <label for="ans">No</label>
    </div>
  </form>
  <base-back-button @click.prevent="navigatePrev">Back</base-back-button>
  <button id="done" @click.prevent="validateForm">Done</button>
</template>

<script>
import ChessCharacters from '../components/ChessCharacters.vue';

export default {
  components: {
    ChessCharacters,
  },
  data() {
    return {
      characters: [],
      formIsInvalid: false,
    };
  },
  computed: {
    answer: {
      get() {
        return this.$store.state.answer;
      },
      set(value) {
        this.$store.commit('setAnswer', value);
      },
    },
    level: {
      get() {
        return this.$store.state.level;
      },
      set(value) {
        this.$store.commit('setLevel', value);
      },
    },
    character: {
      get() {
        return this.$store.state.character;
      },
      set(value) {
        this.$store.commit('setCharacter', value);
      },
    },
  },
  mounted() {
    if (localStorage.answer) {
      this.answer = localStorage.answer;
    }
    if (localStorage.level) {
      this.level = localStorage.level;
    }
    if (localStorage.character) {
      this.character = localStorage.character;
    }
  },
  watch: {
    answer(newAnswer) {
      localStorage.answer = newAnswer;
    },
    level(newLevel) {
      localStorage.level = newLevel;
    },
    character(newCharacter) {
      localStorage.character = newCharacter;
    },
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
    validateForm() {
      if (
        this.answer.trim() === '' ||
        this.level.trim() === '' ||
        this.character.trim() === ''
      ) {
        this.formIsInvalid = true;
        return;
      }
      this.$router.push('/complete');
      fetch('https://project-adcfb-default-rtdb.firebaseio.com//users.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.$store.state.name,
          email: this.$store.state.email,
          date_of_birth: this.$store.state.date,
          experience_level: this.level,
          already_participated: this.answer,
          character_id: this.character,
        }),
      })
        .then((response) => {
          if (response.ok) {
            //...
          } else {
            throw new Error('Could not save data');
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });

      (this.$store.state.name = ''),
        (this.$store.state.email = ''),
        (this.$store.state.date = '');
      this.level = '';
      this.answer = null;
      this.character = '';
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
    confirmError() {
      this.formIsInvalid = false;
    },
  },
};
</script>

<style scoped>
.third {
  position: absolute;
  width: 923px;
  height: 1046px;
  left: 0px;
  top: 34px;
}

h3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 16px;

  position: absolute;
  width: 775px;
  height: 46px;
  left: 960px;
  top: 617px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #212529;

  background: #ffffff;
  border-radius: 4px;
}

.yes {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 58px;
  height: 24px;
  left: 976px;
  top: 710px;

  background: rgba(255, 255, 255, 1e-6);
}

.no {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 54px;
  height: 24px;
  left: 1050px;
  top: 710px;

  background: rgba(255, 255, 255, 1e-6);
}

/* form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  position: absolute;
  width: 775px;
  height: 304px;
  left: 971px;
  top: 500px;
} */

h1 {
  position: absolute;
  width: 615px;
  height: 83px;
  left: 117px;
  top: 261px;
  font-family: 'Nunito';
  font-style: italic;
  font-weight: 800;
  font-size: 26px;
  line-height: 35px;
  text-transform: uppercase;
  color: #212529;
}

.author {
  position: absolute;
  width: 266px;
  height: 33px;
  left: 466px;
  top: 376px;

  font-family: 'Nunito';
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  text-transform: uppercase;
  color: #093f68;
}

.level_title {
  position: absolute;
  width: 392px;
  height: 20px;
  left: 961px;
  top: 435px;
  background: #ffffff;
  color: #212529;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
}

.char_title {
  position: absolute;
  width: 392px;
  height: 20px;
  left: 1375px;
  top: 435px;
  background: #ffffff;
  color: #212529;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
}

.reg_title {
  position: absolute;
  width: 383px;
  height: 24px;
  left: 971px;
  top: 20px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;

  color: #212529;
}

hr {
  position: absolute;
  width: 999px;
  height: 0px;
  left: 923px;
  top: 75px;

  border: 1px solid rgba(185, 180, 196, 0.3);
}

#done {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 13px 24px;
  gap: 10px;

  position: absolute;
  width: 99px;
  height: 53px;
  left: 1669px;
  top: 873px;

  background: #212529;
  border-radius: 8px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-transform: capitalize;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
}

h2 {
  position: absolute;
  width: 500px;
  height: 48px;
  left: 971px;
  top: 278px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 150%;

  color: #000000;
}

strong {
  position: absolute;
  width: 250px;
  height: 21px;
  left: 971px;
  top: 365px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;

  text-transform: capitalize;

  color: #95939a;
}

.level {
  position: absolute;
  width: 392px;
  height: 46px;
  left: 961px;
  top: 491px;
  background: #ffffff;
  color: #212529;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.125);
  border-radius: 4px;
}

.character {
  position: absolute;
  width: 392px;
  height: 46px;
  left: 1376px;
  top: 491px;
  background: #ffffff;
  color: #212529;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  display: flex;
  flex-direction: column;

  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.125);
  border-radius: 4px;
}

option {
  color: #212529;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
}

select {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  position: absolute;
  width: 312px;
  height: 30px;
  left: 16px;
  top: 8px;
}

label {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}
</style>
