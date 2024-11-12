<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, BpmnDiagrams } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as DataObject
        shape: {
            type: 'Bpmn',
            shape: 'DataObject',
            //Sets collection as true and type as Input
            dataObject: {
                collection: true,
                type: 'Input'
            }
        },
    },
    {
        // Position of the node
        offsetX: 450,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as DataObject
        shape: {
            type: 'Bpmn',
            shape: 'DataObject',
            //Sets collection as true and type as Input
            dataObject: {
                collection: false,
                type: 'Output'
            }
        }
    },
    {
        // Position of the node
        offsetX: 650,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as DataObject
        shape: {
            type: 'Bpmn',
            shape: 'DataObject',
            //Sets collection as true and type as Input
            dataObject: {
                collection: false,
                type: 'None'
            }
        }
    }]

const width = "100%";
const height = "350px";

provide('diagram', [BpmnDiagrams]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
