<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, ERDiagrams } from '@syncfusion/ej2-vue-diagrams';


// Define an ER entity with customized header
const customer = {
  id: 'Customer',
  offsetX: 400,
  offsetY: 300,
  shape: {
    type: 'Er',
    header: {
      annotation: { content: 'CUSTOMER TABLE', style: {
        color: 'white',
        fontSize: 13,
        bold: true,
        fontFamily: 'Arial'
      }},
      height: 35,
      style: {
        fill: '#2E75B6'
      }
    },
    fields: [
      {
        id: 'cust_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true
      },
      {
        id: 'cust_name',
        name: 'FirstName',
        dataType: 'VARCHAR(50)'
      },
      {
        id: 'cust_email',
        name: 'Email',
        dataType: 'VARCHAR(100)'
      }
    ]
  }
};

const nodes = [customer];

const width = "100%";
const height = "600px";

provide('diagram', [ERDiagrams]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>