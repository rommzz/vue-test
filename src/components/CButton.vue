<script lang="ts" setup>
const props = defineProps<{
  type: 'primary' | 'secondary'
	label: String
}>()


</script>

<template>
	<button v-if="props.type == 'primary'" type="button" class="px-4 py-3 bg-[#008060] rounded-[4px] text-white text-sm">{{ label }}</button>
	<button v-if="props.type == 'secondary'" type="button" class="px-4 py-3 bg-[#202123] border-[#C9CCCF] border-2 rounded-[4px] text-white text-sm">{{ label }}</button>
</template>