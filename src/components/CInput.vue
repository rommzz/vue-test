<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
  placeholer: string
	label: string
	modelValue?: number | string
}>()

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update:modelValue', value: string): void
}>()
const val = ref()

watch(val, (newValue, oldValue) => {
	emit('update:modelValue', newValue)
})
</script>

<template>
	<div class="">
		<label class="block mb-1 text-primary-black" for="input">{{ props.label }}</label>
		<input v-model="val" class="rounded border border-[#898F94] placeholder:text-[#6D7175] px-3 py-2 w-full" type="text" name="input" id="input" :placeholder="props.placeholer">
	</div>
</template>