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
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
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
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
