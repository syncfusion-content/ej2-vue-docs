
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SplitButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <ejs-splitbutton :items='items' iconCss='e-sb-icons e-paste'>Paste</ejs-splitbutton>
        <ejs-splitbutton :items='items' iconCss='e-sb-icons e-paste' iconPosition="Top">Paste</ejs-splitbutton>
    </div>
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