<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, PortVisibility } from '@syncfusion/ej2-vue-diagrams';


let nodes = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    // Initialize port collection
    ports: [{
        id: 'port1',
        offset: {
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    }]
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

}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
