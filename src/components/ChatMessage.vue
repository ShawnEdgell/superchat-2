<template>
    <div class="flex items-center gap-2 mb-2">
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
