<template>
    <div class="fixed inset-x-0 bottom-0 p-4 bg-white shadow">
      <div class="flex items-center gap-0 mx-auto">
        <button @click="toggleEmojiPicker" class="emoji-button text-lg p-2 rounded-l-lg bg-white border border-r-0 border-gray-300">😊</button>
        <div class="relative">
          <div v-if="isEmojiPickerVisible" class="absolute bottom-10 left-0 z-10">
            <emoji-picker @emoji-click="insertEmoji"></emoji-picker>
          </div>
        </div>
        <input 
          type="text" 
          class="flex-1 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-r-lg p-2 text-lg" 
          placeholder="Type a message..." 
          v-model="messageText" 
          @keyup.enter="sendMessage"
        />
      </div>
    </div>
</template>

<script>
import 'emoji-picker-element';

export default {
  name: 'MessageInput',
    data() {
      return {
        messageText: '',
        isEmojiPickerVisible: false
      };
    },
    methods: {
      toggleEmojiPicker() {
        this.isEmojiPickerVisible = !this.isEmojiPickerVisible;
        if (this.isEmojiPickerVisible) {
          document.addEventListener('click', this.handleClickOutside, true);
        } else {
          document.removeEventListener('click', this.handleClickOutside, true);
        }
      },
      handleClickOutside(event) {
        if (!this.$el.contains(event.target)) {
          this.isEmojiPickerVisible = false;
          document.removeEventListener('click', this.handleClickOutside, true);
        }
      },
      insertEmoji(event) {
        this.messageText += event.detail.unicode;
        this.toggleEmojiPicker();
      },
      sendMessage() {
        if (this.messageText.trim()) {
          this.$store.dispatch('addMessage', { text: this.messageText });
          this.messageText = '';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tailwind CSS styles as needed */
  </style>
  