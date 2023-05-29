
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
<ejs-contextmenu id="cmenu" target='#target' :items='menuItems'></ejs-contextmenu>
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
            }]
        };
    },
    mounted(){
        document.getElementById('cmenu').ej2_instances[0].open(40, 20);
    }

});