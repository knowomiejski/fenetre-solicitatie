<template>
    <div
        :class="`${backgroundImage ? 'banner-with-image' : 'banner'} d-flex`"
        :style="`${backgroundImage ? `background-image: url(${backgroundImage});` : `background-color: ${backgroundColor};`}`"
    >
        <div class="banner-content col-10 mx-auto mt-auto mb-0 py-4 row">
            <div :class="`col-md-8 p-3 ${backgroundImage ? `bg-black bg-opacity-75` : ``}`">
                <slot/>
            </div>
            <div class="col-md-4 d-flex justify-content-md-end justify-content-center align-items-md-end p-0">
                <button
                    class="btn btn-primary rounded-0 text-white flex-fill flex-md-grow-0 "
                    @click="$emit('handleClick')"
                    v-if="callToAction"
                >
                    {{callToAction}}
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { SvgColor } from '@/enums/SvgColors';

defineProps<{
    backgroundImage?: string,
    backgroundColor?: SvgColor,
    color?: SvgColor,
    callToAction?: string
}>()

defineEmits(['handleClick'])
</script>
<style lang="scss">
    .banner-with-image {
        background-size: cover;
        background-position: center;
        min-height: 340px;
    }
    .banner {
        background-size: cover;
        background-position: center;
    }
</style>