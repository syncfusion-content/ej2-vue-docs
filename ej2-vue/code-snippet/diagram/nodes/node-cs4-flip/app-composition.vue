<template>
    <div id="app">
        <button @click="flipHorizontal">flipHorizontal</button>
        <button @click="flipVertical">flipVertical</button>
        <button @click="flipBoth">flipBoth</button>
        <button @click="flipNone">flipNone</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram, FlipDirection } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Flip the node in Horizontal Direction
    flip: FlipDirection.Horizontal,
    shape: {
        type: 'Basic',
        shape: 'RightTriangle',
    },
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
}];

const width = "100%";
const height = "700px";
const flipHorizontal = function () {
    //Flips the node horizontally
    diagram.value.ej2Instances.nodes[0].flip ^= FlipDirection.Horizontal;
    diagram.value.ej2Instances.dataBind();
}
const flipVertical = function () {
    //Flips the node vertically
    diagram.value.ej2Instances.nodes[0].flip ^= FlipDirection.Vertical;
    diagram.value.ej2Instances.dataBind();
}
const flipBoth = function () {
    //Flips the node horizontally and vertically
    diagram.value.ej2Instances.nodes[0].flip ^= FlipDirection.Both;
    diagram.value.ej2Instances.dataBind();
}
const flipNone = function () {
    //Flip for node is none
    diagram.value.ej2Instances.nodes[0].flip = FlipDirection.None;
    diagram.value.ej2Instances.dataBind();
}

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    diagramInstance.select([diagramInstance.nodes[0]]);
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
