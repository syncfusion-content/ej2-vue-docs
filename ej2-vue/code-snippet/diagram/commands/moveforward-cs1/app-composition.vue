<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 100,
    offsetY: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
},
{
    id: 'node2',
    width: 90,
    height: 60,
    offsetX: 180,
    offsetY: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
}];

const width = "100%";
const height = "350px";

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    let selArray = [];
    selArray.push(diagramInstance.nodes[1]);
    //Selects the nodes
    diagramInstance.select(selArray);
    //Moves forward
    diagramInstance.moveForward();
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
