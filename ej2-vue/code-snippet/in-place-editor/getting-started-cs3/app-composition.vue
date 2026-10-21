<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>Mode</td>
                <td>
                    <ejs-dropdownlist ref="editorMode" id="editorMode" :dataSource='dataPlace'
                        :change='changeEditorMode' :value='dataValue' :fields='placeFields'>
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

const editObj = ref(null);
const editorMode = ref(null);
const textModel = {
    placeholder: 'Enter Some Name'
};
const dataValue = 'inline';
const placeFields = { text: 'mode', value: 'id' };
const dataPlace = [{ id: 'inline', mode: 'Inline' }, { id: 'popup', mode: 'Popup' }];

const changeEditorMode = function (args) {
    let editMode = editorMode.value.$el.value;
    editObj.value.ej2Instances.mode = editMode;
    editObj.value.ej2Instances.dataBind();
}

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

.sample-td {
    padding-top: 10px;
    min-width: 230px;
    height: 100px;
}
</style>
