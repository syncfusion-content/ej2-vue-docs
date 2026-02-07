<template>
    <div>
        <ejs-button ref='enableAll' v-on:click.native="btnClick">Show all items</ejs-button>
        <div class="menu-section">
            <ejs-menu ref="menu" id="menu" :items='menuItems' :created='onCreated' :beforeOpen='beforeOpen'></ejs-menu>
        </div>
    </div>
</template>

<script>

import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

var hiddenItems = ['Workshops', 'Music', 'Movies'];

export default {
    name: "App",
    components: {
        "ejs-button": ButtonComponent,
        "ejs-menu": MenuComponent
    },
    data: function () {
        return {
            menuItems: [
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
        beforeOpen: function (args) {
            for (var i = 0; i < args.items.length; i++) {
                if (hiddenItems.indexOf(args.items[i].text) > -1) {
                    this.$refs.menu.hideItems([args.items[i].text], false);
                }
            }
        },
        btnClick: function (event) {
            this.$refs.menu.showItems(hiddenItems, false);
            hiddenItems = [];
        },
        onCreated: function () {
            this.$refs.menu.hideItems(hiddenItems, false);
        }
    }
}
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