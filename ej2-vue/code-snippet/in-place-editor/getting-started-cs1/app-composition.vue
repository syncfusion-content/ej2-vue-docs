<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>ShowButtons:</td>
                <td>
                    <ejs-checkbox ref="checkObj" id="showbuttons" checked=true :change="onChange"
                        :labelPosition="labelPosition" :label="label"></ejs-checkbox>
                </td>
            </tr>
            <tr>
                <td class="sample-td">Enter your name:</td>
                <td class="sample-td">
                    <ejs-inplaceeditor ref="editObj" mode="Inline" :model="textModel" type="Text" value="Andrew"
                        data-underline="false">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { InPlaceEditorComponent as EjsInplaceeditor } from '@syncfusion/ej2-vue-inplace-editor';
import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";

const editObj = ref(null);
const textModel = {
    placeholder: 'Enter Some Text'
};
const labelPosition = 'Before';
const label = 'show';

const onChange = function (args) {
    args.checked ? editObj.value.ej2Instances.showButtons = true : editObj.value.ej2Instances.showButtons = false
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
