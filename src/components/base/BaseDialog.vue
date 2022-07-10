<template>
  <teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions">
          <button @click="$emit('close')">Close</button>
        </slot>
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
</style>
