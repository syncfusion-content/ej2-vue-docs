<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :constraints='constraints' :nodes='nodes'
      :connectors='connectors' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, LineRouting, DiagramConstraints, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
  { id: 'shape1', offsetX: 100, offsetY: 100, width: 120, height: 50 },
  { id: 'shape2', offsetX: 350, offsetY: 300, width: 120, height: 50 },
  { id: 'shape3', offsetX: 150, offsetY: 200, width: 120, height: 50 },
  { id: 'shape4', offsetX: 300, offsetY: 200, width: 120, height: 50 }
];
const connectors = [
  { id: 'connector', sourceID: 'shape1', targetID: 'shape2', type: 'Orthogonal', annotations: [{ offset: .7, content: ' Routing \n enabled', style: { fill: "white" } }] },
  { id: 'connector2', sourceID: 'shape1', targetID: 'shape2', annotations: [{ offset: .6, content: ' Routing \n disabled', style: { fill: "white" } }], type: 'Orthogonal', constraints: ConnectorConstraints.Default & ~ConnectorConstraints.InheritLineRouting }
];
function getNodeDefaults(obj) {
  obj = { style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' } };
  return obj;
}
const constraints = DiagramConstraints.Default | DiagramConstraints.LineRouting;

const width = "100%";
const height = "350px";

const getNodeDefaults = (obj) => {
  obj = { style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' } };
  return obj;
}

provide('diagram', [LineRouting]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>
