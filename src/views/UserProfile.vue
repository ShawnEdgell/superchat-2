<template>
    <div class="flex flex-col items-center justify-center h-full p-4">
      <h1 class="text-4xl font-bold mb-6">Profile</h1>
      <form @submit.prevent="saveProfile" class="w-full max-w-xs">
        <div class="mb-4">
          <label for="username" class="block text-sm font-bold mb-2">Username</label>
          <input id="username" type="text" placeholder="Enter your username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
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
  