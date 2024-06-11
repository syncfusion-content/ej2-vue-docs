<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-dropdowntree id='dropdowntree' :fields='fields' placeholder='Select an employee'
        :actionFailureTemplate='actionFailureTemplate'></ejs-dropdowntree>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";

let remoteData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svs',
  adaptor: new ODataV4Adaptor,
  crossDomain: true,
});

let failureVue = createApp().component("failureTemplate", {
  template: `<span class='action-failure'> Data fetch request fails</span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  data () {
    return {
      actionFailureTemplate: function (e) {
        return {
          template: failureVue
        }
      },
      fields: { dataSource: remoteData, value: 'id', text: 'name', parentValue: "pid", hasChildren: 'hasChild' },
      height: '200px'
    };
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
