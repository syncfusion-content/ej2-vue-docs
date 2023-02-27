
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div>
    <ejs-button cssClass='e-primary'>Primary</ejs-button>
    <ejs-button cssClass='e-success'>Success</ejs-button>
    <ejs-button cssClass='e-info'>Info</ejs-button>
    <ejs-button cssClass='e-warning'>Warning</ejs-button>
    <ejs-button cssClass='e-danger'>Danger</ejs-button>
    <ejs-button cssClass='e-link'>Link</ejs-button>
</div>
`,

});