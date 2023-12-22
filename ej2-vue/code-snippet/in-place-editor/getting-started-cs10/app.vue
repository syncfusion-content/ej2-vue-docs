

<template>
<div id="app">
    <table class="table-section">
       <tr>
            <td>select customer name:</td>
        <td>
            <ejs-inplaceeditor ref="dropObj" id="dropdownEle" mode="Inline" type="DropDownList" value='Maria Anders' :model="dropdownModel">
            </ejs-inplaceeditor>
        </td>
        </tr>
    </table>
  </div>
</template>

<script>
import Vue from 'vue';
import { InPlaceEditorPlugin } from "@syncfusion/ej2-vue-inplace-editor";
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

Vue.use(InPlaceEditorPlugin);

var dm= new DataManager({
                    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
                    adaptor: new ODataV4Adaptor,
                    crossDomain: true
                });

export default {
  data (){
        return {
            dropdownModel: {  
                dataSource: dm,
                placeholder:"Select a customer",
                fields : { text: 'ContactName', value: 'CustomerID' },
                query : new Query().select(['ContactName', 'CustomerID']).take(6),
            }
        }
    },
    mounted: function() {
        this.dropObj = this.$refs.dropObj.ej2Instances;
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
    margin-top: 45px;
}

tr td:first-child {
    text-align: right;
    padding-right: 20px;
}
</style>

