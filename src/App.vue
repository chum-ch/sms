<script setup>
import CheckBox from './components/InputCheckBox.vue';
import InputSwitch from './components/InputSwitch.vue';
const checkMe ='Check me!';
</script>

<template>
  <main>
    <CheckBox
    :msg="checkMe"
    />
    <InputSwitch/>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
