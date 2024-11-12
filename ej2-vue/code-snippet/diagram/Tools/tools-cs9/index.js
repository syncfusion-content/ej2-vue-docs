
    import Vue from 'vue';
    import { DiagramPlugin , DiagramTools} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :elementDraw="elementDraw"
    ></ejs-diagram>
  </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "700px",
            elementDraw: (args) => {
              if (args.state === 'Completed') {
                // Example of alerting when a rectangle is drawn
                alert('Element draw - Rectangle');
              }
              },
        }
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

});