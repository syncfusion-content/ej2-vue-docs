<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :rulerSettings='rulerSettings'
            :scrollSettings='scrollSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'Start',
    width: 100, height: 100,
    offsetX: 250, offsetY: 250,
}];

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
            rulerSettings: { showRulers: true },
            // set the autoScrollBorder
            scrollSettings: {
                canAutoScroll: true,
                scrollLimit: 'Infinity',
                //Sets the scroll padding
                padding: { left: 100, top: 100 }
            },
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
