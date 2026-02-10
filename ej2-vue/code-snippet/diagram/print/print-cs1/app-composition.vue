<template>
    <div id="app">
  
      <label for="region">Region: </label>
      <select id="region" ref="regionSelect">
        <option value="PageSettings">PageSettings</option>
        <option value="Content">Content</option>
      </select>
      <button v-on:click="printDiagram">Print</button>
  
      <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
        :pageSettings="pageSettings"></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { provide, ref, onMounted } from "vue";
  import { DiagramComponent as EjsDiagram, PrintAndExport } from '@syncfusion/ej2-vue-diagrams';
  
  let diagramInstance;
  let diagramObj = ref(null);
  let regionSelect = ref(null);
  
  //Initialize nodes
  let nodes = [
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      annotations: [{ content: 'Node 1' }],
    },
    {
      id: 'node2',
      width: 100,
      height: 100,
      offsetX: 300,
      offsetY: 130,
      annotations: [{ content: 'Node 2' }],
    },
  ];
  
  const width = "1000px";
  const height = "590px";
  const pageSettings = { width: 200, height: 200 };
  
  onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
  })
  
  // Function to handle the print button click
  const printDiagram = () => {
    const selectedRegion = regionSelect.value.value;
  
    // Set the print options based on the selected region
    const printOptions = { region: selectedRegion };
    diagramInstance.print(printOptions);
  };
  
  provide('diagram', [PrintAndExport]);
  
  </script>
  
  <style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>