
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-menu :items='menuItems'></ejs-menu>
</div>
`,

   data: function() {
        return {
           menuItems:  [
        {
        text: 'Fashion',
        items: [
            {
                text: 'Men Fashion',
                items: [
                    {
                        text: 'Personal Care',
                        items: [
                            { text: 'Trimmers' },
                            { text:  'Shavers' }
                        ]
                    },
                    {
                        text: 'Clothing',
                        items: [
                            { text: 'Shirts' },
                            { text: 'Jackets' },
                            { text: 'Track Suits' }
                        ]
                    },
                    { text: 'Footwear' }
                ]
            },
            {
                text: 'Women Fashion',
                items: [
                    {
                        text: 'Clothing',
                        items: [
                            { text: 'Kurtas' },
                            { text: 'Salwars' },
                            { text: 'Sarees' }
                        ]
                    },
                    {
                        text: 'Jewellery',
                        items: [
                            { text: 'Nosepins' },
                            { text:  'Anklets' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: 'Home & Living',
        items: [
            {
                text: 'Washing Machine',
                items: [
                    { text: 'Fully Automatic' },
                    { text: 'Semi Automatic' }
                ]
            },
            {
                text: 'Air Conditioners',
                items: [
                    { text: 'Inverter ACs' },
                    { text: 'Split ACs' }
                ]
            }
        ]
    },
    { text: 'Sports' },
    { text: 'Gaming' }
    ]
    };

    }

});