import Vue from "vue";
import VueRouter from "vue-router";
import About from "../components/About.vue";
import Contact from '../components/Contact.vue';
import Home from '../components/Pomo.vue';

Vue.use(VueRouter);

const routes =[ 

    {
        path:'/',
        name:'Home',
        component:Home
    },
       {

    path: '/about',
    name: 'About',
    component:About
    },

    {
        path:'/contact',
        name: 'Contact',
        component: Contact
    },

    ];

  const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;


