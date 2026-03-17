<template>
<div id="app">
    <button @click="clone">clone</button>
    <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
// Name of the connector
id: "connector1",

// Sets source and target points
sourcePoint: {
    x: 100,
    y: 100
},
targetPoint: {
    x: 200,
    y: 200
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
        connectors: connectors
    }
},
methods: {
  clone  : function () {
    let diagram =  this.$refs.diagram.ej2Instances;
    diagram.copy();
    diagram.paste();

  }
}
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
