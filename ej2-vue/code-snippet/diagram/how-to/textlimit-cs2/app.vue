

<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'>
        </ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'industry', offsetX: 400, offsetY: 200, style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
            annotations: [{ content: 'Node size based on the text size when the node is not assigned with a height and width property' }]
    }]

export default {
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    },
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>



