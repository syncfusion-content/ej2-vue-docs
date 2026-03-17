<template>
  <div id="app">
    <ejs-diagram ref="diagram" id="diagram" :width='width' :height='height' :nodes="nodes" :nodeTemplate="nodeTemplate"></ejs-diagram>
  </div>
</template>

<script setup>
import { createApp } from "vue";
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const itemVue = createApp({}).component("nodeTemplate", {
  template: `<div style="background:#6BA5D7;height:100%;width:100%;"><button type="button" style="width:100px"> Button</button></div> `,
  data() {
    return {};
  }
});

const nodes = [
  {
    //Id of the node
    id: "Node",
    //Position of the node
    offsetX: 250,
    offsetY: 250,
    //Size of the node
    width: 100,
    height: 100,
    //sets the type of the shape as HTML
    shape: {
      type: "HTML",
    },
  },
];

const width = "750px";
const height = "350px";
const nodeTemplate = function () {
  return { template: itemVue };
}
</script>