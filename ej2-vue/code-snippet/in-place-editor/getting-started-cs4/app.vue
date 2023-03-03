

<template>
<div id="app">
         <table class="table-section">
            <tr>
                <td>Position</td>
                <td>
                    <ejs-dropdownlist ref="editorMode" id="editorMode" :dataSource='dataPlace' :change='changeEditorMode' :value='dataValue' :fields='placeFields'>
                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="edit-heading sample-td">Enter your Name</td>
                <td class="sample-td">
                <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Popup" type="Text" value="Andrew" submitOnEnter= "true" :model="textModel" :popupSettings="textpopupsettings">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(InPlaceEditorPlugin);
Vue.use(DropDownListPlugin);

export default {
  name: 'app',
    data () {
        return {
            textModel: {
                placeholder: 'Enter Some Name',
            },
            textpopupsettings: {
                model: {
                position: 'BottomCenter'
                }
            },
            dataValue: 'BottomCenter',
            placeFields: { text: 'mode', value: 'id' },
            dataPlace: [{ id: 'TopLeft', mode: 'TopLeft' }, { id: 'TopCenter', mode: 'TopCenter' },{ id: 'TopRight', mode: 'TopRight' }, { id: 'BottomLeft', mode: 'BottomLeft' }, { id: 'BottomCenter', mode: 'BottomCenter' }, { id: 'BottomRight', mode: 'BottomRight' }, { id: 'LeftTop', mode: 'LeftTop' },{ id: 'LeftCenter', mode: 'LeftCenter' }, { id: 'LeftBottom', mode: 'LeftBottom' }, { id: 'RightTop', mode: 'RightTop' }, { id: 'RightCenter', mode: 'RightCenter' }, { id: 'RightBottom', mode: 'RightBottom' }],
        }
    },
    mounted: function(){
        this.editObj = this.$refs.editObj.ej2Instances;
    },
    methods: {
        changeEditorMode: function(args) {
           var positions = this.$refs.editorMode.$el.value;
           this.$refs.editObj.ej2Instances.popupSettings.model.position = positions;
           this.editObj.dataBind();
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
.sample-td {
    padding-top: 150px;
}
.edit-heading {
    padding-right: 20px;
}
</style>


