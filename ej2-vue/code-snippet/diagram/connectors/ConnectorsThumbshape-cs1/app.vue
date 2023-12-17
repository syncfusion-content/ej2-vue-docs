

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height'
        :connectors='connectors'
        :getConnectorDefaults='getConnectorDefaults' >
        </ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,ConnectorConstraints,ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(ConnectorEditing);
    Vue.use(DiagramPlugin);
    let connectors = [{
    id : 'connector',
    // Define the type of the segment
    type : 'Orthogonal',
    sourcePoint : { x: 250, y: 250 },
    targetPoint : { x: 350, y: 350 },
    segments : [
    {
        type: 'Orthogonal',
        // Defines the direction for the segment lines
        direction: "Right",
        // Defines the length for the segment lines
        length: 70
    },
    {
        type: 'Orthogonal',
        direction: "Bottom",
        length: 20
        }],
    }]
    export default {
        name: 'app',
        data() {
            return {
                width: "900px",
                height: "500px",
                connectors: [connectors],
                getConnectorDefaults:(connector)=>{
                connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
                }
            }
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


