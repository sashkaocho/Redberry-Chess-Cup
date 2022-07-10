<template>
  <teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>
            <img class="err" src="../img/Vector4.png" alt="" />{{ title }}
          </h2>
          <img
            class="close"
            @click="$emit('close')"
            src="../img/Vector3.png"
            alt=""
          />
        </slot>
      </header>
      <hr />
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions"> </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  emits: ['close'],
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');

dialog {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 350px;
  height: 87px;

  background: rgba(255, 255, 255, 0.85);

  border: 1px solid rgba(0, 0, 0, 0.1);

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  position: absolute;
  width: 350px;
  height: 87px;
  left: 1300px;
  top: 226px;
}

header {
  width: 272px;
  height: 21px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #dc3545;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.err {
  height: 20px;
  width: 20px;
}

.close {
  position: absolute;
  left: 92%;
  right: 28.12%;
  top: 20%;
  bottom: 28.12%;
  height: 10.064692497253418px;
  width: 10.064692497253418px;
  border-radius: 0px;
}

section {
  width: 326px;
  height: 24px;
  position: absolute;
  top: 35px;
  left: 15px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212529;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

hr {
  position: absolute;
  top: 35px;
  width: 350px;
  height: 0px;
  opacity: 0.05;
  border: 1px solid #000000;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
</style>
