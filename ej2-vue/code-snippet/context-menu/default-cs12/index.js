
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
<ejs-contextmenu target='#target' :items='menuItems' :beforeItemRender='onBeforeItemRender'></ejs-contextmenu>
</div>
`,

    data () {
        return {
            menuItems:[
            {
                text: 'Flipkart',
                iconCss: 'e-cart-icon e-link',
                url: 'https://www.google.co.in/search?q=flipkart'
            },
            {
                text: 'Amazon',
                iconCss: 'e-cart-icon e-link',
                url: 'https://www.google.co.in/search?q=amazon'
            },
            {
                text: 'Snapdeal',
                iconCss: 'e-cart-icon e-link',
                url: 'https://www.google.co.in/search?q=snapdeal'
            }]
        };
    },
    methods: {
        onBeforeItemRender: function(args) {
            args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
        }
    }

});