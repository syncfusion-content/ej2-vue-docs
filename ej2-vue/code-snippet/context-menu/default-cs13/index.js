
import Vue from 'vue';
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple, createElement } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ContextMenuPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<div id="target">Right click / Touch hold to open the ContextMenu</div>
<ejs-contextmenu target='#target' :items='menuItems' :beforeItemRender="onBeforeItemRender"></ejs-contextmenu>
</div>
`,

    data () {
        return {
            menuItems:[
            {
                text: 'Save as...'
            },
            {
                text: 'View page source'
            },
            {
                text: 'Inspect'
            }]
        };
    },
    methods: {
        onBeforeItemRender: function(args) {
            var shortCutSpan = createElement('span');
            var text = args.item.text;
            var shortCutText = text === 'Save as...' ? 'Ctrl + S' : (text === 'View page source' ?
            'Ctrl + U'      : 'Ctrl + Shift + I');
            shortCutSpan.textContent = shortCutText;
            args.element.appendChild(shortCutSpan);
            shortCutSpan.setAttribute('class','shortcut');
        }
    }

});