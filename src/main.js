import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'; // Import Pinia
import './assets/main.css';

// Custom Directive for Click Outside
const clickOutsideDirective = {
  mounted(el, binding) {
    el.clickOutsideEvent = function(event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

const app = createApp(App);

app.directive('click-outside', clickOutsideDirective)
  .use(router)
  .use(createPinia()) // Use Pinia for state management
  .mount('#app');
