<template>
    <div id="app">
        <button @click="updatePhase">updatePhase</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
const diagram = ref(null);
const nodes = [{
    id: 'swimlane',
    shape: {
    type: 'SwimLane',
    orientation: 'Horizontal',
    //Intialize header to swimlane
    header: {
      annotation: {
        content: 'ONLINE PURCHASE STATUS',
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
            style: { fill: 'yellow', color: 'red' },
          },
        },
      },
      {
        id: 'phase2',
        offset: 200,
        header: { annotation: { content: 'Second phase' } },
        style: { fill: 'violet' },
      },
    ],
    phaseSize: 40,
  },
  offsetX: 300,
  offsetY: 200,
  height: 200,
  width: 350,
}];

const width = "100%";
const height = "350px";

const updatePhase = () => {
    const diagramInstance = diagram.value.ej2Instances;
    const swimlane = diagramInstance.nameTable['swimlane'];
    const phase = swimlane.shape.phases[0];
    phase.header.style.fill = 'orange';
    phase.header.annotation.content = 'phase updated';
    diagramInstance.dataBind();
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
