<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' scrollSettings='scrollSettings'></ejs-diagram>
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
            height: "350px",
            scrollSettings: {
                horizontalOffset: 100,
                verticalOffset: 50
            }
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
