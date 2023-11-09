<template>
    <div class="message-container flex items-center gap-2 mb-2">
      <span class="text-base text-gray-500">{{ message.timestamp }}</span>
      <p class="flex-1 text-lg">{{ message.text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatMessage',
    props: {
      message: {
        type: Object,
        required: true
      }
    }
  }
  </script>

  <style scoped>
  
  </style>