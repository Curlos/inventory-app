import { createRouter, createWebHistory } from "vue-router";
import ProductPage from "../views/ProductPage";
import ProductsPage from "../views/ProductsPage";

const routes = [
  {
    path: "/product",
    name: "ProductPage",
    component: ProductPage
  },
  {
    path: "/",
    name: "ProductsPage",
    component: ProductsPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
