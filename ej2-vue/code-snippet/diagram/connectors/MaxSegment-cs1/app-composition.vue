<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, ConnectorConstraints,ConnectorEditing} from '@syncfusion/ej2-vue-diagrams';
import { provide } from "vue";
const connectors = [{id: "connector1",
        // Define the type of the segment
        type: 'Orthogonal',
        segments: [{
            type: 'Orthogonal'
        }],
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        },
        maxSegmentThumb: 3,
        constraints:ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    },]
provide('diagram', [ConnectorEditing]);
const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
