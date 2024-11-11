<template>
    <div id="app">
        <ejs-button ref="addAnnotation" id="addAnnotation" >Add Annotation</ejs-button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
}];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent,
        'ejs-button': ButtonComponent,
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        const addAnnotation = this.$refs.addAnnotation.ej2Instances;
        let annotation = [{
            id: 'label1',
            content: 'Annotation'
        }]
        //Method to add labels at run time
        addAnnotation.element.onclick = () => {
            diagramInstance.addLabels(diagramInstance.nodes[0], annotation);
            diagramInstance.dataBind();
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
