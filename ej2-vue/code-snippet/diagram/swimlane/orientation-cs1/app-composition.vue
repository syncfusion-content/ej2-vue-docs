<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
  id: 'swimlane1',
  shape: {
    type: 'SwimLane',
    orientation: 'Horizontal',
    //Intialize header to swimlane
    header: {
      annotation: {
        content: 'Horizontal Swimlane',
      },
      height: 50,
      style: { fontSize: 11 },
    },
    lanes: [
      {
        id: 'stackCanvas1',
        height: 100,
        header: {
          annotation: { content: 'CUSTOMER' },
          width: 50,
          style: { fontSize: 11 },
        },
      },
    ],
    phases: [
      {
        id: 'phase1',
        offset: 150,
        addInfo: { name: 'phase1' },
        header: {
          annotation: {
            content: 'First phase',
          },
        },
      },
      {
        id: 'phase2',
        offset: 200,
        header: { annotation: { content: 'Second phase' } },
      },
    ],
    phaseSize: 40,
  },
  offsetX: 300,
  offsetY: 200,
  height: 200,
  width: 350,
},
{
  id: 'swimlane2',
  shape: {
    type: 'SwimLane',
    orientation: 'Vertical',
    //Intialize header to swimlane
    header: {
      annotation: {
        content: 'Vertical Swimlane',
      },
      height: 50,
      style: { fontSize: 11 },
    },
    lanes: [
      {
        id: 'stackCanvas1',
        height: 100,
        header: {
          annotation: { content: 'CUSTOMER' },
          width: 50,
          style: { fontSize: 11 },
        },
      },
    ],
    phases: [
      {
        id: 'phase1',
        offset: 120,
        addInfo: { name: 'phase1' },
        header: {
          annotation: {
            content: 'First phase',
          },
        },
      },
      {
        id: 'phase2',
        offset: 200,
        header: { annotation: { content: 'Second phase' } },
      },
    ],
    phaseSize: 40,
  },
  offsetX: 800,
  offsetY: 200,
  height: 200,
  width: 350,
}];
const width = "100%";
const height = "350px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
