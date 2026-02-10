<template>
  <div id="app">
      <ejs-button ref="removeAnnotation" id="removeAnnotation" >Remove Annotation</ejs-button>
      <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const diagram = ref(null);
const removeAnnotation = ref(null);
const nodes = [{
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  // Sets the annotation for the node
  annotations: [{
      id: 'label1',
      // Sets the text to be displayed
      content: 'Annotation'
  }]
}]

const width = "750px";
const height = "350px";

onMounted(function () {
  const diagramInstance = diagram.value.ej2Instances;
  const removeAnnotationInstance = removeAnnotation.value.ej2Instances;
  let annotation = [{
      id: 'label1',
      content: 'Annotation'
  }];
  //Method to remove labels at run time
  removeAnnotationInstance.element.onclick = () => {
      diagramInstance.removeLabels(diagramInstance.nodes[0], annotation);
  }
})

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
