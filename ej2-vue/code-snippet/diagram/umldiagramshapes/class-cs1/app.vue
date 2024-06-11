<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: "Patient",
    //Position of the node
    offsetX: 200,
    offsetY: 200,
    style: {
        fill: '#26A0DA',
    },
    shape: {
        type: "UmlClassifier",
        //Define class object
        classShape: {
            name: "Patient",
            //Define class attributes
            attributes: [{ name: "accepted", type: "Date" }],
            //Define class methods
            methods: [{ name: "getHistory", type: "getHistory" }]
        },
        classifier: "Class"
    }
}]

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
