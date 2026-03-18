<template>
    <div id="app">
  
      <ejs-diagram id="diagram" :width='width' :height='height' :dataSourceSettings='dataSourceSettings'
        :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout='layout'></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { provide } from "vue";
  import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding, LayoutAnimation } from '@syncfusion/ej2-vue-diagrams';
  import { DataManager, Query } from "@syncfusion/ej2-data";
  
  //Initialize data
  let data = [
    { Name: "Steve-Ceo" },
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "Robert-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "Peter-Manager", ReportingPerson: "Kevin-Manager" },
    { Name: "Hary-Manager", ReportingPerson: "Robert-Manager" },
    { Name: "John-Manager", ReportingPerson: "Hary-Manager" },
    { Name: "Mary-CSE", ReportingPerson: "Hary-Manager" },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager" },
    { Name: "Mary-CSE ", ReportingPerson: "Peter-Manager" },
  ];
  
  let items = new DataManager(data, new Query().take(7));
  
  const width = "1000px";
  const height = "590px";
  
  //Configures data source for Diagram
  const dataSourceSettings = {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items
  }
  
  //Uses layout to auto-arrange nodes on the Diagram page
  const layout = {
    //Sets layout type
    type: 'HierarchicalTree',
    enableAnimation: true,
  }
  
  //Sets the default properties for nodes and connectors
  const getNodeDefaults = (node) => {
    node.annotations = [{ content: node.data.Name }];
    node.expandIcon = { shape: "Minus" };
    node.collapseIcon = { shape: "Plus" };
    node.width = 100; node.height = 40;
    return node;
  }
  const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    return connector;
  }
  
  provide('diagram', [HierarchicalTree, DataBinding, LayoutAnimation]);
  
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
  </style>