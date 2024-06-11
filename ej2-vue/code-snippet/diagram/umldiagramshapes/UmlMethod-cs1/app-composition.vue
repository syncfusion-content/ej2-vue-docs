<template>
    <div id="app">
        <button @click="addMethod">addMethod</button>
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagramObj = ref(null);
let nodes = [{
    id: 'node1',
    offsetX: 150,
    offsetY: 150,
    style: {
        fill: '#26A0DA',
    },
    shape: {
        type: 'UmlClassifier',
        classShape: {
            attributes: [
                { name: 'accepted', type: 'Date', },
            ],
            methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
            name: 'Patient'
        },
        classifier: 'Class'
    },
}]

const width = "100%";
const height = "450px";

const addMethod = function () {
    let diagram = diagramObj.value.ej2Instances;
    let node = diagram.nodes[0];
    let methods = {
        name: 'getHistory',
        style: { color: 'red' },
        parameters: [{ name: 'Date', style: {} }],
        type: 'History',
    };
    diagram.addChildToUmlNode(node, methods, 'Method');
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
