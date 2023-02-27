
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-dropdownbutton :items='items' iconCss= 'e-cart-icon e-shopping' :beforeItemRender='onBeforeItemRender'>Shop By</ejs-dropdownbutton>
`,

    data () {
        return {
            items:[
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