import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let nodes = [{
    id: 'node1',
    offsetX: 450,
    offsetY: 150,
    height: 100,
    width: 100
}];

let connectors = [{
    id: 'connector1',
    type: 'Orthogonal',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 200 },
}];

let handles = [
    {
      name: 'clone',
      pathData:
        'M0,3.42 L1.36,3.42 L1.36,12.39 L9.62,12.39 L9.62,13.75 L1.36,13.75 C0.97,13.75,0.65,13.62,0.39,13.36 C0.13,13.1,0,12.78,0,12.39 Z M4.13,0 L12.39,0 C12.78,0,13.1,0.13,13.36,0.39 C13.62,0.65,13.75,0.97,13.75,1.36 L13.75,9.62 C13.75,10.01,13.62,10.33,13.36,10.6 C13.1,10.87,12.78,11.01,12.39,11.01 L4.13,11.01 C3.72,11.01,3.39,10.87,3.13,10.6 C2.87,10.33,2.74,10.01,2.74,9.62 L2.74,1.36 C2.74,0.97,2.87,0.65,3.13,0.39 C3.39,0.13,3.72,0,4.13,0 Z ',
      tooltip: { content: 'Clone' },
      offset: 1,
      side: 'Bottom',
    },
    {
      name: 'delete',
      pathData:
        'M0.97,3.04 L12.78,3.04 L12.78,12.21 C12.78,12.64,12.59,13,12.2,13.3 C11.82,13.6,11.35,13.75,10.8,13.75 L2.95,13.75 C2.4,13.75,1.93,13.6,1.55,13.3 C1.16,13,0.97,12.64,0.97,12.21 Z M4.43,0 L9.32,0 L10.34,0.75 L13.75,0.75 L13.75,2.29 L0,2.29 L0,0.75 L3.41,0.75 Z ',
      tooltip: { content: 'Delete' },
      offset: 0,
      side: 'Bottom',
    },
    {
      name: 'star',
      pathData:
        'M50,5 63,37 100,37 70,60 82,92 50,75 18,92 30,60 0,37 37,37z    ',
      tooltip: { content: 'Star' },
      offset: 0,
      side: 'Top',
      disableConnectors: true,
    },
    {
      name: 'triangle',
      pathData: 'M2,8 L5,2 L8,8 L2,8, z',
      tooltip: { content: 'Triangle' },
      offset: 1,
      side: 'Top',
      disableConnectors: true,
    },
    {
      name: 'rectangle',
      pathData: 'M10,10 L90,10 L90,90 L10,90 Z',
      tooltip: { content: 'Rectangle' },
      offset: 0.5,
      side: 'Left',
      disableConnectors: true,
    },
    {
      name: 'triangle',
      pathData: 'M2,8 L5,2 L8,8 L2,8, z',
      tooltip: { content: 'Triangle' },
      offset: 1,
      side: 'Top',
      disableConnectors: true,
    },
    {
      name: 'changeConnectorType',
      pathData:
        'M6.09,0 L13.75,6.88 L6.09,13.75 L6.09,9.64 L0,9.64 L0,4.11 L6.09,4.11 Z ',
      tooltip: { content: 'Change Connector Type' },
      offset: 0.7,
      side: 'Bottom',
      disableNodes: true,
    },
    ];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :selectedItems='selectedItems' @onUserHandleMouseDown="onUserHandleMouseDown"></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors,
            //Define user handles in selectedItems property
            selectedItems: {
                userHandles: handles
            },

        }
    },

    methods: {
        onUserHandleMouseDown: function(event) {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            switch (event.element.name) {
                // To clone the selected node
                case 'clone':
                  diagramInstance.copy();
                  diagramInstance.paste();
                  break;
                case 'delete':
                  diagramInstance.remove();
                  break;
                case 'star':
                case 'rectangle':
                case 'triangle':
                  diagramInstance.selectedItems.nodes[0].shape = {
                    type: 'Basic',
                    shape: event.element.tooltip.content,
                  };
                  diagramInstance.dataBind();
                  break;
                case 'changeConnectorType':
                  diagramInstance.selectedItems.connectors[0].type =
                  diagramInstance.selectedItems.connectors[0].type === 'Orthogonal'
                      ? 'Straight'
                      : diagramInstance.selectedItems.connectors[0].type === 'Straight'
                      ? 'Bezier'
                      : 'Orthogonal';
                  diagramInstance.dataBind();
                  break;
            }
        }
    },


});