import './bootstrap.js';
import { createApp } from 'vue';
import App from './components/App.vue'; // استبدل بالمسار الصحيح لمكونك الرئيسي

const app = createApp(App);

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

app.mount('#app');