import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      name: '',
      email: '',
      phone: '',
      date: '',
      level: '',
      character: '',
      answer: null,
    };
  },
  mutations: {
    setName(state, value) {
      state.name = value;
    },
    setEmail(state, value) {
      state.email = value;
    },
    setPhone(state, value) {
      state.phone = value;
    },
    setDate(state, value) {
      state.date = value;
    },
    setLevel(state, value) {
      state.level = value;
    },
    setCharacter(state, value) {
      state.character = value;
    },
    setAnswer(state, value) {
      state.answer = value;
    },
  },
});

export default store;
