<template>
    <div>
        <ejs-button ref='enableAll' v-on:click="btnClick">Enable all items</ejs-button>
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

var disableItems = ['Conferences', 'Music', 'Directory'];

export default {
    name: "App",
    components: {
        "ejs-button": ButtonComponent,
        "ejs-menu": MenuComponent,

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
                if (disableItems.indexOf(args.items[i].text) > -1) {
                    this.$refs.menu.enableItems([args.items[i].text], false, false);
                }
            }
        },
        btnClick: function () {
            this.$refs.menu.enableItems(disableItems, true, false);
            disableItems = [];
        },
        onCreated: function () {
            this.$refs.menu.enableItems(disableItems, false, false);
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

.menu-section {
    margin-top: 100px;
    text-align: center;
}
</style>