import Vue from 'vue'
import Router from 'vue-router'
import Todos from '../components/Todos'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/hello',
      name: 'Hello World',
      component: HelloWorld
    }
  ]
})
