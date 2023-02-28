

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
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
        // Sets the annotation for the connector
        annotations: [{
            content: 'Task1',
            // Sets the margin for the content
            margin: {
                top: 10
            },
            horizontalAlignment: 'Center',
            verticalAlignment: 'Top',
            offset: {
                x: 0.5,
                y: 1
            }
        }]
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
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


