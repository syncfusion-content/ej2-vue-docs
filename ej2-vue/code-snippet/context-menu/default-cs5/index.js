
import Vue from 'vue';
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ContextMenuPlugin);


new Vue({
	el: '#app',
	template: `
<div>
    <div id="target">
        <div id='left' class='e-div'>Clipboard</div>
        <div id='right' class='e-div'>Editor</div>
    </div>
    <ejs-contextmenu id='cmenu' target='#target' :items='menuItems' :beforeOpen="onBeforeOpen"></ejs-contextmenu>
</div>
`,

    data () {
        return {
            menuItems:[
                {
                    text: 'Cut'
                },
                {
                    text: 'Copy'
                },
                {
                    text: 'Paste'
                },
                {
                    text: 'Add'
                },
                {
                    text: 'Edit'
                },
                {
                    text: 'Delete'
                }
            ]
        };
    },
    methods: {
        onBeforeOpen: function(args) {
            var menuObj = document.getElementById("cmenu").ej2_instances[0];
            // To hide/show items on right click.
            if ((args.event.target).id === 'right') {
                menuObj.hideItems(['Cut', 'Copy', 'Paste']);
                menuObj.showItems(['Add', 'Edit', 'Delete']);
            } else if (args.event.target.id === 'left') {
                menuObj.showItems(['Cut', 'Copy', 'Paste']);
                menuObj.hideItems(['Add','Edit','Delete']);
            }
        }
    }

});