<script lang="ts" setup>
const props = defineProps<{
    class?: string
}>()

</script>
<template>
    <div :class="props.class" class="rounded border border-[#BABFC3] editor">
        <div class="px-3 py-2 border-b border-[#BABFC3] bg-[#FAFBFB] flex justify-between items-center">
            <div class="flex">
                <div class="self-center">
                    Paragraph
                </div>
                <i class="mdi mdi-menu-down ml-8"></i>
                <div class="divider mx-2"></div>
                <div class="flex gap-1">
                    <i class="mdi mdi-format-bold"></i>
                    <i class="mdi mdi-format-italic"></i>
                    <i class="mdi mdi-format-underline"></i>
                    <div class="flex">
                        <i class="mdi mdi-format-text-variant"></i>
                        <i class="mdi mdi-menu-down"></i>
                    </div>
                </div>
                <div class="divider mx-2"></div>
                <div class="flex">
                    <i class="mdi mdi-format-align-left"></i>
                    <i class="mdi mdi-menu-down"></i>
                </div>
                <div class="gap-1 flex">
                    <i class="mdi mdi-link-variant !text-stone-300"></i>
                    <i class="mdi mdi-image"></i>
                    <i class="mdi mdi-play-circle"></i>
                    <i class="mdi mdi-play-table"></i>
                    <div class="flex">
                        <i class="mdi mdi-border-all"></i>
                        <i class="mdi mdi-menu-down"></i>
                    </div>
                </div>
                <div class="divider mx-2"></div>
                <i class="mdi mdi-dots-horizontal"></i>
            </div>
            <div class="rounded border-[#BABFC3] py-1 px-3 bg-white border">
                <i class="mdi mdi-xml"></i>
            </div>
        </div>
        <textarea name="" id="" class="w-full border-0 outline-none p-2" rows="7"></textarea>
    </div>
</template>