<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'
            ></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
    id: 'connector1',
    // Defines the z-index value for the connector
    zIndex: 2,
    type: 'Straight',
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 300,
        y: 200
    }
},
{
    id: 'connector2',
    type: 'Straight',
    // Defines the z-index value for the connector
    zIndex: 1,
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}
]

const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
