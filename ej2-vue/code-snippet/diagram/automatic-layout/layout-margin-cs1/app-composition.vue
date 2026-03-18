<template>
    <div id="app">
  
      <label for="marginLeft">Margin Left : </label>
      <input type="number" ref="marginLeft" id="marginLeft" value="100" v-on:change="onLeftChange()">
  
      <label for="marginTop">Margin Top : </label>
      <input type="number" ref="marginTop" id="marginTop" value="100" v-on:change="onTopChange()">
  
      <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :dataSourceSettings='dataSourceSettings'
        :getNodeDefaults='getNodeDefaults' :snapSettings="snapSettings" :getConnectorDefaults='getConnectorDefaults'
        :layout='layout'></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { provide, ref, onMounted } from "vue";
  import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
  import { DataManager, Query } from "@syncfusion/ej2-data";
  
  let diagramInstance;
  let diagramObj = ref(null);
  let marginLeft = ref(null);
  let marginTop = ref(null);
  
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
  const snapSettings = { constraints: 0 };
  
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
    margin: { left: 100, top: 100 },
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
  const onLeftChange = () => {
    let leftValue = Number(marginLeft.value.value);
    if (leftValue < 20) {
      leftValue = 20;
    }
    if (leftValue > 500) {
      leftValue = 500;
    }
    diagramInstance.layout.margin.left = leftValue;
    diagramInstance.dataBind();
  };
  
  const onTopChange = () => {
    let topValue = Number(marginTop.value.value);
    if (topValue < 20) {
      topValue = 20;
    }
    if (topValue > 500) {
      topValue = 500;
    }
    diagramInstance.layout.margin.top = topValue;
    diagramInstance.dataBind();
  };
  
  onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
  })
  
  provide('diagram', [HierarchicalTree, DataBinding]);
  
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
  </style>