<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
	label: string
	modelValue?: any
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
	<div class="mb-2.5">
		<label class="block text-neutral-800 text-sm font-normal mb-2.5">{{ props.label}}</label>
		<input class="hidden" type="file" accept="video/* image/*" :value="modelValue" @onchange="(e: any)  => $emit('update:modelValue', e)">
		<div class="rounded-lg border border-stone-300 border-dashed text-xs text-center py-9">
			<div class="mb-1">
				<button class="rounded text-blue-900 font-semibold bg-sky-100 px-2 py-1">Add Files</button>
				<a class="rounded text-blue-900 font-semibold underline px-2 py-1">Add From Url</a>
			</div>
			<h6 class="text-zinc-500 font-normal">
				Accepts images, videos, or 3D models
			</h6>
		</div>
	</div>
</template>