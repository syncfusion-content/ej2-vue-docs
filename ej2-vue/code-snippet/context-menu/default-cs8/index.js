
import Vue from 'vue';
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

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
                    text: 'Cut',
                    iconCss: 'e-cm-icons e-cut'
                },
                {
                    text: 'Copy',
                    iconCss: 'e-icons e-copy'
                },
                {
                    text: 'Paste',
                    iconCss: 'e-cm-icons e-paste'
                },
                {
                    separator: true
                },
                {
                    text: 'Link',
                    iconCss: 'e-icons e-link'
                },
                {
                    text: 'Table',
                    iconCss: 'e-icons e-table',
                    items: [
                        {
                        id: 'table'
                        }
                    ]
                }]
        };
    },
    methods: {
        onBeforeItemRender: function(args) {
            // To create header element.
            var header = document.createElement('h4');
            header.textContent = 'Insert Table';

            // To create table with five rows and six columns.
            var table = document.createElement('table');
            for (var i = 0; i < 5; i++) {
                var row = document.createElement('tr');
                table.appendChild(row);
                for (var j = 0; j < 6; j++) {
                    var col = document.createElement('td');
                    row.appendChild(col);
                    col.setAttribute('class', 'e-border');
                }
            }
            // To append table on `li` rendering.
            if (args.item.id === 'table') {
                args.element.classList.add('bg-transparent');
                args.element.appendChild(header);
                args.element.appendChild(table);
            }
        }
    }

});