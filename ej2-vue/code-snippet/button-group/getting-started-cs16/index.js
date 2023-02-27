
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div class="e-btn-group e-outline">
        <ejs-button cssClass='e-outline'>HTML</ejs-button>
        <ejs-button cssClass='e-outline' >CSS</ejs-button>
        <ejs-button cssClass='e-outline' >Javascript</ejs-button>
    </div>
  </div>
`,

  name: 'app'

});