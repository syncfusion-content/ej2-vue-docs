
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { OpenCloseMenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton id="ddBtn" :items='items' cssClass= 'e-caret-up' :open='onOpen'>Clipboard</ejs-dropdownbutton>
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
        onOpen: function(args: OpenCloseMenuEventArgs) {
            args.element.parentElement.style.top = document.getElementById('ddBtn').ej2_instances[0].element.getBoundingClientRect().top - args.element.parentElement.offsetHeight +'px';
        }
    }

});