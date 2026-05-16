<template>
<div id="app">
<button @click="show">show</button>
<button @click="hide">hide</button>
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram,NodeConstraints} from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'node2',
    width: 100,
    height: 100,
    annotations: [
      {
        id: 'label',
        content: 'Tooltip',
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
      content:"ToolTip",
      position: 'BottomCenter',
      relativeMode: 'Object',
      //To show tooltip on button click
      openOn: 'Custom',
    },
  },];
const show = function () {
            let diagramInstance = diagram.value.ej2Instances    
            diagramInstance.showTooltip(diagramInstance.nodes[0]);
        }
const hide = function () {
            let diagramInstance = diagram.value.ej2Instances
            diagramInstance.hideTooltip(diagramInstance.nodes[0]);
        }
const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
