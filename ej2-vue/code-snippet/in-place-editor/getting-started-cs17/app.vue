

<template>
<div id="app">
<table class="table-section">
    <tr>
        <td>
            <div>EnableEditMode</div>
        </td>
        <td>
            <div>
                <ejs-checkbox ref="checkObj2" id="editorEnable" label='Enable' checked= true :change="onChange"></ejs-checkbox>
                </div>
        </td>
    </tr>
    <tr>
        <td class="sample-td">
            <div>Enter your name: </div>
        </td class="sample-td">
        <td>
            <ejs-inplaceeditor ref="editObj" id="inplace_editor" mode="Inline" type="Text" actionOnBlur='Ignore' enableEditMode= true value="Andrew" submitOnEnter= "true">
            </ejs-inplaceeditor>
        </td>
    </tr>
  </table>
  </div>
</template>

<script>
import Vue from 'vue';
import { InPlaceEditorPlugin } from "@syncfusion/ej2-vue-inplace-editor";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(InPlaceEditorPlugin);
Vue.use(CheckBoxPlugin);

export default {
  data (){
    return {
       labelPosition: 'Before',
    };
  },
    mounted: function(){
        this.editObj = this.$refs.editObj.ej2Instances;
    },
    methods: {
        onChange: function(e) {
            this.$refs.editObj.ej2Instances.enableEditMode = e.checked;
        },
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


