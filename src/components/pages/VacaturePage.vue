<template>
  <div class="page">
    <Transition name="fade" mode="out-in">
      <div v-if="vacatureStore.loading">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <h2 class="my-2 fw-light">Loading...</h2>
            <div class="my-2">
              <span class="spinner-border" role="status"></span>
            </div>
        </div>
      </div>
      <div v-else>
        <BannerComponent :background-image="vacaturePage!.bannerPicture">
          <div class="pt-4">
            <h1 class="text-white fw-light">{{vacaturePage?.pageTitle}}</h1>
            <div class="bg-primary" style="min-width: 100%; min-height: 1px;"></div>
            <h3 class="text-white fw-light">{{vacaturePage?.pageDescription}}</h3>
          </div>
        </BannerComponent>
        <div class="py-2">
          <div v-for="(section, i) in vacatureStore.vacaturePageSections" :key="i">
            <TextSectionComponent :content="section"></TextSectionComponent>
          </div>
        </div>
        <BannerComponent :color="SvgColor.PRIMARY" :background-color="SvgColor.PRIMARYBG" call-to-action="Terug naar het overzicht">
          <div class="mb-5">
            <b class="bold-text">Acquisitie naar aanleiding van deze vacature wordt niet op prijs gesteld.</b>
          </div>
        </BannerComponent>
        <ContactMeComponent
          title="Geïnteresseerd?"
          description="Hieronder is mijn contact informatie te vinden"
          email-button="Email Kuba"
          email="j.nowomiejski1998@gmail.com"
          phone="0645576445"
          :socials="[{
            icon: 'LinkedInIcon',
            iconProps: {
              link: 'https://www.linkedin.com/in/kuba-nowomiejski-b45416190/',
              size: 48,
              color: SvgColor.PRIMARY
            }
          } as IconButton]"
        ></ContactMeComponent>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import BannerComponent from '../BannerComponent.vue';
import TextSectionComponent from '../TextSectionComponent.vue';
import { useVacatureStore } from '@/stores/vacature';
import { onBeforeMount, ref } from 'vue';
import { SvgColor } from '@/enums/SvgColors';
import type FenetrePage from '@/models/FenetrePage';
import ContactMeComponent from '../ContactMeComponent.vue';
import type { IconButton } from '@/models/IconButton';

const vacatureStore = useVacatureStore()
const vacaturePage = ref<FenetrePage | undefined>()

onBeforeMount(() => {
  vacatureStore.fetchVacaturePage()
})

vacatureStore.$subscribe((mutation, state)=> {
  vacaturePage.value = state.vacaturePage
})

</script>
<style lang="scss">
  @import '@/assets/custom.scss';

  .bold-text {
    color: $primary-dark;
  }
</style>
