<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'  :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
const nodes = [
    {id: 'node1', offsetX: 140, offsetY: 250,annotations: [{ content: 'node1' }] },
    { id: 'node1', offsetX: 250, offsetY: 250 ,annotations: [{ content: 'node2' }]},
    { id: 'node3', offsetX: 360, offsetY: 250 ,annotations: [{ content: 'node3' }]}
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
              getNodeDefaults: (node) => {
                node.height = 100;
                node.width = 100;
                node.style.fill = '#6BA5D7';
                node.style.strokeColor = 'white';
                return node;
            }
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2instances;
          //Add collection of nodes
          diagramInstance.addElements(nodes)
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
