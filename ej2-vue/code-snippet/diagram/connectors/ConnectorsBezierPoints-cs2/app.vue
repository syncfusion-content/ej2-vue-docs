<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent,ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    id: 'connector3',
    type: 'Bezier',
    segments: [{
        type: 'Bezier',
        // First control point: an absolute position from the page origin
        point1: {
            x: 100,
            y: 100
        },
        // Second control point: an absolute position from the page origin
        point2: {
            x: 200,
            y: 200
        }
    }],
    sourcePoint: {
        x: 100,
        y: 200
    },
    targetPoint: {
        x: 200,
        y: 100
    },
},]
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors
        }
    },
    provide: {
      diagram: [ConnectorEditing]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
