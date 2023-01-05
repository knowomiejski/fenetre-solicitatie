<template>
    <div class="page">
        <BannerComponent @handleClick="routeToVacature()" :background-image="bannerBackground" callToAction="Naar de Vue.js Vacature!">
            <div class="pt-4">
                <h1 class="text-white fw-light">Hi! mijn naam is Kuba.</h1>
                <div class="bg-primary" style="min-width: 100%; min-height: 1px;"></div>
                <h3 class="text-white fw-light">Om mijn Vue skills een te laten zien heb ik de vacaturepagina van jullie website nagemaakt.</h3>
                <div class="text-white">
                    Hoewel ik gezien heb dat er een redesign is geweest vanmiddag :^|
                </div>
            </div>
        </BannerComponent>
    </div>
</template>
<script setup lang="ts">
import bannerBackground from '@/assets/fenêtre-online-solutions.jpg'
import BannerComponent from '@/components/BannerComponent.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const routeToVacature = async () => {
    await router.push('/vue')
}
</script>