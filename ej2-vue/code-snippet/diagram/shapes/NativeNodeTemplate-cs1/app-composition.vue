<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :nodeTemplate="nodeTemplate"></ejs-diagram>
    </div>
</template>

<script setup>
import { createApp } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

// Template for the SVG Shape.
const SVGTemplate = createApp({}).component("nodeTemplate", {
    template: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="#007BFF"/>
                <path d="M6.5 7.5L17.5 16.5L12 21V3L17.5 7.5L6.5 16.5" fill="none" stroke="white" stroke-width="2"/>
              </svg>`,
    data() {
      return {};
    }
});

const nodes = [{
  id: 'node1',
  offsetX: 250,
  offsetY: 250,
  width: 100,
  height: 100,
  shape: {
    type: 'Native',
    scale: 'Stretch'
  }
}];

const nodeTemplate = function () {
  return { template: SVGTemplate };
}
const width = "750px";
const height = "500px";
</script>