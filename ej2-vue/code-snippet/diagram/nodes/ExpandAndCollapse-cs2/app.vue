<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      :width="width"
      :height="height"
      :getNodeDefaults="getNodeDefaults"
      :getConnectorDefaults="getConnectorDefaults"
      :layout="layout"
      :dataSourceSettings="dataSourceSettings"
    ></ejs-diagram>
  </div>
</template>
<script>
import {
  DiagramComponent,
  HierarchicalTree,
  DataBinding,
} from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

let data = [
  {
    Name: 'Steve-Ceo',
  },
  {
    Name: 'Kevin-Manager',
    ReportingPerson: 'Steve-Ceo',
  },
];
let items = new DataManager(data, new Query().take(7));
export default {
  name: 'App',
  components: {
    'ejs-diagram': DiagramComponent,
  },
  data() {
    return {
      width: '100%',
      height: '700px',
      //Uses layout to auto-arrange nodes on the Diagram page
      layout: {
        //Sets layout type
        type: 'HierarchicalTree',
      },
      dataSourceSettings: {
        id: 'Name',
        parentId: 'ReportingPerson',
        dataManager: items,
      },
      getNodeDefaults: (obj) => {
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
      },
      getConnectorDefaults: (connector) => {
        connector.style = {
          strokeColor: '#6BA5D7',
          strokeWidth: 2,
        };
        connector.targetDecorator.style.fill = '#6BA5D7';
        connector.targetDecorator.style.strokeColor = '#6BA5D7';
        connector.type = 'Orthogonal';
        return connector;
      },
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree],
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
