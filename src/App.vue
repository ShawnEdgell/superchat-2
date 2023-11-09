<template>
    <div class="flex flex-col h-screen">
      <nav class="flex items-center justify-between p-4 bg-neutral-900 border-b">
        <!-- Logo on the left -->
        <img :src="logo" alt="Logo" class="h-8 w-8">
  
        <!-- Navigation links in the center -->
        <div class="flex gap-4">
          <router-link to="/" class="text-lg font-semibold text-neutral-200">Home</router-link>
          <router-link to="/login" class="text-lg font-semibold text-neutral-200">Login</router-link>
          <router-link to="/user-profile" class="text-lg font-semibold text-neutral-200">Profile</router-link>
        </div>
  
        <!-- Spacer div for balancing the flex layout -->
        <div class="h-8 w-8"></div>
      </nav>
      <div class="flex-1 overflow-y-auto">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  import logo from '@/assets/skull.svg'; // Import the logo
  
  export default {
    name: 'App',
    data() {
      return {
        logo, // Make the logo available in the template
      };
    },
  }
  </script>
  
  <style>
  /* You may add global styles if needed */
  </style>
  