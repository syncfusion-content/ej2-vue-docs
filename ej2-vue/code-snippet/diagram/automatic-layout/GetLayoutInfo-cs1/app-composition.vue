<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :snapSettings='snapSettings' :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

provide('diagram', [DataBinding, HierarchicalTree]);
let data = [{
    Id: 1,
    Role: "General Manager"
},
{
    Id: 2,
    Role: "Assistant Manager",
    Team: 1
},
{
    Id: 3,
    Role: "Human Resource Manager",
    Team: 1
},
{
    Id: 4,
    Role: "Design Manager",
    Team: 1
},
{
    Id: 5,
    Role: "Operation Manager",
    Team: 1
},
{
    Id: 6,
    Role: "Marketing Manager",
    Team: 1
}];
let items = new DataManager(data, new Query().take(7));

const width = "100%";
const height = "590px";
//Uses layout to auto-arrange nodes on the Diagram page
const snapSettings = {
    constraints: 0
};
//Uses layout to auto-arrange nodes on the Diagram page
const layout = {
    //Sets layout type
    type: 'OrganizationalChart',
    getLayoutInfo: (node, options) => {
        if (!options.hasSubTree) {
            options.type = 'Center';
            options.orientation = 'Horizontal';
        }
    }
}
//Configures data source for Diagram
const dataSourceSettings = {
    id: 'Id',
    parentId: 'Team',
    dataManager: items
}
//Sets the default properties for nodes and connectors
const getNodeDefaults = (obj, diagram) => {
    obj.width = 150;
    obj.height = 50;
    obj.style.fill = '#6BA5D7';
    obj.annotations = [{
        content: obj.data['Role'],
        style: {
            color: 'white'
        }
    }];
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
    connector.targetDecorator.shape = 'None';
    connector.type = 'Orthogonal';
    return connector;
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
