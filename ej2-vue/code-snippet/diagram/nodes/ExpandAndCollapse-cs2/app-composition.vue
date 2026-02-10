<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :getNodeDefaults="getNodeDefaults"
      :getConnectorDefaults="getConnectorDefaults"
      :layout="layout"
      :dataSourceSettings="dataSourceSettings"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import {
  DiagramComponent as EjsDiagram,
  HierarchicalTree,
  DataBinding,
} from "@syncfusion/ej2-vue-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";
const data = [
  {
    Name: 'Steve-Ceo',
  },
  {
    Name: 'Kevin-Manager',
    ReportingPerson: 'Steve-Ceo',
  },
];
const items = new DataManager(data, new Query().take(7));


const width = "100%";
const height = "350px";
const layout= {
        //Sets layout type
        type: 'HierarchicalTree',
      }
const dataSourceSettings= {
        id: 'Name',
        parentId: 'ReportingPerson',
        dataManager: items,
      }
const getNodeDefaults = (obj) => {
        obj.shape = {
          type: 'Text',
        };
        obj.style = {
          fill: 'None',
          strokeColor: 'none',
          strokeWidth: 2,
          bold: true,
          color: 'white',
        };
        obj.borderColor = 'white';
        obj.width = 100;
        obj.height = 40;
        obj.backgroundColor = '#6BA5D7';
        obj.borderWidth = 1;
        obj.shape.margin = {
          left: 5,
          right: 5,
          top: 5,
          bottom: 5,
        };
        obj.expandIcon = {
          shape: 'ArrowUp',
          width: 20,
          height: 20,
          fill: 'red',
          borderColor: 'blue',
          iconColor: 'white',
          cornerRadius: 7,
          borderWidth: 2.5,
        };
        obj.collapseIcon = {
          shape: 'Plus',
          width: 20,
          height: 20,
          fill: 'green',
          borderColor: 'blue',
          iconColor: 'white',
          cornerRadius: 7,
          borderWidth: 2.5,
        };
        return obj;
      }
const getConnectorDefaults = (connector) => {
        connector.style = {
          strokeColor: '#6BA5D7',
          strokeWidth: 2,
        };
        connector.targetDecorator.style.fill = '#6BA5D7';
        connector.targetDecorator.style.strokeColor = '#6BA5D7';
        connector.type = 'Orthogonal';
        return connector;
      }

const provide = {
    diagram: [DataBinding, HierarchicalTree],
  }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
