<template>
    <div id="app">
        <ejs-button ref="addAnnotation" id="addAnnotation" >Add Annotation</ejs-button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const diagram = ref(null);
const addAnnotation = ref(null);
const nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
}];

const width = "750px";
const height = "350px";

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    const addAnnotationInstance = addAnnotation.value.ej2Instances;
    let annotation = [{
        id: 'label1',
        content: 'Annotation'
    }]
    //Method to add labels at run time
    addAnnotationInstance.element.onclick = () => {
        diagramInstance.addLabels(diagramInstance.nodes[0], annotation);
        diagramInstance.dataBind();
    }
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
