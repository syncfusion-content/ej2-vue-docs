
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div class="e-btn-group">
        <ejs-button cssClass='e-info'>View</ejs-button>
        <ejs-button>Edit</ejs-button>
        <ejs-button cssClass='e-danger'>Delete</ejs-button>
    </div>
  </div>
`,

  name: 'app'

});