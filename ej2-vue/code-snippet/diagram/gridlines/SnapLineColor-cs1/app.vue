<template>
<div id="app">
<label>SnapColor :</label>
<input type="color" value="#14AF41" @change="SnapColor($event)" />
    <ejs-diagram ref="diagram" :width='width' :height='height' :nodes='nodes'
        :snapSettings='snapSettings'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';

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
        snapSettings: snapSettings
    }
},
provide: {
    diagram: [Snapping]
},methods:{
  SnapColor:function (args){
    let diagramInstance=this.$refs.diagram.ej2Instances;
    diagramInstance.snapSettings.snapLineColor = args.target.value;
    diagramInstance.dataBind();
  },
}
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
