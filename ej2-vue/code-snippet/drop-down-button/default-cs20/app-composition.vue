<template>
    <div>
        <div id="target" style='border: 1px solid grey;'>
        <table>
        <caption style='height: 18px; background-color: #e0e0e0;'><b>Insert Table</b></caption>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        <tr class='e-row'><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td><td class='e-cell'></td></tr>
        </table>
        </div>
        <ejs-dropdownbutton target= '#target' iconCss= 'e-icons e-table' cssClass= 'e-vertical' iconPosition= 'Top'>Table</ejs-dropdownbutton>
    </div>
</template>

<script setup>

import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
    .e-cell {
    border: 1px solid grey;
    padding: 8px;
    }

    .e-table::before {
    content: '\e705';
    }

    .e-row {
    padding-left: 3px;
    padding-right: 3px;
    }
</style>