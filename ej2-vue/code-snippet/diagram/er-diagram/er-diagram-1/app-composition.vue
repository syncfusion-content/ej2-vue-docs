<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, ErDiagrams } from '@syncfusion/ej2-vue-diagrams';


// Define a basic ER entity (Customer table)
var customer = {
  id: 'Customer',
  offsetX: 300,
  offsetY: 200,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'Customer',
      },
    },
    fields: [
      {
        id: 'cust_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true,
        constraints: ['NotNull'],
      },
      {
        id: 'cust_firstname',
        name: 'FirstName',
        dataType: 'VARCHAR(50)',
        constraints: ['NotNull'],
      },
      {
        id: 'cust_email',
        name: 'Email',
        dataType: 'VARCHAR(100)',
        constraints: ['Unique'],
      },
    ],
  },
};

const nodes = [customer];

const width = "100%";
const height = "600px";

provide('diagram', [ErDiagrams]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/tailwind3.css";
</style>