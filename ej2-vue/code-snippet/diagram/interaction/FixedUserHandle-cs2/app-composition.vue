<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' @onFixedUserHandleMouseDown="onFixedUserHandleMouseDown" ></ejs-diagram>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
    id: 'node1',
    offsetX: 300,
    offsetY: 300,
    height: 100,
    width: 100,
    style: { strokeColor: '#64Abbb', strokeWidth: 3 },
    fixedUserHandles: [
      {
        id: 'color',
        pathData:
          'M31.5,13.5 C31.5,20.95,24.44,27,15.75,27 C7.059999999999999,27,0,20.95,0,13.5 C0,6.050000000000001,7.06,0,15.75,0 C24.44,0,31.5,6.05,31.5,13.5 Z M13.12,4.5 L13.12,11.25 L5.25,11.25 L5.25,15.75 L13.12,15.75 L13.12,22.5 L18.38,22.5 L18.38,15.75 L26.25,15.75 L26.25,11.25 L18.38,11.25 L18.38,4.5 Z ',
        width: 20,
        height: 20,
        offset: { x: 1, y: 0 },
        margin: { left: 20, bottom: 10 },
        //Tooltip for fixed user handle
        tooltip: { content: 'Change stroke color' },
      },
    ],
}];

const connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 200 },
    style: { strokeColor: '#64Abbb',  strokeWidth: 3 },
    fixedUserHandles: [
      {
        id: 'stroke',
        pathData:
          'M0,13.85 L15.62,13.85 L15.62,20 L25,9.74 L15.62,0 L15.62,6.41 L0,6.41 L0,13.85 Z ',
        width: 20,
        height: 10,
        //Offset of fixed user handle
        offset: 0.5,
        //Tooltip for fixed user handle
        tooltip: { content: 'Change stroke color' },
      },
    ],
  },
];

const width = "100%";
const height = "350px";

const onFixedUserHandleMouseDown = (event) => {
     const diagramInstance = diagram.value.ej2Instances;
     const node = event.element.parentObj;
     node.style.strokeColor = node.style.strokeColor === '#64A6' ? '#64Abbb' : '#64A6';
     diagramInstance.dataBind();
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
