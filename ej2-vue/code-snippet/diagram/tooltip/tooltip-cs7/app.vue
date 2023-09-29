

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'
        :tooltip='tooltip'  :constraints='constraints'></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,PortVisibility,PointPortModel,PortConstraints } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: "node1",
       // Position of the node
       offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        // Initialize port collection
        ports: [{
            // Sets the position for the port
            offset: {
                x: 0.5,
                y: 0.5
            },
            visibility: PortVisibility.Visible,
            shape: 'Circle',
            tooltip: {content: 'Port Tootip', relativeMode: 'Object', position: 'TopRight'},
            constraints: PortConstraints.Default | PortConstraints.ToolTip
        }]
    }]
    export default {
        name: 'app',
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


