<template>
  <div id="app">
      <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :keyDown="keyDown"></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  // Sets the annotation for the node
  annotations: [{
      content: 'Annotation',
  }]
}];
const diagram = ref(null);
const width = "750px";
const height = "500px";
let color = 'pink';
const keyDown = (args) => {
  const diagramInstance = diagram.value.ej2Instances;
  if (color === 'pink') {
      color = 'yellow';
      diagramInstance.nodes[0].style.fill = 'red';
      diagramInstance.dataBind();
  } else {
      color = 'pink';
      diagramInstance.nodes[0].style.fill = 'pink';
      diagramInstance.dataBind();
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
