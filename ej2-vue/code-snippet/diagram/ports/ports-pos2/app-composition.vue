<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram, PortVisibility } from '@syncfusion/ej2-vue-diagrams';


const diagram = ref(null);

const nodes = [
  {
    id: 'node1',
    offsetX: 100,
    offsetY: 100,
    width: 100,
    height: 100,
    annotations: [{ content: 'margin:{left:50}' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 1, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Left',
        verticalAlignment: 'Top',
        margin: { left: 50 },
      },
    ],
  },
];

const width = "100%";
const height = "350px";


</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
