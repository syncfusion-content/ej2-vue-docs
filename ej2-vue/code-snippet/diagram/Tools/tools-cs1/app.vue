<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'
            :getNodeDefaults='getNodeDefaults'></ejs-diagram>
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
            getNodeDefaults: (obj) => {
                obj.borderWidth = 1;
                obj.style = {
                    fill: '#6BA5D7',
                    strokeWidth: 2,
                    strokeColor: '#6BA5D7'
                };
                return obj;
            },
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        let drawingshape = { type: 'Basic', shape: 'Rectangle' };
        let node = {
            shape: drawingshape
        };
        diagramInstance.drawingObject = node;
        //To draw an object once, activate draw once
        diagramInstance.tool = DiagramTools.ContinuousDraw;
        diagramInstance.dataBind();
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
