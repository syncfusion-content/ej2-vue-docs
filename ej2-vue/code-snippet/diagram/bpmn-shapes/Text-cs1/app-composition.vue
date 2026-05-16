<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, BpmnDiagrams } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'event1', style: { strokeWidth: 2 },
    height: 70, width: 70, offsetX: 400, offsetY: 200,
    shape: {
        type: 'Bpmn', shape: 'Event',
        event: { event: 'Start', trigger: 'None' },
    }
},
//node with target
{
    id: 'textNode1', width: 70, height: 70,
    offsetX: 400, offsetY: 400,
    annotations: [{ content: 'textNode1' }],
    shape: {
        type: 'Bpmn', shape: 'TextAnnotation',
        textAnnotation: { textAnnotationDirection: 'Auto', textAnnotationTarget: 'event1' }
    }
},
//Node without target
{
    id: 'textNode2', width: 70, height: 70,
    offsetX: 600, offsetY: 400,
    annotations: [{ content: 'textNode1' }],
    shape: {
        type: 'Bpmn', shape: 'TextAnnotation',
        textAnnotation: { textAnnotationDirection: 'Auto', textAnnotationTarget: '' }
    }
},]

const width = "100%";
const height = "600px";

provide('diagram', [BpmnDiagrams]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
