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
        <nav :class="menuClasses">
            <router-link to="/" class="text-lg font-semibold py-2 md:py-0">Home</router-link>
            <router-link to="/login" class="text-lg font-semibold py-2 md:py-0">Login</router-link>
            <!-- Added padding to the bottom for mobile view -->
            <router-link to="/user-profile" class="text-lg font-semibold py-2 md:py-0 pb-4 md:pb-0">Profile</router-link>
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
        'absolute gap-x-4 top-full left-0 w-full bg-neutral-900 md:static md:flex md:flex-row md:justify-center md:items-center',
        'flex flex-col text-center transition-height duration-500 ease-in-out',
        this.isMenuOpen ? 'max-h-screen' : 'max-h-0', // Control max height for slide effect
        'overflow-hidden md:overflow-visible', // Prevent overflow during transition
        'md:flex' // Always show menu in desktop view
      ];
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
/* ... existing styles ... */
</style>
