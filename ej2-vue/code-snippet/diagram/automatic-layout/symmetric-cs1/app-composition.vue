<template>
    <div id="app">
  
      <ejs-diagram id="diagram" :width='width' :height='height' :dataSourceSettings='dataSourceSettings'
        :snapSettings="snapSettings" :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
        :layout='layout'></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { provide } from "vue";
  import { DiagramComponent as EjsDiagram, SymmetricLayout, DataBinding, SnapConstraints } from '@syncfusion/ej2-vue-diagrams';
  import { DataManager, Query } from "@syncfusion/ej2-data";
  
  //Initialize data
  let data = [
    { Id: 'parent1' },
    { Id: 'parent2', Source: 'parent1' },
    { Id: 'parent3', Source: 'parent1' },
    { Id: 1, Source: 'parent2' },
    { Id: 2, Source: 'parent2' },
    { Id: 3, Source: 'parent3' },
    { Id: 4, Source: 'parent3' },
    { Id: 5, Source: 1 },
    { Id: 6, Source: 1 },
    { Id: 7, Source: 1 },
    { Id: 8, Source: 1 },
    { Id: 9, Source: 1 },
    { Id: 10, Source: 1 },
    { Id: 11, Source: 2 },
    { Id: 12, Source: 2 },
    { Id: 13, Source: 2 },
    { Id: 14, Source: 2 },
    { Id: 15, Source: 2 },
    { Id: 16, Source: 2 },
    { Id: 17, Source: 3 },
    { Id: 18, Source: 3 },
    { Id: 19, Source: 3 },
    { Id: 20, Source: 3 },
    { Id: 21, Source: 3 },
    { Id: 22, Source: 3 },
    { Id: 23, Source: 4 },
    { Id: 24, Source: 4 },
    { Id: 25, Source: 4 },
    { Id: 26, Source: 4 },
    { Id: 27, Source: 4 },
    { Id: 28, Source: 4 },
  
  ];
  
  let items = new DataManager(data, new Query().take(7));
  
  const width = "1000px";
  const height = "590px";
  const snapSettings = { constraints: SnapConstraints.None };
  
  //Configures data source for Diagram
  const dataSourceSettings = {
    id: 'Id',
    parentId: 'Source',
    dataSource: items,
  }
  
  //Uses layout to auto-arrange nodes on the Diagram page
  const layout = {
    //Sets layout type
    type: 'SymmetricalLayout',
    springLength: 100,
    springFactor: 0.8,
    maxIteration: 500,
    margin: { left: 20, top: 20 },
  }
  
  //Sets the default properties for nodes and connectors
  const getNodeDefaults = (node) => {
    node.height = 25; node.width = 25;
    node.style = { fill: 'transparent', strokeWidth: 2 };
    node.shape = { type: 'Basic', shape: 'Ellipse' };
    node.style = { fill: '#ff6329' };
    return node;
  }
  const getConnectorDefaults = (connector) => {
    connector.type = 'Straight';
    connector.targetDecorator.shape = 'None';
    return connector;
  }
  
  provide('diagram', [SymmetricLayout, DataBinding]);
  
  </script>
  
  <style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>