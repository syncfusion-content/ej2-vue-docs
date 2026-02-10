<template>
  <div id="app">

    <label for="marginLeft">Margin Left : </label>
    <input type="number" ref="marginLeft" id="marginLeft" value="100" v-on:change="onLeftChange()">

    <label for="marginTop">Margin Top : </label>
    <input type="number" ref="marginTop" id="marginTop" value="100" v-on:change="onTopChange()">

    <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :getNodeDefaults="getNodeDefaults"
      :getConnectorDefaults="getConnectorDefaults" :layout="layout" :snapSettings="snapSettings"
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
      width: "1000px",
      height: "590px",

      snapSettings: { constraints: 0 },

      //Uses layout to auto-arrange nodes on the Diagram page
      layout: {
        //Sets layout type
        type: 'HierarchicalTree',
        
        //Sets layout alignment
        horizontalAlignment: 'Left',
        verticalAlignment: 'Top',
        margin: { left: 100, top: 100 },
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
    onLeftChange() {
      let leftValue = Number(this.$refs.marginLeft.value);
      if (leftValue < 20) {
        leftValue = 20;
      }
      if (leftValue > 500) {
        leftValue = 500;
      }
      diagramInstance.layout.margin.left = leftValue;
      diagramInstance.dataBind();
    },

    onTopChange() {
      let topValue = Number(this.$refs.marginTop.value);
      if (topValue < 20) {
        topValue = 20;
      }
      if (topValue > 500) {
        topValue = 500;
      }
      diagramInstance.layout.margin.top = topValue;
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