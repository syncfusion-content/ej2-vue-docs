<template>
  <div id="app">
      <ejs-button ref="updateAnnotation" id="updateAnnotation" >Update Annotation</ejs-button>
      <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
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
      content: 'Annotation'
  }]
}];

const diagram = ref(null);
const updateAnnotation = ref(null);
const width = "750px";
const height = "350px";

onMounted(function () {
  const diagramInstance = diagram.value.ej2Instances;
  const updateAnnotationInstance = updateAnnotation.value.ej2Instances;
  updateAnnotationInstance.element.onclick = () => {
      // Adds to the Diagram
      diagramInstance.nodes[0].annotations[0].content = 'Updated Annotation';
      //Method to update the annotation at run time
      diagramInstance.dataBind();
  }
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
