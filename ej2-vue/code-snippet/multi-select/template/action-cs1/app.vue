<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :actionFailureTemplate='actionFailureTemplate' :dataSource='customerData'
        :query='query' :fields='fields' placeholder="Select a customer"></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let footerVue = createApp().component("footerTemplate", {
  template: `<span class='action-failure'> Data fetch get fails</span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-multiselect": MultiSelectComponent
  },
  data() {
    return {
      customerData: new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
      }),
      query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
      fields: { text: 'ContactName', value: 'CustomerID' },
      actionFailureTemplate: function (e) {
        return {
          template: footerVue
        }
      }
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
