<script lang="ts" setup>
import CButton from '@/components/CButton.vue';


</script>
<template>
	<div>
		<div class="flex justify-between pt-2 pb-3 px-9 bg-[#202123] align-middle mb-9">
			<div class="text-[#E3E5E7] font-semibold text-base">Unsaved Product</div>
			<div>
				<div class="flex justify-between gap-2">
					<CButton label="Discard" type="secondary"></CButton>
					<CButton label="Succes" type="primary"></CButton>
				</div>
			</div>
		</div>
		<div class="px-1 grid grid-cols-3 gap-5">
			<div class="card p-5 col-span-2">
				anjas
			</div>
			<div class="card p-5 col-span-1">
				anjas
			</div>
		</div>
	</div>
</template>