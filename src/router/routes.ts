import VacaturePage from "@/components/pages/VacaturePage.vue";
import LandingPage from "@/components/pages/LandingPage.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: "/vue",
    name: "vue",
    component: VacaturePage,
    meta: {
      layout: MainLayout,
    },
  }
];

export default routes;
