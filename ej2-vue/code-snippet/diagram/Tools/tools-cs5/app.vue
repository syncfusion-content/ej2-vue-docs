<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'
            ></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, DiagramTools } from '@syncfusion/ej2-vue-diagrams';

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "700px",
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        let drawingshape = { type: 'Basic', shape: 'Polygon' };
        //JSON to create a polygon
        let node = {
            shape: drawingshape
        };
        diagramInstance.drawingObject = node;
        //To draw an object once, activate draw once
        diagramInstance.tool = DiagramTools.DrawOnce;
        diagramInstance.dataBind();
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
