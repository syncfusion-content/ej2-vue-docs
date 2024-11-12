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
    annotations: [{ content: 'Left Top' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Left',
        verticalAlignment: 'Top',
      },
    ],
  },
  {
    id: 'node2',
    offsetX: 250,
    offsetY: 100,
    width: 100,
    height: 100,
    annotations: [{ content: 'Left Bottom' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Left',
        verticalAlignment: 'Bottom',
      },
    ],
  },
  {
    id: 'node3',
    offsetX: 400,
    offsetY: 100,
    width: 100,
    height: 100,
    annotations: [{ content: 'Left Center' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Left',
        verticalAlignment: 'Center',
      },
    ],
  },
  {
    id: 'node4',
    offsetX: 100,
    offsetY: 250,
    width: 100,
    height: 100,
    annotations: [{ content: 'Right Top' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Right',
        verticalAlignment: 'Top',
      },
    ],
  },
  {
    id: 'node5',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    annotations: [{ content: 'Right Bottom' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Right',
        verticalAlignment: 'Bottom',
      },
    ],
  },
  {
    id: 'node6',
    offsetX: 400,
    offsetY: 250,
    width: 100,
    height: 100,
    annotations: [{ content: 'Right Center' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Right',
        verticalAlignment: 'Center',
      },
    ],
  },
  {
    id: 'node7',
    offsetX: 100,
    offsetY: 400,
    width: 100,
    height: 100,
    annotations: [{ content: 'Center Top' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Center',
        verticalAlignment: 'Top',
      },
    ],
  },
  {
    id: 'node8',
    offsetX: 250,
    offsetY: 400,
    width: 100,
    height: 100,
    annotations: [{ content: 'Center Bottom' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Center',
        verticalAlignment: 'Bottom',
      },
    ],
  },
  {
    id: 'node9',
    offsetX: 400,
    offsetY: 400,
    width: 100,
    height: 100,
    annotations: [{ content: 'Center Center' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Center',
        verticalAlignment: 'Center',
      },
    ],
  },
];

const width = "100%";
const height = "350px";


</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
