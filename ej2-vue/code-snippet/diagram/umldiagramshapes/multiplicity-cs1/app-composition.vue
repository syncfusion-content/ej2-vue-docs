<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
  </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
    id: 'connector1',
    //Define connector start and end points
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'OneToOne',
      },
    },
  },
  {
    id: 'connector2',
    //Define connector start and end points
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 400, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'ManyToOne',
        //Set source label to connector
        source: {
          optional: true,
          lowerBounds: '89',
          upperBounds: '67',
        },
        //Set target label to connector
        target: {
          optional: true,
          lowerBounds: '78',
          upperBounds: '90',
        },
      },
    },
  },
  {
    id: 'connector3',
    //Define connector start and end points
    sourcePoint: { x: 300, y: 100 },
    targetPoint: { x: 500, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'OneToMany',
        //Set source label to connector
        source: {
          optional: true,
          lowerBounds: '89',
          upperBounds: '67',
        },
        //Set target label to connector
        target: {
          optional: true,
          lowerBounds: '78',
          upperBounds: '90',
        },
      },
    },
  },
  {
    id: 'connector4',
    //Define connector start and end points
    sourcePoint: { x: 400, y: 100 },
    targetPoint: { x: 600, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'ManyToMany',
        //Set source label to connector
        source: {
          optional: true,
          lowerBounds: '89',
          upperBounds: '67',
        },
        //Set target label to connector
        target: {
          optional: true,
          lowerBounds: '78',
          upperBounds: '90',
        },
      },
    },
  }]

const width = "100%";
const height = "600px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
