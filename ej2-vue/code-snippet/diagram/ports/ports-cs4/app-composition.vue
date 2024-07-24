<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, PortVisibility,PortConnectionDirection } from '@syncfusion/ej2-vue-diagrams';

let port1 = {
    style: {
        strokeColor: 'black',
        fill: 'yellow'
    }
}
port1.shape = 'Square';
port1.visibility = PortVisibility.Visible
 // Specify the connection Direction
port1.connectionDirection='Right',
port1.id = 'port1';
port1.offset = {
    x: 0.5,
    y: 0.5
};
let port2 = {
    style: {
        strokeColor: 'black',
        fill: 'yellow'
    }
};
port2.offset = {
    x: 0,
    y: 0
};
port2.id = 'port2';
port2.visibility = PortVisibility.Visible

 // Specify the connection Direction
port1.connectionDirection='Left',
port2.shape = 'Square';

let nodes = [{
    id: 'node',
    width: 100,
    height: 100,
    offsetX: 600,
    offsetY: 300,
    ports: [port1]
},
{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 800,
    offsetY: 200,
    ports: [port2]
},
];
let connectors = [{
    id: "connector1",
    type: 'Orthogonal',
    sourceID: 'node',
    targetID: 'node1',
    sourcePortID: 'port1',
    targetPortID: 'port2'
}]

const width = "100%";
const height = "350px";
const getNodeDefaults = (node) => {
    node.height = 100;
    node.width = 100;
    node.style.fill = '#6BA5D7';
    node.style.strokeColor = 'white';
    return node;
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
