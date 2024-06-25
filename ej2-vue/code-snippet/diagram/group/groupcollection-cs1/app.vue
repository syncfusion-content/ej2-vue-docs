<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'
            :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
const nodes = [
    { id: "rectangle1", offsetX: 100, offsetY: 100, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: "rectangle2", offsetX: 200, offsetY: 200, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'group', children: ['rectangle1', 'rectangle2'] },
    { id: "rectangle3", offsetX: 400, offsetY: 400, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: "rectangle4", offsetX: 500, offsetY: 500, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'group', children: ['rectangle3', 'rectangle4'], padding: { left: 10, right: 10, top: 10, bottom: 10 } },
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
            },
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        // Add collection of group nodes into the diagram
        diagramInstance.addElements(nodes);
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
