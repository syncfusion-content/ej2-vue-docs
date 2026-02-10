<template>
<div id="app">
<button @click="add">add</button>
<button @click="remove">remove</button>
    <ejs-diagram ref="diagram" :width='width' :height='height' :connectors='connectors' :collectionChange='collectionChange'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
let connectors = [
{
  // Unique name for the connector
  id: 'connector1',
  sourceID: 'Start',
  sourcePoint: {
    x: 100,
    y: 100,
  },
  targetPoint: {
    x: 200,
    y: 200,
  },
}, {
  id: 'connector2',
  type: 'Straight',
  sourcePoint: {
    x: 300,
    y: 100,
  },
  targetPoint: {
    x: 400,
    y: 200,
  },
},
]
export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent
},
 data() {
    return {
        width: "100%",
        height: "450px",
        connectors: connectors,
        collectionChange: (args) => {
          console.log('collectionChange');
        },
    }
},
methods: {
  add() {
    let connector = {
      type: 'Straight',
      sourcePoint: {
        x: 50,
        y: 200,
      },
      targetPoint: {
        x: 150,
        y: 300,
      },
    };
      this.$refs.diagram.ej2Instances.add(connector);
  },
  remove() {
      // remove connector from the diagram
      const diagramInstance = this.$refs.diagram.ej2Instances;
      let connector =
      diagramInstance.selectedItems.connectors.length > 0
        ? diagramInstance.selectedItems.connectors[0]
        : diagramInstance.connectors[0];
        diagramInstance.remove(connector);
  },
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
