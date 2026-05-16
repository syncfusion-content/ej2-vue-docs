<template>
    <div id="app">
       <button @click="add">add</button>
      <button @click="remove">remove</button>
    <ejs-diagram ref="diagram" :width='width' :height='height' :connectors='connectors' :collectionChange='collectionChange'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
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
 const collectionChange= (args) => {
  console.log('collectionChange');
}
const width = "100%";
const height = "350px";
const  positionChange = (args) => {
          if (args.state === 'Completed') {
            console.log('positionChange');
             //Customize
          }
        }
const add = function () {
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
diagram.value.ej2Instances.add(connector)
}
const remove = function () {
 const diagramInstance = diagram.value.ej2Instances;
      let connector =
      diagramInstance.selectedItems.connectors.length > 0
        ? diagramInstance.selectedItems.connectors[0]
        : diagramInstance.connectors[0];
        diagramInstance.remove(connector);
      }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
