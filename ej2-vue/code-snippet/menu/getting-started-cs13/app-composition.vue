<template>
    <div>
        <ejs-button ref='enableAll' v-on:click.native="btnClick">Show all items</ejs-button>
        <div class="menu-section">
            <ejs-menu ref="menu" id="menu" :items='menuItems' :created='onCreated' :beforeOpen='beforeOpen'></ejs-menu>
        </div>
    </div>
</template>

<script setup>

import { MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
import { ref } from "vue";
enableRipple(true);

const menu = ref(null);
var hiddenItems = ['Workshops', 'Music', 'Movies'];

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
        if (hiddenItems.indexOf(args.items[i].text) > -1) {
            menu.value.hideItems([args.items[i].text], false);
        }
    }
};
const btnClick = () => {
    menu.value.showItems(hiddenItems, false);
    hiddenItems = [];
};
const onCreated = () => {
    menu.value.hideItems(hiddenItems, false);
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

.menu-section {
    margin-top: 100px;
    text-align: center;
}
</style>