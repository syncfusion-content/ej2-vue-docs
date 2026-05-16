<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :selectedItems="selectedItems"></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, SelectorConstraints } from '@syncfusion/ej2-vue-diagrams';
const nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    height: 100,
    width: 100,
    annotations: [
      { content: 'Resize handle disabled in selector constraints' },
    ],
  },
];

const width = "100%";
const height = "700px";
const selectedItems = {
        constraints:  SelectorConstraints.All & ~SelectorConstraints.ResizeAll
    }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
