<template>
    <div>
        <ejs-menu :items='menuItems' :beforeOpen='onBeforeOpen'></ejs-menu>
    </div>
</template>

<script setup>

import { MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";
import { enableRipple, closest } from '@syncfusion/ej2-base';

enableRipple(true);

// Menu items definition
const menuItems = [
    {
        text: 'File',
        items: [
            { text: 'Open' },
            { text: 'Save' },
            { text: 'Exit' }]
    },
    {
        text: 'Edit',
        items: [
            { text: 'Cut' },
            { text: 'Copy' },
            { text: 'Paste' }]
    },
    {
        text: 'View',
        items: [
            { text: 'Toolbar' },
            { text: 'Sidebar' }]
    },
    {
        text: 'Tools',
        items: [
            { text: 'Spelling & Grammar' },
            { text: 'Customize' },
            { text: 'Options' }]
    },
    { text: 'Go' },
    { text: 'Help' }
];
const onBeforeOpen = (args) => {
    // Getting parent menu item element offset
    let relativeOffset = closest(args.event.target, '.e-menu-item').getBoundingClientRect();
    // Getting sub menu wrapper element using closest method
    let subMenuEle = closest(args.element, '.e-menu-wrapper');
    subMenuEle.style.display = 'block';
    args.top = (relativeOffset.top - subMenuEle.getBoundingClientRect().height) + pageYOffset;
    args.left = relativeOffset.left + pageXOffset;
    subMenuEle.style.display = '';
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

body {
    margin-top: 200px;
    text-align: center;
}
</style>