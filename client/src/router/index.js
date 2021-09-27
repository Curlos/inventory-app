import { createRouter, createWebHistory } from "vue-router";
import ProductPage from "../views/ProductPage";
import ProductsPage from "../views/ProductsPage";

const routes = [
  {
    path: "/product/:id",
    name: "ProductPage",
    component: ProductPage,
    props: true
  },
  {
    path: "/category/:name",
    name: "ProductsPage",
    component: ProductsPage,
    props: true
  },
  {
    path: "/",
    name: "ProductsPage",
    component: ProductsPage,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
