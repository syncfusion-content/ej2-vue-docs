
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SplitButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <div id='dropdowntarget'>
            <div id= "first">
                <div id='black'></div>
                <div id='red'></div>
                <div id='green'></div>
                <div id='gray'></div>
                <div id='blue'></div>
                <div id='violet'></div>
                <div id='brown'></div>
                <div id='darkgoldenrod'></div>
                <div id='aquamarine'></div>
            </div>
        </div>
        <ejs-splitbutton  target='#dropdowntarget' iconCss='e-sb-icons e-color'></ejs-splitbutton>
    </div>
`,

    data () {
        return {
            items:[
            {
                text: 'Cut',
                iconCss: 'e-icons e-cut'
            },
            {
                text: 'Copy',
                iconCss: 'e-icons e-copy'
            },
            {
                text: 'Paste',
                iconCss: 'e-icons e-paste'
            }]
        };
    }

});