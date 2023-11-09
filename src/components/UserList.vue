<template>
    <div class="user-list p-4">
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserList',
    data() {
      return {
        users: [] // This will be your users array
      };
    }
  }
  </script>
  
  <style scoped>
  /* Styles for UserList */
  </style>
  