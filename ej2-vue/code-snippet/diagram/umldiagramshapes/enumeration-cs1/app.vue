<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
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
      nodes: nodes
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
