

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,PortVisibility,PointPortModel } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
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
        // Initialize port collection
        ports: [{
                id: 'port1',
                offset: {
                    x: 0,
                    y: 0.5
                },
                visibility: PortVisibility.Visible
            },
            {
                id: 'port2',
                offset: {
                    x: 1,
                    y: 0.5
                },
                visibility: PortVisibility.Visible
            },
            {
                id: 'port3',
                offset: {
                    x: 0.5,
                    y: 0
                },
                visibility: PortVisibility.Visible
            },
            {
                id: 'port4',
                offset: {
                    x: 0.5,
                    y: 1
                },
                visibility: PortVisibility.Visible
            }
        ]
    }]
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
            }
        }
        mounted: function() {
            let ports: PointPortModel[] = [{
                id: 'port1',
            }, {
                id: 'port2',
            }, {
                id: 'port3',
            }, {
                id: 'port4',
            }]
            let diagramInstance: Diagram;
            let diagramObj: any = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            // Adds to the Diagram
            diagramInstance.removePorts(diagramInstance.nodes[0], ports);
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


