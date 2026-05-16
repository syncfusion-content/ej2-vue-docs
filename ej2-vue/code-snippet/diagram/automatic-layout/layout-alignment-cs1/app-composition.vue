<template>
    <div id="app">
  
      <label for="horizontalAlignment">Horizontal Alignment : </label>
      <select id="horizontalAlignment" ref="horizontalAlign" v-on:change="onHorizontalChange()">
        <option value="Left">Left</option>
        <option value="Center">Center</option>
        <option value="Right">Right</option>
      </select>
  
      <label for="verticalAlignment">Vertical Alignment : </label>
      <select id="verticalAlignment" ref="verticalAlign" v-on:change="onVerticalChange()">
        <option value="Top">Top</option>
        <option value="Center">Center</option>
        <option value="Bottom">Bottom</option>
      </select>
  
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
  let horizontalAlign = ref(null);
  let verticalAlign = ref(null);
  
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
    //Sets layout alignment
    horizontalAlignment: 'Left',
    verticalAlignment: 'Top',
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
  const onHorizontalChange = () => {
    const horizontalAlignment = horizontalAlign.value.value;
    diagramInstance.layout.horizontalAlignment = horizontalAlignment;
    diagramInstance.dataBind();
  };
  
  const onVerticalChange = () => {
    const verticalAlignment = verticalAlign.value.value;
    diagramInstance.layout.verticalAlignment = verticalAlignment;
    diagramInstance.dataBind();
  };
  
  onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
  })
  
  provide('diagram', [HierarchicalTree, DataBinding]);
  
  </script>
  
  <style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>