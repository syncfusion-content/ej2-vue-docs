<template>
    <div id="app">
      <ejs-diagram id="diagram" :width="width" :height="height" :nodes="nodes" :connectors="connectors"
        :expandStateChange="expandStateChange" :layout="layout"></ejs-diagram>
    </div>
  </template>
  
  <script setup>
  
  import { provide } from "vue";
  import { DiagramComponent as EjsDiagram, HierarchicalTree } from '@syncfusion/ej2-vue-diagrams';
  
  //Initialize nodes
  const nodes = [
    {
      id: 'Start',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 50,
      annotations: [{ content: 'Node1' }],
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      expandIcon: {
        shape: 'ArrowDown',
        width: 20,
        height: 15,
      },
      collapseIcon: {
        shape: 'ArrowUp',
        width: 20,
        height: 15,
      },
    },
    {
      id: 'Init',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 140,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [{ content: 'Node2' }],
    },
  ];
  
  //Initialize connectors
  let connectors = [
    {
      id: 'connector1',
      sourceID: 'Start',
      targetID: 'Init',
      type: 'Orthogonal',
    },
  ];
  
  const width = "1000px";
  const height = '590px';
  
  const layout = {
    //Sets layout type
    type: 'HierarchicalTree'
  };
  
  const expandStateChange = (args) => {
    //We can get the expanded or collapsed state in args
    console.log('Expanded ' + args.state);
  };
  
  provide('diagram', [HierarchicalTree]);
  
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
  </style>