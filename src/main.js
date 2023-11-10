import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import the store
import './assets/main.css'

// Custom Directive for Click Outside
const clickOutsideDirective = {
  mounted(el, binding) {
    el.clickOutsideEvent = function(event) {
      // Check if click was outside the el and its children
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event); // Call the method provided as the directive's value
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

createApp(App)
  .directive('click-outside', clickOutsideDirective)
  .use(router)
  .use(store) // Use the store
  .mount('#app');