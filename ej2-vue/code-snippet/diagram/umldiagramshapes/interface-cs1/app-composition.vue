<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
  </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  id: "Patient",
  //Position of the node
  offsetX: 200,
  offsetY: 200,
  style: {
    fill: '#26A0DA',
  },
  shape: {
    type: "UmlClassifier",
    //Define interface object
    interfaceShape: {
      name: "Patient",
      //Define interface attributes
      attributes: [{ name: "owner", type: "String[*]" }],
      //Define interface methods
      methods: [
        {
          name: "deposit",
          parameters: [
            {
              name: "amount",
              type: "Dollars"
            }
          ]
        }
      ]
    },
    classifier: "Interface"
  } as UmlClassifierShapeModel
}]

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
