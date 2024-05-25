<template>
  <div id="app">
       <ejs-grid :dataSource="data" height=310 :created = 'created'>
          <e-columns>
              <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
              <e-column field='FirstName' headerText='Name' width='120'></e-column>
              <e-column field='Title' headerText='Title' width='170'></e-column>
              <e-column headerText='templateColumn' width='150' textAlign='Center' :template='cTemplate'></e-column>
          </e-columns>
      </ejs-grid>
      <button v-on:click="click">buttton</button>
  </div>
</template>
<script setup>
/* eslint-disable */
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { createApp } from 'vue';
import mitt from "mitt";

var bus = mitt();
const app = createApp();
    const data = employeeData;
    const cTemplate = function () {
      return {
        template: app.component('columnTemplate', {
          template: `<button v-on:click="click">buttton</button>`,
          data: function () {
            return {
              data: {}
            }
          },
          methods: {
            click: function () {
              bus.emit('detail', data.index);
            }
          }
        })
      }
    }
    const created = () => {
  bus.on('detail', (e) => {
    alert("passed value: " + e);
  });
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>