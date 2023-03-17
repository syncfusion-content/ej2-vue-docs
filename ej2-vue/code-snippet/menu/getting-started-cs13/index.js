
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);
Vue.use(ButtonPlugin);

var hiddenItems = ['Workshops', 'Music', 'Movies'];


new Vue({
	el: '#app',
	template: `
    <div>
        <ejs-button ref='enableAll' v-on:click.native="btnClick">Show all items</ejs-button>
        <div class="menu-section">
            <ejs-menu ref="menu" id="menu" :items='menuItems' :created='onCreated' :beforeOpen='beforeOpen'></ejs-menu>
        </div>
    </div>
`,

   data: function() {
        return {
           menuItems:  [
    {
        text: 'Events',
        items: [
            { text: 'Conferences' },
            { text: 'Music' },
            { text: 'Workshops' }
        ]
    },
    {
        text: 'Movies',
        items: [
            { text: 'Now Showing' },
            { text: 'Coming Soon' }
        ]
    },
    {
        text: 'Directory',
        items: [
            { text: 'Media Gallery' },
            { text: 'Newsletters' }
        ]
    },
    {
        text: 'Queries',
        items: [
            { text: 'Our Policy' },
            { text: 'Site Map' }
        ]
    },
    { text: 'Services' }
]
     };
   },
   methods: {
       beforeOpen: function(args) {
        for (var i = 0; i  < args.items.length; i++) {
            if (hiddenItems.indexOf(args.items[i].text) > -1) {
                this.$refs.menu.hideItems([args.items[i].text], false);
            }
        }
       },
       btnClick: function(event) {
           this.$refs.menu.showItems(hiddenItems, false);
           hiddenItems = [];
       },
       onCreated: function(args) {
           this.$refs.menu.hideItems(hiddenItems, false);
       }
   }

});