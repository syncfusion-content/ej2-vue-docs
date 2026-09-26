import Vue from 'vue';
import { AIAssistViewPlugin } from '@syncfusion/ej2-vue-interactive-chat';
import { Query } from '@syncfusion/ej2-data';
Vue.use(AIAssistViewPlugin);
new Vue({ el: '#app', template: '<ejs-aiassistview :mentions="mentions"></ejs-aiassistview>', data: { mentions: [{ mentionChar: '@', dataSource: ['TechSupport', 'HRAssistant'], query: new Query().take(1) }] } });