<template>
    <div class="flex flex-col h-screen">
      <!-- Navigation Bar -->
      <div class="bg-neutral-900 text-white p-4 flex justify-between items-center relative">
        <!-- Logo -->
        <img src="@/assets/skull.svg" alt="Logo" class="h-8">
        <!-- Hamburger Menu Icon for Mobile -->
        <button @click="toggleMenu" class="text-2xl md:hidden focus:outline-none">
          ☰
        </button>
        <!-- Full Menu for Desktop and Expanded Menu for Mobile -->
        <nav :class="['absolute top-full text-center left-0 w-full bg-neutral-900 flex-col md:static md:flex md:flex-row gap-4 justify-center flex-1', isMenuOpen ? 'pb-4 flex' : 'hidden']">
            <router-link to="/" class="text-lg font-semibold">Home</router-link>
            <router-link to="/login" class="text-lg font-semibold">Login</router-link>
            <router-link to="/user-profile" class="text-lg font-semibold">Profile</router-link>
        </nav>
      </div>
      <!-- Page Content -->
      <div class="flex-1 overflow-y-auto">
        <router-view></router-view>
      </div>
    </div>
  </template>

  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style>
  /* ... global styles if necessary ... */
  </style>
  