<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    id: "connector1",
    // Define the type of the segment
    type: 'Orthogonal',
    segments: [{
        type: 'Orthogonal'
    }],
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
    maxSegmentThumb: 3,
    constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb
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
