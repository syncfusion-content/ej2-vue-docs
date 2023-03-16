

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
                scrollSettings: {
                    horizontalOffset: 100,
                    verticalOffset: 50
                }
            }
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


