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
  //Sets type as Bpmn and shape as activity
  shape: {
    type: 'Bpmn',
    shape: 'Activity',
    //Sets activity as SubProcess
    activity: {
      activity: 'SubProcess',
      //Sets the collapsed as true and type as Event
      subProcess: {
        collapsed: false,
        type: 'Event',
        //Sets event as Start and trigger as Message
        events: [
          {
            id: 'event',
            event: 'Start',
            trigger: 'Message',
            offset: { x: 0.5, y: 0 },
          },
        ],
      },
    },
  },
}]

const width = "100%"
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
