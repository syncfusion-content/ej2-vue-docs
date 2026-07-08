<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :nodes="nodes"></ejs-diagram>
    </div>
</template>

<script>
import { DiagramComponent, ErDiagrams } from '@syncfusion/ej2-vue-diagrams';

// Define an ER entity with customized header
var customer = {
  id: 'Customer',
  offsetX: 300,
  offsetY: 200,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'CUSTOMER TABLE',
        style: {
          color: 'white',
          fontSize: 13,
          bold: true,
          fontFamily: 'Arial'
        }
      },
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

export default {
    name: 'App',
    components: {
        'ejs-diagram': DiagramComponent,
    },
    data() {
        return {
            width: '100%',
            height: '400px',
            nodes: [customer],
        };
    },
    provide: { diagram: [ErDiagrams] },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>