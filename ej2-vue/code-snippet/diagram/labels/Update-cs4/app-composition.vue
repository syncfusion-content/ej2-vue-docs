<template>
  <div id="app">
      <ejs-button ref="updateOffset" id="updateOffset" >Update Offset</ejs-button>
      <ejs-diagram ref="diagram" id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const nodes = [{
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  // Sets the annotation for the node
  annotations: [{
      // Sets the content for the annotation
      content: 'Annotation',
      height: 100,
      width: 100,
  }]
}];

const diagram = ref(null);
const updateOffset = ref(null);
const width = "750px";
const height = "350px";

onMounted(function () {
  const diagramInstance = diagram.value.ej2Instances;
  const updateOffsetInstance = updateOffset.value.ej2Instances;
  updateOffsetInstance.element.onclick = () => {
      diagramInstance.nodes[0].annotations[0].offset = {x:0, y:0.5};
      diagramInstance.dataBind();
  }
})

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
