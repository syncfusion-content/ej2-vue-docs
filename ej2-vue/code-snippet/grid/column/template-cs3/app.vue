<template>
    <div id="app">
         <ejs-grid :dataSource="data" height=310>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
                <e-column field='FirstName' headerText='Name' width='120'></e-column>
                <e-column field='Title' headerText='Title' width='170'></e-column>
                <e-column headerText='templateColumn' width='150' textAlign='Center' :template='cTemplate'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { createApp } from "vue";
const app = createApp();
Vue.prototype.$eventHub = new Vue();

export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: () => {
    return {
      data: employeeData,
      cTemplate: function () {
        return {
          template: app.component('columnTemplate', {
            template: `<button v-on:click="click(event)">buttton</button>`,
            data: function () {
              return {
                data: {}
              }
            },
            methods: {
              click: function (e) {
                this.$eventHub.$emit('detail', this.data.index);
              }
            }
          })
        }
      }
    };
  },
  created() {
    this.$eventHub.$on('detail', (e) => {
      alert("passed value: " + e);
    });
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>