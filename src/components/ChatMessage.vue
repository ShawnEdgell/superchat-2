<template>
    <div :class="['flex items-start gap-2 mb-2', shouldAnimate ? 'animate-slide-in' : '']">
      <span class="flex-none text-base text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[100px] self-center">{{ message.timestamp }}</span>
      <p class="flex-1 text-lg break-words min-w-0 self-center">{{ message.text }}</p>
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

.animate-slide-in {
  animation: slideInFromLeft 0.3s ease-out;
}
</style>

  