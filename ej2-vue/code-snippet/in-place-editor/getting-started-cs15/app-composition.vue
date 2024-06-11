<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>Enter your name: </td>
                <td>
                    <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" value="Andrew"
                        :actionSuccess="actionSuccess" submitOnEnter="true">
                    </ejs-inplaceeditor>
                </td>
        </table>
    </div>
</template>

<script setup>

import { InPlaceEditorComponent as EjsInplaceeditor } from "@syncfusion/ej2-vue-inplace-editor";
import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';

const actionSuccess = function (e) {
    let pk = e.data['PrimaryKey'];
    if (isNOU(pk) || pk === '') {
        document.querySelector('.e-editable-value').classList.add('e-send-error');
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
}

tr td:first-child {
    text-align: right;
    padding-right: 20px;
}

.e-inplaceeditor .e-editable-value-wrapper .e-editable-value.e-send-error {
    color: red;
}
</style>
