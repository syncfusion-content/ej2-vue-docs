<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :tooltip='tooltip'
            :constraints='constraints'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: "node1",
    height: 60,
    offsetX: 300,
    offsetY: 80,
    annotations: [{
        content: "start"
    }]
}]

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
            nodes: nodes,
            //Defines mouse over tooltip for a node
            tooltip: {
                content: 'Node1',
                //Sets the alignment properties
                position: 'BottomRight',
                //Sets to show tooltip around the element
                relativeMode: 'Object',
            },
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
