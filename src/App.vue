<template>
    <div class="flex flex-col h-screen">
      <!-- Navigation Bar -->
      <div class="bg-neutral-900 text-white p-4 flex justify-between items-center relative">
        <!-- Logo wrapped in router-link -->
        <router-link to="/">
          <img src="@/assets/skull.svg" alt="Logo" class="h-8 cursor-pointer">
        </router-link>
        <!-- Hamburger Menu Icon for Mobile -->
        <button @click="toggleMenu" class="hamburger md:hidden focus:outline-none" :class="{'open': isMenuOpen}">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <!-- Full Menu for Desktop and Expanded Menu for Mobile -->
        <nav :class="menuClasses" v-click-outside="closeMenu">
            <router-link to="/" class="nav-link text-lg font-semibold py-2 md:py-0">Home</router-link>
            <router-link to="/login" class="nav-link text-lg font-semibold py-2 md:py-0">Login</router-link>
            <router-link to="/user-profile" class="nav-link text-lg font-semibold py-2 md:py-0 pb-4 md:pb-0">Profile</router-link>
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
    computed: {
      menuClasses() {
        return [
          'absolute gap-x-8 top-full left-0 w-full bg-neutral-900 md:static md:flex md:flex-row md:justify-center md:items-center',
          'flex flex-col text-center transition-height duration-500 ease-in-out',
          this.isMenuOpen ? 'max-h-screen' : 'max-h-0', // Control max height for slide effect
          'overflow-hidden md:overflow-visible', // Prevent overflow during transition
          'md:flex' // Always show menu in desktop view
        ];
      }
    },
    methods: {
      toggleMenu(event) {
        event.stopPropagation(); // Prevent the click event from reaching the document
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        if (this.isMenuOpen) {
          this.isMenuOpen = false;
        }
      },
    },
  };
  </script>
  
  <style>
  @import "@/assets/HamburgerMenu.css"; /* Import the Hamburger Menu Styles */
  
  /* ... existing styles ... */
  
  /* Custom styling for navigation links */
  .nav-link {
    @apply transition-opacity duration-300 ease-in-out;
    opacity: 0.75; /* Slightly faded for inactive links */
  }
  
  /* Styling for active links */
  .router-link-active, .router-link-exact-active {
    @apply font-bold;
    opacity: 1; /* Fully opaque for active link */
  }
  </style>