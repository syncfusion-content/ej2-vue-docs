<template>
    <div id="app">
   <label>SnapColor :</label>
    <input type="color" value="#14AF41" @change="SnapColor($event)" />
    <ejs-diagram ref="diagram" :width='width' :height='height' :nodes='nodes'
        :snapSettings='snapSettings'></ejs-diagram>
</div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
id: 'node1',
style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
width: 100,
height: 100,
offsetX: 100,
offsetY: 100,
}, {
  id: 'node2',
  width: 100,
  style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
  height: 100, 
  offsetX: 300,
  offsetY: 100,
},]
let snapSettings = {
    snapLineColor: '#14AF41',
}
const width = "100%";
const height = "350px";
provide('diagram', [Snapping]);
SnapColor = function (args){
    let diagramInstance=this.$refs.diagram.ej2Instances;
    diagramInstance.snapSettings.snapLineColor = args.target.value;
    diagramInstance.dataBind();
  }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
