<template>
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
</template>
<script>

import { DiagramComponent ,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
 id: 'node1',
// Position of the node
offsetX: 250,
offsetY: 150,
// Size of the node
width: 100,
height: 100,
style: {
    fill: '#6BA5D7',
    strokeColor: 'white'
},
constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
//Defines mouse over tooltip for a node
tooltip: {
  content: 'Node1',
  position: 'BottomCenter',
  relativeMode: 'Object',
  //Activate sticky mode for tooltip
  isSticky: true,
},
}];



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
}
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
