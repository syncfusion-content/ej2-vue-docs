<template>
    <ejs-dropdownbutton :items='items' iconCss='e-icons e-search' cssClass='e-custom' iconPosition='Top'
        content='Find & Select'></ejs-dropdownbutton>
</template>

<script setup>

import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
const items = [
    {
        text: 'Find'
    },
    {
        text: 'Replace'
    },
    {
        text: 'Go To'
    },
    {
        text: 'Go To Special'
    }];
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';

.e-search::before {
    content: '\e993';
}

.e-dropdown-btn.e-custom {
    width: 85px;
}

.e-dropdown-btn.e-custom .e-search::before {
    font-size: 40px;
}
</style>