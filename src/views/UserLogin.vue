<template>
  <div class="flex flex-col items-center justify-center h-full p-4">
    <h1 class="text-4xl font-bold mb-6">Login</h1>
    <form @submit.prevent="handleLogin" class="w-full max-w-xs">
      <div class="mb-4">
        <label for="username" class="block text-sm font-bold mb-2">Username</label>
        <input id="username" type="text" placeholder="Enter your username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-bold mb-2">Password</label>
        <input id="password" type="password" placeholder="Enter your password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  methods: {
    handleLogin() {
      // Handle the login logic here
      alert('Login functionality not implemented yet.');
    }
  }
}
</script>

<style scoped>
/* Add styles specific to Login view if needed */
</style>
