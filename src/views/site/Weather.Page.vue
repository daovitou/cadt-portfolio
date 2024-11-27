<template>
    <!-- {{ forecastData.location.name }} -->
    <div class="w-full flex flex-col justify-start items-start py-6 pe-6 gap-8">
        <h1 class="text-amber-50 font-extrabold text-2xl" data-aos="fade-up" data-aos-delay="150">
            {{ t('weather.cur_forecast') }} : <span class="text-amber-200">{{ forecastData.location.name }}, {{
                forecastData.location.country }}</span>
        </h1>
        <div class="flex flex-col items-start justify-center w-full">
            <div class="px-5 py-3 bg-white rounded-md flex flex-row justify-start items-center" data-aos="flip-left"
                data-aos-delay="150">
                <div class="flex flex-col items-start justify-between">
                    <span class="uppercase text-sm font-bold text-slate-500">{{ t('weather.cur_weather') }} : {{
                        forecastData.location.localtime.toString().substring(0, 10) }}</span>
                    <div class="ps-5 flex flex-row justify-start items-center gap-6">
                        <div class="relative">
                            <div class="flex flex-col justify-start items-center">
                                <img :src="forecastData.current.condition.icon" height="128" width="128" alt=""
                                    class="">
                                <span class="absolute top-24 text-slate-600">{{ forecastData.current.condition.text
                                    }}</span>
                            </div>
                        </div>
                        <div class="flex flex-col items-start justify-center">
                            <span class="text-amber-700 text-2xl font-bold">{{ forecastData.current.temp_c }} C°</span>
                            <span class="text-slate-400 text-lg font-bold">{{ forecastData.current.temp_f }} F°</span>
                        </div>
                        <div class="flex flex-col justify-start items-start gap-1">
                            <span class="text-slate-400 text-md font-semibold">
                                {{ t('weather.feel_like') }} : {{ forecastData.current.feelslike_c }} C°</span>
                            <span class="text-slate-400 text-md font-semibold">{{ t('weather.wind_speed') }} :
                                {{ forecastData.current.wind_kph }} kph</span>
                            <span class="text-slate-400 text-md font-semibold">{{ t('weather.cloud') }} : {{
                                forecastData.current.cloud }} %</span>
                            <span class="text-slate-400 text-md font-semibold">{{ t('weather.uv') }} : {{
                                forecastData.current.uv
                                }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="text-amber-50 font-extrabold text-xl" data-aos="fade-up" data-aos-delay="150">
            {{ t('weather.forecast') }} : <span class="text-amber-200">10 {{ t('weather.day') }}</span>
        </h1>
        <div class="w-full" data-aos="flip-left" data-aos-delay="150">
            <VueCarouselComponent :forecastday="forecastData.forecast.forecastday"></VueCarouselComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
import VueCarouselComponent from '@/components/site/VueCarousel.Component.vue';
//  import { forecastData } from '@/utils';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const { t } = useI18n()
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
const forecastData = ref({
    location: {
        name: "",
        region: "",
        country: "",
        localtime: "",
    },
    current: {
        temp_c: 0,
        temp_f: 0,
        condition: {
            text: "",
            icon: "",
            code: 0,
        },
        wind_mph: 0,
        feelslike_c: 0,
        wind_kph: 0,
        cloud: 0,
        uv: 0
    },
    forecast: {
        forecastday: []
    }
})
onMounted(async () => {
    // const response = await axios.get('/v1/forecast.json?key=2028e078e4624d2ba8e60700242709&q=phnom penh&days=10&aqi=yes&alerts=yes')
    try {
        const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=2028e078e4624d2ba8e60700242709&q=phnom penh&days=10&aqi=yes&alerts=yes')
        forecastData.value = response.data
    } catch (error) {
        console.log(error)
    }
})

</script>
