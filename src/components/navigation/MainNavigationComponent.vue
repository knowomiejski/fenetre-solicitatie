<template>
  <div>
    <div>
      <Alert v-if="!dismiss" alert-name="englishPageAlert" alert-type="primary" :dismissable="true">
        <div class="d-flex justify-content-between">
          <a href="/">Visit our English page</a>
          <button @click="dismissAlert()"  class="btn-close" aria-label="close"></button>
        </div>
      </Alert>
    </div>
    <div class="col-10 m-auto" ref="menu">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <RouterLink to="/">
            <img style="width: 156px; height: 80px;" src="@/assets/svg/logo.svg" alt="logo"/>
          </RouterLink>
        </div>
        <nav class="d-flex">
          <IconButton class="m-1 p-1 d-flex d-md-none" color="primary">
            <div class="text-white">MENU</div>
          </IconButton>
          <ul class="nav d-md-flex justify-content-md-around d-none">
            <NavigationButtonComponent display-title="Home" link="/" :dropdown="false"/>
            <NavigationButtonComponent display-title="Portfolio" link="/" :dropdown="false"/>
            <NavigationButtonComponent display-title="Diensten" link="/" :dropdown="true">
              <DropdownListComponent :page-margin="maxDropdownPosition" :drop-down-data="services"/>
            </NavigationButtonComponent>
            <NavigationButtonComponent display-title="Producten" link="/" :dropdown="true">
              <DropdownListComponent :page-margin="maxDropdownPosition" :drop-down-data="products"/>
            </NavigationButtonComponent>
            <NavigationButtonComponent display-title="Werken Bij" link="/" :dropdown="true">
              <DropdownListComponent :page-margin="maxDropdownPosition" :drop-down-data="work"/>
            </NavigationButtonComponent>
            <NavigationButtonComponent display-title="Over Ons" link="/" :dropdown="true">
              <DropdownListComponent :page-margin="maxDropdownPosition" :drop-down-data="about"/>
            </NavigationButtonComponent>
            <NavigationButtonComponent display-title="Contact" link="/" :dropdown="true">
              <DropdownListComponent :page-margin="maxDropdownPosition" :drop-down-data="contact"/>
            </NavigationButtonComponent>
          </ul>
          <div class="d-md-flex align-items-center d-none">
            <IconButton class="m-1 p-1" color="primary">
              <SearchIcon :height="28" :width="28" :fill="SvgColor.WHITE"/>
            </IconButton>
            <IconButton class="m-1 p-1" color="primary">
              <ShareIcon :height="28" :width="28" :fill="SvgColor.WHITE"/>
            </IconButton>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SvgColor } from '@/enums/SvgColors';
import Alert from '../shared/AlertComponent.vue';
import IconButton from '../shared/IconButtonComponent.vue';
import SearchIcon from '../shared/icons/SearchIcon.vue';
import ShareIcon from '../shared/icons/ShareIcon.vue';
import DropdownListComponent from './DropdownListComponent.vue';
import NavigationButtonComponent from './NavigationButtonComponent.vue';
import { about, contact, products, services, work } from '@/data/navigationDropdownData';
import { onMounted, ref } from 'vue';
import type { RouterLink } from 'vue-router';

const dismiss = ref(false);
const menu = ref<HTMLElement | null>(null);

const maxDropdownPosition = ref<number>(0)
onMounted(() => {
  maxDropdownPosition.value = (window.innerWidth - menu.value.offsetWidth)/2
})

const dismissAlert = () => {
  dismiss.value = true
}
</script>

<style lang="scss">
  .menu-content {
    cursor: pointer;
  }
</style>