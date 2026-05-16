<template>
<div id="app">
<button @click="select">select</button>
<button @click="unselect">unselect</button>
    <ejs-diagram ref="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
// Name of the connector
id: "connector1",
sourcePoint: {
  x: 100,
  y: 100,
},
targetPoint: {
  x: 200,
  y: 200,
},
}
]
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
},methods: {
  select() {
    const diagramInstance = this.$refs.diagram.ej2Instances;
    diagramInstance.select([diagramInstance.connectors[0]]);
  },
  unselect() {
      // remove connector from the diagram
      this.$refs.diagram.ej2Instances.clearSelection();
  },
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
