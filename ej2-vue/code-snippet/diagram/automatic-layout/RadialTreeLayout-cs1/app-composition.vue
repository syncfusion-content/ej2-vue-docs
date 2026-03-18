<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :snapSettings='snapSettings' :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, RadialTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let data = [{
    "Id": 1,
    "Name": "Ana Trujillo",
    "Designation": "Project Manager",
    "RatingColor": "#68C2DE"
},
{
    "Id": 2,
    "Name": "Lino Rodri",
    "Designation": "Project Manager",
    "RatingColor": "#68C2DE",
    "ReportingPerson": 1
},
{
    "Id": 3,
    "Name": "Philip Cramer",
    "Designation": "Project Manager",
    "RatingColor": "#68C2DE",
    "ReportingPerson": 1
},
{
    "Id": 4,
    "Name": "Pedro Afonso",
    "Designation": "Project Manager",
    "RatingColor": "#68C2DE",
    "ReportingPerson": 1
},
{
    "Id": 5,
    "Name": "Anto Moreno",
    "Designation": "Project Lead",
    "RatingColor": "#93B85A",
    "ReportingPerson": 1
},
{
    "Id": 6,
    "Name": "Elizabeth Roel",
    "Designation": "Project Lead",
    "RatingColor": "#93B85A",
    "ReportingPerson": 1
},
{
    "Id": 7,
    "Name": "Aria Cruz",
    "Designation": "Project Lead",
    "RatingColor": "#93B85A",
    "ReportingPerson": 1
},
{
    "Id": 8,
    "Name": "Eduardo Roel",
    "Designation": "Project Lead",
    "RatingColor": "#93B85A",
    "ReportingPerson": 1
},
{
    "Id": 9,
    "Name": "Howard Snyd",
    "Designation": "Project Lead",
    "RatingColor": "#68C2DE",
    "ReportingPerson": 1
},
{
    "Id": 10,
    "Name": "Daniel Tonini",
    "Designation": "Project Lead",
    "RatingColor": "#93B85A",
    "ReportingPerson": 1
},
{
    "Id": 11,
    "Name": "Nardo Batista",
    "Designation": "Project Lead",
    "RatingColor": "#68C2DE",
    "ReportingPerson": 1
}
];
let items = new DataManager(data, new Query().take(5));

const width = "100%";
const height = "590px";
const snapSettings = {
    constraints: 0
}
//Uses layout to auto-arrange nodes on the Diagram page
const layout = {
    //set the type as Radial Tree
    type: 'RadialTree',
    root: 'parent'
}
//Configures data source for Diagram
const dataSourceSettings = {
    id: 'Id',
    parentId: 'ReportingPerson',
    dataManager: items
}
//Sets the default properties for nodes and connectors
const getNodeDefaults = (obj, diagram) => {
    obj.height = 15;
    obj.width = 15;
    obj.borderWidth = 1;
    obj.style = {
        fill: '#6BA5D7',
        strokeWidth: 2,
        strokeColor: '#6BA5D7'
    };
    return obj;
}
const getConnectorDefaults = (connector, diagram) => {
    connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2
    };
    connector.targetDecorator.style.fill = '#6BA5D7';
    connector.targetDecorator.style.strokeColor = '#6BA5D7';
    connector.targetDecorator.shape = 'None';
    connector.type = 'Straight';
    return connector;
}

provide('diagram', [DataBinding, RadialTree]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
