

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
        {
            id: "node1",
            height: 100,
            width: 100,
            offsetX: 200,
            offsetY: 100,
        },
        {
            id: "node2",
            height: 100,
            width: 100,
            offsetX: 200,
            offsetY: 300,
        }
    ];
    let connectors = [
        {
            id: "connector1",
            sourceID: "node1",
            targetID: "node2"
        },
    ]
    export default {
    name: 'app'
        data () {
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


