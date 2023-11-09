<template>
  <div class="flex flex-col h-full">
    <ChatWindow />
    <MessageInput />
    <UserList />
  </div>
</template>

<script>
import ChatWindow from '@/components/ChatWindow.vue';
import MessageInput from '@/components/MessageInput.vue';
import UserList from '@/components/UserList.vue';

export default {
  name: 'HomePage',
  components: {
    ChatWindow,
    MessageInput,
    UserList
  }
}
</script>

<style scoped>
/* Styles specific to HomePage */
</style>
