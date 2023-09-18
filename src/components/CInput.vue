<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
	placeholer?: string
	label: string
	modelValue?: number | string
	isReadOnly?: boolean
	moreAction?: string
}>()

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update:modelValue', value: string): void
  (e: 'onClickMore'): void
}>()
const val = ref()

watch(val, (newValue, oldValue) => {
	emit('update:modelValue', newValue)
})
</script>

<template>
	<div class="relative mb-4">
		<div class="flex justify-between text-sm">
			<label class="block mb-1 text-primary-black" for="input">{{ props.label }}</label>
			<label v-if="props.moreAction" class="text-blue-600" @click="$emit('onClickMore')">{{ props.moreAction }}</label>
		</div>
		<input  @input="event => $emit('update:modelValue', (event.target as HTMLInputElement).value)" :value="modelValue" class="rounded border border-neutral-400 placeholder:text-[#6D7175] px-3 py-2 w-full outline-0" type="text" name="input" id="input" :placeholder="props.placeholer" :readonly="props.isReadOnly">

	</div>
</template>