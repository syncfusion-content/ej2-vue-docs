
import Vue from 'vue';
import { ProgressButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ProgressButtonPlugin);


new Vue({
	el: '#app',
	template: `
 <ejs-progressbutton content="Submit"  :spinSettings="spinSettings" ></ejs-progressbutton>
`,

    data () {
        return {
            spinSettings: { position: 'Right', width: 20, template: '<div class="template"></div>' }
        };
    }

});