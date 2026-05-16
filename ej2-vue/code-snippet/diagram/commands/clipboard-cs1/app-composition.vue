<template>
  <div id="app">
    <label>Ctrl + X</label><button @click="cut">Cut</button>
    <label>Ctrl + C</label><button @click="copy">Copy</button>
    <label>Ctrl + V</label><button @click="paste">Paste</button>
    <button @click="pasteObject">Paste Defined Object</button>

    <ejs-diagram
      id="diagram"
      ref="diagramObj"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";
const diagramObj = ref(null);
const nodes = [
  {
    id: "node1",
    width: 100,
    height: 80,
    offsetX: 140,
    offsetY: 100,
    annotations: [{ content: "Node1" }],
  },
  {
    id: "node2",
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 200,
    annotations: [{ content: "Node2" }],
  },
  {
    id: "node3",
    width: 200,
    height: 30,
    offsetX: 140,
    offsetY: 300,
    annotations: [{ content: "Node3" }],
  },
];

const width = "100%";
const height = "350px";

const cut = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  diagramInstance.cut();
};
const copy = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  diagramInstance.copy();
};

const paste = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  diagramInstance.paste();
};
const pasteObject = function () {
  let diagramInstance = diagramObj.value.ej2Instances;
  let nodes = [
    {
      id: "n1",
      offsetX: 400,
      offsetY: 100,
      width: 100,
    },
    {
      id: "n2",
      offsetX: 400,
      offsetY: 200,
      width: 100,
    },
  ];
  diagramInstance.paste(nodes);
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
