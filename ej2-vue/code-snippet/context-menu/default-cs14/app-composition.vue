<template>
    <div>
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <ejs-contextmenu target='#target' :items='menuItems'></ejs-contextmenu>
    </div>
</template>

<script setup>

import { ContextMenuComponent as EjsContextmenu } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const menuItems = [
    {
        text: 'Show All Bookmarks',
    },
    {
        text: 'Bookmarks Toolbar',
        items: [
            {
                text: 'Most Visited',
                items: [
                    {
                        text: 'Google',
                    },
                    {
                        text: 'Gmail'
                    }]
            },
            {
                text: 'Recently Added'
            }
        ]
    }];

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/context-menu/index.css";

#target {
    border: 1px dashed;
    height: 150px;
    padding: 10px;
    position: relative;
    text-align: justify;
    color: gray;
    user-select: none;
}
</style>