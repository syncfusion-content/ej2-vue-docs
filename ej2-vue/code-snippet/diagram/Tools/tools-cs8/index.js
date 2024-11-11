
    import Vue from 'vue';
    import { DiagramPlugin ,DiagramTools,ConnectorModel} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
        {
          id: 'Start',
          width: 140,
          height: 50,
          offsetX: 100,
          offsetY: 100,
          annotations: [
            {
              id: 'label1',
              content: 'Start',
            },
          ],
          shape: {
            type: 'Flow',
            shape: 'Terminator',
          },
        },
        {
          id: 'Init',
          width: 140,
          height: 50,
          offsetX: 300,
          offsetY: 300,
          annotations: [
            {
              id: 'label2',
              content: 'End',
            },
          ],
          shape: {
            type: 'Flow',
            shape: 'Process',
          },
        },
      ];
      
      let connectors = [{
        // Name of the connector
        id: 'connector1',
        style: {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
          strokeWidth: 2,
        },
        targetDecorator: {
          style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7',
          },
        },
        // ID of the source and target nodes
        sourceID: 'Start',
        targetID: 'Init',
        type: 'Orthogonal',
      }];
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes="nodes"
      :connectors="connectors"></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "700px",
                nodes: nodes, 
                connectors: connectors
            }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        diagramInstance.tool = DiagramTools.ZoomPan;
        diagramInstance.dataBind();
    }

});