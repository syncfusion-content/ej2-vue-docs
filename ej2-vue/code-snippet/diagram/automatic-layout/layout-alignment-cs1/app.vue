<template>
    <div id="app">
  
      <label for="horizontalAlignment">Horizontal Alignment : </label>
      <select id="horizontalAlignment" ref="horizontal" v-on:change="onHorizontalChange()">
        <option value="Left">Left</option>
        <option value="Center">Center</option>
        <option value="Right">Right</option>
      </select>
  
      <label for="verticalAlignment">Vertical Alignment : </label>
      <select id="verticalAlignment" ref="vertical" v-on:change="onVerticalChange()">
        <option value="Top">Top</option>
        <option value="Center">Center</option>
        <option value="Bottom">Bottom</option>
      </select>
  
      <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :getNodeDefaults="getNodeDefaults"
        :getConnectorDefaults="getConnectorDefaults" :layout="layout"
        :dataSourceSettings="dataSourceSettings"></ejs-diagram>
    </div>
  </template>
  <script>
  import { DiagramComponent, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
  import { DataManager, Query } from "@syncfusion/ej2-data";
  
  let diagramInstance;
  
  let data = [
    { Name: "Steve-Ceo" },
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "Peter-Manager", ReportingPerson: "Kevin-Manager" },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager" },
    { Name: "Mary-CSE ", ReportingPerson: "Peter-Manager" },
  ];
  
  let items = new DataManager(data, new Query().take(7));
  
  export default {
    name: "App",
    components: {
      "ejs-diagram": DiagramComponent
    },
    data() {
      return {
        width: "100%",
        height: "590px",
  
        //Uses layout to auto-arrange nodes on the Diagram page
        layout: {
          //Sets layout type
          type: 'HierarchicalTree',
          //set layout alignments
          horizontalAlignment: 'Left',
          verticalAlignment: 'Top'
        },
  
        //Configures data source for Diagram
        dataSourceSettings: {
          id: 'Name',
          parentId: 'ReportingPerson',
          dataManager: items
        },
  
        //Sets the default properties for nodes and connectors
        getNodeDefaults: (node) => {
          node.annotations = [{ content: node.data.Name }];
          node.width = 100; node.height = 40;
          return node;
        },
  
        getConnectorDefaults: (connector) => {
          connector.type = 'Orthogonal';
          return connector;
        }
      }
    },
  
    provide: {
      diagram: [HierarchicalTree, DataBinding]
    },
  
    mounted: function () {
      diagramInstance = this.$refs.diagramObj.ej2Instances;
  
    },
  
    methods: {
      onHorizontalChange() {
        const horizontalAlignment = this.$refs.horizontal.value;
        diagramInstance.layout.horizontalAlignment = horizontalAlignment;
        diagramInstance.dataBind();
      },
  
      onVerticalChange() {
        const verticalAlignment = this.$refs.vertical.value;
        diagramInstance.layout.verticalAlignment = verticalAlignment;
        diagramInstance.dataBind();
      }
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