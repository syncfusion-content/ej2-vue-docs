<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :keyUp="keyUp"></ejs-diagram>
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
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation',
    }]
}];

let color = 'pink';

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "500px",
            nodes: nodes,
            keyUp: (args) => {
              const diagramInstance = this.$refs.diagram.ej2Instances;
              if (color === 'pink') {
                color = 'yellow';
                diagramInstance.nodes[0].style.fill = 'red';
                diagramInstance.dataBind();
              } else {
                color = 'pink';
                diagramInstance.nodes[0].style.fill = 'pink';
                diagramInstance.dataBind();
              }
            },
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
