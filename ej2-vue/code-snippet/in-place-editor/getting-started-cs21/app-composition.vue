<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>select date: </td>
                <td>
                    <ejs-inplaceeditor ref="dateObj" id="datePickerEle" mode="Inline" type="Date"
                        :value="datePickerValue" :model="datePickerModel">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>

import { InPlaceEditorComponent as EjsInplaceeditor } from '@syncfusion/ej2-vue-inplace-editor';

const datePickerModel = {
    placeholder: 'Select date',
    format: 'yyyy-MM-dd'
};
const datePickerValue = new Date('11/23/2018');

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/inplace-editor/index.css";

.table-section {
    margin: 0 auto;
}

tr td:first-child {
    text-align: right;
    padding-right: 20px;
}
</style>
