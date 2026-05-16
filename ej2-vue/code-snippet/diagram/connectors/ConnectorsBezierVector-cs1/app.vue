<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent,ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    id: 'connector2',
    
    // Defines the type of the segment
    type: 'Bezier',
    segments: [{
        type: 'Bezier',
        // Length and angle between the source point and the first control point
        vector1: {
            distance: 100,
            angle: 90
        },
        // Length and angle between the target point and the second control point
        vector2: {
            distance: 45,
            angle: 270
        }
    }],
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
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
            connectors: connectors
        }
    },
    provide: {
    diagram: [ConnectorEditing]
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
