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

<script>
import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
    name: "App",
    components: {
        "ejs-dropdownlist": DropDownListComponent,
        "ejs-inplaceeditor": InPlaceEditorComponent
    },
    data() {
        return {
            textModel: {
                placeholder: 'Enter Some Name'
            },
            dataValue: 'inline',
            placeFields: { text: 'mode', value: 'id' },
            dataPlace: [{ id: 'inline', mode: 'Inline' }, { id: 'popup', mode: 'Popup' }],
        }
    },
    methods: {
        changeEditorMode: function (args) {
            const editMode = this.$refs.editorMode.$el.value;
            this.$refs.editObj.ej2Instances.mode = editMode;
            this.$refs.editObj.ej2Instances.dataBind();
        }
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

.sample-td {
    padding-top: 10px;
    min-width: 230px;
    height: 100px;
}
</style>
