<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
const nodes = [
    { id: 'node16', offsetX: 35, offsetY: 260 },
    { id: 'node17', offsetX: 140, offsetY: 260 },
    { id: 'node18', offsetX: 240, offsetY: 260 }
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
        }
    },
     mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
          //Add collection of nodes
        diagramInstance.addElements(nodes)
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
