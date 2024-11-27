<template>
    <div class="fixed z-20 md:w-60 sidebar-backdrop transition-all ease-in-out duration-150 h-screen overflow-y-scroll scrollbar"
        :class="(stateSidebar) ? 'w-0' : 'w-screen'">
        <div class="relative h-full">
            <div class="flex flex-col justify-between h-full items-center py-8 gap-6">
                <div class="flex flex-col justify-start items-center gap-6">
                    <img src="@/assets/img/profile.jpg" width="160" height="160"
                        class="rounded-full border-4 border-amber-200" alt="profile" srcset="">
                    <ul class="text-center">
                        <li class="py-2 h-12" v-for="(sideBar, index) in SideBarMenus" :key="index">
                            <router-link :to="{ name: sideBar.routeName }"
                                class="text-md font-bold uppercase transition-all ease-in-out duration-150 hover:underline hover:underline-offset-4 hover:text-amber-200 hover:font-bold hover:text-xl"
                                :class="(useRoute().name == sideBar.routeName) ? 'underline underline-offset-4 text-amber-200 font-bold text-xl' : ''"
                                @click="stateToggleSidebar">{{ $t(`sidebar.${sideBar.title}`) }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="hidden md:block">
                    <button class="flex flex-row gap-2 font-bold" @click="changeLanguage('en')" v-if="locale == 'khm'">
                        <img src="@/assets/icon/lang_us.svg" alt="lang_us">
                        <span>English</span>
                    </button>
                    <button class="flex flex-row gap-2 font-bold" @click="changeLanguage('khm')" v-else>
                        <img src="@/assets/icon/lang_khm.svg" alt="lang_us">
                        <span>ភាសាខ្មែរ</span>
                    </button>
                </div>
            </div>
            <img src="@/assets/icon/menu_close.svg" alt="menu_close"
                class="absolute md:hidden top-4 right-4 hover:cursor-pointer p-2 bg-cyan-950"
                @click="stateToggleSidebar">
        </div>
    </div>
    <div class="fixed z-10 md:hidden w-screen top-0 left-0 bg-cyan-950 transition-all ease-in-out duration-150"
        :class="(stateSidebar) ? 'ms-0' : 'ms-60'">
        <div class="flex justify-between items-center pe-6">
            <div class="flex flex-row justify-between items-center h-11 gap-4 px-4">
                <img src="@/assets/icon/menu_open.svg" alt="menu_open" class="hover:cursor-pointer"
                    @click="stateToggleSidebar">

            </div>
            <div class="block md:hidden pe-4">
                <button class="flex flex-row gap-2 font-bold" @click="changeLanguage('en')" v-if="locale == 'khm'">
                    <img src="@/assets/icon/lang_us.svg" alt="lang_us">
                    <span>English</span>
                </button>
                <button class="flex flex-row gap-2 font-bold" @click="changeLanguage('khm')" v-else>
                    <img src="@/assets/icon/lang_khm.svg" alt="lang_us">
                    <span>ភាសាខ្មែរ</span>
                </button>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { SideBarMenus } from '@/utils';
import useScreenSize from '@/stores/useScreenSize';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const { stateToggleSidebar } = useScreenSize()
const { stateSidebar } = storeToRefs(useScreenSize())
const changeLanguage = (lang) => {
    locale.value = lang
}
</script>
