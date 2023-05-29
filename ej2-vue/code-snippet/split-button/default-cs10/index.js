
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SplitButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-splitbutton :items='items' iconCss='e-sb-icons e-paste'>Paste</ejs-splitbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Cut',
                iconCss: 'e-sb-icons e-cut'
            },
            {
                text: 'Copy',
                iconCss: 'e-icons e-copy'
            },
            {
                text: 'Paste',
                iconCss: 'e-sb-icons e-paste'
            },
            {
                separator: true
            },
            {
                text: 'Font',
                iconCss: 'e-sb-icons e-font'
            },
            {
                text: 'Paragraph',
                iconCss: 'e-sb-icons e-paragraph'
            }]
        };
    }

});