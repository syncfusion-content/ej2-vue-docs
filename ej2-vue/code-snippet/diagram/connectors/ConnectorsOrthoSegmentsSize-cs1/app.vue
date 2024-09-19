<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :segmentThumbSize='segmentThumbSize'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
let nodes = [{
    id: 'node1',
    offsetX: 200,
    offsetY: 200,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    
},
{
    id: 'node2',
    offsetX: 400,
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
    offsetX: 600,
    offsetY: 200,
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
        type: 'Orthogonal',
        sourceID: 'node1',
        targetID: 'node2',
        segments: [
            {
                type: 'Orthogonal',
                direction: "Right",
                length: 70
            },
            {
                type: 'Orthogonal',
                direction: "Bottom",
                length: 50
            }
        ],
        constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    },
    {
        id: 'connector2',
        type: 'Orthogonal',
        sourceID: 'node3',
        targetID: 'node4',
        segments: [
            {
                type: 'Orthogonal',
                direction: "Right",
                length: 70
            },
            {
                type: 'Orthogonal',
                direction: "Bottom",
                length: 50
            }
        ],
        constraints:ConnectorConstraints.Default & ~(ConnectorConstraints.InheritSegmentThumbSize) | ConnectorConstraints.DragSegmentThumb,
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
