<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
let connector = [
    { id: 'connector1', sourcePoint: { x: 100, y: 100 }, targetPoint: { x: 150, y: 150 } },
    {id: 'connector2', type: 'Orthogonal', sourcePoint: { x: 170, y: 170 }, targetPoint: { x: 200, y: 200 }},
    { id: 'connector3', type: 'Bezier', sourcePoint: { x: 320, y: 320 }, targetPoint: { x: 400, y: 400 } }
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
         // Adds connector collection to the diagram
         diagramInstance.addElements(connector)
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
