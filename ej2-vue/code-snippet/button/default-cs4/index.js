
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div>
    <ejs-button cssClass='e-block'>Block Button</ejs-button>
    <ejs-button cssClass='e-block' isPrimary=true>Block Button</ejs-button>
    <ejs-button cssClass='e-block e-success'>Block Button</ejs-button>
</div>
`,

});