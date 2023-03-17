
import Vue from 'vue';
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple, createElement } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SplitButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-splitbutton :items='items' iconCss='e-sb-icons e-paste' :beforeItemRender='onBeforeItemRender'></ejs-splitbutton>
`,

    data () {
        return {
            items:[
            {
                text: 'Cut',
            },
            {
                text: 'Copy',
            },
            {
                text: 'Paste',
            }]
        };
    },
    methods: {
        onBeforeItemRender: function(args){
            var shortCutSpan = createElement('span');
            var text = args.item.text;
            args.element.appendChild(shortCutSpan);
            shortCutSpan.setAttribute('class','shortcut');
            var clsName = (text == 'Copy') ? 'e-icons' : 'e-sb-icons';
            shortCutSpan.classList.add(clsName);
            (text === 'Cut') ? shortCutSpan.classList.add('e-cut') : (text === 'Paste') ? shortCutSpan.classList.add('e-paste') : shortCutSpan.classList.add('e-copy');
        }
    }

});