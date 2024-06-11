<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";

import {
    DiagramComponent as EjsDiagram,
    LayoutAnimation,
    SelectorConstraints,
    DataBinding, HierarchicalTree
} from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
provide('diagram', [LayoutAnimation, DataBinding, HierarchicalTree]);

let data = [{
    'Id': 'parent1',
    'Name': 'Maria ',
    'Designation': 'Managing Director',
    'RatingColor': '#C34444'
},
{
    'Id': 'parent',
    'Name': ' sam',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent1',
    'RatingColor': '#C34444'
},
{
    'Id': 'parent3',
    'Name': ' sam geo',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent1',
    'RatingColor': '#C34444'
},
{
    'Id': '80',
    'Name': ' david',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent3',
    'RatingColor': '#C34444'
},
{
    'Id': '82',
    'Name': ' pirlo',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent',
    'RatingColor': '#C34444'
}];
let items = new DataManager(data, new Query().take(7));

const width = "100%";
const height = "350px";
const selectedItems = {
    constraints: ~SelectorConstraints.ResizeAll
}
const snapSettings = {
    constraints: 0
}
const layout = {
    // set enableAnimation as true
    enableAnimation: true,
    type: 'OrganizationalChart',
    margin: {
        top: 20
    }, // define the getLayoutInfo
    getLayoutInfo: (node, tree) => {
        if (!tree.hasSubTree) {
            tree.orientation = 'vertical';
            tree.type = 'alternate';
        }
    }
}
// define the dataSourceSettings
const dataSourceSettings = {
    id: 'Id',
    parentId: 'ReportingPerson',
    dataManager: items
}
// define the node defaults
const getNodeDefaults = (obj, diagram) => {
    obj.expandIcon = {
        height: 15,
        width: 15,
        shape: "Plus",
        fill: 'lightgray',
        offset: {
            x: .5,
            y: .85
        }
    }
    obj.collapseIcon.offset = {
        x: .5,
        y: .85
    }
    obj.collapseIcon.height = 15;
    obj.collapseIcon.width = 15;
    obj.collapseIcon.shape = "Minus";
    obj.height = 50;
    obj.borderColor = 'white';
    obj.backgroundColor = '#6BA5D7';
    obj.borderWidth = 1;
    obj.style = {
        fill: 'transparent',
        strokeWidth: 2
    };
    return obj;
}
// define the connector defaults
const getConnectorDefaults = (connector, diagram) => {
    connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2
    };
    connector.targetDecorator.style.fill = '#6BA5D7';
    connector.targetDecorator.style.strokeColor = '#6BA5D7';
    connector.targetDecorator.shape = 'None';
    connector.type = 'Orthogonal';
    return connector;
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>