<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, NodeConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: "node1",
    height: 60,
    offsetX: 300,
    offsetY: 80,
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
     tooltip: {
                content: 'Node1',
                position: 'BottomCenter',
                relativeMode: 'Object',
                animation: {
                    //Animation settings to be applied on the Tooltip, while it is being shown over the target.
                    open: {
                        //Animation effect on the Tooltip is applied during open and close actions.
                        effect: 'ZoomIn',
                        //Duration of the animation that is completed per animation cycle.
                        duration: 1000,
                        //Indicating the waiting time before animation begins.
                        delay: 0
                    },
                    //Animation settings to be applied on the Tooltip, when it is closed.
                    close: {
                        effect: 'ZoomOut',
                        duration: 500,
                        delay: 0
                    }
                }
            },
    annotations: [{
        content: "start"
    }]
}]

const width = "100%";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
