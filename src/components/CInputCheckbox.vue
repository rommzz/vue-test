<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
	label: string
	modelValue?: any
	id: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
const val = ref()

watch(val, (newValue, oldValue) => {
	emit('update:modelValue', newValue)
})
</script>

<template>
	<div class="flex items-center gap-2">
		<input type="checkbox" name="" :id="`cb-${id}`" v-model="val" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded ">
		<label :for="`cb-${id}`" class="text-neutral-800 text-sm font-normal">{{ props.label}}</label>
	</div>
</template>