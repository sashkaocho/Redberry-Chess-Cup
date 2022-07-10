<template>
  <div class="second">
    <img src="../components/img/secondpage.png" alt="" />
  </div>
  <h1 class="reg_title">Start Creating Your Account</h1>
  <hr />
  <h1>"when you see a good move, look for a better one."</h1>
  <h1 class="author">-emanuel lasker</h1>
  <h2>Personal information</h2>
  <strong>This Is Basic Information Fields</strong>
  <base-dialog
    v-if="formIsInvalid && (name === '' || name.length < 2)"
    title="Invalid Name"
    @close="confirmError"
  >
    <template #default>
      <p>Please enter valid name</p>
    </template>
  </base-dialog>
  <base-dialog
    v-if="formIsInvalid && (email === '' || !email.includes('@'))"
    title="Invalid Email"
    @close="confirmError"
  >
    <template #default>
      <p>Please enter valid email</p>
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
  </base-dialog> -->
  <base-dialog
    v-if="formIsInvalid && date === ''"
    title="Invalid Date"
    @close="confirmError"
  >
    <template #default>
      <p>Please enter valid date</p>
    </template>
  </base-dialog>
  <form>
    <div class="form_control" :class="{ invalid: checkName === 'invalid' }">
      <input placeholder="Name*" type="text" v-model="name" />
      <img
        v-if="name !== '' && name.length >= 2"
        class="valid1"
        src="../components/img/Vector6.png"
        alt=""
      />
    </div>
    <div class="form_control" :class="{ invalid: checkEmail === 'invalid' }">
      <input placeholder="Email address*" type="text" v-model="email" />
      <img
        v-if="email !== '' && email.includes('@')"
        class="valid2"
        src="../components/img/Vector6.png"
        alt=""
      />
    </div>
    <div class="form_control" :class="{ invalid: checkPhone === 'invalid' }">
      <input placeholder="Phone number*" type="number" v-model="phone" />
      <img
        v-if="phone !== '' && phone.length === 9"
        class="valid3"
        src="../components/img/Vector6.png"
        alt=""
      />
    </div>
    <div class="form_control" :class="{ invalid: checkDate === 'invalid' }">
      <input placeholder="Date of birth*" type="date" v-model="date" />
      <img
        v-if="date !== ''"
        class="valid4"
        src="../components/img/Vector6.png"
        alt=""
      />
    </div>
  </form>
  <base-back-button @click.prevent="navigatePrev">Back</base-back-button>
  <base-next-button @click="validateInput" @click.prevent="validateForm"
    >Next</base-next-button
  >
</template>

<script>
export default {
  data() {
    return {
      formIsInvalid: false,
      checkName: 'pending',
      checkEmail: 'pending',
      checkPhone: 'pending',
      checkDate: 'pending',
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
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    // if (localStorage.phone) {
    //   this.phone = localStorage.phone;
    // }
    if (localStorage.date) {
      this.date = localStorage.date;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    email(newEmail) {
      localStorage.email = newEmail;
    },
    // phone(newName) {
    //   localStorage.name = newName;
    // },
    date(newDate) {
      localStorage.name = newDate;
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
    validateInput() {
      if (this.name.trim() === '' || this.name.trim().length < 2) {
        this.checkName = 'invalid';
      } else {
        this.checkName = 'valid';
      }

      if (this.email.trim() === '' || !this.email.trim().includes('@')) {
        this.checkEmail = 'invalid';
      } else {
        this.checkEmail = 'valid';
      }

      // if (this.phone === '' || this.phone.length !== 9) {
      //   this.checkPhone = 'invalid';
      // } else {
      //   this.checkPhone = 'valid';
      // }

      if (this.date.trim() === '') {
        this.checkDate = 'invalid';
      } else {
        this.checkDate = 'valid';
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');

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

.valid1 {
  position: absolute;
  height: 20px;
  width: 20px;
  left: 770px;
  top: 25px;
  border-radius: 0px;
}

.valid2 {
  position: absolute;
  height: 20px;
  width: 20px;
  left: 770px;
  top: 125px;
  border-radius: 0px;
}

.valid3 {
  position: absolute;
  height: 20px;
  width: 20px;
  left: 770px;
  top: 225px;
  border-radius: 0px;
}

.valid4 {
  position: absolute;
  height: 20px;
  width: 20px;
  left: 770px;
  top: 325px;
  border-radius: 0px;
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

.form_control.invalid input {
  border-color: red;
  color: red;
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

h1 {
  position: absolute;
  width: 423px;
  height: 83px;
  left: 132px;
  top: 295px;

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
  width: 280px;
  height: 33px;
  left: 132px;
  top: 402px;
  z-index: 7;

  font-family: 'Nunito';
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;

  text-transform: uppercase;
  color: #e5e6e8;
}

hr {
  position: absolute;
  width: 999px;
  height: 0px;
  left: 923px;
  top: 75px;

  border: 1px solid rgba(185, 180, 196, 0.3);
}

.reg_title {
  position: absolute;
  width: 215px;
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
</style>
