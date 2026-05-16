<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :dataSourceSettings='dataSourceSettings'
            :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
            :layout='layout'></ejs-diagram>
    </div>
</template>

<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

//Initialize data
let data = [
    {
        Name: "Steve-Ceo"
    },
    {
        Name: "Kevin-Manager",
        ReportingPerson: "Steve-Ceo"
    },
    {
        Name: "Peter-Manager",
        ReportingPerson: "Steve-Ceo"
    },
    {
        Name: "John- Manager",
        ReportingPerson: "Peter-Manager"
    },
    {
        Name: "Mary-CSE ",
        ReportingPerson: "Peter-Manager"
    },
    {
        Name: "Jim-CSE ",
        ReportingPerson: "Kevin-Manager"
    },
    {
        Name: "Martin-CSE",
        ReportingPerson: "Kevin-Manager"
    }
];
let items = new DataManager(data, new Query().take(7));

const width = "1000px";
const height = "590px";

//Configures data source for Diagram
const dataSourceSettings = {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items
}
//Uses layout to auto-arrange nodes on the Diagram page
const layout = {
    //Sets layout type
    type: 'HierarchicalTree',
}

//Sets the default properties for nodes and connectors
const getNodeDefaults = (node) => {
    node.annotations = [{ content: node.data.Name }];
    node.width = 100; node.height = 40;
    return node;
}
const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    return connector;
}

provide('diagram', [HierarchicalTree, DataBinding]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>