

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' ></ejs-diagram>
    </div>
</template>
<script>
    import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
    let nodes = [
        {
            id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 50,
            annotations: [{
                id: 'label1',
                content: 'Start'
            }],
            shape: { type: 'Flow', shape: 'Terminator'}
        },
        {
            id: 'Init', width: 140, height: 50, offsetX: 300, offsetY: 140,
            shape: { type: 'Flow', shape: 'Process' },
            annotations: [{ content: 'var i = 0;' }]
        }
    ];
    let connectors = [
        {
            id: "connector1",
            sourceID: "Start",
            targetID: "Init"
        }
    ];
    export default {
    components: {
        'ejs-diagram': DiagramComponent
    },
    name: 'app',
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
    @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


