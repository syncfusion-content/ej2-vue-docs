<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'
            :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram, DiagramTools } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const width = "100%";
const height = "700px";
const getNodeDefaults = (obj) => {
    obj.height = 15;
    obj.width = 15;
    obj.borderWidth = 1;
    obj.style = {
        fill: '#6BA5D7',
        strokeWidth: 2,
        strokeColor: '#6BA5D7'
    };
    return obj;
}

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    let connectors = {
        id: 'connector1',
        type: 'Straight',
        segments: [{ type: "polyline" }]
    }
    diagramInstance.drawingObject = connectors;
    //To draw an object once, activate draw once
    diagramInstance.tool = DiagramTools.ContinuousDraw;
    diagramInstance.dataBind();
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
