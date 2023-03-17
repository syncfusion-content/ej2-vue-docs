
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <ejs-button iconCss='e-btn-sb-icon e-prev-icon'>Previous</ejs-button>
        <ejs-button iconCss='e-btn-sb-icon e-stop-icon' iconPosition='Right'>Stop</ejs-button>
    </div>
`,

});