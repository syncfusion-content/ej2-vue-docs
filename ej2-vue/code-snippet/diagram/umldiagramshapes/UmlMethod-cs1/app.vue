


<template>
    <div id="app">
        <button @click="addMethod">addMethod</button>
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,UmlClassifierShapeModel } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'node1',
        offsetX: 150,
        offsetY: 150, 
        style: {
            fill: '#26A0DA',
        },
        shape: {
            type: 'UmlClassifier',
            classShape: {
                attributes: [
                    { name: 'accepted', type: 'Date', },
                ],
                methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
                name: 'Patient'
            },
            classifier: 'Class'
        },
    }]
export default {
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "450px",
            nodes: nodes,
        }
    },
    methods: {
        addMethod: function () {
            let diagram = this.$refs.diagramObj.ej2Instances;
            let node = diagram.nodes[0];
            let methods = {
                name: 'getHistory',
                style: { color: 'red' },
                parameters: [{ name: 'Date', style: {} }],
                type: 'History',
            };
            diagram.addChildToUmlNode(node, methods, 'Method');
        },
    },
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


