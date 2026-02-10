<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :tool='tool' :getNodeDefaults='getNodeDefaults'
            :snapSettings='snapSettings' :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, Diagram, HierarchicalTree, DataBinding, DiagramTools } from '@syncfusion/ej2-vue-diagrams';
import { DataManager } from "@syncfusion/ej2-data";

let species = [{
    'Name': 'Species',
    'fillColor': '#3DD94A'
},
{
    'Name': 'Plants',
    'Category': 'Species'
},
{
    'Name': 'Fungi',
    'Category': 'Species'
},
{
    'Name': 'Lichens',
    'Category': 'Species'
},
{
    'Name': 'Animals',
    'Category': 'Species'
},
{
    'Name': 'Mosses',
    'Category': 'Plants'
},
{
    'Name': 'Ferns',
    'Category': 'Plants'
},
{
    'Name': 'Gymnosperms',
    'Category': 'Plants'
},
{
    'Name': 'Dicotyledens',
    'Category': 'Plants'
},
{
    'Name': 'Monocotyledens',
    'Category': 'Plants'
},
{
    'Name': 'Invertebrates',
    'Category': 'Animals'
},
{
    'Name': 'Vertebrates',
    'Category': 'Animals'
},
{
    'Name': 'Insects',
    'Category': 'Invertebrates'
},
{
    'Name': 'Molluscs',
    'Category': 'Invertebrates'
},
{
    'Name': 'Crustaceans',
    'Category': 'Invertebrates'
},
{
    'Name': 'Others',
    'Category': 'Invertebrates'
},
{
    'Name': 'Fish',
    'Category': 'Vertebrates'
},
{
    'Name': 'Amphibians',
    'Category': 'Vertebrates'
},
{
    'Name': 'Reptiles',
    'Category': 'Vertebrates'
},
{
    'Name': 'Birds',
    'Category': 'Vertebrates'
},
{
    'Name': 'Mammals',
    'Category': 'Vertebrates'
}];

const width = "100%"
const height = "350px"
const getNodeDefaults = (obj) => {
    //Initialize shape
    obj.shape = {
        type: 'Basic',
        shape: 'Rectangle'
    };
    obj.style = {
        strokeWidth: 1
    };
    obj.width = 95;
    obj.height = 30;
}
const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    connector.style.strokeColor = '#4d4d4d';
    connector.targetDecorator.shape = 'None';
}
const snapSettings = {
    constraints: 0
}
const tool = DiagramTools.ZoomPan;
const layout = {
    type: 'HierarchicalTree',
    horizontalSpacing: 15,
    verticalSpacing: 50,
    margin: {
        top: 10,
        left: 10,
        right: 10,
        bottom: 0
    }
}
const dataSourceSettings = {
    id: 'Name',
    parentId: 'Category',
    dataManager: new DataManager(species),
    //binds the external data with node
    doBinding: (nodeModel, data, diagram) => {
        nodeModel.annotations = [{
            /* tslint:disable:no-string-literal */
            content: data['Name'],
            margin: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 0
            },
            style: {
                color: 'black'
            }
        }];
        /* tslint:disable:no-string-literal */
        nodeModel.style = {
            fill: '#ffeec7',
            strokeColor: '#f5d897',
            strokeWidth: 1
        };
    }
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
