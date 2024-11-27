import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Aos from "aos";
import "@/assets/css/aos.css";
import "@/assets/css/vue-typer.css";
import i18n from "./lang";
import "@/assets/star.scss";
import "@/assets/moon.scss";
import App from "./App.vue";
import router from "./router";
import 'vue3-carousel/dist/carousel.css'
const app = createApp(App);
app.use(Aos.init);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
