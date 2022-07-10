<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&family=Open+Sans:wght@400;800&display=swap');

button {
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 13px 24px;
  gap: 10px;

  position: absolute;
  width: 93px;
  height: 53px;
  left: 971px;
  top: 873px;

  border: 1px solid #212529;
  border-radius: 8px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-transform: capitalize;
  background-color: #fff;
}

img {
  position: absolute;
  left: 75%;
  right: 0%;
  top: 27%;
  bottom: 0%;
  color: white;
}
</style>
