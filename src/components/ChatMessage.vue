<template>
    <div :class="['message-container flex items-center gap-2 mb-2', { 'animate': shouldAnimate }]">
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
    },
    data() {
      return {
        shouldAnimate: false,
      };
    },
    mounted() {
      // Only animate if it's not part of the initial load
      this.shouldAnimate = !this.$parent.initialLoad;
    }
  }
  </script>
  
  <style scoped>
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-25%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .message-container.animate {
    animation: 0.3s ease-out 0s 1 slideInFromLeft;
  }
  </style>
  