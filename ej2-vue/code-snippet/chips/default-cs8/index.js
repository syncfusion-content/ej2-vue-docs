
import Vue from 'vue';
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ChipListPlugin);


new Vue({
	el: '#app',
	template: `
 <ejs-chiplist id="chip" text="Janet Leverling"></ejs-chiplist>
`,

});