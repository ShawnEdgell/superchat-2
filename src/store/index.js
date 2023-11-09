import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      messages: []
    };
  },
  mutations: {
    ADD_MESSAGE(state, message) {
      state.messages.push(message);
    }
  },
  actions: {
    addMessage({ commit }, message) {
      const timestampedMessage = {
        ...message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      commit('ADD_MESSAGE', timestampedMessage);
    }
  },
  getters: {
    allMessages(state) {
      return state.messages;
    }
  }
});
