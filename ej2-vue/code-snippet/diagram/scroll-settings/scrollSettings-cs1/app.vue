

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' scrollSettings='scrollSettings'></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let diagramObj: any = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            //Updates scroll settings
            diagramInstance.scrollSettings.horizontalOffset = 200;
            diagramInstance.scrollSettings.verticalOffset = 30
            diagramInstance.dataBind();
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


