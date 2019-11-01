/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/pages/Product'
import ProductDetail from '@/pages/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
  		path: '/',
  		component: Product
    },
    {
  		path: '/productDetail',
  		component: ProductDetail
  	}
  ]
})
