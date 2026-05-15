<template>
  <div id="app">
    <ejs-diagram id="diagram" :width="width" :height="height" :getNodeDefaults="getNodeDefaults"
      :getConnectorDefaults="getConnectorDefaults" :layout="layout"
      :dataSourceSettings="dataSourceSettings"></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, HierarchicalTree, DataBinding, Rect } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";


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
      width: "1000px",
      height: "590px",

      //Uses layout to auto-arrange nodes on the Diagram page
      layout: {
        //Sets layout type
        type: 'HierarchicalTree',
        bounds: new Rect(0, 0, 500, 700)
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