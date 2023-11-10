<template>
    <div class="fixed inset-x-0 bottom-0 p-4 bg-white shadow">
      <div class="flex items-center gap-0 mx-auto relative">
        <!-- Character Limit Flag -->
        <div v-if="isLimitReached" class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 p-2 bg-red-500 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
          Maximum character limit reached.
        </div>
  
        <!-- Emoji Button -->
        <button @click="toggleEmojiPicker" class="text-lg py-2 px-3 rounded-l-lg bg-white border border-r-0 border-gray-300">
          😊
        </button>
  
        <!-- Emoji Picker -->
        <div v-if="isEmojiPickerVisible" class="absolute bottom-10 left-0 z-10">
          <emoji-picker @emoji-click="insertEmoji"></emoji-picker>
        </div>
  
        <!-- Message Input -->
        <input 
          type="text" 
          class="flex-1 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-r-lg p-2 text-lg" 
          placeholder="Say something..." 
          v-model="messageText" 
          @keyup.enter="sendMessage"
          :maxlength="maxMessageLength"
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
        isEmojiPickerVisible: false,
        maxMessageLength: 500,
      };
    },
    computed: {
      isLimitReached() {
        return this.messageText.length >= this.maxMessageLength;
      }
    },
    methods: {
      toggleEmojiPicker() {
        this.isEmojiPickerVisible = !this.isEmojiPickerVisible;
        this.manageClickOutsideListener();
      },
      manageClickOutsideListener() {
        const action = this.isEmojiPickerVisible ? 'addEventListener' : 'removeEventListener';
        document[action]('click', this.handleClickOutside, true);
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
  /* No additional styles needed */
  </style>
  