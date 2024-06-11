<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>Open Animation:</td>
                <td>
                    <ejs-dropdownlist ref="editorMode" id="editorMode" width='90%' :dataSource='dataPlace'
                        :change='valueChange' :value='dataValue' :fields='placeFields'>
                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="sample-td">Enter your name:</td>
                <td class="sample-td">
                    <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Popup" type="Text" value="Andrew"
                        submitOnEnter="true" :model="textModel" :popupSettings=textPopupSettings>
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { InPlaceEditorComponent } from "@syncfusion/ej2-vue-inplace-editor";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
    name: "App",
    components: {
        "ejs-dropdownlist": DropDownListComponent,
        "ejs-inplaceeditor": InPlaceEditorComponent
    },
    data() {
        return {
            placeFields: { text: 'data', value: 'id' },
            dataPlace: [{ id: 'None', data: 'None' }, { id: 'FadeIn', data: 'FadeIn' }, { id: 'FadeZoomIn', data: 'FadeZoomIn' }, { id: 'ZoomIn', data: 'ZoomIn' }],
            dataValue: 'ZoomIn',
            textModel: {
                placeholder: 'Enter some text'
            },
            textPopupSettings: {
                title: 'Enter Employee Name',
                model: {
                    animation: {
                        open: { effect: 'ZoomIn', duration: 1000, delay: 0 }
                    }
                }
            },
        };
    },
    methods: {
        valueChange: function (e) {
            this.$refs.editObj.popupSettings.model.animation.open.effect = e.value;
            this.$refs.editObj.dataBind();
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
