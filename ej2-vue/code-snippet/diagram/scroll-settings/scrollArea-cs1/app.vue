

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
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
    }]
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                // set the autoScrollBorder
                scrollSettings: {
                    canAutoScroll: true,
                    //Sets the scroll limit
                    scrollLimit: 'infinity',
                    //Sets the scrollable Area
                    scrollableArea: {
                        x: 0,
                        y: 0,
                        width: 500,
                        height: 500
                    }
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


