<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, BpmnDiagrams } from '@syncfusion/ej2-vue-diagrams';

const nodes = [ {
      // Position of the node
      offsetX: 150,
      offsetY: 150,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as Gateway
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as None
        gateway: {
          type: 'None',
        },
      },
    },
    {
      // Position of the node
      offsetX: 350,
      offsetY: 150,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Inclusive
        gateway: {
          type: 'Inclusive',
        },
      },
    },
    {
      // Position of the node
      offsetX: 550,
      offsetY: 150,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Exclusive
        gateway: {
          type: 'Exclusive',
        },
      },
    },
    {
      // Position of the node
      offsetX: 150,
      offsetY: 350,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Parallel
        gateway: {
          type: 'Parallel',
        },
      },
    },
    {
      // Position of the node
      offsetX: 350,
      offsetY: 350,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as ParallelEventBased
        gateway: {
          type: 'ParallelEventBased',
        },
      },
    },
    {
      // Position of the node
      offsetX: 550,
      offsetY: 350,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as EventBased
        gateway: {
          type: 'EventBased',
        },
      },
    },
    {
      // Position of the node
      offsetX: 150,
      offsetY: 550,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as ExclusiveEventBased
        gateway: {
          type: 'ExclusiveEventBased',
        },
      },
    },
    {
      // Position of the node
      offsetX: 350,
      offsetY: 550,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Complex
        gateway: {
          type: 'Complex',
        },
      },
    }]

const width = "100%";
const height = "600px";

provide('diagram', [BpmnDiagrams]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
