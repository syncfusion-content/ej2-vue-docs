<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' ></ejs-diagram>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { DiagramComponent as EjsDiagram, DiagramTools } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const width = "100%";
const height = "700px";

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    let drawingshape = { type: 'Basic', shape: 'Polygon' };
    //JSON to create a polygon
    let node = {
        shape: drawingshape
    };
    diagramInstance.drawingObject = node;
    //To draw an object once, activate draw once
    diagramInstance.tool = DiagramTools.DrawOnce;
    diagramInstance.dataBind();
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
