<template>
    <div id="app">
         <ejs-button v-on:click='changeAppearance'>change Appearance</ejs-button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram, PortVisibility } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

let diagramInstance;
const diagram = ref(null);

const nodes = [{
  offsetX: 250,
  offsetY: 250,
  width: 100,
  height: 100,
  ports: [
    {
      offset: { x: 1, y: 0.5 },
      visibility: PortVisibility.Visible,
      style: {
        fill: "red",
        strokeWidth: 2,
        strokeColor: "black",
        opacity: 0.7,
        strokeDashArray: "2 2",
      },
      width: 12,
      height: 12,
      shape: "Circle",
    },
  ],
}];

const width = "100%";
const height = "350px";

const changeAppearance = function() {
    let port = diagramInstance.nodes[0].ports[0];
    port.style.fill = 'yellow';
    port.style.opacity = 1;
    port.width = 25;
    port.height = 25;
    diagramInstance.dataBind();
}

onMounted(function () {
    diagramInstance = diagram.value.ej2Instances;
});

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
