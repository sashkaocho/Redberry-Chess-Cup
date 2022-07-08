<template>
  <div>
    <img src="./img/firstpage.png" alt="" />
  </div>
  <div class="title"></div>
  <h1>CHESS SAYS</h1>
  <span>A LOT ABOUT</span>
  <h1 class="second">WHO WE ARE</h1>
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
  color: white;
  position: absolute;
  width: 496px;
  height: 109px;
  left: 1008px;
  top: 265px;
  z-index: 2;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 109px;
  text-transform: uppercase;
}
h1.second {
  position: absolute;
  width: 570px;
  height: 109px;
  left: 1008px;
  top: 390px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 109px;

  color: #ffffff;
}

span {
  position: absolute;
  width: 140px;
  height: 27px;
  left: 1530px;
  top: 312px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #212529;
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
  top: 0px;
}

.title {
  position: absolute;
  width: 997px;
  height: 1280px;
  left: 923px;
  top: 0px;
  background: #fd5334;
  text-align: center;
}

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
</style>
