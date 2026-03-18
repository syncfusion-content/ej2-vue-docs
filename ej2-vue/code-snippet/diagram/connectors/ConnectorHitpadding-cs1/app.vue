<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'
            :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, ConnectorEditing, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    // Name of the connector
    id: "connector1",
    type: "Orthogonal",
    //set hit padding
    hitPadding: 50,
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 }
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
            connectors: connectors,
            getConnectorDefaults: (connector) => {
                connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
                return connector;
            },
        }
    },
    provide: {
        diagram: [ConnectorEditing]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
