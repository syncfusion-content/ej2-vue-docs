<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :tooltip='tooltip'
            :constraints='constraints'></ejs-diagram>
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
}]

const width = "100%";
const height = "350px";
const constraints = DiagramConstraints.Default | DiagramConstraints.Tooltip;
//Defines mouse over tooltip for a node
const tooltip = {
    content: 'Node1',
    position: 'BottomCenter',
    relativeMode: 'Object',
    animation: {
        //Animation settings to be applied on the Tooltip, while it is being shown over the target.
        open: {
            //Animation effect on the Tooltip is applied during open and close actions.
            effect: 'ZoomIn',
            //Duration of the animation that is completed per animation cycle.
            duration: 1000,
            //Indicating the waiting time before animation begins.
            delay: 0
        },
        //Animation settings to be applied on the Tooltip, when it is closed.
        close: {
            effect: 'ZoomOut',
            duration: 500,
            delay: 0
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
