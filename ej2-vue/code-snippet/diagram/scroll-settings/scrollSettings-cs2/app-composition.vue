<template>
    <div id="app">
        <ejs-button ref="zoomIn" id="zoomIn" >Zoom In</ejs-button>
        <ejs-button ref="zoomOut" id="zoomOut" >Zoom Out</ejs-button>
        <ejs-diagram ref="diagram" id="diagram" :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const nodes = [{
    offsetX: 300,
    offsetY: 300,
}];

const diagram = ref(null);
const zoomIn = ref(null);
const zoomOut = ref(null);
const width = "750px";
const height = "350px";
const rulerSettings = { showRulers: true };
const scrollSettings = { scrollLimit: 'Infinity' };

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    const zoomInInstance = zoomIn.value.ej2Instances;
    const zoomOutInstance = zoomOut.value.ej2Instances;
    zoomInInstance.element.onclick = () => {
        let zoomOptions = {
          type: 'ZoomIn',
          zoomFactor: 0.2,
          focusPoint: { x: 0.5, y: 0.5 },
        };
        diagramInstance.zoomTo(zoomOptions);
        diagramInstance.dataBind();
    }
    zoomOutInstance.element.onclick = () => {
        let zoomOptions = {
          type: 'ZoomOut',
          zoomFactor: 0.2,
          focusPoint: { x: 0.5, y: 0.5 },
        };
        diagramInstance.zoomTo(zoomOptions);
        diagramInstance.dataBind();
    }
});

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
