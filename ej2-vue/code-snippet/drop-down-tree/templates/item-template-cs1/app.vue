<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;"><br>
      <ejs-dropdowntree id='dropdowntree' :fields='fields' placeholder='Select an employee'
        :itemTemplate='itemTemplate'></ejs-dropdowntree>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";

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
let itemVue = createApp.component("itemTemplate", {
  template: `<span><span  class="ename">{{data.name}} - </span><span class="ejob">{{data.job}}</span></span>`,
  data() {
    return { data: {} };
  }
});

export default {
  name: "App",
  components: {
    "ejs-dropdowntree": DropDownTreeComponent
  },
  data() {
    return {
      itemTemplate: function () {
        return { template: itemVue };
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

.ejob {
  opacity: .60;
}
</style>
