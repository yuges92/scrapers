import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: "/twitter",
      component: require('@/components/SimpleLayout').default,
      children: [
        {
          path: "",
          name: "Twitter",
          component: require('@/components/Twitter').default
        },
      ]
    },

    {
      path: "/linkedin",
      component: require('@/components/SimpleLayout').default,
      children: [
        {
          path: "",
          name: "LinkedIn",
          component: require('@/components/LinkedIn').default
        },
      ]
    },

    // {
    //   path: '/twitter',
    //   name: 'twitter',
    //   component: require('@/components/Twitter').default
    // },

    {
      path: '*',
      redirect: '/'
    }
  ]
})
