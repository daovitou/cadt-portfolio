<template>
    <div class="w-full flex flex-col justify-start items-start py-6 pe-6 gap-8">
        <!-- <h1 class="text-amber-50 font-extrabold text-4xl" data-aos="fade-up" data-aos-delay="150">Contact Us</h1> -->
        <div class="flex flex-col items-center justify-center w-full">
            <div class="w-[90%] md:w-[580px] lg:w-[800px] mx-auto p-6 bg-base rounded-lg shadow-md opacity-80" data-aos="fade-up" data-aos-delay="150">
                <div
                    class="text-2xl flex flex-col gap-4 lg:flex-row items-center justify-between font-semibold text-amber-100">
                    <div>
                        {{ t('contact.call') }}: 096 678 2008 / 095 59 90 90
                    </div>
                    <div class="flex flex-row justify-end items-center gap-4">
                        <a href="https://t.me/daovitou" target="_blank">
                            <img src="@/assets/icon/icon_telegram.svg" width="32" height="32" alt="" srcset="">
                        </a>
                        <a href="https://www.facebook.com/vitoudao" target="_blank">
                            <img src="@/assets/icon/icon_facebook.svg" width="32" height="32" alt="" srcset="">
                        </a>
                    </div>
                </div>
                <div class="flex items-center my-4">
                    <div class="flex-grow border-t border-amber-300"></div>
                    <span class="mx-4 text-gray-300 font-semibold">OR</span>
                    <div class="flex-grow border-t border-amber-300"></div>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="mb-4">
                        <label for="name" class="block text-xl font-medium text-amber-100">{{ t('contact.name') }}</label>
                        <input v-model="formData.name" type="text" id="name" required
                            class="mt-1 block w-full text-color-base font-semibold p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                    </div>

                    <div class="mb-4">
                        <label for="email" class="block text-xl font-medium text-amber-100">{{ t('contact.email') }}</label>
                        <input v-model="formData.email" type="email" id="email" required
                            class="mt-1 block w-full text-color-base font-semibold p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                    </div>

                    <div class="mb-4">
                        <label for="message" class="block text-xl font-medium text-amber-100">{{ t('contact.message') }}</label>
                        <textarea v-model="formData.message" id="message" rows="4" required
                            class="mt-1 block w-full text-color-base font-semibold p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                    </div>

                    <button type="submit"
                        class="w-full bg-amber-400 hover:bg-amber-300 text-color-base font-extrabold py-2 rounded-md transition">
                        {{ t('contact.send') }}
                    </button>
                </form>
                <p v-if="successMessage" class="mt-4 text-green-500">{{ successMessage }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t,locale } = useI18n()
        const formData = ref({
            name: '',
            email: '',
            message: '',
        });

        const successMessage = ref('');

        const submitForm = () => {
            // Here you would typically send the form data to your backend
            console.log('Form submitted:', formData.value);
            successMessage.value = 'Your message has been sent successfully!';
            // Reset form
            formData.value = { name: '', email: '', message: '' };
        };

        return { formData, submitForm, successMessage,t,locale };
    },
});
</script>
