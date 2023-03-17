
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);


new Vue({
	el: '#app',
	template: `
        <div class="multiline">
            <ejs-textbox name='default' :multiline="true" placeholder="Enter your address" value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center'></ejs-textbox>
        </div>
    </div>
`,

 data: function(){
        return {
        }
    }

});