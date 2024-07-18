<template>
  <h1>no page: {{ data }}</h1>
</template>

<script setup>
const {data} = await useFetch('/hey')
</script>