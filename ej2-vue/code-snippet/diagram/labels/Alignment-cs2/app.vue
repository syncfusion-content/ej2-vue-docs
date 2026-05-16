<template>
    <div id="app">
        <ejs-button ref="updateAlignment" id="updateAlignment" >Update Alignment</ejs-button>
        <ejs-diagram ref="diagram" id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
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
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation',
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
            height: "500px",
            nodes: nodes
        }
    },
    mounted: function () {
      const diagramInstance = this.$refs.diagram.ej2Instances;
      const updateAlignment = this.$refs.updateAlignment.ej2Instances;
      //Updates alignment
      updateAlignment.element.onclick = () => {
        diagramInstance.nodes[0].annotations[0].horizontalAlignment = 'Right';
        diagramInstance.nodes[0].annotations[0].verticalAlignment = 'Bottom';
        diagramInstance.dataBind();
      }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
