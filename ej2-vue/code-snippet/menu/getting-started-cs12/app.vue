

<template>
    <div>
        <ejs-button ref='enableAll'  v-on:click.native="btnClick">Enable all items</ejs-button>
        <div class="menu-section">
            <ejs-menu ref="menu" id="menu" :items='menuItems' :created='onCreated' :beforeOpen='beforeOpen'></ejs-menu>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);
Vue.use(ButtonPlugin);

var disableItems = ['Conferences', 'Music', 'Directory'];

export default {
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
            if (disableItems.indexOf(args.items[i].text) > -1) {
                this.$refs.menu.enableItems([args.items[i].text], false, false);
            }
        }
       },
       btnClick: function(event) {
           this.$refs.menu.enableItems(disableItems, true, false);
           disableItems = [];
       },
       onCreated: function(args) {
           this.$refs.menu.enableItems(disableItems, false, false);
       }
   }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

.menu-section {
    margin-top: 100px;
    text-align: center;
}

</style>


