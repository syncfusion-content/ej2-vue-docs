<template>
    <ejs-dropdownbutton :items='items' cssClass='e-caret-hide' iconCss='e-image'></ejs-dropdownbutton>
</template>

<script setup>

import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const items = [
    {
        text: 'Display Settings'
    },
    {
        text: 'System Settings'
    },
    {
        text: 'Additional Settings'
    }];
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/drop-down-button/index.css";
.e-btn-icon.e-image {
    background: url(./spritesheet.png) -384px -48px;
    width: 32px;
    height: 32px;
}
</style>