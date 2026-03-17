<template>
    <div id="app">
        <ejs-button ref="zoomIn" id="zoomIn" >Zoom In</ejs-button>
        <ejs-button ref="zoomOut" id="zoomOut" >Zoom Out</ejs-button>
        <ejs-diagram ref="diagram" id="diagram" :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let nodes = [{
    offsetX: 300,
    offsetY: 300,
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
            height: "700px",
            nodes: nodes,
            rulerSettings: { showRulers: true },
            scrollSettings: { scrollLimit: 'Infinity' },
        }
    },
    mounted: function () {
      const diagramInstance = this.$refs.diagram.ej2Instances;
      const zoomIn = this.$refs.zoomIn.ej2Instances;
      const zoomOut = this.$refs.zoomOut.ej2Instances;
      zoomIn.element.onclick = () => {
        let zoomOptions = {
          type: 'ZoomIn',
          zoomFactor: 0.2,
          focusPoint: { x: 0.5, y: 0.5 },
        };
        diagramInstance.zoomTo(zoomOptions);
        diagramInstance.dataBind();
      }
      zoomOut.element.onclick = () => {
        let zoomOptions = {
          type: 'ZoomOut',
          zoomFactor: 0.2,
          focusPoint: { x: 0.5, y: 0.5 },
        };
        diagramInstance.zoomTo(zoomOptions);
        diagramInstance.dataBind();
      }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
