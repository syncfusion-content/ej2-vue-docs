<template>
    <div id="app">
        <button @click="updateLane">updateLane</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    shape: {
        type: 'SwimLane',
        orientation: 'Horizontal',
        //Intialize header to swimlane
        header: {
            annotation: { content: 'ONLINE PURCHASE STATUS' },
            height: 50, style: { fontSize: 11 },
        },
        lanes: [
            {
                id: 'stackCanvas1',
                height: 100,
                // customization of lane header
                header: {
                    annotation: { content: 'Online Consumer' }, width: 30,
                    style: { fontSize: 11 }, style: { fill: 'red' }
                },
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
        updateLane() {
            const diagramInstance = this.$refs.diagram.ej2Instances;
            const swimlane = diagramInstance.nodes[0];
            swimlane.shape.lanes[0].header.style.fill = 'blue';
            swimlane.shape.lanes[0].header.annotation.style.color = 'white';
            diagramInstance.dataBind();
        }
    },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
