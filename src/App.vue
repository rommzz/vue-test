<script setup lang="ts">
import CategoryServices from '@/utils/api/service/service_category';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

const getData = async ()  => {
  console.log('get data');
  
  await CategoryServices.getCategories().then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
}

onMounted(() => {
  getData();
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
