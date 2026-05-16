<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :elementDraw="elementDraw"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, DiagramTools } from '@syncfusion/ej2-vue-diagrams';

export default {
  name: 'App',
  components: {
    'ejs-diagram': DiagramComponent,
  },
  data() {
    return {
      width: '100%',
      height: '700px',
      elementDraw: (args) => {
        if (args.state === 'Completed') {
          // Example of alerting when a rectangle is drawn
          alert('Element draw - Rectangle');
        }
      },
    };
  },
  mounted: function () {
    const diagramInstance = this.$refs.diagram.ej2Instances;
    let drawingshape = { type: 'Basic', shape: 'Rectangle' };
    let node = {
        shape: drawingshape
    };
    diagramInstance.drawingObject = node;
    //To draw an object once, activate draw once
    diagramInstance.tool = DiagramTools.ContinuousDraw;
    diagramInstance.dataBind();
}
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
