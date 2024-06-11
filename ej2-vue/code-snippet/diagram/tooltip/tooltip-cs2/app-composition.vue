<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :tooltip='tooltip'
            :constraints='constraints'>
        </ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: "node1",
    height: 60,
    offsetX: 300,
    offsetY: 80,
    annotations: [{
        content: "start"
    }]
}];

const width = "100%";
const height = "350px";
const constraints = DiagramConstraints.Default | DiagramConstraints.Tooltip;
//Defines mouse over tooltip for a node
const tooltip = {
    //Sets the content of the Tooltip
    content: 'Node1',
    //Sets the position of the Tooltip
    position: 'BottomRight',
    //Sets the tooltip position relative to the node
    relativeMode: 'Object'
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
