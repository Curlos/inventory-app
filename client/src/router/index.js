import { createRouter, createWebHistory } from "vue-router";
import ProductPage from "../views/ProductPage";
import ProductsPage from "../views/ProductsPage";
import ProductForm from "../views/ProductForm";

const routes = [
  {
    path: "/product/:id",
    name: "ProductPage",
    component: ProductPage,
    props: true
  },
  {
    path: "/category/:name",
    name: "CategoryProductsPage",
    component: ProductsPage,
    props: true
  },
  {
    path: "/edit-product/:id",
    name: "EditProductForm",
    component: ProductForm,
    props: true
  },
  {
    path: "/add-product",
    name: "ProductForm",
    component: ProductForm,
    props: true
  },
  {
    path: "/",
    name: "ProductsPage",
    component: ProductsPage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
