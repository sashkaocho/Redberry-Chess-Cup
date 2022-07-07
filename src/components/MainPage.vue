<template>
  <h1>Chess Says Who We Are</h1>
  <base-button @click.prevent="navigateNext">Get Started</base-button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    navigateNext() {
      if (this.$route.name == 'main') {
        this.$router.push('/registration');
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0.5rem 0;
  color: black;
}
p {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

router-link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 13px 24px;
  gap: 10px;
  color: aliceblue;

  position: absolute;
  width: 191px;
  height: 53px;
  left: 1008px;
  top: 601px;

  background: #212529;
  border-radius: 8px;
}

img {
  position: absolute;
  width: 923px;
  height: 1196px;
  left: 0px;
  top: 84px;
}
</style>
