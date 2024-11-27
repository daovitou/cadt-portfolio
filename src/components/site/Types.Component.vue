<template>
    <span >{{ displayedText }}</span><span class="blinker ">|</span>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
    setup() {
        const texts = ["Full-Stack Developer.", "Freelancer.", "Photographer."];
        const index = ref(0);
        const displayedText = ref("");
        const typingSpeed = 200; // typing speed in ms
        const erasingSpeed = 200; // erasing speed in ms
        let typingInterval: ReturnType<typeof setInterval>;
        let erasingInterval: ReturnType<typeof setInterval>;

        const startTyping = () => {
            typingInterval = setInterval(() => {
                if (displayedText.value.length < texts[index.value].length) {
                    displayedText.value += texts[index.value].charAt(displayedText.value.length);
                } else {
                    clearInterval(typingInterval);
                    setTimeout(startErasing, 1000); // wait a bit before erasing
                }
            }, typingSpeed);
        };

        const startErasing = () => {
            erasingInterval = setInterval(() => {
                if (displayedText.value.length > 0) {
                    displayedText.value = displayedText.value.slice(0, -1);
                } else {
                    clearInterval(erasingInterval);
                    index.value = (index.value + 1) % texts.length; // move to the next text
                    setTimeout(startTyping, 500); // wait a bit before typing again
                }
            }, erasingSpeed);
        };

        onMounted(() => {
            startTyping();
        });

        onBeforeUnmount(() => {
            clearInterval(typingInterval);
            clearInterval(erasingInterval);
        });

        return {
            displayedText,
        };
    },
});
</script>

<style scoped>
.blinker {
    animation: blink 0.5s step-end infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>