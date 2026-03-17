<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :annotationTemplate='annotationTemplate'></ejs-diagram>
    </div>
</template>
<script setup>
import { createApp } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const itemVue = createApp({}).component("nodeTemplate", {
  template: `<div><input type="button" value="Submit"></div>`,
  data() {
    return {};
  }
});

const nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the Node
    annotations: [{

    }]
}];

const connectors = [{
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 300
    },
    type: 'Orthogonal',
    // Sets the Annotation for the Connector
    annotations: [{
        height: 20
    }]
}];

const width = "750px";
const height = "350px";

const annotationTemplate = function () {
    return { template: itemVue };
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
