

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,AnnotationConstraints } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [
         {
            id: 'connector2',
            type: 'Orthogonal',
            sourcePoint: { x: 300, y: 300 },
            targetPoint: { x: 400, y: 400 },
            annotations: [
              {
                content: 'connector1', offset:0.5,
                //Enables drag constraints for a connector.
                constraints:AnnotationConstraints.Interaction | AnnotationConstraints.Drag,
                //Set drag limit for a connector annotation.
                dragLimit:{left:20,right:20,top:20,bottom:20}
              }
           ],
         }
     ]
    export default {
        name: 'app'
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
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


