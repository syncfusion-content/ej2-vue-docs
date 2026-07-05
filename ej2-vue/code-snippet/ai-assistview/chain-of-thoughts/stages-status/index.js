import Vue from 'vue';
import { AIAssistViewComponent, AssistThinking } from "@syncfusion/ej2-vue-interactive-chat";
import App from './app.vue';

let app = new Vue({
    render: h => h(App)
});

app.$mount('#app');
