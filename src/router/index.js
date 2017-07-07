import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Incident from '@/components/Incident'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/incident',
      name: 'Incident',
      component: Incident
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
