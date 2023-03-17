
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton :items='items' cssClass= 'e-caret-hide' iconCss= 'e-image'></ejs-dropdownbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Display Settings'
            },
            {
                text: 'System Settings'
            },
            {
                text: 'Additional Settings'
            }]
        };
    }

});