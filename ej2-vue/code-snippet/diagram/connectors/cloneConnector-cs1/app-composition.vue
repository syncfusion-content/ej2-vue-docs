<template>
    <div id="app">
        <button @click="clone">clone</button>
        <ejs-diagram ref="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const connectors = [{
    // Name of the connector
    id: "connector1",
    // Sets source and target points
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}]

const width = "100%";
const height = "350px";
const clone = function () {
    let diagram = diagram.value.ej2Instances;
    diagram.copy();
    diagram.paste();
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
