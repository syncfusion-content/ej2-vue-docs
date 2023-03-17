
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton :items='items'>Clipboard</ejs-dropdownbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Cut',
                iconCss: 'e-db-icons e-cut'
            },
            {
                text: 'Copy',
                iconCss: 'e-icons e-copy'
            },
            {
                text: 'Paste',
                iconCss: 'e-db-icons e-paste'
            },
            {
                separator: true
            },
            {
                text: 'Font',
                iconCss: 'e-db-icons e-font'
            },
            {
                text: 'Paragraph',
                iconCss: 'e-db-icons e-paragraph'
            }]
        };
    }

});