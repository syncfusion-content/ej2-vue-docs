<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      :width="width"
      :height="height"
      :getNodeDefaults="getNodeDefaults"
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
          fill: 'yellow',
          strokeColor: 'yellow',
          bold: true,
          color: 'white',
        };
        obj.borderColor = 'white';
        obj.width = 100;
        obj.height = 100;
        obj.offsetX = 300;
        obj.offsetY = 200;
        obj.borderWidth = 1;
        obj.shape.margin = {
          left: 5,
          right: 5,
          top: 5,
          bottom: 5,
        };
        return obj;
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
