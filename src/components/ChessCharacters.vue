<template>
  <option value="1">
    {{ name }} <img :src="'https://chess-tournament-api.devtest.ge' + image" />
  </option>
</template>

<script>
export default {
  props: ['name', 'image'],
};
</script>

<style></style>
