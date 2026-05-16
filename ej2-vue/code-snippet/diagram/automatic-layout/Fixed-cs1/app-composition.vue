<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding, Rect } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let data = [{
    Name: "Steve-Ceo",
    //set the offsetX and offsetY for the parent node
    offsetX: 250,
    offsetY: 50
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
const layout = {
    type: 'HierarchicalTree',
    bounds: new Rect(0, 0, 500, 500),
    horizontalSpacing: 25,
    verticalSpacing: 30,
    horizontalAlignment: 'Left',
    verticalAlignment: 'Top'
}
const dataSourceSettings = {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items
}
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
    obj.width = 50;
    obj.height = 40;
    obj.borderColor = 'white';
    obj.backgroundColor = '#6BA5D7';
    obj.borderWidth = 1;
    obj.shape.margin = {
        left: 25,
        right: 25,
        top: 25,
        bottom: 25
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
    connector.type = 'Orthogonal';
    return connector;
}

provide('diagram', [DataBinding, HierarchicalTree]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>