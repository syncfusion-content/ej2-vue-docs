<template>
    <div id="app">
       <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'  :connectors='connector' :tooltip='tooltip' :constraints='constraints'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram,ConnectorConstraints,NodeConstraints,DiagramConstraints} from '@syncfusion/ej2-vue-diagrams';


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
const constraints= DiagramConstraints.Default | DiagramConstraints.Tooltip
            //Defines mouse over tooltip for a node
           const tooltip= {
                //Sets the content of the Tooltip
                content: 'Diagram',
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
