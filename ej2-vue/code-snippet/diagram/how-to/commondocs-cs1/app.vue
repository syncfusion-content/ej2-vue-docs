

<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :selectionChange='selectionChange' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,ISelectionChangeEventArgs } from '@syncfusion/ej2-vue-diagrams';


function selectionChange(args) {
    if (args.state === 'Changing') {
        if (args.newValue.length > 0) {
          alert("The Added custom property is:" + (args.newValue[0].addInfo).Designation);
        }
    }
}

    Vue.use(DiagramPlugin);
    let addInfo = { Designation: 'manager' };
    let nodes = [{
    //Adding custom properties
    addInfo: addInfo,
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [{ id: 'label1', content: 'Click me'}],
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
            selectionChange: selectionChange,
        }
    },
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>



