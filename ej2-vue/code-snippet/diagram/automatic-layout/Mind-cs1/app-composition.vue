<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, MindMap, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let data = [{
    id: 1,
    Label: 'StackPanel'
},
{
    id: 2,
    Label: 'Label',
    parentId: 1
},
{
    id: 3,
    Label: 'ListBox',
    parentId: 1
},
{
    id: 4,
    Label: 'StackPanel',
    parentId: 2
},
{
    id: 5,
    Label: 'Border',
    parentId: 2
},
{
    id: 6,
    Label: 'Border',
    parentId: 4
},
{
    id: 7,
    Label: 'Button',
    parentId: 4
},
{
    id: 8,
    Label: 'ContentPresenter',
    parentId: 5
},
{
    id: 9,
    Label: 'Text Block',
    parentId: 5
}];
let items = new DataManager(data, new Query().take(7));

const width = "100%";
const height = "590px";
const layout = {
    //Sets layout type
    type: 'MindMap',
    orientation: 'Horizontal'
}
//Configures data source for Diagram
const dataSourceSettings = {
    id: 'id',
    parentId: 'parentId',
    dataManager: items,
    root: String(1)
}
//Sets the default properties for nodes and connectors
const getNodeDefaults = (obj) => {
    obj.shape = {
        type: 'Text',
        content: obj.data.Label,
    };
    obj.style = {
        fill: '#6BA5D7',
        strokeColor: 'none',
        strokeWidth: 2
    };
    obj.borderColor = 'white';
    obj.backgroundColor = '#6BA5D7';
    obj.borderWidth = 1;
    obj.shape.margin = {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5
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

provide('diagram', [MindMap, DataBinding]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
