<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, BpmnDiagrams ,NodeConstraints} from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  id: 'start',
  height: 50,
  width: 50,
  margin: { left: 50, top: 50 },
  shape: { type: 'Bpmn', shape: 'Event' },
},
{
  id: 'subProcess',
  width: 520,
  height: 250,
  offsetX: 355,
  offsetY: 230,
  constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
  shape: {
    shape: 'Activity',
    type: 'Bpmn',
    activity: {
      activity: 'SubProcess',
      subProcess: {
        collapsed: false,
        processes: ['start'],
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
