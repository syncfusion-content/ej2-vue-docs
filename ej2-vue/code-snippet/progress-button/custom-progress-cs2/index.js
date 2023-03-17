
import Vue from 'vue';
import { ProgressButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ProgressButtonPlugin);


new Vue({
	el: '#app',
	template: `
 <div>
 <ejs-progressbutton content='Vertical Progress' :enableProgress="true" cssClass='e-hide-spinner e-vertical' duration=4000></ejs-progressbutton>
 <ejs-progressbutton content='Progress Top' :enableProgress="true" cssClass='e-hide-spinner e-progress-top' duration=4000></ejs-progressbutton>
 <ejs-progressbutton content='Reverse Progress' :enableProgress="true" cssClass='e-hide-spinner e-reverse-progress' duration=4000></ejs-progressbutton>
 </div>
`,

});