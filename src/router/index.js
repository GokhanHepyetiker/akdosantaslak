import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/AnaSayfa.vue";
import About from "../views/HakkımızdaPage.vue";
import Services from "../views/HizmetlerPage.vue";
import Contact from "../views/İletişimPage.vue";
import Vision from "../views/VizyonumuzPage.vue";
import Mission from "../views/MisyonumuzPage.vue";
import BlogPage from "@/views/BlogPage.vue";
import BlogDetail from "@/views/BlogDetail.vue";
import LisanslarımızPage from "@/views/LisanslarımızPage.vue";
import BranchLicenses from "@/views/BranchLicenses.vue";

const routes = [
  { path: "/", name: "AnaSayfa", component: Home },
  { path: "/about", name: "Hakkımızda", component: About },
  { path: "/services", name: "Hizmetler", component: Services },
  { path: "/contact", name: "İletişim", component: Contact },
  { path: "/about/vision", name: "Vizyon", component: Vision },
  { path: "/about/mission", name: "Misyon", component: Mission },
  { path: "/blog", name: "Blog", component: BlogPage },
  { path: "/blog/:id", name: "BlogDetail", component: BlogDetail },
  { path: "/licenses", name: "Lisanslarımız", component: LisanslarımızPage },
  { path: "/licenses/:id", name: "BranchLicenses", component: BranchLicenses },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



