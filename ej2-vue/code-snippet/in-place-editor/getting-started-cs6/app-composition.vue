<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>ActionOnBlur</td>
                <td>
                    <ejs-dropdownlist ref="actions" id="actions" :dataSource='blurActionData' :change='onEditableOn'
                        :value='actionValue' :fields='actionFields'>
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

const actions = ref(null);
const editObj = ref(null);
const textModel = {
    placeholder: 'Enter Some Text'
}
const actionFields = { text: 'editable', value: 'id' }
const blurActionData = [{ id: 'Submit', editable: 'Submit' }, { id: 'Cancel', editable: 'Cancel' }, { id: 'Ignore', editable: 'Ignore' }];
const actionValue = 'Submit'


const onEditableOn = function () {
    let actionType = actions.value.ej2Instances.value;
    editObj.value.ej2Instances.actionOnBlur = actionType;
    editObj.value.ej2Instances.dataBind();
}

</script>
