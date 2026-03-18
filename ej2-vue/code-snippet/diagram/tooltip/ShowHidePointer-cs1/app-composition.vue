<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram,NodeConstraints} from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  id: 'node1',
  width: 100,
  height: 100,
  annotations: [
    {
      id: 'label',
      content: 'Tooltip pointer hidden',
      offset: {
        x: 0.5,
        y: 0.5,
      },
      style: {
        color: 'white',
      },
    },
  ],
  offsetX: 100,
  offsetY: 100,
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
  },
  constraints:NodeConstraints.Default |NodeConstraints.Tooltip,
  //Defines mouse over tooltip for a node
  tooltip: {
    content: 'Tooltip pointer hidden',
    position: 'BottomCenter',
    relativeMode: 'Object',
    //Hide tip pointer
    showTipPointer: false,
  },
},{
  id: 'node2',
  width: 100,
  height: 100,
  annotations: [
    {
      id: 'label',
      content: 'Tooltip pointer visible',
      offset: {
        x: 0.5,
        y: 0.5,
      },
      style: {
        color: 'white',
      },
    },
  ],
  offsetX: 300,
  offsetY: 100,
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
  },
  constraints:NodeConstraints.Default |NodeConstraints.Tooltip,
  //Defines mouse over tooltip for a node
  tooltip: {
    content: 'Tooltip pointer visible',
    position: 'BottomCenter',
    relativeMode: 'Object',
    //Show tip pointer
    showTipPointer: true,
  },
},];



const width = "100%";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
