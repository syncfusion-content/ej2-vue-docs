
import Vue from 'vue';
import { MenuPlugin, ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);
Vue.use(ToolbarPlugin);

var menutemplateVue = Vue.component("demo1", {
  template: '<ejs-menu :items="menuItems" :animationSettings="animation"></ejs-menu>',
  data() {
    return {
      data: {},
      menuItems: [
            {
                text: 'Appliances',
                items: [
                    {
                        text: 'Kitchen',
                        items: [
                            { text: 'Electric Cookers' },
                            { text: 'Coffee Makers' },
                            { text: 'Blenders' }
                        ]
                    },
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
                            { text: 'Split ACs' },
                            { text: 'Window ACs' }
                        ]
                    }
                ]
            },
            {
                text: 'Accessories',
                items: [
                    {
                        text: 'Mobile',
                        items: [
                            { text: 'Headphones' },
                            { text: 'Memory Cards' },
                            { text: 'Power Banks' }
                        ]
                    },
                    {
                        text: 'Computer',
                        items: [
                            { text: 'Pendrives' },
                            { text: 'External Hard Disks' },
                            { text: 'Monitors' }
                        ]
                    }
                ]
            },
            {
                text: 'Fashion',
                items: [
                    {
                        text: 'Men',
                        items: [
                            { text: 'Shirts' },
                            { text: 'Jackets' },
                            { text: 'Track Suits' }
                        ]
                    },
                    {
                        text: 'Women',
                        items: [
                            { text: 'Kurtas' },
                            { text: 'Salwars' },
                            { text: 'Sarees' }
                        ]
                    }
                ]
            },
            {
                text: 'Home & Living',
                items: [
                    {
                        text: 'Furniture',
                        items: [
                            { text: 'Beds' },
                            { text: 'Mattresses' },
                            { text: 'Dining Tables' }
                        ]
                    },
                    {
                        text: 'Decor',
                        items: [
                            { text: 'Clocks' },
                            { text: 'Wall Decals' },
                            { text: 'Paintings' }
                        ]
                    }
                ]
            }
        ],
      animation: { effect: 'none' }
    };
  }
});


new Vue({
	el: '#app',
	template: `
<div class="toolbar-menu-control">
<ejs-toolbar ref="toolbar" :created="onCreated">
    <e-items>
        <e-item :template='menuTemplate'></e-item>
        <e-item prefixIcon='em-icons e-shopping-cart' align='Right' ></e-item>
    </e-items>
</ejs-toolbar>
</div>
`,

   data: function() {
    return {
        menuTemplate: function() {
            return {
                template: menutemplateVue
            }
        }
    }
  },
  methods: {
      onCreated: function() {
          this.$refs.toolbar.$el.ej2_instances[0].refreshOverflow();
        }
  }

});