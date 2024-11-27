<template>
    <div class="w-full flex flex-col justify-start items-start py-6 gap-8">
        <h1 class="text-amber-50 font-extrabold text-4xl" data-aos="fade-up" data-aos-delay="150">{{ t('resume.mee') }}</h1>
        <div class="grid lg:grid-cols-2 w-full pe-4 pt-4 gap-12 text-amber-50">
            <ResumeCardComponent v-for="(item, index) in resumes" :key="index" :cardTitle="item.cardTitle"
                :cardItems="item.cardItems"></ResumeCardComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
import ResumeCardComponent from '@/components/site/ResumeCard.Component.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const resumes = [
    {
        cardTitle: "edu",
        cardItems: [
            {
                year: "2024-Present",
                location: "edu6",
                linkto: "https://www.cadt.edu.kh",
                linktitle: "cadt"
            },
            {
                year: "2016-2018",
                location: "edu5",
                linkto: "https://www.norton-u.com",
                linktitle: "nu"
            },
            {
                year: "2010-2014",
                location: "edu4",
                linkto: "https://www.norton-u.com",
                linktitle: "nu"
            },
            {
                year: "2007-2010",
                location: "edu3",
                linkto: "",
                linktitle: ""
            },
            {
                year: "2004-2007",
                location: "edu2",
                linkto: "",
                linktitle: ""
            },
            {
                year: "1997-2004",
                location: "edu1",
                linkto: "",
                linktitle: ""
            },
        ]
    },
    {
        cardTitle: "exp",
        cardItems: [
            {
                year: "2014-Present",
                location: "exp5",
                linkto: "https://www.maff.gov.kh",
                linktitle: "maff"
            },
            {
                year: "2018-2024",
                location: "exp4",
                linkto: "https://www.maff.gov.kh",
                linktitle: "maff"
            },
            {
                year: "2016-2018",
                location: "exp3",
                linkto: "https://www.maff.gov.kh",
                linktitle: "maff"
            },
            {
                year: "2013-2016",
                location: "exp2",
                linkto: "https://www.norton-u.com",
                linktitle: "nu"
            },
            {
                year: "2012-2016",
                location: "exp1",
                linkto: "https://www.norton-u.com",
                linktitle: "nu"
            },
        ]
    }
]
</script>