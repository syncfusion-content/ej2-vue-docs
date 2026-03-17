<template>
    <div id="app">

        <label for="orientation">Orientation : </label>
        <select id="orientation" ref="orientationVal" v-on:change="onOrientationChange()">
            <option value="TopToBottom">TopToBottom</option>
            <option value="BottomToTop">BottomToTop</option>
            <option value="LeftToRight">LeftToRight</option>
            <option value="RightToLeft">RightToLeft</option>
        </select>
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height'
            :dataSourceSettings='dataSourceSettings' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'></ejs-diagram>

    </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let diagramInstance;
let diagramObj = ref(null);
let orientationVal = ref(null);

//Initialize data
let data = [
    { Name: "Steve-Ceo" },
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "Peter-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager" },
    { Name: "Mary-CSE", ReportingPerson: "Peter-Manager" },
    { Name: "Jim-CSE", ReportingPerson: "Kevin-Manager" },
    { Name: "Martin-CSE ", ReportingPerson: "Kevin-Manager" },
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
    //Sets layout alignment
    horizontalAlignment: 'Left',
    verticalAlignment: 'Top',
    orientation: 'TopToBottom',
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

const onOrientationChange = () => {
    let orientation = orientationVal.value.value;
    diagramInstance.layout.orientation = orientation;
    diagramInstance.dataBind();
}

onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
})

provide('diagram', [HierarchicalTree, DataBinding]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>