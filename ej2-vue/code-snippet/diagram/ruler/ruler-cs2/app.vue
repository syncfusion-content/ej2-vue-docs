

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :rulerSettings='rulerSettings' ></ejs-diagram>
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
                height: "600px",
                rulerSettings: {
                    showRulers: true, horizontalRuler:{interval:8, segmentWidth:100, thickness:25, tickAlignment:"LeftOrTop"},verticalRuler:{interval:10, segmentWidth:150, thickness:35, tickAlignment:"RightOrBottom"}
                }
            }
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


