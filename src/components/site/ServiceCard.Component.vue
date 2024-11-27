<template>
    <div class="bg-base shadow-lg rounded-lg overflow-hidden">
        <img :src="props.imgUrl" alt="Service Feature" class="w-full h-64 object-cover" />
        <div class="p-4">
            <h2 class="text-2xl font-bold mb-2 text-amber-200 uppercase">{{ t('os.' + props.title) }}</h2>
            <p class="mb-4 text-slate-100">{{ t('os.' + props.description) }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const props = defineProps({
    title: String,
    description: String,
    imgUrl: String
})
</script>