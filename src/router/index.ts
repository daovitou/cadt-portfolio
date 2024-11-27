import SiteLayout from "@/layouts/Site.Layout.vue";
import NotFoundPage from "@/views/NotFound.Page.vue";
import ContactPage from "@/views/site/Contact.Page.vue";
import HomePage from "@/views/site/Home.Page.vue";
import MoviePage from "@/views/site/Movie.Page.vue";
import ResumePage from "@/views/site/Resume.Page.vue";
import ServicePage from "@/views/site/Service.Page.vue";
import TechnologyPage from "@/views/site/Technology.Page.vue";
import TodoPage from "@/views/site/Todo.Page.vue";
import WeatherPage from "@/views/site/Weather.Page.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/:pathMatch(.*)*", component: NotFoundPage },
    {
      path: "/",
      component: SiteLayout,
      children: [
        {
          path: "",
          name: "SiteHome",
          component: HomePage,
        },
        {
          path: "/service",
          name: "SiteService",
          component: ServicePage,
        },
        {
          path: "/resume",
          name: "SiteResume",
          component: ResumePage,
        },
        {
          path: "/technology",
          name: "SiteTechnology",
          component: TechnologyPage,
        },
        {
          path: "/contact",
          name: "SiteContact",
          component: ContactPage,
        },
        {
          path: "/weather",
          name: "SiteWeather",
          component: WeatherPage,
        },
        {
          path: "/todo",
          name: "SiteTodo",
          component: TodoPage,
        },
        {
          path: "/movie",
          name: "SiteMovie",
          component: MoviePage,
        },
      ],
    },
  ],
});

export default router;
