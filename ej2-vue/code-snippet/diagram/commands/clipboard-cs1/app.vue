<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 100,
    offsetY: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
},
{
    id: 'node2',
    width: 90,
    height: 60,
    offsetX: 240,
    offsetY: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
}
];
let connectors = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2,
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }
}]
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
            connectors: connectors
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        diagramInstance.select([diagramInstance.nodes[0], diagramInstance.nodes[1], diagramInstance.connectors[0]]);
        //copies the selected nodes
        diagramInstance.copy();
        //pastes the copied objects
        diagramInstance.paste(diagramInstance.copy());
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
