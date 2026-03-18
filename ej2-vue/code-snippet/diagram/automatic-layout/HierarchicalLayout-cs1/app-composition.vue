<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

provide('diagram', [DataBinding, HierarchicalTree]);

let data = [{
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
}];
let items = new DataManager(data, new Query().take(7));

const width = "100%";
const height = "350px";
//Uses layout to auto-arrange nodes on the Diagram page
const layout = {
    //Sets layout type
    type: 'HierarchicalTree'
};
const dataSourceSettings = {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items
};
const getNodeDefaults = (obj) => {
    obj.shape = {
        type: 'Text',
        content: obj.data.Name
    };
    obj.style = {
        fill: 'None',
        strokeColor: 'none',
        strokeWidth: 2,
        bold: true,
        color: 'white'
    };
    obj.borderColor = 'white';
    obj.width = 100;
    obj.height = 40;
    obj.backgroundColor = '#6BA5D7';
    obj.borderWidth = 1;
    obj.shape.margin = {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5
    };
    return obj;
};
const getConnectorDefaults = (connector) => {
    connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2
    };
    connector.targetDecorator.style.fill = '#6BA5D7';
    connector.targetDecorator.style.strokeColor = '#6BA5D7';
    connector.type = 'Orthogonal';
    return connector;
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>