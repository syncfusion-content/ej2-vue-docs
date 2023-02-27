
import Vue from 'vue';
import { SplitButtonPlugin  } from "@syncfusion/ej2-vue-splitbuttons";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ButtonPlugin);
Vue.use(SplitButtonPlugin );


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div class="e-btn-group e-vertical">
        <div class='e-btn-group'>
            <ejs-button content='Cut'></ejs-button>
            <ejs-button content='Copy'></ejs-button>
            <ejs-splitbutton :items='items' content='Paste'></ejs-splitbutton>
        </div>
    </div>
  </div>
`,

  name: 'app',
  data () {
        return {
            items:[
            {
                text: 'Paste'
            },
            {
                text: 'Paste Text'
            },
            {
                text: 'Paste Special'
            }]
        };
    }

});