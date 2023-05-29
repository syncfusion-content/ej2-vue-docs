
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SplitButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-splitbutton :items='items' iconCss='e-sb-icons e-paste' cssClass='e-vertical' iconPosition="Top">Paste</ejs-splitbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Undo'
            },
            {
                text: 'Redo'
            },
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
    }

});