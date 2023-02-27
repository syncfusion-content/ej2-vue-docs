
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton :items='items' :beforeItemRender='onBeforeItemRender'>Clipboard</ejs-dropdownbutton>
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
            }],
        };
    },
    methods: {
        onBeforeItemRender: function(args) {
            if (args.item.text === 'Copy') {
                //To underline a particular text.
                args.element.innerHTML = '<u>C</u>opy';
            }
        }
    }

});