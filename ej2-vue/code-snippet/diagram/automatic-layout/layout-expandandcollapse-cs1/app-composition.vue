<template>
    <div id="app">
  
      <ejs-diagram id="diagram" :width='width' :height='height' :dataSourceSettings='dataSourceSettings'
        :getNodeDefaults='getNodeDefaults' :selectedItems="selectedItems" :snapSettings="snapSettings"
        :getConnectorDefaults='getConnectorDefaults' :layout='layout'></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { provide } from "vue";
  import { DiagramComponent as EjsDiagram, HierarchicalTree, SelectorConstraints, DataBinding } from '@syncfusion/ej2-vue-diagrams';
  import { DataManager, Query } from "@syncfusion/ej2-data";
  
  //Initialize data
  let data = [
    {
      'Id': 'parent1',
      'Name': 'Maria ',
      'Designation': 'Managing Director',
      'RatingColor': '#C34444'
    },
    {
      'Id': 'parent',
      'Name': ' sam',
      'Designation': 'Managing Director',
      'ReportingPerson': 'parent1',
      'RatingColor': '#C34444'
    },
    {
      'Id': 'parent3',
      'Name': ' sam geo',
      'Designation': 'Managing Director',
      'ReportingPerson': 'parent1',
      'RatingColor': '#C34444'
    },
    {
      'Id': '80',
      'Name': ' david',
      'Designation': 'Managing Director',
      'ReportingPerson': 'parent3',
      'RatingColor': '#C34444'
    },
    {
      'Id': '82',
      'Name': ' pirlo',
      'Designation': 'Managing Director',
      'ReportingPerson': 'parent',
      'RatingColor': '#C34444'
    }
  ];
  
  let items = new DataManager(data, new Query().take(7));
  
  const width = "1000px";
  const height = "590px";
  const snapSettings = { constraints: 0 };
  const selectedItems = { constraints: ~SelectorConstraints.ResizeAll };
  
  //Configures data source for Diagram
  const dataSourceSettings = {
    id: 'Id',
    parentId: 'ReportingPerson',
    dataManager: items
  }
  //Uses layout to auto-arrange nodes on the Diagram page
  const layout = {
    //Sets layout type
    type: 'HierarchicalTree',
    getLayoutInfo: (tree) => {
      if (!tree.hasSubTree) {
        tree.orientation = 'vertical';
        tree.type = 'alternate';
      }
    }
  
  }
  
  //Sets the default properties for nodes and connectors
  const getNodeDefaults = (node) => {
    node.expandIcon = {
      height: 15,
      width: 15,
      shape: "Plus",
      fill: 'lightgray',
      offset: { x: .5, y: .85 }
    }
    node.collapseIcon = {
      height: 15,
      width: 15,
      shape: "Minus",
      offset: { x: .5, y: .85 },
    }
    node.height = 50; node.width = 50;
    return node;
  }
  const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    connector.targetDecorator.shape = "None";
    return connector;
  }
  
  provide('diagram', [HierarchicalTree, DataBinding]);
  
  </script>
  
  <style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>