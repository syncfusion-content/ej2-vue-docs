<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :nodes="nodes"></ejs-diagram>
    </div>
</template>

<script>
import { DiagramComponent, ERDiagrams } from '@syncfusion/ej2-vue-diagrams';

// Define a basic ER entity (Customer table)
var customer = {
  id: 'Customer',
  offsetX: 400,
  offsetY: 300,
  shape: {
    type: 'Er',
    header: {
      annotation: { content: 'Customer' }
    },
    fields: [
      {
        id: 'cust_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true,
        constraints: ['NotNull']
      },
      {
        id: 'cust_firstname',
        name: 'FirstName',
        dataType: 'VARCHAR(50)',
        constraints: ['NotNull']
      },
      {
        id: 'cust_email',
        name: 'Email',
        dataType: 'VARCHAR(100)',
        constraints: ['Unique']
      }
    ]
  }
};

export default {
    name: 'App',
    components: {
        'ejs-diagram': DiagramComponent,
    },
    data() {
        return {
            width: '100%',
            height: '600px',
            nodes: [customer],
        };
    },
    provide: { diagram: [ERDiagrams] },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>