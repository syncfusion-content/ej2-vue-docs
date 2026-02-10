<template>
    <div id="app">
  
      <label for="horizontalSpacing">Horizontal Spacing : </label>
      <input type="number" ref="horizontal" id="horizontalSpacing" value="30" v-on:change="onHorizontalChange()">
  
      <label for="verticalSpacing">Vertical Spacing : </label>
      <input type="number" ref="vertical" id="verticalSpacing" value="30" v-on:change="onVerticalChange()">
  
      <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :dataSourceSettings='dataSourceSettings'
        :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout='layout'></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { provide, ref, onMounted } from "vue";
  import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
  import { DataManager, Query } from "@syncfusion/ej2-data";
  
  let diagramInstance;
  let diagramObj = ref(null);
  let horizontal = ref(null);
  let vertical = ref(null);
  
  //Initialize data
  let data = [
    { Name: "Steve-Ceo" },
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "Peter-Manager", ReportingPerson: "Kevin-Manager" },
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
    //set layout spacing
    horizontalSpacing: 30,
    verticalSpacing: 30,
  }
  
  //Sets the default properties for nodes and connectors
  const getNodeDefaults = (node) => {
    node.annotations = [{ content: node.data.Name }];
    node.width = 100; node.height = 40;
    return node;
  }
  const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    return connector;
  }
  onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
  })
  
  const onHorizontalChange = () => {
    let horizontalSpacing = Number(horizontal.value.value);
    if (horizontalSpacing < 20) {
      horizontalSpacing = 20;
    }
    if (horizontalSpacing > 100) {
      horizontalSpacing = 100;
    }
    diagramInstance.layout.horizontalSpacing = horizontalSpacing;
    diagramInstance.dataBind();
  };
  
  const onVerticalChange = () => {
    let verticalSpacing = Number(vertical.value.value);
    if (verticalSpacing < 20) {
      verticalSpacing = 20;
    }
    if (verticalSpacing > 100) {
      verticalSpacing = 100;
    }
    diagramInstance.layout.verticalSpacing = verticalSpacing;
    diagramInstance.dataBind();
  };
  provide('diagram', [HierarchicalTree, DataBinding]);
  
  </script>
  
  <style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>