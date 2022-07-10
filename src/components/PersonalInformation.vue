<template>
  <div class="second">
    <img src="./img/secondpage.png" alt="" />
  </div>
  <h1>Personal information</h1>
  <p>This Is Basic Information Fields</p>
  <base-dialog
    v-if="formIsInvalid && (name === '' || name.length < 2)"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Please enter valid name</p>
    </template>
    <template #actions>
      <button @click="confirmError">Okay</button>
    </template>
  </base-dialog>
  <base-dialog
    v-if="formIsInvalid && (email === '' || !email.includes('@'))"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Please enter valid email</p>
    </template>
    <template #actions>
      <button @click="confirmError">Okay</button>
    </template>
  </base-dialog>
  <!-- <base-dialog
    v-if="formIsInvalid && (phone === '' || phone.length !== 9)"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Please enter valid phone</p>
    </template>
    <template #actions>
      <button @click="confirmError">Okay</button>
    </template>
  </base-dialog> -->
  <base-dialog
    v-if="formIsInvalid && date === ''"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Please enter valid date</p>
    </template>
    <template #actions>
      <button @click="confirmError">Okay</button>
    </template>
  </base-dialog>
  <form>
    <div class="form_control">
      <input placeholder="Name*" type="text" v-model="name" />
    </div>
    <div class="form_control">
      <input placeholder="Email address*" type="text" v-model="email" />
    </div>
    <div class="form_control">
      <input placeholder="Phone number*" type="number" v-model="phone" />
    </div>
    <div class="form_control">
      <input placeholder="Date of birth*" type="text" v-model="date" />
    </div>
  </form>
  <base-back-button @click.prevent="navigatePrev">Back</base-back-button>
  <base-next-button @click.prevent="validateForm">Next</base-next-button>
</template>

<script>
export default {
  data() {
    return {
      formIsInvalid: false,
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit('setName', value);
      },
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit('setEmail', value);
      },
    },
    phone: {
      get() {
        return this.$store.state.phone;
      },
      set(value) {
        this.$store.commit('setPhone', value);
      },
    },
    date: {
      get() {
        return this.$store.state.date;
      },
      set(value) {
        this.$store.commit('setDate', value);
      },
    },
  },
  methods: {
    validateForm() {
      if (
        this.name.trim() === '' ||
        this.name.trim().length < 2 ||
        this.email.trim() === '' ||
        !this.email.trim().includes('@') ||
        // this.phone === '' ||
        // this.phone.length !== 9 ||
        this.date.trim() === ''
      ) {
        this.formIsInvalid = true;
        return;
      }
      this.$router.push('/experience');
    },
    navigatePrev() {
      if (this.$route.name == 'registration') {
        this.$router.push('/main');
      }
    },
    confirmError() {
      this.formIsInvalid = false;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&family=Open+Sans:wght@400;600;800&display=swap');

.form-control {
  margin: 0.5rem 0;
}

.form_control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 16px;
  width: 775px;
  height: 46px;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

input {
  width: 743px;
  height: 30px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  color: #212529;
  border: 0px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.form-control {
  margin: 0.5rem 0;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

img {
  position: absolute;
  height: 996px;
  width: 923px;
  left: 0px;
  top: 83px;
  border-radius: 0px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  position: absolute;
  width: 775px;
  height: 304px;
  left: 971px;
  top: 420px;
}

h1 {
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

p {
  position: absolute;
  width: 250px;
  height: 21px;
  left: 971px;
  top: 350px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;

  text-transform: capitalize;

  color: #95939a;
}
</style>
