<template>
    <div id="app">
        <button @click="updateHeaderStyle">updateHeaderStyle</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    shape: {
        type: 'SwimLane',
        orientation: 'Horizontal',
        // customize the swimlane header
        header: {
            annotation: { content: 'SALES PROCESS FLOW CHART', },
            height: 70, style: { fontSize: 11 }, style: { fill: 'pink' },
        },
        lanes: [
            {
                id: 'stackCanvas1',
                height: 100,
            },

        ],
        phases: [
            {
                id: 'phase1', offset: 170,
                header: { annotation: { content: 'Phase' } }
            },
        ],
        phaseSize: 20,
    },
    offsetX: 300, offsetY: 200,
    height: 200,
    width: 350
}];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    },
    methods: {
        updateHeaderStyle() {
            const diagramInstance = this.$refs.diagram.ej2Instances;
            diagramInstance.nodes[0].shape.header.style.fill = 'red';
            diagramInstance.dataBind();
        }
    },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
