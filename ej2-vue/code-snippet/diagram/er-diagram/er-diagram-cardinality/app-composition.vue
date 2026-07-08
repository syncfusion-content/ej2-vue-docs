<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
          :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>
    </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, ErDiagrams } from '@syncfusion/ej2-vue-diagrams';

var customer = {
  id: 'Customer',
  offsetX: 250,
  offsetY: 100,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'Customer'
      }
    },
    fields: [
      {
        id: 'customer_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true
      }
    ]
  },
  style: {
    fill: '#ffffff',
    strokeColor: '#7c3aed',
    strokeWidth: 1.5
  }
};

var order = {
  id: 'Order',
  offsetX: 400,
  offsetY: 250,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'Order'
      }
    },
    fields: [
      {
        id: 'order_id',
        name: 'OrderID',
        dataType: 'INT',
        isPrimaryKey: true
      },
      {
        id: 'customer_id_fk',
        name: 'CustomerID',
        dataType: 'INT',
        isForeignKey: true
      }
    ]
  },
  style: {
    fill: '#ffffff',
    strokeColor: '#7c3aed',
    strokeWidth: 1.5
  }
};

var relationship = {
  id: 'customer_order',
  sourceID: 'Customer',
  targetID: 'Order',
  shape: {
    type: 'Er',
    sourceMultiplicity: {
      type: 'One'
    },
    targetMultiplicity: {
      type: 'OneOrMany'
    }
  },
  style: {
    strokeColor: '#7c3aed',
    strokeWidth: 1.5
  },
  sourceDecorator: {
    style: {
      strokeColor: '#7c3aed',
      strokeWidth: 1.5
    }
  },
  targetDecorator: {
    style: {
      strokeColor: '#7c3aed',
      strokeWidth: 1.5
    }
  }
};

const nodes = [customer, order];
const connectors = [relationship];
const width = "100%";
const height = "400px";
const getConnectorDefaults = (connector, diagram) => {
  connector.cornerRadius = 10;
  connector.type = 'Orthogonal';
  return connector;
}

provide('diagram', [ErDiagrams]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>