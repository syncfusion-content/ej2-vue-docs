import Vue from 'vue';
import { DiagramPlugin, DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

// Register the Syncfusion DiagramPlugin
Vue.use(DiagramPlugin);

// Define the template method to generate dynamic HTML content for nodes
function template(nodeId) {
  let background = "#6BA5D7";
  let name = "button";
  if (nodeId === "node1") {
    background = "yellow";
    name = "YELLOW";
  } else {
    name = "BLUE";
  }
  return `<div style="background:${background};height:100%;width:100%;">
            <button type="button" style="width:100px"> ${name}</button>
          </div>`;
}

// Define the nodes array outside the Vue component
let nodes = [
  {
    id: "node1",
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    style: { fill: "#6BA5D7", strokeColor: "white" },
    shape: {
      type: "HTML",
      content: template("node1"), // Generate dynamic content for node1
    },
  },
  {
    id: "node2",
    offsetX: 450,
    offsetY: 250,
    width: 100,
    height: 100,
    style: { fill: "#6BA5D7", strokeColor: "white" },
    shape: {
      type: "HTML",
      content: template("node2"), // Generate dynamic content for node2
    },
  },
];

// Create the Vue instance
new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-diagram
      id="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
`,
  components: {
    "ejs-diagram": DiagramComponent, 
  },
  data() {
    return {
      width: "100%",
      height: "500px",
      nodes: nodes, 
    };
  },
 
});
