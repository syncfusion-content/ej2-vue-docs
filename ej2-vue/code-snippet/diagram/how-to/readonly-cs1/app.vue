

<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'>
        </ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin, DiagramConstraints} from '@syncfusion/ej2-vue-diagrams';


//Defining click event
function clickEvent(args) {
alert('click event triggered')
}

    Vue.use(DiagramPlugin);
    let addInfo  = { Designation: 'manager' };
    let nodes = [{
    //Adding custom properties
    addInfo: addInfo,
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Page editable constraints for diagram
    constraints: DiagramConstraints.Default & ~DiagramConstraints.PageEditable,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Text(label) added to the node
}]

export default {
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            click: clickEvent
        }
    },
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>



