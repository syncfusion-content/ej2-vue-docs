<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
let connectors = [{
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

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    diagramInstance.connectors[0].style.strokeColor = '#6BA5D7';
    diagramInstance.connectors[0].style.fill = '#6BA5D7';
    diagramInstance.connectors[0].style.strokeWidth = 2;
    diagramInstance.connectors[0].targetDecorator.style.fill = '#6BA5D7';
    diagramInstance.connectors[0].targetDecorator.style.strokeColor = '#6BA5D7';
    diagramInstance.connectors[0].sourcePoint.x = 150;
    diagramInstance.connectors[0].targetPoint.x = 150;
    diagramInstance.dataBind();
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
