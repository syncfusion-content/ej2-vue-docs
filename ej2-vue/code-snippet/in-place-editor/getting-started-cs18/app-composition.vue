<template>
    <div class="app">
        <table class="table-section">
            <tr>
                <td>Select date:</td>
                <td>
                    <ejs-inplaceeditor ref="dropObj" id="dropdownEle" mode="Inline" :template="Template1"
                        value="1/2/2018" :actionBegin="actionBegin" actionOnBlur="ignore">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { createApp, ref } from "vue";
import { InPlaceEditorComponent as EjsInplaceeditor } from "@syncfusion/ej2-vue-inplace-editor";
import { DatePickerComponent, DatePickerComponent } from '@syncfusion/ej2-vue-calendars';
import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';

const dropObj = ref(null);

const Template1 = function () {
    return {
        template: createApp().component('DatePickerComponent', {
            template: ' <ejs-datepicker value="1/2/2018"></ejs-datepicker>',
            components: { 'ejs-datepicker': DatePickerComponent },
            data() { return {}; }
        })
    }
}

const actionBegin = function (args) {
    let date = (document.getElementsByClassName('e-datepicker')[0]).ej2_instances[0].value;
    if (!(isNOU(date))) {
        dropObj.value.ej2Instances.value = date.toLocaleDateString();
        args.data.value = date;
    }
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
    margin: 0 auto;
    margin-top: 45px;
}

tr td:first-child {
    text-align: right;
    padding-right: 20px;
}
</style>
