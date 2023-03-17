
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton :items='items' iconCss= 'ddb-icons e-message'>Message</ejs-dropdownbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Edit',
                iconCss: 'ddb-icons e-edit'
            },
            {
                text: 'Delete',
                iconCss: 'ddb-icons e-delete'
            },
            {
                text: 'Mark As Read',
                iconCss: 'ddb-icons e-read'
            },
            {
                text: 'Like Message',
                iconCss: 'ddb-icons e-like'
            }]
        };
    }

});