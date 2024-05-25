<template>
    <div>
        <ejs-button ref='enableAll' v-on:click.native="btnClick">Enable all items</ejs-button>
        <div class="menu-section">
            <ejs-menu ref="menu" id="menu" :items='menuItems' :created='onCreated' :beforeOpen='beforeOpen'></ejs-menu>
        </div>
    </div>
</template>

<script setup>

import { MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ref } from "vue";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const menu = ref(null);
var disableItems = ['Conferences', 'Music', 'Directory'];
const menuItems = [
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
];

const beforeOpen = (args) => {
    for (var i = 0; i < args.items.length; i++) {
        if (disableItems.indexOf(args.items[i].text) > -1) {
            menu.value.enableItems([args.items[i].text], false, false);
        }
    }
};
const btnClick = () => {
    menu.value.enableItems(disableItems, true, false);
    disableItems = [];
};
const onCreated = () => {
    menu.value.enableItems(disableItems, false, false);
};

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