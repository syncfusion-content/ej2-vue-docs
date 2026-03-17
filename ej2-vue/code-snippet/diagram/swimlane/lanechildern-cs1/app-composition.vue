<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    shape: {
        type: 'SwimLane',
        orientation: 'Horizontal',
        // Intialize header to swimlane
        header: {
            annotation: { content: 'ONLINE PURCHASE STATUS' },
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
                // Set the childern of lane
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
}]

const width = "100%";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
