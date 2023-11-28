<script setup>
import { onMounted, ref, computed } from 'vue'
const count = ref(0);
defineProps({
  msg: {
    type: String,
    required: true
  }
})
defineEmits(['']);
onMounted(()=>{});
const computedDataAPI = computed((item)=>{ return item });
console.log(count, computedDataAPI);
</script>

<template>
  <div class="">
    <h1 class="">{{ msg }}</h1>
  </div>
</template>

<style scoped>
</style>
