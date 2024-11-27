<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="text-center animate-fade-in">
            <h1 class="text-7xl font-bold text-rose-700">404</h1>
            <p class="mt-4 text-lg text-gray-500">Oops! Page not found.</p>
            <router-link :to="{name:'SiteHome'}"
                class="mt-8 inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
                Go Home
            </router-link>
        </div>
    </div>
</template>

<style>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.3s ease-in-out;
}
</style>