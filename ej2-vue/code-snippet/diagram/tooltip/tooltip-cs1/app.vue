<template>
<div id="app">
<ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :selectedItems='selectedItems'
></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent,SelectorConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
  id:'node1',
  offsetX: 350,
  offsetY: 150,
  width: 100,
  height: 100,
  style: {
      fill: '#6BA5D7',
      strokeColor: 'white'
  },
  annotations: [{
    content: 'Default tooltip disabled',
}]
}];

var connector =
[ { id: "connector1",
type:'Straight',
sourcePoint: {x: 100,y: 100},
targetPoint: { x: 200,y: 200},
annotations: [
  {
    content: 'Default tooltip disabled',
    visibility:true
  },
],
}];
//disable default tooltip
let selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.ToolTip }
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
        connectors:connector,
        selectedItems:selectedItems
        
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
