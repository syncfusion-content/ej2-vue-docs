<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
const nodes = [
    {
        id: "node1",
        height: 60,
        width: 100,
        offsetX: 200,
        offsetY: 100,
        shape: { type: 'Flow', shape: 'Terminator'},
        style:{ fill:'red', strokeColor:'green', strokeWidth:5, strokeDashArray:'2,2' },
        borderWidth: 10,
        borderColor: 'orange',
        annotations: [{content: 'Start '}]
    }
];

const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
