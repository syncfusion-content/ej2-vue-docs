<template>
  <div id="app">

    <ejs-diagram id="diagram" :width="width" :height="height" :getNodeDefaults="getNodeDefaults"
      :getConnectorDefaults="getConnectorDefaults" :layout="layout"
      :dataSourceSettings="dataSourceSettings"></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, HierarchicalTree, DataBinding, LayoutAnimation } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

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
        type: 'HierarchicalTree',
        enableAnimation: true,
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
        node.expandIcon = { shape: "Minus" };
        node.collapseIcon = { shape: "Plus" };
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
    diagram: [HierarchicalTree, DataBinding, LayoutAnimation]
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>