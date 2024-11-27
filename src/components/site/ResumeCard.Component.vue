<template>
    <div class="bg-base rounded-xl px-6 py-6" data-aos="fade-up" data-aos-delay="250">
        <div class="w-full px-4 py-2 mb-2 rounded-lg bg-amber-200 text-color-base text-3xl font-extrabold">
            {{ t('resume.'+props.cardTitle) }}
        </div>
        <ResumeItemCardComponent v-for="(item, index) in cardItems" :key="index" :year="item.year"
            :location="item.location" :linkto="item.linkto" :linktitle="item.linktitle"></ResumeItemCardComponent>
    </div>
</template>

<script setup lang="ts">
import ResumeItemCardComponent from './ResumeItemCard.Component.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps<iProps>()

interface iProps {
    cardTitle: string,
    cardItems: ItemTypes[]
}

type ItemTypes = {
    year: string,
    location: string,
    linkto: string,
    linktitle: string
}
</script>