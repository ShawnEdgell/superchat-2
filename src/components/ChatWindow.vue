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
  import { useChatStore } from '../stores/chatStore';
  import ChatMessage from './ChatMessage.vue';
  
  export default {
    name: 'ChatWindow',
    components: {
      ChatMessage
    },
    computed: {
      allMessages() {
        const chatStore = useChatStore();
        return chatStore.allMessages;
      }
    },
    methods: {
      scrollToBottom() {
        this.$nextTick(() => {
          const chatWindowElement = this.$refs.chatWindow;
          if (chatWindowElement) {
            if (this.initialLoad) {
              chatWindowElement.scrollTop = chatWindowElement.scrollHeight;
              this.initialLoad = false;
            } else {
              const lastElement = chatWindowElement.lastElementChild;
              if (lastElement) {
                lastElement.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }
        });
      }
    },
    data() {
      return {
        initialLoad: true,
      };
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
  