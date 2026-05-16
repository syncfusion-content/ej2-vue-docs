<template>
    <div id="app">
      <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout'
        :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
  </template>
  <script>
  import { DiagramComponent, ComplexHierarchicalTree, LineDistribution, DataBinding, ChildArrangement } from '@syncfusion/ej2-vue-diagrams';
  import { DataManager, Query } from "@syncfusion/ej2-data";
  
  let data = [
    { "Name": "node11" },
    { "Name": "node12", "ReportingPerson": ["node114"] },
    { "Name": "node13", "ReportingPerson": ["node12"] },
    { "Name": "node14", "ReportingPerson": ["node12"] },
    { "Name": "node15", "ReportingPerson": ["node12"] },
    { "Name": "node116", "ReportingPerson": ["node22", "node12"] },
    { "Name": "node16", "ReportingPerson": [] },
    { "Name": "node18", "ReportingPerson": [] },
    { "Name": "node21" },
    { "Name": "node22", "ReportingPerson": ["node114"] },
    { "Name": "node23", "ReportingPerson": ["node22"] },
    { "Name": "node24", "ReportingPerson": ["node22"] },
    { "Name": "node25", "ReportingPerson": ["node22"] },
    { "Name": "node26", "ReportingPerson": [] },
    { "Name": "node28", "ReportingPerson": [] },
    { "Name": "node31" },
    { "Name": "node114", "ReportingPerson": ["node11", "node21", "node31"] }
  ];
  let items = new DataManager(data, new Query().take(7));
  export default {
    name: "App",
    components: {
      "ejs-diagram": DiagramComponent
    },
    data() {
      return {
        width: "1000px",
        height: "590px",
  
        //Uses layout to auto-arrange nodes on the Diagram page
        layout: {
          //Sets layout type
          type: 'ComplexHierarchicalTree',
          arrangement: ChildArrangement.Linear
        },
  
        //Configures data source for Diagram
        dataSourceSettings: {
          id: 'Name',
          parentId: 'ReportingPerson',
          dataManager: items
        },
  
        //Sets the default properties for nodes and connectors
        getNodeDefaults: (node) => {
          node.width = 40; node.height = 40;
          return node;
        },
        getConnectorDefaults: (connector) => {
          connector.type = 'Orthogonal';
          connector.cornerRadius = 7;
          return connector;
        }
      }
    },
    provide: {
      diagram: [ComplexHierarchicalTree, LineDistribution, DataBinding]
    }
  }
  </script>
  
  <style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>