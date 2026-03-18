<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Flip the node in Horizontal Direction
    flip: 'Horizontal',
    shape: {
        type: 'Basic',
        shape: 'RightTriangle',
    },
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
}];

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
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        diagramInstance.select([diagramInstance.nodes[0]]);
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
