<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, ComplexHierarchicalTree, DataBinding, LineDistribution, ConnectionPointOrigin } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

const diagram = ref(null);
let data = [
    { "Name": "node11" },
    { "Name": "node12", "ReportingPerson": ["node114"] },
    { "Name": "node13", "ReportingPerson": ["node12"] },
    { "Name": "node14", "ReportingPerson": ["node12"] },
    { "Name": "node15", "ReportingPerson": ["node12"] },
    { "Name": "node116", "ReportingPerson": ["node22", "node12"] },
    { "Name": "node16", "ReportingPerson": [] },
    { "Name": "node18", "ReportingPerson": [] },
    { "Name": "node21" },
    { "Name": "node22", "ReportingPerson": ["node114"] },
    { "Name": "node23", "ReportingPerson": ["node22"] },
    { "Name": "node24", "ReportingPerson": ["node22"] },
    { "Name": "node25", "ReportingPerson": ["node22"] },
    { "Name": "node26", "ReportingPerson": [] },
    { "Name": "node28", "ReportingPerson": [] },
    { "Name": "node31" },
    { "Name": "node114", "ReportingPerson": ["node11", "node21", "node31"] }
];
let items = new DataManager(data, new Query().take(7));
const width = "100%";
const height = "590px";
//Uses layout to auto-arrange nodes on the Diagram page
const layout = {
    type: 'ComplexHierarchicalTree',
    connectionPointOrigin: ConnectionPointOrigin.DifferentPoint,
    horizontalSpacing: 40, verticalSpacing: 40, horizontalAlignment: "Left", verticalAlignment: "Top",
    margin: { left: 0, right: 0, top: 0, bottom: 0 },
    orientation: 'TopToBottom'
}
const dataSourceSettings = {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items
}
const getNodeDefaults = (obj) => {
    obj.width = 40; obj.height = 40;
    obj.shape = { type: 'Basic', shape: 'Rectangle', cornerRadius: 7 };
    obj.style = { fill: '#6BA5D7', strokeColor: 'none', strokeWidth: 2 };
    obj.borderWidth = 1;
    obj.backgroundColor = '#6BA5D7';
    return obj;
}
const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    connector.cornerRadius = 7;
    connector.targetDecorator.height = 7;
    connector.targetDecorator.width = 7;
    connector.style = { strokeColor: '#6BA5D7', strokeWidth: 1 };
    connector.targetDecorator.style.fill = '#6BA5D7';
    connector.targetDecorator.style.strokeColor = '#6BA5D7';
    return connector;
}

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    diagramInstance.fitToPage({
        mode: 'Width',
    });
})
provide('diagram', [DataBinding, ComplexHierarchicalTree, LineDistribution]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
