import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import HomePage from '../views/HomePage.vue'
import CardPage from '../views/CardPage.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import AddBenner from '../views/AddBenner'
import AllBenner from '../views/AllBenner'
import EditBenner from '../views/EditBenner'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/registerpage',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/cardpage',
    name: 'CardPage',
    component: CardPage
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/editproduct',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/addbenner',
    name: 'AddBenner',
    component: AddBenner
  },
  {
    path: '/allbenner',
    name: 'AllBenner',
    component: AllBenner
  },
  {
    path: '/editbenner',
    name: 'EditBenner',
    component: EditBenner
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
