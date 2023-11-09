<template>
    <div class="message-container flex items-center gap-2 mb-2">
      <!-- Increase the size of the timestamp -->
      <span class="text-base text-gray-500">{{ message.timestamp }}</span>
      <!-- Increase the size of the message text -->
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

.message-container {
  animation: 0.3s ease-out 0s 1 slideInFromLeft;
}
</style>
