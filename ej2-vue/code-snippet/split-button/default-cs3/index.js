
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SplitButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-splitbutton :items='items' iconCss='e-sb e-sigma' enableRtl='true'>Autosum</ejs-splitbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Autosum'
            },
            {
                text: 'Average'
            },
            {
                text: 'Count numbers',
            },
            {
                text: 'Min'
            },
            {
                text: 'Max'
            }]
        };
    }

});