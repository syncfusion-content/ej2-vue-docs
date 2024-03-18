

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,BpmnDiagrams,Diagram,BpmnGatewayModel,BpmnShapeModel } from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(BpmnDiagrams);

    Vue.use(DiagramPlugin);

    let nodes = [ {
    id: 'event1', style: { strokeWidth: 2 },
    height:70,width:70,offsetX:400,offsetY:200,
    shape: { type: 'Bpmn', shape: 'Event',
        event: { event: 'Start', trigger: 'None' },
     } as BpmnShapeModel
},
//node with target
{
    id: 'textNode1', width: 70, height: 70,
    offsetX:400,offsetY:400,
    annotations:[{content:'textNode1'}],
        shape: {
            type: 'Bpmn', shape: 'TextAnnotation',
            textAnnotation:{ textAnnotationDirection:'Auto',textAnnotationTarget:'event1'}
        } as BpmnShapeModel
},
//Node without target
{
    id: 'textNode2', width: 70, height: 70,
    offsetX:600,offsetY:400,
    annotations:[{content:'textNode1'}],
        shape: {
            type: 'Bpmn', shape: 'TextAnnotation',
            textAnnotation:{ textAnnotationDirection:'Auto',textAnnotationTarget:''}
        } as BpmnShapeModel
},]
export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
        }
    }
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


