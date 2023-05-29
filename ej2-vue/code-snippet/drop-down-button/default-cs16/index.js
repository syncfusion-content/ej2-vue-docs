
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton :items='items' iconCss= 'ddb-icons e-message' cssClass= 'e-vertical' iconPosition= 'Top'>Message</ejs-dropdownbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Edit'
            },
            {
                text: 'Delete'
            },
            {
                text: 'Mark as Read'
            },
            {
                text: 'Like Message'
            }]
        };
    }

});