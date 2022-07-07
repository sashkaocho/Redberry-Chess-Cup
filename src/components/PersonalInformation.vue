<template>
  <h2>Personal Information</h2>
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
  <form @submit.prevent="validateForm">
    <div>
      <input placeholder="Name*" type="text" v-model="name" />
    </div>
    <div>
      <input placeholder="Email address*" type="text" v-model="email" />
    </div>
    <div>
      <input placeholder="Phone number*" type="number" v-model="phone" />
    </div>
    <div>
      <input placeholder="Date of birth*" type="text" v-model="date" />
    </div>
    <button @click.prevent="navigatePrev">Back</button>
    <button>Next</button>
  </form>
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
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.form-control {
  margin: 0.5rem 0;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
