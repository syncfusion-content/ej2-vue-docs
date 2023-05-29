
import Vue from "vue";
import {DiagramPlugin, NodeConstraints} from "@syncfusion/ej2-vue-diagrams";
Vue.use(DiagramPlugin);
let diagram;
let nodes = [];
let port1 = { id: "port1", offset: { x: 0.5, y: 1 } };
let port = { id: "port", offset: { x: 1, y: 0.5 } };
nodes.push(createNode("node1", 80, 50, "Terminator", "Begin", 100, 35));
nodes.push(
  createNode("node2", 250, 50, "Process", "Specify Collection", 120, 25, [port])
);
nodes.push(
  createNode("node3", 450, 50, "Decision", "Details Required?", 100, 50, [
    port1
  ])
);
nodes.push(createNode("node4", 600, 50, "Process", "Specify Details", 90, 25));
nodes.push(
  createNode("node5", 450, 150, "Process", "Design Collection", 100, 25, [port])
);
nodes.push(
  createNode("node6", 450, 250, "Process", "Cluster of events", 100, 25)
);
nodes.push(
  createNode("node7", 450, 350, "Process", "Record and analyze Results", 100, 25)
);
nodes.push(
  createNode("node8", 600, 250, "Process", "comply Transaction", 100, 25, [
    port
  ])
);
nodes.push(createNode("node9", 600, 350, "Terminator", "End", 100, 35));
nodes.push(createNode("node10", 350,10, "Text", "Select a node to find the inEdges of the selected node",300,35));

let connectors = [];
connectors.push(createConnector("connector1", "node1", "node2", ""));
connectors.push(createConnector("connector2", "node2", "node3", ""));
connectors.push(createConnector("connector3", "node3", "node4", "Yes"));
connectors.push(createConnector("connector4", "node3", "node5", "No"));
connectors.push(createConnector("connector5", "node5", "node6", ""));
connectors.push(createConnector("connector6", "node6", "node7", ""));
connectors.push(createConnector("connector7", "node8", "node6", ""));
connectors.push(createConnector("connector8", "node7", "node9", ""));
connectors.push(
  createConnector("connector10", "node4", "node5", "", "", "", "port",  220 ));

function createNode(name, offsetX, offsetY, shape, content, width, height, ports) {
  // update node properties
  let node = {};
  node.id = name;
  node.offsetX = offsetX;
  if(width){
    node.width = width
  }
  else
  node.height = 50;
  if(height){
    node.height = height;
  }
  else
  node.width = 150;
  node.offsetY = offsetY;
  let annotation = {};
  annotation.content = content;
  node.annotations = [annotation];
  node.shape = { type: "Flow", shape: shape };
  node.style = { fill: "#FBF6E1", strokeColor: "#E6C979", strokeWidth: 2 };
  if (ports) {
    node.ports = ports;
  }
  if(node.id === "node10"){
    node.constraints = NodeConstraints.Default & ~NodeConstraints.Select;
    node.shape= { type: "Text" };
  }

  return node;
}

function createConnector(name, source, target, content, type, direction, targetPort, length) {
  // update connector properties
  let connector = {};
  connector.id = name;
  connector.sourceID = source;
  connector.targetID = target;
  connector.style = { strokeWidth: 2 };
  let annotation = {};
  annotation.content = content;
  annotation.style = { fill: "white" };
  connector.annotations = [annotation];
  if (targetPort) {
    connector.targetPortId = targetPort;
  }
  let segment = {};
  if (type) {
    connector.type = type;
    segment.direction = direction;
    segment.type = type;
    segment.length = length;
    connector.segments = [segment];
  }
  return connector;
}

let highLightedObjects = [];
function NodeReachable() {
  diagram = diagram = this.$refs.diagramObj.ej2Instances;
  if (diagram.selectedItems.nodes.length) {
    let connectors = diagram.selectedItems.nodes[0].outEdges;
    let nodeList = foundNode(connectors, []);
    for (let i = 0; i < nodeList.length; i++) {
      let ind = diagram.connectors.indexOf(diagram.nameTable[nodeList[i]]);
      highLightedObjects.push(nodeList[i]);
      diagram.connectors[ind].style.strokeColor = "red";
      diagram.connectors[ind].targetDecorator.style.strokeColor = "red";
      diagram.connectors[ind].targetDecorator.style.fill = "red";
      diagram.dataBind();
    }
  }
}

function foundNode(list, nodeList) {
  diagram = diagram = this.$refs.diagramObj.ej2Instances;
  for (let i = 0; i < list.length; i++) {
    let connector = diagram.nameTable[list[i]];
    if (nodeList.indexOf(connector.id) > -1) {
      break;
    }
    if (
      !connector.annotations[0] ||
      (connector.annotations[0] && connector.annotations[0].content !== "No")
    ) {
      nodeList.push(connector.id);
    }
    if (diagram.nameTable[connector.targetID].outEdges.length) {
      if (list.indexOf(connector.targetID) === -1) {
        foundNode(diagram.nameTable[connector.targetID].outEdges, nodeList);
      }
    }
  }
  return nodeList;
}

function Unhighlight() {
  let obj = document.getElementById("diagram");
  diagram = obj.ej2_instances[0];
  for (let i = highLightedObjects.length - 1; i >= 0; i--) {
    if (diagram.nameTable[highLightedObjects[i]]) {
      let ind = diagram.nodes.indexOf(
        diagram.nameTable[highLightedObjects[i]]
      );
      diagram.nodes[ind].style.strokeColor = "#E6C979";
      diagram.dataBind();
    } else {
      let ind = diagram.connectors.indexOf(
        diagram.nameTable[highLightedObjects[i]]
      );
      diagram.connectors[ind].style.strokeColor = "black";
      diagram.connectors[ind].targetDecorator.style.strokeColor = "black";
      diagram.connectors[ind].targetDecorator.style.fill = "black";
      diagram.dataBind();
    }
  }
  highLightedObjects = [];
}

function selectionChange(arg) {
  NodeReachable();
  if (arg.state == "Changing") {
    Unhighlight();
    NodeReachable();
  }
}






new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram style="display:block" ref="diagramObj" id="diagram" :width="width" :height="height" :nodes="nodes" :connectors="connectors" :selectionChange="selectionChange"></ejs-diagram>
    </div>
`,

    name: 'app',
  data() {
    return {
      width: "100%",
      height: "645px",
      nodes: nodes,
      connectors: connectors,
      selectionChange: selectionChange,
    }
  },

});