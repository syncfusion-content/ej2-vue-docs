import Vue from 'vue';
import { AIAssistViewPlugin } from '@syncfusion/ej2-vue-interactive-chat';
Vue.use(AIAssistViewPlugin);
new Vue({ el: '#app', template: '<ejs-aiassistview :mentions="mentions"></ejs-aiassistview>', data: { mentions: [{ mentionChar: '@', dataSource: [{ agentId: 1, displayName: 'TechSupport' }], fields: { text: 'displayName', value: 'agentId' } }] } });