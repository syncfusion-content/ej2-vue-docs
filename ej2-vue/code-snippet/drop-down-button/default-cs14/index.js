
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton :items='items' iconCss= 'e-icons e-menu' cssClass= 'e-caret-hide'></ejs-dropdownbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'New tab'
            },
            {
                text: 'New window'
            },
            {
                text: 'New incognito window'
            },
            {
                separator: true
            },
            {
                text: 'Print'
            },
            {
                text: 'Cast'
            },
            {
                text: 'Find'
            }]
        };
    }

});