<script lang="ts" setup>
const props = defineProps<{
	type: 'primary' | 'secondary'
	label: string
	disabled?: boolean
}>()


</script>

<template>
	<button
		type="button"
		:class="props.type == 'primary' ? 'btn-primary' : 'btn-secondary'"
		:disabled="disabled"
		class="disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
	>
		{{ label }}
	</button>
</template>