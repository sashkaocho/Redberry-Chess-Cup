<template>
  <button>
    <slot></slot>
    <span>
      <img src="../img/Vector.png" alt="vct" />
    </span>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 13px 24px;
  gap: 10px;
  color: white;
  position: absolute;
  width: 191px;
  height: 53px;
  left: 1008px;
  top: 601px;
  z-index: 3;

  font-family: 'open suns';

  background: #212529;
  border-radius: 8px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-transform: capitalize;

  color: white;
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
