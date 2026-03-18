<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
    id: "connector1",
    //Define connector start and end points
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    type: "Straight",
    shape: {
        type: "UmlClassifier",
        relationship: "Association",
        //Define type of association
        association: "BiDirectional"
    }
},
{
    id: 'connector2',
    //Define connector start and end points
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 400, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Association',
      associationType: 'BiDirectional',
    },
  }]

const width = "100%";
const height = "600px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
