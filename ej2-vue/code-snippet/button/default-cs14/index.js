
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <ejs-button cssClass='e-flat'>Flat</ejs-button>
        <ejs-button cssClass='e-outline'>Outline</ejs-button>
        <ejs-button cssClass='e-round' iconCss='e-icons e-plus-icon' isPrimary=true></ejs-button>
    </div>
`,

});