<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'
            :getConnectorDefaults='getConnectorDefaults' :segmentThumbShape="segmentThumbShape">
        </ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    id: 'connector',
    // Define the type of the segment
    type: 'Orthogonal',
    sourcePoint: { x: 250, y: 250 },
    targetPoint: { x: 350, y: 350 },
    segments: [
        {
            type: 'Orthogonal',
            // Defines the direction for the segment lines
            direction: "Right",
            // Defines the length for the segment lines
            length: 70
        },
        {
            type: 'Orthogonal',
            direction: "Bottom",
            length: 20
        }],
}]

const width = "900px";
const height = "500px";
const segmentThumbShape = 'Arrow';
const getConnectorDefaults = (connector) => {
    connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
}

provide('diagram', [ConnectorEditing]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
