

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let node = {
        id: 'node1', width: 150, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
    };
    let node2 = {
        id: 'node2', width: 80, height: 130, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2' }]
    };
    let group = {
        id: 'group1', children: ['node1', 'node2']
    };
    let node3 = {
        id: 'node3', width: 100, height: 100, offsetX: 300, offsetY: 300, annotations: [{ content: 'Node3' }]
    };
export default {
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: [node,node2,node3,group],
        }
    },
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        //To Add child to specifc group at Runtime
        diagramInstance.addChildToGroup(group, 'node3');
        //To remove the specific children from group at runtime
        diagramInstance.removeChildFromGroup(group, 'node3');
    }
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


