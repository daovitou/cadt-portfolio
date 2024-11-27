<template>
    <div class="w-full flex flex-col justify-center items-start py-6 md:py-16 gap-8 pe-6">
        <p class="vueTyper text-5xl font-extrabold" :class="[locale == 'en' ? '' : 'leading-loose']">
            <span class="text-amber-50 me-4" data-aos="fade-up" data-aos-delay="300">{{ t('homepage.iam') }}</span>
            <VueTyper :text='[t("homepage.fsd"), t("homepage.fl"), t("homepage.ph")]' :repeat='Infinity'
                erase-style='backspace' caret-animation='smooth' :erase-delay='100'></VueTyper>
            <!-- <Typers></Typers> -->
        </p>
        <p class="text-lg font-light text-amber-50 leading-loose" data-aos="fade-up" data-aos-delay="250">
            {{ t('homepage.param1') }}
        </p>
    </div>
</template>
<script setup>
import VueTyper from "vue3-typer";
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>

<style scoped>
.vueTyper {
    font-family: 'Bai Jamjuree bool';
    @apply text-amber-200;
}
</style>