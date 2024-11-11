<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :layout='layout'
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
}];
let items = new DataManager(data, new Query().take(7));

const width = "100%";
const height = "700px";
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
    };
    obj.style = {
        fill: 'yellow',
        strokeColor: 'yellow',
        bold: true,
        color: 'white'
    };
    obj.borderColor = 'white';
    obj.width = 100;
    obj.height = 100;
    obj.offsetX = 300;
    obj.offsetY = 200;
    obj.borderWidth = 1;
    obj.shape.margin = {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5
    };
    return obj;
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>