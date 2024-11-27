<template>
    <Carousel :items-to-show="getCardToShow" :autoplay="5000" :wrap-around="true">
        <!-- <Slide v-for="index in forecastday.length" :key="index">
            <div class="carousel__item bg px-5 py-3 rounded-lg w-64 h-60 bg-slate-100 text-slate-400 text-sm font-semibold"
                :key="index">
                <div class="flex flex-col justify-start items-start gap-1">
                    <div class="flex flex-row justify-start items-center gap-3">
                        <img :src="forecastday[index - 1].day.condition.icon" alt="icon" srcset="">
                        <div class="flex flex-col items-start justify-start">
                            <span>{{ forecastday[index - 1].date }}</span>
                            <span>{{ forecastday[index - 1].day.condition.text }}</span>
                            <span>{{ t('weather.rainy') }} : {{ forecastday[index - 1].day.daily_chance_of_rain }} %</span>
                        </div>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>{{ t('weather.temp') }} C° : </span>
                        <span>{{ forecastday[index - 1].day.avgtemp_c }} C°</span>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>{{ t('weather.temp') }} F° : </span>
                        <span>{{ forecastday[index - 1].day.avgtemp_f }} F°</span>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>{{ t('weather.wind_speed') }} : </span>
                        <span>{{ forecastday[index - 1].day.maxwind_kph }} Km/h</span>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>{{ t('weather.uv') }} : </span>
                        <span>{{ forecastday[index - 1].day.uv }}</span>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>PM2.5 (24H-Avg) : </span>
                        <span>{{ Number(forecastday[index - 1].day.air_quality.pm2_5).toFixed(2) }} µg/m3</span>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>PM10 (24H-Avg): </span>
                        <span>{{ Number(forecastday[index - 1].day.air_quality.pm10).toFixed(2) }} µg/m3</span>
                    </div>
                </div>
            </div>
        </Slide> -->
        <Slide v-for="(item, index) in forecastday" :key="index">
            <div class="carousel__item bg px-5 py-3 rounded-lg w-64 h-60 bg-slate-100 text-slate-400 text-sm font-semibold"
                :key="index">
                <div class="flex flex-col justify-start items-start gap-1">
                    <div class="flex flex-row justify-start items-center gap-3">
                        <img :src="item.day.condition.icon" alt="icon" srcset="">
                        <div class="flex flex-col items-start justify-start">
                            <span>{{ item.date }}</span>
                            <span>{{ item.day.condition.text }}</span>
                            <span>{{ t('weather.rainy') }} : {{ item.day.daily_chance_of_rain }} %</span>
                        </div>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>{{ t('weather.temp') }} C° : </span>
                        <span>{{ item.day.avgtemp_c }} C°</span>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>{{ t('weather.temp') }} F° : </span>
                        <span>{{ item.day.avgtemp_f }} F°</span>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>{{ t('weather.wind_speed') }} : </span>
                        <span>{{ item.day.maxwind_kph }} Km/h</span>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>{{ t('weather.uv') }} : </span>
                        <span>{{ item.day.uv }}</span>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>PM2.5 (24H-Avg) : </span>
                        <span>{{ Number(item.day.air_quality.pm2_5).toFixed(2) }} µg/m3</span>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <span>PM10 (24H-Avg): </span>
                        <span>{{ Number(item.day.air_quality.pm10).toFixed(2) }} µg/m3</span>
                    </div>
                </div>
            </div>

        </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script setup lang="ts">
import useScreenSize from '@/stores/useScreenSize';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const { width } = storeToRefs(useScreenSize())

const getCardToShow = computed(() => {
    if (width.value < 460) {
        return 1
    }
    else if (width.value < 900) {
        return 1.5
    } else if (width.value < 1280) {
        return 2
    }
    else {
        return 4
    }
})
type forecastType = {
    date: string
    day: dayType
}
type dayType = {
    avgtemp_c: number,
    avgtemp_f: number,
    maxwind_kph: number,
    daily_chance_of_rain: number,
    condition: {
        text: string,
        icon: string
    },
    uv: Number,
    air_quality: {
        pm2_5: number,
        pm10: number,
    },
}
defineProps<{ forecastday: forecastType[] }>()

</script>