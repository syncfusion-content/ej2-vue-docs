<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ConnectorEditing, ConnectorConstraints, PortVisibility, ControlPointsVisibility } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'Start',
    offsetX: 250,
    offsetY: 150,
    annotations: [{ content: 'Start' }],
    ports: [{
        id: 'StartPort',
        visibility: PortVisibility.Visible,
        shape: 'Circle',
        offset: { x: 1, y: 0.5 },
        style: { strokeColor: '#366F8C', fill: '#366F8C' }
    }]
},
{
    id: 'End',
    offsetX: 450,
    offsetY: 200,
    annotations: [{ content: 'End' }],
    ports: [{
        id: 'EndPort',
        visibility: PortVisibility.Visible,
        shape: 'Circle',
        offset: { x: 0, y: 0.5 },
        style: { strokeColor: '#366F8C', fill: '#366F8C' }
    }]
}];
const connectors = [{
    id: "connector1",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: { shape: 'None' },
    // ID of the source and target nodes
    sourceID: "Start",
    targetID: "End",
    type: 'Bezier',
    // Configuring settings for bezier interactions
    bezierSettings: { controlPointsVisibility: ControlPointsVisibility.Source | ControlPointsVisibility.Target }
}];

const width = "100%";
const height = "600px";
const getNodeDefaults = (node) => {
    node.height = 100;
    node.width = 100;
    node.shape = { type: 'Basic', shape: 'Rectangle' };
    node.style.fill = '#6BA5D7';
    node.style.strokeColor = 'white';
    return node;
}

const getConnectorDefaults = (connector) => {
    connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
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
