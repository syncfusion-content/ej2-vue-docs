
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div class="e-btn-group">
        <ejs-button content='Left' iconCss='e-icons e-left-icon'></ejs-button>
        <ejs-button content='Center' iconCss='e-icons e-middle-icon'></ejs-button>
        <ejs-button content='Right' iconCss='e-icons e-right-icon'></ejs-button>
    </div>
  </div>
`,

  name: 'app'

});