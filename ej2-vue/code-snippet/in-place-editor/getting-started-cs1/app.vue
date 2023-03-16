

<template>
<div id="app">
    <table class="table-section">
        <tr>
            <td>ShowButtons:</td>
            <td>
        <ejs-checkbox ref="checkObj" id="showbuttons" checked=true :change="onChange" :labelPosition="labelPosition" :label="label"></ejs-checkbox>
        </td>
    </tr>
    <tr>
        <td class="sample-td">Enter your name:</td>
        <td class="sample-td">
      <ejs-inplaceeditor ref="editObj" mode="Inline" :model="textModel" type="Text" value="Andrew" data-underline="false">
      </ejs-inplaceeditor>
      </td>
    </tr>
    </div>
</template>

<script>
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(InPlaceEditorPlugin);
Vue.use(CheckBoxPlugin);

export default {
  name: 'app',
      data () {
        return {
            textModel: {
                placeholder: 'Enter Some Text'
            },
            labelPosition: 'Before',
            label: 'show',
        };
    },
    mounted: function() {
    this.editObj = this.$refs.editObj.ej2Instances;
    },
    methods: {
        onChange: function(args) {
        args.checked ? this.editObj.showButtons = true : this.editObj.showButtons = false
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


