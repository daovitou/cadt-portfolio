<template>
    <div class="py-3">
        <h5 class="font-bold text-lg">{{ props.year }}</h5>
        <p class="ms-5 mt-1">{{ t('resume.'+props.location ) }} <a :href='props.linkto' target="_blank" class="link-custom"
                v-if="linkto != ''">{{ t('resume.'+props.linktitle) }}</a></p>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
type ItemTypes = {
    year: string,
    location: string,
    linkto?: string,
    linktitle?: string
}
const props = defineProps<ItemTypes>()
</script>