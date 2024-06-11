<template>
    <ejs-dropdownbutton :items='items' :beforeItemRender='onBeforeItemRender'>Clipboard</ejs-dropdownbutton>
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
    }];
const onBeforeItemRender = function (args) {
    if (args.item.text === 'Copy') {
        //To underline a particular text.
        args.element.innerHTML = '<u>C</u>opy';
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
</style>