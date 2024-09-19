<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
</template>
<script>

import { DiagramComponent,AnnotationConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
     id: 'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
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



export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
           
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
