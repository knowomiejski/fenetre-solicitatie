<template>
    <div
        :class="`nav-item nav-link font-weight-light position-relative text-black p-1 m-2 ${hover ? 'bg-primary bg-opacity-50' : ''}`"
        @click="redirect()"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        >
        <div class="nav-title">
            {{displayTitle.toUpperCase()}}
        </div>
        <div v-if="dropdown">
            <div v-if="hover" class="bg-light">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps<{
    displayTitle: string,
    dropdown: boolean,
    link: string
}>()

const hover = ref<boolean>(false)

const redirect = () => {
    router.push(props.link)
}
</script>
<style lang="scss" scoped>
    .nav-title{
        font-size: .9rem;
    }

    .nav-link {
        cursor: pointer;
    }
</style>