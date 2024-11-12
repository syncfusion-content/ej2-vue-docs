<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the connector
    annotations: [{
        content: 'Task1',
        // Sets the margin for the content
        margin: {
            top: 10
        },
        horizontalAlignment: 'Center',
        verticalAlignment: 'Top',
        offset: {
            x: 0.5,
            y: 1
        }
    }]
}];

const connectors = [{
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 500, y: 300 },
    type: 'Orthogonal',
    //Path annotation offset
    annotations: [
        {
        content: 'annotation',
        offset: 0.2,
        margin: { left: 40 },
      },
    ],
}]

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
