<template>
    <div class="flex-1 p-4 pb-9  overflow-y-auto" ref="chatWindow">
      <ChatMessage 
        v-for="message in allMessages" 
        :key="message.id" 
        :message="message" 
        ref="lastMessage"
      />
    </div>
  </template>
  
  <script>
  import ChatMessage from './ChatMessage.vue';
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'ChatWindow',
    components: {
      ChatMessage
    },
    computed: {
      ...mapGetters(['allMessages'])
    },
    updated() {
      this.scrollToBottom();
    },
    methods: {
    scrollToBottom() {
        this.$nextTick(() => {
        const lastMessageElement = this.$refs.lastMessage;
        if (lastMessageElement && lastMessageElement.length > 0) {
            const lastElement = lastMessageElement[lastMessageElement.length - 1].$el;
            lastElement.scrollIntoView({ behavior: 'smooth' });
        }
        });
    }
    },
    mounted() {
      this.scrollToBottom(); // Also scroll to bottom when the component is first mounted
    }
  }
  </script>
  
  <style scoped>
  /* Styles for ChatWindow */
  </style>
  