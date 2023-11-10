<template>
    <div class="flex flex-col items-center justify-center h-full p-4">
      <h1 class="text-4xl font-bold mb-6">Profile</h1>
      <form @submit.prevent="saveProfile" class="w-full max-w-xs">
        <!-- Username Field (Required) -->
        <div class="mb-4">
          <label for="username" class="block text-sm font-bold mb-2">Username *</label>
          <input id="username" type="text" placeholder="Enter your username" required class="shadow border rounded w-full py-2 px-3 text-gray-700">
        </div>
        <!-- First Name Field (Optional) -->
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-bold mb-2">First Name</label>
          <input id="firstName" type="text" placeholder="Enter your first name" class="shadow border rounded w-full py-2 px-3 text-gray-700">
        </div>
        <!-- Last Name Field (Optional) -->
        <div class="mb-4">
          <label for="lastName" class="block text-sm font-bold mb-2">Last Name</label>
          <input id="lastName" type="text" placeholder="Enter your last name" class="shadow border rounded w-full py-2 px-3 text-gray-700">
        </div>
        <!-- City Field (Optional) -->
        <div class="mb-6">
          <label for="city" class="block text-sm font-bold mb-2">City</label>
          <input id="city" type="text" placeholder="Enter your city" class="shadow border rounded w-full py-2 px-3 text-gray-700">
        </div>
        <!-- Submit Button -->
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    methods: {
      saveProfile() {
        // Handle the profile save logic here
        alert('Profile save functionality not implemented yet.');
      }
    }
  }
  </script>
  
  <style scoped>
    /* Add styles specific to Profile view if needed */
  </style>
  