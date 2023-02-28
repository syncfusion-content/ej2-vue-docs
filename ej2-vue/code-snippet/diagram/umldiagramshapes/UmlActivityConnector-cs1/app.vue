


<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,UmlClassifierShapeModel } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
     id: 'connector',
     type: 'Straight',
     //Define connector start and end points
     sourcePoint: { x: 100, y: 100 },
     targetPoint: { x: 200, y: 200 },
     shape: { type: 'UmlActivity', flow: 'Exception' }
}]
export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors,
        }
    }
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


