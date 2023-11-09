<template>
    <div class="flex items-center gap-2 mb-2">
      <span class="text-sm text-gray-500">{{ message.timestamp }}</span>
      <p class="flex-1">{{ message.text }}</p>
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