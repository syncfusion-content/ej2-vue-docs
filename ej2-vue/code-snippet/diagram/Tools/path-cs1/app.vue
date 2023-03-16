

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin ,DiagramTools,BasicShapeModel,NodeModel} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                getNodeDefaults: (obj) => {
            obj.height = 15;
            obj.width = 15;
            obj.borderWidth = 1;
            obj.style = {
                fill: '#6BA5D7',
                strokeWidth: 2,
                strokeColor: '#6BA5D7'
                };
            return obj;
            },
        }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        let node: NodeModel = {
            id: "Path",
            style: { fill: "#fbe172" },
            annotations: [{
                content: "Path"
            }],
            shape: {
                type:'Path',
                data: 'M13.560 67.524 L 21.941 41.731 L 0.000 25.790 L 27.120 25.790 L 35.501 0.000 L 43.882 25.790 L 71.000 25.790 L 49.061 41.731 L 57.441 67.524 L 35.501 51.583 z'
            } as PathModel
        };
        diagramInstance.drawingObject = node;
        //To draw an object once, activate draw once
        diagramInstance.tool = DiagramTools.DrawOnce;
        diagramInstance.dataBind();
    }
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


