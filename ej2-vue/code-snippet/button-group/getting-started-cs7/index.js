
import Vue from 'vue';
import { ButtonPlugin  } from '@syncfusion/ej2-vue-buttons';
import { enableRipple, rippleEffect } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div class='e-btn-group'>
        <ejs-button>HTML</ejs-button>
        <ejs-button>CSS</ejs-button>
        <ejs-button>Javascript</ejs-button>
    </div>
  </div>
`,

  name: 'app',
  mounted(){
    var button= document.querySelector('.e-btn-group');
    rippleEffect(button, { selector: '.e-btn' });
  }

});