<template>
    <div class="w-full flex flex-col justify-start items-start py-6 pe-6 gap-8">
        <h1 class="text-amber-50 font-extrabold text-4xl" data-aos="fade-up" data-aos-delay="150">{{ t('t.ts') }}</h1>
        <div class="grid lg:grid-cols-3 gap-10 lg:gap-10 w-full">
            <div v-for="(skill, index) in skills" :key="index" data-aos="flip-up" :data-aos-delay="150">
                <ProgressBarComponent :progrss="Number(skill.percentage)" :title="skill.title" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProgressBarComponent from '@/components/site/ProgressBar.Component.vue';
const { t } = useI18n()
const skills = [
    {
        title: "HTML",
        percentage: 100
    },
    {
        title: "CSS",
        percentage: 100
    },
    {
        title: "JavaScript",
        percentage: 90
    },
    {
        title: "Boostrap",
        percentage: 80
    },
    {
        title: "Tailwind CSS",
        percentage: 95
    },
    {
        title: "React + Next",
        percentage: 90
    },
    {
        title: "Vue + Nuxt",
        percentage: 85
    },
    {
        title: "C#.Net Core",
        percentage: 90
    },
    {
        title: "Express Js",
        percentage: 85
    },
    {
        title: "Nest Js",
        percentage: 80
    },
    {
        title: "PHP + Laravel",
        percentage: 90
    },
    {
        title: "MySQL",
        percentage: 90
    },
    {
        title: "MongoDB",
        percentage: 80
    },
    {
        title: "MS-SQL",
        percentage: 95
    },
    {
        title: "Oracle",
        percentage: 70
    },
    {
        title: "Postgre",
        percentage: 75
    },
]

</script>