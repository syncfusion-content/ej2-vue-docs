
import Vue from 'vue';
import { ButtonPlugin  } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div class='e-btn-group'>
        <ejs-button >HTML</ejs-button>
        <ejs-button disabled='true'>CSS</ejs-button>
        <ejs-button >Javascript</ejs-button>
    </div>
    <div class='e-btn-group'>
        <ejs-button disabled='true'>HTML</ejs-button>
        <ejs-button disabled='true'>CSS</ejs-button>
        <ejs-button disabled='true'>Javascript</ejs-button>
    </div>
  </div>
`,

  name: 'app'

});