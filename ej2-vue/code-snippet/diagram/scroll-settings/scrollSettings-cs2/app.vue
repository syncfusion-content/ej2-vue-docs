

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors= 'connectors' :scrollSettings='scrollSettings' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        }
    }];
    let connectors: ConnectorModel[] = [{
        id: 'connector1', sourcePoint: { x: 300, y: 100 }, targetPoint: { x: 450, y: 200 },
        style: {
            strokeColor: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }];
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                connectors:connectors,
                scrollSettings: {
                    canAutoScroll: true,
                    scrollLimit: 'Infinity',
                },
                getNodeDefaults: (node) => {
                    node.height =  100;
                    node.width =  100;
                    node.style.fill =  '#6BA5D7';
                    node.style.strokeColor =  'white';
                    return  node;
                }
            }
        }
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


