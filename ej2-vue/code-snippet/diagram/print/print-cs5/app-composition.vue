<template>
    <div id="app">
  
      <button v-on:click="printDiagram">Print</button>
  
      <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
        :snapSettings="snapSettings"></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { provide, ref, onMounted } from "vue";
  import { DiagramComponent as EjsDiagram, PrintAndExport, SnapConstraints } from '@syncfusion/ej2-vue-diagrams';
  
  let diagramInstance;
  let diagramObj = ref(null);
  
  //Initialize nodes
  let nodes = [
    {
      id: 'node1',
      width: 100,
      height: 50,
      offsetX: 100,
      offsetY: 100,
      style: { strokeColor: '#868686', fill: '#d5f5d5' },
      annotations: [{ content: 'Node 1' }],
    },
    {
      id: 'node2',
      width: 100,
      height: 75,
      offsetX: 100,
      offsetY: 225,
      shape: { type: 'Basic', shape: 'Diamond' },
      style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
      annotations: [{ content: 'Node 2' }],
    },
    {
      id: 'node3',
      width: 135,
      height: 50,
      offsetX: 400,
      offsetY: 425,
      style: { strokeColor: '#a8a8a8', fill: '#faebee' },
      annotations: [{ content: 'Node 3' }],
    },
    {
      id: 'node4',
      width: 125,
      height: 50,
      offsetX: 400,
      offsetY: 525,
      shape: { type: 'Basic', shape: 'Ellipse' },
      style: { strokeColor: '#a8a8a8', fill: '#fef0db' },
      annotations: [{ content: 'Node 4' }],
    },
  ];
  
  const width = "1000px";
  const height = "590px";
  const snapSettings = { constraints: SnapConstraints.None };
  
  onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
  })
  
  // Function to handle the print button click
  const printDiagram = () => {
    const printOptions = {};
    printOptions.pageOrientation = 'Portrait';
    diagramInstance.print(printOptions);
  };
  
  provide('diagram', [PrintAndExport]);
  
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
  </style>