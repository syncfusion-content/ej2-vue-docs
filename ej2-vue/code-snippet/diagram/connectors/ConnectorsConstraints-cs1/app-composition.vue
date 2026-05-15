<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
  id: 'connector1',
  constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
  annotations: [{ content: 'Connector Selection disabled' }],
  type: 'Straight',
  sourcePoint: {
    x: 100,
    y: 100,
  },
  targetPoint: {
    x: 200,
    y: 200,
  },
}, {
  id: 'connector2',
  constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Drag,
  annotations: [{ content: 'Connector Drag disabled' }],
  type: 'Straight',
  sourcePoint: {
    x: 300,
    y: 100,
  },
  targetPoint: {
    x: 400,
    y: 200,
  },
},{
  id: 'connector3',
  constraints:
    ConnectorConstraints.Default & ~ConnectorConstraints.DragSourceEnd,
  annotations: [{ content: 'Connector Source end disabled' }],
  type: 'Straight',
  sourcePoint: {
    x: 500,
    y: 100,
  },
  targetPoint: {
    x: 600,
    y: 200,
  },
}, {
  id: 'connector4',
  constraints:
    ConnectorConstraints.Default & ~ConnectorConstraints.DragTargetEnd,
  annotations: [{ content: 'Connector Target end disabled' }],
  type: 'Straight',
  sourcePoint: {
    x: 700,
    y: 100,
  },
  targetPoint: {
    x: 800,
    y: 200,
  },
},]

const width = "100%";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>