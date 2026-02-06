<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { DataManager } from "@syncfusion/ej2-data";

let localdata = [
    {
        Name: "Elizabeth",
        Role: "Director"
    },
    {
        Name: "Christina",
        ReportingPerson: "Elizabeth",
        Role: "Manager"
    },
    {
        Name: "Yoshi",
        ReportingPerson: "Christina",
        Role: "Lead"
    },
    {
        Name: "Philip",
        ReportingPerson: "Christina",
        Role: "Lead"
    },
    {
        Name: "Yang",
        ReportingPerson: "Elizabeth",
        Role: "Manager"
    },
    {
        Name: "Roland",
        ReportingPerson: "Yang",
        Role: "Lead"
    },
    {
        Name: "Yvonne",
        ReportingPerson: "Yang",
        Role: "Lead"
    }
];

const width = "100%";
const height = "350px";
const getNodeDefaults = (node) => {
    node.height = 60;
    node.width = 100;
    return node;
}

const getConnectorDefaults = (obj) => {
    obj.type = 'Orthogonal';
    return obj;
}

const layout = {
    type: "OrganizationalChart",
}

const dataSourceSettings = {
    id: 'Name', parentId: 'ReportingPerson',
    dataManager: new DataManager(localdata),
    doBinding: (nodeModel, localdata, diagram) => {
        nodeModel.shape = {
            type: "Text",
            content: (localdata).Role,
        }
    }
}

provide('diagram', [HierarchicalTree, DataBinding]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
