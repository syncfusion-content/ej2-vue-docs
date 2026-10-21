<template>
    <ejs-dropdownbutton id="ddBtn" :items='items' :beforeOpen='onBeforeOpen'
        :beforeClose='onBeforeClose'>Clipboard</ejs-dropdownbutton>
</template>

<script setup>

import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
const items = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }]
// Removing 'e-caret-up' class.
const onBeforeClose = (args) => {
    document.getElementById('ddBtn').ej2_instances[0].cssClass = '';
}
// Adding 'e-caret-up' class.
const onBeforeOpen = (args) => {
    document.getElementById('ddBtn').ej2_instances[0].cssClass = 'e-caret-up';
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/drop-down-button/index.css";
.e-caret {
    transform: rotate(0deg);
    transition: transform 200ms ease-in-out;
}

.e-caret-up .e-caret {
    transform: rotate(180deg);
}
</style>