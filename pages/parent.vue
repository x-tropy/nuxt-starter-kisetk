<script setup>
console.log('xxxxxxxxparent')
</script>

<template>
    <div>
        <h1>parent</h1>
        <NuxtPage :foobar="123" :routeme="$route.fullPath" />
        <NuxtLink to="/parent/child">to child</NuxtLink>
    </div>
</template>