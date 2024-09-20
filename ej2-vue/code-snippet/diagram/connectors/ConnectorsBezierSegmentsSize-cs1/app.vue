<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :segmentThumbSize='segmentThumbSize'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
let nodes = [{
    id: 'node1',
    offsetX: 150,
    offsetY: 150,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    
},
{
    id: 'node2',
    offsetX: 350,
    offsetY: 400,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
   
},
{
    id: 'node3',
    offsetX: 550,
    offsetY: 150,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    
},
{
    id: 'node4',
    offsetX: 800,
    offsetY: 400,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
   
}]
let connectors = [
     {
        id: 'connector1',
        type: 'Bezier',
        sourceID: 'node1',
        targetID: 'node2',
        segments: [
            {
                type: 'Bezier',
                point: { x: 200, y: 300 },
            },
            {
                type: 'Bezier',
                point: { x: 320, y: 400 }
            }
        ],
        constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    },
    {
        id: 'connector2',
        type: 'Bezier',
        sourceID: 'node3',
        targetID: 'node4',
        segments: [
            {
                type: 'Bezier',
                point: { x: 600, y: 300 },
            },
            {
                type: 'Bezier',
                point: { x: 320, y: 400 }
            }
        ],
        constraints: ConnectorConstraints.Default & ~(ConnectorConstraints.InheritSegmentThumbSize) | ConnectorConstraints.DragSegmentThumb,
        segmentThumbSize: 20
    },
];
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes:nodes,
            connectors: connectors,
            segmentThumbSize : 15
        }
    },
    provide: {
        diagram: [ConnectorEditing]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
