<template>
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :nodes='nodes' :connectionChange ='connectionChange' ></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
let nodes = [
  {
    id: 'node1',
    offsetX: 200,
    offsetY: 200,
    width: 120,
    height: 60,
    style: { fill: 'skyblue' },
  },
  {
    id: 'node2',
    offsetX: 500,
    offsetY: 200,
    width: 120,
    height: 60,
    style: { fill: 'skyblue' },
  },
];
let connectors = [
  {
    // Name of the connector
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
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
        height: "350px",
        nodes:nodes,
        connectors: connectors,
       
        connectionChange  : (args) => {
          if (args.state === 'Changed') {
            console.log('connectionChange ');
             //Customize
          }
        },
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
