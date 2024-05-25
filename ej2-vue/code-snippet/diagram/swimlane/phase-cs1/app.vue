<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    shape: {
        type: 'SwimLane',
        orientation: 'Horizontal',
        //Intialize header to swimlane
        header: {
            annotation: { content: 'ONLINE PURCHASE STATUS', style: { fill: '#111111' } },
            height: 50, style: { fontSize: 11 },
        },
        lanes: [
            {
                id: 'stackCanvas1',
                height: 100,
                header: {
                    annotation: { content: 'CUSTOMER' }, width: 50,
                    style: { fontSize: 11 }
                },
                children: [
                    {
                        id: 'node1',
                        annotations: [
                            {
                                content: 'Consumer learns \n of product',
                                style: { fontSize: 11 }
                            }
                        ],
                        margin: { left: 60, top: 30 },
                        height: 40, width: 100,
                    }, {
                        id: 'node2',
                        shape: { type: 'Flow', shape: 'Decision' },
                        annotations: [
                            {
                                content: 'Does \n Consumer want \nthe product',
                                style: { fontSize: 11 }
                            }
                        ],
                        margin: { left: 200, top: 20 },
                        height: 60, width: 120,
                    },
                ],
            },

        ],
        // Set phase to swimlane
        phases: [
            {
                id: 'phase1', offset: 120,
                header: { annotation: { content: 'Phase' } }
            }, {
                id: 'phase2', offset: 200,
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
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
