<template>
    <div class="flex flex-row justify-between items-center mb-1 font-medium">
        <h1>{{ props.title }}</h1>
        <h1 class="text-xs text-amber-200 rounded-lg px-1 py-[0.2rem] bg-base">{{ props.progrss }}%</h1>
    </div>
    <div class="w-full h-2 bg-slate-600 rounded-full overflow-hidden relative">
        <div class="animated-background" :style="{ width: `${props.progrss}%` }"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    progrss: Number,
    title:String
})

</script>

<style scoped>
.animated-background {
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  animation: colorChange 3s infinite both;
}
/* Keyframes for background color animation */
@keyframes colorChange {
  0% {
    @apply bg-amber-200; /* Start color */
  }
  50% {
    @apply bg-amber-300; /* Mid color */
  }
  100% {
    @apply bg-amber-200; /* End color */
  }
}
</style>