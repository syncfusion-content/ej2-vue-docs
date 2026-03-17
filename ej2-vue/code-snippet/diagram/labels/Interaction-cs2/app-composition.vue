<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, AnnotationConstraints } from '@syncfusion/ej2-vue-diagrams';

let connectors = [
    {
        id: 'connector2',
        type: 'Orthogonal',
        sourcePoint: { x: 200, y: 200 },
        targetPoint: { x: 300, y: 300 },
        annotations: [
            {
                content: 'connector1', offset: 0.5,
                //Enables drag constraints for a connector.
                constraints: AnnotationConstraints.Interaction | AnnotationConstraints.Drag,
                //Set drag limit for a connector annotation.
                dragLimit: { left: 20, right: 20, top: 20, bottom: 20 }
            }
        ],
    }
];

const width = "750px";
const height = "600px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
