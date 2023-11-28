<script setup>
import { onMounted, ref, computed } from 'vue'
const count = ref(0)
defineProps({
  msg: {
    type: String,
    required: false
  }
})
defineEmits([''])
onMounted(() => {})
const computedDataAPI = computed((item) => {
  return item
})
console.log(count, computedDataAPI)
</script>

<template>
  <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
</template>

<style scoped lang="scss">
input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 45px;
	height: 25px;
	background: grey;
	display: block;
	border-radius: 20px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 3px;
	left: 4px;
	width: 20px;
	height: 20px;
	background: #fff;
	border-radius: 20px;
	transition: 0.3s;
}

input:checked + label {
	background: #1da1f2;
}
input:checked:hover +label:hover {
  background: #1285cc;

}
input:checked + label:after {
	left: calc(100% - 4px);
	transform: translateX(-100%);
}

</style>
