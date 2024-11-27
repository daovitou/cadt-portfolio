<template>
  <!-- <div class="stars"> -->
    <!--<div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div> -->
  <!-- </div> -->
  <!-- <div class="background-container opacity-20">
    <img class="img" src="@/assets/img/moon2.png" alt="">
    <div class="skystars"></div>
    <div class="twinkling"></div>
    <div class="clouds"></div>
  </div> -->
  <div class="h-full w-full">
    <SideBarComponent></SideBarComponent>
    <div class="px-6 py-14 md:ps-72 md:pe-6 md:py-4 h-full">
      <div class="w-full h-full">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SideBarMenus } from '@/utils';
import SideBarComponent from '@/components/site/SideBar.Component.vue';

// const appTitle = import.meta.env.VITE_APP_TITLE
// const sideBarMenus = SideBarMenus;
</script>