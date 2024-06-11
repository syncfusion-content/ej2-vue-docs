<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :getNodeDefaults='getNodeDefaults'
            :connectors='connectors' :pageSettings='pageSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    id: 'connector1',
    style: { strokeColor: '#6BA5D7', fill: '#6BA5D7', strokeWidth: 2 },
    targetDecorator: { style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' } },
    sourceID: 'node1',
    targetID: 'node2',
}];

let nodes = [{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{
        content: 'Node1'
    }]
},
{
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 350,
    annotations: [{
        content: 'Node3'
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
            getNodeDefaults: (node) => {
                node.height = 100;
                node.width = 100;
                node.style.fill = '#6BA5D7';
                node.style.strokeColor = 'white';
                return node;
            },
            connectors: connectors,
            pageSettings: {
                // Sets the PageOrientation for the diagram to page
                orientation: 'Landscape',
                // Sets the Page Break for diagram
                showPageBreaks: true,
                // Defines the background color and image  of diagram
                background: {
                    color: 'grey'
                },
                // Sets the width for the Page
                width: 300,
                // Sets the height for the Page
                height: 300,
                // Sets the space to be left between an annotation and its parent node/connector
                margin: {
                    left: 10,
                    top: 10,
                    bottom: 10
                },
            }
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
