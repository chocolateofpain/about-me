import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('../components/Navigation.vue'), 
      a: Home,
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import('../components/Navigation.vue'), 
      a: () => import('../views/About.vue')
    }
  },
  {
    path: '/cv',
    name: 'CV',
    components: {
      default: () => import('../components/Navigation.vue'), 
      a: () => import('../views/CV.vue')
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    components: {
      default: () => import('../components/Navigation.vue'),
      a: () => import('../views/Contact.vue')
    }
  },
  {
    path: '/miscellaneous',
    name: 'Miscellaneous',
    components: {
      default: () => import('../components/Navigation.vue'), 
      a: () => import('../views/Miscellaneous.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
