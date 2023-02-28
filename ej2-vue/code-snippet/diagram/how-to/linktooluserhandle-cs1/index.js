
    import Vue from 'vue';
    import { DiagramPlugin, SelectorConstraints, SnapConstraints, ConnectorDrawingTool, ConnectorModel,
  Connector, Node, NodeModel} from '@syncfusion/ej2-vue-diagrams';


    Vue.use(DiagramPlugin);
    let nodes = [{
    id: "NewIdea",
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 60,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [{ content: "New idea identified" }]
  },
  {
    id: "Meeting",
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 155,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Meeting with board" }]
  },
  {
    id: "BoardDecision",
    width: 150,
    height: 110,
    offsetX: 300,
    offsetY: 280,
    shape: { type: "Flow", shape: "Decision" },
    annotations: [{ content: "Board decides \n whether to proceed" }]
  },
  {
    id: "Project",
    width: 150,
    height: 100,
    offsetX: 300,
    offsetY: 430,
    shape: { type: "Flow", shape: "Decision" },
    annotations: [{ content: "Find Project manager" }]
  },
  {
    id: "End",
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 555,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Implement and Deliver" }]
  },
  {
    id: "Decision",
    width: 250,
    height: 60,
    offsetX: 550,
    offsetY: 60,
    shape: { type: "Flow", shape: "Card" },
    annotations: [{ content: "Decision process for new software ideas" }]
  },
  {
    id: "Reject",
    width: 150,
    height: 60,
    offsetX: 550,
    offsetY: 280,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Reject" }]
  },
  {
    id: "Resources",
    width: 150,
    height: 60,
    offsetX: 550,
    offsetY: 430,
    shape: { type: "Flow", shape: "Process" },
    annotations: [{ content: "Hire new resources" }]
  }];

  //Defines the connectors collection in diagram
let connectors = [
  {
    id: "connector1",
    type: "Straight",
    sourceID: "NewIdea",
    targetID: "Meeting"
  },
  {
    id: "connector2",
    type: "Straight",
    sourceID: "Meeting",
    targetID: "BoardDecision"
  },
  {
    id: "connector3",
    type: "Straight",
    sourceID: "BoardDecision",
    targetID: "Project"
  },
  { id: "connector4", type: "Straight", sourceID: "Project", targetID: "End" },
  {
    id: "connector5",
    type: "Straight",
    sourceID: "BoardDecision",
    targetID: "Reject"
  },
  {
    id: "connector6",
    type: "Straight",
    sourceID: "Project",
    targetID: "Resources"
  }
];

//Defines the user handle collection for nodes in diagram
let handles= [
  {
    name: "clone",
    pathData:
      "M 9.19 15 L 9.19 9.29 L 0 9.29 L 0 4.94 L 9.19 4.94 L 9.19 0 L 15 7.5 z",
    visible: true,
    offset: 0.5,
    side: "Right",
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  }
];


//Enables the connector Tool for UserHandle.
function getTool(action) {
  let tool;
  let obj = document.getElementById("diagram");
  let diagramInstance = obj.ej2_instances[0];
  if (action === "clone") {
    tool = new ConnectorTool(diagramInstance.commandHandler);
  }
  return tool;
}

//Defines the connector tool used to copy Node/Connector
class ConnectorTool extends ConnectorDrawingTool {
    mouseDown(args) {
      let obj = document.getElementById("diagram");
      let diagramInstance = obj.ej2_instances[0];
      let connector = {
        type: 'Straight',       //  initialize the straight line connector
        sourceID: diagramInstance.selectedItems.nodes[0].id      // Source node id have been set
      };
      // sets the straight line connector as the drawing object.
      diagramInstance.drawingObject = connector;
      super.mouseDown(args);
      this.inAction = true;
    }
}

function selectionChange(arg) {
  let obj = document.getElementById("diagram");
  let diagram = obj.ej2_instances[0];
  if (arg.newValue[0] instanceof Connector){
    for (let handle of diagram.selectedItems.userHandles) {
              handle.visible = false;
            }
  }
  if (arg.newValue[0] instanceof Node){
    for (let handle of diagram.selectedItems.userHandles) {
              handle.visible = true;
            }
  }
}


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram ref='diagramObj' id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors':getNodeDefaults='getNodeDefaults' :selectedItems='selectedItems' :getCustomTool='getCustomTool' :snapSettings='snapSettings' :selectionChange='selectionChange'>
        </ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            selectedItems: {
        constraints: SelectorConstraints.UserHandle,
        userHandles: handles,
        },
        selectionChange: selectionChange,
        connectors: connectors,
        snapSettings: { constraints: SnapConstraints.None },
        //set Node default value
      getNodeDefaults: (node) => {
        return {
          style: { fill: "#578CA9", strokeColor: "none" },
          annotations: [{ style: { color: "white" } }]
        };
      },
        //set CustomTool
      getCustomTool: getTool
      }
    },

});