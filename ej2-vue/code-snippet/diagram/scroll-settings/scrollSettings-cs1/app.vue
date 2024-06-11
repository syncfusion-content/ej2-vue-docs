<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' scrollSettings='scrollSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
        data() {
        return {
            width: "100%",
            height: "350px"
        }
    },
        mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        //Updates scroll settings
        diagramInstance.scrollSettings.horizontalOffset = 200;
        diagramInstance.scrollSettings.verticalOffset = 30
        diagramInstance.dataBind();
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
