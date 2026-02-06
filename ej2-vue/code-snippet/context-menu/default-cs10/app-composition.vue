<template>
    <div>
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <ejs-contextmenu target='#target' :items='menuItems' :beforeItemRender='itemRender'></ejs-contextmenu>
    </div>
</template>

<script setup>

import { ContextMenuComponent as EjsContextmenu } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const menuItems = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];
const itemRender = (args) => {
    if (args.item.text === 'Copy') {
        // To underline a particular character.
        args.element.innerHTML = '<u>C</u>opy';
    }
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

.list {
    display: none;
}

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