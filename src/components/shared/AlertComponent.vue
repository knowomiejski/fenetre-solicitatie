<template>
    <div @click="$emit('handleClick')" :class="`flex justify-space-around alert alert-${alertType}`" role="alert">
        <slot/>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    alertName: string,
    alertType: string,
    dismissable: boolean
}>()
defineEmits(['handleClick'])
</script>