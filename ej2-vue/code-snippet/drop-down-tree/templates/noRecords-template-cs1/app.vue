<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;"><br>
      <ejs-dropdowntree id='dropdowntree' :fields='fields' placeholder='Select an employee'
        :noRecordsTemplate='noRecordsTemplate'></ejs-dropdowntree>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";

let data = [];
let noRecordsVue = createApp().component("noRecordsTemplate", {
  template: `<span class='norecord'> NO DATA AVAILABLE</span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-dropdowntree": DropDownTreeComponent
  },
  data() {
    return {
      noRecordsTemplate: function (e) {
        return {
          template: noRecordsVue
        }
      },
      fields: { dataSource: data, value: 'id', text: 'name', parentValue: "pid", hasChildren: 'hasChild' },
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
