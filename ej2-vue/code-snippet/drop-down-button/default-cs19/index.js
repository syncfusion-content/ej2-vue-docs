
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton :items='items' iconCss= 'e-ddb-icons e-paste' cssClass= 'e-vertical' iconPosition= 'Top' :beforeItemRender='onBeforeItemRender'>Paste</ejs-dropdownbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Edit'
            },
            {
                text: 'Cut'
            }]
        };
    },
    methods: {
        onBeforeItemRender: function(args) {
            if (args.item.text === 'Edit') {
                args.element.innerHTML = '<span></span><div><b>Paste Text</b><div>Provides option to paste only the<br>selected text.</div></div>';
                args.element.style.height = '80px';
                var span = args.element.children[0];
                span.setAttribute('class','e-cm-icons e-pastetext e-align');
                var div = args.element.children[1];
                div.setAttribute('class', 'e-div-align');
                } else {
                args.element.innerHTML = '<span></span><div><b>Paste Special</b><div>Provides options to paste formulas,<br> values, comments, validations etc...</div></div>';
                args.element.style.height = '80px';
                var span = args.element.children[0];
                span.setAttribute('class','e-cm-icons e-pastespecial e-align');
                var div = args.element.children[1];
                div.setAttribute('class', 'e-div-align');
            }
        }
    }

});