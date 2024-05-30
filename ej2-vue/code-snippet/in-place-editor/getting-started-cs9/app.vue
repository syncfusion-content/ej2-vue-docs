<template>
  <div id="app">
    <table class="table-section">
      <tr>
        <td>Select customer name:</td>
        <td>
          <ejs-inplaceeditor ref="dropObj" id="dropdownEle" mode="Inline" type="DropDownList" value='Maria Anders'
            :model="dropdownModel">
          </ejs-inplaceeditor>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import { InPlaceEditorComponent } from "@syncfusion/ej2-vue-inplace-editor";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";

export default {
  name: "App",
  components: {
    "ejs-inplaceeditor": InPlaceEditorComponent
  },
  data() {
    return {
      dropdownModel: {
        dataSource: new DataManager({
          url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
          adaptor: new ODataV4Adaptor,
          crossDomain: true
        }),
        placeholder: "Select a customer",
        query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
        fields: { text: 'ContactName', value: 'CustomerID' }
      }
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
  margin-top: 45px;
}

tr td:first-child {
  text-align: right;
  padding-right: 20px;
}
</style>
