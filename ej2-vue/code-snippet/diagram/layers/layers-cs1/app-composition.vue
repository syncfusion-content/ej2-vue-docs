<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :layers='layers'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DiagramComponent as EjsDiagram,} from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [
  // Layer 1 Nodes
  {
    id: "node1",
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    shape: { type: "Basic", shape: "Rectangle" },
    annotations: [{ content: "Basic rectangle" }],
  },
  {
    id: "node2",
    width: 100,
    height: 100,
    offsetX: 250,
    offsetY: 100,
    shape: { type: "Basic", shape: "Ellipse" },
    annotations: [{ content: "Basic Ellipse" }],
  },
  {
    id: "node3",
    width: 100,
    height: 100,
    offsetX: 400,
    offsetY: 100,
    shape: { type: "Basic", shape: "RightTriangle" },
    annotations: [{ content: "Basic RightTriangle" }],
  },
  {
    id: "node4",
    width: 100,
    height: 100,
    offsetX: 550,
    offsetY: 100,
    shape: { type: "Basic", shape: "Plus" },
    annotations: [{ content: "Basic Plus" }],
  },
  // Layer 2 Nodes
  {
    id: "node5",
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 300,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [{ content: "Flow Terminator" }],
  },
  {
    id: "node6",
    width: 100,
    height: 100,
    offsetX: 250,
    offsetY: 300,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Flow Process" }],
  },
  {
    id: "node7",
    width: 100,
    height: 100,
    offsetX: 400,
    offsetY: 300,
    shape: { type: "Flow", shape: "Decision" },
    annotations: [{ content: "Flow Decision" }],
  },
  {
    id: "node8",
    width: 100,
    height: 100,
    offsetX: 550,
    offsetY: 300,
    shape: { type: "Flow", shape: "Document" },
    annotations: [{ content: "Flow Document" }],
  },
];


const width = "100%";
const height = "350px";
const layers =[{
          id: "layer1",
          //Layer 1 objects
          objects: ["node1", "node2", "node3", "node4"],
        },
        {
          id: "layer2",
          //Layer 2 objects
          objects: ["node5", "node6", "node7", "node8"],
        },
]

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
