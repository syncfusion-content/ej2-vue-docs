import Vue from 'vue';
import { SpeechToTextPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(SpeechToTextPlugin);

new Vue({
	el: '#app',
	template: `
    <div id='container'>
        <ejs-speechtotext id="speechtotext"></ejs-speechtotext>
    </div>
`,

});