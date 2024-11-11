<template>
    <div id="app">
        <button @click="drag">drag</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
    // Name of the connector
    id: "connector1",
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
    
}
]
const width = "100%";
const height = "350px";
const drag = function () {
      const diagramInstance = diagram.value.ej2Instances;
     let connector= diagramInstance.connectors[0];
     diagramInstance.drag(connector, 20, 20);
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>