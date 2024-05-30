<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>
                    <div>Disabled</div>
                </td>
                <td>
                    <div>
                        <ejs-checkbox ref="checkObj2" id="editorEnable" :change="onChangeEnable"
                            label='Disable'></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="sample-td">
                    <div>Enter your name: </div>
                </td>
                <td class="sample-td">
                    <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" actionOnBlur='Ignore'
                        value="Andrew" submitOnEnter="true">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { InPlaceEditorComponent as EjsInplaceeditor } from "@syncfusion/ej2-vue-inplace-editor";
import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";

const checkObj2 = ref(null);
const editObj = ref(null);
const labelPosition = 'Before';

const onChangeEnable = function (args) {
    let checkObj1 = checkObj2.value.ej2Instances;
    checkObj1.checked ? editObj.value.disabled = true : editObj.value.disabled = false;
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
