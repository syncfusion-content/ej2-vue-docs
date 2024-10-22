<template>
    <div id="app">
      <div id="message"></div>
  
        <ejs-grid ref="grid" :dataSource="data" height="272px" :created="created">
           <e-columns>
                <e-column
                field="OrderID" headerText="Order ID" textAlign="Right" width="100" isPrimaryKey="true"
                ></e-column>
                <e-column
                field="CustomerID" headerText="Customer ID" width="120"
                ></e-column>
                <e-column
                field="ShipCity" headerText="Ship City" width="100"
                ></e-column>
                <e-column
                field="ShipName" headerText="Ship Name" width="100" :template="columnTemplate"
                ></e-column>
            </e-columns>
        </ejs-grid>
    </div>
  </template>
  <script setup>
  import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
  import { data } from './datasource.js'
  import { createApp } from "vue";
  const app = createApp();
  import mitt from "mitt";
  var bus = mitt();
  const columnTemplate = function() {
                  return {
                      template: app.component("columnTemplate", {
                          template: `<button v-on:click="click()">button</button>`,
                          data: function () {
                              return {
                                  data: {},
                              };
                          },
                          methods: {
                              click: function () {
                                  bus.emit("detail", this.data.index);
                              },
                          },
                      }),
                  };
              }
      const created = () => {
          bus.on("detail", (event) => {
            document.getElementById("message").innerText="passed value:" + event;
          });
      }
  </script>
  <style>
    @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
    @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
    @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
    @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
    #message
    {
      color:red;
      text-align: center;
      padding-bottom: 20px;
    }
  </style>