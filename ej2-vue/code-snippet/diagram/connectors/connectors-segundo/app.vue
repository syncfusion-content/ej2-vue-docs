<template>
  <div id="app">
    <button @click="undo">Undo</button>
    <button @click="redo">Redo</button>
    <ejs-diagram ref="diagram" :width="width" :height="height" :nodes="nodes" :connectors="connectors"></ejs-diagram>
  </div>
</template>

<script>

import {
  DiagramComponent,
  ConnectorConstraints,
  ConnectorEditing,
  UndoRedo,
} from "@syncfusion/ej2-vue-diagrams";

// Initialize the nodes for the diagram.
let nodes = [
  {
    id: "sourcenode",
    width: 150,
    height: 50,
    offsetX: 350,
    offsetY: 50,
    annotations: [
      {
        content: "Node1",
      },
    ],
    style: {
      fill: "#6BA5D7",
      strokeColor: "white",
    },
  },
  {
    id: "targetnode",
    width: 150,
    height: 50,
    offsetX: 200,
    offsetY: 250,
    style: {
      fill: "#6BA5D7",
      strokeColor: "white",
    },
    annotations: [
      {
        content: "Node2",
      },
    ],
  },
];
// Initialize the connectors for the diagram.
let connectors = [
  {
    id: "connector1",
    sourceID: "sourcenode",
    targetID: "targetnode",
    type: "Orthogonal",
    segments: [
      {
        type: "Orthogonal",
        direction: "Left",
        length: 100,
      },
      {
        type: "Orthogonal",
        direction: "Bottom",
        length: 100,
      },
      {
        type: "Orthogonal",
        direction: "Right",
        length: 100,
      },
      {
        type: "Orthogonal",
        direction: "Bottom",
        length: 50,
      },
    ],
    constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
  },
];
export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
  },
  data() {
    return {
      width: "100%",
      height: "350px",
      nodes: nodes,
      connectors: connectors,
    };
  },
  methods: {
    undo() {
      this.$refs.diagram.ej2Instances.undo();
    },
    redo() {
      this.$refs.diagram.ej2Instances.redo();
    },
  },
  provide: {
    diagram: [ConnectorEditing, UndoRedo],
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
