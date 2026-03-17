<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
      :layers="layers"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const diagram = ref(null);
const nodes = [
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      annotations: [
        {
          content: 'Layer 1 object Locked',
        },
      ],
    },
    {
      id: 'node2',
      width: 100,
      height: 100,
      offsetX: 300,
      offsetY: 100,
      annotations: [
        {
          content: 'Layer 2 Object',
        },
      ],
    },
];

const connectors = [
    {
      id: 'connector1',
      type: 'Straight',
      sourcePoint: {
        x: 100,
        y: 300,
      },
      targetPoint: {
        x: 200,
        y: 400,
      },
      annotations: [
        {
          content: 'Layer 2 Object',
        },
      ],
    },
  ];

const width = "100%";
const height = "450px";
const layers = [
  {
    id: "layer1",
    visible: true,
    objects: ["node1"],
    //Locks the layer1 and prevents any interactions to the objects in layer1
    lock: true,
  },
  {
    id: "layer2",
    visible: true,
    objects: ["node2", "connector1"],
    lock: false,
  },
];
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
