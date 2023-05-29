
import Vue from 'vue';
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ContextMenuPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-contextmenu id='cmenu' :items='menuItems'></ejs-contextmenu>
<ejs-button v-on:click.native='btnClick'>Open ContextMenu</ejs-button>
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
                }
            ]
        };
    },
    methods: {
        btnClick: function(event) {
            document.getElementById('cmenu').ej2_instances[0].open(40, 20);
        }
    }

});