<template>
    <div class="w-full flex flex-col justify-start items-start py-6 pe-6 gap-8">
        <h1 class="text-amber-50 font-extrabold text-4xl" data-aos="fade-up" data-aos-delay="150">{{ t('os.os') }}</h1>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-10 lg:gap-10 w-full" data-aos="fade-up" :data-aos-delay="100">
            <div v-for="(service, index) in services" :key="index" >
                <ServiceCardComponent :title="service.title" :description="service.description"
                    :imgUrl="service.imgUrl" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ServiceCardComponent from '@/components/site/ServiceCard.Component.vue';
import ux from "@/assets/icon/icon_ux.svg"
import web from "@/assets/icon/icon_web.svg"
import mobile from "@/assets/icon/icon_mobile.svg"
import brand from "@/assets/icon/icon_brand.svg"
import api from "@/assets/icon/icon_api.svg"
import domain from "@/assets/icon/icon_domain.svg"
import { useI18n } from 'vue-i18n';
const {t} = useI18n()
const services = [
    {
        title: "ux",
        description: "uxd",
        imgUrl: ux
    },
    {
        title: "bra",
        description: "brad",
        imgUrl: brand
    },
    {
        title: "map",
        description: "mapd",
        imgUrl: mobile
    },
    {
        title: "wap",
        description: "wapd",
        imgUrl: web
    },
    {
        title: "api",
        description: "apid",
        imgUrl: api
    },
    {
        title: "domain",
        description: "domaind",
        imgUrl: domain
    },
]
</script>
