<template>
    <div class="flex-1 p-4 pb-9 overflow-y-auto" ref="chatWindow">
      <ChatMessage 
        v-for="message in allMessages" 
        :key="message.id" 
        :message="message"
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
    data() {
      return {
        initialLoad: true, // Flag to check if it's the initial load
      };
    },
    computed: {
      ...mapGetters(['allMessages'])
    },
    methods: {
      scrollToBottom() {
        this.$nextTick(() => {
          const chatWindowElement = this.$refs.chatWindow;
          if (chatWindowElement) {
            if (this.initialLoad) {
              // If it's the initial load, jump directly to the bottom
              chatWindowElement.scrollTop = chatWindowElement.scrollHeight;
              this.initialLoad = false; // Reset the flag after initial load
            } else {
              // For subsequent updates, use smooth scrolling
              const lastElement = chatWindowElement.lastElementChild;
              if (lastElement) {
                lastElement.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }
        });
      }
    },
    mounted() {
      this.scrollToBottom();
    },
    updated() {
      this.scrollToBottom();
    }
  }
  </script>
  
  <style scoped>
  /* Styles for ChatWindow */
  </style>
  