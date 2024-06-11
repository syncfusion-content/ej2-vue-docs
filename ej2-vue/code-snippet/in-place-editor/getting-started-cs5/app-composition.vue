<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>EditableOn</td>
                <td>
                    <ejs-dropdownlist ref="editableOn" id="editableon" :dataSource='editableData' :change='onEditableOn'
                        :value='editableValue' :fields='editableFields'>
                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="sample-td">Enter your Name</td>
                <td class="sample-td">
                    <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" value="Andrew"
                        submitOnEnter="true" :model="textModel">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { InPlaceEditorComponent as EjsInplaceeditor } from '@syncfusion/ej2-vue-inplace-editor';
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";

const editableOn = ref(null);
const editObj = ref(null);
const textModel = {
    placeholder: 'Enter Some Text'
};
const editableFields = { text: 'editable', value: 'id' };
const editableData = [{ id: 'Click', editable: 'Click' }, { id: 'DblClick', editable: 'Double Click' }, { id: 'EditIconClick', editable: 'Edit Icon Click' }];
const editableValue = 'Click';

const onEditableOn = function () {
    let editableOn = editableOn.value.ej2Instances.value;
    editObj.value.ej2Instances.editableOn = editableOn;
    editObj.value.dataBind();
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

.sample-td {
    padding-top: 10px;
    min-width: 230px;
    height: 100px;
}
</style>
