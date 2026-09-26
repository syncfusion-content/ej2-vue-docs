import Vue from 'vue';
import { AIAssistViewPlugin } from '@syncfusion/ej2-vue-interactive-chat';
Vue.use(AIAssistViewPlugin);
new Vue({ el: '#app', template: '<ejs-aiassistview :mentions="mentions" :mention-select="onMentionSelect"></ejs-aiassistview>', data: { mentions: [{ mentionChar: '@', dataSource: ['TechSupport', 'HRAssistant'] }] }, methods: { onMentionSelect: args => console.log(args) } });