<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>Default Error Message </td>
                <td>
                    <ejs-inplaceeditor ref="dateObj" id="datePickerEle" mode="Inline" type="Date" emptyText="dd/mm/yyyy"
                        :model="datePickerModel" name="Today" :validationRules="dateValidationRules">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="sample-td">Customized Error Message </td>
                <td class="sample-td">
                    <ejs-inplaceeditor ref="dateObj1" id="datePickerEle" mode="Inline" type="Date"
                        :model="datePickerModel" name="date" :validationRules="dateValidationRule" :validating="valid"
                        emptyText="dd/mm/yyyy">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>

import { InPlaceEditorComponent as EjsInplaceeditor } from '@syncfusion/ej2-vue-inplace-editor';

const datePickerModel = {
    placeholder: 'Select a date',
}
const dateValidationRules = {
    Today: { required: true },
}
const dateValidationRule = {
    date: { required: true },
}

const valid = function (e) {
    e.errorMessage = "empty field";
}

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inplace-editor/styles/material.css";

.table-section {
    text-align: center;
    margin-top: 50px;
}

tr td:first-child {
    text-align: right;
    padding-right: 20px;
}

.sample-td {
    padding-top: 10px;
    min-width: 230px;
    height: 100px;
}
</style>
