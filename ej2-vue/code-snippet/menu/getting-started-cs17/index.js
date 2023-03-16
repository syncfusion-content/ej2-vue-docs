
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control-section">
        <div class="menu-section">
            <ejs-menu :items='menuItems' :beforeItemRender='beforeItemRender' ></ejs-menu>
        </div>
    </div>
`,

   data: function() {
        return {
           menuItems:  [
        {
            id: 'settingIcon',
            iconCss: 'em-icons e-file',
            items: [
                { text: 'Open',
                  items: [
                      { text: 'Sub Option1' },
                      { text: 'Sub Option2' },
                  ]
                },
                { text: 'Save' },
                { separator: true },
                { text: 'Exit' }
            ]
        }
    ]
    };
    },
    methods: {
beforeItemRender: function(args) {
    if (args.item.id == 'settingIcon') {
        args.element.setAttribute('title', 'Settings');
      }
},
    }

});