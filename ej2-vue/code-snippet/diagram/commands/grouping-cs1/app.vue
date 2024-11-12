<template>
<div id="app">
<label>(CTRL +G)</label><ejs-button v-on:click="group">Group </ejs-button>
<label>(CTRL + Shift +U)</label><ejs-button v-on:click="unGroup">Un Group </ejs-button>
    <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'
        :connectors='connectors'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let nodes = [ {
  id: 'node1',
  width: 100,
  height: 70,
  offsetX: 100,
  offsetY: 100,
},
{
  id: 'node2',
  width: 100,
  height: 70,
  offsetX: 300,
  offsetY: 100,
},
{
  id: 'node3',
  width: 100,
  height: 70,
  offsetX: 200,
  offsetY: 200,
},
{
  id: 'group',
  children: ['node1', 'node2', 'node3', 'connector1'],
},
];
let connectors = [{
  id: 'connector1',
  sourceID: 'node1',
  targetID: 'node2',
}]
export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent,
    'ejs-button': ButtonComponent,
},
data() {
    return {
        width: "100%",
        height: "600px",
        nodes: nodes,
        connectors: connectors
    }
},
methods: {
  group: function () {
    var diagramInstance = this.$refs.diagram.ej2Instances;
    diagramInstance.group();
  },
  unGroup: function () {
    var diagramInstance = this.$refs.diagram.ej2Instances;
    diagramInstance.unGroup();
  }, 
}
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>