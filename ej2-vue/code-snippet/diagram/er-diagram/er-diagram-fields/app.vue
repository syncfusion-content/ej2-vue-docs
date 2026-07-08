<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :nodes="nodes"></ejs-diagram>
    </div>
</template>

<script>
import { DiagramComponent, ErDiagrams } from '@syncfusion/ej2-vue-diagrams';

// Define an ER entity with various field properties
var product = {
  id: 'Product',
  offsetX: 300,
  offsetY: 200,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'Product'
      }
    },
    fields: [
      {
        id: 'prod_id',
        name: 'ProductID',
        dataType: 'INT',
        isPrimaryKey: true,
        constraints: ['NotNull']
      },
      {
        id: 'prod_code',
        name: 'ProductCode',
        dataType: 'VARCHAR(50)',
        constraints: ['NotNull', 'Unique']
      },
      {
        id: 'prod_name',
        name: 'ProductName',
        dataType: 'VARCHAR(150)',
        constraints: ['NotNull']
      },
      {
        id: 'prod_price',
        name: 'Price',
        dataType: 'DECIMAL(10,2)',
        constraints: ['NotNull']
      },
      {
        id: 'prod_desc',
        name: 'Description',
        dataType: 'TEXT'
      },
      {
        id: 'prod_catid',
        name: 'CategoryID',
        dataType: 'INT',
        isForeignKey: true
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
            nodes: [product],
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