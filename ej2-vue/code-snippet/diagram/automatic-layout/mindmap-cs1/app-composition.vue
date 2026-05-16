<template>
    <div id="app">
  
      <ejs-diagram id="diagram" :width='width' :height='height' :dataSourceSettings='dataSourceSettings'
        :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout='layout'></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { provide } from "vue";
  import { DiagramComponent as EjsDiagram, MindMap, DataBinding } from '@syncfusion/ej2-vue-diagrams';
  import { DataManager, Query } from "@syncfusion/ej2-data";
  
  
  //Initialize data
  let data = [
    {
      id: 1,
      Label: 'StackPanel'
    },
    {
      id: 2,
      Label: 'Label',
      parentId: 1
    },
    {
      id: 3,
      Label: 'ListBox',
      parentId: 1
    },
    {
      id: 4,
      Label: 'StackPanel',
      parentId: 2
    },
    {
      id: 5,
      Label: 'Border',
      parentId: 2
    },
    {
      id: 6,
      Label: 'Border',
      parentId: 4
    },
    {
      id: 7,
      Label: 'Button',
      parentId: 4
    },
    {
      id: 8,
      Label: 'ContentPresenter',
      parentId: 5
    },
    {
      id: 9,
      Label: 'Text Block',
      parentId: 5
    },
  
  ];
  
  let items = new DataManager(data, new Query().take(7));
  
  const width = "1000px";
  const height = "590px";
  
  //Configures data source for Diagram
  const dataSourceSettings = {
    id: 'id',
    parentId: 'parentId',
    dataSource: items,
    root: String(1)
  }
  
  //Uses layout to auto-arrange nodes on the Diagram page
  const layout = {
    //Sets layout type
    type: 'MindMap',
    orientation: 'Horizontal',
  }
  
  //Sets the default properties for nodes and connectors
  const getNodeDefaults = (node) => {
    node.annotations = [{ content: node.data.Label }];
    node.width = 100; node.height = 40;
    return node;
  }
  const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    return connector;
  }
  
  provide('diagram', [MindMap, DataBinding]);
  
  </script>
  
  <style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>