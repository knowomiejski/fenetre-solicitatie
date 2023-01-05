<template>
    <div class="contact-banner">
        <div class="contact-banner-content col-10 m-auto d-flex flex-column-reverse flex-md-row justify-content-between">
            <div class="py-5">
                <div class="my-2">
                    <h3 class="content-title mb-0">{{title.toUpperCase()}}</h3>
                    <div>{{description}}</div>
                </div>
                <button class="my-1 btn btn-secondary rounded-0 text-white">
                    <EmailIcon :width="24" :height="24" :fill="SvgColor.WHITE"></EmailIcon> Email Kuba
                </button>
                <div class="my-2">
                    <h3>Bel of stuur een WhatsApp</h3>
                    <h3 style="cursor: pointer;">
                        <a :tel="phone" class="link-primary text-decoration-underline">
                            {{phone.replace(/.{2}/g, '$& ')}}
                        </a>
                    </h3>
                </div>
                <div class="py-2 d-flex">
                    <div v-for="social in socials">
                        <IconButtonComponent :color="social.iconProps.color">
                            <LinkedInIcon
                                class="rounded-0"
                                :width="social.iconProps.size"
                                :height="social.iconProps.size"
                                :fill="social.iconProps.color"
                            />
                        </IconButtonComponent>
                    </div>
                </div>
            </div>
            <div class="d-block col-12 col-md-4">
                <div class="picture" :style="`background-image: url(${kuba});`"></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import kuba from "@/assets/kuba.jpg"
import EmailIcon from '@/components/shared/icons/EmailIcon.vue'
import { SvgColor } from '@/enums/SvgColors';
import type { IconButton } from '@/models/IconButton';
import IconButtonComponent from './shared/IconButtonComponent.vue';
import LinkedInIcon from './shared/icons/LinkedInIcon.vue';

defineProps<{
    title: string,
    description: string,
    emailButton: string,
    email: string,
    phone: string,
    socials: IconButton[]
}>()

</script>
<style lang="scss">
    @import '@/assets/custom.scss';

    .contact-banner {
        background-color: $secondary-background;
    }

    .content-title {
        color: $primary-dark;
    }

    .picture {
        min-width: 100%;
        min-height: 364px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        @media (min-width: 767px) {
            background-position: right;
        }
    }
</style>