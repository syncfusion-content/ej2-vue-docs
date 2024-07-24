<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>


<script>
import { DiagramComponent, PortVisibility, PortConnectionDirection } from '@syncfusion/ej2-vue-diagrams';

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        let port1 = {
            id: 'port1',
            style: {
                strokeColor: 'black',
                fill: 'yellow'
            },
            shape: 'Square',
            visibility: PortVisibility.Visible,
            connectionDirection:'Right',
            offset: {
                x: 0.5,
                y: 0.5
            }
        };

        let port2 = {
            id: 'port2',
            style: {
                strokeColor: 'black',
                fill: 'yellow'
            },
            shape: 'Square',
            visibility: PortVisibility.Visible,
            connectionDirection:'Top',
            offset: {
                x: 0,
                y: 0
            }
        };

        let nodes = [
            {
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
            }
        ];

        let connectors = [
            {
                id: "connector1",
                type: 'Orthogonal',
                sourceID: 'node',
                targetID: 'node1',
                sourcePortID: 'port1',
                targetPortID: 'port2'
            }
        ];

        return {
            width: "100%",
            height: "650px",
            nodes: nodes,
            connectors: connectors
        };
    },
    methods: {
        getNodeDefaults(node) {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
