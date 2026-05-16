<template>
  <div id="app">
      <ejs-button ref="startTextEdit" id="startTextEdit" >Start Text Edit</ejs-button>
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
      content: 'Annotation',
  }]
}];

const diagram = ref(null);
const startTextEdit = ref(null);
const width = "750px";
const height = "500px";

onMounted(function () {
  const diagramInstance = diagram.value.ej2Instances;
  const startTextEditInstance = startTextEdit.value.ej2Instances;
  startTextEditInstance.element.onclick = () => {
      diagramInstance.startTextEdit(diagramInstance.nodes[0]);
      diagramInstance.dataBind();
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
