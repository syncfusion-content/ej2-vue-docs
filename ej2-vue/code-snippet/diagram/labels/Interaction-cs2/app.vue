<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, AnnotationConstraints } from '@syncfusion/ej2-vue-diagrams';

let connectors = [
    {
        id: 'connector2',
        type: 'Orthogonal',
        sourcePoint: { x: 200, y: 200 },
        targetPoint: { x: 300, y: 300 },
        annotations: [
            {
                content: 'connector1', offset: 0.5,
                //Enables drag constraints for a connector.
                constraints: AnnotationConstraints.Interaction | AnnotationConstraints.Drag,
                //Set drag limit for a connector annotation.
                dragLimit: { left: 20, right: 20, top: 20, bottom: 20 }
            }
        ],
    }
];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "600px",
            connectors: connectors,
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
