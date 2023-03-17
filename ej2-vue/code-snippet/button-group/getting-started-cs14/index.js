
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";

Vue.use(ButtonPlugin);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div class="e-btn-group">
        <div class='e-btn-group'>
            <ejs-button >HTML</ejs-button>
            <ejs-button >CSS</ejs-button>
            <ejs-button >Javascript</ejs-button>
            <ejs-dropdownbutton :items='items'>More</ejs-dropdownbutton>
        </div>
    </div>
  </div>
`,

  name: 'app',
  data () {
        return {
            items:[
            {
                text: 'Learn SQL'
            },
            {
                text: 'Learn PHP'
            },
            {
                text: 'Learn Bootstrap'
            }]
        };
    }

});