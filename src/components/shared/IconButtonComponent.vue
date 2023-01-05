<template>
    <a @click="$emit('handleClick')" :class="`btn rounded-0 bg-${color} m-0 p-0`">
        <slot/>
    </a>
</template>
<script setup lang="ts">
defineProps<{
    color: string
}>()
defineEmits(['handleClick'])
</script>