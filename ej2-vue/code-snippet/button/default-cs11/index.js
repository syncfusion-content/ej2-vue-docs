
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-button id='button' isPrimary=true>Button</ejs-button>
`,

  mounted () {
    document.getElementById('button').setAttribute('title', 'Primary Button');
  }

});