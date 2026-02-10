
import Vue from 'vue';
import { DiagramPlugin,ConnectorConstraints,NodeConstraints,Connector } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
  { id: 'node1', offsetX: 150, offsetY: 150, width: 100, height: 100, annotations: [{ content: 'node1' }] },
  { id: 'node2', offsetX: 650, offsetY: 150, width: 100, height: 100, annotations: [{ content: 'node2' }] },
  { id: 'node3', offsetX: 490, offsetY: 290, width: 100, height: 100, annotations: [{ content: 'node3' }] }
];
let connectors  = [{
  id: 'connector1',sourceID:"node1",targetID:"node2",
  style: { strokeColor: 'red', strokeWidth: 2, strokeDashArray: '3,3' },
  constraints: ConnectorConstraints.Default | ConnectorConstraints.AllowDrop
  }];

new Vue({
  el: '#app',
  template: `
 <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :nodes='nodes'
        :enableConnectorSplit='enableConnectorSplit' :getNodeDefaults='getNodeDefaults' :collectionChange='collectionChange'></ejs-diagram>
</div>
`,

  name: 'app',
  data() {
      return {
          width: "100%",
          height: "450px",
          nodes: nodes,
          connectors: connectors,
          enableConnectorSplit: true,
          getNodeDefaults: (obj) => {
              obj.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
              return obj;
          },
          collectionChange: (args) => {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
              if (args.state === 'Changed' && args.element instanceof Connector) {
                let sourceNode = diagramInstance.getObject(args.element.sourceID);
                if (sourceNode) {
                  sourceNode.inEdges.forEach((edgeId) => {
                    let initialConnector = diagramInstance.getObject(edgeId);
                    args.element.style = initialConnector.style;
                  });
                }
              }
              diagramInstance.dataBind();
            },
      }
  }

});
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
