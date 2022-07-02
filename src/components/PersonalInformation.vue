<template>
  <h2>Personal Information</h2>
  <p>This Is Basic Information Fields</p>
  <form>
    <div>
      <input placeholder="Name*" type="text" />
    </div>
    <div>
      <input placeholder="Email address*" type="text" />
    </div>
    <div>
      <input placeholder="Phone number*" type="number" />
    </div>
    <div>
      <input placeholder="Date of birth*" type="date" />
    </div>
    <button>Back</button>
    <button>Next</button>
  </form>
</template>

<script>
export default {};
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
</style>
