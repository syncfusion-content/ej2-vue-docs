<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :pageSettings='pageSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, PageSettings } from '@syncfusion/ej2-vue-diagrams';

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "500px",
            pageSettings: {
                orientation: 'Landscape',
                showPageBreaks: true,
                // Defines the background Image source
                background: {
                    source: 'https://www.w3schools.com/images/w3schools_green.jpg',
                    // Defines the scale values for the background image
                    scale: 'Slice',
                    // Defines the align values for the background image
                    align: 'XMinYMin'
                },
                width: 300,
                height: 300,
            }
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
