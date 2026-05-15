<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
  </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  id: "Patient",
  offsetX: 200,
  offsetY: 200,
  style: {
    fill: '#26A0DA',
  },
  shape: {
    type: "UmlClassifier",
    //Define enumeration object
    enumerationShape: {
      name: "AccountType",
      //set the members of enumeration
      members: [
        {
          name: "Checking Account",
        },
        {
          name: "Savings Account"
        },
        {
          name: "Credit Account"
        }
      ]
    },
    classifier: "Enumeration"
  } as UmlClassifierShapeModel
}];

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
