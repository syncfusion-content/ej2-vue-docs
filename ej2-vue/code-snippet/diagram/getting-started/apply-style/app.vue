<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
    </div>
  </template>
  <script>
  import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
  let nodes = [
    {
        id: "node1",
        height: 60,
        width: 100,
        offsetX: 200,
        offsetY: 100,
        style:{fill:'red',strokeColor:'green',strokeWidth:5,strokeDashArray:'2,2'},
        borderWidth:10,
        borderColor:'orange',
    }
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
            nodes: nodes,
        }
    }
  }
  </script>
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
  </style>
  