<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'
            :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ConnectorEditing, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
    // Name of the connector
    id: "connector1",
    type: "Orthogonal",
    //set hit padding
    hitPadding: 50,
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 }
}]

const width = "100%";
const height = "350px";

const getConnectorDefaults = (connector) => {
    connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
    return connector;
}

provide('diagram', [ConnectorEditing]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
