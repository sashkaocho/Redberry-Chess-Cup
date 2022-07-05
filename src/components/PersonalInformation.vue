<template>
  <h2>Personal Information</h2>
  <p>This Is Basic Information Fields</p>
  <base-dialog v-if="formIsInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>
        Please, check all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
    </template>
    <template #actions>
      <button @click="confirmError">Okay</button>
    </template>
  </base-dialog>
  <form @submit.prevent="validateForm">
    <div>
      <input placeholder="Name*" type="text" ref="nameInput" />
    </div>
    <div>
      <input placeholder="Email address*" type="text" ref="emailInput" />
    </div>
    <div>
      <input placeholder="Phone number*" type="number" ref="phoneInput" />
    </div>
    <div>
      <input placeholder="Date of birth*" type="text" ref="dataInput" />
    </div>
    <button @click.prevent="goToStep(1)">Back</button>
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
  methods: {
    goToStep(step) {
      this.$store.state.currentStep = step;
    },

    validateForm() {
      const enteredName = this.$refs.nameInput.value;
      const enteredEmail = this.$refs.emailInput.value;
      const enteredPhone = this.$refs.phoneInput.value;

      if (
        enteredName.trim() === '' ||
        enteredEmail.trim() === '' ||
        enteredPhone.trim() === ''
      ) {
        this.formIsInvalid = true;
        return;
      }
      this.goToStep(3);
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
