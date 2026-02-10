<template>
<div id="app">
<button @click="show">show</button>
<button @click="hide">hide</button>
    <ejs-diagram ref="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
</template>
<script>

import { DiagramComponent ,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

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



export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent
},
data() {
    return {
        width: "100%",
        height: "350px",
        nodes: nodes,
       
    }
},
methods: {
  show() {
    let diagramInstance = this.$refs.diagram.ej2Instances;
     
      diagramInstance.showTooltip(diagramInstance.nodes[0]);
  },
  hide() {
    let diagramInstance = this.$refs.diagram.ej2Instances;
     
    diagramInstance.hideTooltip(diagramInstance.nodes[0]);
  },
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
