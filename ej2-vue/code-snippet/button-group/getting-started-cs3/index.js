
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div class="e-btn-group e-vertical">
        <ejs-button >HTML</ejs-button>
        <ejs-button >CSS</ejs-button>
        <ejs-button >Javascript</ejs-button>
    </div>
  </div>
`,

  name: 'app'

});