
import Vue from 'vue';
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple, closest, createElement } from '@syncfusion/ej2-base';
import { createCheckBox } from '@syncfusion/ej2-buttons';

enableRipple(true);
Vue.use(ContextMenuPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<div id="target">Right click / Touch hold to open the ContextMenu</div>
<ejs-contextmenu target='#target' :items='menuItems' :beforeItemRender='itemRender' :beforeClose='beforeClose'></ejs-contextmenu>

</div>
`,

    data () {
        return {
            menuItems:[
                { text: 'Option 1' },
                { text: 'Option 2' },
                { text: 'Option 3' }
            ]
        };
    },
    methods: {
        itemRender: function(args ) {
            var check = createCheckBox(createElement, false, {
                label: args.item.text,
                checked: (args.item.text == 'Option 2') ? true : false
            });
            args.element.innerHTML = '';
            args.element.appendChild(check);
        },
        beforeClose: function(args ) {
            if (args.event.target.closest('.e-menu-item')) {
                args.cancel = true;
                var selectedElem, i, checkbox, ele, frame;
                selectedElem = args.element.querySelectorAll('.e-selected');
                for(i = 0; i < selectedElem.length; i++){
                    ele = selectedElem[i];
                    ele.classList.remove('e-selected');
                }
                checkbox = closest(args.event.target, '.e-checkbox-wrapper');
                frame = checkbox && checkbox.querySelector('.e-frame');
                if (checkbox && frame.classList.contains('e-check')) {
                    frame.classList.remove('e-check');
                } else if (checkbox) {
                    frame.classList.add('e-check');
                }
            }
        }
    }

});