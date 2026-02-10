<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' 
            :constraints='constraints'>
        </ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, DiagramConstraints,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: "node1",
    height: 60,
    offsetX: 300,
    offsetY: 80,
    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
    tooltip: {
    //Sets the content of the Tooltip
    content: getContent(),
    //Sets the position of the Tooltip
    position: 'TopLeft',
    //Sets the tooltip position relative to the node
    relativeMode: 'Object'
    },
    annotations: [{
        content: "start"
    }]
}];

function getContent() {
    let tooltipContent = document.createElement('div');
    tooltipContent.innerHTML = '<div style="background-color: #f4f4f4; color: black; border-width:1px;border-style: solid;border-color: #d3d3d3; border-radius: 8px;white-space: nowrap;"> <span style="margin: 10px;"> Tooltip !!! </span> </div>';
    return tooltipContent;
}
const width = "100%";
const height = "350px";
const constraints = DiagramConstraints.Default | DiagramConstraints.Tooltip;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
