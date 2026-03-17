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
      offsetX: 350,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
          activity: 'SubProcess',
          //Sets the collapsed as true and type as Event
          subProcess: {
            collapsed: true,
            type: 'Transaction',
            //Sets transaction
            transaction: {
              success: {
                id: 'success',
                event: 'Start',
                trigger: 'None',
              },
              failure: {
                id: 'failure',
                event: 'ThrowingIntermediate',
                trigger: 'Error',
              },
              cancel: {
                id: 'cancel',
                event: 'End',
                trigger: 'Cancel',
              },
            },
          },
        },
      },
    }]

const width = "100%";
const height = "600px";

provide('diagram', [BpmnDiagrams]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
