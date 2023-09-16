<script lang="ts" setup>
import CButton from '@/components/CButton.vue';
import CInput from '@/components/CInput.vue';
import { ref } from 'vue';
const title = ref<string>()


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
				<CInput label="Title" placeholer="Short sleeve t-shirt" v-model="title"/>
			</div>
			<div class="card p-5 col-span-1">
				anjas
			</div>
		</div>
	</div>
</template>