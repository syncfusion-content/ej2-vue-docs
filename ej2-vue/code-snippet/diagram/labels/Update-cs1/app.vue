<template>
    <div id="app">
        <ejs-button ref="removeAnnotation" id="removeAnnotation" >Remove Annotation</ejs-button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, shapeAnnotationModel } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the node
    annotations: [{
        id: 'label1',
        // Sets the text to be displayed
        content: 'Annotation'
    }]
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
        const removeAnnotation = this.$refs.removeAnnotation.ej2Instances;
        let annotation = [{
            id: 'label1',
            content: 'Annotation'
        }];
        //Method to remove labels at run time
        removeAnnotation.element.onclick = () => {
            diagramInstance.removeLabels(diagramInstance.nodes[0], annotation);
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
