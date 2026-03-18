<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: "Patient",
    //Position of the node
    offsetX: 200,
    offsetY: 200,
    style: {
        fill: '#26A0DA',
    },
    shape: {
        type: "UmlClassifier",
        //Define class object
        classShape: {
            name: "Patient",
            //Define class attributes
            attributes: [{ name: "accepted", type: "Date" }],
            //Define class methods
            methods: [{ name: "getHistory", type: "getHistory" }]
        },
        classifier: "Class"
    } as UmlClassifierShapeModel
}]

const width = "100%";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
