<template>
    <div id="app">
        <button @click="addMember">addMember</button>
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagramObj = ref(null);
const nodes = [{
    id: 'node1',
    offsetX: 150,
    offsetY: 150,
    style: {
        fill: '#26A0DA',
    },
    shape: {
        type: 'UmlClassifier',
        enumerationShape: {
            name: 'AccountType',
            members: [
                {
                    name: 'Checking Account',
                },
            ]
        },
        classifier: 'Enumeration'
    },
}]

const width = "100%";
const height = "450px";
const addMember = function () {
    let diagram = diagramObj.value.ej2Instances;
    let node = diagram.nodes[0];
    let members = { name: 'Checking new', style: { color: "red", }, isSeparator: true };
    diagram.addChildToUmlNode(node, members, "Member");
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
