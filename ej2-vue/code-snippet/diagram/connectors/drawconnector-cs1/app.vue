<template>
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :drawingObject='drawingObject' :tool='tool'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent,DiagramTools } from '@syncfusion/ej2-vue-diagrams';
export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent
},
 data() {
    return {
        width: "100%",
        height: "350px",
        tool:DiagramTools.ContinuousDraw,
        drawingObject: {
          type: 'Orthogonal',
        }
    }
}
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
