import { defineStore } from 'pinia';

export const useChatStore = defineStore('chatStore', {
  state: () => ({
    messages: [],
  }),
  actions: {
    addMessage(message) {
      const timestampedMessage = {
        ...message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      this.messages.push(timestampedMessage);
    }
  },
  getters: {
    allMessages: (state) => state.messages,
  },
});
