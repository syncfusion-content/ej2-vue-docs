<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
  id: "connector",
  //Define connector start and end points
  sourcePoint: { x: 100, y: 100 },
  targetPoint: { x: 300, y: 300 },
  type: "Straight",
  shape: {
    type: "UmlClassifier",
    relationship: "Dependency",
    multiplicity: {
      //Set multiplicity type
      type: "OneToMany",
      //Set source label to connector
      source: {
        optional: true,
        lowerBounds: 89,
        upperBounds: 67
      },
      //Set target label to connector
      target: {
        optional: true,
        lowerBounds: 78,
        upperBounds: 90
      }
    }
  }
}]

export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent
  },
  data() {
    return {
      width: "100%",
      height: "350px",
      connectors: connectors
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
