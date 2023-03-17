
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton id="ddBtn" :items='items' :beforeOpen='onBeforeOpen' :beforeClose='onBeforeClose'>Clipboard</ejs-dropdownbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Cut'
            },
            {
                text: 'Copy'
            },
            {
                text: 'Paste'
            }]
        };
    },
    methods: {
        // Removing 'e-caret-up' class.
        onBeforeClose: (args) => {
           document.getElementById('ddBtn').ej2_instances[0].cssClass = '';
        },
        // Adding 'e-caret-up' class.
        onBeforeOpen: (args) => {
            document.getElementById('ddBtn').ej2_instances[0].cssClass = 'e-caret-up';
        }
    }

});