<template>
    <div id="app">

        <ejs-diagram id="diagram" :width='width' :height='height' :dataSourceSettings='dataSourceSettings'
            :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :setNodeTemplate="setNodeTemplate"></ejs-diagram>

    </div>
</template>

<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding, ImageElement, StackPanel, TextElement } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";


//Initialize data
let data = [
    {
        Name: 'Steve-Ceo',
    },
    {
        Name: 'Kevin-Manager',
        ReportingPerson: 'Steve-Ceo',
        color: 'darkcyan',
    },
    {
        Name: 'Peter-Manager',
        ReportingPerson: 'Steve-Ceo',
        color: 'white',
    },
    {
        Name: 'John- Manager',
        ReportingPerson: 'Peter-Manager',
        color: 'darkcyan',
    },
    {
        Name: 'Mary-CSE ',
        ReportingPerson: 'Peter-Manager',
        color: 'white',
    },
    {
        Name: 'Jim-CSE ',
        ReportingPerson: 'Kevin-Manager',
        color: 'darkcyan',
    },
    {
        Name: 'Martin-CSE',
        ReportingPerson: 'Kevin-Manager',
        color: 'white',
    },
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
    node.width = 200; node.height = 60;
    return node;
}
const getConnectorDefaults = (connector) => {
    connector.targetDecorator.shape = 'None';
    connector.type = 'Orthogonal';
    return connector;
}


const setNodeTemplate = (node) => {

    // Create an outer StackPanel as container to contain image and text elements
    let container = new StackPanel();
    container.width = 200;
    container.height = 60;
    container.cornerRadius = 10;
    container.style.fill = 'skyblue';
    container.horizontalAlignment = 'Left';
    container.orientation = 'Horizontal';
    container.id = node.data.Name + '_StackContainter';

    // Create an inner image element to displaying image
    let innerContent = new ImageElement();
    innerContent.id = node.data.Name + '_innerContent';
    innerContent.width = 40;
    innerContent.height = 40;
    innerContent.margin.left = 20;
    innerContent.style.fill = 'lightgrey';

    // Create a inner text element for displaying employee details
    let text = new TextElement();
    text.content = 'Name: ' + node.data.Name;
    text.margin = { left: 10, top: 5 };
    text.id = node.data.Name + '_textContent';
    text.style.fill = 'green';
    text.style.color = 'white';
    if (node.data.Name === 'Steve-Ceo') {
        text.style.fill = 'black';
        text.style.color = 'white';
    }

    // Add inner image and text element to the outer StackPanel
    container.children = [innerContent, text];
    return container;
};
provide('diagram', [HierarchicalTree, DataBinding]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>