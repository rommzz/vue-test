<script lang="ts" setup>
import CButton from '@/components/CButton.vue';
import CInput from '@/components/CInput.vue';
import CInputMedia from '@/components/CInputMedia.vue';
import CInputCheckbox from '@/components/CInputCheckbox.vue';
import CTextEditor from '@/components/CTextEditor.vue';
import { Category } from '@/utils/models/category';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Dialog, DialogDescription, DialogTitle, DialogPanel } from "@headlessui/vue";
import { onMounted, reactive, ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import CategoryServices from '@/utils/api/service/service_category';
interface CategoryForm{
	name: string
	parent_category: string
	icon: any
	banner: any
}

const notify = () => {
      toast("Category is null", {
        autoClose: 2000,
		theme: 'dark',
      }); // ToastOptions
    }

const title = ref<string>()
const category = ref<string>()
const brand = ref<string>()
const collection = ref<string>()
const tags = ref<string>()
const isTrackQuantity = ref<boolean>()
const isHasSku = ref<boolean>()

const categories = ref<Category[]>()
const selectedCategory = ref<Category|null>(null)

const pageSetting = reactive({
	isOpen: false,
	isLoading: false,
})
const categoryForm = reactive<CategoryForm>({
	name: '',
	parent_category: '',
	icon: '',
	banner: ''
})

const img1 = ref<any>()
const img2 = ref<any>()

const setIsOpen = (value: boolean): void => {
	console.log(value);
	pageSetting.isOpen = value
	console.log(pageSetting);
	
}

const getData = async ()  => {
  categories.value = []
  await CategoryServices.getCategories().then((res) => {
	console.log(res);
	
	categories.value = res
  }).catch((err) => {
    console.log(err);
  });
}

const saveCategory = async () => {
	if (categoryForm.name == null || categoryForm.name == '') {
		notify()
		return
	}
	pageSetting.isLoading = true
	const data: Category = {
		name: categoryForm.name,
		parent_category: categoryForm.parent_category,
		icon: categoryForm.icon,
		banner: categoryForm.banner
	}
	await CategoryServices.addCategories(data).then(async (res) => {
		console.log(res);
		pageSetting.isLoading = false
		await getData()
		setIsOpen(false)
		categoryForm.name = ''
		categoryForm.parent_category = ''
		categoryForm.icon = ''
		categoryForm.banner = ''
	}).catch((err) => {
		console.log(err);
		pageSetting.isLoading = false
		setIsOpen(false)
	});	
} 

onMounted(() => {
  getData();
})


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
		<div class="px-1 grid grid-cols-3 gap-5 pb-4">
			<div class="col-span-2">
				<div class="card p-5">
					<CInput label="Title" placeholer="Short sleeve t-shirt" v-model="title"/>
					<div class="pb-1">
						Description
					</div>
					<CTextEditor/>
				</div>
				<div class="card my-8">
					<div class="p-5 border-zinc-200 border-b-">
						<div class="text-neutral-800 text-base font-semibold border-zinc-200 border-b mb-6">
							Inventory
						</div>
						<div class="border-zinc-200 border-b mb-4 pb-2">
							<CInputCheckbox id="qty" label="Track quantity" v-model="isTrackQuantity"></CInputCheckbox>
						</div>
						<div class="text-neutral-800 text-sm">
							<div class="flex justify-between mb-5">
								<div class="font-semibold">
									Quantity
								</div>
								<input v-if="isTrackQuantity" type="number" class="border-zinc-200 border rounded px-3 py-2">
								<div v-else class="text-zinc-500">
									Not Tracked
								</div>
							</div>
							<div v-if="isTrackQuantity" class="flex justify-between mt-5">
								<div class="font-semibold">
									Low Quantity Warning
								</div>
								<input type="number" class="border-zinc-200 border rounded px-3 py-2">
							</div>
						</div>
					</div>
					<div class="border-zinc-200 border-b"/>
					<div class="p-5">
						<div class="mb-4 pb-2">
							<CInputCheckbox id="sku" label="This product has a SKU or barcode" v-model="isHasSku"></CInputCheckbox>
						</div>
						<div class="flex gap-5" v-if="isHasSku">
							<div class="flex-1">
								<CInput label="SKU (Stock Keeping Unit)"></CInput>
							</div>
							<div class="flex-1">
								<CInput label="Barcode (ISBN, UPC, GTIN, etc.)"></CInput>
							</div>
						</div>
					</div>
				</div>
				<div class="text-right">
					<CButton label="Save" type="primary"></CButton>
				</div>
			</div>
			<div class="card p-5 h-min">
				<div class="flex gap-2 mb-5">
					<div class="text-neutral-800 text-base font-semibold">
						Product organization
					</div>
					<i class="mdi mdi-information text-zinc-500"></i>
				</div>
				<Listbox v-model="category" as="div" class="relative">
					<ListboxButton class="w-full">
						<CInput label="Product category" placeholer="Search product categories" :model-value="selectedCategory?.name ?? ''" is-read-only/>
					</ListboxButton>
					<ListboxOptions class="absolute bg-white w-full z-10 border border-zinc-200 rounded px-3 max-h-[500px] overflow-auto">
						<ListboxOption
							class="text-sky-500 text-sm font-normal pt-4 pb-2 px-4"
							@click="setIsOpen(true)"
						>
							Add Another Category
						</ListboxOption>
						<ListboxOption
							:class="`p-4 border rounded  border-sky-300 ${ctg.id === selectedCategory?.id ? 'bg-sky-300 bg-opacity-50' : 'bg-opacity-100 border-opacity-0'} hover:bg-sky-300 hover:bg-opacity-50 hover:border-opacity-100`"
							v-for="ctg in categories"
							:key="ctg.id"
							:value="ctg"
							@click="selectedCategory = ctg"
						>
							{{ ctg.name }}
						</ListboxOption>
					</ListboxOptions>
				</Listbox>
				<CInput label="Product Brand" placeholer="e.g., T-Shirt" v-model="brand"/>
				<CInput label="Collection" placeholer="" v-model="collection"/>
				<CInput label="Tags" placeholer="Find or create tags" v-model="tags" more-action="manage"/>
			</div>
		</div>

		<Dialog :open="pageSetting.isOpen" @close="setIsOpen" class="relative z-50">
			<div class="fixed inset-0 flex w-screen items-center justify-center p-4">
				<DialogPanel class="w-full max-w-lg rounded-lg bg-white shadow-lg p-5">
					<DialogTitle class="text-neutral-800 text-base font-semibold">Add Category</DialogTitle>
					<form>
						<CInput label="Category name" placeholer="e.g., T-Shirt" v-model="categoryForm.name"/>
						<CInput label="Parrent Category" placeholer="" v-model="categoryForm.parent_category"/>
						<CInputMedia label="Category Banner (200 x 200)"/>
						<CInputMedia label="Category Banner (200 x 200)"/>
						<div class="flex justify-end gap-2 mt-5">
							<CButton label="Cancel" type="secondary" @click="setIsOpen(false)" :disabled="pageSetting.isLoading"></CButton>
							<CButton
								:label="pageSetting.isLoading ? 'Saving...' : 'Save'"
								type="primary" :disabled="pageSetting.isLoading"
								@click="saveCategory"
							/>
						</div>
					</form>
				</DialogPanel>
			</div>
		</Dialog>
	</div>
</template>