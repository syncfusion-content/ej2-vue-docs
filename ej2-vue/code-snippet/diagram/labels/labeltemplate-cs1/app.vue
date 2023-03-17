

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'node1',
        // Position of the node
        offsetX: 100,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        // Sets the annotation for the Node
        annotations: [{
            // Set an template for annotation
            template: '<div><input type="button" value="Submit"></div>'
        }]
    }]
    let connectors = [{
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 400,
            y: 300
        },
        type: 'Orthogonal',
        style: {
            strokeColor: '#6BA5D7'
        },
        // Sets the Annotation for the Connector
        annotations: [{
        // Set an template for annotation
        height: 60, width: 100, offset: 0.5,
        template: '<div><input type="button" value="Submit"></div>'
        }]
    }];
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                connectors: connectors
            }
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


