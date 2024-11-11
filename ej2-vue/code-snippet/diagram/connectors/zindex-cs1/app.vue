<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'
          ></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    id: 'connector1',
    // Defines the z-index value for the connector
    zIndex: 2,
    type: 'Straight',
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 300,
        y: 200
    }
},
{
    id: 'connector2',
    type: 'Straight',
    // Defines the z-index value for the connector
    zIndex: 1,
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}
]
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors, 
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
