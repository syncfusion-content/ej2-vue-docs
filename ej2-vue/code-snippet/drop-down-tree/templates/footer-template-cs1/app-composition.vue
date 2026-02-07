<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;"><br>
      <ejs-dropdowntree id='dropdowntree' :fields='fields' placeholder='Select an employee'
        :footerTemplate='footerTemplate'></ejs-dropdowntree>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { DropDownTreeComponent as EjsDropdowntree } from "@syncfusion/ej2-vue-dropdowns";

let data = [
  { "id": 1, "name": "Steven Buchanan", "job": "General Manager", "hasChild": true, "expanded": true },
  { "id": 2, "pid": 1, "name": "Laura Callahan", "job": "Product Manager", "hasChild": true },
  { "id": 3, "pid": 2, "name": "Andrew Fuller", "job": "Team Lead", "hasChild": true },
  { "id": 4, "pid": 3, "name": "Anne Dodsworth", "job": "Developer" },
  { "id": 10, "pid": 3, "name": "Lilly", "job": "Developer", "status": "online" },
  { "id": 5, "pid": 1, "name": "Nancy Davolio", "job": "Product Manager", "hasChild": true },
  { "id": 6, "pid": 5, "name": "Michael Suyama", "job": "Team Lead", "hasChild": true },
  { "id": 7, "pid": 6, "name": "Robert King", "job": "Developer " },
  { "id": 11, "pid": 6, "name": "Mary", "job": "Developer " },
  { "id": 9, "pid": 1, "name": "Janet Leverling", "job": "HR" }
];

let footerVue = createApp().component("footerTemplate", {
  template: `<span class='foot'> Total number of employees: 10</span>`,
  data() {
    return {
      data: {}
    };
  }
});

const fields = { dataSource: data, value: 'id', text: 'name', parentValue: "pid", hasChildren: 'hasChild' };
const footerTemplate = function () {
  return {
    template: footerVue
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css";

.foot {
  text-indent: 1.2em;
  display: block;
  font-size: 14px;
  line-height: 40px;
  border-top: 1px solid #e0e0e0;
  font-weight: bold;
}

.custom .e-ddt-footer {
  border-top: 1px solid #e0e0e0;
}
</style>
