<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
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
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
