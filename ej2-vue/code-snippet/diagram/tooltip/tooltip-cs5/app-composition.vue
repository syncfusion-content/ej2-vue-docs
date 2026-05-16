<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: "node1",
    height: 60,
    offsetX: 300,
    offsetY: 80,
    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
//Defines mouse over tooltip for a node
    tooltip: {
        content: 'Node1',
        //Sets to show tooltip at mouse position
          relativeMode: 'Mouse',
    },
    annotations: [{
        content: "start"
    }]
}]
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
