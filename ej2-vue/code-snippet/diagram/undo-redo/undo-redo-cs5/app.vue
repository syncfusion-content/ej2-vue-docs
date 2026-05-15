<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :historyChange="historyChange">
        </ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, UndoRedo } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
  id: 'Start',
  width: 140,
  height: 50,
  offsetX: 300,
  offsetY: 50,
  annotations: [
    {
      content: 'Node1',
    },
  ],
},
{
  id: 'Init',
  width: 140,
  height: 50,
  offsetX: 300,
  offsetY: 140,
  annotations: [
    {
      content: 'Node2',
    },
  ],
}]

let connectors = [
  {
    // Unique name for the connector
    id: 'connector1',
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
  },
];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "500px",
            nodes: nodes,
            connectors: connectors,
            historyChange: (args) => {
              //Triggers while interacting with diagram and performing undo-redo
              console.log(args);
            },
        }
    },
    provide: {
        diagram: [UndoRedo]
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
