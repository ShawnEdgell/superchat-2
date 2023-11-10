import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Login from '../views/UserLogin.vue';
import UserProfile from '../views/UserProfile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile
  },
  // Add a redirect for any undefined routes to the home page
  {
    path: '/:catchAll(.*)', // This will catch any undefined paths
    redirect: '/' // Redirect to the home page
  }
];

const router = createRouter({
    history: createWebHistory('/superchat-2/'), // Update the base URL
    routes
  });
  

export default router;
