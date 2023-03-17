
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton :items='items' iconCss='e-icons e-search' cssClass='e-custom' iconPosition='Top'      content='Find & Select'></ejs-dropdownbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Find'
            },
            {
                text: 'Replace'
            },
            {
                text: 'Go To'
            },
            {
                text: 'Go To Special'
            }]
        };
    }

});