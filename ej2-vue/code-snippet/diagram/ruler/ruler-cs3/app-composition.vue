<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const width = "600px";
const height = "600px";

const arrangeTicks = (args) => {
  if (args.tickInterval % 10 === 0) {
    args.tickLength = 25;
  }
};

const nodes= [
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
    },
];

const rulerSettings = {
    showRulers: true,
    horizontalRuler: { interval: 10, segmentWidth: 50, thickness: 50,orientation: 'Horizontal',arrangeTick: arrangeTicks,  },
    verticalRuler: { interval: 20, segmentWidth: 200, thickness: 20, tickAlignment: "LeftOrTop", markerColor: 'blue', }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
