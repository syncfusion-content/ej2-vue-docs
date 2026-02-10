<template>
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'  :connectors='connectors' :tooltip='tooltip' :constraints='constraints'></ejs-diagram>
</div>
</template>
<script>

import { DiagramComponent,ConnectorConstraints,DiagramConstraints,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

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
//Defines mouse over tooltip for a node
tooltip: {
  //Sets the content of the tooltip
  content: 'Node',
},
//To inherit diagram tooltip
constraints: NodeConstraints.Default | NodeConstraints.InheritTooltip,
}];
let connector = [{
  id: 'con1',
  sourcePoint: { x: 400, y: 100 },
  targetPoint: { x: 500, y: 200 },
  tooltip: { content: 'connector' },
  constraints:
    ConnectorConstraints.Default | ConnectorConstraints.InheritTooltip,
}]
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
        nodes: nodes,
        constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
            //Defines mouse over tooltip for a node
            tooltip: {
                //Sets the content of the Tooltip
                content: 'Diagram',
            }, 
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
