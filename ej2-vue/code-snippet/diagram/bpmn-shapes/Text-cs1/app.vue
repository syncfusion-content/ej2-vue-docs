<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, BpmnDiagrams } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
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
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
        }
    },
    provide: {
        diagram: [BpmnDiagrams]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
