<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram,AnnotationConstraints} from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 150,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the Annotation for the Node
    annotations: [{
        id: 'label1',
                content: 'Rectangle',
                tooltip: {
                    content: 'Rectangle',
                    position: 'TopRight',
                    relativeMode: 'Object',
                },
                constraints: AnnotationConstraints.Tooltip,
    }]
}];



const width = "100%";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
