<template>
  <div>
    <MainNavigationComponent/>
      <RouterView v-slot="{Component, route}">
        <Transition name="fade" mode="out-in">
          <Component :is="Component" :key="route.path"/>
        </Transition>
      </RouterView>
    <FooterComponent/>
  </div>
</template>

<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import MainNavigationComponent from "@/components/navigation/MainNavigationComponent.vue";
import { RouterView } from "vue-router";
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>